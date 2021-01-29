

import React, { useState, Node } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Button } from "./Button";

export const Dropdown = ({
  toggleText,
  toggleIcon,
  toggleClass = '',
  toggleProps = {},
  items,
  itemClass = ''
}: {
  toggleText: Node;
  toggleIcon?: string;
  toggleClass?: string;
  toggleProps?: {
    [key: string]: any;
  };
  items: Node[];
  itemClass?: string;
}) => {
  const [isOpen, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(!isOpen)} className={`px-0 custom-dropdown-toggle ${isOpen ? 'open' : ''} ${toggleClass}`} {...toggleProps}>
        <span className="px-2">
          <FontAwesomeIcon className={`mr-2 dropdown-toggle-icon ${isOpen ? 'open' : ''}`} icon={toggleIcon || faPlus} />
          {toggleText}
        </span>
        <div className="dropdown-parent d-block position-relative">
          <CSSTransition in={isOpen} timeout={1000} classNames="dropdown-transition" unmountOnExit>
            <ul className="dropdown-list position-absolute bg-white p-0">
              {items.map((item, index) => <div key={index} // eslint-disable-line react/no-array-index-key
            className={`${itemClass} custom-dropdown-item p-2`} onClick={() => setOpen(false)} onKeyPress={() => setOpen(false)} role="button" tabIndex={index}>
                  {item}
                </div>)}
            </ul>
          </CSSTransition>
        </div>
      </Button>
    </>;
};