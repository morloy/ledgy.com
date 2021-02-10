import React from 'react';
import Img from 'gatsby-image';
import { Section } from './Section';

const Logo = ({ logo }: { logo: Image }) => {
  const { childImageSharp } = logo?.localFile || {};
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-2 my-2">
      {!!childImageSharp && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '70px' }}
        >
          <Img {...childImageSharp} />
        </div>
      )}
    </div>
  );
};

export const LogoBanner = (props: LogoBannerProps) => (
  <Section>
    <div className="row align-items-center justify-content-around">
      {props.logos.map((v) => (
        <Logo logo={v} key={`logo-banner-${v.title}`} />
      ))}
    </div>
  </Section>
);
