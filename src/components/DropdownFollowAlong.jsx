// @flow

import React, { useState, type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';

const NAV_ID = 'custom-hover-nav';
const getNavbar = () => document.getElementById(NAV_ID);

const ListItemHover = ({
  to,
  prefix,
  title,
  text
}: {|
  to: string,
  prefix: string,
  title: Node,
  text?: Node
|}) => (
  <li className="list-item-hover">
    <Link href to={`${prefix}/${to}`}>
      <h4 className={`text-primary mt-2 ${text ? 'mb-1' : 'mb-3'}`}>{title}</h4>
    </Link>
    {text && (
      <div className="mb-3">
        <Trans>{text}</Trans>
      </div>
    )}
  </li>
);

const features = [
  [
    'finance',
    <Trans>For Finance</Trans>,
    <Trans>
      All-in-one solution for your company’s cap table, equity plans, modeling, investor relations,
      due diligence and document signing automation.
    </Trans>
  ],
  [
    'human-resources',
    <Trans>For Human Resources</Trans>,
    <Trans>
      Equity plans on autopilot, with document signing batch processing for any number of employee
      grants and an engaging employee dashboard.
    </Trans>
  ],
  [
    'investors',
    <Trans>For Investors</Trans>,
    <Trans>
      Flexible reporting and portfolio management solution for business angels, professional
      investors and funds.
    </Trans>
  ]
];

const resources = [
  [
    'help',
    <Trans>Help</Trans>,
    <Trans>
      Check out our help center to resolve your doubts about equity and how to use Ledgy
    </Trans>
  ],
  [
    'blog',
    <Trans>Blog</Trans>,
    <Trans>
      In the blog you will find detailed explanations about topics concerning equity management,
      employee engagement, investor relations, and more.
    </Trans>
  ],
  [
    'webinar',
    <Trans>Webinars</Trans>,
    <Trans>Our collection of Ledgy webinars addressing the most requested topics.</Trans>
  ],
  [
    'partners',
    <Trans>Lawyer Partners</Trans>,
    <Trans>Discover what law firms we cooperate with and how they empower Ledgy.</Trans>
  ]
];

const pricing = [
  ['pricing/companies', <Trans>For Companies</Trans>],
  ['pricing/investors', <Trans>For Investors</Trans>]
];

export const DropdownFollowAlong = (props: LayoutProps) => {
  const [isFloatingBackground, setFloatingBackground] = useState(false);
  const [backgroundWidth, setBackgroundWidth] = useState('');
  const [backgroundHeight, setBackgroundHeight] = useState('');
  const [backgroundTransform, setBackgroundTransform] = useState('');
  const [firstHover, setFirstHover] = useState(true);

  const hoverIn = e => {
    const navbar = getNavbar();
    if (navbar) {
      const { currentTarget } = e;
      currentTarget.classList.add('trigger-enter');
      setTimeout(() => currentTarget.classList.add('trigger-enter-active'), 100);
      const dropdown = currentTarget.querySelector('.hover-list-child');

      const dropdownPosition = dropdown.getBoundingClientRect();
      const nav = navbar.getBoundingClientRect();
      const shiftX = dropdownPosition.left - nav.left;
      const shiftY = dropdownPosition.top - nav.top;

      setFloatingBackground(true);
      setBackgroundWidth(`${dropdownPosition.width}px`);
      setBackgroundHeight(`${dropdownPosition.height}px`);
      setBackgroundTransform(`translate(${shiftX}px, ${shiftY}px)`);
      if (firstHover) setTimeout(() => setFirstHover(false), 0);
    }
  };

  const hoverOut = e => {
    const { currentTarget } = e;
    currentTarget.classList.remove('trigger-enter');
    setTimeout(() => currentTarget.classList.remove('trigger-enter-active'), 100);
    setFloatingBackground(false);
  };

  const eventHandlingProps = {
    onMouseEnter: e => hoverIn(e),
    onMouseLeave: e => hoverOut(e)
  };
  return (
    <>
      <nav id={NAV_ID}>
        <div
          className={`dropdown-background d-flex justify-content-center position-absolute bg-white ${
            isFloatingBackground ? 'open' : ''
          }`}
          style={{
            width: backgroundWidth,
            height: backgroundHeight,
            transform: backgroundTransform,
            transition: firstHover ? 'opacity 300ms' : 'all 500ms, opacity 300ms, transform 200ms'
          }}
        >
          <span className="arrow" />
        </div>
        <ul className="hover-list-parent">
          <li {...eventHandlingProps}>
            <p>
              <Trans>Features</Trans>
            </p>
            <ul className="hover-list-child">
              {features.map(([to, title, text]) => (
                <ListItemHover to={to} title={title} text={text} prefix={props.prefix} key={to} />
              ))}
            </ul>
          </li>

          <li {...eventHandlingProps}>
            <p>
              <Trans>Resources</Trans>
            </p>
            <ul className="hover-list-child">
              {resources.map(([to, title, text]) => (
                <ListItemHover to={to} title={title} text={text} prefix={props.prefix} key={to} />
              ))}
            </ul>
          </li>

          <li {...eventHandlingProps}>
            <p>
              <Trans>Pricing</Trans>
            </p>
            <ul className="hover-list-child">
              {pricing.map(([to, title, text]) => (
                <ListItemHover to={to} title={title} text={text} prefix={props.prefix} key={to} />
              ))}
            </ul>
          </li>

          <li>
            <Link href to={`${props.prefix}/data-protection`}>
              <Trans>Data protection</Trans>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};