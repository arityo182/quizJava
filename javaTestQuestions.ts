import { Question } from './types';

export const JAVA_TEST_QUESTIONS: Question[] = [
  {
    "id": "JT-001",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari pemanggilan substring dan length berikut?\n\n```java\nString str = \"SpringBoot\";\nSystem.out.println(str.substring(0, 6).length());\n```",
    "code": "String str = \"SpringBoot\";\nSystem.out.println(str.substring(0, 6).length());",
    "options": {
      "A": "6",
      "B": "5",
      "C": "7",
      "D": "IndexOutOfBoundsException"
    },
    "answer": "A",
    "explanation": {
      "correct": "str.substring(0, 6) mengambil karakter dari indeks 0 hingga 5 ('Spring'). Panjang dari string 'Spring' adalah 6.",
      "A": "Benar. Substring indeks 0 sampai 6 eksklusif menghasilkan 'Spring' dengan 6 karakter.",
      "B": "Salah. Indeks 0 sampai 6 mengambil 6 karakter (indeks 0, 1, 2, 3, 4, 5).",
      "C": "Salah. Panjang string adalah 6.",
      "D": "Salah. Indeks 6 valid karena panjang 'SpringBoot' adalah 10."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-002",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output operasi ternary bertingkat berikut?\n\n```java\nint score = 75;\nString result = score >= 80 ? \"A\" : score >= 70 ? \"B\" : \"C\";\nSystem.out.println(result);\n```",
    "code": "int score = 75;\nString result = score >= 80 ? \"A\" : score >= 70 ? \"B\" : \"C\";\nSystem.out.println(result);",
    "options": {
      "A": "B",
      "B": "A",
      "C": "C",
      "D": "Compile Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "score >= 80 bernilai false. Alur berlanjut ke cabang kedua: score >= 70 bernilai true (karena 75 >= 70), sehingga menghasilkan 'B'.",
      "A": "Benar. Kondisi pertama false, dan kondisi kedua true menghasilkan 'B'.",
      "B": "Salah. 75 tidak lebih besar atau sama dengan 80.",
      "C": "Salah. 75 memenuhi kondisi >= 70.",
      "D": "Salah. Operator ternary bersarang adalah sintaks legal di Java."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-003",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output perulangan while dengan post-increment berikut?\n\n```java\nint i = 0;\nwhile (i++ < 3) {\n    System.out.print(i + \" \");\n}\n```",
    "code": "int i = 0;\nwhile (i++ < 3) {\n    System.out.print(i + \" \");\n}",
    "options": {
      "A": "1 2 3 ",
      "B": "0 1 2 ",
      "C": "1 2 3 4 ",
      "D": "0 1 2 3 "
    },
    "answer": "A",
    "explanation": {
      "correct": "Iterasi 1: evaluasi 0 < 3 (true), i jadi 1, print 1. Iterasi 2: evaluasi 1 < 3 (true), i jadi 2, print 2. Iterasi 3: evaluasi 2 < 3 (true), i jadi 3, print 3. Iterasi 4: evaluasi 3 < 3 (false), i jadi 4, loop berhenti.",
      "A": "Benar. Karena i di-increment sebelum badan loop dieksekusi, nilai yang tercetak adalah 1 2 3.",
      "B": "Salah. Post-increment di dalam kondisi menyebabkan nilai i bertambah sebelum System.out.print.",
      "C": "Salah. Loop berhenti saat evaluasi 3 < 3 false.",
      "D": "Salah. Nilai 0 tidak pernah dicetak karena i langsung menjadi 1."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-004",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari perbandingan boolean dan logical AND berikut?\n\n```java\nboolean a = true;\nboolean b = false;\nboolean c = a || (b = true);\nSystem.out.println(c + \" \" + b);\n```",
    "code": "boolean a = true;\nboolean b = false;\nboolean c = a || (b = true);\nSystem.out.println(c + \" \" + b);",
    "options": {
      "A": "true false",
      "B": "true true",
      "C": "false false",
      "D": "false true"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator || adalah short-circuit: jika operan kiri bernilai true, operan kanan tidak dievaluasi sama sekali. Sehingga assignment `b = true` dilewati dan b tetap bernilai false.",
      "A": "Benar. Short-circuit OR mencegah evaluasi sisi kanan sehingga b tetap bernilai false.",
      "B": "Salah. Sisi kanan tidak dieksekusi karena short-circuit evaluation.",
      "C": "Salah. Operan kiri true membuat c bernilai true.",
      "D": "Salah. c bernilai true."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-005",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output pemanggilan method overload tipe primitif vs wrapper?\n\n```java\nclass Test {\n    static void print(int x) { System.out.println(\"int\"); }\n    static void print(Integer x) { System.out.println(\"Integer\"); }\n    public static void main(String[] args) {\n        byte b = 5;\n        print(b);\n    }\n}\n```",
    "code": "class Test {\n    static void print(int x) { System.out.println(\"int\"); }\n    static void print(Integer x) { System.out.println(\"Integer\"); }\n    public static void main(String[] args) {\n        byte b = 5;\n        print(b);\n    }\n}",
    "options": {
      "A": "int",
      "B": "Integer",
      "C": "Compile Error",
      "D": "Byte"
    },
    "answer": "A",
    "explanation": {
      "correct": "Java memprioritaskan widening primitive conversion (byte ke int) sebelum autoboxing (byte ke Byte/Integer). Karena widening ke int tersedia langsung, `print(int)` dipilih.",
      "A": "Benar. Aturan resolusi overload Java mengutamakan widening daripada autoboxing.",
      "B": "Salah. Autoboxing ke wrapper baru dipertimbangkan jika tidak ada widening primitif yang cocok.",
      "C": "Salah. Kode dapat dikompilasi tanpa error.",
      "D": "Salah. Tidak ada method print(Byte) dalam deklarasi class."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-006",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Controller berikut selalu mengembalikan status HTTP 404 saat diakses di '/api/hello'. Mengapa?\n\n```java\n@Controller\npublic class HelloController {\n    @GetMapping(\"/api/hello\")\n    public String hello() {\n        return \"Hello World\";\n    }\n}\n```",
    "code": "@Controller\npublic class HelloController {\n    @GetMapping(\"/api/hello\")\n    public String hello() {\n        return \"Hello World\";\n    }\n}",
    "options": {
      "A": "@Controller menganggap nilai return 'Hello World' sebagai nama view template (JSP/Thymeleaf), bukan REST body",
      "B": "Method controller harus bertipe void",
      "C": "Anotasi @GetMapping tidak valid di Spring Boot",
      "D": "URL path harus diawali dengan http://localhost"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada `@Controller`, string yang dikembalikan dianggap nama view template. Jika tidak ditemukan view resolver yang cocok, akan terjadi 404. Untuk REST API harus menggunakan `@RestController` atau menambahkan `@ResponseBody`.",
      "A": "Benar. @Controller mencari file template view; ganti dengan @RestController agar mereturn raw text/JSON.",
      "B": "Salah. Method REST controller dapat mengembalikan String, DTO, atau ResponseEntity.",
      "C": "Salah. @GetMapping adalah anotasi resmi Spring MVC.",
      "D": "Salah. URL path di mapping adalah URI relatif, bukan absolute URL."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-007",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Method berikut melempar `NullPointerException`. Baris mana yang menjadi sumber masalah?\n\n```java\npublic static int getLength(String str) {\n    if (str.equals(\"\") || str == null) {\n        return 0;\n    }\n    return str.length();\n}\n```",
    "code": "public static int getLength(String str) {\n    if (str.equals(\"\") || str == null) {\n        return 0;\n    }\n    return str.length();\n}",
    "options": {
      "A": "Kondisi `str.equals(\"\")` diperiksa sebelum `str == null`, sehingga jika str null method equals dipanggil pada null reference",
      "B": "str.length() tidak bisa dipanggil pada tipe String",
      "C": "Keyword return 0 dilarang pada method bertipe int",
      "D": "Tipe parameter method harus StringBuffer"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pengecekan null harus dilakukan pertama: `str == null || str.equals(\"\")`. Jika null diperiksa belakangan, `str.equals(\"\")` dieksekusi lebih dulu saat str bernilai null dan langsung melempar NPE.",
      "A": "Benar. Pengecekan null harus berada di depan operator short-circuit ||.",
      "B": "Salah. str.length() adalah method standar String.",
      "C": "Salah. Nilai kembalian 0 sesuai dengan tipe return int.",
      "D": "Salah. Tipe String adalah tipe standar untuk teks di Java."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-008",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Aplikasi Spring Boot gagal start dengan error 'Parameter 0 of constructor required a bean of type UserRepository that could not be found'. Apa penyebabnya?\n\n```java\n// package com.example.app.service;\n@Service\npublic class UserService {\n    private final UserRepository userRepo;\n    public UserService(UserRepository userRepo) { this.userRepo = userRepo; }\n}\n// package com.other.data;\npublic interface UserRepository extends JpaRepository<User, Long> {}\n```",
    "code": "// package com.example.app.service;\n@Service\npublic class UserService {\n    private final UserRepository userRepo;\n    public UserService(UserRepository userRepo) { this.userRepo = userRepo; }\n}\n// package com.other.data;\npublic interface UserRepository extends JpaRepository<User, Long> {}",
    "options": {
      "A": "UserRepository berada di luar package root komponen scan (com.other.data vs com.example.app)",
      "B": "Konstruktor UserService tidak memiliki anotasi @Autowired",
      "C": "UserRepository harus berupa abstract class, bukan interface",
      "D": "Service dilarang memiliki field private final"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default Spring Boot melakukan component scanning pada sub-package di mana main class `@SpringBootApplication` berada (`com.example.app`). Karena `UserRepository` berada di package berbeda (`com.other.data`), bean tersebut tidak ditemukan.",
      "A": "Benar. Package di luar root scan tidak terdeteksi kecuali menggunakan @ComponentScan atau @EnableJpaRepositories.",
      "B": "Salah. Sejak Spring 4.3, single constructor injection tidak lagi mewajibkan anotasi @Autowired.",
      "C": "Salah. Spring Data repository harus berupa interface.",
      "D": "Salah. Constructor injection dengan private final field adalah best practice yang sangat dianjurkan."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-009",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada method controller berikut untuk menerima request body berformat JSON:\n\n```java\n@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(___ User user) {\n    return ResponseEntity.ok(userService.save(user));\n}\n```",
    "code": "@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(___ User user) {\n    return ResponseEntity.ok(userService.save(user));\n}",
    "options": {
      "A": "@RequestBody",
      "B": "@RequestParam",
      "C": "@PathVariable",
      "D": "@ModelAttribute"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@RequestBody` menginstruksikan HttpMessageConverter Spring untuk mendeserialisasi JSON payload dari HTTP request body ke dalam objek User.",
      "A": "Benar. @RequestBody memetakan body request JSON ke parameter method Java.",
      "B": "Salah. @RequestParam digunakan untuk query parameters (contoh: ?name=John).",
      "C": "Salah. @PathVariable digunakan untuk URI path variable (contoh: /users/{id}).",
      "D": "Salah. @ModelAttribute digunakan untuk form-data HTML standar."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-010",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi entitas JPA berikut agar primary key otomatis dibuat secara auto-increment oleh database:\n\n```java\n@Entity\npublic class Customer {\n    @Id\n    @GeneratedValue(strategy = GenerationType.___)\n    private Long id;\n}\n```",
    "code": "@Entity\npublic class Customer {\n    @Id\n    @GeneratedValue(strategy = GenerationType.___)\n    private Long id;\n}",
    "options": {
      "A": "IDENTITY",
      "B": "TABLE",
      "C": "SEQUENCE",
      "D": "AUTO_INCREMENT"
    },
    "answer": "A",
    "explanation": {
      "correct": "GenerationType.IDENTITY mengandalkan kolom identity / auto-increment bawaan database (seperti SERIAL di PostgreSQL atau AUTO_INCREMENT di MySQL).",
      "A": "Benar. GenerationType.IDENTITY cocok untuk kolom auto-increment basis data.",
      "B": "Salah. TABLE menggunakan tabel terpisah penampung ID yang performanya lambat.",
      "C": "Salah. SEQUENCE menggunakan sequence generator database (umum di Oracle/PostgreSQL jika diatur khusus).",
      "D": "Salah. AUTO_INCREMENT bukan enum yang valid di javax.persistence/jakarta.persistence.GenerationType."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-011",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "completion",
    "question": "Lengkapi penanganan exception berikut dengan sintaks multi-catch yang benar:\n\n```java\ntry {\n    processInput();\n} catch (IOException ___ SQLException ex) {\n    logger.error(\"Terjadi error\", ex);\n}\n```",
    "code": "try {\n    processInput();\n} catch (IOException ___ SQLException ex) {\n    logger.error(\"Terjadi error\", ex);\n}",
    "options": {
      "A": "|",
      "B": "||",
      "C": "&",
      "D": "or"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fitur multi-catch di Java (diperkenalkan sejak Java 7) menggunakan operator single vertical bar `|` untuk memisahkan beberapa tipe exception dalam satu blok catch.",
      "A": "Benar. Operator single pipe | adalah sintaks resmi multi-catch Java.",
      "B": "Salah. Operator || adalah logical OR untuk ekspresi boolean, bukan tipe exception.",
      "C": "Salah. Operator & digunakan untuk multiple interface generic bounds, bukan catch block.",
      "D": "Salah. Keyword or tidak ada dalam bahasa pemrograman Java."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-012",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi berikut agar Spring Boot membaca nilai properti dari file application.properties:\n\n```java\n@Component\npublic class AppConfig {\n    ___(\"${app.timeout:5000}\")\n    private int timeout;\n}\n```",
    "code": "@Component\npublic class AppConfig {\n    ___(\"${app.timeout:5000}\")\n    private int timeout;\n}",
    "options": {
      "A": "@Value",
      "B": "@PropertySource",
      "C": "@ConfigurationProperties",
      "D": "@Inject"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Value(\"${...}\")` digunakan untuk meng-inject nilai properti tunggal dari file konfigurasi dengan dukungan default value (setelah tanda titik dua).",
      "A": "Benar. @Value meng-inject konfigurasi application.properties ke field Java.",
      "B": "Salah. @PropertySource diletakkan di level class untuk mendaftarkan file properti eksternal.",
      "C": "Salah. @ConfigurationProperties digunakan di level class untuk binding properti bertingkat.",
      "D": "Salah. @Inject adalah anotasi CDI standar untuk dependency injection objek bean."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-013",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Manakah cara paling tepat dan aman untuk membandingkan dua String di Java?\n\n```java\nString input = getUserInput(); // bisa bernilai null\n// Manakah pengecekan yang paling aman dari NullPointerException?\n```",
    "code": "String input = getUserInput(); // bisa bernilai null\n// Manakah pengecekan yang paling aman dari NullPointerException?",
    "options": {
      "A": "\"ADMIN\".equalsIgnoreCase(input)",
      "B": "input.equalsIgnoreCase(\"ADMIN\")",
      "C": "input == \"ADMIN\"",
      "D": "input.equals(\"ADMIN\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menempatkan string literal konstan di sisi kiri (`\"ADMIN\".equalsIgnoreCase(input)`) adalah best practice ('Yoda conditions') yang menjamin method tidak akan melempar NullPointerException meskipun variabel `input` bernilai null.",
      "A": "Benar. Literal di sebelah kiri melindungi aplikasi dari NullPointerException jika input bernilai null.",
      "B": "Salah. Jika input bernilai null, pemanggilan method pada input melempar NullPointerException.",
      "C": "Salah. Operator == membandingkan referensi memori, bukan kesamaan konten string.",
      "D": "Salah. Pemanggilan equals pada input yang bernilai null akan menyebabkan NullPointerException."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-014",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Manakah cara Dependency Injection yang paling direkomendasikan dalam pengembangan modern Spring Boot?\n\n```java\n// Manakah pendekatan DI yang paling disarankan oleh tim Spring?\n```",
    "code": "// Manakah pendekatan DI yang paling disarankan oleh tim Spring?",
    "options": {
      "A": "Constructor Injection dengan field 'private final'",
      "B": "Field Injection menggunakan @Autowired langsung pada field private",
      "C": "Setter Injection dengan anotasi @Autowired pada setter",
      "D": "Instansiasi manual menggunakan keyword 'new' di dalam controller"
    },
    "answer": "A",
    "explanation": {
      "correct": "Constructor Injection memastikan immutability objek, mencegah NPE karena dependensi wajib diisi saat instansiasi, serta mempermudah penulisan unit test tanpa bantuan framework Spring.",
      "A": "Benar. Constructor Injection dengan field final adalah praktik terbaik yang direkomendasikan Spring.",
      "B": "Salah. Field injection menyulitkan unit test dan menyembunyikan ketergantungan class.",
      "C": "Salah. Setter injection membuat dependensi mutable dan berpotensi null saat method dipanggil.",
      "D": "Salah. Instansiasi manual merusak prinsip Inversion of Control (IoC)."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-015",
    "level": "beginner",
    "topic": "REST API",
    "questionType": "best-practice",
    "question": "HTTP Status Code manakah yang paling tepat dikembalikan oleh REST endpoint POST saat sebuah resource baru berhasil dibuat?\n\n```java\n// Endpoint: POST /api/users\n// Response code manakah yang paling semantik?\n```",
    "code": "// Endpoint: POST /api/users\n// Response code manakah yang paling semantik?",
    "options": {
      "A": "201 Created",
      "B": "200 OK",
      "C": "204 No Content",
      "D": "202 Accepted"
    },
    "answer": "A",
    "explanation": {
      "correct": "Status 201 Created secara spesifik mengindikasikan bahwa request berhasil dan menghasilkan pembuatan resource baru di server (biasanya disertai header Location).",
      "A": "Benar. 201 Created adalah kode semantik standar HTTP untuk pembuatan resource baru.",
      "B": "Salah. 200 OK bersifat umum dan kurang semantik untuk pembuatan resource.",
      "C": "Salah. 204 No Content digunakan saat request sukses tetapi tidak ada konten yang dikembalikan (umum untuk DELETE).",
      "D": "Salah. 202 Accepted digunakan untuk proses asinkron yang belum tentu selesai dibuat."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-016",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi JPA apakah yang digunakan untuk menentukan nama tabel di database yang terhubung dengan entitas?",
    "options": {
      "A": "@Table(name = \"nama_tabel\")",
      "B": "@DatabaseTable(\"nama_tabel\")",
      "C": "@EntityName(\"nama_tabel\")",
      "D": "@MapTable(\"nama_tabel\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Table digunakan bersama @Entity untuk menentukan kustomisasi nama tabel, skema, atau batasan unik di database.",
      "A": "Opsi A benar karena @Table adalah anotasi resmi JPA.",
      "B": "Opsi B salah karena bukan anotasi JPA.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi JPA."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-017",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Method manakah pada CrudRepository yang digunakan untuk memeriksa apakah sebuah entitas dengan ID tertentu ada di database?",
    "options": {
      "A": "existsById(ID id)",
      "B": "checkExists(ID id)",
      "C": "isEntityPresent(ID id)",
      "D": "hasId(ID id)"
    },
    "answer": "A",
    "explanation": {
      "correct": "existsById(id) mengembalikan boolean true jika record dengan ID tersebut ditemukan.",
      "A": "Opsi A benar karena existsById adalah method resmi Spring Data.",
      "B": "Opsi B salah karena bukan method CrudRepository.",
      "C": "Opsi C salah karena bukan method CrudRepository.",
      "D": "Opsi D salah karena bukan method CrudRepository."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-018",
    "level": "beginner",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Anotasi JUnit 5 manakah yang digunakan untuk memberikan nama deskriptif pada test case di laporan pengujian?",
    "options": {
      "A": "@DisplayName(\"Deskripsi Test\")",
      "B": "@TestDescription(\"...\")",
      "C": "@TestName(\"...\")",
      "D": "@Info(\"...\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "@DisplayName mendeklarasikan nama kustom yang lebih mudah dibaca manusia untuk kelas atau method test di test runner.",
      "A": "Opsi A benar karena @DisplayName adalah anotasi resmi JUnit 5.",
      "B": "Opsi B salah karena bukan anotasi JUnit 5.",
      "C": "Opsi C salah karena bukan anotasi JUnit 5.",
      "D": "Opsi D salah karena bukan anotasi JUnit 5."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-019",
    "level": "beginner",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Method apakah di Mockito yang digunakan untuk memprogram perilaku kembalian dari mock object?",
    "options": {
      "A": "when(mock.method()).thenReturn(value)",
      "B": "mock.setReturn(value)",
      "C": "stub(mock).with(value)",
      "D": "given(mock).output(value)"
    },
    "answer": "A",
    "explanation": {
      "correct": "when(...).thenReturn(...) adalah sintaks fluent API standar Mockito untuk stubbing pemanggilan method.",
      "A": "Opsi A benar karena merupakan sintaks standar Mockito.",
      "B": "Opsi B salah karena bukan method Mockito.",
      "C": "Opsi C salah karena bukan sintaks Mockito.",
      "D": "Opsi D salah karena sintaks BDDMockito adalah given(...).willReturn(...)."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-020",
    "level": "beginner",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Prinsip apakah yang menganjurkan agar kode program ditulis secara sederhana dan tidak berbelit-belit?",
    "options": {
      "A": "KISS (Keep It Simple, Stupid)",
      "B": "DRY",
      "C": "SOLID",
      "D": "ACID"
    },
    "answer": "A",
    "explanation": {
      "correct": "KISS menekankan bahwa kesederhanaan adalah kunci desain software dan kompleksitas yang tidak perlu harus dihindari.",
      "A": "Opsi A benar karena mendefinisikan prinsip KISS.",
      "B": "Opsi B salah karena DRY tentang menghindari duplikasi.",
      "C": "Opsi C salah karena SOLID adalah kumpulan 5 prinsip OOP.",
      "D": "Opsi D salah karena ACID adalah prinsip transaksi database."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-021",
    "level": "beginner",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Perintah SQL apakah yang digunakan untuk memperbarui data yang sudah ada di tabel?",
    "options": {
      "A": "UPDATE tabel SET kolom = nilai WHERE ...",
      "B": "MODIFY tabel SET ...",
      "C": "CHANGE tabel ...",
      "D": "ALTER tabel DATA ..."
    },
    "answer": "A",
    "explanation": {
      "correct": "UPDATE adalah perintah resmi DML SQL untuk memodifikasi nilai kolom pada baris yang sudah ada.",
      "A": "Opsi A benar karena UPDATE adalah sintaks standar SQL.",
      "B": "Opsi B salah karena MODIFY digunakan pada ALTER TABLE untuk skema.",
      "C": "Opsi C salah karena CHANGE digunakan untuk nama kolom pada DDL.",
      "D": "Opsi D salah karena bukan sintaks DML SQL."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-022",
    "level": "beginner",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Perintah SQL apakah yang digunakan untuk menghapus baris dari tabel?",
    "options": {
      "A": "DELETE FROM tabel WHERE ...",
      "B": "REMOVE FROM tabel ...",
      "C": "ERASE FROM tabel ...",
      "D": "DROP TABLE ROWS ..."
    },
    "answer": "A",
    "explanation": {
      "correct": "DELETE FROM digunakan untuk menghapus baris data berdasarkan kriteria WHERE.",
      "A": "Opsi A benar karena DELETE FROM adalah perintah resmi SQL.",
      "B": "Opsi B salah karena REMOVE bukan perintah SQL.",
      "C": "Opsi C salah karena ERASE bukan perintah SQL.",
      "D": "Opsi D salah karena DROP menghapus seluruh tabel beserta strukturnya."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-023",
    "level": "beginner",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Header HTTP apakah yang umum digunakan untuk membawa token JWT pada setiap request ke server terproteksi?",
    "options": {
      "A": "Authorization: Bearer <token>",
      "B": "Token-Access: <token>",
      "C": "Security-Key: <token>",
      "D": "Authentication: <token>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai RFC 6750, Bearer token dikirimkan melalui header standar 'Authorization' dengan skema 'Bearer '.",
      "A": "Opsi A benar karena Authorization Bearer adalah standar resmi HTTP token authentication.",
      "B": "Opsi B salah karena bukan header standar.",
      "C": "Opsi C salah karena bukan header standar.",
      "D": "Opsi D salah karena nama headernya adalah Authorization, bukan Authentication."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-024",
    "level": "beginner",
    "topic": "Design Patterns",
    "questionType": "concept",
    "question": "Design pattern apakah yang mendefinisikan hubungan dependensi satu-ke-banyak antara objek sehingga jika satu objek berubah, objek lainnya otomatis diberitahu?",
    "options": {
      "A": "Observer Pattern",
      "B": "Singleton Pattern",
      "C": "Adapter Pattern",
      "D": "Prototype Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Observer pattern memungkinkan banyak subscriber (observer) menerima notifikasi otomatis saat publisher (subject) mengalami perubahan state.",
      "A": "Opsi A benar karena mendefinisikan Observer pattern.",
      "B": "Opsi B salah karena Singleton memastikan satu objek tunggal.",
      "C": "Opsi C salah karena Adapter menghubungkan interface yang tidak cocok.",
      "D": "Opsi D salah karena Prototype menduplikasi objek."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-025",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Perintah Git manakah yang digunakan untuk membuat branch baru dan langsung berpindah ke branch tersebut?",
    "options": {
      "A": "git checkout -b <nama-branch>",
      "B": "git branch -new <nama-branch>",
      "C": "git switch -create-all",
      "D": "git commit -b"
    },
    "answer": "A",
    "explanation": {
      "correct": "'git checkout -b' (atau 'git switch -c') membuat branch baru sekaligus berpindah ke branch tersebut.",
      "A": "Opsi A benar karena git checkout -b adalah perintah resmi pembuatan dan checkout branch.",
      "B": "Opsi B salah karena opsi -new tidak valid.",
      "C": "Opsi C salah karena bukan opsi standar switch.",
      "D": "Opsi D salah karena git commit untuk merekam perubahan ke repositori."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-026",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Perintah Git manakah yang digunakan untuk melihat status file yang telah dimodifikasi, staged, atau untracked?",
    "options": {
      "A": "git status",
      "B": "git check",
      "C": "git info",
      "D": "git state"
    },
    "answer": "A",
    "explanation": {
      "correct": "'git status' menampilkan kondisi working directory dan staging area.",
      "A": "Opsi A benar karena git status adalah perintah resmi pengecekan status kerja.",
      "B": "Opsi B salah karena bukan perintah Git.",
      "C": "Opsi C salah karena bukan perintah Git.",
      "D": "Opsi D salah karena bukan perintah Git."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-027",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Apa nilai default dari variabel bertipe objek (reference type) di Java ketika belum diinisialisasi sebagai field kelas?",
    "options": {
      "A": "null",
      "B": "0",
      "C": "empty",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "Semua variabel referensi objek di Java yang dideklarasikan sebagai field kelas otomatis bernilai null secara default.",
      "A": "Opsi A benar karena null adalah nilai default referensi objek.",
      "B": "Opsi B salah karena 0 adalah default untuk tipe primitif numerik.",
      "C": "Opsi C salah karena empty bukan keyword di Java.",
      "D": "Opsi D salah karena undefined adalah konsep JavaScript, bukan Java."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-028",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Method apakah yang digunakan untuk membandingkan kesetaraan isi dua objek secara logika di Java?",
    "options": {
      "A": "equals(Object obj)",
      "B": "compareTo()",
      "C": "==",
      "D": "isSame()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method .equals(Object obj) dari java.lang.Object digunakan untuk memeriksa kesetaraan nilai semantik dari dua objek.",
      "A": "Opsi A benar karena equals adalah method standar perbandingan konten objek.",
      "B": "Opsi B salah karena compareTo digunakan untuk menentukan urutan perbandingan (lebih besar/kecil).",
      "C": "Opsi C salah karena operator == membandingkan kesamaan referensi memori.",
      "D": "Opsi D salah karena bukan method standar Object."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-029",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menandai method konfigurasi yang dijalankan tepat satu kali setelah dependency injection selesai diinisialisasi?",
    "options": {
      "A": "@PostConstruct",
      "B": "@PreDestroy",
      "C": "@AfterInit",
      "D": "@StartMethod"
    },
    "answer": "A",
    "explanation": {
      "correct": "@PostConstruct (dari jakarta.annotation) menandai method yang harus dijalankan tepat setelah semua dependensi bean diinjeksi oleh Spring container.",
      "A": "Opsi A benar karena @PostConstruct adalah anotasi inisialisasi resmi.",
      "B": "Opsi B salah karena @PreDestroy dijalankan saat bean akan dihancurkan.",
      "C": "Opsi C salah karena bukan anotasi standar.",
      "D": "Opsi D salah karena bukan anotasi standar."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-030",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "HTTP Status Code manakah yang menandakan bahwa URL endpoint yang diminta klien tidak ditemukan di server?",
    "options": {
      "A": "404 Not Found",
      "B": "400 Bad Request",
      "C": "403 Forbidden",
      "D": "502 Bad Gateway"
    },
    "answer": "A",
    "explanation": {
      "correct": "Status 404 Not Found menunjukkan server tidak dapat menemukan resource yang diminta oleh URL target.",
      "A": "Opsi A benar karena 404 adalah status standar resource tidak ditemukan.",
      "B": "Opsi B salah karena 400 adalah bad request.",
      "C": "Opsi C salah karena 403 adalah hak akses ditolak.",
      "D": "Opsi D salah karena 502 adalah kegagalan proxy gateway."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-031",
    "level": "intermediate",
    "topic": "Java Streams",
    "questionType": "output",
    "question": "Apa output operasi Stream filter dan mapToInt berikut?\n\n```java\nList<String> list = Arrays.asList(\"1\", \"2\", \"3\", \"4\", \"5\");\nint sum = list.stream()\n    .mapToInt(Integer::parseInt)\n    .filter(n -> n % 2 == 0)\n    .sum();\nSystem.out.println(sum);\n```",
    "code": "List<String> list = Arrays.asList(\"1\", \"2\", \"3\", \"4\", \"5\");\nint sum = list.stream()\n    .mapToInt(Integer::parseInt)\n    .filter(n -> n % 2 == 0)\n    .sum();\nSystem.out.println(sum);",
    "options": {
      "A": "6",
      "B": "9",
      "C": "15",
      "D": "4"
    },
    "answer": "A",
    "explanation": {
      "correct": "List di-parse menjadi int: [1, 2, 3, 4, 5]. Filter memilih bilangan genap: [2, 4]. Operasi .sum() menjumlahkannya: 2 + 4 = 6.",
      "A": "Benar. Bilangan genap dalam list adalah 2 dan 4, dengan jumlah total 6.",
      "B": "Salah. 9 adalah jumlah bilangan ganjil (1 + 3 + 5).",
      "C": "Salah. 15 adalah jumlah seluruh angka tanpa filter.",
      "D": "Salah. 4 adalah elemen genap terbesar, bukan jumlah totalnya."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-032",
    "level": "intermediate",
    "topic": "Java Collections",
    "questionType": "output",
    "question": "Apa output dari perulangan Map menggunakan forEach lambda berikut?\n\n```java\nMap<String, Integer> map = new LinkedHashMap<>();\nmap.put(\"A\", 1);\nmap.put(\"B\", 2);\nmap.computeIfPresent(\"A\", (k, v) -> v + 10);\nmap.computeIfAbsent(\"C\", k -> 30);\nSystem.out.println(map.get(\"A\") + \" \" + map.get(\"C\"));\n```",
    "code": "Map<String, Integer> map = new LinkedHashMap<>();\nmap.put(\"A\", 1);\nmap.put(\"B\", 2);\nmap.computeIfPresent(\"A\", (k, v) -> v + 10);\nmap.computeIfAbsent(\"C\", k -> 30);\nSystem.out.println(map.get(\"A\") + \" \" + map.get(\"C\"));",
    "options": {
      "A": "11 30",
      "B": "1 30",
      "C": "11 null",
      "D": "1 null"
    },
    "answer": "A",
    "explanation": {
      "correct": "computeIfPresent untuk key 'A' mengevaluasi lambda: 1 + 10 = 11. computeIfAbsent untuk key 'C' (yang belum ada) memasukkan nilai 30. Output: 11 30.",
      "A": "Benar. Key 'A' diupdate menjadi 11 dan key 'C' disisipkan bernilai 30.",
      "B": "Salah. computeIfPresent berhasil memodifikasi key 'A' yang sudah ada.",
      "C": "Salah. Key 'C' berhasil disisipkan oleh computeIfAbsent.",
      "D": "Salah. Kedua key diproses dan diisi dengan sukses."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-033",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output eksekusi method polymorphism berikut?\n\n```java\nclass Base {\n    String name = \"Base\";\n    void show() { System.out.print(name + \" \"); }\n}\nclass Sub extends Base {\n    String name = \"Sub\";\n    void show() { System.out.print(name + \" \"); }\n}\n// di main:\nBase obj = new Sub();\nSystem.out.print(obj.name + \" \");\nobj.show();\n```",
    "code": "class Base {\n    String name = \"Base\";\n    void show() { System.out.print(name + \" \"); }\n}\nclass Sub extends Base {\n    String name = \"Sub\";\n    void show() { System.out.print(name + \" \"); }\n}\n// di main:\nBase obj = new Sub();\nSystem.out.print(obj.name + \" \");\nobj.show();",
    "options": {
      "A": "Base Sub ",
      "B": "Sub Sub ",
      "C": "Base Base ",
      "D": "Sub Base "
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Java, field/atribut TIDAK bersifat polimorfik (tidak di-override melainkan di-hide). Akses `obj.name` diselesaikan pada waktu kompilasi berdasarkan tipe referensi (Base -> 'Base'). Sedangkan method call `obj.show()` bersifat polimorfik (runtime dispatch -> Sub -> 'Sub').",
      "A": "Benar. Akses field ditentukan oleh tipe referensi (Base), sedangkan pemanggilan method ditentukan oleh objek runtime (Sub).",
      "B": "Salah. Variabel tidak di-override sehingga obj.name tetap membaca field milik Base.",
      "C": "Salah. Method show() di-override oleh class Sub.",
      "D": "Salah. Field dan method tidak terbalik."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-034",
    "level": "intermediate",
    "topic": "Java Core Exception",
    "questionType": "output",
    "question": "Apa output dari blok try-catch-finally berikut?\n\n```java\npublic static int test() {\n    try {\n        int x = 10 / 0;\n        return 1;\n    } catch (Exception e) {\n        return 2;\n    } finally {\n        return 3;\n    }\n}\n// System.out.println(test());\n```",
    "code": "public static int test() {\n    try {\n        int x = 10 / 0;\n        return 1;\n    } catch (Exception e) {\n        return 2;\n    } finally {\n        return 3;\n    }\n}\n// System.out.println(test());",
    "options": {
      "A": "3",
      "B": "2",
      "C": "1",
      "D": "ArithmeticException"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pernyataan `return 3` di dalam blok `finally` menimpa (override) semua nilai kembalian atau exception yang dilempar dari blok try atau catch sebelumnya. Nilai yang dikembalikan adalah 3.",
      "A": "Benar. Return di blok finally selalu mengeksekusi terakhir dan menimpa return sebelumnya.",
      "B": "Salah. Return 2 di catch block ditimpa oleh return di finally block.",
      "C": "Salah. Eksekusi di blok try melempar exception sebelum mencapai return 1.",
      "D": "Salah. ArithmeticException berhasil ditangkap oleh catch block."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-035",
    "level": "intermediate",
    "topic": "Java Collections",
    "questionType": "output",
    "question": "Apa output pemanggilan flatMap pada List of List berikut?\n\n```java\nList<List<String>> nested = Arrays.asList(\n    Arrays.asList(\"Java\", \"Kotlin\"),\n    Arrays.asList(\"Go\", \"Rust\")\n);\nlong count = nested.stream()\n    .flatMap(Collection::stream)\n    .filter(s -> s.length() <= 4)\n    .count();\nSystem.out.println(count);\n```",
    "code": "List<List<String>> nested = Arrays.asList(\n    Arrays.asList(\"Java\", \"Kotlin\"),\n    Arrays.asList(\"Go\", \"Rust\")\n);\nlong count = nested.stream()\n    .flatMap(Collection::stream)\n    .filter(s -> s.length() <= 4)\n    .count();\nSystem.out.println(count);",
    "options": {
      "A": "3",
      "B": "2",
      "C": "4",
      "D": "1"
    },
    "answer": "A",
    "explanation": {
      "correct": "flatMap meratakan struktur list menjadi stream tunggal: ['Java', 'Kotlin', 'Go', 'Rust']. Panjang masing-masing: Java (4), Kotlin (6), Go (2), Rust (4). Elemen dengan length <= 4 adalah Java, Go, Rust (total 3).",
      "A": "Benar. 'Java', 'Go', dan 'Rust' memiliki panjang <= 4 karakter.",
      "B": "Salah. Terdapat 3 kata yang memenuhi kriteria, bukan 2.",
      "C": "Salah. 'Kotlin' memiliki panjang 6 karakter sehingga disaring keluar.",
      "D": "Salah. Tiga elemen memenuhi syarat filter."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-036",
    "level": "intermediate",
    "topic": "Spring Boot Profiling",
    "questionType": "output",
    "question": "Jika file application.properties memiliki properti `server.port=8080` dan application-dev.properties memiliki `server.port=8081`, port berapa yang aktif saat dijalankan dengan flag `-Dspring.profiles.active=dev`?\n\n```java\n// Perintah run: java -jar app.jar -Dspring.profiles.active=dev\n```",
    "code": "// Perintah run: java -jar app.jar -Dspring.profiles.active=dev",
    "options": {
      "A": "8081",
      "B": "8080",
      "C": "8082",
      "D": "Aplikasi gagal start karena duplikasi port"
    },
    "answer": "A",
    "explanation": {
      "correct": "Properti konfigurasi profile-spesifik (`application-{profile}.properties`) memiliki prioritas pemuatan lebih tinggi daripada file konfigurasi umum (`application.properties`), sehingga port 8081 menimpa 8080.",
      "A": "Benar. Profile dev aktif dan menimpa konfigurasi default menjadi port 8081.",
      "B": "Salah. Nilai default 8080 ditimpa oleh konfigurasi profile aktif.",
      "C": "Salah. Nilai 8082 tidak ada di file mana pun.",
      "D": "Salah. Spring Boot secara elegan menggabungkan dan menimpa properti tanpa error."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-037",
    "level": "intermediate",
    "topic": "Java Optional",
    "questionType": "output",
    "question": "Apa output pemanggilan orElse vs orElseGet pada Optional berikut?\n\n```java\npublic static String getDefault() {\n    System.out.print(\"Call \");\n    return \"Default\";\n}\n// di main:\nOptional<String> opt = Optional.of(\"Value\");\nString res = opt.orElse(getDefault());\nSystem.out.println(res);\n```",
    "code": "public static String getDefault() {\n    System.out.print(\"Call \");\n    return \"Default\";\n}\n// di main:\nOptional<String> opt = Optional.of(\"Value\");\nString res = opt.orElse(getDefault());\nSystem.out.println(res);",
    "options": {
      "A": "Call Value",
      "B": "Value",
      "C": "Call Default",
      "D": "Default"
    },
    "answer": "A",
    "explanation": {
      "correct": "`orElse(T other)` selalu mengevaluasi argumennya (`getDefault()`) tanpa peduli apakah Optional ada isinya atau kosong. Namun karena Optional berisi 'Value', nilai akhir `res` tetap 'Value'. Sehingga tercetak 'Call Value'.",
      "A": "Benar. Argumen orElse dievaluasi secara eager sehingga mencetak 'Call ' dan mengembalikan 'Value'.",
      "B": "Salah. orElseGet yang mengevaluasi secara lazy; orElse selalu mengevaluasi method argumennya.",
      "C": "Salah. Nilai Optional ada ('Value'), jadi bukan 'Default' yang dikembalikan.",
      "D": "Salah. Nilai 'Value' ada di dalam Optional sehingga res berisi 'Value'."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-038",
    "level": "intermediate",
    "topic": "Spring Boot Bean",
    "questionType": "debug",
    "question": "Kode berikut menyebabkan `NoSuchBeanDefinitionException` pada controller. Apa penyebabnya?\n\n```java\npublic class NotificationService {\n    public void send(String msg) { /* send */ }\n}\n// Controller:\n@RestController\npublic class AlertController {\n    @Autowired\n    private NotificationService notifService;\n}\n```",
    "code": "public class NotificationService {\n    public void send(String msg) { /* send */ }\n}\n// Controller:\n@RestController\npublic class AlertController {\n    @Autowired\n    private NotificationService notifService;\n}",
    "options": {
      "A": "NotificationService tidak dianotasi dengan @Service atau @Component sehingga tidak didaftarkan sebagai Spring Bean",
      "B": "AlertController harus bertipe interface",
      "C": "NotificationService harus memiliki method static",
      "D": "Anotasi @Autowired dilarang digunakan di controller"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Container hanya mengelola class yang ditandai dengan stereotype annotation (`@Component`, `@Service`, `@Repository`, dll.) atau dideklarasikan via `@Bean`. Tanpa anotasi tersebut, NotificationService bukan merupakan managed bean.",
      "A": "Benar. NotificationService belum didaftarkan sebagai bean di Spring ApplicationContext.",
      "B": "Salah. Controller Spring adalah class konkret biasa.",
      "C": "Salah. Bean Spring adalah instance reguler yang dikelola framework, bukan static.",
      "D": "Salah. @Autowired sah digunakan meskipun constructor injection lebih direkomendasikan."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-039",
    "level": "intermediate",
    "topic": "JPA Entity",
    "questionType": "debug",
    "question": "Relasi bidirectional JPA berikut memicu `StackOverflowError` saat di-serialize menjadi JSON oleh Jackson. Apa solusinya?\n\n```java\n@Entity\npublic class Department {\n    @OneToMany(mappedBy = \"dept\")\n    private List<Employee> employees;\n}\n@Entity\npublic class Employee {\n    @ManyToOne\n    private Department dept;\n}\n```",
    "code": "@Entity\npublic class Department {\n    @OneToMany(mappedBy = \"dept\")\n    private List<Employee> employees;\n}\n@Entity\npublic class Employee {\n    @ManyToOne\n    private Department dept;\n}",
    "options": {
      "A": "Menambahkan anotasi @JsonManagedReference pada parent dan @JsonBackReference pada child (atau @JsonIgnore)",
      "B": "Menghapus @OneToMany dari class Department",
      "C": "Mengganti tipe List menjadi Set",
      "D": "Menghapus semua getter dan setter"
    },
    "answer": "A",
    "explanation": {
      "correct": "Siklus referensi dua arah (Department -> Employee -> Department -> ...) menyebabkan Jackson melakukan loop rekursif tanpa henti saat serialisasi JSON. `@JsonManagedReference` dan `@JsonBackReference` memutus siklus ini.",
      "A": "Benar. @JsonManagedReference dan @JsonBackReference memutus circular serialization Jackson.",
      "B": "Salah. Menghapus @OneToMany merusak relasi model domain di JPA.",
      "C": "Salah. Set tidak mencegah Jackson mengiterasi referensi objek timbal balik.",
      "D": "Salah. Menghapus getter menyebabkan Jackson tidak bisa membaca field untuk diserialisasi."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-040",
    "level": "intermediate",
    "topic": "Spring Transaction",
    "questionType": "debug",
    "question": "Mengapa data tidak tersimpan saat method helper dipanggil dari method lain di class yang sama?\n\n```java\n@Service\npublic class PaymentService {\n    public void checkout() {\n        saveTransaction(); // pemanggilan lokal internal\n    }\n    @Transactional\n    public void saveTransaction() {\n        repo.save(new Tx());\n    }\n}\n```",
    "code": "@Service\npublic class PaymentService {\n    public void checkout() {\n        saveTransaction(); // pemanggilan lokal internal\n    }\n    @Transactional\n    public void saveTransaction() {\n        repo.save(new Tx());\n    }\n}",
    "options": {
      "A": "Pemanggilan lokal internal mem-bypass Spring AOP Proxy sehingga anotasi @Transactional tidak aktif",
      "B": "Nama method saveTransaction melanggar konvensi Java",
      "C": "Method checkout harus melempar SQLException",
      "D": "repo.save() dilarang berada di dalam method dengan @Transactional"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring AOP bekerja membungkus bean dengan proxy objek. Jika method dipanggil dari dalam bean itu sendiri (`this.saveTransaction()`), panggilan tidak melalui proxy, sehingga interceptor transaksi tidak pernah dieksekusi.",
      "A": "Benar. Self-invocation melewati Spring proxy sehingga aspek transaksional tidak berfungsi.",
      "B": "Salah. Nama method sepenuhnya legal dan deskriptif.",
      "C": "Salah. Method tidak diwajibkan melempar checked exception.",
      "D": "Salah. repo.save() sangat lazim dijalankan dalam konteks @Transactional."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-041",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut menghasilkan `ConcurrentModificationException`. Mengapa?\n\n```java\nList<String> list = new ArrayList<>(Arrays.asList(\"A\", \"B\", \"C\"));\nfor (String item : list) {\n    if (item.equals(\"B\")) {\n        list.remove(item);\n    }\n}\n```",
    "code": "List<String> list = new ArrayList<>(Arrays.asList(\"A\", \"B\", \"C\"));\nfor (String item : list) {\n    if (item.equals(\"B\")) {\n        list.remove(item);\n    }\n}",
    "options": {
      "A": "Modifikasi struktur list secara langsung di dalam enhanced for-loop tanpa menggunakan Iterator.remove()",
      "B": "Tipe data ArrayList tidak mendukung method remove()",
      "C": "Pencarian elemen menggunakan .equals() dilarang dalam for loop",
      "D": "List harus diurutkan terlebih dahulu dengan Collections.sort()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Enhanced for-loop menggunakan Iterator di balik layar. Memanggil `list.remove()` langsung memodifikasi modCount list, menyebabkan Iterator mendeteksi ketidakcocokan saat iterasi berikutnya dan melempar `ConcurrentModificationException`.",
      "A": "Benar. Penghapusan elemen saat iterasi harus menggunakan Iterator.remove() atau list.removeIf().",
      "B": "Salah. ArrayList memiliki method remove() yang sah.",
      "C": "Salah. .equals() adalah cara yang benar untuk membandingkan string.",
      "D": "Salah. Pengurutan tidak berpengaruh pada perilaku modifikasi struktural Iterator."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-042",
    "level": "intermediate",
    "topic": "Spring Validation",
    "questionType": "debug",
    "question": "Anotasi `@Valid` pada parameter controller berikut tidak menjalankan validasi data pada UserDto. Apa penyebabnya?\n\n```java\n@PostMapping(\"/register\")\npublic ResponseEntity<?> register(UserDto dto) {\n    return ResponseEntity.ok(service.register(dto));\n}\n```",
    "code": "@PostMapping(\"/register\")\npublic ResponseEntity<?> register(UserDto dto) {\n    return ResponseEntity.ok(service.register(dto));\n}",
    "options": {
      "A": "Parameter kekurangan anotasi @Valid (atau @Validated) dan @RequestBody",
      "B": "UserDto harus mengimplementasikan interface Serializable",
      "C": "Return type harus bertipe String",
      "D": "Nama package DTO harus berakhiran .validator"
    },
    "answer": "A",
    "explanation": {
      "correct": "Untuk memicu validasi Spring Validator/Hibernate Validator pada endpoint REST, parameter harus dianotasi dengan `@Valid` (atau `@Validated`) DAN `@RequestBody` agar payload JSON dibaca dan divalidasi sebelum masuk ke body method.",
      "A": "Benar. Anotasi @Valid dan @RequestBody diperlukan untuk memproses validasi payload masuk.",
      "B": "Salah. Validasi Bean Validation tidak memerlukan interface Serializable.",
      "C": "Salah. ResponseEntity<?> adalah tipe kembalian REST yang sangat fleksibel dan valid.",
      "D": "Salah. Nama package tidak memengaruhi mekanisme Bean Validation."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-043",
    "level": "intermediate",
    "topic": "Spring Boot Exception",
    "questionType": "completion",
    "question": "Lengkapi anotasi class handler berikut agar menangani exception secara global di seluruh REST controller:\n\n```java\n___(basePackages = \"com.example.controller\")\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<?> handleNotFound(ResourceNotFoundException ex) {\n        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());\n    }\n}\n```",
    "code": "___(basePackages = \"com.example.controller\")\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<?> handleNotFound(ResourceNotFoundException ex) {\n        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());\n    }\n}",
    "options": {
      "A": "@RestControllerAdvice",
      "B": "@Controller",
      "C": "@Service",
      "D": "@RepositoryAdvice"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@RestControllerAdvice` menggabungkan fungsionalitas `@ControllerAdvice` dan `@ResponseBody`, memungkinkan method-method `@ExceptionHandler` di dalamnya otomatis mengembalikan format JSON ke response body.",
      "A": "Benar. @RestControllerAdvice adalah komponen sentral penanganan exception REST global di Spring Boot.",
      "B": "Salah. @Controller menandai bean MVC biasa penampil halaman web.",
      "C": "Salah. @Service menandai business logic layer.",
      "D": "Salah. @RepositoryAdvice bukan anotasi resmi Spring Framework."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-044",
    "level": "intermediate",
    "topic": "JPA Repository",
    "questionType": "completion",
    "question": "Lengkapi method Spring Data JPA berikut untuk mencari semua produk yang harganya kurang dari nilai parameter dan diurutkan dari yang termurah:\n\n```java\npublic interface ProductRepository extends JpaRepository<Product, Long> {\n    List<Product> findByPrice___OrderByPriceAsc(Double maxPrice);\n}\n```",
    "code": "public interface ProductRepository extends JpaRepository<Product, Long> {\n    List<Product> findByPrice___OrderByPriceAsc(Double maxPrice);\n}",
    "options": {
      "A": "LessThan",
      "B": "Under",
      "C": "Below",
      "D": "Smaller"
    },
    "answer": "A",
    "explanation": {
      "correct": "Keyword resmi query derivation Spring Data JPA untuk perbandingan nilai lebih kecil adalah `LessThan` (atau `LessThanEqual`). Keyword seperti 'Under', 'Below', atau 'Smaller' tidak dikenali oleh parser JPA repository.",
      "A": "Benar. Keyword LessThan menghasilkan klausa SQL 'WHERE price < ?'.",
      "B": "Salah. Under bukan keyword query derivation Spring Data.",
      "C": "Salah. Below bukan keyword query derivation Spring Data.",
      "D": "Salah. Smaller bukan keyword query derivation Spring Data."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-045",
    "level": "intermediate",
    "topic": "Java Stream Collector",
    "questionType": "completion",
    "question": "Lengkapi pengelompokan (grouping) daftar karyawan berdasarkan departemen berikut:\n\n```java\nList<Employee> list = getEmployees();\nMap<String, List<Employee>> byDept = list.stream()\n    .collect(Collectors.___(Employee::getDepartment));\n```",
    "code": "List<Employee> list = getEmployees();\nMap<String, List<Employee>> byDept = list.stream()\n    .collect(Collectors.___(Employee::getDepartment));",
    "options": {
      "A": "groupingBy",
      "B": "partitioningBy",
      "C": "toMap",
      "D": "summarizing"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Collectors.groupingBy(classifier)` mengelompokkan elemen stream ke dalam Map berdasarkan hasil fungsi classifier (dalam hal ini `Employee::getDepartment`).",
      "A": "Benar. Collectors.groupingBy adalah method standar Java Stream untuk grouping.",
      "B": "Salah. partitioningBy menerima Predicate (boolean) dan hanya membagi data menjadi dua kelompok (true/false).",
      "C": "Salah. toMap memetakan key ke single value, bukan List of values.",
      "D": "Salah. summarizing menghitung ringkasan statistik numerik (count, sum, min, max, avg)."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-046",
    "level": "intermediate",
    "topic": "Spring Boot Testing",
    "questionType": "completion",
    "question": "Lengkapi anotasi testing berikut untuk melakukan slice test khusus Web Layer (Spring MVC) tanpa memuat seluruh Spring context:\n\n```java\n___(controllers = UserController.class)\nclass UserControllerTest {\n    @Autowired\n    private MockMvc mockMvc;\n    @MockBean\n    private UserService userService;\n}\n```",
    "code": "___(controllers = UserController.class)\nclass UserControllerTest {\n    @Autowired\n    private MockMvc mockMvc;\n    @MockBean\n    private UserService userService;\n}",
    "options": {
      "A": "@WebMvcTest",
      "B": "@SpringBootTest",
      "C": "@DataJpaTest",
      "D": "@RestClientTest"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@WebMvcTest` adalah anotasi slice test di Spring Boot yang hanya memuat komponen web (Controller, Filter, Advice) dan otomatis mengonfigurasi `MockMvc`, membuat eksekusi unit test sangat cepat dan terisolasi.",
      "A": "Benar. @WebMvcTest mengisolasi pengujian controller dengan MockMvc.",
      "B": "Salah. @SpringBootTest memuat seluruh full application context yang berat dan lambat.",
      "C": "Salah. @DataJpaTest hanya menguji database layer dan entity repository.",
      "D": "Salah. @RestClientTest digunakan untuk menguji klien HTTP REST seperti RestTemplate."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-047",
    "level": "intermediate",
    "topic": "Spring Boot Config",
    "questionType": "completion",
    "question": "Lengkapi baris berikut untuk mengikat konfigurasi berawalan 'app.mail' ke dalam class Java yang terstruktur:\n\n```java\n@Component\n___(prefix = \"app.mail\")\npublic class MailProperties {\n    private String host;\n    private int port;\n    // getter & setter\n}\n```",
    "code": "@Component\n___(prefix = \"app.mail\")\npublic class MailProperties {\n    private String host;\n    private int port;\n    // getter & setter\n}",
    "options": {
      "A": "@ConfigurationProperties",
      "B": "@EnableConfigurationProperties",
      "C": "@PropertySource",
      "D": "@ValueMap"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@ConfigurationProperties(prefix = \"...\")` menyediakan type-safe binding hierarkis dari file properti/yaml ke field-field class Java secara otomatis.",
      "A": "Benar. @ConfigurationProperties memetakan grup properti ke atribut class POJO.",
      "B": "Salah. @EnableConfigurationProperties digunakan di class konfigurasi untuk mengaktifkan class properties.",
      "C": "Salah. @PropertySource mendaftarkan file external properti, bukan melakukan prefix binding ke field.",
      "D": "Salah. @ValueMap bukan anotasi yang valid di ekosistem Spring."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-048",
    "level": "intermediate",
    "topic": "JPA Performance",
    "questionType": "best-practice",
    "question": "Pendekatan manakah yang paling direkomendasikan untuk menghindari N+1 query problem pada Spring Data JPA?\n\n```java\n// Kasus: Mengambil list Order beserta data Customer tanpa puluhan query terpisah.\n```",
    "code": "// Kasus: Mengambil list Order beserta data Customer tanpa puluhan query terpisah.",
    "options": {
      "A": "Menggunakan @EntityGraph atau JPQL 'JOIN FETCH'",
      "B": "Mengubah relasi menjadi EAGER fetching di level deklarasi entitas",
      "C": "Melakukan loop dan memanggil customerRepository.findById() satu per satu",
      "D": "Memperbesar ukuran database connection pool di application.properties"
    },
    "answer": "A",
    "explanation": {
      "correct": "Penggunaan `@EntityGraph` atau `JOIN FETCH` mengambil entitas terkait dalam satu query SQL terintegrasi (JOIN) secara dinamis tanpa memaksa seluruh query lain selalu memuat relasi tersebut.",
      "A": "Benar. EntityGraph dan JOIN FETCH mengatasi N+1 secara terukur pada query yang membutuhkannya.",
      "B": "Salah. Global EAGER fetching adalah anti-pattern yang selalu memuat relasi dan merusak performa query lain.",
      "C": "Salah. Loop manual justru merupakan perwujudan dari masalah N+1 query.",
      "D": "Salah. Memperbesar connection pool tidak memperbaiki query SQL yang tidak efisien."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-049",
    "level": "intermediate",
    "topic": "REST API Design",
    "questionType": "best-practice",
    "question": "Manakah konvensi penamaan URI RESTful API yang paling sesuai dengan standar industri?\n\n```java\n// Manakah endpoint yang paling tepat untuk mengambil daftar pesanan milik pengguna dengan ID 10?\n```",
    "code": "// Manakah endpoint yang paling tepat untuk mengambil daftar pesanan milik pengguna dengan ID 10?",
    "options": {
      "A": "GET /api/v1/users/10/orders",
      "B": "GET /api/v1/getOrdersForUser?userId=10",
      "C": "POST /api/v1/orders/view/user/10",
      "D": "GET /api/v1/user_orders_fetch/10"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar RESTful menggunakan kata benda jamak (nouns), hierarki relasi sumber daya (/users/{id}/orders), huruf kecil, dan memanfaatkan kata kerja HTTP (GET) daripada menyematkan kata kerja dalam URI.",
      "A": "Benar. Menggunakan hierarki resource jamak dan HTTP verb semantik.",
      "B": "Salah. Menyertakan kata kerja 'getOrders' dalam URI melanggar kaidah RESTful.",
      "C": "Salah. Menggunakan POST untuk operasi pembacaan (idempotent read) tidak semantik.",
      "D": "Salah. Format penamaan dengan underscore dan kata kerja 'fetch' tidak sesuai standar REST."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-050",
    "level": "intermediate",
    "topic": "Spring Architecture",
    "questionType": "best-practice",
    "question": "Mengapa sangat direkomendasikan mentransfer data antara Controller dan Service menggunakan DTO (Data Transfer Object) daripada mengekspos Entitas JPA langsung?\n\n```java\n// DTO vs Entity di API layer:\n```",
    "code": "// DTO vs Entity di API layer:",
    "options": {
      "A": "Mencegah over-fetching, melindungi data sensitif (seperti password hash), dan memutus coupling siklus serialisasi JPA",
      "B": "Spring Boot tidak bisa mengkompilasi file tanpa akhiran DTO",
      "C": "Database PostgreSQL melarang penggunaan entitas di luar package repository",
      "D": "DTO mengeksekusi query database lebih cepat daripada entitas"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mengekspos entitas langsung dapat menyebabkan kebocoran data internal, mass-assignment vulnerability, serta memicu LazyInitializationException saat serialisasi JSON. DTO menyediakan kontrak API yang bersih dan decoupled.",
      "A": "Benar. DTO mengisolasi struktur data publik API dari representasi tabel internal basis data.",
      "B": "Salah. Spring Boot dapat mengkompilasi class apa pun terlepas dari namanya.",
      "C": "Salah. Database tidak mengetahui arsitektur package di aplikasi Java.",
      "D": "Salah. DTO hanyalah penampung data (carrier), tidak berhubungan langsung dengan kecepatan engine SQL."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-051",
    "level": "intermediate",
    "topic": "Java Clean Code",
    "questionType": "best-practice",
    "question": "Manakah cara penanganan Java Optional yang paling sesuai dengan idiomatic clean code?\n\n```java\n// Diberikan Optional<User> optUser. Manakah penanganan yang direkomendasikan jika ingin mendapatkan nama user atau default \"Anonim\"?\n```",
    "code": "// Diberikan Optional<User> optUser. Manakah penanganan yang direkomendasikan jika ingin mendapatkan nama user atau default \"Anonim\"?",
    "options": {
      "A": "optUser.map(User::getName).orElse(\"Anonim\")",
      "B": "if (optUser.isPresent()) { return optUser.get().getName(); } else { return \"Anonim\"; }",
      "C": "return optUser.get().getName();",
      "D": "return optUser.orElse(null).getName();"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menggunakan gaya fungsional `map()` dan `orElse()` adalah cara idiomatic yang elegan, ringkas, dan aman dari NPE. Penggunaan `isPresent()` + `get()` gaya prosedural sering dianggap code smell di ekosistem Java modern.",
      "A": "Benar. Fungsional map().orElse() mengekspresikan transformasi data secara deklaratif dan aman.",
      "B": "Salah. isPresent() + get() gaya lama cenderung verbose dan rawan kelalaian.",
      "C": "Salah. optUser.get() langsung tanpa pengecekan akan melempar NoSuchElementException jika kosong.",
      "D": "Salah. orElse(null).getName() akan melempar NullPointerException jika nilai default null terpilih."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-052",
    "level": "intermediate",
    "topic": "Database Transactions",
    "questionType": "best-practice",
    "question": "Pada method Service yang hanya melakukan pembacaan data (SELECT), apa manfaat menambahkan `@Transactional(readOnly = true)`?\n\n```java\n@Transactional(readOnly = true)\npublic List<UserDto> getAllActiveUsers() {\n    return userRepo.findAllActive().stream().map(mapper::toDto).toList();\n}\n```",
    "code": "@Transactional(readOnly = true)\npublic List<UserDto> getAllActiveUsers() {\n    return userRepo.findAllActive().stream().map(mapper::toDto).toList();\n}",
    "options": {
      "A": "Mengoptimalkan dirty-checking Hibernate (memori hemat) dan memungkinkan driver DB mengarahkan query ke Read-Replica",
      "B": "Mencegah koneksi database terputus saat network drop",
      "C": "Mempercepat kompilasi bytecode Java",
      "D": "Menjadikan data di database tidak bisa diubah selamanya"
    },
    "answer": "A",
    "explanation": {
      "correct": "Hibernate mematikan snapshot dirty-checking pada transaksi read-only sehingga menghemat alokasi memori CPU. Selain itu, database router dapat merutekan koneksi ke node replica sekunder khusus pembacaan.",
      "A": "Benar. Menghemat CPU/memori karena bypass dirty check dan mendukung routing ke Read-Replica.",
      "B": "Salah. Tidak berpengaruh pada durabilitas koneksi fisik terhadap network failure.",
      "C": "Salah. Anotasi runtime tidak berpengaruh pada kecepatan kompilasi javac.",
      "D": "Salah. readOnly hanya berlaku untuk cakupan eksekusi transaksi yang bersangkutan, bukan kunci permanen database."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-053",
    "level": "intermediate",
    "topic": "Design Patterns",
    "questionType": "concept",
    "question": "Design pattern apakah yang membungkus sebuah objek untuk memberikan fungsionalitas atau perilaku tambahan secara dinamis tanpa mengubah kode aslinya?",
    "options": {
      "A": "Decorator Pattern",
      "B": "Singleton Pattern",
      "C": "Factory Pattern",
      "D": "Prototype Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Decorator pattern (seperti BufferedReader(new InputStreamReader(...))) menambahkan tanggung jawab pada objek secara fleksibel saat runtime.",
      "A": "Opsi A benar karena Decorator membungkus objek untuk menambah perilaku dinamis.",
      "B": "Opsi B salah karena Singleton membatasi satu instance.",
      "C": "Opsi C salah karena Factory membuat instance objek.",
      "D": "Opsi D salah karena Prototype mengkloning objek."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-054",
    "level": "intermediate",
    "topic": "Design Patterns",
    "questionType": "concept",
    "question": "Design pattern apakah yang mendefinisikan kerangka (skeleton) suatu algoritma di superclass, namun membiarkan subclass meng-override langkah-langkah spesifik tertentu?",
    "options": {
      "A": "Template Method Pattern",
      "B": "Strategy Pattern",
      "C": "State Pattern",
      "D": "Visitor Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Template Method menggunakan method konkret di abstract class yang memanggil method-method abstrak (hook) yang diimplementasikan oleh subclass.",
      "A": "Opsi A benar karena mendefinisikan Template Method pattern.",
      "B": "Opsi B salah karena Strategy menggunakan komposisi antarmuka objek yang dapat ditukar.",
      "C": "Opsi C salah karena State mengubah perilaku objek berdasarkan state internalnya.",
      "D": "Opsi D salah karena Visitor memisahkan algoritma dari struktur objek yang dioperasikan."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-055",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara 'git merge' dan 'git rebase' saat menggabungkan perubahan dari branch lain?",
    "options": {
      "A": "'git merge' membuat commit merge baru yang mempertahankan riwayat cabang asli, sedangkan 'git rebase' memindahkan basis commit branch saat ini ke ujung branch target untuk menghasilkan riwayat commit yang linear",
      "B": "'git rebase' menghapus seluruh file di working directory",
      "C": "'git merge' hanya bisa dilakukan oleh admin repositori",
      "D": "Keduanya persis sama tanpa perbedaan commit tree"
    },
    "answer": "A",
    "explanation": {
      "correct": "Merge mempertahankan topologi riwayat percabangan non-linear dengan 3-way merge commit. Rebase menulis ulang riwayat commit (linear history) dengan menerapkan commit-commit lokal satu per satu di atas commit branch target.",
      "A": "Opsi A benar karena membedakan non-linear merge commit vs linear commit history.",
      "B": "Opsi B salah karena rebase tidak menghapus file kerja.",
      "C": "Opsi C salah karena setiap developer dapat melakukan merge lokal.",
      "D": "Opsi D salah karena struktur commit graph yang dihasilkan sangat berbeda."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-056",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Apa yang terjadi jika objek yang digunakan sebagai key di dalam HashMap adalah objek yang MUTABLE (nilainya dapat diubah)?",
    "options": {
      "A": "Jika atribut objek yang mempengaruhi hashCode() diubah setelah dimasukkan ke map, hashCode berubah sehingga objek tersebut tidak akan dapat ditemukan lagi di map (lost entry)",
      "B": "HashMap otomatis melempar ConcurrentModificationException",
      "C": "HashMap otomatis meng-update bucket secara mandiri",
      "D": "Nilai key otomatis kembali ke nilai semula"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kunci pada HashMap harus immutable (seperti String atau Integer). Jika hashCode() berubah akibat mutasi objek, pencarian berikutnya akan mencari ke bucket yang salah sehingga get(key) mengembalikan null.",
      "A": "Opsi A benar karena menjelaskan risiko fatal mutable key pada hash table.",
      "B": "Opsi B salah karena mutasi atribut objek bukan mutasi struktural ukuran map.",
      "C": "Opsi C salah karena HashMap tidak memantau perubahan internal objek key.",
      "D": "Opsi D salah karena state objek tidak otomatis di-revert."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-057",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Bagaimana cara membatasi eksekusi method asynchronous CompletableFuture agar tidak melebihi batas waktu tertentu (timeout) di Java 9+?",
    "options": {
      "A": "Menggunakan method .orTimeout(5, TimeUnit.SECONDS) atau .completeOnTimeout(defaultValue, 5, TimeUnit.SECONDS)",
      "B": "Menambahkan parameter int timeout pada method main",
      "C": "Memanggil Thread.sleep() di dalam lambda",
      "D": "Menggunakan modifier transient pada CompletableFuture"
    },
    "answer": "A",
    "explanation": {
      "correct": "Java 9 menambahkan dukungan timeout bawaan pada CompletableFuture: orTimeout melempar TimeoutException jika lewat batas waktu, sedangkan completeOnTimeout mengembalikan nilai default.",
      "A": "Opsi A benar karena merupakan API resmi Java 9+ untuk asynchronous timeout.",
      "B": "Opsi B salah karena tidak ada parameter timeout di main method.",
      "C": "Opsi C salah karena Thread.sleep memblokir thread eksekusi bukan membatasi masa tunggu.",
      "D": "Opsi D salah karena transient untuk serialisasi objek."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-058",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @ConditionalOnMissingBean pada kelas konfigurasi Spring Boot?",
    "options": {
      "A": "Memastikan bahwa bean default hanya akan didaftarkan ke container jika developer belum mendefinisikan bean kustom dengan tipe tersebut",
      "B": "Melemparkan exception jika bean tidak ditemukan saat runtime",
      "C": "Menghapus bean yang ada di container",
      "D": "Membuat bean tiruan di memory cache"
    },
    "answer": "A",
    "explanation": {
      "correct": "@ConditionalOnMissingBean adalah pondasi Auto-Configuration Spring Boot, memungkinkan penyediaan default bean yang dapat dengan mudah di-override oleh developer aplikasi.",
      "A": "Opsi A benar karena memungkinkan kustomisasi bean secara fleksibel.",
      "B": "Opsi B salah karena bukan mekanisme pelemparan error.",
      "C": "Opsi C salah karena tidak menghapus bean yang ada.",
      "D": "Opsi D salah karena bukan mock bean."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-059",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Bagaimana cara membuat custom validation annotation di Spring Boot / Hibernate Validator?",
    "options": {
      "A": "Membuat custom annotation yang dianotasi dengan @Constraint(validatedBy = CustomValidator.class) dan mengimplementasikan interface ConstraintValidator",
      "B": "Menulis fungsi validasi di file application.properties",
      "C": "Membuat abstract class yang meng-extend Exception",
      "D": "Menonaktifkan anotasi @Valid di controller"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar Jakarta Bean Validation mengharuskan deklarasi anotasi dengan @Constraint yang menunjuk ke kelas ConstraintValidator<A, T> pengimplementasi logika validasi.",
      "A": "Opsi A benar karena merupakan langkah baku pembuatan custom validator.",
      "B": "Opsi B salah karena file konfigurasi tidak mengeksekusi logika validasi.",
      "C": "Opsi C salah karena ConstraintValidator bukan turunan Exception.",
      "D": "Opsi D salah karena @Valid justru diperlukan untuk memicu validasi."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-060",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menandai kelas konfigurasi yang mengekspor definisi bean ke Spring ApplicationContext?",
    "options": {
      "A": "@Configuration",
      "B": "@SetupClass",
      "C": "@AppContext",
      "D": "@SpringConfig"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Configuration menandai kelas sebagai sumber definisi bean (@Bean method) yang diproses oleh Spring container.",
      "A": "Opsi A benar karena @Configuration adalah anotasi resmi Spring.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-061",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Kapan Anda sebaiknya menggunakan pagination berbasis 'Cursor' (Cursor-based pagination) dibandingkan 'Offset-based pagination' pada REST API?",
    "options": {
      "A": "Ketika data sangat dinamis dengan frekuensi penambahan data baru yang tinggi (real-time feed), untuk mencegah masalah baris duplikat atau baris terlewat saat user berpindah halaman",
      "B": "Ketika total data di database kurang dari 10 baris",
      "C": "Ketika ingin menampilkan total nomor halaman 1, 2, 3 di UI",
      "D": "Ketika database tidak memiliki index"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada offset pagination, jika ada data baru masuk di halaman 1, data di halaman 2 akan bergeser sehingga klien melihat data yang sama dua kali. Cursor pagination (menggunakan pointer record terakhir) stabil terhadap mutasi real-time.",
      "A": "Opsi A benar karena cursor-based pagination mencegah fenomena item drifting pada data dinamis.",
      "B": "Opsi B salah karena data kecil tidak membutuhkan pagination kompleks.",
      "C": "Opsi C salah karena cursor pagination tidak mengetahui nomor halaman absolut di masa depan.",
      "D": "Opsi D salah karena cursor pagination mutlak mengandalkan index terurut."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-062",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Manakah status code yang tepat saat server menerima permintaan yang valid, namun pemrosesan membutuhkan waktu lama dan dijalankan secara asynchronous di background?",
    "options": {
      "A": "202 Accepted",
      "B": "200 OK",
      "C": "204 No Content",
      "D": "102 Processing"
    },
    "answer": "A",
    "explanation": {
      "correct": "202 Accepted menandakan permintaan telah diterima dan disetujui untuk diproses, namun eksekusinya belum selesai saat respons HTTP dikembalikan.",
      "A": "Opsi A benar karena 202 adalah status standar operasi async.",
      "B": "Opsi B salah karena 200 menandakan operasi sudah selesai diproses.",
      "C": "Opsi C salah karena 204 berarti selesai dengan sukses tanpa body.",
      "D": "Opsi D salah karena 102 adalah interim informational status WebDAV."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-063",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Apa fungsi dari HTTP response header 'Retry-After' saat server mengembalikan status 429 Too Many Requests atau 503 Service Unavailable?",
    "options": {
      "A": "Menginformasikan klien berapa detik atau waktu spesifik yang harus ditunggu sebelum mencoba mengirimkan request kembali",
      "B": "Menghapus cookie sesi klien seketika",
      "C": "Mematikan koneksi internet klien",
      "D": "Mengalihkan request ke server Google"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header Retry-After memberi panduan waktu bagi mekanisme back-off klien untuk menghindari pembebanan berlebih pada server yang sedang throttling atau maintenance.",
      "A": "Opsi A benar karena merupakan standar RFC untuk pengendalian laju retry.",
      "B": "Opsi B salah karena bukan pengatur cookie.",
      "C": "Opsi C salah karena tidak mengontrol kartu jaringan fisik klien.",
      "D": "Opsi D salah karena tidak melakukan pengalihan DNS."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-064",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk mengeksekusi method callback sebelum sebuah entitas disimpan (INSERT) ke database untuk pertama kali?",
    "options": {
      "A": "@PrePersist",
      "B": "@BeforeInsert",
      "C": "@PreSave",
      "D": "@OnInitEntity"
    },
    "answer": "A",
    "explanation": {
      "correct": "@PrePersist pada method di dalam kelas entitas atau EntityListener dipanggil oleh JPA tepat sebelum entitas disimpan ke database (sangat umum untuk mengisi createdAt = Instant.now()).",
      "A": "Opsi A benar karena @PrePersist adalah lifecycle callback resmi JPA.",
      "B": "Opsi B salah karena bukan anotasi JPA.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi JPA."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-065",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @DynamicUpdate pada entitas Hibernate?",
    "options": {
      "A": "Membuat query SQL UPDATE yang dihasilkan Hibernate hanya menyertakan kolom-kolom yang nilainya benar-benar berubah, bukan seluruh kolom entitas",
      "B": "Mengubah struktur kolom database secara real-time",
      "C": "Memperbarui data cache setiap 1 detik",
      "D": "Menonaktifkan transaksi database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default Hibernate membuat query UPDATE dengan semua kolom. @DynamicUpdate menganalisis dirty state dan menghasilkan SQL UPDATE yang hanya menargetkan kolom yang termutasi.",
      "A": "Opsi A benar karena mengurangi overhead penulisan kolom yang tidak berubah.",
      "B": "Opsi B salah karena tidak mengubah DDL skema.",
      "C": "Opsi C salah karena bukan timer cache.",
      "D": "Opsi D salah karena tidak mempengaruhi transaksi."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-066",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa perbedaan antara method getReferenceById() (dahulu getOne()) dan findById() di Spring Data JPA?",
    "options": {
      "A": "getReferenceById() mengembalikan objek Proxy lazy-loaded tanpa langsung mengeksekusi SQL SELECT ke database, sedangkan findById() langsung mengeksekusi SQL SELECT dan mengembalikan Optional<T>",
      "B": "getReferenceById() selalu mengembalikan null",
      "C": "findById() tidak mendukung primary key bertipe Long",
      "D": "Keduanya persis sama"
    },
    "answer": "A",
    "explanation": {
      "correct": "getReferenceById() memanfaatkan EntityManager.getReference() untuk mendapatkan proxy referensi tanpa database round-trip (sangat efisien jika hanya ingin mengaitkan foreign key ke entitas lain).",
      "A": "Opsi A benar karena membedakan lazy proxy reference vs immediate database query.",
      "B": "Opsi B salah karena proxy memegang ID entitas.",
      "C": "Opsi C salah karena findById mendukung tipe ID generik.",
      "D": "Opsi D salah karena sifat pemuatan database dan tipe return-nya berbeda."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-067",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Apa kegunaan dari class MockRestServiceServer di Spring Test?",
    "options": {
      "A": "Menyediakan mock server lokal untuk menguji RestTemplate / RestClient tanpa harus melakukan panggilan HTTP fisik ke server eksternal nyata",
      "B": "Membuat server Tomcat baru di internet",
      "C": "Menguji query database SQL",
      "D": "Menghapus endpoint controller yang rusak"
    },
    "answer": "A",
    "explanation": {
      "correct": "MockRestServiceServer mencegat pemanggilan RestTemplate dan memverifikasi URL yang dipanggil serta mengembalikan respons buatan (stub) yang terdefinisi.",
      "A": "Opsi A benar karena menguji outbound client calls secara terisolasi.",
      "B": "Opsi B salah karena tidak meluncurkan server internet nyata.",
      "C": "Opsi C salah karena untuk database digunakan @DataJpaTest.",
      "D": "Opsi D salah karena bukan tool pembersih controller."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-068",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Dalam pengujian JUnit 5, apa fungsi dari anotasi @Nested?",
    "options": {
      "A": "Mengelompokkan kumpulan test case terkait ke dalam inner class bersarang agar struktur pengujian lebih hierarkis, rapi, dan mudah dibaca",
      "B": "Menjalankan test di dalam thread bersarang",
      "C": "Membuat test berjalan di dua browser sekaligus",
      "D": "Mengabaikan semua assertion yang gagal"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Nested memungkinkan pengorganisasian test suite mengikuti konteks perilaku (Behavior-Driven style / BDD: 'describe -> when -> then') menggunakan class berstruktur pohon.",
      "A": "Opsi A benar karena memfasilitasi hierarki test suite yang terstruktur.",
      "B": "Opsi B salah karena tidak mengubah model thread JUnit.",
      "C": "Opsi C salah karena bukan tool Selenium multi-browser.",
      "D": "Opsi D salah karena assertion yang gagal tetap menggagalkan test."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-069",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Teknik refactoring apakah yang digunakan ketika beberapa class memiliki variabel atau method yang serupa sehingga sebaiknya dipindahkan ke parent class?",
    "options": {
      "A": "Pull Up Method / Pull Up Field",
      "B": "Push Down Method",
      "C": "Inline Class",
      "D": "Extract Subclass"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pull Up memindahkan perilaku atau state duplikat dari subclass ke superclass bersama untuk menerapkan prinsip DRY dan meningkatkan keterpeliharaan.",
      "A": "Opsi A benar karena memindahkan kode ke superclass adalah Pull Up.",
      "B": "Opsi B salah karena Push Down memindahkan method dari superclass ke subclass tertentu.",
      "C": "Opsi C salah karena Inline Class menghapus class dan menyatukannya ke class lain.",
      "D": "Opsi D salah karena Extract Subclass membuat anak kelas baru."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-070",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Apa dampak negatif dari penggunaan komentar (comments) yang berlebihan untuk menjelaskan kode yang rumit alih-alih merapikan kodenya?",
    "options": {
      "A": "Komentar cenderung usang (outdated) dan menyesatkan saat kode berubah tetapi komentar lupa diperbarui; kode yang bersih seharusnya sudah self-explanatory",
      "B": "Komentar membuat ukuran file .jar menjadi berukuran giga-byte",
      "C": "Komentar memperlambat eksekusi method saat runtime di JVM",
      "D": "Komentar memicu compile error di Java 17"
    },
    "answer": "A",
    "explanation": {
      "correct": "Clean Code menegaskan: 'Don't comment bad code—rewrite it'. Komentar sering berbohong karena tidak diverifikasi oleh compiler, sedangkan kode yang terstruktur dengan penamaan ekspresif selalu jujur.",
      "A": "Opsi A benar karena risiko desinkronisasi komentar dan kebenaran kode nyata.",
      "B": "Opsi B salah karena komentar dihapus compiler dari bytecode .class.",
      "C": "Opsi C salah karena komentar tidak ada di runtime bytecode sehingga nol dampak performa.",
      "D": "Opsi D salah karena compiler selalu mengabaikan komentar."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-071",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara UNION dan UNION ALL di SQL?",
    "options": {
      "A": "UNION menghapus baris duplikat dari hasil gabungan kueri (melakukan operasi deduplikasi/sorting), sedangkan UNION ALL menggabungkan seluruh baris tanpa menghapus duplikat sehingga lebih cepat",
      "B": "UNION ALL hanya bisa menggabungkan 2 tabel, sedangkan UNION bisa 10 tabel",
      "C": "UNION mengunci tabel database, UNION ALL tidak",
      "D": "UNION ALL hanya untuk kolom bertipe integer"
    },
    "answer": "A",
    "explanation": {
      "correct": "UNION melakukan distinct pass yang membutuhkan sorting di memori/tempdb untuk membuang duplikasi. UNION ALL langsung menyatukan dua result set tanpa deduplikasi sehingga jauh lebih efisien.",
      "A": "Opsi A benar karena membedakan deduplikasi vs penggabungan langsung.",
      "B": "Opsi B salah karena keduanya mendukung penggabungan banyak result set.",
      "C": "Opsi C salah karena keduanya tidak mengubah mode locking tabel.",
      "D": "Opsi D salah karena keduanya mendukung semua tipe data yang kompatibel."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-072",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Apa keuntungan menggunakan prepared statement (PreparedStatement) di Java JDBC dibandingkan Statement biasa?",
    "options": {
      "A": "Mencegah serangan SQL Injection melalui pemisahan kode SQL dari input data (parameter binding), serta meningkatkan performa melalui pra-kompilasi query plan di database",
      "B": "Menghapus kebutuhan password database",
      "C": "Mengubah query SQL menjadi file HTML",
      "D": "Menjadikan database berjalan di cloud"
    },
    "answer": "A",
    "explanation": {
      "correct": "PreparedStatement mengirimkan template kueri ke database untuk dikompilasi terlebih dahulu, lalu nilai parameter diikat terpisah. Ini menjamin data masukan tidak pernah dievaluasi sebagai perintah SQL yang dapat dieksploitasi.",
      "A": "Opsi A benar karena merangkum proteksi SQL Injection dan query plan caching.",
      "B": "Opsi B salah karena autentikasi kredensial tetap wajib.",
      "C": "Opsi C salah karena JDBC beroperasi di layer data, bukan presentasi HTML.",
      "D": "Opsi D salah karena PreparedStatement berjalan pada database lokal maupun cloud."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-073",
    "level": "intermediate",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Dalam JWT, klaim standar apakah yang digunakan untuk menyimpan waktu kedaluwarsa token?",
    "options": {
      "A": "'exp' (Expiration Time)",
      "B": "'iat' (Issued At)",
      "C": "'sub' (Subject)",
      "D": "'iss' (Issuer)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai standar RFC 7519, klaim 'exp' memuat waktu kedaluwarsa dalam format Unix timestamp (detik sejak epoch) untuk memvalidasi apakah token masih berlaku.",
      "A": "Opsi A benar karena 'exp' adalah klaim resmi expiration time.",
      "B": "Opsi B salah karena 'iat' adalah waktu token diterbitkan.",
      "C": "Opsi C salah karena 'sub' adalah subjek/identitas pemilik token.",
      "D": "Opsi D salah karena 'iss' adalah penerbit token."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-074",
    "level": "intermediate",
    "topic": "Design Patterns",
    "questionType": "concept",
    "question": "Design pattern apakah yang menyediakan antarmuka terpadu yang disederhanakan (unified simplified interface) terhadap sekumpulan antarmuka kompleks di dalam suatu subsistem?",
    "options": {
      "A": "Facade Pattern",
      "B": "Proxy Pattern",
      "C": "Decorator Pattern",
      "D": "Bridge Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Facade pattern menyembunyikan kerumitan interaksi banyak kelas subsistem di balik satu kelas facade sederhana (misal: OrderPlacementFacade yang membungkus inventory, payment, dan shipping).",
      "A": "Opsi A benar karena Facade menyederhanakan akses ke subsistem kompleks.",
      "B": "Opsi B salah karena Proxy mengontrol akses ke satu objek spesifik.",
      "C": "Opsi C salah karena Decorator menambahkan perilaku dinamis.",
      "D": "Opsi D salah karena Bridge memisahkan abstraksi dari implementasinya."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-075",
    "level": "intermediate",
    "topic": "Design Patterns",
    "questionType": "concept",
    "question": "Design pattern apakah yang mendefinisikan keluarga algoritma, membungkus masing-masing algoritma ke dalam kelas tersendiri, dan membuat mereka dapat saling dipertukarkan saat runtime?",
    "options": {
      "A": "Strategy Pattern",
      "B": "Command Pattern",
      "C": "State Pattern",
      "D": "Memento Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Strategy pattern memungkinkan algoritma bervariasi secara independen dari klien yang menggunakannya (misal: PaymentStrategy dengan implementasi CreditCardStrategy, PayPalStrategy, dan CryptoStrategy).",
      "A": "Opsi A benar karena Strategy mengisolasi algoritma yang dapat dipertukarkan.",
      "B": "Opsi B salah karena Command membungkus request sebagai objek.",
      "C": "Opsi C salah karena State mengubah perilaku berdasarkan kondisi internal.",
      "D": "Opsi D salah karena Memento menyimpan dan memulihkan snapshot objek."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-076",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Perintah Git manakah yang digunakan untuk membatalkan perubahan di working directory yang belum di-commit dan menyimpannya sementara di stack agar working tree bersih?",
    "options": {
      "A": "git stash",
      "B": "git clean -f",
      "C": "git reset --hard",
      "D": "git revert"
    },
    "answer": "A",
    "explanation": {
      "correct": "'git stash' menyimpan perubahan lokal ke tumpukan (stash stack) dan mengembalikan working directory ke kondisi HEAD yang bersih, yang nantinya dapat dipulihkan kembali dengan 'git stash pop'.",
      "A": "Opsi A benar karena git stash menyimpan perubahan sementara ke stack.",
      "B": "Opsi B salah karena git clean menghapus file untracked secara permanen.",
      "C": "Opsi C salah karena git reset --hard membuang perubahan secara permanen tanpa opsi pemulihan stash.",
      "D": "Opsi D salah karena git revert membuat commit baru untuk membatalkan commit sebelumnya."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-077",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Perintah Git manakah yang digunakan untuk menerapkan (apply) commit spesifik dari branch lain ke branch saat ini tanpa harus menggabungkan seluruh branch?",
    "options": {
      "A": "git cherry-pick <commit-hash>",
      "B": "git merge-single <commit-hash>",
      "C": "git pull-commit <commit-hash>",
      "D": "git grab <commit-hash>"
    },
    "answer": "A",
    "explanation": {
      "correct": "'git cherry-pick' memilih satu atau beberapa commit spesifik berdasarkan hash-nya dan menduplikasikannya ke atas branch yang sedang aktif saat ini.",
      "A": "Opsi A benar karena cherry-pick adalah perintah resmi integrasi commit selektif.",
      "B": "Opsi B salah karena bukan perintah Git.",
      "C": "Opsi C salah karena bukan perintah Git.",
      "D": "Opsi D salah karena bukan perintah Git."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-078",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Mengapa operasi pembagian floating point '0.1 + 0.2' di Java tidak menghasilkan tepat '0.3' melainkan '0.30000000000000004', dan class apakah yang harus digunakan untuk kalkulasi keuangan?",
    "options": {
      "A": "Karena standar IEEE 754 merepresentasikan floating-point dalam basis biner pecahan yang tidak dapat mewakili 1/10 secara presisi; untuk keuangan wajib menggunakan java.math.BigDecimal",
      "B": "Karena bug di compiler Java yang belum diperbaiki",
      "C": "Karena JVM kehabisan bit register",
      "D": "Karena floating point hanya mendukung bilangan bulat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe data float dan double menggunakan format biner IEEE 754 yang memiliki keterbatasan presisi pecahan desimal. BigDecimal menyediakan aritmatika desimal dengan presisi tak terbatas yang bebas dari kesalahan pembulatan biner.",
      "A": "Opsi A benar karena menjelaskan representasi IEEE 754 dan solusi standar BigDecimal.",
      "B": "Opsi B salah karena ini adalah sifat dasar representasi biner pada perangkat keras komputer, bukan bug Java.",
      "C": "Opsi C salah karena register CPU 64-bit mematuhi standar IEEE 754.",
      "D": "Opsi D salah karena floating point khusus untuk bilangan berkoma."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-079",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @Order atau interface Ordered di Spring Framework?",
    "options": {
      "A": "Menentukan urutan prioritas eksekusi bean, filter, atau event listener saat ada beberapa komponen yang terdaftar dalam satu pipeline",
      "B": "Membuat pesanan barang di toko online secara otomatis",
      "C": "Mengurutkan data tabel database saat aplikasi booting",
      "D": "Mengatur urutan baris kode di dalam file Java"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Order(1) memberikan nilai prioritas (semakin kecil angkanya, semakin tinggi prioritas eksekusinya) untuk mengatur alur rantai filter atau komponen pluggable.",
      "A": "Opsi A benar karena @Order mengontrol urutan eksekusi komponen Spring.",
      "B": "Opsi B salah karena bukan modul e-commerce.",
      "C": "Opsi C salah karena bukan query database.",
      "D": "Opsi D salah karena baris kode Java dieksekusi normal sesuai kontrol alur."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-080",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan 'Content Negotiation' dalam protokol HTTP pada arsitektur REST?",
    "options": {
      "A": "Mekanisme di mana klien dan server menyepakati format data (media type) terbaik untuk respons melalui evaluasi header request 'Accept' dan 'Content-Type'",
      "B": "Tawar-menawar harga langganan API antara klien dan vendor",
      "C": "Mekanisme pemilihan bahasa pemrograman backend secara dinamis",
      "D": "Proses negosiasi kecepatan transfer bandwidth internet"
    },
    "answer": "A",
    "explanation": {
      "correct": "Content Negotiation memungkinkan satu URL resource yang sama (misal /users/1) dapat mengembalikan representasi JSON, XML, atau PDF tergantung format yang diminta oleh header Accept klien.",
      "A": "Opsi A benar karena mendefinisikan negosiasi tipe konten HTTP standar.",
      "B": "Opsi B salah karena bukan negosiasi bisnis finansial.",
      "C": "Opsi C salah karena bahasa pemrograman backend tidak dinegosiasikan lewat HTTP.",
      "D": "Opsi D salah karena bukan kontrol kecepatan bandwidth TCP."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-081",
    "level": "advanced",
    "topic": "Java Concurrency",
    "questionType": "output",
    "question": "Apa output pemanggilan supplyAsync dan exceptionally pada CompletableFuture berikut?\n\n```java\nCompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> {\n    if (true) throw new RuntimeException(\"Error!\");\n    return \"Success\";\n}).exceptionally(ex -> \"Fallback: \" + ex.getCause().getMessage());\nSystem.out.println(cf.join());\n```",
    "code": "CompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> {\n    if (true) throw new RuntimeException(\"Error!\");\n    return \"Success\";\n}).exceptionally(ex -> \"Fallback: \" + ex.getCause().getMessage());\nSystem.out.println(cf.join());",
    "options": {
      "A": "Fallback: Error!",
      "B": "Success",
      "C": "RuntimeException: Error!",
      "D": "Throw CompletionException"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ketika supplyAsync melempar exception, future selesai secara exceptional dengan CompletionException membungkus RuntimeException asli. Method `exceptionally` menangkapnya, `ex.getCause().getMessage()` mengambil 'Error!', dan mengembalikan string fallback.",
      "A": "Benar. Handler exceptionally mengembalikan nilai fallback yang aman sehingga join() tidak melempar exception.",
      "B": "Salah. Body supplyAsync melempar exception sebelum mencapai 'Success'.",
      "C": "Salah. Nilai dikembalikan dari block lambda yang menyertakan prefix 'Fallback: '.",
      "D": "Salah. Exception telah ditangani oleh exceptionally() sehingga join() sukses."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-082",
    "level": "advanced",
    "topic": "Java Generics PECS",
    "questionType": "output",
    "question": "Apa output dari pemanggilan Collections.copy berikut?\n\n```java\nList<Number> dest = Arrays.asList(0, 0, 0);\nList<Integer> src = Arrays.asList(1, 2, 3);\nCollections.copy(dest, src);\nSystem.out.println(dest);\n```",
    "code": "List<Number> dest = Arrays.asList(0, 0, 0);\nList<Integer> src = Arrays.asList(1, 2, 3);\nCollections.copy(dest, src);\nSystem.out.println(dest);",
    "options": {
      "A": "[1, 2, 3]",
      "B": "[0, 0, 0]",
      "C": "Compile Error",
      "D": "IndexOutOfBoundsException"
    },
    "answer": "A",
    "explanation": {
      "correct": "Signature `Collections.copy(List<? super T> dest, List<? extends T> src)`. Karena Number adalah superclass dari Integer, tipe cocok. Isi dari `src` berhasil disalin menggantikan elemen `dest`. Hasilnya adalah `[1, 2, 3]`.",
      "A": "Benar. Elemen src disalin ke dalam dest karena ukuran dest memenuhi syarat (>= src.size()).",
      "B": "Salah. Elemen dest berhasil ditimpa oleh data dari src.",
      "C": "Salah. Kode memenuhi aturan variance generics Java dan valid dikompilasi.",
      "D": "Salah. Ukuran dest (3) sama dengan src (3) sehingga tidak terjadi IndexOutOfBoundsException."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-083",
    "level": "advanced",
    "topic": "Java Virtual Threads",
    "questionType": "output",
    "question": "Apa output pengecekan `Thread.currentThread().isVirtual()` pada task yang disubmit ke `Executors.newVirtualThreadPerTaskExecutor()` (Java 21)?\n\n```java\ntry (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    executor.submit(() -> {\n        System.out.println(Thread.currentThread().isVirtual());\n    }).get();\n}\n```",
    "code": "try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    executor.submit(() -> {\n        System.out.println(Thread.currentThread().isVirtual());\n    }).get();\n}",
    "options": {
      "A": "true",
      "B": "false",
      "C": "UnsupportedOperationException",
      "D": "Compile Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Executor yang dibuat via `newVirtualThreadPerTaskExecutor()` menjalankan setiap task menggunakan Project Loom Virtual Thread ringan yang dijadwalkan oleh carrier thread JVM, sehingga `isVirtual()` mengembalikan true.",
      "A": "Benar. Task dieksekusi di Virtual Thread bawaan Java modern.",
      "B": "Salah. Task tidak dieksekusi di thread platform OS biasa.",
      "C": "Salah. Method isVirtual() adalah API resmi sejak Java 21 LTS.",
      "D": "Salah. Kode menggunakan sintaks try-with-resources dan ExecutorService Java 21 yang valid."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-084",
    "level": "advanced",
    "topic": "Spring Transaction Propagation",
    "questionType": "debug",
    "question": "Method `registerUser` memanggil `sendWelcomeLog` yang memiliki propagation `REQUIRES_NEW`. Jika `sendWelcomeLog` melempar RuntimeException, mengapa transaksi `registerUser` juga ikut gagal?\n\n```java\n@Transactional\npublic void registerUser(User u) {\n    userRepo.save(u);\n    logService.sendWelcomeLog(u);\n}\n// di LogService:\n@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void sendWelcomeLog(User u) {\n    throw new RuntimeException(\"Log DB Down\");\n}\n```",
    "code": "@Transactional\npublic void registerUser(User u) {\n    userRepo.save(u);\n    logService.sendWelcomeLog(u);\n}\n// di LogService:\n@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void sendWelcomeLog(User u) {\n    throw new RuntimeException(\"Log DB Down\");\n}",
    "options": {
      "A": "RuntimeException dari sendWelcomeLog merambat naik ke registerUser tanpa ditangkap (try-catch), sehingga memicu rollback di outer transaction",
      "B": "Propagation REQUIRES_NEW dilarang di Spring Boot",
      "C": "LogService tidak boleh menggunakan transaksi yang berbeda",
      "D": "userRepo.save() otomatis di-commit sebelum method selesai"
    },
    "answer": "A",
    "explanation": {
      "correct": "Meskipun `REQUIRES_NEW` membuat transaksi database independen baru, jika method tersebut melempar unhandled exception yang merambat ke method pemanggil (`registerUser`), transaksi luar juga akan mendeteksi exception tersebut dan melakukan rollback.",
      "A": "Benar. Exception yang tidak ditangkap di pemanggil akan merambat dan memicu rollback transaksi luar.",
      "B": "Salah. REQUIRES_NEW adalah propagasi transaksi yang sah dan umum di Spring.",
      "C": "Salah. LogService bebas mendefinisikan batas transaksinya sendiri.",
      "D": "Salah. Transaksi JPA commit saat method @Transactional terluar selesai tanpa exception."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-085",
    "level": "advanced",
    "topic": "Java Concurrency",
    "questionType": "debug",
    "question": "Aplikasi mengalami Deadlock saat dua thread mengeksekusi transfer uang berlawanan arah. Bagaimana cara memperbaikinya?\n\n```java\npublic void transfer(Account from, Account to, BigDecimal amount) {\n    synchronized(from) {\n        synchronized(to) {\n            from.debit(amount);\n            to.credit(amount);\n        }\n    }\n}\n```",
    "code": "public void transfer(Account from, Account to, BigDecimal amount) {\n    synchronized(from) {\n        synchronized(to) {\n            from.debit(amount);\n            to.credit(amount);\n        }\n    }\n}",
    "options": {
      "A": "Menerapkan penguncian berbasis urutan konsisten (misalnya mengurutkan berdasarkan ID akun sebelum synchronized)",
      "B": "Menghapus blok synchronized sama sekali",
      "C": "Mengganti BigDecimal dengan double biasa",
      "D": "Menambahkan Thread.sleep(1000) di antara dua synchronized"
    },
    "answer": "A",
    "explanation": {
      "correct": "Deadlock terjadi jika Thread 1 mengunci Akun A lalu menunggu Akun B, sementara Thread 2 mengunci Akun B lalu menunggu Akun A. Dengan mengurutkan lock berdasarkan ID (selalu kunci ID terkecil dulu baru ID terbesar), urutan akuisisi lock menjadi global dan deadlock dihindari.",
      "A": "Benar. Lock ordering terurut adalah solusi klasik dan tangguh untuk mencegah circular wait deadlock.",
      "B": "Salah. Menghapus synchronized menyebabkan race condition dan korupsi saldo rekening.",
      "C": "Salah. Mengubah tipe data tidak berpengaruh terhadap persaingan monitor thread.",
      "D": "Salah. Thread.sleep() justru memperpanjang durasi penahanan lock dan memperparah risiko deadlock."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-086",
    "level": "advanced",
    "topic": "Spring Security",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi session management berikut agar aplikasi berjalan sebagai REST API yang sepenuhnya stateless tanpa HTTP Session:\n\n```java\n@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    return http\n        .sessionManagement(session -> session\n            .sessionCreationPolicy(SessionCreationPolicy.___)\n        )\n        .build();\n}\n```",
    "code": "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    return http\n        .sessionManagement(session -> session\n            .sessionCreationPolicy(SessionCreationPolicy.___)\n        )\n        .build();\n}",
    "options": {
      "A": "STATELESS",
      "B": "ALWAYS",
      "C": "NEVER",
      "D": "IF_REQUIRED"
    },
    "answer": "A",
    "explanation": {
      "correct": "`SessionCreationPolicy.STATELESS` memastikan Spring Security tidak akan pernah membuat HttpSession dan tidak akan menggunakannya untuk mendapatkan SecurityContext, ideal untuk arsitektur berbasis token JWT.",
      "A": "Benar. STATELESS adalah kebijakan standar REST API modern berbasis token.",
      "B": "Salah. ALWAYS selalu membuat HttpSession jika belum ada.",
      "C": "Salah. NEVER tidak membuat session baru tetapi tetap memakai yang sudah ada.",
      "D": "Salah. IF_REQUIRED adalah default behaviour di mana session dibuat hanya jika dibutuhkan."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-087",
    "level": "advanced",
    "topic": "Database Locking",
    "questionType": "best-practice",
    "question": "Kapan sebaiknya memilih Pessimistic Locking (`LockModeType.PESSIMISTIC_WRITE`) dibandingkan Optimistic Locking (`@Version`)?\n\n```java\n// Kasus: Memilih strategi locking database di JPA.\n```",
    "code": "// Kasus: Memilih strategi locking database di JPA.",
    "options": {
      "A": "Pada skenario high-contention di mana bentrokan modifikasi data sangat sering terjadi dan biaya rollback/retry transaksi sangat mahal (misal: flash sale stok tiket)",
      "B": "Pada aplikasi dengan traffic sangat rendah di mana konflik hampir tidak pernah ada",
      "C": "Hanya saat menggunakan database NoSQL MongoDB",
      "D": "Saat tidak ingin menggunakan transaksi database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pessimistic Locking mengunci baris data di level database (`SELECT ... FOR UPDATE`), mencegah thread lain memodifikasi data secara bersamaan. Ini tepat untuk situasi contention tinggi di mana optimistic retry akan gagal berkali-kali dan memboroskan sumber daya.",
      "A": "Benar. Pessimistic Locking mengunci resource di awal untuk menghindari biaya kegagalan retry pada persaingan tinggi.",
      "B": "Salah. Pada traffic rendah, Optimistic Locking jauh lebih efisien dan tidak mengunci tabel.",
      "C": "Salah. Pessimistic Write adalah fitur database relasional ACID.",
      "D": "Salah. Pessimistic lock membutuhkan transaksi aktif."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-088",
    "level": "advanced",
    "topic": "Resilience & Circuit Breaking",
    "questionType": "best-practice",
    "question": "Parameter konfigurasi apakah pada Circuit Breaker (Resilience4j) yang menentukan ambang batas persentase kegagalan sebelum circuit berpindah status dari CLOSED ke OPEN?\n\n```java\n// Konfigurasi Resilience4j Circuit Breaker:\n```",
    "code": "// Konfigurasi Resilience4j Circuit Breaker:",
    "options": {
      "A": "failureRateThreshold",
      "B": "waitDurationInOpenState",
      "C": "slowCallRateThreshold",
      "D": "slidingWindowSize"
    },
    "answer": "A",
    "explanation": {
      "correct": "`failureRateThreshold` (misal 50%) menentukan bahwa jika rasio pemanggilan yang gagal pada sliding window mencapai atau melebihi 50%, sirkuit akan terbuka (OPEN) dan mengalihkan traffic ke fallback.",
      "A": "Benar. failureRateThreshold mengatur persentase batas toleransi error sebelum sirkuit terbuka.",
      "B": "Salah. waitDurationInOpenState mengatur durasi tunggu saat sirkuit dalam keadaan OPEN sebelum mencoba HALF-OPEN.",
      "C": "Salah. slowCallRateThreshold mengatur persentase batas toleransi untuk pemanggilan lambat (latency).",
      "D": "Salah. slidingWindowSize mengatur jumlah panggilan atau durasi detik yang direkam untuk evaluasi."
    },
    "mode": "test",
    "jobId": "junior-java"
  },
  {
    "id": "JT-089",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
    "questionType": "concept",
    "question": "Dalam database PostgreSQL, bagaimana arsitektur MVCC (Multi-Version Concurrency Control) menangani operasi UPDATE, dan apa fungsi dari proses VACUUM?",
    "options": {
      "A": "UPDATE tidak menimpa data lama melainkan menandai baris lama sebagai 'dead tuple' dan menyisipkan baris versi baru; VACUUM bertugas membersihkan dead tuples dan membebaskan ruang disk kembali",
      "B": "UPDATE langsung menghapus baris lama dari hard disk seketika",
      "C": "VACUUM bertugas mengenkripsi password database",
      "D": "PostgreSQL tidak menggunakan MVCC"
    },
    "answer": "A",
    "explanation": {
      "correct": "MVCC mengizinkan pembacaan tanpa lock (readers don't block writers, writers don't block readers). Akibatnya, UPDATE dan DELETE meninggalkan dead tuples yang terakumulasi (bloat). Autovacuum bertugas memulihkan ruang tersebut untuk dipakai ulang oleh transaksi baru.",
      "A": "Opsi A benar karena menjelaskan mekanisme dead tuple dan fungsi rekonsiliasi disk VACUUM.",
      "B": "Opsi B salah karena baris lama harus tetap ada agar transaksi lain yang dimulai lebih awal tetap bisa membaca snapshot datanya.",
      "C": "Opsi C salah karena bukan proses kriptografi.",
      "D": "Opsi D salah karena PostgreSQL adalah pelopor arsitektur MVCC."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-090",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan indeks GiST (Generalized Search Tree) di database relasional dan kapan indeks ini wajib digunakan?",
    "options": {
      "A": "Struktur indeks pohon hierarkis serbaguna yang cocok untuk data non-skalar seperti data geospasial (bounding box/geometri PostGIS), range data, dan full-text search di mana operator perbandingan standar B-Tree (<, =, >) tidak berlaku",
      "B": "Indeks khusus untuk angka integer sederhana",
      "C": "Indeks yang hanya bisa digunakan untuk menyimpan teks JSON",
      "D": "Indeks yang berjalan di browser klien"
    },
    "answer": "A",
    "explanation": {
      "correct": "GiST menggeneralisasi struktur pohon pencarian seimbang untuk mendukung predikat spasial multidimensi (seperti overlap, contains, intersects) yang tidak dapat diurutkan secara linear oleh B-Tree tradisional.",
      "A": "Opsi A benar karena menjelaskan peruntukan indeks GiST untuk tipe data spasial dan rentang.",
      "B": "Opsi B salah karena integer sederhana paling optimal menggunakan B-Tree.",
      "C": "Opsi C salah karena JSONB lebih optimal menggunakan indeks GIN.",
      "D": "Opsi D salah karena GiST adalah indeks level engine database server."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-091",
    "level": "advanced",
    "topic": "JVM & Performance",
    "questionType": "concept",
    "question": "Bagaimanakah JIT Compiler melakukan teknik optimasi 'Loop Unrolling' pada kode bytecode Java?",
    "options": {
      "A": "Menggandakan body perulangan beberapa kali dalam satu iterasi untuk mengurangi frekuensi instruksi branch jumps, pengujian kondisi batas, dan membuka peluang instruksi SIMD vektorisasi",
      "B": "Menghapus perulangan dan menggantinya dengan recursion",
      "C": "Menghentikan perulangan setelah 10 iterasi secara paksa",
      "D": "Menjalankan perulangan di thread terpisah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Loop unrolling mengurangi overhead lompatan instruksi cabang (branching overhead) dan pemeriksaan indeks array pada perulangan for. Ini juga memungkinkan CPU pipeline memproses beberapa elemen array secara paralel menggunakan register AVX/SIMD.",
      "A": "Opsi A benar karena mendefinisikan optimasi loop unrolling dan vektorisasi hardware.",
      "B": "Opsi B salah karena unrolling mempertahankan iterasi linear, bukan konversi ke rekursi.",
      "C": "Opsi C salah karena semantik total iterasi tetap dipertahankan persis sama.",
      "D": "Opsi D salah karena unrolling bekerja pada level satu thread di register CPU."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-092",
    "level": "advanced",
    "topic": "Clean Code & Refactoring",
    "questionType": "concept",
    "question": "Dalam arsitektur Clean Architecture / Hexagonal Architecture (Ports and Adapters), ke arah manakah arah ketergantungan (Dependency Rule) selalu mengarah?",
    "options": {
      "A": "Ketergantungan kode sumber selalu mengarah ke dalam (inward) menuju Domain Entities / Core Business Logic; lapisan luar (Framework, UI, Database) bergantung pada lapisan dalam, bukan sebaliknya",
      "B": "Semua lapisan bisnis wajib bergantung pada database MySQL",
      "C": "Lapisan Entity bergantung pada controller Spring",
      "D": "Tidak ada aturan dependensi dalam Hexagonal Architecture"
    },
    "answer": "A",
    "explanation": {
      "correct": "Inti dari Hexagonal Architecture adalah melindungi Domain Model murni dari ketergantungan framework atau infrastruktur luar. Domain berada di pusat lingkaran dan hanya mendefinisikan 'Ports' (interface), sedangkan database dan web controller adalah 'Adapters' di luar yang mengimplementasikan atau memanggil ports tersebut.",
      "A": "Opsi A benar karena Dependency Rule menyatakan dependensi hanya boleh mengarah ke dalam menuju domain.",
      "B": "Opsi B salah karena domain bisnis harus independen dari vendor database.",
      "C": "Opsi C salah karena controller adalah detail infrastruktur di lapisan paling luar.",
      "D": "Opsi D salah karena Dependency Rule adalah aturan paling mendasar arsitektur ini."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-093",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "questionType": "concept",
    "question": "Pola arsitektur apakah yang memisahkan event mutasi data dan state storage menjadi model log urutan peristiwa yang dapat dibaca ulang untuk membangun kembali status sistem?",
    "options": {
      "A": "Event Sourcing",
      "B": "Layered Architecture",
      "C": "Pipe and Filter",
      "D": "Client-Server"
    },
    "answer": "A",
    "explanation": {
      "correct": "Event Sourcing menyimpan semua state transitions sebagai immutable stream of events di Event Store, memberikan audit log 100% akurat dan kemampuan time-travel debugging.",
      "A": "Opsi A benar karena mendefinisikan prinsip dasar Event Sourcing.",
      "B": "Opsi B salah karena Layered Architecture adalah pemisahan tingkat Presentasi, Bisnis, Data.",
      "C": "Opsi C salah karena Pipe and Filter untuk transformasi stream data sekuensial.",
      "D": "Opsi D salah karena Client-Server adalah model jaringan klasik."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-094",
    "level": "advanced",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Bagaimanakah cara kerja algoritma penandatanganan JWT asimetris (RS256) dibandingkan algoritma simetris (HS256)?",
    "options": {
      "A": "RS256 menggunakan pasangan Private Key untuk menandatangani token di server otentikasi (Authorization Server) dan Public Key untuk memverifikasi tanda tangan di Resource Server, sedangkan HS256 menggunakan Secret Key bersama yang sama untuk signing dan verifikasi",
      "B": "HS256 tidak memiliki signature sama sekali",
      "C": "RS256 hanya boleh digunakan di platform Linux",
      "D": "Keduanya menggunakan kunci publik yang sama persis"
    },
    "answer": "A",
    "explanation": {
      "correct": "RS256 (RSA Signature dengan SHA-256) memungkinkan microservices memverifikasi validitas token secara mandiri hanya menggunakan Public Key tanpa perlu membocorkan Private Key pembuat token, sangat aman untuk arsitektur terdistribusi.",
      "A": "Opsi A benar karena membedakan mekanisme asimetris (Private/Public) vs simetris (Shared Secret).",
      "B": "Opsi B salah karena HS256 menghasilkan signature menggunakan algoritma HMAC-SHA256.",
      "C": "Opsi C salah karena algoritma kriptografi bekerja di semua OS.",
      "D": "Opsi D salah karena HS256 menggunakan symmetric shared key, bukan public key."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-095",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
    "questionType": "concept",
    "question": "Apa dampak dari 'Index Bloat' pada tabel database relasional yang sering mengalami operasi UPDATE dan DELETE dalam skala masif, dan bagaimana cara memperbaikinya?",
    "options": {
      "A": "Pohon indeks B-Tree memiliki banyak halaman yang hampir kosong atau terfragmentasi sehingga meningkatkan I/O disk secara drastis saat pencarian; diperbaiki dengan perintah 'REINDEX TABLE' atau 'ALTER INDEX ... REBUILD'",
      "B": "Tabel otomatis terkunci permanen",
      "C": "Data pengguna terhapus otomatis",
      "D": "Database akan menolak semua koneksi baru"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fragmentasi indeks terjadi ketika ruang kosong di dalam node daun B-Tree tidak dapat dipakai ulang secara optimal pasca penghapusan baris. REINDEX membangun ulang pohon B-Tree dari awal menjadi struktur yang padat dan berurutan kembali.",
      "A": "Opsi A benar karena menjelaskan fragmentasi halaman indeks dan solusi REINDEX.",
      "B": "Opsi B salah karena index bloat tidak mengunci tabel secara permanen.",
      "C": "Opsi C salah karena data asli tetap utuh.",
      "D": "Opsi D salah karena koneksi tetap dilayani meskipun performa query melambat."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-096",
    "level": "advanced",
    "topic": "Concurrency & Multi-threading",
    "questionType": "concept",
    "question": "Mengapa penggunaan 'Thread.stop()' sudah di-deprecated sejak Java 1.2 dan sangat dilarang untuk digunakan?",
    "options": {
      "A": "Karena Thread.stop() secara paksa menghentikan thread dan melepaskan semua monitor lock yang sedang dipegangnya, meninggalkan objek-objek bersama dalam kondisi 'corrupted/inconsistent state' yang tidak dapat dipulihkan",
      "B": "Karena method tersebut menghapus class file dari disk",
      "C": "Karena method tersebut hanya bekerja di sistem operasi Windows 95",
      "D": "Karena method tersebut membuat CPU server kehabisan daya"
    },
    "answer": "A",
    "explanation": {
      "correct": "Thread.stop() melempar ThreadDeath exception yang tidak terkendali. Jika thread sedang berada di tengah pembaruan dua field terikat di dalam blok synchronized, pelepasan lock secara instan mengekspos objek yang rusak ke thread lain.",
      "A": "Opsi A benar karena penghentian mendadak merusak konsistensi data yang dilindungi lock.",
      "B": "Opsi B salah karena tidak ada manipulasi file class.",
      "C": "Opsi C salah karena merupakan API bytecode Java di semua OS.",
      "D": "Opsi D salah karena bukan masalah pasokan daya listrik."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-097",
    "level": "advanced",
    "topic": "JVM & Performance",
    "questionType": "concept",
    "question": "Apa fungsi dari JVM flag '-XX:+UseStringDeduplication' pada Garbage Collector modern (G1 / ZGC)?",
    "options": {
      "A": "Secara otomatis memindai objek String di heap dan mengarahkan string yang memiliki isi karakter byte array identik untuk berbagi char/byte array yang sama di memori, menghemat konsumsi heap hingga 10-20%",
      "B": "Menghapus semua kata duplikat dalam dokumen teks",
      "C": "Menonaktifkan pembuatan objek String baru di aplikasi",
      "D": "Mengubah semua String menjadi huruf kecil"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada banyak aplikasi enterprise, objek String memakan 25% memori heap dan sering kali duplikat (misal nama status 'ACTIVE'). String Deduplication memanfaatkan GC background pass untuk menyatukan internal byte[] array tanpa merusak immutabilitas String.",
      "A": "Opsi A benar karena menjelaskan optimasi penghematan memori melalui deduplikasi byte array internal string.",
      "B": "Opsi B salah karena bukan tool pemrosesan teks dokumen.",
      "C": "Opsi C salah karena instansiasi string baru tetap berfungsi normal.",
      "D": "Opsi D salah karena tidak mengubah isi nilai string."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-098",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "questionType": "concept",
    "question": "Dalam perancangan REST API terdistribusi skala besar, bagaimana konsep 'Idempotency Key' diimplementasikan pada endpoint pembayaran (POST /api/v1/payments)?",
    "options": {
      "A": "Klien menghasilkan UUID unik untuk setiap transaksi di header 'Idempotency-Key'; server memeriksa key tersebut di Redis / database dalam lock terdistribusi, jika sudah pernah diproses, server mengembalikan respons yang sama tanpa mendebit ulang saldo klien",
      "B": "Dengan menonaktifkan endpoint pembayaran setelah 1 kali pemakaian",
      "C": "Dengan menghapus rekening pengguna jika transaksi gagal",
      "D": "Dengan mengubah metode HTTP menjadi GET"
    },
    "answer": "A",
    "explanation": {
      "correct": "Idempotency Key mencegah double charge akibat network timeout di mana klien melakukan retry otomatis padahal request pertama sebenarnya sudah berhasil di backend. Server mencatat hasil request berdasarkan key tersebut dan memutarnya kembali jika key yang sama terdeteksi.",
      "A": "Opsi A benar karena merupakan standar industri pembayaran (seperti Stripe API) untuk menjamin idempotensi POST.",
      "B": "Opsi B salah karena endpoint harus terus melayani pembayaran baru berikutnya.",
      "C": "Opsi C salah karena itu merusak data pengguna.",
      "D": "Opsi D salah karena pembayaran mengubah data finansial dan harus tetap menggunakan POST."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-099",
    "level": "advanced",
    "topic": "Clean Code & Refactoring",
    "questionType": "concept",
    "question": "Apakah yang dimaksud dengan 'Tell, Don't Ask' principle dalam object-oriented design?",
    "options": {
      "A": "Beri tahu objek apa yang harus dilakukan (panggil method pada objek yang memegang data), alih-alih meminta data dari objek tersebut (getter) dan memanipulasinya di luar kelas objek",
      "B": "Jangan pernah bertanya kepada tech lead saat mengalami kendala",
      "C": "Semua method harus bertipe void tanpa return value",
      "D": "Jangan pernah menggunakan database relasional"
    },
    "answer": "A",
    "explanation": {
      "correct": "'Tell, Don't Ask' mendorong penggabungan data dan perilaku dalam satu wadah enkapsulasi yang erat. Mengambil data dengan getter lalu menghitung di service luar melanggar enkapsulasi dan menyebabkan anemic domain model.",
      "A": "Opsi A benar karena menegakkan prinsip enkapsulasi dan penempatan logika bisnis yang tepat.",
      "B": "Opsi B salah karena bukan aturan sosial komunikasi tim.",
      "C": "Opsi C salah karena query method tetap diizinkan mengembalikan data.",
      "D": "Opsi D salah karena ini adalah prinsip OOP tingkat kode, bukan pemilihan database."
    },
    "jobId": "junior-java",
    "mode": "test"
  },
  {
    "id": "JT-100",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "questionType": "concept",
    "question": "Dalam protokol messaging Apache Kafka, bagaimana konfigurasi 'acks=all' (atau -1) bersama 'min.insync.replicas=2' menjamin durabilitas data produsen?",
    "options": {
      "A": "Pesan hanya dianggap berhasil dikirimkan ketika telah berhasil ditulis dan dikonfirmasi oleh broker leader serta minimal satu broker follower in-sync replica (ISR), menjamin pesan tidak hilang meskipun leader crash seketika",
      "B": "Pesan akan dikirimkan ke semua komputer di seluruh dunia",
      "C": "Pesan tidak disimpan ke disk melainkan di memori RAM selama 1 detik",
      "D": "Pesan akan otomatis dibaca oleh semua consumer seketika"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kombinasi acks=all dan min.insync.replicas menjamin tidak ada data loss (zero data loss) jika terjadi failover partisi Kafka, karena terdapat salinan data yang terkonfirmasi secara persisten di lebih dari satu node independen sebelum producer melanjutkan langkah berikutnya.",
      "A": "Opsi A benar karena menjelaskan jaminan durabilitas tinggi (high durability) pada Kafka replication.",
      "B": "Opsi B salah karena replikasi hanya terjadi di dalam cluster Kafka.",
      "C": "Opsi C salah karena Kafka menjamin commit log ditulis secara terstruktur.",
      "D": "Opsi D salah karena consumer membaca data secara asinkron berdasarkan offset masing-masing."
    },
    "jobId": "junior-java",
    "mode": "test"
  }
];
