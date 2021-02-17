type Id = { id: string };

declare type EntryProps =
  | LogoBannerProps
  | SelectableCardsWithScreenshotsProps
  | FeatureGridContentProps
  | TestimonialCardsProps
  | TitleWithGraphicProps
  | ContentWithChecklistProps
  | CallToActionProps
  | ChecklistWithScreenshotProps;

declare type ContentfulPageProps = Id & {
  title: string;
  description: string;
  date?: string;
  author?: string;
  content: Mdx;
  slug: string;
  language: Language;
  cover?: Image;
};

declare type AllContentfulCustomerStoryProps = Id & {
  company: Company;
  slug: string;
};

declare type CustomerStoryBaseProps = AllContentfulCustomerStoryProps & {
  title: string;
  subtitle: string;
  date: string;
};

declare type CustomerStoryProps = CustomerStoryBaseProps & { content: Mdx; language: Language };

declare type FeatureGridSectionProps = { icon: IconType; title: string; description: string };

declare type FeatureGridContentProps = Id & {
  __typename: 'ContentfulFeatureGrid';
  header: string;
  sections: FeatureGridSectionProps[];
};

declare type TestimonialCardProps = {
  logo: Image;
  text: Mdx;
  signature: string;
  linkText?: string;
  linkPath?: string;
};

declare type TestimonialCardsProps = Id & {
  __typename: 'ContentfulTestimonialCards';
  cards: TestimonialCardProps[];
};

declare type BaseFeatureProps = Id & {
  title: string;
  description: string;
  graphic: Image;
  motivationText: string;
};

declare type FeaturePageProps = BaseFeatureProps & {
  slug: string;
  entries: EntryProps[];
};

declare type TitleWithGraphicProps = BaseFeatureProps & {
  __typename: 'ContentfulTitleWithGraphic';
};

declare type ContentWithChecklistProps = Id & {
  __typename: 'ContentfulContentWithChecklist';
  header: string;
  description: string;
  linkText: string;
  linkUrl: string;
  checklist: string[];
};

declare type CallToActionProps = Id & {
  __typename: 'ContentfulCallToAction2021';
  header: string;
  description: string;
  buttonText: string;
  buttonPath: string;
  icon: IconType;
  secondaryHeader: string;
  secondaryDescription: string;
  secondaryLinkText: string;
  secondaryLinkPath: string;
  externalLinkText?: string;
  externalLinkUrl?: string;
};

declare type LogoBannerProps = Id & {
  __typename: 'ContentfulLogoBanner';
  logos: Image[];
};

type SelectableCardWithScreenshotProps = {
  title: string;
  description: string;
  screenshot: Image;
};

declare type SelectableCardsWithScreenshotsProps = Id & {
  __typename: 'ContentfulSelectableCardsWithScreenshots';
  header: string;
  content: SelectableCardWithScreenshotProps[];
};

declare type TopBannerProps = Id & {
  __typename: 'ContentfulTopBanner';
  mainHeader: string;
  description: string;
  firstButtonText: string;
  firstButtonUrl: string;
  secondButtonText: string;
  secondButtonUrl: string;
  image: Image;
};

declare type ChecklistWithScreenshotProps = Id & {
  __typename: 'ContentfulChecklistWithScreenshot';
  header: string;
  description: string;
  image: Image;
  checklist: string[];
};

declare type MainPageEntryProps = TopBannerProps | EntryProps;
