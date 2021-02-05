import React, { MutableRefObject, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from 'react-visibility-sensor';

import { DynamicTrans } from './DynamicTrans';

const handleScrollBehavior = (
  ref: MutableRefObject<HTMLElement | null>,
  setActiveIndex: (arg: number) => void,
  indexCount: number
) => (isVisible: boolean) => {
  if (!isVisible) {
    window.onscroll = () => null;
    return;
  }
  window.onscroll = () => {
    const { current } = ref || {};
    if (!current) return;
    const bounding = current.getBoundingClientRect();
    if (!bounding) return;
    const positionReference = window.innerHeight - bounding.bottom;
    const interval = window.innerHeight / indexCount;
    const index = Math.max(0, Math.round(positionReference / interval));
    setActiveIndex(Math.min(index, indexCount - 1));
  };
};

export const ContentWithChecklist = ({
  header,
  description,
  linkText,
  linkUrl,
  checklist,
}: ContentWithChecklistProps) => {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const indexCount = checklist.length;

  return (
    <VisibilitySensor
      onChange={handleScrollBehavior(ref, setActiveIndex, indexCount)}
      partialVisibility
      scrollCheck
      intervalCheck
    >
      <section ref={ref} id="content-with-checklist" className="py-4 py-lg-7">
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
                  {checklist.map((point, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <li key={point} className="media mb-3 d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={`text-${
                            isActive ? 'energetic-blue' : 'pale-energetic-blue'
                          } mr-3 mt-1`}
                          size="lg"
                        />
                        <DynamicTrans>{point}</DynamicTrans>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VisibilitySensor>
  );
};
