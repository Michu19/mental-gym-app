// src/screens/PlanEditorScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../theme/ThemeContext";
import { usePlan, DEFAULT_PLAN, type WeekPlanSet } from "../hooks/PlanContext";
import { EXERCISES, EXERCISES_BY_ID } from "../data/exercises";
import { FontSize, Spacing, Radius, type ColorScheme } from "../theme";
import { useTranslation, interpolate } from "../i18n/LanguageContext";

interface Props {
  route: { params?: { planId?: string } };
  navigation: any;
}

export function PlanEditorScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { colors, categoryColors } = useTheme();
  const { t } = useTranslation();
  const { plans, savePlan } = usePlan();
  const styles = makeStyles(colors);

  const planId = route.params?.planId;
  const existing = planId ? plans.find((p) => p.id === planId) : undefined;

  const [name, setName] = useState(existing?.name ?? "");
  const [days, setDays] = useState<string[][]>(
    existing?.days.map((d) => [...d.exerciseIds]) ??
      DEFAULT_PLAN.days.map((d) => [...d.exerciseIds]),
  );
  const [selectedDay, setSelectedDay] = useState(0);

  const currentIds = days[selectedDay];
  const available = EXERCISES.filter((e) => !currentIds.includes(e.id));

  const addExercise = (id: string) => {
    if (currentIds.length >= 5) return;
    setDays((prev) => prev.map((d, i) => (i === selectedDay ? [...d, id] : d)));
  };

  const removeExercise = (id: string) => {
    setDays((prev) =>
      prev.map((d, i) =>
        i === selectedDay ? d.filter((eid) => eid !== id) : d,
      ),
    );
  };

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert(t.planEditor.noNameTitle, t.planEditor.noNameMsg);
      return;
    }
    if (days.some((d) => d.length === 0)) {
      Alert.alert(t.planEditor.emptyDayTitle, t.planEditor.emptyDayMsg);
      return;
    }
    const plan: WeekPlanSet = {
      id: planId ?? Date.now().toString(),
      name: name.trim(),
      createdAt: existing?.createdAt ?? new Date().toISOString(),
      days: days.map((ids) => ({ exerciseIds: ids })),
    };
    await savePlan(plan);
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.navSide}
        >
          <Text style={[styles.navAction, { color: colors.critical }]}>
            {t.planEditor.cancelNav}
          </Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>
          {planId ? t.planEditor.editTitle : t.planEditor.newTitle}
        </Text>
        <TouchableOpacity
          onPress={handleSave}
          activeOpacity={0.75}
          style={styles.navSide}
        >
          <Text
            style={[
              styles.navAction,
              { color: colors.critical, textAlign: "right", fontWeight: "700" },
            ]}
          >
            {t.planEditor.save}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Plan name */}
      <View style={styles.nameWrap}>
        <TextInput
          style={[
            styles.nameInput,
            { borderColor: name.trim() ? colors.border : colors.borderStrong },
          ]}
          placeholder={t.planEditor.namePlaceholder}
          placeholderTextColor={colors.textMuted}
          value={name}
          onChangeText={setName}
          returnKeyType="done"
        />
      </View>

      {/* Day selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dayScroll}
        style={styles.dayScrollWrap}
      >
        {t.planEditor.daysShort.map((d, i) => {
          const isSelected = i === selectedDay;
          const isEmpty = days[i].length === 0;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setSelectedDay(i)}
              activeOpacity={0.7}
              style={[
                styles.dayPill,
                isSelected && {
                  borderColor: colors.critical,
                  backgroundColor: colors.bgElevated,
                },
                isEmpty &&
                  !isSelected && { borderColor: "rgba(255,80,80,0.6)" },
              ]}
            >
              <Text
                style={[
                  styles.dayPillLabel,
                  isSelected && { color: colors.textPrimary },
                ]}
              >
                {t.planEditor.daysShort[i]}
              </Text>
              <Text
                style={[
                  styles.dayPillCount,
                  {
                    color: isEmpty
                      ? "rgba(255,80,80,0.8)"
                      : isSelected
                        ? colors.critical
                        : colors.textMuted,
                  },
                ]}
              >
                {days[i].length}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Day subheader */}
      <View style={styles.dayBar}>
        <Text style={styles.dayBarTitle}>
          {t.planEditor.daysFull[selectedDay]}
        </Text>
        <Text style={styles.dayBarCount}>
          {interpolate(t.planEditor.exerciseCount, {
            count: currentIds.length,
          })}
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: insets.bottom + Spacing.lg },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Selected exercises */}
        {currentIds.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>{t.planEditor.selected}</Text>
            {currentIds.map((id) => {
              const ex = EXERCISES_BY_ID[id];
              const color = categoryColors[ex.category];
              return (
                <View
                  key={id}
                  style={[
                    styles.exRow,
                    { borderLeftColor: color, borderColor: colors.border },
                  ]}
                >
                  <Text style={styles.exEmoji}>{ex.emoji}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.exName}>{t.exercises[ex.id].name}</Text>
                    <Text style={styles.exMeta}>
                      {t.categories[ex.category]} · {ex.timeMin}
                      {ex.timeMin !== ex.timeMax ? `–${ex.timeMax}` : ""} min
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => removeExercise(id)}
                    activeOpacity={0.7}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style={[
                      styles.removeBtn,
                      { borderColor: colors.borderStrong },
                    ]}
                  >
                    <Text
                      style={[
                        styles.removeBtnText,
                        { color: colors.textMuted },
                      ]}
                    >
                      ✕
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}

        {/* Available exercises */}
        {currentIds.length < 5 && available.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>{t.planEditor.available}</Text>
            {available.map((ex) => {
              const color = categoryColors[ex.category];
              return (
                <TouchableOpacity
                  key={ex.id}
                  onPress={() => addExercise(ex.id)}
                  activeOpacity={0.75}
                  style={[
                    styles.exRowAvail,
                    { borderLeftColor: color, borderColor: colors.border },
                  ]}
                >
                  <Text style={styles.exEmoji}>{ex.emoji}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.exName}>{t.exercises[ex.id].name}</Text>
                    <Text style={styles.exMeta}>
                      {t.categories[ex.category]} · {ex.timeMin}
                      {ex.timeMin !== ex.timeMax ? `–${ex.timeMax}` : ""} min
                    </Text>
                  </View>
                  <Text style={[styles.addIcon, { color: colors.textMuted }]}>
                    +
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {currentIds.length >= 5 && (
          <View
            style={[
              styles.limitNote,
              { backgroundColor: colors.bgCard, borderColor: colors.border },
            ]}
          >
            <Text style={styles.limitNoteText}>{t.planEditor.limitNote}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function makeStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg },

    navbar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    navSide: { minWidth: 70 },
    navTitle: {
      fontSize: FontSize.md,
      fontWeight: "600",
      color: colors.textPrimary,
    },
    navAction: { fontSize: FontSize.md, fontWeight: "600" },

    nameWrap: {
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    nameInput: {
      backgroundColor: colors.bgInput,
      borderRadius: Radius.md,
      borderWidth: 1,
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
      fontSize: FontSize.md,
      color: colors.textPrimary,
      fontWeight: "500",
    },

    dayScrollWrap: { height: 72, flexShrink: 0, flexGrow: 0 },
    dayScroll: {
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      gap: 8,
      alignItems: "center",
    },
    dayPill: {
      paddingHorizontal: Spacing.md,
      height: 52,
      borderRadius: Radius.full,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
      minWidth: 46,
      gap: 2,
    },
    dayPillLabel: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
      fontWeight: "600",
    },
    dayPillCount: { fontSize: 11, fontWeight: "700" },

    dayBar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    dayBarTitle: {
      fontSize: FontSize.md,
      fontWeight: "600",
      color: colors.textPrimary,
    },
    dayBarCount: { fontSize: FontSize.xs, color: colors.textMuted },

    scroll: { padding: Spacing.lg, gap: Spacing.lg },

    section: { gap: Spacing.sm },
    sectionLabel: {
      fontSize: 10,
      fontWeight: "700",
      color: colors.textMuted,
      letterSpacing: 1.5,
    },

    exRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.bgCard,
      borderRadius: Radius.md,
      borderWidth: 1,
      borderLeftWidth: 3,
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.md,
      gap: Spacing.sm,
    },
    exRowAvail: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.bgCard,
      borderRadius: Radius.md,
      borderWidth: 1,
      borderLeftWidth: 3,
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.md,
      gap: Spacing.sm,
    },
    exEmoji: { fontSize: 20, width: 28, textAlign: "center" },
    exName: {
      fontSize: FontSize.sm,
      color: colors.textPrimary,
      fontWeight: "500",
    },
    exMeta: { fontSize: FontSize.xs, color: colors.textMuted, marginTop: 2 },

    removeBtn: {
      width: 28,
      height: 28,
      borderRadius: 14,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    removeBtnText: { fontSize: 12, fontWeight: "700" },
    addIcon: { fontSize: 22, fontWeight: "300", lineHeight: 24 },

    limitNote: {
      borderRadius: Radius.md,
      borderWidth: 1,
      padding: Spacing.md,
      alignItems: "center",
    },
    limitNoteText: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
      textAlign: "center",
    },
  });
}
