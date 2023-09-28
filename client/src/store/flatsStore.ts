import { create } from 'zustand';
import { Flat } from '../types';

type FlatsState = {
  flats: Flat[];
  page: number;
  limit: number;
  count: number;
};

type FlatsActions = {
  fetchFlats: () => Promise<void>;
  updatePage: (page: FlatsState['page']) => void;
  updateLimit: (page: FlatsState['page']) => void;
};

export const useFlatsStore = create<FlatsState & FlatsActions>((set, get) => ({
  flats: [],
  page: 1,
  limit: 30,
  count: 0,
  fetchFlats: async () => {
    const url = `${import.meta.env.VITE_API_URL}/api/flats/${get().limit}/${get().page}`;

    const res = await fetch(url, { method: 'GET' });
    const { rows, count } = await res.json();

    if (get().limit * get().page > count) set({ page: Math.floor(count / get().limit) });

    set({ flats: rows, count });
  },
  updatePage: (page: FlatsState['page']) => set(() => ({ page })),
  updateLimit: (limit: FlatsState['limit']) => set(() => ({ limit })),
}));
