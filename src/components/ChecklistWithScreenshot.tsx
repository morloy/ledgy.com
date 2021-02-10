import React from 'react';
import Img from 'gatsby-image';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DynamicTrans } from './DynamicTrans';
import { Section } from './Section';

export const ChecklistWithScreenshot = ({
  header,
  description,
  checklists,
  image,
}: checklistWithScreenshotProps) => {
  const { childImageSharp } = image.localFile || {};
  const checklistTexts = checklists.map((v) => v.checklistText);

  return (
    <Section>
      <h2 className="mb-5 text-left">
        <DynamicTrans>{header}</DynamicTrans>
      </h2>
      <div className="row">
        <div className="col-lg-4 pr-4 d-flex flex-column justify-content-center">
          <p className="text-deep-blue mb-4">
            <DynamicTrans>{description}</DynamicTrans>
          </p>
          <ul className="my-2 pl-0">
            {checklistTexts.map((checklistText) => {
              return (
                <li key={checklistText} className="media d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`icon mr-3 mt-1 text-light-energetic-blue`}
                    size="lg"
                  />
                  <p className="text-deep-blue">
                    <DynamicTrans>{checklistText}</DynamicTrans>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-lg-8 pl-lg-0">
          <div className={`screenshot`}>{!!childImageSharp && <Img {...childImageSharp} />}</div>
        </div>
      </div>
    </Section>
  );
};
