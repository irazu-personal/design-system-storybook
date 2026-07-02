import { sparkAssetUrl } from '../utils/sparkAssetUrl';

export type IllustrationEntry = {
  name: string;
  slug: string;
  src: string;
};

export type IllustrationGroup = {
  name: string;
  illustrations: IllustrationEntry[];
};

function illustration(name: string, slug: string): IllustrationEntry {
  return {
    name,
    slug,
    src: sparkAssetUrl(`illustrations/${slug}.svg`),
  };
}

export const illustrationGroups: IllustrationGroup[] = [
  {
    name: 'Box',
    illustrations: [
      illustration('Box open', 'illustration-box-open'),
      illustration('Box open (alt)', 'illustration-box-open-1'),
      illustration('Box closed', 'illustration-box-closed'),
      illustration('Empty state box (medium)', 'empty-state-box-medium'),
      illustration('Empty state box (small)', 'empty-state-box-small'),
    ],
  },
  {
    name: 'Books',
    illustrations: [
      illustration('Book', 'illustration-book'),
      illustration('Book 2', 'illustration-book-2'),
      illustration('Books', 'illustration-books'),
    ],
  },
  {
    name: 'Bottle',
    illustrations: [
      illustration('Bottle large', 'illustration-bottle-large'),
      illustration('Bottle small', 'illustration-bottle-small'),
    ],
  },
  {
    name: 'Tokens & objects',
    illustrations: [
      illustration('Tokens', 'illustration-tokens'),
      illustration('Tokens 2', 'illustration-tokens-2'),
      illustration('Cards', 'illustration-cards'),
      illustration('Candle', 'illustration-candle'),
      illustration('Cylinder', 'illustration-cylinder'),
      illustration('Paper', 'illustration-paper'),
    ],
  },
  {
    name: 'Magic',
    illustrations: [
      illustration('Magic stick and AI', 'illustration-magic-stick-and-ai'),
      illustration('Magic stick and key', 'illustration-magic-stick-and-key'),
    ],
  },
];
