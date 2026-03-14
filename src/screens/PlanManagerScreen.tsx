// src/screens/PlanManagerScreen.tsx
import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeContext';
import { usePlan, type WeekPlanSet } from '../hooks/PlanContext';
import { FontSize, Spacing, Radius, type ColorScheme } from '../theme';

interface Props {
  navigation: any;
}

export function PlanManagerScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { plans, activePlanId, switchPlan, deletePlan } = usePlan();
  const styles = makeStyles(colors);

  const handleActivate = (plan: WeekPlanSet) => {
    if (plan.id === activePlanId) return;
    Alert.alert(
      'Zmień aktywny plan',
      `Czy na pewno chcesz aktywować plan „${plan.name}"?\n\nNowy plan zacznie obowiązywać od razu.`,
      [
        { text: 'Anuluj', style: 'cancel' },
        { text: 'Aktywuj', onPress: () => switchPlan(plan.id) },
      ],
    );
  };

  const handleDelete = (plan: WeekPlanSet) => {
    Alert.alert(
      'Usuń plan',
      `Czy na pewno chcesz usunąć plan „${plan.name}"?\n\nTej operacji nie można cofnąć.`,
      [
        { text: 'Anuluj', style: 'cancel' },
        { text: 'Usuń', style: 'destructive', onPress: () => deletePlan(plan.id) },
      ],
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} style={styles.navSide}>
          <Text style={[styles.navAction, { color: colors.critical }]}>‹ Wróć</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Plany treningowe</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('PlanEditor', {})}
          activeOpacity={0.75}
          style={styles.navSide}
        >
          <Text style={[styles.navAction, { color: colors.critical, textAlign: 'right' }]}>+ Nowy</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + Spacing.lg }]}
        showsVerticalScrollIndicator={false}
      >
        {plans.map(plan => {
          const isActive = plan.id === activePlanId;
          const isDefault = plan.id === 'default';
          const dateLabel = isDefault
            ? 'Wbudowany'
            : new Date(plan.createdAt).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' });

          return (
            <View key={plan.id} style={[
              styles.card,
              isActive && { borderColor: colors.critical },
            ]}>
              {/* Card header */}
              <View style={styles.cardHeaderRow}>
                <View style={{ flex: 1, gap: 2 }}>
                  <View style={styles.titleRow}>
                    <Text style={styles.planName}>{plan.name}</Text>
                    {isActive && (
                      <View style={[styles.activeBadge, {
                        backgroundColor: colors.critical + '22',
                        borderColor: colors.critical + '55',
                      }]}>
                        <Text style={[styles.activeBadgeText, { color: colors.critical }]}>AKTYWNY</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.dateLabel}>{dateLabel}</Text>
                </View>
              </View>

              {/* Day preview chips */}
              <View style={styles.dayPreview}>
                {plan.days.map((d, i) => (
                  <View key={i} style={[styles.dayChip, { backgroundColor: colors.bgElevated }]}>
                    <Text style={styles.dayChipLabel}>{d.shortDay}</Text>
                    <Text style={styles.dayChipCount}>{d.exerciseIds.length}</Text>
                  </View>
                ))}
              </View>

              {/* Actions */}
              <View style={styles.actions}>
                {!isActive && (
                  <TouchableOpacity
                    onPress={() => handleActivate(plan)}
                    activeOpacity={0.75}
                    style={[styles.btnPrimary, { backgroundColor: colors.critical }]}
                  >
                    <Text style={[styles.btnPrimaryText, { color: colors.white }]}>Aktywuj</Text>
                  </TouchableOpacity>
                )}
                {isDefault ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PlanEditor', {})}
                    activeOpacity={0.75}
                    style={[styles.btnOutline, { borderColor: colors.borderStrong }]}
                  >
                    <Text style={[styles.btnOutlineText, { color: colors.textSecondary }]}>Duplikuj</Text>
                  </TouchableOpacity>
                ) : (
                  <>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('PlanEditor', { planId: plan.id })}
                      activeOpacity={0.75}
                      style={[styles.btnOutline, { borderColor: colors.borderStrong }]}
                    >
                      <Text style={[styles.btnOutlineText, { color: colors.textSecondary }]}>Edytuj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDelete(plan)}
                      activeOpacity={0.75}
                      style={[styles.btnOutline, { borderColor: colors.borderStrong }]}
                    >
                      <Text style={[styles.btnOutlineText, { color: colors.textMuted }]}>Usuń</Text>
                    </TouchableOpacity>
                  </>
                )}
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
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    navSide: { minWidth: 70 },
    navTitle: { fontSize: FontSize.md, fontWeight: '600', color: colors.textPrimary },
    navAction: { fontSize: FontSize.md, fontWeight: '600' },

    scroll: { padding: Spacing.lg, gap: Spacing.md },

    card: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.lg,
      borderWidth: 1,
      borderColor: colors.border,
      padding: Spacing.md,
      gap: Spacing.md,
    },
    cardHeaderRow: { flexDirection: 'row', alignItems: 'flex-start' },
    titleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, flexWrap: 'wrap' },
    planName: { fontSize: FontSize.md, fontWeight: '600', color: colors.textPrimary },
    activeBadge: {
      paddingHorizontal: 8, paddingVertical: 2,
      borderRadius: Radius.full,
      borderWidth: 1,
    },
    activeBadgeText: { fontSize: 9, fontWeight: '800', letterSpacing: 1 },
    dateLabel: { fontSize: FontSize.xs, color: colors.textMuted },

    dayPreview: { flexDirection: 'row', gap: 5 },
    dayChip: {
      flex: 1,
      alignItems: 'center',
      borderRadius: Radius.sm,
      paddingVertical: 6,
      gap: 2,
    },
    dayChipLabel: { fontSize: 9, color: colors.textMuted, fontWeight: '700', letterSpacing: 0.5 },
    dayChipCount: { fontSize: FontSize.md, color: colors.textPrimary, fontWeight: '700' },

    actions: { flexDirection: 'row', gap: Spacing.sm },
    btnPrimary: {
      flex: 1,
      paddingVertical: Spacing.sm,
      borderRadius: Radius.md,
      alignItems: 'center',
    },
    btnPrimaryText: { fontWeight: '600', fontSize: FontSize.sm },
    btnOutline: {
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.md,
      borderRadius: Radius.md,
      borderWidth: 1,
      alignItems: 'center',
    },
    btnOutlineText: { fontSize: FontSize.sm, fontWeight: '500' },
  });
}
