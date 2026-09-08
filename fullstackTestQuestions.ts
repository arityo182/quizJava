import { Question } from './types';

export const FULLSTACK_TEST_QUESTIONS: Question[] = [
  {
    "id": "FT-001",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Manakah yang BUKAN merupakan tipe data primitif bawaan di JavaScript/TypeScript?",
    "options": {
      "A": "string",
      "B": "number",
      "C": "array",
      "D": "boolean"
    },
    "answer": "C",
    "explanation": {
      "correct": "Tipe primitif di TypeScript adalah string, number, boolean, null, undefined, symbol, dan bigint. Array adalah tipe referensi (objek).",
      "A": "Opsi A salah karena string adalah tipe data primitif.",
      "B": "Opsi B salah karena number adalah tipe data primitif.",
      "C": "Opsi C benar karena array adalah tipe data non-primitif (objek referensi).",
      "D": "Opsi D salah karena boolean adalah tipe data primitif."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-002",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa tipe data hasil kompilasi dari ekspresi `typeof []` di TypeScript/JavaScript?\n\n```typescript\nconst arr = [1, 2, 3];\nconsole.log(typeof arr);\n```",
    "options": {
      "A": "\"object\"",
      "B": "\"array\"",
      "C": "\"list\"",
      "D": "\"undefined\""
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator typeof pada array di JavaScript selalu mengembalikan string 'object' karena array merupakan turunan dari prototipe Object.",
      "A": "Opsi A benar karena array dievaluasi sebagai tipe objek oleh operator typeof.",
      "B": "Opsi B salah karena tidak ada tipe kembalian 'array' pada operator typeof bawaan.",
      "C": "Opsi C salah karena 'list' bukan tipe pengembalian typeof.",
      "D": "Opsi D salah karena array yang diinisialisasi bukan undefined."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "const arr = [1, 2, 3];\nconsole.log(typeof arr);"
  },
  {
    "id": "FT-003",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe parameter fungsi berikut agar menerima angka atau string (Union Type):\n\n```typescript\nfunction printId(___) {\n  console.log(id);\n}\n```",
    "options": {
      "A": "id: string | number",
      "B": "id: string & number",
      "C": "id: string or number",
      "D": "id: (string, number)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Union Type menggunakan operator pipa (`|`) untuk mengizinkan suatu variabel menerima salah satu dari beberapa tipe data yang didefinisikan.",
      "A": "Opsi A benar karena `string | number` adalah sintaks resmi Union Type di TypeScript.",
      "B": "Opsi B salah karena `&` adalah Intersection Type.",
      "C": "Opsi C salah karena 'or' bukan operator tipe di TypeScript.",
      "D": "Opsi D salah karena tanda kurung koma bukan sintaks union."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "function printId(___) {\n  console.log(id);\n}"
  },
  {
    "id": "FT-004",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Kode berikut menghasilkan compile error di TypeScript: 'Type number is not assignable to type string'. Bagian mana yang harus diperbaiki?\n\n```typescript\nlet code: string = \"200\";\ncode = 404; // Error\n```",
    "options": {
      "A": "Ubah tipe variabel `code` menjadi `string | number` atau konversi angka menjadi string",
      "B": "Ganti keyword const menjadi var",
      "C": "Hapus tanda titik koma",
      "D": "Ubah nama variabel menjadi number"
    },
    "answer": "A",
    "explanation": {
      "correct": "Variabel `code` diberi tipe `string`, sehingga memasukkan nilai angka `404` ditolak oleh static type checker. Solusinya adalah mengubah tipe menjadi union atau mengubah nilai menjadi `'404'`.",
      "A": "Opsi A benar karena mengatasi ketidakcocokan tipe antara string dan number.",
      "B": "Opsi B salah karena jenis deklarasi variabel tidak mengubah type checking.",
      "C": "Opsi C salah karena titik koma tidak berpengaruh pada error tipe.",
      "D": "Opsi D salah karena nama variabel tidak menentukan tipe datanya."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "let code: string = \"200\";\ncode = 404; // Error"
  },
  {
    "id": "FT-005",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "best-practice",
    "question": "Manakah cara yang paling direkomendasikan untuk mendeklarasikan tipe bentuk objek (object shape) terbuka di TypeScript?\n\n```typescript\ninterface UserProfile {\n  id: number;\n  name: string;\n  email: string;\n}\n```",
    "options": {
      "A": "Menggunakan `interface`",
      "B": "Menggunakan tipe `any`",
      "C": "Menggunakan string literal",
      "D": "Tanpa deklarasi tipe sama sekali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Interface adalah cara standar dan paling direkomendasikan untuk mendefinisikan bentuk objek karena mendukung ekstensibilitas (`extends`) dan deklarasi merging.",
      "A": "Opsi A benar karena interface adalah standar deklarasi bentuk objek.",
      "B": "Opsi B salah karena any menghilangkan manfaat type safety.",
      "C": "Opsi C salah karena string literal tidak mendefinisikan struktur objek.",
      "D": "Opsi D salah karena ketiadaan tipe berisiko menimbulkan runtime error."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "interface UserProfile {\n  id: number;\n  name: string;\n  email: string;\n}"
  },
  {
    "id": "FT-006",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi utama dari hook `useState` di React?",
    "options": {
      "A": "Menyimpan dan mengelola state lokal pada functional component serta memicu re-render saat nilai state diperbarui",
      "B": "Menghubungkan aplikasi ke database MySQL secara langsung",
      "C": "Menjalankan kompilasi TypeScript di browser",
      "D": "Mengatur konfigurasi server backend"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useState` adalah hook dasar React yang memungkinkan functional component memiliki internal state yang reaktif terhadap interaksi pengguna.",
      "A": "Opsi A benar sesuai definisi dan tujuan hook useState.",
      "B": "Opsi B salah karena React tidak terhubung langsung ke database tanpa API.",
      "C": "Opsi C salah karena kompilasi dilakukan oleh bundler build tool.",
      "D": "Opsi D salah karena React berjalan di sisi klien (frontend)."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-007",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa yang ditampilkan di layar oleh komponen Counter berikut saat tombol diklik sekali?\n\n```typescript\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>Total: {count}</button>;\n}\n```",
    "options": {
      "A": "\"Total: 1\"",
      "B": "\"Total: 0\"",
      "C": "\"Total: 2\"",
      "D": "Tampilan kosong"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klik tombol memicu `setCount(prev => prev + 1)` yang mengubah nilai count dari 0 menjadi 1, memicu render ulang dengan tampilan 'Total: 1'.",
      "A": "Opsi A benar karena 0 + 1 = 1.",
      "B": "Opsi B salah karena state telah diperbarui.",
      "C": "Opsi C salah karena fungsi updater hanya menambahkan 1.",
      "D": "Opsi D salah karena komponen me-return JSX yang valid."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>Total: {count}</button>;\n}"
  },
  {
    "id": "FT-008",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe props komponen Button berikut agar menerima prop `label` berupa teks dan `disabled` opsional berupa boolean:\n\n```typescript\ninterface ButtonProps {\n  ___\n}\nexport const Button: React.FC<ButtonProps> = ({ label, disabled = false }) => ...\n```",
    "options": {
      "A": "interface ButtonProps { label: string; disabled?: boolean; }",
      "B": "interface ButtonProps { label: text; disabled: optional; }",
      "C": "type ButtonProps = { label: any; disabled: any };",
      "D": "interface ButtonProps { label: String; disabled: Boolean; }"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di TypeScript, tipe primitif menggunakan huruf kecil (`string`, `boolean`) dan properti opsional ditandai dengan tanda tanya (`?:`).",
      "A": "Opsi A benar sesuai standar penulisan interface props di React + TypeScript.",
      "B": "Opsi B salah karena text dan optional bukan tipe data di TypeScript.",
      "C": "Opsi C salah karena any menghilangkan type safety.",
      "D": "Opsi D salah karena pembungkus objek String/Boolean tidak disarankan untuk tipe props primitif."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "interface ButtonProps {\n  ___\n}\nexport const Button: React.FC<ButtonProps> = ({ label, disabled = false }) => ..."
  },
  {
    "id": "FT-009",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut tidak memperbarui angka saat tombol diklik. Apa penyebab bug tersebut?\n\n```typescript\nfunction BrokenCounter() {\n  let count = 0;\n  const handleClick = () => { count++; };\n  return <button onClick={handleClick}>{count}</button>;\n}\n```",
    "options": {
      "A": "Variabel count adalah variabel lokal biasa dan bukan state React, sehingga mutasi `count++` tidak memicu re-render komponen",
      "B": "Tombol tidak memiliki ID",
      "C": "Sintaks JSX div salah",
      "D": "Fungsi handleClick harus berjenis async"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di React, pembaruan tampilan hanya dipicu oleh pembaruan state (`useState`) atau props. Memodifikasi variabel lokal biasa tidak akan pernah memicu siklus re-render.",
      "A": "Opsi A benar karena variabel biasa tidak reaktif di siklus render React.",
      "B": "Opsi B salah karena atribut ID tidak memengaruhi reaktifitas.",
      "C": "Opsi C salah karena JSX valid.",
      "D": "Opsi D salah karena handler tidak memerlukan async untuk kalkulasi angka."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "function BrokenCounter() {\n  let count = 0;\n  const handleClick = () => { count++; };\n  return <button onClick={handleClick}>{count}</button>;\n}"
  },
  {
    "id": "FT-010",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Manakah cara yang benar untuk merender daftar array di React dengan atribut `key` yang stabil?\n\n```typescript\nconst users = [{ id: 1, name: 'Ali' }, { id: 2, name: 'Budi' }];\nreturn <ul>{___}</ul>;\n```",
    "options": {
      "A": "users.map(u => <li key={u.id}>{u.name}</li>)",
      "B": "users.map((u, i) => <li key={Math.random()}>{u.name}</li>)",
      "C": "users.map(u => <li>{u.name}</li>)",
      "D": "users.forEach(u => <li key={u.id}>{u.name}</li>)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menggunakan ID unik permanen dari database (`u.id`) sebagai prop `key` memberikan stabilitas pada algoritma rekonsiliasi DOM React.",
      "A": "Opsi A benar karena menggunakan identifier stabil dari data model.",
      "B": "Opsi B salah karena Math.random() menghasilkan key baru di setiap render yang merusak DOM state.",
      "C": "Opsi C salah karena ketiadaan key memicu warning di console browser.",
      "D": "Opsi D salah karena forEach tidak mengembalikan array elemen JSX."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "const users = [{ id: 1, name: 'Ali' }, { id: 2, name: 'Budi' }];\nreturn <ul>{___}</ul>;"
  },
  {
    "id": "FT-011",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah di Spring Boot yang menandai sebuah kelas sebagai Controller sekaligus menyematkan `@ResponseBody` pada seluruh method-nya?",
    "options": {
      "A": "@RestController",
      "B": "@Controller",
      "C": "@Service",
      "D": "@Component"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@RestController` adalah anotasi gabungan dari `@Controller` dan `@ResponseBody` untuk membangun RESTful web service yang mengembalikan data JSON/XML.",
      "A": "Opsi A benar karena @RestController mengotomatisasi serialisasi response body.",
      "B": "Opsi B salah karena @Controller biasa membutuhkan @ResponseBody manual pada tiap method jika ingin return data JSON.",
      "C": "Opsi C salah karena @Service untuk business logic layer.",
      "D": "Opsi D salah karena @Component adalah stereotype umum."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-012",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa status code HTTP default yang dikembalikan oleh method Controller Spring Boot jika method mengembalikan objek berhasil tanpa kustomisasi response status?",
    "options": {
      "A": "200 OK",
      "B": "201 Created",
      "C": "204 No Content",
      "D": "202 Accepted"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default di Spring Web MVC, method endpoint yang sukses dieksekusi akan mengembalikan HTTP Status Code 200 OK.",
      "A": "Opsi A benar karena 200 OK adalah status bawaan HTTP respon sukses di Spring MVC.",
      "B": "Opsi B salah karena 201 harus ditentukan secara eksplisit.",
      "C": "Opsi C salah karena 204 untuk respon tanpa body konten.",
      "D": "Opsi D salah karena 202 untuk request yang diterima untuk pemrosesan asinkron."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-013",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi Spring Web berikut untuk menangani HTTP GET request pada path `/api/products`:",
    "options": {
      "A": "@GetMapping(\"/api/products\")",
      "B": "@PostMapping(\"/api/products\")",
      "C": "@FetchMapping(\"/api/products\")",
      "D": "@ReadMapping(\"/api/products\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@GetMapping` adalah shortcut annotation resmi Spring untuk menangani HTTP GET requests.",
      "A": "Opsi A benar karena @GetMapping menangani request HTTP GET.",
      "B": "Opsi B salah karena @PostMapping untuk HTTP POST.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-014",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Aplikasi melempar `NullPointerException` saat memanggil service di controller. Kode yang ditulis: `private UserService service;`. Anotasi atau konstruktor apa yang lupa dibuat?\n\n```java\n@RestController\npublic class UserController {\n  private UserService service; // Null! Belum di-inject\n}\n```",
    "options": {
      "A": "Constructor Injection dengan `public UserController(UserService service) { this.service = service; }` atau anotasi `@Autowired`",
      "B": "Anotasi @Entity pada controller",
      "C": "Keyword static pada UserService",
      "D": "Method harus bertipe void"
    },
    "answer": "A",
    "explanation": {
      "correct": "Field dependensi tidak boleh dibiarkan null. Developer harus menyuntikkan dependensi menggunakan Constructor Injection (rekomendasi) atau `@Autowired` agar Spring IoC mengisinya dengan instance bean yang valid.",
      "A": "Opsi A benar karena menginisialisasi dependency injection dengan tepat.",
      "B": "Opsi B salah karena controller bukan entitas database.",
      "C": "Opsi C salah karena static field membypass container injection.",
      "D": "Opsi D salah karena return type tidak memengaruhi inisialisasi bean."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "@RestController\npublic class UserController {\n  private UserService service; // Null! Belum di-inject\n}"
  },
  {
    "id": "FT-015",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Manakah pendekatan Dependency Injection yang PALING direkomendasikan di Spring Boot modern?",
    "options": {
      "A": "Constructor Injection dengan field bertipe `private final`",
      "B": "Field Injection menggunakan `@Autowired` langsung pada private field",
      "C": "Setter Injection tanpa verifikasi null",
      "D": "Membuat objek secara manual dengan keyword `new` di dalam controller"
    },
    "answer": "A",
    "explanation": {
      "correct": "Constructor Injection menjamin immutability (`final`), mempermudah unit testing (dapat memasukkan mock tanpa reflection), dan mencegah NullPointerException.",
      "A": "Opsi A benar karena Constructor Injection adalah standar resmi Spring.",
      "B": "Opsi B salah karena field injection menyulitkan unit test murni.",
      "C": "Opsi C salah karena setter injection membuat dependensi dapat diubah (mutable).",
      "D": "Opsi D salah karena keyword new menghilangkan manajemen bean oleh Spring IoC."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-016",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi JPA apakah yang digunakan untuk menandai kolom Primary Key pada sebuah kelas `@Entity`?",
    "options": {
      "A": "@Id",
      "B": "@PrimaryKey",
      "C": "@Key",
      "D": "@ColumnId"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Id` adalah anotasi standar JPA untuk menetapkan field sebagai identifier utama / primary key suatu entitas.",
      "A": "Opsi A benar karena @Id adalah anotasi resmi JPA untuk primary key.",
      "B": "Opsi B salah karena bukan anotasi standar JPA.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-017",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Apa hasil kembalian dari method `userRepository.findById(1L)` jika data dengan ID 1 tidak ditemukan di database?",
    "options": {
      "A": "Optional.empty()",
      "B": "null",
      "C": "Exception EntityNotFoundException",
      "D": "Objek User kosong"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Data JPA mengembalikan `Optional.empty()` jika record tidak ditemukan, memungkinkan penanganan null-safe tanpa melempar exception secara langsung.",
      "A": "Opsi A benar karena Optional.empty() merepresentasikan ketiadaan data pada findById.",
      "B": "Opsi B salah karena findById tidak mengembalikan nilai null mentah.",
      "C": "Opsi C salah karena findById tidak langsung melempar exception saat data absen.",
      "D": "Opsi D salah karena tidak membuat objek dummy."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-018",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi deklarasi interface repository berikut agar mengelola entitas User dengan primary key bertipe Long:",
    "options": {
      "A": "public interface UserRepository extends JpaRepository<User, Long>",
      "B": "public interface UserRepository implements JpaRepository<User, Long>",
      "C": "public interface UserRepository extends JpaRepository<Long, User>",
      "D": "public class UserRepository extends JpaRepository<User, Long>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Java, interface mewarisi interface lain menggunakan kata kunci `extends`, dengan parameter generic `<Entity, IdType>`.",
      "A": "Opsi A benar karena menggunakan kata kunci extends dengan urutan generic yang tepat.",
      "B": "Opsi B salah karena interface tidak menggunakan kata kunci implements.",
      "C": "Opsi C salah karena urutan generic terbalik.",
      "D": "Opsi D salah karena repository Spring Data dideklarasikan sebagai interface, bukan class."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-019",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Entitas Book berikut melempar exception saat aplikasi dijalankan: 'No identifier specified for entity'. Apa perbaikannya?\n\n```java\n@Entity\npublic class Book {\n  private Long id;\n  private String title;\n}\n```",
    "options": {
      "A": "Tambahkan anotasi `@Id` pada field `id`",
      "B": "Ubah tipe id menjadi String",
      "C": "Ganti nama kelas menjadi TblBook",
      "D": "Tambahkan method toString()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi JPA mewajibkan setiap kelas yang dianotasi `@Entity` memiliki setidaknya satu atribut pengenal unik yang ditandai dengan `@Id`.",
      "A": "Opsi A benar karena setiap entitas JPA wajib memiliki @Id.",
      "B": "Opsi B salah karena tipe Long adalah tipe ID yang valid.",
      "C": "Opsi C salah karena nama kelas bebas.",
      "D": "Opsi D salah karena method toString tidak memengaruhi mapping JPA."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "@Entity\npublic class Book {\n  private Long id;\n  private String title;\n}"
  },
  {
    "id": "FT-020",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Strategi pembuatan ID otomatis manakah yang paling direkomendasikan untuk database MySQL yang menggunakan AUTO_INCREMENT?",
    "options": {
      "A": "GenerationType.IDENTITY",
      "B": "GenerationType.SEQUENCE",
      "C": "GenerationType.TABLE",
      "D": "GenerationType.UUID"
    },
    "answer": "A",
    "explanation": {
      "correct": "`GenerationType.IDENTITY` mengandalkan fitur kolom auto-increment database secara langsung, yang merupakan fitur bawaan MySQL.",
      "A": "Opsi A benar karena IDENTITY adalah pemetaan alami kolom auto-increment MySQL.",
      "B": "Opsi B salah karena MySQL tidak memiliki objek sequence bawaan pra-versi 8.",
      "C": "Opsi C salah karena TABLE generation memiliki overhead I/O tinggi.",
      "D": "Opsi D salah karena UUID adalah strategi nilai acak non-numerik."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-021",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Perintah SQL manakah yang digunakan untuk mengambil data dari tabel?",
    "options": {
      "A": "SELECT",
      "B": "GET",
      "C": "FETCH",
      "D": "READ"
    },
    "answer": "A",
    "explanation": {
      "correct": "`SELECT` adalah perintah inti Data Query Language (DQL) di SQL standar untuk membaca dan menampilkan data dari tabel database.",
      "A": "Opsi A benar karena SELECT adalah perintah standar pembacaan data SQL.",
      "B": "Opsi B salah karena GET adalah kata kerja HTTP, bukan SQL.",
      "C": "Opsi C salah karena FETCH adalah klausul paginasi / cursor di SQL.",
      "D": "Opsi D salah karena READ bukan perintah SQL."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-022",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Berapa banyak baris yang dihasilkan oleh query `SELECT COUNT(*) FROM users;` jika tabel users memiliki 15 baris data?",
    "options": {
      "A": "1 baris berisi angka 15",
      "B": "15 baris",
      "C": "0 baris",
      "D": "Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi agregat `COUNT(*)` merangkum seluruh baris tabel menjadi satu baris hasil tunggal yang berisi jumlah total record (yaitu 15).",
      "A": "Opsi A benar karena fungsi agregasi mengembalikan 1 baris hasil ringkasan.",
      "B": "Opsi B salah karena fungsi agregasi meremukkan baris menjadi satu nilai total.",
      "C": "Opsi C salah karena ada 15 baris data.",
      "D": "Opsi D salah karena sintaks COUNT(*) valid."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-023",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi klausa SQL berikut untuk menyaring produk dengan harga lebih besar dari 50.000:",
    "options": {
      "A": "WHERE price > 50000",
      "B": "HAVING price > 50000",
      "C": "FILTER price > 50000",
      "D": "IF price > 50000"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa `WHERE` digunakan untuk menyaring baris individual sebelum pengelompokan atau agregasi.",
      "A": "Opsi A benar karena WHERE adalah filter baris standar di SQL.",
      "B": "Opsi B salah karena HAVING digunakan untuk memfilter hasil agregasi setelah GROUP BY.",
      "C": "Opsi C salah karena FILTER bukan klausa pengganti WHERE di ANSI SQL.",
      "D": "Opsi D salah karena IF bukan klausul filter query SQL."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-024",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "debug",
    "question": "Query berikut bermaksud mencari user dengan nama 'Andi', tetapi melempar syntax error di database. Apa kesalahannya?\n\n```sql\nSELECT * FROM users WHERE name = \"Andi\"; -- Syntax error di standar SQL\n```",
    "options": {
      "A": "Nilai string literal 'Andi' harus diapit tanda petik satu (single quote), bukan tanda petik dua",
      "B": "Nama tabel harus huruf besar",
      "C": "Klausa WHERE harus diganti SELECT",
      "D": "Operator '=' harus diganti '=='"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di SQL standar, tanda petik ganda (`\"`) digunakan untuk identifier nama tabel/kolom, sedangkan literal teks string WAJIB diapit tanda petik tunggal (`'`).",
      "A": "Opsi A benar karena string literal di SQL menggunakan tanda petik tunggal.",
      "B": "Opsi B salah karena SQL standar case-insensitive untuk keyword dan nama tabel.",
      "C": "Opsi C salah karena WHERE adalah klausa filter yang tepat.",
      "D": "Opsi D salah karena operator kesetaraan SQL adalah tunggal '=', bukan '=='."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "SELECT * FROM users WHERE name = \"Andi\"; -- Syntax error di standar SQL"
  },
  {
    "id": "FT-025",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "best-practice",
    "question": "Mengapa sebaiknya menghindari `SELECT *` dan menyebutkan kolom secara eksplisit (`SELECT id, name`) pada aplikasi backend produksi?",
    "options": {
      "A": "Mengurangi bandwidth jaringan, menghemat memori server, dan menjaga kode tetap stabil saat ada perubahan skema kolom di database",
      "B": "SELECT * selalu ditolak oleh database PostgreSQL",
      "C": "SELECT * membuat query otomatis rollback",
      "D": "Agar query menjadi lebih lambat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menyebutkan kolom secara spesifik mencegah transfer data yang tidak perlu (seperti kolom teks panjang atau blob) dan memungkinkan database memanfaatkan Index-Only Scan.",
      "A": "Opsi A benar karena mengoptimalkan efisiensi I/O dan stabilitas kontrak data.",
      "B": "Opsi B salah karena SELECT * legal di SQL.",
      "C": "Opsi C salah karena SELECT tidak memicu rollback.",
      "D": "Opsi D salah karena tujuannya justru mempercepat performa."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-026",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Metode HTTP manakah yang secara semantik digunakan untuk membuat resource baru di server?",
    "options": {
      "A": "POST",
      "B": "GET",
      "C": "PUT",
      "D": "DELETE"
    },
    "answer": "A",
    "explanation": {
      "correct": "Metode HTTP `POST` dirancang untuk mengirimkan payload data baru ke server guna membuat entitas/resource baru di database.",
      "A": "Opsi A benar karena POST adalah metode standar pembuatan resource REST.",
      "B": "Opsi B salah karena GET untuk membaca data.",
      "C": "Opsi C salah karena PUT untuk menggantikan resource secara keseluruhan.",
      "D": "Opsi D salah karena DELETE untuk menghapus resource."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-027",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Status code HTTP berapakah yang secara standar dikembalikan oleh server jika resource yang diminta oleh klien tidak ditemukan?",
    "options": {
      "A": "404 Not Found",
      "B": "200 OK",
      "C": "500 Internal Server Error",
      "D": "401 Unauthorized"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 404 Not Found menandakan bahwa server tidak dapat menemukan resource yang cocok dengan Request-URI yang dikirimkan.",
      "A": "Opsi A benar karena 404 adalah standar ketiadaan resource.",
      "B": "Opsi B salah karena 200 adalah respon sukses.",
      "C": "Opsi C salah karena 500 adalah crash internal server.",
      "D": "Opsi D salah karena 401 adalah ketiadaan autentikasi login."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-028",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi header HTTP berikut untuk memberitahu server bahwa klien mengirimkan data berformat JSON:",
    "options": {
      "A": "Content-Type: application/json",
      "B": "Accept: text/plain",
      "C": "Type: json",
      "D": "Data-Format: json"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header `Content-Type: application/json` adalah header standar MIME type untuk mendefinisikan format payload JSON.",
      "A": "Opsi A benar sesuai standar HTTP header Content-Type.",
      "B": "Opsi B salah karena Accept adalah format yang diharapkan klien pada respon.",
      "C": "Opsi C salah karena bukan header standar.",
      "D": "Opsi D salah karena bukan header resmi."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-029",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Perintah Git manakah yang digunakan untuk membuat repositori Git baru di direktori lokal saat ini?",
    "options": {
      "A": "git init",
      "B": "git start",
      "C": "git create",
      "D": "git new"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git init` menginisialisasi repositori Git baru dengan membuat folder tersembunyi `.git` yang berisi seluruh struktur database version control.",
      "A": "Opsi A benar karena git init adalah perintah inisialisasi repositori resmi.",
      "B": "Opsi B salah karena bukan perintah Git.",
      "C": "Opsi C salah karena bukan perintah Git.",
      "D": "Opsi D salah karena bukan perintah resmi Git."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-030",
    "level": "beginner",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Dalam format standar GeoJSON, urutan koordinat untuk sebuah titik (Point) adalah:",
    "options": {
      "A": "[Longitude, Latitude] (Bujur lalu Lintang)",
      "B": "[Latitude, Longitude] (Lintang lalu Bujur)",
      "C": "[Altitude, Latitude]",
      "D": "[North, South]"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi RFC 7946 GeoJSON menetapkan urutan koordinat sebagai `[x, y]` yaitu `[longitude, latitude]`.",
      "A": "Opsi A benar karena spesifikasi GeoJSON mewajibkan urutan Longitude lalu Latitude.",
      "B": "Opsi B salah karena urutan Lintang lalu Bujur adalah format Leaflet UI, bukan GeoJSON murni.",
      "C": "Opsi C salah karena altitude berada di posisi ketiga.",
      "D": "Opsi D salah karena bukan notasi koordinat GeoJSON."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-031",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa fungsi dari utility type `Partial<T>` pada TypeScript?\n\n```typescript\ntype UserUpdate = Partial<User>;\n```",
    "options": {
      "A": "Mengubah seluruh properti dari tipe T menjadi bersifat opsional",
      "B": "Menghapus properti yang bernilai null",
      "C": "Mengambil sebagian properti acak",
      "D": "Mengubah properti menjadi readonly"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Partial<T>` memetakan semua properti tipe T dan menambahkan modifier optional `?:`.",
      "A": "Opsi A benar karena Partial menjadikan semua properti opsional.",
      "B": "Opsi B salah karena tidak membuang nilai null.",
      "C": "Opsi C salah karena bukan pemilihan acak.",
      "D": "Opsi D salah karena bukan pengubah readonly."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "type UserUpdate = Partial<User>;"
  },
  {
    "id": "FT-032",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Perhatikan kode berikut. Properti apa saja yang ada pada tipe `UserSummary` yang dibuat dengan `Pick`?\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\ntype UserSummary = Pick<User, 'id' | 'name'>;\n```",
    "options": {
      "A": "Hanya 'id' dan 'name'",
      "B": "Hanya 'email'",
      "C": "Semua properti User",
      "D": "Tidak ada"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Pick<T, K>` mengkonstruksi tipe dengan hanya memilih kumpulan kunci K dari tipe T.",
      "A": "Opsi A benar karena Pick hanya memilih field 'id' dan 'name'.",
      "B": "Opsi B salah karena email diabaikan.",
      "C": "Opsi C salah karena bukan tipe penuh.",
      "D": "Opsi D salah karena tipe memiliki 2 properti."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "interface User {\n  id: number;\n  name: string;\n  email: string;\n}\ntype UserSummary = Pick<User, 'id' | 'name'>;"
  },
  {
    "id": "FT-033",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi utility type berikut untuk membuang properti 'password' dari tipe User:\n\n```typescript\ninterface User {\n  id: number;\n  password: string;\n}\ntype SafeUser = ___;\n```",
    "options": {
      "A": "type SafeUser = Omit<User, 'password'>;",
      "B": "type SafeUser = Exclude<User, 'password'>;",
      "C": "type SafeUser = Remove<User, 'password'>;",
      "D": "type SafeUser = Drop<User, 'password'>;"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Omit<T, K>` digunakan untuk membuang properti K dari suatu tipe objek T.",
      "A": "Opsi A benar karena Omit membuang properti objek yang ditentukan.",
      "B": "Opsi B salah karena Exclude untuk union types, bukan tipe objek.",
      "C": "Opsi C salah karena bukan utility type bawaan.",
      "D": "Opsi D salah karena bukan utility type resmi."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "interface User {\n  id: number;\n  password: string;\n}\ntype SafeUser = ___;"
  },
  {
    "id": "FT-034",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Fungsi generic berikut menghasilkan error: 'Property length does not exist on type T'. Bagaimana cara menambahkan generic constraint agar T wajib memiliki properti length?\n\n```typescript\nfunction getLength<T>(item: T): number {\n  return item.length; // Error\n}\n```",
    "options": {
      "A": "function getLength<T extends { length: number }>(item: T): number",
      "B": "function getLength<T: { length: number }>(item: T): number",
      "C": "function getLength<T implements HasLength>(item: T): number",
      "D": "function getLength(item: any): number"
    },
    "answer": "A",
    "explanation": {
      "correct": "Generic constraint `T extends { length: number }` membatasi argumen agar harus memiliki properti `length` bertipe number.",
      "A": "Opsi A benar karena `extends` adalah sintaks constraint generic di TypeScript.",
      "B": "Opsi B salah karena titik dua bukan sintaks generic constraint.",
      "C": "Opsi C salah karena implements untuk class.",
      "D": "Opsi D salah karena any menghilangkan type safety."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "function getLength<T>(item: T): number {\n  return item.length; // Error\n}"
  },
  {
    "id": "FT-035",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "best-practice",
    "question": "Mengapa Discriminated Unions (Tagged Unions) sangat dianjurkan untuk pemodelan response API (Success vs Error) di TypeScript?\n\n```typescript\ntype ApiResponse =\n  | { status: 'success'; data: User }\n  | { status: 'error'; message: string };\n```",
    "options": {
      "A": "Memberikan penanda (literal discriminator) yang memungkinkan compiler mempersempit tipe data secara otomatis di blok if/switch tanpa type casting manual",
      "B": "Mengurangi pemakaian memori RAM browser",
      "C": "Menghapus kebutuhan async/await",
      "D": "Membuat kode berjalan lebih cepat di browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "Discriminated Unions menggunakan properti pembeda literal (seperti `status: 'success' | 'error'`) yang memicu automatic type narrowing di TypeScript.",
      "A": "Opsi A benar karena discriminated unions menyediakan type narrowing yang elegan dan aman.",
      "B": "Opsi B salah karena tidak memengaruhi alokasi RAM.",
      "C": "Opsi C salah karena tidak berhubungan dengan asinkronisitas.",
      "D": "Opsi D salah karena tipe dihilangkan saat runtime."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "type ApiResponse =\n  | { status: 'success'; data: User }\n  | { status: 'error'; message: string };"
  },
  {
    "id": "FT-036",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi utama dari hook `useCallback` di React?",
    "options": {
      "A": "Meng-cache definisi referensi fungsi di antara siklus render agar referensinya tidak berubah kecuali dependensinya berubah",
      "B": "Menjalankan fungsi callback di background thread",
      "C": "Menyimpan data di localStorage",
      "D": "Mengubah fungsi synchronous menjadi asynchronous"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useCallback(fn, deps)` mengembalikan fungsi ter-memoize untuk mencegah re-render komponen anak yang dioptimasi dengan `React.memo`.",
      "A": "Opsi A benar sesuai tujuan utama memoization referensi fungsi useCallback.",
      "B": "Opsi B salah karena tidak membuat background thread.",
      "C": "Opsi C salah karena tidak terhubung ke localStorage.",
      "D": "Opsi D salah karena bukan pengubah sifat async."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-037",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Berapa nilai `doubled` yang dihasilkan oleh `useMemo` berikut jika `count` bernilai 5?\n\n```typescript\nconst doubled = useMemo(() => count * 2, [count]);\n```",
    "options": {
      "A": "10",
      "B": "5",
      "C": "25",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useMemo(() => count * 2, [count])` menghitung nilai kalkulasi: 5 * 2 = 10 dan menyimpannya di cache sampai `count` berubah.",
      "A": "Opsi A benar karena 5 * 2 = 10.",
      "B": "Opsi B salah karena tidak dikalikan 2.",
      "C": "Opsi C salah karena bukan operasi kuadrat.",
      "D": "Opsi D salah karena kalkulasi menghasilkan angka 10."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "const doubled = useMemo(() => count * 2, [count]);"
  },
  {
    "id": "FT-038",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic `useRef` berikut untuk menyimpan referensi ke elemen input teks HTML:\n\n```typescript\nconst inputRef = ___;\nreturn <input ref={inputRef} />;\n```",
    "options": {
      "A": "const inputRef = useRef<HTMLInputElement>(null);",
      "B": "const inputRef = useRef<HTMLElement>(null);",
      "C": "const inputRef = useRef<InputType>(null);",
      "D": "const inputRef = useRef<string>(null);"
    },
    "answer": "A",
    "explanation": {
      "correct": "`HTMLInputElement` adalah antarmuka DOM spesifik untuk elemen `<input />`.",
      "A": "Opsi A benar karena HTMLInputElement menyediakan autocompletion properti elemen input seperti `.focus()` dan `.value`.",
      "B": "Opsi B salah karena HTMLElement terlalu umum.",
      "C": "Opsi C salah karena InputType bukan antarmuka DOM standar.",
      "D": "Opsi D salah karena ref elemen DOM bukan string primitif."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "const inputRef = ___;\nreturn <input ref={inputRef} />;"
  },
  {
    "id": "FT-039",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut mengalami bug stale state pada timer: nilai count yang dicetak selalu 0. Bagaimana cara memperbaikinya?\n\n```typescript\nuseEffect(() => {\n  const id = setInterval(() => {\n    setCount(count + 1); // Stale state\n  }, 1000);\n  return () => clearInterval(id);\n}, []);\n```",
    "options": {
      "A": "Gunakan functional updater: `setCount(prev => prev + 1)` di dalam interval callback",
      "B": "Ubah state count menjadi variabel global",
      "C": "Hapus fungsi cleanup",
      "D": "Ganti setInterval dengan requestAnimationFrame"
    },
    "answer": "A",
    "explanation": {
      "correct": "Closure timer menangkap snapshot `count = 0`. Menggunakan functional updater `setCount(prev => prev + 1)` memastikan update selalu menerima nilai state terbaru.",
      "A": "Opsi A benar karena functional updater memecahkan masalah stale closure.",
      "B": "Opsi B salah karena variabel global merusak isolasi komponen.",
      "C": "Opsi C salah karena ketiadaan cleanup menimbulkan memory leak.",
      "D": "Opsi D salah karena requestAnimationFrame bukan pengganti interval detik."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "useEffect(() => {\n  const id = setInterval(() => {\n    setCount(count + 1); // Stale state\n  }, 1000);\n  return () => clearInterval(id);\n}, []);"
  },
  {
    "id": "FT-040",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Bagaimana cara terbaik mengonsumsi React Context agar aman dari nilai `null` saat di luar Provider?",
    "options": {
      "A": "Membuat Custom Hook pembungkus yang memvalidasi `if (!context) throw new Error(...)` sebelum me-return context",
      "B": "Melakukan type assertion `as ContextType` tanpa validasi",
      "C": "Mengembalikan objek kosong `{}` jika null",
      "D": "Menggunakan tipe `any` pada context"
    },
    "answer": "A",
    "explanation": {
      "correct": "Guard clause di dalam custom hook (misal `useAuth`) menjamin nilai return selalu non-null dan memberikan error informatif jika Provider lupa dipasang.",
      "A": "Opsi A benar karena menjamin type safety non-null dan dokumentasi error yang jelas.",
      "B": "Opsi B salah karena type assertion menyamarkan potensi runtime error.",
      "C": "Opsi C salah karena fallback objek kosong dapat memicu undefined property access.",
      "D": "Opsi D salah karena any mematikan type checking."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-041",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa perilaku default transaksi `@Transactional` di Spring Boot jika terjadi Checked Exception?\n\n```java\n@Transactional(rollbackFor = Exception.class)\npublic void updateData() throws IOException { ... }\n```",
    "options": {
      "A": "Secara default TIDAK rollback; transaksi hanya auto-rollback untuk Unchecked Exception (RuntimeException / Error)",
      "B": "Transaksi selalu otomatis rollback untuk semua Exception",
      "C": "Transaksi langsung melempar error kompilasi",
      "D": "Transaksi tidak pernah rollback sama sekali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Transaction Manager secara default hanya membatalkan transaksi untuk unchecked exceptions (`RuntimeException` dan `Error`). Checked exception membutuhkan `rollbackFor = Exception.class`.",
      "A": "Opsi A benar karena menjelaskan perilaku selektif rollback default Spring.",
      "B": "Opsi B salah karena Checked Exception tidak memicu auto-rollback default.",
      "C": "Opsi C salah karena bukan kesalahan waktu kompilasi.",
      "D": "Opsi D salah karena unchecked exception memicu rollback."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "@Transactional(rollbackFor = Exception.class)\npublic void updateData() throws IOException { ... }"
  },
  {
    "id": "FT-042",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari eksekusi Stream Java berikut saat menyaring angka genap dan mengalikannya dengan 2?\n\n```java\nList<Integer> list = List.of(1, 2, 3, 4);\nint sum = list.stream().filter(n -> n % 2 == 0).mapToInt(n -> n * 2).sum();\nSystem.out.println(sum);\n```",
    "options": {
      "A": "12",
      "B": "6",
      "C": "10",
      "D": "20"
    },
    "answer": "A",
    "explanation": {
      "correct": "Angka genap dari [1, 2, 3, 4] adalah [2, 4]. Dikalikan 2 menjadi [4, 8]. Jumlahnya = 4 + 8 = 12.",
      "A": "Opsi A benar karena 4 + 8 = 12.",
      "B": "Opsi B salah karena penjumlahan tanpa pengali adalah 6.",
      "C": "Opsi C salah karena bukan jumlah total.",
      "D": "Opsi D salah karena bukan 20."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "List<Integer> list = List.of(1, 2, 3, 4);\nint sum = list.stream().filter(n -> n % 2 == 0).mapToInt(n -> n * 2).sum();\nSystem.out.println(sum);"
  },
  {
    "id": "FT-043",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada method repository berikut agar Spring Data JPA mengizinkan query UPDATE atau DELETE kustom:\n\n```java\n@___\n@Transactional\n@Query(\"UPDATE User u SET u.active = false WHERE u.lastLogin < :date\")\nint deactivateOldUsers(@Param(\"date\") LocalDateTime date);\n```",
    "options": {
      "A": "@Modifying",
      "B": "@Mutate",
      "C": "@DmlQuery",
      "D": "@Executable"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Modifying` menginstruksikan Spring Data JPA untuk mengeksekusi query melalui `executeUpdate()` alih-alih `executeQuery()`.",
      "A": "Opsi A benar karena @Modifying adalah anotasi wajib untuk DML query kustom.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi resmi.",
      "D": "Opsi D salah karena bukan anotasi Spring Data."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "@___\n@Transactional\n@Query(\"UPDATE User u SET u.active = false WHERE u.lastLogin < :date\")\nint deactivateOldUsers(@Param(\"date\") LocalDateTime date);"
  },
  {
    "id": "FT-044",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Method controller melempar error: 'MethodArgumentNotValidException' saat payload tidak valid, tetapi tidak ada respon JSON yang rapi ke klien. Bagaimana cara menanganinya secara terpusat?",
    "options": {
      "A": "Membuat kelas `@RestControllerAdvice` dengan method `@ExceptionHandler(MethodArgumentNotValidException.class)`",
      "B": "Menghapus anotasi @Valid dari controller",
      "C": "Mengubah DTO menjadi HashMap",
      "D": "Menangkap exception di setiap baris service"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@RestControllerAdvice` menangani exception validasi secara terpusat dan mengembalikan format error JSON yang seragam (seperti field mana yang error dan pesannya).",
      "A": "Opsi A benar karena @RestControllerAdvice adalah penanganan error terpusat standar.",
      "B": "Opsi B salah karena menghapus @Valid akan meloloskan data korup ke database.",
      "C": "Opsi C salah karena HashMap tidak memiliki validasi terstruktur.",
      "D": "Opsi D salah karena duplikasi try-catch menyalahi Clean Code."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-045",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Mengapa anotasi `@ConfigurationProperties` lebih direkomendasikan daripada menyematkan banyak `@Value` untuk membaca konfigurasi aplikasi yang hierarkis?\n\n```java\n@ConfigurationProperties(prefix = \"app.security\")\npublic record SecurityConfig(String jwtSecret, long expiration) {}\n```",
    "options": {
      "A": "Menyediakan binding konfigurasi yang terstruktur, type-safe, mendukung validasi JSR-380, dan memudahkan autocompletion di IDE",
      "B": "Menghapus kebutuhan file application.properties",
      "C": "Membuat aplikasi otomatis berjalan di HTTPS",
      "D": "@Value sudah dihapus di Spring Boot 3"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@ConfigurationProperties` mengelompokkan konfigurasi terkait ke dalam satu class POJO yang type-safe, mencegah typo nama properti.",
      "A": "Opsi A benar karena @ConfigurationProperties meningkatkan keteraturan dan type safety konfigurasi.",
      "B": "Opsi B salah karena file konfigurasi tetap digunakan sebagai sumber data.",
      "C": "Opsi C salah karena tidak mengontrol SSL secara otomatis.",
      "D": "Opsi D salah karena @Value masih tersedia untuk injeksi nilai tunggal sederhana."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "@ConfigurationProperties(prefix = \"app.security\")\npublic record SecurityConfig(String jwtSecret, long expiration) {}"
  },
  {
    "id": "FT-046",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Apa solusi paling efektif di JPQL untuk memecahkan masalah N+1 Select Problem pada relasi `@ManyToOne` atau `@OneToMany`?\n\n```sql\nSELECT u FROM User u JOIN FETCH u.orders WHERE u.active = true\n```",
    "options": {
      "A": "Menggunakan klausa `JOIN FETCH` pada query JPQL",
      "B": "Mengubah semua fetch mode menjadi EAGER secara permanen",
      "C": "Menghapus relasi dari entitas",
      "D": "Menonaktifkan database cache"
    },
    "answer": "A",
    "explanation": {
      "correct": "`JOIN FETCH` menginstruksikan Hibernate untuk mengambil entitas induk dan koleksi/entitas relasinya dalam satu query SQL JOIN tunggal.",
      "A": "Opsi A benar karena JOIN FETCH mengeliminasi query tambahan N+1 secara efisien.",
      "B": "Opsi B salah karena EAGER global justru memicu pemborosan memori.",
      "C": "Opsi C salah karena relasi data dibutuhkan oleh model domain.",
      "D": "Opsi D salah karena bukan masalah cache."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "SELECT u FROM User u JOIN FETCH u.orders WHERE u.active = true"
  },
  {
    "id": "FT-047",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Berapa jumlah query SQL yang dieksekusi oleh Hibernate pada pemanggilan kedua jika entitas sudah berada di L1 Cache?\n\n```java\nUser u1 = userRepo.findById(1L).get(); // Query 1\nUser u2 = userRepo.findById(1L).get(); // Query ke-2?\n```",
    "options": {
      "A": "0 query (diambil dari First-Level Cache)",
      "B": "1 query",
      "C": "2 query",
      "D": "Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "First-Level Cache (Persistence Context) menyimpan instance entitas selama transaksi aktif. Pemanggilan kedua dengan ID yang sama dilayani dari memori tanpa SQL.",
      "A": "Opsi A benar karena L1 cache hit meniadakan eksekusi query ke database.",
      "B": "Opsi B salah karena tidak ada query kedua yang dikirim.",
      "C": "Opsi C salah karena Hibernate tidak melakukan query berulang untuk entitas terkelola.",
      "D": "Opsi D salah karena operasi cache hit berjalan normal."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "User u1 = userRepo.findById(1L).get(); // Query 1\nUser u2 = userRepo.findById(1L).get(); // Query ke-2?"
  },
  {
    "id": "FT-048",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada field enum status berikut agar disimpan sebagai teks string di kolom database:\n\n```java\n@___\nprivate UserStatus status;\n```",
    "options": {
      "A": "@Enumerated(EnumType.STRING)",
      "B": "@Enumerated(EnumType.ORDINAL)",
      "C": "@EnumText",
      "D": "@StringEnum"
    },
    "answer": "A",
    "explanation": {
      "correct": "`EnumType.STRING` menyimpan nama literal enum (seperti 'ACTIVE') alih-alih angka indeks, menjaga konsistensi data jika urutan enum berubah.",
      "A": "Opsi A benar karena EnumType.STRING adalah pemetaan teks aman di JPA.",
      "B": "Opsi B salah karena ORDINAL menyimpan indeks angka yang rentan rusak.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "@___\nprivate UserStatus status;"
  },
  {
    "id": "FT-049",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Aplikasi melempar `LazyInitializationException` saat mengakses relasi `user.getOrders()` di layer Controller. Apa penyebabnya?",
    "options": {
      "A": "Hibernate Session/EntityManager sudah ditutup saat transaksi service berakhir sebelum koleksi LAZY diakses",
      "B": "Relasi orders tidak memiliki anotasi @OneToMany",
      "C": "Tabel orders kosong",
      "D": "User tidak memiliki ID"
    },
    "answer": "A",
    "explanation": {
      "correct": "Proxy koleksi LAZY hanya dapat dimuat saat sesi transaksi Hibernate masih terbuka. Solusinya: fetch data di service menggunakan DTO atau `JOIN FETCH`.",
      "A": "Opsi A benar karena akses proxy di luar transaksi aktif memicu LazyInitializationException.",
      "B": "Opsi B salah karena mapping ada.",
      "C": "Opsi C salah karena tabel kosong menghasilkan list kosong, bukan exception.",
      "D": "Opsi D salah karena bukan masalah identifier entitas."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-050",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Mengapa atribut `orphanRemoval = true` sangat berguna pada relasi `@OneToMany`?\n\n```java\n@OneToMany(mappedBy = \"user\", cascade = CascadeType.ALL, orphanRemoval = true)\nprivate List<Address> addresses = new ArrayList<>();\n```",
    "options": {
      "A": "Menghapus baris anak secara otomatis dari database ketika objek anak tersebut dihapus dari koleksi list di parent entity",
      "B": "Menghapus seluruh database saat parent dihapus",
      "C": "Membuat tabel anak menjadi read-only",
      "D": "Menghapus koneksi database"
    },
    "answer": "A",
    "explanation": {
      "correct": "`orphanRemoval = true` memastikan bahwa memutuskan hubungan objek anak dari parent (`orders.remove(order)`) akan otomatis menghapus record anak dari tabel database.",
      "A": "Opsi A benar karena orphanRemoval membersihkan baris yatim piatu secara otomatis.",
      "B": "Opsi B salah karena hanya menghapus entitas anak terkait.",
      "C": "Opsi C salah karena bukan proteksi read-only.",
      "D": "Opsi D salah karena tidak mematikan koneksi pool."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "@OneToMany(mappedBy = \"user\", cascade = CascadeType.ALL, orphanRemoval = true)\nprivate List<Address> addresses = new ArrayList<>();"
  },
  {
    "id": "FT-051",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa jenis JOIN di SQL yang mengembalikan semua baris dari tabel kiri, dan baris yang cocok dari tabel kanan (atau NULL jika tidak ada kecocokan)?",
    "options": {
      "A": "LEFT JOIN (LEFT OUTER JOIN)",
      "B": "INNER JOIN",
      "C": "RIGHT JOIN",
      "D": "CROSS JOIN"
    },
    "answer": "A",
    "explanation": {
      "correct": "`LEFT JOIN` menjamin seluruh baris dari tabel kiri selalu tampil dalam hasil query, dengan nilai NULL pada kolom tabel kanan jika tidak ditemukan kecocokan relasi.",
      "A": "Opsi A benar karena mendefinisikan perilaku resmi LEFT JOIN.",
      "B": "Opsi B salah karena INNER JOIN membuang baris yang tidak memiliki kecocokan di kedua tabel.",
      "C": "Opsi C salah karena RIGHT JOIN mempertahankan tabel kanan.",
      "D": "Opsi D salah karena CROSS JOIN menghasilkan perkalian kartesian."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-052",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Berapa jumlah baris yang dihasilkan dari query `SELECT DISTINCT status FROM orders;` jika tabel berisi 100 pesanan dengan status 'PENDING', 'PAID', dan 'CANCELLED'?\n\n```sql\nSELECT DISTINCT status FROM orders;\n```",
    "options": {
      "A": "3 baris",
      "B": "100 baris",
      "C": "1 baris",
      "D": "0 baris"
    },
    "answer": "A",
    "explanation": {
      "correct": "`DISTINCT` mengeliminasi baris duplikat, hanya mengembalikan variasi nilai unik yang ada (yaitu 3 nilai unik: PENDING, PAID, CANCELLED).",
      "A": "Opsi A benar karena ada 3 nilai status unik.",
      "B": "Opsi B salah karena duplikasi disaring oleh DISTINCT.",
      "C": "Opsi C salah karena ada 3 kategori status.",
      "D": "Opsi D salah karena ada data di tabel."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "SELECT DISTINCT status FROM orders;"
  },
  {
    "id": "FT-053",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi klausa SQL berikut untuk mengelompokkan baris berdasarkan departemen dan memfilter hanya departemen dengan total karyawan lebih dari 5:",
    "options": {
      "A": "GROUP BY department HAVING COUNT(*) > 5",
      "B": "GROUP BY department WHERE COUNT(*) > 5",
      "C": "ORDER BY department HAVING COUNT(*) > 5",
      "D": "PARTITION BY department WHERE COUNT(*) > 5"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa `HAVING` digunakan khusus untuk memfilter hasil agregasi setelah baris dikelompokkan oleh `GROUP BY`.",
      "A": "Opsi A benar karena kombinasi GROUP BY dan HAVING adalah standar SQL untuk agregasi bersyarat.",
      "B": "Opsi B salah karena WHERE tidak dapat mengevaluasi fungsi agregasi secara langsung.",
      "C": "Opsi C salah karena ORDER BY untuk pengurutan.",
      "D": "Opsi D salah karena PARTITION BY adalah klausa window function."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-054",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "debug",
    "question": "Query pencarian berikut sangat lambat: `SELECT * FROM users WHERE phone = NULL;` dan tidak mengembalikan hasil apa pun. Apa perbaikannya?\n\n```sql\nSELECT * FROM users WHERE phone IS NULL;\n```",
    "options": {
      "A": "Ganti operator `= NULL` dengan `IS NULL`",
      "B": "Ganti NULL dengan 0",
      "C": "Ganti SELECT dengan UPDATE",
      "D": "Tambahkan tanda petik pada phone"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di SQL, nilai `NULL` tidak dapat dibandingkan dengan operator kesetaraan `=`. Pemeriksaan nilai null wajib menggunakan operator `IS NULL`.",
      "A": "Opsi A benar karena IS NULL adalah sintaks resmi pengecekan ketiadaan nilai di SQL.",
      "B": "Opsi B salah karena 0 adalah nilai angka, bukan NULL.",
      "C": "Opsi C salah karena query bertujuan membaca data.",
      "D": "Opsi D salah karena identifier kolom tidak memerlukan tanda petik tunggal."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "SELECT * FROM users WHERE phone IS NULL;"
  },
  {
    "id": "FT-055",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "best-practice",
    "question": "Bagaimana aturan 'Leftmost Prefix' bekerja pada Composite Index `(col_a, col_b, col_c)`?\n\n```sql\nCREATE INDEX idx_user_search ON users(city, age, name);\n```",
    "options": {
      "A": "Indeks hanya digunakan oleh query jika kondisi filter menyertakan `col_a`, atau `(col_a, col_b)`, atau `(col_a, col_b, col_c)`; query yang hanya memfilter `col_b` tidak bisa memakai indeks ini",
      "B": "Indeks bisa digunakan secara acak pada kolom mana saja",
      "C": "Indeks hanya bisa dipakai untuk pengurutan descending",
      "D": "Indeks otomatis membagi tabel menjadi 3 bagian"
    },
    "answer": "A",
    "explanation": {
      "correct": "B-Tree multi-kolom diurutkan berdasarkan kolom pertama dari kiri ke kanan. Melewati kolom paling kiri (`col_a`) mencegah database menggunakan struktur pohon indeks.",
      "A": "Opsi A benar sesuai aturan resmi Leftmost Prefixing pada B-Tree Composite Index.",
      "B": "Opsi B salah karena struktur hierarki B-Tree membutuhkan prefix paling kiri.",
      "C": "Opsi C salah karena mendukung pengurutan ASC maupun DESC.",
      "D": "Opsi D salah karena bukan partisi tabel fisik."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "CREATE INDEX idx_user_search ON users(city, age, name);"
  },
  {
    "id": "FT-056",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara status code HTTP 401 Unauthorized dan 403 Forbidden?",
    "options": {
      "A": "401 mengindikasikan masalah autentikasi (klien belum login atau token invalid), sedangkan 403 mengindikasikan otorisasi (klien terotentikasi tetapi tidak punya izin akses)",
      "B": "401 untuk error server, 403 untuk error browser",
      "C": "401 untuk HTTP, 403 untuk HTTPS",
      "D": "Keduanya persis sama"
    },
    "answer": "A",
    "explanation": {
      "correct": "401 menuntut autentikasi ulang (Unauthenticated). 403 menolak akses terlepas dari siapa penggunanya karena role tidak memadai (Unauthorized/Forbidden).",
      "A": "Opsi A benar karena membedakan autentikasi identitas (401) vs otorisasi hak akses (403).",
      "B": "Opsi B salah karena keduanya adalah client error 4xx.",
      "C": "Opsi C salah karena tidak terikat protokol TLS.",
      "D": "Opsi D salah karena maknanya berbeda."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-057",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Klien mengirim request HTTP DELETE ke `/api/items/10` dan server berhasil menghapusnya tanpa mengembalikan payload body. Status code apa yang dikembalikan?",
    "options": {
      "A": "204 No Content",
      "B": "200 OK",
      "C": "404 Not Found",
      "D": "201 Created"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 204 No Content adalah status code standar yang menandakan operasi pemrosesan sukses dan server sengaja tidak menyertakan response body.",
      "A": "Opsi A benar karena 204 No Content adalah respon standar operasi DELETE tanpa payload balikan.",
      "B": "Opsi B salah jika server tidak mengirimkan body.",
      "C": "Opsi C salah karena penghapusan berhasil.",
      "D": "Opsi D salah karena 201 untuk creation."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-058",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi format skema otentikasi header HTTP Authorization saat membawa token JWT:",
    "options": {
      "A": "Authorization: Bearer <token>",
      "B": "Authorization: Basic <token>",
      "C": "Authorization: Token <token>",
      "D": "Authorization: JWT <token>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Format standar OAuth 2.0 / RFC 6750 untuk bearer token adalah `Authorization: Bearer <token>`.",
      "A": "Opsi A benar karena skema Bearer adalah standar resmi JWT.",
      "B": "Opsi B salah karena Basic untuk username:password ter-encode base64.",
      "C": "Opsi C salah karena Token bukan skema standar RFC.",
      "D": "Opsi D salah karena bukan nama skema otentikasi resmi."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-059",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "debug",
    "question": "Permintaan AJAX dari browser diblokir dengan error CORS saat mengakses endpoint POST dengan JSON body. Metode HTTP apakah yang dikirim browser pada tahap Preflight?",
    "options": {
      "A": "OPTIONS",
      "B": "GET",
      "C": "HEAD",
      "D": "PUT"
    },
    "answer": "A",
    "explanation": {
      "correct": "Browser mengirim preflight request menggunakan metode HTTP `OPTIONS` untuk memverifikasi izin header dan origin sebelum request aktual dikirimkan.",
      "A": "Opsi A benar karena OPTIONS adalah metode resmi preflight CORS.",
      "B": "Opsi B salah karena GET bukan metode preflight.",
      "C": "Opsi C salah karena bukan request verifikasi CORS.",
      "D": "Opsi D salah karena PUT adalah operasi update data."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-060",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "best-practice",
    "question": "Mengapa metode HTTP GET harus selalu bersifat 'Safe' dan 'Idempotent'?",
    "options": {
      "A": "Agar web crawler atau browser prefetching dapat membaca resource secara bebas tanpa khawatir memicu perubahan data atau efek samping yang merusak di server",
      "B": "Agar kecepatan kompresi meningkat",
      "C": "Karena GET tidak mendukung parameter query",
      "D": "Karena GET hanya bisa dijalankan satu kali per hari"
    },
    "answer": "A",
    "explanation": {
      "correct": "Metode safe tidak memodifikasi data. Idempotent berarti pemanggilan berulang tidak mengubah state akhir, memungkinkan caching dan perayapan aman oleh mesin pencari.",
      "A": "Opsi A benar karena keamanan semantik GET melindungi integritas data dari crawler dan prefetching.",
      "B": "Opsi B salah karena tidak terkait algoritma kompresi.",
      "C": "Opsi C salah karena GET mendukung query parameters.",
      "D": "Opsi D salah karena tidak ada batasan waktu pemanggilan."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-061",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Perintah Git manakah yang digunakan untuk mengaplikasikan satu commit spesifik dari branch lain ke branch aktif saat ini?",
    "options": {
      "A": "git cherry-pick <commit-hash>",
      "B": "git merge --single <hash>",
      "C": "git copy <hash>",
      "D": "git graft <hash>"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git cherry-pick` menyalin perubahan dari commit terpilih dan menerapkannya sebagai commit baru di branch yang sedang aktif.",
      "A": "Opsi A benar karena cherry-pick adalah perintah resmi pengambilan commit tunggal.",
      "B": "Opsi B salah karena bukan opsi git merge.",
      "C": "Opsi C salah karena git copy bukan perintah bawaan.",
      "D": "Opsi D salah karena bukan perintah standar Git."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-062",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "completion",
    "question": "Lengkapi perintah Git berikut untuk membatalkan commit terakhir tetapi tetap mempertahankan seluruh perubahan kode di Staging Area:",
    "options": {
      "A": "git reset --soft HEAD~1",
      "B": "git reset --hard HEAD~1",
      "C": "git revert HEAD",
      "D": "git checkout HEAD~1"
    },
    "answer": "A",
    "explanation": {
      "correct": "`--soft` hanya memundurkan pointer commit HEAD tanpa memodifikasi Index (Staging Area) maupun file kerja di disk.",
      "A": "Opsi A benar karena git reset --soft mempertahankan perubahan di Staging Area.",
      "B": "Opsi B salah karena --hard menghapus seluruh perubahan dari disk.",
      "C": "Opsi C salah karena git revert membuat commit pembalik baru.",
      "D": "Opsi D salah karena checkout berpindah commit (detached HEAD)."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-063",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "best-practice",
    "question": "Mengapa melakukan `git rebase` pada branch bersama (shared/public branch seperti main) dianggap sebagai praktik berbahaya?",
    "options": {
      "A": "Rebase menulis ulang riwayat commit (rewrites history) yang menyebabkan konflik parah dan commit duplikat bagi developer lain yang bercabang dari branch tersebut",
      "B": "Rebase menghapus akun GitHub",
      "C": "Rebase memformat harddisk",
      "D": "Rebase dilarang oleh terminal Linux"
    },
    "answer": "A",
    "explanation": {
      "correct": "Aturan Emas Rebase: Jangan pernah me-rebase branch publik yang digunakan bersama oleh anggota tim lain karena mengubah hash commit yang sudah disinkronkan.",
      "A": "Opsi A benar karena penulisan ulang history mengacaukan sinkronisasi anggota tim.",
      "B": "Opsi B salah karena tidak memengaruhi akun remote.",
      "C": "Opsi C salah karena bukan operasi disk format.",
      "D": "Opsi D salah karena perintah git rebase sepenuhnya legal di shell."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-064",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "output",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengonversi geometri database ke dalam string format GeoJSON?\n\n```sql\nSELECT id, name, ST_AsGeoJSON(geom) as geojson FROM locations;\n```",
    "options": {
      "A": "ST_AsGeoJSON(geom)",
      "B": "ST_ToGeoJSON(geom)",
      "C": "ST_MakeGeoJSON(geom)",
      "D": "ST_ParseJSON(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_AsGeoJSON(geometry geom)` mengonversi objek geometri PostGIS menjadi format representasi teks GeoJSON.",
      "A": "Opsi A benar karena ST_AsGeoJSON adalah nama fungsi resmi PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi resmi.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "SELECT id, name, ST_AsGeoJSON(geom) as geojson FROM locations;"
  },
  {
    "id": "FT-065",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "completion",
    "question": "Lengkapi inisialisasi peta Leaflet.js berikut agar mengatur koordinat pusat pada latitude -6.2 dan longitude 106.8 dengan zoom level 12:",
    "options": {
      "A": "map.setView([-6.2, 106.8], 12);",
      "B": "map.setCenter([106.8, -6.2], 12);",
      "C": "map.panTo([12, -6.2, 106.8]);",
      "D": "map.locate([-6.2, 106.8]);"
    },
    "answer": "A",
    "explanation": {
      "correct": "`setView([lat, lng], zoom)` adalah method resmi Leaflet untuk menentukan posisi tampilan dan tingkat perbesaran peta.",
      "A": "Opsi A benar karena setView menerima pasangan koordinat [lat, lng] dan level zoom.",
      "B": "Opsi B salah karena urutan koordinat dan nama method bukan standar Leaflet.",
      "C": "Opsi C salah karena panTo tidak mengatur zoom level.",
      "D": "Opsi D salah karena locate untuk geolocation browser."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-066",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa fungsi dari utility type `Record<K, T>` di TypeScript?\n\n```typescript\ntype PageNav = Record<'home' | 'about' | 'contact', { title: string; url: string }>;\n```",
    "options": {
      "A": "Membangun tipe objek dengan kumpulan properti bertipe K yang nilainya bertipe T",
      "B": "Merekam log konsol",
      "C": "Menyimpan data di audio recorder",
      "D": "Membuat tabel database baru"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Record<K, T>` adalah mapped type resmi untuk membuat kamus (dictionary/map) tipe dengan key K dan value T.",
      "A": "Opsi A benar sesuai fungsi dan definisi Record<K, T>.",
      "B": "Opsi B salah karena bukan perekam log.",
      "C": "Opsi C salah karena bukan perekam audio.",
      "D": "Opsi D salah karena bukan DDL database."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "type PageNav = Record<'home' | 'about' | 'contact', { title: string; url: string }>;"
  },
  {
    "id": "FT-067",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Perhatikan kode berikut. Berapa kali string 'Running' dicetak jika komponen re-render karena perubahan `otherVal`?\n\n```typescript\nuseEffect(() => {\n  console.log('Running');\n}, [userId]);\n```",
    "options": {
      "A": "0 kali (hanya berjalan jika `userId` berubah)",
      "B": "1 kali",
      "C": "2 kali",
      "D": "Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena dependency array `useEffect` hanya memantau `[userId]`, perubahan pada state `otherVal` tidak akan memicu eksekusi ulang callback efek tersebut.",
      "A": "Opsi A benar karena efek diisolasi ke perubahan userId.",
      "B": "Opsi B salah karena efek tidak dijalankan ulang jika dependensinya tidak berubah.",
      "C": "Opsi C salah karena tidak ada eksekusi ganda.",
      "D": "Opsi D salah karena kode valid."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "useEffect(() => {\n  console.log('Running');\n}, [userId]);"
  },
  {
    "id": "FT-068",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Aplikasi gagal menemukan bean saat startup: 'No qualifying bean of type EmailService available: expected single matching bean but found 2: SmtpEmailService, SendgridEmailService'. Anotasi apa yang dapat digunakan pada titik injeksi untuk memilih salah satu bean secara spesifik?\n\n```java\npublic UserController(@Qualifier(\"smtpEmailService\") EmailService emailService) { ... }\n```",
    "options": {
      "A": "@Qualifier(\"smtpEmailService\")",
      "B": "@Choose(\"smtpEmailService\")",
      "C": "@Select(\"smtpEmailService\")",
      "D": "@SingleBean"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Qualifier(\"beanName\")` digunakan bersama `@Autowired` untuk mengeliminasi ambiguitas ketika ada beberapa kandidat bean dengan antarmuka yang sama.",
      "A": "Opsi A benar karena @Qualifier adalah anotasi resmi Spring untuk pemilihan bean spesifik.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi IoC.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "public UserController(@Qualifier(\"smtpEmailService\") EmailService emailService) { ... }"
  },
  {
    "id": "FT-069",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Apa hasil dari query `SELECT COALESCE(NULL, NULL, 'Default', 'Other');`?\n\n```sql\nSELECT COALESCE(NULL, NULL, 'Default', 'Other');\n```",
    "options": {
      "A": "\"Default\"",
      "B": "NULL",
      "C": "\"Other\"",
      "D": "Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "`COALESCE` mengembalikan nilai non-null pertama dari daftar argumen yang diberikan (yaitu 'Default').",
      "A": "Opsi A benar karena 'Default' adalah ekspresi non-null pertama.",
      "B": "Opsi B salah karena ada nilai non-null.",
      "C": "Opsi C salah karena 'Other' berada setelah 'Default'.",
      "D": "Opsi D salah karena sintaks SQL valid."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "SELECT COALESCE(NULL, NULL, 'Default', 'Other');"
  },
  {
    "id": "FT-070",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa arti dari sifat 'Stateless' pada arsitektur REST?",
    "options": {
      "A": "Server tidak menyimpan konteks sesi klien di antara request; setiap request wajib memuat seluruh informasi yang diperlukan untuk memprosesnya",
      "B": "Server tidak memiliki database",
      "C": "Aplikasi tidak memiliki negara asal",
      "D": "Aplikasi tidak bisa menyimpan file"
    },
    "answer": "A",
    "explanation": {
      "correct": "Prinsip Statelessness memastikan setiap request bersifat mandiri, memungkinkan penskalaan horizontal server secara bebas tanpa session affinity.",
      "A": "Opsi A benar sesuai definisi formal arsitektur REST Statelessness.",
      "B": "Opsi B salah karena database persistensi tetap digunakan.",
      "C": "Opsi C salah karena bukan konteks geografis.",
      "D": "Opsi D salah karena penyimpanan file didukung."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-071",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic utility berikut untuk mengekstrak return type dari sebuah fungsi:\n\n```typescript\nfunction getUser() { return { id: 1, name: 'Budi' }; }\ntype UserResult = ___;\n```",
    "options": {
      "A": "type Result = ReturnType<typeof myFunction>;",
      "B": "type Result = ResultType<typeof myFunction>;",
      "C": "type Result = OutputOf<typeof myFunction>;",
      "D": "type Result = FunctionReturn<myFunction>;"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ReturnType<T>` mengekstrak tipe nilai kembalian dari suatu tipe fungsi T.",
      "A": "Opsi A benar karena ReturnType adalah utility type resmi TypeScript.",
      "B": "Opsi B salah karena bukan utility type bawaan.",
      "C": "Opsi C salah karena bukan utility type bawaan.",
      "D": "Opsi D salah karena bukan utility type resmi."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "function getUser() { return { id: 1, name: 'Budi' }; }\ntype UserResult = ___;"
  },
  {
    "id": "FT-072",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara `useMemo` dan `useCallback` di React?",
    "options": {
      "A": "useMemo meng-cache nilai hasil eksekusi fungsi, sedangkan useCallback meng-cache definisi instance fungsi itu sendiri",
      "B": "useMemo hanya untuk string, useCallback untuk angka",
      "C": "useCallback berjalan di server, useMemo di client",
      "D": "Keduanya persis sama tanpa perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useMemo(() => compute(), [deps])` meng-cache nilai kalkulasi, sedangkan `useCallback(fn, [deps])` meng-cache fungsi itu sendiri.",
      "A": "Opsi A benar karena membedakan nilai hasil komputasi vs referensi fungsi.",
      "B": "Opsi B salah karena keduanya mendukung semua tipe data.",
      "C": "Opsi C salah karena keduanya adalah hook React client.",
      "D": "Opsi D salah karena kegunaannya berbeda."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-073",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari pemanggilan `.isPresent()` pada `Optional.of(\"Data\")`?\n\n```java\nOptional<String> opt = Optional.of(\"Data\");\nSystem.out.println(opt.isPresent());\n```",
    "options": {
      "A": "true",
      "B": "false",
      "C": "null",
      "D": "Exception"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Optional.of(\"Data\")` membungkus nilai non-null, sehingga method `.isPresent()` bernilai true.",
      "A": "Opsi A benar karena objek Optional memiliki isi nilai valid.",
      "B": "Opsi B salah karena Optional tidak kosong.",
      "C": "Opsi C salah karena kembaliannya berupa boolean primitif.",
      "D": "Opsi D salah karena evaluasi aman tanpa error."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "Optional<String> opt = Optional.of(\"Data\");\nSystem.out.println(opt.isPresent());"
  },
  {
    "id": "FT-074",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi `@Version` pada entitas JPA?",
    "options": {
      "A": "Mengaktifkan Optimistic Locking untuk mendeteksi pembaruan bersamaan yang saling bertabrakan (Lost Updates)",
      "B": "Mencatat nomor versi compiler Java",
      "C": "Mengatur versi database PostgreSQL",
      "D": "Menghapus entitas lama otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Version` memeriksa nomor versi entitas saat UPDATE. Jika nomor versi di database berbeda dengan memori, dilemparkan `OptimisticLockException`.",
      "A": "Opsi A benar sesuai fungsi proteksi Optimistic Locking JPA.",
      "B": "Opsi B salah karena bukan nomor rilis compiler.",
      "C": "Opsi C salah karena bukan versi RDBMS.",
      "D": "Opsi D salah karena bukan pembersih entitas."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-075",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "best-practice",
    "question": "Kapan sebaiknya membuat Partial Index di PostgreSQL (`WHERE active = true`)?\n\n```sql\nCREATE INDEX idx_active_orders ON orders(created_at) WHERE status = 'ACTIVE';\n```",
    "options": {
      "A": "Ketika sebagian besar query dalam sistem hanya menyaring subset baris tertentu (misal data aktif), menghemat ukuran indeks dan mempercepat pencarian",
      "B": "Ketika tabel memiliki kurang dari 5 baris",
      "C": "Hanya untuk kolom numerik",
      "D": "Tidak pernah disarankan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Partial Index menghemat ruang memori dan disk secara signifikan dengan hanya mengindeks baris yang memenuhi kondisi klausul WHERE.",
      "A": "Opsi A benar karena Partial Index sangat optimal untuk query subset data.",
      "B": "Opsi B salah karena tabel sangat kecil tidak membutuhkan partial index.",
      "C": "Opsi C salah karena didukung pada semua tipe data.",
      "D": "Opsi D salah karena ini adalah fitur optimasi unggulan PostgreSQL."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "CREATE INDEX idx_active_orders ON orders(created_at) WHERE status = 'ACTIVE';"
  },
  {
    "id": "FT-076",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "debug",
    "question": "Klien menerima error HTTP 405 Method Not Allowed saat mengirim HTTP POST ke `/api/users`. Apa penyebabnya?",
    "options": {
      "A": "Endpoint tersebut hanya menerima metode HTTP lain (misal hanya di-mapping dengan `@GetMapping`), dan tidak mendukung metode POST",
      "B": "Server sedang offline",
      "C": "Database penuh",
      "D": "Koneksi internet lambat"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 405 terjadi ketika metode HTTP yang dikirim klien tidak diizinkan atau tidak di-mapping oleh resource URL tersebut.",
      "A": "Opsi A benar karena endpoint menolak metode HTTP yang tidak didukung.",
      "B": "Opsi B salah karena server merespon dengan status code HTTP sah.",
      "C": "Opsi C salah karena bukan error kapasitas penyimpanan.",
      "D": "Opsi D salah karena bukan masalah bandwidth."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-077",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "output",
    "question": "Apa yang dilakukan oleh perintah `git stash pop`?",
    "options": {
      "A": "Menerapkan perubahan kode yang terakhir disimpan di stash ke working directory sekaligus menghapusnya dari stack stash",
      "B": "Menghapus semua perubahan tanpa menerapkannya",
      "C": "Membuat commit baru ke remote",
      "D": "Menghapus repositori lokal"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git stash pop` mengembalikan perubahan dari puncak stack stash ke working tree dan langsung membuangnya dari daftar stash jika berhasil.",
      "A": "Opsi A benar sesuai fungsionalitas git stash pop.",
      "B": "Opsi B salah karena itu adalah perilaku git stash drop.",
      "C": "Opsi C salah karena stash pop tidak membuat commit.",
      "D": "Opsi D salah karena tidak menghapus repositori."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-078",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk memeriksa apakah dua geometri beririsan atau bertumpukan secara spasial?",
    "options": {
      "A": "ST_Intersects(geom1, geom2)",
      "B": "ST_Touch(geom1, geom2)",
      "C": "ST_Over(geom1, geom2)",
      "D": "ST_Cross(geom1, geom2)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Intersects(g1, g2)` mengembalikan true jika dua geometri berbagi ruang spasial apa pun (beririsan/tumpang tindih).",
      "A": "Opsi A benar karena ST_Intersects adalah fungsi standar irisan spasial OGC.",
      "B": "Opsi B salah karena ST_Touches hanya untuk persentuhan batas luar.",
      "C": "Opsi C salah karena bukan fungsi resmi.",
      "D": "Opsi D salah karena ST_Crosses memiliki kondisi dimensi yang berbeda."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-079",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa hasil dari operator kesetaraan nilai string literal enum di TypeScript?\n\n```typescript\nenum Role { ADMIN = 'ADMIN' }\nconsole.log(Role.ADMIN === 'ADMIN');\n```",
    "options": {
      "A": "true",
      "B": "false",
      "C": "undefined",
      "D": "Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Nilai dari `Role.ADMIN` bernilai `'ADMIN'`, sehingga perbandingan `'ADMIN' === Role.ADMIN` bernilai true.",
      "A": "Opsi A benar karena string enum bernilai teks string literalnya.",
      "B": "Opsi B salah karena nilainya sama.",
      "C": "Opsi C salah karena terdefinisi.",
      "D": "Opsi D salah karena perbandingan valid."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "enum Role { ADMIN = 'ADMIN' }\nconsole.log(Role.ADMIN === 'ADMIN');"
  },
  {
    "id": "FT-080",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi hook React Router v6 berikut untuk membaca parameter dinamis `id` dari URL:",
    "options": {
      "A": "const { id } = useParams<{ id: string }>();",
      "B": "const { id } = useRoute();",
      "C": "const { id } = useQuery();",
      "D": "const id = getUrlParam('id');"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useParams` adalah hook React Router v6 untuk membaca path variable dari rute aktif.",
      "A": "Opsi A benar karena useParams adalah hook resmi pembaca parameter URL rute.",
      "B": "Opsi B salah karena useRoute bukan hook React Router v6.",
      "C": "Opsi C salah karena useQuery bukan hook bawaan React Router.",
      "D": "Opsi D salah karena bukan hook React."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-081",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi utama dari keyword `infer` dalam Conditional Types TypeScript?",
    "options": {
      "A": "Mendeduksi dan menangkap variabel tipe baru secara dinamis dari dalam tipe lain selama evaluasi pola conditional type",
      "B": "Menonaktifkan type checking",
      "C": "Mengubah fungsi menjadi asinkron",
      "D": "Memaksa compiler mengabaikan linting"
    },
    "answer": "A",
    "explanation": {
      "correct": "Keyword `infer` mendeklarasikan variabel tipe yang diekstrak dari dalam pola tipe pada klausul `extends` conditional types.",
      "A": "Opsi A benar sesuai fungsi deduksi tipe dinamis keyword infer.",
      "B": "Opsi B salah karena infer bukan untuk mematikan type checking.",
      "C": "Opsi C salah karena tidak mengubah fungsionalitas runtime.",
      "D": "Opsi D salah karena infer adalah fitur sistem tipe bahasa."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-082",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa tipe hasil evaluasi dari conditional type berikut?\n\n```typescript\ntype Check<T> = T extends string ? 'string' : 'other';\ntype Result = Check<'hello'>;\n```",
    "options": {
      "A": "\"string\"",
      "B": "\"other\"",
      "C": "never",
      "D": "any"
    },
    "answer": "A",
    "explanation": {
      "correct": "`'hello' extends string` bernilai true, sehingga conditional type mengevaluasi cabang pertama yaitu literal `'string'`.",
      "A": "Opsi A benar karena 'hello' adalah subtipe dari string.",
      "B": "Opsi B salah karena kondisi extends bernilai true.",
      "C": "Opsi C salah karena cabang evaluasi terpenuhi.",
      "D": "Opsi D salah karena tipe menghasilkan literal spesifik."
    },
    "mode": "test",
    "jobId": "fullstack",
    "code": "type Check<T> = T extends string ? 'string' : 'other';\ntype Result = Check<'hello'>;"
  },
  {
    "id": "FT-083",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi template literal type berikut agar menerima string yang diawali kata 'handle' diikuti huruf kapital:",
    "options": {
      "A": "type HandlerName = `handle${Capitalize<string>}`;",
      "B": "type HandlerName = `handle${Uppercase<string>}`;",
      "C": "type HandlerName = 'handle' + Capitalize;",
      "D": "type HandlerName = `handle${string}`;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Intrinsic string utility `Capitalize<T>` mengubah huruf pertama string menjadi huruf kapital.",
      "A": "Opsi A benar karena `Capitalize` hanya mengkapitalkan huruf pertama.",
      "B": "Opsi B salah karena Uppercase membuat semua huruf menjadi kapital.",
      "C": "Opsi C salah karena tanda tambah bukan sintaks template literal type.",
      "D": "Opsi D salah karena tidak menjamin huruf kapital pada karakter pertama."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-084",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa peran utama dari hook `useTransition` yang diperkenalkan pada React 18?",
    "options": {
      "A": "Menandai pembaruan state tertentu sebagai transisi prioritas rendah yang dapat disela agar antarmuka pengguna tetap responsif",
      "B": "Mengatur animasi transisi CSS",
      "C": "Mengatur navigasi rute halaman",
      "D": "Mengurangi pemakaian memori"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useTransition` memisahkan pembaruan state penting (urgent) dari transisi berprioritas rendah (non-urgent) yang dapat ditunda atau dibatalkan jika ada input baru.",
      "A": "Opsi A benar sesuai tujuan Concurrent React useTransition.",
      "B": "Opsi B salah karena bukan engine CSS.",
      "C": "Opsi C salah karena bukan router navigasi.",
      "D": "Opsi D salah karena bukan pengurang memori."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-085",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Kapan nilai `deferredValue` dari `useDeferredValue` diperbarui oleh React?",
    "options": {
      "A": "Setelah render prioritas tinggi selesai dan browser berada dalam kondisi idle, menunda pembaruan nilai",
      "B": "Tepat 5 detik kemudian",
      "C": "Secara instan bersamaan dengan state asli",
      "D": "Hanya saat tombol ditekan"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useDeferredValue` menunda propagasi pembaruan nilai ke siklus render berikutnya saat thread idle.",
      "A": "Opsi A benar karena pembaruan ditunda agar interaksi utama tidak tersendat.",
      "B": "Opsi B salah karena bukan timer detik statis.",
      "C": "Opsi C salah karena sifatnya tertunda.",
      "D": "Opsi D salah karena tidak bergantung pada tombol."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-086",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Sebuah custom hook `useDebounce` tidak pernah memperbarui nilai karena dependency array `useEffect` kosong `[]`. Apa solusinya?",
    "options": {
      "A": "Masukkan parameter `[value, delay]` ke dalam array dependensi useEffect",
      "B": "Hapus hook useState",
      "C": "Ganti setTimeout dengan setInterval",
      "D": "Ubah hook menjadi class component"
    },
    "answer": "A",
    "explanation": {
      "correct": "Agar efek debounce di-reset setiap kali input berubah, dependensi `value` dan `delay` harus disertakan di dependency array.",
      "A": "Opsi A benar karena dependensi memicu reset timer pada setiap perubahan input.",
      "B": "Opsi B salah karena state dibutuhkan untuk menyimpan nilai ter-debounce.",
      "C": "Opsi C salah karena setInterval mengulang secara berkala tanpa henti.",
      "D": "Opsi D salah karena functional components mendukung custom hooks."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-087",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Dalam Spring AOP, Advice jenis apakah yang membungkus method target dan dapat mengontrol apakah method target dieksekusi atau tidak via `ProceedingJoinPoint`?",
    "options": {
      "A": "@Around",
      "B": "@Before",
      "C": "@After",
      "D": "@AfterThrowing"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Around` advice mengontrol eksekusi method target secara penuh melalui pemanggilan `joinPoint.proceed()`.",
      "A": "Opsi A benar karena @Around memiliki kontrol penuh atas pemanggilan join point.",
      "B": "Opsi B salah karena @Before hanya berjalan sebelum eksekusi.",
      "C": "Opsi C salah karena @After berjalan setelah selesai.",
      "D": "Opsi D salah karena @AfterThrowing hanya aktif saat terjadi exception."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-088",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Jika method transactional dengan `Propagation.REQUIRES_NEW` berhasil commit, lalu transaksi pemanggilnya melempar exception dan rollback, apakah perubahan method REQUIRES_NEW ikut dibatalkan?",
    "options": {
      "A": "TIDAK dibatalkan (tetap tersimpan permanen karena berjalan di transaksi fisik terpisah yang sudah di-commit)",
      "B": "Ikut dibatalkan",
      "C": "Database terkunci",
      "D": "Error crash"
    },
    "answer": "A",
    "explanation": {
      "correct": "`REQUIRES_NEW` mengisolasi transaksi fisik baru yang commit secara independen, tidak terpengaruh oleh rollback transaksi induk.",
      "A": "Opsi A benar karena transaksi REQUIRES_NEW terisolasi penuh.",
      "B": "Opsi B salah karena transaksi yang sudah di-commit tidak dapat di-rollback oleh transaksi lain.",
      "C": "Opsi C salah karena lock dilepas saat commit.",
      "D": "Opsi D salah karena operasi berjalan normal."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-089",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi event listener berikut agar aksi hanya dijalankan setelah transaksi database berhasil di-commit secara penuh:",
    "options": {
      "A": "@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)",
      "B": "@EventListener(onCommit = true)",
      "C": "@CommitEventListener",
      "D": "@AfterCommitListener"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)` memastikan efek samping hanya dieksekusi jika commit transaksi sukses.",
      "A": "Opsi A benar karena TransactionPhase.AFTER_COMMIT adalah konfigurasi resmi Spring.",
      "B": "Opsi B salah bukan atribut @EventListener biasa.",
      "C": "Opsi C salah bukan anotasi Spring.",
      "D": "Opsi D salah bukan anotasi resmi."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-090",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Mengapa pada pemanggilan method `@Async` di Spring Boot produksi disarankan menggunakan kustom `ThreadPoolTaskExecutor`?",
    "options": {
      "A": "Mencegah pembuatan thread tanpa batas yang dapat menghabiskan memori server dan memicu OutOfMemoryError",
      "B": "Karena Spring Boot melarang @Async",
      "C": "Agar thread berjalan di frontend",
      "D": "Untuk menonaktifkan database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kustom ThreadPoolTaskExecutor membatasi core pool, max pool, dan queue capacity, melindungi stabilitas sistem di bawah beban tinggi.",
      "A": "Opsi A benar karena membatasi pemakaian thread OS dan mencegah kehabisan memori.",
      "B": "Opsi B salah karena @Async sepenuhnya didukung.",
      "C": "Opsi C salah karena thread JVM berjalan di backend.",
      "D": "Opsi D salah karena tidak terkait koneksi database."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-091",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara First-Level Cache (L1) dan Second-Level Cache (L2) di Hibernate?",
    "options": {
      "A": "L1 Cache ber-scope per EntityManager/Session transaksi tunggal, sedangkan L2 Cache ber-scope SessionFactory aplikasi dan dibagikan lintas sesi",
      "B": "L1 di database, L2 di browser",
      "C": "L1 berbayar, L2 gratis",
      "D": "Keduanya persis sama"
    },
    "answer": "A",
    "explanation": {
      "correct": "First-level cache adalah in-memory session cache default. Second-level cache adalah shared application/cluster cache lintas transaksi.",
      "A": "Opsi A benar karena membedakan session-scope vs application/cluster-scope cache.",
      "B": "Opsi B salah karena keduanya di layer backend ORM.",
      "C": "Opsi C salah karena fitur open-source bawaan.",
      "D": "Opsi D salah karena cakupan lifecyle-nya berbeda total."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-092",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Klausa SQL apakah yang otomatis disematkan oleh dialek Hibernate di ujung query saat menggunakan `LockModeType.PESSIMISTIC_WRITE`?",
    "options": {
      "A": "FOR UPDATE",
      "B": "LOCK TABLE",
      "C": "READ ONLY",
      "D": "NO WAIT"
    },
    "answer": "A",
    "explanation": {
      "correct": "`PESSIMISTIC_WRITE` diterjemahkan menjadi klausa native `SELECT ... FOR UPDATE` yang mengunci baris data di level database fisik.",
      "A": "Opsi A benar karena FOR UPDATE adalah padanan SQL native dari PESSIMISTIC_WRITE.",
      "B": "Opsi B salah karena mengunci baris, bukan seluruh tabel.",
      "C": "Opsi C salah karena bukan query read-only.",
      "D": "Opsi D salah karena default-nya adalah menunggu lock."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-093",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa fungsi utama dari Window Functions di SQL dengan klausa `OVER (PARTITION BY ...)`?",
    "options": {
      "A": "Melakukan kalkulasi dan pemeringkatan pada partisi baris data tanpa meremukkan (collapse) baris individual menjadi satu baris seperti GROUP BY",
      "B": "Membuka jendela baru di web browser",
      "C": "Menghapus data di background",
      "D": "Membuat tabel cadangan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Window Functions mengevaluasi agregasi/ranking pada jendela partisi tanpa menghilangkan identitas tiap baris data asli.",
      "A": "Opsi A benar karena mempertahankan baris individual dalam perhitungan partisi.",
      "B": "Opsi B salah karena bukan GUI browser.",
      "C": "Opsi C salah karena bukan operasi penghapusan.",
      "D": "Opsi D salah karena bukan pencadangan database."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-094",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Diberikan nilai skor: 100, 90, 90, 80. Berapakah urutan ranking yang dihasilkan oleh fungsi `DENSE_RANK() OVER (ORDER BY score DESC)`?",
    "options": {
      "A": "1, 2, 2, 3",
      "B": "1, 2, 2, 4",
      "C": "1, 2, 3, 4",
      "D": "1, 1, 2, 3"
    },
    "answer": "A",
    "explanation": {
      "correct": "`DENSE_RANK()` memberikan ranking yang sama untuk nilai kembar tanpa melompati nomor urut berikutnya: 1, 2, 2, 3.",
      "A": "Opsi A benar karena DENSE_RANK tidak menyisakan gap nomor ranking.",
      "B": "Opsi B salah karena 1, 2, 2, 4 adalah hasil fungsi RANK() biasa.",
      "C": "Opsi C salah karena nilai kembar mendapat rank sama.",
      "D": "Opsi D salah karena nilai tertinggi mendapat rank 1."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-095",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "best-practice",
    "question": "Perintah apakah yang digunakan untuk memperbarui data pada Materialized View di PostgreSQL secara online tanpa memblokir (locking) query SELECT pengguna?",
    "options": {
      "A": "REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;",
      "B": "REFRESH MATERIALIZED VIEW view_name;",
      "C": "DROP MATERIALIZED VIEW view_name;",
      "D": "VACUUM ANALYZE view_name;"
    },
    "answer": "A",
    "explanation": {
      "correct": "`REFRESH MATERIALIZED VIEW CONCURRENTLY` memperbarui view tanpa memberlakukan exclusive read-lock (memerlukan Unique Index pada view).",
      "A": "Opsi A benar karena flag CONCURRENTLY mencegah penguncian pembacaan data.",
      "B": "Opsi B salah karena refresh standar memberlakukan exclusive lock.",
      "C": "Opsi C salah karena drop view memicu downtime.",
      "D": "Opsi D salah karena VACUUM bukan perintah refresh data."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-096",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Mengapa ekstensi PKCE diwajibkan dalam alur OAuth 2.0 untuk aplikasi frontend SPA dan Mobile?",
    "options": {
      "A": "Karena SPA/mobile tidak dapat menyimpan client_secret secara aman di kode sumber, dan PKCE mencegah intersepsi authorization code via code_verifier dinamis",
      "B": "PKCE mempercepat koneksi internet",
      "C": "PKCE menonaktifkan token JWT",
      "D": "PKCE mempublikasikan password pengguna"
    },
    "answer": "A",
    "explanation": {
      "correct": "PKCE (Proof Key for Code Exchange) melindungi Public Client dari pencurian authorization code tanpa membutuhkan client_secret statis.",
      "A": "Opsi A benar karena PKCE adalah standar mutlak keamanan Public Client OAuth2.",
      "B": "Opsi B salah karena tidak terkait kecepatan jaringan.",
      "C": "Opsi C salah karena token tetap digunakan.",
      "D": "Opsi D salah karena PKCE memperketat proteksi kredensial."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-097",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi header HTTP standar yang digunakan pada API transaksi finansial untuk menjamin idempotensi eksekusi:",
    "options": {
      "A": "Idempotency-Key: <uuid>",
      "B": "Safe-Token: true",
      "C": "No-Retry: yes",
      "D": "Single-Exec: 1"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Idempotency-Key` adalah header de facto standar industri untuk mencegah eksekusi transaksi ganda pada request retry.",
      "A": "Opsi A benar karena Idempotency-Key adalah standar industri proteksi double billing.",
      "B": "Opsi B salah karena bukan header standar.",
      "C": "Opsi C salah karena bukan header resmi.",
      "D": "Opsi D salah karena bukan header standar."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-098",
    "level": "advanced",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Alat bawaan Git apakah yang menggunakan algoritma pencarian biner (Binary Search) untuk menemukan commit spesifik yang memperkenalkan bug/regresi?",
    "options": {
      "A": "git bisect",
      "B": "git search",
      "C": "git debug",
      "D": "git trace"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git bisect` membagi riwayat commit secara biner di antara commit baik (good) dan buruk (bad) untuk melacak regresi secara otomatis.",
      "A": "Opsi A benar karena git bisect adalah tool binary search commit bawaan Git.",
      "B": "Opsi B salah karena bukan perintah Git.",
      "C": "Opsi C salah karena bukan perintah Git.",
      "D": "Opsi D salah karena bukan perintah Git."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-099",
    "level": "advanced",
    "topic": "Git & SDLC",
    "questionType": "output",
    "question": "Apa fungsi utama dari mekanisme Git `reflog` dalam situasi darurat?",
    "options": {
      "A": "Mencatat riwayat pemindahan pointer HEAD lokal, memungkinkan pemulihan commit yang hilang setelah `git reset --hard`",
      "B": "Menghapus riwayat commit",
      "C": "Mengubah password repository",
      "D": "Mengompresi gambar di repositori"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git reflog` menyimpan log seluruh perubahan HEAD lokal, memungkinkan recovery commit terlepas (orphaned/dangling commits).",
      "A": "Opsi A benar karena reflog adalah jaring pengaman pemulihan commit lokal.",
      "B": "Opsi B salah karena reflog tidak menghapus history.",
      "C": "Opsi C salah karena bukan pengubah password.",
      "D": "Opsi D salah karena bukan pengompres gambar."
    },
    "mode": "test",
    "jobId": "fullstack"
  },
  {
    "id": "FT-100",
    "level": "advanced",
    "topic": "GIS Dasar",
    "questionType": "completion",
    "question": "Lengkapi query spatial join PostGIS berikut untuk memfilter geometri yang berada dalam radius jarak 1.000 meter menggunakan tipe geography:",
    "options": {
      "A": "ST_DWithin(f.geom::geography, ST_MakePoint(106.8, -6.2)::geography, 1000)",
      "B": "ST_Distance(f.geom, 1000)",
      "C": "ST_Radius(f.geom, 1000)",
      "D": "ST_Near(f.geom, 1000)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_DWithin(geog1, geog2, distance_in_meters)` menggunakan indeks spasial untuk memfilter geometri dalam radius jarak meter di atas spheroid bumi secara efisien.",
      "A": "Opsi A benar karena ST_DWithin geography mengukur jarak dalam satuan meter menggunakan indeks GiST.",
      "B": "Opsi B salah karena ST_Distance tidak memfilter secara efisien dengan indeks bounding box.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "mode": "test",
    "jobId": "fullstack"
  }
];
