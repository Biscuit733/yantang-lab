export type NavItem = {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Articles', path: '/articles' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
]
