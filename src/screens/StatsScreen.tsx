// src/screens/StatsScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FontSize, Spacing, Radius, type ColorScheme } from '../theme';
import { KEY_PREFIX, useProgress } from '../hooks/useProgress';
import { useTheme } from '../theme/ThemeContext';

const SHORT_DAYS = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

function getLastNDates(n: number): string[] {
  const result: string[] = [];
  const today = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    result.push(d.toISOString().split('T')[0]);
  }
  return result;
}

export function StatsScreen() {
  const insets = useSafeAreaInsets();
  const { streak, completedCount } = useProgress();
  const { isDark, colors, toggleTheme } = useTheme();
  const [weekActivity, setWeekActivity] = useState<boolean[]>([]);

  const weekDates = getLastNDates(7);
  const todayDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    (async () => {
      const allKeys = await AsyncStorage.getAllKeys();
      const results = weekDates.map(date =>
        allKeys.some(k => k.startsWith(`${KEY_PREFIX}${date}:`))
      );
      setWeekActivity(results);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streak]); // re-check when streak changes (i.e. after exercise toggle)

  const styles = makeStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>MENTAL GYM</Text>
        <Text style={styles.title}>Statystyki</Text>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 80 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Streak */}
        <View style={styles.streakCard}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <Text style={styles.streakNumber}>{streak}</Text>
          <Text style={styles.streakLabel}>
            {streak === 1 ? 'dzień z rzędu' : 'dni z rzędu'}
          </Text>
        </View>

        {/* Today's progress */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dziś</Text>
          <View style={styles.todayRow}>
            {[0, 1, 2].map(i => (
              <View
                key={i}
                style={[
                  styles.todayDot,
                  i < completedCount && { backgroundColor: colors.success, borderColor: colors.success },
                ]}
              />
            ))}
            <Text style={styles.todayText}>{completedCount} / 3 ćwiczeń</Text>
          </View>
        </View>

        {/* Weekly heatmap */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ostatnie 7 dni</Text>
          <View style={styles.heatmapRow}>
            {weekDates.map((date, i) => {
              const active = weekActivity[i] ?? false;
              const isToday = date === todayDate;
              const weekday = new Date(date + 'T12:00:00').getDay();
              const dayIdx = (weekday + 6) % 7; // 0=Mon
              return (
                <View key={date} style={styles.heatmapCol}>
                  <Text style={styles.heatmapDayLabel}>{SHORT_DAYS[dayIdx]}</Text>
                  <View style={[
                    styles.heatmapBox,
                    active && { backgroundColor: colors.success + '50', borderColor: colors.success },
                    isToday && !active && { borderColor: colors.critical },
                  ]}>
                    {active && <Text style={[styles.heatmapCheck, { color: colors.success }]}>✓</Text>}
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Theme toggle */}
        <TouchableOpacity style={styles.themeBtn} onPress={toggleTheme} activeOpacity={0.75}>
          <Text style={styles.themeBtnIcon}>{isDark ? '☀️' : '🌙'}</Text>
          <Text style={styles.themeBtnText}>
            {isDark ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function makeStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg },
    header: {
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    subtitle: { fontSize: FontSize.xs, color: colors.textMuted, letterSpacing: 3, marginBottom: 2 },
    title: { fontSize: FontSize.xxl, fontWeight: '300', color: colors.textPrimary },

    scroll: { padding: Spacing.lg, gap: Spacing.md },

    streakCard: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.xl,
      padding: Spacing.xl,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      gap: 4,
    },
    streakEmoji: { fontSize: 40 },
    streakNumber: { fontSize: 72, fontWeight: '200', color: colors.textPrimary, lineHeight: 84 },
    streakLabel: { fontSize: FontSize.sm, color: colors.textMuted, letterSpacing: 1 },

    card: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.lg,
      padding: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
      gap: Spacing.sm,
    },
    cardTitle: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },

    todayRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    todayDot: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: colors.bgElevated,
      borderWidth: 1,
      borderColor: colors.borderStrong,
    },
    todayText: { fontSize: FontSize.md, color: colors.textSecondary, marginLeft: 4 },

    heatmapRow: { flexDirection: 'row', gap: 6, marginTop: 4 },
    heatmapCol: { flex: 1, alignItems: 'center', gap: 5 },
    heatmapDayLabel: { fontSize: 9, color: colors.textMuted, letterSpacing: 0.5 },
    heatmapBox: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: Radius.sm,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.bgElevated,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heatmapCheck: { fontSize: 11, fontWeight: '700' },

    themeBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: Spacing.sm,
      backgroundColor: colors.bgCard,
      borderRadius: Radius.lg,
      padding: Spacing.md,
      borderWidth: 1,
      borderColor: colors.borderStrong,
      marginTop: Spacing.sm,
    },
    themeBtnIcon: { fontSize: 20 },
    themeBtnText: { fontSize: FontSize.md, color: colors.textSecondary, fontWeight: '500' },
  });
}
