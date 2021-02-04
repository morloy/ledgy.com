import React from 'react';
import { DynamicTrans } from './DynamicTrans';
import { Icon } from './Icon';

const FeatureGridCard = ({
  featureGridSection,
}: {
  featureGridSection: FeatureGridSectionProps;
}) => {
  const { title, description, icon } = featureGridSection;
  return (
    <div className="col-12 col-sm-6 col-xl-3 left-border-with-accent-small-padding">
      <Icon icon={icon} />
      <h5 className="my-2 accent-border">
        <DynamicTrans>{title}</DynamicTrans>
      </h5>
      <p className="my-2">
        <DynamicTrans>{description}</DynamicTrans>
      </p>
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
    <div className="container p-4 p-lg-7">
      <h2 className="text-left text-weight-bold mb-4">
        <DynamicTrans>{header}</DynamicTrans>
      </h2>
      <div className="row my-4 align-top">
        {sections.map((v) => (
          <FeatureGridCard key={v.title} featureGridSection={v} />
        ))}
      </div>
    </div>
  );
};
