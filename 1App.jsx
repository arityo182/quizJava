import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════════════
//  DATA DENGAN KLUSTER (easy, intermediate)
// ═══════════════════════════════════════════════════════════════════════

const LOG_Q = [
  // ─── LOGICAL: EASY ───
  {
    level: "easy",
    q: "Deret angka: 7, 14, 21, ___, 35, 42?",
    opts: { A: "24", B: "25", C: "27", D: "28" },
    ans: "D",
    exp: "Deret kelipatan 7: 7 × 4 = 28."
  },
  {
    level: "easy",
    q: "Lanjutkan deret: 1, 4, 9, 16, 25, ___?",
    opts: { A: "30", B: "34", C: "36", D: "40" },
    ans: "C",
    exp: "Deret bilangan kuadrat: 1², 2², 3², 4², 5², 6² = 36."
  },
  {
    level: "easy",
    q: "Deret angka berulang: 4, 7, 5, 8, 6, 9, ___?",
    opts: { A: "7", B: "8", C: "10", D: "11" },
    ans: "A",
    exp: "Pola selang-seling: 4 (+1) -> 5 (+1) -> 6 (+1) -> 7."
  },
  {
    level: "easy",
    q: "Deret angka: 100, 95, 85, 70, 50, ___?",
    opts: { A: "20", B: "25", C: "30", D: "35" },
    ans: "B",
    exp: "Pola selisih bertingkat: -5, -10, -15, -20, lalu -25. Maka 50 - 25 = 25."
  },
  {
    level: "easy",
    q: "Lanjutkan deret bilangan prima: 2, 3, 5, 7, 11, 13, ___?",
    opts: { A: "15", B: "16", C: "17", D: "19" },
    ans: "C",
    exp: "Bilangan prima setelah 13 adalah 17."
  },
  {
    level: "easy",
    q: "Analogi: SOURCE CODE : COMPILER = BYTECODE : ___?",
    opts: { A: "IDE", B: "Debugger", C: "JVM", D: "Git" },
    ans: "C",
    exp: "Source code diproses Compiler menjadi Bytecode. Bytecode dieksekusi oleh JVM (Java Virtual Machine)."
  },
  {
    level: "easy",
    q: "Semua berkas berekstensi .java harus di-compile. Berkas Main tidak harus di-compile. Simpulan yang sah:",
    opts: { A: "Berkas Main berekstensi .java", B: "Berkas Main bukan berkas berekstensi .java", C: "Berkas Main adalah class Java", D: "Berkas Main mengalami galat" },
    ans: "B",
    exp: "Karena semua file .java wajib di-compile dan berkas Main tidak, maka Main pasti bukan file .java."
  },
  {
    level: "easy",
    q: "Jika server mati, maka aplikasi tidak dapat diakses. Hari ini aplikasi dapat diakses. Simpulan yang benar:",
    opts: { A: "Server sedang lambat", B: "Server tidak mati", C: "Server sedang dalam pemeliharaan", D: "Jaringan lokal mengalami gangguan" },
    ans: "B",
    exp: "Modus Tollens: Jika P -> Q, dan ~Q, maka simpulannya ~P (server tidak mati)."
  },

  // ─── LOGICAL: INTERMEDIATE ───
  {
    level: "intermediate",
    q: "Deret angka: 2, 6, 12, 20, 30, ___?",
    opts: { A: "38", B: "40", C: "42", D: "44" },
    ans: "C",
    exp: "Perbedaan berturutan: +4, +6, +8, +10, +12. Maka 30 + 12 = 42."
  },
  {
    level: "intermediate",
    q: "Deret angka: 3, 5, 9, 17, 33, ___?",
    opts: { A: "65", B: "66", C: "67", D: "68" },
    ans: "A",
    exp: "Pola selisih: +2, +4, +8, +16, +32. Maka 33 + 32 = 65."
  },
  {
    level: "intermediate",
    q: "Deret angka: 2, 4, 7, 12, 19, 30, ___?",
    opts: { A: "41", B: "43", C: "45", D: "47" },
    ans: "B",
    exp: "Pola selisih bilangan prima: +2, +3, +5, +7, +11, +13. Maka 30 + 13 = 43."
  },
  {
    level: "intermediate",
    q: "Deret huruf: B, D, G, K, P, ___?",
    opts: { A: "S", B: "T", C: "U", D: "V" },
    ans: "D",
    exp: "Lompatan huruf alfabet: B (+2) D (+3) G (+4) K (+5) P (+6) V."
  },
  {
    level: "intermediate",
    q: "Jika semua programmer adalah problem solver, dan semua problem solver adalah analytical thinker. Manakah yang PASTI benar?",
    opts: { A: "Semua analytical thinker adalah programmer", B: "Semua programmer adalah analytical thinker", C: "Beberapa problem solver bukan programmer", D: "Semua analytical thinker adalah problem solver" },
    ans: "B",
    exp: "Rantai silogisme: Programmer -> Problem Solver -> Analytical Thinker."
  },
  {
    level: "intermediate",
    q: "Semua programmer memahami algoritma. Sebagian programmer menguasai bahasa Java. Simpulan yang benar adalah:",
    opts: { A: "Sebagian yang menguasai bahasa Java tidak memahami algoritma", B: "Sebagian yang menguasai bahasa Java memahami algoritma", C: "Semua yang memahami algoritma menguasai bahasa Java", D: "Tidak ada programmer yang tidak menguasai bahasa Java" },
    ans: "B",
    exp: "Sebagian programmer menguasai Java, dan karena seluruh programmer paham algoritma, maka programmer yang menguasai Java pasti memahami algoritma."
  },
  {
    level: "intermediate",
    q: "Lima orang (A, B, C, D, E) antre di kasir. B berada tepat di belakang A. C berada di antara D dan E. D berada di urutan paling depan. Siapakah yang berada pada urutan terakhir?",
    opts: { A: "A", B: "B", C: "C", D: "E" },
    ans: "B",
    exp: "Urutan antrean: D - C - E - A - B. Maka B berada di urutan paling belakang."
  },
  {
    level: "intermediate",
    q: "Proyek X lebih sulit daripada Proyek Y. Proyek Z lebih mudah daripada Proyek Y. Proyek W sama sulitnya dengan Proyek Z. Pernyataan yang benar:",
    opts: { A: "Proyek X adalah yang paling mudah", B: "Proyek Y adalah yang paling sulit", C: "Proyek W lebih mudah daripada Proyek X", D: "Proyek Z lebih sulit daripada Proyek Y" },
    ans: "C",
    exp: "Urutan kesulitan: X > Y > Z = W. Maka W jelas lebih mudah dibanding X."
  },
  {
    level: "intermediate",
    q: "Sebuah API memproses 240 request per menit. Berapa total request yang diproses dalam 2.5 jam?",
    opts: { A: "32.000", B: "34.000", C: "36.000", D: "38.000" },
    ans: "C",
    exp: "2.5 jam = 150 menit. 240 × 150 = 36.000 request."
  },
  {
    level: "intermediate",
    q: "5 developer, setiap developer mereview kode semua developer lain (satu arah). Total review yang dibutuhkan?",
    opts: { A: "10", B: "15", C: "20", D: "25" },
    ans: "C",
    exp: "Setiap developer mereview 4 rekan lainnya: 5 × 4 = 20 review."
  },
  {
    level: "intermediate",
    q: "Jika P → Q dan Q → R, maka kesimpulan yang tepat adalah?",
    opts: { A: "R → P", B: "P → R", C: "Q → P", D: "R → Q" },
    ans: "B",
    exp: "Silogisme transitif: P → Q → R, maka P → R."
  },
  {
    level: "intermediate",
    q: "3 developer dapat menyelesaikan 3 fitur dalam 3 hari. Berapa hari untuk 9 developer menyelesaikan 9 fitur?",
    opts: { A: "1 hari", B: "3 hari", C: "9 hari", D: "27 hari" },
    ans: "B",
    exp: "Kapasitas 1 developer = 1 fitur per 3 hari. Maka 9 developer dapat menuntaskan 9 fitur dalam 3 hari."
  }
];

