// src/theme/index.ts

export const Colors = {
  // Backgrounds
  bg:        '#0A0A0F',
  bgCard:    '#12121E',
  bgElevated:'#1A1A2E',
  bgInput:   '#0D0D18',

  // Text
  textPrimary:   '#E8E8F0',
  textSecondary: '#9999B8',
  textMuted:     '#5A5A7A',
  textInverse:   '#0A0A0F',

  // Borders
  border:        '#1E1E2E',
  borderStrong:  '#2A2A3E',

  // Category accents
  creative:    '#C47A2A',
  critical:    '#2D4A8A',
  mindfulness: '#2D7A4A',

  // Semantic
  success:  '#10B981',
  white:    '#FFFFFF',
  overlay:  'rgba(0,0,0,0.6)',
} as const;

export const CategoryColors: Record<string, string> = {
  kreatywnosc:  Colors.creative,
  krytyczne:    Colors.critical,
  mindfulness:  Colors.mindfulness,
};

export const Spacing = {
  xs:  4,
  sm:  8,
  md:  16,
  lg:  24,
  xl:  32,
  xxl: 48,
} as const;

export const Radius = {
  sm:  8,
  md:  12,
  lg:  16,
  xl:  24,
  full: 999,
} as const;

export const FontSize = {
  xs:   11,
  sm:   13,
  md:   15,
  lg:   18,
  xl:   22,
  xxl:  28,
  huge: 36,
} as const;
