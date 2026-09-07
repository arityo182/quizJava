import { Question } from './types';

export const TECH_ADVANCED: Question[] = [
  {
    level: "advanced",
    cat: "Java Core",
    q: "Manakah pernyataan yang benar mengenai keyword `volatile` pada Java?",
    opts: {
      A: "Menjamin atomicity pada operasi increment (seperti i++).",
      B: "Mencegah thread caching sehingga perubahan variabel langsung terlihat oleh semua thread.",
      C: "Menggantikan sepenuhnya fungsi dari blok `synchronized`.",
      D: "Membuat variabel hanya bisa diakses oleh satu thread pada satu waktu."
    },
    ans: "B",
    exp: "`volatile` memastikan visibilitas memori antar thread, tapi tidak menjamin atomicity."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Apa perbedaan utama antara `submit()` dan `execute()` pada `ExecutorService`?",
    opts: {
      A: "`submit()` dapat mengembalikan Future, sedangkan `execute()` tidak mengembalikan apapun (void).",
      B: "`execute()` menangkap exception secara internal, sedangkan `submit()` melemparnya langsung.",
      C: "`submit()` hanya menerima `Runnable`, sedangkan `execute()` menerima `Callable`.",
      D: "Tidak ada perbedaan, keduanya melakukan hal yang sama persis."
    },
    ans: "A",
    exp: "`submit()` mengembalikan objek Future yang dapat digunakan untuk memeriksa hasil atau exception, sedangkan `execute()` bertipe void."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Dalam Java Generics, apa arti dari sintaks `List<? extends Number>`?",
    opts: {
      A: "List yang dapat menerima elemen berupa Number atau superclass dari Number.",
      B: "List yang hanya bisa diisi dengan objek tipe Number saja.",
      C: "List yang berisi elemen bertipe Number atau subclass dari Number (read-only untuk penambahan elemen baru).",
      D: "List yang mengizinkan penambahan sembarang tipe data asalkan merupakan objek."
    },
    ans: "C",
    exp: "`? extends Number` (upper bound wildcard) berarti list bisa menampung Number atau turunannya, tetapi kita tidak bisa menambahkan elemen ke dalamnya secara aman (kecuali null)."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Bagaimana cara memanggil private method dari kelas lain menggunakan Reflection API?",
    opts: {
      A: "Dengan memanggil `method.setAccessible(true)` sebelum melakukan `method.invoke()`.",
      B: "Dengan mendeklarasikan kelas pemanggil sebagai subclass dari kelas target.",
      C: "Private method tidak bisa dipanggil melalui Reflection karena melanggar enkapsulasi.",
      D: "Dengan menggunakan metode `Class.forName().callPrivate()`."
    },
    ans: "A",
    exp: "Metode `setAccessible(true)` pada objek `Method` memungkinkan Reflection untuk menerobos batasan aksesibilitas private."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Algoritma Garbage Collection manakah yang dirancang untuk meminimalisir 'pause time' dan membagi memori heap ke dalam region berukuran sama?",
    opts: {
      A: "Serial GC",
      B: "Parallel GC",
      C: "G1 GC (Garbage-First)",
      D: "CMS GC (Concurrent Mark Sweep)"
    },
    ans: "C",
    exp: "G1 GC membagi heap menjadi region-region dan memprioritaskan pengumpulan garbage pada region dengan jumlah garbage terbanyak (Garbage-First) untuk meminimalisir pause time."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Apa yang dimaksud dengan konsep 'Happens-Before' dalam Java Memory Model?",
    opts: {
      A: "Aturan yang mengharuskan semua thread dijalankan secara berurutan.",
      B: "Garansi bahwa hasil memori dari sebuah operasi akan terlihat oleh operasi lain yang dilakukan setelahnya.",
      C: "Metode untuk menjadwalkan thread berdasarkan prioritas eksekusi.",
      D: "Proses kompilasi dimana kode sumber dijalankan terlebih dahulu sebelum diubah ke bytecode."
    },
    ans: "B",
    exp: "'Happens-Before' adalah relasi dalam JMM yang menjamin visibilitas perubahan memori dari satu operasi ke operasi lainnya."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Manakah dari implementasi Singleton berikut yang paling direkomendasikan untuk keamanan thread tanpa memerlukan sinkronisasi eksplisit?",
    opts: {
      A: "Lazy initialization dengan metode synchronized",
      B: "Eager initialization pada blok statis",
      C: "Double-checked locking",
      D: "Initialization-on-demand holder idiom (menggunakan static inner class) atau Enum"
    },
    ans: "D",
    exp: "Enum atau Bill Pugh Singleton (static inner class) adalah cara terbaik untuk membuat Singleton yang thread-safe secara intrinsik oleh classloader."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Pada Design Pattern Observer, apa peran dari subjek (subject)?",
    opts: {
      A: "Menjalankan aksi spesifik tanpa memberi tahu objek lain.",
      B: "Menyimpan daftar observer dan memberi tahu mereka tentang perubahan state.",
      C: "Mengamati perubahan dari observer lain.",
      D: "Mengatur komunikasi dua arah yang ketat antara semua komponen."
    },
    ans: "B",
    exp: "Subjek bertugas memaintain daftar referensi ke pengamat (observer) dan memberitahukan update ke mereka bila ada perubahan state."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Jika kita memiliki list employee dan ingin mengelompokkannya berdasarkan departemen, operasi Stream apa yang paling tepat?",
    code: "List<Employee> employees = ...;\nMap<String, List<Employee>> byDept = employees.stream().collect(...);",
    opts: {
      A: "Collectors.partitioningBy(Employee::getDepartment)",
      B: "Collectors.toMap(Employee::getDepartment, e -> e)",
      C: "Collectors.groupingBy(Employee::getDepartment)",
      D: "Collectors.mapping(Employee::getDepartment, Collectors.toList())"
    },
    ans: "C",
    exp: "`Collectors.groupingBy` digunakan untuk mengelompokkan elemen stream ke dalam Map berdasarkan classifier function."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Apa output dari eksekusi kode Parallel Stream berikut jika terdapat 100 elemen?",
    code: "List<Integer> list = IntStream.range(0, 100).boxed().collect(Collectors.toList());\nList<Integer> result = new ArrayList<>();\nlist.parallelStream().forEach(result::add);\nSystem.out.println(result.size());",
    opts: {
      A: "Pasti selalu 100.",
      B: "Bisa kurang dari 100 atau melempar ConcurrentModificationException.",
      C: "Melempar UnsupportedOperationException pada saat kompilasi.",
      D: "Pasti mencetak elemen secara berurutan dari 0 sampai 99."
    },
    ans: "B",
    exp: "`ArrayList` tidak thread-safe. Menambah elemen ke ArrayList dari parallel stream secara concurrent dapat menyebabkan race condition."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Fungsional interface manakah yang merepresentasikan sebuah operasi yang menerima satu argumen dan mengembalikan nilai boolean?",
    opts: {
      A: "Function<T, R>",
      B: "Supplier<T>",
      C: "Consumer<T>",
      D: "Predicate<T>"
    },
    ans: "D",
    exp: "`Predicate<T>` adalah functional interface di mana metode `test(T t)` mengembalikan nilai boolean."
  },
  {
    level: "advanced",
    cat: "Java Core",
    q: "Mengapa penggunaan `Executors.newCachedThreadPool()` bisa berbahaya di lingkungan production dengan beban tinggi?",
    opts: {
      A: "Karena selalu menggunakan satu thread untuk semua task.",
      B: "Karena dapat membuat thread dalam jumlah tak terbatas dan berpotensi menyebabkan OutOfMemoryError.",
      C: "Karena pool ini segera menutup thread setelah task selesai tanpa bisa digunakan ulang.",
      D: "Karena memaksa penggunaan garbage collection setiap kali task selesai."
    },
    ans: "B",
    exp: "`newCachedThreadPool` memiliki kapasitas maksimum thread sebesar Integer.MAX_VALUE, sehingga lonjakan task dapat menguras memori dengan membuat terlalu banyak thread."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Pola apa yang biasanya diimplementasikan menggunakan library seperti Resilience4j di Spring Boot untuk mencegah kegagalan berantai antar layanan?",
    opts: {
      A: "Service Discovery",
      B: "Circuit Breaker",
      C: "API Gateway",
      D: "Distributed Tracing"
    },
    ans: "B",
    exp: "Circuit Breaker pattern mencegah panggilan berulang ke layanan yang gagal, melindungi sistem dari kegagalan kaskade."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Komponen manakah dalam arsitektur microservices yang memungkinkan aplikasi untuk menemukan lokasi dinamis instance layanan lain?",
    opts: {
      A: "Config Server",
      B: "Message Broker",
      C: "Service Discovery (contoh: Eureka, Consul)",
      D: "Load Balancer"
    },
    ans: "C",
    exp: "Service Discovery bertugas mencatat dan menyediakan daftar IP dinamis dari layanan microservices yang berjalan."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Pada Spring Security dengan JWT, filter apa yang biasanya dikustomisasi dan dieksekusi sekali per request untuk memvalidasi token?",
    opts: {
      A: "UsernamePasswordAuthenticationFilter",
      B: "OncePerRequestFilter",
      C: "CorsFilter",
      D: "BasicAuthenticationFilter"
    },
    ans: "B",
    exp: "`OncePerRequestFilter` memastikan filter validasi JWT dieksekusi tepat satu kali setiap request HTTP."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Dalam Spring AOP, tipe advice manakah yang membungkus eksekusi method dan memungkinkan pengembang mengontrol jalannya eksekusi (melanjutkan atau membatalkan)?",
    opts: {
      A: "@Before",
      B: "@AfterReturning",
      C: "@AfterThrowing",
      D: "@Around"
    },
    ans: "D",
    exp: "`@Around` advice mengelilingi join point, membolehkan kita untuk mengeksekusi kode sebelum dan sesudah eksekusi method target."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Bagaimana cara invalidasi (menghapus) entri cache di Spring Boot saat ada update data?",
    opts: {
      A: "Menggunakan anotasi @CachePut",
      B: "Menggunakan anotasi @CacheEvict",
      C: "Memanggil metode CacheManager.clearAll() secara manual",
      D: "Menggunakan anotasi @CacheRemove"
    },
    ans: "B",
    exp: "`@CacheEvict` digunakan secara deklaratif untuk menghapus entri dari cache, sangat cocok saat operasi update atau delete dilakukan."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Dalam event-driven design di Spring, jika kita ingin sebuah `@EventListener` dijalankan secara asinkron, apa yang perlu dilakukan?",
    opts: {
      A: "Menambahkan konfigurasi spring.event.async=true",
      B: "Menandai metode tersebut dengan @Async dan mengaktifkan @EnableAsync di level konfigurasi",
      C: "Hanya dengan mengimplementasikan ApplicationListener",
      D: "Menggunakan @AsyncEventListener (Anotasi khusus Spring Boot)"
    },
    ans: "B",
    exp: "Untuk menjalankan listener di thread terpisah, kita menggunakan anotasi `@Async` pada metode beserta konfigurasi `@EnableAsync`."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Apa perbedaan mendasar antara Spring MVC konvensional dan Spring WebFlux?",
    opts: {
      A: "WebFlux lebih lambat tetapi mendukung XML dengan lebih baik.",
      B: "WebFlux mengadopsi model non-blocking dan reaktif (Project Reactor), sementara MVC menggunakan blokir per-thread (Servlet API).",
      C: "WebFlux adalah bagian dari Spring Boot 1.0 yang sudah deprecated.",
      D: "Tidak ada perbedaan arsitektural, hanya beda penamaan."
    },
    ans: "B",
    exp: "WebFlux dirancang untuk sistem reaktif non-blocking dengan skalabilitas tinggi menggunakan sedikit thread."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Phase manakah dari lifecycle Bean Spring dimana metode beranotasi `@PostConstruct` dieksekusi?",
    opts: {
      A: "Sebelum instantiasi objek.",
      B: "Segera setelah constructor dipanggil, sebelum dependency injection.",
      C: "Setelah objek selesai diinstansiasi dan dependency injection (properties set) selesai.",
      D: "Hanya saat aplikasi akan di-shutdown."
    },
    ans: "C",
    exp: "`@PostConstruct` dipanggil setelah Spring selesai menginisiasi bean dan mengisi seluruh ketergantungannya."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Fitur Spring Boot Auto-Configuration bekerja dengan cara membaca file khusus di dalam classpath. File apakah itu (di Spring Boot 2.7+)?",
    opts: {
      A: "spring.factories",
      B: "META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports",
      C: "application.properties",
      D: "bootstrap.yml"
    },
    ans: "B",
    exp: "Sejak Spring Boot 2.7, konfigurasi auto menggunakan file `.imports`, menggantikan penggunaan `spring.factories` yang lama."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Fungsi utama anotasi `@ConditionalOnProperty` pada kelas `@Configuration` adalah:",
    opts: {
      A: "Mengubah nilai properti sistem.",
      B: "Hanya membuat dan menginisialisasi bean jika sebuah properti dengan nilai tertentu ada di application.properties/yml.",
      C: "Memetakan file YAML ke dalam kelas Java.",
      D: "Menonaktifkan seluruh konfigurasi Spring Security."
    },
    ans: "B",
    exp: "Anotasi kondisional ini berguna untuk mengaktifkan atau menonaktifkan fitur/bean berdasarkan nilai di environment."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Untuk melakukan binding yang kuat antara konfigurasi (application.yml) dan class POJO, Spring menyediakan fitur...",
    opts: {
      A: "@Value pada setiap field",
      B: "@ConfigurationProperties",
      C: "@PropertySource",
      D: "@EnvironmentBind"
    },
    ans: "B",
    exp: "`@ConfigurationProperties` memungkinkan type-safe binding hierarki properti langsung ke objek Java."
  },
  {
    level: "advanced",
    cat: "Spring Boot",
    q: "Apa komponen yang menjadi titik masuk dari delegasi request filter di Spring Security?",
    opts: {
      A: "SecurityFilterChain",
      B: "AuthenticationManager",
      C: "DelegatingFilterProxy",
      D: "SecurityContextHolder"
    },
    ans: "C",
    exp: "`DelegatingFilterProxy` mendelegasikan request HTTP dari Servlet container ke `FilterChainProxy` yang dimiliki Spring Security."
  },
  {
    level: "advanced",
    cat: "REST API",
    q: "Konsep HATEOAS dalam kematangan REST API (Richardson Maturity Model Level 3) berfungsi untuk:",
    opts: {
      A: "Menambahkan keamanan enkripsi payload API.",
      B: "Menyediakan metadata atau hypermedia link (URI) navigasi pada response, sehingga klien dapat menemukan aksi selanjutnya secara dinamis.",
      C: "Mengubah metode HTTP dari POST ke GET secara dinamis.",
      D: "Mendefinisikan skema GraphQL untuk resource terkait."
    },
    ans: "B",
    exp: "HATEOAS (Hypermedia as the Engine of Application State) menyematkan link-link navigasi pada response resource."
  },
  {
    level: "advanced",
    cat: "REST API",
    q: "Strategi API Versioning mana yang secara ketat menjaga URI tetap bersih namun mengharuskan manipulasi header HTTP?",
    opts: {
      A: "URI Path Versioning (e.g., /v1/users)",
      B: "Query Parameter Versioning (e.g., /users?version=1)",
      C: "Media Type / Content Negotiation Versioning (Accept header: application/vnd.app.v1+json)",
      D: "Domain Versioning (e.g., v1.api.example.com/users)"
    },
    ans: "C",
    exp: "Pendekatan Media Type menggunakan HTTP Accept header (Content Negotiation) menjaga kebersihan URL."
  },
  {
    level: "advanced",
    cat: "REST API",
    q: "Apa kegunaan dari algoritma Token Bucket dalam konteks REST API?",
    opts: {
      A: "Untuk kompresi payload JSON",
      B: "Untuk strategi Cache invalidation",
      C: "Untuk implementasi Rate Limiting guna mengontrol trafik/request rate dari klien",
      D: "Untuk menandai transaksi database yang gagal"
    },
    ans: "C",
    exp: "Token Bucket adalah algoritma populer untuk membatasi laju request (Rate Limiting) ke API."
  },
  {
    level: "advanced",
    cat: "REST API",
    q: "Content Negotiation di REST API memungkinkan klien memilih format data. Header HTTP apa yang dikirim klien untuk mengkomunikasikannya?",
    opts: {
      A: "Content-Type",
      B: "Accept",
      C: "Authorization",
      D: "X-Forwarded-Proto"
    },
    ans: "B",
    exp: "Header `Accept` memberi tahu server tentang format representasi yang diharapkan oleh klien (mis. application/json)."
  },
  {
    level: "advanced",
    cat: "REST API",
    q: "Dalam arsitektur mikro, apa salah satu fungsi utama dari API Gateway?",
    opts: {
      A: "Menulis log error langsung ke database.",
      B: "Berfungsi sebagai single entry point untuk melakukan routing, komposisi, cross-cutting concerns (autentikasi, rate limit).",
      C: "Mengelola replikasi data antar database NoSQL.",
      D: "Melakukan kompilasi kode dari semua service."
    },
    ans: "B",
    exp: "API Gateway berada di depan microservices dan menangani request routing, komposisi, dan fungsi keamanan/performa terpusat."
  },
  {
    level: "advanced",
    cat: "Database/JPA",
    q: "Masalah N+1 di Hibernate terjadi ketika:",
    opts: {
      A: "Menambah 1 tabel baru dalam schema tanpa melakukan migrasi",
      B: "Koneksi pool habis karena N thread berjalan bersamaan",
      C: "Satu query awal mengeksekusi N tambahan query untuk mengambil relasi (lazy load) dari masing-masing hasil awal",
      D: "Menambah entitas anak berulang kali ke entitas induk tanpa sinkronisasi"
    },
    ans: "C",
    exp: "N+1 select problem terjadi pada Lazy Loading, di mana meload parent list lalu memanggil child list memicu query untuk setiap record parent."
  },
  {
    level: "advanced",
    cat: "Database/JPA",
    q: "Bagaimana salah satu solusi paling efektif mengatasi N+1 queries problem saat query via JPA/Hibernate?",
    opts: {
      A: "Mengubah FetchType menjadi EAGER secara global di entitas",
      B: "Menggunakan query JPQL dengan konstruksi `JOIN FETCH` atau EntityGraph",
      C: "Meningkatkan memori koneksi database",
      D: "Menghapus constraint relasi (foreign key)"
    },
    ans: "B",
    exp: "`JOIN FETCH` dalam JPQL atau menggunakan EntityGraph akan memuat relasi sekaligus dalam satu kueri SQL."
  },
  {
    level: "advanced",
    cat: "Database/JPA",
    q: "Pada Hibernate, apa perbedaan utama Level 1 (L1) dan Level 2 (L2) Cache?",
    opts: {
      A: "L1 berada di aplikasi klien, L2 berada di database.",
      B: "L1 cache bersifat session/EntityManager-scoped dan selalu aktif, sedangkan L2 cache bersifat SessionFactory/global-scoped dan perlu dikonfigurasi.",
      C: "L1 cache menyimpan metadata entitas, L2 menyimpan hasil SQL saja.",
      D: "Tidak ada Level 1 cache di Hibernate."
    },
    ans: "B",
    exp: "L1 cache otomatis ada di setiap EntityManager/Session. L2 cache harus diaktifkan dan dapat di-share antar session."
  },
  {
    level: "advanced",
    cat: "Database/JPA",
    q: "Strategi Optimistic Locking menggunakan anotasi `@Version` sangat cocok untuk...",
    opts: {
      A: "Sistem dengan tingkat konkurensi tulisan (write contention) yang sangat tinggi di mana konflik hampir selalu terjadi.",
      B: "Mengunci record secara fisik di row database (SELECT FOR UPDATE).",
      C: "Sistem dengan konflik data yang jarang terjadi, menggunakan kolom versi untuk mencegah lost update tanpa penalti blocking DB.",
      D: "Memastikan tidak ada thread yang dapat membaca data sebelum thread lain selesai."
    },
    ans: "C",
    exp: "Optimistic Locking mengasumsikan konflik jarang, sehingga ia hanya memeriksa versi saat komit daripada mengunci baris DB sepanjang transaksi."
  },
  {
    level: "advanced",
    cat: "Database/JPA",
    q: "Jika Anda membuat Composite Index pada kolom (A, B, C) dalam database B-Tree, query mana yang TIDAK akan menggunakan index tersebut secara efektif?",
    opts: {
      A: "SELECT * FROM tabel WHERE A = 1",
      B: "SELECT * FROM tabel WHERE A = 1 AND B = 2",
      C: "SELECT * FROM tabel WHERE A = 1 AND B = 2 AND C = 3",
      D: "SELECT * FROM tabel WHERE B = 2 AND C = 3"
    },
    ans: "D",
    exp: "B-Tree composite index memenuhi kaidah 'leftmost prefix'. Index (A,B,C) bisa digunakan untuk (A), (A,B), (A,B,C). Query yang tidak mencantumkan A tidak akan menggunakannya secara optimal."
  },
  {
    level: "advanced",
    cat: "Database/JPA",
    q: "Tingkat isolasi transaksi manakah yang memberikan jaminan paling ketat dengan menghindari Dirty Read, Non-repeatable Read, dan Phantom Read?",
    opts: {
      A: "READ UNCOMMITTED",
      B: "READ COMMITTED",
      C: "REPEATABLE READ",
      D: "SERIALIZABLE"
    },
    ans: "D",
    exp: "Serializable adalah level isolasi paling ketat, menjamin eksekusi seolah-olah dilakukan secara serial (berurutan) tanpa anomali baca."
  },
  {
    level: "advanced",
    cat: "Database/JPA",
    q: "Apa kegunaan utama dari JPA Criteria API dibandingkan dengan penulisan raw JPQL?",
    opts: {
      A: "Lebih cepat dalam eksekusi database secara signifikan.",
      B: "Membangun query secara type-safe (aman secara tipe) dan dinamis pada runtime menggunakan Java code.",
      C: "Untuk memigrasikan skema database secara otomatis.",
      D: "Hanya untuk melakukan optimasi query native ke PostgreSQL."
    },
    ans: "B",
    exp: "Criteria API menawarkan pembuatan kueri berorientasi objek dan dinamis serta pencegahan error sintaks melalui type safety (metamodel)."
  },
  {
    level: "advanced",
    cat: "Database/JPA",
    q: "Mengapa pengembang lebih memilih menggunakan Flyway atau Liquibase dibandingkan hibernate.hbm2ddl.auto=update di production?",
    opts: {
      A: "Hibernate auto-update jauh lebih lambat dari Flyway.",
      B: "Flyway/Liquibase menyediakan versioning skema, audit trail sejarah, dan dapat dikontrol aman, tidak menebak-nebak perubahan seperti Hibernate.",
      C: "Hibernate auto-update tidak bisa menambah kolom baru.",
      D: "Liquibase adalah fitur bawaan dari Spring Data JPA."
    },
    ans: "B",
    exp: "Tool migrasi skema memberikan kepastian dan kontrol atas evolusi skema DDL berdasar naskah migrasi versi-demi-versi."
  },
  {
    level: "advanced",
    cat: "Testing",
    q: "Dalam pendekatan TDD (Test-Driven Development), siklus utama yang biasa disebut 'Red-Green-Refactor' bermakna:",
    opts: {
      A: "Menulis bug (Red), memperbaikinya (Green), lalu menghapusnya (Refactor).",
      B: "Menulis tes yang gagal (Red), menulis kode minimal agar lulus tes (Green), lalu merapikan kode tanpa mengubah fungsionalitas (Refactor).",
      C: "Tes performa lambat (Red), tes normal (Green), tes super cepat (Refactor).",
      D: "Status Git: untracked (Red), committed (Green), pushed (Refactor)."
    },
    ans: "B",
    exp: "Filsafat utama TDD adalah memulai dengan menulis tes yang gagal, membuat kode minimum untuk tes lewat, dan me-refactor kode untuk kualitas."
  },
  {
    level: "advanced",
    cat: "Testing",
    q: "Apa kegunaan spesifik dari anotasi `@WebMvcTest` dalam Spring Boot Testing?",
    opts: {
      A: "Menjalankan keseluruhan container aplikasi dan database untuk end-to-end testing.",
      B: "Hanya memuat komponen lapisan Web (Controllers, Filters, ControllerAdvice) tanpa layer service/repository (sliced testing).",
      C: "Menyediakan mock database secara otomatis.",
      D: "Melakukan load testing pada semua endpoint web."
    },
    ans: "B",
    exp: "`@WebMvcTest` mempercepat test karena hanya meng-instantiate komponen Spring Web yang diperlukan, sangat cocok dipadu dengan `@MockBean`."
  },
  {
    level: "advanced",
    cat: "Testing",
    q: "Bagaimana Testcontainers menyelesaikan masalah ketergantungan pada environment lokal saat integrasi testing?",
    opts: {
      A: "Dengan menggunakan database H2 in-memory sebagai pengganti database asli.",
      B: "Dengan melakukan koneksi proxy ke database remote staging.",
      C: "Dengan menjalankan dependency seperti DB, Message Broker di dalam container Docker asli yang diatur secara programatik oleh Java.",
      D: "Dengan me-mock seluruh API pemanggilan jaringan."
    },
    ans: "C",
    exp: "Testcontainers membungkus container Docker untuk database asli (seperti PostgreSQL, Kafka) untuk integration test yang sangat realistis."
  },
  {
    level: "advanced",
    cat: "Testing",
    q: "Di JUnit 5, anotasi apa yang dipakai untuk menginjeksikan berbagai input tes ke satu method secara berulang?",
    opts: {
      A: "@RepeatedTest",
      B: "@TestFactory",
      C: "@ParameterizedTest beserta sumber data (seperti @CsvSource atau @MethodSource)",
      D: "@BeforeEach"
    },
    ans: "C",
    exp: "`@ParameterizedTest` memungkinkan sebuah test dieksekusi berkali-kali menggunakan parameter masukan yang bervariasi."
  },
  {
    level: "advanced",
    cat: "Testing",
    q: "Saat menggunakan `MockMvc`, bagaimana cara kita memverifikasi bahwa respons HTTP memiliki status 201 Created?",
    code: "mockMvc.perform(post(\"/api/users\")\n    .contentType(MediaType.APPLICATION_JSON)\n    .content(requestBody))\n    .andExpect(...);",
    opts: {
      A: "status().isOk()",
      B: "status().isCreated()",
      C: "status().isAccepted()",
      D: "response().status(201)"
    },
    ans: "B",
    exp: "`status().isCreated()` mengekspektasikan bahwa kode respon adalah HTTP 201 (Created)."
  },
  {
    level: "advanced",
    cat: "Architecture",
    q: "Prinsip utama dalam Clean Architecture (Paman Bob) mengenai aturan ketergantungan (Dependency Rule) adalah:",
    opts: {
      A: "Modul backend selalu bergantung pada framework yang digunakan.",
      B: "Lapisan terluar (UI/DB) boleh bergantung ke mana saja.",
      C: "Ketergantungan (dependencies) hanya boleh mengarah ke dalam (menuju Core/Entities).",
      D: "Setiap layer dapat memanggil layer mana saja secara bebas demi kecepatan pengembangan."
    },
    ans: "C",
    exp: "Lapisan dalam merangkum domain dan tidak bergantung pada detail lapisan luar (framework, UI, DB)."
  },
  {
    level: "advanced",
    cat: "Architecture",
    q: "Arsitektur Hexagonal juga dikenal dengan nama:",
    opts: {
      A: "MVC (Model View Controller)",
      B: "Ports and Adapters Architecture",
      C: "Microkernel Architecture",
      D: "Event-Driven Architecture"
    },
    ans: "B",
    exp: "Hexagonal Architecture disebut Ports & Adapters karena aplikasi dipisahkan dari environment menggunakan antarmuka (ports) dan implementasinya (adapters)."
  },
  {
    level: "advanced",
    cat: "Architecture",
    q: "Dalam pola CQRS (Command Query Responsibility Segregation), apa pemisahan mendasar yang dilakukan?",
    opts: {
      A: "Memisahkan tabel menjadi partisi-partisi harian.",
      B: "Memisahkan microservice berdasarkan benua/lokasi geografis.",
      C: "Memisahkan model untuk operasi baca (Queries) dan operasi tulis/ubah (Commands).",
      D: "Memisahkan logic frontend (Query) dan backend (Command)."
    },
    ans: "C",
    exp: "CQRS membedakan object/model/alur antara pembacaan data (Query) dan pembaruan state data (Command), seringkali dengan DB terpisah."
  },
  {
    level: "advanced",
    cat: "Architecture",
    q: "Apa keuntungan utama dari pola Event Sourcing?",
    opts: {
      A: "Aplikasi menjadi lebih cepat memproses query baca karena tidak ada log.",
      B: "State aplikasi tidak disimpan sebagai current state di row tabel DB biasa, melainkan sebagai log urutan event yang tidak berubah (append-only), memungkinkan rekontruksi state dan audit penuh.",
      C: "Tidak memerlukan database eksternal, hanya RAM.",
      D: "Menggabungkan sistem Command dan Query tanpa latensi sinkronisasi."
    },
    ans: "B",
    exp: "Event Sourcing menyimpan semua perubahan state sebagai event. Hal ini sangat berguna untuk audit trail, roll-back state (time-travel), dan integrasi CQRS."
  },
  {
    level: "advanced",
    cat: "Architecture",
    q: "Dalam Domain-Driven Design (DDD), konsep apa yang merepresentasikan sekelompok objek (entity dan value object) yang diperlakukan sebagai satu unit konsistensi dengan satu 'Root'?",
    opts: {
      A: "Bounded Context",
      B: "Repository",
      C: "Aggregate",
      D: "Ubiquitous Language"
    },
    ans: "C",
    exp: "Aggregate membungkus satu set entitas. Akses luar ke entitas di dalam kelompok ini hanya diizinkan melewati Aggregate Root."
  },
  {
    level: "advanced",
    cat: "DevOps/Deployment",
    q: "Mengapa dalam Dockerfile disarankan untuk merangkai perintah (chaining) RUN dengan &&?",
    opts: {
      A: "Untuk membuatnya terlihat seperti script Bash murni.",
      B: "Karena Docker hanya mengizinkan maksimal 5 layer dalam satu image.",
      C: "Untuk meminimalkan jumlah image layer yang terbentuk, sehingga mengurangi ukuran image.",
      D: "Agar Docker dapat menjalankan operasi tersebut secara paralel multi-threading."
    },
    ans: "C",
    exp: "Setiap direktif RUN menciptakan layer baru. Menggabungkannya dengan && mengurangi layer dan size image."
  },
  {
    level: "advanced",
    cat: "DevOps/Deployment",
    q: "Di Kubernetes, apa perbedaan mendasar antara Pod dan Deployment?",
    opts: {
      A: "Pod adalah unit terkecil berisi 1/lebih container, sedangkan Deployment adalah abstraksi pengontrol yang mengatur replika dan update strategi dari Pod.",
      B: "Pod untuk container berbasis Linux, Deployment untuk container Windows.",
      C: "Tidak ada perbedaan, hanya terminologi yang berubah dari k8s v1 ke v2.",
      D: "Pod mengatur load balancer dan port jaringan, Deployment adalah containernya."
    },
    ans: "A",
    exp: "Deployment adalah controller layer yang mengelola ReplicaSets dan siklus hidup (rollouts) dari grup-grup Pod."
  },
  {
    level: "advanced",
    cat: "DevOps/Deployment",
    q: "Dalam alur CI/CD pipeline, apa tujuan utama tahap Continuous Integration (CI)?",
    opts: {
      A: "Memastikan code secara otomatis di-deploy ke server produksi.",
      B: "Menyatukan dan memvalidasi kode dari berbagai developer secara otomatis sedini mungkin (build dan test) setiap terjadi commit.",
      C: "Menghitung biaya server cloud secara terus menerus.",
      D: "Membuat laporan bug tracking secara otomatis."
    },
    ans: "B",
    exp: "CI bertujuan mendeteksi konflik dan bug secara dini dengan automasi kompilasi dan testing berulang-ulang."
  },
];
