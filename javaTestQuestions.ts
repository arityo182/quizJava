import type { Question } from "./types";

export const JAVA_TEST_QUESTIONS: Question[] = [
  {
    "id": "JT-001",
    "level": "beginner",
    "topic": "Java Core",
    "question": "Manakah keyword di Java yang digunakan untuk mewarisi sifat dan method dari sebuah class?",
    "options": {
      "A": "extends",
      "B": "implements",
      "C": "inherits",
      "D": "super"
    },
    "answer": "A",
    "explanation": {
      "correct": "Keyword 'extends' digunakan dalam deklarasi class untuk mewarisi class lain (single inheritance di Java).",
      "A": "Opsi A benar karena extends adalah keyword resmi pewarisan class.",
      "B": "Opsi B salah karena implements digunakan untuk mengimplementasikan interface.",
      "C": "Opsi C salah karena inherits bukan keyword dalam bahasa Java.",
      "D": "Opsi D salah karena super adalah referensi ke objek superclass, bukan deklarasi pewarisan."
    },
    "mode": "test"
  },
  {
    "id": "JT-002",
    "level": "beginner",
    "topic": "Java Core",
    "question": "Manakah tipe data di bawah ini yang BUKAN merupakan tipe data primitif di Java?",
    "options": {
      "A": "String",
      "B": "int",
      "C": "boolean",
      "D": "char"
    },
    "answer": "A",
    "explanation": {
      "correct": "String adalah class (objek acuan) di package java.lang, bukan tipe data primitif.",
      "A": "Opsi A benar karena String adalah object reference type.",
      "B": "Opsi B salah karena int adalah tipe data primitif 32-bit.",
      "C": "Opsi C salah karena boolean adalah tipe data primitif boolean.",
      "D": "Opsi D salah karena char adalah tipe data primitif 16-bit unicode character."
    },
    "mode": "test"
  },
  {
    "id": "JT-003",
    "level": "beginner",
    "topic": "Java Core",
    "question": "Apa output dari ekspresi '5 + 3 + \"Java\" + 2 + 1' di Java?",
    "options": {
      "A": "\"8Java21\"",
      "B": "\"8Java3\"",
      "C": "\"53Java21\"",
      "D": "\"8Java\""
    },
    "answer": "A",
    "explanation": {
      "correct": "Ekspresi dievaluasi dari kiri ke kanan: 5 + 3 menghasilkan 8 (penjumlahan integer). Lalu 8 + \"Java\" menghasilkan \"8Java\" (konkatenasi string). Selanjutnya \"8Java\" + 2 menghasilkan \"8Java2\", dan + 1 menghasilkan \"8Java21\".",
      "A": "Opsi A benar karena urutan evaluasi kiri ke kanan mengubah operasi menjadi string concatenation setelah string pertama.",
      "B": "Opsi B salah karena 2 dan 1 tidak dijumlahkan menjadi 3 setelah string.",
      "C": "Opsi C salah karena 5 dan 3 sebelum string dijumlahkan secara aritmatika.",
      "D": "Opsi D salah karena angka 2 dan 1 tidak diabaikan."
    },
    "mode": "test"
  },
  {
    "id": "JT-004",
    "level": "beginner",
    "topic": "Java Core",
    "question": "Method apakah yang merupakan entry point wajib agar sebuah program Java dapat dieksekusi oleh JVM?",
    "options": {
      "A": "public static void main(String[] args)",
      "B": "public void run()",
      "C": "public static void start()",
      "D": "public int main()"
    },
    "answer": "A",
    "explanation": {
      "correct": "JVM mencari signature method 'public static void main(String[] args)' sebagai titik awal eksekusi program mandiri.",
      "A": "Opsi A benar karena signature method ini adalah kontrak wajib JVM.",
      "B": "Opsi B salah karena run() adalah method Runnable.",
      "C": "Opsi C salah karena start() bukan entry point JVM.",
      "D": "Opsi D salah karena main method wajib bertipe return void."
    },
    "mode": "test"
  },
  {
    "id": "JT-005",
    "level": "beginner",
    "topic": "Java Core",
    "question": "Manakah pernyataan yang benar mengenai Array di Java?",
    "options": {
      "A": "Ukuran array bersifat tetap (fixed-size) setelah didefinisikan dan indeksnya berbasis nol (zero-based)",
      "B": "Ukuran array otomatis membesar saat data penuh",
      "C": "Array dapat menyimpan campuran tipe data yang berbeda tanpa generic",
      "D": "Indeks array dimulai dari angka 1"
    },
    "answer": "A",
    "explanation": {
      "correct": "Array di Java berukuran tetap dan dialokasikan di heap dengan indeks mulai dari 0 hingga length-1.",
      "A": "Opsi A benar karena merefleksikan karakteristik dasar array di Java.",
      "B": "Opsi B salah karena resizable array adalah karakteristik ArrayList, bukan array primitif.",
      "C": "Opsi C salah karena array bertipe homogen (tipe data seragam).",
      "D": "Opsi D salah karena indeks array di Java dimulai dari 0."
    },
    "mode": "test"
  },
  {
    "id": "JT-006",
    "level": "beginner",
    "topic": "Java Core",
    "question": "Keyword apakah yang digunakan untuk menghentikan iterasi loop saat itu juga dan keluar dari blok loop?",
    "options": {
      "A": "break",
      "B": "continue",
      "C": "return",
      "D": "exit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Keyword break langsung mengakhiri eksekusi perulangan (for, while, do-while) atau percabangan switch.",
      "A": "Opsi A benar karena break menghentikan perulangan sepenuhnya.",
      "B": "Opsi B salah karena continue hanya melompati iterasi saat ini ke iterasi berikutnya.",
      "C": "Opsi C salah karena return menghentikan seluruh method saat ini.",
      "D": "Opsi D salah karena exit bukan keyword kontrol alur Java."
    },
    "mode": "test"
  },
  {
    "id": "JT-007",
    "level": "beginner",
    "topic": "Java Core",
    "question": "Class wrapper apakah yang membungkus tipe data primitif 'char' ke dalam bentuk objek?",
    "options": {
      "A": "Character",
      "B": "Char",
      "C": "String",
      "D": "Chr"
    },
    "answer": "A",
    "explanation": {
      "correct": "java.lang.Character adalah kelas wrapper resmi untuk tipe primitif char.",
      "A": "Opsi A benar karena Character adalah wrapper class resmi.",
      "B": "Opsi B salah karena Char bukan class wrapper Java.",
      "C": "Opsi C salah karena String adalah urutan karakter, bukan pembungkus tunggal char.",
      "D": "Opsi D salah karena Chr bukan tipe di Java."
    },
    "mode": "test"
  },
  {
    "id": "JT-008",
    "level": "beginner",
    "topic": "Java Core",
    "question": "Manakah dari pernyataan berikut yang memicu NullPointerException saat runtime?",
    "options": {
      "A": "String str = null; str.length();",
      "B": "String str = \"\"; str.length();",
      "C": "int x = 0; int y = 10 / 1;",
      "D": "int[] arr = new int[5]; int a = arr[0];"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memanggil method atau mengakses field dari variabel referensi yang menunjuk ke null memicu NullPointerException.",
      "A": "Opsi A benar karena str bernilai null dan method length() dipanggil.",
      "B": "Opsi B salah karena str adalah string kosong valid berukuran 0.",
      "C": "Opsi C salah karena operasi pembagian valid.",
      "D": "Opsi D salah karena array diinisialisasi nilai default 0."
    },
    "mode": "test"
  },
  {
    "id": "JT-009",
    "level": "beginner",
    "topic": "Spring Boot",
    "question": "Anotasi Spring Web apakah yang digunakan untuk menangani HTTP GET request pada endpoint?",
    "options": {
      "A": "@GetMapping",
      "B": "@PostMapping",
      "C": "@FetchMapping",
      "D": "@ReadMapping"
    },
    "answer": "A",
    "explanation": {
      "correct": "@GetMapping adalah shortcut compose annotation untuk @RequestMapping(method = RequestMethod.GET).",
      "A": "Opsi A benar karena @GetMapping adalah anotasi resmi penanganan HTTP GET.",
      "B": "Opsi B salah karena @PostMapping untuk HTTP POST.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "mode": "test"
  },
  {
    "id": "JT-010",
    "level": "beginner",
    "topic": "Spring Boot",
    "question": "Di mana letak port server default aplikasi Spring Boot jika tidak diubah di konfigurasi?",
    "options": {
      "A": "8080",
      "B": "80",
      "C": "3000",
      "D": "8000"
    },
    "answer": "A",
    "explanation": {
      "correct": "Embedded Tomcat di Spring Boot secara default berjalan di port 8080.",
      "A": "Opsi A benar karena port 8080 adalah default port Spring Boot.",
      "B": "Opsi B salah karena 80 adalah port default HTTP standar.",
      "C": "Opsi C salah karena 3000 adalah default Node.js/React dev server.",
      "D": "Opsi D salah karena 8000 sering digunakan oleh Django."
    },
    "mode": "test"
  },
  {
    "id": "JT-011",
    "level": "beginner",
    "topic": "Spring Boot",
    "question": "Bagaimana cara mengubah port server Spring Boot menjadi 9090 di application.properties?",
    "options": {
      "A": "server.port=9090",
      "B": "port=9090",
      "C": "app.port=9090",
      "D": "spring.server.port=9090"
    },
    "answer": "A",
    "explanation": {
      "correct": "server.port adalah kunci properti resmi Spring Boot untuk mengatur listening port web server.",
      "A": "Opsi A benar karena format konfigurasi tepat.",
      "B": "Opsi B salah karena bukan key properti Spring Boot.",
      "C": "Opsi C salah karena bukan key properti standar.",
      "D": "Opsi D salah karena prefix yang benar adalah server, bukan spring.server."
    },
    "mode": "test"
  },
  {
    "id": "JT-012",
    "level": "beginner",
    "topic": "Spring Boot",
    "question": "Apa fungsi utama dari Dependency Injection (DI) dalam Spring Framework?",
    "options": {
      "A": "Menyerahkan pembuatan dan penyuntikan objek dependensi ke IoC container sehingga kelas tidak terikat erat (loose coupling)",
      "B": "Menghubungkan aplikasi langsung ke satelit internet",
      "C": "Menghapus kebutuhan menulis class Java",
      "D": "Mengenkripsi seluruh source code"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dependency Injection menerapkan pola Inversion of Control di mana framework yang menyediakan dependensi ke suatu komponen.",
      "A": "Opsi A benar karena DI memfasilitasi loose coupling dan testability.",
      "B": "Opsi B salah karena bukan teknologi satelit.",
      "C": "Opsi C salah karena kode Java tetap ditulis seperti biasa.",
      "D": "Opsi D salah karena DI bukan enkripsi source code."
    },
    "mode": "test"
  },
  {
    "id": "JT-013",
    "level": "beginner",
    "topic": "RESTful API",
    "question": "HTTP Status Code manakah yang menunjukkan bahwa permintaan berhasil diproses secara umum?",
    "options": {
      "A": "200 OK",
      "B": "400 Bad Request",
      "C": "500 Internal Server Error",
      "D": "301 Moved Permanently"
    },
    "answer": "A",
    "explanation": {
      "correct": "Status 200 OK adalah status code standar untuk respons HTTP sukses.",
      "A": "Opsi A benar karena 200 OK menandakan sukses.",
      "B": "Opsi B salah karena 400 adalah client error.",
      "C": "Opsi C salah karena 500 adalah server error.",
      "D": "Opsi D salah karena 301 adalah redirection."
    },
    "mode": "test"
  },
  {
    "id": "JT-014",
    "level": "beginner",
    "topic": "RESTful API",
    "question": "Format pertukaran data apakah yang paling lazim digunakan dalam RESTful API modern?",
    "options": {
      "A": "JSON (JavaScript Object Notation)",
      "B": "CSV murni",
      "C": "Binary EXE",
      "D": "Raw Assembly"
    },
    "answer": "A",
    "explanation": {
      "correct": "JSON adalah format teks ringan berbasis key-value yang menjadi standar industri komunikasi REST API.",
      "A": "Opsi A benar karena JSON adalah standar de-facto RESTful API.",
      "B": "Opsi B salah karena CSV kurang fleksibel untuk data bersarang (nested).",
      "C": "Opsi C salah karena binary EXE bukan format pertukaran data.",
      "D": "Opsi D salah karena assembly adalah bahasa mesin tingkat rendah."
    },
    "mode": "test"
  },
  {
    "id": "JT-015",
    "level": "beginner",
    "topic": "RESTful API",
    "question": "HTTP method manakah yang digunakan untuk mengambil data dari server tanpa mengubah kondisi data (safe operation)?",
    "options": {
      "A": "GET",
      "B": "POST",
      "C": "DELETE",
      "D": "PATCH"
    },
    "answer": "A",
    "explanation": {
      "correct": "GET adalah metode safe dan idempotent yang hanya mengambil representasi data tanpa menimbulkan side-effect pada server.",
      "A": "Opsi A benar karena GET adalah metode pembacaan data standar.",
      "B": "Opsi B salah karena POST digunakan untuk mengirim data baru.",
      "C": "Opsi C salah karena DELETE digunakan untuk menghapus resource.",
      "D": "Opsi D salah karena PATCH digunakan untuk modifikasi data."
    },
    "mode": "test"
  },
  {
    "id": "JT-016",
    "level": "beginner",
    "topic": "JPA & Hibernate",
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
    "mode": "test"
  },
  {
    "id": "JT-017",
    "level": "beginner",
    "topic": "JPA & Hibernate",
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
    "mode": "test"
  },
  {
    "id": "JT-018",
    "level": "beginner",
    "topic": "Testing",
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
    "mode": "test"
  },
  {
    "id": "JT-019",
    "level": "beginner",
    "topic": "Testing",
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
    "mode": "test"
  },
  {
    "id": "JT-020",
    "level": "beginner",
    "topic": "Clean Code & SOLID",
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
    "mode": "test"
  },
  {
    "id": "JT-021",
    "level": "beginner",
    "topic": "SQL & Database",
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
    "mode": "test"
  },
  {
    "id": "JT-022",
    "level": "beginner",
    "topic": "SQL & Database",
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
    "mode": "test"
  },
  {
    "id": "JT-023",
    "level": "beginner",
    "topic": "Spring Security & JWT",
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
    "mode": "test"
  },
  {
    "id": "JT-024",
    "level": "beginner",
    "topic": "Design Patterns",
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
    "mode": "test"
  },
  {
    "id": "JT-025",
    "level": "beginner",
    "topic": "Git & SDLC",
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
    "mode": "test"
  },
  {
    "id": "JT-026",
    "level": "beginner",
    "topic": "Git & SDLC",
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
    "mode": "test"
  },
  {
    "id": "JT-027",
    "level": "beginner",
    "topic": "Java Core",
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
    "mode": "test"
  },
  {
    "id": "JT-028",
    "level": "beginner",
    "topic": "Java Core",
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
    "mode": "test"
  },
  {
    "id": "JT-029",
    "level": "beginner",
    "topic": "Spring Boot",
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
    "mode": "test"
  },
  {
    "id": "JT-030",
    "level": "beginner",
    "topic": "RESTful API",
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
    "mode": "test"
  },
  {
    "id": "JT-031",
    "level": "intermediate",
    "topic": "Java Core",
    "question": "Apa perbedaan mendasar antara HashMap dan TreeMap di Java?",
    "options": {
      "A": "HashMap tidak menjamin urutan elemen dan memiliki kompleksitas lookup O(1), sedangkan TreeMap menyimpan elemen terurut berdasarkan key (Red-Black Tree) dengan kompleksitas O(log n)",
      "B": "TreeMap mengizinkan key bernilai null sedangkan HashMap melarang null key",
      "C": "HashMap berbasis file di hard disk sedangkan TreeMap berbasis memori RAM",
      "D": "TreeMap hanya bisa menyimpan tipe data primitif"
    },
    "answer": "A",
    "explanation": {
      "correct": "HashMap berbasis hash table dengan akses rata-rata O(1) dan mengizinkan satu null key. TreeMap berbasis pohon Red-Black seimbang yang selalu mengurutkan key secara alami atau dengan Comparator (O(log n)) dan melarang null key.",
      "A": "Opsi A benar karena membedakan struktur internal hash table vs tree dan performanya.",
      "B": "Opsi B salah karena HashMap mengizinkan null key, sedangkan TreeMap melempar NPE jika dimasukkan null key (pada natural ordering).",
      "C": "Opsi C salah karena keduanya adalah struktur data in-memory.",
      "D": "Opsi D salah karena koleksi Java hanya menyimpan tipe objek (wrapper)."
    },
    "mode": "test"
  },
  {
    "id": "JT-032",
    "level": "intermediate",
    "topic": "Java Core",
    "question": "Bagaimana cara mengonversi List<String> menjadi satu string gabungan yang dipisahkan oleh tanda koma menggunakan Stream API?",
    "options": {
      "A": "list.stream().collect(Collectors.joining(\", \"))",
      "B": "list.stream().reduce(\", \")",
      "C": "list.stream().map(String::concat)",
      "D": "Collectors.toList(list, \", \")"
    },
    "answer": "A",
    "explanation": {
      "correct": "Collectors.joining(delimiter) adalah kolektor bawaan Stream API yang efisien untuk menggabungkan string dengan delimiter tertentu.",
      "A": "Opsi A benar karena Collectors.joining adalah cara standar penggabungan string pada Stream.",
      "B": "Opsi B salah karena reduce membutuhkan binary operator.",
      "C": "Opsi C salah karena map mengubah tiap elemen secara individual.",
      "D": "Opsi D salah karena toList tidak menerima delimiter."
    },
    "mode": "test"
  },
  {
    "id": "JT-033",
    "level": "intermediate",
    "topic": "Java Core",
    "question": "Apa fungsi dari keyword 'synchronized' pada deklarasi method instance di Java?",
    "options": {
      "A": "Mengakuisisi intrinsic lock (monitor) dari instance objek saat ini ('this') sehingga hanya satu thread yang dapat mengeksekusi method tersebut pada instance yang sama dalam satu waktu",
      "B": "Mengunci seluruh memori JVM untuk semua class",
      "C": "Menjadikan method berjalan di background thread terpisah",
      "D": "Mencegah nilai kembalian method bernilai null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method instance synchronized mengunci monitor objek target (this), menjamin eksekusi mutual exclusion untuk mencegah race condition.",
      "A": "Opsi A benar karena intrinsic lock pada method instance terikat pada objek 'this'.",
      "B": "Opsi B salah karena monitor hanya mengunci instance objek yang bersangkutan, bukan seluruh JVM.",
      "C": "Opsi C salah karena eksekusi tetap berada di thread pemanggil.",
      "D": "Opsi D salah karena synchronized tidak memvalidasi nilai kembalian."
    },
    "mode": "test"
  },
  {
    "id": "JT-034",
    "level": "intermediate",
    "topic": "Java Core",
    "question": "Kapan Anda sebaiknya menggunakan StringBuilder dibandingkan StringBuffer?",
    "options": {
      "A": "Ketika manipulasi string dilakukan di lingkungan single-threaded di mana thread-safety tidak diperlukan, demi menghindari overhead sinkronisasi",
      "B": "Ketika string dimodifikasi oleh puluhan thread secara bersamaan",
      "C": "Ketika ukuran string melebihi 1 GB",
      "D": "Ketika ingin menyimpan data ke database"
    },
    "answer": "A",
    "explanation": {
      "correct": "StringBuilder tidak memiliki method synchronized sehingga memiliki throughput lebih tinggi untuk manipulasi string lokal dalam satu thread.",
      "A": "Opsi A benar karena menghindari overhead sinkronisasi yang tidak diperlukan.",
      "B": "Opsi B salah karena untuk multithreaded sharing gunakan StringBuffer atau sinkronisasi eksternal.",
      "C": "Opsi C salah karena keduanya dibatasi oleh alokasi heap JVM.",
      "D": "Opsi D salah karena bukan tipe persistensi database."
    },
    "mode": "test"
  },
  {
    "id": "JT-035",
    "level": "intermediate",
    "topic": "Java Core",
    "question": "Perhatikan kode: Integer a = 127; Integer b = 127; Integer c = 128; Integer d = 128;. Apakah hasil dari (a == b) dan (c == d)?",
    "options": {
      "A": "a == b menghasilkan true, sedangkan c == d menghasilkan false (karena Integer Cache default dari -128 hingga 127)",
      "B": "Keduanya menghasilkan true",
      "C": "Keduanya menghasilkan false",
      "D": "a == b menghasilkan false, sedangkan c == d menghasilkan true"
    },
    "answer": "A",
    "explanation": {
      "correct": "JVM menerapkan Integer Cache untuk nilai antara -128 hingga 127. Nilai di dalam rentang ini mengembalikan instance objek yang sama dari pool, sedangkan di atas 127 dibuat objek Integer baru di heap sehingga operator == menghasilkan false.",
      "A": "Opsi A benar karena Integer Cache hanya berlaku default hingga 127.",
      "B": "Opsi B salah karena 128 tidak di-cache sehingga menghasilkan referensi berbeda.",
      "C": "Opsi C salah karena 127 di-cache sehingga referensinya identik.",
      "D": "Opsi D salah karena hasilnya terbalik."
    },
    "mode": "test"
  },
  {
    "id": "JT-036",
    "level": "intermediate",
    "topic": "Spring Boot",
    "question": "Anotasi Spring Boot manakah yang digunakan untuk mengaktifkan fitur caching deklaratif seperti @Cacheable dan @CacheEvict?",
    "options": {
      "A": "@EnableCaching",
      "B": "@EnableCacheManager",
      "C": "@AutoCache",
      "D": "@UseRedisCache"
    },
    "answer": "A",
    "explanation": {
      "correct": "@EnableCaching pada kelas @Configuration memicu pemrosesan proxy Spring Cache untuk mengelola penyimpanan cache otomatis.",
      "A": "Opsi A benar karena @EnableCaching adalah anotasi resmi Spring.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "mode": "test"
  },
  {
    "id": "JT-037",
    "level": "intermediate",
    "topic": "Spring Boot",
    "question": "Apa fungsi dari anotasi @CacheEvict(value = \"users\", allEntries = true) di Spring Boot?",
    "options": {
      "A": "Menghapus seluruh entri yang tersimpan di dalam cache bernama 'users'",
      "B": "Menyimpan data user baru ke dalam cache",
      "C": "Mematikan server database",
      "D": "Mengunci cache dari pembacaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "@CacheEvict dengan allEntries = true membersihkan semua data dalam region cache tersebut, sangat berguna saat terjadi pembaruan massal.",
      "A": "Opsi A benar karena allEntries=true mengosongkan cache.",
      "B": "Opsi B salah karena penyimpanan menggunakan @CachePut atau @Cacheable.",
      "C": "Opsi C salah karena tidak mematikan database.",
      "D": "Opsi D salah karena tidak melakukan penguncian eksklusif."
    },
    "mode": "test"
  },
  {
    "id": "JT-038",
    "level": "intermediate",
    "topic": "Spring Boot",
    "question": "Apa tujuan dari anotasi @JsonIgnore pada atribut sebuah kelas DTO/Entity?",
    "options": {
      "A": "Mengabaikan atribut tersebut saat proses serialisasi ke JSON maupun deserialisasi dari JSON oleh library Jackson",
      "B": "Menghapus field dari database",
      "C": "Mengubah field menjadi huruf besar",
      "D": "Mengenkripsi nilai atribut"
    },
    "answer": "A",
    "explanation": {
      "correct": "@JsonIgnore dari com.fasterxml.jackson.annotation memberi tahu Jackson ObjectMapper untuk tidak menyertakan atribut (seperti password) dalam output JSON.",
      "A": "Opsi A benar karena mengecualikan field dari JSON payload.",
      "B": "Opsi B salah karena penghapusan database menggunakan anotasi JPA @Transient.",
      "C": "Opsi C salah karena tidak memanipulasi casing string.",
      "D": "Opsi D salah karena bukan anotasi enkripsi."
    },
    "mode": "test"
  },
  {
    "id": "JT-039",
    "level": "intermediate",
    "topic": "Spring Boot",
    "question": "Bagaimana cara memetakan field entity yang TIDAK ingin disimpan sebagai kolom di database oleh JPA?",
    "options": {
      "A": "Menggunakan anotasi @Transient",
      "B": "@NoColumn",
      "C": "@IgnoreDb",
      "D": "@SkipPersistence"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Transient (jakarta.persistence.Transient) menandai bahwa suatu atribut adalah field memori sementara yang tidak boleh dipetakan ke kolom database.",
      "A": "Opsi A benar karena @Transient adalah anotasi resmi JPA untuk field non-persisten.",
      "B": "Opsi B salah karena bukan anotasi JPA.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi JPA."
    },
    "mode": "test"
  },
  {
    "id": "JT-040",
    "level": "intermediate",
    "topic": "Spring Boot",
    "question": "Anotasi apakah yang digunakan untuk mengaktifkan pemrosesan transaksi deklaratif secara otomatis di Spring ApplicationContext?",
    "options": {
      "A": "@EnableTransactionManagement",
      "B": "@EnableTransactions",
      "C": "@EnableSql",
      "D": "@StartTransaction"
    },
    "answer": "A",
    "explanation": {
      "correct": "@EnableTransactionManagement mendaftarkan interceptor transaksi Spring AOP (di Spring Boot otomatis aktif jika starter data-jpa ada).",
      "A": "Opsi A benar karena merupakan anotasi aktivasi manajemen transaksi.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "mode": "test"
  },
  {
    "id": "JT-041",
    "level": "intermediate",
    "topic": "RESTful API",
    "question": "Apa perbedaan utama antara ResponseEntity<T> dan mengembalikan objek T secara langsung pada method @RestController?",
    "options": {
      "A": "ResponseEntity memungkinkan kontrol penuh atas HTTP status code, HTTP headers, dan body, sedangkan mengembalikan T langsung selalu menggunakan status default (200 OK)",
      "B": "ResponseEntity mengubah data menjadi XML sedangkan T menjadi JSON",
      "C": "ResponseEntity hanya bisa digunakan untuk method POST",
      "D": "T berjalan di thread terpisah sedangkan ResponseEntity tidak"
    },
    "answer": "A",
    "explanation": {
      "correct": "ResponseEntity mewakili keseluruhan HTTP response message (status, headers, body), memungkinkan manipulasi dinamis seperti ResponseEntity.status(HttpStatus.CREATED).header(...).body(data).",
      "A": "Opsi A benar karena menyediakan akses penuh ke seluruh komponen HTTP response.",
      "B": "Opsi B salah karena format data ditentukan oleh message converters dan header Accept.",
      "C": "Opsi C salah karena dapat digunakan pada semua HTTP methods.",
      "D": "Opsi D salah karena keduanya dieksekusi di thread servlet yang sama."
    },
    "mode": "test"
  },
  {
    "id": "JT-042",
    "level": "intermediate",
    "topic": "RESTful API",
    "question": "Header apakah yang digunakan klien untuk menyatakan tipe konten body data yang dikirimkan kepada server (misal: JSON)?",
    "options": {
      "A": "Content-Type: application/json",
      "B": "Accept: application/json",
      "C": "Data-Format: json",
      "D": "Payload-Type: json"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header Content-Type memberitahukan server format representasi body payload yang sedang dikirim.",
      "A": "Opsi A benar karena Content-Type mendefinisikan media type isi body.",
      "B": "Opsi B salah karena Accept memberitahukan format yang diinginkan klien dalam response.",
      "C": "Opsi C salah karena bukan header standar HTTP.",
      "D": "Opsi D salah karena bukan header standar HTTP."
    },
    "mode": "test"
  },
  {
    "id": "JT-043",
    "level": "intermediate",
    "topic": "RESTful API",
    "question": "Status Code 304 Not Modified berarti:",
    "options": {
      "A": "Resource yang diminta klien belum berubah sejak versi yang ada di cache klien, sehingga klien dapat menggunakan salinan lokalnya tanpa mengunduh body baru",
      "B": "Server menolak permintaan klien karena tidak memiliki izin",
      "C": "Koneksi database bermasalah",
      "D": "URL dipindahkan ke server lain secara permanen"
    },
    "answer": "A",
    "explanation": {
      "correct": "304 Not Modified adalah respons conditional GET (If-Modified-Since / If-None-Match) yang menghemat bandwidth karena tidak mengirimkan body data.",
      "A": "Opsi A benar karena menjelaskan mekanisme caching HTTP 304.",
      "B": "Opsi B salah karena penolakan izin menggunakan 403.",
      "C": "Opsi C salah karena error database menggunakan 500.",
      "D": "Opsi D salah karena pengalihan permanen menggunakan 301."
    },
    "mode": "test"
  },
  {
    "id": "JT-044",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "question": "Apa fungsi dari method 'saveAndFlush()' pada JpaRepository dibandingkan method 'save()' biasa?",
    "options": {
      "A": "'saveAndFlush()' menyimpan entitas dan seketika memaksa perubahan di-flush ke database buffer, sedangkan 'save()' menunda flush hingga siklus transaksi selesai",
      "B": "'saveAndFlush()' otomatis meng-commit transaksi dan menutup koneksi",
      "C": "'save()' menghapus entitas lama sebelum menyimpan",
      "D": "Keduanya persis sama tanpa perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "saveAndFlush() langsung mengeksekusi SQL INSERT/UPDATE ke database buffer, sangat penting jika kueri native atau trigger berikutnya membutuhkan data tersebut segera di DB.",
      "A": "Opsi A benar karena saveAndFlush memicu sinkronisasi SQL instan.",
      "B": "Opsi B salah karena flush tidak meng-commit transaksi.",
      "C": "Opsi C salah karena save tidak menghapus entitas.",
      "D": "Opsi D salah karena waktu eksekusi SQL flush berbeda."
    },
    "mode": "test"
  },
  {
    "id": "JT-045",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "question": "Manakah cara mendefinisikan kueri SQL Native murni di anotasi @Query Spring Data JPA?",
    "options": {
      "A": "@Query(value = \"SELECT * FROM users WHERE active = true\", nativeQuery = true)",
      "B": "@Query(sql = \"SELECT * FROM users\")",
      "C": "@NativeSql(\"SELECT * FROM users\")",
      "D": "@RawQuery(\"SELECT * FROM users\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "Atribut nativeQuery = true menginstruksikan Spring Data JPA untuk mengeksekusi string query secara langsung ke database engine tanpa melalui parsing JPQL.",
      "A": "Opsi A benar karena nativeQuery = true adalah sintaks resmi.",
      "B": "Opsi B salah karena atributnya adalah nativeQuery, bukan sql.",
      "C": "Opsi C salah karena bukan anotasi Spring Data.",
      "D": "Opsi D salah karena bukan anotasi Spring Data."
    },
    "mode": "test"
  },
  {
    "id": "JT-046",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "question": "Kapan Anda menggunakan relasi @ManyToMany dengan Join Table kustom di JPA?",
    "options": {
      "A": "Ketika sebuah entitas User dapat memiliki banyak Role, dan sebuah Role dapat dimiliki oleh banyak User",
      "B": "Ketika satu User hanya memiliki tepat satu Profile",
      "C": "Ketika satu Departemen memiliki banyak Karyawan",
      "D": "Ketika entitas tidak memiliki primary key"
    },
    "answer": "A",
    "explanation": {
      "correct": "Relasi many-to-many memodelkan hubungan banyak-ke-banyak antara dua entitas menggunakan tabel perantara (Join Table).",
      "A": "Opsi A benar karena memodelkan relasi N-ke-N klasik.",
      "B": "Opsi B salah karena itu relasi One-to-One.",
      "C": "Opsi C salah karena itu relasi One-to-Many.",
      "D": "Opsi D salah karena entitas JPA wajib memiliki primary key."
    },
    "mode": "test"
  },
  {
    "id": "JT-047",
    "level": "intermediate",
    "topic": "Testing",
    "question": "Anotasi JUnit 5 manakah yang digunakan untuk mengelompokkan pengujian berdasarkan tag (seperti 'smoke', 'regression')?",
    "options": {
      "A": "@Tag(\"smoke\")",
      "B": "@Group(\"smoke\")",
      "C": "@Category(\"smoke\")",
      "D": "@Label(\"smoke\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Tag di JUnit 5 digunakan untuk menyaring dan mengelompokkan eksekusi test pada build pipeline Maven/Gradle.",
      "A": "Opsi A benar karena @Tag adalah anotasi tagging resmi JUnit 5.",
      "B": "Opsi B salah karena bukan anotasi JUnit 5.",
      "C": "Opsi C salah karena @Category adalah anotasi lama JUnit 4.",
      "D": "Opsi D salah karena bukan anotasi JUnit 5."
    },
    "mode": "test"
  },
  {
    "id": "JT-048",
    "level": "intermediate",
    "topic": "Testing",
    "question": "Dalam pengujian Mockito, apa fungsi dari 'doThrow(new RuntimeException()).when(mock).method()'?",
    "options": {
      "A": "Memprogram mock objek agar melemparkan exception tertentu ketika method tersebut dipanggil",
      "B": "Mengabaikan semua exception yang terjadi di mock",
      "C": "Menghapus mock objek seketika",
      "D": "Mengubah method menjadi static"
    },
    "answer": "A",
    "explanation": {
      "correct": "doThrow() digunakan untuk menyimulasikan kegagalan sistem dengan memicu lemparan exception saat method mock dieksekusi (terutama pada method bertipe void).",
      "A": "Opsi A benar karena men-stub pelemparan exception pada mock.",
      "B": "Opsi B salah karena exception justru dipicu secara sengaja.",
      "C": "Opsi C salah karena tidak menghapus mock.",
      "D": "Opsi D salah karena tidak mengubah modifier method."
    },
    "mode": "test"
  },
  {
    "id": "JT-049",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "question": "Prinsip apakah yang dilanggar jika sebuah method memiliki panjang 500 baris kode dan menangani validasi input, kalkulasi pajak, penyimpanan database, dan pengiriman email sekaligus?",
    "options": {
      "A": "Single Responsibility Principle (SRP)",
      "B": "Liskov Substitution Principle",
      "C": "Open/Closed Principle",
      "D": "Interface Segregation Principle"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method/class tersebut menanggung banyak tanggung jawab yang tidak berhubungan, melanggar SRP (seharusnya dipisahkan ke validator, tax calculator, repository, dan email service).",
      "A": "Opsi A benar karena melanggar prinsip tanggung jawab tunggal.",
      "B": "Opsi B salah karena LSP berkaitan dengan kesetaraan substitusi kelas turunan.",
      "C": "Opsi C salah karena OCP berkaitan dengan keterbukaan ekstensi.",
      "D": "Opsi D salah karena ISP berkaitan dengan perampingan interface."
    },
    "mode": "test"
  },
  {
    "id": "JT-050",
    "level": "intermediate",
    "topic": "SQL & Database",
    "question": "Apa fungsi dari indeks bertipe UNIQUE pada kolom tabel database?",
    "options": {
      "A": "Mempercepat lookup data sekaligus memastikan tidak ada dua baris yang memiliki nilai kolom yang sama",
      "B": "Mengizinkan nilai duplikat tanpa batas",
      "C": "Menghapus data duplikat secara otomatis di tengah malam",
      "D": "Mengunci tabel agar tidak bisa dibaca"
    },
    "answer": "A",
    "explanation": {
      "correct": "Index UNIQUE menegakkan integritas data unik sekaligus menyediakan struktur B-Tree untuk pencarian cepat.",
      "A": "Opsi A benar karena UNIQUE constraint dan indeks bekerja bersamaan.",
      "B": "Opsi B salah karena UNIQUE justru melarang nilai duplikat.",
      "C": "Opsi C salah karena penolakan duplikasi terjadi saat operasi INSERT/UPDATE, bukan batch job malam.",
      "D": "Opsi D salah karena pembacaan tetap diizinkan."
    },
    "mode": "test"
  },
  {
    "id": "JT-051",
    "level": "intermediate",
    "topic": "SQL & Database",
    "question": "Apakah yang dimaksud dengan 'Foreign Key Constraint' di database relasional?",
    "options": {
      "A": "Aturan yang memastikan nilai di kolom child harus cocok dengan nilai primary key di tabel parent (menjaga integritas referensial)",
      "B": "Kunci untuk menghubungkan database ke server luar negeri",
      "C": "Kunci enkripsi password",
      "D": "Kunci untuk mempercepat proses reboot database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Foreign key menjaga hubungan integritas antar tabel sehingga tidak ada data anak tanpa data induk (orphan rows).",
      "A": "Opsi A benar karena mendefinisikan integritas referensial.",
      "B": "Opsi B salah karena bukan tentang geografi server.",
      "C": "Opsi C salah karena bukan kunci kriptografi.",
      "D": "Opsi D salah karena tidak berhubungan dengan reboot server."
    },
    "mode": "test"
  },
  {
    "id": "JT-052",
    "level": "intermediate",
    "topic": "Spring Security & JWT",
    "question": "Apa fungsi dari method 'passwordEncoder.matches(rawPassword, encodedPassword)'?",
    "options": {
      "A": "Memeriksa kecocokan antara plain text password input pengguna dengan hash terenkripsi di database menggunakan salt yang tertanam di dalam hash",
      "B": "Mengembalikan password asli dalam bentuk teks terbuka",
      "C": "Menghapus password dari database jika tidak cocok",
      "D": "Mengubah password menjadi MD5"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena algoritma hashing satu arah seperti BCrypt tidak dapat di-dekripsi, method matches mengekstrak salt dari encoded hash, men-hash raw password dengan salt tersebut, lalu membandingkannya.",
      "A": "Opsi A benar karena menjelaskan verifikasi hash satu arah yang aman.",
      "B": "Opsi B salah karena hash satu arah tidak bisa didekripsi ke teks asli.",
      "C": "Opsi C salah karena tidak memodifikasi data database.",
      "D": "Opsi D salah karena BCrypt tidak menggunakan MD5."
    },
    "mode": "test"
  },
  {
    "id": "JT-053",
    "level": "intermediate",
    "topic": "Design Patterns",
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
    "mode": "test"
  },
  {
    "id": "JT-054",
    "level": "intermediate",
    "topic": "Design Patterns",
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
    "mode": "test"
  },
  {
    "id": "JT-055",
    "level": "intermediate",
    "topic": "Git & SDLC",
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
    "mode": "test"
  },
  {
    "id": "JT-056",
    "level": "intermediate",
    "topic": "Java Core",
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
    "mode": "test"
  },
  {
    "id": "JT-057",
    "level": "intermediate",
    "topic": "Java Core",
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
    "mode": "test"
  },
  {
    "id": "JT-058",
    "level": "intermediate",
    "topic": "Spring Boot",
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
    "mode": "test"
  },
  {
    "id": "JT-059",
    "level": "intermediate",
    "topic": "Spring Boot",
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
    "mode": "test"
  },
  {
    "id": "JT-060",
    "level": "intermediate",
    "topic": "Spring Boot",
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
    "mode": "test"
  },
  {
    "id": "JT-061",
    "level": "intermediate",
    "topic": "RESTful API",
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
    "mode": "test"
  },
  {
    "id": "JT-062",
    "level": "intermediate",
    "topic": "RESTful API",
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
    "mode": "test"
  },
  {
    "id": "JT-063",
    "level": "intermediate",
    "topic": "RESTful API",
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
    "mode": "test"
  },
  {
    "id": "JT-064",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
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
    "mode": "test"
  },
  {
    "id": "JT-065",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
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
    "mode": "test"
  },
  {
    "id": "JT-066",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
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
    "mode": "test"
  },
  {
    "id": "JT-067",
    "level": "intermediate",
    "topic": "Testing",
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
    "mode": "test"
  },
  {
    "id": "JT-068",
    "level": "intermediate",
    "topic": "Testing",
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
    "mode": "test"
  },
  {
    "id": "JT-069",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
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
    "mode": "test"
  },
  {
    "id": "JT-070",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
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
    "mode": "test"
  },
  {
    "id": "JT-071",
    "level": "intermediate",
    "topic": "SQL & Database",
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
    "mode": "test"
  },
  {
    "id": "JT-072",
    "level": "intermediate",
    "topic": "SQL & Database",
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
    "mode": "test"
  },
  {
    "id": "JT-073",
    "level": "intermediate",
    "topic": "Spring Security & JWT",
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
    "mode": "test"
  },
  {
    "id": "JT-074",
    "level": "intermediate",
    "topic": "Design Patterns",
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
    "mode": "test"
  },
  {
    "id": "JT-075",
    "level": "intermediate",
    "topic": "Design Patterns",
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
    "mode": "test"
  },
  {
    "id": "JT-076",
    "level": "intermediate",
    "topic": "Git & SDLC",
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
    "mode": "test"
  },
  {
    "id": "JT-077",
    "level": "intermediate",
    "topic": "Git & SDLC",
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
    "mode": "test"
  },
  {
    "id": "JT-078",
    "level": "intermediate",
    "topic": "Java Core",
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
    "mode": "test"
  },
  {
    "id": "JT-079",
    "level": "intermediate",
    "topic": "Spring Boot",
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
    "mode": "test"
  },
  {
    "id": "JT-080",
    "level": "intermediate",
    "topic": "RESTful API",
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
    "mode": "test"
  },
  {
    "id": "JT-081",
    "level": "advanced",
    "topic": "JVM & Performance",
    "question": "Bagaimana Garbage Collector G1 (Garbage-First) membagi memori heap dan menentukan region mana yang harus dibersihkan terlebih dahulu?",
    "options": {
      "A": "G1 membagi heap menjadi ratusan region berukuran sama (1MB - 32MB) dan memprioritaskan pembersihan region yang memiliki jumlah sampah (garbage) terbanyak terlebih dahulu untuk mendapatkan kembali memori secara efisien dalam batas jeda pause target",
      "B": "G1 membagi memori menjadi dua bagian tetap: Gen 0 dan Gen 1",
      "C": "G1 hanya membersihkan memori heap yang dibuat oleh thread utama",
      "D": "G1 membersihkan region secara acak tanpa memperhatikan efisiensi sampah"
    },
    "answer": "A",
    "explanation": {
      "correct": "G1 memecah heap ke dalam region-region diskrit dan memelihara data historis mengenai tingkat pengembalian memori serta waktu pembersihan per region. G1 memilih set region yang paling banyak terisi objek mati (garbage-first) untuk dibersihkan dalam batas waktu jeda yang ditentukan (-XX:MaxGCPauseMillis).",
      "A": "Opsi A benar karena menjelaskan filosofi dasar penamaan dan cara kerja G1 Collector.",
      "B": "Opsi B salah karena itu arsitektur GC pada platform .NET CLR.",
      "C": "Opsi C salah karena GC membersihkan semua objek heap tanpa memandang thread pembuat.",
      "D": "Opsi D salah karena G1 menggunakan pemodelan heuristik canggih bukan acak."
    },
    "mode": "test"
  },
  {
    "id": "JT-082",
    "level": "advanced",
    "topic": "JVM & Performance",
    "question": "Apa perbedaan mendasar antara memori On-Heap dan Off-Heap (Direct Memory) di Java, dan mengapa framework berperforma tinggi seperti Netty sering menggunakan Off-Heap memory?",
    "options": {
      "A": "Off-Heap dialokasikan di luar manajemen Garbage Collector (menggunakan ByteBuffer.allocateDirect atau Unsafe), menghindari jeda pause GC dan memungkinkan operasi Zero-Copy I/O langsung dengan native OS socket",
      "B": "Off-Heap disimpan di media DVD eksternal",
      "C": "On-Heap tidak pernah dibersihkan oleh GC",
      "D": "Off-Heap hanya bisa diakses oleh single-thread"
    },
    "answer": "A",
    "explanation": {
      "correct": "Direct byte buffers dialokasikan di memori native OS. Ini menghilangkan kebutuhan JVM untuk menyalin buffer memori antara heap dan native I/O buffer sebelum operasi read/write ke network socket (Zero-Copy), serta membebaskan GC dari overhead pelacakan jutaan buffer network berumur pendek.",
      "A": "Opsi A benar karena menjelaskan keunggulan Zero-Copy I/O dan kebebasan dari beban GC.",
      "B": "Opsi B salah karena Off-Heap tetap berada di memori RAM server.",
      "C": "Opsi C salah karena On-Heap adalah target utama pengelolaan GC.",
      "D": "Opsi D salah karena Direct Memory dapat diakses secara concurrent antar thread."
    },
    "mode": "test"
  },
  {
    "id": "JT-083",
    "level": "advanced",
    "topic": "Concurrency & Multi-threading",
    "question": "Bagaimanakah relasi 'Happens-Before' dalam Java Memory Model (JMM) menjamin konsistensi pembacaan data antar thread?",
    "options": {
      "A": "Happens-Before menetapkan bahwa tindakan A yang memiliki relasi happens-before terhadap tindakan B menjamin hasil penulisan oleh A dapat dilihat secara pasti (visible) oleh tindakan B tanpa adanya instruksi reordering yang merusak urutan logika tersebut",
      "B": "Menjamin semua method selesai dalam waktu 1 milidetik",
      "C": "Mengharuskan semua thread dieksekusi sebelum jam 12 siang",
      "D": "Menjadikan semua variabel primitif otomatis immutable"
    },
    "answer": "A",
    "explanation": {
      "correct": "JMM mendefinisikan aturan Happens-Before (seperti program order rule, monitor lock rule, volatile variable rule, thread start rule). Jika operasi tulis happens-before operasi baca, pembaca dijamin melihat nilai terbaru tanpa instruksi reordering CPU/compiler.",
      "A": "Opsi A benar karena merangkum definisi formal JMM Happens-Before guarantee.",
      "B": "Opsi B salah karena bukan jaminan durasi waktu fisik.",
      "C": "Opsi C salah karena bukan tentang waktu kronologis.",
      "D": "Opsi D salah karena immutability tidak ditentukan oleh happens-before."
    },
    "mode": "test"
  },
  {
    "id": "JT-084",
    "level": "advanced",
    "topic": "Concurrency & Multi-threading",
    "question": "Dalam sinkronisasi tingkat lanjut, masalah apakah yang dipecahkan oleh class java.util.concurrent.Phaser dibandingkan CountDownLatch dan CyclicBarrier?",
    "options": {
      "A": "Phaser mendukung jumlah pihak peserta (parties) yang dinamis yang dapat mendaftar (register) atau mengundurkan diri (deregister) kapan saja saat runtime, serta mendukung sinkronisasi multi-fase bertahap",
      "B": "Phaser hanya bisa digunakan untuk tepat satu thread",
      "C": "Phaser tidak bisa direset kembali setelah mencapai nol",
      "D": "Phaser mengunci seluruh jaringan komputer"
    },
    "answer": "A",
    "explanation": {
      "correct": "CountDownLatch memiliki hitungan statis satu kali pakai; CyclicBarrier memiliki jumlah pihak statis yang bisa diulang. Phaser menggabungkan fleksibilitas siklus berulang dengan kapabilitas pendaftaran dinamis thread peserta saat eksekusi berlangsung.",
      "A": "Opsi A benar karena Phaser adalah sinkronizer multi-phase dengan dynamic party registration.",
      "B": "Opsi B salah karena Phaser dirancang untuk koordinasi banyak thread.",
      "C": "Opsi C salah karena Phaser dapat terus berjalan melintasi fase berikutnya (advance to next phase).",
      "D": "Opsi D salah karena Phaser bekerja lokal di memori JVM."
    },
    "mode": "test"
  },
  {
    "id": "JT-085",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "question": "Dalam arsitektur CQRS (Command Query Responsibility Segregation), mengapa model pembacaan (Query) dan model penulisan (Command) dipisahkan ke dalam model dan database yang berbeda?",
    "options": {
      "A": "Model penulisan difokuskan pada integritas bisnis dan validasi aturan domain, sedangkan model pembacaan dioptimasi secara independen dalam bentuk denormalized view untuk menyajikan data dengan latensi sangat rendah tanpa JOIN SQL yang mahal",
      "B": "Untuk menggandakan biaya server",
      "C": "Karena database relasional tidak mampu membaca data",
      "D": "Agar kode aplikasi menjadi dua kali lebih panjang"
    },
    "answer": "A",
    "explanation": {
      "correct": "Beban kerja baca dan tulis memiliki karakteristik kebutuhan performa yang sangat bertolak belakang. CQRS membebaskan query dari kompleksitas skema relasional 3NF domain, menggunakan read-model materialized view (misal di Elasticsearch atau read-replica) untuk pencarian instan.",
      "A": "Opsi A benar karena menjelaskan optimasi independen model baca dan tulis.",
      "B": "Opsi B salah karena tujuannya efisiensi arsitektur, bukan biaya.",
      "C": "Opsi C salah karena database relasional mendukung pembacaan tetapi sering lambat pada join skala besar.",
      "D": "Opsi D salah karena pemisahan model bertujuan memperjelas arsitektur domain kompleks."
    },
    "mode": "test"
  },
  {
    "id": "JT-086",
    "level": "advanced",
    "topic": "Architecture & Microservices",
    "question": "Bagaimana pola 'Two-Phase Commit' (2PC) bekerja dalam transaksi terdistribusi, dan apa kelemahan terbesarnya dalam sistem modern?",
    "options": {
      "A": "Bekerja melalui fase Prepare (koordinator meminta semua partisipan bersiap) dan fase Commit (koordinator memerintahkan commit); kelemahan utamanya adalah sifat blocking yang membuat partisipan menahan lock dan rentan Single Point of Failure pada koordinator",
      "B": "Bekerja dengan mematikan koneksi internet",
      "C": "2PC adalah sistem non-blocking yang paling cepat di dunia",
      "D": "2PC tidak memerlukan koordinator"
    },
    "answer": "A",
    "explanation": {
      "correct": "2PC adalah protokol konsistensi ketat (ACID terdistribusi). Kelemahan fatalnya adalah latency tinggi, penurunan availability (CAP theorem), dan jika koordinator mati di tengah jalan setelah fase prepare, partisipan akan terkunci tanpa batas waktu (lock holding).",
      "A": "Opsi A benar karena menjelaskan mekanisme prepare/commit dan kerapuhan blocking coordinator.",
      "B": "Opsi B salah karena bukan pemutus koneksi internet.",
      "C": "Opsi C salah karena 2PC justru protokol sinkron blocking yang lambat.",
      "D": "Opsi D salah karena 2PC mutlak memerlukan entitas transaction coordinator."
    },
    "mode": "test"
  },
  {
    "id": "JT-087",
    "level": "advanced",
    "topic": "Spring Boot & Spring Framework",
    "question": "Bagaimana cara memecahkan masalah N+1 pada GraphQL query di Spring for GraphQL?",
    "options": {
      "A": "Menggunakan 'BatchLoader' / 'DataLoader' untuk mengumpulkan (batch) permintaan ID anak yang tersebar di beberapa query dan menyelesaikannya dalam satu panggilan query massal tunggal",
      "B": "Menonaktifkan schema GraphQL",
      "C": "Membuat controller REST biasa untuk setiap field",
      "D": "Memaksa klien hanya boleh mengambil satu field per query"
    },
    "answer": "A",
    "explanation": {
      "correct": "DataLoader adalah pustaka caching dan batching yang menampung ID-ID individual yang diminta oleh field resolvers dan mendelegasikannya ke satu fungsi pemuatan batch (misal findByIdIn(ids)), mengubah N query individual menjadi 1 batch query.",
      "A": "Opsi A benar karena DataLoader adalah solusi baku GraphQL N+1 problem.",
      "B": "Opsi B salah karena schema tetap dibutuhkan.",
      "C": "Opsi C salah karena GraphQL dirancang untuk fleksibilitas query tunggal.",
      "D": "Opsi D salah karena membatasi klien meniadakan manfaat utama GraphQL."
    },
    "mode": "test"
  },
  {
    "id": "JT-088",
    "level": "advanced",
    "topic": "Spring Boot & Spring Framework",
    "question": "Apa peran dari ClassLoader hierarki di Java dan apa yang terjadi jika class yang sama di-load oleh dua ClassLoader yang berbeda?",
    "options": {
      "A": "JVM menganggap keduanya sebagai dua kelas yang sama sekali berbeda dan tidak kompatibel (ClassCastException akan terjadi jika di-cast), karena identitas class di runtime ditentukan oleh fully-qualified name DAN instance ClassLoader-nya",
      "B": "JVM otomatis menggabungkan kedua class menjadi satu",
      "C": "JVM akan crash dengan Kernel Panic",
      "D": "Class kedua akan otomatis dihapus"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Java, keunikan tipe kelas di memori runtime adalah tuple: <ClassName, ClassLoaderInstance>. Dua instance ClassLoader berbeda yang memuat file .class yang identik menghasilkan Class objek yang berbeda di Heap dan tidak dapat saling di-assign.",
      "A": "Opsi A benar karena identitas runtime class terikat pada ClassLoader pembuatnya.",
      "B": "Opsi B salah karena JVM tidak menggabungkan class yang di-load ClassLoader terpisah.",
      "C": "Opsi C salah karena JVM melempar ClassCastException secara aman di tingkat software.",
      "D": "Opsi D salah karena kedua class tetap hidup di memori masing-masing loader."
    },
    "mode": "test"
  },
  {
    "id": "JT-089",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
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
    "mode": "test"
  },
  {
    "id": "JT-090",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
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
    "mode": "test"
  },
  {
    "id": "JT-091",
    "level": "advanced",
    "topic": "JVM & Performance",
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
    "mode": "test"
  },
  {
    "id": "JT-092",
    "level": "advanced",
    "topic": "Clean Code & Refactoring",
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
    "mode": "test"
  },
  {
    "id": "JT-093",
    "level": "advanced",
    "topic": "Architecture & Microservices",
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
    "mode": "test"
  },
  {
    "id": "JT-094",
    "level": "advanced",
    "topic": "Spring Security & JWT",
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
    "mode": "test"
  },
  {
    "id": "JT-095",
    "level": "advanced",
    "topic": "Database & JPA Optimization",
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
    "mode": "test"
  },
  {
    "id": "JT-096",
    "level": "advanced",
    "topic": "Concurrency & Multi-threading",
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
    "mode": "test"
  },
  {
    "id": "JT-097",
    "level": "advanced",
    "topic": "JVM & Performance",
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
    "mode": "test"
  },
  {
    "id": "JT-098",
    "level": "advanced",
    "topic": "Architecture & Microservices",
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
    "mode": "test"
  },
  {
    "id": "JT-099",
    "level": "advanced",
    "topic": "Clean Code & Refactoring",
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
    "mode": "test"
  },
  {
    "id": "JT-100",
    "level": "advanced",
    "topic": "Architecture & Microservices",
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
    "mode": "test"
  }
];
