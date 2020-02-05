// @flow

import React from 'react';
import { Link } from 'gatsby';

export default (props: LayoutProps) => (
  <>
    <header className="header text-white">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>Subscription confirmed</h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <div className="section">
        <div className="container">
          <div className="bg-gray h-full p-5 imprint">
            <div className="row justify-content-center">
              <div className="d-flex flex-column align-items-center text-center w-md-75">
                <p>
                  Thank you for your interest in Ledgy{' '}
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                </p>
                <p>You can cancel your subscription through any of our newsletter emails.</p>
                <div className="d-flex flex-column flex-md-row mt-2">
                  <Link
                    className="btn btn-round btn-outline-primary btn-xl mr-md-1 mb-3 mb-md-0"
                    href
                    to={`${props.prefix}/features`}
                  >
                    Continue exploring
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);
