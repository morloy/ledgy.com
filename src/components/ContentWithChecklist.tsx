import React, { MutableRefObject, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from 'react-visibility-sensor';

import { DynamicTrans } from './DynamicTrans';

const handleScrollBehavior = (
  sectionRef: MutableRefObject<HTMLElement | null>,
  setActiveIndex: (arg: number) => void,
  listCount: number
) => (isVisible: boolean) => {
  if (!isVisible) {
    window.onscroll = () => null;
    return;
  }
  window.onscroll = () => {
    const { current } = sectionRef || {};
    if (!current) return;
    const bounding = current.getBoundingClientRect();
    if (!bounding) return;
    const positionReference = window.innerHeight - bounding.bottom;
    const interval = window.innerHeight / listCount;
    const index = Math.max(0, Math.round(positionReference / interval) + 1);
    setActiveIndex(Math.min(index, listCount - 1));
  };
};

export const ContentWithChecklist = ({
  header,
  description,
  linkText,
  linkUrl,
  checklist,
}: ContentWithChecklistProps) => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const listCount = checklist.length;
  const liHeight = '50px';
  const transform = `translateX(-2px) translateY(${100 * activeIndex}%)`;

  return (
    <VisibilitySensor
      onChange={handleScrollBehavior(sectionRef, setActiveIndex, listCount)}
      partialVisibility
      scrollCheck
      intervalCheck
    >
      <section ref={sectionRef} className="py-4 py-lg-7">
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex flex-column justify-content-center h-100">
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
            <div className="col-md-6">
              <div className="follow-along-line ml-4 d-flex">
                <span style={{ height: liHeight, transform }} />
                <ul className="pl-4 pl-md-6 mb-0">
                  {checklist.map((point, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <li
                        key={point}
                        className="media d-flex align-items-center"
                        style={{ height: liHeight }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={`icon ${isActive ? 'active' : ''} mr-3 mt-1`}
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
