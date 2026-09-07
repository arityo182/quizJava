import { Question } from './types';

export const TECH_INTERMEDIATE: Question[] = [
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Apa output dari kode berikut?",
    code: `String s1 = new String("Hello");\nString s2 = new String("Hello");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1.equals(s2));`,
    opts: { A: "true / true", B: "false / false", C: "false / true", D: "true / false" },
    ans: "C",
    exp: "Operator == membandingkan referensi memori (false), sedangkan equals() membandingkan nilai string (true)."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Berapa hasil dari eksekusi stream berikut?",
    code: `List<Integer> list = Arrays.asList(1, 2, 3, 4);\nint sum = list.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum();`,
    opts: { A: "4", B: "6", C: "10", D: "0" },
    ans: "B",
    exp: "Stream memfilter angka genap (2 dan 4), kemudian menjumlahkannya (2 + 4 = 6)."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Apa hasil dari operasi stream berikut?",
    code: `List<Integer> nums = Arrays.asList(1, 2, 3, 4);\nint result = nums.stream().filter(n -> n % 2 == 0).map(n -> n * 2).mapToInt(n -> n).sum();`,
    opts: { A: "10", B: "12", C: "6", D: "20" },
    ans: "B",
    exp: "Angka genap (2, 4) dikalikan 2 menjadi (4, 8), kemudian dijumlahkan menjadi 12."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Struktur data mana di Java yang paling efisien untuk pencarian key-value dengan kompleksitas waktu O(1)?",
    opts: { A: "TreeMap", B: "HashMap", C: "ArrayList", D: "LinkedList" },
    ans: "B",
    exp: "HashMap menggunakan hashing untuk operasi get/put dengan kompleksitas rata-rata O(1)."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Apa perbedaan utama antara HashMap dan Hashtable di Java?",
    opts: { A: "HashMap aman untuk multithreading", B: "Hashtable mengizinkan null key", C: "HashMap tidak synchronized dan mengizinkan null, Hashtable synchronized dan menolak null", D: "Tidak ada perbedaan" },
    ans: "C",
    exp: "Hashtable bersifat legacy, thread-safe, dan menolak null. HashMap non-synchronized dan mengizinkan null."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Untuk membuat custom Checked Exception, class harus meng-extend class apa?",
    opts: { A: "RuntimeException", B: "Exception", C: "Throwable", D: "Error" },
    ans: "B",
    exp: "Checked exception harus meng-extend class Exception (atau subclassnya selain RuntimeException)."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Apa tujuan utama dari penggunaan Optional<T> (Java 8)?",
    opts: { A: "Meningkatkan performa", B: "Menghindari NullPointerException", C: "Menggantikan tipe primitif", D: "Membuat thread" },
    ans: "B",
    exp: "Optional bertindak sebagai wadah untuk nilai yang mungkin null untuk penanganan yang lebih aman."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Manakah pernyataan yang BENAR mengenai Interface vs Abstract Class?",
    opts: { A: "Bisa extend banyak abstract class", B: "Abstract class dapat memiliki state (instance variable), interface (sebelum Java 8) tidak", C: "Interface tidak bisa punya implementasi method sama sekali", D: "Abstract class tidak boleh punya constructor" },
    ans: "B",
    exp: "Abstract class bisa memiliki instance variable/state, sedangkan interface murni (sebelum default method Java 8) tidak."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Apa perbedaan @RequestParam dan @PathVariable?",
    opts: { A: "Sama saja", B: "@PathVariable mengambil nilai dari URI path, @RequestParam dari query parameter", C: "@RequestParam untuk POST", D: "@PathVariable mengambil dari request body" },
    ans: "B",
    exp: "@PathVariable mengambil dari segmen path URL (/users/{id}), @RequestParam dari query string (?id=1)."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Apa kegunaan utama dari @Autowired?",
    opts: { A: "Koneksi database", B: "Melakukan Dependency Injection secara otomatis", C: "Konfigurasi server", D: "Membuat bean" },
    ans: "B",
    exp: "@Autowired otomatis menyuntikkan (inject) bean yang dikelola oleh Spring container."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Apa fungsi dari @Transactional?",
    opts: { A: "Method asinkron", B: "Membungkus method dalam database transaction (rollback jika ada RuntimeException)", C: "Mengatur timeout HTTP", D: "Cache response" },
    ans: "B",
    exp: "@Transactional memastikan atomicity. Jika terjadi exception (terutama unchecked), transaksi otomatis di-rollback."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Pernyataan yang tepat tentang @Component, @Service, dan @Repository?",
    opts: { A: "Hanya @Component yang bisa di-inject", B: "@Repository bukan bean", C: "@Service dan @Repository adalah spesialisasi dari @Component", D: "Hanya bisa di Controller" },
    ans: "C",
    exp: "@Service dan @Repository secara internal di-anotasi dengan @Component dengan semantik peran yang lebih jelas."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Apa kegunaan @RequestBody?",
    opts: { A: "Membaca header", B: "Deserialisasi JSON HTTP Request Body menjadi Java Object", C: "Mengubah object ke JSON", D: "Mendapat URL" },
    ans: "B",
    exp: "@RequestBody mengikat body dari HTTP request ke domain object Java menggunakan HttpMessageConverter."
  },
  {
    level: "intermediate",
    cat: "REST API",
    q: "HTTP method manakah yang paling tepat untuk PARTIAL update resource?",
    opts: { A: "PUT", B: "POST", C: "PATCH", D: "UPDATE" },
    ans: "C",
    exp: "PATCH dirancang untuk pembaruan sebagian, sedangkan PUT menimpa (replace) representasi resource sepenuhnya."
  },
  {
    level: "intermediate",
    cat: "REST API",
    q: "Kelompok HTTP method mana yang bersifat IDEMPOTENT?",
    opts: { A: "POST, GET", B: "GET, PUT, DELETE", C: "POST, PATCH", D: "GET, POST, PATCH" },
    ans: "B",
    exp: "Idempotent berarti eksekusi berulang kali memberikan state/efek yang sama. GET, PUT, dan DELETE mematuhi ini."
  },
  {
    level: "intermediate",
    cat: "Clean Code",
    q: "Apa maksud Single Responsibility Principle (SRP)?",
    opts: { A: "Satu method saja", B: "Satu developer", C: "Sebuah class harus memiliki satu dan hanya satu alasan untuk berubah", D: "Satu interface" },
    ans: "C",
    exp: "SRP menyatakan bahwa setiap komponen software hanya boleh fokus pada satu tanggung jawab atau tugas."
  },
  {
    level: "intermediate",
    cat: "Clean Code",
    q: "Anotasi Spring Boot untuk Global Exception Handling?",
    opts: { A: "@GlobalExceptionHandler", B: "@ControllerAdvice", C: "@ExceptionHandlerGlobal", D: "@ExceptionAdvice" },
    ans: "B",
    exp: "@ControllerAdvice digunakan untuk mencegat exception secara global pada seluruh controller."
  },
  {
    level: "intermediate",
    cat: "Database/SQL",
    q: "Jenis JOIN apa yang hanya mengembalikan baris jika ada kecocokan di KEDUA tabel?",
    opts: { A: "LEFT JOIN", B: "RIGHT JOIN", C: "INNER JOIN", D: "OUTER JOIN" },
    ans: "C",
    exp: "INNER JOIN akan mengeliminasi baris dari salah satu tabel jika tidak memiliki pasangan data yang sesuai pada tabel lain."
  },
  {
    level: "intermediate",
    cat: "Database/SQL",
    q: "Apa fungsi dari klausa HAVING?",
    opts: { A: "Pengganti WHERE", B: "Memfilter hasil SETELAH operasi agregasi (GROUP BY)", C: "Sorting", D: "Mempercepat JOIN" },
    ans: "B",
    exp: "HAVING dipakai mirip WHERE, tetapi diterapkan untuk kondisi yang menggunakan fungsi agregasi atau sesudah data di-group."
  },
  {
    level: "intermediate",
    cat: "Database/SQL",
    q: "Urutan query SQL yang benar untuk menghitung pesanan per user berstatus ACTIVE?",
    code: `SELECT user_id, COUNT(order_id)\nFROM orders\n[?]`,
    opts: { A: "GROUP BY user_id WHERE status = 'ACTIVE'", B: "WHERE status = 'ACTIVE' GROUP BY user_id", C: "HAVING status = 'ACTIVE' GROUP BY user_id", D: "GROUP BY status = 'ACTIVE' WHERE user_id" },
    ans: "B",
    exp: "WHERE digunakan untuk filter baris sebelum proses agregasi GROUP BY dilakukan."
  },
  {
    level: "intermediate",
    cat: "JPA/Database",
    q: "Apa yang dimaksud N+1 Problem di JPA?",
    opts: { A: "Koneksi gagal", B: "1 query memuat entitas parent diikuti N query mengambil relasi child", C: "Max connection error", D: "Gagal insert N data" },
    ans: "B",
    exp: "Masalah performa dimana JPA memicu query terpisah untuk masing-masing baris hasil query utama saat mengakses relasinya."
  },
  {
    level: "intermediate",
    cat: "Testing",
    q: "Apa tujuan anotasi @SpringBootTest?",
    opts: { A: "Mocking bean", B: "Memuat seluruh context aplikasi Spring untuk Integration Test", C: "Unit test murni", D: "Generate data" },
    ans: "B",
    exp: "@SpringBootTest memuat keseluruhan ApplicationContext secara penuh untuk pengujian integrasi aplikasi."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Apa tujuan utama dari Generics di Java?",
    opts: { A: "Cepat kompilasi", B: "Compile-time type safety dan menghilangkan casting manual", C: "Kurangi memory", D: "Multiple inheritance" },
    ans: "B",
    exp: "Generics mencegah ClassCastException saat runtime dengan memastikan tipe objek divalidasi pada saat kompilasi."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Syarat agar interface dapat diimplementasikan dengan Lambda expression?",
    opts: { A: "Anotasi @Lambda", B: "Berupa Functional Interface (hanya punya 1 abstract method)", C: "Tidak punya default method", D: "Extend Runnable" },
    ans: "B",
    exp: "Lambda hanya berlaku pada tipe antarmuka fungsional yang mewajibkan tepat satu metode abstrak."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Class Java 8 untuk merangkai operasi asinkron non-blocking?",
    opts: { A: "Thread", B: "Runnable", C: "CompletableFuture", D: "FutureTask" },
    ans: "C",
    exp: "CompletableFuture memberikan API fungsional (chainable) untuk mengeksekusi proses asinkron."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Pernyataan SALAH mengenai Enum?",
    opts: { A: "Bisa punya constructor", B: "Bisa punya method", C: "Bisa meng-extend class lain", D: "Secara implisit extend java.lang.Enum" },
    ans: "C",
    exp: "Enum Java sudah mewarisi class java.lang.Enum secara internal sehingga tak dapat extend class lain (single inheritance)."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Syarat custom object agar dapat diurutkan menggunakan Collections.sort(list) (tanpa comparator tambahan)?",
    opts: { A: "Extend AbstractList", B: "Implement interface Comparable", C: "Anotasi @Sortable", D: "Implement Serializable" },
    ans: "B",
    exp: "Objek harus mengimplementasikan Comparable<T> dan mendefinisikan method compareTo untuk pengurutan natural."
  },
  {
    level: "intermediate",
    cat: "Java Core",
    q: "Perbedaan Comparable vs Comparator?",
    opts: { A: "Beda package", B: "Comparable (natural ordering) di class itu sendiri, Comparator (custom ordering) di luar class", C: "Keduanya sama", D: "Hanya beda nama" },
    ans: "B",
    exp: "Comparable memakai compareTo() dalam domain class, Comparator dipisahkan menjadi class eksternal lewat compare()."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Cara mengaktifkan profile 'dev' di Spring Boot?",
    opts: { A: "@ProfileDev", B: "spring.profiles.active=dev di properti", C: "File dev.properties", D: "--dev argument" },
    ans: "B",
    exp: "Profil spring aktif didefinisikan lewat parameter spring.profiles.active di application.properties/yml."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Anotasi untuk menghindari ambiguitas saat @Autowired banyak bean sejenis?",
    opts: { A: "@PrimaryOnly", B: "@SelectBean", C: "@Qualifier", D: "@BeanName" },
    ans: "C",
    exp: "@Qualifier(\"namaBean\") memaksa container untuk menyuntikkan (inject) bean spesifik sesuai ID yang disebutkan."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Apa bean scope default di Spring?",
    opts: { A: "Prototype", B: "Request", C: "Session", D: "Singleton" },
    ans: "D",
    exp: "Spring Container akan membuat satu objek instance (Singleton) dari sebuah bean secara default di memori."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Interface inti Spring Security yang menyimpan detail data user login?",
    opts: { A: "UserPrincipal", B: "UserDetails", C: "SecurityUser", D: "AuthDetails" },
    ans: "B",
    exp: "UserDetails menyimpan informasi akun seperti kredensial username/password beserta peran (authorities/roles)."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Anotasi untuk memicu validasi constraints pada DTO di controller?",
    opts: { A: "@Validate", B: "@Check", C: "@Valid", D: "@Verify" },
    ans: "C",
    exp: "Biasa disandingkan dengan @RequestBody, @Valid akan mengeksekusi aturan validasi (seperti @NotNull) di DTO."
  },
  {
    level: "intermediate",
    cat: "Spring Boot",
    q: "Kegunaan mengembalikan tipe ResponseEntity?",
    opts: { A: "Format XML", B: "Kontrol HTTP status code, header, dan body respons penuh", C: "Cegah injeksi SQL", D: "Error handling" },
    ans: "B",
    exp: "ResponseEntity mewakili keseluruhan respon HTTP, sehingga memberi kebebasan mengatur status dan header secara spesifik."
  },
  {
    level: "intermediate",
    cat: "REST API",
    q: "Parameter URL mana yang lazim untuk mengatur paginasi?",
    opts: { A: "?limit=10&offset=20", B: "?start=20&end=30", C: "?show=10&p2=true", D: "?data=10&s=20" },
    ans: "A",
    exp: "Offset dan Limit (atau page dan size) merupakan konvensi standar untuk menentukan data ke-berapa yang mau di-load."
  },
  {
    level: "intermediate",
    cat: "REST API",
    q: "Cara umum melakukan API versioning, KECUALI:",
    opts: { A: "Melalui URI Path (/v1/)", B: "Melalui Custom Header", C: "Melalui HTTP Method khusus versi", D: "Melalui Query parameter" },
    ans: "C",
    exp: "HTTP Method bersifat standar (GET, POST, PUT, DELETE) dan tidak ditambahkan khusus untuk mengelola versi."
  },
  {
    level: "intermediate",
    cat: "REST API",
    q: "Apa arti dari CORS dalam REST API?",
    opts: { A: "Keamanan database", B: "Mekanisme header browser untuk akses origin (domain) berbeda", C: "Kompresi data", D: "Proteksi DDoS" },
    ans: "B",
    exp: "CORS adalah spesifikasi keamanan browser yang membatasi akses AJAX HTTP ke domain/origin lain."
  },
  {
    level: "intermediate",
    cat: "Database/SQL",
    q: "Manakah contoh Subquery di WHERE klausa?",
    opts: { A: "SELECT * FROM users WHERE age > 18", B: "SELECT * FROM (SELECT * FROM users)", C: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders)", D: "SELECT a.* FROM users a JOIN orders b" },
    ans: "C",
    exp: "Subquery disisipkan (nested) ke dalam query luar, dalam contoh di atas memberikan filter ID dinamis dari tabel order."
  },
  {
    level: "intermediate",
    cat: "Database/SQL",
    q: "Kelemahan utama memiliki terlalu banyak Index?",
    opts: { A: "Memperlambat pembacaan", B: "Memperlambat modifikasi (INSERT/UPDATE/DELETE)", C: "Ubah tipe data", D: "Deadlock" },
    ans: "B",
    exp: "Walaupun SELECT jadi kencang, operasi DML memakan waktu lebih lama karena harus terus menulis ulang index tree."
  },
  {
    level: "intermediate",
    cat: "Database/SQL",
    q: "Perbedaan utama LEFT JOIN dan RIGHT JOIN?",
    opts: { A: "Beda nama", B: "LEFT JOIN pertahankan semua data tabel kiri meskipun kanan tidak cocok", C: "Keduanya identik", D: "Kiri lebih cepat" },
    ans: "B",
    exp: "Tabel di sebelah kiri klausa JOIN akan selalu di-return, dan kolom tabel di kanannya akan bernilai null jika tak ada match."
  },
  {
    level: "intermediate",
    cat: "JPA/Database",
    q: "Jika tabel 'Order' punya 'user_id' (Foreign Key) ke 'User', anotasi di entitas Order adalah?",
    opts: { A: "@OneToMany", B: "@ManyToMany", C: "@ManyToOne", D: "@OneToOne" },
    ans: "C",
    exp: "Sebuah order dimiliki oleh satu user, tapi satu user memiliki banyak order. Entitas pemegang Foreign Key adalah ManyToOne."
  },
  {
    level: "intermediate",
    cat: "JPA/Database",
    q: "Perbedaan FetchType.LAZY vs EAGER?",
    opts: { A: "LAZY memuat data dari database on-demand, EAGER memuat semuanya langsung", B: "EAGER lebih irit RAM", C: "LAZY eksklusif Hibernate", D: "EAGER mencegah problem N+1" },
    ans: "A",
    exp: "Lazy loading digunakan untuk menunda eksekusi query sampai entitas relasi benar-benar diakses di kode."
  },
  {
    level: "intermediate",
    cat: "Testing",
    q: "Apa fungsi utama Mockito di Unit Test Java?",
    opts: { A: "Uji UI web", B: "Membuat object tiruan (mock) untuk isolasi dari dependency external", C: "Load testing database", D: "Tulis test BDD" },
    ans: "B",
    exp: "Mockito mensimulasikan perilaku ketergantungan (dependencies) sehingga unit test fokus pada alur method internal yang diuji."
  },
  {
    level: "intermediate",
    cat: "Testing",
    q: "Beda @Mock dan @InjectMocks?",
    opts: { A: "@Mock buat asli", B: "@Mock buat tiruan, @InjectMocks buat objek uji (SUT) dan menyuntikkan mock padanya", C: "Sama saja", D: "@Mock Spring" },
    ans: "B",
    exp: "@InjectMocks menginisialisasi objek class asli lalu meletakkan komponen-komponen anotasi @Mock ke dalam propertinya."
  },
  {
    level: "intermediate",
    cat: "Testing",
    q: "Fungsi method verify() di Mockito?",
    opts: { A: "Cek return value", B: "Cek behavior (berapa kali dan argument apa) suatu method dipanggil pada mock", C: "Cek struktur tabel", D: "Cek exception" },
    ans: "B",
    exp: "verify(mockObj, times(1)).method() mengevaluasi apakah proses interaksi antara SUT ke mock terjadi sesuai ekspektasi."
  },
  {
    level: "intermediate",
    cat: "Testing",
    q: "Cara mendefinisikan return value mock object pada Mockito?",
    code: `// Mockito.when(mockRepo.findById(1)).[?]`,
    opts: { A: "thenReturn()", B: "returnValue()", C: "mockReturn()", D: "returnThis()" },
    ans: "A",
    exp: "Pola stubbing dasar Mockito yakni when(x).thenReturn(y) memberi tahu mock apa yang harus dikembalikan."
  },
  {
    level: "intermediate",
    cat: "Clean Code",
    q: "Open/Closed Principle (OCP) berarti?",
    opts: { A: "Open modify, closed extend", B: "Terbuka ditambahkan fitur (extensi), tertutup modifikasi kode existing (modifikasi)", C: "Koneksi buka/tutup", D: "Sistem Open Source" },
    ans: "B",
    exp: "Menambahkan spesifikasi baru dengan cara membuat class inheritance/interface baru ketimbang mengedit blok kode yang sudah jadi."
  },
  {
    level: "intermediate",
    cat: "Clean Code",
    q: "Pattern untuk membuat objek kompleks dengan atribut opsional banyak?",
    opts: { A: "Singleton", B: "Observer", C: "Builder", D: "Adapter" },
    ans: "C",
    exp: "Menghindari telescoping constructor (konstruktor yang bertumpuk sangat panjang dan ambigu parameternya)."
  },
  {
    level: "intermediate",
    cat: "Clean Code",
    q: "Pattern menyembunyikan logika pembuatan instansiasi dengan menyediakan static method / interface?",
    opts: { A: "Factory Pattern", B: "Decorator Pattern", C: "Proxy Pattern", D: "Facade Pattern" },
    ans: "A",
    exp: "Factory Method menyerahkan keputusan pembuatan spesifik implementasi sub-class ke dalam sebuah class 'Pabrik'."
  },
  {
    level: "intermediate",
    cat: "Security",
    q: "Pernyataan yang tepat tentang JSON Web Token (JWT)?",
    opts: { A: "Otomatis dienkripsi rahasia", B: "Stateful database", C: "Payload tidak rahasia (bisa di-decode Base64), tapi token tidak bisa dimanipulasi tanpa Secret Key", D: "Hanya Java" },
    ans: "C",
    exp: "Bagian tengah JWT (Payload) hanyalah data JSON biasa yang di encode Base64, sehingga data sensitif dilarang disimpan disitu."
  }
];
