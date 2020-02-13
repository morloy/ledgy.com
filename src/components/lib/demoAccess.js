// @flow

import {
  demoUrl,
  isValidEmail,
  SMALL_COMPANY_SIZES,
  FORM_STATES,
  isFieldMissing,
  track
} from '../../helpers';

const { ERROR, INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATES;

export type DemoFormStatus =
  | 'idle'
  | 'loading'
  | 'invalid-email'
  | 'invalid-fields'
  | 'error'
  | 'submitted';

type State = {|
  companyName: string,
  companySize: string,
  email: string,
  name: string
|};

export const isSmallCompany = (companySize: string) => SMALL_COMPANY_SIZES.includes(companySize);

const redirectToDemo = () => {
  if (window) {
    window.location = demoUrl;
  }
};

const HUBSPOTUTK = 'hubspotutk=';
const getHubspotUserToken = (): string =>
  (document.cookie.split('; ').find(v => v.startsWith(HUBSPOTUTK)) || '').slice(HUBSPOTUTK.length);

const encodeBody = data =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() }
  });

const fetchHubspot = ({ name, email, companyName, companySize }: State) =>
  fetch('/getDemo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: encodeBody({ name, email, company: companyName, companysize: companySize })
  });

export const handleDemoAccessSubmit = async ({
  event,
  state,
  setFormStatus,
  setDemoRequested,
  toggle
}: {|
  event: SyntheticInputEvent<HTMLInputElement>,
  state: State,
  setFormStatus: DemoFormStatus => void,
  setDemoRequested: boolean => void,
  toggle: () => void
|}) => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { email, companySize } = state;

  console.log(isFieldMissing({ email, companySize }));
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
  track('submitDemoRequest');
  setFormStatus(SUBMITTED);
  if (!isSmallCompany(companySize)) {
    setDemoRequested(true);
    return;
  }
  toggle();
  // redirectToDemo();
};
