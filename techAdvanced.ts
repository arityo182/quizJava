import { Question } from './types';

export const TECH_ADVANCED: Question[] = [
  {
    "id": "JA-001",
    "level": "advanced",
    "topic": "Java Concurrency",
    "questionType": "output",
    "question": "Apa output dari eksekusi CompletableFuture berikut yang menggunakan thenApply dan thenAccept?\n\n```java\nCompletableFuture.supplyAsync(() -> \"Hello\")\n    .thenApply(s -> s + \" World\")\n    .thenApply(String::toUpperCase)\n    .thenAccept(System.out::println)\n    .join();\n```",
    "code": "CompletableFuture.supplyAsync(() -> \"Hello\")\n    .thenApply(s -> s + \" World\")\n    .thenApply(String::toUpperCase)\n    .thenAccept(System.out::println)\n    .join();",
    "options": {
      "A": "HELLO WORLD",
      "B": "Hello World",
      "C": "null",
      "D": "Throw CompletionException"
    },
    "answer": "A",
    "explanation": {
      "correct": "supplyAsync menghasilkan 'Hello'. thenApply pertama merubahnya menjadi 'Hello World', thenApply kedua merubahnya menjadi 'HELLO WORLD', dan thenAccept mencetaknya ke stdout.",
      "A": "Benar. Rantai thenApply memodifikasi teks hingga menjadi huruf kapital penuh.",
      "B": "Salah. thenApply kedua memanggil toUpperCase() sehingga bukan format Title Case.",
      "C": "Salah. thenAccept mengeksekusi Consumer terhadap string hasil rantai, bukan null.",
      "D": "Salah. Semua fungsi murni dan valid, tidak terjadi exception."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-002",
    "level": "advanced",
    "topic": "Java Memory & References",
    "questionType": "output",
    "question": "Apa output pengecekan WeakReference setelah System.gc() dipicu?\n\n```java\nObject strong = new Object();\nWeakReference<Object> weak = new WeakReference<>(new Object());\nSystem.gc();\nSystem.out.println(weak.get() == null);\n```",
    "code": "Object strong = new Object();\nWeakReference<Object> weak = new WeakReference<>(new Object());\nSystem.gc();\nSystem.out.println(weak.get() == null);",
    "options": {
      "A": "true",
      "B": "false",
      "C": "NullPointerException",
      "D": "Tergantung JVM tapi umumnya false"
    },
    "answer": "A",
    "explanation": {
      "correct": "Objek yang direferensikan oleh WeakReference tidak memiliki referensi kuat (strong reference) lain. Begitu System.gc() berjalan dan mengoleksi memori, weak.get() akan mengembalikan null (sehingga == null adalah true).",
      "A": "Benar. Tanpa strong reference, objek yang hanya dipegang weak reference langsung di-garbage collect.",
      "B": "Salah. Karena tidak ada strong reference sama sekali, objek memenuhi syarat untuk segera dihapus GC.",
      "C": "Salah. weak.get() mengembalikan null, tidak melempar NullPointerException.",
      "D": "Salah. Definisi formal WeakReference adalah dikoleksi pada siklus GC berikutnya saat tidak ada strong reachability."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-003",
    "level": "advanced",
    "topic": "Java Concurrency",
    "questionType": "output",
    "question": "Apa output penggunaan AtomicInteger dengan compareAndSet berikut?\n\n```java\nAtomicInteger ai = new AtomicInteger(10);\nboolean b1 = ai.compareAndSet(10, 20);\nboolean b2 = ai.compareAndSet(10, 30);\nSystem.out.println(b1 + \" \" + b2 + \" \" + ai.get());\n```",
    "code": "AtomicInteger ai = new AtomicInteger(10);\nboolean b1 = ai.compareAndSet(10, 20);\nboolean b2 = ai.compareAndSet(10, 30);\nSystem.out.println(b1 + \" \" + b2 + \" \" + ai.get());",
    "options": {
      "A": "true false 20",
      "B": "true true 30",
      "C": "false true 30",
      "D": "true false 10"
    },
    "answer": "A",
    "explanation": {
      "correct": "compareAndSet(expected, update): b1 berhasil karena nilai saat ini 10 == 10, ai berubah menjadi 20. b2 gagal karena nilai saat ini 20 != 10. Nilai akhir ai adalah 20.",
      "A": "Benar. b1 berhasil mengubah nilai ke 20, b2 gagal karena expected value 10 tidak lagi cocok.",
      "B": "Salah. b2 gagal karena nilai ai sudah menjadi 20.",
      "C": "Salah. b1 berhasil sehingga b1 true, bukan false.",
      "D": "Salah. Nilai ai berubah menjadi 20 setelah operasi b1."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-004",
    "level": "advanced",
    "topic": "Java Core & Generics",
    "questionType": "output",
    "question": "Apa output dari pemanggilan method generic dengan type inference berikut?\n\n```java\npublic static <T extends Number> double sum(T a, T b) {\n    return a.doubleValue() + b.doubleValue();\n}\n// di main:\nSystem.out.println(sum(3, 4.5));\n```",
    "code": "public static <T extends Number> double sum(T a, T b) {\n    return a.doubleValue() + b.doubleValue();\n}\n// di main:\nSystem.out.println(sum(3, 4.5));",
    "options": {
      "A": "7.5",
      "B": "7.0",
      "C": "Compile Error (Type Inference Mismatch)",
      "D": "ClassCastException"
    },
    "answer": "C",
    "explanation": {
      "correct": "Pada pemanggilan sum(3, 4.5), compiler mencoba menginferensi tipe T dari parameter 3 (Integer) dan 4.5 (Double). Karena keduanya adalah tipe berbeda dan generic T harus konsisten untuk kedua argumen, pemanggilan ini gagal kompilasi (compiler inference conflict pada Java strict generic).",
      "A": "Salah. Pemanggilan ini gagal pada fase kompilasi karena konflik tipe argumen generic T.",
      "B": "Salah. Compiler tidak otomatis meng-cast salah satu parameter ke Double.",
      "C": "Benar. Argumen pertama Integer dan argumen kedua Double menyebabkan kegagalan resolusi tipe T yang sama.",
      "D": "Salah. Kesalahan terjadi di waktu kompilasi, bukan runtime."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-005",
    "level": "advanced",
    "topic": "Java Streams",
    "questionType": "output",
    "question": "Apa output operasi parallel stream reduce tanpa identity yang netral?\n\n```java\nList<Integer> list = Arrays.asList(1, 2, 3);\nint res = list.parallelStream().reduce(10, (a, b) -> a + b, Integer::sum);\nSystem.out.println(res);\n```",
    "code": "List<Integer> list = Arrays.asList(1, 2, 3);\nint res = list.parallelStream().reduce(10, (a, b) -> a + b, Integer::sum);\nSystem.out.println(res);",
    "options": {
      "A": "16",
      "B": "36",
      "C": "46",
      "D": "Compile Error"
    },
    "answer": "B",
    "explanation": {
      "correct": "Pada parallel stream, setiap chunk worker thread menerapkan identity (10) ke elemen lokalnya: (10+1) + (10+2) + (10+3) = 11 + 12 + 13 = 36. Identity untuk penjumlahan harus 0 agar aman di parallel stream.",
      "A": "Salah. 16 adalah hasil jika dijalankan secara sequential (10 + 1 + 2 + 3).",
      "B": "Benar. Karena identity 10 diterapkan ke tiap partisi worker thread pada parallelStream (11 + 12 + 13 = 36).",
      "C": "Salah. 46 bukan hasil yang dihitung oleh combiner.",
      "D": "Salah. Sintaks three-argument reduce valid untuk parallel stream."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-006",
    "level": "advanced",
    "topic": "Java Reflection",
    "questionType": "output",
    "question": "Apa output pemanggilan method via Reflection pada method private?\n\n```java\nclass Secret {\n    private String ping() { return \"pong\"; }\n}\n// kode:\nMethod m = Secret.class.getDeclaredMethod(\"ping\");\nm.setAccessible(true);\nSystem.out.println(m.invoke(new Secret()));\n```",
    "code": "class Secret {\n    private String ping() { return \"pong\"; }\n}\n// kode:\nMethod m = Secret.class.getDeclaredMethod(\"ping\");\nm.setAccessible(true);\nSystem.out.println(m.invoke(new Secret()));",
    "options": {
      "A": "pong",
      "B": "IllegalAccessException",
      "C": "NoSuchMethodException",
      "D": "null"
    },
    "answer": "A",
    "explanation": {
      "correct": "getDeclaredMethod mengambil method private dari class. m.setAccessible(true) menonaktifkan pemeriksaan akses Java language, sehingga invoke berhasil mengembalikan 'pong'.",
      "A": "Benar. setAccessible(true) mengizinkan akses runtime ke private method.",
      "B": "Salah. IllegalAccessException tidak terjadi karena setAccessible(true) sudah dipanggil.",
      "C": "Salah. getDeclaredMethod berhasil menemukan method private bernama 'ping'.",
      "D": "Salah. Method ping mengembalikan string 'pong', bukan void/null."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-007",
    "level": "advanced",
    "topic": "Java Concurrency",
    "questionType": "output",
    "question": "Apa output eksekusi CountDownLatch berikut?\n\n```java\nCountDownLatch latch = new CountDownLatch(2);\nlatch.countDown();\nSystem.out.print(latch.getCount() + \" \");\nlatch.countDown();\nSystem.out.print(latch.getCount());\n```",
    "code": "CountDownLatch latch = new CountDownLatch(2);\nlatch.countDown();\nSystem.out.print(latch.getCount() + \" \");\nlatch.countDown();\nSystem.out.print(latch.getCount());",
    "options": {
      "A": "1 0",
      "B": "2 1",
      "C": "1 -1",
      "D": "0 0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Nilai awal CountDownLatch adalah 2. Setiap countDown() mengurangkan hitungan sebanyak 1. Setelah panggilan pertama getCount() adalah 1, dan setelah panggilan kedua getCount() adalah 0.",
      "A": "Benar. Hitungan berkurang dari 2 ke 1, lalu ke 0.",
      "B": "Salah. countDown() pertama mengurangi nilai dari 2 ke 1.",
      "C": "Salah. CountDownLatch tidak pernah bernilai negatif; berhenti di 0.",
      "D": "Salah. getCount() pertama masih bernilai 1."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-008",
    "level": "advanced",
    "topic": "Spring Boot SpEL",
    "questionType": "output",
    "question": "Apa output evaluasi SpEL (Spring Expression Language) berikut?\n\n```java\nExpressionParser parser = new SpelExpressionParser();\nExpression exp = parser.parseExpression(\"'Hello '.concat('Spring').length()\");\nSystem.out.println(exp.getValue());\n```",
    "code": "ExpressionParser parser = new SpelExpressionParser();\nExpression exp = parser.parseExpression(\"'Hello '.concat('Spring').length()\");\nSystem.out.println(exp.getValue());",
    "options": {
      "A": "12",
      "B": "11",
      "C": "Hello Spring",
      "D": "EvaluationException"
    },
    "answer": "A",
    "explanation": {
      "correct": "'Hello ' (6 karakter) + 'Spring' (6 karakter) menghasilkan 'Hello Spring' dengan panjang total 12 karakter. SpEL mengevaluasi rantai method concat dan length() dengan sukses.",
      "A": "Benar. Panjang string gabungan 'Hello Spring' adalah 12.",
      "B": "Salah. 'Hello ' memiliki spasi di akhir sehingga total karakter adalah 12, bukan 11.",
      "C": "Salah. Method .length() dipanggil di akhir sehingga output bertipe Integer.",
      "D": "Salah. Sintaks SpEL ini sepenuhnya valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-009",
    "level": "advanced",
    "topic": "Java Generics Pecs",
    "questionType": "output",
    "question": "Perhatikan kode generics berikut. Manakah baris yang valid saat compile?\n\n```java\nList<? extends Number> list = new ArrayList<Integer>();\n// Baris A: list.add(10);\n// Baris B: Number n = list.get(0);\n// Baris C: list.add(null);\n```",
    "code": "List<? extends Number> list = new ArrayList<Integer>();\n// Baris A: list.add(10);\n// Baris B: Number n = list.get(0);\n// Baris C: list.add(null);",
    "options": {
      "A": "Hanya Baris B dan C",
      "B": "Hanya Baris A dan B",
      "C": "Semua baris valid",
      "D": "Hanya Baris B"
    },
    "answer": "A",
    "explanation": {
      "correct": "Prinsip PECS (Producer Extends, Consumer Super): `List<? extends Number>` adalah producer, hanya bisa dibaca (get mengembalikan Number). Kita tidak bisa menambahkan objek konkret karena tipe sebenarnya tidak diketahui di compile-time. Namun literal null selalu diizinkan untuk semua tipe referensi.",
      "A": "Benar. Baris B valid (read aman sebagai Number) dan Baris C valid (null diperbolehkan). Baris A compile error.",
      "B": "Salah. Baris A compile error karena kita tidak bisa memanggil .add() pada wildcard extends.",
      "C": "Salah. Baris A tidak dapat dikompilasi.",
      "D": "Salah. Baris C (add null) juga valid secara sintaksis generics Java."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-010",
    "level": "advanced",
    "topic": "Spring Cache",
    "questionType": "output",
    "question": "Apa yang dicetak ke console saat getProduct dipanggil dua kali dengan ID yang sama?\n\n```java\n@Cacheable(\"products\")\npublic Product getProduct(Long id) {\n    System.out.println(\"Fetch DB \" + id);\n    return new Product(id, \"Item\");\n}\n// service.getProduct(1L);\n// service.getProduct(1L);\n```",
    "code": "@Cacheable(\"products\")\npublic Product getProduct(Long id) {\n    System.out.println(\"Fetch DB \" + id);\n    return new Product(id, \"Item\");\n}\n// service.getProduct(1L);\n// service.getProduct(1L);",
    "options": {
      "A": "Fetch DB 1 tercetak 1 kali",
      "B": "Fetch DB 1 tercetak 2 kali",
      "C": "Fetch DB 1 tidak tercetak",
      "D": "NullPointerException"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Cacheable mengintersep pemanggilan method melalui proxy. Pada panggilan pertama dengan key id=1, data belum ada di cache sehingga body method dieksekusi ('Fetch DB 1' dicetak). Pada panggilan kedua, Spring mengembalikan value langsung dari cache tanpa mengeksekusi body method.",
      "A": "Benar. Pemanggilan kedua dilayani dari cache in-memory oleh Spring proxy.",
      "B": "Salah. Cache mencegah eksekusi ulang method body untuk key yang sama.",
      "C": "Salah. Pemanggilan pertama pasti mengeksekusi method body untuk mengisi cache.",
      "D": "Salah. Spring cache secara default mengembalikan objek hasil kembalian pertama."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-011",
    "level": "advanced",
    "topic": "Java ForkJoinPool",
    "questionType": "output",
    "question": "Apa output dari ForkJoinPool.commonPool().getParallelism() pada mesin dengan 8 core CPU?\n\n```java\nint p = ForkJoinPool.commonPool().getParallelism();\n// Berapa nilai p pada sistem dengan Runtime.getRuntime().availableProcessors() == 8?\n```",
    "code": "int p = ForkJoinPool.commonPool().getParallelism();\n// Berapa nilai p pada sistem dengan Runtime.getRuntime().availableProcessors() == 8?",
    "options": {
      "A": "7",
      "B": "8",
      "C": "1",
      "D": "16"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default di Java, ForkJoinPool common pool mengalokasikan parallelism sebesar (availableProcessors - 1), karena main thread yang men-submit task juga ikut bekerja membantu eksekusi task.",
      "A": "Benar. Default parallelism common pool adalah N - 1 (8 - 1 = 7).",
      "B": "Salah. 8 adalah total core, bukan default parallelism commonPool yang mencadangkan 1 thread untuk submitter.",
      "C": "Salah. Common pool memanfaatkan multi-core secara maksimal, bukan single-thread.",
      "D": "Salah. Parallelism tidak digandakan kecuali dikonfigurasi melalui system property java.util.concurrent.ForkJoinPool.common.parallelism."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-012",
    "level": "advanced",
    "topic": "Spring Boot Async",
    "questionType": "output",
    "question": "Perhatikan method @Async berikut. Di thread mana method dijalankan jika dipanggil dari class yang sama (self-invocation)?\n\n```java\n@Service\npublic class OrderService {\n    public void checkout() { doAudit(); }\n    @Async\n    public void doAudit() {\n        System.out.println(Thread.currentThread().getName());\n    }\n}\n```",
    "code": "@Service\npublic class OrderService {\n    public void checkout() { doAudit(); }\n    @Async\n    public void doAudit() {\n        System.out.println(Thread.currentThread().getName());\n    }\n}",
    "options": {
      "A": "Thread utama yang sama (pemanggilan sinkron / bypass proxy)",
      "B": "Thread async baru dari SimpleAsyncTaskExecutor",
      "C": "ThreadPoolTaskScheduler",
      "D": "Compile Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring menggunakan CGLIB/JDK dynamic proxy untuk fitur seperti @Async dan @Transactional. Pemanggilan method internal (`this.doAudit()`) mem-bypass proxy Spring, sehingga anotasi @Async diabaikan dan dieksekusi di thread yang sama secara sinkron.",
      "A": "Benar. Self-invocation melewati proxy Spring sehingga dieksekusi sinkron di thread pemanggil.",
      "B": "Salah. Anotasi @Async tidak aktif tanpa melewati Spring proxy bean.",
      "C": "Salah. Scheduler thread hanya untuk anotasi @Scheduled.",
      "D": "Salah. Kode valid secara kompilasi namun memiliki perangkap arsitektural (proxy bypass)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-013",
    "level": "advanced",
    "topic": "Spring Transactional",
    "questionType": "debug",
    "question": "Transaksi database berikut tidak di-rollback saat terjadi IOException. Apa penyebabnya?\n\n```java\n@Service\npublic class FileImportService {\n    @Transactional\n    public void processData() throws IOException {\n        repo.save(new Record());\n        throw new IOException(\"File corrupt\");\n    }\n}\n```",
    "code": "@Service\npublic class FileImportService {\n    @Transactional\n    public void processData() throws IOException {\n        repo.save(new Record());\n        throw new IOException(\"File corrupt\");\n    }\n}",
    "options": {
      "A": "@Transactional secara default hanya rollback pada RuntimeException dan Error, bukan checked exception",
      "B": "@Transactional tidak mendukung method yang melempar exception",
      "C": "IOException bukan turunan dari java.lang.Throwable",
      "D": "Harus menggunakan @Transactional(propagation = Propagation.NEVER)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, Spring `@Transactional` hanya melakukan rollback otomatis pada uncheck exception (`RuntimeException` dan `Error`). Checked exception seperti `IOException` dianggap sebagai kondisi bisnis yang dapat ditangani sehingga tidak memicu rollback, kecuali ditentukan `@Transactional(rollbackFor = Exception.class)`.",
      "A": "Benar. Untuk memicu rollback pada checked exception, wajib mendefinisikan rollbackFor = Exception.class.",
      "B": "Salah. Method transaksional dapat mendeklarasikan throws exception apa saja.",
      "C": "Salah. IOException adalah subclass resmi dari java.lang.Exception yang mewarisi Throwable.",
      "D": "Salah. Propagation.NEVER justru melarang adanya transaksi aktif."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-014",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Kode berikut melempar `LazyInitializationException` saat mengakses `order.getItems()` di controller. Apa penyebabnya?\n\n```java\n// Service:\n@Transactional(readOnly = true)\npublic Order getOrder(Long id) {\n    return orderRepository.findById(id).orElseThrow();\n}\n// Controller:\nOrder o = service.getOrder(1L);\nint total = o.getItems().size(); // EXCEPTION!\n```",
    "code": "// Service:\n@Transactional(readOnly = true)\npublic Order getOrder(Long id) {\n    return orderRepository.findById(id).orElseThrow();\n}\n// Controller:\nOrder o = service.getOrder(1L);\nint total = o.getItems().size(); // EXCEPTION!",
    "options": {
      "A": "Koleksi items dimuat secara LAZY dan transaksi/EntityManager Hibernate sudah ditutup saat objek sampai di controller",
      "B": "Objek Order bernilai null di database",
      "C": "Controller tidak boleh memanggil method .size() pada List",
      "D": "readOnly = true melarang pembacaan relasi antar entitas"
    },
    "answer": "A",
    "explanation": {
      "correct": "Relasi @OneToMany secara default bernilai FetchType.LAZY. Ketika method service selesai, session Hibernate ditutup. Saat getter koleksi dipanggil di controller di luar batas transaksi aktif, Hibernate tidak memiliki koneksi/session aktif untuk melakukan query tambahan sehingga melempar LazyInitializationException.",
      "A": "Benar. Akses lazy collection di luar batas transaksi aktif menyebabkan LazyInitializationException.",
      "B": "Salah. Objek order berhasil di-fetch oleh findById.",
      "C": "Salah. List.size() adalah operasi umum Java Collections.",
      "D": "Salah. readOnly = true tidak melarang fetching, melainkan mengoptimalkan dirty checking Hibernate."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-015",
    "level": "advanced",
    "topic": "JPA Concurrency",
    "questionType": "debug",
    "question": "Dua thread mengupdate saldo bank bersamaan dan terjadi Lost Update (salah satu saldo tertimpa). Apa solusi terbaik pada JPA?\n\n```java\n@Entity\npublic class Account {\n    @Id private Long id;\n    private BigDecimal balance;\n    // Bagaimana mencegah lost update tanpa locking manual yang lambat?\n}\n```",
    "code": "@Entity\npublic class Account {\n    @Id private Long id;\n    private BigDecimal balance;\n    // Bagaimana mencegah lost update tanpa locking manual yang lambat?\n}",
    "options": {
      "A": "Menambahkan anotasi @Version pada atribut penanda versi (Optimistic Locking)",
      "B": "Menghapus @Id dari entitas",
      "C": "Mengganti tipe balance menjadi String",
      "D": "Menonaktifkan transaksi Spring di service layer"
    },
    "answer": "A",
    "explanation": {
      "correct": "Optimistic Locking menggunakan anotasi `@Version private Long version;`. Hibernate akan menyertakan klausa `WHERE id = ? AND version = ?` pada query UPDATE. Jika thread lain telah mengubah versi, Hibernate akan melempar `OptimisticLockException` sehingga mencegah data tertimpa.",
      "A": "Benar. @Version memberikan mekanisme deteksi konflik konkuren tanpa memblokir baris database.",
      "B": "Salah. Entitas JPA wajib memiliki primary key (@Id).",
      "C": "Salah. Mengubah tipe data tidak menyelesaikan masalah konkurensi.",
      "D": "Salah. Menonaktifkan transaksi justru menyebabkan inkonsistensi data yang parah."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-016",
    "level": "advanced",
    "topic": "Spring Security",
    "questionType": "debug",
    "question": "Request POST ke endpoint REST API selalu menghasilkan HTTP 403 Forbidden padahal kredensial autentikasi sudah benar. Apa kemungkinan bug konfigurasinya?\n\n```java\n@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated());\n    return http.build();\n}\n```",
    "code": "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated());\n    return http.build();\n}",
    "options": {
      "A": "Proteksi CSRF aktif secara default dan menolak request POST tanpa CSRF token pada arsitektur stateless REST",
      "B": "Port server Spring Boot tidak terbuka",
      "C": "Method GET tidak diperbolehkan oleh sistem",
      "D": "Password encoder belum didefinisikan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Security mengaktifkan CSRF protection secara default. Pada REST API stateless yang menggunakan token (seperti JWT atau Bearer token), CSRF harus dinonaktifkan (`http.csrf(csrf -> csrf.disable())`) karena klien API tidak menyertakan CSRF cookie/token khas browser form.",
      "A": "Benar. CSRF default memblokir semua request non-idempotent (POST/PUT/DELETE) tanpa token CSRF.",
      "B": "Salah. Jika port tertutup, koneksi akan mengalami connection refused bukan HTTP 403.",
      "C": "Salah. Masalah terjadi pada request POST, bukan GET.",
      "D": "Salah. Jika password encoder hilang, autentikasi gagal saat login, bukan 403 pada request yang terautentikasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-017",
    "level": "advanced",
    "topic": "Java Concurrency",
    "questionType": "debug",
    "question": "Perhatikan implementasi Double-Checked Locking Singleton berikut. Apa kekurangan kritisnya?\n\n```java\npublic class MySingleton {\n    private static MySingleton instance;\n    public static MySingleton getInstance() {\n        if (instance == null) {\n            synchronized (MySingleton.class) {\n                if (instance == null) instance = new MySingleton();\n            }\n        }\n        return instance;\n    }\n}\n```",
    "code": "public class MySingleton {\n    private static MySingleton instance;\n    public static MySingleton getInstance() {\n        if (instance == null) {\n            synchronized (MySingleton.class) {\n                if (instance == null) instance = new MySingleton();\n            }\n        }\n        return instance;\n    }\n}",
    "options": {
      "A": "Variabel `instance` tidak dideklarasikan sebagai `volatile`, memungkinkan instruction reordering menghasilkan objek setengah terinisialisasi",
      "B": "Blok synchronized dilarang menggunakan MySingleton.class",
      "C": "Method getInstance() harus memiliki access modifier private",
      "D": "Pengecekan null pertama menyebabkan memory leak"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tanpa keyword `volatile`, compiler atau CPU dapat melakukan instruksi reordering: alokasi memori -> assign referensi ke instance -> jalankan konstruktor. Thread lain dapat melihat instance != null dan mengakses objek yang belum selesai dikonstruksi secara utuh.",
      "A": "Benar. Keyword volatile wajib ada pada Double-Checked Locking untuk mencegah instruction reordering.",
      "B": "Salah. Mengunci pada Class object sah dan standar pada static singleton.",
      "C": "Salah. getInstance() harus public agar bisa diakses klien.",
      "D": "Salah. Pengecekan null pertama adalah optimasi performa agar tidak selalu masuk ke synchronized."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-018",
    "level": "advanced",
    "topic": "Spring AOP",
    "questionType": "debug",
    "question": "Pointcut AOP berikut tidak pernah terpicu saat method controller dipanggil. Di mana kesalahan sintaks Expression-nya?\n\n```java\n@Aspect\n@Component\npublic class LoggingAspect {\n    @Before(\"execution(* com.example.service.*(..))\")\n    public void logBefore() {\n        System.out.println(\"Executing service...\");\n    }\n}\n```",
    "code": "@Aspect\n@Component\npublic class LoggingAspect {\n    @Before(\"execution(* com.example.service.*(..))\")\n    public void logBefore() {\n        System.out.println(\"Executing service...\");\n    }\n}",
    "options": {
      "A": "Format sintaks pointcut harus 'execution(* com.example.service.*.*(..))' untuk mencakup class dan method",
      "B": "Anotasi @Aspect dilarang digabungkan dengan @Component",
      "C": "Method logBefore harus mengembalikan nilai String",
      "D": "AOP Spring hanya bisa meng-intersep method private"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ekspresi `execution(* com.example.service.*(..))` mencari method langsung di bawah package `service`. Untuk meng-intersep semua method pada semua class di dalam package tersebut, polanya adalah `execution(* com.example.service.*.*(..))` (package.*.method(..)).",
      "A": "Benar. Pola package.*.*(..) mendefinisikan package, nama class, dan nama method.",
      "B": "Salah. @Component wajib disertakan agar Aspect didaftarkan sebagai Spring bean.",
      "C": "Salah. Advice @Before umumnya bertipe void.",
      "D": "Salah. Spring AOP berbasis proxy hanya bisa meng-intersep public method."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-019",
    "level": "advanced",
    "topic": "Hibernate N+1 Query",
    "questionType": "debug",
    "question": "Query JPQL berikut memicu 101 query database saat meload 100 User beserta Role-nya. Bagaimana cara memperbaikinya?\n\n```java\n@Query(\"SELECT u FROM User u\")\nList<User> findAllUsers();\n```",
    "code": "@Query(\"SELECT u FROM User u\")\nList<User> findAllUsers();",
    "options": {
      "A": "Menggunakan JOIN FETCH: 'SELECT u FROM User u JOIN FETCH u.roles'",
      "B": "Menambahkan LIMIT 100 pada query JPQL",
      "C": "Mengubah tipe relasi menjadi @ManyToMany",
      "D": "Menghapus anotasi @Query dan memakai default JpaRepository.findAll()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Masalah N+1 query terjadi ketika relasi di-fetch satu per satu untuk tiap parent entity. Menggunakan `JOIN FETCH` (atau `@EntityGraph`) memaksa Hibernate melakukan single SQL query dengan INNER/LEFT JOIN untuk memuat parent beserta children secara bersamaan.",
      "A": "Benar. JOIN FETCH memerintahkan JPA provider mengambil data relasi dalam 1 query SQL gabungan.",
      "B": "Salah. LIMIT tidak menyelesaikan masalah N+1 untuk 100 data yang di-load.",
      "C": "Salah. Mengubah jenis relasi tidak otomatis menghilangkan pemanggilan lazy batch N+1.",
      "D": "Salah. Default findAll() tanpa spesifikasi fetch mode tetap mengalami masalah N+1 jika relasi diakses."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-020",
    "level": "advanced",
    "topic": "Spring Boot Async",
    "questionType": "debug",
    "question": "Method async berikut melempar exception, namun ExceptionHandler Global (`@RestControllerAdvice`) tidak menangkapnya. Mengapa?\n\n```java\n@Async\npublic void sendEmailNotification(String to) {\n    throw new MailException(\"SMTP Server Down\");\n}\n```",
    "code": "@Async\npublic void sendEmailNotification(String to) {\n    throw new MailException(\"SMTP Server Down\");\n}",
    "options": {
      "A": "Method void @Async dijalankan di worker thread terpisah dan unhandled exception-nya hanya ditangani oleh AsyncUncaughtExceptionHandler",
      "B": "Anotasi @Async hanya bekerja untuk method yang mengembalikan boolean",
      "C": "@RestControllerAdvice tidak boleh menangani MailException",
      "D": "Spring Boot melarang pelemparan exception dari class Service"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena method async bertipe return `void` berjalan di thread executor latar belakang, exception yang terjadi tidak pernah kembali ke container thread HTTP servlet. Oleh karena itu, `@RestControllerAdvice` tidak dapat menangkapnya. Penanganan harus diatur melalui `AsyncUncaughtExceptionHandler` atau mengembalikan `CompletableFuture<Void>`.",
      "A": "Benar. Thread pool asynchronous tidak terhubung langsung dengan HTTP request thread pembawa exception handler.",
      "B": "Salah. @Async dapat mengembalikan void atau tipe Future/CompletableFuture.",
      "C": "Salah. RestControllerAdvice dapat menangani exception tipe apa pun yang meletus di servlet thread.",
      "D": "Salah. Exception di service layer sangat lazim dan merupakan bagian dari alur kontrol aplikasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-021",
    "level": "advanced",
    "topic": "Spring Security Config",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi SecurityFilterChain berikut agar endpoint '/api/admin/**' hanya bisa diakses oleh role 'ADMIN':\n\n```java\n@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    return http\n        .authorizeHttpRequests(auth -> auth\n            .requestMatchers(\"/api/admin/**\").___\n            .anyRequest().authenticated()\n        )\n        .build();\n}\n```",
    "code": "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    return http\n        .authorizeHttpRequests(auth -> auth\n            .requestMatchers(\"/api/admin/**\").___\n            .anyRequest().authenticated()\n        )\n        .build();\n}",
    "options": {
      "A": "hasRole(\"ADMIN\")",
      "B": "hasAuthority(\"ROLE_USER\")",
      "C": "permitAll()",
      "D": "denyAll()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method hasRole('ADMIN') secara otomatis mencocokkan authority dengan prefix 'ROLE_ADMIN'. Jika menggunakan hasAuthority(), nama yang ditulis harus lengkap 'ROLE_ADMIN'.",
      "A": "Benar. hasRole('ADMIN') memeriksa peran pengguna dengan standar Spring Security.",
      "B": "Salah. hasAuthority('ROLE_USER') memberikan izin kepada user biasa, bukan admin.",
      "C": "Salah. permitAll() membuka akses untuk umum tanpa autentikasi.",
      "D": "Salah. denyAll() memblokir akses untuk semua orang termasuk admin."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-022",
    "level": "advanced",
    "topic": "JPA Specification",
    "questionType": "completion",
    "question": "Lengkapi predicate Specification berikut untuk mencari User berdasarkan status aktif dan nama (LIKE):\n\n```java\npublic static Specification<User> findByNameAndStatus(String name, String status) {\n    return (root, query, cb) -> cb.and(\n        cb.equal(root.get(\"status\"), status),\n        cb.___(cb.lower(root.get(\"name\")), \"%\" + name.toLowerCase() + \"%\")\n    );\n}\n```",
    "code": "public static Specification<User> findByNameAndStatus(String name, String status) {\n    return (root, query, cb) -> cb.and(\n        cb.equal(root.get(\"status\"), status),\n        cb.___(cb.lower(root.get(\"name\")), \"%\" + name.toLowerCase() + \"%\")\n    );\n}",
    "options": {
      "A": "like",
      "B": "matches",
      "C": "contains",
      "D": "similarTo"
    },
    "answer": "A",
    "explanation": {
      "correct": "CriteriaBuilder menyediakan method `cb.like(Expression<String>, String)` untuk membuat klausa SQL `LIKE`. Method `matches` atau `contains` bukan method dari CriteriaBuilder JPA.",
      "A": "Benar. cb.like adalah method standar CriteriaBuilder untuk pencocokan pola string.",
      "B": "Salah. CriteriaBuilder tidak memiliki method bernama matches.",
      "C": "Salah. Method contains bukan bagian dari JPA CriteriaBuilder API.",
      "D": "Salah. similarTo adalah sintaks regex Postgres, bukan method CriteriaBuilder standar."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-023",
    "level": "advanced",
    "topic": "Spring Data Auditing",
    "questionType": "completion",
    "question": "Lengkapi field entitas berikut agar waktu update otomatis tercatat oleh Spring Data JPA:\n\n```java\n@Entity\n@EntityListeners(AuditingEntityListener.class)\npublic class AuditLog {\n    @Id private Long id;\n    \n    ___(updatable = false)\n    private LocalDateTime createdAt;\n    \n    ___\n    private LocalDateTime lastModifiedAt;\n}\n```",
    "code": "@Entity\n@EntityListeners(AuditingEntityListener.class)\npublic class AuditLog {\n    @Id private Long id;\n    \n    ___(updatable = false)\n    private LocalDateTime createdAt;\n    \n    ___\n    private LocalDateTime lastModifiedAt;\n}",
    "options": {
      "A": "@CreatedDate dan @LastModifiedDate",
      "B": "@CreationTimestamp dan @UpdateTimestamp saja tanpa listener",
      "C": "@Temporal dan @Version",
      "D": "@NotNull dan @ReadOnly"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi resmi Spring Data JPA Auditing adalah `@CreatedDate` untuk waktu pembuatan dan `@LastModifiedDate` untuk waktu modifikasi terakhir, didukung oleh `@EnableJpaAuditing` pada konfigurasi aplikasi.",
      "A": "Benar. @CreatedDate dan @LastModifiedDate adalah anotasi standar Spring Data Auditing.",
      "B": "Salah. Walaupun anotasi Hibernate @CreationTimestamp ada, listener AuditingEntityListener dirancang untuk @CreatedDate.",
      "C": "Salah. @Temporal untuk format java.util.Date lama, dan @Version untuk optimistic locking.",
      "D": "Salah. @ReadOnly dan @NotNull bukan anotasi pengisian timestamp otomatis."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-024",
    "level": "advanced",
    "topic": "Java CompletableFuture",
    "questionType": "completion",
    "question": "Lengkapi kode berikut agar hasil dari dua asynchronous task (taskA dan taskB) digabungkan menjadi satu string:\n\n```java\nCompletableFuture<String> futureA = CompletableFuture.supplyAsync(() -> \"Part 1\");\nCompletableFuture<String> futureB = CompletableFuture.supplyAsync(() -> \"Part 2\");\n\nCompletableFuture<String> combined = futureA.___(futureB, (a, b) -> a + \" & \" + b);\n```",
    "code": "CompletableFuture<String> futureA = CompletableFuture.supplyAsync(() -> \"Part 1\");\nCompletableFuture<String> futureB = CompletableFuture.supplyAsync(() -> \"Part 2\");\n\nCompletableFuture<String> combined = futureA.___(futureB, (a, b) -> a + \" & \" + b);",
    "options": {
      "A": "thenCombine",
      "B": "thenCompose",
      "C": "applyToEither",
      "D": "allOf"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `thenCombine` digunakan untuk menjalankan dua Future secara independen dan mengeksekusi BiFunction ketika kedua Future telah selesai dengan sukses.",
      "A": "Benar. thenCombine menerima CompletionStage kedua dan BiFunction untuk menggabungkan hasil keduanya.",
      "B": "Salah. thenCompose digunakan untuk dependent future (monadic flatMap alur sekuensial).",
      "C": "Salah. applyToEither hanya mengambil hasil dari task mana pun yang selesai lebih cepat.",
      "D": "Salah. allOf mengembalikan CompletableFuture<Void> tanpa value return langsung."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-025",
    "level": "advanced",
    "topic": "Spring Retry",
    "questionType": "completion",
    "question": "Lengkapi anotasi retry berikut agar method mencoba ulang maksimal 3 kali saat terjadi RemoteServiceException dengan jeda 1000ms:\n\n```java\n___(retryFor = RemoteServiceException.class, maxAttempts = 3, backoff = @Backoff(delay = 1000))\npublic String callExternalApi() {\n    return restTemplate.getForObject(\"http://thirdparty/api\", String.class);\n}\n```",
    "code": "___(retryFor = RemoteServiceException.class, maxAttempts = 3, backoff = @Backoff(delay = 1000))\npublic String callExternalApi() {\n    return restTemplate.getForObject(\"http://thirdparty/api\", String.class);\n}",
    "options": {
      "A": "@Retryable",
      "B": "@EnableRetry",
      "C": "@Recover",
      "D": "@CircuitBreaker"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Retryable` dari library Spring Retry ditempatkan pada method yang rentan kegagalan transient untuk mengonfigurasi batas percobaan (maxAttempts) dan durasi jeda (@Backoff).",
      "A": "Benar. @Retryable menandai method untuk dieksekusi ulang saat terjadi exception tertentu.",
      "B": "Salah. @EnableRetry adalah anotasi level konfigurasi class untuk mengaktifkan fitur retry.",
      "C": "Salah. @Recover adalah method fallback jika semua percobaan retry habis.",
      "D": "Salah. @CircuitBreaker berasal dari Resilience4j, bukan anotasi standar Spring Retry."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-026",
    "level": "advanced",
    "topic": "JPA EntityGraph",
    "questionType": "completion",
    "question": "Lengkapi deklarasi Repository berikut agar relasi 'department' dan 'projects' diambil secara EAGER menggunakan Named Entity Graph:\n\n```java\npublic interface EmployeeRepository extends JpaRepository<Employee, Long> {\n    ___(attributePaths = {\"department\", \"projects\"})\n    Optional<Employee> findWithDetailsById(Long id);\n}\n```",
    "code": "public interface EmployeeRepository extends JpaRepository<Employee, Long> {\n    ___(attributePaths = {\"department\", \"projects\"})\n    Optional<Employee> findWithDetailsById(Long id);\n}",
    "options": {
      "A": "@EntityGraph",
      "B": "@FetchProfile",
      "C": "@JoinFetch",
      "D": "@NamedQuery"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@EntityGraph(attributePaths = {\"...\"})` memberi tahu Spring Data JPA untuk menambahkan klausa LEFT OUTER JOIN pada query otomatis, mengatasi N+1 fetch problem secara dinamis.",
      "A": "Benar. @EntityGraph secara eksplisit menentukan atribut yang di-fetch secara eager pada query spesifik.",
      "B": "Salah. @FetchProfile adalah fitur spesifik Hibernate lama yang jarang dipakai di Spring Data.",
      "C": "Salah. @JoinFetch bukan anotasi method repository melainkan klausa di dalam string JPQL.",
      "D": "Salah. @NamedQuery digunakan untuk mendefinisikan query statis di level Entitas."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-027",
    "level": "advanced",
    "topic": "Spring WebClient",
    "questionType": "completion",
    "question": "Lengkapi pemanggilan non-blocking WebClient berikut untuk mengambil payload list DTO secara reaktif:\n\n```java\nWebClient client = WebClient.create(\"https://api.example.com\");\nFlux<UserDto> users = client.get()\n    .uri(\"/users\")\n    .retrieve()\n    .___(UserDto.class);\n```",
    "code": "WebClient client = WebClient.create(\"https://api.example.com\");\nFlux<UserDto> users = client.get()\n    .uri(\"/users\")\n    .retrieve()\n    .___(UserDto.class);",
    "options": {
      "A": "bodyToFlux",
      "B": "bodyToMono",
      "C": "toEntityList",
      "D": "exchangeToFlux"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `bodyToFlux(Class<T>)` mendecode body respon HTTP yang berupa array/stream JSON menjadi reaktif stream `Flux<T>`. Untuk objek tunggal digunakan `bodyToMono(Class<T>)`.",
      "A": "Benar. bodyToFlux mengembalikan Flux<T> untuk merepresentasikan koleksi elemen secara reaktif.",
      "B": "Salah. bodyToMono mengembalikan Mono<T> untuk single item, bukan Flux.",
      "C": "Salah. toEntityList mengembalikan Mono<ResponseEntity<List<UserDto>>>, bukan Flux langsung.",
      "D": "Salah. exchangeToFlux membutuhkan lambda Function manual untuk menangani ClientResponse."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-028",
    "level": "advanced",
    "topic": "Java Stream Custom Collector",
    "questionType": "completion",
    "question": "Lengkapi implementasi Collector berikut yang mengumpulkan string ke dalam format berpemisah koma:\n\n```java\nList<String> items = Arrays.asList(\"Java\", \"Spring\", \"Docker\");\nString result = items.stream().collect(Collectors.___(\", \", \"[\", \"]\"));\n```",
    "code": "List<String> items = Arrays.asList(\"Java\", \"Spring\", \"Docker\");\nString result = items.stream().collect(Collectors.___(\", \", \"[\", \"]\"));",
    "options": {
      "A": "joining",
      "B": "concat",
      "C": "mapping",
      "D": "reducing"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `Collectors.joining(delimiter, prefix, suffix)` menghasilkan string hasil penggabungan semua elemen stream dengan pembatas delimiter, diawali prefix, dan diakhiri suffix. Contoh output: `[Java, Spring, Docker]`.",
      "A": "Benar. Collectors.joining menerima delimiter, prefix, dan suffix.",
      "B": "Salah. Collectors tidak memiliki method bernama concat.",
      "C": "Salah. Collectors.mapping digunakan untuk transformasi elemen sebelum downstream collection.",
      "D": "Salah. Collectors.reducing adalah reduksi umum yang tidak memiliki overload 3 argumen string."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-029",
    "level": "advanced",
    "topic": "Microservice Resilience",
    "questionType": "best-practice",
    "question": "Pola arsitektur manakah yang paling direkomendasikan untuk mencegah kegagalan cascade (efek domino) ketika sebuah downstream service lambat atau down?\n\n```java\n// Kasus: Service A memanggil Service B yang sedang mengalami degradasi performa (timeout beruntun).\n// Pendekatan mana yang terbaik untuk melindungi Service A?\n```",
    "code": "// Kasus: Service A memanggil Service B yang sedang mengalami degradasi performa (timeout beruntun).\n// Pendekatan mana yang terbaik untuk melindungi Service A?",
    "options": {
      "A": "Menerapkan Circuit Breaker (misal: Resilience4j) dengan fallback response terukur",
      "B": "Menaikkan timeout HTTP client menjadi 60 detik agar request tidak pernah drop",
      "C": "Menambahkan infinite retry pada setiap kegagalan pemanggilan HTTP",
      "D": "Membuat thread pool tak terbatas (unbounded) untuk menampung request yang menumpuk"
    },
    "answer": "A",
    "explanation": {
      "correct": "Circuit Breaker memonitor kegagalan pemanggilan service. Saat failure rate melewati batas (threshold), sirkuit terbuka (OPEN) dan langsung mengembalikan fallback tanpa membuang resource thread, sehingga mencegah server kehabisan memori atau koneksi.",
      "A": "Benar. Circuit Breaker memutus panggilan berbahaya ke service yang down dan melindungi service pemanggil.",
      "B": "Salah. Menaikkan timeout justru menahan thread lebih lama dan mempercepat habisnya thread pool server.",
      "C": "Salah. Infinite retry akan membanjiri downstream service yang sedang sekarat (retry storm).",
      "D": "Salah. Unbounded thread pool akan menyebabkan OutOfMemoryError saat beban melonjak."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-030",
    "level": "advanced",
    "topic": "Database Transaction",
    "questionType": "best-practice",
    "question": "Mengapa sangat TIDAK direkomendasikan memanggil third-party HTTP API di dalam blok `@Transactional`?\n\n```java\n@Transactional\npublic void processPaymentOrder(Order order) {\n    orderRepo.save(order);\n    paymentGatewayClient.chargeCreditCard(order.getAmount()); // HTTP call di dalam transaksi DB\n    order.setStatus(\"PAID\");\n}\n```",
    "code": "@Transactional\npublic void processPaymentOrder(Order order) {\n    orderRepo.save(order);\n    paymentGatewayClient.chargeCreditCard(order.getAmount()); // HTTP call di dalam transaksi DB\n    order.setStatus(\"PAID\");\n}",
    "options": {
      "A": "Koneksi database dari connection pool ditahan selama latency jaringan HTTP berlangsung, berisiko menguras database connection pool",
      "B": "Spring Boot melarang import RestTemplate di dalam class bertanda @Transactional",
      "C": "Koneksi HTTP akan otomatis ikut di-rollback oleh driver JDBC jika gagal",
      "D": "Entity database tidak bisa disimpan sebelum request HTTP selesai"
    },
    "answer": "A",
    "explanation": {
      "correct": "Transaksi database menahan koneksi fisik JDBC dari pool (HikariCP). Jika panggilan HTTP eksternal mengalami latency (misal 5 detik), koneksi database tidak bisa dipakai request lain. Jika terjadi lonjakan traffic, connection pool akan cepat habis (pool exhaustion).",
      "A": "Benar. I/O eksternal lambat menahan koneksi DB berharga dan dapat melumpuhkan seluruh aplikasi.",
      "B": "Salah. Tidak ada batasan teknis dari Spring untuk meng-inject HTTP client.",
      "C": "Salah. Panggilan HTTP berada di luar kendali driver database dan tidak bisa di-rollback oleh JDBC.",
      "D": "Salah. Entity dapat disimpan kapan saja sebelum transaksi commit."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-031",
    "level": "advanced",
    "topic": "High Concurrency Caching",
    "questionType": "best-practice",
    "question": "Bagaimana cara terbaik menangani masalah 'Cache Stampede' (Thundering Herd) ketika key cache yang sangat populer (hot key) kedaluwarsa?\n\n```java\n// Kasus: Cache key \"homepage-data\" expire, dan secara bersamaan ada 10.000 req/sec menembus database.\n```",
    "code": "// Kasus: Cache key \"homepage-data\" expire, dan secara bersamaan ada 10.000 req/sec menembus database.",
    "options": {
      "A": "Menggunakan Distributed Lock (seperti Redisson) atau probabilistic early expiration sehingga hanya 1 thread yang merefresh DB",
      "B": "Menyetel cache expiration menjadi 0 detik agar selalu fetch langsung dari database",
      "C": "Mematikan cache dan mengandalkan indexing database relasional saja",
      "D": "Melempar exception ke 9.999 request lainnya"
    },
    "answer": "A",
    "explanation": {
      "correct": "Untuk mencegah ribuan thread menyerbu database secara bersamaan saat cache miss (thundering herd), digunakan locking terdistribusi (hanya 1 thread yang query ke DB dan update cache) atau background asynchronous renewal sebelum key benar-benar expire.",
      "A": "Benar. Mutual exclusion (lock) atau early refresh menjamin DB tidak kewalahan oleh request serentak.",
      "B": "Salah. Menyetel expire 0 detik berarti semua traffic langsung menghantam DB secara konstan.",
      "C": "Salah. Database relasional akan down jika dihantam 10.000 req/sec tanpa caching layer.",
      "D": "Salah. Menolak request user menurunkan ketersediaan sistem dan SLA aplikasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-032",
    "level": "advanced",
    "topic": "Logging & Distributed Tracing",
    "questionType": "best-practice",
    "question": "Dalam arsitektur microservices, apa praktik terbaik untuk menelusuri alur sebuah request pengguna dari awal hingga akhir melewati puluhan service?\n\n```java\n// Bagaimana melacak satu transaksi pembayaran yang melewati API Gateway -> Order Service -> Payment Service?\n```",
    "code": "// Bagaimana melacak satu transaksi pembayaran yang melewati API Gateway -> Order Service -> Payment Service?",
    "options": {
      "A": "Menyisipkan Correlation ID (TraceId & SpanId) di header HTTP dan log context (MDC)",
      "B": "Menulis log ke file lokal di masing-masing server lalu menggabungkannya secara manual",
      "C": "Mencetak System.out.println waktu server pada setiap service",
      "D": "Menggunakan nama user yang sama di semua tabel database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Distributed Tracing (misalnya menggunakan Micrometer Tracing / OpenTelemetry / Zipkin) menyisipkan `traceparent` atau `X-Correlation-Id` di header HTTP. Nilai ini dimasukkan ke MDC (Mapped Diagnostic Context) SLF4J sehingga setiap baris log di semua service memiliki ID pelacakan yang seragam.",
      "A": "Benar. Correlation ID dan distributed tracing memungkinkan pelacakan end-to-end secara terpusat.",
      "B": "Salah. Penggabungan log manual tidak realistis dalam sistem produksi terdistribusi modern.",
      "C": "Salah. Waktu antar server bisa mengalami clock skew dan tidak menghubungkan rantai request.",
      "D": "Salah. Nama user tidak unik per transaksi dan tidak melacak alur eksekusi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-033",
    "level": "advanced",
    "topic": "JPA Batch Processing",
    "questionType": "best-practice",
    "question": "Untuk melakukan import 50.000 record ke database via Spring Boot & JPA, pendekatan manakah yang paling efisien dari segi memori dan kecepatan?\n\n```java\n// Kasus: Memasukkan 50.000 entitas ke DB tanpa OutOfMemoryError dan dalam waktu singkat.\n```",
    "code": "// Kasus: Memasukkan 50.000 entitas ke DB tanpa OutOfMemoryError dan dalam waktu singkat.",
    "options": {
      "A": "Mengaktifkan hibernate.jdbc.batch_size, membersihkan EntityManager secara berkala (flush & clear) per batch chunk",
      "B": "Memanggil repository.save() satu per satu di dalam loop tanpa konfigurasi batching",
      "C": "Memuat seluruh 50.000 objek ke dalam satu List lalu memanggil repository.saveAll() sekaligus tanpa flush",
      "D": "Menggunakan thread Thread.sleep(10) setiap 100 insert"
    },
    "answer": "A",
    "explanation": {
      "correct": "Hibernate menyimpan entitas di First Level Cache (Persistence Context). Tanpa `entityManager.flush()` dan `entityManager.clear()`, 50.000 objek akan menumpuk di heap dan menyebabkan OOM. Dengan batching (`batch_size=50`) dan flush-clear berkala, memori tetap stabil dan JDBC mengeksekusi multi-row batch insert.",
      "A": "Benar. Kombinasi JDBC batching dan periodic flush/clear menjaga penggunaan memori minimal dan kecepatan maksimal.",
      "B": "Salah. save() individual menghasilkan 50.000 network round-trip yang sangat lambat.",
      "C": "Salah. saveAll() tanpa clearing persistence context tetap menampung semua objek di memori hingga akhir transaksi.",
      "D": "Salah. Sleep hanya memperlambat proses tanpa menyelesaikan konsumsi memori."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-034",
    "level": "advanced",
    "topic": "Secure Password Hashing",
    "questionType": "best-practice",
    "question": "Algoritma manakah yang menjadi standar industri dan direkomendasikan Spring Security untuk hashing password pengguna di database?\n\n```java\n// Konfigurasi PasswordEncoder di Spring Security:\n```",
    "code": "// Konfigurasi PasswordEncoder di Spring Security:",
    "options": {
      "A": "BCryptPasswordEncoder atau Argon2PasswordEncoder",
      "B": "MessageDigest.getInstance(\"MD5\")",
      "C": "StandardPasswordEncoder (SHA-256 tanpa salt dinamis)",
      "D": "Base64.getEncoder().encodeToString(password.getBytes())"
    },
    "answer": "A",
    "explanation": {
      "correct": "BCrypt dan Argon2 adalah algoritma adaptive key-derivation function yang lambat (computationally intensive) dan otomatis menyertakan cryptographic salt, sehingga sangat tahan terhadap serangan brute-force dan Rainbow Table.",
      "A": "Benar. BCrypt / Argon2 adalah standar resmi Spring Security untuk proteksi password yang aman.",
      "B": "Salah. MD5 sudah rusak secara kriptografi dan sangat rentan collision serta rainbow table.",
      "C": "Salah. SHA-256 biasa terlalu cepat dieksekusi oleh hardware GPU modern sehingga mudah di-brute force.",
      "D": "Salah. Base64 adalah encoding dua arah, sama sekali bukan hashing satu arah."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-035",
    "level": "advanced",
    "topic": "REST API Error Handling",
    "questionType": "best-practice",
    "question": "Format payload error standar RFC manakah yang direkomendasikan untuk REST API modern (didukung bawaan oleh Spring Framework 6 / Spring Boot 3)?\n\n```java\n// Format response error JSON standar:\n```",
    "code": "// Format response error JSON standar:",
    "options": {
      "A": "RFC 7807 (Problem Details for HTTP APIs)",
      "B": "RFC 2616 (Format HTML mentah error)",
      "C": "Hanya mengembalikan string kosong dengan status code 500",
      "D": "Mencetak stack trace Java langsung ke body respon JSON klien"
    },
    "answer": "A",
    "explanation": {
      "correct": "RFC 7807 mendefinisikan struktur 'ProblemDetail' yang memiliki field standar: `type`, `title`, `status`, `detail`, dan `instance`. Spring Boot 3 mengintegrasikannya secara native via `ProblemDetail` class.",
      "A": "Benar. Problem Details (RFC 7807) adalah standar industri resmi untuk representasi error HTTP API.",
      "B": "Salah. Format HTML menyulitkan parsing otomatis oleh klien REST/mobile.",
      "C": "Salah. Mengembalikan string kosong menyulitkan debugging dan integrasi pihak ketiga.",
      "D": "Salah. Mengekspos stack trace mentah membocorkan arsitektur internal aplikasi (vulnerabilitas keamanan)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-036",
    "level": "advanced",
    "topic": "Database Connection Pooling",
    "questionType": "best-practice",
    "question": "Mengapa HikariCP menjadi default connection pool di Spring Boot dibandingkan Tomcat JDBC atau Apache Commons DBCP?\n\n```java\n// Pemilihan connection pool pada Spring Boot:\n```",
    "code": "// Pemilihan connection pool pada Spring Boot:",
    "options": {
      "A": "Optimasi bytecode tingkat rendah, zero-overhead collection framework, dan eliminasi lock contention yang agresif",
      "B": "HikariCP ditulis dalam bahasa C++ sehingga langsung berjalan di kernel OS",
      "C": "HikariCP tidak memerlukan konfigurasi username dan password database",
      "D": "HikariCP tidak pernah menutup koneksi yang rusak"
    },
    "answer": "A",
    "explanation": {
      "correct": "HikariCP dirancang sangat teliti dengan byte-code engineering, penghapusan synchronized lock berlebih, serta penggantian struktur data bawaan Java dengan struktur data kustom ultra-ringan (seperti FastList) untuk mencapai latency sub-mikrodetik.",
      "A": "Benar. Arsitektur zero-overhead dan micro-benchmarking ekstrem menjadikan HikariCP connection pool tercepat di JVM.",
      "B": "Salah. HikariCP adalah 100% Java murni, bukan C++.",
      "C": "Salah. Konfigurasi kredensial database tetap wajib diberikan.",
      "D": "Salah. HikariCP memiliki mekanisme deteksi leak dan evictor untuk koneksi rusak."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-037",
    "level": "advanced",
    "topic": "Database/JPA",
    "questionType": "concept",
    "question": "Mengapa pengembang lebih memilih menggunakan Flyway atau Liquibase dibandingkan hibernate.hbm2ddl.auto=update di production?",
    "options": {
      "A": "Hibernate auto-update jauh lebih lambat dari Flyway.",
      "B": "Flyway/Liquibase menyediakan versioning skema, audit trail sejarah, dan dapat dikontrol aman, tidak menebak-nebak perubahan seperti Hibernate.",
      "C": "Hibernate auto-update tidak bisa menambah kolom baru.",
      "D": "Liquibase adalah fitur bawaan dari Spring Data JPA."
    },
    "answer": "B",
    "explanation": "Tool migrasi skema memberikan kepastian dan kontrol atas evolusi skema DDL berdasar naskah migrasi versi-demi-versi.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-038",
    "level": "advanced",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Dalam pendekatan TDD (Test-Driven Development), siklus utama yang biasa disebut 'Red-Green-Refactor' bermakna:",
    "options": {
      "A": "Menulis bug (Red), memperbaikinya (Green), lalu menghapusnya (Refactor).",
      "B": "Menulis tes yang gagal (Red), menulis kode minimal agar lulus tes (Green), lalu merapikan kode tanpa mengubah fungsionalitas (Refactor).",
      "C": "Tes performa lambat (Red), tes normal (Green), tes super cepat (Refactor).",
      "D": "Status Git: untracked (Red), committed (Green), pushed (Refactor)."
    },
    "answer": "B",
    "explanation": "Filsafat utama TDD adalah memulai dengan menulis tes yang gagal, membuat kode minimum untuk tes lewat, dan me-refactor kode untuk kualitas.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-039",
    "level": "advanced",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Apa kegunaan spesifik dari anotasi `@WebMvcTest` dalam Spring Boot Testing?",
    "options": {
      "A": "Menjalankan keseluruhan container aplikasi dan database untuk end-to-end testing.",
      "B": "Hanya memuat komponen lapisan Web (Controllers, Filters, ControllerAdvice) tanpa layer service/repository (sliced testing).",
      "C": "Menyediakan mock database secara otomatis.",
      "D": "Melakukan load testing pada semua endpoint web."
    },
    "answer": "B",
    "explanation": "`@WebMvcTest` mempercepat test karena hanya meng-instantiate komponen Spring Web yang diperlukan, sangat cocok dipadu dengan `@MockBean`.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-040",
    "level": "advanced",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Bagaimana Testcontainers menyelesaikan masalah ketergantungan pada environment lokal saat integrasi testing?",
    "options": {
      "A": "Dengan menggunakan database H2 in-memory sebagai pengganti database asli.",
      "B": "Dengan melakukan koneksi proxy ke database remote staging.",
      "C": "Dengan menjalankan dependency seperti DB, Message Broker di dalam container Docker asli yang diatur secara programatik oleh Java.",
      "D": "Dengan me-mock seluruh API pemanggilan jaringan."
    },
    "answer": "C",
    "explanation": "Testcontainers membungkus container Docker untuk database asli (seperti PostgreSQL, Kafka) untuk integration test yang sangat realistis.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-041",
    "level": "advanced",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Di JUnit 5, anotasi apa yang dipakai untuk menginjeksikan berbagai input tes ke satu method secara berulang?",
    "options": {
      "A": "@RepeatedTest",
      "B": "@TestFactory",
      "C": "@ParameterizedTest beserta sumber data (seperti @CsvSource atau @MethodSource)",
      "D": "@BeforeEach"
    },
    "answer": "C",
    "explanation": "`@ParameterizedTest` memungkinkan sebuah test dieksekusi berkali-kali menggunakan parameter masukan yang bervariasi.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-042",
    "level": "advanced",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Saat menggunakan `MockMvc`, bagaimana cara kita memverifikasi bahwa respons HTTP memiliki status 201 Created?",
    "options": {
      "A": "status().isOk()",
      "B": "status().isCreated()",
      "C": "status().isAccepted()",
      "D": "response().status(201)"
    },
    "answer": "B",
    "explanation": "`status().isCreated()` mengekspektasikan bahwa kode respon adalah HTTP 201 (Created).",
    "jobId": "junior-java"
  },
  {
    "id": "JA-043",
    "level": "advanced",
    "topic": "Architecture",
    "questionType": "concept",
    "question": "Prinsip utama dalam Clean Architecture (Paman Bob) mengenai aturan ketergantungan (Dependency Rule) adalah:",
    "options": {
      "A": "Modul backend selalu bergantung pada framework yang digunakan.",
      "B": "Lapisan terluar (UI/DB) boleh bergantung ke mana saja.",
      "C": "Ketergantungan (dependencies) hanya boleh mengarah ke dalam (menuju Core/Entities).",
      "D": "Setiap layer dapat memanggil layer mana saja secara bebas demi kecepatan pengembangan."
    },
    "answer": "C",
    "explanation": "Lapisan dalam merangkum domain dan tidak bergantung pada detail lapisan luar (framework, UI, DB).",
    "jobId": "junior-java"
  },
  {
    "id": "JA-044",
    "level": "advanced",
    "topic": "Architecture",
    "questionType": "concept",
    "question": "Arsitektur Hexagonal juga dikenal dengan nama:",
    "options": {
      "A": "MVC (Model View Controller)",
      "B": "Ports and Adapters Architecture",
      "C": "Microkernel Architecture",
      "D": "Event-Driven Architecture"
    },
    "answer": "B",
    "explanation": "Hexagonal Architecture disebut Ports & Adapters karena aplikasi dipisahkan dari environment menggunakan antarmuka (ports) dan implementasinya (adapters).",
    "jobId": "junior-java"
  },
  {
    "id": "JA-045",
    "level": "advanced",
    "topic": "Architecture",
    "questionType": "concept",
    "question": "Dalam pola CQRS (Command Query Responsibility Segregation), apa pemisahan mendasar yang dilakukan?",
    "options": {
      "A": "Memisahkan tabel menjadi partisi-partisi harian.",
      "B": "Memisahkan microservice berdasarkan benua/lokasi geografis.",
      "C": "Memisahkan model untuk operasi baca (Queries) dan operasi tulis/ubah (Commands).",
      "D": "Memisahkan logic frontend (Query) dan backend (Command)."
    },
    "answer": "C",
    "explanation": "CQRS membedakan object/model/alur antara pembacaan data (Query) dan pembaruan state data (Command), seringkali dengan DB terpisah.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-046",
    "level": "advanced",
    "topic": "Architecture",
    "questionType": "concept",
    "question": "Apa keuntungan utama dari pola Event Sourcing?",
    "options": {
      "A": "Aplikasi menjadi lebih cepat memproses query baca karena tidak ada log.",
      "B": "State aplikasi tidak disimpan sebagai current state di row tabel DB biasa, melainkan sebagai log urutan event yang tidak berubah (append-only), memungkinkan rekontruksi state dan audit penuh.",
      "C": "Tidak memerlukan database eksternal, hanya RAM.",
      "D": "Menggabungkan sistem Command dan Query tanpa latensi sinkronisasi."
    },
    "answer": "B",
    "explanation": "Event Sourcing menyimpan semua perubahan state sebagai event. Hal ini sangat berguna untuk audit trail, roll-back state (time-travel), dan integrasi CQRS.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-047",
    "level": "advanced",
    "topic": "Architecture",
    "questionType": "concept",
    "question": "Dalam Domain-Driven Design (DDD), konsep apa yang merepresentasikan sekelompok objek (entity dan value object) yang diperlakukan sebagai satu unit konsistensi dengan satu 'Root'?",
    "options": {
      "A": "Bounded Context",
      "B": "Repository",
      "C": "Aggregate",
      "D": "Ubiquitous Language"
    },
    "answer": "C",
    "explanation": "Aggregate membungkus satu set entitas. Akses luar ke entitas di dalam kelompok ini hanya diizinkan melewati Aggregate Root.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-048",
    "level": "advanced",
    "topic": "DevOps/Deployment",
    "questionType": "concept",
    "question": "Mengapa dalam Dockerfile disarankan untuk merangkai perintah (chaining) RUN dengan &&?",
    "options": {
      "A": "Untuk membuatnya terlihat seperti script Bash murni.",
      "B": "Karena Docker hanya mengizinkan maksimal 5 layer dalam satu image.",
      "C": "Untuk meminimalkan jumlah image layer yang terbentuk, sehingga mengurangi ukuran image.",
      "D": "Agar Docker dapat menjalankan operasi tersebut secara paralel multi-threading."
    },
    "answer": "C",
    "explanation": "Setiap direktif RUN menciptakan layer baru. Menggabungkannya dengan && mengurangi layer dan size image.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-049",
    "level": "advanced",
    "topic": "DevOps/Deployment",
    "questionType": "concept",
    "question": "Di Kubernetes, apa perbedaan mendasar antara Pod dan Deployment?",
    "options": {
      "A": "Pod adalah unit terkecil berisi 1/lebih container, sedangkan Deployment adalah abstraksi pengontrol yang mengatur replika dan update strategi dari Pod.",
      "B": "Pod untuk container berbasis Linux, Deployment untuk container Windows.",
      "C": "Tidak ada perbedaan, hanya terminologi yang berubah dari k8s v1 ke v2.",
      "D": "Pod mengatur load balancer dan port jaringan, Deployment adalah containernya."
    },
    "answer": "A",
    "explanation": "Deployment adalah controller layer yang mengelola ReplicaSets dan siklus hidup (rollouts) dari grup-grup Pod.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-050",
    "level": "advanced",
    "topic": "DevOps/Deployment",
    "questionType": "concept",
    "question": "Dalam alur CI/CD pipeline, apa tujuan utama tahap Continuous Integration (CI)?",
    "options": {
      "A": "Memastikan code secara otomatis di-deploy ke server produksi.",
      "B": "Menyatukan dan memvalidasi kode dari berbagai developer secara otomatis sedini mungkin (build dan test) setiap terjadi commit.",
      "C": "Menghitung biaya server cloud secara terus menerus.",
      "D": "Membuat laporan bug tracking secara otomatis."
    },
    "answer": "B",
    "explanation": "CI bertujuan mendeteksi konflik dan bug secara dini dengan automasi kompilasi dan testing berulang-ulang.",
    "jobId": "junior-java"
  },
  {
    "id": "JA-051",
    "level": "advanced",
    "topic": "JVM & Performance",
    "questionType": "concept",
    "question": "Apa dampak dari fenomena 'False Sharing' pada arsitektur CPU multi-core modern saat beberapa thread memodifikasi variabel independen di Java, dan bagaimana cara mengatasinya?",
    "options": {
      "A": "Terjadi ketika dua variabel independen berada pada satu CPU cache line yang sama (biasanya 64 byte), menyebabkan cache line bouncing antar-core yang menurunkan throughput; diatasi dengan anotasi @jdk.internal.vm.annotation.Contended atau padding manual",
      "B": "Terjadi ketika dua thread mengakses file disk yang sama; diatasi dengan RAID 10",
      "C": "Terjadi ketika koneksi HTTP dibagikan secara tidak aman; diatasi dengan SSL pinning",
      "D": "Terjadi ketika GC kehabisan memori Metaspace; diatasi dengan menaikkan -XX:MaxMetaspaceSize"
    },
    "answer": "A",
    "explanation": {
      "correct": "False sharing terjadi ketika variabel-variabel yang diakses oleh core CPU berbeda terletak berdampingan di dalam cache line 64-byte yang sama. Mutasi oleh satu core membatalkan (invalidate) seluruh cache line di core lain (cache coherence protocol MESI). @Contended menambahkan padding memori untuk memisahkan variabel ke cache line berbeda.",
      "A": "Opsi A benar karena menjelaskan mekanisme hardware cache line invalidation dan teknik padding.",
      "B": "Opsi B salah karena false sharing terjadi di level cache L1/L2 CPU, bukan disk I/O.",
      "C": "Opsi C salah karena bukan masalah layer jaringan HTTP.",
      "D": "Opsi D salah karena bukan masalah GC Metaspace."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-052",
    "level": "advanced",
    "topic": "JVM & Performance",
    "questionType": "concept",
    "question": "Bagaimanakah algoritma Garbage Collector ZGC (Z Garbage Collector) mencapai 'sub-millisecond pause time' (jeda STW di bawah 1 ms) bahkan pada heap berukuran terabyte?",
    "options": {
      "A": "ZGC melakukan hampir seluruh fase kerjanya secara concurrent (termasuk mark, evacuate/relocate, dan reference processing) menggunakan colored pointers dan load barriers",
      "B": "ZGC mematikan fitur Garbage Collection dan membiarkan OS menanganinya",
      "C": "ZGC hanya membersihkan memori Stack dan mengabaikan Heap",
      "D": "ZGC mengompresi memori menggunakan algoritma ZIP secara real-time"
    },
    "answer": "A",
    "explanation": {
      "correct": "ZGC adalah low-latency collector generasi modern di mana siklus penandaan (marking) dan pemindahan objek (relocation) dilakukan bersamaan dengan berjalannya thread aplikasi (concurrently). Load barrier mencegat pembacaan referensi objek untuk menyembuhkan pointer usang secara transparan.",
      "A": "Opsi A benar karena colored pointers dan load barriers adalah kunci arsitektur concurrent compaction ZGC.",
      "B": "Opsi B salah karena ZGC adalah GC internal JVM yang sangat canggih.",
      "C": "Opsi C salah karena Stack frame dibersihkan otomatis saat method return, bukan oleh GC.",
      "D": "Opsi D salah karena ZGC tidak mengompresi memori dengan format file ZIP."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-053",
    "level": "advanced",
    "topic": "Concurrency & Multi-threading",
    "questionType": "concept",
    "question": "Dalam struktur data non-blocking (lock-free), masalah apakah yang dikenal sebagai 'ABA Problem' pada operasi Compare-And-Swap (CAS), dan class Java apakah yang disediakan untuk menyelesaikannya?",
    "options": {
      "A": "Kondisi di mana nilai variabel berubah dari A menjadi B lalu kembali lagi menjadi A tanpa disadari oleh thread pengamat; diselesaikan menggunakan java.util.concurrent.atomic.AtomicStampedReference",
      "B": "Kondisi deadlock antara 3 thread berurutan A, B, dan A",
      "C": "Kegagalan casting tipe data generik saat kompilasi",
      "D": "Kesalahan pembacaan data disk oleh thread I/O"
    },
    "answer": "A",
    "explanation": {
      "correct": "ABA problem terjadi ketika thread 1 membaca nilai A, lalu thread 2 mengubah A menjadi B lalu kembali ke A. Saat thread 1 melakukan CAS(A, new_value), CAS sukses karena nilainya tetap A, padahal state internal/node pointer mungkin sudah berubah. AtomicStampedReference menambahkan stempel/versi integer untuk mendeteksi perubahan tersebut.",
      "A": "Opsi A benar karena AtomicStampedReference menyertakan nomor versi/stamp bersama referensi objek.",
      "B": "Opsi B salah karena ABA bukan tentang skenario deadlock 3 thread.",
      "C": "Opsi C salah karena bukan masalah generic type erasure.",
      "D": "Opsi D salah karena ABA problem murni fenomena konkurensi memori CAS."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-054",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "questionType": "concept",
    "question": "Dalam arsitektur Microservices terdistribusi, bagaimana pola 'Saga Pattern' (Choreography atau Orchestration) menyelesaikan kebutuhan transaksi yang melibatkan banyak layanan independen tanpa two-phase commit (2PC)?",
    "options": {
      "A": "Dengan memecah transaksi global menjadi serangkaian transaksi lokal di setiap layanan, dan jika salah satu langkah gagal, sistem mengeksekusi serangkaian Compenser Transactions (transaksi kompensasi) untuk membatalkan perubahan sebelumnya",
      "B": "Dengan mengunci semua database layanan di seluruh data center selama 5 menit",
      "C": "Dengan menggabungkan kembali semua database microservices menjadi satu database Oracle tunggal",
      "D": "Dengan mengabaikan error transaksi dan melanjutkan pemrosesan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Saga Pattern mengelola konsistensi eventual (eventual consistency) lintas layanan tanpa penguncian 2PC yang lambat. Setiap langkah melakukan commit transaksi lokal; jika ada langkah yang gagal, serangkaian transaksi kompensasi dijalankan secara terbalik untuk mengembalikan state sistem.",
      "A": "Opsi A benar karena menjelaskan transaksi lokal bertahap dan mekanisme transaksi kompensasi.",
      "B": "Opsi B salah karena distributed locking lintas layanan merusak availabilitas dan skalabilitas.",
      "C": "Opsi C salah karena itu membatalkan konsep arsitektur microservices ber-database independen (database-per-service).",
      "D": "Opsi D salah karena mengabaikan error merusak integritas finansial/bisnis."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-055",
    "level": "advanced",
    "topic": "Spring Boot & Spring Framework",
    "questionType": "concept",
    "question": "Bagaimana Spring Boot menangani transaksi terdistribusi antar microservices saat menggunakan 'Transactional Outbox Pattern' bersama Kafka/RabbitMQ?",
    "options": {
      "A": "Menyimpan event pesan ke dalam tabel 'outbox' di database yang sama dengan entitas bisnis dalam SATU transaksi lokal ACID, lalu relay process/CDC terpisah (seperti Debezium) membaca tabel outbox dan mempublikasikannya ke message broker",
      "B": "Mengirim pesan ke Kafka terlebih dahulu baru kemudian menyimpan ke database",
      "C": "Menggunakan @Transactional pada producer Kafka secara langsung",
      "D": "Membuat koneksi TCP soket mentah langsung dari controller"
    },
    "answer": "A",
    "explanation": {
      "correct": "Transactional Outbox menjamin 'Dual Write Problem' teratasi: perubahan state bisnis dan pesan event disimpan secara atomik dalam satu transaksi database lokal. Message relay (atau Debezium lewat change data capture) menjamin event dipublikasikan ke broker dengan jaminan 'at-least-once'.",
      "A": "Opsi A benar karena memisahkan persistensi event lokal dan publikasi asinkron.",
      "B": "Opsi B salah karena jika database gagal setelah pesan dikirim ke broker, terjadi inkonsistensi tak terpulihkan.",
      "C": "Opsi C salah karena Kafka transactions tidak terikat secara atomik dengan database RDBMS tanpa protokol XA/2PC yang rapuh.",
      "D": "Opsi D salah karena koneksi mentah tidak menyelesaikan masalah konsistensi pesan terdistribusi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-056",
    "level": "advanced",
    "topic": "Spring Boot & Spring Framework",
    "questionType": "concept",
    "question": "Bagaimanakah mekanisme internal AOP (Aspect-Oriented Programming) di Spring saat membuat proxy untuk sebuah kelas?",
    "options": {
      "A": "Menggunakan JDK Dynamic Proxy jika target kelas mengimplementasikan interface, atau menggunakan CGLIB / ByteBuddy untuk membuat subclass turunan jika target berupa kelas konkret tanpa interface",
      "B": "Mengompilasi ulang kernel sistem operasi Linux",
      "C": "Memodifikasi hardware motherboard server",
      "D": "Menggunakan classloader kustom yang menghapus semua private modifier"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring AOP secara otomatis memilih JDK Dynamic Proxy (berbasis java.lang.reflect.Proxy untuk interface) atau CGLIB (pembuatan subclass dinamis via bytecode generation). Mulai Spring Boot 2.x, CGLIB dijadikan default untuk semua bean.",
      "A": "Opsi A benar karena membedakan dua strategi pembuatan runtime proxy di Spring.",
      "B": "Opsi B salah karena AOP bekerja di tingkat bytecode JVM, bukan kernel OS.",
      "C": "Opsi C salah karena tidak ada modifikasi perangkat keras.",
      "D": "Opsi D salah karena modifier private dihormati oleh enkapsulasi Java."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-057",
    "level": "advanced",
    "topic": "JVM & Performance",
    "questionType": "concept",
    "question": "Apakah yang dimaksud dengan teknik optimasi 'Escape Analysis' yang dilakukan oleh JIT Compiler (HotSpot) pada kode Java?",
    "options": {
      "A": "Analisis untuk menentukan apakah cakupan (scope) sebuah objek melampaui method pembuatnya; jika tidak 'escape', JIT dapat mengalokasikan objek tersebut di Stack (Scalar Replacement) alih-alih di Heap dan mengeliminasi lock (Lock Elision)",
      "B": "Analisis untuk mendeteksi celah keamanan SQL injection saat runtime",
      "C": "Analisis untuk mencegah aplikasi dimatikan oleh sinyal SIGKILL",
      "D": "Analisis untuk memeriksa apakah memory leak terjadi di disk"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika Escape Analysis membuktikan bahwa referensi objek tidak pernah diteruskan ke luar method (tidak disimpan ke field kelas atau di-return), JIT dapat menerapkan Scalar Replacement (memecah objek menjadi variabel primitif lokal di register/stack) dan Lock Elision, menghindari biaya alokasi heap dan GC.",
      "A": "Opsi A benar karena mendefinisikan mekanisme Scalar Replacement dan Lock Elision dari Escape Analysis.",
      "B": "Opsi B salah karena bukan scanner keamanan aplikasi web.",
      "C": "Opsi C salah karena SIGKILL tidak dapat dicegat oleh software.",
      "D": "Opsi D salah karena memory leak dianalisis via heap dump, bukan escape analysis JIT."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-058",
    "level": "advanced",
    "topic": "Concurrency & Multi-threading",
    "questionType": "concept",
    "question": "Apa keuntungan utama dari 'Virtual Threads' (Project Loom, distandarisasi di Java 21) dibandingkan Platform Threads (OS Threads) tradisional?",
    "options": {
      "A": "Virtual Threads sangat ringan (ukuran memori hanya beberapa kilobyte) dan dikelola langsung oleh JVM, memungkinkan pembuatan jutaan thread secara bersamaan dengan throughput I/O blocking yang tinggi tanpa menghabiskan thread OS",
      "B": "Virtual Threads membuat kalkulasi CPU-intensive (seperti rendering 3D) berjalan 100 kali lebih cepat",
      "C": "Virtual Threads menonaktifkan kebutuhan sinkronisasi data antar thread",
      "D": "Virtual Threads menggantikan fungsi database relasional"
    },
    "answer": "A",
    "explanation": {
      "correct": "Platform threads tradisional dipetakan 1:1 ke OS thread yang memakan memori ~1MB dan terbatas ribuan. Virtual threads adalah managed user-mode threads (M:N mapping) yang dapat di-unmount dari carrier thread saat melakukan blocking I/O, memberikan model imperatif thread-per-request dengan skalabilitas setara asynchronous reaktif.",
      "A": "Opsi A benar karena merangkum arsitektur lightweight user-mode threads Project Loom.",
      "B": "Opsi B salah karena Virtual Threads tidak mempercepat tugas CPU-bound murni (jumlah core CPU tetap sama).",
      "C": "Opsi C salah karena data shared tetap memerlukan sinkronisasi thread-safe.",
      "D": "Opsi D salah karena bukan modul penyimpanan database."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-059",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "questionType": "concept",
    "question": "Pola ketahanan sistem (Resilience Pattern) apakah yang secara otomatis membuka saklar (open state) untuk memutus sementara panggilan ke service hilir yang gagal berulang kali demi mencegah cascading failure?",
    "options": {
      "A": "Circuit Breaker Pattern (seperti Resilience4j)",
      "B": "Bulkhead Pattern",
      "C": "Rate Limiter Pattern",
      "D": "Retry Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Circuit Breaker memiliki 3 state: CLOSED (normal), OPEN (memutus pemanggilan dan langsung mengembalikan fallback error jika kegagalan melebihi ambang batas), dan HALF-OPEN (menguji apakah service target sudah pulih). Ini melindungi sistem dari habisnya connection pool akibat pemanggilan layanan yang mati.",
      "A": "Opsi A benar karena menjelaskan fungsi pemutusan sirkuit pada Circuit Breaker.",
      "B": "Opsi B salah karena Bulkhead mengisolasi resource pool agar kegagalan satu komponen tidak menenggelamkan seluruh kapal.",
      "C": "Opsi C salah karena Rate Limiter membatasi jumlah request per satuan waktu.",
      "D": "Opsi D salah karena Retry Pattern terus mencoba kembali panggilan, yang justru memperparah overload jika tidak dibatasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-060",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
    "questionType": "concept",
    "question": "Bagaimana teknik 'Keyset Pagination' (Seek Method) mengoptimalkan query pembagian halaman pada tabel dengan puluhan juta baris dibandingkan 'OFFSET-LIMIT Pagination' tradisional?",
    "options": {
      "A": "Keyset pagination menggunakan klausa 'WHERE id > :last_seen_id ORDER BY id ASC LIMIT :size' yang langsung memanfaatkan B-Tree index seek (O(log N)), sedangkan OFFSET mengharuskan database memindai dan membuang jutaan baris pertama (O(N))",
      "B": "Keyset pagination memuat semua 10 juta baris ke memori browser",
      "C": "Keyset pagination menghapus indeks database agar query lebih cepat",
      "D": "OFFSET-LIMIT selalu lebih cepat daripada Keyset pagination untuk data besar"
    },
    "answer": "A",
    "explanation": {
      "correct": "Query 'OFFSET 10000000 LIMIT 20' memaksa database membaca 10.000.020 baris lalu membuang 10 juta baris pertama (sangat lambat). Keyset pagination melompat langsung ke node indeks tepat setelah record terakhir, menjaga performa tetap konstan di halaman berapapun.",
      "A": "Opsi A benar karena membandingkan index seek vs sequential scan and discard pada OFFSET.",
      "B": "Opsi B salah karena tidak ada data yang dimuat ke memori browser.",
      "C": "Opsi C salah karena keyset pagination mutlak mengandalkan indeks terurut.",
      "D": "Opsi D salah karena OFFSET-LIMIT mengalami degradasi performa linear yang parah pada offset besar."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-061",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
    "questionType": "concept",
    "question": "Dalam arsitektur Database Sharding, apa yang dimaksud dengan 'Hotspot Partition Problem' dan bagaimana teknik Salting Key atau Consistent Hashing memitigasinya?",
    "options": {
      "A": "Kondisi di mana salah satu shard database menerima beban baca/tulis yang jauh lebih tinggi daripada shard lain karena distribusi sharding key yang tidak merata; dimitigasi dengan menambahkan prefix acak (salting) atau algoritma hash cincin (consistent hashing)",
      "B": "Kondisi di mana server fisik database mengalami panas berlebih (overheat)",
      "C": "Kondisi di mana kabel jaringan server meleleh",
      "D": "Kondisi di mana semua data terhapus secara acak"
    },
    "answer": "A",
    "explanation": {
      "correct": "Hotspot terjadi jika sharding key memiliki frekuensi yang timpang (misal sharding berdasarkan tanggal, di mana shard hari ini menanggung seluruh traffic). Salting key menyebarkan data dari entitas yang sama ke beberapa partisi acak untuk mendistribusikan beban secara proporsional.",
      "A": "Opsi A benar karena menjelaskan ketimpangan beban shard dan teknik mitigasi salting/consistent hashing.",
      "B": "Opsi B salah karena hotspot di sini adalah istilah logis arsitektur data, bukan temperatur termal.",
      "C": "Opsi C salah karena bukan masalah kabel fisik.",
      "D": "Opsi D salah karena data tidak hilang melainkan terkonsentrasi di satu simpul."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-062",
    "level": "advanced",
    "topic": "JVM & Performance",
    "questionType": "concept",
    "question": "Parameter JVM apakah yang digunakan untuk membuat file snapshot memori (Heap Dump) secara otomatis tepat saat aplikasi mengalami java.lang.OutOfMemoryError?",
    "options": {
      "A": "-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/path/to/dump.hprof",
      "B": "-Xdump:memory=true",
      "C": "-XX:+GenerateCrashLog",
      "D": "-Xms4g -Xmx4g"
    },
    "answer": "A",
    "explanation": {
      "correct": "Flag -XX:+HeapDumpOnOutOfMemoryError menginstruksikan JVM untuk merekam seluruh isi memori heap ke file format HPROF saat OOM terjadi, yang kemudian dapat dianalisis menggunakan tools seperti Eclipse MAT atau VisualVM untuk melacak memory leak.",
      "A": "Opsi A benar karena merupakan konfigurasi standar diagnosa pasca crash OOM pada JVM.",
      "B": "Opsi B salah karena bukan parameter standar HotSpot.",
      "C": "Opsi C salah karena bukan opsi pembuatan heap dump.",
      "D": "Opsi D salah karena -Xms dan -Xmx adalah parameter penetapan ukuran awal dan maksimum heap."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-063",
    "level": "advanced",
    "topic": "Clean Code & Refactoring",
    "questionType": "concept",
    "question": "Bagaimanakah pola 'Strangler Fig Pattern' diterapkan saat melakukan migrasi sistem monolitik legacy ke arsitektur microservices baru?",
    "options": {
      "A": "Menggantikan fungsionalitas sistem monolitik secara bertahap fitur demi fitur di balik API Gateway / Reverse Proxy, hingga akhirnya seluruh monolitik usang tergantikan sepenuhnya dan dapat dipadamkan tanpa downtime berisiko tinggi",
      "B": "Menghapus monolitik secara mendadak pada hari pertama dan menulis ulang semuanya dari nol",
      "C": "Mengubah bahasa pemrograman monolitik menjadi assembly",
      "D": "Mengunci database monolitik agar user tidak bisa login"
    },
    "answer": "A",
    "explanation": {
      "correct": "Terinspirasi dari pohon ara pencekik yang tumbuh melilit pohon inang hingga pohon inang mati, Strangler Fig Pattern mengisolasi endpoint monolitik dan mengalihkan traffic secara bertahap ke microservice baru, meminimalkan risiko 'Big Bang rewrite'.",
      "A": "Opsi A benar karena mendefinisikan strategi migrasi bertahap Strangler Fig.",
      "B": "Opsi B salah karena itu adalah Big Bang rewrite yang terkenal memiliki tingkat kegagalan proyek yang sangat tinggi.",
      "C": "Opsi C salah karena bukan migrasi ke assembly.",
      "D": "Opsi D salah karena aplikasi harus tetap melayani pengguna selama migrasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-064",
    "level": "advanced",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Bagaimanakah cara mengamankan REST API dari kerentanan Cross-Site Request Forgery (CSRF) dan kapan proteksi CSRF aman untuk dinonaktifkan (csrf.disable()) di Spring Security?",
    "options": {
      "A": "Proteksi CSRF aman dinonaktifkan untuk stateless REST API yang tidak menggunakan session cookie browser dan hanya mengandalkan otentikasi Bearer Token (JWT) yang disimpan di memori klien",
      "B": "CSRF wajib dinonaktifkan di semua jenis website tanpa terkecuali",
      "C": "CSRF hanya boleh diaktifkan jika menggunakan database Oracle",
      "D": "Menonaktifkan CSRF membuat API kebal dari semua serangan siber"
    },
    "answer": "A",
    "explanation": {
      "correct": "CSRF mengeksploitasi mekanisme browser yang otomatis melampirkan session cookie pada cross-site requests. Jika API bersifat murni stateless di mana autentikasi dikirimkan secara eksplisit via header 'Authorization: Bearer <token>', browser tidak akan melampirkannya secara otomatis pada forged requests, sehingga csrf.disable() aman dilakukan.",
      "A": "Opsi A benar karena menjelaskan alasan teknis keamanan penonaktifan CSRF pada stateless bearer token API.",
      "B": "Opsi B salah karena aplikasi berbasis cookie/session wajib mengaktifkan CSRF protection.",
      "C": "Opsi C salah karena CSRF tidak berhubungan dengan merek database.",
      "D": "Opsi D salah karena menonaktifkan CSRF tidak membuat API kebal terhadap ancaman lain seperti XSS atau SQLi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-065",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "questionType": "concept",
    "question": "Dalam implementasi distributed cache (seperti Redis) di depan database, masalah apakah yang disebut 'Cache Avalanche' dan bagaimana cara menanganinya?",
    "options": {
      "A": "Kondisi di mana sejumlah besar key cache kedaluwarsa (expire) secara bersamaan pada waktu yang persis sama, menyebabkan lonjakan jutaan request menghantam database langsung seketika; diatasi dengan menambahkan nilai TTL acak (jitter) pada setiap key",
      "B": "Kondisi di mana server Redis kehabisan listrik",
      "C": "Kondisi di mana database menghapus data cache",
      "D": "Kondisi di mana request meminta key yang sama sekali tidak ada di database maupun cache"
    },
    "answer": "A",
    "explanation": {
      "correct": "Cache Avalanche terjadi ketika masa berlaku ribuan key habis serempak, membuat database kolaps karena kejatuhan traffic masif. Solusi standarnya adalah menambahkan variasi waktu acak (misal TTL = 10 menit + random 1-60 detik) agar kedaluwarsa terjadi bertahap.",
      "A": "Opsi A benar karena menjelaskan fenomena serbuan request akibat expire serentak dan mitigasi TTL jitter.",
      "B": "Opsi B salah karena pemadaman listrik bukan definisi avalanche.",
      "C": "Opsi C salah karena cache dikelola secara independen di layer Redis.",
      "D": "Opsi D salah karena request untuk key yang tidak ada di cache maupun DB disebut Cache Penetration (diatasi dengan bloom filter)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-066",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
    "questionType": "concept",
    "question": "Apa bahaya utama dari transaksi database berdurasi panjang (Long-Running Transactions) di aplikasi enterprise, dan bagaimana cara memitigasinya?",
    "options": {
      "A": "Menahan koneksi dari pool terlalu lama sehingga memicu pool exhaustion bagi request lain, serta menumpuk uncommitted undo/redo logs (MVCC bloat) dan lock contention; diatasi dengan memindahkan operasi I/O jaringan lambat ke luar batas @Transactional",
      "B": "Akan merusak file instalasi sistem operasi",
      "C": "Akan membuat compiler Java hang saat restart",
      "D": "Tidak ada bahaya karena database modern memiliki kapasitas tak terbatas"
    },
    "answer": "A",
    "explanation": {
      "correct": "Koneksi database adalah resource berharga. Jika transaksi menahan koneksi saat memanggil external payment gateway API (yang memakan waktu detik), pool koneksi akan terkuras habis. Praktik terbaik adalah hanya membungkus operasi database atomik di dalam @Transactional.",
      "A": "Opsi A benar karena menjelaskan connection starvation, lock duration, dan mitigasi pelepasan network call dari transaksi.",
      "B": "Opsi B salah karena transaksi tidak merusak instalasi OS.",
      "C": "Opsi C salah karena tidak mempengaruhi kompilasi Java.",
      "D": "Opsi D salah karena connection pool dan memori database memiliki batasan kapasitas terukur."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-067",
    "level": "advanced",
    "topic": "Concurrency & Multi-threading",
    "questionType": "concept",
    "question": "Bagaimana mekanisme algoritma 'Work-Stealing' pada ForkJoinPool di Java bekerja untuk memaksimalkan utilisasi semua core CPU?",
    "options": {
      "A": "Setiap worker thread memiliki de-que (double-ended queue) tugasnya sendiri; jika seorang worker menyelesaikan seluruh tugasnya, ia akan 'mencuri' tugas dari ujung ekor (tail) antrean thread lain yang sedang sibuk",
      "B": "Thread secara acak mematikan thread lain untuk menghemat energi",
      "C": "Thread mencuri file dari hard disk tanpa izin",
      "D": "Semua thread memperebutkan satu antrean tunggal yang dikunci secara global"
    },
    "answer": "A",
    "explanation": {
      "correct": "ForkJoinPool menggunakan de-que per-worker. Pemilik thread memproses dan menambahkan subtugas dari kepala (head) antrean (LIFO), sedangkan thread pencuri (thief) mengambil tugas dari ekor (tail) secara FIFO, meminimalkan perebutan lock (lock contention) antar thread.",
      "A": "Opsi A benar karena menjelaskan dual-ended queue work-stealing mechanism.",
      "B": "Opsi B salah karena thread tidak saling mematikan.",
      "C": "Opsi C salah karena work-stealing adalah penjadwalan komputasi in-memory.",
      "D": "Opsi D salah karena menggunakan single queue ber-lock justru menciptakan bottleneck performa tinggi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-068",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "questionType": "concept",
    "question": "Dalam komunikasi event-driven antar-service, apa perbedaan jaminan pengiriman pesan antara 'At-Most-Once', 'At-Least-Once', dan 'Exactly-Once' delivery?",
    "options": {
      "A": "'At-Most-Once' pesan mungkin hilang tetapi tidak pernah duplikat; 'At-Least-Once' pesan dijamin tidak hilang tetapi bisa duplikat; 'Exactly-Once' menjamin setiap pesan diproses tepat satu kali menggunakan idempotensi atau transaksi 2PC",
      "B": "'Exactly-Once' berarti pesan dikirimkan setiap 1 detik sekali",
      "C": "'At-Least-Once' berarti pesan hanya boleh dibaca oleh 1 konsumen",
      "D": "Ketiganya menjamin hal yang identik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dalam sistem terdistribusi riil, kegagalan jaringan membuat At-Least-Once menjadi standar paling umum (produsen melakukan retry jika ACK tidak diterima). Oleh karena itu, konsumen diwajibkan mengimplementasikan Idempotent Consumer pattern untuk mencapai efek Exactly-Once processing.",
      "A": "Opsi A benar karena merinci trade-off formal keandalan pesan dalam sistem terdistribusi.",
      "B": "Opsi B salah karena Exactly-Once adalah jaminan semantik pemrosesan, bukan interval waktu.",
      "C": "Opsi C salah karena At-Least-Once tidak membatasi jumlah konsumen.",
      "D": "Opsi D salah karena ketiga model memiliki konsekuensi arsitektur dan penanganan duplikasi yang berbeda."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-069",
    "level": "advanced",
    "topic": "Spring Boot & Spring Framework",
    "questionType": "concept",
    "question": "Bagaimanakah cara mengimplementasikan Dynamic Multi-Tenancy di Spring Boot dengan pola 'Database-per-Tenant'?",
    "options": {
      "A": "Meng-extend AbstractRoutingDataSource dan meng-override method determineCurrentLookupKey() untuk mengembalikan ID tenant yang tersimpan di ThreadLocal saat runtime",
      "B": "Membuat satu instance aplikasi Spring Boot terpisah untuk setiap user",
      "C": "Menyimpan semua data tenant ke file Excel yang berbeda",
      "D": "Menggunakan anotasi @TenantDatabase pada setiap query SQL"
    },
    "answer": "A",
    "explanation": {
      "correct": "AbstractRoutingDataSource adalah komponen bawaan Spring yang bertindak sebagai router perantara DataSource. Saat method getConnection() dipanggil, DataSource diarahkan ke target connection pool tenant yang sesuai berdasarkan kunci tenant konteks saat ini.",
      "A": "Opsi A benar karena AbstractRoutingDataSource adalah pola standar implementasi database-per-tenant di Spring.",
      "B": "Opsi B salah karena menjalankan ratusan JVM aplikasi terpisah untuk ratusan tenant sangat boros resource.",
      "C": "Opsi C salah karena bukan solusi enterprise database relasional.",
      "D": "Opsi D salah karena @TenantDatabase bukan anotasi standar Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-070",
    "level": "advanced",
    "topic": "JVM & Performance",
    "questionType": "concept",
    "question": "Apakah yang dimaksud dengan 'JIT Compiler Deoptimization' di JVM dan kapan hal tersebut terjadi?",
    "options": {
      "A": "Ketika asumsi spekulatif yang dibuat oleh JIT saat mengompilasi method ke kode mesin terbukti tidak lagi valid (misalnya class baru di-load sehingga polymorphic call tidak lagi monomorphic), JVM membatalkan kode mesin native dan beralih kembali ke mode Interpreter",
      "B": "Ketika server kehabisan ruang hard disk",
      "C": "Ketika developer sengaja mematikan Java",
      "D": "Ketika class file dihapus dari direktori bin"
    },
    "answer": "A",
    "explanation": {
      "correct": "HotSpot JIT melakukan optimasi spekulatif agresif (seperti monomorphic inlining). Jika kondisi runtime berubah (misal pemuatan class baru yang melanggar asumsi), JVM memicu On-Stack Replacement (OSR) mundur (deoptimization) kembali ke interpreter untuk menjaga kebenaran program.",
      "A": "Opsi A benar karena menjelaskan optimasi spekulatif dan mekanisme fallback ke interpreter.",
      "B": "Opsi B salah karena deoptimasi adalah event internal eksekusi bytecode CPU.",
      "C": "Opsi C salah karena proses deoptimasi terjadi otomatis dan transparan.",
      "D": "Opsi D salah karena file class sudah berada di Metaspace memori JVM."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-071",
    "level": "advanced",
    "topic": "Clean Code & Refactoring",
    "questionType": "concept",
    "question": "Dalam Domain-Driven Design (DDD), apa perbedaan konseptual paling mendasar antara 'Entity' dan 'Value Object'?",
    "options": {
      "A": "Entity memiliki identitas unik berkelanjutan (ID) yang membedakannya meskipun seluruh atributnya berubah, sedangkan Value Object tidak memiliki identitas dan kesamaannya hanya ditentukan oleh nilai atribut yang dibawanya (bersifat immutable)",
      "B": "Entity hanya disimpan di memori, sedangkan Value Object disimpan di database",
      "C": "Value Object selalu memiliki method save() ke database",
      "D": "Entity tidak boleh memiliki atribut bertipe data string"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dua orang bernama Budi dengan tanggal lahir sama adalah dua Entity berbeda karena memiliki KTP/ID yang unik. Sebaliknya, dua objek 'Uang(10000, IDR)' adalah Value Object yang identik dan dapat saling menggantikan tanpa mempedulikan identitas objek.",
      "A": "Opsi A benar karena mendefinisikan kriteria identitas vs atribut nilai dalam DDD.",
      "B": "Opsi B salah karena keduanya dapat dipetakan ke database (Value Object sebagai @Embedded atau kolom tunggal).",
      "C": "Opsi C salah karena Value Object murni POJO immutable tanpa dependensi persistensi aktif.",
      "D": "Opsi D salah karena Entity bebas menggunakan tipe data apapun."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-072",
    "level": "advanced",
    "topic": "Concurrency & Multi-threading",
    "questionType": "concept",
    "question": "Bagaimana 'StampedLock' (diperkenalkan di Java 8) meningkatkan performa pembacaan data dibandingkan ReentrantReadWriteLock?",
    "options": {
      "A": "StampedLock menyediakan mode Optimistic Reading (tryOptimisticRead()) yang memvalidasi stamp tanpa mengakuisisi read lock sama sekali, sehingga pembacaan tidak pernah memblokir thread penulis jika tidak terjadi mutasi",
      "B": "StampedLock mengabaikan thread keselamatan sepenuhnya",
      "C": "StampedLock mendukung reentrant locking secara otomatis",
      "D": "StampedLock hanya berjalan di Java ME"
    },
    "answer": "A",
    "explanation": {
      "correct": "ReentrantReadWriteLock selalu mengakuisisi read lock yang saling bersaing memodifikasi counter internal (cache coherence traffic). StampedLock membaca versi stamp secara optimis dan memvalidasinya di akhir; jika tidak ada penulisan, operasi read selesai tanpa overhead locking.",
      "A": "Opsi A benar karena optimasi optimistic read lock-free adalah keunggulan utama StampedLock.",
      "B": "Opsi B salah karena validasi stamp memastikan integritas pembacaan tetap thread-safe.",
      "C": "Opsi C salah karena StampedLock TIDAK bersifat reentrant (memanggil lock berulang pada thread yang sama memicu deadlock).",
      "D": "Opsi D salah karena StampedLock adalah bagian standar Java SE."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-073",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan 'Write-Behind Caching' (Write-Back) dan risiko apa yang harus diantisipasi saat menggunakannya?",
    "options": {
      "A": "Aplikasi menulis data ke memori cache terlebih dahulu dan langsung merespons sukses, lalu proses asinkron menulis data tersebut ke database di latar belakang; risikonya adalah potensi data loss jika node cache crash sebelum data tersimpan ke database",
      "B": "Aplikasi menolak penulisan data dan hanya menerima operasi pembacaan",
      "C": "Aplikasi menulis data ke file log tanpa pernah menyimpannya ke database",
      "D": "Cache diperbarui 24 jam sekali di tengah malam"
    },
    "answer": "A",
    "explanation": {
      "correct": "Write-Behind menawarkan latensi penulisan terendah karena respons instan diberikan ke klien begitu data masuk ke RAM cache. Namun, jika terjadi kegagalan hardware mendadak pada server cache, modifikasi yang belum di-flush ke storage persisten akan hilang.",
      "A": "Opsi A benar karena mendefinisikan mekanisme write-behind dan kompromi durabilitasnya.",
      "B": "Opsi B salah karena operasi tulis tetap diproses ke cache.",
      "C": "Opsi C salah karena data tetap dijadwalkan untuk di-flush ke database.",
      "D": "Opsi D salah karena sinkronisasi latar belakang biasanya terjadi dalam hitungan milidetik/detik."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-074",
    "level": "advanced",
    "topic": "Spring Boot & Spring Framework",
    "questionType": "concept",
    "question": "Bagaimanakah cara mengimplementasikan Graceful Degradation menggunakan Fallback Method di Resilience4j bersama Spring Boot?",
    "options": {
      "A": "Menentukan atribut 'fallbackMethod' pada anotasi @CircuitBreaker yang merujuk ke method dengan signature parameter dan tipe return yang sama ditambah parameter Throwable",
      "B": "Membuat controller baru dengan path /error-fallback",
      "C": "Menghapus exception dari blok try-catch",
      "D": "Mematikan server saat terjadi error"
    },
    "answer": "A",
    "explanation": {
      "correct": "@CircuitBreaker(name = \"serviceA\", fallbackMethod = \"fallbackHandler\") mengeksekusi method fallbackHandler saat sirkuit terbuka atau terjadi exception, memungkinkan pengembalian data cached atau pesan ramah tanpa membiarkan request klien gagal total.",
      "A": "Opsi A benar karena merupakan aturan deklarasi fallback method standar di Resilience4j.",
      "B": "Opsi B salah karena fallback ditangani pada level method internal service/client.",
      "C": "Opsi C salah karena mengabaikan exception tidak menyediakan fallback respons bisnis yang terkendali.",
      "D": "Opsi D salah karena tujuan resilience adalah menjaga aplikasi tetap menyala dan adaptif."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-075",
    "level": "advanced",
    "topic": "JVM & Performance",
    "questionType": "concept",
    "question": "Apakah yang dimaksud dengan 'Safepoint' dalam eksekusi JVM?",
    "options": {
      "A": "Titik waktu tertentu di mana semua thread aplikasi (mutator threads) dihentikan secara aman agar JVM dapat melakukan operasi pemeliharaan internal seperti Stop-The-World GC, deoptimasi kode, atau thread dump",
      "B": "Lokasi penyimpanan file backup database di server",
      "C": "Metode enkripsi password pengguna",
      "D": "Port firewall yang aman dari serangan hacker"
    },
    "answer": "A",
    "explanation": {
      "correct": "JIT menyisipkan instruksi 'safepoint check' pada loop dan pemanggilan method. Saat GC membutuhkan STW pause, sinyal diberikan agar semua thread berhenti pada safepoint terdekat sebelum JVM memanipulasi referensi memori heap.",
      "A": "Opsi A benar karena mendefinisikan mekanisme sinkronisasi safepoint di HotSpot JVM.",
      "B": "Opsi B salah karena safepoint adalah konsep memori runtime JVM, bukan backup file.",
      "C": "Opsi C salah karena bukan modul kriptografi.",
      "D": "Opsi D salah karena bukan konfigurasi port jaringan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-076",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "questionType": "concept",
    "question": "Dalam arsitektur Event Sourcing, bagaimanakah state akhir dari sebuah entitas diperoleh?",
    "options": {
      "A": "Bukan dengan menyimpan state saat ini, melainkan dengan merekonstruksi state melalui pemutaran ulang (replay) seluruh riwayat event perubahan yang tersimpan secara append-only di Event Store",
      "B": "Dengan melakukan UPDATE langsung pada kolom tabel database",
      "C": "Dengan menghitung rata-rata nilai dari seluruh database",
      "D": "Dengan membaca file XML konfigurasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Event Sourcing memperlakukan semua perubahan sebagai serangkaian event immutable (append-only log). State saat ini dari agregat (misal saldo rekening) dihitung dari penjumlahan seluruh event mutasi (DepositCreated, MoneyTransferred) yang pernah terjadi sejak awal.",
      "A": "Opsi A benar karena menjelaskan prinsip dasar rekonstruksi state pada Event Sourcing.",
      "B": "Opsi B salah karena Event Sourcing melarang mutasi UPDATE/DELETE fisik pada event store.",
      "C": "Opsi C salah karena rekonstruksi dilakukan melalui event fold/reduce terurut, bukan rata-rata.",
      "D": "Opsi D salah karena riwayat event disimpan di database event store khusus."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JA-077",
    "level": "advanced",
    "topic": "Spring Boot & Spring Framework",
    "questionType": "concept",
    "question": "Mengapa penggunaan Java Reflection yang berlebihan pada hot-path aplikasi berdampak negatif terhadap performa, dan bagaimana library modern seperti MapStruct mengatasinya?",
    "options": {
      "A": "Refleksi memotong optimasi JIT Compiler (seperti inlining), menimbulkan overhead inspeksi metadata dan boxing/unboxing; MapStruct mengatasinya dengan menghasilkan kode pemetaan murni saat COMPILE-TIME tanpa refleksi runtime",
      "B": "Refleksi membuat hard disk server cepat penuh",
      "C": "Refleksi hanya bekerja pada platform Windows",
      "D": "MapStruct menghapus seluruh kode getter dan setter"
    },
    "answer": "A",
    "explanation": {
      "correct": "Refleksi membutuhkan resolusi method dinamis saat runtime yang mencegah inlining JIT dan mengorbankan performa. MapStruct menggunakan Annotation Processor untuk meng-generate method Java biasa (user.setName(dto.getName())) saat kompilasi, menghasilkan kecepatan setara kode manual.",
      "A": "Opsi A benar karena membandingkan overhead refleksi runtime dengan pendekatan compile-time code generation.",
      "B": "Opsi B salah karena refleksi bekerja di memori CPU/RAM.",
      "C": "Opsi C salah karena refleksi adalah fitur universal Java di semua OS.",
      "D": "Opsi D salah karena MapStruct justru memanfaatkan getter/setter dalam kode yang di-generate."
    },
    "jobId": "junior-java"
  }
];
