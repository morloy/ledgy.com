// @flow

import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import { withI18n, Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Title, Hr } from '../layouts/utils';
import { getWholeTeam, type AuthorProps } from '../layouts/team';

import { PageHeader } from '../components/PageHeader';

const TeamMember = withI18n()(
  ({
    name,
    role,
    description,
    img,
    twitter,
    linkedIn,
    mail,
    article,
  }: {|
    ...AuthorProps,
    img: Object,
  |}) => {
    const ProfileImage = <Img {...img} className="mx-auto" alt={name} />;
    return (
      <div className="col-12 col-md-6 col-lg-4 ledgista-profile">
        <div className="h-100 pb-6">
          {article ? (
            <Link href to={`/updates/${article}/`}>
              {ProfileImage}
            </Link>
          ) : (
            ProfileImage
          )}
          <div className="ledgista-text text-center d-flex flex-column align-items-center justify-content-between">
            <div>
              <h4 className="mt-2 mb-0">{name}</h4>
              <small className="text-muted">{role}</small>
              <p className="mt-2 font-weight-light">{description}</p>
            </div>
            <div>
              <a className="social-icon mr-3" href={`mailto:${mail}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              {twitter && (
                <a className="social-icon mr-3" href={twitter}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              )}
              <a className="social-icon" href={linkedIn}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const Investor = ({
  name,
  description,
  img,
}: {|
  name: string,
  description: string,
  img: Object,
|}) => (
  <div className="col-12 col-md-4 mb-4">
    {img && <Img {...img} alt={name} className="rounded-circle" />}
    <h6>{name}</h6>
    <p className="font-weight-light">{description}</p>
  </div>
);

const AboutUsPage = (props: Props) => {
  const { data, i18n } = props;
  const team = getWholeTeam(props.prefix);
  const title = i18n.t`About us`;
  const description = i18n.t`We believe that entrepreneurship is the main driver of positive change in the world. That is why we build beautiful and intuitive software for startups, helping them be more successful`;
  const teamArray = [
    [team.timo, data.timo],
    [team.yoko, data.yoko],
    [team.ben, data.ben],
    [team.oriol, data.oriol],
    [team.jules, data.jules],
    [team.marius, data.marius],
    [team.jahlela, data.jahlela],
    [team.spela, data.spela],
    [team.armon, data.armon],
    [team.karime, data.karime],
    [team.ermias, data.ermias],
    [team.tamas, data.tamas],
    [team.mariana, data.mariana],
    [team.luna, data.luna],
  ];

  return (
    <div>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />

      <div className="container text-center">
        <h2>
          <Trans>Team</Trans>
        </h2>

        <div className="row justify-content-center my-5">
          {teamArray.map(([memberProps, img]) => (
            <TeamMember {...memberProps} img={img} key={memberProps.name} />
          ))}
        </div>

        <Hr />

        <h2>
          <Trans>Backed by</Trans>
        </h2>
        <div className="row justify-content-center my-5">
          <Investor
            name="btov Partners"
            description={i18n.t`Europe’s symbiosis of early-stage VC funds and private investor network`}
            img={data.btov}
          />
          <Investor
            name="Creathor Ventures"
            description={i18n.t`Backing the creators of our future since 1984`}
            img={data.creathor}
          />
          <Investor
            name="VI Partners"
            description={i18n.t`Healthcare & technology venture capital since 2001`}
            img={data.vipartners}
          />
          <Investor
            name="Dr. Paul E. Sevinç"
            description={i18n.t`Entrepreneur, technologist, founder of Doodle.com`}
            img={data.paul}
          />
          <Investor
            name="Daniel Gutenberg"
            description={i18n.t`One of the most active Swiss early-stage angel investors`}
            img={data.daniel}
          />
          <Investor
            name="Luis Cabiedes"
            description={i18n.t`Leading Spanish investor in early-stage technology startups`}
            img={data.luis}
          />
          <Investor
            name="Myke Näf"
            description={i18n.t`Entrepreneur, business angel, founder of Doodle.com`}
            img={data.myke}
          />
          <Investor
            name="Cyrill Osterwalder"
            description={i18n.t`Digital entrepreneur and investor. Security, crypto & privacy expert`}
            img={data.cyrill}
          />
          <Investor
            name="Luzius Meisser"
            description={i18n.t`Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala`}
            img={data.luzius}
          />
          <Investor
            name="Adrian Bührer"
            description={i18n.t`Investor & consultant (Farmy.ch, Flatfox.ch), founder of Students.ch`}
            img={data.adrian}
          />
          <Investor
            name="Elena Walder-Schiavone"
            description={i18n.t`M&A and private equity lawyer with a focus on start-up legal advise, Smartuplaw.ch`}
            img={data.elena}
          />
        </div>
      </div>
    </div>
  );
};

export default withI18n()(AboutUsPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...TeamFragment

    btov: imageSharp(fluid: { originalName: { regex: "/btov.png/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    creathor: imageSharp(fluid: { originalName: { regex: "/creathor.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    vipartners: imageSharp(fluid: { originalName: { regex: "/vipartners.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    daniel: imageSharp(fluid: { originalName: { regex: "/daniel.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luis: imageSharp(fluid: { originalName: { regex: "/luis.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    cyrill: imageSharp(fluid: { originalName: { regex: "/cyrill.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }

    myke: imageSharp(fluid: { originalName: { regex: "/myke.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    paul: imageSharp(fluid: { originalName: { regex: "/paul.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luzius: imageSharp(fluid: { originalName: { regex: "/luzius.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    adrian: imageSharp(fluid: { originalName: { regex: "/adrian.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    elena: imageSharp(fluid: { originalName: { regex: "/elena.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
