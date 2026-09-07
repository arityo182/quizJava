import { useState, useEffect, useMemo, type CSSProperties, type ReactNode } from "react";
import type { Question, OptionKey, Difficulty } from "./types";
import { LOG_Q } from "./logicalQuestions";
import { TECH_BEGINNER } from "./techBeginner";
import { TECH_INTERMEDIATE } from "./techIntermediate";
import { TECH_ADVANCED } from "./techAdvanced";
import { JAVA_TEST_QUESTIONS } from "./javaTestQuestions";
import { GIS_QUESTIONS } from "./gisQuestions";
import { GIS_TEST_QUESTIONS } from "./gisTestQuestions";

export type JobId = "junior-java" | "fullstack-gis";
export type Mode = "menu" | "study" | "test" | "results";
export type LevelFilter = "all" | Difficulty;
export type ReviewFilter = "all" | "wrong" | "correct" | "flagged";

// 450 Study Questions for Lowongan 1
const JAVA_QUESTIONS: Question[] = [
  ...LOG_Q,
  ...TECH_BEGINNER,
  ...TECH_INTERMEDIATE,
  ...TECH_ADVANCED,
];

// Helper functions for data access compatibility
const getQText = (q: Question): string => q.q || (q as any).question || "";
const getQOptions = (q: Question): Record<OptionKey, string> =>
  q.opts || (q as any).options || { A: "", B: "", C: "", D: "" };
const getQAnswer = (q: Question): OptionKey => q.ans || (q as any).answer || "A";
const getQTopic = (q: Question): string => q.cat || (q as any).topic || "Umum";
const getQExp = (q: Question): string => {
  const e = q.exp || (q as any).explanation;
  if (typeof e === "object" && e !== null) return (e as any).correct || "";
  return typeof e === "string" ? e : "";
};

const C = {
  bg: "#060F1C",
  surf: "#0C1A2E",
  card: "#101E33",
  cardHover: "#152844",
  border: "#1A3256",
  borderLight: "#2A4B7C",
  acc: "#38BDF8",
  pur: "#A78BFA",
  text: "#E2E8F0",
  muted: "#475569",
  sub: "#94A3B8",
  ok: "#34D399",
  err: "#FB7185",
  warn: "#FBBF24",
  adv: "#FB923C",
};

const F = "'Inter', system-ui, -apple-system, sans-serif";

const formatTimer = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

