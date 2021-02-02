import React from 'react';
import Img, { GatsbyImageFixedProps } from 'gatsby-image';
import { Trans } from '@lingui/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { targetBlank } from '../../helpers';

export const PartnerCard = (props: {
  logo: GatsbyImageFixedProps;
  email: string;
  website: string;
}) => {
  const { logo, email, website } = props;
  return (
    <div className="col col-12 col-md-6 col-lg-3 mb-6">
      <div className="partner-card card border shadow-8 p-4 mx-auto text-center" key={website}>
        <div className="h-70 row m-auto align-content-center">
          <Img {...logo} alt={website} />
        </div>

        <div className="h-20 d-flex justify-content-around pt-2">
          <a
            className="align-content-center"
            href={`mailto:${email}?subject=Inquiry from Ledgy Partner Page`}
            {...targetBlank}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <Trans>Email</Trans>
          </a>
          <a href={website} {...targetBlank}>
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            <Trans>Website</Trans>
          </a>
        </div>
      </div>
    </div>
  );
};
