import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { DynamicTrans } from './DynamicTrans';

export const ContentWithChecklist = ({
  header,
  description,
  linkText,
  linkUrl,
  checklist,
}: ContentWithChecklistProps) => {
  return (
    <section className="py-4 py-lg-7">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-5">
            <div className="d-flex flex-column">
              <h2 className="mb-4">
                <DynamicTrans>{header}</DynamicTrans>
              </h2>
              <p>
                <DynamicTrans>{description}</DynamicTrans>
              </p>
              <a href={linkUrl}>
                <DynamicTrans>{linkText}</DynamicTrans>
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="border-left border-pale-energetic-blue ml-4">
              <ul className="pl-6">
                {checklist.map((point) => (
                  <li key={point} className="media mb-3 d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-pale-energetic-blue mr-3 mt-1"
                      size="lg"
                    />
                    <DynamicTrans>{point}</DynamicTrans>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
