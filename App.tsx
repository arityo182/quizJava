import { useState, useEffect, type CSSProperties, type ReactNode } from "react";
import type {
  Question,
  OptionKey,
  AnswerMap,
  FlagMap,
  Screen,
  Difficulty,
  ThemeColors,
} from "./types";
import { LOG_Q } from "./logicalQuestions";
import { TECH_BEGINNER } from "./techBeginner";
import { TECH_INTERMEDIATE } from "./techIntermediate";
import { TECH_ADVANCED } from "./techAdvanced";

// ═══════════════════════════════════════════════════════════════════════
//  COMBINE TECHNICAL QUESTIONS
// ═══════════════════════════════════════════════════════════════════════

const TECH_Q: Question[] = [
  ...TECH_BEGINNER,
  ...TECH_INTERMEDIATE,
  ...TECH_ADVANCED,
];

// ═══════════════════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════════════════

const fmt = (s: number): string =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

const scoreOf = (qs: Question[], ans: AnswerMap): number =>
  qs.reduce((sum, q, i) => sum + (ans[i] === q.ans ? 1 : 0), 0);

const filterByLevel = (qs: Question[], level: Difficulty): Question[] =>
  qs.filter((q) => q.level === level);

// Timer durations per difficulty (in minutes)
const LOGICAL_TIME: Record<Difficulty, number> = {
  beginner: 15,
  intermediate: 20,
  advanced: 25,
};

const TECHNICAL_TIME: Record<Difficulty, number> = {
  beginner: 25,
  intermediate: 35,
  advanced: 45,
};

// ═══════════════════════════════════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════════════════════════════════

const C: ThemeColors = {
  bg: "#060F1C",
  surf: "#0C1A2E",
  card: "#101E33",
  border: "#1A3256",
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

const btn = (s: CSSProperties = {}): CSSProperties => ({
  padding: "12px 22px",
  borderRadius: 10,
  border: "none",
  cursor: "pointer",
  fontSize: 14,
  fontWeight: 600,
  fontFamily: F,
  ...s,
});

const inp: CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  background: C.card,
  border: `1px solid ${C.border}`,
  borderRadius: 9,
  color: C.text,
  fontSize: 14,
  fontFamily: F,
  boxSizing: "border-box",
  outline: "none",
  marginBottom: 14,
};

// ═══════════════════════════════════════════════════════════════════════
//  LEVEL BADGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════

function LevelBadge({ level }: { level: Difficulty }): ReactNode {
  const colorMap: Record<Difficulty, string> = {
    beginner: C.ok,
    intermediate: C.warn,
    advanced: C.adv,
  };
  const color = colorMap[level];
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        padding: "2px 8px",
        borderRadius: 6,
        background: `${color}22`,
        color,
        border: `1px solid ${color}44`,
      }}
    >
      {level}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  REVIEW SECTION
// ═══════════════════════════════════════════════════════════════════════

interface ReviewSectionProps {
  logQs: Question[];
  techQs: Question[];
  logAns: AnswerMap;
  techAns: AnswerMap;
}

