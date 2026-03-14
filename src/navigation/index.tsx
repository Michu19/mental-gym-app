// src/navigation/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { Colors, FontSize } from '../theme';
import { TodayScreen } from '../screens/TodayScreen';
import { PlanScreen } from '../screens/PlanScreen';
import { LibraryScreen } from '../screens/LibraryScreen';
import { ExerciseDetailScreen } from '../screens/ExerciseDetailScreen';

export type RootStackParamList = {
  Tabs: undefined;
  ExerciseDetail: { exerciseId: string };
};

export type TabParamList = {
  Today: undefined;
  Plan: undefined;
  Library: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.critical,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ color, focused }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Today:   focused ? 'today' : 'today-outline',
            Plan:    focused ? 'calendar' : 'calendar-outline',
            Library: focused ? 'library' : 'library-outline',
          };
          return <Ionicons name={icons[route.name]} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Today" component={TodayScreen} options={{ tabBarLabel: 'Dziś' }} />
      <Tab.Screen name="Plan" component={PlanScreen} options={{ tabBarLabel: 'Plan' }} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{ tabBarLabel: 'Biblioteka' }} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: Colors.critical,
          background: Colors.bg,
          card: Colors.bgCard,
          text: Colors.textPrimary,
          border: Colors.border,
          notification: Colors.critical,
        },
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetailScreen}
          options={{ presentation: 'card' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.bgCard,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    paddingTop: 4,
    height: 60,
  },
  tabLabel: {
    fontSize: FontSize.xs,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
});
