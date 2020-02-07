// @flow

import React, { useState } from 'react';

const NAV_ID = 'custom-hover-nav';
const getNavbar = () => document.getElementById(NAV_ID);

export const DropdownFollowAlong = () => {
  const [isFloatingBackground, setFloatingBackground] = useState(false);
  const [backgroundWidth, setBackgroundWidth] = useState('');
  const [backgroundHeight, setBackgroundHeight] = useState('');
  const [backgroundTransform, setBackgroundTransform] = useState('');

  const hoverIn = e => {
    const navbar = getNavbar();
    if (navbar) {
      const { currentTarget } = e;
      currentTarget.classList.add('trigger-enter');
      setTimeout(() => currentTarget.classList.add('trigger-enter-active'), 100);
      setFloatingBackground(true);
      const dropdown = currentTarget.querySelector('.custom-hover-dropdown');
      const dropdownPosition = dropdown.getBoundingClientRect();

      const nav = navbar.getBoundingClientRect();
      const shiftX = dropdownPosition.left - nav.left;
      const shiftY = dropdownPosition.top - nav.top;

      setBackgroundWidth(`${dropdownPosition.width}px`);
      setBackgroundHeight(`${dropdownPosition.height}px`);
      setBackgroundTransform(`translate(${shiftX}px, ${shiftY}px)`);
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
          className={`dropdown-background ${isFloatingBackground ? 'open' : ''}`}
          style={{
            width: backgroundWidth,
            height: backgroundHeight,
            transform: backgroundTransform
          }}
        >
          <span className="arrow" />
        </div>
        <ul className="custom-hover-list">
          <li onMouseEnter={e => hoverIn(e)} onMouseLeave={e => hoverOut(e)}>
            <a href="#">Features</a>
            <ul className="custom-hover-dropdown">
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
            <ul className="custom-hover-dropdown">
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
