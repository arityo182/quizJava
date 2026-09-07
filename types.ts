// ═══════════════════════════════════════════════════════════════════════
//  SHARED TYPES — Java Developer Selection Test
// ═══════════════════════════════════════════════════════════════════════

export type Difficulty = "beginner" | "intermediate" | "advanced";
export type OptionKey = "A" | "B" | "C" | "D";

export interface Question {
  level: Difficulty;
  q: string;
  opts: Record<OptionKey, string>;
  ans: OptionKey;
  exp: string;
  cat?: string;
  code?: string;
}

export type AnswerMap = Record<number, OptionKey>;
export type FlagMap = Record<number, boolean>;

export type Screen =
  | "login"
  | "brief"
  | "selectLevel"
  | "logical"
  | "break"
  | "technical"
  | "results";

export interface ThemeColors {
  bg: string;
  surf: string;
  card: string;
  border: string;
  acc: string;
  pur: string;
  text: string;
  muted: string;
  sub: string;
  ok: string;
  err: string;
  warn: string;
  adv: string;
}
