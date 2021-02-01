import React, { useState, Node, MouseEventHandler } from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

import { getNavbarTitles, getNavbarLinks, formatUrl, isExternalUrl } from '../lib';
import { targetBlank } from '../../helpers';

type Event = React.SyntheticEvent<HTMLInputElement>;
type ListItemProps = { title: Node; isTextShown: boolean; prefix: string };

type ListItemHoverProps = ListItemProps & {
  to: string;
  text?: Node;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

type ParentListItemProps = ListItemProps & {
  eventHandlingProps: { onMouseEnter: (arg0: Event) => void; onMouseLeave: (arg0: Event) => void };
  menuItems: {
    [key: string]: any; // TS FIXME type this
  }[];
  disappear: (arg0: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className: string;
};

const NAV_ID = 'custom-hover-nav';
const getNavbar = () => document.getElementById(NAV_ID);

const ListItemHover = ({ to, prefix, title, text, onClick, isTextShown }: ListItemHoverProps) => {
  const itemContent = (
    <>
      <h4 className={`text-primary mt-2 ${text ? 'mb-1' : 'mb-2'}`}>{title}</h4>
      {text && <div className="list-item-hover-text mb-3">{text}</div>}
    </>
  );

  return (
    <li className={`list-item-hover ${isTextShown ? 'show' : 'hide'}`}>
      {isExternalUrl(to) ? (
        <a href={to} onClick={onClick} {...targetBlank}>
          {itemContent}
        </a>
      ) : (
        <Link href to={formatUrl(prefix, to)} onClick={onClick}>
          {itemContent}
        </Link>
      )}
    </li>
  );
};

const ParentListItem = ({
  eventHandlingProps,
  title: parentTitle,
  menuItems,
  prefix,
  disappear,
  isTextShown,
  className,
}: ParentListItemProps) => (
  <li {...eventHandlingProps}>
    <p>{parentTitle}</p>
    <ul className={`hover-list-child ${className}`}>
      {menuItems.map((
        [to, title, text] //TS FIXME
      ) => (
        <ListItemHover
          to={to}
          title={title}
          text={text}
          prefix={prefix}
          key={to}
          onClick={(e) => disappear(e)}
          isTextShown={isTextShown}
        />
      ))}
    </ul>
  </li>
);

const { featuresTitle, resourcesTitle, pricingTitle, dataProtectionTitle } = getNavbarTitles();
const { features, resources, pricing, dataProtection } = getNavbarLinks();

const parentListItems = [
  [featuresTitle, features, 'features-dd'],
  [resourcesTitle, resources, 'resources-dd'],
  [pricingTitle, pricing, 'pricing-dd'],
];

export const DropdownFollowAlong = (props: LayoutProps) => {
  const [isFloatingBackground, setFloatingBackground] = useState(false);
  const [backgroundWidth, setBackgroundWidth] = useState('');
  const [backgroundHeight, setBackgroundHeight] = useState('');
  const [backgroundTransform, setBackgroundTransform] = useState('');
  const [firstHover, setFirstHover] = useState(true);
  const [isTextShown, setShowText] = useState(true);

  const hoverIn = (e) => {
    setShowText(true);
    const navbar = getNavbar();
    if (navbar) {
      const { currentTarget } = e;
      currentTarget.classList.add('trigger-enter');
      setTimeout(() => currentTarget.classList.add('trigger-enter-active'), 100);
      const dropdown = currentTarget.querySelector('.hover-list-child');
      if (dropdown) {
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
    }
  };

  const hoverOut = (e) => {
    const { currentTarget } = e;
    currentTarget.classList.remove('trigger-enter');
    setTimeout(() => currentTarget.classList.remove('trigger-enter-active'), 100);
    setFloatingBackground(false);
  };

  const disappear = () => {
    setShowText(false);
    setFloatingBackground(false);
    const triggered = document.querySelector('.trigger-enter');
    if (triggered) triggered.classList.remove('trigger-enter');
  };

  const eventHandlingProps = {
    onMouseEnter: (e) => hoverIn(e),
    onMouseLeave: (e) => hoverOut(e),
  };
  return (
    <>
      <nav id={NAV_ID}>
        <CSSTransition
          in={isFloatingBackground}
          timeout={500}
          classNames="dropdown-background-transition"
          unmountOnExit
        >
          <div
            className="dropdown-background d-flex justify-content-center position-absolute bg-white"
            style={{
              width: backgroundWidth,
              height: backgroundHeight,
              transform: backgroundTransform,
              transition: firstHover ? 'opacity 300ms' : 'all 200ms',
            }}
          >
            <span className="arrow" />
          </div>
        </CSSTransition>

        <ul className="hover-list-parent">
          {parentListItems.map(([parentTitle, menuItems, className]) => (
            <ParentListItem
              key={className}
              eventHandlingProps={eventHandlingProps}
              title={parentTitle}
              menuItems={menuItems}
              prefix={props.prefix}
              disappear={disappear}
              isTextShown={isTextShown}
              className={className}
            />
          ))}
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
