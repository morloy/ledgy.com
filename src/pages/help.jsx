// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';
import { withI18n, Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHiking,
  faQuestionCircle,
  faPencilRuler,
  faListAlt,
  faVideo,
  faBook
} from '@fortawesome/free-solid-svg-icons';

import { PageHeader } from '../components/PageHeader';

import { Title, Hr } from '../layouts/utils';
import { targetBlank } from '../helpers';

const helpLinks = [
  [
    <Trans>Getting Started</Trans>,
    <Trans>Walk through the basics of setting up your Ledgy account</Trans>,
    'help/getting-started',
    faHiking
  ],
  [
    <Trans>FAQ</Trans>,
    <Trans>Find answers to your most common questions about Ledgy</Trans>,
    'help/faq',
    faQuestionCircle
  ],
  [
    <Trans>Glossary</Trans>,
    <Trans>Quick explanations for investment lingo to get you started</Trans>,
    'glossary',
    faBook
  ],
  [
    <Trans>Blog</Trans>,
    <Trans>
      Follow experiences of real-world startups, learn about term sheet negotiations, and much more
    </Trans>,
    'blog',
    faPencilRuler
  ],
  [
    <Trans>Templates</Trans>,
    <Trans>
      Set up your employee participation plan with our guides and law firm partnerships with little
      cost and time
    </Trans>,
    'employee-participation-plan-templates',
    faListAlt
  ],
  [
    <Trans>Webinars</Trans>,
    <Trans>Watch live-recorded videos with educational content for the startup world</Trans>,
    'webinars',
    faVideo
  ]
];

const HelpCard = ({
  to,
  icon,
  title,
  description
}: {
  to: string,
  icon: string,
  title: Node,
  description: Node
}) => (
  <div className="help-col col-md-6 col-lg-4 pb-4" style={{ minHeight: '220px' }}>
    <Link href to={to}>
      <div className="help-card border hover-translateY text-center">
        <div className="d-flex align-items-center justify-content-center pb-2">
          <FontAwesomeIcon icon={icon} className="m-2 fa-2x text-primary" />
          <h5 className="text-primary m-2">{title}</h5>
        </div>
        <p className="d-block text-muted">{description}</p>
      </div>
    </Link>
  </div>
);

const HelpCenter = ({ i18n, prefix }: Props) => (
  <>
    <Title
      title={i18n.t`Help Center`}
      description={i18n.t`Let Ledgy’s help center guide you on every single aspect of your company’s equity management`}
    />
    <PageHeader title={<Trans>How can we help?</Trans>} textCenter />

    <div className="container">
      <div className="row">
        {helpLinks.map(([title, description, to, icon]) => (
          <HelpCard title={title} description={description} to={`${prefix}/${to}/`} icon={icon} />
        ))}
      </div>

      <Hr />
      <div className="container text-center py-md-4">
        <h4 className="mb-5">
          <Trans>Popular content</Trans>
        </h4>
        <p>
          <a
            href="https://www.youtube.com/watch?v=JbiAK2SVwHA&list=PLltwxYxG5b6fCAqvomPFc-E049R1HXzNl"
            {...targetBlank}
          >
            Employee Participation Plans: Webinar by Ledgy and Kellerhals Carrard
          </a>
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=7oh_fDsDDYs" {...targetBlank}>
            The Power of Round Modeling: Webinar by Ledgy
          </a>
        </p>
        <p>
          <Link href to={`${prefix}/blog/pre-and-post-money-option-pools`}>
            Basics of Pre- and Post-Money Option Pools
          </Link>
        </p>
      </div>
    </div>
  </>
);

export default withI18n()(HelpCenter);
