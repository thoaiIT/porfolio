import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export type ItemType = {
  label: string;
  el?: ReactNode;
  url?: string;
};

export const navbarItems: ItemType[] = [
  { label: 'Home', url: '/home' },
  { label: 'About', url: '/about' },
  { label: 'Blogs', url: '/blogs' },
  { label: 'Portfolio', url: '/portfolio' },
  { label: 'Contact', url: '/contact' },
];

export type SocialItemType = {
  label: string;
  el: IconType;
};
export const socialItems: SocialItemType[] = [
  {
    label: 'facebook',
    el: FaFacebookF,
  },
  {
    label: 'linkedin',
    el: FaLinkedinIn,
  },
  {
    label: 'github',
    el: FaGithub,
  },
];
