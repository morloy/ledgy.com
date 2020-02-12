// @flow

import React, { useState, type Node } from 'react';
import { Link } from 'gatsby';

import { getNavbarTitles, getNavbarLinks } from './lib';

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
      <h4 className={`text-primary mt-2 ${text ? 'mb-1' : 'mb-2'}`}>{title}</h4>
    </Link>
    {text && <div className="mb-3">{text}</div>}
  </li>
);

const { featuresTitle, resourcesTitle, pricingTitle, dataProtectionTitle } = getNavbarTitles();
const { features, resources, pricing, dataProtection } = getNavbarLinks();

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
            <p>{featuresTitle}</p>
            <ul className="hover-list-child features-dd">
              {features.map(([to, title, text]) => (
                <ListItemHover to={to} title={title} text={text} prefix={props.prefix} key={to} />
              ))}
            </ul>
          </li>

          <li {...eventHandlingProps}>
            <p>{resourcesTitle}</p>
            <ul className="hover-list-child resources-dd">
              {resources.map(([to, title, text]) => (
                <ListItemHover to={to} title={title} text={text} prefix={props.prefix} key={to} />
              ))}
            </ul>
          </li>

          <li {...eventHandlingProps}>
            <p>{pricingTitle}</p>
            <ul className="hover-list-child pricing-dd">
              {pricing.map(([to, title, text]) => (
                <ListItemHover to={to} title={title} text={text} prefix={props.prefix} key={to} />
              ))}
            </ul>
          </li>

          <li>
            <Link href to={`${props.prefix}/${dataProtection[0][0]}`}>
              {dataProtectionTitle}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
