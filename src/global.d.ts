import { GatsbyImageProps } from 'gatsby-image';

declare global {
  type Image = {
    localFile?: { childImageSharp: GatsbyImageProps };
    title: string;
    description?: string;
  };
  type Company = {
    name: string;
    logo: Image;
    cover: Image;
    contactName: string;
    contactTitle: string;
    mainQuote: Mdx;
    yearFounded: string;
    funding?: string;
    employeeCount: string;
    sector: string;
    location: string;
    stage: string;
  };
}
