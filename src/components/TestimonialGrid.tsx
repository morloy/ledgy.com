import React from 'react';
import { Icon } from './Icon';

declare type TestimonialCardContentProps = {
  icon: IconType;
  description: string;
  name: string;
  position: string;
  link: string;
  url: string;
};

declare type TestimonialContentProps = TestimonialCardContentProps[];

const TestimonialCard = ({
  testimonialCardContent,
}: {
  testimonialCardContent: TestimonialCardContentProps;
}) => {
  const { description, name, position, link, url, icon } = testimonialCardContent;
  return (
    <div className="col-12 col-xl-6 p-3">
      <div className="col-12 p-5 testimonial-card">
        <Icon icon={icon} />
        <p className="my-5">{description}</p>
        <p className="my-0 text-muted">{name}</p>
        <div className="row">
          <p className=" col-6 m-0 text-muted">{position}</p>
          <div className="col-6 align-items-right text-right align-item-bottom">
            <a href={url} className="my-0 link-right">
              {`${link} >`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialGrid = ({
  testimonialContent,
}: {
  testimonialContent: TestimonialContentProps;
}) => {
  const firstCard = testimonialContent[0];
  return (
    <div className="container p-4 d-flex">
      <TestimonialCard testimonialCardContent={firstCard} />
      <TestimonialCard testimonialCardContent={firstCard} />
    </div>
  );
};
