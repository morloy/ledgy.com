

import React from "react";
import { Trans } from "@lingui/macro";

import { targetBlank } from "../helpers";

export const G2AndCapterraStrip = () => <div className="bg-light p-5 mt-7">
    <div className="container">
      <div className="row justify-content-center">
        <div className="text-gray-neutral text-center mb-4 font-weight-light">
          <Trans>Highly rated on</Trans>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <a title="Ledgy is a leader in Equity Management on G2" href="https://www.g2.com/products/ledgy/reviews?utm_source=rewards-badge" className="d-flex justify-content-center col-12 col-sm-6 col-md-3 my-2" {...targetBlank}>
          <img className="g2-badge" alt="Ledgy is a leader in Equity Management on G2" src="https://images.g2crowd.com/uploads/report_medal/image/1239/medal.svg" />
        </a>
        <a href="https://www.capterra.com/reviews/173939/Ledgy?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge" className="d-flex justify-content-center col-12 col-sm-6 col-md-3 my-2" {...targetBlank}>
          <img className="capterra-badge" border="0" src="https://assets.capterra.com/badge/4700aedd505fa5881254166d19949239.png?v=2120646&p=173939" alt="Ledgy high Capterra rating" />
        </a>
      </div>
    </div>
  </div>;