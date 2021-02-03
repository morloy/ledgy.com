import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { demoUrl, demoPage, targetBlank } from '../helpers';
import { Button } from './Button';
import { DynamicTrans } from './DynamicTrans';
import { formatUrl } from './lib';

export const CallToAction = ({
  prefix,
  header,
  description,
  demoButtonText,
  tourLinkText,
  icon,
  secondaryHeader,
  secondaryDescription,
  secondaryLinkText,
}: { prefix: string } & CallToActionProps) => {
  return (
    <section className="py-4 py-lg-7">
      <div className="container p-2">
        <div className="row">
          <div className="col-md-8 mb-6 mb-md-0 pr-5">
            <h2 className="mb-4">
              <DynamicTrans>{header}</DynamicTrans>
            </h2>
            <p className="mb-4">
              <DynamicTrans>{description}</DynamicTrans>
            </p>
            <div className="d-flex align-items-center">
              <Link to={`${prefix}${demoPage}`}>
                <Button className="btn-xl mr-4">
                  <DynamicTrans>{demoButtonText}</DynamicTrans>
                </Button>
              </Link>
              <a href={demoUrl} {...targetBlank}>
                <DynamicTrans>{tourLinkText}</DynamicTrans>
              </a>
            </div>
          </div>
          <div className="col-md-4 left-border-with-accent">
            <Img {...icon} className="mb-3" />
            <div>
              <p className="accent-border font-weight-semi-bold mb-2">
                <DynamicTrans>{secondaryHeader}</DynamicTrans>
              </p>
            </div>
            <p className="mb-2">
              <DynamicTrans>{secondaryDescription}</DynamicTrans>
            </p>
            <Link to={formatUrl(prefix, 'company-pricing')}>
              <DynamicTrans>{secondaryLinkText}</DynamicTrans>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
