import React, { Node } from 'react';

export const Accordion = (props: { children: Node }) => (
  <div className="accordion my-4" {...props} />
);

export const AccordionItem = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string | Node;
  children: Node;
}) => {
  return (
    <div className="card mb-2 p-4">
      <h6 className="card-title mt-0 bg-white" id={id}>
        {title}
      </h6>
      <div id={`${id}-body`}>
        <div className="card-body py-1">{children}</div>
      </div>
    </div>
  );
};
