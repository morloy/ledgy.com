import React from 'react';
import { Trans } from '@lingui/macro';
import sampleSize from 'lodash/sampleSize';

import { CustomerStoryCard } from './CustomerStoryCard';

export const OtherCustomerStories = ({
  customerStories,
  prefix,
}: {
  customerStories: CustomerStory[];
  prefix: string;
}) => {
  if (customerStories.length === 0) return null;
  return (
    <>
      <h4 className="mb-5 mt-3 text-center">
        <Trans>More Stories from Ledgy Users</Trans>
      </h4>
      <div className="row align-items-center justify-content-center mb-4">
        {sampleSize(customerStories, 3).map((customerStory) => (
          <div key={customerStory.id} className="col-md-4 col-lg-3">
            <CustomerStoryCard customerStory={customerStory} prefix={prefix} />
          </div>
        ))}
      </div>
      <div className="row m-0 w-100 justify-content-center align-items-center">
        <a
          className="btn btn-xl btn-round btn-primary align-self-center"
          href={`${prefix}/customer-stories`}
        >
          View all
        </a>
      </div>
    </>
  );
};
