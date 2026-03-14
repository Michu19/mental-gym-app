// src/components/ui.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Spacing, Radius, FontSize } from "../theme";
import { useTheme } from "../theme/ThemeContext";
import type { Category } from "../data/exercises";

// ─── CategoryBadge ────────────────────────────────────────────────────────

interface CategoryBadgeProps {
  category: Category | string;
  label: string;
  small?: boolean;
}

export function CategoryBadge({ category, label, small }: CategoryBadgeProps) {
  const { categoryColors } = useTheme();
  const color = categoryColors[category] ?? "#888";
  return (
    <View
      style={[
        s.badge,
        { backgroundColor: color + "22", borderColor: color + "55" },
        small && s.badgeSmall,
      ]}
    >
      <Text style={[s.badgeText, { color }, small && s.badgeTextSmall]}>
        {label.toUpperCase()}
      </Text>
    </View>
  );
}

// ─── TimePill ─────────────────────────────────────────────────────────────

export function TimePill({ text }: { text: string }) {
  const { colors } = useTheme();
  return (
    <View
      style={[
        s.timePill,
        {
          backgroundColor: colors.bgElevated,
          borderColor: colors.borderStrong,
        },
      ]}
    >
      <Text style={[s.timePillText, { color: colors.textMuted }]}>
        ⏱ {text}
      </Text>
    </View>
  );
}

// ─── CheckButton ─────────────────────────────────────────────────────────

interface CheckButtonProps {
  done: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

export function CheckButton({ done, onPress, style }: CheckButtonProps) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        s.checkBtn,
        {
          backgroundColor: done ? colors.success + "22" : "transparent",
          borderColor: done ? colors.success : colors.borderStrong,
        },
        style,
      ]}
    >
      <Text
        style={[
          s.checkBtnText,
          { color: done ? colors.success : colors.textMuted },
        ]}
      >
        {done ? "✓  Ukończono" : "Oznacz jako ukończone"}
      </Text>
    </TouchableOpacity>
  );
}

// ─── SectionLabel ────────────────────────────────────────────────────────

export function SectionLabel({
  text,
  color,
}: {
  text: string;
  color?: string;
}) {
  const { colors } = useTheme();
  return (
    <Text style={[s.sectionLabel, { color: color ?? colors.textMuted }]}>
      {text}
    </Text>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────

export function Divider({
  color,
  style,
}: {
  color?: string;
  style?: ViewStyle;
}) {
  const { colors } = useTheme();
  return (
    <View
      style={[s.divider, { backgroundColor: color ?? colors.border }, style]}
    />
  );
}

// ─── ProgressRing ────────────────────────────────────────────────────────

interface ProgressRingProps {
  progress: number; // 0–1
  size?: number;
  color?: string;
}

export function ProgressRing({
  progress,
  size = 56,
  color,
}: ProgressRingProps) {
  const { colors } = useTheme();
  const accentColor = color ?? colors.critical;
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = progress * circ;

  return (
    <View style={{ width: size, height: size }}>
      <Svg
        width={size}
        height={size}
        style={{ transform: [{ rotate: "-90deg" }] }}
      >
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={colors.bgElevated}
          strokeWidth={4}
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={accentColor}
          strokeWidth={4}
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
        />
      </Svg>
      <View style={[StyleSheet.absoluteFillObject, s.ringInner]}>
        <Text style={[s.ringText, { color: accentColor }]}>
          {Math.round(progress * 100)}%
        </Text>
      </View>
    </View>
  );
}

// ─── Static styles (no colors) ───────────────────────────────────────────

const s = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  badgeSmall: { paddingHorizontal: 7, paddingVertical: 2 },
  badgeText: { fontSize: FontSize.xs, fontWeight: "700", letterSpacing: 1 },
  badgeTextSmall: { fontSize: 9 },

  timePill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  timePillText: { fontSize: FontSize.xs, letterSpacing: 0.5 },

  checkBtn: {
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
    alignItems: "center",
  },
  checkBtnText: {
    fontSize: FontSize.sm,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  sectionLabel: {
    fontSize: FontSize.xs,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  divider: { height: 1 },

  ringInner: { alignItems: "center", justifyContent: "center" },
  ringText: { fontSize: 11, fontWeight: "700" },
});
