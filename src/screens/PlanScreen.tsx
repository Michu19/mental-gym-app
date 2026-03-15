// src/screens/PlanScreen.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FontSize, Spacing, Radius, type ColorScheme } from "../theme";
import { EXERCISES_BY_ID, getTodayIndex } from "../data/exercises";
import { useTheme } from "../theme/ThemeContext";
import { usePlan } from "../hooks/PlanContext";
import { useTranslation } from "../i18n/LanguageContext";

const todayIdx = getTodayIndex();

interface Props {
  navigation?: any;
}

export function PlanScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { colors, categoryColors } = useTheme();
  const { activeDays, plans, activePlanId } = usePlan();
  const { t } = useTranslation();
  const activePlan = plans.find((p) => p.id === activePlanId);
  const activePlanName =
    activePlan?.id === "default"
      ? t.plan.defaultPlan
      : (activePlan?.name ?? t.plan.defaultPlan);
  const styles = makeStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.subtitle}>MENTAL GYM</Text>
            <Text style={styles.title}>{t.plan.title}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation?.navigate("PlanManager")}
            activeOpacity={0.75}
            style={[
              styles.manageBtn,
              {
                backgroundColor: colors.bgElevated,
                borderColor: colors.borderStrong,
              },
            ]}
          >
            <Text
              style={[styles.manageBtnText, { color: colors.textSecondary }]}
            >
              {t.plan.manage}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.planBadgeRow}>
          <View
            style={[
              styles.activePlanBadge,
              {
                backgroundColor: colors.critical + "18",
                borderColor: colors.critical + "40",
              },
            ]}
          >
            <Text style={[styles.activePlanText, { color: colors.critical }]}>
              {t.plan.activeLabel}
              {activePlanName}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation?.navigate(
                "PlanEditor",
                activePlanId !== "default" ? { planId: activePlanId } : {},
              )
            }
            activeOpacity={0.75}
            style={styles.editPlanBtn}
          >
            <Text
              style={[styles.editPlanBtnText, { color: colors.textSecondary }]}
            >
              {t.plan.edit}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: insets.bottom + 80 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.intro}>{t.plan.intro}</Text>

        {/* Legend */}
        <View style={styles.legend}>
          {(
            [
              ["kreatywnosc", t.plan.categoryCreativity],
              ["krytyczne", t.plan.categoryCritical],
              ["mindfulness", t.plan.categoryMindfulness],
            ] as const
          ).map(([key, label]) => (
            <View key={key} style={styles.legendRow}>
              <View
                style={[
                  styles.legendDot,
                  { backgroundColor: categoryColors[key] },
                ]}
              />
              <Text style={styles.legendLabel}>{label}</Text>
            </View>
          ))}
        </View>

        {activeDays.map((dayPlan, dayIdx) => {
          const exercises = dayPlan.exerciseIds.map(
            (id) => EXERCISES_BY_ID[id],
          );
          const isToday = dayIdx === todayIdx;
          const totalMin = exercises.reduce((acc, e) => acc + e.timeMin, 0);
          const totalMax = exercises.reduce((acc, e) => acc + e.timeMax, 0);
          const timeStr =
            totalMin === totalMax
              ? `${totalMin} min`
              : `${totalMin}–${totalMax} min`;

          return (
            <View
              key={dayIdx}
              style={[
                styles.dayCard,
                isToday && {
                  borderColor: colors.critical + "60",
                  backgroundColor: colors.bgElevated,
                },
              ]}
            >
              <View style={styles.dayHeader}>
                <View style={styles.dayHeaderLeft}>
                  <View
                    style={[
                      styles.dayBadge,
                      isToday && {
                        backgroundColor: colors.critical,
                        borderColor: colors.critical,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.dayBadgeText,
                        isToday && { color: colors.white },
                      ]}
                    >
                      {t.planEditor.daysShort[dayIdx].toUpperCase()}
                    </Text>
                  </View>
                  {isToday && (
                    <View
                      style={[
                        styles.todayTag,
                        {
                          backgroundColor: colors.critical + "22",
                          borderColor: colors.critical + "60",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.todayTagText,
                          { color: colors.critical },
                        ]}
                      >
                        {t.plan.today}
                      </Text>
                    </View>
                  )}
                </View>
                <Text style={styles.timeText}>~{timeStr}</Text>
              </View>

              {exercises.map((ex) => (
                <View key={ex.id} style={styles.exerciseRow}>
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: categoryColors[ex.category] },
                    ]}
                  />
                  <Text style={styles.exerciseEmoji}>{ex.emoji}</Text>
                  <Text style={styles.exerciseName}>
                    {t.exercises[ex.id].name}
                  </Text>
                  <Text style={styles.exerciseTime}>
                    {ex.timeMin}
                    {ex.timeMin !== ex.timeMax ? `–${ex.timeMax}` : ""} min
                  </Text>
                </View>
              ))}

              {/* Category chips */}
              <View style={styles.catChips}>
                {[...new Set(exercises.map((ex) => ex.category))].map((cat) => {
                  const color = categoryColors[cat];
                  return (
                    <View
                      key={cat}
                      style={[
                        styles.catChip,
                        {
                          backgroundColor: color + "18",
                          borderColor: color + "40",
                        },
                      ]}
                    >
                      <Text style={[styles.catChipText, { color }]}>
                        {t.categories[cat]}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
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
      gap: Spacing.sm,
    },
    headerTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    manageBtn: {
      paddingHorizontal: Spacing.md,
      paddingVertical: 6,
      borderRadius: Radius.full,
      borderWidth: 1,
    },
    manageBtnText: { fontSize: FontSize.sm, fontWeight: "600" },
    planBadgeRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.sm,
    },
    activePlanBadge: {
      alignSelf: "flex-start",
      paddingHorizontal: Spacing.sm,
      paddingVertical: 4,
      borderRadius: Radius.full,
      borderWidth: 1,
    },
    activePlanText: { fontSize: FontSize.xs, fontWeight: "600" },
    editPlanBtn: { paddingHorizontal: Spacing.xs, paddingVertical: 4 },
    editPlanBtnText: { fontSize: FontSize.xs, fontWeight: "600" },
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

    scroll: { padding: Spacing.lg, gap: Spacing.sm },
    intro: {
      fontSize: FontSize.sm,
      color: colors.textSecondary,
      lineHeight: 20,
      marginBottom: Spacing.md,
    },

    legend: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.md,
      padding: Spacing.md,
      marginBottom: Spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
      gap: 8,
    },
    legendRow: { flexDirection: "row", alignItems: "center", gap: 10 },
    legendDot: { width: 10, height: 10, borderRadius: 5 },
    legendLabel: { fontSize: FontSize.sm, color: colors.textSecondary },

    dayCard: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.lg,
      padding: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: Spacing.sm,
      gap: 8,
    },
    dayHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 4,
    },
    dayHeaderLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
    dayBadge: {
      width: 40,
      height: 40,
      borderRadius: Radius.sm,
      backgroundColor: colors.bgInput,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.borderStrong,
    },
    dayBadgeText: {
      fontSize: FontSize.sm,
      fontWeight: "700",
      color: colors.textMuted,
    },
    todayTag: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: Radius.full,
      borderWidth: 1,
    },
    todayTagText: { fontSize: 9, fontWeight: "700", letterSpacing: 1 },
    timeText: { fontSize: FontSize.xs, color: colors.textMuted },

    exerciseRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingVertical: 3,
    },
    dot: { width: 6, height: 6, borderRadius: 3 },
    exerciseEmoji: { fontSize: 15, width: 22 },
    exerciseName: { flex: 1, fontSize: FontSize.sm, color: colors.textPrimary },
    exerciseTime: { fontSize: FontSize.xs, color: colors.textMuted },

    catChips: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 4,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingTop: 8,
    },
    catChip: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: Radius.full,
      borderWidth: 1,
    },
    catChipText: {
      fontSize: FontSize.xs,
      fontWeight: "600",
      letterSpacing: 0.5,
    },
  });
}
