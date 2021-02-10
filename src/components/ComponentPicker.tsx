import React from 'react';

import { CallToAction } from './CallToAction';
import { ContentWithChecklist } from './ContentWithChecklist';
import { FeatureGrid } from './FeatureGrid';
import { TitleWithGraphic } from './TitleWithGraphic';
import { TestimonialCards } from './TestimonialCards';
import { LogoBanner } from './LogoBanner';
import { SelectableCardsWithScreenshots } from './SelectableCardsWithScreenshots';
import { TopBanner } from './TopBanner';
import { ChecklistWithScreenshot } from './ChecklistWithScreenshot';

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

    case 'ContentfulChecklistWithScreenshot':
      return <ChecklistWithScreenshot {...entry} />;

    case 'ContentfulCallToAction2021':
      return <CallToAction {...entry} prefix={prefix} />;

    default:
      return null;
  }
};
