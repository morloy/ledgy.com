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

declare type IconType =
  | 'calculator'
  | 'chart'
  | 'documents'
  | 'hr'
  | 'lock'
  | 'map'
  | 'moneybag'
  | 'robot'
  | 'rocket';

declare type FeatureGridSectionProps = { icon: IconType; title: string; description: string };

declare type FeatureGridContentProps = {
  header: string;
  sections: FeatureGridSectionProps[];
};

declare type TestimonialCardProps = {
  logo: Image;
  text: Mdx;
  signature: string;
  linkText: string;
  linkPath: string;
};

declare type TitleWithGraphicProps = {
  graphic: Image;
  motivationText: string;
  title: string;
  description: string;
};

declare type ContentWithChecklistProps = {
  header: string;
  description: string;
  linkText: string;
  linkUrl: string;
  checklist: string[];
};

declare type CallToActionProps = {
  header: string;
  description: string;
  buttonText: string;
  buttonPath: string;
  externalLinkText: string;
  externalLinkUrl: string;
  icon: IconType;
  secondaryHeader: string;
  secondaryDescription: string;
  secondaryLinkText: string;
  secondaryLinkPath: string;
};

declare type LogoBannerProps = {
  logos: Image[];
};

type SelectableCardWithScreenshotProps = {
  header: string;
  description: string;
  screenshot: Image;
};

declare type SelectableCardsWithScreenshotsProps = {
  title: string;
  content: SelectableCardWithScreenshotProps[];
};
