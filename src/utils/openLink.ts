export const openLinkInNewTab = (url: string) => {
  if (!url) return;

  window.open(url, '_blank', 'noopener,noreferrer');
};
