import React from "react";
import { Link } from "gatsby";
import { helpUrl, targetBlank } from "../helpers";

const NotFoundPage = () => <div>
    <header className="header py-40" style={{ backgroundColor: '#29363d' }} />

    <div className="container py-200">
      <header className="section-header">
        <h1 className="mt-4">Page not found</h1>
        <hr />
        <p className="lead">Oh no! We couldn’t find that page.</p>
        <p className="lead">
          Were you looking for features for{' '}
          <Link href to="/finance">
            finance
          </Link>
          ,{' '}
          <Link href to="/human-resources">
            human resources
          </Link>
          , or{' '}
          <Link href to="/investors">
            investors
          </Link>
          ? Maybe need some{' '}
          <a href={helpUrl} {...targetBlank}>
            help
          </a>
          ?
        </p>
      </header>
    </div>
  </div>;

export default NotFoundPage;