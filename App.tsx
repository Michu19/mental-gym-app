// App.tsx
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { AppNavigator } from "./src/navigation";
import { ThemeProvider, useTheme } from "./src/theme/ThemeContext";
import { PlanProvider } from "./src/hooks/PlanContext";
import { ProgressProvider } from "./src/hooks/ProgressContext";

function AppContent() {
  const { isDark } = useTheme();
  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <AppNavigator />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PlanProvider>
        <ProgressProvider>
        <GestureHandlerRootView style={styles.root}>
          <SafeAreaProvider>
            <AppContent />
          </SafeAreaProvider>
        </GestureHandlerRootView>
        </ProgressProvider>
      </PlanProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