// Rich 5-part explanation renderer
const RenderExplanation = ({ q }: { q: Question }) => {
  const exp = q.exp || (q as any).explanation;
  const correctAns = getQAnswer(q);

  if (typeof exp === "object" && exp !== null) {
    const hasParts = exp.A || exp.B || exp.C || exp.D;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {exp.correct && (
          <div
            style={{
              background: `${C.ok}15`,
              border: `1px solid ${C.ok}44`,
              borderRadius: 8,
              padding: "10px 14px",
            }}
          >
            <div style={{ color: C.ok, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>
              ✓ Alasan Jawaban Benar (Opsi {correctAns}):
            </div>
            <div style={{ color: C.text, fontSize: 13, lineHeight: 1.5 }}>
              {exp.correct}
            </div>
          </div>
        )}

        {hasParts && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ color: C.sub, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Analisis Setiap Opsi Jawaban:
            </div>
            {(["A", "B", "C", "D"] as OptionKey[]).map((key) => {
              const isCorrect = key === correctAns;
              const text = exp[key];
              if (!text) return null;
              return (
                <div
                  key={key}
                  style={{
                    background: isCorrect ? `${C.ok}0D` : "#040B16",
                    border: `1px solid ${isCorrect ? `${C.ok}33` : C.border}`,
                    borderRadius: 8,
                    padding: "8px 12px",
                    fontSize: 12.5,
                    lineHeight: 1.45,
                  }}
                >
                  <strong style={{ color: isCorrect ? C.ok : C.sub, marginRight: 6 }}>
                    Opsi {key}:
                  </strong>
                  <span style={{ color: isCorrect ? C.text : C.sub }}>
                    {text}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Fallback for simple string explanation
  return (
    <div style={{ color: C.text, fontSize: 13, lineHeight: 1.6 }}>
      {typeof exp === "string" ? exp : getQExp(q)}
    </div>
  );
};

export default function App() {
  const [selectedJob, setSelectedJob] = useState<JobId>("junior-java");
  const [difficultyFilter, setDifficultyFilter] = useState<LevelFilter>("all");
  const [testLevelFilter, setTestLevelFilter] = useState<LevelFilter>("all");
  const [mode, setMode] = useState<Mode>("menu");
  const [name, setName] = useState<string>("Ari");

  // Quiz navigation state
  const [qi, setQi] = useState<number>(0);

  // Active question pool for current active mode
  const [sessionQs, setSessionQs] = useState<Question[]>(JAVA_QUESTIONS);

  // Study mode state
  const [studyAns, setStudyAns] = useState<Record<number, OptionKey>>({});
  const [studyRevealed, setStudyRevealed] = useState<Record<number, boolean>>({});

  // Test mode state
  const [testAns, setTestAns] = useState<Record<number, OptionKey>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [totalTestTime, setTotalTestTime] = useState<number>(0);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [showTestStartModal, setShowTestStartModal] = useState<boolean>(false);

  // Results state
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("all");

  // Accurate dataset counts
  const javaStudyCounts = useMemo(() => ({
    total: JAVA_QUESTIONS.length,
    beginner: JAVA_QUESTIONS.filter((q) => q.level === "beginner").length,
    intermediate: JAVA_QUESTIONS.filter((q) => q.level === "intermediate").length,
    advanced: JAVA_QUESTIONS.filter((q) => q.level === "advanced").length,
  }), []);

  const javaTestCounts = useMemo(() => ({
    total: JAVA_TEST_QUESTIONS.length,
    beginner: JAVA_TEST_QUESTIONS.filter((q) => q.level === "beginner").length,
    intermediate: JAVA_TEST_QUESTIONS.filter((q) => q.level === "intermediate").length,
    advanced: JAVA_TEST_QUESTIONS.filter((q) => q.level === "advanced").length,
  }), []);

  const gisStudyCounts = useMemo(() => ({
    total: GIS_QUESTIONS.length,
    beginner: GIS_QUESTIONS.filter((q) => q.level === "beginner").length,
    intermediate: GIS_QUESTIONS.filter((q) => q.level === "intermediate").length,
    advanced: GIS_QUESTIONS.filter((q) => q.level === "advanced").length,
  }), []);

  const gisTestCounts = useMemo(() => ({
    total: GIS_TEST_QUESTIONS.length,
    beginner: GIS_TEST_QUESTIONS.filter((q) => q.level === "beginner").length,
    intermediate: GIS_TEST_QUESTIONS.filter((q) => q.level === "intermediate").length,
    advanced: GIS_TEST_QUESTIONS.filter((q) => q.level === "advanced").length,
  }), []);

  const currentStudyCounts = selectedJob === "junior-java" ? javaStudyCounts : gisStudyCounts;
  const currentTestCounts = selectedJob === "junior-java" ? javaTestCounts : gisTestCounts;

  // Test Mode Timer countdown
  useEffect(() => {
    if (mode !== "test") return;
    if (timeRemaining <= 0) {
      handleFinishTest();
      return;
    }
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mode, timeRemaining]);

  const startStudyMode = (filter?: LevelFilter) => {
    const targetFilter = filter !== undefined ? filter : difficultyFilter;
    if (filter !== undefined) setDifficultyFilter(filter);

    const base = selectedJob === "junior-java" ? JAVA_QUESTIONS : GIS_QUESTIONS;
    const questionsToUse =
      targetFilter === "all" ? base : base.filter((q) => q.level === targetFilter);

    setSessionQs(questionsToUse);
    setQi(0);
    setStudyAns({});
    setStudyRevealed({});
    setMode("study");
  };

  const handleStudyFilterChange = (filter: LevelFilter) => {
    setDifficultyFilter(filter);
    const base = selectedJob === "junior-java" ? JAVA_QUESTIONS : GIS_QUESTIONS;
    const questionsToUse =
      filter === "all" ? base : base.filter((q) => q.level === filter);
    setSessionQs(questionsToUse);
    setQi(0);
  };

  const startTestMode = (filter?: LevelFilter) => {
    const targetFilter = filter !== undefined ? filter : testLevelFilter;
    if (filter !== undefined) setTestLevelFilter(targetFilter);

    const base = selectedJob === "junior-java" ? JAVA_TEST_QUESTIONS : GIS_TEST_QUESTIONS;
    const questionsToUse =
      targetFilter === "all" ? base : base.filter((q) => q.level === targetFilter);

    // 1.5 minutes per question (minimum 10 minutes)
    const allocatedSeconds = Math.max(10 * 60, questionsToUse.length * 90);
    setSessionQs(questionsToUse);
    setQi(0);
    setTestAns({});
    setFlagged({});
    setTimeRemaining(allocatedSeconds);
    setTotalTestTime(allocatedSeconds);
    setShowSubmitModal(false);
    setShowTestStartModal(false);
    setMode("test");
  };

  const handleFinishTest = () => {
    setShowSubmitModal(false);
    setMode("results");
  };

  const curQ = sessionQs[qi] || sessionQs[0] || ({} as Question);
  const opts = getQOptions(curQ);
  const correctAns = getQAnswer(curQ);

  // Statistics calculation for results
  const testResults = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    const byLevel: Record<Difficulty, { total: number; correct: number }> = {
      beginner: { total: 0, correct: 0 },
      intermediate: { total: 0, correct: 0 },
      advanced: { total: 0, correct: 0 },
    };

    const byTopic: Record<string, { total: number; correct: number }> = {};

    sessionQs.forEach((q, idx) => {
      const userChoice = testAns[idx];
      const actualAns = getQAnswer(q);
      const lvl = q.level;
      const topic = getQTopic(q);

      byLevel[lvl].total += 1;
      if (!byTopic[topic]) byTopic[topic] = { total: 0, correct: 0 };
      byTopic[topic].total += 1;

      if (userChoice === undefined) {
        unanswered += 1;
      } else if (userChoice === actualAns) {
        correct += 1;
        byLevel[lvl].correct += 1;
        byTopic[topic].correct += 1;
      } else {
        wrong += 1;
      }
    });

    const total = sessionQs.length;
    const scorePct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const timeSpent = totalTestTime - timeRemaining;

    return {
      total,
      correct,
      wrong,
      unanswered,
      scorePct,
      timeSpent,
      byLevel,
      byTopic,
    };
  }, [sessionQs, testAns, totalTestTime, timeRemaining]);

  // Level Badge helper component
  const renderLevelBadge = (level: Difficulty) => {
    const color = level === "beginner" ? C.ok : level === "intermediate" ? C.warn : C.adv;
    const label = level === "beginner" ? "Beginner" : level === "intermediate" ? "Intermediate" : "Advanced";
    return (
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          padding: "3px 8px",
          borderRadius: 6,
          background: `${color}22`,
          color,
          border: `1px solid ${color}44`,
          display: "inline-block",
        }}
      >
        {label}
      </span>
    );
  };

  // Study Mode Progress by level calculation
  const studyProgress = useMemo(() => {
    const base = selectedJob === "junior-java" ? JAVA_QUESTIONS : GIS_QUESTIONS;
    let bAns = 0, bTot = 0;
    let iAns = 0, iTot = 0;
    let aAns = 0, aTot = 0;

    sessionQs.forEach((q, idx) => {
      const isAns = studyAns[idx] !== undefined;
      if (q.level === "beginner") {
        bTot++;
        if (isAns) bAns++;
      } else if (q.level === "intermediate") {
        iTot++;
        if (isAns) iAns++;
      } else if (q.level === "advanced") {
        aTot++;
        if (isAns) aAns++;
      }
    });

    return {
      beginner: { answered: bAns, total: bTot },
      intermediate: { answered: iAns, total: iTot },
      advanced: { answered: aAns, total: aTot },
      totalAnswered: Object.keys(studyAns).length,
      totalQuestions: sessionQs.length,
    };
  }, [studyAns, sessionQs, selectedJob]);

  // ═══════════════════════════════════════════════════════════════════════
  //  1. MENU SCREEN
  // ═══════════════════════════════════════════════════════════════════════
  if (mode === "menu") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: `radial-gradient(ellipse at top, #112544 0%, ${C.bg} 70%)`,
          padding: "40px 20px",
          fontFamily: F,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: C.text,
        }}
      >
        <div style={{ maxWidth: 960, width: "100%" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 44, marginBottom: 8 }}>🚀</div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#FFFFFF",
                margin: "0 0 10px",
                letterSpacing: "-0.02em",
              }}
            >
              Platform Simulasi & Latihan Seleksi Kerja
            </h1>
            <p style={{ color: C.sub, fontSize: 15, margin: 0 }}>
              Persiapkan tes teknis & logika pemrograman dengan standar rekrutmen profesional
            </p>
          </div>

          {/* Job Selection Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: 20,
              marginBottom: 26,
            }}
          >
            {/* Card 1: Java */}
            <div
              onClick={() => setSelectedJob("junior-java")}
              style={{
                background: selectedJob === "junior-java" ? `${C.acc}15` : C.surf,
                border: `2px solid ${selectedJob === "junior-java" ? C.acc : C.border}`,
                padding: 24,
                borderRadius: 18,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow:
                  selectedJob === "junior-java"
                    ? `0 10px 25px -5px ${C.acc}33`
                    : "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ fontSize: 36 }}>☕</div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      background: `${C.acc}22`,
                      color: C.acc,
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      border: `1px solid ${C.acc}44`,
                      display: "inline-block",
                    }}
                  >
                    450 Latihan + 100 Ujian
                  </span>
                  <div style={{ fontSize: 11, color: C.sub, marginTop: 4 }}>
                    Total 550 Soal
                  </div>
                </div>
              </div>
              <h2 style={{ color: "#FFF", fontSize: 18, margin: "0 0 8px", fontWeight: 700 }}>
                Lowongan 1: Junior Java Developer
              </h2>
              <p style={{ color: C.sub, fontSize: 13, lineHeight: 1.6, margin: "0 0 16px" }}>
                Komprehensif: Java Core (OOP, Collections, Exception), Spring Boot, REST API, JPA/Hibernate, SQL, dan Tes Logika.
              </p>
              
              <div style={{ background: C.card, padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.border}`, marginBottom: 10 }}>
                <div style={{ fontSize: 11.5, color: C.sub, marginBottom: 6, fontWeight: 600 }}>
                  📖 Mode Latihan (450 Soal):
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.ok, padding: "2px 8px", borderRadius: 6 }}>
                    🌱 Beg: {javaStudyCounts.beginner}
                  </span>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.warn, padding: "2px 8px", borderRadius: 6 }}>
                    ⚡ Int: {javaStudyCounts.intermediate}
                  </span>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.adv, padding: "2px 8px", borderRadius: 6 }}>
                    🔥 Adv: {javaStudyCounts.advanced}
                  </span>
                </div>
              </div>

              <div style={{ background: C.card, padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 11.5, color: C.pur, marginBottom: 6, fontWeight: 600 }}>
                  ⏱️ Mode Ujian Khusus (100 Soal):
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.ok, padding: "2px 8px", borderRadius: 6 }}>
                    Beg: {javaTestCounts.beginner}
                  </span>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.warn, padding: "2px 8px", borderRadius: 6 }}>
                    Int: {javaTestCounts.intermediate}
                  </span>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.adv, padding: "2px 8px", borderRadius: 6 }}>
                    Adv: {javaTestCounts.advanced}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: GIS */}
            <div
              onClick={() => setSelectedJob("fullstack-gis")}
              style={{
                background: selectedJob === "fullstack-gis" ? `${C.pur}15` : C.surf,
                border: `2px solid ${selectedJob === "fullstack-gis" ? C.pur : C.border}`,
                padding: 24,
                borderRadius: 18,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow:
                  selectedJob === "fullstack-gis"
                    ? `0 10px 25px -5px ${C.pur}33`
                    : "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ fontSize: 36 }}>🛰️</div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      background: `${C.pur}22`,
                      color: C.pur,
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      border: `1px solid ${C.pur}44`,
                      display: "inline-block",
                    }}
                  >
                    450 Latihan + 100 Ujian
                  </span>
                  <div style={{ fontSize: 11, color: C.sub, marginTop: 4 }}>
                    Total 550 Soal
                  </div>
                </div>
              </div>
              <h2 style={{ color: "#FFF", fontSize: 18, margin: "0 0 8px", fontWeight: 700 }}>
                Lowongan 2: Fullstack Engineer (GIS)
              </h2>
              <p style={{ color: C.sub, fontSize: 13, lineHeight: 1.6, margin: "0 0 16px" }}>
                Remote Sensing, Indeks Spektral, UAV/Drone, Web GIS (Leaflet/MapLibre), PostGIS Spatial SQL, Geodesi, GDAL, & DevOps.
              </p>

              <div style={{ background: C.card, padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.border}`, marginBottom: 10 }}>
                <div style={{ fontSize: 11.5, color: C.sub, marginBottom: 6, fontWeight: 600 }}>
                  📖 Mode Latihan (450 Soal):
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.ok, padding: "2px 8px", borderRadius: 6 }}>
                    🌱 Beg: {gisStudyCounts.beginner}
                  </span>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.warn, padding: "2px 8px", borderRadius: 6 }}>
                    ⚡ Int: {gisStudyCounts.intermediate}
                  </span>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.adv, padding: "2px 8px", borderRadius: 6 }}>
                    🔥 Adv: {gisStudyCounts.advanced}
                  </span>
                </div>
              </div>

              <div style={{ background: C.card, padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 11.5, color: C.pur, marginBottom: 6, fontWeight: 600 }}>
                  ⏱️ Mode Ujian Khusus (100 Soal):
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.ok, padding: "2px 8px", borderRadius: 6 }}>
                    Beg: {gisTestCounts.beginner}
                  </span>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.warn, padding: "2px 8px", borderRadius: 6 }}>
                    Int: {gisTestCounts.intermediate}
                  </span>
                  <span style={{ fontSize: 11, background: "#060F1C", color: C.adv, padding: "2px 8px", borderRadius: 6 }}>
                    Adv: {gisTestCounts.advanced}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Level Filter & Options Bar */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              padding: "18px 24px",
              borderRadius: 16,
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
              <div>
                <span style={{ color: C.sub, fontSize: 13, marginRight: 10 }}>Pilih Tingkat Kesulitan Latihan:</span>
                <div style={{ display: "inline-flex", gap: 8, flexWrap: "wrap" }}>
                  {(["all", "beginner", "intermediate", "advanced"] as LevelFilter[]).map((lvl) => {
                    const isSelected = difficultyFilter === lvl;
                    const count = lvl === "all" ? currentStudyCounts.total : currentStudyCounts[lvl];
                    const label =
                      lvl === "all"
                        ? "Semua Level"
                        : lvl === "beginner"
                        ? "Beginner"
                        : lvl === "intermediate"
                        ? "Intermediate"
                        : "Advanced";
                    return (
                      <button
                        key={lvl}
                        onClick={() => setDifficultyFilter(lvl)}
                        style={{
                          background: isSelected ? C.acc : C.card,
                          color: isSelected ? "#060F1C" : C.text,
                          border: `1px solid ${isSelected ? C.acc : C.border}`,
                          padding: "6px 14px",
                          borderRadius: 8,
                          cursor: "pointer",
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: 13,
                          transition: "all 0.15s ease",
                        }}
                      >
                        {label} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: C.sub, fontSize: 13 }}>Nama Peserta:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 8,
                    padding: "6px 12px",
                    color: C.text,
                    fontSize: 13,
                    outline: "none",
                    width: 140,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons: Study vs Test */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <button
              onClick={() => startStudyMode()}
              style={{
                background: C.card,
                border: `1px solid ${C.acc}66`,
                color: C.acc,
                padding: "16px 20px",
                borderRadius: 14,
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = `${C.acc}15`)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.card)}
            >
              <span style={{ fontSize: 20 }}>📖</span>
              <span>Buka Mode Belajar (Kunci & Pembahasan Bebas) →</span>
            </button>

            <button
              onClick={() => setShowTestStartModal(true)}
              style={{
                background: `linear-gradient(135deg, ${C.pur} 0%, #8B5CF6 100%)`,
                color: "#FFFFFF",
                border: "none",
                padding: "16px 20px",
                borderRadius: 14,
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                boxShadow: `0 8px 20px -4px ${C.pur}55`,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <span style={{ fontSize: 20 }}>⏱️</span>
              <span>Buka Mode Ujian / Tes (Simulasi Waktu Nyata) →</span>
            </button>
          </div>

          {/* Test Start Modal */}
          {showTestStartModal && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                padding: 20,
              }}
            >
              <div
                style={{
                  background: C.surf,
                  border: `1px solid ${C.pur}66`,
                  borderRadius: 18,
                  maxWidth: 520,
                  width: "100%",
                  padding: 28,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.6)`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 28 }}>⏱️</span>
                  <div>
                    <h3 style={{ margin: 0, color: "#FFF", fontSize: 18, fontWeight: 700 }}>
                      Pilih Level Ujian (Simulasi Tes)
                    </h3>
                    <p style={{ margin: "2px 0 0", color: C.sub, fontSize: 13 }}>
                      {selectedJob === "junior-java" ? "Lowongan 1: Junior Java Developer" : "Lowongan 2: Fullstack Engineer (GIS)"}
                    </p>
                  </div>
                </div>

                <p style={{ color: C.text, fontSize: 13.5, lineHeight: 1.5, marginBottom: 18 }}>
                  Soal ujian adalah 100 soal khusus yang berbeda dari soal latihan. Jawaban dan pembahasan lengkap akan dikunci selama ujian berlangsung.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {[
                    { key: "all", label: "Semua Level", count: currentTestCounts.total, time: "150 Menit", color: C.pur },
                    { key: "beginner", label: "Beginner", count: currentTestCounts.beginner, time: "45 Menit", color: C.ok },
                    { key: "intermediate", label: "Intermediate", count: currentTestCounts.intermediate, time: "75 Menit", color: C.warn },
                    { key: "advanced", label: "Advanced", count: currentTestCounts.advanced, time: "30 Menit", color: C.adv },
                  ].map((item) => {
                    const isChosen = testLevelFilter === item.key;
                    return (
                      <button
                        key={item.key}
                        onClick={() => setTestLevelFilter(item.key as LevelFilter)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "12px 16px",
                          borderRadius: 10,
                          background: isChosen ? `${C.pur}22` : C.card,
                          border: `2px solid ${isChosen ? C.pur : C.border}`,
                          cursor: "pointer",
                          color: C.text,
                          transition: "all 0.15s ease",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 16 }}>{isChosen ? "◉" : "◯"}</span>
                          <span style={{ fontWeight: 700, color: item.color }}>{item.label}</span>
                        </div>
                        <div style={{ fontSize: 12.5, color: C.sub }}>
                          <strong>{item.count} Soal</strong> • {item.time}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
                  <button
                    onClick={() => setShowTestStartModal(false)}
                    style={{
                      background: C.card,
                      color: C.sub,
                      border: `1px solid ${C.border}`,
                      padding: "10px 18px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => startTestMode(testLevelFilter)}
                    style={{
                      background: `linear-gradient(135deg, ${C.pur} 0%, #8B5CF6 100%)`,
                      color: "#FFF",
                      border: "none",
                      padding: "10px 22px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: 13,
                      boxShadow: `0 4px 12px ${C.pur}44`,
                    }}
                  >
                    Mulai Ujian Sekarang →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  2. STUDY MODE
  // ═══════════════════════════════════════════════════════════════════════
  if (mode === "study") {
    const isRevealed = studyRevealed[qi] || false;
    const userSelected = studyAns[qi];

    return (
      <div style={{ minHeight: "100vh", background: C.bg, padding: "28px 20px", fontFamily: F, color: C.text }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Top Bar Header */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "14px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                onClick={() => setMode("menu")}
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  color: C.sub,
                  borderRadius: 8,
                  padding: "6px 12px",
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                ← Menu Utama
              </button>
              <span style={{ color: C.muted }}>|</span>
              <span
                style={{
                  background: `${selectedJob === "junior-java" ? C.acc : C.pur}22`,
                  color: selectedJob === "junior-java" ? C.acc : C.pur,
                  padding: "4px 10px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  border: `1px solid ${selectedJob === "junior-java" ? C.acc : C.pur}44`,
                }}
              >
                {selectedJob === "junior-java" ? "☕ Junior Java" : "🛰️ Fullstack GIS"}
              </span>
              <span
                style={{
                  background: `${C.ok}22`,
                  color: C.ok,
                  padding: "4px 10px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                📖 Mode Belajar (450 Soal)
              </span>
            </div>

            <div style={{ fontSize: 13, color: C.sub }}>
              Soal <strong>{qi + 1}</strong> / {sessionQs.length}
            </div>
          </div>

          {/* Quick Difficulty Switcher Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 14, overflowX: "auto", paddingBottom: 4 }}>
            {(["all", "beginner", "intermediate", "advanced"] as LevelFilter[]).map((lvl) => {
              const active = difficultyFilter === lvl;
              const count = lvl === "all" ? currentStudyCounts.total : currentStudyCounts[lvl];
              return (
                <button
                  key={lvl}
                  onClick={() => handleStudyFilterChange(lvl)}
                  style={{
                    background: active ? C.acc : C.surf,
                    color: active ? "#060F1C" : C.sub,
                    border: `1px solid ${active ? C.acc : C.border}`,
                    borderRadius: 8,
                    padding: "6px 14px",
                    fontSize: 12.5,
                    fontWeight: active ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {lvl === "all" ? "Semua Level" : lvl.charAt(0).toUpperCase() + lvl.slice(1)} ({count})
                </button>
              );
            })}
          </div>

          {/* Progress per Level Bar */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "12px 18px",
              marginBottom: 18,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, fontSize: 12 }}>
              <span style={{ color: C.sub, fontWeight: 600 }}>Progress Belajar:</span>
              <span style={{ color: C.text, fontWeight: 700 }}>
                {studyProgress.totalAnswered} dari {studyProgress.totalQuestions} Terjawab (
                {studyProgress.totalQuestions > 0
                  ? Math.round((studyProgress.totalAnswered / studyProgress.totalQuestions) * 100)
                  : 0}
                %)
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              <div style={{ background: C.card, padding: "6px 10px", borderRadius: 6, fontSize: 11.5, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: C.ok }}>🌱 Beginner:</span>
                <strong>{studyProgress.beginner.answered}/{studyProgress.beginner.total}</strong>
              </div>
              <div style={{ background: C.card, padding: "6px 10px", borderRadius: 6, fontSize: 11.5, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: C.warn }}>⚡ Interm:</span>
                <strong>{studyProgress.intermediate.answered}/{studyProgress.intermediate.total}</strong>
              </div>
              <div style={{ background: C.card, padding: "6px 10px", borderRadius: 6, fontSize: 11.5, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: C.adv }}>🔥 Adv:</span>
                <strong>{studyProgress.advanced.answered}/{studyProgress.advanced.total}</strong>
              </div>
            </div>
          </div>

          {/* Question Box */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: "26px 28px",
              marginBottom: 20,
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            {/* Meta header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: C.sub, fontSize: 13, fontWeight: 600 }}>
                  Soal {qi + 1} dari {sessionQs.length}
                </span>
                <span style={{ color: C.muted }}>•</span>
                <span style={{ color: C.text, fontSize: 13, background: C.card, padding: "2px 8px", borderRadius: 6 }}>
                  {getQTopic(curQ)}
                </span>
              </div>
              {renderLevelBadge(curQ.level)}
            </div>

            {/* Question Text */}
            <h2 style={{ color: "#FFF", fontSize: 16, lineHeight: 1.6, margin: "0 0 18px", fontWeight: 600 }}>
              {getQText(curQ)}
            </h2>

            {/* Code Block if any */}
            {curQ.code && (
              <pre
                style={{
                  background: "#040C18",
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: 16,
                  color: "#7DD3FC",
                  fontSize: 13,
                  margin: "0 0 20px",
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                  lineHeight: 1.5,
                }}
              >
                {curQ.code}
              </pre>
            )}

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {(["A", "B", "C", "D"] as OptionKey[]).map((key) => {
                const isSelected = userSelected === key;
                const isThisCorrect = key === correctAns;

                let borderCol = C.border;
                let bgCol = C.card;
                let textCol = C.sub;

                if (isRevealed) {
                  if (isThisCorrect) {
                    borderCol = C.ok;
                    bgCol = `${C.ok}18`;
                    textCol = C.text;
                  } else if (isSelected && !isThisCorrect) {
                    borderCol = C.err;
                    bgCol = `${C.err}18`;
                    textCol = C.text;
                  }
                } else if (isSelected) {
                  borderCol = C.acc;
                  bgCol = `${C.acc}22`;
                  textCol = C.text;
                }

                return (
                  <button
                    key={key}
                    onClick={() => {
                      setStudyAns((prev) => ({ ...prev, [qi]: key }));
                      setStudyRevealed((prev) => ({ ...prev, [qi]: true }));
                    }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "13px 18px",
                      borderRadius: 10,
                      background: bgCol,
                      border: `1px solid ${borderCol}`,
                      color: textCol,
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: F,
                      fontSize: 14,
                      lineHeight: 1.5,
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: isRevealed && isThisCorrect ? C.ok : isRevealed && isSelected ? C.err : isSelected ? C.acc : C.muted,
                        minWidth: 22,
                      }}
                    >
                      {key}.
                    </span>
                    <span style={{ flex: 1 }}>{opts[key]}</span>
                    {isRevealed && isThisCorrect && <span style={{ color: C.ok, fontWeight: 700 }}>✓ Benar</span>}
                    {isRevealed && isSelected && !isThisCorrect && <span style={{ color: C.err, fontWeight: 700 }}>✗ Salah</span>}
                  </button>
                );
              })}
            </div>

            {/* Explanation Section */}
            <div style={{ marginBottom: 10 }}>
              <button
                onClick={() => setStudyRevealed((prev) => ({ ...prev, [qi]: !prev[qi] }))}
                style={{
                  background: C.card,
                  color: C.sub,
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: "8px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>{studyRevealed[qi] ? "🙈 Sembunyikan Kunci" : "💡 Buka Kunci & Pembahasan Lengkap"}</span>
              </button>

              {studyRevealed[qi] && (
                <div
                  style={{
                    background: "#040C18",
                    border: `1px solid ${C.ok}44`,
                    borderRadius: 12,
                    padding: "18px 20px",
                    marginTop: 14,
                  }}
                >
                  <div style={{ color: C.ok, fontWeight: 700, fontSize: 14, marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
                    <span>✓ Kunci Jawaban Resmi:</span>
                    <span style={{ background: `${C.ok}22`, padding: "2px 8px", borderRadius: 6 }}>
                      Opsi {correctAns}
                    </span>
                  </div>
                  <RenderExplanation q={curQ} />
                </div>
              )}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <button
              disabled={qi === 0}
              onClick={() => setQi((p) => p - 1)}
              style={{
                padding: "10px 20px",
                background: C.surf,
                color: qi === 0 ? C.muted : C.text,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                cursor: qi === 0 ? "default" : "pointer",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              ← Soal Sebelumnya
            </button>

            <span style={{ color: C.sub, fontSize: 13 }}>
              Terjawab: {Object.keys(studyAns).length} dari {sessionQs.length}
            </span>

            <button
              disabled={qi >= sessionQs.length - 1}
              onClick={() => setQi((p) => p + 1)}
              style={{
                padding: "10px 20px",
                background: qi >= sessionQs.length - 1 ? C.surf : C.acc,
                color: qi >= sessionQs.length - 1 ? C.muted : "#060F1C",
                fontWeight: 700,
                border: "none",
                borderRadius: 10,
                cursor: qi >= sessionQs.length - 1 ? "default" : "pointer",
                fontSize: 14,
              }}
            >
              Soal Selanjutnya →
            </button>
          </div>

          {/* Question Quick Jump Matrix */}
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 14, padding: 18 }}>
            <div style={{ color: C.muted, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
              Daftar Nomor Soal (Klik untuk Loncat)
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(36px, 1fr))", gap: 8 }}>
              {sessionQs.map((_, idx) => {
                const isCurrent = qi === idx;
                const isAns = studyAns[idx] !== undefined;
                const isAnsCorrect = isAns && studyAns[idx] === getQAnswer(sessionQs[idx]);

                let bg = C.card;
                let border = C.border;
                let text = C.muted;

                if (isCurrent) {
                  bg = `${C.acc}33`;
                  border = C.acc;
                  text = C.text;
                } else if (isAns) {
                  bg = isAnsCorrect ? `${C.ok}22` : `${C.err}22`;
                  border = isAnsCorrect ? `${C.ok}44` : `${C.err}44`;
                  text = isAnsCorrect ? C.ok : C.err;
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setQi(idx)}
                    style={{
                      height: 36,
                      borderRadius: 8,
                      border: `1px solid ${border}`,
                      background: bg,
                      color: text,
                      cursor: "pointer",
                      fontSize: 12,
                      fontWeight: isCurrent || isAns ? 700 : 500,
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  3. TEST MODE
  // ═══════════════════════════════════════════════════════════════════════
  if (mode === "test") {
    const isFlagged = flagged[qi] || false;
    const answeredCount = Object.keys(testAns).length;
    const isTimerCritical = timeRemaining < 300; // Under 5 minutes

    return (
      <div style={{ minHeight: "100vh", background: C.bg, padding: "28px 20px", fontFamily: F, color: C.text }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          {/* Top Bar Header */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "14px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                onClick={() => {
                  if (window.confirm("Yakin ingin membatalkan ujian dan kembali ke menu utama?")) {
                    setMode("menu");
                  }
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: C.err,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                ✕ Batalkan Ujian
              </button>
              <span style={{ color: C.muted }}>|</span>
              <span style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>
                {selectedJob === "junior-java" ? "☕ Java Developer" : "🛰️ Fullstack GIS"}
              </span>
              <span style={{ color: C.pur, fontSize: 12, fontWeight: 700, background: `${C.pur}22`, padding: "3px 8px", borderRadius: 6 }}>
                Simulasi Ujian
              </span>
            </div>

            {/* Timer Clock */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: isTimerCritical ? `${C.err}22` : C.card,
                border: `1px solid ${isTimerCritical ? C.err : C.border}`,
                padding: "6px 14px",
                borderRadius: 10,
              }}
            >
              <span style={{ fontSize: 16 }}>⏱️</span>
              <span
                style={{
                  color: isTimerCritical ? C.err : C.acc,
                  fontWeight: 800,
                  fontSize: 16,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {formatTimer(timeRemaining)}
              </span>
            </div>
          </div>

          {/* Question Box */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: "26px 28px",
              marginBottom: 20,
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            {/* Meta Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: C.sub, fontSize: 13, fontWeight: 600 }}>
                  Soal {qi + 1} dari {sessionQs.length}
                </span>
                <span style={{ color: C.muted }}>•</span>
                <span style={{ color: C.text, fontSize: 13, background: C.card, padding: "2px 8px", borderRadius: 6 }}>
                  {getQTopic(curQ)}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button
                  onClick={() => setFlagged((p) => ({ ...p, [qi]: !p[qi] }))}
                  style={{
                    background: isFlagged ? `${C.warn}22` : C.card,
                    color: isFlagged ? C.warn : C.sub,
                    border: `1px solid ${isFlagged ? C.warn : C.border}`,
                    borderRadius: 8,
                    padding: "4px 10px",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  {isFlagged ? "🚩 Ditandai Ragu" : "🏳️ Tandai Ragu"}
                </button>
                {renderLevelBadge(curQ.level)}
              </div>
            </div>

            {/* Question Text */}
            <h2 style={{ color: "#FFF", fontSize: 16, lineHeight: 1.6, margin: "0 0 18px", fontWeight: 600 }}>
              {getQText(curQ)}
            </h2>

            {/* Code snippet */}
            {curQ.code && (
              <pre
                style={{
                  background: "#040C18",
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: 16,
                  color: "#7DD3FC",
                  fontSize: 13,
                  margin: "0 0 20px",
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                  lineHeight: 1.5,
                }}
              >
                {curQ.code}
              </pre>
            )}

            {/* Options (Hidden Answers During Test) */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
              {(["A", "B", "C", "D"] as OptionKey[]).map((key) => {
                const isSelected = testAns[qi] === key;
                return (
                  <button
                    key={key}
                    onClick={() => setTestAns((p) => ({ ...p, [qi]: key }))}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "13px 18px",
                      borderRadius: 10,
                      background: isSelected ? `${C.pur}22` : C.card,
                      border: `1px solid ${isSelected ? C.pur : C.border}`,
                      color: isSelected ? "#FFF" : C.sub,
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: F,
                      fontSize: 14,
                      lineHeight: 1.5,
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: isSelected ? C.pur : C.muted,
                        minWidth: 22,
                      }}
                    >
                      {key}.
                    </span>
                    <span style={{ flex: 1 }}>{opts[key]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Test Bottom Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <button
              disabled={qi === 0}
              onClick={() => setQi((p) => p - 1)}
              style={{
                padding: "10px 18px",
                background: C.surf,
                color: qi === 0 ? C.muted : C.text,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                cursor: qi === 0 ? "default" : "pointer",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              ← Soal Sebelumnya
            </button>

            <span style={{ color: C.sub, fontSize: 13 }}>
              Terjawab: <strong>{answeredCount}</strong> dari {sessionQs.length}
            </span>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                disabled={qi >= sessionQs.length - 1}
                onClick={() => setQi((p) => p + 1)}
                style={{
                  padding: "10px 18px",
                  background: C.surf,
                  color: qi >= sessionQs.length - 1 ? C.muted : C.text,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  cursor: qi >= sessionQs.length - 1 ? "default" : "pointer",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                Soal Selanjutnya →
              </button>

              <button
                onClick={() => setShowSubmitModal(true)}
                style={{
                  padding: "10px 20px",
                  background: C.ok,
                  color: "#060F1C",
                  border: "none",
                  borderRadius: 10,
                  fontWeight: 800,
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                ✓ Selesaikan Ujian
              </button>
            </div>
          </div>

          {/* Question Grid Matrix */}
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 14, padding: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ color: C.muted, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Navigasi Soal
              </span>
              <div style={{ display: "flex", gap: 12, fontSize: 11.5 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4, color: C.sub }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: C.card, border: `1px solid ${C.border}` }} />
                  Belum
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4, color: C.pur }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: C.pur }} />
                  Terjawab
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4, color: C.warn }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: C.warn }} />
                  Ragu-ragu
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(36px, 1fr))", gap: 8 }}>
              {sessionQs.map((_, idx) => {
                const isCurrent = qi === idx;
                const isAns = testAns[idx] !== undefined;
                const isFlag = flagged[idx];

                let bg = C.card;
                let border = C.border;
                let text = C.muted;

                if (isCurrent) {
                  border = C.acc;
                  text = C.text;
                }
                if (isAns) {
                  bg = `${C.pur}28`;
                  border = C.pur;
                  text = "#FFF";
                }
                if (isFlag) {
                  border = C.warn;
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setQi(idx)}
                    style={{
                      height: 36,
                      borderRadius: 8,
                      border: `1px solid ${border}`,
                      background: bg,
                      color: text,
                      cursor: "pointer",
                      fontSize: 12,
                      fontWeight: isCurrent || isAns ? 700 : 500,
                      position: "relative",
                    }}
                  >
                    {idx + 1}
                    {isFlag && (
                      <span
                        style={{
                          position: "absolute",
                          top: -3,
                          right: -3,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: C.warn,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Confirmation Modal */}
          {showSubmitModal && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                padding: 20,
              }}
            >
              <div
                style={{
                  background: C.surf,
                  border: `1px solid ${C.border}`,
                  borderRadius: 18,
                  maxWidth: 460,
                  width: "100%",
                  padding: 26,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 10 }}>📋</div>
                <h3 style={{ margin: "0 0 8px", color: "#FFF", fontSize: 18, fontWeight: 700 }}>
                  Selesaikan Ujian Sekarang?
                </h3>
                <p style={{ color: C.sub, fontSize: 13.5, margin: "0 0 20px" }}>
                  Anda telah menjawab <strong>{answeredCount}</strong> dari{" "}
                  <strong>{sessionQs.length}</strong> soal.
                  {sessionQs.length - answeredCount > 0 && (
                    <span style={{ color: C.err, display: "block", marginTop: 4 }}>
                      (Ada {sessionQs.length - answeredCount} soal yang belum dijawab!)
                    </span>
                  )}
                  {Object.keys(flagged).length > 0 && (
                    <span style={{ color: C.warn, display: "block", marginTop: 2 }}>
                      (Ada {Object.keys(flagged).length} soal yang masih ditandai ragu-ragu)
                    </span>
                  )}
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                  <button
                    onClick={() => setShowSubmitModal(false)}
                    style={{
                      background: C.card,
                      color: C.sub,
                      border: `1px solid ${C.border}`,
                      padding: "10px 18px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Kembali ke Soal
                  </button>
                  <button
                    onClick={handleFinishTest}
                    style={{
                      background: C.ok,
                      color: "#060F1C",
                      border: "none",
                      padding: "10px 22px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    Kumpulkan Jawaban
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  4. RESULTS / REVIEW MODE
  // ═══════════════════════════════════════════════════════════════════════
  const { total, correct, wrong, unanswered, scorePct, timeSpent, byLevel, byTopic } = testResults;
  const isPassed = scorePct >= 70;

  const filteredReviewIndices = sessionQs
    .map((_, idx) => idx)
    .filter((idx) => {
      const isActual = getQAnswer(sessionQs[idx]);
      const userChoice = testAns[idx];
      const isUserCorrect = userChoice === isActual;

      if (reviewFilter === "wrong") return userChoice !== undefined && !isUserCorrect;
      if (reviewFilter === "correct") return isUserCorrect;
      if (reviewFilter === "flagged") return flagged[idx];
      return true;
    });

  return (
    <div style={{ minHeight: "100vh", background: C.bg, padding: "36px 20px", fontFamily: F, color: C.text }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header Title */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>{isPassed ? "🎉" : "📊"}</div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "#FFF", margin: "0 0 8px" }}>
            Hasil Evaluasi Ujian Kerja
          </h1>
          <p style={{ color: C.sub, fontSize: 14, margin: 0 }}>
            Peserta: <strong>{name}</strong> • Lowongan:{" "}
            <strong>{selectedJob === "junior-java" ? "Junior Java Developer" : "Fullstack Engineer Support (Remote Sensing & GIS)"}</strong>
          </p>
        </div>

        {/* Score & Summary Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginBottom: 26,
          }}
        >
          {/* Main Score Box */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${isPassed ? C.ok : scorePct >= 50 ? C.warn : C.err}66`,
              borderRadius: 16,
              padding: 20,
              textAlign: "center",
            }}
          >
            <div style={{ color: C.sub, fontSize: 12, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>
              Skor Akhir
            </div>
            <div
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: isPassed ? C.ok : scorePct >= 50 ? C.warn : C.err,
              }}
            >
              {scorePct}%
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 13,
                fontWeight: 700,
                color: isPassed ? C.ok : scorePct >= 50 ? C.warn : C.err,
              }}
            >
              {isPassed ? "✓ MEMENUHI PASSING GRADE" : scorePct >= 50 ? "⚠ HAMPIR MEMENUHI" : "✗ PERLU BELAJAR LAGI"}
            </div>
          </div>

          {/* Breakdown Box */}
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20 }}>
            <div style={{ color: C.sub, fontSize: 12, textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>
              Statistik Jawaban
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: C.ok }}>✓ Benar:</span>
                <strong>{correct} ({total > 0 ? Math.round((correct / total) * 100) : 0}%)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: C.err }}>✗ Salah:</span>
                <strong>{wrong} ({total > 0 ? Math.round((wrong / total) * 100) : 0}%)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: C.sub }}>◯ Kosong:</span>
                <strong>{unanswered}</strong>
              </div>
            </div>
          </div>

          {/* Time Spent */}
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20 }}>
            <div style={{ color: C.sub, fontSize: 12, textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>
              Waktu Pengerjaan
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: C.text, margin: "6px 0" }}>
              {formatTimer(timeSpent)}
            </div>
            <div style={{ color: C.sub, fontSize: 12 }}>
              Alokasi Total: {formatTimer(totalTestTime)}
            </div>
          </div>
        </div>

        {/* Level Accuracy Cards */}
        <div
          style={{
            background: C.surf,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <div style={{ color: C.sub, fontSize: 12, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>
            Breakdown Akurasi per Tingkat Kesulitan
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            {(["beginner", "intermediate", "advanced"] as Difficulty[]).map((lvl) => {
              const data = byLevel[lvl];
              const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
              const color = lvl === "beginner" ? C.ok : lvl === "intermediate" ? C.warn : C.adv;
              return (
                <div key={lvl} style={{ background: C.card, padding: 14, borderRadius: 10, border: `1px solid ${C.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ textTransform: "capitalize", fontWeight: 600, color }}>{lvl}</span>
                    <span style={{ fontWeight: 700 }}>{pct}%</span>
                  </div>
                  <div style={{ background: C.bg, height: 6, borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ background: color, width: `${pct}%`, height: "100%" }} />
                  </div>
                  <div style={{ color: C.sub, fontSize: 11, marginTop: 6, textAlign: "right" }}>
                    {data.correct} dari {data.total} Soal
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Topic Breakdown Cards */}
        <div
          style={{
            background: C.surf,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: 20,
            marginBottom: 28,
          }}
        >
          <div style={{ color: C.sub, fontSize: 12, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>
            Breakdown Akurasi per Topik Materi
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {Object.entries(byTopic).map(([topicName, stats]) => {
              const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
              const barColor = pct >= 75 ? C.ok : pct >= 50 ? C.warn : C.err;
              return (
                <div key={topicName} style={{ background: C.card, padding: "12px 16px", borderRadius: 10, border: `1px solid ${C.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {topicName}
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 13, color: barColor, marginLeft: 8 }}>
                      {pct}%
                    </span>
                  </div>
                  <div style={{ background: C.bg, height: 6, borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ background: barColor, width: `${pct}%`, height: "100%", transition: "width 0.3s ease" }} />
                  </div>
                  <div style={{ color: C.sub, fontSize: 11, marginTop: 6, textAlign: "right" }}>
                    {stats.correct} / {stats.total} Soal Benar
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
          <button
            onClick={() => startTestMode(testLevelFilter)}
            style={{
              padding: "12px 20px",
              background: C.pur,
              color: "#FFF",
              borderRadius: 10,
              border: "none",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            ↺ Ulangi Ujian Ini
          </button>
          <button
            onClick={() => startStudyMode(difficultyFilter)}
            style={{
              padding: "12px 20px",
              background: C.card,
              color: C.acc,
              border: `1px solid ${C.acc}66`,
              borderRadius: 10,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            📖 Buka di Mode Belajar
          </button>
          <button
            onClick={() => setMode("menu")}
            style={{
              padding: "12px 20px",
              background: C.card,
              color: C.text,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            🏠 Kembali ke Menu Utama
          </button>
        </div>

        {/* Comprehensive Question Review Section */}
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontSize: 18, color: "#FFF", margin: 0 }}>Review Kunci Jawaban Lengkap</h2>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {(["all", "wrong", "correct", "flagged"] as ReviewFilter[]).map((f) => {
                const isSelected = reviewFilter === f;
                const label =
                  f === "all"
                    ? `Semua (${total})`
                    : f === "wrong"
                    ? `Salah (${wrong})`
                    : f === "correct"
                    ? `Benar (${correct})`
                    : `Ragu-ragu (${Object.keys(flagged).length})`;
                return (
                  <button
                    key={f}
                    onClick={() => setReviewFilter(f)}
                    style={{
                      background: isSelected ? C.acc : C.card,
                      color: isSelected ? "#060F1C" : C.sub,
                      border: `1px solid ${isSelected ? C.acc : C.border}`,
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: isSelected ? 700 : 500,
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {filteredReviewIndices.map((idx) => {
              const q = sessionQs[idx];
              const qOpts = getQOptions(q);
              const actual = getQAnswer(q);
              const user = testAns[idx];
              const isUserCorrect = user === actual;

              return (
                <div
                  key={idx}
                  style={{
                    background: C.surf,
                    border: `1px solid ${isUserCorrect ? `${C.ok}44` : user !== undefined ? `${C.err}44` : C.border}`,
                    borderRadius: 14,
                    padding: 20,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          background: isUserCorrect ? `${C.ok}22` : user !== undefined ? `${C.err}22` : C.card,
                          color: isUserCorrect ? C.ok : user !== undefined ? C.err : C.sub,
                          padding: "2px 8px",
                          borderRadius: 6,
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        Soal #{idx + 1}
                      </span>
                      <span style={{ color: C.sub, fontSize: 12 }}>{getQTopic(q)}</span>
                    </div>
                    {renderLevelBadge(q.level)}
                  </div>

                  <p style={{ color: C.text, fontSize: 14.5, lineHeight: 1.5, margin: "0 0 14px", fontWeight: 600 }}>
                    {getQText(q)}
                  </p>

                  {q.code && (
                    <pre
                      style={{
                        background: "#040C18",
                        border: `1px solid ${C.border}`,
                        borderRadius: 8,
                        padding: 12,
                        color: "#7DD3FC",
                        fontSize: 12.5,
                        margin: "0 0 14px",
                        overflowX: "auto",
                        whiteSpace: "pre-wrap",
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      {q.code}
                    </pre>
                  )}

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                    {(["A", "B", "C", "D"] as OptionKey[]).map((key) => {
                      const isKeyActual = key === actual;
                      const isKeyUser = key === user;

                      let bg = C.card;
                      let border = C.border;
                      let text = C.sub;

                      if (isKeyActual) {
                        bg = `${C.ok}18`;
                        border = C.ok;
                        text = C.text;
                      } else if (isKeyUser && !isKeyActual) {
                        bg = `${C.err}18`;
                        border = C.err;
                        text = C.text;
                      }

                      return (
                        <div
                          key={key}
                          style={{
                            padding: "8px 12px",
                            borderRadius: 8,
                            background: bg,
                            border: `1px solid ${border}`,
                            color: text,
                            fontSize: 12.5,
                            lineHeight: 1.4,
                          }}
                        >
                          <strong>{key}.</strong> {qOpts[key]}
                          {isKeyActual && <span style={{ color: C.ok, marginLeft: 6, fontWeight: 700 }}>✓ Kunci</span>}
                          {isKeyUser && !isKeyActual && <span style={{ color: C.err, marginLeft: 6, fontWeight: 700 }}>✗ Pilihan Anda</span>}
                        </div>
                      );
                    })}
                  </div>

                  <div
                    style={{
                      background: "#040C18",
                      border: `1px solid ${C.border}`,
                      borderRadius: 10,
                      padding: 14,
                    }}
                  >
                    <RenderExplanation q={q} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
