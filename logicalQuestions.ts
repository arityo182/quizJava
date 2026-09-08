import { Question } from './types';

export const LOG_Q: Question[] = [
  {
    "id": "LOG-001",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret angka: 7, 14, 21, ___, 35, 42?",
    "options": {
      "A": "24",
      "B": "26",
      "C": "27",
      "D": "28"
    },
    "answer": "D",
    "explanation": "Pola deret adalah penambahan 7 (+7). 21 + 7 = 28.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-002",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Lanjutkan deret: 1, 4, 9, 16, 25, ___?",
    "options": {
      "A": "30",
      "B": "32",
      "C": "36",
      "D": "49"
    },
    "answer": "C",
    "explanation": "Deret ini adalah kuadrat dari bilangan asli (1^2, 2^2, 3^2, 4^2, 5^2, 6^2 = 36).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-003",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret angka berulang: 4, 7, 5, 8, 6, 9, ___?",
    "options": {
      "A": "7",
      "B": "8",
      "C": "10",
      "D": "11"
    },
    "answer": "A",
    "explanation": "Pola deret adalah +3, -2 secara berulang. 9 - 2 = 7.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-004",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret angka: 100, 95, 85, 70, 50, ___?",
    "options": {
      "A": "20",
      "B": "25",
      "C": "30",
      "D": "35"
    },
    "answer": "B",
    "explanation": "Pola pengurangan meningkat: -5, -10, -15, -20, sehingga berikutnya -25 (50 - 25 = 25).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-005",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Lanjutkan deret bilangan prima: 2, 3, 5, 7, 11, 13, ___?",
    "options": {
      "A": "14",
      "B": "15",
      "C": "17",
      "D": "19"
    },
    "answer": "C",
    "explanation": "Angka selanjutnya dalam deret bilangan prima setelah 13 adalah 17.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-006",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Analogi: SOURCE CODE : COMPILER = BYTECODE : ___?",
    "options": {
      "A": "ASSEMBLER",
      "B": "OS",
      "C": "JVM",
      "D": "IDE"
    },
    "answer": "C",
    "explanation": "Source code dikonversi oleh compiler, sedangkan bytecode dieksekusi oleh JVM (Java Virtual Machine).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-007",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Silogisme: Semua berkas berekstensi .java harus di-compile menjadi .class sebelum dijalankan. File Main.java adalah berkas berekstensi .java. Kesimpulannya?",
    "options": {
      "A": "File Main.java bisa langsung dijalankan.",
      "B": "File Main.java harus di-compile menjadi .class.",
      "C": "File Main.java bukan program.",
      "D": "Tidak semua file .java perlu di-compile."
    },
    "answer": "B",
    "explanation": "Sesuai premis, karena Main.java berekstensi .java, maka harus di-compile.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-008",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Jika server mati, maka aplikasi tidak dapat diakses. Saat ini aplikasi dapat diakses. Kesimpulannya?",
    "options": {
      "A": "Server mati.",
      "B": "Server tidak mati.",
      "C": "Aplikasi error.",
      "D": "Tidak dapat ditarik kesimpulan."
    },
    "answer": "B",
    "explanation": "Menggunakan Modus Tollens (p -> q, ~q, maka ~p). Karena aplikasi dapat diakses, maka server tidak mati.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-009",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret angka: 2, 4, 8, 16, 32, ___?",
    "options": {
      "A": "60",
      "B": "62",
      "C": "64",
      "D": "66"
    },
    "answer": "C",
    "explanation": "Dikalikan 2 pada setiap langkahnya (32 * 2 = 64).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-010",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Analogi: KODE : PROGRAMMER = DESAIN : ___?",
    "options": {
      "A": "SISTEM",
      "B": "UI/UX DESIGNER",
      "C": "DATABASE",
      "D": "MANAJER"
    },
    "answer": "B",
    "explanation": "Seorang programmer membuat kode, seorang UI/UX designer membuat desain.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-011",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Semua programmer menyukai kopi. Budi adalah programmer. Kesimpulan:",
    "options": {
      "A": "Budi menyukai teh.",
      "B": "Budi mungkin menyukai kopi.",
      "C": "Budi menyukai kopi.",
      "D": "Budi tidak menyukai kopi."
    },
    "answer": "C",
    "explanation": "Silogisme sederhana: Semua A adalah B. C adalah A. Maka C adalah B.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-012",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret huruf: A, C, E, G, I, ___?",
    "options": {
      "A": "J",
      "B": "K",
      "C": "L",
      "D": "M"
    },
    "answer": "B",
    "explanation": "Melompati satu huruf (B, D, F, H dilompati). Setelah I adalah K.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-013",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Sebuah algoritma berjalan 2 kali lebih cepat dari sebelumnya. Jika sebelumnya butuh 10 detik, berapa lama sekarang?",
    "options": {
      "A": "2 detik",
      "B": "5 detik",
      "C": "20 detik",
      "D": "0.5 detik"
    },
    "answer": "B",
    "explanation": "10 dibagi 2 sama dengan 5 detik.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-014",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Analogi: VARIABLE : DATA = METHOD : ___?",
    "options": {
      "A": "FUNGSI",
      "B": "CLASS",
      "C": "AKSI/LOGIKA",
      "D": "INTEGER"
    },
    "answer": "C",
    "explanation": "Variable menyimpan data, sedangkan method menyimpan aksi atau logika program.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-015",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Jika x = 5 dan y = x + 3, berapakah nilai y - x?",
    "options": {
      "A": "3",
      "B": "5",
      "C": "8",
      "D": "2"
    },
    "answer": "A",
    "explanation": "y = 8. Maka 8 - 5 = 3 (selisih selalu 3 berdasarkan y = x + 3).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-016",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret angka: 5, 10, 20, 40, ___?",
    "options": {
      "A": "60",
      "B": "70",
      "C": "80",
      "D": "90"
    },
    "answer": "C",
    "explanation": "Rasio deret geometri adalah 2. 40 * 2 = 80.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-017",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Semua error menyebabkan program berhenti. NullPointerException adalah error. Kesimpulan:",
    "options": {
      "A": "NullPointerException bisa diabaikan.",
      "B": "NullPointerException menyebabkan program berhenti.",
      "C": "Program berhenti bukan karena error.",
      "D": "Error tidak selalu menghentikan program."
    },
    "answer": "B",
    "explanation": "Karena NullPointerException termasuk error, maka ia menyebabkan program berhenti.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-018",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Pilih kata yang tidak termasuk dalam kelompoknya:",
    "options": {
      "A": "Java",
      "B": "Python",
      "C": "HTML",
      "D": "C++"
    },
    "answer": "C",
    "explanation": "HTML adalah bahasa markup, sedangkan sisanya adalah bahasa pemrograman umum.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-019",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret: 1, 2, 4, 7, 11, ___?",
    "options": {
      "A": "14",
      "B": "15",
      "C": "16",
      "D": "17"
    },
    "answer": "C",
    "explanation": "Penambahan berurutan: +1, +2, +3, +4, selanjutnya +5 (11 + 5 = 16).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-020",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Jika hujan, maka jalanan basah. Jalanan tidak basah. Kesimpulan:",
    "options": {
      "A": "Hujan deras.",
      "B": "Tidak hujan.",
      "C": "Jalanan kering karena panas.",
      "D": "Sedang mendung."
    },
    "answer": "B",
    "explanation": "Modus Tollens: p -> q. ~q -> ~p. Maka tidak hujan.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-021",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Analogi: ARRAY : INDEKS = HASHMAP : ___?",
    "options": {
      "A": "POINTER",
      "B": "VALUE",
      "C": "KEY",
      "D": "LIST"
    },
    "answer": "C",
    "explanation": "Elemen array diakses menggunakan indeks, sedangkan HashMap diakses menggunakan key.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-022",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Manakah dari berikut ini yang bernilai TRUE?",
    "options": {
      "A": "5 > 7",
      "B": "4 == '4'",
      "C": "3 <= 3",
      "D": "2 != 2"
    },
    "answer": "C",
    "explanation": "3 kurang dari atau sama dengan 3 adalah pernyataan yang benar.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-023",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Sebuah looping berjalan dari i=0 hingga i<5. Berapa kali looping tereksekusi?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "Tidak berhingga"
    },
    "answer": "B",
    "explanation": "Iterasi terjadi untuk i = 0, 1, 2, 3, 4 (Total 5 kali).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-024",
    "level": "beginner",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret angka menurun: 50, 45, 40, 35, ___?",
    "options": {
      "A": "25",
      "B": "30",
      "C": "20",
      "D": "15"
    },
    "answer": "B",
    "explanation": "Pola dikurangi 5 setiap langkah. 35 - 5 = 30.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-025",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret angka: 2, 6, 12, 20, 30, ___?",
    "options": {
      "A": "36",
      "B": "40",
      "C": "42",
      "D": "48"
    },
    "answer": "C",
    "explanation": "Pola: +4, +6, +8, +10. Selanjutnya +12, jadi 30 + 12 = 42.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-026",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret angka: 3, 5, 9, 17, 33, ___?",
    "options": {
      "A": "65",
      "B": "66",
      "C": "67",
      "D": "68"
    },
    "answer": "A",
    "explanation": "Pola: *2 -1. 33 * 2 - 1 = 65. Atau selisih pangkat dua: 2, 4, 8, 16, 32.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-027",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Anton lebih tua dari Budi. Cici lebih muda dari Budi. Siapa yang paling muda?",
    "options": {
      "A": "Anton",
      "B": "Budi",
      "C": "Cici",
      "D": "Tidak bisa ditentukan"
    },
    "answer": "C",
    "explanation": "Urutan umur dari tua ke muda: Anton > Budi > Cici.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-028",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Analogi: RAM : VOLATILE = HARDDISK : ___?",
    "options": {
      "A": "PERMANEN",
      "B": "NON-VOLATILE",
      "C": "KAPASITAS",
      "D": "LAMBAT"
    },
    "answer": "B",
    "explanation": "RAM bersifat volatile (sementara), sedangkan Harddisk bersifat non-volatile (data tidak hilang saat listrik mati).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-029",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret: 1, 1, 2, 3, 5, 8, 13, ___?",
    "options": {
      "A": "18",
      "B": "21",
      "C": "24",
      "D": "25"
    },
    "answer": "B",
    "explanation": "Ini adalah deret Fibonacci, angka berikutnya adalah penjumlahan dua angka sebelumnya (8 + 13 = 21).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-030",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Tiga developer (A, B, C) menyelesaikan bug. A lebih cepat dari B, tapi C lebih cepat dari A. Siapa yang paling lambat?",
    "options": {
      "A": "A",
      "B": "B",
      "C": "C",
      "D": "A dan B"
    },
    "answer": "B",
    "explanation": "Kecepatan: C > A > B. Maka B adalah yang paling lambat.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-031",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Jika A = 5, B = 2. Berapakah hasil dari A % B + (A * B)?",
    "options": {
      "A": "10",
      "B": "11",
      "C": "12",
      "D": "15"
    },
    "answer": "B",
    "explanation": "A % B = 5 % 2 = 1. A * B = 10. 1 + 10 = 11.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-032",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Sebuah fungsi rekursif memanggil dirinya sendiri. Agar tidak terjadi Infinite Loop, fungsi tersebut membutuhkan:",
    "options": {
      "A": "Variabel Global",
      "B": "Base Case (Kondisi Berhenti)",
      "C": "Parameter Kosong",
      "D": "Return Null"
    },
    "answer": "B",
    "explanation": "Fungsi rekursif wajib memiliki base case untuk menghentikan pemanggilan dirinya.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-033",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret huruf: Z, X, V, T, R, ___?",
    "options": {
      "A": "P",
      "B": "O",
      "C": "Q",
      "D": "S"
    },
    "answer": "A",
    "explanation": "Mundur melewati satu huruf dalam alfabet. Sebelum R adalah P (melewati Q).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-034",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Dalam sebuah antrian, posisi x ada di urutan ke-4 dari depan dan ke-7 dari belakang. Berapa total orang dalam antrian?",
    "options": {
      "A": "10",
      "B": "11",
      "C": "9",
      "D": "12"
    },
    "answer": "A",
    "explanation": "(Posisi depan + Posisi belakang) - 1 = (4 + 7) - 1 = 10.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-035",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Jika x > y dan y > z, maka pernyataan mana yang pasti salah?",
    "options": {
      "A": "x > z",
      "B": "z < x",
      "C": "y = z",
      "D": "z < y"
    },
    "answer": "C",
    "explanation": "Jika y > z, maka y tidak mungkin sama dengan z (y = z pasti salah).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-036",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Pola angka: 2, 3, 6, 18, 108, ___?",
    "options": {
      "A": "1944",
      "B": "2052",
      "C": "1800",
      "D": "2160"
    },
    "answer": "A",
    "explanation": "Pola: angka saat ini adalah hasil kali dua angka sebelumnya (6 * 18 = 108, 18 * 108 = 1944).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-037",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Semua karyawan di lantai 4 adalah programmer. Beberapa programmer menggunakan Mac. Kesimpulan yang benar:",
    "options": {
      "A": "Semua yang di lantai 4 menggunakan Mac.",
      "B": "Beberapa yang di lantai 4 menggunakan Mac.",
      "C": "Tidak semua programmer ada di lantai 4.",
      "D": "Tidak ada kesimpulan pasti tentang lantai 4 yang pakai Mac."
    },
    "answer": "D",
    "explanation": "Hanya diketahui beberapa programmer pakai Mac, belum tentu mereka ada di lantai 4.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-038",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Analogi Logika: KELAS : OBJEK = BLUEPRINT : ___?",
    "options": {
      "A": "KERTAS",
      "B": "RUMAH",
      "C": "GAMBAR",
      "D": "ARSITEK"
    },
    "answer": "B",
    "explanation": "Kelas adalah blueprint dari objek, seperti blueprint bangunan adalah rancangan dari rumah (wujud nyata).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-039",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Nilai logika dari: (True AND False) OR (True AND True)?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "Null",
      "D": "Syntax Error"
    },
    "answer": "A",
    "explanation": "(False) OR (True) menghasilkan True.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-040",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Mana yang merupakan hasil evaluasi dari 10 & 12 (Bitwise AND)?",
    "options": {
      "A": "8",
      "B": "10",
      "C": "12",
      "D": "14"
    },
    "answer": "A",
    "explanation": "10 (1010) AND 12 (1100) = 1000, yaitu 8 dalam desimal.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-041",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Budi memiliki apel 3 kali lebih banyak dari Ali. Jika total apel mereka 20, berapa apel Ali?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "10",
      "D": "15"
    },
    "answer": "B",
    "explanation": "Ali = x, Budi = 3x. x + 3x = 20 -> 4x = 20 -> x = 5.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-042",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Deret: 10, 11, 13, 16, 20, ___?",
    "options": {
      "A": "24",
      "B": "25",
      "C": "26",
      "D": "27"
    },
    "answer": "B",
    "explanation": "Penambahan: +1, +2, +3, +4, +5. 20 + 5 = 25.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-043",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Sebuah mobil bergerak 60 km/jam. Berapa menit yang dibutuhkan untuk menempuh 15 km?",
    "options": {
      "A": "10",
      "B": "15",
      "C": "20",
      "D": "30"
    },
    "answer": "B",
    "explanation": "Kecepatan 60 km/jam berarti 1 km per menit. Untuk 15 km butuh 15 menit.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-044",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Logika IF: Jika x % 2 == 0, maka y = 'Genap', else y = 'Ganjil'. Jika x = -5, apakah nilai y?",
    "options": {
      "A": "Genap",
      "B": "Ganjil",
      "C": "Error",
      "D": "Tidak ada nilai"
    },
    "answer": "B",
    "explanation": "-5 modulus 2 tidak sama dengan 0 (hasilnya -1 di beberapa bahasa, tapi intinya bukan 0), maka Ganjil.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-045",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Jika semua A adalah B, dan tidak ada B yang merupakan C, manakah yang benar?",
    "options": {
      "A": "Beberapa A adalah C.",
      "B": "Semua C adalah A.",
      "C": "Tidak ada A yang merupakan C.",
      "D": "Semua B adalah A."
    },
    "answer": "C",
    "explanation": "Karena A ada di dalam B, dan B sama sekali terpisah dari C, maka A pasti terpisah dari C.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-046",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Pola huruf: A, D, H, M, ___?",
    "options": {
      "A": "S",
      "B": "T",
      "C": "U",
      "D": "R"
    },
    "answer": "A",
    "explanation": "Penambahan urutan: +3 (D), +4 (H), +5 (M), +6 (S).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-047",
    "level": "intermediate",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Dalam suatu tim, 5 orang bisa coding Java, 4 orang bisa Python. Jika 2 orang bisa keduanya dan tim berisi 10 orang, berapa yang tidak bisa keduanya?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "1"
    },
    "answer": "B",
    "explanation": "Total bisa (Java atau Python) = 5 + 4 - 2 = 7. Yang tidak bisa = 10 - 7 = 3.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-048",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Ekspresi boolean manakah yang ekuivalen dengan NOT (A OR B)?",
    "options": {
      "A": "NOT A OR NOT B",
      "B": "NOT A AND NOT B",
      "C": "A AND B",
      "D": "A OR B"
    },
    "answer": "B",
    "explanation": "Hukum De Morgan menyatakan bahwa kebalikan dari (A OR B) adalah (!A AND !B).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-049",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Terdapat 4 prosesor (P1, P2, P3, P4). P1 harus selesai sebelum P3. P2 harus selesai sebelum P1. Urutan eksekusi yang valid adalah?",
    "options": {
      "A": "P3, P1, P2, P4",
      "B": "P2, P1, P3, P4",
      "C": "P1, P2, P3, P4",
      "D": "P4, P3, P1, P2"
    },
    "answer": "B",
    "explanation": "Berdasarkan syarat: P2 di awal, diikuti P1, lalu P3. P4 bisa di mana saja.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-050",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Berapa banyak cara mengatur 3 buku (A, B, C) di rak?",
    "options": {
      "A": "3",
      "B": "6",
      "C": "9",
      "D": "12"
    },
    "answer": "B",
    "explanation": "Permutasi 3 elemen adalah 3! = 3 * 2 * 1 = 6 cara.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-051",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Dalam graf berarah, Node A menunjuk B dan C. B menunjuk D. C menunjuk D. D menunjuk A. Berapa panjang jalur terpendek (jumlah edge) dari B ke C?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "Tidak ada jalur"
    },
    "answer": "C",
    "explanation": "Jalur terpendek: B -> D -> A -> C (3 edge).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-052",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Tiga thread mengakses variabel hitung secara bersamaan (Awal = 0). Masing-masing melakukan inkremen (+1) tanpa sinkronisasi (Race Condition). Manakah hasil akhir yang TIDAK MUNGKIN?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "0"
    },
    "answer": "D",
    "explanation": "Meskipun race condition, nilai minimal setelah dieksekusi parsial adalah 1 (jika tertimpa parah). Nilai 0 tidak mungkin jika setidaknya satu menyimpan hasil.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-053",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Logika Himpunan: Jika A subset B, dan B subset C, apa himpunan irisan dari (A dan C)?",
    "options": {
      "A": "Himpunan B",
      "B": "Himpunan C",
      "C": "Himpunan A",
      "D": "Himpunan Kosong"
    },
    "answer": "C",
    "explanation": "Karena A ada di dalam C (dari transitivitas subset), irisan A ∩ C adalah himpunan A itu sendiri.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-054",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Analisis Algoritma: Apa notasi Big-O untuk iterasi bersarang (nested loop) di mana iterasi luar dari 1 hingga N dan iterasi dalam dari 1 hingga iterasi luar?",
    "options": {
      "A": "O(N)",
      "B": "O(N log N)",
      "C": "O(N^2)",
      "D": "O(2^N)"
    },
    "answer": "C",
    "explanation": "Jumlah iterasi adalah 1 + 2 + ... + N = N(N+1)/2, yang didominasi oleh N^2, maka O(N^2).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-055",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Pada operasi XOR logika: A XOR B bernilai True, B XOR C bernilai True. Manakah pernyataan yang pasti benar?",
    "options": {
      "A": "A == C",
      "B": "A != C",
      "C": "A XOR C == True",
      "D": "Semua salah"
    },
    "answer": "A",
    "explanation": "XOR menghasilkan True jika operannya berbeda. Jadi A != B, dan B != C. Mengingat boolean hanya ada dua (True/False), maka A harus sama dengan C.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-056",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Berapa banyak string biner panjang 4 yang memiliki jumlah angka '1' genap? (Nol dianggap genap)",
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "10"
    },
    "answer": "C",
    "explanation": "Kombinasi (4C0) + (4C2) + (4C4) = 1 + 6 + 1 = 8.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-057",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Sandi enkripsi sederhana menggeser huruf 3 posisi ke depan (Caesar Cipher +3). Kata 'JAVA' menjadi apa?",
    "options": {
      "A": "MDYD",
      "B": "MZDZ",
      "C": "NEXF",
      "D": "LCXC"
    },
    "answer": "A",
    "explanation": "J+3=M, A+3=D, V+3=Y, A+3=D -> MDYD.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-058",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Sebuah tas berisi 3 bola merah dan 2 bola biru. Jika diambil 2 bola sekaligus, berapa peluang mendapatkan 1 merah dan 1 biru?",
    "options": {
      "A": "3/10",
      "B": "3/5",
      "C": "6/10",
      "D": "1/2"
    },
    "answer": "B",
    "explanation": "Kombinasi total 5C2 = 10. Kombinasi 1M1B = (3C1 * 2C1) = 3 * 2 = 6. Peluang 6/10 = 3/5.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-059",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Berapa hasil evaluasi dari operasi logika shift kiri 1 << 3 dalam bilangan desimal?",
    "options": {
      "A": "4",
      "B": "8",
      "C": "16",
      "D": "32"
    },
    "answer": "B",
    "explanation": "Shift kiri 1 sebanyak 3 bit sama dengan 1 * (2^3) = 8.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-060",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Jika x = 2^10 dan y = 4^5. Pernyataan yang benar adalah:",
    "options": {
      "A": "x > y",
      "B": "x < y",
      "C": "x == y",
      "D": "Tidak terdefinisi"
    },
    "answer": "C",
    "explanation": "4^5 = (2^2)^5 = 2^10. Sehingga x dan y bernilai sama (1024).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-061",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Pernyataan majemuk: 'Jika saya belajar, saya akan lulus'. Kontraposisinya adalah:",
    "options": {
      "A": "Jika saya lulus, saya belajar.",
      "B": "Jika saya tidak belajar, saya tidak lulus.",
      "C": "Jika saya tidak lulus, saya tidak belajar.",
      "D": "Saya lulus tanpa belajar."
    },
    "answer": "C",
    "explanation": "Kontraposisi dari p -> q adalah ~q -> ~p.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-062",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Teka-teki silang: Sebuah kubus memiliki 6 sisi bernomor 1 sampai 6. Probabilitas mendapatkan mata dadu ganjil atau lebih dari 4 adalah?",
    "options": {
      "A": "2/3",
      "B": "1/2",
      "C": "5/6",
      "D": "1/3"
    },
    "answer": "A",
    "explanation": "Ganjil (1,3,5), lebih dari 4 (5,6). Gabungan himpunan: {1,3,5,6}, ada 4 angka. Peluang 4/6 = 2/3.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-063",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Manakah dari urutan pertumbuhan kompleksitas berikut yang benar dari yang tercepat ke terlambat eksekusinya (kecil ke besar)?",
    "options": {
      "A": "O(1) < O(N) < O(log N) < O(N^2)",
      "B": "O(1) < O(log N) < O(N) < O(N^2)",
      "C": "O(log N) < O(1) < O(N) < O(N^2)",
      "D": "O(1) < O(log N) < O(N^2) < O(N)"
    },
    "answer": "B",
    "explanation": "Konstan < Logaritmik < Linier < Kuadratik.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-064",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Anda memiliki tumpukan (Stack) dengan operasi Push(1), Push(2), Pop(), Push(3), operasi manakah yang akan mengambil elemen '1'?",
    "options": {
      "A": "Pop()",
      "B": "Pop(), Pop()",
      "C": "Pop(), Pop(), Pop()",
      "D": "Tidak bisa"
    },
    "answer": "B",
    "explanation": "Isi stack akhir: bawah 1, atas 3. Untuk mengambil 1, perlu pop dua kali (3 lalu 1).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-065",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Analogi Logika OOP: ENKAPSULASI : PRIVATE = INHERITANCE : ___?",
    "options": {
      "A": "POLYMORPHISM",
      "B": "CLASS",
      "C": "EXTENDS",
      "D": "INTERFACE"
    },
    "answer": "C",
    "explanation": "Enkapsulasi dicapai dengan akses private, inheritance (pewarisan) dicapai dengan keyword extends.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-066",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Dalam logika proposisional, (P AND Q) -> R equivalen dengan:",
    "options": {
      "A": "P -> (Q -> R)",
      "B": "NOT P OR NOT Q OR R",
      "C": "Keduanya benar",
      "D": "Keduanya salah"
    },
    "answer": "C",
    "explanation": "(P AND Q) -> R = !(P AND Q) OR R = !P OR !Q OR R, yang juga sama dengan P -> (!Q OR R) = P -> (Q -> R).",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-067",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Berapa banyak simpul daun (leaf nodes) pada binary tree sempurna dengan ketinggian 3? (root di ketinggian 0)",
    "options": {
      "A": "4",
      "B": "7",
      "C": "8",
      "D": "15"
    },
    "answer": "C",
    "explanation": "Jumlah leaf pada perfect binary tree tinggi h adalah 2^h. 2^3 = 8.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-068",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Seseorang menebak 4-digit PIN dengan syarat digit pertama bukan 0 dan semua digit unik. Berapa kombinasi maksimal?",
    "options": {
      "A": "4536",
      "B": "5040",
      "C": "9000",
      "D": "3024"
    },
    "answer": "A",
    "explanation": "Digit pertama 9 pilihan (1-9). Digit kedua 9 pilihan (sisa + 0). Ketiga 8 pilihan. Keempat 7 pilihan. 9*9*8*7 = 4536.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-069",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Jika operasi A * B didefinisikan sebagai (A + B) / A. Berapa nilai dari 4 * 2?",
    "options": {
      "A": "1.5",
      "B": "2",
      "C": "3",
      "D": "6"
    },
    "answer": "A",
    "explanation": "(4 + 2) / 4 = 6 / 4 = 1.5.",
    "jobId": "junior-java"
  },
  {
    "id": "LOG-070",
    "level": "advanced",
    "topic": "Logika & Penalaran",
    "questionType": "concept",
    "question": "Sebuah algoritma rekursif f(n) = f(n-1) + f(n-2) dengan f(0)=0, f(1)=1. Berapakah f(6)?",
    "options": {
      "A": "5",
      "B": "8",
      "C": "13",
      "D": "21"
    },
    "answer": "B",
    "explanation": "Deret Fibonacci: 0, 1, 1, 2, 3, 5, 8. Maka indeks ke-6 (dimulai dari 0) adalah 8.",
    "jobId": "junior-java"
  }
];
