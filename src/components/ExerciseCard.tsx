// src/components/ExerciseCard.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { FontSize, Radius, Spacing, type ColorScheme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import {
  CategoryBadge,
  CheckButton,
  Divider,
  SectionLabel,
  TimePill,
} from "./ui";
import type { Exercise } from "../data/exercises";
import { formatTime } from "../data/exercises";
import { useTheme } from "../theme/ThemeContext";
import { useNoteHistory } from "../hooks/useProgress";

interface Props {
  exercise: Exercise;
  index: number;
  done: boolean;
  onToggle: () => void;
  onPress?: () => void;
  compact?: boolean;
}

export function ExerciseCard({
  exercise: ex,
  index,
  done,
  onToggle,
  onPress,
  compact,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState("");
  const { colors, categoryColors } = useTheme();
  const accentColor = categoryColors[ex.category];
  const { notes, addNote } = useNoteHistory(ex.id);
  const styles = makeStyles(colors);

  if (compact) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.75}
        style={[styles.compact, { borderLeftColor: accentColor }]}
      >
        <Text style={styles.compactEmoji}>{ex.emoji}</Text>
        <View style={styles.compactBody}>
          <Text style={styles.compactName}>{ex.name}</Text>
          <Text style={styles.compactMeta}>
            {formatTime(ex.timeMin, ex.timeMax)} · {ex.categoryLabel}
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[
        styles.card,
        done && styles.cardDone,
        { borderLeftColor: accentColor },
      ]}
    >
      {/* Header */}
      <TouchableOpacity
        onPress={() => (onPress ? onPress() : setExpanded((e) => !e))}
        activeOpacity={0.8}
        style={styles.header}
      >
        <View
          style={[
            styles.emojiBox,
            {
              backgroundColor: accentColor + "20",
              borderColor: accentColor + "40",
            },
          ]}
        >
          <Text style={styles.emoji}>{ex.emoji}</Text>
        </View>
        <View style={styles.headerText}>
          <View style={styles.headerRow}>
            <Text style={styles.indexText}>{index + 1}.</Text>
            <Text style={[styles.name, done && styles.nameDone]}>
              {ex.name}
            </Text>
          </View>
          <View style={styles.metaRow}>
            <TimePill text={formatTime(ex.timeMin, ex.timeMax)} />
            <CategoryBadge
              category={ex.category}
              label={ex.categoryLabel}
              small
            />
          </View>
        </View>
        {onPress ? (
          <View style={styles.navArrowWrap}>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </View>
        ) : (
          <Text style={[styles.chevron, expanded && styles.chevronUp]}>›</Text>
        )}
      </TouchableOpacity>

      {/* Expanded body — only when no onPress (card is self-contained) */}
      {!onPress && expanded && (
        <View style={styles.body}>
          <Divider style={styles.bodyDivider} />
          <Text style={styles.description}>{ex.description}</Text>

          <View style={[styles.promptBox, { borderLeftColor: accentColor }]}>
            <SectionLabel text="Prompt" color={accentColor} />
            <Text style={styles.promptText}>{ex.prompt}</Text>
          </View>

          <Text style={styles.tip}>💬 {ex.tip}</Text>

          {/* Quick note */}
          <View style={styles.noteWrap}>
            <SectionLabel text="Szybka notatka" color={accentColor} />
            <View style={styles.noteRow}>
              <TextInput
                style={[
                  styles.noteInput,
                  {
                    borderColor:
                      draft.length > 0 ? accentColor + "80" : colors.border,
                  },
                ]}
                placeholder="Zapisz przemyślenie…"
                placeholderTextColor={colors.textMuted}
                value={draft}
                onChangeText={setDraft}
                returnKeyType="done"
                blurOnSubmit
              />
              <TouchableOpacity
                onPress={async () => {
                  await addNote(draft);
                  setDraft("");
                }}
                activeOpacity={0.75}
                disabled={!draft.trim()}
                style={[
                  styles.noteBtn,
                  {
                    backgroundColor: draft.trim()
                      ? accentColor
                      : colors.bgElevated,
                    borderColor: draft.trim()
                      ? accentColor
                      : colors.borderStrong,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.noteBtnText,
                    { color: draft.trim() ? colors.white : colors.textMuted },
                  ]}
                >
                  ✓
                </Text>
              </TouchableOpacity>
            </View>
            {notes.length > 0 && (
              <Text style={styles.noteCount}>
                {notes.length}{" "}
                {notes.length === 1
                  ? "notatka"
                  : notes.length < 5
                    ? "notatki"
                    : "notatek"}{" "}
                — dostępne w szczegółach
              </Text>
            )}
          </View>

          <CheckButton done={done} onPress={onToggle} style={styles.checkBtn} />
        </View>
      )}

      {/* Collapsed done indicator */}
      {(!onPress || !expanded) && done && (
        <View style={styles.doneStrip}>
          <Text style={styles.doneStripText}>✓ Ukończone</Text>
        </View>
      )}

      {/* Tap to complete when collapsed */}
      {!onPress && !expanded && !done && (
        <TouchableOpacity
          onPress={onToggle}
          activeOpacity={0.7}
          style={styles.quickCheck}
        >
          <Text style={styles.quickCheckText}>Dotknij by ukończyć →</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

function makeStyles(colors: ColorScheme) {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.lg,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
      borderLeftWidth: 4,
      overflow: "hidden",
    },
    cardDone: {
      borderColor: colors.success + "40",
      opacity: 0.85,
    },
    header: {
      flexDirection: "row",
      alignItems: "flex-start",
      padding: Spacing.md,
      gap: Spacing.md,
    },
    emojiBox: {
      width: 46,
      height: 46,
      borderRadius: Radius.md,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    emoji: { fontSize: 22 },
    headerText: { flex: 1, gap: 6 },
    headerRow: { flexDirection: "row", alignItems: "center", gap: 6 },
    indexText: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      letterSpacing: 1,
    },
    name: {
      fontSize: FontSize.md,
      fontWeight: "600",
      color: colors.textPrimary,
      flex: 1,
    },
    nameDone: { color: colors.textMuted, textDecorationLine: "line-through" },
    metaRow: { flexDirection: "row", gap: 6, flexWrap: "wrap" },
    chevron: {
      fontSize: 20,
      color: colors.textMuted,
      marginTop: 2,
      transform: [{ rotate: "90deg" }],
    },
    chevronUp: { transform: [{ rotate: "-90deg" }] },
    navArrowWrap: {
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
    },

    body: { paddingHorizontal: Spacing.md, paddingBottom: Spacing.md },
    bodyDivider: { marginBottom: Spacing.md },
    description: {
      fontSize: FontSize.sm,
      color: colors.textSecondary,
      lineHeight: 20,
      marginBottom: Spacing.md,
    },
    promptBox: {
      backgroundColor: colors.bgInput,
      borderRadius: Radius.md,
      padding: Spacing.md,
      borderLeftWidth: 3,
      marginBottom: Spacing.md,
      gap: 6,
    },
    promptText: {
      fontSize: FontSize.sm,
      color: colors.textPrimary,
      lineHeight: 22,
    },
    tip: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      fontStyle: "italic",
      marginBottom: Spacing.sm,
      lineHeight: 18,
    },

    noteWrap: { gap: 6, marginBottom: Spacing.md },
    noteRow: { flexDirection: "row", gap: 8, alignItems: "flex-start" },
    noteInput: {
      flex: 1,
      backgroundColor: colors.bgInput,
      borderRadius: Radius.md,
      borderWidth: 1,
      paddingHorizontal: Spacing.md,
      paddingVertical: 10,
      fontSize: FontSize.sm,
      color: colors.textPrimary,
      minHeight: 120,
      lineHeight: 22,
      textAlignVertical: "top",
    },
    noteBtn: {
      width: 38,
      height: 38,
      marginTop: 1,
      borderRadius: Radius.md,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    noteBtnText: { fontSize: 18, fontWeight: "700", lineHeight: 20 },
    noteCount: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      fontStyle: "italic",
    },

    checkBtn: { marginTop: Spacing.xs },

    doneStrip: {
      paddingHorizontal: Spacing.md,
      paddingVertical: 8,
      borderTopWidth: 1,
      borderTopColor: colors.success + "30",
    },
    doneStripText: {
      fontSize: FontSize.xs,
      color: colors.success,
      letterSpacing: 1,
    },
    quickCheck: {
      paddingHorizontal: Spacing.md,
      paddingVertical: 8,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    quickCheckText: {
      fontSize: FontSize.xs,
      color: colors.textMuted,
      letterSpacing: 0.5,
    },

    compact: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.md,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: colors.border,
      borderLeftWidth: 4,
      flexDirection: "row",
      alignItems: "center",
      padding: Spacing.md,
      gap: Spacing.md,
    },
    compactEmoji: { fontSize: 24, width: 32, textAlign: "center" },
    compactBody: { flex: 1 },
    compactName: {
      fontSize: FontSize.md,
      fontWeight: "500",
      color: colors.textPrimary,
      marginBottom: 3,
    },
    compactMeta: { fontSize: FontSize.xs, color: colors.textMuted },
    arrow: { fontSize: 22, color: colors.textMuted },
  });
}
