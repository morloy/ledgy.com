import { graphql } from 'gatsby';
import { Trans } from '@lingui/macro';
import React from 'react';

import { dynamicI18n } from '../helpers';
import { formatUrl } from '../components/lib';
import { ComponentPicker, DemoForm, DynamicTrans } from '../components';

import { targetBlank } from '../helpers';

import { Title } from './utils';
import { RequesterType } from '../components/forms/lib';
import { TopBannerLayout } from '../components/TopBannerLayout';
import { DATA_PROTECTION } from '../helpers';

type DemoPageProps = {
  content: EntryProps[];
  title: string;
  header: string;
  description: string;
  formButtonText: string;
  requesterType?: RequesterType;
};

const CapterraBadge = () => (
  <img
    className="capterra-badge d-none d-md-block mr-4"
    src="https://assets.capterra.com/badge/4700aedd505fa5881254166d19949239.png?v=2120646&p=173939"
    alt="Ledgy high Capterra rating"
  />
);

const G2Badge = () => (
  <img
    className="g2-badge d-none d-md-block mr-4"
    alt="Ledgy is a leader in Equity Management on G2"
    src="https://images.g2crowd.com/uploads/report_medal/image/1335/medal.svg"
  />
);

const SourceforgeBadge = () => (
  <img
    className="g2-badge d-none d-md-block"
    src="https://sourceforge.net/cdn/syndication/badge_img/3084019/customers-love-us-white"
  />
);

const DemoPage = (props: Props) => {
  const { data, prefix } = props;
  const { content, title, header, description, formButtonText, requesterType }: DemoPageProps =
    data.contentfulDemoPage2021;
  const { segmentDestinations } = data.site.siteMetadata;

  const buttonOne = <CapterraBadge />;
  const buttonTwo = <G2Badge />;
  const buttonThree = <SourceforgeBadge />;

  const form = (
    <DemoForm
      buttonText={dynamicI18n(formButtonText)}
      contentfulRequesterType={requesterType}
      segmentDestinations={segmentDestinations}
    />
  );

  return (
    <>
      <Title title={dynamicI18n(title || header)} description={dynamicI18n(description)} />
      <TopBannerLayout
        buttonOne={buttonOne}
        buttonTwo={buttonTwo}
        buttonThree={buttonThree}
        title={<DynamicTrans>{header}</DynamicTrans>}
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
          href={formatUrl(prefix, DATA_PROTECTION)}
        >
          <Trans>Data protection</Trans>
        </a>
      </footer>
    </>
  );
};

export default DemoPage;

export const demoQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        segmentDestinations
      }
    }
    contentfulDemoPage2021(id: { eq: $id }) {
      id
      slug
      title
      header
      description
      formButtonText
      requesterType
      content {
        ...FeatureGridFragment
        ...TestimonialCardsFragment
        ...ContentWithChecklistFragment
        ...TitleWithGraphicFragment
        ...LogoBannerFragment
        ...SelectableCardsWithScreenshotsFragment
        ...CallToAction2021Fragment
        ...ChecklistWithScreenshotFragment
      }
    }
  }
`;
