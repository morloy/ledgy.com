import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { CardLink } from './CardLink';

export const ContentBody = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <div className="container">{children}</div>
);

export const PostLink = ({
  post,
  to,
  defaultImage,
  external,
  description,
}: {
  post: ContentfulPageProps;
  to: string;
  defaultImage: UnknownObject;
  external?: boolean;
  description: string | Node;
}) => {
  const image = (
    <Img
      className="fit-cover"
      {...(post.cover?.localFile ? post.cover.localFile.childImageSharp : defaultImage)}
    />
  );
  const title = <h5>{post.title}</h5>;
  const { date } = post;
  return (
    <CardLink
      title={title}
      type="blog"
      description={description}
      date={date}
      to={to}
      image={image}
      external={external}
    />
  );
};

export const CoverImageFragment = graphql`
  fragment CoverImage on ImageSharp {
    fluid(maxWidth: 200, maxHeight: 200, cropFocus: CENTER) {
      ...GatsbyImageSharpFluid
    }
  }
  fragment DefaultCover on Query {
    ledgy: imageSharp(fluid: { originalName: { regex: "/ledgy.png/" } }) {
      ...CoverImage
    }
  }
`;

export const PublishDate = ({ date }: { date?: string }) =>
  date ? (
    <div className="d-flex py-4 justify-content-center">
      <div className="markdown-width">
        <small>{date}</small>
      </div>
    </div>
  ) : null;
