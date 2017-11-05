// @flow

import React from 'react';

import References from '../components/References';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import Future from '../components/Future';
import Subscribe from '../components/Subscribe';

const Header = () => (
  <header className="header header-inverse h-fullscreen pb-80" style={{ backgroundColor: '#20a8d8' }} id="start">

    <div className="container text-center">

      <div className="row h-full">
        <div className="col-12 col-lg-10 offset-lg-1 align-self-center">

          <h1 className="display-2">Online Stock Ledger</h1>
          <br />
          <p className="fs-20 w-400 mx-auto hidden-sm-down">
            Make your life easy with the leading stock ledger and cap table tool for Switzerland.
          </p>
          <p className="fs-18 w-250 mx-auto hidden-md-up">
            Make your life easy with the leading stock ledger and cap table tool for Switzerland.
          </p>

          <div className="col-10 offset-1 col-md-8 offset-md-2">

            <form className="form-glass row" action="https://app.ledgy.com/signup" method="get">
              <div className="col-12 col-md-7 my-1">
                <input type="text" name="email" className="form-control form-control-lg" placeholder="Enter your email..." />
              </div>
              <div className="col-12 col-md-5 my-1">
                <button style={{ height: '100%' }} className="btn btn-block btn-lg btn-success">Try for free</button>
              </div>
            </form>
            <div className="row mt-2 pr-3 float-right">
              <a
                style={{ textDecoration: 'underline' }}
                className="text-white"
                href="https://demo.ledgy.com"
              >Check out our demo app
              </a>
            </div>

          </div>
        </div>

        <div className="col-12 align-self-end text-center">
          <a className="scroll-down-3 scroll-down-inverse" href="#testimonials" data-scrollto="testimonials"><span /></a>
        </div>

      </div>

    </div>
  </header>
);

const IndexPage = (props: Object) => (
  <div>
    <Header />
    <main className="main-content">

      <References {...props} />
      <Pricing {...props} />
      <Features {...props} />

      <section className="section section-inverse py-40" style={{ backgroundColor: '#60ae50' }}>

        <div className="text-center">
          <a className="btn btn-lg btn-success" href="https://demo.ledgy.com">Check out our demo app</a>
        </div>

      </section>

      <Future {...props} />
      <Subscribe {...props} />

    </main>
  </div>
);

export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    feature1: imageSharp(id: { regex: "/src\/img\/feature-1.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature2: imageSharp(id: { regex: "/src\/img\/feature-2.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature3: imageSharp(id: { regex: "/src\/img\/feature-3.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }

    testingtime: imageSharp(id: { regex: "/testingtime/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    quitt: imageSharp(id: { regex: "/quitt/" }) {
      resolutions(width: 80) { ...GatsbyImageSharpResolutions }
    }
    cryptofund: imageSharp(id: { regex: "/cryptofund/" }) {
      resolutions(width: 180) { ...GatsbyImageSharpResolutions }
    }
    sherpany: imageSharp(id: { regex: "/sherpany/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    frontify: imageSharp(id: { regex: "/frontify/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    apiax: imageSharp(id: { regex: "/apiax/" }) {
      resolutions(width: 110) { ...GatsbyImageSharpResolutions }
    }

    lykke: imageSharp(id: { regex: "/lykke/" }) {
      resolutions(width: 130) { ...GatsbyImageSharpResolutions }
    }
    investiere: imageSharp(id: { regex: "/investiere/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    swissfintech: imageSharp(id: { regex: "/swissfintech/" }) {
      resolutions(width: 80) { ...GatsbyImageSharpResolutions }
    }
  }
`;
