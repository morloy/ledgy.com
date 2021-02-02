import Img from 'gatsby-image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faMoneyBillAlt,
  faUserFriends,
  faIndustry,
  faSeedling,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { LongText } from '../LongText';

const getCompanySummaries = (company: Company): [IconDefinition, string, string][] => [
  [faClock, 'Founded year', `Founded in ${company.yearFounded}`],
  [faMoneyBillAlt, 'Funding', company.funding ? `${company.funding} in Funding` : ''],
  [faUserFriends, 'Employees count', `${company.employeeCount} Employees`],
  [faIndustry, 'Sector', company.sector],
  [faSeedling, 'Stage', company.stage],
];

export const CompanySummary = ({ company, prefix }: { company: Company; prefix: string }) => {
  const { contactName, logo, contactTitle, mainQuote } = company;
  const { childImageSharp } = logo.localFile || {};
  return (
    <div className="company-summary rounded-md bg-white sticky-top p-2 p-sm-4 p-md-2 p-lg-4">
      {!!childImageSharp && (
        <Img
          className="company-summary-logo font-weight-light fit-cover mx-auto my-4"
          {...childImageSharp}
        />
      )}
      <div className="container">
        <LongText
          content={mainQuote}
          isMarkdown={false}
          className="company-summary-quote mt-3 mb-0 text-left"
          prefix={prefix}
        />
        <div className="company-summary-contact mb-2">
          <div className="row mx-auto">
            <strong>{contactName}</strong>
          </div>
          <div className="row mx-auto">{contactTitle}</div>
        </div>
        {getCompanySummaries(company).map(
          ([icon, iconTitle, description]) =>
            description && (
              <div key={iconTitle} className="row mx-auto py-3">
                <FontAwesomeIcon fixedWidth size="lg" icon={icon} className="mr-4" />
                {description}
              </div>
            )
        )}
      </div>
    </div>
  );
};
