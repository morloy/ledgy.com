// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title title={i18n.t`Contact`} />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1><Trans>Let’s Get In Touch</Trans></h1>
          <p>
            <Trans>
              Here are the ways you can contact us with any questions you have
            </Trans>
          </p>
        </div>
      </div>
    </div>
  </header>
);

class Map extends React.Component<{}> {
  componentDidMount() {
    if (window.page && window.google) {
      window.page.initMap();
    }
  }
  render() {
    return (<div
      id="map"
      className="h-400"
      data-provide="map"
      data-lat="47.3627638"
      data-lng="8.5579592"
      data-marker-lat="47.3627638"
      data-marker-lng="8.5579592"
      data-zoom="14"
    />);
  }
}

const IndexPage = (props: Object) => {
  const { i18n } = props;
  return (
    <div>
      <Header {...props} />

      <main className="main-content">

        <div className="section">
          <div className="container">

            <div className="row gap-y">
              <div className="col-12 col-xl-6">

                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-group">
                    <input className="form-control form-control-lg" type="text" name="name" placeholder={i18n.t`Your name`} />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" type="email" name="email" placeholder={i18n.t`Your email`} />
                  </div>

                  <div className="form-group">
                    <textarea className="form-control form-control-lg" name="message" rows="4" placeholder={i18n.t`Your message`} />
                  </div>

                  <div className="form-group d-none">
                    <label htmlFor="bot-field">Don’t fill this out if you’re human: <input name="bot-field" /></label>
                  </div>

                  <button className="btn btn-lg btn-primary btn-block" type="submit">{i18n.t`Send message`}</button>
                </form>

              </div>


              <div className="col-12 col-xl-6">
                <div className="bg-gray h-full p-5 imprint">

                  <h5><Trans>Imprint</Trans></h5>

                  <div className="row">
                    <div className="col-md-6">

                      <p>
                        <h6>Ledgy AG</h6>
                        Forchstrasse 60<br />
                        8008 Zürich<br />
                        <Trans>Switzerland</Trans>
                      </p>

                      <p>
                        <h6><Trans>Contact</Trans></h6>
                        <a href="mailto:contact@ledgy.com">contact@ledgy.com</a><br />
                        +41 (0) 44 585 21 23
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <h6><Trans>VAT number</Trans></h6>
                        CHE‑261.454.963 MWST
                      </p>
                      <p>
                        <h6><Trans>Managing directors</Trans></h6>
                        Yoko Spirig<br />
                        Ben-Elias Brandt<br />
                        Timo Horstschäfer
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>

        <Map />
      </main>
    </div>
  );
};

export default withI18n()(IndexPage);
