import React from 'react';
import { track } from '../helpers';
import { Button } from './utils';

export const ProductHuntButton = ({
  productHuntLink,
  trackSignupKey,
  postId,
  altText,
}: {
  productHuntLink: string;
  trackSignupKey: string;
  postId: string;
  altText: string;
}) => (
  <Button
    href={productHuntLink}
    className="d-flex align-items-start p-0 mb-2"
    onClick={() => track(trackSignupKey)}
    inverted
  >
    <img
      src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${postId}&theme=light`}
      alt={altText}
      className="product-hunt-logo"
    />
  </Button>
);
