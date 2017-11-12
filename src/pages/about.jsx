// @flow

import React from 'react';
import Img from 'gatsby-image';

const Header = () => (
  <header className="header header-inverse" style={{ backgroundColor: '#00b38d' }}>
    <div className="container text-center">

      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">

          <h1>About Us</h1>
          <p className="fs-20 opacity-70">Find out about our mission and meet our team and advisors</p>

        </div>
      </div>

    </div>
  </header>
);

type ProfileProps = {
  name: string,
  func: string,
  description: string,
  img: Object,
}
type FounderProps = {
  ...$Exact<ProfileProps>,
  twitterlink: string,
  linkedinlink: string,
}

const Founder = ({ name, func, description, img, twitterlink, linkedinlink }: FounderProps) => (
  <div className="col-12 col-md-6 col-lg-4 team-1">
    {img && <Img {...img} alt={name} />}
    <h6>{name}</h6>
    <small>{func}</small>
    <p>{description}</p>
    <div className="social social-boxed social-rounded social-gray">
      <a className="social-twitter" href={twitterlink}><i className="fa fa-twitter" /></a>
      <a className="social-linkedin" href={linkedinlink}><i className="fa fa-linkedin" /></a>
    </div>
  </div>
);

const Investor = ({ name, func, description, img }: ProfileProps) => (
  <div className="col-12 col-md-4 team-2">
    {img && <Img {...img} alt={name} />}
    <h5>{name}</h5>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);


const Advisor = ({ name, func, description, img }: ProfileProps) => (
  <div className="col-12 col-md-6 team-2">
    {img && <Img {...img} alt={name} />}
    <h5>{name}</h5>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);

const IndexPage = ({ data }: Object) => (
  <div>
    <Header />
    <main className="main-content">
      <section className="section py-150 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 pl-50 pr-80">
              <h2>Our Mission</h2>
              <p className="lead">
                 We want to empower entrepreneurs. They should be able to focus on their business,
                 not on bureaucratic paperwork. This is why we want to establish a new,
                 state-of-the-art tool to manage, exchange,
                 and trade securities in private companies.
                 Our goal is to make security management a breeze
                 for both companies and shareholders.
              </p>
            </div>
            <div className="col-12 col-lg-6 p-50 align-self-center">
              <Img {...data.mission} className="shadow-3 aos-init aos-animate" alt="mission" data-aos="fade-left" data-aos-duration="1500" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-header">
            <small>Team</small>
            <h2>Who we are</h2>
            <hr />
          </header>


          <div className="row gap-y">
            <Founder
              name="Timo Horstschaefer"
              func="Physics MSc ETH"
              description="Computer vision background, badminton guy, excited about space elevators"
              twitterlink="https://twitter.com/thrstschfr"
              linkedinlink="https://www.linkedin.com/in/timohorstschaefer/"
              img={data.timo}
            />
            <Founder
              name="Ben-Elias Brandt"
              func="Physics MSc ETH"
              description="Battery materials background, martial arts, fascinated by electric cars"
              twitterlink="https://twitter.com/bebinoy"
              linkedinlink="https://www.linkedin.com/in/ben-elias-brandt-680a95110/"
              img={data.ben}
            />
            <Founder
              name="Yoko Spirig"
              func="Physics MSc ETH"
              description="Medical physics background, loves running, wondering about brain-machine interfaces"
              twitterlink="https://twitter.com/sp_yoko"
              linkedinlink="https://www.linkedin.com/in/yokospirig/"
              img={data.yoko}
            />
          </div>

        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <header className="section-header">
            <small>Advisors</small>
            <h2>Backed by leading investors</h2>
          </header>

          <div className="row gap-y">
            <Investor
              name="Myke Näf"
              func="Board Member"
              description="Entrepreneur, Business Angel, Founder of Doodle.com"
              img={data.myke}
            />
            <Investor
              name="Dr. Paul E. Sevinç"
              func="Board Member"
              description="Entrepreneur, Technologist, Founder of Doodle.com"
              img={data.paul}
            />
            <Investor
              name="Luzius Meisser"
              func="Advisor"
              description="Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala"
              img={data.luzius}
            />
          </div>

          <div className="row gap-y col-12 col-md-10 offset-md-1">
            <Advisor
              name="Adrian Bührer"
              func="Advisor"
              description="Investor & Consultant (Farmy.ch, Flatfox.ch), Founder of Students.ch"
              img={data.adrian}
            />
            <Advisor
              name="Elena Walder-Schiavone"
              func="Advisor"
              description="M&A and Private Equity Lawyer with focus in start-up legal advise, Smartuplaw.ch"
              img={data.elena}
            />
          </div>

        </div>
      </section>
    </main>
  </div>
);

export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query AboutQuery {
    mission: imageSharp(id: { regex: "/mission/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    ben: imageSharp(id: { regex: "/ben.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
    yoko: imageSharp(id: { regex: "/yoko.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
    timo: imageSharp(id: { regex: "/timo.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }


    myke: imageSharp(id: { regex: "/myke.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    paul: imageSharp(id: { regex: "/paul.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    luzius: imageSharp(id: { regex: "/luzius.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    adrian: imageSharp(id: { regex: "/adrian.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    elena: imageSharp(id: { regex: "/elena.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
