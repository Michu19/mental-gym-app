// src/navigation/index.tsx
import React from "react";
import { StyleSheet } from "react-native";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FontSize } from "../theme";
import { TodayScreen } from "../screens/TodayScreen";
import { PlanScreen } from "../screens/PlanScreen";
import { LibraryScreen } from "../screens/LibraryScreen";
import { StatsScreen } from "../screens/StatsScreen";
import { ExerciseDetailScreen } from "../screens/ExerciseDetailScreen";
import { PlanManagerScreen } from "../screens/PlanManagerScreen";
import { PlanEditorScreen } from "../screens/PlanEditorScreen";
import { useTheme } from "../theme/ThemeContext";

export type RootStackParamList = {
  Tabs: undefined;
  ExerciseDetail: { exerciseId: string };
  PlanManager: undefined;
  PlanEditor: { planId?: string };
};

export type TabParamList = {
  Today: undefined;
  Plan: undefined;
  Library: undefined;
  Stats: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function TabNavigator() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.bgCard,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingTop: 4,
          paddingBottom: insets.bottom,
          height: 60 + insets.bottom,
        },
        tabBarItemStyle: {
          height: 56,
        },
        tabBarActiveTintColor: colors.critical,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ color, focused }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Today: focused ? "today" : "today-outline",
            Plan: focused ? "calendar" : "calendar-outline",
            Library: focused ? "library" : "library-outline",
            Stats: focused ? "bar-chart" : "bar-chart-outline",
          };
          return <Ionicons name={icons[route.name]} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{ tabBarLabel: "Dziś" }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{ tabBarLabel: "Plan" }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{ tabBarLabel: "Biblioteka" }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{ tabBarLabel: "Statystyki" }}
      />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  const { isDark, colors } = useTheme();
  const baseTheme = isDark ? DarkTheme : DefaultTheme;
  const navTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: colors.critical,
      background: colors.bg,
      card: colors.bgCard,
      text: colors.textPrimary,
      border: colors.border,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetailScreen}
          options={{ presentation: "card" }}
        />
        <Stack.Screen name="PlanManager" component={PlanManagerScreen} />
        <Stack.Screen name="PlanEditor" component={PlanEditorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: FontSize.xs,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
});
