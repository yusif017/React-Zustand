import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(persist(
  (set) => ({
    token: null,
    setToken: (token) => set({ token }),
    clearToken: () => set({ token: null }),
  }),
  {
    name: 'auth-storage', // Saxlama adını təyin edir
    getStorage: () => localStorage, // localStorage istifadə edirik
  }
));

export default useAuthStore;
