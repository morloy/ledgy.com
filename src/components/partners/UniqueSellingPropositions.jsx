// @flow

import React from 'react';
import { Trans } from "@lingui/macro";
import { faCompass, faChartLine, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { ReadMore } from '../ReadMore';

const readMoreWrapperClasses =
  'col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-4 mb-md-6 my-lg-4';
const ulClasses = 'width-fit-content text-left pb-0 mb-0 mx-auto';

export const UniqueSellingPropositions = () => (
  <div className="partner-usp container pt-6 pb-4">
    <h5 className="mt-6 text-center">
      <Trans>The Smoothest Experience for Startups and Lawyers</Trans>
    </h5>
    <div className="row gap-y text-center my-5">
      <div className={readMoreWrapperClasses}>
        <ReadMore
          icon={faCompass}
          title={<Trans>Single source of truth</Trans>}
          subtitle={
            <ul className={ulClasses}>
              <li>
                <Trans>Always up-to-date cap table</Trans>
              </li>
              <li>
                <Trans>Track change history</Trans>
              </li>
              <li>
                <Trans>Report to investors</Trans>
              </li>
            </ul>
          }
        />
      </div>

      <div className={readMoreWrapperClasses}>
        <ReadMore
          icon={faChartLine}
          title={<Trans>Powerful modeling insights</Trans>}
          subtitle={
            <ul className={ulClasses}>
              <li>
                <Trans>Flexible and accurate fundraising round modeling</Trans>
              </li>
              <li>
                <Trans>Waterfall and breakpoint analysis</Trans>
              </li>
            </ul>
          }
        />
      </div>

      <div className={readMoreWrapperClasses}>
        <ReadMore
          icon={faDollarSign}
          title={<Trans>Faster due diligence</Trans>}
          subtitle={
            <ul className={ulClasses}>
              <li>
                <Trans>Intuitive and searchable history</Trans>
              </li>
              <li>
                <Trans>Legal documents organized by transactions</Trans>
              </li>
            </ul>
          }
        />
      </div>
    </div>
  </div>
);
