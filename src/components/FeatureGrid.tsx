import React from 'react';
import Img from 'gatsby-image';

const FeatureGridCard = ({
  FeatureGridCardContent,
  icon,
}: {
  FeatureGridCardContent: FeatureGridCardContentProps;
  icon: any;
}) => {
  const { title, description } = FeatureGridCardContent;
  return (
    <div className="col-12 col-sm-6 col-md-3 container-fluid left-border-with-accent-small-padding">
      <Img {...icon} className="mb-3" />
      <h5 className="my-2 accent-border">{title}</h5>
      <p className="my-2 ">{description}</p>
    </div>
  );
};

export const FeatureGrid = ({
  FeatureGridContent,
  icon,
}: {
  FeatureGridContent: FeatureGridContentProps;
  icon: any;
}) => {
  const { header, sections } = FeatureGridContent;
  return (
    <div className="container p-4 p-lg-7 selling-prop">
      <h2 className="text-left text-weight-bold mb-4">{header}</h2>
      <div className="row my-4 align-top">
        <FeatureGridCard FeatureGridCardContent={sections[0]} icon={icon} />
        <FeatureGridCard FeatureGridCardContent={sections[1]} icon={icon} />
        <FeatureGridCard FeatureGridCardContent={sections[2]} icon={icon} />
        <FeatureGridCard FeatureGridCardContent={sections[3]} icon={icon} />
      </div>
    </div>
  );
};
