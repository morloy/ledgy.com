import React from 'react';
import { DynamicTrans } from './DynamicTrans';
import { Icon } from './Icon';
import { Section } from './Section';

const FeatureGridCard = ({
  featureGridSection,
}: {
  featureGridSection: FeatureGridSectionProps;
}) => {
  const { title, description, icon } = featureGridSection;
  return (
    <div className="col-12 col-sm-6 col-xl-3">
      <div className="left-border-with-accent">
        <Icon icon={icon} />
        <h5 className="my-2 accent-border">
          <DynamicTrans>{title}</DynamicTrans>
        </h5>
        <p className="my-2">
          <DynamicTrans>{description}</DynamicTrans>
        </p>
      </div>
    </div>
  );
};

export const FeatureGrid = ({
  featureGridContent,
}: {
  featureGridContent: FeatureGridContentProps;
}) => {
  const { header, sections } = featureGridContent;
  return (
    <Section>
      <h2 className="text-left text-weight-bold mb-5">
        <DynamicTrans>{header}</DynamicTrans>
      </h2>
      <div className="row my-4 align-top">
        {sections.map((v) => (
          <FeatureGridCard key={v.title} featureGridSection={v} />
        ))}
      </div>
    </Section>
  );
};
