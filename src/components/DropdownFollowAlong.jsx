// @flow

import React, { useState } from 'react';

const NAV_ID = 'custom-hover-nav';
const getNavbar = () => document.getElementById(NAV_ID);

export const DropdownFollowAlong = () => {
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
      const dropdown = currentTarget.querySelector('.hover-dropdown-element');

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
            transition: firstHover ? 'none' : 'all 300ms, opacity 100ms, transform 200ms'
          }}
        >
          <span className="arrow" />
        </div>
        <ul className="custom-hover-list">
          <li onMouseEnter={e => hoverIn(e)} onMouseLeave={e => hoverOut(e)}>
            <a href="#">Features</a>
            <ul className="hover-dropdown-element">
              <li>
                <a href="#">One feature</a>
              </li>
              <li>
                <a href="#">Another feature</a>
              </li>
            </ul>
          </li>
          <li onMouseEnter={e => hoverIn(e)} onMouseLeave={e => hoverOut(e)}>
            <a href="#">Pricing</a>
            <ul className="hover-dropdown-element">
              <li>
                <a href="#">Something about pricing</a>
              </li>
              <li>
                <a href="#">More about it</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};
