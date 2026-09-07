import { Question } from './types';

export const TECH_BEGINNER: Question[] = [
  {
    level: "beginner",
    cat: "Java Core",
    q: "Tipe data primitif manakah di Java yang berukuran 64-bit?",
    opts: {
      A: "int",
      B: "float",
      C: "long",
      D: "short"
    },
    ans: "C",
    exp: "Tipe data primitif 'long' dan 'double' di Java memiliki ukuran 64-bit."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Keyword apa yang digunakan untuk mencegah suatu method di-override?",
    opts: {
      A: "static",
      B: "final",
      C: "const",
      D: "private"
    },
    ans: "B",
    exp: "Keyword 'final' pada method mencegah subclass untuk melakukan override pada method tersebut."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Koleksi manakah yang TIDAK memperbolehkan elemen duplikat dan tidak menjaga urutan penyisipan?",
    opts: {
      A: "ArrayList",
      B: "LinkedList",
      C: "HashSet",
      D: "TreeSet"
    },
    ans: "C",
    exp: "HashSet mengimplementasikan interface Set, tidak mengizinkan duplikat, dan tidak menjamin urutan elemen."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Blok kode mana yang selalu dieksekusi terlepas dari apakah sebuah exception terjadi atau tidak?",
    opts: {
      A: "catch",
      B: "finally",
      C: "try",
      D: "throw"
    },
    ans: "B",
    exp: "Blok 'finally' selalu dieksekusi setelah blok try/catch, digunakan untuk proses pembersihan resource."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Apa sebutan untuk konsep di mana beberapa method memiliki nama yang sama tetapi parameter yang berbeda?",
    opts: {
      A: "Method overriding",
      B: "Method overloading",
      C: "Encapsulation",
      D: "Polymorphism"
    },
    ans: "B",
    exp: "Method overloading memungkinkan penulisan method dengan nama sama asalkan parameter (tipe atau jumlah) berbeda."
  },
  {
    level: "beginner",
    cat: "Spring Boot",
    q: "Anotasi manakah yang menandakan sebuah class sebagai REST Controller di Spring Boot?",
    opts: {
      A: "@Controller",
      B: "@Service",
      C: "@RestController",
      D: "@Component"
    },
    ans: "C",
    exp: "@RestController adalah gabungan dari @Controller dan @ResponseBody."
  },
  {
    level: "beginner",
    cat: "Spring Boot",
    q: "Apa nama file konfigurasi default pada aplikasi Spring Boot?",
    opts: {
      A: "config.xml",
      B: "spring-config.json",
      C: "application.properties (atau .yml)",
      D: "bootstrap.ini"
    },
    ans: "C",
    exp: "Spring Boot secara default mencari file application.properties atau application.yml untuk konfigurasi."
  },
  {
    level: "beginner",
    cat: "Spring Boot",
    q: "Anotasi manakah yang digunakan untuk menyuntikkan (inject) nilai dari application.properties ke dalam variabel?",
    opts: {
      A: "@Property",
      B: "@Value",
      C: "@Inject",
      D: "@Config"
    },
    ans: "B",
    exp: "Anotasi @Value(\"${property.name}\") digunakan untuk membaca nilai dari file konfigurasi."
  },
  {
    level: "beginner",
    cat: "REST API",
    q: "Manakah HTTP status code yang berarti resource tidak ditemukan?",
    opts: {
      A: "200",
      B: "400",
      C: "404",
      D: "500"
    },
    ans: "C",
    exp: "404 Not Found dikembalikan saat server tidak menemukan resource yang diminta."
  },
  {
    level: "beginner",
    cat: "REST API",
    q: "Apa arti dari HTTP Status Code 403?",
    opts: {
      A: "Bad Request",
      B: "Forbidden",
      C: "Unauthorized",
      D: "Method Not Allowed"
    },
    ans: "B",
    exp: "403 Forbidden berarti client tidak memiliki izin/hak akses untuk resource tersebut."
  },
  {
    level: "beginner",
    cat: "REST API",
    q: "Manakah HTTP Status Code yang paling tepat saat sebuah resource baru berhasil dibuat?",
    opts: {
      A: "200 OK",
      B: "201 Created",
      C: "204 No Content",
      D: "202 Accepted"
    },
    ans: "B",
    exp: "201 Created mengindikasikan bahwa request berhasil dan sebuah resource baru telah dibuat."
  },
  {
    level: "beginner",
    cat: "JPA/Database",
    q: "Anotasi JPA manakah yang digunakan untuk menandai primary key pada sebuah Entity?",
    opts: {
      A: "@PrimaryKey",
      B: "@Key",
      C: "@Id",
      D: "@Column(id=true)"
    },
    ans: "C",
    exp: "@Id digunakan untuk mendeklarasikan field sebagai primary key di entitas JPA."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Perintah SQL apa yang digunakan untuk mengembalikan nilai unik tanpa duplikasi?",
    opts: {
      A: "UNIQUE",
      B: "DISTINCT",
      C: "GROUP BY",
      D: "FILTER"
    },
    ans: "B",
    exp: "Keyword DISTINCT digunakan setelah SELECT untuk mengembalikan nilai-nilai yang berbeda (unik)."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Perintah DDL manakah yang digunakan untuk menghapus tabel beserta strukturnya?",
    opts: {
      A: "DELETE TABLE",
      B: "DROP TABLE",
      C: "REMOVE TABLE",
      D: "TRUNCATE TABLE"
    },
    ans: "B",
    exp: "DROP TABLE menghapus seluruh data beserta definisi (struktur) dari tabel."
  },
  {
    level: "beginner",
    cat: "Testing",
    q: "Anotasi manakah di JUnit 5 yang menandakan sebuah method sebagai test method?",
    opts: {
      A: "@Test",
      B: "@TestCase",
      C: "@TestMethod",
      D: "@Check"
    },
    ans: "A",
    exp: "@Test menandakan bahwa suatu method adalah method pengujian."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Apa nilai default dari variabel instans bertipe boolean di Java?",
    opts: {
      A: "false",
      B: "true",
      C: "null",
      D: "0"
    },
    ans: "A",
    exp: "Nilai default untuk tipe boolean pada instance variable adalah false."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Modifier akses manakah yang membuat variabel atau method hanya bisa diakses dalam class itu sendiri?",
    opts: {
      A: "public",
      B: "protected",
      C: "default",
      D: "private"
    },
    ans: "D",
    exp: "Keyword private membatasi visibilitas hanya di dalam class yang mendeklarasikannya."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Bagaimana penulisan deklarasi method utama (entry point) dalam sebuah program Java?",
    opts: {
      A: "public void main(String[] args)",
      B: "public static void main(String[] args)",
      C: "static void main(String[] args)",
      D: "public static int main(String[] args)"
    },
    ans: "B",
    exp: "Method utama di Java harus dideklarasikan sebagai public static void main(String[] args)."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Simbol apakah yang digunakan untuk operasi logika AND (logika dan) di Java?",
    opts: {
      A: "&&",
      B: "||",
      C: "!",
      D: "&|"
    },
    ans: "A",
    exp: "Simbol && merupakan operator logika AND (short-circuit AND) di Java."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Keyword apa yang digunakan untuk membuat (meng-instansiasi) sebuah objek baru dari suatu class?",
    opts: {
      A: "create",
      B: "make",
      C: "new",
      D: "init"
    },
    ans: "C",
    exp: "Keyword 'new' digunakan untuk mengalokasikan memori bagi sebuah objek baru."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Struktur kontrol (loop) manakah yang paling cocok jika kita belum tahu pasti berapa kali iterasi akan dijalankan?",
    opts: {
      A: "for",
      B: "while",
      C: "switch",
      D: "if"
    },
    ans: "B",
    exp: "While loop ideal digunakan ketika kondisi terminasi bergantung pada suatu kondisi yang belum pasti jumlah iterasinya."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Method apa pada class String yang digunakan untuk mendapatkan panjang dari string tersebut?",
    opts: {
      A: "size()",
      B: "count()",
      C: "length()",
      D: "getSize()"
    },
    ans: "C",
    exp: "Method length() mengembalikan jumlah karakter dalam suatu String."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Berapakah nilai indeks awal dari sebuah array di Java?",
    opts: {
      A: "0",
      B: "1",
      C: "-1",
      D: "Tergantung ukuran array"
    },
    ans: "A",
    exp: "Array di Java menggunakan zero-based indexing, artinya indeks selalu dimulai dari 0."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Keyword apakah yang digunakan dari subclass untuk memanggil konstruktor dari class induknya (superclass)?",
    opts: {
      A: "parent",
      B: "this",
      C: "base",
      D: "super"
    },
    ans: "D",
    exp: "Keyword 'super' digunakan untuk mereferensikan superclass, termasuk memanggil konstruktornya."
  },
  {
    level: "beginner",
    cat: "Java Core",
    q: "Keyword apa yang digunakan oleh suatu class untuk mewarisi class lain di Java?",
    opts: {
      A: "implements",
      B: "inherits",
      C: "extends",
      D: "derives"
    },
    ans: "C",
    exp: "Keyword 'extends' digunakan untuk pewarisan class (inheritance) di Java."
  },
  {
    level: "beginner",
    cat: "Spring Boot",
    q: "Anotasi manakah yang menandakan kelas utama/entry point dari aplikasi Spring Boot?",
    opts: {
      A: "@SpringBootApplication",
      B: "@EnableAutoConfiguration",
      C: "@ComponentScan",
      D: "@SpringApp"
    },
    ans: "A",
    exp: "@SpringBootApplication adalah anotasi komprehensif yang mencakup @Configuration, @EnableAutoConfiguration, dan @ComponentScan."
  },
  {
    level: "beginner",
    cat: "Spring Boot",
    q: "Apa nama embedded web server bawaan default dari aplikasi web Spring Boot?",
    opts: {
      A: "Jetty",
      B: "Tomcat",
      C: "Undertow",
      D: "Netty"
    },
    ans: "B",
    exp: "Secara default, Spring Boot Starter Web menyertakan Apache Tomcat sebagai embedded server."
  },
  {
    level: "beginner",
    cat: "Spring Boot",
    q: "Dependency Spring Boot manakah yang memungkinkan aplikasi restart otomatis ketika ada perubahan kode?",
    opts: {
      A: "Spring Web",
      B: "Spring Boot Starter Test",
      C: "Spring Boot DevTools",
      D: "Spring Actuator"
    },
    ans: "C",
    exp: "DevTools menyediakan fitur seperti automatic restart yang mempercepat proses pengembangan."
  },
  {
    level: "beginner",
    cat: "Spring Boot",
    q: "Pada proyek Spring Boot berbasis Maven, tag apa di pom.xml yang mendefinisikan sebuah library yang dibutuhkan?",
    opts: {
      A: "<dependency>",
      B: "<plugin>",
      C: "<library>",
      D: "<import>"
    },
    ans: "A",
    exp: "Setiap pustaka/library yang dibutuhkan dideklarasikan di dalam tag <dependency>."
  },
  {
    level: "beginner",
    cat: "Spring Boot",
    q: "Di manakah direktori standar untuk meletakkan file konfigurasi dan resource statis di proyek Spring Boot?",
    opts: {
      A: "src/main/java",
      B: "src/main/resources",
      C: "src/test/resources",
      D: "static/"
    },
    ans: "B",
    exp: "Direktori src/main/resources adalah tempat default untuk file seperti application.properties dan folder static/templates."
  },
  {
    level: "beginner",
    cat: "REST API",
    q: "HTTP Method apa yang standar digunakan untuk mengambil/membaca data dari server?",
    opts: {
      A: "GET",
      B: "POST",
      C: "PUT",
      D: "PATCH"
    },
    ans: "A",
    exp: "GET adalah HTTP Method yang didesain untuk mengambil data tanpa mengubah state di server."
  },
  {
    level: "beginner",
    cat: "REST API",
    q: "HTTP Method apa yang standar digunakan untuk menghapus suatu resource di server?",
    opts: {
      A: "GET",
      B: "POST",
      C: "PUT",
      D: "DELETE"
    },
    ans: "D",
    exp: "Metode DELETE digunakan untuk menghapus resource dari sistem."
  },
  {
    level: "beginner",
    cat: "REST API",
    q: "Format data apakah yang paling lazim digunakan untuk bertukar pesan (payload) pada REST API modern?",
    opts: {
      A: "XML",
      B: "YAML",
      C: "JSON",
      D: "HTML"
    },
    ans: "C",
    exp: "JSON (JavaScript Object Notation) menjadi standar de facto format payload REST API karena ringan dan mudah diparsing."
  },
  {
    level: "beginner",
    cat: "REST API",
    q: "HTTP Method apakah yang digunakan untuk menimpa/memperbarui resource secara keseluruhan (replace)?",
    opts: {
      A: "POST",
      B: "PUT",
      C: "PATCH",
      D: "GET"
    },
    ans: "B",
    exp: "PUT digunakan untuk mengganti atau menimpa suatu entitas resource secara keseluruhan, sedangkan PATCH untuk parsial."
  },
  {
    level: "beginner",
    cat: "REST API",
    q: "HTTP Header apa yang menginformasikan jenis format data yang dikirimkan pada Body request?",
    opts: {
      A: "Accept",
      B: "Authorization",
      C: "Content-Type",
      D: "User-Agent"
    },
    ans: "C",
    exp: "Header Content-Type memberi tahu server (atau client) apa jenis tipe media (misal application/json) yang ada pada payload."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Perintah SQL utama untuk menampilkan atau mengambil data dari tabel adalah?",
    opts: {
      A: "SELECT",
      B: "SHOW",
      C: "FETCH",
      D: "GET"
    },
    ans: "A",
    exp: "SELECT merupakan perintah DML dasar di SQL untuk membaca atau menampilkan data."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Klausa apa yang digunakan dalam SQL untuk menyaring baris berdasarkan suatu kondisi (filter)?",
    opts: {
      A: "ORDER BY",
      B: "WHERE",
      C: "HAVING",
      D: "LIMIT"
    },
    ans: "B",
    exp: "WHERE digunakan setelah FROM untuk menetapkan syarat kondisi filter terhadap baris data."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Bagaimana perintah dasar SQL untuk memasukkan baris data baru ke dalam sebuah tabel?",
    opts: {
      A: "ADD DATA",
      B: "CREATE ROW",
      C: "INSERT INTO",
      D: "UPDATE"
    },
    ans: "C",
    exp: "INSERT INTO digunakan untuk menambah/menyisipkan baris (record) baru ke dalam tabel SQL."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Perintah apa yang digunakan untuk mengubah/memperbarui data yang sudah ada di tabel?",
    opts: {
      A: "UPDATE",
      B: "ALTER",
      C: "MODIFY",
      D: "CHANGE"
    },
    ans: "A",
    exp: "Perintah UPDATE digunakan bersama klausa SET dan WHERE untuk memodifikasi baris yang ada."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Klausa apakah yang digunakan untuk mengurutkan hasil query berdasarkan satu atau beberapa kolom?",
    opts: {
      A: "SORT BY",
      B: "GROUP BY",
      C: "ALIGN BY",
      D: "ORDER BY"
    },
    ans: "D",
    exp: "ORDER BY digunakan untuk mengurutkan hasil (result set) secara ascending (ASC) maupun descending (DESC)."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Apakah fungsi utama dari Primary Key dalam sebuah tabel relasional?",
    opts: {
      A: "Mempercepat pengurutan data",
      B: "Mengidentifikasi secara unik setiap baris dalam tabel",
      C: "Menghubungkan dua database yang berbeda",
      D: "Menyimpan nilai null dengan aman"
    },
    ans: "B",
    exp: "Primary Key memastikan setiap record memiliki identifier unik dan tidak bernilai NULL."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Apa yang dimaksud dengan Foreign Key?",
    opts: {
      A: "Kunci sekunder yang selalu terenkripsi",
      B: "Kunci dari database luar/eksternal",
      C: "Kolom yang merujuk pada Primary Key di tabel lain",
      D: "Kolom yang nilainya diacak secara dinamis"
    },
    ans: "C",
    exp: "Foreign Key menjaga integritas referensial (referential integrity) dengan menautkan data ke Primary Key di tabel referensinya."
  },
  {
    level: "beginner",
    cat: "Database/SQL",
    q: "Kata kunci apa di SQL yang merepresentasikan ketiadaan data atau nilai yang tidak diketahui (kosong)?",
    opts: {
      A: "NULL",
      B: "VOID",
      C: "BLANK",
      D: "NIL"
    },
    ans: "A",
    exp: "NULL berarti kolom tidak memiliki nilai (absence of value), tidak sama dengan angka nol atau string kosong."
  },
  {
    level: "beginner",
    cat: "Testing",
    q: "Dalam JUnit 5, method assert apa yang digunakan untuk memverifikasi bahwa suatu kondisi adalah benar (true)?",
    opts: {
      A: "assert()",
      B: "assertTrue()",
      C: "assertIsOn()",
      D: "assertRight()"
    },
    ans: "B",
    exp: "assertTrue() mengecek apakah kondisi argumen bernilai boolean true."
  },
  {
    level: "beginner",
    cat: "Testing",
    q: "Method assertion manakah yang digunakan untuk membandingkan kesamaan dua nilai yang diharapkan dan aktual?",
    opts: {
      A: "assertEquals()",
      B: "assertMatch()",
      C: "assertSame()",
      D: "assertValue()"
    },
    ans: "A",
    exp: "assertEquals(expected, actual) adalah asersi yang paling sering dipakai untuk mengecek kesamaan nilai."
  },
  {
    level: "beginner",
    cat: "Testing",
    q: "Anotasi JUnit 5 manakah yang dieksekusi sebelum SETIAP test method di dalam suatu class?",
    opts: {
      A: "@BeforeAll",
      B: "@BeforeClass",
      C: "@BeforeEach",
      D: "@Setup"
    },
    ans: "C",
    exp: "@BeforeEach akan dijalankan setiap kali sebelum satu method test dieksekusi, berguna untuk setup per-test."
  },
  {
    level: "beginner",
    cat: "Testing",
    q: "Anotasi JUnit 5 manakah yang dieksekusi setelah SETIAP test method selesai?",
    opts: {
      A: "@AfterAll",
      B: "@Teardown",
      C: "@AfterClass",
      D: "@AfterEach"
    },
    ans: "D",
    exp: "@AfterEach dipanggil sesudah tiap-tiap test method, umumnya untuk proses bersih-bersih/teardown."
  },
  {
    level: "beginner",
    cat: "Git",
    q: "Perintah manakah yang digunakan untuk menginisialisasi repository Git baru di folder lokal?",
    opts: {
      A: "git init",
      B: "git start",
      C: "git create",
      D: "git new"
    },
    ans: "A",
    exp: "Perintah 'git init' membuat repositori Git kosong atau menginisialisasi ulang repositori di dalam direktori proyek."
  },
  {
    level: "beginner",
    cat: "Git",
    q: "Perintah apakah yang digunakan untuk menyimpan snapshot perubahan (yang sudah di-add) ke dalam local repository?",
    opts: {
      A: "git save",
      B: "git push",
      C: "git commit",
      D: "git store"
    },
    ans: "C",
    exp: "'git commit -m' merekam perubahan dari area staging menjadi sebuah titik snapshot baru di repository lokal."
  },
  {
    level: "beginner",
    cat: "Git",
    q: "Perintah apa yang dipakai untuk mengambil (fetch) sekaligus menggabungkan (merge) perubahan dari remote repository ke cabang lokal saat ini?",
    opts: {
      A: "git fetch",
      B: "git pull",
      C: "git sync",
      D: "git get"
    },
    ans: "B",
    exp: "'git pull' adalah gabungan dari 'git fetch' (mengambil perubahan) dan 'git merge' (menggabungkan ke branch aktif saat ini)."
  }
];
