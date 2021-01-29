// @flow

import React from 'react';

import { Trans, t } from '@lingui/macro';
import Img from 'gatsby-image';

import { MainHeaderLayout } from './MainHeaderLayout';
import { Button } from './Button';
import { RequestDemoButton } from './RequestDemoButton';
import { DynamicTrans } from './DynamicTrans';
import { demoUrl, targetBlank } from '../helpers';

// eslint-disable-next-line import/prefer-default-export
export const HomePageHeader = ({ data, prefix }: Props) => {
  const [content] = data.page.edges;
  const title = <DynamicTrans>{content.node.mainHeader}</DynamicTrans>;
  const subtitle = <DynamicTrans>{content.node.description}</DynamicTrans>;
  const laptop = content.node.bannerImage.localFile?.childImageSharp;

  return (
    <MainHeaderLayout
      title={title}
      subtitle={subtitle}
      buttonOne={
        <RequestDemoButton
          prefix={prefix}
          buttonClassName="my-sm-0 my-2 btn-xl d-inline mx-1 btn-red"
        />
      }
      buttonTwo={
        <Button href={demoUrl} className="btn-xl mx-1 align-self-center" inverted {...targetBlank}>
          <Trans>Take the tour</Trans>
        </Button>
      }
      image={
        <div id="laptop-ledgy" className="mt-sm-4 mt-xl-0">
          <Img {...laptop} alt={t`Screenshot of the Ledgy app`} />
        </div>
      }
    />
  );
};
