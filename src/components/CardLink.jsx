// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { ChevronRight } from '../layouts/utils';

export const CardLink = ({
  title,
  description,
  image,
  to,
  date,
  external = false
}: {|
  title: Node,
  description: string | Node,
  image: Node,
  to: string,
  date?: string,
  external?: boolean
|}) => (
  <div className="card custom-card mb-6">
    <div className="row m-0 flex-1">
      <div className="col-md-6 col-lg-3">
        {external ? (
          <a href={to}>{image}</a>
        ) : (
          <Link href to={to}>
            {image}
          </Link>
        )}
      </div>
      <div className="col-md-6 col-lg-9 px-2 py-4">
        <div className="row h-100 m-0">
          <div className="col-lg-10">
            {external ? (
              title
            ) : (
              <Link href to={to} className="text-primary">
                {title}
              </Link>
            )}
          </div>
          <small className="col-lg-2 text-lg-right text-muted">{date}</small>
          <div className="col-12">{description}</div>
          <div className="col-12 mt-auto">
            {external ? (
              <a href={to}>
                <Trans>Watch now</Trans>
                <ChevronRight />
              </a>
            ) : (
              <small>
                <Link href to={to}>
                  <Trans>Read more</Trans>
                  <ChevronRight />
                </Link>
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
