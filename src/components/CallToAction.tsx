import React from 'react';
import { Link } from 'gatsby';

import { targetBlank } from '../helpers';
import { Button } from './Button';
import { DynamicTrans } from './DynamicTrans';
import { formatUrl } from './lib';
import { Icon } from './Icon';

export const CallToAction = ({
  header,
  description,
  buttonText,
  buttonPath,
  externalLinkText,
  externalLinkUrl,
  icon,
  secondaryHeader,
  secondaryDescription,
  secondaryLinkText,
  secondaryLinkPath,
  prefix,
}: { prefix: string } & CallToActionProps) => {
  return (
    <section className="py-4 py-lg-7">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-8 mb-6 mb-md-0 pr-5">
            <h2 className="mb-4">
              <DynamicTrans>{header}</DynamicTrans>
            </h2>
            <p className="mb-4">
              <DynamicTrans>{description}</DynamicTrans>
            </p>
            <div className="d-flex align-items-center">
              <Link to={formatUrl(prefix, buttonPath)}>
                <Button className="btn-xl mr-4">
                  <DynamicTrans>{buttonText}</DynamicTrans>
                </Button>
              </Link>
              <a href={externalLinkUrl} {...targetBlank}>
                <DynamicTrans>{externalLinkText}</DynamicTrans>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="left-border-with-accent left-border-with-accent-lg">
              <Icon icon={icon} className="mb-3" height={50} width={50} />
              <div>
                <p className="accent-border font-weight-semi-bold mb-2">
                  <DynamicTrans>{secondaryHeader}</DynamicTrans>
                </p>
              </div>
              <p className="mb-2">
                <DynamicTrans>{secondaryDescription}</DynamicTrans>
              </p>
              <Link to={formatUrl(prefix, secondaryLinkPath)}>
                <DynamicTrans>{secondaryLinkText}</DynamicTrans>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
