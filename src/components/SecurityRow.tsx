import React from 'react';
import { Trans } from '@lingui/macro';
import { faShieldAlt, faLock } from '@fortawesome/free-solid-svg-icons';

import { ReadMore } from './ReadMore';

export default (props: Props) => (
  <div className="row gap-y text-center my-5">
    <div className="col-md-6 col-xl-5 offset-xl-1">
      <ReadMore
        icon={faShieldAlt}
        title={<Trans>Privacy made in Switzerland</Trans>}
        subtitle={<Trans>Because your equity data is not for everyone</Trans>}
        url={`${props.prefix}/privacy/`}
      />
    </div>

    <div className="col-md-6 col-xl-5">
      <ReadMore
        icon={faLock}
        title={<Trans>Your data is safe with us</Trans>}
        subtitle={<Trans>Enjoy the highest security standards</Trans>}
        url={`${props.prefix}/security/`}
      />
    </div>
  </div>
);
