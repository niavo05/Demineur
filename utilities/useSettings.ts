import { create } from "zustand";

export type Level = "easy" | "medium" | "hard";

type SettingsState = {
  volume: number;
  vibration: boolean;
  level: Level;

  tempVolume: number;
  tempVibration: boolean;
  tempLevel: Level;

  setTempVolume: (v: number) => void;
  setTempVibration: (v: boolean) => void;
  setTempLevel: (l: Level) => void;
  saveSettings: () => void;
};

export const useSettings = create<SettingsState>((set) => ({
  volume: 0.5,
  vibration: true,
  level: "medium",

  tempVolume: 0.5,
  tempVibration: true,
  tempLevel: "medium",

  setTempVolume: (v) => set({ tempVolume: v }),
  setTempVibration: (v) => set({ tempVibration: v }),
  setTempLevel: (l) => set({ tempLevel: l }),

  saveSettings: () =>
    set((state) => ({
      volume: state.tempVolume,
      vibration: state.tempVibration,
      level: state.tempLevel,
    })),
}));
