import React from 'react';
import Img from 'gatsby-image';

const FeatureGridCard = ({
  featureGridCardContent,
  icon,
}: {
  featureGridCardContent: FeatureGridCardContentProps;
  icon: DisableTypeScript; //TS FIXME
}) => {
  const { title, description } = featureGridCardContent;
  return (
    <div className="col-12 col-sm-6 col-xl-3 left-border-with-accent-small-padding">
      <Img {...icon} className="mb-3" />
      <h5 className="my-2 accent-border">{title}</h5>
      <p className="my-2 ">{description}</p>
    </div>
  );
};

export const FeatureGrid = ({
  featureGridContent,
  icon,
}: {
  featureGridContent: FeatureGridContentProps;
  icon: DisableTypeScript; //TS FIXME
}) => {
  const { header, sections } = featureGridContent;
  return (
    <div className="container p-4 p-lg-7">
      <h2 className="text-left text-weight-bold mb-4">{header}</h2>
      <div className="row my-4 align-top">
        {sections.map((v) => (
          <FeatureGridCard key={header} featureGridCardContent={v} icon={icon} />
        ))}
      </div>
    </div>
  );
};
