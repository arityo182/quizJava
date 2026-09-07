// ═══════════════════════════════════════════════════════════════════════
//  SHARED TYPES — Java Developer Selection Test
// ═══════════════════════════════════════════════════════════════════════

export type Difficulty = "beginner" | "intermediate" | "advanced";
export type OptionKey = "A" | "B" | "C" | "D";

export interface ExplanationDetail {
  correct: string;
  A?: string;
  B?: string;
  C?: string;
  D?: string;
}

export interface Question {
  id?: number | string;
  level: Difficulty;
  topic?: string;
  cat?: string;
  question?: string;
  q?: string;
  options?: Record<OptionKey, string>;
  opts?: Record<OptionKey, string>;
  answer?: OptionKey;
  ans?: OptionKey;
  explanation?: string | ExplanationDetail;
  exp?: string | ExplanationDetail;
  code?: string;
  mode?: "study" | "test";
  jobId?: string;
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

export type JobId = "junior-java" | "fullstack-gis";

export const getQId = (q: Question, idx?: number): string | number =>
  q.id ?? (idx !== undefined ? idx + 1 : 1);
export const getQText = (q: Question): string => q.question ?? q.q ?? "";
export const getQOptions = (q: Question): Record<OptionKey, string> =>
  q.options ?? q.opts ?? { A: "", B: "", C: "", D: "" };
export const getQAnswer = (q: Question): OptionKey => q.answer ?? q.ans ?? "A";
export const getQTopic = (q: Question): string => q.topic ?? q.cat ?? "Umum";
export const getQExplanation = (q: Question): ExplanationDetail => {
  const e = q.explanation ?? q.exp;
  if (typeof e === "object" && e !== null) {
    return {
      correct: e.correct || "",
      A: e.A || "",
      B: e.B || "",
      C: e.C || "",
      D: e.D || "",
    };
  }
  const str = typeof e === "string" ? e : "";
  return { correct: str, A: "", B: "", C: "", D: "" };
};

