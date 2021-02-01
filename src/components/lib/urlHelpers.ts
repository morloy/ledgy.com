export const isExternalUrl = (url: string) => url.startsWith('http') || url.startsWith('www');

export const formatUrl = (prefix: string, url: string) => `${prefix}/${url}`;

export const checkAndFormatUrl = (prefix: string, url: string) =>
  isExternalUrl(url) ? url : formatUrl(prefix, url);
