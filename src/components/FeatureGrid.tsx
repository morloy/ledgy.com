import React from 'react';
import { Icon } from './Icon';

const FeatureGridCard = ({
  featureGridCardContent,
}: {
  featureGridCardContent: FeatureGridCardContentProps;
}) => {
  const { title, description, icon } = featureGridCardContent;
  return (
    <div className="col-12 col-sm-6 col-xl-3 left-border-with-accent-small-padding">
      <Icon icon={icon} />
      <h5 className="my-2 accent-border">{title}</h5>
      <p className="my-2 ">{description}</p>
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
      <h2 className="text-left text-weight-bold mb-4">{header}</h2>
      <div className="row my-4 align-top">
        {sections.map((v) => (
          <FeatureGridCard key={v.title} featureGridCardContent={v} />
        ))}
      </div>
    </div>
  );
};
