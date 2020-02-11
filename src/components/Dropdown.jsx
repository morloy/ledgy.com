// @flow

import React, { useState, type Node } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Button } from './Button';

export const Dropdown = ({
  toggleText,
  toggleClass = '',
  toggleProps = {},
  items,
  itemClass = ''
}: {|
  toggleText: Node,
  toggleClass?: string,
  toggleProps?: Object,
  items: Node[],
  itemClass?: string
|}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!isOpen)}
        className={`px-0 custom-dropdown-toggle ${isOpen ? 'open' : ''} ${toggleClass}`}
        {...toggleProps}
      >
        <span className="px-2">{toggleText}</span>
        <div className="dropdown-parent d-block position-relative">
          <CSSTransition in={isOpen} timeout={400} classNames="dropdown-transition" unmountOnExit>
            <ul className="dropdown-list position-absolute bg-white p-0">
              {items.map((item, index) => (
                <div
                  key={index} // eslint-disable-line react/no-array-index-key
                  className={`${itemClass} custom-dropdown-item ${isOpen ? 'open' : ''} p-2`}
                  onClick={() => setOpen(false)}
                  onKeyPress={() => setOpen(false)}
                  role="button"
                  tabIndex={index}
                >
                  {item}
                </div>
              ))}
            </ul>
          </CSSTransition>
        </div>
      </Button>
    </>
  );
};
