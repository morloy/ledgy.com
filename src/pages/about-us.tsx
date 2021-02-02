import React from 'react';
import Img, { GatsbyImageFixedProps } from 'gatsby-image';
import { graphql } from 'gatsby';
import { Trans, t } from '@lingui/macro';

import { Title, Hr } from '../layouts/utils';
import { getWholeTeam } from '../layouts/team';

import { PageHeader } from '../components/PageHeader';
import { TeamMembers, TeamDataProps } from '../components/TeamMembers';

const Investor = ({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: GatsbyImageFixedProps;
}) => (
  <div className="col-12 col-md-4 mb-4">
    {img && <Img {...img} alt={name} className="rounded-circle" />}
    <h6>{name}</h6>
    <p className="font-weight-light">{description}</p>
  </div>
);

const IndexPage = (props: Props) => {
  const { data } = props;
  const team = getWholeTeam(props.prefix);
  const title = t`About us`;
  const description = t`We believe that entrepreneurship is the main driver of positive change in the world. That is why we build beautiful and intuitive software for startups, helping them be more successful`;
  const teamData: TeamDataProps = [
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
    [team.xiao, data.xiao],
    [team.marina, data.marina],
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

        <TeamMembers teamData={teamData} />

        <Hr />

        <h2>
          <Trans>Backed by</Trans>
        </h2>
        <div className="row justify-content-center my-5">
          <Investor
            name="btov Partners"
            description={t`Europe’s symbiosis of early-stage VC funds and private investor network`}
            img={data.btov}
          />
          <Investor
            name="Creathor Ventures"
            description={t`Backing the creators of our future since 1984`}
            img={data.creathor}
          />
          <Investor
            name="VI Partners"
            description={t`Healthcare & technology venture capital since 2001`}
            img={data.vipartners}
          />
          <Investor
            name="Dr. Paul E. Sevinç"
            description={t`Entrepreneur, technologist, founder of Doodle.com`}
            img={data.paul}
          />
          <Investor
            name="Daniel Gutenberg"
            description={t`One of the most active Swiss early-stage angel investors`}
            img={data.daniel}
          />
          <Investor
            name="Luis Cabiedes"
            description={t`Leading Spanish investor in early-stage technology startups`}
            img={data.luis}
          />
          <Investor
            name="Myke Näf"
            description={t`Entrepreneur, business angel, founder of Doodle.com`}
            img={data.myke}
          />
          <Investor
            name="Cyrill Osterwalder"
            description={t`Digital entrepreneur and investor. Security, crypto & privacy expert`}
            img={data.cyrill}
          />
          <Investor
            name="Luzius Meisser"
            description={t`Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala`}
            img={data.luzius}
          />
          <Investor
            name="Adrian Bührer"
            description={t`Investor & consultant (Farmy.ch, Flatfox.ch), founder of Students.ch`}
            img={data.adrian}
          />
          <Investor
            name="Elena Walder-Schiavone"
            description={t`M&A and private equity lawyer with a focus on start-up legal advise, Smartuplaw.ch`}
            img={data.elena}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

// eslint-disable-next-line no-undef
export const aboutUsPageQuery = graphql`
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
