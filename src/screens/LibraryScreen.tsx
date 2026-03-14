// src/screens/LibraryScreen.tsx
import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors, FontSize, Spacing, Radius, CategoryColors } from '../theme';
import { EXERCISES, type Category } from '../data/exercises';
import { ExerciseCard } from '../components/ExerciseCard';

const FILTERS: { key: Category | 'all'; label: string }[] = [
  { key: 'all',          label: 'Wszystkie' },
  { key: 'kreatywnosc',  label: 'Kreatywność' },
  { key: 'krytyczne',    label: 'Krytyczne' },
  { key: 'mindfulness',  label: 'Mindfulness' },
];

interface Props {
  navigation?: any;
}

export function LibraryScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<Category | 'all'>('all');

  const filtered = filter === 'all'
    ? EXERCISES
    : EXERCISES.filter(e => e.category === filter);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>MENTAL GYM</Text>
        <Text style={styles.title}>Biblioteka</Text>
      </View>

      {/* Filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}
      >
        {FILTERS.map(f => {
          const active = filter === f.key;
          const color = f.key !== 'all' ? CategoryColors[f.key] : Colors.textPrimary;
          return (
            <TouchableOpacity
              key={f.key}
              onPress={() => setFilter(f.key)}
              activeOpacity={0.7}
              style={[
                styles.filterChip,
                active && { backgroundColor: color + '22', borderColor: color + '80' },
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
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 80 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.count}>{filtered.length} ćwiczeń</Text>
        {filtered.map(ex => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            index={EXERCISES.indexOf(ex)}
            done={false}
            onToggle={() => {}}
            onPress={() => navigation?.navigate('ExerciseDetail', { exerciseId: ex.id })}
            compact
          />
        ))}
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

  filters: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm, gap: 8 },
  filterChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 7,
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filterText: { fontSize: FontSize.sm, color: Colors.textMuted, fontWeight: '500' },

  scroll: { padding: Spacing.lg },
  count: { fontSize: FontSize.xs, color: Colors.textMuted, marginBottom: Spacing.md, letterSpacing: 1 },
});
