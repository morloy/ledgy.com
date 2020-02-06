// @flow

import React, { useState, type Node } from 'react';
import { Button } from './Button';

export const Dropdown = ({
  toggleText,
  toggleProps = {},
  items,
  itemClass = ''
}: {|
  toggleText: Node,
  toggleProps?: Object,
  items: Node[],
  itemClass?: string
|}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!isOpen)} {...toggleProps}>
        {toggleText}
      </Button>
      <div className="d-block position-relative">
        {isOpen && (
          <ul className="dropdown-list position-absolute p-0">
            {items.map((item, index) => (
              <div
                key={index} // eslint-disable-line react/no-array-index-key
                className={itemClass}
                onClick={() => setOpen(false)}
                onKeyPress={() => setOpen(false)}
                role="button"
                tabIndex={index}
              >
                {item}
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
