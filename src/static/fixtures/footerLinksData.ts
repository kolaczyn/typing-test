type FooterLinkData = {
  href: string;
  icon: string;
  label: string;
  target?: string;
  rel?: string;
};
const footerLinksData: FooterLinkData[] = [
  {
    href: 'https://github.com/kolaczyn',
    icon: 'fab fa-github',
    label: 'github',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    href: 'https://twitter.com/kolaczyn',
    icon: 'fab fa-twitter',
    label: 'twitter',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    href: 'mailto:kolaczyn@protonmail.com',
    icon: 'fas fa-envelope',
    label: 'email',
  },
  {
    href: 'https://kolaczyn.com',
    icon: 'fas fa-code',
    label: 'website',
    target: '_blank',
    rel: 'noreferrer',
  },
];

export default footerLinksData;
