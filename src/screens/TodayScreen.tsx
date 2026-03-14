// src/screens/TodayScreen.tsx
import React, { useCallback } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { Colors, FontSize, Spacing, Radius, CategoryColors } from '../theme';
import { WEEK_PLAN, EXERCISES_BY_ID, getTodayIndex } from '../data/exercises';
import { useProgress, ProgressRing } from '../hooks/useProgress';
import { ExerciseCard } from '../components/ExerciseCard';
import { ProgressRing as Ring } from '../components/ui';

const DAYS = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];
const todayIdx = getTodayIndex();

export function TodayScreen() {
  const insets = useSafeAreaInsets();
  const { completedCount, isCompleted, toggleExercise, loading, reload } = useProgress();
  const [selectedDay, setSelectedDay] = React.useState(todayIdx);

  const dayPlan = WEEK_PLAN[selectedDay];
  const exercises = dayPlan.exerciseIds.map(id => EXERCISES_BY_ID[id]);
  const total = exercises.length;
  const done = exercises.filter(e => isCompleted(e.id)).length;
  const progress = total > 0 ? done / total : 0;

  const handleToggle = useCallback(async (id: string) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleExercise(id);
  }, [toggleExercise]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.subtitle}>MENTAL GYM</Text>
          <Text style={styles.title}>Dziś</Text>
        </View>
        <Ring progress={progress} size={56} color={Colors.critical} />
      </View>

      {/* Day selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dayScroll}
      >
        {WEEK_PLAN.map((d, i) => {
          const isToday = i === todayIdx;
          const isSelected = i === selectedDay;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setSelectedDay(i)}
              activeOpacity={0.7}
              style={[
                styles.dayPill,
                isSelected && styles.dayPillSelected,
                isToday && !isSelected && styles.dayPillToday,
              ]}
            >
              <Text style={[styles.dayText, isSelected && styles.dayTextSelected]}>
                {d.shortDay}
              </Text>
              {isToday && <View style={styles.todayDot} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Progress bar */}
      <View style={styles.progressBarWrap}>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
        </View>
        <Text style={styles.progressText}>{done} / {total} ćwiczeń</Text>
      </View>

      {/* Exercise list */}
      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 80 }]}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={reload} tintColor={Colors.textMuted} />}
        showsVerticalScrollIndicator={false}
      >
        {done === total && total > 0 && (
          <View style={styles.allDoneBanner}>
            <Text style={styles.allDoneEmoji}>🎉</Text>
            <Text style={styles.allDoneText}>Wszystkie ćwiczenia ukończone!</Text>
          </View>
        )}

        {exercises.map((ex, i) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            index={i}
            done={isCompleted(ex.id)}
            onToggle={() => handleToggle(ex.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  subtitle: { fontSize: FontSize.xs, color: Colors.textMuted, letterSpacing: 3, marginBottom: 2 },
  title: { fontSize: FontSize.xxl, fontWeight: '300', color: Colors.textPrimary },

  dayScroll: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm, gap: 8 },
  dayPill: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    minWidth: 44,
  },
  dayPillSelected: { borderColor: Colors.critical, backgroundColor: Colors.bgElevated },
  dayPillToday: { borderColor: Colors.critical + '50' },
  dayText: { fontSize: FontSize.sm, color: Colors.textMuted, fontWeight: '500' },
  dayTextSelected: { color: Colors.textPrimary },
  todayDot: {
    width: 4, height: 4, borderRadius: 2,
    backgroundColor: Colors.critical,
    marginTop: 3,
  },

  progressBarWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    gap: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  progressBarBg: {
    flex: 1,
    height: 3,
    backgroundColor: Colors.bgElevated,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.critical,
    borderRadius: Radius.full,
  },
  progressText: { fontSize: FontSize.xs, color: Colors.textMuted, minWidth: 72 },

  scroll: { padding: Spacing.lg },
  allDoneBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.success + '18',
    borderRadius: Radius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.success + '40',
  },
  allDoneEmoji: { fontSize: 22 },
  allDoneText: { fontSize: FontSize.md, color: Colors.success, fontWeight: '500' },
});
