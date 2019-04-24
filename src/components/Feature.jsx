// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ChevronRight } from '../layouts/utils';

const hyphenToCamelCase = (s: string) => s.replace(/-([a-z])/g, g => g[1].toUpperCase());

export const Feature = (props: {
  prefix: string,
  name: string,
  title?: string,
  children: React.Node,
  url: string,
  left?: boolean,
  data: Object
}) => (
  <div className="row align-items-center">
    <div className="col-md-6 ml-auto">
      <h2>{props.title || props.name}</h2>
      <p>{props.children}</p>
      <p>
        <Link href to={`${props.prefix}/features/${props.url}/`}>
          <Trans>Learn more about</Trans> {props.name}
          <ChevronRight />
        </Link>
      </p>
    </div>

    <div className={`col-md-5 ml-md-auto ${props.left ? 'order-md-first' : ''}`}>
      <Img {...props.data[hyphenToCamelCase(props.url)]} alt={props.name} />
    </div>
  </div>
);
Feature.defaultProps = {
  title: '',
  left: false
};

const FeatureLink = (props: {
  name: string,
  url: string,
  prefix: string,
  page: string,
  data: Object
}) =>
  props.page !== props.url && (
    <div
      className={`px-2 col-6 ${props.page === 'index' ? 'col-md-4 col-lg-2' : 'col-md-3 col-lg-3'}`}
    >
      <Link href to={`${props.prefix}/features/${props.url}/`}>
        <div className="card border hover-shadow-8">
          <div className="card-body mb-0 pb-0 px-2 h-125">
            <h6 className="card-title text-center">{props.name}</h6>
          </div>
          <div className="mx-auto" style={{ height: '8rem', width: '8rem' }}>
            <Img
              className="card-img-bottom"
              {...props.data[hyphenToCamelCase(props.url)]}
              alt={props.name}
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
          </div>
        </div>
      </Link>
    </div>
  );

export const FeatureLinks = ({
  i18n,
  ...props
}: {
  prefix: string,
  page: string,
  data: Object,
  i18n: I18n
}) => (
  <div className={props.page === 'index' ? 'pb-7 pt-3' : 'py-3'}>
    {props.page !== 'index' && <hr className="my-7" />}

    <header className="section-header ">
      <h2>
        {props.page === 'index' ? (
          <Trans>All you need in one place</Trans>
        ) : (
          <Trans>Discover more about Ledgy</Trans>
        )}
      </h2>
    </header>

    <div className="container custom-container">
      <div className="row gap-y justify-content-center">
        <FeatureLink {...props} name={i18n.t`Employee Participation Plans`} url="esop" />
        <FeatureLink {...props} name={i18n.t`Cap Table`} url="captable" />
        <FeatureLink {...props} name={i18n.t`Modeling`} url="modeling" />
        <FeatureLink {...props} name={i18n.t`Investor Portfolio`} url="portfolio" />
        <FeatureLink {...props} name={i18n.t`Investor Relations`} url="relations" />
      </div>
    </div>
  </div>
);

export const FeaturesFragment = graphql`
  fragment FeaturesFragment on Query {
    esop: imageSharp(fluid: { originalName: { regex: "/esop.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    captable: imageSharp(fluid: { originalName: { regex: "/consistency.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    modeling: imageSharp(fluid: { originalName: { regex: "/round-modeling.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    portfolio: imageSharp(fluid: { originalName: { regex: "/investors.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    relations: imageSharp(fluid: { originalName: { regex: "/reporting.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
