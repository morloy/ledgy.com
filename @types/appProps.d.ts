declare type Language = 'en' | 'de' | 'fr';

declare type Props = {
  prefix: string;
  lang: Language;
  data: UnknownObject; // TS FIXME
};

declare type LocationProps = {
  pathname: string;
  hash?: string;
};

declare type LayoutProps = Props & {
  location: LocationProps;
};

declare type Mdx = { childMdx: { body: string } };

declare type Image = {
  localFile?: { childImageSharp: UnknownObject };
  title: string;
  description?: string;
};

declare type ContentfulPageProps = {
  id: string;
  title: string;
  description: string;
  date?: string;
  author?: string;
  content: Mdx;
  slug: string;
  language: Language;
  cover?: Image;
};

declare type Company = {
  name: string;
  logo: Image;
  cover: Image;
  contactName: string;
  contactTitle: string;
  mainQuote: Mdx;
  yearFounded: string;
  funding: ?string;
  employeeCount: string;
  sector: string;
  location: string;
  stage: string;
};

declare type CustomerStory = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  company: Company;
  content: Mdx;
  date: string;
  language: Language;
  author?: string;
};

declare const graphql: DisableTypeScript;

declare type FormStatus =
  | 'idle'
  | 'loading'
  | 'invalid-email'
  | 'invalid-fields'
  | 'invalid-required-fields'
  | 'fetch-error'
  | 'submitted';
