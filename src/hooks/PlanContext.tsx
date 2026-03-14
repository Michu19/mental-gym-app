// src/hooks/PlanContext.tsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WEEK_PLAN, type DayPlan } from '../data/exercises';

export interface WeekPlanSet {
  id: string;
  name: string;
  createdAt: string;
  days: DayPlan[]; // always 7, Mon–Sun
}

const PLANS_KEY = 'plans:list';
const ACTIVE_KEY = 'plans:active';

export const DEFAULT_PLAN: WeekPlanSet = {
  id: 'default',
  name: 'Plan domyślny',
  createdAt: '2026-01-01T00:00:00.000Z',
  days: WEEK_PLAN,
};

interface PlanContextValue {
  plans: WeekPlanSet[];
  activePlanId: string;
  activeDays: DayPlan[];
  switchPlan: (id: string) => Promise<void>;
  savePlan: (plan: WeekPlanSet) => Promise<void>;
  deletePlan: (id: string) => Promise<void>;
  loading: boolean;
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plans, setPlans] = useState<WeekPlanSet[]>([DEFAULT_PLAN]);
  const [activePlanId, setActivePlanId] = useState('default');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [rawPlans, activeId] = await Promise.all([
          AsyncStorage.getItem(PLANS_KEY),
          AsyncStorage.getItem(ACTIVE_KEY),
        ]);
        const saved: WeekPlanSet[] = rawPlans ? JSON.parse(rawPlans) : [];
        setPlans([DEFAULT_PLAN, ...saved]);
        if (activeId) setActivePlanId(activeId);
      } catch (e) {
        console.warn('Failed to load plans:', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const persistCustom = useCallback(async (allPlans: WeekPlanSet[]) => {
    const custom = allPlans.filter(p => p.id !== 'default');
    await AsyncStorage.setItem(PLANS_KEY, JSON.stringify(custom));
  }, []);

  const switchPlan = useCallback(async (id: string) => {
    setActivePlanId(id);
    await AsyncStorage.setItem(ACTIVE_KEY, id);
  }, []);

  const savePlan = useCallback(async (plan: WeekPlanSet) => {
    setPlans(prev => {
      const next = [...prev.filter(p => p.id !== plan.id), plan];
      persistCustom(next);
      return next;
    });
  }, [persistCustom]);

  const deletePlan = useCallback(async (id: string) => {
    if (id === 'default') return;
    setPlans(prev => {
      const next = prev.filter(p => p.id !== id);
      persistCustom(next);
      return next;
    });
    if (activePlanId === id) {
      await switchPlan('default');
    }
  }, [activePlanId, switchPlan, persistCustom]);

  const activeDays = (plans.find(p => p.id === activePlanId) ?? DEFAULT_PLAN).days;

  return (
    <PlanContext.Provider value={{ plans, activePlanId, activeDays, switchPlan, savePlan, deletePlan, loading }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error('usePlan must be used within PlanProvider');
  return ctx;
}
