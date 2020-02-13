// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';
import { DefaultHeader } from '../components/Header';

export default withI18n()(({ i18n }: Props) => {
  return (
    <div>
      <Title
        title={i18n.t`Data Protection`}
        description={i18n.t`Data security and privacy are a top priority at Ledgy`}
      />

      <DefaultHeader
        title={<Trans>Best-in-class data protection</Trans>}
        subtitle={
          <Trans>
            Your data’s security and privacy is Ledgy’s top priority. Our technical and
            organizational measures, compliance, and privacy-focused features let you control who
            receives what information.
          </Trans>
        }
      />
    </div>
  );
});
