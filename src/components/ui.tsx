// src/components/ui.tsx
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ViewStyle, TextStyle,
} from 'react-native';
import { Colors, CategoryColors, Spacing, Radius, FontSize } from '../theme';
import type { Category } from '../data/exercises';

// ─── CategoryBadge ────────────────────────────────────────────────────────

interface CategoryBadgeProps {
  category: Category;
  label: string;
  small?: boolean;
}

export function CategoryBadge({ category, label, small }: CategoryBadgeProps) {
  const color = CategoryColors[category];
  return (
    <View style={[styles.badge, { backgroundColor: color + '22', borderColor: color + '55' }, small && styles.badgeSmall]}>
      <Text style={[styles.badgeText, { color }, small && styles.badgeTextSmall]}>
        {label.toUpperCase()}
      </Text>
    </View>
  );
}

// ─── TimePill ─────────────────────────────────────────────────────────────

interface TimePillProps {
  text: string;
}

export function TimePill({ text }: TimePillProps) {
  return (
    <View style={styles.timePill}>
      <Text style={styles.timePillText}>⏱ {text}</Text>
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
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.checkBtn,
        done && styles.checkBtnDone,
        style,
      ]}
    >
      <Text style={[styles.checkBtnText, done && styles.checkBtnTextDone]}>
        {done ? '✓  Ukończono' : 'Oznacz jako ukończone'}
      </Text>
    </TouchableOpacity>
  );
}

// ─── SectionLabel ────────────────────────────────────────────────────────

export function SectionLabel({ text, color }: { text: string; color?: string }) {
  return (
    <Text style={[styles.sectionLabel, color ? { color } : {}]}>
      {text}
    </Text>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────

export function Divider({ color, style }: { color?: string; style?: ViewStyle }) {
  return (
    <View style={[styles.divider, color ? { backgroundColor: color } : {}, style]} />
  );
}

// ─── ProgressRing ────────────────────────────────────────────────────────

import Svg, { Circle } from 'react-native-svg';

interface ProgressRingProps {
  progress: number; // 0–1
  size?: number;
  color?: string;
}

export function ProgressRing({ progress, size = 56, color = Colors.critical }: ProgressRingProps) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = progress * circ;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} style={{ transform: [{ rotate: '-90deg' }] }}>
        <Circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={Colors.bgElevated} strokeWidth={4} />
        <Circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color} strokeWidth={4}
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
        />
      </Svg>
      <View style={[StyleSheet.absoluteFillObject, styles.ringInner]}>
        <Text style={[styles.ringText, { color }]}>{Math.round(progress * 100)}%</Text>
      </View>
    </View>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  badgeSmall: {
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: FontSize.xs,
    fontWeight: '700',
    letterSpacing: 1,
  },
  badgeTextSmall: {
    fontSize: 9,
  },
  timePill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
    backgroundColor: Colors.bgElevated,
    borderWidth: 1,
    borderColor: Colors.borderStrong,
    alignSelf: 'flex-start',
  },
  timePillText: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
    letterSpacing: 0.5,
  },
  checkBtn: {
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.borderStrong,
    alignItems: 'center',
  },
  checkBtnDone: {
    borderColor: Colors.success + '80',
    backgroundColor: Colors.success + '15',
  },
  checkBtnText: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    letterSpacing: 0.5,
  },
  checkBtnTextDone: {
    color: Colors.success,
  },
  sectionLabel: {
    fontSize: FontSize.xs,
    fontWeight: '700',
    letterSpacing: 2,
    color: Colors.textMuted,
    textTransform: 'uppercase',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },
  ringInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringText: {
    fontSize: 11,
    fontWeight: '700',
  },
});
