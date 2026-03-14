// src/theme/index.ts

export type ColorScheme = {
  bg: string;
  bgCard: string;
  bgElevated: string;
  bgInput: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;
  border: string;
  borderStrong: string;
  creative: string;
  critical: string;
  mindfulness: string;
  success: string;
  white: string;
  overlay: string;
};

export const DarkColors: ColorScheme = {
  bg: "#0A0A0F",
  bgCard: "#12121E",
  bgElevated: "#1A1A2E",
  bgInput: "#0D0D18",
  textPrimary: "#E8E8F0",
  textSecondary: "#9999B8",
  textMuted: "#5A5A7A",
  textInverse: "#0A0A0F",
  border: "#1E1E2E",
  borderStrong: "#2A2A3E",
  creative: "#C47A2A",
  critical: "#4060C8",
  mindfulness: "#2D9060",
  success: "#10B981",
  white: "#FFFFFF",
  overlay: "rgba(0,0,0,0.6)",
};

export const LightColors: ColorScheme = {
  bg: "#F5F5FA",
  bgCard: "#FFFFFF",
  bgElevated: "#EEEEF8",
  bgInput: "#F0F0F8",
  textPrimary: "#1A1A2E",
  textSecondary: "#5A5A7A",
  textMuted: "#9090A8",
  textInverse: "#FFFFFF",
  border: "#DCDCE8",
  borderStrong: "#C4C4D8",
  creative: "#C47A2A",
  critical: "#4060C8",
  mindfulness: "#2D9060",
  success: "#0D9E6E",
  white: "#FFFFFF",
  overlay: "rgba(0,0,0,0.4)",
};

// Kept for backward compat; prefer useTheme() in components
export const Colors = DarkColors;

export function makeCategoryColors(
  colors: ColorScheme,
): Record<string, string> {
  return {
    kreatywnosc: colors.creative,
    krytyczne: colors.critical,
    mindfulness: colors.mindfulness,
  };
}

export const CategoryColors: Record<string, string> =
  makeCategoryColors(DarkColors);

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

export const FontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 18,
  xl: 22,
  xxl: 28,
  huge: 36,
} as const;
