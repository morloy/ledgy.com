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

declare type ContentfulIndexEntry = {
  __typename: string;
  id: string;
  title: string;
  description?: string;
  image?: Image;
  link?: string;
  linkTo?: string;
  logos?: Image[];
  name?: string;
  quote?: string;
};

declare type AllContentfulCustomerStoryProps = {
  id: string;
  company: Company;
  slug: string;
};

declare type CustomerStoryBaseProps = AllContentfulCustomerStoryProps & {
  title: string;
  subtitle: string;
  date: string;
};

declare type CustomerStoryProps = CustomerStoryBaseProps & { content: Mdx; language: Language };
