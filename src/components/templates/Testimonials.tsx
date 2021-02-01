import React, { Node } from 'react';
import { Trans, t } from '@lingui/macro';

import { Testimonial } from '../Testimonial';

export const Testimonials = ({ data }: UnknownObject): Node => {
  const TESTIMONIALS = [
    {
      name: 'Johannes Reck, CEO @ GetYourGuide',
      description: (
        <Trans>
          Without employee participation plans, companies miss the opportunity to incentivize young
          people to work in a startup by profiting from its success.
        </Trans>
      ),
      url: 'https://press.getyourguide.com/executive-team',
      img: data.johannesreck,
      rounded: true,
    },
    {
      name: 'Janina Mütze, CEO @ Civey',
      description: (
        <Trans>
          I am convinced companies grow thanks to the people they attract and employ. Let’s reduce
          complexity and enable founders to let their members be part of the companies’ success.
        </Trans>
      ),
      url: 'https://civey.com/',
      img: data.janinamutze,
      rounded: true,
    },
    {
      name: 'Dr. Tamaz Georgadze, CEO @ Raisin',
      description: (
        <Trans>
          We can’t compete for the best global talent without having a broad and easy-to-handle
          employee participation scheme.
        </Trans>
      ),
      url: 'https://www.raisin.com/',
      img: data.tamazgeorgadze,
      rounded: true,
    },
    {
      name: 'Christian Reber, CEO @ Pitch',
      description: (
        <Trans>
          I want everyone in the company to participate in its success from the beginning. In the US
          this is already the norm, but in Germany, it’s still complicated.
        </Trans>
      ),
      url: 'https://pitch.com/',
      img: data.christianreber,
      rounded: true,
    },
    {
      name: 'Maria Weiers, Partner @ Taylor Wessing',
      description: (
        <Trans>
          The powerful synergy of our law firm’s expertise and Ledgy’s founder-oriented technology
          is paving the way to spread knowledge on how to involve employees in a startup’s success.
        </Trans>
      ),
      url: 'https://deutschland.taylorwessing.com/en/home',
      img: data.taylorwessing,
      rounded: false,
    },
    {
      name: 'Dr. Thomas Gemmeke, Head of Legal @ Baker Tilly',
      description: (
        <Trans>
          Employee participation plans are key to taking a startup to the next level. We combined
          our legal expertise and PSOP templates together with Ledgy, so that German startups can
          reward their talented employees.
        </Trans>
      ),
      url: 'https://www.bakertilly.global/en/',
      img: data.bakertilly,
      rounded: false,
    },
  ];

  const testimonials = TESTIMONIALS.map(({ name, description, url, img, rounded }) => (
    <Testimonial
      col={rounded ? 3 : 5}
      key={name}
      name={name}
      url={url}
      img={img}
      description={description}
      rounded={rounded}
    />
  ));

  return (
    <div className="py-6">
      <div className="row text-center justify-content-center mb-3">{testimonials}</div>
      <div className="row text-center justify-content-center">
        <Testimonial
          col={10}
          name={t`Dominic Jacquesson, VP Talent @ Index Ventures, a VC who founded the Not Optional initiative`}
          img={data.notoptional}
          url="https://notoptional.eu/en/"
          minHeight={0}
          description={
            <Trans>
              Any initiative that makes it easier for companies and employees to increase their use
              of stock options is a welcome one. We applaud Ledgy for helping entrepreneurs in
              Germany to set up robust and fair virtual stock option schemes. Our hope is that
              legislators in Germany will make reforming stock option policies a priority in 2020,
              allowing employees to receive real stock options, not just virtual ones.
            </Trans>
          }
        />
      </div>
    </div>
  );
};
