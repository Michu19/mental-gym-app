// src/screens/ExerciseExpandedScreen.tsx
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
import { EXERCISES_BY_ID, formatTime } from "../data/exercises";
import { CategoryBadge } from "../components/ui";
import { useTheme } from "../theme/ThemeContext";
import { useTranslation } from "../i18n/LanguageContext";

interface Props {
  route: { params: { exerciseId: string } };
  navigation: any;
}

export function ExerciseExpandedScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { exerciseId } = route.params;
  const ex = EXERCISES_BY_ID[exerciseId];
  const { colors, categoryColors } = useTheme();
  const { t } = useTranslation();
  const accentColor = categoryColors[ex.category];
  const exExt = t.exercisesExtended[ex.id];
  const styles = makeStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Nav bar */}
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          activeOpacity={0.7}
        >
          <Text style={[styles.backText, { color: accentColor }]}>
            {t.exercise.back}
          </Text>
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>
          {t.exercises[ex.id].name}
        </Text>
        <View style={styles.navSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: insets.bottom + Spacing.xxl },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <View
          style={[
            styles.hero,
            {
              backgroundColor: accentColor + "14",
              borderColor: accentColor + "35",
            },
          ]}
        >
          <Text style={styles.heroEmoji}>{ex.emoji}</Text>
          <Text style={styles.heroName}>{t.exercises[ex.id].name}</Text>
          <View style={styles.heroBadges}>
            <CategoryBadge
              category={ex.category}
              label={t.categories[ex.category]}
            />
            <View
              style={[
                styles.timePill,
                {
                  backgroundColor: colors.bgElevated,
                  borderColor: colors.borderStrong,
                },
              ]}
            >
              <Text style={[styles.timePillText, { color: colors.textMuted }]}>
                ⏱ {formatTime(ex.timeMin, ex.timeMax)}
              </Text>
            </View>
          </View>
        </View>

        {/* ── Long Description ─────────────────────────────────────── */}
        <SectionHeader
          icon="📖"
          label={t.expanded.longDesc}
          color={accentColor}
          styles={styles}
          colors={colors}
        />
        <View
          style={[
            styles.longDescCard,
            { backgroundColor: colors.bgCard, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.longDescText, { color: colors.textSecondary }]}>
            {exExt.longDescription}
          </Text>
        </View>

        {/* ── Example ──────────────────────────────────────────────── */}
        <SectionHeader
          icon="🧪"
          label={t.expanded.example}
          color={accentColor}
          styles={styles}
          colors={colors}
        />

        <ExampleStep
          icon="🎯"
          label={t.expanded.exampleSetup}
          text={exExt.example.setup}
          accentColor={accentColor}
          styles={styles}
          colors={colors}
        />
        <ExampleStep
          icon="▶"
          label={t.expanded.exampleExecution}
          text={exExt.example.execution}
          accentColor={accentColor}
          styles={styles}
          colors={colors}
          isCode
        />
        <ExampleStep
          icon="✅"
          label={t.expanded.exampleResult}
          text={exExt.example.result}
          accentColor={accentColor}
          styles={styles}
          colors={colors}
          isResult
        />

        {/* ── Benefits ─────────────────────────────────────────────── */}
        <SectionHeader
          icon="🧠"
          label={t.expanded.benefits}
          color={accentColor}
          styles={styles}
          colors={colors}
        />
        {exExt.benefits.map((b, i) => (
          <View
            key={i}
            style={[
              styles.benefitCard,
              {
                backgroundColor: colors.bgCard,
                borderColor: colors.border,
                borderLeftColor: accentColor,
              },
            ]}
          >
            <Text style={[styles.benefitLabel, { color: accentColor }]}>
              {b.label}
            </Text>
            <Text style={[styles.benefitDesc, { color: colors.textSecondary }]}>
              {b.description}
            </Text>
          </View>
        ))}

        {/* ── Tip ──────────────────────────────────────────────────── */}
        <SectionHeader
          icon="💡"
          label={t.exercise.tipSection}
          color={colors.textMuted}
          styles={styles}
          colors={colors}
        />
        <View
          style={[
            styles.tipCard,
            {
              backgroundColor: colors.bgCard,
              borderColor: colors.border,
            },
          ]}
        >
          <Text style={[styles.tipText, { color: colors.textSecondary }]}>
            💬 {t.exercises[ex.id].tip}
          </Text>
        </View>

        {/* ── Pitfall ──────────────────────────────────────────────── */}
        <SectionHeader
          icon="⚠️"
          label={t.expanded.pitfall}
          color="#e8a000"
          styles={styles}
          colors={colors}
        />
        <View
          style={[
            styles.pitfallCard,
            {
              backgroundColor: "#e8a00012",
              borderColor: "#e8a00035",
              borderLeftColor: "#e8a000",
            },
          ]}
        >
          <Text style={[styles.pitfallText, { color: colors.textSecondary }]}>
            {exExt.pitfall}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface SectionHeaderProps {
  icon: string;
  label: string;
  color: string;
  styles: ReturnType<typeof makeStyles>;
  colors: ColorScheme;
}

function SectionHeader({ icon, label, color, styles, colors }: SectionHeaderProps) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionIcon}>{icon}</Text>
      <Text style={[styles.sectionLabel, { color }]}>{label.toUpperCase()}</Text>
      <View style={[styles.sectionLine, { backgroundColor: colors.border }]} />
    </View>
  );
}