const TECH_Q = [
  // ─── TECHNICAL: EASY ───
  {
    level: "easy",
    cat: "Java Core",
    q: "Tipe data primitif manakah di Java yang berukuran 64-bit?",
    opts: { A: "int", B: "float", C: "long", D: "short" },
    ans: "C",
    exp: "long dan double berukuran 64-bit; int dan float berukuran 32-bit."
  },
  {
    level: "easy",
    cat: "Java Core",
    q: "Keyword apa yang digunakan untuk mencegah suatu method di-override oleh child class?",
    opts: { A: "static", B: "final", C: "abstract", D: "const" },
    ans: "B",
    exp: "final pada method mencegah overriding; final pada class mencegah pewarisan (inheritance)."
  },
  {
    level: "easy",
    cat: "Java Core",
    q: "Di antara koleksi berikut, manakah yang TIDAK memperbolehkan elemen duplikat dan tidak menjamin urutan penyimpanan?",
    opts: { A: "ArrayList", B: "LinkedList", C: "HashSet", D: "TreeSet" },
    ans: "C",
    exp: "HashSet menyimpan elemen unik tanpa jaminan urutan. TreeSet menyimpan data unik secara terurut."
  },
  {
    level: "easy",
    cat: "Java Core",
    q: "Pada penanganan exception di Java, blok kode mana yang selalu dieksekusi terlepas dari apakah terjadi exception atau tidak?",
    opts: { A: "catch", B: "finally", C: "try", D: "throw" },
    ans: "B",
    exp: "Blok finally dirancang untuk selalu dieksekusi, umumnya dipakai menutup resource/koneksi."
  },
  {
    level: "easy",
    cat: "Java Core",
    q: "Konsep yang memungkinkan satu method memiliki nama sama tetapi parameter berbeda di dalam satu class dinamakan?",
    opts: { A: "Method overriding", B: "Method overloading", C: "Encapsulation", D: "Abstraction" },
    ans: "B",
    exp: "Method overloading = nama sama beda parameter pada satu class; Overriding = implementasi ulang method parent di subclass."
  },
  {
    level: "easy",
    cat: "Spring Boot",
    q: "Anotasi yang tepat untuk membuat REST Controller di Spring Boot adalah?",
    opts: { A: "@Controller", B: "@Service", C: "@RestController", D: "@Component" },
    ans: "C",
    exp: "@RestController = @Controller + @ResponseBody, langsung mengembalikan output JSON/XML."
  },
  {
    level: "easy",
    cat: "Spring Boot",
    q: "File konfigurasi default bawaan pada project Spring Boot adalah?",
    opts: { A: "config.xml", B: "settings.json", C: "application.properties atau application.yml", D: "spring.config" },
    ans: "C",
    exp: "Spring Boot membaca pengaturan bawaan dari application.properties atau application.yml."
  },
  {
    level: "easy",
    cat: "Spring Boot",
    q: "Anotasi untuk menginjeksi nilai dari application.properties ke dalam sebuah field?",
    opts: { A: "@Inject", B: "@Value", C: "@Property", D: "@Config" },
    ans: "B",
    exp: "@Value('${property.key}') membaca nilai konfigurasi langsung ke field instance."
  },
  {
    level: "easy",
    cat: "REST API",
    q: "HTTP status code yang tepat saat resource tidak ditemukan?",
    opts: { A: "200 OK", B: "400 Bad Request", C: "404 Not Found", D: "500 Internal Server Error" },
    ans: "C",
    exp: "404 = Not Found, 400 = Bad Request, 500 = Internal Server Error."
  },
  {
    level: "easy",
    cat: "REST API",
    q: "HTTP Status Code 403 melambangkan?",
    opts: { A: "Unauthorized (belum login)", B: "Forbidden (tidak memiliki izin/akses)", C: "Not Found (endpoint tidak ada)", D: "Internal Server Error" },
    ans: "B",
    exp: "403 Forbidden berarti client terautentikasi tetapi tidak punya wewenang/role mengakses resource."
  },
  {
    level: "easy",
    cat: "REST API",
    q: "HTTP Status Code manakah yang menandakan resource baru telah berhasil dibuat di server?",
    opts: { A: "200 OK", B: "201 Created", C: "204 No Content", D: "202 Accepted" },
    ans: "B",
    exp: "201 Created adalah respons standar jika POST create data baru sukses tersimpan."
  },
  {
    level: "easy",
    cat: "JPA / Database",
    q: "Anotasi JPA untuk menandai field sebagai primary key adalah?",
    opts: { A: "@Column(primary=true)", B: "@PrimaryKey", C: "@Id", D: "@Key" },
    ans: "C",
    exp: "@Id adalah anotasi resmi JPA untuk menetapkan primary key entitas."
  },
  {
    level: "easy",
    cat: "Database / SQL",
    q: "Perintah SQL apa yang digunakan untuk menampilkan data unik tanpa ada duplikasi baris?",
    opts: { A: "UNIQUE", B: "DISTINCT", C: "GROUP", D: "DIFFERENT" },
    ans: "B",
    exp: "SELECT DISTINCT digunakan untuk menyaring record bernilai sama pada result set."
  },
  {
    level: "easy",
    cat: "Database / SQL",
    q: "Perintah DDL yang digunakan untuk menghapus tabel beserta seluruh strukturnya dari database adalah?",
    opts: { A: "DELETE TABLE", B: "DROP TABLE", C: "REMOVE TABLE", D: "TRUNCATE TABLE" },
    ans: "B",
    exp: "DROP TABLE menghapus data dan skema tabel sekaligus. TRUNCATE hanya mengosongkan data barisnya."
  },
  {
    level: "easy",
    cat: "Testing",
    q: "Anotasi JUnit 5 yang digunakan untuk menandai sebuah test method adalah?",
    opts: { A: "@Test", B: "@TestMethod", C: "@UnitTest", D: "@RunWith" },
    ans: "A",
    exp: "@Test dari package org.junit.jupiter.api digunakan pada JUnit 5."
  },

  // ─── TECHNICAL: INTERMEDIATE ───
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Apa output dari kode berikut?",
    code: `String s1 = new String("Hello");\nString s2 = new String("Hello");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1.equals(s2));`,
    opts: { A: "true / true", B: "false / false", C: "false / true", D: "true / false" },
    ans: "C",
    exp: "Keyword new membuat alokasi objek baru di memori heap (s1 == s2 bernilai false). Metode .equals() membandingkan nilai konten teks (true)."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Apa output dari kode Stream API berikut?",
    code: `List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\nint result = nums.stream()\n    .filter(n -> n % 2 == 0)\n    .mapToInt(Integer::intValue)\n    .sum();\nSystem.out.println(result);`,
    opts: { A: "15", B: "6", C: "9", D: "12" },
    ans: "B",
    exp: "filter(n % 2 == 0) menghasilkan 2 dan 4. Nilai sum: 2 + 4 = 6."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Perhatikan potongan kode Stream berikut:",
    code: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nint sum = numbers.stream()\n                 .filter(n -> n % 2 == 0)\n                 .mapToInt(n -> n * 2)\n                 .sum();\nSystem.out.println(sum);`,
    opts: { A: "6", B: "12", C: "20", D: "24" },
    ans: "B",
    exp: "Elemen genap: 2 dan 4. Dikalikan 2 menjadi 4 dan 8. Total sum: 4 + 8 = 12."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Struktur data manakah yang paling efisien untuk pencarian key-value dengan kompleksitas rata-rata O(1)?",
    opts: { A: "ArrayList", B: "HashMap", C: "TreeMap", D: "LinkedList" },
    ans: "B",
    exp: "HashMap memanfaatkan hash table untuk lookup O(1). TreeMap menggunakan Red-Black tree sehingga lookup bernilai O(log n)."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Perbedaan HashMap dan Hashtable di Java?",
    opts: { A: "Tidak ada perbedaan", B: "HashMap thread-safe, Hashtable tidak", C: "HashMap tidak thread-safe dan mengizinkan null; Hashtable thread-safe dan tidak mengizinkan null", D: "Hashtable selalu lebih cepat" },
    ans: "C",
    exp: "HashMap tidak synchronized dan membolehkan 1 null key. Hashtable synchronized (thread-safe legacy) dan menolak null."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Untuk membuat checked custom exception di Java, kelas tersebut harus mewarisi?",
    opts: { A: "Implement interface Throwable", B: "Extend class Exception", C: "Extend class Error", D: "Implement interface Exception" },
    ans: "B",
    exp: "Checked exception wajib extend Exception. Unchecked exception meng-extend RuntimeException."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Apa tujuan utama class Optional<T> yang diperkenalkan pada Java 8?",
    opts: { A: "Meningkatkan performa multithreading", B: "Mengurangi risiko terjadinya NullPointerException secara eksplisit", C: "Mengubah tipe data secara dinamis", D: "Menggantikan seluruh implementasi collection framework" },
    ans: "B",
    exp: "Optional memfasilitasi penanganan objek yang berpotensi bernilai null tanpa pemeriksaan manual null-check yang berserakan."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Perbedaan utama antara interface dan abstract class di Java?",
    opts: { A: "Interface tidak bisa punya method, abstract class bisa", B: "Satu class bisa implement banyak interface, tapi hanya extend satu abstract class", C: "Abstract class tidak bisa punya constructor", D: "Interface selalu lebih cepat dari abstract class" },
    ans: "B",
    exp: "Java melarang multiple inheritance untuk class (hanya extend 1 parent), tetapi membolehkan implementasi banyak interface."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Perbedaan utama @RequestParam vs @PathVariable di Spring Boot?",
    opts: { A: "@RequestParam untuk POST, @PathVariable untuk GET", B: "@RequestParam dari query parameter URL, @PathVariable dari path segmen URI", C: "Keduanya identik dan bisa saling menggantikan tanpa konfigurasi", D: "@PathVariable hanya untuk tipe numerik" },
    ans: "B",
    exp: "@PathVariable mengekstrak nilai langsung dari path URI (/users/{id}). @RequestParam mengekstrak query string (/users?id=1)."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Kegunaan utama anotasi @Autowired di Spring Boot?",
    opts: { A: "Membuat REST endpoint baru", B: "Melakukan Dependency Injection bean secara otomatis oleh Spring IoC", C: "Konfigurasi koneksi database", D: "Mengamankan endpoint dengan authentication" },
    ans: "B",
    exp: "@Autowired menginstruksikan IoC container untuk menyediakan dan menautkan bean dependency yang cocok."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Kegunaan utama anotasi @Transactional di Spring?",
    opts: { A: "Mengaktifkan caching pada method", B: "Mengatur database transaction, termasuk auto rollback saat terjadi RuntimeException", C: "Membuat method berjalan secara asynchronous", D: "Menandai sebuah method sebagai REST endpoint" },
    ans: "B",
    exp: "@Transactional menjamin atomicity eksekusi basis data dan menjalankan rollback otomatis jika terlempar RuntimeException."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Perbedaan @Component, @Service, dan @Repository di Spring?",
    opts: { A: "Ketiganya identik secara fungsional", B: "@Component untuk utility, @Service untuk business logic, @Repository untuk data tanpa beda fitur", C: "@Component bean umum; @Service menandai business layer; @Repository menyediakan automatic exception translation", D: "Hanya @Service yang mendukung @Transactional" },
    ans: "C",
    exp: "@Repository menambahkan kapabilitas penerjemahan exception basis data bawaan platform ke hierarchy DataAccessException Spring."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Anotasi manakah yang digunakan untuk mendeserialisasi payload request JSON ke dalam instance Java Object?",
    opts: { A: "@ResponseBody", B: "@RequestBody", C: "@RequestParam", D: "@ModelAttribute" },
    ans: "B",
    exp: "@RequestBody membaca HTTP request body lalu dipetakan ke target parameter objek melalui HttpMessageConverter."
  },
  {
    level: "intermediate",
    cat: "REST API",
    q: "HTTP method yang tepat untuk melakukan PARTIAL update pada sebuah resource?",
    opts: { A: "PUT", B: "POST", C: "PATCH", D: "UPDATE" },
    ans: "C",
    exp: "PATCH digunakan untuk modifikasi sebagian data field. PUT menggantikan keseluruhan representasi resource."
  },
  {
    level: "intermediate",
    cat: "REST API",
    q: "HTTP method mana yang bersifat IDEMPOTENT?",
    opts: { A: "POST saja", B: "GET, PUT, DELETE", C: "POST dan PATCH", D: "GET saja" },
    ans: "B",
    exp: "Operasi idempotent menghasilkan state resource yang konsisten meski dipanggil berulang kali (GET, PUT, DELETE)."
  },
  {
    level: "intermediate",
    cat: "Clean Code",
    q: "Prinsip SOLID: 'setiap kelas hanya memiliki satu alasan untuk berubah' adalah?",
    opts: { A: "Open/Closed Principle", B: "Liskov Substitution Principle", C: "Single Responsibility Principle", D: "Interface Segregation Principle" },
    ans: "C",
    exp: "Single Responsibility Principle (SRP) menekankan satu class hanya bertanggung jawab atas satu fungsionalitas tunggal."
  },
  {
    level: "intermediate",
    cat: "Clean Code",
    q: "Cara terbaik untuk menangani exception secara global di Spring Boot REST API?",
    opts: { A: "Try-catch di setiap method controller", B: "Menggunakan @ControllerAdvice bersama @ExceptionHandler", C: "Override method toString() di setiap exception class", D: "Gunakan if-else statement untuk validasi null" },
    ans: "B",
    exp: "@ControllerAdvice + @ExceptionHandler memusatkan logika tanggapan error tanpa mengotori controller."
  },
  {
    level: "intermediate",
    cat: "Database / SQL",
    q: "Jenis JOIN yang hanya menampilkan baris data apabila record tersebut memiliki relasi cocok di kedua tabel adalah?",
    opts: { A: "LEFT JOIN", B: "RIGHT JOIN", C: "INNER JOIN", D: "FULL OUTER JOIN" },
    ans: "C",
    exp: "INNER JOIN mengembalikan irisan data yang valid ada pada tabel kiri maupun kanan."
  },
  {
    level: "intermediate",
    cat: "Database / SQL",
    q: "Klausa mana yang digunakan untuk memfilter hasil fungsi agregasi (seperti COUNT, SUM) setelah klausa GROUP BY?",
    opts: { A: "WHERE", B: "HAVING", C: "ORDER BY", D: "FILTER" },
    ans: "B",
    exp: "WHERE menyaring record sebelum proses agregasi; HAVING memfilter record grup hasil agregasi."
  },
  {
    level: "intermediate",
    cat: "Database / SQL",
    q: "Apa fungsi dari query SQL berikut?",
    code: `SELECT department, COUNT(*) FROM employees WHERE salary > 5000000 GROUP BY department;`,
    opts: { A: "Menghitung total gaji karyawan di setiap departemen", B: "Menghitung jumlah karyawan di setiap departemen yang gajinya di atas 5.000.000", C: "Menampilkan rata-rata gaji karyawan di departemen tertentu", D: "Menghapus karyawan dengan gaji di bawah 5.000.000" },
    ans: "B",
    exp: "WHERE menyaring record gaji > 5 juta dahulu, lalu GROUP BY department mengelompokkan dan menghitung total karyawannya."
  },
  {
    level: "intermediate",
    cat: "JPA / Database",
    q: "Apa yang dimaksud dengan N+1 Problem di JPA/Hibernate?",
    opts: { A: "Ada N+1 database server yang aktif bersamaan", B: "Untuk N baris entitas utama, aplikasi mengeksekusi N kali query tambahan untuk relasinya", C: "Ada N+1 entity class dalam satu konfigurasi schema", D: "Ada N+1 REST endpoint dalam satu controller" },
    ans: "B",
    exp: "N+1 terjadi saat pengambilan N entitas anak dieksekusi secara terpisah per entitas induk. Diatasi dengan JOIN FETCH."
  },
  {
    level: "intermediate",
    cat: "Testing",
    q: "Tujuan utama dari anotasi @SpringBootTest pada pengujian perangkat lunak adalah?",
    opts: { A: "Unit test murni pada satu fungsi method", B: "Integration test yang menginisiasi keseluruhan Spring Application Context", C: "Mock testing isolated tanpa context", D: "Benchmarking performance throughput" },
    ans: "B",
    exp: "@SpringBootTest mengaktifkan runtime context utuh aplikasi Spring untuk pengujian integrasi antar-layer."
  }
];

// ═══════════════════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════════════════

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
const scoreOf = (qs, ans) => qs.reduce((sum, q, i) => sum + (ans[i] === q.ans ? 1 : 0), 0);

// ═══════════════════════════════════════════════════════════════════════
//  REVIEW SECTION
// ═══════════════════════════════════════════════════════════════════════

function ReviewSection({ logAns, techAns, C }) {
  const [tab, setTab] = useState("logical");
  const qs = tab === "logical" ? LOG_Q : TECH_Q;
  const ans = tab === "logical" ? logAns : techAns;

  return (
    <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", marginTop: 16 }}>
      <div style={{ display: "flex", borderBottom: `1px solid ${C.border}` }}>
        {["logical", "technical"].map((t) => (
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
              borderBottom: tab === t ? `2px solid ${t === "logical" ? C.acc : C.pur}` : "2px solid transparent"
            }}
          >
            {t === "logical" ? `🧠 Logical Test (${LOG_Q.length} Soal)` : `💻 Technical Test (${TECH_Q.length} Soal)`}
          </button>
        ))}
      </div>
      <div style={{ padding: 16, maxHeight: 520, overflowY: "auto" }}>
        {qs.map((q, i) => {
          const ua = ans[i];
          const correct = ua === q.ans;
          const unanswered = ua === undefined;
          return (
            <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: 14, marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: C.muted, fontSize: 11 }}>Soal {i + 1}{q.cat ? ` · ${q.cat}` : ""}</span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: q.level === "easy" ? `${C.ok}22` : `${C.warn}22`,
                      color: q.level === "easy" ? C.ok : C.warn,
                      border: `1px solid ${q.level === "easy" ? `${C.ok}44` : `${C.warn}44`}`
                    }}
                  >
                    {q.level}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: 20,
                    background: unanswered ? `${C.warn}22` : correct ? `${C.ok}22` : `${C.err}22`,
                    color: unanswered ? C.warn : correct ? C.ok : C.err
                  }}
                >
                  {unanswered ? "— Tidak dijawab" : correct ? "✓ Benar" : "✗ Salah"}
                </span>
              </div>
              <p style={{ color: C.text, fontSize: 13, margin: "0 0 8px", lineHeight: 1.55 }}>{q.q}</p>
              {q.code && (
                <pre style={{ background: "#040C18", border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 12px", color: "#7DD3FC", fontSize: 12, margin: "0 0 8px", overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "'Fira Code', 'Courier New', monospace" }}>{q.code}</pre>
              )}
              {!correct && ua && (
                <div style={{ color: C.err, fontSize: 12, marginBottom: 6 }}>Jawabanmu: <strong>{ua}. {q.opts[ua]}</strong></div>
              )}
              <div style={{ background: `${C.ok}12`, border: `1px solid ${C.ok}35`, borderRadius: 8, padding: 10 }}>
                <div style={{ color: C.ok, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>✓ Jawaban benar: {q.ans}. {q.opts[q.ans]}</div>
                <div style={{ color: C.sub, fontSize: 12, lineHeight: 1.6 }}>{q.exp}</div>
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
  const [screen, setScreen] = useState("login");
  const [name, setName] = useState("Ari");
  const [email, setEmail] = useState("");
  const [logAns, setLogAns] = useState({});
  const [techAns, setTechAns] = useState({});
  const [qi, setQi] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [flagged, setFlagged] = useState({});

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
  const qs = isLogical ? LOG_Q : TECH_Q;
  const curAns = isLogical ? logAns : techAns;
  const setAns = isLogical ? setLogAns : setTechAns;
  const curQ = qs[qi] || {};

  const logScore = scoreOf(LOG_Q, logAns);
  const techScore = scoreOf(TECH_Q, techAns);
  const totalPct = Math.round((logScore / LOG_Q.length) * 40 + (techScore / TECH_Q.length) * 60);

  const answeredCount = Object.keys(curAns).length;
  const progress = ((qi + 1) / qs.length) * 100;
  const timeColor = timeLeft < 120 ? "#FB7185" : timeLeft < 300 ? "#FBBF24" : "#38BDF8";

  const C = { bg: "#060F1C", surf: "#0C1A2E", card: "#101E33", border: "#1A3256", acc: "#38BDF8", pur: "#A78BFA", text: "#E2E8F0", muted: "#475569", sub: "#94A3B8", ok: "#34D399", err: "#FB7185", warn: "#FBBF24" };
  const F = "'Inter', system-ui, -apple-system, sans-serif";
  const btn = (s = {}) => ({ padding: "12px 22px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: F, ...s });
  const inp = { width: "100%", padding: "11px 14px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 9, color: C.text, fontSize: 14, fontFamily: F, boxSizing: "border-box", outline: "none", marginBottom: 14 };

  const startLogical = () => {
    setQi(0);
    setFlagged({});
    setTimeLeft(15 * 60);
    setScreen("logical");
  };

  const startTechnical = () => {
    setQi(0);
    setFlagged({});
    setTimeLeft(30 * 60);
    setScreen("technical");
  };

  const handleSelectOption = (key) => {
    setAns((prev) => ({ ...prev, [qi]: key }));
  };

  const toggleFlag = () => {
    setFlagged((prev) => ({ ...prev, [qi]: !prev[qi] }));
  };

  // ─── LOGIN ─────────────────────────────────────────────────────────────
  if (screen === "login") {
    const ok = name.trim() && email.trim();
    return (
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: F }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ width: 60, height: 60, background: `linear-gradient(135deg, ${C.acc}, ${C.pur})`, borderRadius: 16, margin: "0 auto 14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>☕</div>
            <h1 style={{ color: C.text, fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>Java Developer Selection Test</h1>
            <p style={{ color: C.sub, fontSize: 13, margin: 0 }}>Simulasi Ujian Mandiri ClassMarker</p>
          </div>
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 16, padding: 28 }}>
            <p style={{ color: C.sub, fontSize: 13, margin: "0 0 20px", lineHeight: 1.65 }}>
              Masukkan data profil untuk memulai kuis. Soal telah dikelompokkan dalam cluster <strong style={{ color: C.ok }}>Easy</strong> dan <strong style={{ color: C.warn }}>Intermediate</strong>.
            </p>
            <label style={{ display: "block", color: C.sub, fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Nama Lengkap</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Anda" style={inp} />
            <label style={{ display: "block", color: C.sub, fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" type="email" style={{ ...inp, marginBottom: 20 }} />
            <button onClick={() => ok && setScreen("brief")} style={btn({ width: "100%", padding: "13px", fontSize: 15, background: ok ? `linear-gradient(135deg, ${C.acc}, ${C.pur})` : C.card, color: ok ? "#fff" : C.muted, cursor: ok ? "pointer" : "default" })}>
              Masuk & Mulai →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── BRIEF ─────────────────────────────────────────────────────────────
  if (screen === "brief") {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: F }}>
        <div style={{ width: "100%", maxWidth: 660 }}>
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 16, padding: 36 }}>
            <h2 style={{ color: C.text, margin: "0 0 4px", fontSize: 20 }}>Halo, {name}! 👋</h2>
            <p style={{ color: C.sub, margin: "0 0 28px", fontSize: 13 }}>Baca rincian tes sebelum memulai pengerjaan.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 18 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🧠</div>
                <div style={{ color: C.acc, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Logical Test</div>
                <div style={{ color: C.sub, fontSize: 12, lineHeight: 1.6 }}>
                  • {LOG_Q.length} Pertanyaan (Easy & Intermediate)<br />
                  • Batas Waktu: 15 Menit<br />
                  • Bobot Nilai: 40%
                </div>
              </div>
              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 18 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>💻</div>
                <div style={{ color: C.pur, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Technical Test</div>
                <div style={{ color: C.sub, fontSize: 12, lineHeight: 1.6 }}>
                  • {TECH_Q.length} Pertanyaan (Java, Spring, SQL)<br />
                  • Batas Waktu: 30 Menit<br />
                  • Bobot Nilai: 60%
                </div>
              </div>
            </div>
            <button onClick={startLogical} style={btn({ width: "100%", background: `linear-gradient(135deg, ${C.acc}, ${C.pur})`, color: "#fff" })}>
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
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: F }}>
        <div style={{ width: "100%", maxWidth: 520, textAlign: "center" }}>
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 16, padding: 36 }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🎉</div>
            <h2 style={{ color: C.text, margin: "0 0 8px", fontSize: 20 }}>Sesi 1 (Logical Test) Selesai</h2>
            <p style={{ color: C.sub, fontSize: 13, margin: "0 0 24px", lineHeight: 1.6 }}>
              Jawaban sesi pertama telah tersimpan. Kamu dapat mengambil jeda sebelum memulai sesi technical test berikutnya.
            </p>
            <button onClick={startTechnical} style={btn({ width: "100%", background: `linear-gradient(135deg, ${C.pur}, ${C.acc})`, color: "#fff" })}>
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
      <div style={{ minHeight: "100vh", background: C.bg, padding: "24px 16px", fontFamily: F }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Header Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: C.surf, border: `1px solid ${C.border}`, borderRadius: 14, padding: "12px 20px", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 18 }}>{isLogical ? "🧠" : "💻"}</span>
              <span style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>{isLogical ? "Logical Test" : "Technical Test"}</span>
              <span style={{ color: C.muted, fontSize: 12 }}>({answeredCount}/{qs.length} Terjawab)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#040C18", border: `1px solid ${C.border}`, padding: "6px 14px", borderRadius: 8 }}>
              <span style={{ color: C.muted, fontSize: 12 }}>Sisa Waktu:</span>
              <span style={{ color: timeColor, fontWeight: 700, fontSize: 14, fontFamily: "'Fira Code', monospace" }}>{fmt(timeLeft)}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ width: "100%", height: 4, background: C.card, borderRadius: 2, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ width: `${progress}%`, height: "100%", background: isLogical ? C.acc : C.pur, transition: "width 0.3s ease" }} />
          </div>

          {/* Main Question Card */}
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24, marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: C.muted, fontSize: 13, fontWeight: 600 }}>Soal {qi + 1} dari {qs.length}</span>
                {curQ.cat && <span style={{ color: C.sub, fontSize: 12, background: C.card, padding: "2px 8px", borderRadius: 4, border: `1px solid ${C.border}` }}>{curQ.cat}</span>}
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    padding: "2px 8px",
                    borderRadius: 6,
                    background: curQ.level === "easy" ? `${C.ok}22` : `${C.warn}22`,
                    color: curQ.level === "easy" ? C.ok : C.warn,
                    border: `1px solid ${curQ.level === "easy" ? `${C.ok}44` : `${C.warn}44`}`
                  }}
                >
                  {curQ.level}
                </span>
              </div>
              <button onClick={toggleFlag} style={{ background: "none", border: "none", color: flagged[qi] ? C.warn : C.muted, cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                {flagged[qi] ? "🚩 Ditandai Ragu" : "🏳️ Tandai Ragu"}
              </button>
            </div>

            <p style={{ color: C.text, fontSize: 15, lineHeight: 1.6, margin: "0 0 16px" }}>{curQ.q}</p>

            {curQ.code && (
              <pre style={{ background: "#040C18", border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", color: "#7DD3FC", fontSize: 13, margin: "0 0 18px", overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "'Fira Code', 'Courier New', monospace" }}>{curQ.code}</pre>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {Object.entries(curQ.opts || {}).map(([key, text]) => {
                const isSelected = curAns[qi] === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectOption(key)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "12px 16px",
                      borderRadius: 10,
                      background: isSelected ? `${isLogical ? C.acc : C.pur}1A` : C.card,
                      border: `1px solid ${isSelected ? (isLogical ? C.acc : C.pur) : C.border}`,
                      color: isSelected ? C.text : C.sub,
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: F,
                      fontSize: 14,
                      lineHeight: 1.5,
                      transition: "all 0.15s ease"
                    }}
                  >
                    <span style={{ fontWeight: 700, color: isSelected ? (isLogical ? C.acc : C.pur) : C.muted, minWidth: 20 }}>{key}.</span>
                    <span>{text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigasi Soal Bawah */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <button disabled={qi === 0} onClick={() => setQi((p) => p - 1)} style={btn({ background: C.surf, border: `1px solid ${C.border}`, color: qi === 0 ? C.muted : C.text, cursor: qi === 0 ? "default" : "pointer" })}>
              ← Sebelumnya
            </button>
            {qi < qs.length - 1 ? (
              <button onClick={() => setQi((p) => p + 1)} style={btn({ background: isLogical ? C.acc : C.pur, color: "#fff" })}>
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
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16 }}>
            <div style={{ color: C.muted, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Navigasi Nomor Soal</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(36px, 1fr))", gap: 6 }}>
              {qs.map((q, idx) => {
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
                      background: isCurrent ? `${isLogical ? C.acc : C.pur}33` : isAnswered ? `${C.ok}22` : C.card,
                      color: isCurrent ? C.text : isFlag ? C.warn : isAnswered ? C.ok : C.muted,
                      cursor: "pointer",
                      fontFamily: F,
                      fontSize: 12,
                      fontWeight: isCurrent ? 700 : 400
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
    <div style={{ minHeight: "100vh", background: C.bg, padding: "40px 16px", fontFamily: F }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>📊</div>
          <h1 style={{ color: C.text, fontSize: 24, fontWeight: 700, margin: "0 0 6px" }}>Ringkasan Hasil Simulasi</h1>
          <p style={{ color: C.sub, fontSize: 13, margin: 0 }}>Peserta: {name} ({email})</p>
        </div>

        {/* Skor Box */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 20 }}>
          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, textAlign: "center" }}>
            <div style={{ color: C.muted, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Skor Akhir (Weighted)</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: totalPct >= 70 ? C.ok : totalPct >= 50 ? C.warn : C.err }}>{totalPct}%</div>
            <div style={{ color: C.sub, fontSize: 12, marginTop: 4 }}>Passing Grade Estimasi: 70%</div>
          </div>

          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, textAlign: "center" }}>
            <div style={{ color: C.acc, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Logical Test (Bobot 40%)</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: C.text }}>{logScore} <span style={{ fontSize: 16, color: C.muted }}>/ {LOG_Q.length}</span></div>
            <div style={{ color: C.sub, fontSize: 12, marginTop: 4 }}>Akurasi: {Math.round((logScore / LOG_Q.length) * 100)}%</div>
          </div>

          <div style={{ background: C.surf, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, textAlign: "center" }}>
            <div style={{ color: C.pur, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Technical Test (Bobot 60%)</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: C.text }}>{techScore} <span style={{ fontSize: 16, color: C.muted }}>/ {TECH_Q.length}</span></div>
            <div style={{ color: C.sub, fontSize: 12, marginTop: 4 }}>Akurasi: {Math.round((techScore / TECH_Q.length) * 100)}%</div>
          </div>
        </div>

        {/* Section Review Kunci Jawaban */}
        <ReviewSection logAns={logAns} techAns={techAns} C={C} />

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button
            onClick={() => {
              setLogAns({});
              setTechAns({});
              setQi(0);
              setFlagged({});
              setScreen("login");
            }}
            style={btn({ background: C.card, border: `1px solid ${C.border}`, color: C.text })}
          >
            ↺ Reset dan Ulangi Tes
          </button>
        </div>
      </div>
    </div>
  );
}
