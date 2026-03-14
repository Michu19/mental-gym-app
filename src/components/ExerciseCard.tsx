// src/components/ExerciseCard.tsx
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Animated,
} from 'react-native';
import { CategoryColors, Colors, FontSize, Radius, Spacing } from '../theme';
import { CategoryBadge, CheckButton, Divider, SectionLabel, TimePill } from './ui';
import type { Exercise } from '../data/exercises';
import { formatTime } from '../data/exercises';

interface Props {
  exercise: Exercise;
  index: number;
  done: boolean;
  onToggle: () => void;
  onPress?: () => void;  // navigate to detail
  compact?: boolean;
}

export function ExerciseCard({ exercise: ex, index, done, onToggle, onPress, compact }: Props) {
  const [expanded, setExpanded] = useState(false);
  const accentColor = CategoryColors[ex.category];

  if (compact) {
    // Compact version for library list
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.75}
        style={[styles.compact, { borderLeftColor: accentColor }]}
      >
        <Text style={styles.compactEmoji}>{ex.emoji}</Text>
        <View style={styles.compactBody}>
          <Text style={styles.compactName}>{ex.name}</Text>
          <Text style={styles.compactMeta}>{formatTime(ex.timeMin, ex.timeMax)} · {ex.categoryLabel}</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.card, done && styles.cardDone, { borderLeftColor: accentColor }]}>
      {/* Header */}
      <TouchableOpacity
        onPress={() => setExpanded(e => !e)}
        activeOpacity={0.8}
        style={styles.header}
      >
        <View style={[styles.emojiBox, { backgroundColor: accentColor + '20', borderColor: accentColor + '40' }]}>
          <Text style={styles.emoji}>{ex.emoji}</Text>
        </View>
        <View style={styles.headerText}>
          <View style={styles.headerRow}>
            <Text style={styles.indexText}>{index + 1}.</Text>
            <Text style={[styles.name, done && styles.nameDone]}>{ex.name}</Text>
          </View>
          <View style={styles.metaRow}>
            <TimePill text={formatTime(ex.timeMin, ex.timeMax)} />
            <CategoryBadge category={ex.category} label={ex.categoryLabel} small />
          </View>
        </View>
        <Text style={[styles.chevron, expanded && styles.chevronUp]}>›</Text>
      </TouchableOpacity>

      {/* Expanded body */}
      {expanded && (
        <View style={styles.body}>
          <Divider style={styles.bodyDivider} />
          <Text style={styles.description}>{ex.description}</Text>

          <View style={[styles.promptBox, { borderLeftColor: accentColor }]}>
            <SectionLabel text="Prompt" color={accentColor} />
            <Text style={styles.promptText}>{ex.prompt}</Text>
          </View>

          <Text style={styles.tip}>💬 {ex.tip}</Text>

          <CheckButton done={done} onPress={onToggle} style={styles.checkBtn} />
        </View>
      )}

      {/* Collapsed done indicator */}
      {!expanded && done && (
        <View style={styles.doneStrip}>
          <Text style={styles.doneStripText}>✓ Ukończone</Text>
        </View>
      )}

      {/* Tap to complete even when collapsed */}
      {!expanded && !done && (
        <TouchableOpacity onPress={onToggle} activeOpacity={0.7} style={styles.quickCheck}>
          <Text style={styles.quickCheckText}>Dotknij by ukończyć →</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.lg,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    borderLeftWidth: 4,
    overflow: 'hidden',
  },
  cardDone: {
    borderColor: Colors.success + '40',
    backgroundColor: Colors.bgCard,
    opacity: 0.85,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: Spacing.md,
    gap: Spacing.md,
  },
  emojiBox: {
    width: 46,
    height: 46,
    borderRadius: Radius.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  emoji: { fontSize: 22 },
  headerText: { flex: 1, gap: 6 },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  indexText: { fontSize: FontSize.xs, color: Colors.textMuted, letterSpacing: 1 },
  name: { fontSize: FontSize.md, fontWeight: '600', color: Colors.textPrimary, flex: 1 },
  nameDone: { color: Colors.textMuted, textDecorationLine: 'line-through' },
  metaRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  chevron: { fontSize: 20, color: Colors.textMuted, marginTop: 2, transform: [{ rotate: '90deg' }] },
  chevronUp: { transform: [{ rotate: '-90deg' }] },

  body: { paddingHorizontal: Spacing.md, paddingBottom: Spacing.md },
  bodyDivider: { marginBottom: Spacing.md },
  description: { fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20, marginBottom: Spacing.md },
  promptBox: {
    backgroundColor: Colors.bgInput,
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderLeftWidth: 3,
    marginBottom: Spacing.md,
    gap: 6,
  },
  promptText: { fontSize: FontSize.sm, color: Colors.textPrimary, lineHeight: 22 },
  tip: { fontSize: FontSize.xs, color: Colors.textMuted, fontStyle: 'italic', marginBottom: Spacing.md, lineHeight: 18 },
  checkBtn: { marginTop: Spacing.xs },

  doneStrip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.success + '30',
  },
  doneStripText: { fontSize: FontSize.xs, color: Colors.success, letterSpacing: 1 },
  quickCheck: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  quickCheckText: { fontSize: FontSize.xs, color: Colors.textMuted, letterSpacing: 0.5 },

  // Compact
  compact: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.md,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    gap: Spacing.md,
  },
  compactEmoji: { fontSize: 24, width: 32, textAlign: 'center' },
  compactBody: { flex: 1 },
  compactName: { fontSize: FontSize.md, fontWeight: '500', color: Colors.textPrimary, marginBottom: 3 },
  compactMeta: { fontSize: FontSize.xs, color: Colors.textMuted },
  arrow: { fontSize: 22, color: Colors.textMuted },
});