function ReviewSection({ logQs, techQs, logAns, techAns }: ReviewSectionProps) {
  const [tab, setTab] = useState<"logical" | "technical">("logical");
  const qs = tab === "logical" ? logQs : techQs;
  const ans = tab === "logical" ? logAns : techAns;

  return (
    <div
      style={{
        background: C.surf,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        overflow: "hidden",
        marginTop: 16,
      }}
    >
      <div style={{ display: "flex", borderBottom: `1px solid ${C.border}` }}>
        {(["logical", "technical"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              padding: "14px 8px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: tab === t ? 700 : 400,
              color: tab === t ? C.text : C.muted,
              borderBottom:
                tab === t
                  ? `2px solid ${t === "logical" ? C.acc : C.pur}`
                  : "2px solid transparent",
            }}
          >
            {t === "logical"
              ? `🧠 Logical Test (${logQs.length} Soal)`
              : `💻 Technical Test (${techQs.length} Soal)`}
          </button>
        ))}
      </div>
      <div style={{ padding: 16, maxHeight: 520, overflowY: "auto" }}>
        {qs.map((q, i) => {
          const ua = ans[i];
          const correct = ua === q.ans;
          const unanswered = ua === undefined;
          return (
            <div
              key={i}
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: 14,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: C.muted, fontSize: 11 }}>
                    Soal {i + 1}
                    {q.cat ? ` · ${q.cat}` : ""}
                  </span>
                  <LevelBadge level={q.level} />
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: 20,
                    background: unanswered
                      ? `${C.warn}22`
                      : correct
                        ? `${C.ok}22`
                        : `${C.err}22`,
                    color: unanswered ? C.warn : correct ? C.ok : C.err,
                  }}
                >
                  {unanswered
                    ? "— Tidak dijawab"
                    : correct
                      ? "✓ Benar"
                      : "✗ Salah"}
                </span>
              </div>
              <p
                style={{
                  color: C.text,
                  fontSize: 13,
                  margin: "0 0 8px",
                  lineHeight: 1.55,
                }}
              >
                {q.q}
              </p>
              {q.code && (
                <pre
                  style={{
                    background: "#040C18",
                    border: `1px solid ${C.border}`,
                    borderRadius: 8,
                    padding: "10px 12px",
                    color: "#7DD3FC",
                    fontSize: 12,
                    margin: "0 0 8px",
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    fontFamily: "'Fira Code', 'Courier New', monospace",
                  }}
                >
                  {q.code}
                </pre>
              )}
              {!correct && ua && (
                <div style={{ color: C.err, fontSize: 12, marginBottom: 6 }}>
                  Jawabanmu:{" "}
                  <strong>
                    {ua}. {q.opts[ua]}
                  </strong>
                </div>
              )}
              <div
                style={{
                  background: `${C.ok}12`,
                  border: `1px solid ${C.ok}35`,
                  borderRadius: 8,
                  padding: 10,
                }}
              >
                <div
                  style={{
                    color: C.ok,
                    fontSize: 12,
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  ✓ Jawaban benar: {q.ans}. {q.opts[q.ans]}
                </div>
                <div style={{ color: C.sub, fontSize: 12, lineHeight: 1.6 }}>
                  {q.exp}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN APP
// ═══════════════════════════════════════════════════════════════════════

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [name, setName] = useState<string>("Ari");
  const [email, setEmail] = useState<string>("");
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [logAns, setLogAns] = useState<AnswerMap>({});
  const [techAns, setTechAns] = useState<AnswerMap>({});
  const [qi, setQi] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [flagged, setFlagged] = useState<FlagMap>({});

  // Filtered questions based on selected difficulty
  const logQs = filterByLevel(LOG_Q, difficulty);
  const techQs = filterByLevel(TECH_Q, difficulty);

  useEffect(() => {
    if (screen !== "logical" && screen !== "technical") return;
    if (timeLeft <= 0) {
      if (screen === "logical") {
        setQi(0);
        setFlagged({});
        setScreen("break");
      } else {
        setScreen("results");
      }
      return;
    }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [screen, timeLeft]);

  const isLogical = screen === "logical";
  const qs = isLogical ? logQs : techQs;
  const curAns = isLogical ? logAns : techAns;
  const setAns = isLogical ? setLogAns : setTechAns;
  const curQ = qs[qi] || ({} as Question);

  const logScore = scoreOf(logQs, logAns);
  const techScore = scoreOf(techQs, techAns);
  const totalPct = Math.round(
    (logQs.length > 0 ? (logScore / logQs.length) * 40 : 0) +
      (techQs.length > 0 ? (techScore / techQs.length) * 60 : 0)
  );

  const answeredCount = Object.keys(curAns).length;
  const progress = qs.length > 0 ? ((qi + 1) / qs.length) * 100 : 0;
  const timeColor =
    timeLeft < 120 ? "#FB7185" : timeLeft < 300 ? "#FBBF24" : "#38BDF8";

  const startLogical = () => {
    setQi(0);
    setFlagged({});
    setTimeLeft(LOGICAL_TIME[difficulty] * 60);
    setScreen("logical");
  };

  const startTechnical = () => {
    setQi(0);
    setFlagged({});
    setTimeLeft(TECHNICAL_TIME[difficulty] * 60);
    setScreen("technical");
  };

  const handleSelectOption = (key: OptionKey) => {
    setAns((prev) => ({ ...prev, [qi]: key }));
  };

  const toggleFlag = () => {
    setFlagged((prev) => ({ ...prev, [qi]: !prev[qi] }));
  };

  const difficultyLabel: Record<Difficulty, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };

  const difficultyEmoji: Record<Difficulty, string> = {
    beginner: "🟢",
    intermediate: "🟡",
    advanced: "🔴",
  };

  const difficultyDesc: Record<Difficulty, string> = {
    beginner:
      "Soal dasar mencakup konsep fundamental Java, sintaks, dan pemahaman teknologi dasar. Cocok untuk pemula yang baru belajar Java development.",
    intermediate:
      "Soal menengah mencakup penerapan konsep OOP, Spring Boot, REST API, dan SQL. Membutuhkan pemahaman lebih mendalam tentang pengembangan aplikasi.",
    advanced:
      "Soal tingkat lanjut mencakup concurrency, design patterns, microservices, arsitektur, dan optimasi. Menguji pemahaman mendalam tentang ekosistem Java.",
  };

  const difficultyColor: Record<Difficulty, string> = {
    beginner: C.ok,
    intermediate: C.warn,
    advanced: C.adv,
  };

  // ─── LOGIN ─────────────────────────────────────────────────────────────
  if (screen === "login") {
    const ok = name.trim() && email.trim();
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          fontFamily: F,
        }}
      >
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div
              style={{
                width: 60,
                height: 60,
                background: `linear-gradient(135deg, ${C.acc}, ${C.pur})`,
                borderRadius: 16,
                margin: "0 auto 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              ☕
            </div>
            <h1
              style={{
                color: C.text,
                fontSize: 22,
                fontWeight: 700,
                margin: "0 0 6px",
              }}
            >
              Java Developer Selection Test
            </h1>
            <p style={{ color: C.sub, fontSize: 13, margin: 0 }}>
              Simulasi Ujian — Beginner · Intermediate · Advanced
            </p>
          </div>
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: 28,
            }}
          >
            <p
              style={{
                color: C.sub,
                fontSize: 13,
                margin: "0 0 20px",
                lineHeight: 1.65,
              }}
            >
              Masukkan data profil untuk memulai kuis. Soal dikelompokkan dalam
              tiga level kesulitan:{" "}
              <strong style={{ color: C.ok }}>Beginner</strong>,{" "}
              <strong style={{ color: C.warn }}>Intermediate</strong>, dan{" "}
              <strong style={{ color: C.adv }}>Advanced</strong>.
            </p>
            <label
              style={{
                display: "block",
                color: C.sub,
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Nama Lengkap
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              style={inp}
            />
            <label
              style={{
                display: "block",
                color: C.sub,
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              type="email"
              style={{ ...inp, marginBottom: 20 }}
            />
            <button
              onClick={() => ok && setScreen("selectLevel")}
              style={btn({
                width: "100%",
                padding: "13px",
                fontSize: 15,
                background: ok
                  ? `linear-gradient(135deg, ${C.acc}, ${C.pur})`
                  : C.card,
                color: ok ? "#fff" : C.muted,
                cursor: ok ? "pointer" : "default",
              })}
            >
              Masuk & Pilih Level →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── SELECT DIFFICULTY LEVEL ───────────────────────────────────────────
  if (screen === "selectLevel") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          fontFamily: F,
        }}
      >
        <div style={{ width: "100%", maxWidth: 700 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2
              style={{
                color: C.text,
                fontSize: 22,
                fontWeight: 700,
                margin: "0 0 6px",
              }}
            >
              Pilih Tingkat Kesulitan
            </h2>
            <p style={{ color: C.sub, fontSize: 13, margin: 0 }}>
              Halo, {name}! Silakan pilih level soal yang ingin dikerjakan.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              marginBottom: 28,
            }}
          >
            {(["beginner", "intermediate", "advanced"] as Difficulty[]).map(
              (lvl) => {
                const isSelected = difficulty === lvl;
                const color = difficultyColor[lvl];
                const logCount = filterByLevel(LOG_Q, lvl).length;
                const techCount = filterByLevel(TECH_Q, lvl).length;
                return (
                  <button
                    key={lvl}
                    onClick={() => setDifficulty(lvl)}
                    style={{
                      background: isSelected ? `${color}1A` : C.surf,
                      border: `2px solid ${isSelected ? color : C.border}`,
                      borderRadius: 16,
                      padding: 24,
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: F,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 32,
                        marginBottom: 10,
                      }}
                    >
                      {difficultyEmoji[lvl]}
                    </div>
                    <div
                      style={{
                        color: isSelected ? color : C.text,
                        fontWeight: 700,
                        fontSize: 18,
                        marginBottom: 6,
                      }}
                    >
                      {difficultyLabel[lvl]}
                    </div>
                    <p
                      style={{
                        color: C.sub,
                        fontSize: 12,
                        lineHeight: 1.6,
                        margin: "0 0 14px",
                      }}
                    >
                      {difficultyDesc[lvl]}
                    </p>
                    <div
                      style={{
                        color: C.muted,
                        fontSize: 11,
                        lineHeight: 1.8,
                      }}
                    >
                      🧠 {logCount} Soal Logical ({LOGICAL_TIME[lvl]} menit)
                      <br />
                      💻 {techCount} Soal Technical ({TECHNICAL_TIME[lvl]} menit)
                      <br />
                      📝 Total: {logCount + techCount} Soal
                    </div>
                    {isSelected && (
                      <div
                        style={{
                          marginTop: 12,
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          color,
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        ✓ Dipilih
                      </div>
                    )}
                  </button>
                );
              }
            )}
          </div>

          <button
            onClick={() => setScreen("brief")}
            style={btn({
              width: "100%",
              background: `linear-gradient(135deg, ${difficultyColor[difficulty]}, ${C.pur})`,
              color: "#fff",
              fontSize: 15,
              padding: "14px",
            })}
          >
            Lanjut dengan Level {difficultyLabel[difficulty]} →
          </button>
        </div>
      </div>
    );
  }

  // ─── BRIEF ─────────────────────────────────────────────────────────────
  if (screen === "brief") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          fontFamily: F,
        }}
      >
        <div style={{ width: "100%", maxWidth: 660 }}>
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: 36,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 4,
              }}
            >
              <h2
                style={{ color: C.text, margin: 0, fontSize: 20 }}
              >
                Halo, {name}! 👋
              </h2>
              <LevelBadge level={difficulty} />
            </div>
            <p
              style={{
                color: C.sub,
                margin: "0 0 28px",
                fontSize: 13,
              }}
            >
              Baca rincian tes sebelum memulai pengerjaan. Level:{" "}
              <strong style={{ color: difficultyColor[difficulty] }}>
                {difficultyLabel[difficulty]}
              </strong>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>🧠</div>
                <div
                  style={{
                    color: C.acc,
                    fontWeight: 700,
                    fontSize: 15,
                    marginBottom: 4,
                  }}
                >
                  Logical Test
                </div>
                <div
                  style={{ color: C.sub, fontSize: 12, lineHeight: 1.6 }}
                >
                  • {logQs.length} Pertanyaan
                  <br />
                  • Batas Waktu: {LOGICAL_TIME[difficulty]} Menit
                  <br />• Bobot Nilai: 40%
                </div>
              </div>
              <div
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>💻</div>
                <div
                  style={{
                    color: C.pur,
                    fontWeight: 700,
                    fontSize: 15,
                    marginBottom: 4,
                  }}
                >
                  Technical Test
                </div>
                <div
                  style={{ color: C.sub, fontSize: 12, lineHeight: 1.6 }}
                >
                  • {techQs.length} Pertanyaan (Java, Spring, SQL)
                  <br />
                  • Batas Waktu: {TECHNICAL_TIME[difficulty]} Menit
                  <br />• Bobot Nilai: 60%
                </div>
              </div>
            </div>
            <div
              style={{
                background: `${difficultyColor[difficulty]}11`,
                border: `1px solid ${difficultyColor[difficulty]}33`,
                borderRadius: 10,
                padding: "12px 16px",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  color: difficultyColor[difficulty],
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                📋 Petunjuk Pengerjaan
              </div>
              <ul
                style={{
                  color: C.sub,
                  fontSize: 12,
                  lineHeight: 1.7,
                  margin: 0,
                  paddingLeft: 16,
                }}
              >
                <li>Setiap soal memiliki 4 pilihan jawaban (A, B, C, D)</li>
                <li>Gunakan fitur "Tandai Ragu" untuk menandai soal yang ingin dikerjakan ulang</li>
                <li>Anda bisa berpindah antar soal menggunakan navigasi nomor</li>
                <li>Tes otomatis selesai saat waktu habis</li>
                <li>Passing grade estimasi: 70%</li>
              </ul>
            </div>
            <button
              onClick={startLogical}
              style={btn({
                width: "100%",
                background: `linear-gradient(135deg, ${C.acc}, ${C.pur})`,
                color: "#fff",
              })}
            >
              Mulai Bagian 1: Logical Test →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── BREAK / TRANSISI SESI ──────────────────────────────────────────────
  if (screen === "break") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          fontFamily: F,
        }}
      >
        <div style={{ width: "100%", maxWidth: 520, textAlign: "center" }}>
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: 36,
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 12 }}>🎉</div>
            <h2
              style={{
                color: C.text,
                margin: "0 0 8px",
                fontSize: 20,
              }}
            >
              Sesi 1 (Logical Test) Selesai
            </h2>
            <p
              style={{
                color: C.sub,
                fontSize: 13,
                margin: "0 0 16px",
                lineHeight: 1.6,
              }}
            >
              Jawaban sesi pertama telah tersimpan. Kamu dapat mengambil jeda
              sebelum memulai sesi technical test berikutnya.
            </p>
            <div
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: 14,
                marginBottom: 20,
              }}
            >
              <div style={{ color: C.acc, fontSize: 13, fontWeight: 600 }}>
                Skor Logical: {logScore}/{logQs.length} (
                {logQs.length > 0
                  ? Math.round((logScore / logQs.length) * 100)
                  : 0}
                %)
              </div>
            </div>
            <button
              onClick={startTechnical}
              style={btn({
                width: "100%",
                background: `linear-gradient(135deg, ${C.pur}, ${C.acc})`,
                color: "#fff",
              })}
            >
              Lanjut ke Bagian 2: Technical Test →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── QUIZ SCREEN (LOGICAL & TECHNICAL) ──────────────────────────────────
  if (screen === "logical" || screen === "technical") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          padding: "24px 16px",
          fontFamily: F,
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Header Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "12px 20px",
              marginBottom: 16,
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <span style={{ fontSize: 18 }}>
                {isLogical ? "🧠" : "💻"}
              </span>
              <span
                style={{ color: C.text, fontWeight: 700, fontSize: 14 }}
              >
                {isLogical ? "Logical Test" : "Technical Test"}
              </span>
              <LevelBadge level={difficulty} />
              <span style={{ color: C.muted, fontSize: 12 }}>
                ({answeredCount}/{qs.length} Terjawab)
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#040C18",
                border: `1px solid ${C.border}`,
                padding: "6px 14px",
                borderRadius: 8,
              }}
            >
              <span style={{ color: C.muted, fontSize: 12 }}>
                Sisa Waktu:
              </span>
              <span
                style={{
                  color: timeColor,
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                {fmt(timeLeft)}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div
            style={{
              width: "100%",
              height: 4,
              background: C.card,
              borderRadius: 2,
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: isLogical ? C.acc : C.pur,
                transition: "width 0.3s ease",
              }}
            />
          </div>

          {/* Main Question Card */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: 24,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    color: C.muted,
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  Soal {qi + 1} dari {qs.length}
                </span>
                {curQ.cat && (
                  <span
                    style={{
                      color: C.sub,
                      fontSize: 12,
                      background: C.card,
                      padding: "2px 8px",
                      borderRadius: 4,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    {curQ.cat}
                  </span>
                )}
                <LevelBadge level={curQ.level ?? difficulty} />
              </div>
              <button
                onClick={toggleFlag}
                style={{
                  background: "none",
                  border: "none",
                  color: flagged[qi] ? C.warn : C.muted,
                  cursor: "pointer",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: F,
                }}
              >
                {flagged[qi] ? "🚩 Ditandai Ragu" : "🏳️ Tandai Ragu"}
              </button>
            </div>

            <p
              style={{
                color: C.text,
                fontSize: 15,
                lineHeight: 1.6,
                margin: "0 0 16px",
              }}
            >
              {curQ.q}
            </p>

            {curQ.code && (
              <pre
                style={{
                  background: "#040C18",
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: "12px 14px",
                  color: "#7DD3FC",
                  fontSize: 13,
                  margin: "0 0 18px",
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                }}
              >
                {curQ.code}
              </pre>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {Object.entries(curQ.opts || {}).map(([key, text]) => {
                const optKey = key as OptionKey;
                const isSelected = curAns[qi] === optKey;
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectOption(optKey)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "12px 16px",
                      borderRadius: 10,
                      background: isSelected
                        ? `${isLogical ? C.acc : C.pur}1A`
                        : C.card,
                      border: `1px solid ${isSelected ? (isLogical ? C.acc : C.pur) : C.border}`,
                      color: isSelected ? C.text : C.sub,
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
                        color: isSelected
                          ? isLogical
                            ? C.acc
                            : C.pur
                          : C.muted,
                        minWidth: 20,
                      }}
                    >
                      {key}.
                    </span>
                    <span>{text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigasi Soal Bawah */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <button
              disabled={qi === 0}
              onClick={() => setQi((p) => p - 1)}
              style={btn({
                background: C.surf,
                border: `1px solid ${C.border}`,
                color: qi === 0 ? C.muted : C.text,
                cursor: qi === 0 ? "default" : "pointer",
              })}
            >
              ← Sebelumnya
            </button>
            {qi < qs.length - 1 ? (
              <button
                onClick={() => setQi((p) => p + 1)}
                style={btn({
                  background: isLogical ? C.acc : C.pur,
                  color: "#fff",
                })}
              >
                Selanjutnya →
              </button>
            ) : (
              <button
                onClick={() => {
                  if (isLogical) {
                    setQi(0);
                    setFlagged({});
                    setScreen("break");
                  } else {
                    setScreen("results");
                  }
                }}
                style={btn({ background: C.ok, color: "#060F1C" })}
              >
                Selesaikan Tes ✓
              </button>
            )}
          </div>

          {/* Nomor Soal Quick-Jump */}
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div
              style={{
                color: C.muted,
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 12,
              }}
            >
              Navigasi Nomor Soal
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(36px, 1fr))",
                gap: 6,
              }}
            >
              {qs.map((_q, idx) => {
                const isCurrent = qi === idx;
                const isAnswered = curAns[idx] !== undefined;
                const isFlag = flagged[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => setQi(idx)}
                    style={{
                      height: 36,
                      borderRadius: 8,
                      border: `1px solid ${isCurrent ? (isLogical ? C.acc : C.pur) : isFlag ? C.warn : C.border}`,
                      background: isCurrent
                        ? `${isLogical ? C.acc : C.pur}33`
                        : isAnswered
                          ? `${C.ok}22`
                          : C.card,
                      color: isCurrent
                        ? C.text
                        : isFlag
                          ? C.warn
                          : isAnswered
                            ? C.ok
                            : C.muted,
                      cursor: "pointer",
                      fontFamily: F,
                      fontSize: 12,
                      fontWeight: isCurrent ? 700 : 400,
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

  // ─── RESULTS ───────────────────────────────────────────────────────────
  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        padding: "40px 16px",
        fontFamily: F,
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>📊</div>
          <h1
            style={{
              color: C.text,
              fontSize: 24,
              fontWeight: 700,
              margin: "0 0 6px",
            }}
          >
            Ringkasan Hasil Simulasi
          </h1>
          <p style={{ color: C.sub, fontSize: 13, margin: "0 0 4px" }}>
            Peserta: {name} ({email})
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 6,
            }}
          >
            <span style={{ color: C.sub, fontSize: 12 }}>Level:</span>
            <LevelBadge level={difficulty} />
          </div>
        </div>

        {/* Skor Box */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: 20,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: C.muted,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              Skor Akhir (Weighted)
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                color:
                  totalPct >= 70
                    ? C.ok
                    : totalPct >= 50
                      ? C.warn
                      : C.err,
              }}
            >
              {totalPct}%
            </div>
            <div
              style={{ color: C.sub, fontSize: 12, marginTop: 4 }}
            >
              Passing Grade Estimasi: 70%
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 13,
                fontWeight: 700,
                color:
                  totalPct >= 70
                    ? C.ok
                    : totalPct >= 50
                      ? C.warn
                      : C.err,
              }}
            >
              {totalPct >= 70
                ? "✓ LULUS"
                : totalPct >= 50
                  ? "⚠ HAMPIR LULUS"
                  : "✗ BELUM LULUS"}
            </div>
          </div>

          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: 20,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: C.acc,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              Logical Test (Bobot 40%)
            </div>
            <div
              style={{ fontSize: 32, fontWeight: 700, color: C.text }}
            >
              {logScore}{" "}
              <span style={{ fontSize: 16, color: C.muted }}>
                / {logQs.length}
              </span>
            </div>
            <div
              style={{ color: C.sub, fontSize: 12, marginTop: 4 }}
            >
              Akurasi:{" "}
              {logQs.length > 0
                ? Math.round((logScore / logQs.length) * 100)
                : 0}
              %
            </div>
          </div>

          <div
            style={{
              background: C.surf,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: 20,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: C.pur,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              Technical Test (Bobot 60%)
            </div>
            <div
              style={{ fontSize: 32, fontWeight: 700, color: C.text }}
            >
              {techScore}{" "}
              <span style={{ fontSize: 16, color: C.muted }}>
                / {techQs.length}
              </span>
            </div>
            <div
              style={{ color: C.sub, fontSize: 12, marginTop: 4 }}
            >
              Akurasi:{" "}
              {techQs.length > 0
                ? Math.round((techScore / techQs.length) * 100)
                : 0}
              %
            </div>
          </div>
        </div>

        {/* Section Review Kunci Jawaban */}
        <ReviewSection
          logQs={logQs}
          techQs={techQs}
          logAns={logAns}
          techAns={techAns}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => {
              setLogAns({});
              setTechAns({});
              setQi(0);
              setFlagged({});
              setScreen("selectLevel");
            }}
            style={btn({
              background: C.card,
              border: `1px solid ${C.border}`,
              color: C.text,
            })}
          >
            ↺ Ganti Level & Ulangi Tes
          </button>
          <button
            onClick={() => {
              setLogAns({});
              setTechAns({});
              setQi(0);
              setFlagged({});
              setScreen("login");
            }}
            style={btn({
              background: C.card,
              border: `1px solid ${C.border}`,
              color: C.text,
            })}
          >
            ↺ Reset Semua
          </button>
        </div>
      </div>
    </div>
  );
}
