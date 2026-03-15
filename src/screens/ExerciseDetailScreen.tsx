// src/screens/ExerciseDetailScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Alert,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { FontSize, Spacing, Radius, type ColorScheme } from "../theme";
import { EXERCISES_BY_ID, formatTime } from "../data/exercises";
import { useTimer, useNoteHistory } from "../hooks/useProgress";
import { useProgressContext } from "../hooks/ProgressContext";
import {
  CategoryBadge,
  CheckButton,
  Divider,
  SectionLabel,
} from "../components/ui";
import { useTheme } from "../theme/ThemeContext";
import { useTranslation } from "../i18n/LanguageContext";

interface Props {
  route: {
    params: { exerciseId: string; dateStr?: string; showToggle?: boolean };
  };
  navigation: any;
}

export function ExerciseDetailScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { exerciseId, dateStr, showToggle } = route.params;
  const ex = EXERCISES_BY_ID[exerciseId];
  const { colors, categoryColors } = useTheme();
  const { t } = useTranslation();
  const accentColor = categoryColors[ex.category];
  const { completedByDate, toggleExercise } = useProgressContext();
  const todayStr = new Date().toISOString().split("T")[0];
  const effectiveDateStr = dateStr ?? todayStr;
  const isViewOnly = effectiveDateStr !== todayStr;
  const done = (completedByDate[effectiveDateStr] ?? new Set<string>()).has(
    exerciseId,
  );
  const [draftNote, setDraftNote] = useState("");
  const { notes, addNote, deleteNote, addImage, deleteImage } =
    useNoteHistory(exerciseId);
  // When opened from TodayScreen (dateStr set): only show notes for that day.
  // When opened from Library (no dateStr): show all notes.
  const visibleNotes = dateStr
    ? notes.filter((n) => n.date === dateStr)
    : notes;
  const [lightboxUri, setLightboxUri] = useState<string | null>(null);

  const requestAndPickFromCamera = async (noteId: string) => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(t.exercise.permDenied, t.exercise.permCamera);
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
    });
    if (!result.canceled && result.assets[0]) {
      await addImage(noteId, result.assets[0].uri);
    }
  };

  const requestAndPickFromGallery = async (noteId: string) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(t.exercise.permDenied, t.exercise.permGallery);
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 0.8,
    });
    if (!result.canceled && result.assets[0]) {
      await addImage(noteId, result.assets[0].uri);
    }
  };

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
    await toggleExercise(exerciseId, effectiveDateStr);
  };

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
        <Text style={styles.navTitle}>#{ex.id}</Text>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: insets.bottom + Spacing.xl },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Hero */}
        <View
          style={[
            styles.hero,
            {
              backgroundColor: accentColor + "12",
              borderColor: accentColor + "30",
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
            <View style={styles.timePillLarge}>
              <Text style={styles.timePillText}>
                ⏱ {formatTime(ex.timeMin, ex.timeMax)}
              </Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{t.exercises[ex.id].description}</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ExerciseExpanded", { exerciseId })
          }
          activeOpacity={0.75}
          style={[
            styles.readMoreBtn,
            { backgroundColor: accentColor + "12", borderColor: accentColor + "40" },
          ]}
        >
          <Text style={[styles.readMoreText, { color: accentColor }]}>
            📖 {t.exercise.readMore}
          </Text>
          <Text style={[styles.readMoreArrow, { color: accentColor }]}>→</Text>
        </TouchableOpacity>

        <Divider />

        {/* Timer */}
        <View style={styles.timerSection}>
          <SectionLabel text={t.exercise.timer} color={accentColor} />
          <View style={styles.timerRow}>
            <View
              style={[
                styles.timerDisplay,
                { borderColor: timer.running ? accentColor : colors.border },
              ]}
            >
              <Text
                style={[
                  styles.timerText,
                  {
                    color: timer.finished
                      ? colors.success
                      : timer.running
                        ? accentColor
                        : colors.textPrimary,
                  },
                ]}
              >
                {timer.finished ? t.exercise.timerDone : timer.formatted}
              </Text>
            </View>
            {!isViewOnly && (
              <View style={styles.timerBtns}>
                <TouchableOpacity
                  onPress={handleTimerToggle}
                  activeOpacity={0.75}
                  style={[styles.timerBtn, { backgroundColor: accentColor }]}
                >
                  <Text style={styles.timerBtnText}>
                    {timer.running
                      ? t.exercise.pause
                      : timer.finished
                        ? t.exercise.restart
                        : t.exercise.start}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleReset}
                  activeOpacity={0.75}
                  style={styles.timerBtnSecondary}
                >
                  <Text style={styles.timerBtnSecondaryText}>
                    {t.exercise.reset}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          {!isViewOnly && (
            <View style={styles.timerOptions}>
              {[ex.timeMin, ex.timeMax]
                .filter((v, i, a) => a.indexOf(v) === i)
                .map((min) => (
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
          )}
        </View>

        <Divider />

        {/* Prompt */}
        <View style={styles.section}>
          <SectionLabel text={t.exercise.promptSection} color={accentColor} />
          <View style={[styles.promptBox, { borderLeftColor: accentColor }]}>
            <Text style={styles.promptText}>{t.exercises[ex.id].prompt}</Text>
          </View>
        </View>

        <Divider />

        {/* Tip */}
        <View style={styles.section}>
          <SectionLabel text={t.exercise.tipSection} />
          <Text style={styles.tipText}>💬 {t.exercises[ex.id].tip}</Text>
        </View>

        <Divider />

        {/* Notes */}
        <View style={styles.section}>
          <View style={styles.noteHeader}>
            <SectionLabel
              text={dateStr ? t.exercise.notesDay : t.exercise.notesAll}
              color={accentColor}
            />
            {visibleNotes.length > 0 && (
              <View
                style={[
                  styles.noteCount,
                  {
                    backgroundColor: accentColor + "22",
                    borderColor: accentColor + "55",
                  },
                ]}
              >
                <Text style={[styles.noteCountText, { color: accentColor }]}>
                  {visibleNotes.length}
                </Text>
              </View>
            )}
          </View>

          {!isViewOnly && (
            <View style={styles.noteAdd}>
              <TextInput
                style={[
                  styles.noteInput,
                  {
                    borderColor:
                      draftNote.length > 0 ? accentColor + "80" : colors.border,
                  },
                ]}
                multiline
                placeholder={t.exercise.notesPlaceholder}
                placeholderTextColor={colors.textMuted}
                value={draftNote}
                onChangeText={setDraftNote}
                textAlignVertical="top"
              />
              <TouchableOpacity
                onPress={async () => {
                  await addNote(draftNote, dateStr);
                  setDraftNote("");
                }}
                activeOpacity={0.75}
                disabled={!draftNote.trim()}
                style={[
                  styles.noteSaveBtn,
                  draftNote.trim()
                    ? { backgroundColor: accentColor }
                    : {
                        backgroundColor: "transparent",
                        borderWidth: 1,
                        borderColor: colors.borderStrong,
                      },
                ]}
              >
                <Text
                  style={[
                    styles.noteSaveBtnText,
                    {
                      color: draftNote.trim() ? colors.white : colors.textMuted,
                    },
                  ]}
                >
                  {t.exercise.notesSave}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {visibleNotes.length === 0 ? (
            <View
              style={[
                styles.noteEmpty,
                { backgroundColor: colors.bgCard, borderColor: colors.border },
              ]}
            >
              <Text style={styles.noteEmptyText}>
                {dateStr ? t.exercise.notesEmptyDay : t.exercise.notesEmpty}
              </Text>
            </View>
          ) : (
            <View style={styles.noteList}>
              {visibleNotes.map((entry) => {
                const date = new Date(entry.createdAt);
                const label = date.toLocaleDateString(t.days.locale, {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });
                return (
                  <View
                    key={entry.id}
                    style={[
                      styles.noteEntry,
                      {
                        borderLeftColor: accentColor,
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <View style={styles.noteEntryHeader}>
                      <View
                        style={[
                          styles.noteEntryDatePill,
                          { backgroundColor: accentColor + "18" },
                        ]}
                      >
                        <Text
                          style={[styles.noteEntryDate, { color: accentColor }]}
                        >
                          {label}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          Alert.alert(
                            t.exercise.deleteNoteTitle,
                            t.exercise.deleteNoteMsg,
                            [
                              { text: t.exercise.cancel, style: "cancel" },
                              {
                                text: t.exercise.delete,
                                style: "destructive",
                                onPress: () => deleteNote(entry.id),
                              },
                            ],
                          )
                        }
                        activeOpacity={0.7}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        style={[
                          styles.noteDeleteBtn,
                          { borderColor: colors.borderStrong },
                        ]}
                      >
                        <Text
                          style={[
                            styles.noteEntryDelete,
                            { color: colors.textMuted },
                          ]}
                        >
                          ✕
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.noteEntryText}>{entry.text}</Text>

                    {/* Photo thumbnails */}
                    {(entry.imageUris ?? []).length > 0 && (
                      <View style={styles.photoGrid}>
                        {(entry.imageUris ?? []).map((uri) => (
                          <TouchableOpacity
                            key={uri}
                            onPress={() => setLightboxUri(uri)}
                            onLongPress={() =>
                              Alert.alert(
                                t.exercise.deletePhotoTitle,
                                t.exercise.deletePhotoMsg,
                                [
                                  { text: t.exercise.cancel, style: "cancel" },
                                  {
                                    text: t.exercise.delete,
                                    style: "destructive",
                                    onPress: () => deleteImage(entry.id, uri),
                                  },
                                ],
                              )
                            }
                            activeOpacity={0.8}
                          >
                            <Image source={{ uri }} style={styles.photoThumb} />
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}

                    {/* Photo add buttons */}
                    {!isViewOnly && (
                      <View style={styles.photoActions}>
                        <TouchableOpacity
                          onPress={() => requestAndPickFromCamera(entry.id)}
                          activeOpacity={0.7}
                          style={[
                            styles.photoBtn,
                            { borderColor: accentColor + "66" },
                          ]}
                        >
                          <Text
                            style={[
                              styles.photoBtnText,
                              { color: accentColor },
                            ]}
                          >
                            {t.exercise.photoCamera}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => requestAndPickFromGallery(entry.id)}
                          activeOpacity={0.7}
                          style={[
                            styles.photoBtn,
                            { borderColor: colors.borderStrong },
                          ]}
                        >
                          <Text
                            style={[
                              styles.photoBtnText,
                              { color: colors.textMuted },
                            ]}
                          >
                            {t.exercise.photoGallery}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          )}
        </View>

        <Divider />

        {/* Done button */}
        {showToggle && (
          <View style={styles.section}>
            <CheckButton done={done} onPress={handleDone} />
          </View>
        )}
      </ScrollView>

      {/* Lightbox */}
      <Modal
        visible={!!lightboxUri}
        transparent
        animationType="fade"
        onRequestClose={() => setLightboxUri(null)}
        statusBarTranslucent
      >
        <View style={styles.lightboxOverlay}>
          <TouchableOpacity
            style={styles.lightboxClose}
            onPress={() => setLightboxUri(null)}
            activeOpacity={0.8}
          >
            <Text style={styles.lightboxCloseText}>✕</Text>
          </TouchableOpacity>
          {lightboxUri && (
            <Image
              source={{ uri: lightboxUri }}
              style={styles.lightboxImage}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
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
    backBtn: { padding: 4 },
    backText: { fontSize: FontSize.md },
    navTitle: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
      fontWeight: "600",
    },

    scroll: { padding: Spacing.lg, gap: Spacing.lg },

    hero: {
      borderRadius: Radius.xl,
      padding: Spacing.xl,
      alignItems: "center",
      borderWidth: 1,
      gap: Spacing.sm,
    },
    heroEmoji: { fontSize: 48 },
    heroName: {
      fontSize: FontSize.xl,
      fontWeight: "600",
      color: colors.textPrimary,
      textAlign: "center",
    },
    heroBadges: {
      flexDirection: "row",
      gap: 8,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    timePillLarge: {
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: Radius.full,
      backgroundColor: colors.bgElevated,
      borderWidth: 1,
      borderColor: colors.borderStrong,
    },
    timePillText: { fontSize: FontSize.xs, color: colors.textMuted },

    description: {
      fontSize: FontSize.md,
      color: colors.textSecondary,
      lineHeight: 24,
    },

    readMoreBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: Radius.lg,
      borderWidth: 1,
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.md,
    },
    readMoreText: {
      fontSize: FontSize.sm,
      fontWeight: "600",
    },
    readMoreArrow: {
      fontSize: FontSize.md,
      fontWeight: "300",
    },

    timerSection: { gap: Spacing.md },
    timerRow: { flexDirection: "row", alignItems: "center", gap: Spacing.md },
    timerDisplay: {
      flex: 1,
      paddingVertical: Spacing.lg,
      borderRadius: Radius.lg,
      borderWidth: 2,
      alignItems: "center",
      backgroundColor: colors.bgCard,
    },
    timerText: { fontSize: 40, fontWeight: "200", letterSpacing: 2 },
    timerBtns: { gap: 8 },
    timerBtn: {
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      borderRadius: Radius.md,
      alignItems: "center",
      minWidth: 80,
    },
    timerBtnText: {
      color: colors.white,
      fontWeight: "600",
      fontSize: FontSize.sm,
    },
    timerBtnSecondary: {
      paddingHorizontal: Spacing.lg,
      paddingVertical: Spacing.sm,
      borderRadius: Radius.md,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.borderStrong,
    },
    timerBtnSecondaryText: { color: colors.textMuted, fontSize: FontSize.sm },
    timerOptions: { flexDirection: "row", gap: 8 },
    timerOption: {
      paddingHorizontal: Spacing.md,
      paddingVertical: 6,
      borderRadius: Radius.full,
      borderWidth: 1,
      borderColor: colors.border,
    },
    timerOptionText: { fontSize: FontSize.xs, color: colors.textMuted },

    section: { gap: Spacing.sm },
    promptBox: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.md,
      padding: Spacing.md,
      borderLeftWidth: 3,
    },
    promptText: {
      fontSize: FontSize.sm,
      color: colors.textPrimary,
      lineHeight: 24,
    },
    tipText: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
      fontStyle: "italic",
      lineHeight: 22,
    },

    noteHeader: { flexDirection: "row", alignItems: "center", gap: Spacing.sm },
    noteCount: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: Radius.full,
      borderWidth: 1,
    },
    noteCountText: { fontSize: FontSize.xs, fontWeight: "700" },

    noteAdd: { gap: Spacing.sm },
    noteInput: {
      backgroundColor: colors.bgInput,
      borderRadius: Radius.md,
      borderWidth: 1,
      padding: Spacing.md,
      fontSize: FontSize.sm,
      color: colors.textPrimary,
      minHeight: 100,
      lineHeight: 22,
    },
    noteSaveBtn: {
      borderRadius: Radius.md,
      paddingVertical: Spacing.sm,
      alignItems: "center",
    },
    noteSaveBtnText: { fontWeight: "600", fontSize: FontSize.sm },

    noteEmpty: {
      borderRadius: Radius.md,
      borderWidth: 1,
      padding: Spacing.md,
      alignItems: "center",
    },
    noteEmptyText: {
      fontSize: FontSize.sm,
      color: colors.textMuted,
      textAlign: "center",
      lineHeight: 22,
    },

    noteList: { gap: Spacing.sm },
    noteEntry: {
      backgroundColor: colors.bgCard,
      borderRadius: Radius.md,
      borderWidth: 1,
      borderLeftWidth: 3,
      padding: Spacing.md,
      gap: 8,
    },
    noteEntryHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    noteEntryDatePill: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: Radius.full,
    },
    noteEntryDate: {
      fontSize: FontSize.xs,
      fontWeight: "600",
      letterSpacing: 0.3,
    },
    noteDeleteBtn: {
      width: 26,
      height: 26,
      borderRadius: 13,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    noteEntryDelete: { fontSize: 11, fontWeight: "700" },
    noteEntryText: {
      fontSize: FontSize.sm,
      color: colors.textPrimary,
      lineHeight: 22,
    },

    photoGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 4,
    },
    photoThumb: {
      width: 80,
      height: 80,
      borderRadius: Radius.sm,
      backgroundColor: colors.bgElevated,
    },
    photoActions: {
      flexDirection: "row",
      gap: 8,
      marginTop: 4,
    },
    photoBtn: {
      flex: 1,
      borderWidth: 1,
      borderRadius: Radius.md,
      paddingVertical: 6,
      alignItems: "center",
    },
    photoBtnText: {
      fontSize: FontSize.xs,
      fontWeight: "600",
    },

    lightboxOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.92)",
      justifyContent: "center",
      alignItems: "center",
    },
    lightboxClose: {
      position: "absolute",
      top: Platform.OS === "ios" ? 56 : 32,
      right: 20,
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: "rgba(255,255,255,0.15)",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    },
    lightboxCloseText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
    },
    lightboxImage: {
      width: "100%",
      height: "80%",
    },
  });
}
