import { ReactNode } from "react";

export interface ChallengesProviderProps {
  children: ReactNode;
  level?: number;
  currentExp?: number;
  challengesCompleted?: number;
  prevLevelExp?: number;
}
