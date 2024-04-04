import type { IconType } from 'react-icons';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const navbarItems: string[] = ['Home', 'About', 'Blogs', 'Portfolio', 'Contact'];

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
