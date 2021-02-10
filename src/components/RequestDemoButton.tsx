import React from 'react';
import { Link } from 'gatsby';

import { Button } from './Button';
import { demoPage } from '../helpers';
import { DynamicTrans } from './DynamicTrans';

export const RequestDemoButton = ({
  buttonClassName,
  prefix,
  location,
  buttonText = 'Book a Demo',
}: {
  buttonClassName: string;
  prefix: string;
  location?: LocationProps;
  buttonText?: string;
}) => {
  const isDemoPage = !!location && location.pathname.includes('demo');
  const ButtonText = <DynamicTrans>{buttonText}</DynamicTrans>;

  return isDemoPage ? (
    <Button
      cta
      className={buttonClassName}
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
    >
      {ButtonText}
    </Button>
  ) : (
    <>
      <Link to={`${prefix}${demoPage}`}>
        <Button cta className={buttonClassName}>
          {ButtonText}
        </Button>
      </Link>
    </>
  );
};
