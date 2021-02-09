import React, { MutableRefObject, useRef, useState } from 'react';
import Img from 'gatsby-image';

import { DynamicTrans } from './DynamicTrans';
import { Section } from './Section';

const SelectableCard = ({
  header,
  description,
  index,
  activeIndex,
  setActiveIndex,
}: {
  header: string;
  description: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) => {
  const isActive = activeIndex === index;
  const backgroundColor = isActive ? 'bg-light' : 'bg-transparent';
  return (
    <div
      onClick={() => setActiveIndex(index)}
      className={`selectable-card flex-1 d-flex flex-column justify-content-center p-4 ${backgroundColor}`}
    >
      <h5>
        <DynamicTrans>{header}</DynamicTrans>
      </h5>
      <p className="m-0">
        <DynamicTrans>{description}</DynamicTrans>
      </p>
    </div>
  );
};

export const SelectableCardsWithScreenshots = ({
  title,
  content,
}: SelectableCardsWithScreenshotsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef(null);
  const cardCount = content.length;
  const defaultHeight = 150;
  const { current } = (cardsRef as MutableRefObject<null | HTMLElement>) || {};
  const cardHeight = current ? current.offsetHeight / cardCount : defaultHeight;
  const transform = `translateY(${100 * activeIndex}%)`;

  return (
    <Section>
      <h2>
        <DynamicTrans>{title}</DynamicTrans>
      </h2>
      <div className="row">
        <div className="col-lg-8 pr-lg-0">
          {content.map((v, i) => {
            const { childImageSharp } = v.screenshot.localFile || {};
            const isActive = activeIndex === i;
            return (
              <div key={`img-${v.header}`} className={isActive ? '' : 'd-none'}>
                {!!childImageSharp && <Img {...childImageSharp} />}
              </div>
            );
          })}
        </div>
        <div className="col-lg-4 pl-lg-0">
          <div className="fluid-border-right h-100">
            <span style={{ height: `${cardHeight}px`, transform }} />
            <div ref={cardsRef} className="d-flex flex-column h-100">
              {content.map((v, i) => (
                <SelectableCard
                  key={v.header}
                  {...v}
                  index={i}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
