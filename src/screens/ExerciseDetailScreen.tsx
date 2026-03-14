// src/screens/ExerciseDetailScreen.tsx
import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { Colors, FontSize, Spacing, Radius, CategoryColors } from '../theme';
import { EXERCISES_BY_ID, formatTime } from '../data/exercises';
import { useTimer } from '../hooks/useProgress';
import { CategoryBadge, CheckButton, Divider, SectionLabel } from '../components/ui';

interface Props {
  route: { params: { exerciseId: string } };
  navigation: any;
}

export function ExerciseDetailScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { exerciseId } = route.params;
  const ex = EXERCISES_BY_ID[exerciseId];
  const accentColor = CategoryColors[ex.category];
  const [done, setDone] = useState(false);

  const timer = useTimer(ex.timeMin * 60);

  const handleTimerToggle = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (timer.running) timer.pause();
    else timer.start();
  };

  const handleReset = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    timer.reset();
  };

  const handleDone = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setDone(true);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Nav bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backText}>‹ Wróć</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>#{ex.id}</Text>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + Spacing.xl }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={[styles.hero, { backgroundColor: accentColor + '12', borderColor: accentColor + '30' }]}>
          <Text style={styles.heroEmoji}>{ex.emoji}</Text>
          <Text style={styles.heroName}>{ex.name}</Text>
          <View style={styles.heroBadges}>
            <CategoryBadge category={ex.category} label={ex.categoryLabel} />
            <View style={styles.timePillLarge}>
              <Text style={styles.timePillText}>⏱ {formatTime(ex.timeMin, ex.timeMax)}</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{ex.description}</Text>

        <Divider />

        {/* Timer */}
        <View style={styles.timerSection}>
          <SectionLabel text="Timer" color={accentColor} />
          <View style={styles.timerRow}>
            <View style={[styles.timerDisplay, { borderColor: timer.running ? accentColor : Colors.border }]}>
              <Text style={[styles.timerText, { color: timer.finished ? Colors.success : timer.running ? accentColor : Colors.textPrimary }]}>
                {timer.finished ? '✓ Czas!' : timer.formatted}
              </Text>
            </View>
            <View style={styles.timerBtns}>
              <TouchableOpacity
                onPress={handleTimerToggle}
                activeOpacity={0.75}
                style={[styles.timerBtn, { backgroundColor: accentColor }]}
              >
                <Text style={styles.timerBtnText}>{timer.running ? 'Pauza' : timer.finished ? 'Od nowa' : 'Start'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleReset}
                activeOpacity={0.75}
                style={styles.timerBtnSecondary}
              >
                <Text style={styles.timerBtnSecondaryText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.timerOptions}>
            {[ex.timeMin, ex.timeMax].filter((v, i, a) => a.indexOf(v) === i).map(min => (
              <TouchableOpacity
                key={min}
                onPress={() => timer.reset(min * 60)}
                activeOpacity={0.7}
                style={styles.timerOption}
              >
                <Text style={styles.timerOptionText}>{min} min</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Divider />

        {/* Prompt */}
        <View style={styles.section}>
          <SectionLabel text="Prompt startowy" color={accentColor} />
          <View style={[styles.promptBox, { borderLeftColor: accentColor }]}>
            <Text style={styles.promptText}>{ex.prompt}</Text>
          </View>
        </View>

        <Divider />

        {/* Tip */}
        <View style={styles.section}>
          <SectionLabel text="Wskazówka" />
          <Text style={styles.tipText}>💬 {ex.tip}</Text>
        </View>

        <Divider />

        {/* Done button */}
        <View style={styles.section}>
          <CheckButton done={done} onPress={handleDone} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { padding: 4 },
  backText: { fontSize: FontSize.md, color: Colors.critical },
  navTitle: { fontSize: FontSize.sm, color: Colors.textMuted, fontWeight: '600' },

  scroll: { padding: Spacing.lg, gap: Spacing.lg },

  hero: {
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    gap: Spacing.sm,
  },
  heroEmoji: { fontSize: 48 },
  heroName: { fontSize: FontSize.xl, fontWeight: '600', color: Colors.textPrimary, textAlign: 'center' },
  heroBadges: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' },
  timePillLarge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: Radius.full,
    backgroundColor: Colors.bgElevated,
    borderWidth: 1,
    borderColor: Colors.borderStrong,
  },
  timePillText: { fontSize: FontSize.xs, color: Colors.textMuted },

  description: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    lineHeight: 24,
  },

  timerSection: { gap: Spacing.md },
  timerRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  timerDisplay: {
    flex: 1,
    paddingVertical: Spacing.lg,
    borderRadius: Radius.lg,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: Colors.bgCard,
  },
  timerText: { fontSize: 40, fontWeight: '200', letterSpacing: 2 },
  timerBtns: { gap: 8 },
  timerBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.md,
    alignItems: 'center',
    minWidth: 80,
  },
  timerBtnText: { color: Colors.white, fontWeight: '600', fontSize: FontSize.sm },
  timerBtnSecondary: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderStrong,
  },
  timerBtnSecondaryText: { color: Colors.textMuted, fontSize: FontSize.sm },
  timerOptions: { flexDirection: 'row', gap: 8 },
  timerOption: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  timerOptionText: { fontSize: FontSize.xs, color: Colors.textMuted },

  section: { gap: Spacing.sm },
  promptBox: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderLeftWidth: 3,
  },
  promptText: { fontSize: FontSize.sm, color: Colors.textPrimary, lineHeight: 24 },
  tipText: { fontSize: FontSize.sm, color: Colors.textMuted, fontStyle: 'italic', lineHeight: 22 },
});
