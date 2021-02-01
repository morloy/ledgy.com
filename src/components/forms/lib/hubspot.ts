import { ParsedFormValues } from './formTypes';

const COMPANY_FORM_ID = 'b360c926-ed24-473a-8418-ee1050ddbd06';
const INVESTOR_FORM_ID = 'fcc4153b-79ea-49a1-9672-eb888d210355';
const HUBSPOTUTK = 'hubspotutk=';

const getHubspotUserToken = (): string =>
  (document.cookie.split('; ').find((v) => v.startsWith(HUBSPOTUTK)) || '').slice(
    HUBSPOTUTK.length
  );

declare type EncodeBodyData = {
  demorequestdate: string;
  pipelinevalue: number;
  email: string;
  numberofemployees?: number;
  numberofinvestments?: number;
};

const encodeBody = (data: EncodeBodyData) =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() },
  });

const padDate = (number: number): string => String(number).padStart(2, '0');

const getHubSpotDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${padDate(month)}-${padDate(day)}`;
};

export const submitToHubspot = ({ isCompany, email, size, value }: ParsedFormValues) => {
  const formId = isCompany ? COMPANY_FORM_ID : INVESTOR_FORM_ID;
  const body = encodeBody({
    ...(isCompany ? { numberofemployees: size } : { numberofinvestments: size }),
    demorequestdate: getHubSpotDate(new Date()),
    pipelinevalue: value,
    email,
  });
  return fetch(`/submit/6881367/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
};
