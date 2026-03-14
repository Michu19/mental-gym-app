// src/screens/TodayScreen.tsx
import React, { useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { FontSize, Spacing, Radius, type ColorScheme } from "../theme";
import { EXERCISES_BY_ID, getTodayIndex } from "../data/exercises";
import { useProgressContext as useProgress } from "../hooks/ProgressContext";
import { usePlan } from "../hooks/PlanContext";
import { ExerciseCard } from "../components/ExerciseCard";
import { ProgressRing } from "../components/ui";
import { useTheme } from "../theme/ThemeContext";

const todayIdx = getTodayIndex();

function getWeekDateStr(dayIdx: number): string {
  const now = new Date();
  const todayDayOffset = (now.getDay() + 6) % 7; // Mon=0
  const d = new Date(now);
  d.setDate(now.getDate() - todayDayOffset + dayIdx);
  return d.toISOString().split("T")[0];
}

export function TodayScreen({ navigation }: { navigation?: any }) {
  const insets = useSafeAreaInsets();
  const { toggleExercise, loading, reload, completedByDate } =
    useProgress();
  const { colors } = useTheme();
  const { activeDays } = usePlan();
  const [selectedDay, setSelectedDay] = React.useState(todayIdx);

  const selectedDateStr = getWeekDateStr(selectedDay);
  const selectedCompletedSet = completedByDate[selectedDateStr] ?? new Set<string>();

  const dayPlan = activeDays[selectedDay];
  const exercises = dayPlan.exerciseIds.map((id) => EXERCISES_BY_ID[id]);
  const total = exercises.length;
  const done = exercises.filter((e) => selectedCompletedSet.has(e.id)).length;
  const progress = total > 0 ? done / total : 0;

  const handleToggle = useCallback(
    async (id: string) => {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      toggleExercise(id, selectedDateStr);
    },
    [toggleExercise, selectedDateStr],
  );

  const styles = makeStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.subtitle}>MENTAL GYM</Text>
          <Text style={styles.title}>Dziś</Text>
        </View>
        <ProgressRing progress={progress} size={56} color={colors.critical} />
      </View>

      {/* Day selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dayScroll}
        style={styles.dayScrollWrap}
      >
        {activeDays.map((d, i) => {
          const isToday = i === todayIdx;
          const isSelected = i === selectedDay;
          const planDay = activeDays[i];
          const dateStr = getWeekDateStr(i);
          const dayCompletedSet = completedByDate[dateStr] ?? new Set<string>();
          const dayDoneCount = planDay.exerciseIds.filter((id) => dayCompletedSet.has(id)).length;
          const isDayDone =
            planDay.exerciseIds.length > 0 && dayDoneCount === planDay.exerciseIds.length;
          const isDayPartial = dayDoneCount > 0 && !isDayDone;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setSelectedDay(i)}
              activeOpacity={0.7}
              style={[
                styles.dayPill,
                isDayDone && {
                  borderColor: colors.success,
                  backgroundColor: colors.success + "18",
                },
                isDayPartial && {
                  borderColor: colors.success + "90",
                },
                isSelected && !isDayDone && {
                  borderColor: isDayPartial ? colors.success : colors.critical,
                  backgroundColor: colors.bgElevated,
                },
                isSelected && isDayDone && {
                  backgroundColor: colors.success + "30",
                },
                isToday && !isSelected && !isDayDone && !isDayPartial && {
                  borderColor: colors.critical + "50",
                },
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  isSelected && !isDayDone && !isDayPartial && { color: colors.textPrimary },
                  isDayPartial && { color: colors.success },
                  isDayDone && { color: colors.success, fontWeight: "700" },
                ]}
              >
                {isDayDone ? "✓" : planDay.shortDay}
              </Text>
              {isDayPartial && (
                <Text style={[styles.partialCount, { color: colors.success }]}>
                  {dayDoneCount}/{planDay.exerciseIds.length}
                </Text>
              )}
              {isToday && !isDayDone && !isDayPartial && (
                <View
                  style={[
                    styles.todayDot,
                    { backgroundColor: colors.critical },
                  ]}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Progress bar */}
      <View style={styles.progressBarWrap}>
        <View style={styles.progressBarBg}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${progress * 100}%`, backgroundColor: colors.critical },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {done} / {total} ćwiczeń
        </Text>
      </View>

      {/* Exercise list */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[styles.scroll, { paddingBottom: Spacing.lg }]}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={reload}
            tintColor={colors.textMuted}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {done === total && total > 0 && (
          <View style={styles.allDoneBanner}>
            <Text style={styles.allDoneEmoji}>🎉</Text>
            <Text style={styles.allDoneText}>
              Wszystkie ćwiczenia ukończone!
            </Text>
          </View>
        )}
        {exercises.map((ex, i) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            index={i}
            done={selectedCompletedSet.has(ex.id)}
            onToggle={() => handleToggle(ex.id)}
            onPress={() =>
              navigation?.navigate("ExerciseDetail", {
                exerciseId: ex.id,
                dateStr: selectedDateStr,
              })
            }
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
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
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

    dayScrollWrap: { height: 62, flexShrink: 0, flexGrow: 0 },
    dayScroll: {
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      gap: 8,
    },
    dayPill: {
      paddingHorizontal: Spacing.md,
      height: 46,
      borderRadius: Radius.full,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
      minWidth: 44,
    },
    dayText: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
      fontWeight: "500",
    },
    partialCount: {
      fontSize: 9,
      fontWeight: "700",
      marginTop: 1,
      letterSpacing: 0.3,
    },
    todayDot: { width: 4, height: 4, borderRadius: 2, marginTop: 3 },

    progressBarWrap: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      gap: Spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    progressBarBg: {
      flex: 1,
      height: 3,
      backgroundColor: colors.bgElevated,
      borderRadius: Radius.full,
      overflow: "hidden",
    },
    progressBarFill: { height: "100%", borderRadius: Radius.full },
    progressText: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      minWidth: 72,
    },

    scroll: { padding: Spacing.lg },
    allDoneBanner: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.sm,
      backgroundColor: colors.success + "18",
      borderRadius: Radius.md,
      padding: Spacing.md,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: colors.success + "40",
    },
    allDoneEmoji: { fontSize: 22 },
    allDoneText: {
      fontSize: FontSize.md,
      color: colors.success,
      fontWeight: "500",
    },
  });
}
