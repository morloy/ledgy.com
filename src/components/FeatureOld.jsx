// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

import { ChevronRight, Hr } from '../layouts/utils';

const hyphenToCamelCase = (s: string) => s.replace(/-([a-z])/g, g => g[1].toUpperCase());

export const Feature = (props: {
  prefix: string,
  name: string,
  title?: string,
  children: Node,
  url: string,
  left?: boolean,
  data: Object
}) => (
  <div className="row align-items-center" style={{ minHeight: '300px' }}>
    <div className="col-md-7 ml-auto">
      <h2>{props.title || props.name}</h2>
      <div>{props.children}</div>
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
    <div className="px-2 col-6 col-md-4">
      <Link href to={`${props.prefix}/features/${props.url}/`}>
        <div className="card border hover-shadow-8 hover-translateY">
          <div className="card-body mb-0 pb-0 px-2 h-90px">
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
      <div className="row gap-y px-lg-7 justify-content-center">
        <FeatureLink {...props} name={i18n.t`Employee Participation Plans`} url="esop" />
        <FeatureLink {...props} name={i18n.t`Digital Signatures`} url="signatures" />
        <FeatureLink {...props} name={i18n.t`Cap Table Management`} url="captable" />
        <FeatureLink {...props} name={i18n.t`Round & Exit Modeling`} url="modeling" />
        <FeatureLink {...props} name={i18n.t`Collaboration & Due Diligence`} url="collaboration" />
        <FeatureLink {...props} name={i18n.t`Investor Relations & Portfolio`} url="investors" />
      </div>
    </div>
  </div>
);

export const FeatureLi = ({ children }: { children: Node }) => (
  <li className="media">
    <FontAwesomeIcon icon={faDotCircle} className="text-primary fa-xs mt-2" />
    <div className="media-body ml-4 mb-4">{children}</div>
  </li>
);

export const FeatureList = (props: {
  textSize: string,
  imgSize: string,
  header: Node,
  features: Array<Node>,
  img: Node,
  imgFirst?: boolean,
  link?: Node,
  id?: string
}) => (
  <section className="section overflow-hidden p-0" id={props.id}>
    <div className="container text-left">
      <Hr />
      <div className="row align-items-center my-4 pt-4 my-md-7 pt-md-7">
        <div className={`col-md-${props.textSize} ${props.imgFirst ? 'ml-auto' : 'mr-auto'}`}>
          <h2>{props.header}</h2>
          <ul className="pl-0 pt-2">
            {props.features.map((feature, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <FeatureLi key={i}>{feature}</FeatureLi>
            ))}
          </ul>
          {props.link}
        </div>
        <div
          className={`col-md-${props.imgSize} ${
            props.imgFirst ? 'order-md-first mr-auto' : 'ml-auto'
          }`}
          data-aos={`fade-${props.imgFirst ? 'right' : 'left'}`}
        >
          {props.img}
        </div>
      </div>
    </div>
  </section>
);
FeatureList.defaultProps = { imgFirst: false, link: <React.Fragment />, id: '' };

export const TopPageFeatureCard = (props: {
  header: Node,
  body: Node,
  icon: string,
  href: string
}) => (
  <div className="col-md-6 pb-2">
    <a href={props.href}>
      <div
        className="top-page-feature-card card border hover-shadow-8 hover-translateY
      d-flex flex-row align-items-center justify-content-start"
      >
        <FontAwesomeIcon icon={props.icon} className="text-primary top-page-feature-icon" />
        <div>
          <h5 className="m-0 text-primary">{props.header}</h5>
          <p className="m-0">{props.body}</p>
        </div>
      </div>
    </a>
  </div>
);

export const FeaturesFragment = graphql`
  fragment FeaturesFragment on Query {
    esop: imageSharp(fluid: { originalName: { regex: "/employee-participation.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    signatures: imageSharp(fluid: { originalName: { regex: "/signatures.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    captable: imageSharp(fluid: { originalName: { regex: "/captable.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    modeling: imageSharp(fluid: { originalName: { regex: "/modeling.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    collaboration: imageSharp(fluid: { originalName: { regex: "/due-diligence.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    investors: imageSharp(fluid: { originalName: { regex: "/investor-relations.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
