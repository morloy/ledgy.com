// @flow

import React, { useState, type Node } from 'react';

export const Dropdown = ({
  toggle,
  items,
  itemClass = ''
}: {
  toggle: Node,
  items: Node[],
  itemClass?: string
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setOpen(!isOpen)}>
        {toggle}
      </button>
      <div className="d-block position-relative">
        {isOpen && (
          <ul className="dropdown-list position-absolute p-0">
            {items.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className={itemClass}>
                {item}
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
