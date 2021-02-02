declare type Language = 'en' | 'de' | 'fr';

declare type Props = {
  prefix: string;
  lang: Language;
  data: UntypedObject;
};

declare type LocationProps = {
  pathname: string;
  hash?: string;
};

declare type LayoutProps = Props & {
  location: LocationProps;
};

declare type Mdx = { childMdx: { body: string } };

declare const graphql: DisableTypeScript;

declare type FormStatus =
  | 'idle'
  | 'loading'
  | 'invalid-email'
  | 'invalid-fields'
  | 'invalid-required-fields'
  | 'fetch-error'
  | 'submitted';