interface ExampleStepProps {
  icon: string;
  label: string;
  text: string;
  accentColor: string;
  styles: ReturnType<typeof makeStyles>;
  colors: ColorScheme;
  isCode?: boolean;
  isResult?: boolean;
}

function ExampleStep({
  icon,
  label,
  text,
  accentColor,
  styles,
  colors,
  isCode,
  isResult,
}: ExampleStepProps) {
  return (
    <View
      style={[
        styles.exampleStep,
        {
          backgroundColor: isResult
            ? accentColor + "0e"
            : colors.bgCard,
          borderColor: isResult ? accentColor + "40" : colors.border,
        },
      ]}
    >
      <View style={styles.exampleStepHeader}>
        <Text style={styles.exampleStepIcon}>{icon}</Text>
        <Text
          style={[
            styles.exampleStepLabel,
            { color: isResult ? accentColor : colors.textMuted },
          ]}
        >
          {label}
        </Text>
      </View>
      <Text
        style={[
          isCode ? styles.exampleCodeText : styles.exampleText,
          { color: colors.textPrimary },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

function makeStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg },

    navbar: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      gap: Spacing.sm,
    },
    backBtn: { padding: 4 },
    backText: { fontSize: FontSize.md },
    navTitle: {
      flex: 1,
      fontSize: FontSize.sm,
      color: colors.textSecondary,
      fontWeight: "600",
      textAlign: "center",
    },
    navSpacer: { width: 36 },

    scroll: {
      padding: Spacing.lg,
      gap: Spacing.lg,
    },

    // Hero
    hero: {
      borderRadius: Radius.xl,
      padding: Spacing.xl,
      alignItems: "center",
      borderWidth: 1,
      gap: Spacing.sm,
    },
    heroEmoji: { fontSize: 52 },
    heroName: {
      fontSize: FontSize.xl,
      fontWeight: "700",
      color: colors.textPrimary,
      textAlign: "center",
    },
    heroBadges: {
      flexDirection: "row",
      gap: 8,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    timePill: {
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: Radius.full,
      borderWidth: 1,
    },
    timePillText: { fontSize: FontSize.xs },

    // Section headers
    sectionHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginTop: Spacing.sm,
    },
    sectionIcon: { fontSize: 15 },
    sectionLabel: {
      fontSize: FontSize.xs,
      fontWeight: "700",
      letterSpacing: 0.8,
    },
    sectionLine: {
      flex: 1,
      height: 1,
      marginLeft: 4,
    },

    // Long description
    longDescCard: {
      borderRadius: Radius.lg,
      borderWidth: 1,
      padding: Spacing.lg,
    },
    longDescText: {
      fontSize: FontSize.md,
      lineHeight: 26,
    },

    // Example steps
    exampleStep: {
      borderRadius: Radius.lg,
      borderWidth: 1,
      padding: Spacing.md,
      gap: Spacing.sm,
    },
    exampleStepHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    exampleStepIcon: { fontSize: 14 },
    exampleStepLabel: {
      fontSize: FontSize.xs,
      fontWeight: "700",
      letterSpacing: 0.6,
      textTransform: "uppercase",
    },
    exampleText: {
      fontSize: FontSize.sm,
      lineHeight: 22,
    },
    exampleCodeText: {
      fontSize: FontSize.sm,
      lineHeight: 24,
      fontVariant: ["tabular-nums"],
    },

    // Benefits
    benefitCard: {
      borderRadius: Radius.lg,
      borderWidth: 1,
      borderLeftWidth: 3,
      padding: Spacing.md,
      gap: 4,
    },
    benefitLabel: {
      fontSize: FontSize.sm,
      fontWeight: "700",
    },
    benefitDesc: {
      fontSize: FontSize.sm,
      lineHeight: 22,
    },

    // Tip
    tipCard: {
      borderRadius: Radius.lg,
      borderWidth: 1,
      padding: Spacing.md,
    },
    tipText: {
      fontSize: FontSize.sm,
      lineHeight: 22,
      fontStyle: "italic",
    },

    // Pitfall
    pitfallCard: {
      borderRadius: Radius.lg,
      borderWidth: 1,
      borderLeftWidth: 3,
      padding: Spacing.md,
    },
    pitfallText: {
      fontSize: FontSize.sm,
      lineHeight: 22,
    },
  });
}
