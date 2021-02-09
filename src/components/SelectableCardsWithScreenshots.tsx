import React, { useEffect, useRef, useState } from 'react';
import Img from 'gatsby-image';

import { DynamicTrans } from './DynamicTrans';
import { Section } from './Section';

const SelectableCard = ({
  header,
  description,
  index,
  activeIndex,
  setActiveIndex,
  setHeight,
}: {
  header: string;
  description: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  setHeight: (i: number) => void;
}) => {
  const ref = useRef(null);
  const isActive = activeIndex === index;
  const backgroundColor = isActive ? 'bg-lightest' : 'bg-transparent';

  const observer = new ResizeObserver((entries) => {
    entries.forEach((v) => {
      setHeight(v.target.clientHeight);
    });
  });

  useEffect(() => {
    const card = ref.current;
    if (card) observer.observe(card);
  }, [activeIndex]);

  return (
    <div
      ref={ref}
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
  const [height, setHeight] = useState(0);
  const transform = `translateY(${100 * activeIndex}%)`;

  return (
    <Section>
      <h2 className="mb-5 text-center">
        <DynamicTrans>{title}</DynamicTrans>
      </h2>
      <div className="row">
        <div className="col-lg-8 pr-lg-0">
          {content.map((v, i) => {
            const { childImageSharp } = v.screenshot.localFile || {};
            const isActive = activeIndex === i;
            return (
              <div key={`img-${v.header}`} className={`screenshot ${isActive ? '' : 'd-none'}`}>
                {!!childImageSharp && <Img {...childImageSharp} />}
              </div>
            );
          })}
        </div>
        <div className="col-lg-4 pl-lg-0">
          <div className="fluid-border-right h-100">
            <span style={{ height: `${height}px`, transform }} />
            <div className="d-flex flex-column h-100">
              {content.map((v, i) => (
                <SelectableCard
                  {...v}
                  key={v.header}
                  index={i}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  setHeight={setHeight}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
