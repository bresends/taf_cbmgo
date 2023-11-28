import { Data } from "./App";

interface ScoreRanges {
  Masculino: { min: number; max: number; score: number }[];
  Feminino: { min: number; max: number; score: number }[];
}

interface Scores {
  corrida: ScoreRanges;
  flexao: ScoreRanges;
  abdominal: ScoreRanges;
  natacao: ScoreRanges;
  barras: ScoreRanges;
}

const scores: Scores = {
  abdominal: {
    Masculino: [
      { min: 70, max: Infinity, score: 10.0 },
      { min: 66, max: 69, score: 9.5 },
      { min: 61, max: 65, score: 9.0 },
      { min: 56, max: 60, score: 8.5 },
      { min: 51, max: 55, score: 8.0 },
      { min: 46, max: 50, score: 7.5 },
      { min: 41, max: 45, score: 7.0 },
      { min: 36, max: 40, score: 6.5 },
      { min: 31, max: 35, score: 6.0 },
      { min: 30, max: 30, score: 5.0 },
      { min: 26, max: 29, score: 4.0 },
      { min: 22, max: 25, score: 3.0 },
      { min: 18, max: 21, score: 2.0 },
      { min: 14, max: 17, score: 1.0 },
      { min: 0, max: 13, score: 0.0 },
    ],
    Feminino: [
      { min: 65, max: Infinity, score: 10.0 },
      { min: 61, max: 64, score: 9.5 },
      { min: 56, max: 60, score: 9.0 },
      { min: 51, max: 55, score: 8.5 },
      { min: 46, max: 50, score: 8.0 },
      { min: 41, max: 45, score: 7.5 },
      { min: 36, max: 40, score: 7.0 },
      { min: 31, max: 35, score: 6.5 },
      { min: 26, max: 30, score: 6.0 },
      { min: 25, max: 25, score: 5.0 },
      { min: 21, max: 24, score: 4.0 },
      { min: 17, max: 20, score: 3.0 },
      { min: 13, max: 16, score: 2.0 },
      { min: 9, max: 12, score: 1.0 },
      { min: 0, max: 8, score: 0.0 },
    ],
  },
  corrida: {
    Masculino: [
      { min: 3300, max: Infinity, score: 10.0 },
      { min: 3200, max: 3299, score: 9.5 },
      { min: 3100, max: 3199, score: 9.0 },
      { min: 3000, max: 3099, score: 8.5 },
      { min: 2900, max: 2999, score: 8.0 },
      { min: 2800, max: 2899, score: 7.5 },
      { min: 2700, max: 2799, score: 7.0 },
      { min: 2600, max: 2699, score: 6.5 },
      { min: 2500, max: 2599, score: 6.0 },
      { min: 2400, max: 2499, score: 5.0 },
      { min: 2300, max: 2399, score: 4.0 },
      { min: 2200, max: 2299, score: 3.0 },
      { min: 2100, max: 2199, score: 2.0 },
      { min: 2000, max: 2099, score: 1.0 },
      { min: 0, max: 1999, score: 0.0 },
    ],
    Feminino: [
      { min: 3000, max: Infinity, score: 10.0 },
      { min: 2900, max: 2999, score: 9.5 },
      { min: 2800, max: 2899, score: 9.0 },
      { min: 2700, max: 2799, score: 8.5 },
      { min: 2600, max: 2699, score: 8.0 },
      { min: 2500, max: 2599, score: 7.5 },
      { min: 2400, max: 2499, score: 7.0 },
      { min: 2300, max: 2399, score: 6.5 },
      { min: 2200, max: 2299, score: 6.0 },
      { min: 2100, max: 2199, score: 5.0 },
      { min: 2000, max: 2099, score: 4.0 },
      { min: 1900, max: 1999, score: 3.0 },
      { min: 1800, max: 1899, score: 2.0 },
      { min: 1700, max: 1799, score: 1.0 },
      { min: 0, max: 1699, score: 0.0 },
    ],
  },
  flexao: {
    Masculino: [
      { min: 45, max: Infinity, score: 10.0 },
      { min: 43, max: 44, score: 9.5 },
      { min: 40, max: 42, score: 9.0 },
      { min: 37, max: 39, score: 8.5 },
      { min: 34, max: 36, score: 8.0 },
      { min: 31, max: 33, score: 7.5 },
      { min: 28, max: 30, score: 7.0 },
      { min: 25, max: 27, score: 6.5 },
      { min: 23, max: 24, score: 6.0 },
      { min: 22, max: 22, score: 5.0 },
      { min: 17, max: 21, score: 4.0 },
      { min: 13, max: 16, score: 3.0 },
      { min: 9, max: 12, score: 2.0 },
      { min: 5, max: 8, score: 1.0 },
      { min: 0, max: 4, score: 0.0 },
    ],
    Feminino: [
      { min: 45, max: Infinity, score: 10.0 },
      { min: 43, max: 44, score: 9.5 },
      { min: 40, max: 42, score: 9.0 },
      { min: 37, max: 39, score: 8.5 },
      { min: 34, max: 36, score: 8.0 },
      { min: 31, max: 33, score: 7.5 },
      { min: 28, max: 30, score: 7.0 },
      { min: 25, max: 27, score: 6.5 },
      { min: 23, max: 24, score: 6.0 },
      { min: 22, max: 22, score: 5.0 },
      { min: 17, max: 21, score: 4.0 },
      { min: 13, max: 16, score: 3.0 },
      { min: 9, max: 12, score: 2.0 },
      { min: 5, max: 8, score: 1.0 },
      { min: 0, max: 4, score: 0.0 },
    ],
  },
  barras: {
    Masculino: [
      { min: 15, max: 15, score: 10.0 },
      { min: 14, max: 14, score: 9.5 },
      { min: 12, max: 13, score: 9.0 },
      { min: 11, max: 11, score: 8.5 },
      { min: 10, max: 10, score: 8.0 },
      { min: 9, max: 9, score: 7.5 },
      { min: 7, max: 8, score: 7.0 },
      { min: 6, max: 6, score: 6.5 },
      { min: 5, max: 5, score: 6.0 },
      { min: 3, max: 4, score: 5.0 },
      { min: 2, max: 2, score: 4.0 },
      { min: 1, max: 1, score: 2.0 },
      { min: 0, max: 0, score: 0.0 },
    ],
    Feminino: [
      { min: 55, max: Infinity, score: 10.0 },
      { min: 51, max: 54, score: 9.5 },
      { min: 45, max: 50, score: 9.0 },
      { min: 41, max: 44, score: 8.5 },
      { min: 37, max: 40, score: 8.0 },
      { min: 33, max: 36, score: 7.5 },
      { min: 29, max: 32, score: 7.0 },
      { min: 25, max: 28, score: 6.5 },
      { min: 21, max: 24, score: 6.0 },
      { min: 15, max: 20, score: 5.0 },
      { min: 10, max: 14, score: 4.0 },
      { min: 6, max: 9, score: 2.0 },
      { min: 0, max: 5, score: 0.0 },
    ],
  },
  natacao: {
    Masculino: [
      { min: 0, max: 30, score: 10.0 },
      { min: 31, max: 31, score: 9.5 },
      { min: 32, max: 33, score: 9.0 },
      { min: 34, max: 36, score: 8.5 },
      { min: 37, max: 39, score: 8.0 },
      { min: 40, max: 42, score: 7.5 },
      { min: 43, max: 45, score: 7.0 },
      { min: 46, max: 50, score: 6.5 },
      { min: 51, max: 55, score: 6.0 },
      { min: 56, max: 60, score: 5.0 },
      { min: 61, max: 65, score: 4.0 },
      { min: 66, max: 70, score: 2.0 },
      { min: 71, max: Infinity, score: 0.0 },
    ],
    Feminino: [
      { min: 0, max: 35, score: 10.0 },
      { min: 36, max: 36, score: 9.5 },
      { min: 37, max: 38, score: 9.0 },
      { min: 39, max: 41, score: 8.5 },
      { min: 42, max: 44, score: 8.0 },
      { min: 45, max: 47, score: 7.5 },
      { min: 48, max: 50, score: 7.0 },
      { min: 51, max: 55, score: 6.5 },
      { min: 56, max: 60, score: 6.0 },
      { min: 61, max: 65, score: 5.0 },
      { min: 66, max: 70, score: 4.0 },
      { min: 71, max: 75, score: 2.0 },
      { min: 76, max: Infinity, score: 0.0 },
    ],
  },
};

interface ExerciseScoreParams {
  value: number;
  gender: "Masculino" | "Feminino";
  exercise: Exclude<keyof Data, "sexo">;
}

export function getScore({
  value,
  gender,
  exercise,
}: ExerciseScoreParams): number {
  const ranges = scores[exercise][gender];

  for (const range of ranges) {
    if (value >= range.min && value <= range.max) {
      return range.score;
    }
  }

  return 0.0;
}
