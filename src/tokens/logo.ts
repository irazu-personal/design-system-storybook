import { sparkAssetUrl } from '../utils/sparkAssetUrl';

export type LogoEntry = {
  name: string;
  slug: string;
  src: string;
};

export type LogoGroup = {
  name: string;
  /** Preview surface behind the logo. */
  surface: 'light' | 'dark';
  logos: LogoEntry[];
};

export const logoGroups: LogoGroup[] = [
  {
    name: 'Black',
    surface: 'light',
    logos: [
      {
        name: 'Logo only',
        slug: 'brandmark-black-logo-only',
        src: sparkAssetUrl('logo/brandmark-black-logo-only.svg'),
      },
      {
        name: 'Text only',
        slug: 'brandmark-black-text-only',
        src: sparkAssetUrl('logo/brandmark-black-text-only.svg'),
      },
      {
        name: 'Logo with text',
        slug: 'brandmark-black-logo-with-text',
        src: sparkAssetUrl('logo/brandmark-black-logo-with-text.svg'),
      },
    ],
  },
  {
    name: 'White',
    surface: 'dark',
    logos: [
      {
        name: 'Logo only',
        slug: 'brandmark-white-logo-only',
        src: sparkAssetUrl('logo/brandmark-white-logo-only.svg'),
      },
      {
        name: 'Text only',
        slug: 'brandmark-white-text-only',
        src: sparkAssetUrl('logo/brandmark-white-text-only.svg'),
      },
      {
        name: 'Logo with text',
        slug: 'brandmark-white-logo-with-text',
        src: sparkAssetUrl('logo/brandmark-white-logo-with-text.svg'),
      },
    ],
  },
];
