import { graphql } from 'gatsby';
import { Trans } from '@lingui/macro';
import React from 'react';

import { formatUrl } from '../components/lib';
import { ComponentPicker, DemoForm, dynamicI18n, DynamicTrans } from '../components';

import { targetBlank } from '../helpers';

import { Title } from './utils';
import { RequesterType } from '../components/forms/lib';
import { TopBannerLayout } from '../components/TopBannerLayout';

type DemoPageProps = {
  content: EntryProps[];
  title: string;
  description: string;
  formButtonText: string;
  requesterType?: RequesterType;
};

const CapterraBadge = () => (
  <a
    href="https://www.capterra.com/reviews/173939/Ledgy?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge"
    className="mr-4"
    {...targetBlank}
  >
    <img
      className="capterra-badge d-none d-md-block"
      src="https://assets.capterra.com/badge/4700aedd505fa5881254166d19949239.png?v=2120646&p=173939"
      alt="Ledgy high Capterra rating"
    />
  </a>
);

const G2Badge = () => (
  <a
    title="Ledgy is a leader in Equity Management on G2"
    href="https://www.g2.com/products/ledgy/reviews?utm_source=rewards-badge"
    {...targetBlank}
  >
    <img
      className="g2-badge d-none d-md-block"
      alt="Ledgy is a leader in Equity Management on G2"
      src="https://images.g2crowd.com/uploads/report_medal/image/1335/medal.svg"
    />
  </a>
);

const DemoPage = (props: Props) => {
  const { data, prefix } = props;
  const {
    content,
    title,
    description,
    formButtonText,
    requesterType,
  }: DemoPageProps = data.contentfulDemoPage2021;

  const buttonOne = <CapterraBadge />;
  const buttonTwo = <G2Badge />;

  const form = (
    <DemoForm buttonText={dynamicI18n(formButtonText)} contentfulRequesterType={requesterType} />
  );

  return (
    <>
      <Title title={dynamicI18n(title)} description={dynamicI18n(description)} />
      <TopBannerLayout
        buttonOne={buttonOne}
        buttonTwo={buttonTwo}
        title={<DynamicTrans>{title}</DynamicTrans>}
        subtitle={<DynamicTrans>{description}</DynamicTrans>}
        componentRight={form}
      />
      <div className="position-relative bg-white z-index-base">
        {content.map((v, i) => (
          <ComponentPicker entry={v} prefix={prefix} key={`${v.id}-${i}`} />
        ))}
      </div>
      <footer className="footer d-flex align-items-center justify-content-center text-white bg-primary p-2">
        <a
          {...targetBlank}
          className="nav-link mx-1 mx-md-5"
          href={formatUrl(prefix, 'legal/privacy-policy')}
        >
          <Trans>Privacy policy</Trans>
        </a>
        <a
          {...targetBlank}
          className="nav-link mx-1 mx-md-5"
          href={formatUrl(prefix, 'data-protection')}
        >
          <Trans>Data protection</Trans>
        </a>
      </footer>
    </>
  );
};

export default DemoPage;

export const demoQuery = graphql`
  query($id: String!) {
    contentfulDemoPage2021(id: { eq: $id }) {
      id
      slug
      title
      description
      formButtonText
      requesterType
      content {
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
