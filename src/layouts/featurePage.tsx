import React from 'react';
import { graphql } from 'gatsby';

import { dynamicI18n, ComponentPicker, TitleWithGraphic } from '../components';
import { Title } from '../layouts/utils';

const FeaturePage = ({
  data,
  prefix,
}: Props & {
  data: {
    contentfulFeaturePage2021: FeaturePageProps;
    allContentfulFeaturePage2021: UnknownObject;
  };
}) => {
  const { title, description, graphic, motivationText, entries } = data.contentfulFeaturePage2021;
  console.log({ data });
  return (
    <div>
      <Title title={dynamicI18n(title)} description={dynamicI18n(description)} />
      <TitleWithGraphic
        id={title}
        title={title}
        description={description}
        graphic={graphic}
        motivationText={motivationText}
        __typename={'ContentfulTitleWithGraphic'}
        isTopBanner
      />
      {entries.map((entry) => (
        <ComponentPicker key={entry.id} entry={entry} prefix={prefix} />
      ))}
    </div>
  );
};

export default FeaturePage;

export const featurePageQuery = graphql`
  query($id: String!) {
    contentfulFeaturePage2021(id: { eq: $id }) {
      id
      slug
      title
      description
      motivationText
      graphic {
        localFile {
          childImageSharp {
            fixed(height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      entries {
        ...FeatureGridFramgent
        ...TestimonialCardsFragment
        ...ContentWithChecklistFragment
        ...TitleWithGraphicFragment
        ...LogoBannerFragment
        ...SelectableCardsWithScreenshotsFragment
        ...CallToAction2021Fragment
        ...ContentWithScreenshotFragment
      }
    }
  }
`;
