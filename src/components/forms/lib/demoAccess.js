// @flow

import {
  demoUrl,
  scheduleDemoUrl,
  isValidEmail,
  SMALL_COMPANY_SIZES,
  FORM_STATUSES,
  isFieldMissing,
  track,
} from '../../../helpers';

const { ERROR, INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATUSES;

type State = {|
  companySize: string,
  email: string,
|};

export const isSmallCompany = (companySize: string) => SMALL_COMPANY_SIZES.includes(companySize);

const redirectToDemo = () => {
  if (window) {
    window.location = demoUrl;
  }
};

const redirectToScheduler = () => {
  if (window) {
    window.location = scheduleDemoUrl;
  }
};

const HUBSPOTUTK = 'hubspotutk=';
const getHubspotUserToken = (): string =>
  (document.cookie.split('; ').find((v) => v.startsWith(HUBSPOTUTK)) || '').slice(
    HUBSPOTUTK.length
  );

const encodeBody = (data) =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() },
  });

const fetchHubspot = ({ email, companySize }: State) =>
  fetch('/getDemo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: encodeBody({ email, companysize: companySize }),
  });

export const handleDemoAccessSubmit = async ({
  event,
  state,
  setFormStatus,
}: {|
  event: SyntheticInputEvent<HTMLInputElement>,
  state: State,
  setFormStatus: (FormStatus) => void,
|}) => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { email, companySize } = state;

  if (isFieldMissing({ email, companySize })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }
  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  const response = await fetchHubspot(state);
  if (response.status !== 200) {
    setFormStatus(ERROR);
    return;
  }
  track('getDemo.submit');

  if (!isSmallCompany(companySize)) {
    track('identify.martina');
    redirectToScheduler();
    setFormStatus(SUBMITTED);
    return;
  }
  redirectToDemo();
  setFormStatus(SUBMITTED);
};
