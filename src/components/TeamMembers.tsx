import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { shuffleArray } from '../helpers';
import { AuthorProps } from '../layouts/team';

const TeamMember = ({
  name,
  role,
  description,
  img,
  twitter,
  linkedIn,
  mail,
  article,
}: AuthorProps & {
  img: GatsbyImageFluidProps;
}) => {
  const ProfileImage = <Img {...img} className="mx-auto" alt={name} />;
  return (
    <div className="ledgista col-12 col-md-6 col-lg-4">
      <div className="pb-6 h-100 d-flex flex-column align-items-center justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <div className="ledgista-image-wrapper">
            {article ? <Link to={`/updates/${article}/`}>{ProfileImage}</Link> : ProfileImage}
          </div>
          <div className="text-center d-flex flex-column align-items-center">
            <div>
              <h4 className="mt-2 mb-0">{name}</h4>
              <small className="text-muted">{role}</small>
              <p className="mt-2 font-weight-light">{description}</p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a className="social-icon mr-3" href={`mailto:${mail}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a className={`social-icon mr-3 ${twitter ? '' : 'd-none'}`} href={twitter || ''}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="social-icon" href={linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export type TeamDataProps = [AuthorProps, DisableTypeScript][];

export const TeamMembers = ({ teamData }: { teamData: TeamDataProps }) => {
  const [team, setTeam] = useState(teamData);

  useEffect(() => {
    setTeam((prev) => shuffleArray(prev));
  }, []);

  return (
    <div className="row justify-content-center my-5">
      {team.map(([memberProps, img]) => (
        <TeamMember {...memberProps} img={img} key={`team-${memberProps.name}`} />
      ))}
    </div>
  );
};
