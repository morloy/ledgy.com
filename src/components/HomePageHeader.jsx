// @flow

import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import Img from 'gatsby-image';
import sample from 'lodash/sample';

import { targetBlank, appUrl, isBrowser, trackSignupGoogleAnalytics } from '../helpers';
import { HeaderLayout } from './HeaderLayout';
import { RequestDemoModal } from './RequestDemoModal';

const languageKeys = {
  en: {
    title: 'titleEn',
    subtitle: 'subtitleEn'
  },
  de: {
    title: 'titleDe',
    subtitle: 'subtitleDe'
  },
  fr: {
    title: 'titleFr',
    subtitle: 'subtitleFr'
  }
};

type Experiment = {
  name: string,
  title: string,
  subtitle: string
};

type ExperimentKeys = Experiment;

const getExperiment = (experiments: ExperimentKeys[], lang: string): Experiment => {
  const sampledExperiment = isBrowser ? sample(experiments) : experiments[0];
  const { title: titleKey, subtitle: subtitleKey } = languageKeys[lang];
  return {
    name: sampledExperiment.name,
    title: sampledExperiment[titleKey],
    subtitle: sampledExperiment[subtitleKey]
  };
};

// eslint-disable-next-line import/prefer-default-export
export const HomePageHeader = ({ i18n, data, lang }: Props) => {
  const headers = useStaticQuery(
    graphql`
      {
        allContentfulLandingPage {
          edges {
            node {
              id
              name
              titleEn
              titleDe
              titleFr
              subtitleEn
              subtitleDe
              subtitleFr
            }
          }
        }
      }
    `
  );
  const experiments = headers.allContentfulLandingPage.edges.map(edge => edge.node);
  const { title, subtitle, name } = getExperiment(experiments, lang);

  useEffect(() => {
    window.experiment = name;
    if (window.ga) window.ga('set', 'dimension1', window.experiment);
  }, []);

  const buttonTwo = {
    props: {
      href: `${appUrl}/signup`,
      onClick: trackSignupGoogleAnalytics,
      ...targetBlank,
      cta: true
    },
    text: <Trans>Get Started Free</Trans>
  };

  return (
    <HeaderLayout
      title={title}
      subtitle={subtitle}
      buttonOne={{ modal: <RequestDemoModal />, props: {}, text: '' }}
      buttonTwo={buttonTwo}
      image={
        <div id="tablet-ledgy" data-aos="fade-up">
          <Img {...data.tablet} alt={i18n.t`Screenshot of the Ledgy app`} />
        </div>
      }
    />
  );
};
