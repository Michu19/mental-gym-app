// src/screens/LibraryScreen.tsx
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
import { EXERCISES, type Category } from "../data/exercises";
import { ExerciseCard } from "../components/ExerciseCard";
import { useTheme } from "../theme/ThemeContext";
import { useTranslation, interpolate } from "../i18n/LanguageContext";

interface Props {
  navigation?: any;
}

export function LibraryScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<Category | "all">("all");
  const { colors, categoryColors } = useTheme();
  const { t } = useTranslation();

  const FILTERS: { key: Category | "all"; label: string }[] = [
    { key: "all", label: t.library.filterAll },
    { key: "kreatywnosc", label: t.library.filterCreativity },
    { key: "krytyczne", label: t.library.filterCritical },
    { key: "mindfulness", label: t.library.filterMindfulness },
  ];

  const filtered =
    filter === "all"
      ? EXERCISES
      : EXERCISES.filter((e) => e.category === filter);

  const styles = makeStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>MENTAL GYM</Text>
        <Text style={styles.title}>{t.library.title}</Text>
      </View>

      {/* Filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}
        style={styles.filtersScroll}
      >
        {FILTERS.map((f) => {
          const active = filter === f.key;
          const color =
            f.key !== "all" ? categoryColors[f.key] : colors.textPrimary;
          return (
            <TouchableOpacity
              key={f.key}
              onPress={() => setFilter(f.key)}
              activeOpacity={0.7}
              style={[
                styles.filterChip,
                active && {
                  backgroundColor: color + "22",
                  borderColor: color + "80",
                },
              ]}
            >
              <Text style={[styles.filterText, active && { color }]}>
                {f.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: insets.bottom + 80 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.count}>{interpolate(t.library.count, { count: filtered.length })}</Text>
        {filtered.map((ex) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            index={EXERCISES.indexOf(ex)}
            done={false}
            onToggle={() => {}}
            onPress={() =>
              navigation?.navigate("ExerciseDetail", { exerciseId: ex.id })
            }
            compact
          />
        ))}
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

    filtersScroll: { flexShrink: 0, flexGrow: 0, height: 56 },
    filters: {
      paddingHorizontal: Spacing.lg,
      gap: 8,
      alignItems: "center",
      flexGrow: 1,
    },
    filterChip: {
      paddingHorizontal: Spacing.md,
      height: 36,
      borderRadius: Radius.full,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
    },
    filterText: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
      fontWeight: "500",
    },

    scroll: { padding: Spacing.lg },
    count: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      marginBottom: Spacing.md,
      letterSpacing: 1,
    },
  });
}
