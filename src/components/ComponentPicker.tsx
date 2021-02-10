import React from 'react';

import {
  CallToAction,
  ContentWithChecklist,
  FeatureGrid,
  TitleWithGraphic,
  TestimonialCards,
  LogoBanner,
  SelectableCardsWithScreenshots,
  TopBanner,
} from '../components';

export const ComponentPicker = ({
  entry,
  prefix,
}: {
  entry: MainPageEntryProps;
  prefix: string;
}) => {
  switch (entry.__typename) {
    case 'ContentfulTopBanner':
      return <TopBanner {...entry} prefix={prefix} />;

    case 'ContentfulLogoBanner':
      return <LogoBanner {...entry} />;

    case 'ContentfulSelectableCardsWithScreenshots':
      return <SelectableCardsWithScreenshots {...entry} />;

    case 'ContentfulFeatureGrid':
      return <FeatureGrid {...entry} />;

    case 'ContentfulTestimonialCards':
      return <TestimonialCards {...entry} />;

    case 'ContentfulTitleWithGraphic':
      return <TitleWithGraphic {...entry} />;

    case 'ContentfulContentWithChecklist':
      return <ContentWithChecklist {...entry} />;

    case 'ContentfulCallToAction2021':
      return <CallToAction {...entry} prefix={prefix} />;

    default:
      return null;
  }
};
