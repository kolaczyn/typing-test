type NavbarLink = { label: string; to: string };
export const persistentLinks: NavbarLink[] = [
  { label: 'play now', to: '/' },
  { label: 'ranking', to: '/ranking' },
  { label: 'settings', to: '/settings' },
];
export const loggedOutLinks: NavbarLink[] = [
  { label: 'sign in', to: '/sign-in' },
  { label: 'sign up', to: '/sign-up' },
];

export const loggedInLinks: NavbarLink[] = [
  { label: 'stats', to: '/stats' },
  { label: 'log out', to: '/log-out' },
];
