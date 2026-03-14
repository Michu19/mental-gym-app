// src/screens/PlanScreen.tsx
import React from 'react';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors, FontSize, Spacing, Radius, CategoryColors } from '../theme';
import { WEEK_PLAN, EXERCISES_BY_ID, getTodayIndex } from '../data/exercises';
import type { Exercise } from '../data/exercises';

const todayIdx = getTodayIndex();

function CategoryDot({ category }: { category: string }) {
  const color = CategoryColors[category] ?? Colors.textMuted;
  return <View style={[styles.dot, { backgroundColor: color }]} />;
}

export function PlanScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>MENTAL GYM</Text>
        <Text style={styles.title}>Plan tygodniowy</Text>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 80 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.intro}>
          Każdy dzień łączy 3 ćwiczenia z różnych kategorii. Rotacja zapewnia trening kreatywności, krytycznego myślenia i uważności.
        </Text>

        {/* Legend */}
        <View style={styles.legend}>
          {[
            ['kreatywnosc', 'Kreatywność'],
            ['krytyczne', 'Krytyczne myślenie'],
            ['mindfulness', 'Mindfulness'],
          ].map(([key, label]) => (
            <View key={key} style={styles.legendRow}>
              <View style={[styles.legendDot, { backgroundColor: CategoryColors[key] }]} />
              <Text style={styles.legendLabel}>{label}</Text>
            </View>
          ))}
        </View>

        {WEEK_PLAN.map((dayPlan, dayIdx) => {
          const exercises = dayPlan.exerciseIds.map(id => EXERCISES_BY_ID[id]);
          const isToday = dayIdx === todayIdx;
          const totalMin = exercises.reduce((acc, e) => acc + e.timeMin, 0);
          const totalMax = exercises.reduce((acc, e) => acc + e.timeMax, 0);
          const timeStr = totalMin === totalMax ? `${totalMin} min` : `${totalMin}–${totalMax} min`;

          return (
            <View key={dayIdx} style={[styles.dayCard, isToday && styles.dayCardToday]}>
              <View style={styles.dayHeader}>
                <View style={styles.dayHeaderLeft}>
                  <View style={[styles.dayBadge, isToday && styles.dayBadgeToday]}>
                    <Text style={[styles.dayBadgeText, isToday && styles.dayBadgeTextToday]}>
                      {dayPlan.shortDay.toUpperCase()}
                    </Text>
                  </View>
                  {isToday && (
                    <View style={styles.todayTag}>
                      <Text style={styles.todayTagText}>DZIŚ</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.timeText}>~{timeStr}</Text>
              </View>

              {exercises.map((ex, i) => (
                <View key={ex.id} style={styles.exerciseRow}>
                  <CategoryDot category={ex.category} />
                  <Text style={styles.exerciseEmoji}>{ex.emoji}</Text>
                  <Text style={styles.exerciseName}>{ex.name}</Text>
                  <Text style={styles.exerciseTime}>{ex.timeMin}{ex.timeMin !== ex.timeMax ? `–${ex.timeMax}` : ''} min</Text>
                </View>
              ))}

              {/* category chips */}
              <View style={styles.catChips}>
                {exercises.map((ex) => {
                  const color = CategoryColors[ex.category];
                  return (
                    <View key={ex.id} style={[styles.catChip, { backgroundColor: color + '18', borderColor: color + '40' }]}>
                      <Text style={[styles.catChipText, { color }]}>{ex.categoryLabel}</Text>
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  subtitle: { fontSize: FontSize.xs, color: Colors.textMuted, letterSpacing: 3, marginBottom: 2 },
  title: { fontSize: FontSize.xxl, fontWeight: '300', color: Colors.textPrimary },

  scroll: { padding: Spacing.lg, gap: Spacing.sm },
  intro: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Spacing.md,
  },

  legend: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.md,
    padding: Spacing.md,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 8,
  },
  legendRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendLabel: { fontSize: FontSize.sm, color: Colors.textSecondary },

  dayCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.sm,
    gap: 8,
  },
  dayCardToday: {
    borderColor: Colors.critical + '60',
    backgroundColor: Colors.bgElevated,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  dayHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dayBadge: {
    width: 40, height: 40,
    borderRadius: Radius.sm,
    backgroundColor: Colors.bgInput,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.borderStrong,
  },
  dayBadgeToday: { backgroundColor: Colors.critical, borderColor: Colors.critical },
  dayBadgeText: { fontSize: FontSize.sm, fontWeight: '700', color: Colors.textMuted },
  dayBadgeTextToday: { color: Colors.white },
  todayTag: {
    paddingHorizontal: 8, paddingVertical: 2,
    borderRadius: Radius.full,
    backgroundColor: Colors.critical + '22',
    borderWidth: 1,
    borderColor: Colors.critical + '60',
  },
  todayTagText: { fontSize: 9, color: Colors.critical, fontWeight: '700', letterSpacing: 1 },
  timeText: { fontSize: FontSize.xs, color: Colors.textMuted },

  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 3,
  },
  dot: { width: 6, height: 6, borderRadius: 3 },
  exerciseEmoji: { fontSize: 15, width: 22 },
  exerciseName: { flex: 1, fontSize: FontSize.sm, color: Colors.textPrimary },
  exerciseTime: { fontSize: FontSize.xs, color: Colors.textMuted },

  catChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 8,
  },
  catChip: {
    paddingHorizontal: 8, paddingVertical: 3,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  catChipText: { fontSize: 9, fontWeight: '700', letterSpacing: 0.5 },
});
