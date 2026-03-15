// src/screens/StatsScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FontSize, Spacing, Radius, type ColorScheme } from "../theme";
import { useProgressContext as useProgress } from "../hooks/ProgressContext";
import { useTheme } from "../theme/ThemeContext";

const SHORT_DAYS = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];

function getMonday(offsetWeeks: number): Date {
  const now = new Date();
  const dayOfWeek = (now.getDay() + 6) % 7; // Mon=0
  const monday = new Date(now);
  monday.setDate(now.getDate() - dayOfWeek + offsetWeeks * 7);
  monday.setHours(0, 0, 0, 0);
  return monday;
}

function getWeekDates(offsetWeeks: number): string[] {
  const monday = getMonday(offsetWeeks);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.toISOString().split("T")[0];
  });
}

function formatWeekLabel(offsetWeeks: number): string {
  const monday = getMonday(offsetWeeks);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const fmt = (d: Date) =>
    d.toLocaleDateString("pl-PL", { day: "numeric", month: "short" });
  const year = sunday.getFullYear();
  return `${fmt(monday)} – ${fmt(sunday)} ${year}`;
}

export function StatsScreen() {
  const insets = useSafeAreaInsets();
  const { streak, completedCount, completedByDate } = useProgress();
  const { isDark, colors, toggleTheme } = useTheme();
  const [weekOffset, setWeekOffset] = useState(0);

  const weekDates = getWeekDates(weekOffset);
  const todayDate = new Date().toISOString().split("T")[0];

  // Derived synchronously – completedByDate holds all history
  const weekCounts = weekDates.map((date) => completedByDate[date]?.size ?? 0);
  const weekTotal = weekCounts.reduce((s, n) => s + n, 0);
  const totalAllTime = Object.values(completedByDate).reduce(
    (s, set) => s + set.size,
    0,
  );

  const styles = makeStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>MENTAL GYM</Text>
        <Text style={styles.title}>Statystyki</Text>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: insets.bottom + 80 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Streak */}
        <View style={styles.streakCard}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <Text style={styles.streakNumber}>{streak}</Text>
          <Text style={styles.streakLabel}>
            {streak === 1 ? "dzień z rzędu" : "dni z rzędu"}
          </Text>
        </View>

        {/* Section heading */}
        <Text style={styles.sectionHeading}>Ukończone zadania</Text>

        {/* Today + week total */}
        <View style={styles.statsRow}>
          <View style={[styles.card, styles.statCard]}>
            <Text style={styles.cardTitle}>Dziś</Text>
            <Text
              style={[styles.weekStatNumber, { color: colors.textPrimary }]}
            >
              {completedCount}
            </Text>
          </View>
          <View style={[styles.card, styles.statCard]}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {weekOffset === 0 ? "Ten tydzień" : "Tydzień"}
            </Text>
            <Text style={[styles.weekStatNumber, { color: colors.success }]}>
              {weekTotal}
            </Text>
          </View>
        </View>

        {/* All time */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Łącznie wszystkie tygodnie</Text>
          <Text
            style={[styles.weekStatNumber, { color: colors.textSecondary }]}
          >
            {totalAllTime}
          </Text>
        </View>

        {/* Weekly heatmap */}
        <View style={styles.card}>
          <View style={styles.weekNavRow}>
            <TouchableOpacity
              onPress={() => setWeekOffset((o) => o - 1)}
              activeOpacity={0.7}
              style={styles.weekNavBtn}
            >
              <Text
                style={[styles.weekNavArrow, { color: colors.textSecondary }]}
              >
                ‹
              </Text>
            </TouchableOpacity>
            <Text style={styles.weekNavLabel}>
              {formatWeekLabel(weekOffset)}
            </Text>
            <TouchableOpacity
              onPress={() => setWeekOffset((o) => o + 1)}
              activeOpacity={0.7}
              style={styles.weekNavBtn}
            >
              <Text
                style={[styles.weekNavArrow, { color: colors.textSecondary }]}
              >
                ›
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heatmapRow}>
            {weekDates.map((date, i) => {
              const count = weekCounts[i];
              const active = count > 0;
              const isToday = date === todayDate;
              const isFuture = date > todayDate;
              return (
                <View key={date} style={styles.heatmapCol}>
                  <Text style={styles.heatmapDayLabel}>{SHORT_DAYS[i]}</Text>
                  <View
                    style={[
                      styles.heatmapBox,
                      active && {
                        backgroundColor: colors.success + "50",
                        borderColor: colors.success,
                      },
                      isToday && !active && { borderColor: colors.critical },
                      isFuture && { opacity: 0.35 },
                    ]}
                  >
                    {active && (
                      <Text
                        style={[styles.heatmapCount, { color: colors.success }]}
                      >
                        {count}
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Theme toggle */}
        <TouchableOpacity
          style={styles.themeBtn}
          onPress={toggleTheme}
          activeOpacity={0.75}
        >
          <Text style={styles.themeBtnIcon}>{isDark ? "☀️" : "🌙"}</Text>
          <Text style={styles.themeBtnText}>
            {isDark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
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
    subtitle: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      letterSpacing: 3,
      marginBottom: 2,
    },
    title: {
      fontSize: FontSize.xxl,
      fontWeight: "300",
      color: colors.textPrimary,
    },

    scroll: { padding: Spacing.lg, gap: Spacing.md },

    streakCard: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.xl,
      padding: Spacing.xl,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.border,
      gap: 4,
    },
    streakEmoji: { fontSize: 40 },
    streakNumber: {
      fontSize: 72,
      fontWeight: "200",
      color: colors.textPrimary,
      lineHeight: 84,
    },
    streakLabel: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
      letterSpacing: 1,
    },

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
      textTransform: "uppercase",
    },

    todayRow: { flexDirection: "row", alignItems: "center", gap: 8 },
    todayDot: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: colors.bgElevated,
      borderWidth: 1,
      borderColor: colors.borderStrong,
    },
    todayText: {
      fontSize: FontSize.md,
      color: colors.textSecondary,
      marginLeft: 4,
    },

    sectionHeading: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      letterSpacing: 2,
      textTransform: "uppercase",
      paddingHorizontal: 2,
      marginBottom: -4,
    },
    statsRow: {
      flexDirection: "row",
      gap: Spacing.md,
    },
    statCard: {
      flex: 1,
      gap: 4,
    },

    weekStatRow: { flexDirection: "row", alignItems: "baseline", gap: 8 },
    weekStatNumber: {
      fontSize: 48,
      fontWeight: "200",
      lineHeight: 56,
    },
    weekStatLabel: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
    },

    weekNavRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: Spacing.sm,
    },
    weekNavBtn: { padding: 4, minWidth: 32, alignItems: "center" },
    weekNavArrow: { fontSize: 24, fontWeight: "300", lineHeight: 28 },
    weekNavLabel: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      letterSpacing: 0.5,
      textAlign: "center",
      flex: 1,
    },

    heatmapRow: { flexDirection: "row", gap: 6, marginTop: 4 },
    heatmapCol: { flex: 1, alignItems: "center", gap: 5 },
    heatmapDayLabel: {
      fontSize: 9,
      color: colors.textMuted,
      letterSpacing: 0.5,
    },
    heatmapBox: {
      width: "100%",
      aspectRatio: 1,
      borderRadius: Radius.sm,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.bgElevated,
      alignItems: "center",
      justifyContent: "center",
    },
    heatmapCheck: { fontSize: 11, fontWeight: "700" },
    heatmapCount: { fontSize: 13, fontWeight: "600" },

    themeBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: Spacing.sm,
      backgroundColor: colors.bgCard,
      borderRadius: Radius.lg,
      padding: Spacing.md,
      borderWidth: 1,
      borderColor: colors.borderStrong,
      marginTop: Spacing.sm,
    },
    themeBtnIcon: { fontSize: 20 },
    themeBtnText: {
      fontSize: FontSize.md,
      color: colors.textSecondary,
      fontWeight: "500",
    },
  });
}
