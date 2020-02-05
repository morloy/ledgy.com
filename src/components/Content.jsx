// @flow

import React, { type Node } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { CardLink } from './CardLink';

export const ContentHeader = ({ title }: {| title: string |}) => (
  <header className="header text-white">
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </header>
);

export const ContentBody = ({ children }: {| children: Node | Array<Node> |}) => (
  <main className="main-content">
    <section className="section">
      <div className="container">{children}</div>
    </section>
  </main>
);

export const PostLink = ({
  post,
  to,
  defaultImage,
  external,
  description
}: {|
  post: Page,
  to: string,
  defaultImage: Object,
  external?: boolean,
  description: string | Node
|}) => {
  const image = (
    <Img
      className="fit-cover"
      {...(post.cover ? post.cover.localFile.childImageSharp : defaultImage)}
    />
  );
  const title = <h5>{post.title}</h5>;
  const { date } = post;
  return (
    <CardLink
      title={title}
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

export const PublishDate = ({ date }: {| date?: string |}) => (
  <div className="d-flex py-4">{date && <small>{date}</small>}</div>
);
