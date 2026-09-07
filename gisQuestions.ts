import { Question } from "./types";

export const GIS_QUESTIONS: Question[] = [
  {
    "id": "GIS-001",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Tag HTML5 semantik manakah yang paling tepat digunakan untuk membungkus komponen peta interaktif utama (map container)?",
    "options": {
      "A": "<main> atau <section>",
      "B": "<aside>",
      "C": "<header>",
      "D": "<footer>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tag <main> merepresentasikan konten inti dokumen, sedangkan <section> mendefinisikan bagian tematik mandiri yang cocok untuk wadah viewport peta utama.",
      "A": "Opsi A benar karena merefleksikan semantik konten utama aplikasi peta.",
      "B": "Opsi B salah karena <aside> untuk konten sekunder/sidebar.",
      "C": "Opsi C salah karena <header> untuk navigasi/judul atas.",
      "D": "Opsi D salah karena <footer> untuk informasi penutup/hak cipta."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-002",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Elemen HTML5 apakah yang digunakan oleh library pemetaan modern untuk merender ribuan titik koordinat (points) secara efisien menggunakan akselerasi GPU 2D/WebGL?",
    "options": {
      "A": "<canvas>",
      "B": "<table>",
      "C": "<article>",
      "D": "<frameset>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Elemen <canvas> menyediakan area render bitmap berkecepatan tinggi via Canvas 2D API atau WebGL, mampu merender puluhan ribu fitur spasial tanpa membebani DOM tree.",
      "A": "Opsi A benar karena canvas adalah standar rendering grafik performa tinggi di browser.",
      "B": "Opsi B salah karena table berbasis DOM dan sangat berat untuk data ribuan titik grafis.",
      "C": "Opsi C salah karena article adalah elemen semantik teks konten.",
      "D": "Opsi D salah karena frameset sudah usang (obsolete) di HTML5."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-003",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Properti CSS apakah yang wajib diatur pada container peta (misal #map) agar peta Leaflet atau OpenLayers dapat muncul di layar browser?",
    "options": {
      "A": "height (misal: height: 100vh atau height: 500px)",
      "B": "color: red",
      "C": "font-family: Arial",
      "D": "text-align: center"
    },
    "answer": "A",
    "explanation": {
      "correct": "Leaflet dan OpenLayers membutuhkan tinggi eksplisit pada elemen container. Jika height bernilai 0 (default untuk block kosong tanpa child berkonten teks), peta tidak akan terlihat sama sekali.",
      "A": "Opsi A benar karena height eksplisit adalah prasyarat mutlak rendering viewport peta.",
      "B": "Opsi B salah karena color hanya mengatur warna teks.",
      "C": "Opsi C salah karena font-family mengatur jenis huruf teks.",
      "D": "Opsi D salah karena text-align mengatur perataan teks."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-004",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Properti CSS Flexbox apakah yang digunakan untuk mengatur posisi item di sepanjang sumbu utama (main axis)?",
    "options": {
      "A": "justify-content",
      "B": "align-items",
      "C": "flex-direction",
      "D": "flex-wrap"
    },
    "answer": "A",
    "explanation": {
      "correct": "justify-content mengatur perataan elemen di sepanjang main axis (horizontal secara default jika flex-direction adalah row).",
      "A": "Opsi A benar karena justify-content mengontrol perataan main axis.",
      "B": "Opsi B salah karena align-items mengatur perataan cross axis.",
      "C": "Opsi C salah karena flex-direction menentukan arah sumbu utama (row/column).",
      "D": "Opsi D salah karena flex-wrap mengatur apakah item boleh berpindah baris."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-005",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Dalam CSS Grid, fungsi manakah yang digunakan untuk membuat grid responsif dengan kolom fleksibel yang otomatis menyesuaikan jumlah kolom berdasarkan lebar layar?",
    "options": {
      "A": "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))",
      "B": "grid-template-columns: 100px 100px 100px",
      "C": "grid-columns: responsive",
      "D": "grid-layout: auto-flex"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kombinasi repeat(auto-fit, minmax(...)) memungkinkan CSS Grid membungkus item ke baris berikutnya secara otomatis tanpa perlu media queries.",
      "A": "Opsi A benar karena pola auto-fit minmax adalah standar layout responsif CSS Grid.",
      "B": "Opsi B salah karena nilai piksel statis tidak responsif terhadap ukuran layar.",
      "C": "Opsi C salah karena bukan sintaks CSS Grid standar.",
      "D": "Opsi D salah karena bukan properti CSS yang valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-006",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Properti CSS apakah yang digunakan untuk mengatur urutan tumpukan lapisan visual (stacking order) antara peta, kontrol zoom, dan sidebar modal?",
    "options": {
      "A": "z-index",
      "B": "opacity",
      "C": "position: static",
      "D": "float"
    },
    "answer": "A",
    "explanation": {
      "correct": "z-index menentukan urutan kedalaman layer pada elemen yang memiliki properti position (relative, absolute, fixed). Kontrol peta biasanya memiliki z-index tinggi (misal 1000).",
      "A": "Opsi A benar karena z-index mengatur urutan lapisan z-axis.",
      "B": "Opsi B salah karena opacity mengatur tingkat transparansi.",
      "C": "Opsi C salah karena position static mengabaikan nilai z-index.",
      "D": "Opsi D salah karena float hanya untuk perataan kiri/kanan teks lama."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-007",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Fitur CSS modern apakah yang digunakan untuk mendefinisikan variabel warna tema yang dapat digunakan kembali di seluruh stylesheet?",
    "options": {
      "A": "CSS Custom Properties (misal: --primary-color: #38BDF8;)",
      "B": "$primary-color: #38BDF8 (hanya di vanilla CSS)",
      "C": "@define primary #38BDF8",
      "D": "var primary = #38BDF8"
    },
    "answer": "A",
    "explanation": {
      "correct": "CSS Custom Properties didefinisikan dengan prefix ganda '--' (biasanya di pseudo-class :root) dan diakses menggunakan fungsi var(--nama-variabel).",
      "A": "Opsi A benar karena merupakan sintaks resmi CSS Variables standar W3C.",
      "B": "Opsi B salah karena sintaks $ adalah variabel preprocessor SASS/SCSS, bukan vanilla CSS.",
      "C": "Opsi C salah karena bukan sintaks CSS.",
      "D": "Opsi D salah karena itu adalah deklarasi variabel JavaScript."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-008",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Bagaimana aturan penulisan Media Query untuk menerapkan gaya CSS khusus pada layar perangkat smartphone dengan lebar maksimal 768 piksel?",
    "options": {
      "A": "@media (max-width: 768px) { ... }",
      "B": "@screen mobile { ... }",
      "C": "@query (device: phone) { ... }",
      "D": "@viewport mobile-only { ... }"
    },
    "answer": "A",
    "explanation": {
      "correct": "@media (max-width: 768px) mengevaluasi kondisi ukuran viewport browser dan menerapkan aturan CSS hanya jika lebar layar kurang dari atau sama dengan 768px.",
      "A": "Opsi A benar karena sintaks standar Media Query CSS responsif.",
      "B": "Opsi B salah karena bukan aturan CSS standar.",
      "C": "Opsi C salah karena bukan aturan CSS standar.",
      "D": "Opsi D salah karena bukan sintaks Media Query."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-009",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Dalam CSS, apa perbedaan model layout antara 'display: flex' dan 'display: inline-flex'?",
    "options": {
      "A": "'display: flex' membuat container bertindak sebagai block-level box (memenuhi lebar parent), sedangkan 'display: inline-flex' bertindak sebagai inline-level box (lebar mengikuti konten)",
      "B": "'inline-flex' tidak mendukung perataan justify-content",
      "C": "'display: flex' hanya bekerja untuk gambar",
      "D": "Keduanya persis sama tanpa perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perbedaannya terletak pada bagaimana container berinteraksi dengan elemen di sekelilingnya di luar container (block flow vs inline flow), sementara flex formatting context di dalam container bekerja serupa.",
      "A": "Opsi A benar karena membedakan perilaku box model eksternal block vs inline.",
      "B": "Opsi B salah karena inline-flex mendukung semua properti anak flexbox.",
      "C": "Opsi C salah karena flexbox bekerja pada semua elemen HTML.",
      "D": "Opsi D salah karena perilaku display eksternalnya berbeda."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-010",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Format gambar vektor berbasis teks XML apakah yang didukung secara native oleh browser untuk merender ikon kompas, panah, atau marker peta tanpa pecah saat di-zoom?",
    "options": {
      "A": "SVG (Scalable Vector Graphics)",
      "B": "PNG",
      "C": "JPEG",
      "D": "BMP"
    },
    "answer": "A",
    "explanation": {
      "correct": "SVG adalah format grafis vektor berbasis XML dua dimensi yang dapat di-scale secara bebas ke resolusi berapapun tanpa mengalami pixelation atau kehilangan ketajaman.",
      "A": "Opsi A benar karena SVG adalah format vektor standar web.",
      "B": "Opsi B salah karena PNG adalah format raster bitmap berbasis piksel.",
      "C": "Opsi C salah karena JPEG adalah format raster terkompresi lossy.",
      "D": "Opsi D salah karena BMP adalah format raster bitmap tidak terkompresi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-011",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Unit ukuran viewport CSS manakah yang mewakili 1% dari tinggi dinamis layar viewport mobile yang memperhitungkan munculnya address bar browser?",
    "options": {
      "A": "dvh (Dynamic Viewport Height)",
      "B": "px",
      "C": "em",
      "D": "%"
    },
    "answer": "A",
    "explanation": {
      "correct": "dvh (Dynamic Viewport Height) diperkenalkan untuk mengatasi masalah lonjakan tinggi layar di mobile browser saat address bar muncul atau tersembunyi.",
      "A": "Opsi A benar karena dvh beradaptasi dinamis terhadap UI browser mobile.",
      "B": "Opsi B salah karena px adalah satuan piksel absolut tetap.",
      "C": "Opsi C salah karena em relatif terhadap font-size elemen induk.",
      "D": "Opsi D salah karena % relatif terhadap elemen parent langsung, bukan viewport."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-012",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Properti CSS apakah yang digunakan untuk memotong konten yang meluap dari batas container dan menampilkan scrollbar hanya jika diperlukan?",
    "options": {
      "A": "overflow: auto",
      "B": "overflow: visible",
      "C": "display: scroll",
      "D": "clip-path: auto"
    },
    "answer": "A",
    "explanation": {
      "correct": "overflow: auto secara otomatis menampilkan scrollbar jika konten melebihi dimensi box, dan menyembunyikannya jika konten muat di dalam container.",
      "A": "Opsi A benar karena overflow: auto adalah nilai standar penanganan scroll fleksibel.",
      "B": "Opsi B salah karena visible membiarkan konten tumpah keluar dari box.",
      "C": "Opsi C salah karena display: scroll bukan nilai CSS yang valid.",
      "D": "Opsi D salah karena clip-path digunakan untuk memotong bentuk poligon/lingkaran."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-013",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Keyword deklarasi variabel manakah di JavaScript ES6 yang memiliki 'block scope' dan nilainya tidak dapat di-reassign?",
    "options": {
      "A": "const",
      "B": "let",
      "C": "var",
      "D": "static"
    },
    "answer": "A",
    "explanation": {
      "correct": "const memiliki cakupan blok (block-scoped) dan mengikat variabel sehingga identifier tidak dapat ditugaskan kembali (reassigned) nilai baru.",
      "A": "Opsi A benar karena const adalah deklarasi konstanta block-scope ES6.",
      "B": "Opsi B salah karena let mengizinkan re-assignment nilai.",
      "C": "Opsi C salah karena var ber-cakupan fungsi (function-scoped) dan dapat di-reassign serta mengalami hoisting aneh.",
      "D": "Opsi D salah karena static adalah modifier member class, bukan deklarasi variabel lokal."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-014",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Apa hasil dari operasi JavaScript: 'typeof null'?",
    "options": {
      "A": "\"object\"",
      "B": "\"null\"",
      "C": "\"undefined\"",
      "D": "\"number\""
    },
    "answer": "A",
    "explanation": {
      "correct": "Dalam JavaScript, 'typeof null === \"object\"' adalah kejanggalan historis bawaan bahasa sejak versi awal JavaScript yang dipertahankan demi kompatibilitas mundur.",
      "A": "Opsi A benar karena merupakan perilaku resmi runtime JavaScript.",
      "B": "Opsi B salah karena typeof null tidak menghasilkan \"null\".",
      "C": "Opsi C salah karena undefined memiliki tipe \"undefined\" sendiri.",
      "D": "Opsi D salah karena null bukan number."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-015",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Operator apakah di JavaScript ES2020 (Optional Chaining) yang digunakan untuk membaca properti bersarang tanpa melempar TypeError jika properti induk bernilai null atau undefined?",
    "options": {
      "A": "?.",
      "B": "??",
      "C": "||",
      "D": "&&"
    },
    "answer": "A",
    "explanation": {
      "correct": "Optional chaining operator (?.) memungkinkan evaluasi aman: user?.address?.street akan mengembalikan undefined alih-alih melempar error jika user atau address bernilai null/undefined.",
      "A": "Opsi A benar karena ?. adalah operator optional chaining resmi.",
      "B": "Opsi B salah karena ?? adalah nullish coalescing operator untuk fallback nilai.",
      "C": "Opsi C salah karena || adalah logical OR yang mengevaluasi nilai falsy (termasuk 0 dan string kosong).",
      "D": "Opsi D salah karena && adalah logical AND."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-016",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Apa perbedaan mendasar antara operator kesetaraan '==' dan '===' di JavaScript?",
    "options": {
      "A": "'==' melakukan konversi tipe data otomatis (type coercion) sebelum membandingkan, sedangkan '===' membandingkan nilai DAN tipe data secara ketat tanpa konversi",
      "B": "'===' hanya bisa digunakan untuk membandingkan angka",
      "C": "'==' selalu lebih cepat daripada '==='",
      "D": "Keduanya persis sama tanpa perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator strict equality (===) memastikan bahwa jika tipe data kedua operan berbeda (misal 5 === \"5\"), hasilnya langsung false tanpa konversi paksa.",
      "A": "Opsi A benar karena membedakan loose equality (coercion) vs strict equality.",
      "B": "Opsi B salah karena === bekerja pada semua tipe data JavaScript.",
      "C": "Opsi C salah karena === justru sedikit lebih cepat karena tidak ada langkah konversi tipe implisit.",
      "D": "Opsi D salah karena perilakunya berbeda drastis pada tipe campuran."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-017",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Method array JavaScript manakah yang mengembalikan array baru berisi hasil pemanggilan fungsi pada setiap elemen (transformasi 1:1)?",
    "options": {
      "A": "array.map()",
      "B": "array.forEach()",
      "C": "array.filter()",
      "D": "array.find()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Array.prototype.map() mengiterasi elemen dan mengembalikan array baru dengan panjang yang sama berisi hasil transformasi dari callback function.",
      "A": "Opsi A benar karena map menghasilkan array baru ter-transformasi.",
      "B": "Opsi B salah karena forEach hanya mengeksekusi efek samping dan selalu mengembalikan undefined.",
      "C": "Opsi C salah karena filter menyaring subset elemen berdasarkan kondisi boolean.",
      "D": "Opsi D salah karena find hanya mengembalikan satu elemen pertama yang cocok."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-018",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Method array JavaScript manakah yang digunakan untuk menyaring elemen-elemen yang memenuhi kondisi kriteria tertentu?",
    "options": {
      "A": "array.filter()",
      "B": "array.reduce()",
      "C": "array.some()",
      "D": "array.slice()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Array.prototype.filter() menghasilkan array baru yang hanya berisi elemen-elemen di mana callback function mengembalikan nilai truthy.",
      "A": "Opsi A benar karena filter adalah method seleksi elemen.",
      "B": "Opsi B salah karena reduce mengakumulasi elemen menjadi satu nilai tunggal.",
      "C": "Opsi C salah karena some mengembalikan boolean true/false jika ada minimal satu elemen yang cocok.",
      "D": "Opsi D salah karena slice memotong array berdasarkan indeks start dan end."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-019",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Dalam TypeScript, tipe data apakah yang menandakan sebuah nilai yang bertipe benar-benar tidak diketahui dan mewajibkan type checking/narrowing sebelum nilainya dapat dioperasikan?",
    "options": {
      "A": "unknown",
      "B": "any",
      "C": "never",
      "D": "void"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe 'unknown' adalah alternatif type-safe dari 'any'. Kita tidak dapat memanggil method atau mengakses properti pada nilai bertipe unknown sebelum melakukan pengecekan tipe (seperti typeof atau instanceof).",
      "A": "Opsi A benar karena unknown menuntut pemeriksaan tipe eksplisit sebelum digunakan.",
      "B": "Opsi B salah karena any menonaktifkan semua pemeriksaan tipe compiler secara total.",
      "C": "Opsi C salah karena never menunjukkan nilai yang tidak pernah terjadi (seperti fungsi yang selalu melempar error).",
      "D": "Opsi D salah karena void digunakan untuk fungsi yang tidak mengembalikan nilai."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-020",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Bagaimana sintaks Arrow Function di JavaScript yang mengembalikan nilai objek secara langsung (implicit return)?",
    "options": {
      "A": "const makePoint = (x, y) => ({ x, y });",
      "B": "const makePoint = (x, y) => { x, y };",
      "C": "const makePoint = (x, y) => return { x, y };",
      "D": "const makePoint = (x, y) -> { x, y };"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tanda kurung biasa mengelilingi kurung kurawal '({ ... })' diperlukan agar JavaScript mengenali bahwa kurung kurawal tersebut adalah object literal, bukan blok body fungsi.",
      "A": "Opsi A benar karena membungkus object literal dengan tanda kurung untuk implicit return.",
      "B": "Opsi B salah karena { x, y } akan dianggap sebagai blok statement kosong dengan label x dan y, bukan objek.",
      "C": "Opsi C salah karena keyword return di luar blok kurung kurawal adalah sintaks ilegal.",
      "D": "Opsi D salah karena panah di JavaScript adalah => bukan ->."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-021",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Method DOM API modern apakah yang digunakan untuk memilih elemen HTML pertama yang cocok dengan selektor CSS tertentu?",
    "options": {
      "A": "document.querySelector()",
      "B": "document.getElementBySelector()",
      "C": "document.selectFirst()",
      "D": "document.findNode()"
    },
    "answer": "A",
    "explanation": {
      "correct": "document.querySelector(\".map-container\") mengembalikan elemen pertama di DOM yang cocok dengan CSS selector string yang diberikan.",
      "A": "Opsi A benar karena querySelector adalah method standar W3C DOM selector.",
      "B": "Opsi B salah karena bukan method DOM standar.",
      "C": "Opsi C salah karena bukan method DOM standar.",
      "D": "Opsi D salah karena bukan method DOM standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-022",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Bagaimana cara menangani error secara terstruktur pada asynchronous function berbasis async/await di JavaScript?",
    "options": {
      "A": "Membungkus pemanggilan await di dalam blok try { ... } catch (error) { ... }",
      "B": "Menambahkan listener window.onerror di setiap baris kode",
      "C": "Menggunakan perintah onError resume next",
      "D": "Async/await otomatis kebal dari error tanpa perlu penanganan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Async/await memungkinkan penanganan Promise rejection menggunakan sintaks sinkron standar blok try-catch yang intuitif dan mudah dibaca.",
      "A": "Opsi A benar karena try-catch adalah standar penanganan error pada async/await.",
      "B": "Opsi B salah karena window.onerror adalah fallback global, bukan penanganan terstruktur lokal.",
      "C": "Opsi C salah karena itu sintaks Visual Basic lama.",
      "D": "Opsi D salah karena Promise rejection yang tidak ditangani akan memicu UnhandledPromiseRejection warning/crash."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-023",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Apa fungsi dari method JSON.parse() dan JSON.stringify() di JavaScript?",
    "options": {
      "A": "JSON.parse() mengonversi teks string JSON menjadi objek JavaScript, sedangkan JSON.stringify() mengonversi objek JavaScript menjadi string JSON",
      "B": "JSON.parse() menyimpan data ke database, JSON.stringify() mengambilnya",
      "C": "JSON.parse() mengenkripsi teks, JSON.stringify() mendekripsinya",
      "D": "Keduanya persis sama dan dapat saling menggantikan"
    },
    "answer": "A",
    "explanation": {
      "correct": "JSON.parse mem-parse string berformat JSON menjadi objek data, sedangkan JSON.stringify men-serialisasi objek/array menjadi format string teks JSON.",
      "A": "Opsi A benar karena mendefinisikan parser dan serializer JSON bawaan browser.",
      "B": "Opsi B salah karena bukan operasi I/O database.",
      "C": "Opsi C salah karena bukan modul kriptografi.",
      "D": "Opsi D salah karena arah transformasinya berlawanan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-024",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Fitur TypeScript apakah yang mendefinisikan bentuk kontrak struktur data objek (shape of an object) tanpa menghasilkan kode JavaScript saat dikompilasi?",
    "options": {
      "A": "interface atau type alias",
      "B": "class",
      "C": "function",
      "D": "enum"
    },
    "answer": "A",
    "explanation": {
      "correct": "Interface dan type di TypeScript murni merupakan konstruksi waktu kompilasi (compile-time only) yang dihapus seluruhnya (erased) saat kompilasi ke file .js.",
      "A": "Opsi A benar karena interface dan type tidak menghasilkan jejak runtime overhead di JavaScript.",
      "B": "Opsi B salah karena class menghasilkan konstruktor fungsi dan prototype di file .js.",
      "C": "Opsi C salah karena function menghasilkan kode runtime di file .js.",
      "D": "Opsi D salah karena enum biasa menghasilkan objek JavaScript di file .js."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-025",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Apa fungsi dari operator Spread (...) pada array di JavaScript (misal: const combined = [...arr1, ...arr2];)?",
    "options": {
      "A": "Membongkar (unpack) elemen-elemen dari arr1 dan arr2 ke dalam array baru yang datar",
      "B": "Mengalikan semua angka di dalam array",
      "C": "Menghapus elemen array yang bernilai nol",
      "D": "Mengunci array agar tidak bisa dimodifikasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spread operator mengekstrak seluruh elemen array secara berurutan dan menyalinnya ke dalam penampung array baru secara shallow copy.",
      "A": "Opsi A benar karena spread operator membongkar elemen iterabel.",
      "B": "Opsi B salah karena bukan operasi matematika perkalian.",
      "C": "Opsi C salah karena tidak memfilter elemen.",
      "D": "Opsi D salah karena pembekuan array menggunakan Object.freeze()."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-026",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Hook dasar React apakah yang digunakan untuk menyimpan dan memperbarui data reaktif lokal di dalam komponen fungsional?",
    "options": {
      "A": "useState",
      "B": "useEffect",
      "C": "useRef",
      "D": "useContext"
    },
    "answer": "A",
    "explanation": {
      "correct": "useState adalah Hook inti yang mendeklarasikan variabel state lokal dan fungsi updater yang memicu re-render saat nilai diperbarui.",
      "A": "Opsi A benar karena useState mengelola state lokal komponen.",
      "B": "Opsi B salah karena useEffect menangani efek samping (side effects).",
      "C": "Opsi C salah karena useRef menyimpan referensi objek yang mutasi nilainya tidak memicu re-render.",
      "D": "Opsi D salah karena useContext membaca data dari Context API global."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-027",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Hook React apakah yang tepat digunakan untuk memuat data peta atau menginisialisasi map instance (seperti L.map) tepat setelah komponen selesai di-mount ke DOM?",
    "options": {
      "A": "useEffect dengan dependency array kosong []",
      "B": "useState",
      "C": "useMemo",
      "D": "useReducer"
    },
    "answer": "A",
    "explanation": {
      "correct": "useEffect(() => { ... }, []) dieksekusi tepat satu kali setelah komponen pertama kali di-mount ke DOM, menjadikannya tempat ideal untuk inisialisasi library pihak ketiga seperti Leaflet.",
      "A": "Opsi A benar karena dependency array kosong merepresentasikan componentDidMount.",
      "B": "Opsi B salah karena useState tidak menangani efek samping inisialisasi DOM.",
      "C": "Opsi C salah karena useMemo untuk memorisasi hasil kalkulasi murni saat render.",
      "D": "Opsi D salah karena useReducer untuk manajemen state kompleks."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-028",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Hook React apakah yang digunakan untuk menyimpan referensi langsung ke elemen HTML DOM (misal container <div id=\"map\">) tanpa memicu re-render?",
    "options": {
      "A": "useRef",
      "B": "useState",
      "C": "useCallback",
      "D": "useId"
    },
    "answer": "A",
    "explanation": {
      "correct": "useRef mengembalikan objek ref yang persisten di mana properti .current dapat langsung merujuk ke elemen DOM container peta.",
      "A": "Opsi A benar karena useRef menyimpan referensi DOM node secara langsung.",
      "B": "Opsi B salah karena mutasi useState memicu re-render komponen.",
      "C": "Opsi C salah karena useCallback memoisasi fungsi callback.",
      "D": "Opsi D salah karena useId menghasilkan ID string unik untuk aksesibilitas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-029",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Dalam React, bagaimana aturan immutability saat memperbarui state bertipe objek (misal: user location { lat, lng })?",
    "options": {
      "A": "Membuat objek salinan baru menggunakan spread operator (setLoc(prev => ({ ...prev, lat: newLat })))",
      "B": "Mengubah properti objek secara langsung (loc.lat = newLat) tanpa updater",
      "C": "Menghapus objek dan me-refresh browser",
      "D": "Menggunakan operator delete pada state"
    },
    "answer": "A",
    "explanation": {
      "correct": "React mengandalkan perbandingan referensi objek (shallow comparison). Memodifikasi objek state secara langsung tidak mengubah referensi objek sehingga React tidak mengetahui state telah berubah dan gagal me-render ulang UI.",
      "A": "Opsi A benar karena salinan objek baru memastikan referensi berubah dan re-render terpicu.",
      "B": "Opsi B salah karena mutasi langsung (mutation) merusak prinsip dasar React reaktif.",
      "C": "Opsi C salah karena me-refresh browser menghilangkan semua state aplikasi.",
      "D": "Opsi D salah karena operator delete memodifikasi objek langsung secara tidak aman."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-030",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Dalam Vue 3 Composition API, fungsi apakah yang digunakan untuk membuat variabel state reaktif untuk tipe data primitif (seperti angka zoom level atau string layer name)?",
    "options": {
      "A": "ref()",
      "B": "reactive()",
      "C": "computed()",
      "D": "watch()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ref() membungkus nilai primitif ke dalam objek reaktif dengan properti '.value' yang dilacak secara reaktif oleh engine Vue 3.",
      "A": "Opsi A benar karena ref() adalah fungsi reaktivitas standar untuk nilai primitif di Vue 3.",
      "B": "Opsi B salah karena reactive() dikhususkan untuk objek kompleks dan tidak mendukung primitif langsung.",
      "C": "Opsi C salah karena computed() menghasilkan nilai turunan (derived state) read-only.",
      "D": "Opsi D salah karena watch() memantau perubahan nilai."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-031",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Atribut khusus apakah yang wajib diberikan pada setiap elemen saat melakukan perulangan render list elemen di React (misal daftar marker koordinat)?",
    "options": {
      "A": "key (dengan nilai ID yang unik)",
      "B": "id",
      "C": "index-only",
      "D": "data-index"
    },
    "answer": "A",
    "explanation": {
      "correct": "Properti 'key' unik membantu algoritma rekonsiliasi React Virtual DOM mengidentifikasi item mana yang telah berubah, ditambah, atau dihapus secara efisien.",
      "A": "Opsi A benar karena 'key' unik wajib disertakan pada elemen list React.",
      "B": "Opsi B salah karena id adalah atribut HTML global biasa, bukan pengenal rekonsiliasi React.",
      "C": "Opsi C salah karena index-only bukan atribut React.",
      "D": "Opsi D salah karena data-index adalah data attribute HTML kustom."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-032",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Dalam React, apa fungsi dari proses pembersihan (cleanup function) yang di-return oleh useEffect?",
    "options": {
      "A": "Dijalankan saat komponen unmount atau sebelum efek dijalankan kembali, digunakan untuk menghapus instance peta (misal: map.remove()) atau event listener",
      "B": "Menghapus seluruh file cookie di browser",
      "C": "Menghapus cache local storage",
      "D": "Mematikan server backend"
    },
    "answer": "A",
    "explanation": {
      "correct": "Cleanup function mencegah memory leak dan error 'Map container is already initialized' di Leaflet dengan membersihkan map instance saat komponen dibongkar (unmount).",
      "A": "Opsi A benar karena membersihkan map instance dan listener saat unmount.",
      "B": "Opsi B salah karena tidak menghapus cookie browser.",
      "C": "Opsi C salah karena tidak mengosongkan localStorage.",
      "D": "Opsi D salah karena berada di level siklus hidup frontend browser."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-033",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Bagaimana cara melewatkan data dari komponen Parent ke komponen Child di React?",
    "options": {
      "A": "Melalui atribut Props (Properties)",
      "B": "Melalui database SQL",
      "C": "Melalui file cookie",
      "D": "Melalui URL query string saja"
    },
    "answer": "A",
    "explanation": {
      "correct": "Props adalah mekanisme resmi satu arah (one-way data flow) di mana komponen induk memberikan data masukan ke komponen anak.",
      "A": "Opsi A benar karena Props adalah saluran komunikasi parent-ke-child di React.",
      "B": "Opsi B salah karena database adalah persistensi server.",
      "C": "Opsi C salah karena cookie bukan saluran transfer data komponen.",
      "D": "Opsi D salah karena query string hanya salah satu cara untuk routing URL, bukan komunikasi komponen standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-034",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Dalam Vue.js, direktif apakah yang digunakan untuk melakukan two-way data binding pada form input (seperti input koordinat latitude/longitude)?",
    "options": {
      "A": "v-model",
      "B": "v-bind",
      "C": "v-on",
      "D": "v-for"
    },
    "answer": "A",
    "explanation": {
      "correct": "v-model menyinkronkan nilai input HTML secara dua arah otomatis dengan state variabel di skrip komponen Vue.",
      "A": "Opsi A benar karena v-model adalah direktif two-way data binding resmi Vue.",
      "B": "Opsi B salah karena v-bind adalah pengikatan satu arah (one-way binding).",
      "C": "Opsi C salah karena v-on untuk mendengarkan event pengguna.",
      "D": "Opsi D salah karena v-for untuk perulangan array."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-035",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Hook React apakah yang digunakan untuk memoisasi (cache) hasil komputasi berat (seperti filter puluhan ribu poligon) agar tidak dihitung ulang di setiap re-render?",
    "options": {
      "A": "useMemo",
      "B": "useCallback",
      "C": "useRef",
      "D": "useEffect"
    },
    "answer": "A",
    "explanation": {
      "correct": "useMemo(() => computeHeavyGeoFilter(data), [data]) hanya mengeksekusi ulang kalkulasi jika nilai dalam array dependensinya berubah.",
      "A": "Opsi A benar karena useMemo meng-cache hasil komputasi data murni.",
      "B": "Opsi B salah karena useCallback memoisasi definisi instance fungsi callback, bukan nilai hasil komputasi.",
      "C": "Opsi C salah karena useRef menyimpan objek referensi statis.",
      "D": "Opsi D salah karena useEffect untuk efek samping, bukan kalkulasi nilai render murni."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-036",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Di Node.js, format sistem modul resmi apakah yang menggunakan sintaks 'import ... from ...' dan 'export default'?",
    "options": {
      "A": "ES Modules (ESM)",
      "B": "CommonJS (CJS)",
      "C": "AMD",
      "D": "UMD"
    },
    "answer": "A",
    "explanation": {
      "correct": "ES Modules (ESM) adalah standar resmi JavaScript modern yang diaktifkan di Node.js menggunakan ekstensi .mjs atau menambahkan '\"type\": \"module\"' di package.json.",
      "A": "Opsi A benar karena import/export adalah sintaks standar ES Modules.",
      "B": "Opsi B salah karena CommonJS menggunakan require() dan module.exports.",
      "C": "Opsi C salah karena AMD menggunakan define() untuk browser lama.",
      "D": "Opsi D salah karena UMD adalah pembungkus hybrid warisan lama."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-037",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Framework web minimalis dan paling populer di ekosistem Node.js untuk membangun REST API dan backend GIS adalah:",
    "options": {
      "A": "Express.js",
      "B": "Laravel",
      "C": "Spring Cloud",
      "D": "Ruby on Rails"
    },
    "answer": "A",
    "explanation": {
      "correct": "Express.js adalah framework routing dan middleware standar de-facto untuk server backend berbasis Node.js.",
      "A": "Opsi A benar karena Express.js adalah framework backend Node.js utama.",
      "B": "Opsi B salah karena Laravel adalah framework bahasa PHP.",
      "C": "Opsi C salah karena Spring Cloud adalah framework ekosistem Java.",
      "D": "Opsi D salah karena Ruby on Rails adalah framework bahasa Ruby."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-038",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Dalam Express.js, apakah yang dimaksud dengan 'Middleware'?",
    "options": {
      "A": "Fungsi yang memiliki akses ke objek request (req), response (res), dan fungsi next() untuk memproses permintaan sebelum sampai ke route handler akhir",
      "B": "Kabel fisik penghubung server dengan switch jaringan",
      "C": "Program antivirus yang berjalan di database",
      "D": "Tampilan visual CSS di browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "Middleware Express mengeksekusi logika perantara (seperti logging, autentikasi token, parsing JSON, atau CORS) dan memanggil next() untuk meneruskan alur ke middleware berikutnya.",
      "A": "Opsi A benar karena mendefinisikan fungsi perantara req, res, next di Express.",
      "B": "Opsi B salah karena bukan hardware jaringan.",
      "C": "Opsi C salah karena bukan modul antivirus database.",
      "D": "Opsi D salah karena middleware Express berjalan di server backend, bukan frontend browser."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-039",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Middleware bawaan Express.js apakah yang digunakan untuk mem-parse incoming request body yang berformat JSON?",
    "options": {
      "A": "express.json()",
      "B": "express.parseBody()",
      "C": "express.multipart()",
      "D": "express.urlencodedOnly()"
    },
    "answer": "A",
    "explanation": {
      "correct": "app.use(express.json()) mem-parse payload JSON yang masuk dan menempatkan objek hasilnya di req.body.",
      "A": "Opsi A benar karena express.json() adalah middleware parsing JSON standar.",
      "B": "Opsi B salah karena bukan method bawaan Express.",
      "C": "Opsi C salah karena bukan method bawaan Express.",
      "D": "Opsi D salah karena bukan method Express."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-040",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Objek apakah di Express.js yang digunakan untuk mengambil parameter dinamis dari URL path (contoh: endpoint '/api/features/:id')?",
    "options": {
      "A": "req.params.id",
      "B": "req.query.id",
      "C": "req.body.id",
      "D": "req.headers.id"
    },
    "answer": "A",
    "explanation": {
      "correct": "Parameter path yang diawali dengan tanda titik dua (:id) otomatis dipetakan oleh Express ke dalam objek req.params.",
      "A": "Opsi A benar karena req.params menampung route parameters.",
      "B": "Opsi B salah karena req.query menampung query string (seperti ?id=10).",
      "C": "Opsi C salah karena req.body menampung body payload POST/PUT.",
      "D": "Opsi D salah karena req.headers menampung header HTTP."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-041",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Package npm populer apakah yang digunakan di Express.js untuk mengizinkan permintaan lintas domain (Cross-Origin Resource Sharing) dari frontend web GIS?",
    "options": {
      "A": "cors",
      "B": "axios",
      "C": "dotenv",
      "D": "nodemon"
    },
    "answer": "A",
    "explanation": {
      "correct": "Package 'cors' menyediakan middleware Express siap pakai untuk mengonfigurasi header Access-Control-Allow-Origin.",
      "A": "Opsi A benar karena cors adalah package resmi untuk penanganan CORS di Node.js.",
      "B": "Opsi B salah karena axios adalah HTTP client untuk membuat request outbound.",
      "C": "Opsi C salah karena dotenv untuk memuat file .env ke process.env.",
      "D": "Opsi D salah karena nodemon adalah utility dev untuk auto-restart server saat kode berubah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-042",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Bagaimana cara membaca variabel lingkungan (Environment Variables) dari file .env di aplikasi Node.js?",
    "options": {
      "A": "Menggunakan package 'dotenv' dan mengakses nilainya melalui 'process.env.NAMA_VARIABEL'",
      "B": "Membuka file .env secara manual menggunakan FileReader browser",
      "C": "Menggunakan perintah global window.getEnv()",
      "D": "Menyimpan nilai variabel di dalam file HTML"
    },
    "answer": "A",
    "explanation": {
      "correct": "dotenv membaca file .env saat startup dan memuat kuncinya ke dalam objek runtime global process.env.",
      "A": "Opsi A benar karena process.env adalah interface standar environment variables di Node.js.",
      "B": "Opsi B salah karena FileReader adalah API browser frontend, bukan backend Node.js.",
      "C": "Opsi C salah karena window objek tidak ada di lingkungan backend Node.js.",
      "D": "Opsi D salah karena tidak aman menyimpan kredensial di file HTML."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-043",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Modul inti (core module) bawaan Node.js apakah yang digunakan untuk berinteraksi dengan file system komputer (membaca/menulis file GeoJSON/Shapefile)?",
    "options": {
      "A": "fs (atau fs/promises)",
      "B": "http",
      "C": "path",
      "D": "os"
    },
    "answer": "A",
    "explanation": {
      "correct": "Modul 'fs' (File System) menyediakan fungsi membaca, menulis, dan memanipulasi file fisik di server.",
      "A": "Opsi A benar karena fs adalah modul inti manipulasi file di Node.js.",
      "B": "Opsi B salah karena http adalah modul server HTTP dasar.",
      "C": "Opsi C salah karena path adalah utilitas resolusi string direktori.",
      "D": "Opsi D salah karena os menyediakan informasi sistem operasi server."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-044",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Apa fungsi dari method 'res.status(404).json({ error: \"Not Found\" })' pada Express route handler?",
    "options": {
      "A": "Mengatur HTTP status code response menjadi 404 dan mengirimkan response body berupa data berformat JSON",
      "B": "Mematikan server Express seketika",
      "C": "Menghapus database pada tabel yang bersangkutan",
      "D": "Mengalihkan pengguna ke mesin pencari Google"
    },
    "answer": "A",
    "explanation": {
      "correct": "res.status() menetapkan kode status respons, dan res.json() memformat objek JavaScript menjadi JSON serta menyetel header Content-Type application/json.",
      "A": "Opsi A benar karena menjelaskan chaining status dan pengiriman body JSON di Express.",
      "B": "Opsi B salah karena koneksi ditutup secara normal setelah respons terkirim tanpa mematikan server.",
      "C": "Opsi C salah karena tidak mengubah isi database.",
      "D": "Opsi D salah karena tidak melakukan pengalihan URL eksternal."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-045",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Dalam Node.js, file apakah yang menyimpan metadata proyek seperti nama aplikasi, versi, dependensi library (dependencies), dan script build?",
    "options": {
      "A": "package.json",
      "B": "tsconfig.json",
      "C": "index.html",
      "D": "node.config"
    },
    "answer": "A",
    "explanation": {
      "correct": "package.json adalah file manifest pusat untuk manajemen paket dan konfigurasi aplikasi berbasis Node.js.",
      "A": "Opsi A benar karena package.json adalah manifest standar proyek Node.js.",
      "B": "Opsi B salah karena tsconfig.json khusus untuk konfigurasi compiler TypeScript.",
      "C": "Opsi C salah karena index.html adalah dokumen halaman web frontend.",
      "D": "Opsi D salah karena node.config bukan file konfigurasi standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-046",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Package npm middleware apakah yang paling umum digunakan di Express.js untuk menangani upload file multipart (seperti upload file zip Shapefile atau file GeoTIFF)?",
    "options": {
      "A": "multer",
      "B": "bcrypt",
      "C": "jsonwebtoken",
      "D": "helmet"
    },
    "answer": "A",
    "explanation": {
      "correct": "'multer' adalah middleware Node.js untuk menangani data bertipe 'multipart/form-data', terutama digunakan untuk mengunggah file ke server atau memori buffer.",
      "A": "Opsi A benar karena multer adalah library standar de-facto penanganan upload file di Express.",
      "B": "Opsi B salah karena bcrypt untuk hashing password.",
      "C": "Opsi C salah karena jsonwebtoken untuk membuat dan memverifikasi token JWT.",
      "D": "Opsi D salah karena helmet untuk mengamankan HTTP headers."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-047",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Dalam Vue.js, direktif apakah yang digunakan untuk menampilkan atau menyembunyikan elemen HTML secara kondisional dengan menambahkan/menghapus elemen dari DOM?",
    "options": {
      "A": "v-if",
      "B": "v-show",
      "C": "v-display",
      "D": "v-hide"
    },
    "answer": "A",
    "explanation": {
      "correct": "v-if me-render atau menghancurkan elemen langsung dari DOM secara kondisional, sedangkan v-show hanya memanipulasi properti CSS display: none.",
      "A": "Opsi A benar karena v-if menyisipkan/menghapus elemen dari pohon DOM.",
      "B": "Opsi B salah karena v-show hanya menyembunyikan secara visual dengan CSS display: none.",
      "C": "Opsi C salah karena v-display bukan direktif Vue yang valid.",
      "D": "Opsi D salah karena v-hide bukan direktif Vue yang valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-048",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Fitur state management terpusat resmi apakah yang direkomendasikan untuk aplikasi React modern pengganti vanilla Redux boilerplate lama?",
    "options": {
      "A": "Redux Toolkit (RTK) atau Zustand",
      "B": "jQuery Global State",
      "C": "DOM Storage Variable",
      "D": "Static Window Object"
    },
    "answer": "A",
    "explanation": {
      "correct": "Redux Toolkit (RTK) dan Zustand menyediakan state management global yang ringkas, immutable, dan menghilangkan boilerplate rumit Redux tradisional.",
      "A": "Opsi A benar karena RTK dan Zustand adalah standar industri modern state management React.",
      "B": "Opsi B salah karena jQuery sudah usang dan bukan state manager komponen.",
      "C": "Opsi C salah karena DOM storage lambat dan hanya untuk serialisasi string.",
      "D": "Opsi D salah karena window global variable melanggar reaktivitas dan enkapsulasi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-049",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Perintah npm apakah yang digunakan untuk menginstal package library dan secara otomatis mencatatnya ke dalam 'devDependencies' di package.json?",
    "options": {
      "A": "npm install <nama-package> --save-dev (atau -D)",
      "B": "npm install <nama-package> --prod",
      "C": "npm get <nama-package>",
      "D": "npm download-dev <nama-package>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Flag --save-dev (-D) memisahkan paket yang hanya dibutuhkan saat development (seperti TypeScript, Vite, atau ESLint) dari runtime production dependencies.",
      "A": "Opsi A benar karena flag -D mencatat ke devDependencies.",
      "B": "Opsi B salah karena --prod mengabaikan devDependencies saat instalasi produksi.",
      "C": "Opsi C salah karena 'npm get' untuk membaca konfigurasi npm config.",
      "D": "Opsi D salah karena bukan perintah npm yang valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-050",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Apa output dari perintah 'node -v' di terminal command line?",
    "options": {
      "A": "Menampilkan versi runtime Node.js yang sedang terinstal di sistem",
      "B": "Membuat proyek Node.js baru",
      "C": "Menghapus Node.js dari komputer",
      "D": "Menjalankan file index.js"
    },
    "answer": "A",
    "explanation": {
      "correct": "Flag -v (atau --version) adalah perintah diagnostik CLI standar untuk mengecek nomor versi Node.js yang aktif.",
      "A": "Opsi A benar karena menampilkan string versi Node.js.",
      "B": "Opsi B salah karena membuat proyek baru menggunakan npm init.",
      "C": "Opsi C salah karena uninstal dilakukan melalui package manager OS.",
      "D": "Opsi D salah karena menjalankan file menggunakan 'node <nama-file>'."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-051",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Framework backend modern Python apakah yang dirancang untuk performa tinggi berbasis Starlette dan Pydantic serta otomatis menghasilkan dokumentasi Swagger / OpenAPI?",
    "options": {
      "A": "FastAPI",
      "B": "Flask",
      "C": "Tornado",
      "D": "Bottle"
    },
    "answer": "A",
    "explanation": {
      "correct": "FastAPI memanfaatkan type hints standar Python untuk validasi data otomatis via Pydantic dan menghasilkan interactive API docs (/docs) secara bawaan.",
      "A": "Opsi A benar karena FastAPI adalah framework async modern dengan otomatisasi OpenAPI.",
      "B": "Opsi B salah karena Flask tidak memiliki validasi Pydantic atau auto-Swagger bawaan tanpa ekstensi eksternal.",
      "C": "Opsi C salah karena Tornado adalah web framework async lama.",
      "D": "Opsi D salah karena Bottle adalah micro-framework minimalis satu file."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-052",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam FastAPI, kelas pustaka apakah yang digunakan untuk mendefinisikan skema data validasi DTO (Data Transfer Object) request dan response?",
    "options": {
      "A": "pydantic.BaseModel",
      "B": "django.db.models.Model",
      "C": "dataclasses.dataclass",
      "D": "marshmallow.Schema"
    },
    "answer": "A",
    "explanation": {
      "correct": "FastAPI mengandalkan Pydantic BaseModel untuk memvalidasi tipe data JSON payload dan mengonversi otomatis ke objek Python yang strongly-typed.",
      "A": "Opsi A benar karena Pydantic BaseModel adalah basis deklarasi skema FastAPI.",
      "B": "Opsi B salah karena django.db.models.Model adalah ORM Django untuk tabel database.",
      "C": "Opsi C salah karena dataclass bawaan Python tidak memiliki fitur parsing dan validasi error otomatis selengkap Pydantic.",
      "D": "Opsi D salah karena Marshmallow adalah library serialisasi independen lama."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-053",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Bagaimana cara mendefinisikan endpoint GET pada aplikasi FastAPI?",
    "options": {
      "A": "@app.get(\"/api/v1/layers\")",
      "B": "@app.route(\"/api/v1/layers\", method=\"GET\")",
      "C": "@app.endpoint(GET=\"/api/v1/layers\")",
      "D": "@router.create(\"/api/v1/layers\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "FastAPI menggunakan decorator dekoratif berbasis HTTP method langsung seperti @app.get(), @app.post(), @app.put(), dan @app.delete().",
      "A": "Opsi A benar karena @app.get() adalah sintaks resmi FastAPI.",
      "B": "Opsi B salah karena itu sintaks decorator milik Flask.",
      "C": "Opsi C salah karena bukan sintaks FastAPI.",
      "D": "Opsi D salah karena bukan method FastAPI APIRouter."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-054",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka Python populer apakah yang memperluas kemampuan Pandas DataFrame untuk menangani data geospasial dan operasi geometri vektor?",
    "options": {
      "A": "GeoPandas",
      "B": "NumPy",
      "C": "SciPy",
      "D": "Matplotlib"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoPandas menyediakan struktur data GeoDataFrame yang memiliki kolom khusus 'geometry' untuk membaca, memanipulasi, dan memproyeksikan fitur spasial vektor.",
      "A": "Opsi A benar karena GeoPandas adalah library manipulasi tabel spasial utama di Python.",
      "B": "Opsi B salah karena NumPy untuk komputasi array numerik multidimensi murni.",
      "C": "Opsi C salah karena SciPy untuk algoritma komputasi ilmiah.",
      "D": "Opsi D salah karena Matplotlib adalah library visualisasi grafik 2D."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-055",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka Python apakah yang menjadi standar untuk memanipulasi geometri spasial 2D (seperti membuat titik, buffer poligon, dan intersection) berbasis library GEOS?",
    "options": {
      "A": "Shapely",
      "B": "Requests",
      "C": "Pillow",
      "D": "BeautifulSoup"
    },
    "answer": "A",
    "explanation": {
      "correct": "Shapely membungkus pustaka C++ GEOS untuk manipulasi dan analisis geometri geometris planar (Point, LineString, Polygon).",
      "A": "Opsi A benar karena Shapely adalah library dasar analisis geometri vektor di Python.",
      "B": "Opsi B salah karena Requests adalah HTTP client library.",
      "C": "Opsi C salah karena Pillow untuk pengolahan gambar bitmap biasa.",
      "D": "Opsi D salah karena BeautifulSoup untuk web scraping HTML."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-056",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka Python apakah yang menjadi standar industri untuk membaca, menulis, dan memanipulasi data citra satelit dan grid Raster (GeoTIFF)?",
    "options": {
      "A": "Rasterio",
      "B": "Fiona",
      "C": "PyPDF2",
      "D": "Flask-RESTful"
    },
    "answer": "A",
    "explanation": {
      "correct": "Rasterio membungkus pustaka GDAL dalam antarmuka idiomatik Python untuk membaca metadata georeferensi, koordinat piksel, dan band citra raster.",
      "A": "Opsi A benar karena Rasterio adalah library Python utama untuk pemrosesan raster satelit.",
      "B": "Opsi B salah karena Fiona dikhususkan untuk membaca/menulis data vektor spasial (Shapefile, GeoJSON).",
      "C": "Opsi C salah karena PyPDF2 untuk manipulasi dokumen PDF.",
      "D": "Opsi D salah karena Flask-RESTful adalah ekstensi API untuk Flask."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-057",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Modul bawaan resmi Django apakah yang menyediakan fitur pemetaan spasial dan dukungan PostGIS di level ORM?",
    "options": {
      "A": "django.contrib.gis (GeoDjango)",
      "B": "django.contrib.admin",
      "C": "django.contrib.auth",
      "D": "django.contrib.sessions"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoDjango (django.contrib.gis) adalah ekstensi bawaan kelas dunia di Django yang menambahkan field spasial (PointField, PolygonField) dan fungsi spasial database.",
      "A": "Opsi A benar karena GeoDjango adalah modul spasial resmi Django.",
      "B": "Opsi B salah karena admin untuk antarmuka manajemen data internal.",
      "C": "Opsi C salah karena auth untuk otentikasi user dasar.",
      "D": "Opsi D salah karena sessions untuk manajemen sesi HTTP."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-058",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Web server ASGI (Asynchronous Server Gateway Interface) berkecepatan tinggi apakah yang lazim digunakan untuk menjalankan aplikasi FastAPI di lingkungan produksi?",
    "options": {
      "A": "Uvicorn",
      "B": "Gunicorn murni tanpa worker class",
      "C": "Apache mod_php",
      "D": "Tomcat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Uvicorn adalah implementasi web server ASGI berbasis uvloop dan httptools yang mampu mengeksekusi asynchronous I/O Python dengan kecepatan sangat tinggi.",
      "A": "Opsi A benar karena Uvicorn adalah server ASGI standar untuk FastAPI.",
      "B": "Opsi B salah karena Gunicorn murni berbasis WSGI sinkron (harus dipasangkan dengan worker class uvicorn.workers.UvicornWorker).",
      "C": "Opsi C salah karena mod_php khusus untuk bahasa PHP di server Apache.",
      "D": "Opsi D salah karena Tomcat adalah servlet container untuk aplikasi Java."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-059",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Perintah pip apakah yang digunakan untuk menyimpan seluruh daftar dependensi library Python proyek ke dalam file teks?",
    "options": {
      "A": "pip freeze > requirements.txt",
      "B": "pip save -all",
      "C": "pip export packages.json",
      "D": "pip lock"
    },
    "answer": "A",
    "explanation": {
      "correct": "'pip freeze' mencetak semua paket yang terinstal beserta versinya secara presisi, yang dialihkan ke file requirements.txt untuk reproduktibilitas lingkungan.",
      "A": "Opsi A benar karena merupakan perintah resmi freeze dependensi pip.",
      "B": "Opsi B salah karena bukan opsi perintah pip.",
      "C": "Opsi C salah karena bukan sintaks pip standar.",
      "D": "Opsi D salah karena pip lock bukan perintah pip bawaan (itu milik pipenv)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-060",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam Django REST Framework (DRF), komponen apakah yang bertugas mengonversi objek model database kompleks menjadi format JSON dan sebaliknya?",
    "options": {
      "A": "Serializer",
      "B": "Viewset",
      "C": "Router",
      "D": "Middleware"
    },
    "answer": "A",
    "explanation": {
      "correct": "Serializer di DRF menangani serialisasi data model ke tipe data Python/JSON serta memvalidasi data masukan sebelum disimpan kembali ke database.",
      "A": "Opsi A benar karena Serializer mengontrol serialisasi dan validasi data DRF.",
      "B": "Opsi B salah karena Viewset mengontrol logika penanganan HTTP request dan action.",
      "C": "Opsi C salah karena Router secara otomatis mengonfigurasi pola URL untuk Viewset.",
      "D": "Opsi D salah karena Middleware adalah pemrosesan request/response global."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-061",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Tipe database apakah PostgreSQL dan MySQL?",
    "options": {
      "A": "RDBMS (Relational Database Management System)",
      "B": "Graph Database",
      "C": "Key-Value Store murni",
      "D": "Document Database murni"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostgreSQL dan MySQL adalah sistem manajemen basis data relasional yang menyimpan data dalam tabel dengan baris dan kolom yang terikat oleh relasi skema.",
      "A": "Opsi A benar karena keduanya adalah RDBMS terkemuka di dunia.",
      "B": "Opsi B salah karena Graph Database (seperti Neo4j) berpusat pada node dan relasi graf.",
      "C": "Opsi C salah karena Key-Value Store (seperti Redis) menyimpan pasangan kunci-nilai sederhana.",
      "D": "Opsi D salah karena Document Database (seperti MongoDB) menyimpan dokumen JSON/BSON tanpa skema kaku."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-062",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Tipe data khusus apakah di PostgreSQL yang sangat efisien untuk menyimpan dan mengindeks dokumen semi-terstruktur JSON biner (seperti properti atribut GeoJSON)?",
    "options": {
      "A": "JSONB",
      "B": "TEXT",
      "C": "VARCHAR(255)",
      "D": "BLOB"
    },
    "answer": "A",
    "explanation": {
      "correct": "JSONB menyimpan data JSON dalam format biner terurai yang mendukung operasi kueri mendalam dan pengindeksan GIN (Generalized Inverted Index) berkecepatan tinggi.",
      "A": "Opsi A benar karena JSONB adalah tipe data dokumen biner berperforma tinggi di PostgreSQL.",
      "B": "Opsi B salah karena TEXT menyimpan string teks biasa yang harus di-parse ulang setiap kali kueri.",
      "C": "Opsi C salah karena VARCHAR terbatas panjang karakter dan tidak memiliki operator JSON.",
      "D": "Opsi D salah karena BLOB untuk data biner mentah tanpa pemahaman struktur JSON."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-063",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Perintah SQL apakah yang digunakan untuk membuat database baru?",
    "options": {
      "A": "CREATE DATABASE nama_db;",
      "B": "MAKE DATABASE nama_db;",
      "C": "NEW DATABASE nama_db;",
      "D": "INIT DATABASE nama_db;"
    },
    "answer": "A",
    "explanation": {
      "correct": "CREATE DATABASE adalah sintaks DDL standar ANSI SQL untuk menginisialisasi database baru.",
      "A": "Opsi A benar karena CREATE DATABASE adalah perintah resmi SQL.",
      "B": "Opsi B salah karena bukan perintah SQL.",
      "C": "Opsi C salah karena bukan perintah SQL.",
      "D": "Opsi D salah karena bukan perintah SQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-064",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Perintah SQL apakah yang digunakan untuk menghapus tabel secara permanen beserta seluruh skema dan datanya?",
    "options": {
      "A": "DROP TABLE nama_tabel;",
      "B": "DELETE TABLE nama_tabel;",
      "C": "REMOVE TABLE nama_tabel;",
      "D": "CLEAR TABLE nama_tabel;"
    },
    "answer": "A",
    "explanation": {
      "correct": "DROP TABLE adalah perintah DDL untuk membuang tabel dari skema database secara permanen.",
      "A": "Opsi A benar karena DROP TABLE menghapus objek tabel seutuhnya.",
      "B": "Opsi B salah karena DELETE hanya menghapus baris data (DML), bukan struktur tabel.",
      "C": "Opsi C salah karena REMOVE bukan perintah SQL.",
      "D": "Opsi D salah karena CLEAR bukan perintah SQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-065",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Apa fungsi dari perintah SQL 'TRUNCATE TABLE nama_tabel;' dibandingkan 'DELETE FROM nama_tabel;'?",
    "options": {
      "A": "TRUNCATE mengosongkan seluruh isi tabel dengan sangat cepat melalui deallokasi halaman data tanpa memindai baris satu per satu (operasi DDL), sedangkan DELETE menghapus baris demi baris (DML)",
      "B": "TRUNCATE menghapus struktur tabel dan kolomnya",
      "C": "TRUNCATE hanya menghapus 1 baris pertama",
      "D": "Keduanya memiliki kecepatan yang persis sama"
    },
    "answer": "A",
    "explanation": {
      "correct": "TRUNCATE adalah operasi DDL yang me-reset tabel dan counter auto-increment tanpa mencatat penghapusan setiap baris ke rollback log transaksi secara individual, menjadikannya jauh lebih cepat untuk pengosongan data massal.",
      "A": "Opsi A benar karena membedakan efisiensi deallokasi halaman vs pemindaian baris bertransaksi.",
      "B": "Opsi B salah karena struktur skema tabel tetap utuh.",
      "C": "Opsi C salah karena TRUNCATE mengosongkan semua baris data tabel.",
      "D": "Opsi D salah karena TRUNCATE jauh lebih cepat daripada DELETE tanpa WHERE."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-066",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Klausa SQL manakah yang digunakan untuk membatasi jumlah baris hasil query yang dikembalikan oleh server database (misal hanya 10 data pertama)?",
    "options": {
      "A": "LIMIT",
      "B": "MAX",
      "C": "TOP (hanya di PostgreSQL)",
      "D": "RESTRICT"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa LIMIT (misal: SELECT * FROM points LIMIT 10) digunakan di PostgreSQL dan MySQL untuk membatasi jumlah record yang dikembalikan.",
      "A": "Opsi A benar karena LIMIT adalah klausa pembatasan baris standar di PostgreSQL/MySQL.",
      "B": "Opsi B salah karena MAX adalah fungsi agregat untuk mencari nilai tertinggi.",
      "C": "Opsi C salah karena TOP adalah dialek Microsoft SQL Server, bukan PostgreSQL.",
      "D": "Opsi D salah karena RESTRICT adalah opsi pada foreign key cascade."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-067",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Apa fungsi dari batasan 'NOT NULL' pada definisi kolom tabel database?",
    "options": {
      "A": "Memastikan bahwa kolom tersebut tidak boleh bernilai kosong (NULL) saat proses insert atau update data",
      "B": "Membuat nilai kolom otomatis bernilai nol (0)",
      "C": "Menjadikan kolom sebagai primary key otomatis",
      "D": "Mengizinkan semua jenis karakter"
    },
    "answer": "A",
    "explanation": {
      "correct": "NOT NULL constraint mencegah penyimpanan nilai yang tidak terdefinisi (missing/null values) untuk menjamin kelengkapan data kolom.",
      "A": "Opsi A benar karena menjamin integritas kehadiran data pada kolom.",
      "B": "Opsi B salah karena nilai default harus ditentukan eksplisit dengan DEFAULT 0 jika ingin nol.",
      "C": "Opsi C salah karena primary key membutuhkan kombinasi NOT NULL dan UNIQUE.",
      "D": "Opsi D salah karena tipe data kolom yang membatasi karakter, bukan constraint NOT NULL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-068",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Fungsi agregat SQL manakah yang digunakan untuk menghitung jumlah total baris rekaman data yang memenuhi kriteria query?",
    "options": {
      "A": "COUNT()",
      "B": "SUM()",
      "C": "TOTAL()",
      "D": "NUMBER()"
    },
    "answer": "A",
    "explanation": {
      "correct": "COUNT(*) menghitung jumlah seluruh baris data yang dihasilkan oleh kueri.",
      "A": "Opsi A benar karena COUNT adalah fungsi agregat penghitung baris standar SQL.",
      "B": "Opsi B salah karena SUM menjumlahkan nilai numerik dari kolom.",
      "C": "Opsi C salah karena TOTAL bukan fungsi agregat standar SQL (kecuali di SQLite).",
      "D": "Opsi D salah karena NUMBER bukan fungsi SQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-069",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Klausa SQL manakah yang digunakan untuk mengurutkan hasil query dari nilai terbesar ke terkecil (menurun)?",
    "options": {
      "A": "ORDER BY kolom DESC",
      "B": "ORDER BY kolom ASC",
      "C": "SORT DOWN",
      "D": "GROUP BY kolom DESC"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa ORDER BY dengan keyword DESC (descending) mengurutkan data dari besar ke kecil (Z ke A, atau angka tinggi ke rendah).",
      "A": "Opsi A benar karena ORDER BY DESC mengurutkan secara menurun.",
      "B": "Opsi B salah karena ASC mengurutkan secara menaik (ascending).",
      "C": "Opsi C salah karena bukan sintaks SQL yang valid.",
      "D": "Opsi D salah karena GROUP BY untuk agregasi pengelompokan baris."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-070",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Dalam database PostgreSQL, utilitas GUI desktop resmi apakah yang paling populer digunakan untuk mengelola basis data dan query SQL?",
    "options": {
      "A": "pgAdmin (atau DBeaver)",
      "B": "MySQL Workbench",
      "C": "phpMyAdmin",
      "D": "SQL Server Management Studio"
    },
    "answer": "A",
    "explanation": {
      "correct": "pgAdmin adalah platform administrasi dan pengembangan GUI open-source resmi dan paling umum digunakan untuk PostgreSQL.",
      "A": "Opsi A benar karena pgAdmin adalah tool GUI standar PostgreSQL.",
      "B": "Opsi B salah karena MySQL Workbench dikhususkan untuk MySQL.",
      "C": "Opsi C salah karena phpMyAdmin adalah tool berbasis web untuk MySQL/MariaDB.",
      "D": "Opsi D salah karena SSMS dikhususkan untuk Microsoft SQL Server."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-071",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Port jaringan TCP default apakah yang digunakan oleh database server PostgreSQL?",
    "options": {
      "A": "5432",
      "B": "3306",
      "C": "27017",
      "D": "6379"
    },
    "answer": "A",
    "explanation": {
      "correct": "Port default resmi untuk PostgreSQL adalah 5432.",
      "A": "Opsi A benar karena port 5432 adalah default PostgreSQL.",
      "B": "Opsi B salah karena 3306 adalah port default MySQL.",
      "C": "Opsi C salah karena 27017 adalah port default MongoDB.",
      "D": "Opsi D salah karena 6379 adalah port default Redis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-072",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Perintah CLI apakah yang digunakan untuk masuk ke console interaktif database PostgreSQL di terminal?",
    "options": {
      "A": "psql -U username -d database_name",
      "B": "mysql -u username",
      "C": "mongo",
      "D": "redis-cli"
    },
    "answer": "A",
    "explanation": {
      "correct": "psql adalah front-end terminal interaktif berbasis teks resmi untuk PostgreSQL.",
      "A": "Opsi A benar karena psql adalah command line client PostgreSQL.",
      "B": "Opsi B salah karena mysql adalah client command line MySQL.",
      "C": "Opsi C salah karena mongo adalah client shell lama MongoDB.",
      "D": "Opsi D salah karena redis-cli adalah client Redis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-073",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam FastAPI, bagaimana cara mendefinisikan parameter query yang bersifat opsional (contoh: parameter batas pencarian radius)?",
    "options": {
      "A": "def get_layers(radius: Optional[float] = None):",
      "B": "def get_layers(radius: required):",
      "C": "def get_layers(@Query radius):",
      "D": "def get_layers(float radius):"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di FastAPI, memberikan nilai default None (atau menggunakan Optional[T] = None) otomatis menandai parameter tersebut sebagai optional query parameter di URL.",
      "A": "Opsi A benar karena sintaks type hint dan default value None membuat parameter opsional.",
      "B": "Opsi B salah karena bukan tipe data Python yang valid.",
      "C": "Opsi C salah karena @Query bukan sintaks parameter Python.",
      "D": "Opsi D salah karena Python menggunakan type annotations setelah nama parameter (name: type)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-074",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Apa fungsi dari file '__init__.py' di dalam sebuah folder pada proyek Python?",
    "options": {
      "A": "Menandai direktori tersebut sebagai package Python sehingga modul di dalamnya dapat diimpor oleh file lain",
      "B": "Menghapus seluruh file temporary",
      "C": "Mengompilasi program ke bahasa C",
      "D": "Menjalankan server web secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Keberadaan file __init__.py menginstruksikan Python interpreter untuk memperlakukan direktori tersebut sebagai modul/package yang dapat diimpor (misal: from app.services import gis_service).",
      "A": "Opsi A benar karena __init__.py menandai package namespace di Python.",
      "B": "Opsi B salah karena bukan script pembersih temporary.",
      "C": "Opsi C salah karena bukan compiler C (Cython).",
      "D": "Opsi D salah karena bukan daemon startup server."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-075",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Perintah SQL apakah yang digunakan untuk menambahkan kolom baru ke dalam tabel yang sudah ada?",
    "options": {
      "A": "ALTER TABLE nama_tabel ADD COLUMN nama_kolom tipe_data;",
      "B": "UPDATE TABLE nama_tabel INSERT COLUMN ...",
      "C": "MODIFY TABLE nama_tabel NEW ...",
      "D": "CHANGE TABLE nama_tabel ADD ..."
    },
    "answer": "A",
    "explanation": {
      "correct": "ALTER TABLE ... ADD COLUMN adalah perintah DDL terstandar SQL untuk memodifikasi skema tabel dengan menambahkan kolom baru.",
      "A": "Opsi A benar karena merupakan sintaks baku DDL penambahan kolom.",
      "B": "Opsi B salah karena UPDATE adalah operasi DML manipulasi data baris.",
      "C": "Opsi C salah karena bukan perintah SQL standar.",
      "D": "Opsi D salah karena bukan sintaks penambahan kolom."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-076",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Perintah SQL apakah yang digunakan untuk mengaktifkan ekstensi spasial PostGIS di database PostgreSQL?",
    "options": {
      "A": "CREATE EXTENSION postgis;",
      "B": "INSTALL postgis;",
      "C": "ENABLE postgis;",
      "D": "LOAD MODULE postgis;"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostGIS adalah ekstensi PostgreSQL yang diaktifkan di dalam database target menggunakan perintah standar 'CREATE EXTENSION postgis;'.",
      "A": "Opsi A benar karena merupakan perintah SQL resmi aktivasi ekstensi PostGIS.",
      "B": "Opsi B salah karena INSTALL bukan perintah SQL PostgreSQL.",
      "C": "Opsi C salah karena ENABLE bukan perintah aktivasi ekstensi.",
      "D": "Opsi D salah karena LOAD MODULE bukan perintah standar SQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-077",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk mengonversi data geometri spasial menjadi format string teks JSON standar GeoJSON?",
    "options": {
      "A": "ST_AsGeoJSON(geom)",
      "B": "ST_ToJSON(geom)",
      "C": "ST_ExportJSON(geom)",
      "D": "ST_GeoJSONFormat(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_AsGeoJSON() mengembalikan representasi geometri dalam format string GeoJSON (sesuai spesifikasi RFC 7946) yang siap dikirim langsung ke frontend peta web.",
      "A": "Opsi A benar karena ST_AsGeoJSON adalah fungsi standar PostGIS untuk output GeoJSON.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-078",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk membuat objek geometri titik (Point) 2D dari koordinat bujur (longitude/X) dan lintang (latitude/Y)?",
    "options": {
      "A": "ST_Point(longitude, latitude) atau ST_MakePoint(longitude, latitude)",
      "B": "ST_CreatePoint(latitude, longitude)",
      "C": "ST_NewPoint(lat, long)",
      "D": "ST_BuildPoint(Y, X)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dalam GIS dan PostGIS, urutan koordinat adalah X (Longitude/Bujur timur-barat) lalu Y (Latitude/Lintang utara-selatan): ST_MakePoint(X, Y).",
      "A": "Opsi A benar karena ST_Point/ST_MakePoint menerima parameter (X/Longitude, Y/Latitude).",
      "B": "Opsi B salah karena urutannya terbalik (GIS menggunakan X, Y).",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-079",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk menetapkan kode SRID (Spatial Reference System Identifier, misal 4326 untuk WGS84) pada sebuah geometri tanpa mengubah koordinat fisiknya?",
    "options": {
      "A": "ST_SetSRID(geom, 4326)",
      "B": "ST_Transform(geom, 4326)",
      "C": "ST_AssignCRS(geom, 4326)",
      "D": "ST_ChangeSRID(geom, 4326)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_SetSRID menetapkan metadata SRID pada geometri (tagging) tanpa melakukan perhitungan proyeksi matematis koordinat.",
      "A": "Opsi A benar karena ST_SetSRID mengatur metadata SRID tanpa proyeksi.",
      "B": "Opsi B salah karena ST_Transform secara aktif menghitung ulang transformasi koordinat ke sistem proyeksi baru.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-080",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk mengubah (reproject) koordinat geometri dari satu sistem proyeksi ke sistem proyeksi lain (misal dari EPSG:4326 ke EPSG:3857)?",
    "options": {
      "A": "ST_Transform(geom, 3857)",
      "B": "ST_SetSRID(geom, 3857)",
      "C": "ST_Reproject(geom, 3857)",
      "D": "ST_Convert(geom, 3857)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Transform memanfaatkan library PROJ untuk menghitung transformasi koordinat geometris antar Coordinate Reference Systems.",
      "A": "Opsi A benar karena ST_Transform adalah fungsi transformasi koordinat resmi PostGIS.",
      "B": "Opsi B salah karena ST_SetSRID hanya mengubah metadata label SRID tanpa mengubah angka koordinat.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-081",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Tipe indeks apakah di PostgreSQL yang digunakan untuk mengindeks kolom geometri spasial PostGIS berbasis struktur R-Tree seimbang?",
    "options": {
      "A": "GIST (Generalized Search Tree)",
      "B": "B-Tree biasa",
      "C": "HASH",
      "D": "BRIN saja"
    },
    "answer": "A",
    "explanation": {
      "correct": "Indeks GiST (CREATE INDEX idx_geom ON layers USING GIST (geom);) membuat pohon hierarki bounding box (R-Tree) yang esensial untuk kueri spasial berkecepatan tinggi.",
      "A": "Opsi A benar karena GiST adalah jenis indeks wajib untuk kolom spasial PostGIS.",
      "B": "Opsi B salah karena B-Tree hanya dapat mengurutkan data 1 dimensi secara linear, tidak cocok untuk geometri 2D/3D.",
      "C": "Opsi C salah karena HASH hanya mendukung pencocokan kesetaraan eksak (=), bukan relasi spasial overlap/intersect.",
      "D": "Opsi D salah karena BRIN hanya untuk data berurutan fisik di disk."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-082",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Format teks standar apakah yang digunakan untuk merepresentasikan bentuk geometri dalam string seperti 'POINT(106.8 -6.2)' atau 'LINESTRING(...) '?",
    "options": {
      "A": "WKT (Well-Known Text)",
      "B": "WKB (Well-Known Binary)",
      "C": "KML",
      "D": "Shapefile Text"
    },
    "answer": "A",
    "explanation": {
      "correct": "Well-Known Text (WKT) adalah standar OGC yang merepresentasikan geometri vektor dalam format teks ASCII yang dapat dibaca manusia.",
      "A": "Opsi A benar karena WKT adalah format teks representasi geometri standar OGC.",
      "B": "Opsi B salah karena WKB adalah representasi biner terkompresi (heksadesimal/byte).",
      "C": "Opsi C salah karena KML adalah format XML buatan Google Earth.",
      "D": "Opsi D salah karena Shapefile adalah format biner multi-file dari ESRI."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-083",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang mengembalikan nilai luas area dari sebuah poligon (Polygon atau MultiPolygon)?",
    "options": {
      "A": "ST_Area(geom)",
      "B": "ST_Surface(geom)",
      "C": "ST_Square(geom)",
      "D": "ST_Size(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Area(geom) menghitung luas permukaan geometri. Jika tipe data adalah geography atau geometri terproyeksi planar (seperti UTM), hasilnya dalam satuan meter persegi.",
      "A": "Opsi A benar karena ST_Area adalah fungsi kalkulasi luas resmi PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-084",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk membuat zona penyangga (buffer zone) di sekitar geometri dengan jarak radius tertentu?",
    "options": {
      "A": "ST_Buffer(geom, radius)",
      "B": "ST_Expand(geom, radius)",
      "C": "ST_Radius(geom, radius)",
      "D": "ST_Zone(geom, radius)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Buffer menghasilkan poligon baru yang mencakup seluruh titik yang berada dalam jarak tertentu dari geometri input.",
      "A": "Opsi A benar karena ST_Buffer adalah fungsi pembuatan zona penyangga spasial standar.",
      "B": "Opsi B salah karena ST_Expand hanya memperbesar Bounding Box persegi (box2d), bukan bentuk buffer radial kurva.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-085",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi predikat spasial PostGIS apakah yang mengembalikan boolean TRUE jika dua geometri saling bersentuhan atau beririsan (memiliki minimal satu titik ruang bersama)?",
    "options": {
      "A": "ST_Intersects(geomA, geomB)",
      "B": "ST_Disjoint(geomA, geomB)",
      "C": "ST_Parallel(geomA, geomB)",
      "D": "ST_Far(geomA, geomB)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Intersects adalah predikat spasial paling fundamental di PostGIS yang mengevaluasi apakah dua geometri berbagi ruang spasial bersama.",
      "A": "Opsi A benar karena ST_Intersects memeriksa irisan spasial.",
      "B": "Opsi B salah karena ST_Disjoint adalah kebalikan mutlak dari ST_Intersects (true jika sama sekali tidak bersentuhan).",
      "C": "Opsi C salah karena bukan predikat topologi standar OGC.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-086",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Apa perbedaan paling mendasar antara model data Vektor dan model data Raster dalam Sistem Informasi Geografis (GIS)?",
    "options": {
      "A": "Vektor merepresentasikan fitur diskrit menggunakan titik (Point), garis (LineString), dan poligon (Polygon), sedangkan Raster merepresentasikan data kontinu menggunakan kisi-kisi piksel/grid (seperti citra satelit atau DEM)",
      "B": "Vektor hanya untuk 3D sedangkan Raster khusus untuk 2D",
      "C": "Vektor selalu berupa file foto JPEG sedangkan Raster berupa teks",
      "D": "Raster tidak memiliki georeferensi koordinat bumi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Data vektor berbasis koordinat titik geometris presisi (fitur diskrit seperti jalan, batas kota), sedangkan data raster berbasis matriks sel piksel bernilai (fitur kontinu seperti elevasi ketinggian tanah atau suhu permukaan bumi).",
      "A": "Opsi A benar karena mendefinisikan perbedaan arsitektur data vektor dan raster secara komprehensif.",
      "B": "Opsi B salah karena keduanya mendukung representasi 2D dan 3D.",
      "C": "Opsi C salah karena raster yang berbasis citra foto piksel, bukan vektor.",
      "D": "Opsi D salah karena raster geospasial wajib memiliki georeferensi (spatial extent dan CRS)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-087",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Kode EPSG berapakah yang mewakili Geographic Coordinate System WGS84 standar global (lintang/bujur dalam satuan derajat desimal) yang digunakan oleh sistem GPS dunia?",
    "options": {
      "A": "EPSG:4326",
      "B": "EPSG:3857",
      "C": "EPSG:900913",
      "D": "EPSG:23830"
    },
    "answer": "A",
    "explanation": {
      "correct": "EPSG:4326 mengidentifikasi sistem koordinat geografis ellipsoid WGS84 dengan satuan derajat desimal (latitude dari -90 ke +90, longitude dari -180 ke +180).",
      "A": "Opsi A benar karena EPSG:4326 adalah kode standar WGS84 derajat.",
      "B": "Opsi B salah karena EPSG:3857 adalah Web Mercator projected coordinate system dalam satuan meter.",
      "C": "Opsi C salah karena EPSG:900913 adalah kode lama informal untuk Web Mercator.",
      "D": "Opsi D salah karena EPSG:23830 adalah salah satu proyeksi lokal UTM."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-088",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Kode EPSG berapakah yang digunakan oleh peta ubin online (Web Mercator) seperti Google Maps, OpenStreetMap, dan Mapbox dalam satuan meter planar?",
    "options": {
      "A": "EPSG:3857",
      "B": "EPSG:4326",
      "C": "EPSG:4269",
      "D": "EPSG:2000"
    },
    "answer": "A",
    "explanation": {
      "correct": "EPSG:3857 (Spherical Mercator / Web Mercator) adalah proyeksi peta standar industri web mapping di mana bumi diproyeksikan ke bidang datar bujur sangkar dengan koordinat dalam satuan meter.",
      "A": "Opsi A benar karena EPSG:3857 adalah standar Web Mercator untuk ubin peta internet.",
      "B": "Opsi B salah karena EPSG:4326 menggunakan satuan derajat (geographic), bukan meter Web Mercator.",
      "C": "Opsi C salah karena EPSG:4269 adalah NAD83 sistem koordinat Amerika Utara.",
      "D": "Opsi D salah karena bukan kode Web Mercator."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-089",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Mengapa proyeksi peta Web Mercator (EPSG:3857) mengalami distorsi luas yang sangat ekstrem di wilayah kutub (seperti Greenland yang tampak sebesar benua Afrika)?",
    "options": {
      "A": "Karena proyeksi Mercator mempertahankan bentuk sudut lokal (conformal projection) dengan merenggangkan skala jarak secara eksponensial ke arah kutub utara dan selatan",
      "B": "Karena satelit luar angkasa tidak dapat memotret kutub",
      "C": "Karena bumi berbentuk kubus",
      "D": "Karena ada bug pada algoritma browser web"
    },
    "answer": "A",
    "explanation": {
      "correct": "Proyeksi Mercator adalah proyeksi konformal silinder: sudut dan bentuk lokal dipertahankan agar navigasi arah kompas akurat, namun konsekuensinya luas area mengalami distorsi perbesaran ekstrem seiring mendekati kutub (garis kutub menjadi tak terhingga).",
      "A": "Opsi A benar karena menjelaskan sifat matematis konformalitas silinder Mercator.",
      "B": "Opsi B salah karena satelit orbit polar melintasi dan memotret kutub secara rutin.",
      "C": "Opsi C salah karena bentuk bumi adalah geoid/oblate spheroid.",
      "D": "Opsi D salah karena distorsi ini adalah sifat matematis proyeksi geometris murni."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-090",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Dalam sistem data spasial, apakah yang dimaksud dengan 'Bounding Box' (BBOX)?",
    "options": {
      "A": "Kotak persegi panjang minimum (didefinisikan oleh minX, minY, maxX, maxY) yang membungkus seluruh luasan suatu geometri spasial atau viewport peta",
      "B": "Kotak pos surat di kantor pemetaan",
      "C": "Wadah hardware server database",
      "D": "Format file kompresi gambar"
    },
    "answer": "A",
    "explanation": {
      "correct": "Bounding Box (atau Minimum Bounding Rectangle / Envelope) menyederhanakan geometri poligon kompleks menjadi koordinat 4 batas ekstrem (kotak) untuk mempercepat perbandingan indeks spasial.",
      "A": "Opsi A benar karena mendefinisikan BBOX secara matematis dan grafis.",
      "B": "Opsi B salah karena bukan kotak fisik.",
      "C": "Opsi C salah karena bukan wadah hardware.",
      "D": "Opsi D salah karena bukan format kompresi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-091",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Format file spasial vektor open standar berbasis JSON (JavaScript Object Notation) yang distandarisasi oleh IETF RFC 7946 adalah:",
    "options": {
      "A": "GeoJSON",
      "B": "Shapefile",
      "C": "GeoTIFF",
      "D": "DWG"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoJSON adalah format pertukaran data geospasial berbasis teks JSON yang mendefinisikan Feature, FeatureCollection, serta tipe geometri (Point, LineString, Polygon, MultiPolygon).",
      "A": "Opsi A benar karena GeoJSON adalah format teks terbuka standar web RFC 7946.",
      "B": "Opsi B salah karena Shapefile adalah format biner proprietary lama ESRI multi-file (.shp, .shx, .dbf).",
      "C": "Opsi C salah karena GeoTIFF adalah format citra raster geospasial.",
      "D": "Opsi D salah karena DWG adalah format biner CAD Autodesk."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-092",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Dalam format GeoJSON, di dalam properti apakah informasi atribut non-spasial (seperti nama kota, populasi, provinsi) disimpan pada sebuah Feature?",
    "options": {
      "A": "\"properties\": { ... }",
      "B": "\"geometry\": { ... }",
      "C": "\"attributes\": { ... }",
      "D": "\"metadata\": { ... }"
    },
    "answer": "A",
    "explanation": {
      "correct": "Struktur objek GeoJSON Feature terdiri dari: type (\"Feature\"), geometry ({ type, coordinates }), dan properties (objek JSON yang menampung atribut nilai non-spasial).",
      "A": "Opsi A benar karena properti objek 'properties' adalah nama baku spesifikasi GeoJSON RFC 7946.",
      "B": "Opsi B salah karena 'geometry' menampung koordinat spasial.",
      "C": "Opsi C salah karena bukan nama properti resmi GeoJSON (itu konvensi ArcGIS REST API).",
      "D": "Opsi D salah karena bukan nama properti standar GeoJSON."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-093",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Kumpulan ekstensi file apakah yang membentuk satu paket lengkap format spasial ESRI Shapefile (.shp) agar dapat dibuka dengan benar di software GIS?",
    "options": {
      "A": ".shp (geometri), .shx (indeks bentuk), dan .dbf (tabel atribut dBASE)",
      "B": ".shp saja tanpa file lain",
      "C": ".shp dan .exe",
      "D": ".shp dan .html"
    },
    "answer": "A",
    "explanation": {
      "correct": "Satu dataset Shapefile minimal wajib memiliki 3 file terpisah dengan nama yang sama: .shp (menyimpan geometri fisik), .shx (indeks posisi geometri), dan .dbf (menyimpan tabel atribut rekaman data), ditambah .prj (informasi sistem koordinat).",
      "A": "Opsi A benar karena menyebutkan 3 file inti penyusun Shapefile.",
      "B": "Opsi B salah karena file .shp tunggal akan korup jika dibuka tanpa .shx dan .dbf.",
      "C": "Opsi C salah karena file eksekusi .exe bukan bagian dari format Shapefile.",
      "D": "Opsi D salah karena file HTML bukan bagian dari format Shapefile."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-094",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Apakah yang dimaksud dengan 'DEM' (Digital Elevation Model) dalam Remote Sensing dan GIS?",
    "options": {
      "A": "Representasi model raster 3D yang menyimpan nilai ketinggian elevasi permukaan bumi pada setiap sel pikselnya",
      "B": "Peta jaringan pipa gas bawah tanah",
      "C": "Katalog nama jalan perkotaan",
      "D": "Metode pembayaran digital untuk pembelian peta"
    },
    "answer": "A",
    "explanation": {
      "correct": "DEM adalah model raster di mana setiap piksel merepresentasikan nilai tinggi permukaan bumi di atas permukaan laut (Z-value), sangat penting untuk analisis kontur, kelerengan lereng, dan banjir.",
      "A": "Opsi A benar karena mendefinisikan Digital Elevation Model secara tepat.",
      "B": "Opsi B salah karena utilitas bawah tanah dimodelkan sebagai data vektor jaringan.",
      "C": "Opsi C salah karena katalog nama jalan adalah gazetteer vektor.",
      "D": "Opsi D salah karena bukan sistem pembayaran moneter."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-095",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Indeks vegetasi citra satelit paling populer apakah yang dihitung dari band Near-Infrared (NIR) dan Red dengan rumus: (NIR - Red) / (NIR + Red)?",
    "options": {
      "A": "NDVI (Normalized Difference Vegetation Index)",
      "B": "NDWI",
      "C": "EVI",
      "D": "SAVI"
    },
    "answer": "A",
    "explanation": {
      "correct": "NDVI mengukur kerapatan kehijauan vegetasi klorofil karena daun tanaman sehat memantulkan spektrum NIR sangat tinggi dan menyerap spektrum cahaya merah (Red).",
      "A": "Opsi A benar karena rumus (NIR - Red) / (NIR + Red) adalah rumus resmi NDVI.",
      "B": "Opsi B salah karena NDWI (Normalized Difference Water Index) menggunakan Green dan NIR untuk mendeteksi badan air.",
      "C": "Opsi C salah karena EVI (Enhanced Vegetation Index) memiliki faktor koefisien koreksi atmosfer tambahan.",
      "D": "Opsi D salah karena SAVI memiliki faktor penyesuaian latar belakang tanah (Soil-Adjusted)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-096",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Citra satelit optik penginderaan jauh bebas biaya (open access) apakah yang diluncurkan oleh European Space Agency (ESA) dengan resolusi spasial hingga 10 meter?",
    "options": {
      "A": "Sentinel-2",
      "B": "Landsat 1",
      "C": "QuickBird",
      "D": "WorldView-4"
    },
    "answer": "A",
    "explanation": {
      "correct": "Misi konstelasi Sentinel-2 (Sentinel-2A & 2B) dari program Copernicus Uni Eropa menyediakan citra multispektral gratis beresolusi 10m, 20m, dan 60m dengan revisit time 5 hari.",
      "A": "Opsi A benar karena Sentinel-2 adalah satelit optik open data resolusi 10m milik ESA.",
      "B": "Opsi B salah karena Landsat 1 adalah satelit tahun 1972 dengan resolusi rendah 80 meter.",
      "C": "Opsi C salah karena QuickBird adalah satelit komersial berbayar resolusi tinggi.",
      "D": "Opsi D salah karena WorldView-4 adalah satelit komersial resolusi sangat tinggi (31 cm)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-097",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Apakah perbedaan antara 'Resolusi Spasial' dan 'Resolusi Temporal' dalam penginderaan jauh satelit?",
    "options": {
      "A": "Resolusi Spasial mengacu pada ukuran area fisik bumi yang diwakili oleh satu sel piksel (misal 10m x 10m), sedangkan Resolusi Temporal mengacu pada frekuensi interval waktu satelit merekam area yang sama kembali (revisit time)",
      "B": "Resolusi Spasial mengukur waktu, sedangkan Temporal mengukur piksel",
      "C": "Resolusi Spasial hanya untuk citra radar, sedangkan Temporal untuk optik",
      "D": "Keduanya persis sama tanpa perbedaan istilah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Resolusi spasial menentukan detail ketajaman terkecil objek di permukaan bumi (lebar piksel). Resolusi temporal menentukan seberapa sering satelit kembali mengunjungi dan mengambil gambar di lokasi koordinat bumi yang sama.",
      "A": "Opsi A benar karena membedakan dimensi ketajaman ruang piksel vs interval waktu kunjungan ulang.",
      "B": "Opsi B salah karena membalik definisi spasial (ruang) dan temporal (waktu).",
      "C": "Opsi C salah karena kedua konsep berlaku untuk sensor optik maupun radar (SAR).",
      "D": "Opsi D salah karena merepresentasikan dua dimensi fisik pengukuran yang berbeda."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-098",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk menghitung jarak minimum terpendek antara dua geometri spasial?",
    "options": {
      "A": "ST_Distance(geomA, geomB)",
      "B": "ST_Length(geomA, geomB)",
      "C": "ST_Gap(geomA, geomB)",
      "D": "ST_Between(geomA, geomB)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Distance mengembalikan jarak euclidean 2D terkecil antara batas terluar geometri A dan geometri B.",
      "A": "Opsi A benar karena ST_Distance adalah fungsi resmi kalkulasi jarak minimum PostGIS.",
      "B": "Opsi B salah karena ST_Length mengukur panjang garis pada satu LineString tunggal.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-099",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Tipe geometri dasar OGC manakah yang merepresentasikan fitur garis yang menghubungkan dua titik atau lebih (seperti jalur sungai atau rel kereta api)?",
    "options": {
      "A": "LineString",
      "B": "Point",
      "C": "Polygon",
      "D": "MultiPoint"
    },
    "answer": "A",
    "explanation": {
      "correct": "LineString adalah kurva 1 dimensi yang dibentuk oleh serangkaian segmen garis lurus yang menghubungkan urutan titik koordinat berurutan.",
      "A": "Opsi A benar karena LineString merepresentasikan fitur linear kontinu.",
      "B": "Opsi B salah karena Point merepresentasikan koordinat titik tunggal 0 dimensi.",
      "C": "Opsi C salah karena Polygon merepresentasikan bidang area tertutup 2 dimensi.",
      "D": "Opsi D salah karena MultiPoint adalah kumpulan titik-titik diskrit terpisah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-100",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Software desktop GIS open-source paling populer di dunia yang sering digunakan analis untuk membuat, mengedit, dan memvisualisasikan layer peta spasial adalah:",
    "options": {
      "A": "QGIS",
      "B": "Photoshop",
      "C": "AutoCAD biasa",
      "D": "Blender"
    },
    "answer": "A",
    "explanation": {
      "correct": "QGIS (Quantum GIS) adalah aplikasi desktop GIS open source lintas platform terlengkap di dunia untuk analisis spasial, digitasi vektor, dan pengolahan citra satelit.",
      "A": "Opsi A benar karena QGIS adalah aplikasi desktop SIG open source nomor satu di dunia.",
      "B": "Opsi B salah karena Photoshop adalah editor foto raster artistik tanpa sistem koordinat georeferensi.",
      "C": "Opsi C salah karena AutoCAD biasa adalah software CAD teknik mesin/arsitektur tanpa CRS proyeksi geografis global bawaan.",
      "D": "Opsi D salah karena Blender adalah software pemodelan animasi 3D umum."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-101",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Bagaimana cara menginisialisasi peta baru pada elemen HTML ber-id 'map' dan mengatur titik pusat serta tingkat zoom awal di Leaflet.js?",
    "options": {
      "A": "const map = L.map('map').setView([-6.2, 106.8], 13);",
      "B": "const map = new Leaflet('map', { lat: -6.2, lng: 106.8 });",
      "C": "const map = document.createMap('map', 13);",
      "D": "const map = L.render('map').center(-6.2, 106.8);"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.map('map') membuat instance peta Leaflet yang diikat ke ID DOM 'map', dan .setView([lat, lng], zoom) menentukan koordinat fokus tengah dan perbesaran awal.",
      "A": "Opsi A benar karena merupakan sintaks resmi inisialisasi peta Leaflet.js.",
      "B": "Opsi B salah karena konstruktor Leaflet tidak dipanggil dengan new Leaflet.",
      "C": "Opsi C salah karena bukan method DOM standar.",
      "D": "Opsi D salah karena method L.render bukan API Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-102",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Template URL format apakah yang digunakan oleh L.tileLayer di Leaflet untuk memuat ubin peta ubin raster (Slippy Map Tiles) dari server OpenStreetMap?",
    "options": {
      "A": "'https://tile.openstreetmap.org/{z}/{x}/{y}.png'",
      "B": "'https://tile.openstreetmap.org?lat={lat}&lng={lng}'",
      "C": "'https://tile.openstreetmap.org/getTile?zoom={z}'",
      "D": "'https://tile.openstreetmap.org/{row}/{col}.jpg'"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar XYZ tile pyramid menggunakan parameter {z} (zoom level), {x} (nomor kolom tile horizontal), dan {y} (nomor baris tile vertikal).",
      "A": "Opsi A benar karena format {z}/{x}/{y}.png adalah standar ubin peta OSM XYZ.",
      "B": "Opsi B salah karena ubin peta tidak diakses via lat/lng melainkan indeks tile grid.",
      "C": "Opsi C salah karena URL ubin membutuhkan parameter kolom x dan baris y.",
      "D": "Opsi D salah karena konvensi penamaannya adalah x dan y, bukan row dan col."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-103",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Method Leaflet apakah yang digunakan untuk menambahkan marker titik pada koordinat tertentu dan menampilkannya di peta?",
    "options": {
      "A": "L.marker([lat, lng]).addTo(map);",
      "B": "L.addPoint([lat, lng], map);",
      "C": "map.drawPoint(lat, lng);",
      "D": "L.pin([lat, lng]).render(map);"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.marker([lat, lng]) membuat objek penanda lokasi (marker) dan .addTo(map) menyematkan layer marker tersebut ke instance peta aktif.",
      "A": "Opsi A benar karena L.marker(...).addTo(map) adalah cara standar menambahkan marker di Leaflet.",
      "B": "Opsi B salah karena bukan method Leaflet.",
      "C": "Opsi C salah karena bukan method Leaflet.",
      "D": "Opsi D salah karena bukan method Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-104",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Bagaimana cara menampilkan kotak popup informasi teks atau HTML ketika sebuah marker di Leaflet diklik oleh pengguna?",
    "options": {
      "A": "marker.bindPopup('<b>Halo Dunia!</b>').openPopup();",
      "B": "marker.showTooltip('Halo Dunia!');",
      "C": "marker.alert('Halo Dunia!');",
      "D": "map.createModal('Halo Dunia!');"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method .bindPopup() mengaitkan konten HTML ke marker yang akan otomatis muncul saat marker diklik, dan .openPopup() dapat dipanggil untuk langsung membukanya.",
      "A": "Opsi A benar karena bindPopup adalah method resmi pengikatan jendela popup di Leaflet.",
      "B": "Opsi B salah karena showTooltip menampilkan tooltip melayang saat hover, bukan popup klik jendela.",
      "C": "Opsi C salah karena alert bukan method Leaflet.",
      "D": "Opsi D salah karena bukan method Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-105",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Method Leaflet apakah yang secara otomatis memuat dan merender sekumpulan data spasial berformat objek GeoJSON ke atas peta?",
    "options": {
      "A": "L.geoJSON(geojsonData).addTo(map);",
      "B": "L.loadGeoJSON(geojsonData, map);",
      "C": "map.renderJSON(geojsonData);",
      "D": "L.vectorLayer(geojsonData).show(map);"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.geoJSON() mem-parse FeatureCollection GeoJSON dan secara otomatis membuat layer Marker, Polyline, atau Polygon yang sesuai.",
      "A": "Opsi A benar karena L.geoJSON adalah layer parser GeoJSON resmi Leaflet.",
      "B": "Opsi B salah karena bukan method Leaflet.",
      "C": "Opsi C salah karena bukan method Leaflet.",
      "D": "Opsi D salah karena bukan method Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-106",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Bagaimana urutan pasangan koordinat di Leaflet.js dibandingkan dengan standar urutan koordinat GeoJSON (RFC 7946)?",
    "options": {
      "A": "Leaflet menggunakan urutan [Latitude, Longitude], sedangkan GeoJSON menggunakan urutan [Longitude, Latitude]",
      "B": "Keduanya persis sama menggunakan [Latitude, Longitude]",
      "C": "Keduanya persis sama menggunakan [Longitude, Latitude]",
      "D": "Leaflet menggunakan [X, Y], sedangkan GeoJSON menggunakan [Y, X]"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ini adalah perbedaan konvensi paling sering ditemui dalam web GIS: Leaflet berorientasi navigasi manusia [Lat/Lintang, Lng/Bujur], sedangkan GeoJSON berorientasi koordinat kartesius matematika standar [X/Longitude, Y/Latitude].",
      "A": "Opsi A benar karena membedakan konvensi [Lat, Lng] di Leaflet vs [Lng, Lat] di GeoJSON.",
      "B": "Opsi B salah karena GeoJSON menggunakan sumbu X (Longitude) terlebih dahulu.",
      "C": "Opsi C salah karena Leaflet menerima Latitude sebagai elemen array pertama.",
      "D": "Opsi D salah karena Latitude adalah sumbu Y dan Longitude adalah sumbu X."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-107",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Method peta Leaflet apakah yang digunakan untuk memusatkan dan memperbesar viewport peta secara otomatis agar seluruh geometri layer terlihat pas di layar?",
    "options": {
      "A": "map.fitBounds(layer.getBounds());",
      "B": "map.zoomToAll();",
      "C": "map.centerEverything();",
      "D": "map.autoScale();"
    },
    "answer": "A",
    "explanation": {
      "correct": "map.fitBounds(bounds) menyesuaikan titik pusat (center) dan level zoom terkecil yang memungkinkan seluruh batas area (bounds) tampak sepenuhnya di layar viewport.",
      "A": "Opsi A benar karena fitBounds adalah method resmi penyesuaian batas pandang peta.",
      "B": "Opsi B salah karena bukan method Leaflet.",
      "C": "Opsi C salah karena bukan method Leaflet.",
      "D": "Opsi D salah karena bukan method Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-108",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Dalam OpenLayers, objek apakah yang bertanggung jawab mengelola proyeksi peta, titik pusat, dan tingkat resolusi zoom?",
    "options": {
      "A": "ol.View",
      "B": "ol.Map",
      "C": "ol.layer.Tile",
      "D": "ol.source.OSM"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di OpenLayers, ol.View mengontrol status visual tampilan peta (center, zoom, rotation, dan projection CRS), dipisahkan dari objek ol.Map sebagai wadah utama.",
      "A": "Opsi A benar karena ol.View adalah pengelola proyeksi dan viewport tampilan OpenLayers.",
      "B": "Opsi B salah karena ol.Map adalah objek peta inti yang menampung View dan Layers.",
      "C": "Opsi C salah karena ol.layer.Tile adalah kelas layer ubin visual.",
      "D": "Opsi D salah karena ol.source.OSM adalah penyedia data ubin OpenStreetMap."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-109",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Dalam Leaflet, event listener apakah yang dipicu ketika pengguna selesai menggeser atau memindahkan tampilan peta?",
    "options": {
      "A": "map.on('moveend', function() { ... });",
      "B": "map.on('dragfinish', ...);",
      "C": "map.on('pandone', ...);",
      "D": "map.on('scrolldone', ...);"
    },
    "answer": "A",
    "explanation": {
      "correct": "Event 'moveend' ditembakkan setiap kali pergerakan peta (baik karena digeser dengan mouse, navigasi tombol, atau animasi terbang) telah berhenti sepenuhnya.",
      "A": "Opsi A benar karena moveend adalah nama event resmi Leaflet untuk akhir pergeseran peta.",
      "B": "Opsi B salah karena bukan nama event Leaflet.",
      "C": "Opsi C salah karena bukan nama event Leaflet.",
      "D": "Opsi D salah karena bukan nama event Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-110",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Standar protokol web service OGC apakah yang digunakan untuk menyajikan data fitur spasial vektor mentah (dalam format GeoJSON atau GML) dari server GIS?",
    "options": {
      "A": "WFS (Web Feature Service)",
      "B": "WMS (Web Map Service)",
      "C": "WMTS (Web Map Tile Service)",
      "D": "WCS (Web Coverage Service)"
    },
    "answer": "A",
    "explanation": {
      "correct": "WFS menyajikan data vektor aktual beserta tabel atributnya, memungkinkan klien web melakukan manipulasi, filtering, atau digitasi di browser.",
      "A": "Opsi A benar karena WFS melayani data fitur vektor mentah.",
      "B": "Opsi B salah karena WMS merender peta menjadi gambar raster statis (PNG/JPEG) di server sebelum dikirim.",
      "C": "Opsi C salah karena WMTS menyajikan ubin peta raster siap pakai yang telah di-cache.",
      "D": "Opsi D salah karena WCS menyajikan data raster kontinu mentah (seperti file DEM/GeoTIFF)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-111",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Standar OGC Web Services apakah yang merender lapisan peta menjadi gambar raster statis (misal gambar PNG transparan) di sisi server sebelum dikirim ke klien?",
    "options": {
      "A": "WMS (Web Map Service)",
      "B": "WFS (Web Feature Service)",
      "C": "WPS (Web Processing Service)",
      "D": "CSW (Catalog Service for the Web)"
    },
    "answer": "A",
    "explanation": {
      "correct": "WMS menerima parameter BBOX, WIDTH, HEIGHT, dan LAYERS, lalu merender peta di server dan mengembalikan file gambar bitmap (seperti PNG/JPEG) ke browser.",
      "A": "Opsi A benar karena WMS menghasilkan gambar peta ter-render.",
      "B": "Opsi B salah karena WFS menyajikan data vektor mentah.",
      "C": "Opsi C salah karena WPS untuk mengeksekusi algoritma pemrosesan spasial di server.",
      "D": "Opsi D salah karena CSW untuk pencarian katalog metadata spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-112",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "MIME Type (Content-Type) resmi apakah yang digunakan untuk dokumen GeoJSON sesuai spesifikasi RFC 7946?",
    "options": {
      "A": "application/geo+json",
      "B": "application/json-gis",
      "C": "text/geojson",
      "D": "application/spatial-json"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai spesifikasi IETF RFC 7946 Bagian 12, media type resmi untuk format data GeoJSON adalah 'application/geo+json'.",
      "A": "Opsi A benar karena application/geo+json adalah MIME type resmi GeoJSON.",
      "B": "Opsi B salah karena bukan MIME type standar IETF.",
      "C": "Opsi C salah karena bukan MIME type resmi.",
      "D": "Opsi D salah karena bukan MIME type resmi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-113",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Parameter query string apakah yang paling lazim digunakan oleh aplikasi peta web untuk meminta hanya fitur spasial yang berada di dalam area layar saat ini?",
    "options": {
      "A": "?bbox=minX,minY,maxX,maxY",
      "B": "?coords=all",
      "C": "?zoom=everything",
      "D": "?screen=full"
    },
    "answer": "A",
    "explanation": {
      "correct": "Parameter 'bbox' (Bounding Box) membatasi hasil kueri spasial hanya pada empat koordinat batas geografis viewport peta aktif untuk menghemat kuota bandwidth.",
      "A": "Opsi A benar karena parameter ?bbox=minX,minY,maxX,maxY adalah konvensi standar geospatial API.",
      "B": "Opsi B salah karena mengambil seluruh koordinat akan menyebabkan aplikasi lemot.",
      "C": "Opsi C salah karena bukan format parameter batas geografis.",
      "D": "Opsi D salah karena bukan parameter spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-114",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "HTTP Status Code manakah yang menandakan bahwa server menolak permintaan karena klien tidak memiliki wewenang atau hak akses ke layer peta tersebut (Forbidden)?",
    "options": {
      "A": "403 Forbidden",
      "B": "401 Unauthorized",
      "C": "404 Not Found",
      "D": "500 Internal Server Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "403 Forbidden berarti server memahami identitas klien tetapi menolak memberikan izin akses ke resource tersebut.",
      "A": "Opsi A benar karena 403 adalah status penolakan hak akses resmi.",
      "B": "Opsi B salah karena 401 berarti kredensial belum ada atau tidak valid (unauthenticated).",
      "C": "Opsi C salah karena 404 menandakan resource tidak ada.",
      "D": "Opsi D salah karena 500 adalah error internal program server."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-115",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Dalam arsitektur REST API, apa karakteristik utama dari sifat 'Stateless'?",
    "options": {
      "A": "Setiap permintaan dari klien ke server harus memuat semua informasi yang diperlukan untuk memahami dan memproses request, tanpa mengandalkan sesi state yang disimpan di server",
      "B": "Server tidak boleh memiliki database",
      "C": "Klien tidak boleh menyimpan riwayat browsing",
      "D": "Server mematikan koneksi setiap 5 detik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Statelessness berarti server tidak menyimpan konteks sesi klien (seperti session state di memori server); setiap request bersifat mandiri dan membawa kredensial autentikasi sendiri (misal JWT).",
      "A": "Opsi A benar karena mendefinisikan prinsip stateless REST API.",
      "B": "Opsi B salah karena stateless tidak melarang server memiliki database persisten.",
      "C": "Opsi C salah karena riwayat browser adalah urusan lokal agen pengguna.",
      "D": "Opsi D salah karena bukan pemutusan paksa koneksi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-116",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Metode HTTP apakah yang paling tepat digunakan untuk memperbarui seluruh atribut dari sebuah fitur poligon yang sudah ada di database?",
    "options": {
      "A": "PUT",
      "B": "GET",
      "C": "OPTIONS",
      "D": "HEAD"
    },
    "answer": "A",
    "explanation": {
      "correct": "PUT menggantikan representasi resource target secara penuh dengan data payload yang baru dikirimkan.",
      "A": "Opsi A benar karena PUT adalah method penggantian representasi data secara penuh.",
      "B": "Opsi B salah karena GET hanya untuk membaca data.",
      "C": "Opsi C salah karena OPTIONS untuk memeriksa opsi komunikasi yang diizinkan server.",
      "D": "Opsi D salah karena HEAD hanya meminta header respons tanpa body."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-117",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Header HTTP apakah yang dikirimkan oleh browser pada request preflight CORS untuk menanyakan method apa saja yang diizinkan oleh server?",
    "options": {
      "A": "OPTIONS",
      "B": "GET",
      "C": "POST",
      "D": "TRACE"
    },
    "answer": "A",
    "explanation": {
      "correct": "Browser secara otomatis mengirimkan request dengan metode HTTP OPTIONS (preflight request) sebelum mengirimkan request aktual lintas origin (cross-origin).",
      "A": "Opsi A benar karena OPTIONS adalah method HTTP preflight CORS.",
      "B": "Opsi B salah karena GET adalah request data biasa.",
      "C": "Opsi C salah karena POST adalah request aksi data.",
      "D": "Opsi D salah karena TRACE adalah method diagnostic loopback."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-118",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Dalam protokol HTTP, apa perbedaan antara status code 502 Bad Gateway dan 504 Gateway Timeout?",
    "options": {
      "A": "502 menandakan server gateway/proxy menerima respons tidak valid dari server upstream, sedangkan 504 menandakan server gateway/proxy tidak menerima respons tepat waktu (timeout) dari server upstream",
      "B": "502 untuk error database, 504 untuk error CSS",
      "C": "504 hanya terjadi di jaringan lokal",
      "D": "Keduanya persis sama tanpa perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "502 menunjukkan gateway menerima jawaban salah/rusak dari backend, sedangkan 504 menunjukkan backend memakan waktu terlalu lama dan batas waktu tunggu proxy terlampaui.",
      "A": "Opsi A benar karena membedakan respons tidak valid vs kehabisan batas waktu tunggu pada proxy gateway.",
      "B": "Opsi B salah karena kode status HTTP tidak mengkategorikan kesalahan CSS.",
      "C": "Opsi C salah karena 504 dapat terjadi pada arsitektur web manapun di internet.",
      "D": "Opsi D salah karena akar penyebab jaringan di layer proxy berbeda."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-119",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Bagaimana cara menghapus layer marker tertentu dari peta di Leaflet.js?",
    "options": {
      "A": "map.removeLayer(marker); atau marker.remove();",
      "B": "map.deleteMarker(marker);",
      "C": "marker.destroy();",
      "D": "marker.hideForever();"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Leaflet modern, memanggil marker.remove() atau map.removeLayer(marker) melepaskan layer dari peta dan membersihkan representasi DOM-nya.",
      "A": "Opsi A benar karena remove() atau removeLayer() adalah method resmi Leaflet.",
      "B": "Opsi B salah karena bukan method Leaflet.",
      "C": "Opsi C salah karena bukan method Leaflet.",
      "D": "Opsi D salah karena bukan method Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-120",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Class Leaflet apakah yang digunakan untuk membuat ikon kustom berbasis elemen HTML biasa (misal icon dengan CSS kustom atau teks badge)?",
    "options": {
      "A": "L.divIcon({ className: 'my-custom-icon', html: '...' })",
      "B": "L.customMarker()",
      "C": "L.htmlIcon()",
      "D": "L.badgeIcon()"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.divIcon membungkus elemen <div> HTML kustom menjadi ikon marker yang dapat diberi style CSS bebas dan animasi visual.",
      "A": "Opsi A benar karena L.divIcon adalah class resmi ikon HTML kustom di Leaflet.",
      "B": "Opsi B salah karena bukan class Leaflet.",
      "C": "Opsi C salah karena bukan class Leaflet.",
      "D": "Opsi D salah karena bukan class Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-121",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Class layer apakah di Leaflet yang digunakan untuk menggambar bentuk lingkaran geometris dengan radius fisik dalam satuan meter di peta?",
    "options": {
      "A": "L.circle([lat, lng], { radius: 500 })",
      "B": "L.round([lat, lng], 500)",
      "C": "L.oval([lat, lng], 500)",
      "D": "L.circlePixel([lat, lng], 500)"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.circle memproyeksikan lingkaran geografis nyata di mana nilai radius dihitung dalam satuan meter (berbeda dari L.circleMarker yang radiusnya dalam satuan piksel layar tetap).",
      "A": "Opsi A benar karena L.circle menggunakan satuan radius meter di bumi nyata.",
      "B": "Opsi B salah karena bukan class Leaflet.",
      "C": "Opsi C salah karena bukan class Leaflet.",
      "D": "Opsi D salah karena bukan class Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-122",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Dalam format GeoJSON standar (RFC 7946), nilai tipe (type) apakah yang digunakan untuk membungkus kumpulan dari beberapa Feature spasial sekaligus?",
    "options": {
      "A": "\"FeatureCollection\"",
      "B": "\"GeometryCollection\"",
      "C": "\"FeatureList\"",
      "D": "\"MapCollection\""
    },
    "answer": "A",
    "explanation": {
      "correct": "Objek GeoJSON tingkat akar (root) yang menampung daftar fitur adalah objek bertipe \"FeatureCollection\" dengan array \"features\": [ ... ].",
      "A": "Opsi A benar karena FeatureCollection adalah tipe pembungkus koleksi resmi GeoJSON.",
      "B": "Opsi B salah karena GeometryCollection hanya membungkus geometri tanpa atribut properti.",
      "C": "Opsi C salah karena bukan tipe resmi spesifikasi GeoJSON.",
      "D": "Opsi D salah karena bukan tipe resmi GeoJSON."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-123",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Apakah batas nilai rentang koordinat Latitude (Lintang) dan Longitude (Bujur) yang valid pada sistem koordinat WGS84?",
    "options": {
      "A": "Latitude: -90 hingga +90 derajat; Longitude: -180 hingga +180 derajat",
      "B": "Latitude: -180 hingga +180 derajat; Longitude: -90 hingga +90 derajat",
      "C": "Keduanya: 0 hingga 360 derajat",
      "D": "Keduanya: -100 hingga +100 derajat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Latitude mengukur sudut dari garis khatulistiwa (0°) menuju kutub utara (+90°) dan kutub selatan (-90°). Longitude mengukur sudut timur (+180°) dan barat (-180°) dari garis meridian utama Greenwich (0°).",
      "A": "Opsi A benar karena merinci batas sudut koordinat bola bumi WGS84 secara akurat.",
      "B": "Opsi B salah karena batas latitude dan longitude tertukar.",
      "C": "Opsi C salah karena sistem geografis membagi bujur barat/timur dengan tanda minus/plus bukan 0-360 kontinu.",
      "D": "Opsi D salah karena bumi bukan sistem sudut persen 100."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-124",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Apa fungsi dari library plugin 'Leaflet.markercluster' pada peta web?",
    "options": {
      "A": "Mengelompokkan ribuan marker yang saling berdekatan menjadi satu lingkaran cluster penanda ringkasan untuk menjaga performa browser dan menghindari tumpukan visual yang berantakan",
      "B": "Menghapus marker secara acak",
      "C": "Mengubah marker menjadi gambar satelit",
      "D": "Mengunci browser klien"
    },
    "answer": "A",
    "explanation": {
      "correct": "Marker clustering menggabungkan titik-titik berdekatan menjadi cluster bernomor yang otomatis memecah (spiderfy/uncluster) saat pengguna melakukan zoom in.",
      "A": "Opsi A benar karena mendefinisikan fungsi clustering titik di web GIS.",
      "B": "Opsi B salah karena tidak ada marker yang dihapus, hanya dikelompokkan secara visual.",
      "C": "Opsi C salah karena marker clustering tidak mengubah tipe layer dasar peta.",
      "D": "Opsi D salah karena tujuannya justru meringankan beban browser agar tidak hang."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-125",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Dalam arsitektur API GIS, apakah yang dimaksud dengan 'Tile Server' (seperti GeoServer atau MapServer)?",
    "options": {
      "A": "Server backend yang bertugas merender atau memotong data geospasial menjadi kotak-kotak ubin peta (tiles) ukuran 256x256 piksel atau vektor MVT untuk disajikan cepat ke klien web",
      "B": "Server fisik yang lantainya dipasangi keramik ubin",
      "C": "Server yang memotong video YouTube",
      "D": "Server penyimpan file dokumen Word"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tile server membagi dunia ke dalam piramida zoom level ubin (Z/X/Y) dan melayani potongan ubin secara paralel dan berkecepatan tinggi dengan integrasi cache CDN.",
      "A": "Opsi A benar karena menjelaskan arsitektur dan fungsi utama geospatial tile server.",
      "B": "Opsi B salah karena bukan lantai fisik bangunan.",
      "C": "Opsi C salah karena bukan video transoding server.",
      "D": "Opsi D salah karena bukan document archive storage."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-126",
    "level": "beginner",
    "topic": "Git & SDLC",
    "question": "Perintah Git manakah yang digunakan untuk merekam perubahan yang sudah di-stage ke dalam riwayat repositori lokal beserta pesan penjelasnya?",
    "options": {
      "A": "git commit -m \"Pesan commit deskriptif\"",
      "B": "git push",
      "C": "git save",
      "D": "git record"
    },
    "answer": "A",
    "explanation": {
      "correct": "git commit merekam snapshot area staging ke dalam database riwayat Git dengan pesan commit (-m) sebagai dokumentasi perubahan.",
      "A": "Opsi A benar karena git commit -m adalah perintah resmi perekaman commit.",
      "B": "Opsi B salah karena git push mengunggah commit lokal ke repositori remote.",
      "C": "Opsi C salah karena git save bukan perintah Git.",
      "D": "Opsi D salah karena git record bukan perintah Git."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-127",
    "level": "beginner",
    "topic": "Git & SDLC",
    "question": "File apakah yang diletakkan di root repositori Git untuk memberi tahu Git file atau folder mana saja yang harus diabaikan (seperti node_modules, file .env, atau dataset citra raksasa)?",
    "options": {
      "A": ".gitignore",
      "B": ".gitkeep",
      "C": ".gitconfig",
      "D": ".gitattributes"
    },
    "answer": "A",
    "explanation": {
      "correct": ".gitignore berisi pola nama file/folder yang sengaja dikecualikan dari pelacakan version control Git.",
      "A": "Opsi A benar karena .gitignore adalah file konfigurasi pengabaian file Git.",
      "B": "Opsi B salah karena .gitkeep adalah konvensi penamaan file kosong untuk mempertahankan folder kosong di Git.",
      "C": "Opsi C salah karena .gitconfig adalah konfigurasi preferensi Git global/lokal.",
      "D": "Opsi D salah karena .gitattributes mengatur atribut path (seperti penanganan akhir baris CRLF/LF atau Git LFS)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-128",
    "level": "beginner",
    "topic": "Git & SDLC",
    "question": "Perintah Git manakah yang digunakan untuk mengambil perubahan terbaru dari remote repository dan langsung menggabungkannya ke branch lokal saat ini?",
    "options": {
      "A": "git pull",
      "B": "git fetch saja",
      "C": "git clone",
      "D": "git checkout"
    },
    "answer": "A",
    "explanation": {
      "correct": "git pull secara internal menjalankan 'git fetch' (mengunduh commit baru dari remote) diikuti oleh 'git merge' (menggabungkan ke branch aktif saat ini).",
      "A": "Opsi A benar karena git pull mengambil sekaligus menggabungkan perubahan remote.",
      "B": "Opsi B salah karena git fetch hanya mengunduh commit tanpa menggabungkannya ke branch kerja.",
      "C": "Opsi C salah karena git clone hanya untuk mengunduh repo awal pertama kali.",
      "D": "Opsi D salah karena git checkout untuk berpindah branch."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-129",
    "level": "beginner",
    "topic": "Git & SDLC",
    "question": "Ekstensi Git apakah yang dirancang khusus untuk mengelola file biner berukuran sangat besar (seperti file dataset spasial GeoTIFF atau Shapefile ratusan megabyte) agar repositori Git tidak membengkak?",
    "options": {
      "A": "Git LFS (Large File Storage)",
      "B": "Git Big",
      "C": "Git Cloud",
      "D": "Git Binary"
    },
    "answer": "A",
    "explanation": {
      "correct": "Git LFS menggantikan file biner berukuran besar di repositori Git dengan pointer teks kecil, sementara konten file aslinya disimpan di server storage terpisah.",
      "A": "Opsi A benar karena Git LFS adalah ekstensi standar penanganan file besar di Git.",
      "B": "Opsi B salah karena bukan ekstensi Git resmi.",
      "C": "Opsi C salah karena bukan ekstensi Git resmi.",
      "D": "Opsi D salah karena bukan ekstensi Git resmi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-130",
    "level": "beginner",
    "topic": "Git & SDLC",
    "question": "Tahapan apakah dalam CI/CD (Continuous Integration / Continuous Deployment) pipeline yang bertugas menjalankan unit test dan linting secara otomatis setiap kali ada kode baru di-push?",
    "options": {
      "A": "Continuous Integration (CI)",
      "B": "Continuous Deployment (CD)",
      "C": "Manual Deployment",
      "D": "Database Migration"
    },
    "answer": "A",
    "explanation": {
      "correct": "CI berfokus pada integrasi kode yang sering dengan memverifikasi setiap commit menggunakan build dan automated test otomatis untuk mendeteksi bug sedini mungkin.",
      "A": "Opsi A benar karena testing dan integrasi otomatis adalah definisi CI.",
      "B": "Opsi B salah karena CD berfokus pada rilis otomatis ke staging/produksi.",
      "C": "Opsi C salah karena manual deployment bertentangan dengan otomatisasi CI/CD.",
      "D": "Opsi D salah karena database migration adalah langkah skema terpisah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-131",
    "level": "beginner",
    "topic": "Web Performance",
    "question": "Teknik optimasi web apakah yang menunda pemuatan gambar ubin peta atau komponen berat hingga benar-benar mendekati area pandang (viewport) pengguna?",
    "options": {
      "A": "Lazy Loading",
      "B": "Eager Preloading",
      "C": "Blocking Execution",
      "D": "Code Obfuscation"
    },
    "answer": "A",
    "explanation": {
      "correct": "Lazy loading menghemat kuota data dan mempercepat initial page load dengan hanya meminta resource saat diperlukan (on-demand).",
      "A": "Opsi A benar karena lazy loading menunda pengambilan aset hingga masuk viewport.",
      "B": "Opsi B salah karena eager loading memuat semua data sekaligus di awal.",
      "C": "Opsi C salah karena blocking execution memperlambat rendering halaman.",
      "D": "Opsi D salah karena obfuscation adalah pengaburan kode, bukan optimasi pemuatan jaringan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-132",
    "level": "beginner",
    "topic": "Web Performance",
    "question": "Mengapa file JavaScript dan CSS produksi di aplikasi web GIS selalu melalui proses Minifikasi (Minification) dan Bundling?",
    "options": {
      "A": "Untuk menghapus spasi, baris baru, komentar, dan memperpendek nama variabel sehingga ukuran file berkurang drastis dan mempercepat download di jaringan",
      "B": "Agar file tidak bisa dibaca oleh komputer",
      "C": "Untuk mengubah kode JavaScript menjadi bahasa Python",
      "D": "Agar kode otomatis berjalan di server backend"
    },
    "answer": "A",
    "explanation": {
      "correct": "Minifikasi memangkas byte-byte yang tidak diperlukan browser (whitespace, dead comments), menghasilkan aset berukuran jauh lebih kecil yang diunduh lebih cepat.",
      "A": "Opsi A benar karena menjelaskan alasan kompresi ukuran file melalui minifikasi.",
      "B": "Opsi B salah karena browser tetap mengeksekusi kode minifikasi secara normal.",
      "C": "Opsi C salah karena bundler tidak mengubah bahasa pemrograman.",
      "D": "Opsi D salah karena bundle frontend tetap dieksekusi di browser klien."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-133",
    "level": "beginner",
    "topic": "Web Performance",
    "question": "Header HTTP apakah yang digunakan oleh server tile peta untuk memberi tahu browser bahwa ubin peta statis dapat disimpan di cache lokal selama satu bulan?",
    "options": {
      "A": "Cache-Control: public, max-age=2592000",
      "B": "Set-Cookie: tile=true",
      "C": "Pragma: no-cache",
      "D": "Connection: close"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header Cache-Control dengan max-age dalam satuan detik (2592000 detik = 30 hari) mengizinkan browser dan proxy CDN menggunakan salinan cache lokal tanpa perlu meminta ulang ke server origin.",
      "A": "Opsi A benar karena Cache-Control max-age mengatur durasi cache HTTP.",
      "B": "Opsi B salah karena cookie bukan pengatur cache ubin peta.",
      "C": "Opsi C salah karena Pragma: no-cache justru melarang caching.",
      "D": "Opsi D salah karena Connection: close mengatur penutupan koneksi socket TCP."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-134",
    "level": "beginner",
    "topic": "Web Performance",
    "question": "Algoritma kompresi teks modern apakah yang didukung oleh browser dan server web modern yang memberikan rasio kompresi data JSON/JS lebih tinggi daripada Gzip?",
    "options": {
      "A": "Brotli (br)",
      "B": "ZIP",
      "C": "RAR",
      "D": "TAR"
    },
    "answer": "A",
    "explanation": {
      "correct": "Brotli (dinyatakan via header 'Content-Encoding: br') adalah algoritma kompresi generik yang dikembangkan Google yang umumnya 15-25% lebih ringkas daripada Gzip untuk file teks web.",
      "A": "Opsi A benar karena Brotli adalah standar kompresi web modern pengganti Gzip.",
      "B": "Opsi B salah karena ZIP bukan format kompresi stream HTTP standar di browser.",
      "C": "Opsi C salah karena RAR adalah format arsip proprietary.",
      "D": "Opsi D salah karena TAR hanya mengemas file tanpa kompresi bawaan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-135",
    "level": "beginner",
    "topic": "Web Performance",
    "question": "Format gambar citra raster modern apakah yang menyediakan kompresi superior (baik lossy maupun lossless) untuk ubin peta dibandingkan format PNG dan JPEG tradisional?",
    "options": {
      "A": "WebP (atau AVIF)",
      "B": "BMP",
      "C": "TIFF mentah",
      "D": "GIF"
    },
    "answer": "A",
    "explanation": {
      "correct": "WebP menyediakan transparansi alpha seperti PNG tetapi dengan ukuran file 25-35% lebih kecil, sangat optimal untuk menghemat bandwidth pada server tile peta.",
      "A": "Opsi A benar karena WebP adalah format citra web modern berkinerja tinggi.",
      "B": "Opsi B salah karena BMP tidak terkompresi dan berukuran sangat besar.",
      "C": "Opsi C salah karena TIFF mentah tidak didukung langsung oleh tag <img> browser web standar.",
      "D": "Opsi D salah karena GIF terbatas pada palet 256 warna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-136",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Satuan CSS relatif apakah yang proporsional terhadap ukuran font (font-size) dari elemen root dokumen (tag <html>)?",
    "options": {
      "A": "rem (Root EM)",
      "B": "em",
      "C": "px",
      "D": "vh"
    },
    "answer": "A",
    "explanation": {
      "correct": "1rem sama dengan nilai font-size elemen <html> (biasanya 16px secara default), menjadikannya standar ideal untuk tipografi dan spacing responsif yang konsisten.",
      "A": "Opsi A benar karena rem relatif terhadap elemen root.",
      "B": "Opsi B salah karena em relatif terhadap font-size elemen induk (parent) terdekat.",
      "C": "Opsi C salah karena px adalah satuan absolut.",
      "D": "Opsi D salah karena vh relatif terhadap tinggi viewport."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-137",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Metode penanganan event (event handling) di mana satu event listener dipasang pada elemen parent untuk menangani event dari banyak elemen child menggunakan event bubbling disebut:",
    "options": {
      "A": "Event Delegation",
      "B": "Event Blocking",
      "C": "Event Hijacking",
      "D": "Event Cancelling"
    },
    "answer": "A",
    "explanation": {
      "correct": "Event Delegation memanfaatkan fakta bahwa event klik akan naik (bubble up) ke elemen induk, menghemat memori karena tidak perlu memasang ratusan event listener di setiap elemen anak secara individual.",
      "A": "Opsi A benar karena mendefinisikan pola Event Delegation pada DOM.",
      "B": "Opsi B salah karena bukan teknik penanganan event resmi.",
      "C": "Opsi C salah karena hijacking adalah istilah eksploitasi serangan siber.",
      "D": "Opsi D salah karena bukan nama teknik arsitektur listener."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-138",
    "level": "beginner",
    "topic": "React atau Vue",
    "question": "Dalam arsitektur React, apakah yang dimaksud dengan komponen 'Uncontrolled Component'?",
    "options": {
      "A": "Komponen form di mana data input dikelola langsung oleh DOM itu sendiri menggunakan Ref, bukan dikontrol oleh state React",
      "B": "Komponen yang mengalami bug infinite loop",
      "C": "Komponen yang tidak bisa diklik oleh user",
      "D": "Komponen yang tidak memiliki file CSS"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada Uncontrolled Component, form input mempertahankan nilai internalnya di DOM dan kita menarik nilainya menggunakan useRef saat form disubmit.",
      "A": "Opsi A benar karena membedakan uncontrolled component (DOM-driven) vs controlled component (state-driven).",
      "B": "Opsi B salah karena uncontrolled bukan kondisi bug.",
      "C": "Opsi C salah karena input tetap interaktif.",
      "D": "Opsi D salah karena tidak berhubungan dengan styling."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-139",
    "level": "beginner",
    "topic": "Node.js",
    "question": "Apa fungsi dari method 'process.exit(0)' di Node.js?",
    "options": {
      "A": "Mengakhiri eksekusi proses Node.js secara langsung dengan kode status sukses (0)",
      "B": "Me-restart server Node.js secara otomatis",
      "C": "Menghapus memori RAM komputer",
      "D": "Mengirimkan pesan error ke terminal"
    },
    "answer": "A",
    "explanation": {
      "correct": "process.exit(0) menginstruksikan runtime Node.js untuk segera menghentikan proses aplikasi dengan exit code 0 (menandakan terminasi normal/sukses).",
      "A": "Opsi A benar karena mengakhiri proses dengan kode sukses.",
      "B": "Opsi B salah karena tidak melakukan restart otomatis.",
      "C": "Opsi C salah karena OS yang membersihkan alokasi proses, bukan penghapusan fisik RAM.",
      "D": "Opsi D salah karena kode status failure biasanya selain 0 (misal 1)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-140",
    "level": "beginner",
    "topic": "Python (FastAPI atau Django)",
    "question": "Tipe data bawaan Python apakah yang bersifat berurutan (ordered), dapat diubah (mutable), dan ditulis menggunakan tanda kurung siku []?",
    "options": {
      "A": "list",
      "B": "tuple",
      "C": "set",
      "D": "dict"
    },
    "answer": "A",
    "explanation": {
      "correct": "List di Python adalah koleksi mutable terurut yang didefinisikan dengan [elemen1, elemen2].",
      "A": "Opsi A benar karena list bersifat mutable dan menggunakan kurung siku [].",
      "B": "Opsi B salah karena tuple bersifat immutable dan menggunakan kurung biasa ().",
      "C": "Opsi C salah karena set tidak berurutan, tidak menerima duplikat, dan menggunakan {}.",
      "D": "Opsi D salah karena dict menyimpan pasangan key-value dalam {}.."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-141",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "question": "Perintah SQL apakah yang digunakan untuk membatalkan seluruh perubahan yang dilakukan di dalam transaksi database yang sedang berjalan?",
    "options": {
      "A": "ROLLBACK;",
      "B": "COMMIT;",
      "C": "UNDO;",
      "D": "CANCEL;"
    },
    "answer": "A",
    "explanation": {
      "correct": "ROLLBACK membatalkan seluruh query manipulasi data di dalam blok transaksi aktif dan mengembalikan kondisi database ke titik sebelum transaksi dimulai.",
      "A": "Opsi A benar karena ROLLBACK adalah perintah pembatalan transaksi standar SQL.",
      "B": "Opsi B salah karena COMMIT menyimpan perubahan secara permanen.",
      "C": "Opsi C salah karena UNDO bukan perintah SQL transaksi.",
      "D": "Opsi D salah karena CANCEL bukan perintah SQL standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-142",
    "level": "beginner",
    "topic": "PostGIS & Spatial Database",
    "question": "Tipe data PostGIS apakah yang digunakan untuk merepresentasikan data spasial dalam sistem koordinat bola bumi bulat (spheroid/ellipsoidal) dengan perhitungan jarak otomatis dalam satuan meter?",
    "options": {
      "A": "geography",
      "B": "geometry",
      "C": "geopoint",
      "D": "earth_coord"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe 'geography' menghitung jarak dan relasi pada permukaan bumi lengkung (great circle distance) menggunakan satuan meter secara native tanpa perlu proyeksi planar manual.",
      "A": "Opsi A benar karena tipe geography menangani koordinat bola bumi elipsoid dalam satuan meter.",
      "B": "Opsi B salah karena tipe geometry mengasumsikan koordinat pada bidang datar Cartesian (kecuali di-transform ke proyeksi planar).",
      "C": "Opsi C salah karena bukan tipe PostGIS resmi.",
      "D": "Opsi D salah karena bukan tipe PostGIS resmi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-143",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Sistem Satelit Navigasi Global (GNSS) milik Amerika Serikat yang paling dikenal luas oleh masyarakat dunia adalah:",
    "options": {
      "A": "GPS (Global Positioning System)",
      "B": "GLONASS",
      "C": "Galileo",
      "D": "BeiDou"
    },
    "answer": "A",
    "explanation": {
      "correct": "GPS (Navstar GPS) dioperasikan oleh Angkatan Luar Angkasa AS dan merupakan konstelasi satelit navigasi global pertama yang beroperasi penuh di dunia.",
      "A": "Opsi A benar karena GPS adalah sistem GNSS milik Amerika Serikat.",
      "B": "Opsi B salah karena GLONASS adalah sistem navigasi milik Rusia.",
      "C": "Opsi C salah karena Galileo adalah sistem navigasi milik Uni Eropa.",
      "D": "Opsi D salah karena BeiDou adalah sistem navigasi milik Tiongkok."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-144",
    "level": "beginner",
    "topic": "Leaflet.js / OpenLayers",
    "question": "Dalam Leaflet, opsi apakah pada L.tileLayer yang wajib diisi untuk memberikan atribusi hak cipta data peta (misal kredit OpenStreetMap)?",
    "options": {
      "A": "attribution: '&copy; OpenStreetMap contributors'",
      "B": "copyright: 'OSM'",
      "C": "sourceCredit: 'OSM'",
      "D": "licenseInfo: 'ODbL'"
    },
    "answer": "A",
    "explanation": {
      "correct": "Opsi 'attribution' menampilkan teks tautan hak cipta di sudut kanan bawah peta, yang diwajibkan oleh lisensi data ODbL OpenStreetMap.",
      "A": "Opsi A benar karena attribution adalah nama opsi resmi di Leaflet.",
      "B": "Opsi B salah karena bukan nama opsi Leaflet.",
      "C": "Opsi C salah karena bukan nama opsi Leaflet.",
      "D": "Opsi D salah karena bukan nama opsi Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-145",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "question": "Dalam protokol HTTP, apa perbedaan antara URL dan URI?",
    "options": {
      "A": "URI (Uniform Resource Identifier) adalah pengidentifikasi abstrak untuk sebuah resource, sedangkan URL (Uniform Resource Locator) adalah jenis URI spesifik yang juga memberitahukan cara/lokasi mengaksesnya (seperti https://...)",
      "B": "URL hanya untuk gambar, URI untuk teks",
      "C": "Keduanya tidak memiliki relasi sama sekali",
      "D": "URI adalah nama protokol, URL adalah nama domain"
    },
    "answer": "A",
    "explanation": {
      "correct": "Semua URL adalah URI, tetapi tidak semua URI adalah URL (URI mencakup URL dan URN). URL menyediakan mekanisme penemuan lokasi (skema protokol + host + path).",
      "A": "Opsi A benar karena menjelaskan relasi himpunan URI sebagai superset dari URL.",
      "B": "Opsi B salah karena keduanya berlaku untuk semua jenis resource web.",
      "C": "Opsi C salah karena URL adalah spesifikasi turunan dari URI.",
      "D": "Opsi D salah karena keduanya adalah konvensi penamaan resource internet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-146",
    "level": "beginner",
    "topic": "Git & SDLC",
    "question": "Perintah Git manakah yang digunakan untuk menampilkan riwayat log commit secara ringkas dalam satu baris per commit?",
    "options": {
      "A": "git log --oneline",
      "B": "git history --short",
      "C": "git list -1",
      "D": "git commits --brief"
    },
    "answer": "A",
    "explanation": {
      "correct": "'git log --oneline' memadatkan output riwayat commit menjadi 7 karakter hash awal dan judul pesan commit dalam satu baris per commit.",
      "A": "Opsi A benar karena --oneline adalah flag resmi git log.",
      "B": "Opsi B salah karena git history bukan perintah Git.",
      "C": "Opsi C salah karena bukan perintah Git.",
      "D": "Opsi D salah karena bukan perintah Git."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-147",
    "level": "beginner",
    "topic": "Web Performance",
    "question": "Metrik performa web modern (Core Web Vitals) apakah yang mengukur waktu yang dibutuhkan untuk merender elemen konten visual terbesar di layar pengguna?",
    "options": {
      "A": "LCP (Largest Contentful Paint)",
      "B": "FID (First Input Delay)",
      "C": "CLS (Cumulative Layout Shift)",
      "D": "TTFB (Time to First Byte)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Largest Contentful Paint (LCP) mengukur seberapa cepat konten utama (seperti gambar hero atau container peta utama) selesai dimuat dan tampil di layar.",
      "A": "Opsi A benar karena LCP mengukur waktu muat elemen visual terbesar.",
      "B": "Opsi B salah karena FID mengukur responsivitas interaktivitas awal input.",
      "C": "Opsi C salah karena CLS mengukur stabilitas pergeseran visual layout.",
      "D": "Opsi D salah karena TTFB mengukur waktu respons awal penerimaan byte server."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-148",
    "level": "beginner",
    "topic": "HTML & CSS",
    "question": "Dalam CSS Box Model, urutan layer box dari lapisan paling dalam ke lapisan paling luar adalah:",
    "options": {
      "A": "Content -> Padding -> Border -> Margin",
      "B": "Content -> Margin -> Border -> Padding",
      "C": "Margin -> Border -> Padding -> Content",
      "D": "Border -> Content -> Padding -> Margin"
    },
    "answer": "A",
    "explanation": {
      "correct": "Box Model standar W3C tersusun dari dalam ke luar: Konten elemen (Content), jarak dalam (Padding), garis tepi (Border), dan jarak luar antar elemen (Margin).",
      "A": "Opsi A benar karena merefleksikan hierarki lapisan Box Model resmi.",
      "B": "Opsi B salah karena margin berada di lapisan paling luar.",
      "C": "Opsi C salah karena urutannya terbalik dari luar ke dalam.",
      "D": "Opsi D salah karena border membungkus padding, bukan konten langsung."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-149",
    "level": "beginner",
    "topic": "JavaScript/TypeScript",
    "question": "Method JavaScript apakah yang digunakan untuk menjadwalkan eksekusi sebuah fungsi tepat satu kali setelah batas waktu delay milidetik tertentu?",
    "options": {
      "A": "setTimeout(callback, delay)",
      "B": "setInterval()",
      "C": "setImmediate()",
      "D": "requestAnimationFrame()"
    },
    "answer": "A",
    "explanation": {
      "correct": "setTimeout() mengeksekusi fungsi callback tepat satu kali setelah masa tunda (delay) waktu tercapai.",
      "A": "Opsi A benar karena setTimeout mengeksekusi satu kali setelah jeda waktu.",
      "B": "Opsi B salah karena setInterval mengulang eksekusi secara berkala terus-menerus.",
      "C": "Opsi C salah karena setImmediate dieksekusi di fase check event loop Node.js tanpa parameter jeda milidetik eksplisit.",
      "D": "Opsi D salah karena requestAnimationFrame disinkronkan dengan refresh rate monitor untuk animasi render."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-150",
    "level": "beginner",
    "topic": "GIS Concepts",
    "question": "Organisasi konsorsium internasional nirlaba apakah yang menetapkan standar terbuka untuk interoperabilitas data dan layanan geospasial di seluruh dunia (seperti standar WMS, WFS, WKT, dan GeoTIFF)?",
    "options": {
      "A": "OGC (Open Geospatial Consortium)",
      "B": "W3C",
      "C": "IEEE",
      "D": "ISO murni"
    },
    "answer": "A",
    "explanation": {
      "correct": "Open Geospatial Consortium (OGC) adalah badan standardisasi dunia yang merumuskan spesifikasi terbuka untuk sistem informasi geografis dan data spasial.",
      "A": "Opsi A benar karena OGC adalah badan standardisasi utama domain geospasial dunia.",
      "B": "Opsi B salah karena W3C berfokus pada standar web umum (HTML, CSS, DOM).",
      "C": "Opsi C salah karena IEEE berfokus pada standar teknik elektro dan telekomunikasi.",
      "D": "Opsi D salah karena meskipun bekerja sama dengan ISO/TC 211, OGC adalah pembuat spesifikasi layanan spasial web utama."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-151",
    "level": "intermediate",
    "topic": "HTML & CSS",
    "question": "Bagaimana cara mengisolasi konteks penumpukan (stacking context) pada container peta HTML agar popup dan marker di dalamnya tidak bocor atau tertutup oleh navigasi fixed header luar?",
    "options": {
      "A": "Menerapkan properti 'isolation: isolate' atau 'position: relative; z-index: 0' pada elemen pembungkus peta",
      "B": "Menghapus semua file CSS eksternal",
      "C": "Menjadikan seluruh elemen HTML berposisi static",
      "D": "Menggunakan tag <embed> untuk peta"
    },
    "answer": "A",
    "explanation": {
      "correct": "Properti 'isolation: isolate' membuat stacking context baru secara bersih tanpa efek samping, memastikan hierarki z-index di dalam elemen peta tidak bersaing dengan z-index di luar container.",
      "A": "Opsi A benar karena isolation: isolate menciptakan root stacking context baru yang terisolasi.",
      "B": "Opsi B salah karena menghapus CSS merusak tampilan antarmuka.",
      "C": "Opsi C salah karena position static menonaktifkan z-index.",
      "D": "Opsi D salah karena tag embed usang untuk web mapping modern."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-152",
    "level": "intermediate",
    "topic": "HTML & CSS",
    "question": "Dalam rendering grafis <canvas> 2D untuk data raster geospasial, mengapa gambar sering terlihat buram (blurry) pada layar resolusi tinggi (Retina Display) dan bagaimana solusinya?",
    "options": {
      "A": "Resolusi internal canvas harus dikalikan dengan window.devicePixelRatio dan di-scale kembali dengan CSS width/height",
      "B": "Format canvas harus diubah menjadi file GIF",
      "C": "GPU browser harus dimatikan secara paksa",
      "D": "Browser harus di-zoom ke 500%"
    },
    "answer": "A",
    "explanation": {
      "correct": "Layar Retina memiliki kerapatan piksel fisik lebih tinggi (devicePixelRatio >= 2). Canvas perlu mengatur canvas.width = cssWidth * dpr dan ctx.scale(dpr, dpr) agar setiap piksel fisik terpetakan tajam.",
      "A": "Opsi A benar karena penyesuaian devicePixelRatio adalah standar rendering canvas tajam di layar HiDPI.",
      "B": "Opsi B salah karena GIF hanya mendukung 256 warna dan bukan format canvas.",
      "C": "Opsi C salah karena mematikan akselerasi GPU justru memperlambat performa render.",
      "D": "Opsi D salah karena zoom manual merusak layout UI."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-153",
    "level": "intermediate",
    "topic": "HTML & CSS",
    "question": "Fitur CSS Container Queries (@container) sangat berguna dalam komponen web GIS modular untuk:",
    "options": {
      "A": "Menerapkan gaya responsif pada widget layer atau legenda peta berdasarkan ukuran lebar container pembungkusnya sendiri, bukan berdasarkan lebar viewport layar global",
      "B": "Menyimpan file GeoJSON ke dalam container Docker",
      "C": "Menghubungkan container frontend ke database PostGIS",
      "D": "Mengompresi data raster citra satelit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Container Queries (@container) memungkinkan widget GIS (seperti komponen legenda atau koordinat tracker) beradaptasi fleksibel baik saat diletakkan di sidebar sempit (300px) maupun di modal popup lebar (800px).",
      "A": "Opsi A benar karena menjelaskan fungsi responsivitas berbasis ukuran container elemen.",
      "B": "Opsi B salah karena CSS tidak berhubungan dengan Docker backend.",
      "C": "Opsi C salah karena CSS tidak berkomunikasi langsung dengan database.",
      "D": "Opsi D salah karena CSS tidak melakukan kompresi citra raster."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-154",
    "level": "intermediate",
    "topic": "HTML & CSS",
    "question": "Properti CSS apakah yang digunakan untuk mengaktifkan akselerasi perangkat keras GPU pada lapisan tile peta atau overlay animasi guna mencegah layout repaint di CPU?",
    "options": {
      "A": "transform: translateZ(0) atau will-change: transform",
      "B": "display: gpu-accelerated",
      "C": "render-engine: directx",
      "D": "hardware-layer: true"
    },
    "answer": "A",
    "explanation": {
      "correct": "translateZ(0) atau will-change: transform mempromosikan elemen DOM menjadi compositing layer tersendiri di memori VRAM GPU, sehingga animasi geser/zoom diproses oleh GPU tanpa memicu layout repaint CPU yang berat.",
      "A": "Opsi A benar karena merupakan teknik standar promosi GPU layer di CSS.",
      "B": "Opsi B salah karena bukan nilai properti CSS yang valid.",
      "C": "Opsi C salah karena bukan sintaks CSS.",
      "D": "Opsi D salah karena bukan properti CSS yang valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-155",
    "level": "intermediate",
    "topic": "HTML & CSS",
    "question": "Bagaimana cara membuat efek blending visual (seperti Multiply atau Overlay) pada layer citra satelit di atas peta kontur topografi menggunakan CSS?",
    "options": {
      "A": "Menerapkan properti 'mix-blend-mode: multiply' pada elemen gambar layer satelit",
      "B": "Menambahkan filter: grayscale(100%)",
      "C": "Menggunakan display: blend",
      "D": "Mengubah tag <img> menjadi <picture>"
    },
    "answer": "A",
    "explanation": {
      "correct": "mix-blend-mode menentukan bagaimana konten suatu elemen bercampur dengan konten elemen di bawahnya, sangat berguna untuk overlay peta tematik multi-layer di web GIS.",
      "A": "Opsi A benar karena mix-blend-mode menghasilkan efek blending visual multi-layer.",
      "B": "Opsi B salah karena grayscale hanya mengubah warna menjadi abu-abu tanpa blending tumpuk.",
      "C": "Opsi C salah karena display: blend bukan sintaks CSS.",
      "D": "Opsi D salah karena tag picture untuk art-direction responsif, bukan blending grafis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-156",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Bagaimanakah arsitektur Event Loop di JavaScript membedakan eksekusi tugas antara 'Microtask Queue' (Promise.then, queueMicrotask) dan 'Macrotask Queue' (setTimeout, setInterval, I/O)?",
    "options": {
      "A": "Seluruh antrean Microtask selalu dieksekusi sampai tuntas (drained) tepat setelah call stack kosong dan SEBELUM browser mengambil Macrotask berikutnya atau melakukan rendering layar",
      "B": "Macrotask selalu dieksekusi lebih dulu daripada Microtask",
      "C": "Microtask dan Macrotask dieksekusi secara acak",
      "D": "Microtask hanya berjalan di Web Workers terpisah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Aturan Event Loop menentukan prioritas: setelah satu macrotask selesai dieksekusi dan stack kosong, runtime akan menghabiskan seluruh antrean microtasks sebelum melanjutkan ke macrotask berikutnya atau me-repaint layar.",
      "A": "Opsi A benar karena merangkum prioritas absolut Microtask queue di Event Loop.",
      "B": "Opsi B salah karena Microtask memiliki prioritas lebih tinggi daripada Macrotask.",
      "C": "Opsi C salah karena urutan eksekusi Event Loop bersifat deterministik.",
      "D": "Opsi D salah karena Microtask berjalan di thread JavaScript utama."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-157",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Mengapa Web Workers sangat penting digunakan saat melakukan analisis geospasial berat (seperti buffering poligon kompleks atau kalkulasi Delaunay triangulation) di browser?",
    "options": {
      "A": "Web Workers mengeksekusi komputasi berat di thread latar belakang terpisah, sehingga tidak memblokir Main Thread dan UI peta tetap responsif tanpa mengalami frame freeze (60 FPS)",
      "B": "Web Workers dapat memanipulasi elemen DOM secara langsung tanpa batas",
      "C": "Web Workers otomatis mempercepat koneksi Wi-Fi",
      "D": "Web Workers menonaktifkan memori garbage collection"
    },
    "answer": "A",
    "explanation": {
      "correct": "JavaScript browser bersifat single-threaded. Komputasi CPU-bound berat di main thread membekukan animasi dan interaksi drag/zoom peta. Web Workers memindahkan komputasi tersebut ke thread OS independen.",
      "A": "Opsi A benar karena membebaskan Main Thread dari komputasi spasial berat.",
      "B": "Opsi B salah karena Web Workers tidak memiliki akses langsung ke DOM tree browser.",
      "C": "Opsi C salah karena tidak mengubah kecepatan transmisi jaringan fisik.",
      "D": "Opsi D salah karena GC tetap berjalan normal di setiap context worker."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-158",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Apa perbedaan mendasar antara Promise.all() dan Promise.allSettled() saat memuat beberapa layer data spasial secara paralel?",
    "options": {
      "A": "Promise.all() akan langsung reject seketika jika ada satu saja layer yang gagal dimuat (fail-fast), sedangkan Promise.allSettled() selalu menunggu seluruh permintaan selesai dan mengembalikan status (fulfilled/rejected) untuk setiap layer",
      "B": "Promise.allSettled() menghapus error secara otomatis",
      "C": "Promise.all() hanya bisa memuat maksimal 2 request",
      "D": "Keduanya persis sama tanpa perbedaan perilaku"
    },
    "answer": "A",
    "explanation": {
      "correct": "Untuk peta web dengan banyak layer independen, Promise.allSettled() jauh lebih ramah pengguna karena kegagalan satu layer cuaca tidak menggagalkan penampilan layer batas wilayah lainnya.",
      "A": "Opsi A benar karena membedakan mekanisme short-circuit reject vs status pelaporan komprehensif tiap promise.",
      "B": "Opsi B salah karena detail alasan rejection tetap tersimpan dalam objek status.",
      "C": "Opsi C salah karena Promise.all mendukung array iterabel tak terbatas.",
      "D": "Opsi D salah karena penanganan kegagalan parsial keduanya bertolak belakang."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-159",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Pustaka JavaScript open source berkecepatan tinggi apakah yang menjadi standar untuk spatial index 2D berbasis R-Tree di browser guna mencari titik terdekat (nearest neighbor) dan BBOX intersection?",
    "options": {
      "A": "RBush (atau Flatbush)",
      "B": "Lodash",
      "C": "Moment.js",
      "D": "Axios"
    },
    "answer": "A",
    "explanation": {
      "correct": "RBush adalah library JavaScript 2D spatial index berbasis R-Tree seimbang yang sangat cepat untuk indexing puluhan ribu poligon atau titik di sisi frontend klien.",
      "A": "Opsi A benar karena RBush adalah standar spatial index R-tree di JavaScript browser.",
      "B": "Opsi B salah karena Lodash adalah utility library manipulasi data umum.",
      "C": "Opsi C salah karena Moment.js adalah library tanggal yang sudah legacy.",
      "D": "Opsi D salah karena Axios adalah HTTP client."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-160",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Pustaka JavaScript modern apakah yang paling populer untuk melakukan analisis dan manipulasi geometri spasial (seperti buffer, area, distance, centroid) langsung di frontend berbasis format GeoJSON?",
    "options": {
      "A": "Turf.js (@turf/turf)",
      "B": "Chart.js",
      "C": "D3.js murni",
      "D": "Three.js"
    },
    "answer": "A",
    "explanation": {
      "correct": "Turf.js adalah pustaka analisis spasial modular berbasis GeoJSON terkemuka di ekosistem JavaScript (menyediakan turf.buffer, turf.area, turf.booleanPointInPolygon).",
      "A": "Opsi A benar karena Turf.js adalah toolbox analisis spasial utama di JavaScript.",
      "B": "Opsi B salah karena Chart.js adalah library diagram grafik bisnis.",
      "C": "Opsi C salah karena D3.js berfokus pada data visualization umum.",
      "D": "Opsi D salah karena Three.js berfokus pada 3D rendering WebGL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-161",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Dalam TypeScript, bagaimana cara mendefinisikan 'Discriminated Union' untuk membedakan tipe geometri GeoJSON secara aman (type-safe)?",
    "options": {
      "A": "Menggunakan properti literal pembeda yang sama (seperti 'type: \"Point\"' vs 'type: \"Polygon\"') pada setiap tipe objek dalam union",
      "B": "Menghubungkan tipe dengan tanda ampersand (&)",
      "C": "Menggunakan keyword dynamic type",
      "D": "Mengubah semua tipe menjadi any"
    },
    "answer": "A",
    "explanation": {
      "correct": "Discriminated Union menggunakan properti diskriminator umum (misal geom.type). TypeScript compiler secara cerdas menyempitkan (narrow) tipe data koordinat di dalam blok switch(geom.type).",
      "A": "Opsi A benar karena properti pembeda literal adalah mekanisme Discriminated Union TypeScript.",
      "B": "Opsi B salah karena tanda & menghasilkan Intersection Type, bukan Union.",
      "C": "Opsi C salah karena bukan fitur TypeScript.",
      "D": "Opsi D salah karena any menghilangkan manfaat type checking compiler."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-162",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Apa fungsi dari 'Custom Type Guard' di TypeScript dengan return type 'pet is Fish' (misal: 'function isPoint(g: Geometry): g is Point')?",
    "options": {
      "A": "Memberitahu compiler TypeScript bahwa jika fungsi tersebut mengembalikan nilai true, tipe variabel 'g' di dalam blok kondisi tersebut secara pasti dipersempit menjadi 'Point'",
      "B": "Membuat objek Point baru secara otomatis",
      "C": "Menghapus properti poligon dari memori",
      "D": "Memvalidasi koordinat melalui query database"
    },
    "answer": "A",
    "explanation": {
      "correct": "User-Defined Type Guards menggunakan predikat tipe 'param is Type' untuk memberikan kepastian tipe pada compiler pasca evaluasi runtime kondisional.",
      "A": "Opsi A benar karena menjelaskan mekanisme type narrowing dengan custom type guard predicate.",
      "B": "Opsi B salah karena fungsi guard hanya memeriksa tipe, bukan menginstansiasi objek.",
      "C": "Opsi C salah karena tidak memodifikasi objek di memori.",
      "D": "Opsi D salah karena type guard berjalan secara lokal di JavaScript runtime."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-163",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Dalam pemrograman asynchronous, teknik apakah yang menunda eksekusi fungsi pencarian koordinat (geocoding) hingga pengguna berhenti mengetik selama jeda waktu tertentu (misal 300ms)?",
    "options": {
      "A": "Debounce",
      "B": "Throttle",
      "C": "Currying",
      "D": "Memoization"
    },
    "answer": "A",
    "explanation": {
      "correct": "Debouncing mengelompokkan panggilan beruntun yang cepat menjadi satu panggilan tunggal setelah masa jeda ketenangan (silence period) tercapai, mencegah spam request API ke geocoding server.",
      "A": "Opsi A benar karena debounce menunda eksekusi hingga aksi berhenti sejenak.",
      "B": "Opsi B salah karena throttle membatasi frekuensi eksekusi maksimal satu kali per interval waktu tetap.",
      "C": "Opsi C salah karena currying adalah teknik transformasi fungsi multi-argumen menjadi fungsi berantai.",
      "D": "Opsi D salah karena memoization adalah pencatatan cache hasil return berdasarkan argumen input."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-164",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Apa perbedaan utama antara teknik 'Debounce' dan 'Throttle' pada event listener pergerakan peta (map move / zoom)?",
    "options": {
      "A": "Debounce hanya mengeksekusi fungsi setelah event berhenti ditembakkan selama N milidetik, sedangkan Throttle mengeksekusi fungsi secara teratur maksimal satu kali setiap N milidetik selama event terus berlangsung",
      "B": "Throttle hanya bekerja di malam hari",
      "C": "Debounce menghapus semua event listener",
      "D": "Keduanya persis sama tanpa perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Throttle ideal untuk memperbarui koordinat kursor mouse saat bergerak (misal tiap 100ms), sedangkan Debounce ideal untuk memuat ulang data query API saat user selesai menggeser peta (moveend/pan stop).",
      "A": "Opsi A benar karena membedakan penundaan pasca henti vs pembatasan frekuensi berkala.",
      "B": "Opsi B salah karena tidak ada kaitan dengan waktu astronomi.",
      "C": "Opsi C salah karena tidak mencabut listener.",
      "D": "Opsi D salah karena interval eksekusinya berbeda secara fundamental."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-165",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Konsep apakah dalam JavaScript di mana sebuah fungsi inner mempertahankan akses ke variabel-variabel di scope fungsi pembungkus luarnya bahkan setelah fungsi luar tersebut selesai dieksekusi?",
    "options": {
      "A": "Closure",
      "B": "Hoisting",
      "C": "Recursion",
      "D": "Polymorphism"
    },
    "answer": "A",
    "explanation": {
      "correct": "Closure terbentuk ketika fungsi inner menyimpan referensi leksikal (lexical environment) ke variabel scope luarnya, merupakan fondasi pabrik fungsi, enkapsulasi data private, dan custom hooks.",
      "A": "Opsi A benar karena mendefinisikan mekanisme Closure di JavaScript.",
      "B": "Opsi B salah karena hoisting adalah pengangkatan deklarasi variabel/fungsi ke atas scope saat kompilasi.",
      "C": "Opsi C salah karena recursion adalah fungsi yang memanggil dirinya sendiri.",
      "D": "Opsi D salah karena polymorphism adalah konsep OOP pemanfaatan antarmuka yang sama untuk berbagai tipe."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-166",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Tipe utilitas bawaan TypeScript apakah yang membuat seluruh properti dari sebuah interface FeatureProperties menjadi opsional (optional)?",
    "options": {
      "A": "Partial<T>",
      "B": "Required<T>",
      "C": "Readonly<T>",
      "D": "Pick<T, K>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Partial<T> mengubah semua atribut properti T menjadi opsional (ditambahkan tanda ?), sangat berguna untuk endpoint PATCH atau operasi update parsial.",
      "A": "Opsi A benar karena Partial<T> mengubah seluruh properti menjadi opsional.",
      "B": "Opsi B salah karena Required<T> justru mewajibkan seluruh properti.",
      "C": "Opsi C salah karena Readonly<T> membekukan properti agar tidak dapat di-reassign.",
      "D": "Opsi D salah karena Pick<T, K> memilih subset properti tertentu saja."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-167",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Tipe utilitas TypeScript apakah yang memilih hanya beberapa properti tertentu dari suatu tipe (misal hanya mengambil 'id' dan 'coordinates' dari sebuah Feature)?",
    "options": {
      "A": "Pick<T, K>",
      "B": "Omit<T, K>",
      "C": "Record<K, T>",
      "D": "Exclude<T, U>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pick<Feature, 'id' | 'geometry'> membuat tipe baru yang hanya terdiri dari properti yang dipilih dari tipe sumber.",
      "A": "Opsi A benar karena Pick memilih properti yang ditentukan.",
      "B": "Opsi B salah karena Omit justru mengecualikan/membuang properti yang ditentukan.",
      "C": "Opsi C salah karena Record membuat tipe pemetaan key-value.",
      "D": "Opsi D salah karena Exclude membuang tipe dari union."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-168",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Metode penanganan memori browser apakah yang digunakan oleh library pemetaan untuk mencegah kebocoran memori (memory leak) dari objek referensi yang tidak lagi terpakai?",
    "options": {
      "A": "WeakMap atau WeakSet",
      "B": "Map biasa",
      "C": "Array global",
      "D": "window.cache"
    },
    "answer": "A",
    "explanation": {
      "correct": "WeakMap memegang referensi ke objek target secara lemah (weak reference). Jika objek target sudah tidak memiliki referensi aktif lain, objek tersebut bebas dibersihkan oleh Garbage Collector tanpa tertahan oleh WeakMap.",
      "A": "Opsi A benar karena WeakMap mencegah memory leak dengan referensi lemah.",
      "B": "Opsi B salah karena Map biasa memegang strong reference yang mencegah GC membersihkan objek.",
      "C": "Opsi C salah karena Array global menahan objek selamanya di memori.",
      "D": "Opsi D salah karena window.cache menahan referensi di global scope."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-169",
    "level": "intermediate",
    "topic": "HTML & CSS",
    "question": "Dalam format SVG untuk peta vektor web, atribut apakah yang menentukan sistem koordinat internal viewBox untuk penskalaan responsif?",
    "options": {
      "A": "viewBox=\"minX minY width height\"",
      "B": "coords=\"x y w h\"",
      "C": "scale=\"auto\"",
      "D": "bounds=\"0 0 100 100\""
    },
    "answer": "A",
    "explanation": {
      "correct": "Atribut viewBox pada elemen <svg> mendefinisikan posisi dan dimensi sistem koordinat internal user space yang otomatis diskalakan mengikuti ukuran container CSS.",
      "A": "Opsi A benar karena viewBox=\"minX minY width height\" adalah sintaks resmi W3C SVG.",
      "B": "Opsi B salah karena bukan atribut SVG.",
      "C": "Opsi C salah karena bukan atribut SVG standard.",
      "D": "Opsi D salah karena bukan atribut SVG viewBox."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-170",
    "level": "intermediate",
    "topic": "HTML & CSS",
    "question": "Properti CSS apakah yang digunakan untuk mencegah elemen kontrol peta memicu seleksi teks biru saat pengguna melakukan double-click zoom pada peta?",
    "options": {
      "A": "user-select: none",
      "B": "pointer-events: none",
      "C": "touch-action: none",
      "D": "cursor: default"
    },
    "answer": "A",
    "explanation": {
      "correct": "user-select: none menonaktifkan kemampuan pengguna untuk menyorot teks pada kontrol peta, memberikan pengalaman pengguna layaknya aplikasi native.",
      "A": "Opsi A benar karena user-select: none mencegah seleksi highlight teks.",
      "B": "Opsi B salah karena pointer-events: none membuat elemen transparan terhadap semua klik mouse.",
      "C": "Opsi C salah karena touch-action mengatur gesture sentuh layar.",
      "D": "Opsi D salah karena cursor hanya mengatur bentuk kursor visual."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-171",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Objek browser API apakah yang digunakan untuk mengamati secara asynchronous perubahan ukuran dimensi elemen DOM container peta (misal saat sidebar dibuka atau ditutup) guna memanggil map.invalidateSize()?",
    "options": {
      "A": "ResizeObserver",
      "B": "IntersectionObserver",
      "C": "MutationObserver",
      "D": "PerformanceObserver"
    },
    "answer": "A",
    "explanation": {
      "correct": "ResizeObserver memantau perubahan dimensi ukuran kotak batas elemen secara efisien dan memicu callback untuk merespons perubahan tata letak layout.",
      "A": "Opsi A benar karena ResizeObserver mendeteksi perubahan ukuran elemen DOM.",
      "B": "Opsi B salah karena IntersectionObserver memantau visibilitas elemen terhadap viewport (scrolling).",
      "C": "Opsi C salah karena MutationObserver memantau penambahan/penghapusan node child DOM.",
      "D": "Opsi D salah karena PerformanceObserver merekam metrik waktu performa browser."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-172",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Objek browser API apakah yang digunakan untuk mendeteksi kapan container peta masuk ke dalam area viewport layar pengguna untuk memicu lazy loading pemuatan peta?",
    "options": {
      "A": "IntersectionObserver",
      "B": "ResizeObserver",
      "C": "DimensionObserver",
      "D": "VisibilitySensor"
    },
    "answer": "A",
    "explanation": {
      "correct": "IntersectionObserver mendeteksi perpotongan (overlap) antara elemen target dan viewport browser secara non-blocking, sangat optimal untuk memicu pemuatan aset peta hanya saat digulir (scroll) ke pandangan.",
      "A": "Opsi A benar karena IntersectionObserver adalah standar industri lazy loading berbasis posisi gulir.",
      "B": "Opsi B salah karena ResizeObserver memantau ukuran dimensi kotak.",
      "C": "Opsi C salah karena bukan API web standar.",
      "D": "Opsi D salah karena bukan API browser bawaan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-173",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Dalam JavaScript modern, bagaimana cara membuat salinan mendalam (Deep Clone) dari objek GeoJSON bersarang tanpa kehilangan data tipe dasar secara native di browser modern dan Node.js 17+?",
    "options": {
      "A": "structuredClone(geojsonObj)",
      "B": "JSON.parse(JSON.stringify(geojsonObj)) (dengan keterbatasan tipe Date/undefined)",
      "C": "Object.assign({}, geojsonObj)",
      "D": "Spread operator { ...geojsonObj }"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi global structuredClone() adalah standar web modern untuk deep copy yang mendukung circular references, TypedArray, Map, Set, dan Date secara native tanpa hack serialisasi JSON.",
      "A": "Opsi A benar karena structuredClone adalah fungsi standar deep clone native tercepat dan teraman.",
      "B": "Opsi B salah karena trik JSON stringify lambat dan merusak tipe Date, RegExp, dan mengabaikan undefined.",
      "C": "Opsi C salah karena Object.assign hanya melakukan shallow copy pada level pertama.",
      "D": "Opsi D salah karena spread operator hanya melakukan shallow copy."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-174",
    "level": "intermediate",
    "topic": "JavaScript/TypeScript",
    "question": "Format biner terstruktur apakah di JavaScript yang digunakan untuk menyimpan koordinat koordinat geometri mentah secara kompak di TypedArray (seperti Float64Array) untuk transfer cepat ke Web Workers?",
    "options": {
      "A": "ArrayBuffer",
      "B": "String JSON",
      "C": "HTML String",
      "D": "XML Document"
    },
    "answer": "A",
    "explanation": {
      "correct": "ArrayBuffer merepresentasikan buffer data biner mentah panjang tetap di memori, yang dapat ditransfer ke Web Workers menggunakan Transferable Objects dengan biaya komputasi nol (zero-copy memory transfer).",
      "A": "Opsi A benar karena ArrayBuffer adalah fondasi TypedArray memori berkecepatan tinggi di JS.",
      "B": "Opsi B salah karena string JSON memiliki overhead parsing teks yang besar.",
      "C": "Opsi C salah karena bukan format biner spasial.",
      "D": "Opsi D salah karena XML berbasis teks pohon verbose."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-175",
    "level": "intermediate",
    "topic": "HTML & CSS",
    "question": "Properti CSS apakah yang digunakan untuk mengatur bagaimana browser harus menangani gestur cubit (pinch-to-zoom) dan geser (pan) pada layar sentuh perangkat mobile di atas container peta interaktif?",
    "options": {
      "A": "touch-action: none (atau touch-action: pan-x pan-y)",
      "B": "pointer-events: touch",
      "C": "gesture-handling: manual",
      "D": "screen-touch: disable"
    },
    "answer": "A",
    "explanation": {
      "correct": "touch-action menentukan apakah aksi sentuhan layar sentuh ditangani oleh browser default (seperti scroll halaman) atau diteruskan ke kode JavaScript aplikasi pemetaan.",
      "A": "Opsi A benar karena touch-action mengontrol resolusi gestur sentuhan layar browser.",
      "B": "Opsi B salah karena pointer-events tidak memiliki nilai touch.",
      "C": "Opsi C salah karena bukan properti CSS resmi (itu nama plugin Leaflet).",
      "D": "Opsi D salah karena bukan properti CSS yang valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-176",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Pola (pattern) apakah yang paling tepat untuk membungkus library pihak ketiga non-React (seperti Leaflet L.map) ke dalam Custom Hook React?",
    "options": {
      "A": "Membuat hook kustom (useLeafletMap) yang menggunakan useRef untuk container DOM dan useEffect untuk menginisialisasi map serta mengembalikan instance map",
      "B": "Menyimpan instance map di dalam LocalStorage",
      "C": "Menginisialisasi L.map langsung di dalam render body fungsi komponen tanpa useEffect",
      "D": "Membuat iframe terpisah untuk setiap komponen"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menginisialisasi library imperatif di dalam useEffect bersama useRef mengisolasi siklus hidup DOM dari siklus render deklaratif React dan memastikan cleanup map.remove() dipanggil dengan benar.",
      "A": "Opsi A benar karena custom hook berbasis useRef + useEffect adalah best practice integrasi library eksternal di React.",
      "B": "Opsi B salah karena instance objek JavaScript hidup di memori dan tidak dapat di-serialize ke LocalStorage.",
      "C": "Opsi C salah karena menginisialisasi di body render akan membuat peta baru berulang kali di setiap render hingga crash.",
      "D": "Opsi D salah karena iframe membatasi komunikasi data dan boros resource memori."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-177",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Dalam aplikasi Web GIS React dengan ribuan fitur spasial, apa keuntungan menggunakan library state manager seperti Zustand dibandingkan React Context API murni?",
    "options": {
      "A": "Zustand mendukung 'atomic state selection' di mana komponen hanya me-render ulang jika bagian state spesifik yang dipilihnya berubah, sedangkan Context API me-render ulang seluruh komponen consumer",
      "B": "Zustand otomatis mengonversi data menjadi file SQL",
      "C": "Context API tidak bisa menyimpan data bertipe array",
      "D": "Zustand hanya bisa dijalankan di server backend"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada Context API, setiap pembaruan nilai konteks memicu re-render pada semua subscriber. Zustand menggunakan pemilih (selectors, misal useStore(s => s.activeFeatureId)) sehingga hanya komponen yang relevan yang di-render ulang.",
      "A": "Opsi A benar karena seleksi state granular Zustand mencegah re-render massal yang tidak perlu.",
      "B": "Opsi B salah karena Zustand bukan ORM database.",
      "C": "Opsi C salah karena Context API dapat menampung sembarang tipe data JavaScript.",
      "D": "Opsi D salah karena Zustand adalah state manager sisi klien."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-178",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Komponen React-Leaflet resmi apakah yang bertindak sebagai pembungkus utama seluruh hierarki konteks peta Leaflet di React?",
    "options": {
      "A": "<MapContainer>",
      "B": "<LeafletRoot>",
      "C": "<MapCanvas>",
      "D": "<GeoWrapper>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di react-leaflet v3+, <MapContainer center={...} zoom={...}> adalah komponen root yang menginisialisasi peta dan menyediakan instance peta ke komponen anak melalui React Context.",
      "A": "Opsi A benar karena MapContainer adalah nama komponen resmi react-leaflet.",
      "B": "Opsi B salah karena bukan komponen react-leaflet.",
      "C": "Opsi C salah karena bukan komponen react-leaflet.",
      "D": "Opsi D salah karena bukan komponen react-leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-179",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Hook khusus apakah yang disediakan oleh library 'react-leaflet' untuk mengakses instance peta Leaflet aktif di dalam komponen child?",
    "options": {
      "A": "useMap()",
      "B": "useLeaflet()",
      "C": "getMapInstance()",
      "D": "useCurrentMap()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Hook useMap() dipanggil di dalam komponen anak dari <MapContainer> untuk mendapatkan referensi langsung ke instance L.Map aktif.",
      "A": "Opsi A benar karena useMap() adalah hook resmi react-leaflet untuk mengakses instance peta.",
      "B": "Opsi B salah karena useLeaflet adalah hook lama di versi react-leaflet v2 yang sudah deprecated.",
      "C": "Opsi C salah karena bukan hook React.",
      "D": "Opsi D salah karena bukan hook react-leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-180",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Bagaimana cara mengoptimalkan performa tabel atribut GIS yang menampilkan 10.000 baris data fitur di frontend React tanpa membekukan browser?",
    "options": {
      "A": "Menerapkan teknik 'Virtual List' (Windowing) menggunakan library seperti react-window atau @tanstack/react-virtual",
      "B": "Merender semua 10.000 elemen <tr> secara langsung ke DOM sekaligus",
      "C": "Mengubah font-size tabel menjadi 1px",
      "D": "Menghapus semua baris data secara permanen"
    },
    "answer": "A",
    "explanation": {
      "correct": "Virtual List (DOM virtualization) hanya merender sejumlah kecil baris yang terlihat di layar pengguna (~20 baris) dan mendaur ulang elemen saat digulir, menjaga konsumsi memori dan DOM nodes tetap sangat kecil.",
      "A": "Opsi A benar karena virtualisasi DOM menjaga performa tetap stabil pada dataset berukuran besar.",
      "B": "Opsi B salah karena merender 10.000 DOM nodes sekaligus menyebabkan browser lag dan memory bloat.",
      "C": "Opsi C salah karena ukuran font tidak mengurangi jumlah node DOM.",
      "D": "Opsi D salah karena menghapus data menghilangkan informasi yang dibutuhkan pengguna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-181",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Dalam Vue 3, apa perbedaan antara 'computed()' dan 'watch()' saat menangani perubahan filter koordinat spasial?",
    "options": {
      "A": "'computed()' menghasilkan nilai turunan baru yang di-cache secara otomatis (murni/pure), sedangkan 'watch()' mengeksekusi efek samping (seperti memanggil fetch data API ke backend) saat data reaktif berubah",
      "B": "'watch()' hanya bisa memantau tipe angka",
      "C": "'computed()' dijalankan di server backend",
      "D": "Keduanya persis sama tanpa perbedaan fungsi"
    },
    "answer": "A",
    "explanation": {
      "correct": "computed menghasilkan cached derived state (misal: filtering list poligon lokal), sedangkan watch merespons perubahan untuk memicu side-effects asinkron (misal: memanggil API getFeaturesByBbox saat koordinat peta berubah).",
      "A": "Opsi A benar karena membedakan cached derived value vs reactive side-effect listener.",
      "B": "Opsi B salah karena watch dapat memantau sembarang tipe data reaktif.",
      "C": "Opsi C salah karena computed berjalan lokal di frontend Vue.",
      "D": "Opsi D salah karena semantik dan kasus penggunaannya berbeda secara jelas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-182",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Teknik apakah di React yang memisahkan bundle JavaScript menjadi potongan-potongan kecil (chunks) yang hanya diunduh saat rute atau komponen peta dibutuhkan (misal: React.lazy dan Suspense)?",
    "options": {
      "A": "Code Splitting",
      "B": "Tree Shaking",
      "C": "Hot Reloading",
      "D": "Server-Side Rendering murni"
    },
    "answer": "A",
    "explanation": {
      "correct": "Code Splitting via dynamic import (const HeavyMap = React.lazy(() => import('./HeavyMap'))) menunda pengunduhan library GIS besar (Leaflet/OpenLayers) sampai user benar-benar membuka halaman peta.",
      "A": "Opsi A benar karena Code Splitting mengoptimasi ukuran bundle initial load.",
      "B": "Opsi B salah karena Tree Shaking adalah pembuangan dead-code yang tidak terpakai saat build.",
      "C": "Opsi C salah karena Hot Reloading adalah fitur penggantian modul saat development tanpa reload.",
      "D": "Opsi D salah karena SSR adalah teknik rendering HTML di server."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-183",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Dalam arsitektur Node.js, mengapa penggunaan 'Stream' (Readable/Writable Stream) sangat dianjurkan saat memproses file Shapefile atau GeoJSON berukuran multi-gigabyte?",
    "options": {
      "A": "Stream memproses data sepotong demi sepotong (chunk by chunk) dalam buffer memori kecil yang konstan, mencegah pemakaian memori heap melonjak dan menghindari JavaScript heap out of memory",
      "B": "Stream otomatis mengompresi data menjadi file ZIP",
      "C": "Stream menghapus data yang memiliki atribut null",
      "D": "Stream membuat aplikasi berjalan di browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "Membaca file 2GB sekaligus dengan fs.readFile() memuat seluruh isi ke memori heap dan melebihi batas default V8 engine (~2-4GB). Stream memproses data secara kontinu tanpa batas ukuran file.",
      "A": "Opsi A benar karena Stream menjaga penggunaan memori tetap minimal dan konstan.",
      "B": "Opsi B salah karena kompresi memerlukan modul zlib tambahan.",
      "C": "Opsi C salah karena Stream tidak memodifikasi data tanpa transform stream.",
      "D": "Opsi D salah karena Stream di sini adalah modul backend Node.js core."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-184",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Bagaimana cara mengeksekusi perintah command-line utilitas geospasial native (seperti GDAL/OGR 'ogr2ogr') dari dalam script backend Node.js?",
    "options": {
      "A": "Menggunakan modul 'child_process' bawaan Node.js (seperti child_process.spawn atau exec)",
      "B": "Menggunakan fungsi window.runCommand()",
      "C": "Menulis perintah di file package.json",
      "D": "Menggunakan tag <script> di HTML"
    },
    "answer": "A",
    "explanation": {
      "correct": "Modul child_process memungkinkan aplikasi Node.js meluncurkan proses anak di sistem operasi server untuk menjalankan program CLI seperti GDAL, FFmpeg, atau Python scripts.",
      "A": "Opsi A benar karena child_process adalah API resmi eksekusi perintah OS di Node.js.",
      "B": "Opsi B salah karena window adalah objek browser yang tidak ada di Node.js.",
      "C": "Opsi C salah karena package.json hanya untuk manajemen script project, bukan eksekusi runtime dinamis.",
      "D": "Opsi D salah karena tag script adalah sintaks browser."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-185",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Dalam Express.js, bagaimana cara membuat centralized error handling middleware yang menangkap semua error dari route handlers?",
    "options": {
      "A": "Mendefinisikan middleware dengan 4 parameter spesifik: (err, req, res, next) di baris paling akhir setelah semua rute didaftarkan",
      "B": "Menambahkan blok try-catch di file server.js",
      "C": "Menghapus parameter res dari setiap controller",
      "D": "Menggunakan perintah process.on('uncaughtException') saja"
    },
    "answer": "A",
    "explanation": {
      "correct": "Express mengidentifikasi error-handling middleware berdasarkan aritas 4 parameter (err, req, res, next). Middleware ini mencegat semua error yang diteruskan via next(err).",
      "A": "Opsi A benar karena 4 parameter adalah konvensi resmi penanganan error di Express.",
      "B": "Opsi B salah karena try-catch di file entrypoint tidak mencegat async route rejection di Express 4.",
      "C": "Opsi C salah karena res mutlak diperlukan untuk mengirim respons ke klien.",
      "D": "Opsi D salah karena uncaughtException adalah penanganan darurat sebelum proses mati, bukan middleware respons HTTP yang terstruktur."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-186",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Package npm populer apakah yang digunakan untuk memvalidasi struktur data dan tipe input payload request di Node.js secara deklaratif (schema validation)?",
    "options": {
      "A": "Zod atau Joi",
      "B": "Express",
      "C": "Nodemon",
      "D": "Babel"
    },
    "answer": "A",
    "explanation": {
      "correct": "Zod dan Joi adalah pustaka deklarasi dan validasi skema TypeScript-first yang memastikan payload request memenuhi batasan tipe sebelum diproses oleh business logic.",
      "A": "Opsi A benar karena Zod dan Joi adalah standar validasi skema di ekosistem Node.js/TypeScript.",
      "B": "Opsi B salah karena Express adalah web framework, bukan validator skema.",
      "C": "Opsi C salah karena Nodemon adalah tool dev auto-restart.",
      "D": "Opsi D salah karena Babel adalah JavaScript transpiler compiler."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-187",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Bagaimana cara memecah rute endpoint Express.js ke dalam file-file modul terpisah berdasarkan resource (seperti /api/layers, /api/auth) agar arsitektur kode terstruktur?",
    "options": {
      "A": "Menggunakan 'express.Router()' di setiap modul file dan mendaftarkannya dengan 'app.use(\"/path\", routerModule)'",
      "B": "Menulis semua rute di file index.js hingga ribuan baris",
      "C": "Membuat server Express baru di port yang berbeda untuk setiap endpoint",
      "D": "Menggunakan file .html untuk setiap rute"
    },
    "answer": "A",
    "explanation": {
      "correct": "express.Router() bertindak sebagai mini-application mandiri yang dapat didefinisikan di file terpisah dan di-mount secara modular ke aplikasi utama.",
      "A": "Opsi A benar karena express.Router() adalah pola modularisasi rute resmi di Express.",
      "B": "Opsi B salah karena menumpuk ribuan baris di satu file adalah antipattern monolitik spaghetti.",
      "C": "Opsi C salah karena memisahkan port untuk setiap rute merusak arsitektur API.",
      "D": "Opsi D salah karena routing backend Express menangani API, bukan file HTML statis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-188",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Apa fungsi dari library middleware 'helmet' pada aplikasi backend Express.js?",
    "options": {
      "A": "Mengamankan aplikasi Express dengan menyetel berbagai HTTP response headers keamanan (seperti Content-Security-Policy, X-Frame-Options, X-Content-Type-Options)",
      "B": "Mempercepat kompresi gambar raster",
      "C": "Mengubah query SQL menjadi aman",
      "D": "Mencegah server mati saat kehabisan listrik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Helmet membantu mengamankan server dari kerentanan web umum dengan mengonfigurasi header HTTP keamanan secara otomatis sesuai rekomendasi OWASP.",
      "A": "Opsi A benar karena Helmet adalah middleware standar keamanan header HTTP di Express.",
      "B": "Opsi B salah karena kompresi gambar ditangani oleh library seperti Sharp.",
      "C": "Opsi C salah karena keamanan SQL ditangani oleh ORM parameterized queries.",
      "D": "Opsi D salah karena hardware failure tidak dapat dicegah oleh software middleware."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-189",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Dalam Node.js, kelas Buffer digunakan untuk:",
    "options": {
      "A": "Menangani alokasi data biner mentah (raw binary data) di memori di luar V8 heap (seperti saat memproses header file biner Shapefile atau ubin MVT)",
      "B": "Menyimpan teks string biasa",
      "C": "Membuat antrean tugas cron job",
      "D": "Mengatur styling visual CSS"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kelas Buffer menyediakan cara berinteraksi dengan stream data biner tingkat rendah di memori native, esensial untuk decoding format file spasial biner.",
      "A": "Opsi A benar karena Buffer adalah representasi memori biner mentah di Node.js.",
      "B": "Opsi B salah karena teks string dikelola oleh tipe String standar V8.",
      "C": "Opsi C salah karena task scheduling menggunakan node-cron atau BullMQ.",
      "D": "Opsi D salah karena CSS tidak diproses di lingkungan backend Node.js core."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-190",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Apa perbedaan konseptual antara 'Prop Drilling' dan pemanfaatan 'Context API / State Store' dalam aplikasi web GIS yang kompleks?",
    "options": {
      "A": "Prop Drilling mengalirkan data melalui komponen perantara yang sebenarnya tidak membutuhkan data tersebut, sedangkan Context API menyediakan data secara langsung ke komponen yang membutuhkan di tingkat hierarki berapapun",
      "B": "Prop Drilling otomatis menyimpan data ke hard disk",
      "C": "Context API hanya bisa digunakan di aplikasi satu halaman",
      "D": "Keduanya persis sama tanpa perbedaan struktur"
    },
    "answer": "A",
    "explanation": {
      "correct": "Context API mengeliminasi keharusan meneruskan props melalui 5-10 lapisan komponen perantara yang hanya bertindak sebagai jembatan pembawa (prop drilling).",
      "A": "Opsi A benar karena membedakan alur props manual bertingkat vs penyediaan data kontekstual langsung.",
      "B": "Opsi B salah karena Prop Drilling adalah konsep arsitektur kode murni.",
      "C": "Opsi C salah karena Context API dapat digunakan di segala jenis struktur aplikasi React.",
      "D": "Opsi D salah karena maintainability dan keterbacaan kodenya berbeda drastis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-191",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Dalam React, kapan Anda sebaiknya membungkus fungsi callback dengan 'useCallback'?",
    "options": {
      "A": "Ketika fungsi callback tersebut diteruskan sebagai props ke komponen anak yang dioptimasi dengan React.memo, untuk mencegah re-render anak akibat re-instansiasi fungsi",
      "B": "Pada setiap fungsi biasa di aplikasi tanpa terkecuali",
      "C": "Hanya saat fungsi melakukan perhitungan matematika dasar",
      "D": "Ketika fungsi tidak memiliki parameter"
    },
    "answer": "A",
    "explanation": {
      "correct": "useCallback mempertahankan referensi identitas fungsi yang sama antar render, mencegah komponen anak ber-React.memo me-render ulang karena referensi fungsi props dianggap baru.",
      "A": "Opsi A benar karena mempertahankan stabilitas referensi fungsi untuk optimasi React.memo.",
      "B": "Opsi B salah karena membungkus semua fungsi tanpa alasan menambah overhead memori yang sia-sia.",
      "C": "Opsi C salah karena perhitungan matematika dioptimasi dengan useMemo, bukan useCallback.",
      "D": "Opsi D salah karena parameter fungsi tidak menentukan kebutuhan useCallback."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-192",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Dalam Vue 3, apa fungsi dari 'provide' dan 'inject' (Dependency Injection)?",
    "options": {
      "A": "Memungkinkan komponen ancestor menyediakan (provide) data atau fungsi yang dapat diakses langsung oleh komponen descendant manapun di bawahnya (inject) tanpa prop drilling",
      "B": "Menghubungkan Vue ke database MySQL secara langsung",
      "C": "Menginjeksi virus ke browser klien",
      "D": "Mengunduh file CSS secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Provide/Inject di Vue menyelesaikan masalah prop drilling di hierarki komponen yang dalam, setara dengan React Context API.",
      "A": "Opsi A benar karena mendefinisikan mekanisme provide/inject di Vue 3.",
      "B": "Opsi B salah karena frontend Vue tidak terhubung langsung ke database tanpa backend API.",
      "C": "Opsi C salah karena bukan modul malware.",
      "D": "Opsi D salah karena bukan pengunduh stylesheet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-193",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Package npm apakah yang menjadi driver koneksi database PostgreSQL paling populer dan berkinerja tinggi di lingkungan Node.js dengan dukungan connection pooling?",
    "options": {
      "A": "pg (node-postgres)",
      "B": "mysql2",
      "C": "sqlite3",
      "D": "mongoose"
    },
    "answer": "A",
    "explanation": {
      "correct": "'pg' (node-postgres) adalah modul client PostgreSQL resmi untuk Node.js yang menyediakan interface low-level yang cepat dan class Pool untuk pooling koneksi.",
      "A": "Opsi A benar karena node-postgres adalah driver PostgreSQL standar di Node.js.",
      "B": "Opsi B salah karena mysql2 adalah driver untuk database MySQL.",
      "C": "Opsi C salah karena sqlite3 untuk database SQLite embedded.",
      "D": "Opsi D salah karena mongoose adalah ODM untuk database MongoDB."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-194",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Bagaimana cara menangani unhandled promise rejections secara aman agar server Node.js tidak mengalami silent failure?",
    "options": {
      "A": "Mendengarkan event 'process.on(\"unhandledRejection\", (reason, promise) => { ... })' dan mencatat log error sebelum gracefully shutdown",
      "B": "Menghapus semua Promise dari kode",
      "C": "Mematikan server setiap kali ada request baru",
      "D": "Mengabaikan error tersebut karena Node.js otomatis membaik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Unhandled rejection di versi Node.js modern dapat menghentikan proses aplikasi dengan exit code 1. Menangkap event ini memungkinkan logging terstruktur dan pembersihan koneksi.",
      "A": "Opsi A benar karena mendengarkan event unhandledRejection adalah praktik baku pertahanan proses Node.js.",
      "B": "Opsi B salah karena Promise adalah fondasi async modern.",
      "C": "Opsi C salah karena merusak layanan sistem.",
      "D": "Opsi D salah karena mengabaikan unhandled rejection menyebabkan memory leak atau crash tak terduga."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-195",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Pola rendering React apakah yang digunakan untuk merender komponen child (seperti modal popup peta atau floating inspector) di luar root DOM container aplikasi induknya?",
    "options": {
      "A": "React Portals (ReactDOM.createPortal)",
      "B": "React Suspense",
      "C": "React Fragment",
      "D": "React ErrorBoundary"
    },
    "answer": "A",
    "explanation": {
      "correct": "ReactDOM.createPortal(children, domNode) menyisipkan elemen child ke dalam node DOM lain di luar hierarki DOM induknya, menghindari masalah clipping overflow CSS dan z-index.",
      "A": "Opsi A benar karena React Portals merender elemen ke DOM node eksternal.",
      "B": "Opsi B salah karena Suspense untuk penanganan loading state async.",
      "C": "Opsi C salah karena Fragment untuk mengelompokkan elemen tanpa tag pembungkus ekstra di DOM.",
      "D": "Opsi D salah karena ErrorBoundary untuk menangkap runtime exception di komponen anak."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-196",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Dalam Express.js, apa fungsi dari parameter 'next' pada route handler?",
    "options": {
      "A": "Mengoper kendali eksekusi ke middleware atau route handler berikutnya dalam antrean rantai (middleware chain)",
      "B": "Melompat ke baris pertama kode",
      "C": "Membuat database baru",
      "D": "Mengakhiri proses server"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memanggil next() meneruskan alur ke middleware berikutnya; jika diberikan argumen next(err), Express akan melompati semua middleware biasa dan langsung menuju ke error-handling middleware.",
      "A": "Opsi A benar karena next() adalah pendelegasi alur middleware chain.",
      "B": "Opsi B salah karena tidak mengulang eksekusi dari baris pertama.",
      "C": "Opsi C salah karena bukan perintah database.",
      "D": "Opsi D salah karena tidak mengakhiri proses server."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-197",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Teknik keamanan apakah di Node.js yang membatasi jumlah permintaan HTTP dari satu alamat IP dalam jangka waktu tertentu (misal maksimal 100 request per menit) untuk mencegah serangan DoS?",
    "options": {
      "A": "Rate Limiting (menggunakan library express-rate-limit)",
      "B": "Data Encryption",
      "C": "File Upload Filtering",
      "D": "Database Indexing"
    },
    "answer": "A",
    "explanation": {
      "correct": "express-rate-limit memantau frekuensi request dari IP klien dan otomatis membalas dengan status 429 Too Many Requests jika kuota request terlampaui.",
      "A": "Opsi A benar karena Rate Limiting adalah mekanisme pembatasan frekuensi akses API.",
      "B": "Opsi B salah karena enkripsi untuk kerahasiaan data, bukan throttling.",
      "C": "Opsi C salah karena filtering upload hanya memeriksa file, bukan laju request.",
      "D": "Opsi D salah karena indexing untuk optimasi query database."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-198",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Dalam React, kapan Anda sebaiknya menggunakan 'useLayoutEffect' alih-alih 'useEffect' biasa?",
    "options": {
      "A": "Ketika Anda perlu membaca layout DOM (seperti getBoundingClientRect) dan melakukan mutasi visual secara sinkron SEBELUM browser melukis (paint) layar untuk mencegah kedipan visual (flicker)",
      "B": "Untuk memuat data API dari backend",
      "C": "Pada setiap pemanggilan fungsi biasa",
      "D": "Ketika tidak membutuhkan akses ke elemen DOM"
    },
    "answer": "A",
    "explanation": {
      "correct": "useLayoutEffect berjalan sinkron tepat setelah DOM dimutasi tetapi sebelum browser me-render frame ke layar, sangat penting untuk pengukuran elemen UI yang harus pas tanpa efek berkedip.",
      "A": "Opsi A benar karena useLayoutEffect berjalan sinkron sebelum visual browser paint.",
      "B": "Opsi B salah karena pemanggilan API async lebih tepat di useEffect agar tidak memblokir browser paint.",
      "C": "Opsi C salah karena useLayoutEffect memiliki biaya blocking render.",
      "D": "Opsi D salah karena useLayoutEffect secara khusus digunakan saat membutuhkan akses pengukuran DOM."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-199",
    "level": "intermediate",
    "topic": "Node.js",
    "question": "Library utility berkecepatan tinggi apakah di ekosistem Node.js yang digunakan untuk memproses, mengubah ukuran (resize), memotong, dan mengonversi format citra raster satelit secara efisien berbasis pustaka libvips C++?",
    "options": {
      "A": "Sharp",
      "B": "Jimp",
      "C": "Canvas murni",
      "D": "Babel"
    },
    "answer": "A",
    "explanation": {
      "correct": "'sharp' adalah modul pengolahan gambar tercepat di Node.js (4-5x lebih cepat dari Jimp/ImageMagick) karena didukung oleh pustaka C libvips multithreaded.",
      "A": "Opsi A benar karena Sharp adalah standar pemrosesan citra raster performa tinggi di Node.js.",
      "B": "Opsi B salah karena Jimp ditulis dalam JavaScript murni dan jauh lebih lambat untuk citra besar.",
      "C": "Opsi C salah karena canvas Node.js lebih berat dan tidak secepat libvips untuk resize citra.",
      "D": "Opsi D salah karena Babel adalah compiler JavaScript."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-200",
    "level": "intermediate",
    "topic": "React atau Vue",
    "question": "Komponen React khusus apakah yang digunakan untuk menangkap error JavaScript di mana saja pada tree komponen anak dan menampilkan UI fallback ramah alih-alih merusak seluruh aplikasi?",
    "options": {
      "A": "Error Boundary (mengimplementasikan componentDidCatch atau getDerivedStateFromError)",
      "B": "TryCatchComponent",
      "C": "SafeWrapper",
      "D": "NullComponent"
    },
    "answer": "A",
    "explanation": {
      "correct": "Error Boundary adalah komponen kelas React yang bertindak layaknya blok catch deklaratif untuk komponen UI, mencegah satu layer peta yang error merusak seluruh halaman aplikasi.",
      "A": "Opsi A benar karena Error Boundary adalah mekanisme resmi penanganan runtime crash komponen di React.",
      "B": "Opsi B salah karena bukan komponen React bawaan.",
      "C": "Opsi C salah karena bukan komponen React standar.",
      "D": "Opsi D salah karena bukan komponen penanganan error."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-201",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam GeoPandas, fungsi apakah yang digunakan untuk menggabungkan dua tabel spasial berdasarkan relasi geometrisnya (seperti titik yang berada di dalam poligon) bukan berdasarkan kolom kunci teks biasa?",
    "options": {
      "A": "gpd.sjoin(left_df, right_df, how='inner', predicate='within')",
      "B": "pd.merge(left_df, right_df, on='id')",
      "C": "gpd.concat_spatial([df1, df2])",
      "D": "df.spatial_combine()"
    },
    "answer": "A",
    "explanation": {
      "correct": "gpd.sjoin (Spatial Join) menggabungkan atribut dari dua GeoDataFrame berdasarkan predikat hubungan ruang (seperti intersects, contains, within) memanfaatkan spatial index R-Tree internal.",
      "A": "Opsi A benar karena sjoin adalah fungsi resmi Spatial Join di GeoPandas.",
      "B": "Opsi B salah karena pd.merge adalah join atribut tabular biasa berbasis kolom teks/angka.",
      "C": "Opsi C salah karena concat_spatial bukan fungsi GeoPandas.",
      "D": "Opsi D salah karena bukan method DataFrame."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-202",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Bagaimana cara mengubah sistem proyeksi koordinat (CRS) dari sebuah GeoDataFrame di GeoPandas (misal dari EPSG:4326 ke UTM Zone 48S EPSG:32748)?",
    "options": {
      "A": "gdf = gdf.to_crs(epsg=32748)",
      "B": "gdf.crs = 32748 (secara langsung)",
      "C": "gdf.reproject(32748)",
      "D": "gdf.set_projection(32748)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method .to_crs() mentransformasikan seluruh koordinat geometri fisik menggunakan modul pyproj, sedangkan menetapkan gdf.crs secara langsung hanya mengubah metadata label tanpa mengubah angka koordinat.",
      "A": "Opsi A benar karena to_crs() menghitung transformasi koordinat fisik.",
      "B": "Opsi B salah karena menimpa gdf.crs merusak data koordinat jika tidak sesuai sistem proyeksi aslinya.",
      "C": "Opsi C salah karena bukan method GeoPandas.",
      "D": "Opsi D salah karena bukan method GeoPandas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-203",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dengan pustaka Rasterio di Python, bagaimana cara membuka file citra satelit GeoTIFF dan membaca band spektral pertama sebagai array NumPy 2D?",
    "options": {
      "A": "with rasterio.open('image.tif') as src: band1 = src.read(1)",
      "B": "band1 = rasterio.read_image('image.tif')[0]",
      "C": "band1 = np.load_tif('image.tif')",
      "D": "band1 = rasterio.open('image.tif').get_pixels()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Rasterio menggunakan indeks berbasis 1 (1-indexed) untuk band citra satelit; src.read(1) membaca seluruh nilai piksel band 1 ke dalam array NumPy 2D.",
      "A": "Opsi A benar karena merupakan idiom standar pembacaan band citra satelit di Rasterio.",
      "B": "Opsi B salah karena bukan sintaks Rasterio.",
      "C": "Opsi C salah karena NumPy tidak memiliki method load_tif bawaan.",
      "D": "Opsi D salah karena bukan method Rasterio."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-204",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Bagaimana rumus kalkulasi indeks vegetasi NDVI menggunakan dua array band NumPy (nir dan red) di Python dengan penanganan pembagian dengan nol (zero division)?",
    "options": {
      "A": "ndvi = np.where((nir + red) == 0, 0, (nir - red) / (nir + red))",
      "B": "ndvi = (nir - red) / (nir + red) (tanpa penanganan nol)",
      "C": "ndvi = nir / red",
      "D": "ndvi = np.multiply(nir, red)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Penggunaan np.where() mencegah munculnya RuntimeWarning 'divide by zero encountered in divide' dan nilai NaN ketika piksel bernilai nol (misal area masking no-data atau background hitam).",
      "A": "Opsi A benar karena menangani pembagian dengan nol secara elegan pada array NumPy.",
      "B": "Opsi B salah karena dapat memicu RuntimeWarning dan menghasilkan nilai NaN/Inf.",
      "C": "Opsi C salah karena itu adalah Simple Ratio, bukan NDVI.",
      "D": "Opsi D salah karena perkalian bukan rumus indeks normalisasi selisih."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-205",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam Shapely, operasi geometri apakah yang digunakan untuk menggabungkan sekumpulan poligon yang saling bertetangga menjadi satu poligon kesatuan tunggal tanpa batas internal?",
    "options": {
      "A": "shapely.ops.unary_union(polygons) (atau shapely.union_all())",
      "B": "shapely.combine(polygons)",
      "C": "shapely.merge_shapes(polygons)",
      "D": "polygons.join()"
    },
    "answer": "A",
    "explanation": {
      "correct": "unary_union adalah operasi dissolusi spasial paling efisien di Shapely yang meleburkan banyak geometri menjadi satu representasi geometri gabungan.",
      "A": "Opsi A benar karena unary_union/union_all adalah fungsi resmi peleburan geometri Shapely.",
      "B": "Opsi B salah karena bukan fungsi Shapely.",
      "C": "Opsi C salah karena bukan fungsi Shapely.",
      "D": "Opsi D salah karena bukan method geometri."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-206",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam FastAPI, bagaimana cara mendefinisikan dependensi yang dapat digunakan kembali (seperti sesi koneksi database spasial atau autentikasi JWT)?",
    "options": {
      "A": "Menggunakan 'Depends(get_db)' pada parameter fungsi endpoint",
      "B": "Menggunakan import global biasa di setiap file",
      "C": "Menggunakan variabel global global_db = ...",
      "D": "Menyimpan koneksi database di file teks"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sistem Dependency Injection FastAPI menggunakan Depends() untuk menyelesaikan dependensi secara deklaratif per-request, memastikan resource (seperti DB session) dibuka dan ditutup dengan benar via generator.",
      "A": "Opsi A benar karena Depends() adalah mekanisme resmi Dependency Injection FastAPI.",
      "B": "Opsi B salah karena import global menyulitkan mocking saat unit testing.",
      "C": "Opsi C salah karena variabel global tidak thread-safe dan memicu race condition pada async request.",
      "D": "Opsi D salah karena bukan cara manajemen koneksi database."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-207",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam Rasterio, atribut apakah yang memuat informasi matriks transformasi affine yang memetakan koordinat piksel (kolom, baris) ke koordinat georeferensi bumi nyata (X, Y)?",
    "options": {
      "A": "src.transform",
      "B": "src.matrix",
      "C": "src.affine_coords",
      "D": "src.geotransform_array"
    },
    "answer": "A",
    "explanation": {
      "correct": "src.transform adalah objek Affine yang mendefinisikan ukuran piksel (resolusi), sudut rotasi, dan koordinat sudut kiri atas (origin X, Y) citra raster.",
      "A": "Opsi A benar karena src.transform adalah atribut resmi matriks affine di Rasterio.",
      "B": "Opsi B salah karena bukan atribut Rasterio.",
      "C": "Opsi C salah karena bukan atribut Rasterio.",
      "D": "Opsi D salah karena itu format lama tuple GDAL, bukan objek Rasterio."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-208",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka Python apakah yang menjadi antarmuka standar untuk memformat dan mengeksekusi konversi CRS serta koordinat geodetik antar kode EPSG?",
    "options": {
      "A": "pyproj (membungkus pustaka C PROJ)",
      "B": "scikit-learn",
      "C": "pandas",
      "D": "pydantic"
    },
    "answer": "A",
    "explanation": {
      "correct": "pyproj adalah pustaka Python resmi untuk transformasi kartografis dan perhitungan geodetik berbasis standar pustaka C PROJ.",
      "A": "Opsi A benar karena pyproj adalah standar transformasi proyeksi di ekosistem spasial Python.",
      "B": "Opsi B salah karena scikit-learn untuk machine learning.",
      "C": "Opsi C salah karena pandas untuk analisis data tabular umum.",
      "D": "Opsi D salah karena pydantic untuk validasi skema data."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-209",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Di GeoDjango, lookup query spasial apakah yang digunakan untuk mencari semua record entitas yang berjarak maksimal D meter dari sebuah titik koordinat referensi?",
    "options": {
      "A": "City.objects.filter(location__dwithin=(point, D))",
      "B": "City.objects.filter(location__distance_lte=D)",
      "C": "City.objects.filter(location__radius=D)",
      "D": "City.objects.filter(location__near=point)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Lookup spasial '__dwithin' di GeoDjango memanfaatkan fungsi PostGIS ST_DWithin yang secara optimal menggunakan indeks GiST tanpa perlu membuat buffer poligon manual.",
      "A": "Opsi A benar karena dwithin adalah spatial lookup resmi GeoDjango untuk batas jarak spasial.",
      "B": "Opsi B salah karena distance_lte bukan lookup spasial standar GeoDjango.",
      "C": "Opsi C salah karena bukan lookup GeoDjango.",
      "D": "Opsi D salah karena near adalah lookup MongoDB, bukan GeoDjango PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-210",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam FastAPI, apa keuntungan mendeklarasikan endpoint sebagai asynchronous ('async def') saat melakukan panggilan I/O database atau request API eksternal?",
    "options": {
      "A": "Event loop server tidak terblokir selama menunggu respons I/O, memungkinkan satu worker thread melayani ribuan request concurrent secara non-blocking",
      "B": "Endpoint otomatis berjalan di komputer klien",
      "C": "FastAPI otomatis menghapus semua error kode",
      "D": "Query SQL otomatis menjadi dua kali lebih cepat di database server"
    },
    "answer": "A",
    "explanation": {
      "correct": "async/await menyerahkan kendali kembali ke event loop ASGI saat menunggu operasi I/O jaringan/database, menjaga konkurensi server tetap tinggi dengan konsumsi memori minimal.",
      "A": "Opsi A benar karena menjelaskan sifat non-blocking event loop pada endpoint async.",
      "B": "Opsi B salah karena endpoint dieksekusi di backend server.",
      "C": "Opsi C salah karena async/await tidak meniadakan penanganan error.",
      "D": "Opsi D salah karena kecepatan engine internal database tidak dipengaruhi langsung oleh deklarasi async Python."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-211",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka Python open-source apakah yang sering digunakan sebagai Cloud Optimized GeoTIFF (COG) reader dinamis untuk memotong tile citra satelit langsung dari penyimpanan S3/GCS?",
    "options": {
      "A": "rio-tiler atau Titiler",
      "B": "Django",
      "C": "PyMongo",
      "D": "SqlAlchemy murni"
    },
    "answer": "A",
    "explanation": {
      "correct": "rio-tiler dan TiTiler adalah pustaka Python spesialis untuk membaca ubin (tile) dan melakukan kalkulasi matematika band secara dinamis dari file COG di cloud via HTTP range requests.",
      "A": "Opsi A benar karena rio-tiler/TiTiler adalah standar dinamis tile generator COG di Python.",
      "B": "Opsi B salah karena Django adalah full-stack web framework umum.",
      "C": "Opsi C salah karena PyMongo adalah driver database MongoDB.",
      "D": "Opsi D salah karena SQLAlchemy adalah ORM database SQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-212",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam Shapely, atribut apakah yang digunakan untuk memverifikasi apakah sebuah poligon geometris berstatus 'Valid' (tidak memiliki garis saling silang sendiri / self-intersection)?",
    "options": {
      "A": "geom.is_valid",
      "B": "geom.check()",
      "C": "geom.has_no_errors",
      "D": "geom.is_clean"
    },
    "answer": "A",
    "explanation": {
      "correct": "geom.is_valid mengevaluasi kepatuhan terhadap aturan topologi OGC (misal poligon tidak boleh berbentuk angka 8 berpita sendiri); jika tidak valid, fungsi shapely.validation.make_valid() dapat digunakan untuk memperbaikinya.",
      "A": "Opsi A benar karena is_valid adalah properti resmi validasi topologi geometri Shapely.",
      "B": "Opsi B salah karena bukan method Shapely.",
      "C": "Opsi C salah karena bukan atribut Shapely.",
      "D": "Opsi D salah karena bukan properti Shapely."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-213",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam GeoPandas, method apakah yang digunakan untuk menghitung luas area setiap poligon di dalam kolom geometri?",
    "options": {
      "A": "gdf['area'] = gdf.geometry.area",
      "B": "gdf['area'] = gdf.calc_area()",
      "C": "gdf['area'] = gpd.compute_size(gdf)",
      "D": "gdf['area'] = gdf.geometry.size"
    },
    "answer": "A",
    "explanation": {
      "correct": "gdf.geometry.area mengeksekusi kalkulasi luas permukaan planar untuk setiap baris geometri dalam GeoSeries (menghasilkan satuan meter persegi jika CRS adalah proyeksi planar seperti UTM).",
      "A": "Opsi A benar karena .geometry.area adalah properti perhitungan luas resmi di GeoPandas.",
      "B": "Opsi B salah karena bukan method GeoPandas.",
      "C": "Opsi C salah karena bukan fungsi GeoPandas.",
      "D": "Opsi D salah karena .size mengembalikan jumlah elemen baris, bukan luas geometris."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-214",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka ORM Python apakah yang menyediakan ekstensi 'GeoAlchemy2' untuk bekerja dengan tipe data spasial PostGIS di SQLAlchemy?",
    "options": {
      "A": "SQLAlchemy",
      "B": "Peewee",
      "C": "Tortoise ORM",
      "D": "Pony ORM"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoAlchemy2 mengintegrasikan tipe geometri/geografi PostGIS dan fungsi ST_* ke dalam SQLAlchemy, memungkinkan kueri spasial deklaratif di FastAPI.",
      "A": "Opsi A benar karena GeoAlchemy2 dibangun di atas SQLAlchemy.",
      "B": "Opsi B salah karena Peewee menggunakan playhouse.postgres_ext.",
      "C": "Opsi C salah karena Tortoise ORM adalah ORM async terpisah.",
      "D": "Opsi D salah karena Pony ORM adalah framework ORM independen."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-215",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Format file citra satelit raster modern apakah yang dirancang dengan ubin internal (tiled) dan piramida resolusi (overviews) agar dapat dibaca sebagian via HTTP GET Range Requests tanpa perlu mendownload seluruh file giga-byte?",
    "options": {
      "A": "Cloud Optimized GeoTIFF (COG)",
      "B": "BMP biasa",
      "C": "JPEG statis",
      "D": "RAW camera"
    },
    "answer": "A",
    "explanation": {
      "correct": "Cloud Optimized GeoTIFF (COG) menyusun blok byte data citra sehingga klien web atau server GIS dapat langsung meminta byte tertentu dari cloud storage (S3 bucket) hanya untuk area pandang yang aktif.",
      "A": "Opsi A benar karena COG adalah standar format citra satelit cloud-native industri.",
      "B": "Opsi B salah karena BMP tidak memiliki overviews maupun struktur internal geospasial.",
      "C": "Opsi C salah karena JPEG statis biasa tidak mendukung georeferensi multi-band bertingkat.",
      "D": "Opsi D salah karena file RAW kamera tidak memiliki georeferensi standar CRS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-216",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam GeoDjango, bagaimana cara menyerialisasi queryset model spasial langsung menjadi format string GeoJSON tanpa serializer eksternal?",
    "options": {
      "A": "from django.core.serializers import serialize; data = serialize('geojson', MyModel.objects.all(), geometry_field='geom')",
      "B": "data = MyModel.objects.to_geojson()",
      "C": "data = json.dumps(MyModel.objects.all())",
      "D": "data = MyModel.export_json()"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoDjango menyediakan serializer 'geojson' bawaan yang otomatis memformat entitas model menjadi struktur FeatureCollection GeoJSON lengkap beserta propertinya.",
      "A": "Opsi A benar karena merupakan fungsi resmi serialisasi GeoJSON di GeoDjango.",
      "B": "Opsi B salah karena method to_geojson tidak ada di QuerySet standar.",
      "C": "Opsi C salah karena json.dumps standar gagal mem-parse objek model Django.",
      "D": "Opsi D salah karena bukan method model Django."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-217",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka Python apakah yang menjadi antarmuka tingkat tinggi untuk membaca dan menulis data vektor spasial (seperti Shapefile, GeoPackage) menggunakan konsep iterator dictionary Python?",
    "options": {
      "A": "Fiona",
      "B": "Requests",
      "C": "NLTK",
      "D": "Spacy"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fiona membungkus library C OGR untuk membaca dan menulis dataset vektor geospasial menjadi objek kamus (dict) yang bersih dan ramah Python.",
      "A": "Opsi A benar karena Fiona adalah pustaka I/O data vektor standar di Python.",
      "B": "Opsi B salah karena Requests adalah HTTP client.",
      "C": "Opsi C salah karena NLTK untuk pemrosesan bahasa alami (NLP).",
      "D": "Opsi D salah karena Spacy untuk NLP tingkat lanjut."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-218",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam FastAPI, bagaimana cara mendefinisikan Background Tasks untuk memproses analisis spasial yang memakan waktu (seperti clipping citra satelit) setelah respons HTTP dikembalikan ke klien?",
    "options": {
      "A": "Menambahkan parameter 'background_tasks: BackgroundTasks' pada fungsi endpoint dan memanggil 'background_tasks.add_task(func, *args)'",
      "B": "Menggunakan perintah time.sleep(100)",
      "C": "Membuat proses shutdown pada server",
      "D": "Menonaktifkan async pada endpoint"
    },
    "answer": "A",
    "explanation": {
      "correct": "FastAPI BackgroundTasks memungkinkan eksekusi tugas di background tepat setelah respons HTTP 202 atau 200 terkirim, menjaga waktu respons API tetap instan bagi pengguna.",
      "A": "Opsi A benar karena BackgroundTasks adalah fitur bawaan resmi FastAPI untuk asynchronous background processing.",
      "B": "Opsi B salah karena time.sleep memblokir thread server.",
      "C": "Opsi C salah karena mematikan server menghentikan seluruh layanan.",
      "D": "Opsi D salah karena menonaktifkan async tidak membuat background task."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-219",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam Shapely, method apakah yang digunakan untuk mengecek apakah titik (Point) berada tepat di dalam batas poligon (Polygon)?",
    "options": {
      "A": "polygon.contains(point) (atau point.within(polygon))",
      "B": "polygon.has_point(point)",
      "C": "polygon.in(point)",
      "D": "polygon.inside(point)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Metode topologi OGC di Shapely menyediakan polygon.contains(point) (menghasilkan True jika titik berada di interior poligon) atau point.within(polygon).",
      "A": "Opsi A benar karena contains dan within adalah predikat topologi standar Shapely.",
      "B": "Opsi B salah karena bukan method Shapely.",
      "C": "Opsi C salah karena in adalah keyword bahasa Python.",
      "D": "Opsi D salah karena bukan method Shapely."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-220",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka analisis data ilmiah Python apakah yang menyediakan struktur data N-Dimensional Array berlabel yang sangat populer untuk analisis citra satelit berseri waktu (data cube)?",
    "options": {
      "A": "Xarray",
      "B": "Flask",
      "C": "PyTest",
      "D": "BeautifulSoup"
    },
    "answer": "A",
    "explanation": {
      "correct": "Xarray memperkenalkan label dimensi, koordinat, dan atribut pada array multi-dimensi NumPy, menjadi standar komputasi geosains untuk data cuaca dan citra satelit time-series (seperti NetCDF / Zarr).",
      "A": "Opsi A benar karena Xarray adalah pustaka standar komputasi multi-dimensional data cube geosains.",
      "B": "Opsi B salah karena Flask adalah web framework.",
      "C": "Opsi C salah karena PyTest adalah framework pengujian unit.",
      "D": "Opsi D salah karena BeautifulSoup adalah library parser HTML."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-221",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Format geodatabase terbuka berbasis SQLite satu file (.gpkg) yang distandarisasi oleh OGC untuk menyimpan data vektor dan raster sekaligus tanpa batasan ukuran Shapefile 2GB adalah:",
    "options": {
      "A": "GeoPackage",
      "B": "KML",
      "C": "GML",
      "D": "MapInfo TAB"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoPackage (.gpkg) adalah standar terbuka modern OGC berbasis container database SQLite yang mengatasi semua keterbatasan kuno format ESRI Shapefile (seperti batasan ukuran 2GB dan pemotongan nama kolom 10 karakter).",
      "A": "Opsi A benar karena GeoPackage adalah format wadah spasial standar OGC modern berbasis SQLite.",
      "B": "Opsi B salah karena KML adalah format berbasis teks XML.",
      "C": "Opsi C salah karena GML adalah format XML verbose.",
      "D": "Opsi D salah karena MapInfo TAB adalah format proprietary lama."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-222",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam GeoPandas, bagaimana cara menghitung titik pusat massa (centroid) dari setiap poligon di dalam layer?",
    "options": {
      "A": "centroids = gdf.geometry.centroid",
      "B": "centroids = gdf.get_center_points()",
      "C": "centroids = gpd.calc_middle(gdf)",
      "D": "centroids = gdf.geometry.center"
    },
    "answer": "A",
    "explanation": {
      "correct": "Properti .geometry.centroid mengembalikan GeoSeries berisi titik geometris (Point) yang mewakili pusat gravitasi geometris dari setiap poligon.",
      "A": "Opsi A benar karena .geometry.centroid adalah properti resmi perhitungan titik pusat di GeoPandas.",
      "B": "Opsi B salah karena bukan method GeoPandas.",
      "C": "Opsi C salah karena bukan fungsi GeoPandas.",
      "D": "Opsi D salah karena bukan properti GeoPandas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-223",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam FastAPI, bagaimana cara menangani error validasi kustom dan mengembalikan format JSON terstandar saat data koordinat di luar jangkauan geografis?",
    "options": {
      "A": "Mendefinisikan @app.exception_handler(RequestValidationError) kustom dan mengembalikan JSONResponse",
      "B": "Menghapus exception dari skrip Python",
      "C": "Mengembalikan string teks error polos",
      "D": "Mematikan server Uvicorn"
    },
    "answer": "A",
    "explanation": {
      "correct": "FastAPI memungkinkan pendaftaran custom exception handler untuk mencegat RequestValidationError dari Pydantic dan memformat pesan error ke skema respons yang disesuaikan.",
      "A": "Opsi A benar karena exception handler terpusat adalah cara terstandar kustomisasi respons error di FastAPI.",
      "B": "Opsi B salah karena error harus divalidasi dan ditangani.",
      "C": "Opsi C salah karena REST API profesional mewajibkan respons terstruktur berformat JSON.",
      "D": "Opsi D salah karena mematikan server merusak layanan aplikasi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-224",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Dalam Rasterio, bagaimana cara memotong (mask/clip) citra raster satelit berdasarkan batas poligon area studi dari file GeoJSON?",
    "options": {
      "A": "Menggunakan fungsi 'rasterio.mask.mask(src, shapes, crop=True)'",
      "B": "Menggunakan method src.clip_image(shapes)",
      "C": "Memotong array secara manual dengan for loop piksel",
      "D": "Mengubah file raster menjadi vektor terlebih dahulu"
    },
    "answer": "A",
    "explanation": {
      "correct": "rasterio.mask.mask mengekstrak subset piksel yang berada di dalam poligon geometri vektor (shapes) dan mengatur nilai di luar poligon menjadi nilai nodata.",
      "A": "Opsi A benar karena rasterio.mask.mask adalah fungsi clipping raster standar.",
      "B": "Opsi B salah karena bukan method Rasterio.",
      "C": "Opsi C salah karena iterasi for loop piksel di Python sangat lambat.",
      "D": "Opsi D salah karena vektorisasi citra satelit skala penuh sangat boros komputasi dan tidak diperlukan hanya untuk clipping."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-225",
    "level": "intermediate",
    "topic": "Python (FastAPI atau Django)",
    "question": "Pustaka Python open source apakah yang digunakan untuk membangun antarmuka dasbor web data geospasial interaktif secara cepat (Rapid Prototyping) berbasis Python murni?",
    "options": {
      "A": "Streamlit (atau Panel / Dash)",
      "B": "Pygame",
      "C": "Tkinter",
      "D": "Numpy murni"
    },
    "answer": "A",
    "explanation": {
      "correct": "Streamlit memungkinkan data scientist dan GIS developer membangun aplikasi web interaktif lengkap dengan peta Folium/PyDeck hanya dengan menulis skrip Python pendek.",
      "A": "Opsi A benar karena Streamlit adalah framework dashboard data Python terkemuka.",
      "B": "Opsi B salah karena Pygame untuk pembuatan game 2D desktop.",
      "C": "Opsi C salah karena Tkinter untuk GUI desktop lama.",
      "D": "Opsi D salah karena NumPy murni tidak memiliki komponen server UI web."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-226",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "question": "Perintah PostgreSQL apakah yang digunakan untuk menganalisis dan memperbarui statistik perencana kueri (query planner statistics) pada tabel database spasial?",
    "options": {
      "A": "ANALYZE nama_tabel;",
      "B": "UPDATE STATISTICS;",
      "C": "REFRESH TABLE;",
      "D": "RECALCULATE;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perintah ANALYZE mengumpulkan statistik distribusi data pada kolom tabel yang digunakan oleh PostgreSQL Query Optimizer untuk menentukan rencana eksekusi tercepat (seperti memilih Index Scan vs Seq Scan).",
      "A": "Opsi A benar karena ANALYZE adalah perintah resmi pembaruan statistik kueri di PostgreSQL.",
      "B": "Opsi B salah karena UPDATE STATISTICS adalah dialek SQL Server.",
      "C": "Opsi C salah karena REFRESH TABLE bukan perintah PostgreSQL standar.",
      "D": "Opsi D salah karena bukan perintah SQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-227",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "question": "Dalam PostgreSQL, bagaimana cara membuat indeks GIN pada kolom JSONB agar pencarian berbasis operator containment ('@>') berjalan instan?",
    "options": {
      "A": "CREATE INDEX idx_props ON features USING GIN (properties);",
      "B": "CREATE INDEX idx_props ON features USING BTREE (properties);",
      "C": "CREATE INDEX idx_props ON features (properties JSON);",
      "D": "CREATE UNIQUE GIN INDEX ON features (properties);"
    },
    "answer": "A",
    "explanation": {
      "correct": "Indeks GIN (Generalized Inverted Index) mengindeks setiap pasangan key dan value di dalam dokumen JSONB, memungkinkan pencarian ekspresi WHERE properties @> '{\"status\": \"active\"}' dieksekusi secepat kilat.",
      "A": "Opsi A benar karena GIN adalah tipe indeks standar untuk penelusuran dokumen JSONB di PostgreSQL.",
      "B": "Opsi B salah karena B-Tree hanya bisa mencocokkan kesamaan string dokumen secara utuh, bukan mengekstrak atribut di dalamnya.",
      "C": "Opsi C salah karena bukan sintaks pembuatan indeks PostgreSQL.",
      "D": "Opsi D salah karena GIN tidak mendukung batasan UNIQUE."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-228",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "question": "Mengapa penggunaan connection pooler eksternal seperti 'PgBouncer' sangat penting pada aplikasi backend GIS dengan ribuan koneksi konkuren?",
    "options": {
      "A": "PostgreSQL menggunakan model arsitektur satu proses (process-based) per koneksi klien yang memakan memori RAM besar (~10MB per koneksi); PgBouncer mendaur ulang koneksi server yang sudah ada untuk ribuan klien via pooling transaksi",
      "B": "PgBouncer mengubah database menjadi file NoSQL",
      "C": "PgBouncer menghapus query yang mengandung syntax error",
      "D": "PgBouncer mengompresi data tabel menjadi format RAR"
    },
    "answer": "A",
    "explanation": {
      "correct": "Setiap koneksi langsung ke PostgreSQL membuat proses background OS baru. Menghubungkan 5.000 klien secara langsung akan menghabiskan memori RAM dan membebani CPU context switching. PgBouncer menjadi pintu tengah yang mengelola koneksi server secara hemat dan efisien.",
      "A": "Opsi A benar karena menjelaskan keunggulan pengelolaan koneksi berbasis proses via PgBouncer.",
      "B": "Opsi B salah karena PgBouncer tidak mengubah engine penyimpanan PostgreSQL.",
      "C": "Opsi C salah karena PgBouncer adalah proxy TCP, bukan parser syntax kueri.",
      "D": "Opsi D salah karena bukan archiver file."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-229",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "question": "Fungsi window SQL PostgreSQL apakah yang digunakan untuk membagi hasil kueri ke dalam kelompok persentase atau N ember berukuran sama (misal membagi skor risiko banjir ke dalam 4 kuartil)?",
    "options": {
      "A": "NTILE(4) OVER (ORDER BY risk_score)",
      "B": "CHUNK(4)",
      "C": "SPLIT(4)",
      "D": "BUCKET(4)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi NTILE(n) membagi baris terurut ke dalam sejumlah n bucket bernomor 1 sampai n secara proporsional.",
      "A": "Opsi A benar karena NTILE adalah fungsi window resmi pembagian kuartil/persentil di SQL.",
      "B": "Opsi B salah karena bukan fungsi SQL.",
      "C": "Opsi C salah karena bukan fungsi SQL.",
      "D": "Opsi D salah karena bukan fungsi SQL standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-230",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "question": "Klausa SQL apakah di PostgreSQL yang digunakan untuk melakukan operasi 'Upsert' (Insert data baru, atau Update jika data dengan primary key/unique key yang sama sudah ada)?",
    "options": {
      "A": "INSERT INTO ... ON CONFLICT (id) DO UPDATE SET ...",
      "B": "INSERT OR REPLACE INTO ... (hanya dialek SQLite/MySQL)",
      "C": "INSERT IGNORE (hanya dialek MySQL)",
      "D": "MERGE IF EXISTS"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa 'ON CONFLICT (target_kolom) DO UPDATE SET ...' adalah sintaks resmi PostgreSQL untuk menangani benturan constraint unik dan melakukan pembaruan secara atomik.",
      "A": "Opsi A benar karena ON CONFLICT DO UPDATE adalah fitur Upsert standar PostgreSQL.",
      "B": "Opsi B salah karena INSERT OR REPLACE adalah sintaks SQLite dan MySQL lama.",
      "C": "Opsi C salah karena INSERT IGNORE adalah sintaks spesifik MySQL.",
      "D": "Opsi D salah karena bukan sintaks PostgreSQL standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-231",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Operator spasial PostGIS apakah yang digunakan untuk membandingkan apakah Bounding Box (kotak batas) dari geometri A beririsan dengan Bounding Box geometri B dengan memanfaatkan indeks GiST?",
    "options": {
      "A": "geomA && geomB",
      "B": "geomA == geomB",
      "C": "geomA // geomB",
      "D": "geomA <> geomB"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator '&&' adalah operator penelusuran indeks bounding box di PostGIS. Menggunakan 'WHERE geom && ST_MakeEnvelope(...)' memungkinkan kueri langsung menyaring data menggunakan indeks GiST secara instan sebelum fungsi evaluasi geometris eksak dijalankan.",
      "A": "Opsi A benar karena operator '&&' adalah operator bounding box overlap PostGIS berindeks GiST.",
      "B": "Opsi B salah karena == adalah perbandingan bahasa pemrograman, bukan operator SQL spasial.",
      "C": "Opsi C salah karena // bukan operator PostGIS.",
      "D": "Opsi D salah karena <> adalah operator tidak sama dengan standar SQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-232",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi predikat spasial PostGIS apakah yang memeriksa apakah poligon A sepenuhnya memuat (encloses) geometri B tanpa ada bagian B yang berada di luar batas A?",
    "options": {
      "A": "ST_Contains(geomA, geomB)",
      "B": "ST_Touches(geomA, geomB)",
      "C": "ST_Crosses(geomA, geomB)",
      "D": "ST_Overlaps(geomA, geomB)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Contains(A, B) menghasilkan TRUE jika tidak ada titik dari geometri B yang berada di eksterior geometri A, dan minimal satu titik interior B berada di interior A.",
      "A": "Opsi A benar karena ST_Contains menguji hubungan penahanan spasial penuh.",
      "B": "Opsi B salah karena ST_Touches hanya jika geometri bersentuhan di garis batas (boundary) tanpa irisan interior.",
      "C": "Opsi C salah karena ST_Crosses untuk garis yang menyilang garis atau poligon.",
      "D": "Opsi D salah karena ST_Overlaps untuk geometri berdimensi sama yang saling bertumpang tindih sebagian."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-233",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang mengembalikan geometri baru yang merupakan irisan perpotongan fisik (intersection area) antara dua geometri?",
    "options": {
      "A": "ST_Intersection(geomA, geomB)",
      "B": "ST_Intersects(geomA, geomB)",
      "C": "ST_Cut(geomA, geomB)",
      "D": "ST_Slice(geomA, geomB)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perhatikan perbedaannya: ST_Intersects (dengan huruf 's') mengembalikan boolean True/False, sedangkan ST_Intersection (kata benda) menghasilkan objek Geometri baru hasil perpotongan kedua bentuk spasial tersebut.",
      "A": "Opsi A benar karena ST_Intersection mengembalikan objek geometri potongan ruang bersama.",
      "B": "Opsi B salah karena ST_Intersects hanya mengembalikan boolean predikat relasi, bukan bentuk geometri baru.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-234",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk menggabungkan sekumpulan geometri baris (seperti agregasi GROUP BY) menjadi satu kesatuan multi-geometri (agregat spasial)?",
    "options": {
      "A": "ST_Union(geom)",
      "B": "ST_Collect(geom)",
      "C": "SUM(geom)",
      "D": "ST_MergeAll(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Union sebagai fungsi agregat (GROUP BY) meleburkan batas internal antar poligon tetangga menjadi satu geometri utuh (operasi topological dissolve).",
      "A": "Opsi A benar karena ST_Union adalah fungsi agregat penggabungan dan dissolusi batas poligon.",
      "B": "Opsi B salah karena ST_Collect hanya mengelompokkan ke MultiGeometry tanpa menghilangkan garis batas internal (non-topological collection).",
      "C": "Opsi C salah karena SUM adalah fungsi matematis skalar angka murni.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-235",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk menyederhanakan (simplifikasi) geometri poligon atau garis kompleks menggunakan algoritma Douglas-Peucker demi mempercepat transfer data ke web?",
    "options": {
      "A": "ST_Simplify(geom, tolerance)",
      "B": "ST_Reduce(geom, tolerance)",
      "C": "ST_Shrink(geom, tolerance)",
      "D": "ST_Compress(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Simplify memangkas jumlah titik vertex pada garis/poligon berdasarkan nilai toleransi jarak yang ditentukan, memperkecil ukuran file transfer tanpa merusak bentuk umum.",
      "A": "Opsi A benar karena ST_Simplify mengimplementasikan algoritma simplifikasi Douglas-Peucker.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi kompresi geometri PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-236",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Apa keunggulan dari fungsi 'ST_SimplifyPreserveTopology(geom, tolerance)' dibandingkan 'ST_Simplify()' biasa?",
    "options": {
      "A": "Mencegah terjadinya kerusakan topologi seperti timbulnya poligon yang saling silang sendiri (self-intersecting polygons) atau lubang pulau yang runtuh",
      "B": "Menghasilkan ukuran file yang lebih besar 100 kali lipat",
      "C": "Hanya bisa digunakan untuk titik 1D",
      "D": "Menghapus semua atribut teks"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Simplify biasa dapat membuat poligon menjadi tidak valid (self-intersection) jika toleransinya terlalu besar. ST_SimplifyPreserveTopology menjamin geometri hasil penyederhanaan tetap valid sesuai standar OGC.",
      "A": "Opsi A benar karena mempertahankan validitas topologi poligon.",
      "B": "Opsi B salah karena tujuan simplifikasi justru memperkecil byte data.",
      "C": "Opsi C salah karena simplifikasi ditujukan untuk garis dan poligon 2D.",
      "D": "Opsi D salah karena fungsi geometri tidak menghapus atribut tabular baris."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-237",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS berkinerja tinggi apakah yang diperkenalkan untuk memproduksi Vector Tiles (MVT - Mapbox Vector Tiles) langsung di dalam database dalam format Protocol Buffers biner?",
    "options": {
      "A": "ST_AsMVT(mvtgeom.*)",
      "B": "ST_AsGeoJSONTile()",
      "C": "ST_CreateTile()",
      "D": "ST_VectorTileFormat()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_AsMVT mengonversi kumpulan baris geometri dan atribut menjadi payload biner Mapbox Vector Tile (MVT format .pbf) secara langsung di dalam PostgreSQL, sangat efisien untuk arsitektur dynamic tile server.",
      "A": "Opsi A benar karena ST_AsMVT adalah fungsi resmi pembuatan Vector Tiles di PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-238",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi pembantu apakah yang biasanya dipasangkan sebelum ST_AsMVT untuk memproyeksikan koordinat dunia nyata ke dalam sistem koordinat piksel lokal ubin (misal 4096 x 4096)?",
    "options": {
      "A": "ST_AsMVTGeom(geom, bounds, extent, buffer, clip_geom)",
      "B": "ST_ScaleToTile(geom)",
      "C": "ST_ProjectPixel(geom)",
      "D": "ST_TileMatrix(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_AsMVTGeom memotong (clip) dan mentransformasikan koordinat geometri global ke koordinat integer lokal ubin raster (tile extent 4096) sebelum dikemas oleh ST_AsMVT.",
      "A": "Opsi A benar karena ST_AsMVTGeom adalah fungsi penyiapan geometri ubin MVT.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-239",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi kueri tetangga terdekat (KNN - K-Nearest Neighbors) dengan operator '<->' di PostGIS digunakan untuk:",
    "options": {
      "A": "Menemukan N titik fasilitas terdekat secara instan menggunakan indeks GiST berbasis jarak euclidean (contoh: ORDER BY geom <-> :target_pt LIMIT 5)",
      "B": "Menghubungkan dua tabel database yang berbeda server",
      "C": "Mengurutkan data berdasarkan abjad",
      "D": "Menghapus titik yang berjarak jauh"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator indeks KNN '<->' (index-assisted distance operator) memungkinkan query '5 rumah sakit terdekat' diselesaikan dalam hitungan sub-milidetik langsung dari pohon indeks tanpa harus menghitung jarak seluruh baris tabel.",
      "A": "Opsi A benar karena operator <-> adalah operator KNN terindeks di PostGIS.",
      "B": "Opsi B salah karena bukan modul federasi database.",
      "C": "Opsi C salah karena bukan pengurutan teks leksikografis.",
      "D": "Opsi D salah karena kueri SELECT tidak menghapus data."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-240",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk memperbaiki geometri yang rusak atau tidak valid (seperti poligon berpita silang) menjadi geometri valid sesuai aturan OGC?",
    "options": {
      "A": "ST_MakeValid(geom)",
      "B": "ST_FixGeometry(geom)",
      "C": "ST_Repair(geom)",
      "D": "ST_CleanUp(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_MakeValid menganalisis topologi geometri yang invalid dan merekonstruksinya menjadi geometri valid (misal memecah poligon pita silang menjadi MultiPolygon).",
      "A": "Opsi A benar karena ST_MakeValid adalah fungsi perbaikan topologi resmi PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-241",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk menghasilkan poligon kotak batas (Bounding Box) persegi dari koordinat minimum dan maksimum: (minX, minY, maxX, maxY, srid)?",
    "options": {
      "A": "ST_MakeEnvelope(minX, minY, maxX, maxY, srid)",
      "B": "ST_CreateBox(minX, minY, maxX, maxY)",
      "C": "ST_BBox(minX, minY, maxX, maxY)",
      "D": "ST_Rect(minX, minY, maxX, maxY)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_MakeEnvelope adalah fungsi paling efisien untuk membuat poligon Bounding Box ber-SRID untuk menyaring data spasial pada kueri viewport peta web.",
      "A": "Opsi A benar karena ST_MakeEnvelope adalah fungsi resmi pembangun poligon BBOX PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi pembangun geometri PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-242",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Kapan Anda sebaiknya menggunakan fungsi predikat 'ST_DWithin(geomA, geomB, jarak)' dibandingkan 'ST_Distance(geomA, geomB) < jarak'?",
    "options": {
      "A": "ST_DWithin secara otomatis memanfaatkan indeks spasial GiST (menggunakan bounding box expansion internal), sedangkan ST_Distance mengharuskan perhitungan jarak pada seluruh baris tabel (full table scan)",
      "B": "ST_Distance hanya bekerja untuk angka negatif",
      "C": "ST_DWithin tidak mendukung proyeksi WGS84",
      "D": "Keduanya memiliki rencana eksekusi dan kecepatan yang identik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ini adalah aturan emas optimasi PostGIS: hindari ST_Distance() < R di klausul WHERE karena tidak dapat menggunakan indeks GiST. Gunakan ST_DWithin yang dirancang khusus untuk mempercepat kueri radius via indeks pohon GiST.",
      "A": "Opsi A benar karena ST_DWithin memanfaatkan indeks spasial secara optimal.",
      "B": "Opsi B salah karena ST_Distance menghasilkan jarak positif matematis.",
      "C": "Opsi C salah karena ST_DWithin mendukung penuh tipe geometry dan geography WGS84.",
      "D": "Opsi D salah karena performa ST_DWithin ribuan kali lebih cepat pada tabel besar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-243",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk mengekstrak titik tengah atau pusat massa (Centroid) dari sebuah poligon kompleks?",
    "options": {
      "A": "ST_Centroid(geom)",
      "B": "ST_Middle(geom)",
      "C": "ST_Center(geom)",
      "D": "ST_PointOnSurface(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Centroid menghitung pusat gravitasi geometris 2D dari geometri input (catatan: untuk poligon berbentuk bulan sabit, centroid bisa berada di luar poligon; gunakan ST_PointOnSurface jika titik wajib berada di dalam badan poligon).",
      "A": "Opsi A benar karena ST_Centroid adalah fungsi resmi titik pusat massa PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena ST_PointOnSurface menjamin titik berada di interior permukaan, bukan centroid geometris matematis murni."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-244",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Tabel metadata sistem apakah di PostGIS yang mencatat daftar semua tabel yang memiliki kolom spasial, nama kolom geometri, tipe geometri, dimensi, dan nilai SRID-nya?",
    "options": {
      "A": "geometry_columns",
      "B": "spatial_tables",
      "C": "postgis_registry",
      "D": "geom_metadata"
    },
    "answer": "A",
    "explanation": {
      "correct": "View 'geometry_columns' adalah katalog metadata standar OGC di database PostGIS yang menginventarisir seluruh kolom geometri di seluruh skema database.",
      "A": "Opsi A benar karena geometry_columns adalah view katalog standar PostGIS.",
      "B": "Opsi B salah karena bukan katalog standar.",
      "C": "Opsi C salah karena bukan katalog standar.",
      "D": "Opsi D salah karena bukan katalog standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-245",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "question": "Teknik apakah di database PostgreSQL yang membagi tabel spasial raksasa (puluhan juta data) menjadi tabel-tabel anak yang lebih kecil berdasarkan rentang nilai atau wilayah (seperti partisi tahunan atau provinsi)?",
    "options": {
      "A": "Table Partitioning (Declarative Partitioning)",
      "B": "Table Compaction",
      "C": "Table Zip",
      "D": "Table Encryption"
    },
    "answer": "A",
    "explanation": {
      "correct": "Table Partitioning memungkinkan query optimizer melakukan 'Partition Pruning' (mengabaikan tabel partisi lain yang tidak relevan dengan kriteria WHERE), meningkatkan efisiensi scanning dan pemeliharaan indeks.",
      "A": "Opsi A benar karena Table Partitioning memecah tabel besar menjadi segmen modular.",
      "B": "Opsi B salah karena bukan teknik partisi skema.",
      "C": "Opsi C salah karena bukan teknik skema database.",
      "D": "Opsi D salah karena enkripsi adalah pengamanan kriptografi data at rest."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-246",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk membagi (subdivide) poligon yang memiliki puluhan ribu vertex menjadi poligon-poligon kecil yang lebih sederhana agar evaluasi indeks spasial berjalan jauh lebih cepat?",
    "options": {
      "A": "ST_Subdivide(geom, max_vertices)",
      "B": "ST_Split(geom)",
      "C": "ST_Chop(geom)",
      "D": "ST_Fragment(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Poligon raksasa dengan ribuan vertex (seperti batas negara) memiliki Bounding Box sangat besar dan evaluasi komputasi yang mahal. ST_Subdivide memotongnya menjadi kepingan-kepingan berukuran maksimal N vertex (default 256) untuk memaksimalkan efisiensi indeks GiST.",
      "A": "Opsi A benar karena ST_Subdivide adalah teknik standar optimasi poligon raksasa di PostGIS.",
      "B": "Opsi B salah karena ST_Split memotong geometri dengan garis pemotong spesifik.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-247",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi agregat spasial PostGIS apakah yang digunakan untuk mengelompokkan sekumpulan titik fitur ke dalam cluster-cluster terpisah berdasarkan kedekatan spasial menggunakan algoritma DBSCAN?",
    "options": {
      "A": "ST_ClusterDBSCAN(geom, eps, minpoints) OVER ()",
      "B": "ST_ClusterKMeans(geom, k) OVER ()",
      "C": "ST_GroupPoints(geom)",
      "D": "ST_SpatialAggregate(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_ClusterDBSCAN adalah window function PostGIS yang menetapkan ID cluster untuk setiap baris titik menggunakan algoritma density-based clustering (DBSCAN) dengan toleransi jarak (eps) dan jumlah minimum tetangga (minpoints).",
      "A": "Opsi A benar karena ST_ClusterDBSCAN mengimplementasikan algoritma clustering densitas spasial.",
      "B": "Opsi B salah karena ST_ClusterKMeans mengimplementasikan algoritma K-Means yang memerlukan penetapan jumlah cluster k tetap di awal.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-248",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk mengonversi geometri WKB (Well-Known Binary) kembali menjadi tipe geometri native PostGIS?",
    "options": {
      "A": "ST_GeomFromWKB(bytea_data, srid)",
      "B": "ST_ParseBinary()",
      "C": "ST_BinaryToShape()",
      "D": "ST_ReadWKB()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_GeomFromWKB membaca format biner standar OGC byte array dan mengembalikan objek geometri PostGIS.",
      "A": "Opsi A benar karena ST_GeomFromWKB adalah fungsi parser biner WKB resmi PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-249",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk menghasilkan poligon pembungkus cembung terluar (Convex Hull) yang mencakup seluruh kumpulan titik geometri?",
    "options": {
      "A": "ST_ConvexHull(geom)",
      "B": "ST_Envelope(geom)",
      "C": "ST_BoundingPolygon(geom)",
      "D": "ST_OuterRing(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_ConvexHull menghitung poligon cembung terkecil (seperti karet gelang yang dibentangkan mengelilingi paku-paku titik) yang melingkupi semua geometri.",
      "A": "Opsi A benar karena ST_ConvexHull adalah fungsi pembangun convex hull resmi PostGIS.",
      "B": "Opsi B salah karena ST_Envelope menghasilkan kotak batas persegi panjang sejajar sumbu (BBOX).",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena ST_OuterRing mengekstrak garis cincin batas terluar dari satu poligon tunggal."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-250",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "question": "Dalam PostgreSQL, apa manfaat menggunakan kueri bersarang dengan klausa 'LATERAL JOIN' pada kueri spasial?",
    "options": {
      "A": "Memungkinkan subquery di sisi kanan untuk merujuk ke kolom dari tabel di sisi kiri secara baris demi baris (sangat ideal untuk kueri KNN mencari N tetangga terdekat per setiap baris data induk)",
      "B": "LATERAL JOIN menonaktifkan transaksi database",
      "C": "LATERAL JOIN mengubah data menjadi format JSON",
      "D": "LATERAL JOIN hanya bisa digunakan untuk tabel kosong"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa 'CROSS JOIN LATERAL (...)' memungkinkan evaluasi dinamis subquery untuk setiap baris parent, menjadi standar industri untuk mencari '3 toko terdekat untuk setiap pelanggan' menggunakan indeks KNN.",
      "A": "Opsi A benar karena LATERAL join memungkinkan korelasi baris per baris yang sangat efisien untuk kueri spasial.",
      "B": "Opsi B salah karena tidak mempengaruhi transaksi database.",
      "C": "Opsi C salah karena bukan fungsi serialisasi JSON.",
      "D": "Opsi D salah karena digunakan pada tabel berisi jutaan data."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-251",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Dalam sistem proyeksi Universal Transverse Mercator (UTM), berapa derajat lebar zona bujur (longitude span) untuk setiap zona UTM dunia?",
    "options": {
      "A": "6 derajat bujur",
      "B": "15 derajat bujur",
      "C": "30 derajat bujur",
      "D": "1 derajat bujur"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dunia dibagi menjadi 60 zona UTM, masing-masing memiliki lebar tepat 6° bujur (dari zona 1 pada 180°W-174°W hingga zona 60), dirancang untuk membatasi distorsi skala pada tingkat lokal di bawah 0.04%.",
      "A": "Opsi A benar karena setiap zona UTM membentang selebar 6 derajat bujur.",
      "B": "Opsi B salah karena 15 derajat adalah lebar zona waktu dunia.",
      "C": "Opsi C salah karena 30 derajat terlalu lebar dan akan menimbulkan distorsi proyeksi yang tidak dapat diterima.",
      "D": "Opsi D salah karena 1 derajat terlalu sempit dan membutuhkan 360 zona."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-252",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Wilayah DKI Jakarta dan Jawa Barat bagian barat berada pada zona UTM berapakah di belahan bumi selatan?",
    "options": {
      "A": "UTM Zone 48S (EPSG:32748)",
      "B": "UTM Zone 50N",
      "C": "UTM Zone 1S",
      "D": "UTM Zone 60S"
    },
    "answer": "A",
    "explanation": {
      "correct": "Indonesia membentang dari zona UTM 46 hingga 54. DKI Jakarta (sekitar 106.8° BT dan 6.2° LS) terletak di Zona 48 Belahan Bumi Selatan (UTM Zone 48 South / EPSG:32748).",
      "A": "Opsi A benar karena Zona 48S adalah zona UTM resmi wilayah Jakarta dan Jawa Barat.",
      "B": "Opsi B salah karena 50N berada di belahan bumi utara (Kalimantan/Sulawesi utara).",
      "C": "Opsi C salah karena Zona 1S berada di Samudra Pasifik dekat garis penanggalan internasional.",
      "D": "Opsi D salah karena Zona 60S berada di dekat Selandia Baru."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-253",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Mengapa pada proyeksi peta UTM diberikan nilai False Easting sebesar 500.000 meter pada Central Meridian setiap zona?",
    "options": {
      "A": "Untuk menghindari timbulnya angka koordinat X yang bernilai negatif di sebelah barat central meridian zona tersebut",
      "B": "Karena bumi berputar sejauh 500.000 meter per detik",
      "C": "Untuk menyamakan koordinat dengan garis ekuator",
      "D": "Hanya konvensi acak tanpa alasan teknis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Central Meridian zona UTM diberi nilai semu (False Easting) 500.000m. Karena lebar zona di ekuator maksimum ~668 km (±334 km dari meridian tengah), koordinat X di ujung barat zona tetap bernilai positif (> 160.000m).",
      "A": "Opsi A benar karena False Easting mencegah koordinat absis negatif di dalam zona.",
      "B": "Opsi B salah karena kecepatan rotasi bumi di ekuator ~460 m/s.",
      "C": "Opsi C salah karena ekuator menggunakan False Northing (10.000.000m untuk belahan selatan).",
      "D": "Opsi D salah karena ini adalah keputusan matematis sistematis pemetaan kartografi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-254",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Apakah perbedaan geodetik antara 'Geoid' dan 'Ellipsoid' dalam pemodelan bentuk bumi?",
    "options": {
      "A": "Ellipsoid adalah model matematis permukaan bumi yang halus dan teratur (seperti WGS84), sedangkan Geoid adalah permukaan ekuipotensial medan gravitasi bumi nyata yang tidak teratur yang bertepatan dengan permukaan laut rata-rata (MSL)",
      "B": "Ellipsoid berbentuk kubus sedangkan Geoid berbentuk bola sempurna",
      "C": "Geoid hanya berlaku untuk daratan sedangkan Ellipsoid untuk lautan",
      "D": "Keduanya persis sama dan saling menggantikan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ellipsoid digunakan sebagai bidang referensi koordinat horizontal (lintang/bujur), sedangkan Geoid digunakan sebagai datum vertikal untuk mengukur tinggi orthometrik (ketinggian fisik air mengalir). Undulasi Geoid adalah selisih tinggi antara keduanya.",
      "A": "Opsi A benar karena mendefinisikan perbedaan geodetik model matematis elipsoid vs model fisik gravitasi geoid.",
      "B": "Opsi B salah karena bentuk geometris bumi bukan kubus.",
      "C": "Opsi C salah karena geoid mencakup seluruh bumi termasuk daratan.",
      "D": "Opsi D salah karena keduanya mewakili bidang referensi geodetik yang berbeda secara fisik."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-255",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Dalam struktur piramida ubin peta web (Tile Pyramid), jika pada Zoom Level 0 seluruh dunia direpresentasikan oleh 1 tile (ubin tunggal), berapakah total jumlah tile pada Zoom Level 3?",
    "options": {
      "A": "64 tiles (rumus: 4^zoom = 4^3 = 64)",
      "B": "8 tiles",
      "C": "16 tiles",
      "D": "512 tiles"
    },
    "answer": "A",
    "explanation": {
      "correct": "Setiap kenaikan 1 zoom level membagi setiap tile menjadi 4 tile baru (2x2 grid kuadran). Jadi jumlah tile pada zoom Z adalah 4^Z = 4^3 = 64 tile (8 kolom x 8 baris ubin).",
      "A": "Opsi A benar karena kalkulasi quadtree pyramid 4^3 menghasilkan 64 ubin.",
      "B": "Opsi B salah karena 8 adalah jumlah ubin per sumbu, bukan total seluruh grid.",
      "C": "Opsi C salah karena 16 adalah total ubin untuk zoom level 2 (4^2).",
      "D": "Opsi D salah karena 512 adalah 2^9."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-256",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Apakah perbedaan utama antara ubin peta 'Raster Tiles' (.png/.jpg) dan 'Vector Tiles' (.pbf / MVT) di aplikasi web GIS modern?",
    "options": {
      "A": "Raster Tiles adalah gambar piksel statis yang dirender di server, sedangkan Vector Tiles mengirimkan geometri vektor mentah berbobot ringan sehingga styling, filtering, dan rotasi peta dilakukan secara dinamis di klien menggunakan GPU",
      "B": "Vector Tiles memiliki ukuran file 100 kali lebih besar daripada Raster Tiles",
      "C": "Vector Tiles tidak bisa diberi warna",
      "D": "Raster Tiles tidak memerlukan koneksi internet"
    },
    "answer": "A",
    "explanation": {
      "correct": "Vector Tiles memisahkan data dari gaya tampilan (styling). Format Protocol Buffers (.pbf) sangat padat dan memungkinkan styling dinamis (seperti dark mode seketika tanpa re-download tile), rotasi teks halus tanpa terbalik, dan interaktivitas hover.",
      "A": "Opsi A benar karena membedakan server-side pixel rendering vs client-side GPU vector styling.",
      "B": "Opsi B salah karena Vector Tiles justru berukuran jauh lebih kecil dan hemat bandwidth daripada gambar PNG.",
      "C": "Opsi C salah karena Vector Tiles mendukung styling fleksibel penuh via JSON style specification (seperti MapLibre/Mapbox GL style).",
      "D": "Opsi D salah karena kedua tipe ubin peta web tetap diunduh via protokol HTTP."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-257",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Format data topologi spasial berbasis JSON apakah yang merupakan ekstensi dari GeoJSON yang menyimpan informasi keterhubungan batas (arcs) bersama sehingga menghilangkan redundansi garis perbatasan antar wilayah?",
    "options": {
      "A": "TopoJSON",
      "B": "Shapefile",
      "C": "KML",
      "D": "GeoPackage"
    },
    "answer": "A",
    "explanation": {
      "correct": "TopoJSON mengkodekan topologi: alih-alih menduplikasi garis perbatasan bersama antara dua negara atau provinsi (yang menyebabkan file GeoJSON membengkak), batas disimpan satu kali sebagai 'arc' bersama, mengurangi ukuran file hingga 80%.",
      "A": "Opsi A benar karena TopoJSON mengeliminasi redundansi perbatasan dengan topologi shared arcs.",
      "B": "Opsi B salah karena Shapefile menduplikasi geometri poligon batas.",
      "C": "Opsi C salah karena KML tidak mengelola topologi terkompresi arcs.",
      "D": "Opsi D salah karena GeoPackage adalah database SQLite spasial, bukan format topologi arc JSON."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-258",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Apakah perbedaan mendasar antara citra satelit 'Optik' (seperti Sentinel-2/Landsat) dan citra satelit 'SAR' (Synthetic Aperture Radar, seperti Sentinel-1)?",
    "options": {
      "A": "Sensor optik mengandalkan pantulan cahaya matahari pasif dan terhalang oleh awan/malam hari, sedangkan SAR adalah sensor aktif berbasis gelombang mikro radar yang mampu menembus awan tebal dan beroperasi siang maupun malam",
      "B": "SAR hanya menghasilkan gambar berwarna RGB alami",
      "C": "Satelit optik tidak memiliki resolusi spasial",
      "D": "SAR dilarang digunakan untuk pemantauan banjir"
    },
    "answer": "A",
    "explanation": {
      "correct": "SAR memancarkan pulsa gelombang mikro sendiri dan merekam pantulan kembali (backscatter). Karena panjang gelombang radar jauh lebih panjang daripada partikel uap air awan, SAR dapat menembus kabut, asap kebakaran, dan awan tropis secara konsisten.",
      "A": "Opsi A benar karena membedakan sensor pasif optik vs sensor aktif radar yang tembus awan/malam.",
      "B": "Opsi B salah karena citra SAR adalah citra intensitas pantulan monokrom/polarisasi, bukan warna RGB alami visual manusia.",
      "C": "Opsi C salah karena satelit optik memiliki resolusi spasial yang jelas (misal 10 meter pada Sentinel-2).",
      "D": "Opsi D salah karena SAR adalah instrumen utama dunia untuk deteksi genangan banjir saat badai berawan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-259",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Teknik pengolahan citra satelit apakah yang digunakan untuk menghilangkan atau menutupi piksel-piksel awan dan bayangan awan (cloud shadow) sebelum dilakukan analisis tren vegetasi?",
    "options": {
      "A": "Cloud Masking (menggunakan band Quality Assessment / Scene Classification Layer - SCL)",
      "B": "Sharpening Filter",
      "C": "Image Inversion",
      "D": "Histogram Equalization"
    },
    "answer": "A",
    "explanation": {
      "correct": "Citra satelit modern (seperti Sentinel-2 L2A) menyertakan layer klasifikasi pemandangan (Scene Classification Layer / SCL). Algoritma Cloud Masking menyaring piksel berlabel awan/bayangan dan mengubah nilainya menjadi NaN/NoData.",
      "A": "Opsi A benar karena Cloud Masking memfilter noise awan menggunakan layer kualitas/SCL.",
      "B": "Opsi B salah karena sharpening mempertegas tepi piksel, bukan memfilter awan.",
      "C": "Opsi C salah karena inversi membalik nilai warna citra.",
      "D": "Opsi D salah karena histogram equalization menyebarkan rentang kontras warna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-260",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Dalam analisis citra multispektral satelit, apa yang dimaksud dengan kombinasi 'False Color Composite' (misal Near-Infrared, Red, Green pada kanal R, G, B)?",
    "options": {
      "A": "Menampilkan pantulan spektrum tak kasat mata (seperti inframerah dekat/NIR) ke kanal warna merah visual manusia, sehingga vegetasi tanaman yang sehat akan tampak berwarna merah menyala",
      "B": "Membuat gambar palsu dengan kecerdasan buatan (Deepfake)",
      "C": "Citra yang mengalami kesalahan pewarnaan printer",
      "D": "Citra hitam putih tanpa warna"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mata manusia tidak bisa melihat spektrum inframerah. Dengan memetakan band NIR ke kanal Red monitor, tanaman sehat yang sangat memantulkan NIR akan tampil mencolok dalam rona warna merah (False Color Infrared / CIR).",
      "A": "Opsi A benar karena menjelaskan tujuan pemetaan spektrum NIR ke kanal visual manusia.",
      "B": "Opsi B salah karena bukan manipulasi deepfake buatan.",
      "C": "Opsi C salah karena bukan kesalahan teknis printer.",
      "D": "Opsi D salah karena komposit menghasilkan citra multispektral berwarna informatif."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-261",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Dalam PostGIS, apa fungsi dari klausul 'ST_GeomFromGeoJSON(geojson_text)'?",
    "options": {
      "A": "Mem-parse string teks GeoJSON dari request klien dan mengonversinya menjadi objek geometri PostGIS native yang siap disimpan ke tabel database",
      "B": "Mengubah database menjadi file JSON",
      "C": "Mengirimkan email ke pengguna",
      "D": "Menghapus geometri dari database"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_GeomFromGeoJSON adalah jembatan penghubung API: payload GeoJSON yang dikirim oleh Leaflet di frontend langsung di-parse menjadi tipe data geometry PostGIS di query SQL.",
      "A": "Opsi A benar karena ST_GeomFromGeoJSON mengonversi string GeoJSON menjadi native geometry PostGIS.",
      "B": "Opsi B salah karena bukan exporter seluruh database.",
      "C": "Opsi C salah karena bukan fungsi notifikasi email.",
      "D": "Opsi D salah karena bukan operasi DELETE."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-262",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk menguji apakah dua geometri saling bertetangga dan hanya bersentuhan pada batas terluarnya saja tanpa saling tumpang tindih pada interiornya?",
    "options": {
      "A": "ST_Touches(geomA, geomB)",
      "B": "ST_Contains(geomA, geomB)",
      "C": "ST_Within(geomA, geomB)",
      "D": "ST_Crosses(geomA, geomB)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Touches mengembalikan TRUE jika kedua geometri memiliki minimal satu titik batas bersama (boundary intersection) tetapi interior keduanya saling terpisah (misal dua persil tanah bertetangga yang berdempetan).",
      "A": "Opsi A benar karena ST_Touches menguji kontak batas luar tanpa overlap interior.",
      "B": "Opsi B salah karena ST_Contains menguji inklusi interior penuh.",
      "C": "Opsi C salah karena ST_Within adalah kebalikan dari contains.",
      "D": "Opsi D salah karena ST_Crosses untuk garis yang memotong interior."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-263",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Dalam analisis penginderaan jauh, apakah yang dimaksud dengan koreksi radiometrik 'Top of Atmosphere' (TOA) versus 'Bottom of Atmosphere' (BOA / Surface Reflectance)?",
    "options": {
      "A": "TOA mengukur pantulan energi yang diterima sensor satelit di luar angkasa termasuk hamburan partikel atmosfer, sedangkan BOA (Surface Reflectance) telah menghilangkan efek gangguan atmosfer sehingga murni mewakili pantulan permukaan bumi nyata",
      "B": "TOA berada di bawah tanah, sedangkan BOA di awan",
      "C": "BOA hanya digunakan untuk citra malam hari",
      "D": "Keduanya persis sama tanpa koreksi apapun"
    },
    "answer": "A",
    "explanation": {
      "correct": "Atmosfer menghamburkan cahaya biru dan menyerap gelombang tertentu. Koreksi atmosferik (Atmospheric Correction) mengubah data Level-1C (TOA) menjadi data Level-2A (Surface Reflectance/BOA), yang wajib digunakan untuk analisis perbandingan multi-waktu ilmiah.",
      "A": "Opsi A benar karena membedakan pantulan puncak atmosfer vs pantulan permukaan bumi pasca koreksi atmosfer.",
      "B": "Opsi B salah karena istilah atmosfer tidak mengukur bawah tanah.",
      "C": "Opsi C salah karena BOA adalah produk standar siang hari untuk analisis spektral.",
      "D": "Opsi D salah karena algoritma koreksi atmosferik (seperti Sen2Cor) sangat kompleks dan vital."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-264",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Indeks spektral apakah yang paling efektif digunakan untuk memetakan badan air permukaan (seperti danau, sungai, dan genangan banjir) menggunakan band Green dan NIR?",
    "options": {
      "A": "NDWI (Normalized Difference Water Index)",
      "B": "NDVI",
      "C": "NBR",
      "D": "NDBI"
    },
    "answer": "A",
    "explanation": {
      "correct": "NDWI (McFeeters) dihitung dengan: (Green - NIR) / (Green + NIR). Air menyerap kuat spektrum inframerah dekat (NIR) dan memantulkan cahaya hijau, menghasilkan nilai positif tinggi untuk badan air.",
      "A": "Opsi A benar karena NDWI adalah indeks baku ekstraksi badan air.",
      "B": "Opsi B salah karena NDVI untuk biomassa kehijauan tanaman.",
      "C": "Opsi C salah karena NBR (Normalized Burn Ratio) untuk analisis keparahan kebakaran hutan.",
      "D": "Opsi D salah karena NDBI (Normalized Difference Built-up Index) untuk area permukiman/bangunan perkotaan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-265",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang mengembalikan panjang garis (perimeter atau distance along path) dari sebuah LineString?",
    "options": {
      "A": "ST_Length(geom)",
      "B": "ST_Area(geom)",
      "C": "ST_Size(geom)",
      "D": "ST_Distance(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Length menghitung panjang total segmen garis untuk tipe geometri LineString atau MultiLineString.",
      "A": "Opsi A benar karena ST_Length adalah fungsi pengukuran panjang garis PostGIS.",
      "B": "Opsi B salah karena ST_Area mengukur luas permukaan 2D poligon.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena ST_Distance mengukur jarak antara dua geometri terpisah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-266",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Apakah yang dimaksud dengan 'Pansharpening' dalam pengolahan citra satelit (seperti pada Landsat 8/9)?",
    "options": {
      "A": "Teknik fusi penggabungan band multispektral berwarna beresolusi lebih rendah (30m) dengan band pankromatik hitam-putih beresolusi lebih tinggi (15m) untuk menghasilkan citra berwarna resolusi tinggi (15m)",
      "B": "Teknik memutar citra satelit 90 derajat",
      "C": "Teknik menghapus bayangan gedung",
      "D": "Teknik mengubah citra satelit menjadi file audio"
    },
    "answer": "A",
    "explanation": {
      "correct": "Band pankromatik merekam spektrum luas pada sensor dengan ukuran piksel lebih kecil (resolusi lebih tajam). Pansharpening menyuntikkan detail spasial tajam tersebut ke band multispektral warna tanpa merusak informasi spektralnya.",
      "A": "Opsi A benar karena mendefinisikan proses pansharpening fusi spasial dan spektral.",
      "B": "Opsi B salah karena bukan rotasi sudut citra.",
      "C": "Opsi C salah karena bukan penghapusan bayangan gedung.",
      "D": "Opsi D salah karena bukan konversi audio."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-267",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk mencari titik geometri pada sebuah garis yang memiliki posisi persentase tertentu (Linear Referencing, misal titik 50% jalur jalan)?",
    "options": {
      "A": "ST_LineInterpolatePoint(lineGeom, fraction)",
      "B": "ST_PointOnLine()",
      "C": "ST_FindMid()",
      "D": "ST_FractionLine()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_LineInterpolatePoint menerima pecahan float antara 0.0 (titik awal) dan 1.0 (titik akhir) dan mengembalikan titik koordinat interpolasi di sepanjang kurva garis.",
      "A": "Opsi A benar karena ST_LineInterpolatePoint adalah fungsi linear referencing standar PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-268",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Dalam sistem radar satelit (SAR), apa yang dimaksud dengan 'Polarisasi' (seperti VV, VH, HH, HV)?",
    "options": {
      "A": "Orientasi bidang gelombang elektromagnetik yang dipancarkan dan diterima kembali oleh antena radar (V = Vertikal, H = Horizontal)",
      "B": "Suhu dingin di wilayah kutub utara dan selatan",
      "C": "Warna kabel pemancar satelit",
      "D": "Jumlah baterai cadangan satelit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kombinasi dual-polarization (seperti VV dan VH pada Sentinel-1) merekam respon hamburan balik struktural target yang berbeda: gelombang cross-polarization (VH) sangat sensitif terhadap hamburan volume kanopi pohon dan kekasaran permukaan.",
      "A": "Opsi A benar karena polarisasi mengacu pada orientasi osilasi medan listrik gelombang radar.",
      "B": "Opsi B salah karena polarisasi radar tidak berhubungan dengan iklim kutub.",
      "C": "Opsi C salah karena bukan kabel fisik antena.",
      "D": "Opsi D salah karena bukan kapasitas daya baterai."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-269",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk mengonversi koleksi data titik (Points) menjadi representasi poligon Voronoi Diagram (Thiessen Polygons)?",
    "options": {
      "A": "ST_VoronoiPolygons(multiPointGeom)",
      "B": "ST_DelaunayTriangles()",
      "C": "ST_ThiessenMesh()",
      "D": "ST_PolygonGrid()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_VoronoiPolygons membagi ruang menjadi poligon-poligon sel di mana setiap lokasi di dalam sel tersebut lebih dekat ke titik pembangunnya daripada ke titik lainnya, sangat populer untuk pemodelan catchment area fasilitas umum.",
      "A": "Opsi A benar karena ST_VoronoiPolygons menghasilkan diagram sel Voronoi resmi di PostGIS.",
      "B": "Opsi B salah karena ST_DelaunayTriangles menghasilkan jaring segitiga Delaunay (TIN), bukan poligon sel Voronoi.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-270",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Apa kepanjangan dari 'CRS' dan 'SRID' dalam Sistem Informasi Geografis?",
    "options": {
      "A": "CRS = Coordinate Reference System; SRID = Spatial Reference System Identifier",
      "B": "CRS = Central Radar Satellite; SRID = Spatial Raster Image Database",
      "C": "CRS = Computer Routing System; SRID = Serial Ring Identity",
      "D": "CRS = Custom Rendering Style; SRID = Standard Remote Image Definition"
    },
    "answer": "A",
    "explanation": {
      "correct": "CRS mendefinisikan bagaimana peta 2D berhubungan dengan lokasi fisik bumi nyata. SRID adalah kode angka identitas unik terstandar (seperti yang dikelola oleh konsorsium EPSG) yang mengidentifikasi CRS tersebut.",
      "A": "Opsi A benar karena merupakan kepanjangan resmi dan baku dari CRS dan SRID.",
      "B": "Opsi B salah karena bukan istilah radar.",
      "C": "Opsi C salah karena bukan sistem routing komputer.",
      "D": "Opsi D salah karena bukan definisi style rendering."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-271",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk membagi (split) sebuah garis (LineString) menjadi dua bagian menggunakan geometri pemotong (titik atau garis pemotong)?",
    "options": {
      "A": "ST_Split(inputGeom, bladeGeom)",
      "B": "ST_DivideLine()",
      "C": "ST_Cut()",
      "D": "ST_Separate()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Split memotong geometri input menggunakan 'blade' pemotong dan mengembalikan kumpulan geometri pecahan hasil pemotongan (GeometryCollection).",
      "A": "Opsi A benar karena ST_Split adalah fungsi resmi pemotongan geometri PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-272",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Dalam analisis citra satelit penginderaan jauh, apakah yang dimaksud dengan 'Resolusi Radiometrik' (misal 8-bit, 12-bit, atau 16-bit)?",
    "options": {
      "A": "Tingkat sensitivitas sensor satelit dalam membedakan variasi energi pantulan cahaya, dinyatakan dalam jumlah bit tingkat keabuan (misal 12-bit = 4.096 tingkatan nilai piksel)",
      "B": "Ukuran fisik lensa kamera satelit",
      "C": "Frekuensi pemotretan per detik",
      "D": "Kecepatan terbang satelit di orbit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Resolusi radiometrik menentukan kedalaman bit (bit depth) kuantisasi sensor. Sensor 12-bit atau 16-bit (seperti Sentinel-2 dan Landsat-8) mampu merekam gradasi kontras bayangan halus yang tidak terdeteksi oleh sensor 8-bit biasa (256 tingkatan).",
      "A": "Opsi A benar karena mendefinisikan kedalaman bit dan sensitivitas pencatatan energi radiometrik.",
      "B": "Opsi B salah karena bukan ukuran fisik diameter lensa.",
      "C": "Opsi C salah karena frekuensi pemotretan adalah resolusi temporal.",
      "D": "Opsi D salah karena kecepatan orbit ditentukan oleh hukum mekanika orbital gravitasi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-273",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk mengonversi sebuah string WKT (Well-Known Text) menjadi objek Geometri dengan menentukan kode SRID secara bersamaan?",
    "options": {
      "A": "ST_GeomFromText('POINT(106.8 -6.2)', 4326)",
      "B": "ST_MakeWKT('POINT(...)')",
      "C": "ST_ParseText('POINT(...)')",
      "D": "ST_WKTToShape('POINT(...)')"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_GeomFromText(wkt, srid) adalah fungsi fundamental PostGIS untuk mengonstruksi objek geometri dari representasi teks standar OGC.",
      "A": "Opsi A benar karena merupakan fungsi resmi parser WKT di PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-274",
    "level": "intermediate",
    "topic": "GIS Concepts",
    "question": "Apa dampak jika dua layer peta dengan sistem koordinat yang berbeda (misal layer A berproyeksi WGS84 EPSG:4326 dan layer B berproyeksi UTM EPSG:32748) di-overlay secara langsung tanpa proses 'On-the-Fly Reprojection'?",
    "options": {
      "A": "Kedua layer tidak akan pernah bertemu di lokasi yang sama pada layar (layer A berada di rentang koordinat -6 sampai 106, sedangkan layer B di rentang 500.000 sampai 9.000.000 meter)",
      "B": "Kedua layer otomatis menyatu sempurna",
      "C": "Database server akan meledak",
      "D": "Browser klien otomatis menghapus layer B"
    },
    "answer": "A",
    "explanation": {
      "correct": "Unit skala kedua CRS sangat berbeda (derajat desimal vs meter planar). Tanpa transformasi matematis on-the-fly, data akan terlempar jutaan unit terpisah di viewport layar.",
      "A": "Opsi A benar karena menjelaskan ketidakcocokan visual akibat perbedaan dimensi unit koordinat spasial.",
      "B": "Opsi B salah karena perbedaan skala mencegah keselarasan tumpang tindih tanpa transformasi.",
      "C": "Opsi C salah karena ini adalah perbedaan matematis visual, bukan kerusakan hardware fisik.",
      "D": "Opsi D salah karena browser tidak menghapus data melainkan merendernya di posisi koordinat yang salah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-275",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "question": "Fungsi PostGIS apakah yang digunakan untuk mengembalikan titik awal (start point) dari sebuah LineString?",
    "options": {
      "A": "ST_StartPoint(lineGeom)",
      "B": "ST_FirstNode(lineGeom)",
      "C": "ST_HeadPoint(lineGeom)",
      "D": "ST_Origin(lineGeom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_StartPoint mengembalikan titik vertex pertama dari geometri bertipe LineString.",
      "A": "Opsi A benar karena ST_StartPoint adalah fungsi resmi titik awal garis PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-276",
    "level": "intermediate",
    "topic": "Remote Sensing Fundamentals",
    "question": "Pada sensor SAR (Synthetic Aperture Radar), apa perbedaan utama antara polarisasi VV dan VH dalam interaksi gelombang mikro dengan permukaan bumi?",
    "options": {
      "A": "VV lebih sensitif terhadap kekasaran permukaan air, sedangkan VH lebih responsif terhadap hamburan volume kanopi vegetasi (volume scattering)",
      "B": "VV hanya bekerja pada malam hari, sedangkan VH bekerja siang dan malam",
      "C": "VV memiliki panjang gelombang lebih panjang daripada VH",
      "D": "VH tidak dipengaruhi oleh kelembaban tanah sama sekali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Polarisasi cross-polarized (VH) sangat dipengaruhi oleh hamburan ganda/volume kanopi vegetasi (depolarisasi), sedangkan co-polarized (VV) dominan merespons kekasaran permukaan tanah/air.",
      "A": "Opsi A benar karena prinsip hamburan gelombang elektromagnetik SAR pada vegetasi dan permukaan.",
      "B": "Opsi B salah karena radar adalah sensor aktif yang bekerja independen dari cahaya matahari baik VV maupun VH.",
      "C": "Opsi C salah karena panjang gelombang ditentukan oleh pita frekuensi (misal C-band 5.6 cm), bukan polarisasinya.",
      "D": "Opsi D salah karena kelembaban tanah mempengaruhi konstanta dielektrik dan pantulan sinyal SAR."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-277",
    "level": "intermediate",
    "topic": "Indeks Spektral",
    "question": "Mengapa indeks MNDWI (Modified Normalized Difference Water Index) lebih unggul daripada NDWI Xu dalam membedakan perairan terbuka di kawasan perkotaan padat?",
    "options": {
      "A": "MNDWI mengganti band NIR dengan band SWIR sehingga secara signifikan menekan pantulan dari fitur bangunan dan tanah terbuka",
      "B": "MNDWI menggunakan band thermal infrared untuk mengukur suhu air permukaan",
      "C": "MNDWI hanya bekerja pada data SAR beresolusi tinggi",
      "D": "MNDWI tidak memerlukan kalibrasi radiometrik"
    },
    "answer": "A",
    "explanation": {
      "correct": "MNDWI dihitung sebagai (Green - SWIR) / (Green + SWIR). Fitur perkotaan memiliki reflektansi tinggi di SWIR dibanding Green, menghasilkan nilai negatif, sehingga menyingkirkan 'noise' bangunan perkotaan yang sering rancu dengan air pada NDWI konvensional.",
      "A": "Opsi A benar karena formulasi Xu (2006) membuktikan SWIR menekan pantulan artefak built-up area.",
      "B": "Opsi B salah karena MNDWI tidak memakai band thermal.",
      "C": "Opsi C salah karena MNDWI dirancang untuk sensor optik multispektral.",
      "D": "Opsi D salah karena MNDWI tetap memerlukan data reflektansi permukaan (surface reflectance)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-278",
    "level": "intermediate",
    "topic": "Koreksi Citra",
    "question": "Apa perbedaan mendasar antara Top of Atmosphere (TOA) Reflectance dan Bottom of Atmosphere (BOA) Reflectance?",
    "options": {
      "A": "TOA belum dikoreksi terhadap efek hamburan dan absorpsi atmosfer, sedangkan BOA (Surface Reflectance) telah melalui koreksi atmosferik",
      "B": "TOA mengukur suhu dalam Kelvin, sedangkan BOA mengukur reflektansi",
      "C": "BOA dihitung di luar angkasa sebelum radiasi memasuki troposfer",
      "D": "TOA hanya berlaku untuk citra radar beresolusi sub-meter"
    },
    "answer": "A",
    "explanation": {
      "correct": "TOA adalah reflektansi yang terdeteksi di puncak atmosfer oleh sensor satelit. BOA adalah reflektansi riil di permukaan bumi setelah menghilangkan pengaruh aerosol dan uap air atmosfer.",
      "A": "Opsi A benar karena definisi koreksi atmosfer menghasilkan surface reflectance (BOA).",
      "B": "Opsi B salah karena TOA dan BOA keduanya merupakan nilai rasio reflektansi tanpa satuan (unitless).",
      "C": "Opsi C salah karena BOA dihitung di permukaan bumi (bottom).",
      "D": "Opsi D salah karena konsep TOA/BOA umum pada citra optik."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-279",
    "level": "intermediate",
    "topic": "Indeks Spektral",
    "question": "Formula Normalized Burn Ratio (NBR) yang umum digunakan untuk analisis keparahan kebakaran hutan adalah:",
    "options": {
      "A": "(NIR - SWIR2) / (NIR + SWIR2)",
      "B": "(Red - NIR) / (Red + NIR)",
      "C": "(Blue - Green) / (Blue + Green)",
      "D": "(SWIR1 - Thermal) / (SWIR1 + Thermal)"
    },
    "answer": "A",
    "explanation": {
      "correct": "NBR menggunakan band NIR (sekitar 0.86 µm) dan SWIR2 (sekitar 2.2 µm): (NIR - SWIR2) / (NIR + SWIR2). Area terbakar memiliki reflektansi NIR sangat rendah dan SWIR2 sangat tinggi.",
      "A": "Opsi A benar sesuai rumus standar USGS untuk NBR.",
      "B": "Opsi B salah karena ini adalah kebalikan dari NDVI.",
      "C": "Opsi C salah karena tidak merefleksikan karakteristik arang dan kelembaban vegetasi.",
      "D": "Opsi D salah karena bukan rumus NBR."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-280",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "question": "Berapa rekomendasi persentase overlap ke depan (forward overlap) dan overlap ke samping (side overlap) pada misi pemotretan udara drone untuk menghasilkan Digital Surface Model (DSM) yang akurat?",
    "options": {
      "A": "Forward overlap minimal 75-80% dan side overlap minimal 60-70%",
      "B": "Forward overlap 20% dan side overlap 10%",
      "C": "Forward overlap 40% dan side overlap 40%",
      "D": "Tidak memerlukan overlap jika menggunakan kamera 4K"
    },
    "answer": "A",
    "explanation": {
      "correct": "Algoritma Structure from Motion (SfM) memerlukan overlap tinggi (75-80% forward dan 60-70% side) agar setiap titik dapat diidentifikasi pada minimal 3-5 foto berbeda dengan sudut parallax memadai.",
      "A": "Opsi A benar sesuai kaidah standar fotogrametri UAV.",
      "B": "Opsi B salah karena overlap 20% akan menyebabkan lubang (gap) dan kegagalan point cloud reconstruction.",
      "C": "Opsi C salah karena overlap 40% tidak cukup untuk SfM 3D.",
      "D": "Opsi D salah karena overlap adalah syarat mutlak rekonstruksi geometri fotogrametri."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-281",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "question": "Apa fungsi Ground Control Point (GCP) yang diukur dengan GPS Geodetik dalam pemrosesan citra fotogrametri drone?",
    "options": {
      "A": "Mengikat model 3D dan orthophoto ke sistem koordinat bumi yang absolut dan mengoreksi distorsi geometri",
      "B": "Menentukan arah terbang drone secara otomatis di udara",
      "C": "Mengganti baterai drone di darat",
      "D": "Menghapus awan secara otomatis dari foto udara"
    },
    "answer": "A",
    "explanation": {
      "correct": "GCP adalah titik tanda fisik di lapangan yang memiliki koordinat akurasi tinggi (cm) untuk georeferensi absolut dan kalibrasi bundle block adjustment dalam fotogrametri.",
      "A": "Opsi A benar karena GCP memberikan referensi spasial terestrial absolut.",
      "B": "Opsi B salah karena jalur terbang ditentukan oleh flight planning software.",
      "C": "Opsi C salah karena GCP adalah target survei, bukan stasiun baterai.",
      "D": "Opsi D salah karena GCP tidak berpengaruh pada tutupan awan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-282",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "question": "Apa perbedaan utama antara Digital Elevation Model (DEM), Digital Surface Model (DSM), dan Digital Terrain Model (DTM)?",
    "options": {
      "A": "DSM mencakup seluruh objek di atas tanah (pohon, bangunan), sedangkan DTM hanya mewakili permukaan tanah telanjang (bare earth)",
      "B": "DSM hanya berisi data batimetri laut, sedangkan DTM berisi daratan",
      "C": "DEM tidak memiliki informasi ketinggian (Z)",
      "D": "DTM selalu memiliki resolusi spasial lebih rendah daripada DSM"
    },
    "answer": "A",
    "explanation": {
      "correct": "DSM merepresentasikan permukaan tertinggi termasuk vegetasi dan struktur buatan manusia. DTM merepresentasikan kontur tanah asli setelah vegetasi dan bangunan difilter.",
      "A": "Opsi A benar sesuai klasifikasi elevasi digital ASPRS.",
      "B": "Opsi B salah karena DSM mencakup permukaan daratan.",
      "C": "Opsi C salah karena DEM pada dasarnya adalah model elevasi digital (mengandung Z).",
      "D": "Opsi D salah karena resolusi DTM bergantung pada grid raster hasil filtering, bukan definisinya."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-283",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "question": "Rumus perhitungan Ground Sample Distance (GSD) pada kamera UAV bergantung pada faktor:",
    "options": {
      "A": "Ketinggian terbang (flight height), focal length lensa, dan ukuran piksel sensor (sensor pitch)",
      "B": "Kecepatan angin dan kapasitas baterai",
      "C": "Warna bodi drone dan jumlah baling-baling",
      "D": "Format file memori micro-SD"
    },
    "answer": "A",
    "explanation": {
      "correct": "GSD = (H * pixel_size) / focal_length, di mana H adalah ketinggian relatif di atas permukaan tanah, pixel_size adalah ukuran fisik piksel pada sensor, dan focal_length adalah panjang fokus lensa.",
      "A": "Opsi A benar berdasarkan optik fotogrametri geometris.",
      "B": "Opsi B salah karena kecepatan angin mempengaruhi kestabilan, bukan GSD nominal.",
      "C": "Opsi C salah karena estetika drone tidak mempengaruhi resolusi.",
      "D": "Opsi D salah karena media penyimpanan tidak mempengaruhi geometri sensor."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-284",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Wilayah Indonesia membentang dari 95° BT hingga 141° BT. Berapakah zona UTM yang mencakup wilayah daratan dan kepulauan Indonesia?",
    "options": {
      "A": "Zona 46 hingga Zona 54, baik Belahan Selatan (S) maupun Belahan Utara (N)",
      "B": "Zona 1 hingga Zona 10",
      "C": "Zona 30 hingga Zona 35",
      "D": "Hanya Zona 48S dan 49S"
    },
    "answer": "A",
    "explanation": {
      "correct": "Indonesia terbagi dalam 9 zona bujur UTM, yaitu Zona 46 (ujung barat Sumatra) hingga Zona 54 (Papua Timur), dengan batas lintang khatulistiwa membagi menjadi zona N dan S.",
      "A": "Opsi A benar sesuai pembagian sistem koordinat UTM di Indonesia oleh BIG/Bakosurtanal.",
      "B": "Opsi B salah karena zona 1-10 mencakup wilayah Pasifik.",
      "C": "Opsi C salah karena zona 30-35 mencakup benua Eropa dan Afrika.",
      "D": "Opsi D salah karena 48S dan 49S hanya mencakup Jawa dan sebagian Sumatra/Kalimantan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-285",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Mengapa proyeksi Web Mercator (EPSG:3857) tidak disarankan untuk menghitung luas area atau jarak riil pada lintang tinggi?",
    "options": {
      "A": "Skala proyeksi terdistorsi secara eksponensial seiring bertambahnya lintang mendekati kutub (area tampak jauh lebih besar dari kenyataan)",
      "B": "EPSG:3857 hanya menyimpan koordinat dalam satuan derajat desimal",
      "C": "EPSG:3857 tidak mendukung sistem koordinat 2D",
      "D": "EPSG:3857 memotong wilayah khatulistiwa"
    },
    "answer": "A",
    "explanation": {
      "correct": "Web Mercator mempertahankan bentuk lokal (conformal) namun mendistorsi luas area secara ekstrem pada lintang tinggi (misalnya Greenland tampak sebesar benua Afrika padahal 14 kali lebih kecil).",
      "A": "Opsi A benar karena distorsi luas adalah sifat inheren proyeksi Mercator.",
      "B": "Opsi B salah karena unit EPSG:3857 adalah meter, bukan derajat.",
      "C": "Opsi C salah karena EPSG:3857 adalah proyeksi planar 2D.",
      "D": "Opsi D salah karena khatulistiwa memiliki distorsi skala 1.0 (paling akurat)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-286",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Apa parameter translasi 3 dimensi (dX, dY, dZ) dalam transformasi datum 7-parameter Helmert?",
    "options": {
      "A": "Pergeseran pusat elipsoid dari sistem koordinat sumber ke sistem koordinat target pada sumbu X, Y, dan Z",
      "B": "Perputaran bumi terhadap matahari",
      "C": "Tinggi pasang surut air laut rata-rata",
      "D": "Koreksi refraksi atmosferik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Transformasi 7-parameter Helmert terdiri atas 3 parameter pergeseran titik asal (dX, dY, dZ), 3 sudut rotasi (rX, rY, rZ), dan 1 faktor skala (scale factor s).",
      "A": "Opsi A benar sesuai teori geodesi matematika transformasi datum.",
      "B": "Opsi B salah karena orbit heliosentris tidak relevan dengan transformasi datum terestrial.",
      "C": "Opsi C salah karena pasut adalah datum vertikal hidrografi.",
      "D": "Opsi D salah karena refraksi atmosfer bukan parameter transformasi geometri geodesi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-287",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Perintah GDAL manakah yang digunakan untuk melakukan reproyeksi citra raster dari EPSG:4326 ke EPSG:32748 dengan metode resampling bilinear?",
    "options": {
      "A": "gdalwarp -s_srs EPSG:4326 -t_srs EPSG:32748 -r bilinear input.tif output.tif",
      "B": "gdal_translate -proj EPSG:32748 input.tif output.tif",
      "C": "ogr2ogr -t_srs EPSG:32748 input.tif output.tif",
      "D": "gdalinfo -reproject EPSG:32748 input.tif"
    },
    "answer": "A",
    "explanation": {
      "correct": "gdalwarp adalah utilitas GDAL khusus untuk pemotongan (clipping), mosaicking, dan reproyeksi raster dengan opsi metode interpolasi (-r bilinear/near/cubic).",
      "A": "Opsi A benar sesuai sintaks resmi gdalwarp.",
      "B": "Opsi B salah karena gdal_translate tidak menghitung warping/reproyeksi non-linear.",
      "C": "Opsi C salah karena ogr2ogr adalah tool untuk data vektor, bukan raster.",
      "D": "Opsi D salah karena gdalinfo hanya menampilkan metadata."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-288",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Perintah OGR manakah yang digunakan untuk mengonversi file ESRI Shapefile menjadi format GeoJSON dengan memastikan koordinatnya berada pada EPSG:4326?",
    "options": {
      "A": "ogr2ogr -f \"GeoJSON\" -t_srs EPSG:4326 output.geojson input.shp",
      "B": "gdalwarp -f \"GeoJSON\" output.geojson input.shp",
      "C": "ogrinfo -convert GeoJSON input.shp",
      "D": "gdal_calc.py -A input.shp --outfile=output.geojson"
    },
    "answer": "A",
    "explanation": {
      "correct": "ogr2ogr adalah utilitas transformasi vektor. Opsi -f \"GeoJSON\" menentukan format output dan -t_srs EPSG:4326 mentransformasi sistem koordinat.",
      "A": "Opsi A benar sesuai standar penggunaan ogr2ogr.",
      "B": "Opsi B salah karena gdalwarp untuk raster.",
      "C": "Opsi C salah karena ogrinfo untuk melihat metadata vektor.",
      "D": "Opsi D salah karena gdal_calc untuk kalkulasi matematis raster band."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-289",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Bagaimana cara melakukan filtering atribut menggunakan SQL query saat mengonversi file GeoPackage ke Shapefile dengan ogr2ogr?",
    "options": {
      "A": "ogr2ogr -f \"ESRI Shapefile\" output.shp input.gpkg -sql \"SELECT * FROM layers WHERE status = 'active'\"",
      "B": "ogr2ogr -filter \"status == active\" output.shp input.gpkg",
      "C": "gdal_translate -where \"status = 'active'\" input.gpkg output.shp",
      "D": "ogrinfo input.gpkg -delete status != 'active'"
    },
    "answer": "A",
    "explanation": {
      "correct": "ogr2ogr mendukung argumen -sql untuk mengeksekusi dialek SQL OGR atau SQLite langsung pada layer sumber sebelum menuliskan output.",
      "A": "Opsi A benar sesuai sintaks OGR SQL.",
      "B": "Opsi B salah karena parameter flag -filter bukan argumen standar ogr2ogr.",
      "C": "Opsi C salah karena gdal_translate untuk data raster.",
      "D": "Opsi D salah karena ogrinfo adalah utilitas read-only informasi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-290",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Dalam PostGIS, query apakah yang paling efisien untuk mencari 5 fasilitas kesehatan terdekat dari titik lokasi pengguna menggunakan operator k-NN (k-Nearest Neighbors)?",
    "options": {
      "A": "SELECT id, name FROM faskes ORDER BY geom <-> ST_SetSRID(ST_Point(106.8, -6.2), 4326) LIMIT 5;",
      "B": "SELECT id, name FROM faskes WHERE ST_Distance(geom, ST_Point(106.8, -6.2)) < 5000 LIMIT 5;",
      "C": "SELECT id, name FROM faskes GROUP BY id HAVING MIN(geom);",
      "D": "SELECT id, name FROM faskes WHERE ST_Contains(geom, ST_Point(106.8, -6.2));"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator '<->' pada klausa ORDER BY menggunakan spatial index GiST untuk menemukan k tetangga terdekat (k-NN) secara langsung tanpa perlu menghitung jarak ke seluruh record dalam tabel.",
      "A": "Opsi A benar karena operator <-> memanfaatkan GiST index bounding box distance secara optimal.",
      "B": "Opsi B salah karena mengharuskan full-table distance evaluation jika batas radius tidak memotong index.",
      "C": "Opsi C salah karena sintaks SQL tidak valid.",
      "D": "Opsi D salah karena ST_Contains mencari poligon yang memuat titik, bukan titik faskes terdekat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-291",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS apakah yang digunakan untuk menggabungkan banyak poligon bertetangga yang memiliki nilai atribut sama menjadi satu kesatuan poligon multi/tunggal?",
    "options": {
      "A": "ST_Union(geom)",
      "B": "ST_Collect(geom)",
      "C": "ST_Intersection(geom)",
      "D": "ST_Difference(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Union menghapus batas internal antara poligon yang bersinggungan (dissolve) dan menghasilkan geometri terpadu. Berbeda dengan ST_Collect yang hanya mengelompokkan geometri tanpa melarutkan batas-batasnya.",
      "A": "Opsi A benar karena ST_Union melakukan operasi dissolve spasial.",
      "B": "Opsi B salah karena ST_Collect menghasilkan MultiPolygon tanpa melarutkan garis batas bersama.",
      "C": "Opsi C salah karena ST_Intersection mengembalikan area irisan dua geometri.",
      "D": "Opsi D salah karena ST_Difference mengurangkan satu geometri dari geometri lain."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-292",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Apa kegunaan fungsi ST_ClusterDBSCAN pada PostGIS dalam analisis data spasial titik (point cloud / log pergerakan)?",
    "options": {
      "A": "Mengelompokkan titik-titik spasial ke dalam klaster berdasarkan kerapatan spasial (density-based) dengan toleransi jarak eps dan jumlah poin minimal minpoints",
      "B": "Mengonversi titik menjadi raster digital",
      "C": "Menghitung luas poligon secara acak",
      "D": "Mengenkripsi kolom koordinat dengan algoritma DBSCAN"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_ClusterDBSCAN adalah fungsi window di PostGIS yang mengimplementasikan algoritma machine learning DBSCAN untuk mendeteksi klaster kerapatan spasial dan noise tanpa perlu menentukan jumlah klaster k di awal.",
      "A": "Opsi A benar sesuai dokumentasi PostGIS ST_ClusterDBSCAN.",
      "B": "Opsi B salah karena konversi titik ke raster menggunakan ST_AsRaster.",
      "C": "Opsi C salah karena DBSCAN adalah algoritma klastering, bukan kalkulasi luas.",
      "D": "Opsi D salah karena DBSCAN bukan fungsi enkripsi kriptografi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-293",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Dalam Leaflet.js, bagaimana cara menangani event klik pada setiap fitur GeoJSON yang dimuat via L.geoJSON?",
    "options": {
      "A": "Menggunakan callback onEachFeature untuk menambahkan event listener layer.on('click', handler)",
      "B": "Menulis kode document.getElementById('map').addEventListener('click')",
      "C": "Mengubah kode sumber Leaflet di node_modules",
      "D": "GeoJSON di Leaflet tidak dapat menerima interaksi klik"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.geoJSON menyediakan opsi 'onEachFeature: function(feature, layer) { layer.on('click', function(e) { ... }); }' untuk mengaitkan event dan popup ke setiap instance layer individual.",
      "A": "Opsi A benar sesuai arsitektur API Leaflet GeoJSON.",
      "B": "Opsi B salah karena event pada canvas/SVG layer tidak terisolasi per fitur.",
      "C": "Opsi C salah karena node_modules tidak boleh diedit langsung.",
      "D": "Opsi D salah karena Leaflet sepenuhnya mendukung interaksi vektor."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-294",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Pada OpenLayers (ol), konsep komponen apa yang bertanggung jawab untuk mengambil dan mengurai data vektor dari server sebelum dirender oleh ol/layer/Vector?",
    "options": {
      "A": "ol/source/Vector",
      "B": "ol/control/Zoom",
      "C": "ol/style/Fill",
      "D": "ol/renderer/Canvas"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dalam OpenLayers, pemisahan tanggung jawab membagi Layer (representasi visual) dan Source (sumber data / loader / parser seperti ol/source/Vector dengan format GeoJSON).",
      "A": "Opsi A benar sesuai arsitektur layer-source OpenLayers.",
      "B": "Opsi B salah karena Zoom adalah UI control.",
      "C": "Opsi C salah karena Fill adalah styling geometri.",
      "D": "Opsi D salah karena Canvas renderer adalah internal rendering engine."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-295",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Dalam Mapbox GL JS / MapLibre GL JS, apa fungsi dari 'filter' dan 'paint' dalam definisi layer gaya (style spec)?",
    "options": {
      "A": "'filter' menyaring data fitur mana yang akan dirender, sedangkan 'paint' mendefinisikan properti visual seperti warna, opasitas, dan lebar garis",
      "B": "'filter' mengubah proyeksi peta, 'paint' mencetak peta ke kertas",
      "C": "'filter' digunakan untuk menghapus data dari server secara permanen",
      "D": "'paint' hanya berlaku untuk gambar raster, bukan vektor"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai Mapbox Style Specification, 'filter' menentukan ekspresi logika seleksi fitur, sedangkan 'paint' menentukan aturan visualisasi GPU (fill-color, line-width, circle-radius).",
      "A": "Opsi A benar sesuai Mapbox/MapLibre Style Spec.",
      "B": "Opsi B salah karena filter dan paint tidak berhubungan dengan pencetakan kertas.",
      "C": "Opsi C salah karena filter bersifat client-side rendering evaluation.",
      "D": "Opsi D salah karena paint berlaku untuk semua jenis layer (vector, raster, symbol)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-296",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "question": "Dalam spesifikasi OGC WFS (Web Feature Service), request manakah yang digunakan untuk melakukan operasi Create, Update, atau Delete fitur secara transaksional?",
    "options": {
      "A": "WFS Transaction (WFS-T) melalui request POST Transaction",
      "B": "WMS GetMap",
      "C": "WFS GetCapabilities",
      "D": "WCS DescribeCoverage"
    },
    "answer": "A",
    "explanation": {
      "correct": "WFS-T (Transactional WFS) memungkinkan klien untuk memodifikasi dataset geospasial pada server melalui operasi insert, update, dan delete dalam pesan XML Transaction.",
      "A": "Opsi A benar sesuai standar OGC WFS-T.",
      "B": "Opsi B salah karena WMS GetMap adalah request read-only untuk gambar peta raster.",
      "C": "Opsi C salah karena GetCapabilities untuk metadata servis.",
      "D": "Opsi D salah karena DescribeCoverage adalah servis raster OGC WCS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-297",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "question": "Apa keuntungan utama menggunakan OGC WMTS (Web Map Tile Service) dibandingkan WMS konvensional untuk layer basemap?",
    "options": {
      "A": "WMTS menyajikan potongan tile yang sudah dipra-render (pre-rendered/cached), sehingga respon jauh lebih cepat dan beban CPU server lebih rendah",
      "B": "WMTS memungkinkan pengeditan atribut vektor secara realtime",
      "C": "WMTS mengirimkan file shapefile mentah ke browser",
      "D": "WMTS tidak membutuhkan koneksi internet"
    },
    "answer": "A",
    "explanation": {
      "correct": "WMS merender gambar peta secara on-the-fly untuk setiap bounding box dinamis, membebani CPU. WMTS menggunakan grid tile statis (tile pyramid) yang mudah di-cache oleh CDN atau browser.",
      "A": "Opsi A benar karena prinsip caching pyramid tile WMTS.",
      "B": "Opsi B salah karena WMTS melayani tile gambar atau vector tiles terkompresi, bukan antarmuka editing.",
      "C": "Opsi C salah karena WMTS bukan format shapefile.",
      "D": "Opsi D salah karena WMTS adalah protokol web berbasis HTTP."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-298",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "question": "Pada backend Node.js / Express, bagaimana cara menghasilkan format Vector Tiles (MVT / .pbf) secara langsung dari database PostGIS?",
    "options": {
      "A": "Menggunakan kombinasi fungsi ST_AsMVT() dan ST_AsMVTGeom() dalam query SQL PostGIS",
      "B": "Mengonversi poligon menjadi string Base64 menggunakan JSON.stringify()",
      "C": "Membuat file JPEG lalu mengubah ekstensinya menjadi .pbf",
      "D": "Menjalankan script Python via execSync untuk setiap request pengguna"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostGIS menyediakan ST_AsMVTGeom untuk memproyeksikan geometri ke koordinat tile lokal dan ST_AsMVT untuk mengemas kumpulan baris menjadi binary protocol buffer Mapbox Vector Tile (.pbf).",
      "A": "Opsi A benar sesuai arsitektur modern dynamic vector tile generation di PostGIS.",
      "B": "Opsi B salah karena MVT adalah format binary protobuf, bukan JSON Base64.",
      "C": "Opsi C salah karena PBF adalah Protocol Buffers vektor, bukan kompresi raster JPEG.",
      "D": "Opsi D salah karena menjalankan subprocess synchronous untuk setiap tile request akan melumpuhkan performa backend."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-299",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Apa arsitektur utama Cloud Optimized GeoTIFF (COG) yang memungkinkan visualisasi raster cepat di web tanpa mendownload seluruh file?",
    "options": {
      "A": "Penggunaan internal tiling (tiled organization), overviews (piramida resolusi berkurang), dan HTTP Range Requests",
      "B": "Penyimpanan data hanya dalam memori RAM komputer",
      "C": "Konversi otomatis seluruh piksel menjadi teks XML",
      "D": "Pengurangan kedalaman bit menjadi 1-bit hitam putih"
    },
    "answer": "A",
    "explanation": {
      "correct": "COG mengorganisasi data GeoTIFF ke dalam tile internal berukuran seragam dengan level piramida resolusi (overviews). Klien web dapat meminta byte range tertentu via HTTP GET header 'Range: bytes=...' hanya untuk area dan zoom yang terlihat.",
      "A": "Opsi A benar sesuai spesifikasi Cloud Optimized GeoTIFF.",
      "B": "Opsi B salah karena COG disimpan di cloud object storage (misal AWS S3, GCS).",
      "C": "Opsi C salah karena COG mempertahankan binary format TIFF yang efisien.",
      "D": "Opsi D salah karena COG mendukung multiband floating point maupun integer penuh."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-300",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "question": "Saat menjalankan GeoServer di dalam Docker container di lingkungan produksi, praktik manakah yang penting dilakukan untuk persistensi data dan konfigurasi workspace?",
    "options": {
      "A": "Mem-mount direktori GEOSERVER_DATA_DIR dari host atau persistent volume ke dalam container",
      "B": "Menyimpan seluruh konfigurasi dan shapefile langsung di root container image tanpa volume",
      "C": "Menonaktifkan restart policy container agar tidak menimpa data",
      "D": "Menghapus folder data_dir setiap kali GeoServer dijalankan ulang"
    },
    "answer": "A",
    "explanation": {
      "correct": "GEOSERVER_DATA_DIR berisi semua file konfigurasi XML, layer, store, dan workspace. Direktori ini harus di-mount ke volume eksternal agar data tidak hilang saat container di-redeploy atau di-update.",
      "A": "Opsi A benar sesuai praktik terbaik Docker containerization untuk aplikasi stateful.",
      "B": "Opsi B salah karena data dalam layer container akan hilang permanen saat container dihapus (ephemeral).",
      "C": "Opsi C salah karena restart policy tidak melindungi data container yang di-destroy.",
      "D": "Opsi D salah karena menghapus folder data_dir akan menghilangkan seluruh konfigurasi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-301",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Mengapa penggunaan tipe data GEOGRAPHY pada PostGIS direkomendasikan jika ingin menghitung jarak riil dalam meter pada fitur yang tersebar melintasi benua?",
    "options": {
      "A": "GEOGRAPHY melakukan perhitungan jarak pada permukaan bola bumi (great-circle / geodesic) tanpa terdistorsi oleh proyeksi bidang datar",
      "B": "GEOGRAPHY tidak memerlukan koordinat lintang dan bujur",
      "C": "GEOGRAPHY mengonsumsi kapasitas disk 10 kali lebih hemat daripada GEOMETRY",
      "D": "GEOGRAPHY otomatis mengonversi data vektor menjadi raster"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe GEOGRAPHY memperhitungkan kelengkungan elipsoid bumi secara geodesik (Great Circle / WGS84) sehingga ST_Distance langsung mengembalikan hasil dalam satuan meter tanpa perlu reproyeksi ke sistem proyeksi lokal.",
      "A": "Opsi A benar sesuai konsep tipe data GEOGRAPHY PostGIS.",
      "B": "Opsi B salah karena GEOGRAPHY tetap membutuhkan longitude dan latitude.",
      "C": "Opsi C salah karena ukuran penyimpanan GEOGRAPHY hampir sama dengan GEOMETRY.",
      "D": "Opsi D salah karena GEOGRAPHY adalah tipe data vektor."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-302",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk memperbaiki geometri poligon yang tidak valid (misalnya memiliki self-intersection atau ring collapse)?",
    "options": {
      "A": "ST_MakeValid(geom)",
      "B": "ST_Repair(geom)",
      "C": "ST_FixGeometry(geom)",
      "D": "ST_Clean(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_MakeValid mengambil geometri yang tidak valid (mengalami self-intersection, bowtie, atau degenerate parts) dan merestrukturisasinya menjadi geometri yang valid tanpa kehilangan informasi area.",
      "A": "Opsi A benar sesuai dokumentasi resmi PostGIS.",
      "B": "Opsi B salah karena bukan nama fungsi di PostGIS.",
      "C": "Opsi C salah karena bukan nama fungsi di PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi di PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-303",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Apa perbedaan perilaku antara fungsi ST_Simplify dan ST_SimplifyPreserveTopology pada PostGIS?",
    "options": {
      "A": "ST_SimplifyPreserveTopology mencegah timbulnya self-intersection, overlapping, atau perubahan relasi spasial antar fitur selama generalisasi",
      "B": "ST_Simplify hanya bekerja pada tipe data Point",
      "C": "ST_SimplifyPreserveTopology menghapus seluruh atribut tabel",
      "D": "ST_Simplify mengubah garis menjadi raster"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Simplify menggunakan algoritma Douglas-Peucker murni yang dapat menyebabkan poligon memotong dirinya sendiri. ST_SimplifyPreserveTopology memodifikasi algoritma agar struktur topologi poligon tetap valid.",
      "A": "Opsi A benar karena mempertahankan validitas topologi.",
      "B": "Opsi B salah karena simplifikasi berlaku untuk LineString dan Polygon.",
      "C": "Opsi C salah karena operasi geometri tidak menghapus atribut tabel.",
      "D": "Opsi D salah karena hasilnya tetap data vektor yang disederhanakan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-304",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Query PostGIS apakah yang digunakan untuk mencari poligon batas desa yang saling bertetangga (berbagi garis batas bersama tetapi tidak saling tumpang tindih)?",
    "options": {
      "A": "SELECT a.id, b.id FROM desa a, desa b WHERE ST_Touches(a.geom, b.geom) AND a.id != b.id;",
      "B": "SELECT a.id, b.id FROM desa a, desa b WHERE ST_Contains(a.geom, b.geom);",
      "C": "SELECT a.id, b.id FROM desa a, desa b WHERE ST_Disjoint(a.geom, b.geom);",
      "D": "SELECT a.id, b.id FROM desa a, desa b WHERE ST_Crosses(a.geom, b.geom);"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Touches mengembalikan TRUE jika dua geometri setidaknya memiliki satu titik batas bersama (boundary), tetapi interior keduanya sama sekali tidak saling beririsan (tidak overlap).",
      "A": "Opsi A benar sesuai relasi topologis DE-9IM untuk ST_Touches.",
      "B": "Opsi B salah karena ST_Contains menguji poligon yang memuat poligon lain.",
      "C": "Opsi C salah karena ST_Disjoint menguji geometri yang tidak bersentuhan sama sekali.",
      "D": "Opsi D salah karena ST_Crosses digunakan untuk relasi garis melintasi garis atau garis melintasi poligon."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-305",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Bagaimana model matriks relasi topologis DE-9IM (Dimensionally Extended 9-Intersection Model) merepresentasikan relasi spasial dua geometri?",
    "options": {
      "A": "Membandingkan irisan antara Interior, Boundary, dan Exterior geometri A terhadap Interior, Boundary, dan Exterior geometri B dalam matriks 3x3",
      "B": "Menghitung rata-rata koordinat X, Y, dan Z dalam 9 dimensi ruang waktu",
      "C": "Mengalikan luas poligon dengan 9 faktor pembobot",
      "D": "Menentukan warna RGB dan intensitas bayangan citra"
    },
    "answer": "A",
    "explanation": {
      "correct": "DE-9IM mengevaluasi dimensi perpotongan (I: Interior, B: Boundary, E: Exterior) antar dua geometri dalam matriks 3x3 dengan nilai {-1, 0, 1, 2} atau string pola seperti 'T********'.",
      "A": "Opsi A benar sesuai spesifikasi OGC Simple Features for SQL.",
      "B": "Opsi B salah karena DE-9IM adalah model topologi, bukan ruang 9D.",
      "C": "Opsi C salah karena tidak berkaitan dengan luas 9 faktor.",
      "D": "Opsi D salah karena bukan model grafis warna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-306",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Mengapa koordinat UTM menggunakan sistem False Easting sebesar 500.000 meter pada Central Meridian setiap zona?",
    "options": {
      "A": "Untuk mencegah timbulnya nilai koordinat X (Easting) negatif pada wilayah di sebelah barat Central Meridian dalam zona tersebut",
      "B": "Sebagai kompensasi perputaran rotasi bumi pada garis khatulistiwa",
      "C": "Untuk menyesuaikan jarak satelit GPS terhadap receiver",
      "D": "Agar koordinat sesuai dengan kalender Masehi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Central meridian diberi nilai 500.000 m (False Easting). Karena lebar setiap zona UTM sekitar 6° (maksimal ~668 km di khatulistiwa), seluruh titik di barat meridian tengah tetap bernilai Easting positif (> 0).",
      "A": "Opsi A benar sesuai desain proyeksi Universal Transverse Mercator.",
      "B": "Opsi B salah karena rotasi bumi tidak dikompensasi oleh false easting.",
      "C": "Opsi C salah karena false easting adalah konstanta kartografis, bukan fisika sinyal satelit.",
      "D": "Opsi D salah karena tidak berhubungan dengan kalender."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-307",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Pada Belahan Bumi Selatan (Southern Hemisphere), berapakah nilai False Northing yang diterapkan pada sistem proyeksi UTM?",
    "options": {
      "A": "10.000.000 meter",
      "B": "500.000 meter",
      "C": "0 meter",
      "D": "1.000.000 meter"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di belahan bumi selatan, ekuator ditetapkan sebagai Northing 10.000.000 meter (False Northing) dan nilai berkurang ke arah kutub selatan sehingga semua koordinat Northing bernilai positif.",
      "A": "Opsi A benar sesuai standar UTM Belahan Selatan.",
      "B": "Opsi B salah karena 500.000 m adalah False Easting.",
      "C": "Opsi C salah karena 0 meter adalah Northing ekuator di belahan bumi utara (Northern Hemisphere).",
      "D": "Opsi D salah karena bukan nilai standar UTM."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-308",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Apa perbedaan antara Tinggi Elipsoid (h), Tinggi Orthometrik (H), dan Undulasi Geoid (N)?",
    "options": {
      "A": "h = H + N, di mana h adalah tinggi di atas elipsoid acuan, H adalah tinggi di atas geoid (Mean Sea Level), dan N adalah jarak undulasi pemisah geoid terhadap elipsoid",
      "B": "h adalah kedalaman laut, H adalah tinggi awan, dan N adalah jumlah satelit",
      "C": "H selalu sama dengan h di seluruh belahan bumi",
      "D": "N tidak pernah bernilai negatif"
    },
    "answer": "A",
    "explanation": {
      "correct": "Hubungan fundamental geodesi fisik adalah h = H + N. GPS mengukur tinggi elipsoid (h), sedangkan elevasi praktis untuk hidrologi dan teknik sipil adalah tinggi orthometrik (H) terhadap geoid.",
      "A": "Opsi A benar sesuai persamaan geodesi Heiskanen & Moritz.",
      "B": "Opsi B salah karena bukan terminologi geodesi.",
      "C": "Opsi C salah karena geoid berfluktuasi terhadap elipsoid akibat ketidakhomogenan gravitasi bumi.",
      "D": "Opsi D salah karena undulasi geoid (N) bisa negatif di wilayah dengan massa gravitasi lebih rendah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-309",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "question": "Bagaimana cara melakukan query informasi atribut fitur pada posisi koordinat klik di peta web menggunakan OGC Web Map Service (WMS)?",
    "options": {
      "A": "Mengirimkan request WMS GetFeatureInfo dengan menyertakan parameter I, J (atau X, Y piksel klik), BBOX, WIDTH, dan HEIGHT",
      "B": "Mendownload seluruh database server via FTP",
      "C": "Mengirimkan pesan WebSocket binary",
      "D": "Menggunakan WCS GetCapabilities"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operasi WMS GetFeatureInfo dirancang khusus untuk mengembalikan metadata atribut fitur di balik piksel peta gambar yang diklik oleh pengguna di viewport peta.",
      "A": "Opsi A benar sesuai standar OGC WMS GetFeatureInfo specification.",
      "B": "Opsi B salah karena WMS tidak mengizinkan download basis data via FTP.",
      "C": "Opsi C salah karena WMS berbasis protokol standar HTTP GET/POST.",
      "D": "Opsi D salah karena WCS adalah Web Coverage Service untuk raster grid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-310",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "question": "Dalam GeoServer, apa peran dari GeoWebCache (GWC)?",
    "options": {
      "A": "Meng-cache tile peta (WMS-C, WMTS, TMS) secara otomatis ke disk untuk mempercepat pengiriman dan mengurangi beban rendering berulang",
      "B": "Mengatur hak akses autentikasi pengguna ke dashboard admin",
      "C": "Mengubah file vektor menjadi dokumen Word",
      "D": "Melakukan geocoding alamat jalan otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoWebCache adalah tile cache engine terintegrasi di dalam GeoServer yang memotong layer WMS menjadi tile piramida standar dan menyimpannya di cache penyimpanan.",
      "A": "Opsi A benar sesuai fungsi utama GeoWebCache.",
      "B": "Opsi B salah karena autentikasi dikelola oleh modul Security GeoServer.",
      "C": "Opsi C salah karena GeoServer tidak berurusan dengan dokumen Word.",
      "D": "Opsi D salah karena geocoding adalah servis lain (seperti Pelias / Nominatim)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-311",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "question": "File standar berbasis XML apakah yang digunakan oleh GeoServer dan MapServer untuk mendefinisikan aturan simbol, warna, dan pelabelan fitur peta?",
    "options": {
      "A": "SLD (Styled Layer Descriptor)",
      "B": "KML (Keyhole Markup Language)",
      "C": "WSDL (Web Services Description Language)",
      "D": "SOAP (Simple Object Access Protocol)"
    },
    "answer": "A",
    "explanation": {
      "correct": "OGC Styled Layer Descriptor (SLD) bersama Symbology Encoding (SE) adalah standar XML untuk mendefinisikan visualisasi grafis layer peta seperti PolygonSymbolizer, LineSymbolizer, dan PointSymbolizer.",
      "A": "Opsi A benar sesuai standar OGC SLD.",
      "B": "Opsi B salah karena KML adalah format pertukaran data geografis untuk Google Earth.",
      "C": "Opsi C salah karena WSDL untuk deskripsi antarmuka web service SOAP.",
      "D": "Opsi D salah karena SOAP adalah protokol komunikasi messaging."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-312",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Dalam Leaflet, jika Anda ingin menampilkan peta denah ruangan indoor atau citra medis non-geografis, sistem CRS apakah yang harus digunakan pada opsi map?",
    "options": {
      "A": "L.CRS.Simple",
      "B": "L.CRS.EPSG3857",
      "C": "L.CRS.EPSG4326",
      "D": "L.CRS.Earth"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.CRS.Simple memetakan koordinat bujur dan lintang langsung ke piksel X dan Y datar (1:1), sangat ideal untuk denah lantai indoor, video game maps, atau gambar resolusi tinggi non-bumi.",
      "A": "Opsi A benar sesuai dokumentasi Leaflet CRS.",
      "B": "Opsi B salah karena EPSG:3857 menerapkan proyeksi Web Mercator bola bumi.",
      "C": "Opsi C salah karena EPSG:4326 adalah koordinat derajat elipsoid WGS84.",
      "D": "Opsi D salah karena L.CRS.Earth adalah kelas abstrak koordinat bumi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-313",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Library JavaScript manakah yang umum digunakan bersama Leaflet atau OpenLayers untuk melakukan reproyeksi koordinat on-the-fly di browser pengguna?",
    "options": {
      "A": "Proj4js (proj4)",
      "B": "Axios",
      "C": "Lodash",
      "D": "Redux"
    },
    "answer": "A",
    "explanation": {
      "correct": "Proj4js adalah porting JavaScript dari library PROJ yang mampu mengonversi koordinat titik secara langsung antar berbagai sistem referensi koordinat (CRS) di sisi client.",
      "A": "Opsi A benar karena Proj4js adalah standar komputasi transformasi proyeksi di JavaScript.",
      "B": "Opsi B salah karena Axios adalah HTTP client.",
      "C": "Opsi C salah karena Lodash adalah utility library umum array/object.",
      "D": "Opsi D salah karena Redux adalah state management container."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-314",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Dalam visualisasi data spasial volume masif (misal 500.000 titik taksi realtime), teknologi rendering peta web manakah yang paling tepat digunakan untuk mencegah browser freeze?",
    "options": {
      "A": "WebGL berbasis GPU (misalnya deck.gl atau MapLibre GL JS)",
      "B": "Membuat 500.000 elemen DOM HTML <div> secara langsung dengan Leaflet",
      "C": "Menggunakan elemen SVG standar tanpa optimasi",
      "D": "Menggunakan tag <table> untuk setiap koordinat"
    },
    "answer": "A",
    "explanation": {
      "correct": "WebGL memanfaatkan kartu grafis (GPU) untuk memproses ratusan ribu vertex secara paralel dengan performa 60 FPS, sedangkan SVG/DOM HTML akan mengalami bottleneck memori dan perenderan.",
      "A": "Opsi A benar karena akselerasi hardware WebGL dirancang untuk big data visual rendering.",
      "B": "Opsi B salah karena ratusan ribu elemen DOM akan menyebabkan browser crash (out of memory).",
      "C": "Opsi C salah karena SVG berbasis DOM retain-mode lambat di atas ribuan node.",
      "D": "Opsi D salah karena tabel HTML tidak sesuai untuk spasial rendering dinamis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-315",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Bagaimana cara kerja plugin MarkerCluster (seperti Leaflet.markercluster) dalam mengoptimalkan performa tampilan banyak titik marker?",
    "options": {
      "A": "Menggabungkan titik-titik yang posisinya berdekatan ke dalam satu icon cluster pada level zoom rendah, dan memecahnya kembali saat pengguna melakukan zoom-in",
      "B": "Menghapus 90% data secara permanen dari memory",
      "C": "Mengirimkan seluruh data ke printer",
      "D": "Mengonversi koordinat menjadi string Base64"
    },
    "answer": "A",
    "explanation": {
      "correct": "Marker clustering mengelompokkan titik berdasarkan kedekatan jarak piksel pada level zoom aktif, sehingga jumlah elemen DOM yang aktif dirender tetap rendah dan peta tetap responsif.",
      "A": "Opsi A benar sesuai mekanisme algoritma spatial clustering frontend.",
      "B": "Opsi B salah karena data tidak dihapus permanen.",
      "C": "Opsi C salah karena tidak berhubungan dengan hardware printer.",
      "D": "Opsi D salah karena Base64 bukan algoritma klastering."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-316",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "question": "Dalam framework React, pustaka manakah yang menyediakan komponen deklaratif (seperti <MapContainer>, <TileLayer>, <Marker>) sebagai wrapper resmi Leaflet?",
    "options": {
      "A": "react-leaflet",
      "B": "react-router-dom",
      "C": "react-spring",
      "D": "react-query"
    },
    "answer": "A",
    "explanation": {
      "correct": "react-leaflet membungkus kelas dan event Leaflet menjadi React component lifecycle dan React Context (<MapContainer>, <TileLayer>, <GeoJSON>).",
      "A": "Opsi A benar sesuai ekosistem React Web GIS.",
      "B": "Opsi B salah karena react-router-dom untuk routing halaman.",
      "C": "Opsi C salah karena react-spring untuk animasi physics.",
      "D": "Opsi D salah karena react-query untuk data fetching & server state."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-317",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "question": "Bagaimana cara menghindari memory leak saat menginisialisasi peta Leaflet atau Mapbox di dalam hook useEffect React?",
    "options": {
      "A": "Memanggil method map.remove() pada cleanup function yang di-return oleh useEffect",
      "B": "Membiarkan map object tersimpan di window object tanpa pembersihan",
      "C": "Menghapus folder node_modules saat unmount",
      "D": "Menggunakan setTimeout 1000 detik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Leaflet mengaitkan event listener ke DOM dan container ID. Jika tidak dibersihkan dengan map.remove() saat unmount, container akan error 'Map container is already initialized' dan memori tidak terbebas.",
      "A": "Opsi A benar sesuai aturan siklus hidup React useEffect cleanup.",
      "B": "Opsi B salah karena menyimpan di window justru memicu memory leak.",
      "C": "Opsi C salah karena tidak relevan dengan runtime unmount.",
      "D": "Opsi D salah karena setTimeout tidak membersihkan instance map."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-318",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "question": "Format data standar manakah yang digunakan oleh Mapbox Vector Tiles (MVT) untuk encoding data geometri dan atribut vektor dalam format binary yang sangat ringkas?",
    "options": {
      "A": "Google Protocol Buffers (Protobuf / .pbf)",
      "B": "XML Schema Definition (.xsd)",
      "C": "YAML Ain't Markup Language (.yaml)",
      "D": "Comma Separated Values (.csv)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi Mapbox Vector Tile menggunakan Google Protocol Buffers (.pbf) untuk serialisasi binary data geometri dan atribut dengan efisiensi kompresi dan kecepatan parsing tinggi di WebGL.",
      "A": "Opsi A benar sesuai spesifikasi MVT standard.",
      "B": "Opsi B salah karena XSD adalah skema teks XML.",
      "C": "Opsi C salah karena YAML adalah teks human-readable.",
      "D": "Opsi D salah karena CSV tidak mendukung struktur data geometri bertingkat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-319",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Dalam library Python Geopandas, fungsi apakah yang digunakan untuk melakukan spatial join antara dua GeoDataFrame berdasarkan relasi geometris (misal 'within' atau 'intersects')?",
    "options": {
      "A": "gpd.sjoin(left_df, right_df, predicate='intersects')",
      "B": "gpd.merge_spatial()",
      "C": "gpd.concat_geo()",
      "D": "gpd.join_geometry()"
    },
    "answer": "A",
    "explanation": {
      "correct": "gpd.sjoin (spatial join) menggabungkan atribut dua GeoDataFrame berdasarkan posisi dan relasi spasial fiturnya melalui argumen 'predicate' (intersects, contains, within, dsb).",
      "A": "Opsi A benar sesuai dokumentasi GeoPandas sjoin API.",
      "B": "Opsi B salah karena bukan fungsi standar GeoPandas.",
      "C": "Opsi C salah karena concat biasa untuk penggabungan baris/kolom non-spasial.",
      "D": "Opsi D salah karena bukan fungsi GeoPandas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-320",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Pustaka Python manakah yang merupakan pembungkus (wrapper) berkecepatan tinggi di atas C library GDAL untuk membaca dan menulis data citra raster sebagai array NumPy?",
    "options": {
      "A": "rasterio",
      "B": "matplotlib",
      "C": "requests",
      "D": "scikit-learn"
    },
    "answer": "A",
    "explanation": {
      "correct": "Rasterio dibangun di atas GDAL dan menyediakan antarmuka Pythonik modern untuk membaca, memotong (windowed read), dan memanipulasi citra raster geospasial sebagai array NumPy berkinerja tinggi.",
      "A": "Opsi A benar karena rasterio adalah standar de facto pengolahan raster di Python.",
      "B": "Opsi B salah karena matplotlib adalah library visualisasi grafik.",
      "C": "Opsi C salah karena requests adalah HTTP library.",
      "D": "Opsi D salah karena scikit-learn adalah pustaka machine learning umum."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-321",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Apa fungsi spesifikasi STAC (SpatioTemporal Asset Catalog) dalam arsitektur cloud geospasial modern?",
    "options": {
      "A": "Menstandarisasi struktur metadata JSON untuk menemukan, mengindeks, dan mengakses dataset citra satelit dan data geospasial di cloud object storage",
      "B": "Mengatur pembayaran tagihan server AWS otomatis",
      "C": "Menggantikan peran bahasa pemrograman Python",
      "D": "Menghapus data citra lama secara acak"
    },
    "answer": "A",
    "explanation": {
      "correct": "STAC menyediakan format spesifikasi umum berbasis JSON untuk mendeskripsikan aset data spasiotemporal (satelit, drone, iklim) sehingga API pencarian dapat bekerja secara interoperabel di berbagai cloud provider.",
      "A": "Opsi A benar sesuai standar open STAC specification.",
      "B": "Opsi B salah karena STAC tidak mengelola billing cloud.",
      "C": "Opsi C salah karena STAC adalah format metadata, bukan bahasa pemrograman.",
      "D": "Opsi D salah karena STAC untuk katalogisasi dan indexing, bukan penghapusan data."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-322",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "question": "Ketika aplikasi frontend Web GIS di domain http://localhost:3000 gagal memuat layer WMS dari GeoServer di http://geoserver.perusahaan.com:8080 dengan pesan CORS error, konfigurasi apa yang harus diaktifkan?",
    "options": {
      "A": "Mengaktifkan CORS filter pada file web.xml di GeoServer (org.apache.catalina.filters.CorsFilter atau jetty equivalent)",
      "B": "Memformat ulang hard disk server GeoServer",
      "C": "Mengganti browser pengguna dengan Internet Explorer 6",
      "D": "Menghapus protokol HTTP pada browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoServer berjalan di atas servlet container (Tomcat atau Jetty). Filter CORS harus diaktifkan pada file web.xml agar server mengirimkan response header 'Access-Control-Allow-Origin' ke domain frontend.",
      "A": "Opsi A benar sesuai solusi standar masalah Cross-Origin Resource Sharing pada GeoServer.",
      "B": "Opsi B salah karena CORS adalah kebijakan keamanan HTTP browser, bukan error hardware.",
      "C": "Opsi C salah karena browser modern mengharuskan kepatuhan CORS.",
      "D": "Opsi D salah karena protokol komunikasi web membutuhkan HTTP/HTTPS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-323",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "question": "Mengapa kompresi GZIP atau Brotli pada web server (Nginx/Apache) sangat penting untuk endpoint API yang menyajikan GeoJSON?",
    "options": {
      "A": "Struktur GeoJSON berbasis teks JSON yang repetitif dapat dikompresi hingga 70-85%, menghemat bandwidth dan mempercepat loading peta",
      "B": "GeoJSON tidak dapat dibaca oleh JavaScript jika tidak di-gzip",
      "C": "GZIP secara otomatis mengonversi koordinat WGS84 menjadi UTM",
      "D": "GZIP mengenkripsi file agar tidak bisa dibuka oleh peretas"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoJSON berulang kali menyertakan kunci properti teks (\"type\", \"geometry\", \"coordinates\", \"properties\"). Algoritma kompresi teks seperti GZIP/Brotli sangat efektif memangkas ukuran transfer payload hingga ~80%.",
      "A": "Opsi A benar sesuai prinsip optimasi payload web geospasial.",
      "B": "Opsi B salah karena browser secara transparan mengekstrak payload gzip sebelum diserahkan ke JavaScript.",
      "C": "Opsi C salah karena GZIP adalah kompresi stream lossless biner, bukan transformasi geodesi.",
      "D": "Opsi D salah karena GZIP adalah algoritma kompresi, bukan enkripsi keamanan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-324",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "question": "Dalam arsitektur CI/CD untuk aplikasi Web GIS, tes integrasi manakah yang krusial untuk memastikan migrasi database spasial berhasil?",
    "options": {
      "A": "Menjalankan migrasi PostGIS pada database test container dan memverifikasi ekstensi postgis aktif serta spatial index terbuat",
      "B": "Memeriksa apakah monitor server menyala",
      "C": "Mengirimkan email notifikasi ke semua staf",
      "D": "Menghitung jumlah kata pada file README"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pipeline CI/CD yang andal harus menguji skrip migrasi skema spasial (CREATE EXTENSION postgis, pembuatan tabel geometri, dan indeks GiST) pada container test terisolasi sebelum deployment ke staging/production.",
      "A": "Opsi A benar sesuai praktik rekayasa perangkat lunak geospasial modern.",
      "B": "Opsi B salah karena monitoring bukan tes integrasi CI/CD skema.",
      "C": "Opsi C salah karena notifikasi email bukan pengujian fungsional basis data.",
      "D": "Opsi D salah karena jumlah kata README tidak menguji fungsionalitas spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-325",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Perintah gdal_calc.py manakah yang tepat untuk menghitung Normalized Difference Vegetation Index (NDVI) dari citra Sentinel-2 (Band 8 = NIR, Band 4 = Red)?",
    "options": {
      "A": "gdal_calc.py -A B08.tif -B B04.tif --outfile=ndvi.tif --calc=\"(A.astype(float)-B.astype(float))/(A.astype(float)+B.astype(float))\"",
      "B": "gdal_calc.py -A B08.tif -B B04.tif --outfile=ndvi.tif --calc=\"A * B\"",
      "C": "gdalwarp -ndvi B08.tif B04.tif ndvi.tif",
      "D": "ogr2ogr -calc NDVI B08.tif"
    },
    "answer": "A",
    "explanation": {
      "correct": "NDVI dihitung dengan rumus (NIR - Red) / (NIR + Red). Dalam gdal_calc.py, penting melakukan casting ke tipe float agar pembagian piksel tidak menghasilkan pembulatan integer 0.",
      "A": "Opsi A benar sesuai sintaks dan tipe kalkulasi gdal_calc.py.",
      "B": "Opsi B salah karena itu adalah operasi perkalian.",
      "C": "Opsi C salah karena gdalwarp tidak memiliki flag -ndvi.",
      "D": "Opsi D salah karena ogr2ogr adalah tool vektor."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-326",
    "level": "intermediate",
    "topic": "Indeks Spektral",
    "question": "Mengapa indeks SAVI (Soil Adjusted Vegetation Index) menyertakan faktor penyesuaian L (biasanya bernilai 0.5)?",
    "options": {
      "A": "Untuk meminimalkan pengaruh pantulan kecerahan tanah latar belakang (soil brightness) pada area dengan kanopi vegetasi renggang",
      "B": "Untuk mengukur kedalaman air danau",
      "C": "Untuk mempercepat perhitungan komputasi di CPU",
      "D": "Untuk mengoreksi kemiringan sudut matahari saat fajar"
    },
    "answer": "A",
    "explanation": {
      "correct": "SAVI = ((NIR - Red) / (NIR + Red + L)) * (1 + L). Faktor L (0.5 untuk kerapatan sedang) menetralkan kontaminasi spektral dari tanah terbuka di bawah vegetasi.",
      "A": "Opsi A benar sesuai formulasi Huete (1988) untuk indeks vegetasi kanopi jarang.",
      "B": "Opsi B salah karena SAVI adalah indeks vegetasi darat, bukan batimetri.",
      "C": "Opsi C salah karena penambahan konstanta tidak mempengaruhi efisiensi CPU secara signifikan.",
      "D": "Opsi D salah karena sudut matahari dikoreksi pada tahap radiometrik/atmosferik."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-327",
    "level": "intermediate",
    "topic": "Citra Satelit & Radar",
    "question": "Manakah di antara sensor radar satelit berikut yang beroperasi pada pita frekuensi L-band (panjang gelombang ~23 cm) yang memiliki penetrasi kanopi hutan dalam?",
    "options": {
      "A": "ALOS-2 PALSAR-2",
      "B": "Sentinel-1 (C-band)",
      "C": "TerraSAR-X (X-band)",
      "D": "COSMO-SkyMed (X-band)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ALOS-2 PALSAR-2 adalah satelit SAR berfrekuensi L-band (~23 cm panjang gelombang). Gelombang L-band mampu menembus dedaunan kanopi hutan hingga mencapai batang pohon dan tanah.",
      "A": "Opsi A benar karena ALOS-2 PALSAR membawa sensor L-band.",
      "B": "Opsi B salah karena Sentinel-1 beroperasi pada C-band (~5.6 cm).",
      "C": "Opsi C salah karena TerraSAR-X beroperasi pada X-band (~3.1 cm).",
      "D": "Opsi D salah karena COSMO-SkyMed beroperasi pada X-band."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-328",
    "level": "intermediate",
    "topic": "Citra Satelit & Radar",
    "question": "Apa fenomena spektral yang dikenal sebagai 'Red Edge' pada kurva pantulan spektral daun hijau sehat?",
    "options": {
      "A": "Peningkatan tajam nilai reflektansi vegetasi pada rentang panjang gelombang antara spektrum merah (Red, ~680 nm) dan inframerah dekat (NIR, ~730-780 nm)",
      "B": "Tepi daun yang berubah merah akibat kekurangan nitrogen",
      "C": "Pantulan cahaya matahari pada sudut 45 derajat",
      "D": "Hamburan atmosferik Rayleigh pada waktu senja"
    },
    "answer": "A",
    "explanation": {
      "correct": "Red Edge adalah batas transisi curam antara absorpsi kuat oleh klorofil pada panjang gelombang merah dan hamburan internal tinggi oleh struktur sel mesofil daun pada NIR.",
      "A": "Opsi A benar sesuai biofisika spektral tanaman.",
      "B": "Opsi B salah karena Red Edge adalah fenomena spektral fisik tanaman hijau sehat, bukan daun yang sakit secara kasat mata.",
      "C": "Opsi C salah karena Red Edge adalah sifat spektral materi biologis, bukan sudut iluminasi.",
      "D": "Opsi D salah karena hamburan Rayleigh terjadi di atmosfer, bukan daun."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-329",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk memotong geometri A dengan batasan geometri B (spatial clipping) dan hanya mempertahankan bagian A yang berada di dalam B?",
    "options": {
      "A": "ST_Intersection(geomA, geomB)",
      "B": "ST_Union(geomA, geomB)",
      "C": "ST_Difference(geomA, geomB)",
      "D": "ST_SymDifference(geomA, geomB)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Intersection mengembalikan geometri yang merupakan perpotongan bersama antara dua geometri input (clipping).",
      "A": "Opsi A benar sesuai fungsi operasi himpunan spasial PostGIS.",
      "B": "Opsi B salah karena ST_Union menggabungkan kedua geometri.",
      "C": "Opsi C salah karena ST_Difference mengembalikan bagian A yang berada di luar B.",
      "D": "Opsi D salah karena ST_SymDifference mengembalikan bagian A dan B yang tidak saling bertumpukan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-330",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Bagaimana cara membuat buffer selebar 500 meter di sekitar titik koordinat geografis (lon, lat) pada EPSG:4326 secara akurat dalam PostGIS?",
    "options": {
      "A": "ST_Buffer(geom::geography, 500)::geometry",
      "B": "ST_Buffer(geom, 500)",
      "C": "ST_Buffer(geom, 0.5)",
      "D": "ST_Expand(geom, 500)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Meng-cast geometri ke tipe 'geography' menyebabkan fungsi ST_Buffer menginterpretasikan radius dalam satuan meter nyata pada kelengkungan bumi, lalu di-cast kembali ke 'geometry'.",
      "A": "Opsi A benar karena ST_Buffer pada GEOMETRY EPSG:4326 menginterpretasikan angka dalam satuan derajat (500 derajat akan melingkari bumi beberapa kali).",
      "B": "Opsi B salah karena 500 pada geometri 4326 berarti 500 derajat busur.",
      "C": "Opsi C salah karena 0.5 derajat bukan 500 meter (0.5 derajat ~ 55 km di khatulistiwa).",
      "D": "Opsi D salah karena ST_Expand membuat bounding box kotak, bukan lingkaran buffer."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-331",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengonversi baris tabel spasial menjadi struktur JSON FeatureCollection yang siap dikonsumsi langsung oleh client frontend?",
    "options": {
      "A": "jsonb_build_object('type', 'FeatureCollection', 'features', jsonb_agg(ST_AsGeoJSON(t.*)::jsonb))",
      "B": "ST_ToFeatureCollection(t.*)",
      "C": "SELECT * AS FeatureCollection FROM t",
      "D": "ST_ExportGeoJSON(t.*)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kombinasi jsonb_build_object, jsonb_agg, dan ST_AsGeoJSON(t.*) memungkinkan PostgreSQL/PostGIS merangkai seluruh tabel menjadi objek GeoJSON FeatureCollection tunggal yang valid secara langsung di server database.",
      "A": "Opsi A benar sesuai pola query standar pembuatan GeoJSON di PostgreSQL/PostGIS.",
      "B": "Opsi B salah karena ST_ToFeatureCollection bukan fungsi PostGIS yang valid.",
      "C": "Opsi C salah karena query SQL standar tidak menghasilkan format GeoJSON.",
      "D": "Opsi D salah karena ST_ExportGeoJSON bukan fungsi bawaan PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-332",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Dalam arsitektur peta berbasis tile TMS (Tile Map Service) vs XYZ Slippy Map, apa perbedaan orientasi sumbu koordinat Y?",
    "options": {
      "A": "TMS memiliki titik asal Y=0 di bagian bawah (selatan) dan bertambah ke atas, sedangkan XYZ Slippy Map (OSM/Google) memiliki Y=0 di bagian atas (utara) dan bertambah ke bawah",
      "B": "TMS tidak memiliki sumbu Y",
      "C": "XYZ hanya mendukung satu level zoom",
      "D": "TMS selalu menggunakan format file BMP"
    },
    "answer": "A",
    "explanation": {
      "correct": "Slippy map standar (OSM, Google, Mapbox) menggunakan koordinat Y terbalik (origin pojok kiri atas). Standar OGC TMS menetapkan origin di pojok kiri bawah (Y terbalik: y_tms = (2^zoom - 1) - y_xyz).",
      "A": "Opsi A benar sesuai perbedaan orientasi tile pyramid TMS vs XYZ.",
      "B": "Opsi B salah karena TMS menggunakan sistem grid X, Y, Z.",
      "C": "Opsi C salah karena XYZ mendukung piramida multi-zoom z=0 hingga z=22.",
      "D": "Opsi D salah karena TMS umumnya menggunakan PNG atau JPEG."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-333",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Pada Leaflet, bagaimanakah cara menambahkan popup dinamis yang menampilkan nama dan alamat fitur saat marker diklik?",
    "options": {
      "A": "marker.bindPopup(`<b>${feature.properties.nama}</b><br>${feature.properties.alamat}`)",
      "B": "marker.setWindowAlert(feature.properties.nama)",
      "C": "marker.innerHTML = feature.properties.nama",
      "D": "document.write(feature.properties.nama)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method bindPopup() pada layer Leaflet mengaitkan konten HTML atau template string ke event interaksi klik pengguna pada marker.",
      "A": "Opsi A benar sesuai Leaflet API bindPopup.",
      "B": "Opsi B salah karena bukan method Leaflet.",
      "C": "Opsi C salah karena marker bukan elemen DOM langsung dengan properti innerHTML biasa.",
      "D": "Opsi D salah karena document.write menimpa seluruh halaman web."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-334",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "question": "Ketika Anda memanggil servis WFS dengan parameter outputFormat, format manakah yang paling umum digunakan untuk pertukaran data vektor berbasis web modern?",
    "options": {
      "A": "application/json (GeoJSON)",
      "B": "application/pdf",
      "C": "audio/mp3",
      "D": "video/mp4"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoServer dan platform WFS modern mendukung outputFormat=application/json untuk mengembalikan data vektor sebagai GeoJSON standar yang dapat langsung diparsing oleh JavaScript di browser.",
      "A": "Opsi A benar sesuai standar praktis Web GIS modern.",
      "B": "Opsi B salah karena PDF adalah format dokumen cetak.",
      "C": "Opsi C salah karena MP3 adalah format audio.",
      "D": "Opsi D salah karena MP4 adalah format video."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-335",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "question": "Dalam backend Python menggunakan FastAPI, pustaka apa yang paling tepat digunakan untuk membaca geometri GeoJSON dari request body dan memvalidasi skema datanya secara otomatis?",
    "options": {
      "A": "Pydantic bersama geojson-pydantic",
      "B": "math",
      "C": "sys",
      "D": "csv"
    },
    "answer": "A",
    "explanation": {
      "correct": "geojson-pydantic menyediakan model Pydantic untuk geometri GeoJSON (Point, Polygon, Feature, FeatureCollection) sehingga FastAPI dapat memvalidasi payload request body secara otomatis.",
      "A": "Opsi A benar sesuai standar ekosistem FastAPI modern untuk GIS.",
      "B": "Opsi B salah karena math hanya fungsi aritmetika dasar Python.",
      "C": "Opsi C salah karena sys modul sistem Python.",
      "D": "Opsi D salah karena csv untuk format tabular teks koma."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-336",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "question": "Teknologi server Vector Tile open source mandiri apakah yang ditulis dalam bahasa Rust/Go dan dapat terhubung langsung ke PostGIS untuk melayani tile .pbf secara berkecepatan tinggi?",
    "options": {
      "A": "Martin atau pg_tileserv",
      "B": "WordPress",
      "C": "Apache Lucene",
      "D": "Varnish Cache murni tanpa plugin"
    },
    "answer": "A",
    "explanation": {
      "correct": "Martin (Rust) dan pg_tileserv (Go) adalah tile server ringan dan sangat cepat yang mengeksekusi ST_AsMVT secara dinamis ke PostGIS tanpa konfigurasi rumit.",
      "A": "Opsi A benar karena Martin dan pg_tileserv adalah arsitektur tile server modern de facto.",
      "B": "Opsi B salah karena WordPress adalah CMS blog berbasis PHP.",
      "C": "Opsi C salah karena Lucene adalah search engine teks.",
      "D": "Opsi D salah karena Varnish adalah HTTP reverse proxy cache umum, bukan vector tile generator."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-337",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Dalam Google Earth Engine (GEE), mengapa operasi perulangan 'for-loop' Python konvensional sangat tidak disarankan untuk iterasi citra dalam ImageCollection?",
    "options": {
      "A": "Operasi for-loop dieksekusi di sisi client lokal secara lambat, sedangkan metode .map() mengeksekusi komputasi secara paralel terdistribusi di server GEE cloud",
      "B": "GEE melarang sintaks Python for-loop dan langsung mematikan akun",
      "C": "For-loop hanya dapat digunakan untuk menghitung matriks 1D",
      "D": "Metode .map() menghapus seluruh citra dari Google Cloud"
    },
    "answer": "A",
    "explanation": {
      "correct": "Earth Engine menggunakan paradigma functional map-reduce. Fungsi imageCollection.map(func) dikompilasi ke dalam computation graph dan didistribusikan ke ribuan node worker Google, sedangkan loop client-side memicu transfer data bolak-balik yang lambat.",
      "A": "Opsi A benar sesuai arsitektur komputasi awan Google Earth Engine.",
      "B": "Opsi B salah karena Python for-loop tetap valid secara sintaks namun tidak efisien di GEE.",
      "C": "Opsi C salah karena for-loop Python bersifat umum.",
      "D": "Opsi D salah karena .map() adalah transformasi fungsional yang mengembalikan koleksi baru."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-338",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Fungsi GEE ImageCollection manakah yang digunakan untuk mengompositkan serangkaian citra temporal menjadi satu citra dengan memilih nilai median dari setiap piksel bebas awan?",
    "options": {
      "A": "collection.median()",
      "B": "collection.average_all()",
      "C": "collection.to_single()",
      "D": "collection.flatten()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Reducer .median() pada ImageCollection menghitung nilai median temporal per-piksel, sangat efektif menghilangkan bayangan awan dan artefak outlier pada data deret waktu satelit.",
      "A": "Opsi A benar sesuai metode standar reduksi citra di Google Earth Engine.",
      "B": "Opsi B salah karena bukan nama metode GEE.",
      "C": "Opsi C salah karena bukan nama metode GEE.",
      "D": "Opsi D salah karena flatten bukan pereduksi komposit median piksel."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-339",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Aplikasi open-source modern berbasis FastAPI apakah yang sering digunakan untuk menyajikan dynamic tile dari Cloud Optimized GeoTIFF (COG) dan STAC langsung dari cloud storage (S3/GCS)?",
    "options": {
      "A": "TiTiler",
      "B": "Django Admin",
      "C": "Flask-SocketIO",
      "D": "NumpyServer"
    },
    "answer": "A",
    "explanation": {
      "correct": "TiTiler adalah dynamic tile server ringan berbasis FastAPI dan Rasterio/Rio-Tiler yang merender tile XYZ/WMTS langsung dari file COG di S3/GCS secara on-the-fly.",
      "A": "Opsi A benar sesuai arsitektur Cloud Native GIS modern.",
      "B": "Opsi B salah karena Django Admin adalah antarmuka manajemen data relational web.",
      "C": "Opsi C salah karena Flask-SocketIO untuk websocket event, bukan tile rendering.",
      "D": "Opsi D salah karena NumpyServer bukan library tile server standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-340",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "question": "Strategi caching manakah yang paling efektif di depan server peta (Nginx / Cloudflare) untuk meningkatkan kecepatan loading tile basemap OSM atau orthophoto?",
    "options": {
      "A": "Menetapkan HTTP header 'Cache-Control: public, max-age=2592000' (30 hari) karena tile peta basemap bersifat statis",
      "B": "Menetapkan 'Cache-Control: no-cache, no-store' agar server selalu merender ulang",
      "C": "Menghapus cache setiap 5 detik",
      "D": "Menonaktifkan HTTP caching di browser pengguna"
    },
    "answer": "A",
    "explanation": {
      "correct": "Basemap tile jarang sekali berubah. Menetapkan cache-control berdurasi panjang (misal 30 hari) memungkinkan reverse proxy dan browser menyajikan tile dari cache lokal seketika tanpa membebani server asal.",
      "A": "Opsi A benar sesuai praktik arsitektur high-performance Web GIS.",
      "B": "Opsi B salah karena no-store akan memaksa render ulang terus-menerus dan melumpuhkan server.",
      "C": "Opsi C salah karena durasi 5 detik menghilangkan manfaat caching tile statis.",
      "D": "Opsi D salah karena caching browser sangat esensial untuk panning dan zooming peta."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-341",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "question": "Apa kelemahan utama pemetaan drone menggunakan GPS receiver standar (stand-alone tanpa RTK/PPK)?",
    "options": {
      "A": "Akurasi posisi absolut geotag foto hanya berkisar 3 - 5 meter, sehingga memerlukan banyak Ground Control Point (GCP) di darat",
      "B": "Foto drone tidak memiliki warna sama sekali",
      "C": "Drone tidak dapat terbang melebihi ketinggian 10 meter",
      "D": "File foto drone tidak dapat disimpan ke memori internal"
    },
    "answer": "A",
    "explanation": {
      "correct": "GPS konsumen/stand-alone memiliki error ionosfer dan orbit hingga beberapa meter. Sistem RTK (Real-Time Kinematic) atau PPK (Post-Processing Kinematic) mengoreksi error ini hingga level sentimeter.",
      "A": "Opsi A benar sesuai karakteristik akurasi navigasi GNSS UAV.",
      "B": "Opsi B salah karena warna ditentukan sensor optik kamera, bukan GPS.",
      "C": "Opsi C salah karena ketinggian terbang drone diatur oleh motor dan regulasi udara.",
      "D": "Opsi D salah karena media penyimpanan independen dari akurasi GPS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-342",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "question": "Dalam workflow fotogrametri Structure from Motion (SfM), proses apakah yang menghubungkan ribuan titik fitur yang sama pada foto yang saling bertampalan (overlap)?",
    "options": {
      "A": "Tie Point matching (Feature extraction and matching)",
      "B": "Raster clipping",
      "C": "Vector buffering",
      "D": "SQL query filter"
    },
    "answer": "A",
    "explanation": {
      "correct": "Algoritma seperti SIFT mendeteksi keypoint/fitur unik pada setiap foto, lalu tie point matching mencocokkan titik-titik tersebut antar foto untuk merekonstruksi posisi kamera dan point cloud 3D.",
      "A": "Opsi A benar sesuai tahapan pipeline fotogrametri SfM.",
      "B": "Opsi B salah karena raster clipping adalah operasi pemotongan spasial 2D.",
      "C": "Opsi C salah karena buffering adalah pembuatan zona radius vektor.",
      "D": "Opsi D salah karena SQL query adalah operasi database."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-343",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Bagaimana cara mengekstrak informasi elevasi titik koordinat tertentu dari file DEM GeoTIFF menggunakan utilitas GDAL?",
    "options": {
      "A": "gdallocationinfo -val_only -wgs84 dem.tif lon lat",
      "B": "ogr2ogr -get_elevation dem.tif",
      "C": "gdal_translate -extract dem.tif",
      "D": "gdalwarp -probe dem.tif"
    },
    "answer": "A",
    "explanation": {
      "correct": "gdallocationinfo adalah utilitas GDAL khusus untuk meng-query nilai piksel pada lokasi koordinat geospasial tertentu pada raster.",
      "A": "Opsi A benar sesuai panduan utilitas command-line GDAL.",
      "B": "Opsi B salah karena ogr2ogr untuk data vektor.",
      "C": "Opsi C salah karena opsi -extract tidak ada pada gdal_translate.",
      "D": "Opsi D salah karena gdalwarp tidak memiliki opsi -probe."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-344",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk memotong LineString menjadi beberapa segmen berdasarkan panjang maksimum tertentu?",
    "options": {
      "A": "ST_Segmentize(line, max_length)",
      "B": "ST_ChopLine(line, max_length)",
      "C": "ST_DivideLine(line)",
      "D": "ST_LineSplitter(line)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Segmentize menyisipkan vertex baru pada segmen garis atau poligon sehingga tidak ada segmen yang lebih panjang dari nilai parameter jarak yang ditentukan.",
      "A": "Opsi A benar sesuai dokumentasi fungsi linear referencing / geometri PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-345",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Apa kegunaan fungsi ST_LineInterpolatePoint(line, fraction) pada PostGIS?",
    "options": {
      "A": "Menghasilkan titik (Point) pada posisi proporsi tertentu (0.0 sampai 1.0) sepanjang LineString",
      "B": "Menghitung total panjang garis dalam kilometer",
      "C": "Menggambar lingkaran di ujung garis",
      "D": "Menghapus vertex tengah garis"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_LineInterpolatePoint mengambil nilai fraksi (misal 0.5 untuk titik tengah garis) dan mengembalikan koordinat titik pada posisi fraksi tersebut di sepanjang LineString.",
      "A": "Opsi A benar sesuai konsep linear referencing di PostGIS.",
      "B": "Opsi B salah karena menghitung panjang garis menggunakan ST_Length.",
      "C": "Opsi C salah karena bukan fungsi pembuatan lingkaran.",
      "D": "Opsi D salah karena fungsi ini mengembalikan titik, bukan memodifikasi vertex garis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-346",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Dalam MapLibre GL JS, properti style apakah yang digunakan untuk mengatur elevasi 3D permukaan bumi berbasis raster DEM digital (terrain)?",
    "options": {
      "A": "setTerrain({ source: 'terrain-source', exaggeration: 1.5 })",
      "B": "setHeightMap3D(true)",
      "C": "enable3DBuildingsOnly()",
      "D": "setPerspectiveZoom(100)"
    },
    "answer": "A",
    "explanation": {
      "correct": "MapLibre GL JS mendukung visualisasi terrain 3D mesh dinamis menggunakan method setTerrain() yang mengambil raster DEM berkode Terrarium atau Mapbox RGB.",
      "A": "Opsi A benar sesuai API MapLibre GL JS 3D Terrain.",
      "B": "Opsi B salah karena bukan metode resmi API.",
      "C": "Opsi C salah karena opsi ini bukan syntax terrain 3D.",
      "D": "Opsi D salah karena bukan metode resmi MapLibre."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-347",
    "level": "intermediate",
    "topic": "Remote Sensing Fundamentals",
    "question": "Fenomena pergeseran posisi objek tinggi (seperti puncak gunung atau gedung) menjauhi titik nadir pada citra foto udara vertikal disebut:",
    "options": {
      "A": "Relief displacement",
      "B": "Radial blur",
      "C": "Vignetting",
      "D": "Chromatic aberration"
    },
    "answer": "A",
    "explanation": {
      "correct": "Relief displacement adalah pergeseran posisi planimetrik objek akibat ketinggiannya relatif terhadap bidang datum dalam proyeksi perspektif kamera udara. Efek ini dikoreksi dalam proses orthorektifikasi.",
      "A": "Opsi A benar sesuai prinsip fotogrametri geometrik.",
      "B": "Opsi B salah karena radial blur adalah efek distorsi pergerakan optik/grafis.",
      "C": "Opsi C salah karena vignetting adalah penggelapan di sudut frame foto.",
      "D": "Opsi D salah karena chromatic aberration adalah dispersi warna lensa."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-348",
    "level": "intermediate",
    "topic": "Koreksi Citra",
    "question": "Dalam pengolahan citra satelit resolusi tinggi, apa tujuan utama proses Orthorektifikasi (Orthorectification)?",
    "options": {
      "A": "Menghilangkan distorsi geometri akibat kemiringan sudut sensor (tilt) dan perbedaan variasi tinggi medan (topografi) menggunakan Digital Elevation Model (DEM)",
      "B": "Mengubah citra hitam putih menjadi citra RGB",
      "C": "Menghapus tanda air (watermark) pemilik citra",
      "D": "Meningkatkan kontras warna citra secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Orthorektifikasi mengoreksi distorsi perspektif dan perpindahan relief akibat topografi berbukit/bergunung sehingga citra memiliki proyeksi ortografis seragam dengan skala konstan di setiap piksel.",
      "A": "Opsi A benar sesuai definisi ilmiah orthorektifikasi.",
      "B": "Opsi B salah karena pewarnaan adalah operasi band compositing/color balancing.",
      "C": "Opsi C salah karena tidak berhubungan dengan hak cipta gambar.",
      "D": "Opsi D salah karena peningkatan kontras adalah peregangan histogram (radiometrik)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-349",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Sistem grid koordinat nasional Indonesia yang berbasis proyeksi Transverse Mercator dengan lebar zona bujur 3 derajat disebut:",
    "options": {
      "A": "TM-3° (Transverse Mercator 3 Derajat)",
      "B": "UTM 6°",
      "C": "Mercator Klasik",
      "D": "Lambert Conformal Conic"
    },
    "answer": "A",
    "explanation": {
      "correct": "Badan Pertanahan Nasional (BPN) menggunakan sistem koordinat TM-3° dengan pembagian zona bujur 3 derajat untuk memperkecil faktor distorsi skala kartometrik bidang tanah kadastral.",
      "A": "Opsi A benar sesuai sistem proyeksi resmi BPN Indonesia.",
      "B": "Opsi B salah karena UTM memiliki lebar zona 6 derajat.",
      "C": "Opsi C salah karena bukan sistem grid nasional resmi pendaftaran tanah.",
      "D": "Opsi D salah karena bukan sistem grid resmi BPN di Indonesia."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-350",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "question": "Praktik keamanan penting apakah yang wajib diterapkan pada instalasi produksi GeoServer publik?",
    "options": {
      "A": "Mengubah password default user 'admin' (geoserver) dan membatasi akses URL /geoserver/web hanya dari IP internal/VPN",
      "B": "Membuka seluruh hak akses database PostGIS tanpa password",
      "C": "Menonaktifkan firewall server",
      "D": "Menyimpan file kredensial database di repositori publik GitHub"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kredensial bawaan admin/geoserver adalah sasaran eksploitasi peretas. Mengganti password admin, menonaktifkan service yang tidak digunakan, dan membatasi akses console admin via reverse proxy adalah wajib.",
      "A": "Opsi A benar sesuai pedoman keamanan produksi GeoServer (OWASP / OSGeo).",
      "B": "Opsi B salah karena membiarkan database terbuka tanpa password adalah kerentanan kritis fatal.",
      "C": "Opsi C salah karena mematikan firewall membahayakan server.",
      "D": "Opsi D salah karena membocorkan kredensial di GitHub melanggar standar keamanan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-351",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Dalam teknik InSAR (Interferometric Synthetic Aperture Radar), apa fungsi utama dari tahap 'Phase Unwrapping' (misalnya menggunakan algoritma SNAPHU)?",
    "options": {
      "A": "Mengonversi nilai fase interferogram yang terbungkus (wrapped) dalam rentang [-π, +π] menjadi variasi fase kontinu mutlak untuk merekonstruksi deformasi permukaan atau elevasi topografi",
      "B": "Menghapus noise awan dari citra radar",
      "C": "Mengubah resolusi spasial citra menjadi 1 meter",
      "D": "Menggabungkan band merah, hijau, dan biru menjadi warna alami"
    },
    "answer": "A",
    "explanation": {
      "correct": "Interferogram merekam beda fase modulo 2π (rentang -π hingga +π). Phase unwrapping menyelesaikan ambiguitas kelipatan bilangan bulat 2πn agar nilai perpindahan absolut (LOS displacement) dapat dihitung.",
      "A": "Opsi A benar sesuai teori interferometri radar dan algoritma phase unwrapping (SNAPHU / Minimum Cost Flow).",
      "B": "Opsi B salah karena gelombang mikro radar sudah dapat menembus awan.",
      "C": "Opsi C salah karena unwrapping tidak mengubah resolusi geometris dasar.",
      "D": "Opsi D salah karena citra radar bukan data optik RGB."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-352",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Metode PS-InSAR (Persistent Scatterer InSAR) sangat efektif untuk memantau amblesan tanah (land subsidence) perkotaan dengan akurasi milimeter karena:",
    "options": {
      "A": "Memilih target hamburan balik yang sangat stabil dan koheren tinggi secara temporal (seperti atap gedung atau struktur beton) sepanjang rangkaian deret waktu citra SAR",
      "B": "Mengabaikan efek atmosfer dan rotasi bumi sepenuhnya tanpa kalibrasi",
      "C": "Hanya membutuhkan satu citra satelit radar tunggal",
      "D": "Mampu merekam pergerakan di bawah tanah hingga kedalaman 500 meter"
    },
    "answer": "A",
    "explanation": {
      "correct": "PS-InSAR mengidentifikasi piksel dengan sifat reflektif elektromagnetik konstan (Persistent Scatterers seperti infrastruktur perkotaan) yang mempertahankan koherensi fase tinggi melintasi puluhan akuisisi citra, memisahkan sinyal deformasi dari fase atmosferik.",
      "A": "Opsi A benar sesuai metodologi Ferretti et al. untuk PS-InSAR.",
      "B": "Opsi B salah karena PS-InSAR secara eksplisit memodelkan dan mengestimasi Atmospheric Phase Screen (APS).",
      "C": "Opsi C salah karena InSAR membutuhkan deret waktu banyak pasangan citra.",
      "D": "Opsi D salah karena sinyal radar hanya berinteraksi dengan permukaan dan penetrasi beberapa cm."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-353",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Dekomposisi polarimetrik 3-komponen Freeman-Durden pada data PolSAR kuad-polarisasi memecah matriks kovarians hamburan menjadi tiga mekanisme fisik, yaitu:",
    "options": {
      "A": "Surface/rough scattering, double-bounce scattering (pantulan ganda sudut bangunan/batang pohon), dan volume scattering (kanopi vegetasi)",
      "B": "Refleksi, refraksi, dan difraksi optik",
      "C": "Radiasi termal, ultraviolet, dan sinar gamma",
      "D": "Transmisi, absorpsi, dan fluoresensi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Model dekomposisi Freeman-Durden merepresentasikan daya total hamburan SAR ke dalam tiga komponen fisik: hamburan permukaan (Bragg scattering), pantulan ganda (double-bounce), dan hamburan kanopi acak (volume scattering).",
      "A": "Opsi A benar sesuai formulasi PolSAR Freeman-Durden.",
      "B": "Opsi B salah karena bukan dekomposisi polarimetri radar.",
      "C": "Opsi C salah karena radar adalah gelombang mikro, bukan spektrum ionisasi.",
      "D": "Opsi D salah karena bukan mekanisme dekomposisi hamburan SAR."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-354",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "question": "Dalam klasifikasi tutupan lahan berbasis citra satelit, mengapa model U-Net berbasis Convolutional Neural Network (CNN) lebih unggul daripada Random Forest berbasis piksel?",
    "options": {
      "A": "U-Net mampu mempelajari konteks spasial lokal dan pola tekstur/bentuk lingkungan sekitar (spatial context) melalui lapisan konvolusi dan skip-connections, bukan hanya nilai spektral piksel terisolasi",
      "B": "U-Net tidak membutuhkan data latih (training data) sama sekali",
      "C": "U-Net dapat berjalan tanpa bantuan kartu grafis (GPU)",
      "D": "Random Forest tidak dapat memproses lebih dari 3 band citra"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klasifikasi piksel tradisional (seperti Random Forest) hanya melihat vektor spektral piksel tunggal tanpa mempertimbangkan pola spasial tetangga. Arsitektur U-Net menangkap representasi kontekstual multiskala dan merekonstruksi segmentasi spasial secara detail melalui skip connections.",
      "A": "Opsi A benar sesuai keunggulan semantic segmentation CNN dalam Earth Observation.",
      "B": "Opsi B salah karena U-Net adalah supervised learning yang memerlukan dataset anotasi berlabel.",
      "C": "Opsi C salah karena U-Net membutuhkan GPU berkemampuan komputasi tinggi untuk pelatihan.",
      "D": "Opsi D salah karena Random Forest mendukung ratusan fitur variabel."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-355",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "question": "Dalam Object-Based Image Analysis (OBIA), matriks statistik manakah yang umum digunakan untuk mengekstrak fitur tekstur permukaan tutupan lahan dari citra beresolusi tinggi?",
    "options": {
      "A": "GLCM (Gray-Level Co-occurrence Matrix)",
      "B": "Confusion Matrix",
      "C": "DE-9IM Matrix",
      "D": "Hessian Matrix"
    },
    "answer": "A",
    "explanation": {
      "correct": "GLCM (Haralick et al.) menghitung frekuensi pasangan nilai piksel dengan jarak dan orientasi tertentu untuk menghasilkan metrik tekstur seperti kontras, disimilaritas, homogenitas, energi, dan korelasi.",
      "A": "Opsi A benar sesuai standar analisis tekstur OBIA.",
      "B": "Opsi B salah karena Confusion Matrix untuk evaluasi akurasi klasifikasi.",
      "C": "Opsi C salah karena DE-9IM untuk relasi topologi vektor.",
      "D": "Opsi D salah karena Hessian Matrix untuk turunan kedua kalkulus multivariat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-356",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Saat melakukan spatial join pada tabel batas wilayah yang memiliki poligon dengan jutaan vertex (misal garis pantai detail), strategi apa yang paling efektif untuk mencegah query timeout dan memori habis di PostGIS?",
    "options": {
      "A": "Menggunakan ST_Subdivide(geom, 256) untuk memotong poligon raksasa menjadi potongan-potongan poligon kecil sebelum diindeks dan di-join",
      "B": "Menghapus spatial index GiST pada tabel",
      "C": "Mengubah tipe kolom geometri menjadi VARCHAR",
      "D": "Menggunakan operator LIKE '%POLYGON%'"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Subdivide membagi poligon kompleks dengan vertex masif menjadi bagian-bagian kecil (maksimal 256 vertex). Bounding box setiap sub-poligon menjadi jauh lebih rapat, membuat indeks GiST sangat efisien dan evaluasi relasi spasial pointwise menjadi eksponensial lebih cepat.",
      "A": "Opsi A benar sesuai best practice optimasi geometri raksasa PostGIS.",
      "B": "Opsi B salah karena menghapus indeks GiST akan memicu full table scan yang sangat lambat.",
      "C": "Opsi C salah karena VARCHAR menonaktifkan seluruh komputasi spasial.",
      "D": "Opsi D salah karena regex/LIKE tidak mengevaluasi topologi spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-357",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Apa keunggulan indeks SP-GiST (Space-Partitioning GiST) dibandingkan GiST standar pada jenis data geospasial tertentu di PostgreSQL/PostGIS?",
    "options": {
      "A": "SP-GiST mempartisi ruang secara rekursif dan non-overlapping (seperti quadtree / k-d tree), sangat efisien untuk dataset titik 2D dengan distribusi yang tidak merata (skewed clusters)",
      "B": "SP-GiST hanya bekerja pada data teks dan string",
      "C": "SP-GiST tidak membutuhkan ruang disk sama sekali",
      "D": "SP-GiST mengabaikan koordinat Z dan M secara paksa"
    },
    "answer": "A",
    "explanation": {
      "correct": "Berbeda dengan GiST (R-tree) yang memungkinkan bounding box saling overlap, SP-GiST mengimplementasikan partisi ruang diskrit (misalnya quadtree untuk 2D points). Untuk dataset titik dengan pola distribusi padat di area tertentu, SP-GiST sering kali lebih cepat dan lebih hemat ruang.",
      "A": "Opsi A benar sesuai arsitektur partisi ruang SP-GiST PostgreSQL.",
      "B": "Opsi B salah karena SP-GiST mendukung tipe data geometrik PostGIS.",
      "C": "Opsi C salah karena semua indeks memerlukan struktur penyimpanan disk.",
      "D": "Opsi D salah karena dukungan dimensi sesuai tipe geometri yang diindeks."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-358",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Parameter postgresql.conf manakah yang harus diturunkan nilainya (misalnya dari 4.0 menjadi 1.1) pada server PostgreSQL yang menggunakan media penyimpanan NVMe/SSD berkecepatan tinggi agar query planner lebih memilih Index Scan daripada Sequential Scan?",
    "options": {
      "A": "random_page_cost",
      "B": "work_mem",
      "C": "shared_buffers",
      "D": "max_connections"
    },
    "answer": "A",
    "explanation": {
      "correct": "Nilai default random_page_cost (4.0) mengasumsikan hard drive mekanik tradisional yang lambat dalam random seek. Pada NVMe/SSD, random access hampir sama cepatnya dengan sequential access, sehingga menetapkan random_page_cost = 1.1 mendorong planner memanfaatkan indeks GiST spasial.",
      "A": "Opsi A benar sesuai panduan tuning performa PostgreSQL & PostGIS pada SSD.",
      "B": "Opsi B salah karena work_mem mengatur alokasi memori per-operasi sorting/hash.",
      "C": "Opsi C salah karena shared_buffers mengatur ukuran RAM cache basis data.",
      "D": "Opsi D salah karena max_connections mengatur batas jumlah klien bersamaan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-359",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Dalam PostGIS Raster, fungsi SQL manakah yang memungkinkan eksekusi ekspresi matematika kustom antar piksel dari multi-band raster secara vectorized?",
    "options": {
      "A": "ST_MapAlgebra(rast1, band1, rast2, band2, 'expression')",
      "B": "ST_RasterMath()",
      "C": "ST_NumpyCalc()",
      "D": "ST_PixelShader()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_MapAlgebra adalah fungsi inti pemrosesan raster PostGIS yang mengeksekusi operasi aljabar peta lokal pada satu atau beberapa layer raster menggunakan ekspresi logika atau matematika.",
      "A": "Opsi A benar sesuai modul PostGIS Raster.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-360",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Mengapa klausa operator bounding box '&&' sering digabungkan sebelum fungsi topologi presisi seperti ST_Intersects dalam query PostGIS kompleks?",
    "options": {
      "A": "Meskipun ST_Intersects modern secara internal sudah mengikutsertakan indeks bounding box, eksplisit filter '&&' berguna pada konstruksi subquery atau fungsi spasial kustom untuk memastikan indeks GiST terpilih",
      "B": "Operator '&&' menggabungkan dua baris tabel menjadi satu secara string",
      "C": "Operator '&&' menghapus geometri duplikat dari database",
      "D": "Operator '&&' mengonversi geometri menjadi format raster WKB"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator '&&' memeriksa apakah bounding box (MBR) kedua geometri berpotongan, memanfaatkan indeks spasial GiST secara langsung. Meskipun ST_Intersects memanggil operator && secara otomatis, pemahaman operator ini esensial dalam optimasi query kustom dan CTE.",
      "A": "Opsi A benar sesuai mekanisme eksekusi query planner PostGIS.",
      "B": "Opsi B salah karena bukan operator konkatenasi string (yang menggunakan ||).",
      "C": "Opsi C salah karena bukan operasi deduplikasi.",
      "D": "Opsi D salah karena bukan fungsi serialisasi biner."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-361",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Format Cloud Optimized Point Cloud (COPC) dibangun di atas format LAZ 1.4 dengan mengorganisasi data titik LiDAR ke dalam struktur pohon spasial apa?",
    "options": {
      "A": "Octree bertingkat dengan chunk LAZ independen yang mendukung pembacaan bertahap sesuai resolusi (LOD)",
      "B": "Array 1D datar tanpa hirarki",
      "C": "B-Tree tunggal berbasis waktu GPS",
      "D": "File teks CSV terkompresi ZIP"
    },
    "answer": "A",
    "explanation": {
      "correct": "COPC mengorganisasi titik-titik LiDAR ke dalam struktur ruang 3D Octree bertingkat di dalam kontainer standar LAZ 1.4. Hal ini memungkinkan visualisasi streaming point cloud 3D multi-resolusi melalui HTTP range requests.",
      "A": "Opsi A benar sesuai spesifikasi COPC standard (copc.io).",
      "B": "Opsi B salah karena array datar tidak mendukung streaming Level of Detail (LOD).",
      "C": "Opsi C salah karena B-tree temporal tidak mempartisi ruang 3D.",
      "D": "Opsi D salah karena COPC berbasis kompresi binary LASzip (LAZ), bukan CSV."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-362",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Dalam katalog STAC (SpatioTemporal Asset Catalog), apa hierarki struktural standar dari tingkat tertinggi hingga terendah?",
    "options": {
      "A": "Catalog -> Collection -> Item -> Asset",
      "B": "Asset -> Item -> Collection -> Catalog",
      "C": "Item -> Asset -> Layer -> Workspace",
      "D": "Database -> Table -> Row -> Column"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi STAC mendefinisikan hirarki: Catalog (pengelompokan umum) berisi Collection (himpunan item sejenis dengan skema dan ekstensi umum), berisi Item (fitur GeoJSON berwaktu dan bergeometri), yang merujuk pada Asset (file biner riil seperti COG .tif).",
      "A": "Opsi A benar sesuai spesifikasi inti STAC.",
      "B": "Opsi B salah karena urutan terbalik.",
      "C": "Opsi C salah karena bukan terminologi hierarki STAC.",
      "D": "Opsi D salah karena merupakan model basis data relasional."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-363",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Format penyimpanan multidimensi chunked Zarr dan library Python Xarray sangat populer dalam arsitektur Data Cube iklim/geospasial karena:",
    "options": {
      "A": "Mampu membagi data raster spasial-temporal berdimensi tinggi (X, Y, Time, Band/Depth) ke dalam chunk independen terkompresi yang efisien dibaca secara paralel di cloud object storage",
      "B": "Hanya dapat dibuka menggunakan program Microsoft Paint",
      "C": "Secara otomatis membatasi ukuran dataset maksimum 100 Megabyte",
      "D": "Menghapus metadata proyeksi koordinat agar file lebih ringan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Zarr menyimpan array N-dimensi dalam chunk-chunk kecil yang dapat diakses secara asinkron dan paralel dari S3/GCS. Bersama Xarray, pengguna dapat melakukan slicing spasiotemporal (misal waktu dan koordinat) tanpa memuat seluruh dataset ke memori.",
      "A": "Opsi A benar sesuai arsitektur modern Open Data Cube dan Pangeo.",
      "B": "Opsi B salah karena Zarr diakses melalui pustaka ilmiah Python/C/Rust.",
      "C": "Opsi C salah karena Zarr dirancang untuk dataset multi-terabyte hingga petabyte.",
      "D": "Opsi D salah karena Zarr dan Xarray menyimpan atribut koordinat dan metadata lengkap."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-364",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam visualisasi 3D geospasial pada browser modern, format standar OGC manakah yang dirancang khusus untuk streaming dan rendering dataset 3D heterogen masif (seperti point cloud, gedung 3D BIM, photogrammetry mesh)?",
    "options": {
      "A": "OGC 3D Tiles",
      "B": "OGC WMS 1.1.1",
      "C": "OGC GeoPackage 1D",
      "D": "OGC SLD 1.0"
    },
    "answer": "A",
    "explanation": {
      "correct": "OGC 3D Tiles (dipelopori oleh Cesium) adalah standar terbuka berbasis struktur spasial bertingkat (hierarchical spatial data structure / bounding volume hierarchy) untuk streaming model 3D kota, mesh fotogrametri, dan point cloud berkecepatan tinggi ke WebGL.",
      "A": "Opsi A benar sesuai spesifikasi OGC 3D Tiles Community Standard.",
      "B": "Opsi B salah karena WMS melayani gambar peta datar 2D.",
      "C": "Opsi C salah karena GeoPackage adalah SQLite database.",
      "D": "Opsi D salah karena SLD adalah styling 2D."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-365",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Pada library visualisasi GPU Deck.gl, layer manakah yang digunakan untuk memvisualisasikan lintasan pergerakan dinamis (seperti jejak rute penerbangan atau kendaraan GPS) dengan animasi timestamp?",
    "options": {
      "A": "TripsLayer",
      "B": "ScatterplotLayer",
      "C": "GeoJsonLayer",
      "D": "ArcLayer"
    },
    "answer": "A",
    "explanation": {
      "correct": "TripsLayer di Deck.gl mengevaluasi koordinat 3D/4D beserta timestamp kedatangan untuk menggambar ekor animasi lintasan pergerakan dinamis menggunakan GPU vertex shaders.",
      "A": "Opsi A benar sesuai dokumentasi Deck.gl TripsLayer.",
      "B": "Opsi B salah karena ScatterplotLayer untuk titik statis lingkaran 2D.",
      "C": "Opsi C salah karena GeoJsonLayer untuk geometri statis GeoJSON umum.",
      "D": "Opsi D salah karena ArcLayer untuk garis lengkung penghubung dua titik tetap."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-366",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam arsitektur dynamic vector tiles, jika Anda menggunakan MapLibre GL JS, properti ekspresi (expression) manakah yang tepat untuk mewarnai fitur poligon secara bertahap (choropleth) berdasarkan nilai kepadatan penduduk?",
    "options": {
      "A": "['interpolate', ['linear'], ['get', 'pop_density'], 0, '#ffffff', 1000, '#ff0000']",
      "B": "['filter', 'pop_density', 'red']",
      "C": "['select', 'color', 'red']",
      "D": "['loop', 0, 1000, 'red']"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mapbox/MapLibre Style Expressions mendukung kurva interpolasi kontinu menggunakan operator ['interpolate', ['linear'], ['get', 'property'], stop1, val1, stop2, val2].",
      "A": "Opsi A benar sesuai sintaks resmi style expressions MapLibre GL JS.",
      "B": "Opsi B salah karena bukan ekspresi pewarnaan kontinu yang valid.",
      "C": "Opsi C salah karena operator 'select' bukan ekspresi styling.",
      "D": "Opsi D salah karena ekspresi styling tidak memiliki operator loop imperatif."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-367",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "question": "Dalam membangun klaster GeoServer High-Availability (HA) multi-node di lingkungan Kubernetes/Docker, bagaimana penanganan GEOSERVER_DATA_DIR yang tepat?",
    "options": {
      "A": "Menggunakan shared network storage (ReadWriteMany PVC via NFS / AWS EFS) dengan plugin geoserver-clustering (Hazelcast/ActiveMQ) untuk sinkronisasi reload katalog in-memory antar pod",
      "B": "Membiarkan setiap pod memiliki data dir terisolasi tanpa ada sinkronisasi",
      "C": "Menyimpan seluruh konfigurasi pada cookie browser pengguna",
      "D": "Menjalankan GeoServer hanya pada satu node tunggal tanpa backup"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ketika beberapa instance GeoServer membaca data dir bersama, perubahan layer pada satu node tidak otomatis diketahui memori instance lain kecuali ada messaging bus (Hazelcast/ActiveMQ clustering plugin) yang menyiarkan event catalog reload ke semua node.",
      "A": "Opsi A benar sesuai arsitektur resmi GeoServer Enterprise Clustering.",
      "B": "Opsi B salah karena konfigurasi antar node akan mengalami desinkronisasi (split-brain).",
      "C": "Opsi C salah karena browser cookie tidak dapat menyimpan katalog layer server.",
      "D": "Opsi D salah karena single-node bukan high availability."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-368",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "question": "Dalam arsitektur microservices Web GIS, apa tujuan penerapan Vector Tile Caching proxy (seperti Tegola, Martin di balik Cloudflare/Fastly)?",
    "options": {
      "A": "Mencegah query ST_AsMVT berulang dieksekusi ke PostgreSQL untuk tile yang sama, sehingga database terlindungi dari lonjakan jutaan request bersamaan",
      "B": "Mengonversi seluruh koordinat ke sistem biner non-standar",
      "C": "Menghapus proteksi firewall server",
      "D": "Membatasi kecepatan koneksi pengguna menjadi 56 kbps"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menghasilkan vector tile secara on-the-fly membutuhkan komputasi CPU dan I/O database yang signifikan. Caching tile di Edge CDN / reverse proxy menyerap hingga 99% lalu lintas tile berulang.",
      "A": "Opsi A benar sesuai prinsip skalabilitas sistem spasial web modern.",
      "B": "Opsi B salah karena MVT tetap menggunakan format standar Protobuf.",
      "C": "Opsi C salah karena proxy cache tidak meniadakan konfigurasi keamanan.",
      "D": "Opsi D salah karena tujuannya justru memaksimalkan kecepatan throughput data."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-369",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Saat mengirimkan dataset spasial poligon batas kabupaten yang sangat besar (> 50 MB) dari server ke frontend, pola arsitektur manakah yang paling efisien?",
    "options": {
      "A": "Menyajikan data dalam bentuk Vector Tiles (MVT) secara dinamis per zoom level dan bounding box, bukan mengirim satu file GeoJSON monolitik utuh",
      "B": "Mengirimkan seluruh file 50 MB langsung via HTTP GET GeoJSON biasa",
      "C": "Mengirimkan file Shapefile mentah dalam format .zip untuk diekstrak oleh browser",
      "D": "Mengonversi poligon menjadi string teks CSV panjang"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mengirim GeoJSON puluhan megabyte memblokir network transfer dan main thread browser untuk JSON parsing. Vector tiles memotong data berdasarkan zoom level dengan simplifikasi geometri adaptif, hanya mentransfer kilobyte data yang terlihat di layar.",
      "A": "Opsi A benar sesuai arsitektur performa Web GIS modern.",
      "B": "Opsi B salah karena memuat 50 MB GeoJSON akan menyebabkan browser lag dan memory bloat.",
      "C": "Opsi C salah karena browser tidak efisien memproses shapefile binary mentah.",
      "D": "Opsi D salah karena CSV poligon WKT tidak efisien dan tidak terindeks spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-370",
    "level": "advanced",
    "topic": "Geodesi & Proyeksi",
    "question": "Dalam transformasi datum terestrial antar era (misal ITRF2014 ke DGN95 / SRGI2013 di Indonesia), mengapa model deformasi pergeseran tektonik (velocity field / deformation model) wajib diikutsertakan?",
    "options": {
      "A": "Indonesia berada pada pertemuan empat lempeng tektonik aktif utama yang bergerak beberapa sentimeter setiap tahun serta mengalami gempa bumi co-seismic dan post-seismic",
      "B": "Bentuk bumi berubah menjadi kubus setiap 10 tahun",
      "C": "Satelit GPS mengubah orbitnya setiap 100 hari",
      "D": "Khatulistiwa bergeser sejauh 500 kilometer ke arah selatan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Wilayah Indonesia sangat dinamis secara tektonik (Lempeng Eurasia, Indo-Australia, Pasifik, Laut Filipina). SRGI2013 mengadopsi semi-kinematic datum yang memperhitungkan laju kecepatan lempeng tahunan dan gempa bumi melalui deformation grid model.",
      "A": "Opsi A benar sesuai konsep Sistem Referensi Geospasial Indonesia (SRGI2013) oleh BIG.",
      "B": "Opsi B salah karena bumi tetap berbentuk elipsoid oblat.",
      "C": "Opsi C salah karena orbit GPS dipantau dan dikoreksi secara berkala oleh stasiun monitor bumi.",
      "D": "Opsi D salah karena khatulistiwa geografis stabil pada bidang rotasi bumi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-371",
    "level": "advanced",
    "topic": "Fotogrametri & UAV",
    "question": "Mengapa efek rolling shutter pada kamera sensor CMOS tanpa mechanical shutter dapat menyebabkan error fotogrametri 3D yang signifikan pada drone berkecepatan tinggi?",
    "options": {
      "A": "Setiap baris piksel pada sensor terekam pada waktu yang sedikit berbeda saat drone bergerak cepat, mendistorsi geometri frame foto dan merusak akurasi bundle adjustment",
      "B": "Warna foto berubah menjadi monokrom secara otomatis",
      "C": "Drone akan kehilangan sinyal radio pemancar",
      "D": "File foto akan terhapus otomatis setelah mendarat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sensor rolling shutter merekam gambar baris per baris. Jika platform UAV bergerak maju dengan cepat, objek di bagian bawah frame terekam beberapa milidetik setelah bagian atas, menciptakan distorsi geometri internal. Kamera global shutter direkomendasikan untuk fotogrametri.",
      "A": "Opsi A benar sesuai analisis efek rolling shutter dalam fotogrametri udara UAV.",
      "B": "Opsi B salah karena rolling shutter tidak menghilangkan channel warna.",
      "C": "Opsi C salah karena tidak berhubungan dengan link komunikasi radio UAV.",
      "D": "Opsi D salah karena tidak ada penghapusan file otomatis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-372",
    "level": "advanced",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Perintah gdalwarp manakah yang digunakan untuk membuat Cloud Optimized GeoTIFF (COG) berstandar modern dengan kompresi DEFLATE, ubinan dalam (tiling), dan overviews?",
    "options": {
      "A": "gdal_translate input.tif output_cog.tif -of COG -co COMPRESS=DEFLATE",
      "B": "ogr2ogr -f COG input.tif output_cog.tif",
      "C": "gdalinfo -cog input.tif output_cog.tif",
      "D": "gdalmanage copy input.tif output_cog.tif"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sejak versi GDAL 3.1+, driver resmi '-of COG' tersedia langsung pada gdal_translate untuk menghasilkan Cloud Optimized GeoTIFF yang telah ditata tiling, overviews, dan kompresinya secara otomatis.",
      "A": "Opsi A benar sesuai dokumentasi GDAL COG driver.",
      "B": "Opsi B salah karena ogr2ogr adalah driver vektor.",
      "C": "Opsi C salah karena gdalinfo hanya menampilkan ringkasan metadata.",
      "D": "Opsi D salah karena gdalmanage tidak melakukan konversi format COG."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-373",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menghitung garis kerangka tengah (medial axis / straight skeleton) dari poligon kompleks untuk penempatan label sungai atau koridor jalan?",
    "options": {
      "A": "ST_StraightSkeleton(geom)",
      "B": "ST_CenterLine(geom)",
      "C": "ST_MidAxis(geom)",
      "D": "ST_Spine(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_StraightSkeleton (atau ST_ApproximateMedialAxis dalam modul sfcgal) menghitung garis kerangka lurus yang berada tepat di tengah bentuk geometri poligon.",
      "A": "Opsi A benar sesuai fungsi PostGIS SFCGAL / topology.",
      "B": "Opsi B salah karena bukan nama fungsi PostGIS standar.",
      "C": "Opsi C salah karena bukan nama fungsi PostGIS standar.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-374",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "question": "Dalam koreksi radiometrik sensor optik, apa fungsi utama dari metode FLAASH (Fast Line-of-sight Atmospheric Analysis of Spectral Hypercubes)?",
    "options": {
      "A": "Melakukan koreksi atmosferik berbasis model radiative transfer MODTRAN untuk mengeliminasi pengaruh aerosol, kelembaban, dan hamburan Rayleigh secara presisi fisik",
      "B": "Menaikkan resolusi citra dari 30 meter menjadi 1 meter",
      "C": "Membuat peta kontur 3D dari foto udara",
      "D": "Menghitung luas hutan secara instan"
    },
    "answer": "A",
    "explanation": {
      "correct": "FLAASH adalah algoritma koreksi atmosferik first-principles berbasis MODTRAN code yang mengonversi radiansi TOA menjadi surface reflectance (BOA) dengan mempertimbangkan variasi uap air dan hamburan atmosfer per-piksel.",
      "A": "Opsi A benar sesuai prinsip pemodelan transfer radiatif FLAASH.",
      "B": "Opsi B salah karena FLAASH adalah koreksi spektral/radiometrik, bukan algoritma super-resolution.",
      "C": "Opsi C salah karena kontur memerlukan data elevasi/stereoskopis.",
      "D": "Opsi D salah karena FLAASH bukan alat klasifikasi tutupan hutan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-375",
    "level": "advanced",
    "topic": "Indeks Spektral",
    "question": "Indeks Burned Area Index (BAI) dirancang dengan memanfaatkan sifat spektral arang dan abu bekas kebakaran hutan yang ditandai oleh:",
    "options": {
      "A": "Konvergensi nilai reflektansi menuju titik referensi arang pada panjang gelombang merah (~0.7 µm) dan inframerah dekat (~0.85 µm)",
      "B": "Peningkatan emisi radiasi ultraviolet",
      "C": "Penurunan suhu permukaan tanah menjadi di bawah nol derajat",
      "D": "Pantulan gelombang radio frekuensi tinggi"
    },
    "answer": "A",
    "explanation": {
      "correct": "BAI = 1.0 / ((0.1 - Red)^2 + (0.06 - NIR)^2). Formula ini menghitung jarak spektral terhadap titik reflektansi konvergensi arang terbakar untuk mendeteksi bekas kebakaran secara sensitif.",
      "A": "Opsi A benar sesuai formulasi Chuvieco et al. untuk BAI.",
      "B": "Opsi B salah karena sensor observasi bumi tidak mengukur emisi UV kebakaran permukaan.",
      "C": "Opsi C salah karena tanah terbakar justru memiliki suhu permukaan (LST) lebih tinggi akibat hilangnya kanopi peneduh.",
      "D": "Opsi D salah karena BAI adalah indeks spektral optik."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-376",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk memotong geometri LineString pada titik koordinat terdekat dengan Point tertentu (linear dynamic segmentation)?",
    "options": {
      "A": "ST_Split(line, ST_ClosestPoint(line, point))",
      "B": "ST_BreakLine(line, point)",
      "C": "ST_ChopAt(line, point)",
      "D": "ST_Cut(line, point)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Split memotong geometri input (garis) menggunakan bilah pemotong (cutter). Titik pemotong harus berada tepat pada garis, sehingga ST_ClosestPoint atau ST_Snap sering dipadukan agar pemotongan berhasil secara topologis.",
      "A": "Opsi A benar sesuai fungsi pemotongan geometri PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-377",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Bagaimana cara melakukan spatial clustering berbasis k-means langsung di PostGIS untuk mengelompokkan 100.000 titik ATM menjadi 20 zona klaster?",
    "options": {
      "A": "SELECT ST_ClusterKMeans(geom, 20) OVER() AS cluster_id, geom FROM atm;",
      "B": "SELECT ST_MakeClusters(geom, 20) FROM atm;",
      "C": "SELECT KMeans(geom, 20) FROM atm GROUP BY geom;",
      "D": "SELECT ST_ClusterByDistance(geom, 20) FROM atm;"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_ClusterKMeans adalah fungsi window 2D k-means di PostGIS yang mengembalikan cluster ID (0 hingga k-1) untuk setiap baris fitur berdasarkan kedekatan spasial geometrinya.",
      "A": "Opsi A benar sesuai dokumentasi resmi PostGIS ST_ClusterKMeans.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan sintaks fungsi window PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-378",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Apa manfaat pembuatan indeks BRIN (Block Range Index) dibandingkan GiST pada tabel histori log GPS kendaraan dengan miliaran baris data yang diurutkan secara fisik berdasarkan waktu dan lokasi?",
    "options": {
      "A": "Ukuran indeks BRIN ratusan kali lebih kecil daripada GiST dan sangat cepat dibuat, dengan kinerja pemindaian rentang blok yang sangat efisien pada data berurutan fisik (physically sorted data)",
      "B": "BRIN dapat mengoreksi geometri poligon secara otomatis",
      "C": "BRIN hanya membutuhkan memori 1 byte di RAM",
      "D": "BRIN tidak memerlukan database PostgreSQL"
    },
    "answer": "A",
    "explanation": {
      "correct": "BRIN mencatat nilai minimum dan maksimum per rentang halaman disk (misal 128 halaman). Untuk tabel log spasial-temporal append-only berukuran terabyte yang terurut secara alami, indeks BRIN hanya berukuran beberapa megabyte dan memangkas block I/O secara masif.",
      "A": "Opsi A benar sesuai keunggulan arsitektural indeks BRIN di PostgreSQL.",
      "B": "Opsi B salah karena indeks bukan fungsi validasi geometri.",
      "C": "Opsi C salah karena ukuran BRIN proporsional dengan jumlah block range.",
      "D": "Opsi D salah karena BRIN adalah fitur bawaan inti PostgreSQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-379",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengonversi kumpulan titik menjadi poligon batas terluar yang mengikuti kontur cekung (concave hull / alpha shape)?",
    "options": {
      "A": "ST_ConcaveHull(ST_Collect(geom), target_percent, false)",
      "B": "ST_ConvexHull(geom)",
      "C": "ST_BoundingBox(geom)",
      "D": "ST_OuterRing(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_ConcaveHull menghasilkan poligon batas cekung (alpha-shape) yang melingkupi kumpulan titik dengan lebih rapat mengikuti bentuk footprint sebenarnya dibanding ST_ConvexHull (karet gelang cembung).",
      "A": "Opsi A benar sesuai spesifikasi fungsi PostGIS ST_ConcaveHull.",
      "B": "Opsi B salah karena ConvexHull menghasilkan batas cembung tanpa lekukan ke dalam.",
      "C": "Opsi C salah karena BoundingBox menghasilkan kotak segiempat tegak.",
      "D": "Opsi D salah karena ST_OuterRing mengambil cincin terluar dari sebuah Polygon yang sudah ada."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-380",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Dalam Google Earth Engine, bagaimana cara mengekspor citra hasil komposit multispektral resolusi tinggi langsung ke Google Cloud Storage (GCS) atau Google Drive?",
    "options": {
      "A": "Export.image.toCloudStorage({ image: finalImage, description: 'export_job', bucket: 'my-bucket', scale: 10, region: aoi })",
      "B": "finalImage.downloadToHardDrive()",
      "C": "print(finalImage.toJPEG())",
      "D": "window.saveAs(finalImage)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Earth Engine memproses ekspor skala besar melalui batch task API: Export.image.toCloudStorage() atau Export.image.toDrive() dengan menentukan skala piksel (scale), bounding box (region), dan format CRS.",
      "A": "Opsi A benar sesuai dokumentasi Google Earth Engine Batch Export API.",
      "B": "Opsi B salah karena GEE tidak menyediakan metode synchronous lokal downloadToHardDrive.",
      "C": "Opsi C salah karena print() hanya menampilkan representasi metadata ke console.",
      "D": "Opsi D salah karena window.saveAs adalah method client-side DOM non-GEE."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-381",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Dalam library Dask-GeoPandas, bagaimana data geospasial diproses secara terdistribusi di beberapa core CPU atau node cluster?",
    "options": {
      "A": "Dataset dibagi menjadi partisi-partisi spasial (spatial partitions) dengan bounding box yang terdefinisi sehingga operasi spatial join dan filtering hanya dieksekusi pada partisi yang saling bertindihan",
      "B": "Setiap baris data dikirimkan ke satelit untuk dihitung",
      "C": "Semua data dimuat utuh ke dalam memori RAM setiap node tanpa dipartisi",
      "D": "Dask mengubah data menjadi gambar JPEG sebelum komputasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dask-GeoPandas memperluas GeoPandas dengan membagi GeoDataFrame menjadi partisi spasial (misal menggunakan Hilbert curve atau KD-tree). Pengetahuan batas bounding box per partisi meminimalkan shuffle data antar worker saat spatial join.",
      "A": "Opsi A benar sesuai arsitektur komputasi terdistribusi Dask-GeoPandas.",
      "B": "Opsi B salah karena komputasi terdistribusi berjalan di cluster server lokal/cloud.",
      "C": "Opsi C salah karena memuat seluruh data ke setiap node meniadakan skalabilitas paralel.",
      "D": "Opsi D salah karena Dask memproses struktur tabel vektor asli."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-382",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam WebGL shaders untuk Web GIS (misalnya kustomisasi custom layer di Mapbox GL JS), apa peran dari 'Vertex Shader' dan 'Fragment Shader'?",
    "options": {
      "A": "Vertex Shader mentransformasikan koordinat geospasial 3D ke koordinat layar 2D (screen space), sedangkan Fragment Shader menghitung warna dan pencahayaan setiap piksel pada layar",
      "B": "Vertex Shader mengatur koneksi database, Fragment Shader mengirim email",
      "C": "Vertex Shader menghapus data poligon, Fragment Shader membuat backup",
      "D": "Vertex Shader hanya digunakan untuk teks, Fragment Shader untuk audio"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pipeline WebGL GPU terdiri dari dua shader utama: Vertex shader memproses geometri titik dan proyeksi matriks kamera, sedangkan Fragment shader (pixel shader) mewarnai setiap fragmen piksel yang dirender pada layar.",
      "A": "Opsi A benar sesuai arsitektur grafis WebGL/OpenGL.",
      "B": "Opsi B salah karena shaders dieksekusi di GPU, bukan backend server.",
      "C": "Opsi C salah karena bukan fungsi pipeline grafis.",
      "D": "Opsi D salah karena tidak berhubungan dengan pemrosesan audio."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-383",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Bagaimana geotiff.js memungkinkan decoding dan visualisasi citra multispektral 16-bit atau data DEM float secara langsung di sisi browser tanpa server perender (serverless Web GIS)?",
    "options": {
      "A": "Membaca header dan metadata TIFF via HTTP Range Requests, mendekompresi tile piksel secara langsung di JavaScript/WebAssembly, dan merendernya ke elemen HTML Canvas via WebGL",
      "B": "Mengonversi file TIFF menjadi file Word di browser",
      "C": "Mengirimkan seluruh file 2 GB ke RAM browser seketika",
      "D": "Mengharuskan browser menginstal aplikasi QGIS desktop"
    },
    "answer": "A",
    "explanation": {
      "correct": "geotiff.js adalah parser GeoTIFF murni dalam JavaScript. Bersama Cloud Optimized GeoTIFF (COG), geotiff.js membaca byte rentang tertentu via range requests dan mendekompresi piksel (LZW/Deflate) langsung di client thread/worker.",
      "A": "Opsi A benar sesuai arsitektur serverless web raster rendering dengan geotiff.js.",
      "B": "Opsi B salah karena bukan konversi dokumen teks.",
      "C": "Opsi C salah karena range request mencegah pembacaan seluruh file raksasa.",
      "D": "Opsi D salah karena berjalan murni di dalam browser modern standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-384",
    "level": "advanced",
    "topic": "OGC Services & Web Services",
    "question": "Dalam standar OGC API - Features (yang merupakan suksesor modern dari WFS), format pertukaran data dan protokol komunikasi apa yang diwajibkan?",
    "options": {
      "A": "Arsitektur RESTful JSON/GeoJSON berbasis OpenAPI 3.0 dan HTTP standar (GET, POST, PUT, DELETE)",
      "B": "SOAP berbasis XML murni dengan protokol WSDL",
      "C": "Protokol FTP biner tanpa HTTP",
      "D": "Koneksi socket TCP raw tanpa enkripsi"
    },
    "answer": "A",
    "explanation": {
      "correct": "OGC API - Features (ISO 19168-1) beralih dari RPC/XML WFS lama menuju arsitektur web modern yang ramah pengembang: RESTful endpoints (/collections/{collectionId}/items), JSON/GeoJSON, dan dokumentasi OpenAPI 3.0.",
      "A": "Opsi A benar sesuai standar OGC API - Features.",
      "B": "Opsi B salah karena SOAP XML adalah teknologi lama yang ditinggalkan pada generasi OGC API.",
      "C": "Opsi C salah karena OGC API Features sepenuhnya berbasis web HTTP/HTTPS.",
      "D": "Opsi D salah karena bukan protokol raw TCP."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-385",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Ketika membangun API pencarian spasial autocomplete (seperti pencarian nama tempat atau POI di peta) dengan toleransi salah ketik (fuzzy search), kombinasi teknologi PostgreSQL manakah yang paling ideal?",
    "options": {
      "A": "Ekstensi pg_trgm (Trigram Similarity) dipadukan dengan PostGIS dan indeks GIN pada kolom nama serta GiST pada geom",
      "B": "Operator '=' persis tanpa indeks",
      "C": "Memanggil API Google Maps berulang kali untuk setiap penekanan tombol tanpa caching",
      "D": "Menyimpan seluruh data nama dalam file teks lokal dan membacanya dengan readFileSync"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ekstensi pg_trgm menyediakan pencarian substring dan kesamaan trigram dengan indeks GIN (Generalized Inverted Index), memungkinkan fuzzy search instan (< 10 ms) yang dapat dibatasi oleh filter jarak spasial PostGIS.",
      "A": "Opsi A benar sesuai arsitektur geocoding/autocomplete performa tinggi di PostgreSQL.",
      "B": "Opsi B salah karena pencarian eksak tidak mentoleransi typo atau partial match.",
      "C": "Opsi C salah karena menimbulkan latensi tinggi dan biaya API eksternal yang mahal.",
      "D": "Opsi D salah karena pembacaan file sinkron memblokir event loop Node.js."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-386",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Dalam backend Node.js atau Python yang melayani data GeoJSON, mengapa penting untuk membatasi presisi desimal koordinat (misal menjadi 5 atau 6 angka di belakang koma) sebelum serialisasi JSON?",
    "options": {
      "A": "6 angka desimal pada derajat WGS84 sudah mewakili presisi ~0.1 meter (10 cm), sedangkan desimal 15 angka membuang bandwidth secara sia-sia hingga 40-50% ukuran file",
      "B": "JavaScript tidak dapat membaca angka yang memiliki lebih dari 2 desimal",
      "C": "Format GeoJSON menolak angka lebih dari 4 desimal",
      "D": "Desimal berlebih menyebabkan satelit GPS salah menghitung waktu"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada lintang khatulistiwa, 0.00001° ~ 1.1 meter dan 0.000001° ~ 0.11 meter. Nilai koordinat floating point default (15-17 digit) memperbesar ukuran teks JSON tanpa memberikan nilai akurasi fisik yang bermakna.",
      "A": "Opsi A benar sesuai kaidah optimasi payload geospasial web.",
      "B": "Opsi B salah karena JavaScript IEEE 754 float mendukung presisi ganda hingga 17 digit signifikan.",
      "C": "Opsi C salah karena spesifikasi RFC 7946 GeoJSON merekomendasikan pembatasan presisi namun tidak membatasi secara kaku.",
      "D": "Opsi D salah karena serialisasi JSON backend tidak mempengaruhi satelit GPS di orbit."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-387",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "question": "Bagaimana cara menangani load balancing koneksi database dari puluhan worker aplikasi GIS ke PostgreSQL/PostGIS untuk mencegah kehabisan connection pool (exhausted connections)?",
    "options": {
      "A": "Menggunakan connection pooler khusus seperti PgBouncer dengan mode transaction pooling",
      "B": "Menyetel max_connections di PostgreSQL menjadi 1.000.000",
      "C": "Membuka koneksi baru untuk setiap query dan tidak pernah menutupnya",
      "D": "Menghapus database PostgreSQL dan menggantinya dengan SQLite lokal di setiap container"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostgreSQL mengalokasikan proses terpisah per koneksi yang mengonsumsi RAM dan memicu context switching jika berlebihan (> ratusan). PgBouncer dengan transaction pooling mengizinkan ribuan klien berbagi sejumlah kecil koneksi aktif server secara efisien.",
      "A": "Opsi A benar sesuai best practice arsitektur produksi database PostgreSQL.",
      "B": "Opsi B salah karena menetapkan max_connections ekstrem akan memicu memory exhaustion dan crash OS.",
      "C": "Opsi C salah karena connection leak akan membuat server menolak koneksi baru dalam hitungan menit.",
      "D": "Opsi D salah karena SQLite tidak mendukung konkurensi write terdistribusi multi-worker."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-388",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Pada sensor satelit Landsat 8/9 TIRS (Thermal Infrared Sensor), apa prinsip utama algoritma 'Split-Window' untuk mengestimasi Land Surface Temperature (LST)?",
    "options": {
      "A": "Memanfaatkan perbedaan serapan uap air atmosfer antara dua band termal yang berdekatan (Band 10: 10.6-11.19 µm dan Band 11: 11.5-12.51 µm) untuk mengeliminasi efek atenuasi atmosfer",
      "B": "Membuka jendela fisik pada badan satelit saat melintas di atas ekuator",
      "C": "Membagi citra menjadi dua bagian kiri dan kanan",
      "D": "Mengukur suhu udara menggunakan termometer merkuri di orbit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Algoritma Split-Window memanfaatkan perbedaan karakteristik transmisi radiasi dan absorpsi uap air di atmosfer pada dua saluran termal bertetangga untuk memisahkan kontribusi radiasi permukaan bumi dari radiasi atmosfer.",
      "A": "Opsi A benar sesuai teori estimasi LST split-window (Sobrino et al., Rozenstein et al.).",
      "B": "Opsi B salah karena satelit tidak memiliki jendela fisik yang membuka di ruang hampa.",
      "C": "Opsi C salah karena split-window adalah teknik pemisahan spektral gelombang, bukan pemotongan geometrik citra.",
      "D": "Opsi D salah karena satelit mengukur radiansi inframerah termal dari jauh, bukan kontak fisik merkuri."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-389",
    "level": "advanced",
    "topic": "Geodesi & Proyeksi",
    "question": "Mengapa dalam pengukuran deformasi tektonik presisi tinggi menggunakan GNSS/GPS diwajibkan menggunakan orbit satelit tipe 'IGS Final Orbits' daripada 'Broadcast Orbits'?",
    "options": {
      "A": "Broadcast Orbits memiliki akurasi posisi orbit satelit sekitar ~100 cm dan diprediksi secara realtime, sedangkan IGS Final Orbits ditentukan secara post-processing dengan akurasi < 2.5 cm",
      "B": "Broadcast Orbits tidak memiliki informasi waktu GPS",
      "C": "IGS Final Orbits hanya dapat diakses melalui sinyal radio FM",
      "D": "Broadcast Orbits hanya berlaku untuk wilayah kutub utara"
    },
    "answer": "A",
    "explanation": {
      "correct": "International GNSS Service (IGS) merilis produk orbit final (~12-14 hari pasca-akuisisi) dengan akurasi posisi pusat massa satelit ~2 cm dan koreksi jam satelit ~0.1 ns, esensial untuk geodesi tektonik mm-level.",
      "A": "Opsi A benar sesuai standar perbandingan produk orbit GNSS ilmiah.",
      "B": "Opsi B salah karena navigasi satelit bergantung penuh pada sinkronisasi waktu.",
      "C": "Opsi C salah karena orbit IGS diunduh via server FTP/HTTP IGS.",
      "D": "Opsi D salah karena konstelasi GPS dan produk orbitnya bersifat global."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-390",
    "level": "advanced",
    "topic": "Koreksi Citra",
    "question": "Dalam koreksi geometrik citra satelit beresolusi sangat tinggi (VHR), apa fungsi dari Rational Polynomial Coefficients (RPC)?",
    "options": {
      "A": "Memodelkan hubungan matematis antara koordinat geodetik permukaan bumi (latitude, longitude, height) dan koordinat piksel citra (row, column) sebagai rasio dua polinomial orde tiga tanpa membocorkan parameter fisik sensor satelit yang dirahasiakan",
      "B": "Mengatur kontras kecerahan warna citra",
      "C": "Menghapus bayangan awan dengan algoritma machine learning",
      "D": "Mengurangi ukuran file TIFF menjadi MP4"
    },
    "answer": "A",
    "explanation": {
      "correct": "Vendor satelit komersial (WorldView, Pleiades) menyediakan file RPC sebagai model pengganti kamera fisik (rigorous physical sensor model) yang menyederhanakan orthorektifikasi fotogrametris dengan tetap merahasiakan desain optik optomekanik satelit.",
      "A": "Opsi A benar sesuai prinsip pemodelan sensor RPC pada fotogrametri satelit.",
      "B": "Opsi B salah karena RPC adalah model koreksi geometrik, bukan radiometrik.",
      "C": "Opsi C salah karena RPC tidak berkaitan dengan masking awan.",
      "D": "Opsi D salah karena RPC bukan kompresi video."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-391",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk membagi tabel poligon besar ke dalam sel grid heksagonal seragam untuk visualisasi analisis kerapatan spasial?",
    "options": {
      "A": "ST_HexagonGrid(cell_size, geom)",
      "B": "ST_SquareGrid()",
      "C": "ST_MakeHex()",
      "D": "ST_PolygonGrid()"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostGIS 3.1+ memperkenalkan ST_HexagonGrid yang menghasilkan kisi heksagonal reguler yang menutupi batas geometri input. Heksagon ideal untuk agregasi spasial karena meminimalkan distorsi jarak ke tetangga.",
      "A": "Opsi A benar sesuai fitur tessellation grid modern PostGIS.",
      "B": "Opsi B salah karena ST_SquareGrid menghasilkan grid kotak, bukan heksagonal.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-392",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam standar arsitektur OGC API - Tiles, bagaimana mekanisme URL templating untuk meminta tile vektor atau raster?",
    "options": {
      "A": "/collections/{collectionId}/tiles/{tileMatrixSetId}/{tileMatrix}/{tileRow}/{tileCol}",
      "B": "/get_tile.php?id=123",
      "C": "/tiles/download/all.zip",
      "D": "/wms?request=GetMap&format=tiles"
    },
    "answer": "A",
    "explanation": {
      "correct": "OGC API - Tiles mendefinisikan URI template standar RESTful: /collections/{collectionId}/tiles/{tileMatrixSetId}/{tileMatrix}/{tileRow}/{tileCol} yang memetakan matriks tingkat zoom, baris, dan kolom secara eksplisit.",
      "A": "Opsi A benar sesuai spesifikasi OGC API - Tiles Standard.",
      "B": "Opsi B salah karena query string PHP lama bukan standar OGC API.",
      "C": "Opsi C salah karena bukan mekanisme tile matrix streaming.",
      "D": "Opsi D salah karena sintaks WMS 1.3.0 lama."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-393",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Ketika membuat aplikasi Web GIS real-time tracking armada dengan puluhan ribu pembaruan koordinat per detik, arsitektur data stream manakah yang paling tangguh?",
    "options": {
      "A": "GPS Tracker -> MQTT/Kafka Broker -> Node.js/Go Consumer -> Redis (In-Memory Geo Spatial GEOADD) / PostGIS -> WebSocket -> WebGL Client",
      "B": "GPS Tracker -> HTTP POST -> PHP -> Tulis file TXT -> Polling Ajax setiap detik",
      "C": "GPS Tracker -> Kirim SMS ke admin -> Admin ketik manual ke database",
      "D": "GPS Tracker langsung terhubung langsung ke database PostgreSQL tanpa firewall"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kafka/MQTT menangani throughput penulisan masif tanpa blocking. Redis GEOADD menyimpan posisi terbaru secara in-memory untuk query geofencing latensi mikrodetik, dan WebSocket mendorong pembaruan secara real-time ke GPU WebGL tanpa overhead polling HTTP.",
      "A": "Opsi A benar sesuai arsitektur modern enterprise real-time tracking.",
      "B": "Opsi B salah karena file IO dan HTTP polling berulang akan mengalami bottleneck berat.",
      "C": "Opsi C salah karena proses manual tidak mungkin menangani puluhan ribu koordinat per detik.",
      "D": "Opsi D salah karena koneksi langsung tanpa proteksi memicu connection storm dan celah keamanan kritis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-394",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Format file tabular geospasial berbasis Apache Arrow / Parquet apakah yang dirancang untuk kueri analitik big data kolom masif dengan dukungan kompresi tinggi dan bounding box indexing?",
    "options": {
      "A": "GeoParquet",
      "B": "GeoTIFF",
      "C": "Shapefile",
      "D": "KML"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoParquet menambahkan metadata geospasial standar ke format Parquet Apache Arrow, memungkinkan penyimpanan columnar yang sangat terkompresi, pembacaan partisi kolom parsial, dan kueri analitik spasial skala awan berkecepatan tinggi.",
      "A": "Opsi A benar sesuai spesifikasi modern GeoParquet (geoparquet.org).",
      "B": "Opsi B salah karena GeoTIFF adalah format raster.",
      "C": "Opsi C salah karena Shapefile memiliki batasan file 2 GB dan berbasis format dBase lama.",
      "D": "Opsi D salah karena KML adalah teks XML untuk visualisasi sederhana."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-395",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "question": "Apa fungsi dari utilitas 'mbtiles-extract' atau 'tilelive' dalam arsitektur deployment peta offline (offline Web GIS / PWA)?",
    "options": {
      "A": "Mengekstrak dan mengemas ribuan vector tile ke dalam single-file SQLite container (.mbtiles) untuk disimpan secara lokal di browser via IndexedDB atau perangkat mobile",
      "B": "Mengganti koordinat peta dengan nomor acak",
      "C": "Menghapus seluruh fitur vektor dari database",
      "D": "Menghubungkan komputer ke jaringan satelit mata-mata"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi MBTiles menyimpan ribuan tile peta dalam basis data SQLite tunggal. Ini mempermudah transfer dan penyimpanan tile offline pada aplikasi Progressive Web Apps (PWA) atau mobile field survey.",
      "A": "Opsi A benar sesuai penggunaan spesifikasi MBTiles untuk offline caching.",
      "B": "Opsi B salah karena tidak merusak koordinat.",
      "C": "Opsi C salah karena MBTiles mengemas data, bukan menghapusnya.",
      "D": "Opsi D salah karena tidak berhubungan dengan satelit mata-mata."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-396",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menghitung jarak terpendek dan mengembalikan segmen garis penghubung 3D antara dua geometri 3D (Z)?",
    "options": {
      "A": "ST_3DShortestLine(geomA, geomB)",
      "B": "ST_ShortestLine(geomA, geomB)",
      "C": "ST_Distance3D(geomA, geomB)",
      "D": "ST_3DClosestPoint(geomA, geomB)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_3DShortestLine mengembalikan geometri LineString 2-titik 3D yang menghubungkan lokasi terdekat antara dua geometri 3D dengan memperhitungkan elevasi sumbu Z.",
      "A": "Opsi A benar sesuai dokumentasi PostGIS 3D.",
      "B": "Opsi B salah karena ST_ShortestLine hanya mengevaluasi bidang datar 2D.",
      "C": "Opsi C salah karena ST_Distance3D mengembalikan angka floating point jarak, bukan geometri garis.",
      "D": "Opsi D salah karena ST_3DClosestPoint hanya mengembalikan satu titik pada geomA."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-397",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "question": "Dalam citra hiperspektral (hyperspectral imaging) yang memiliki ratusan band spektral sempit dan berurutan, tantangan komputasi dan statistik yang dikenal sebagai 'Hughes Phenomenon' (Curse of Dimensionality) terjadi ketika:",
    "options": {
      "A": "Akurasi klasifikasi justru menurun seiring penambahan jumlah band spektral jika jumlah sampel data latih (training samples) tidak ditambah secara proporsional",
      "B": "Citra satelit terbakar di atmosfer",
      "C": "Kecepatan transfer data internet menjadi tak terhingga",
      "D": "Kamera kehilangan daya baterai di orbit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fenomena Hughes menyatakan bahwa pada ukuran sampel latih yang tetap terbatas, penambahan dimensi band spektral awalnya meningkatkan akurasi, namun melebihi titik optimal akurasi akan menurun drastis akibat ruang fitur menjadi terlalu jarang (sparse feature space).",
      "A": "Opsi A benar sesuai prinsip pengolahan citra hiperspektral dan reduksi dimensi (PCA/MNF).",
      "B": "Opsi B salah karena bukan fenomena fisik orbit satelit.",
      "C": "Opsi C salah karena tidak berhubungan dengan bandwidth internet.",
      "D": "Opsi D salah karena bukan kegagalan hardware daya."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-398",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "question": "Transformasi Minimum Noise Fraction (MNF) sering digunakan pada data hiperspektral sebelum klasifikasi untuk:",
    "options": {
      "A": "Melakukan dua putaran reduksi dimensi PCA secara berurutan: pertama untuk memutihkan noise (noise whitening) dan kedua untuk mengurutkan komponen berdasarkan signal-to-noise ratio (SNR)",
      "B": "Mengubah citra menjadi video 4K",
      "C": "Menghapus informasi koordinat spasial",
      "D": "Mengukur kelembaban tanah menggunakan sensor suara"
    },
    "answer": "A",
    "explanation": {
      "correct": "Transformasi MNF (Green et al.) adalah teknik segregasi noise yang memisahkan noise acak dari sinyal informasi terpadu melalui de-korelasi noise kovarians diikuti transformasi PCA konvensional.",
      "A": "Opsi A benar sesuai metodologi analisis citra hiperspektral MNF.",
      "B": "Opsi B salah karena bukan konversi video.",
      "C": "Opsi C salah karena MNF mempertahankan geometri raster.",
      "D": "Opsi D salah karena bukan sensor akustik."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-399",
    "level": "advanced",
    "topic": "Indeks Spektral",
    "question": "Indeks NDRE (Normalized Difference Red Edge Index) sering dipilih dibanding NDVI konvensional untuk monitoring kesehatan tanaman pada fase kanopi lebat karena:",
    "options": {
      "A": "NDVI mengalami fenomena 'saturasi spektral' (saturation effect) pada indeks biomassa kanopi tinggi, sedangkan gelombang Red Edge mampu menembus lapisan kanopi lebih dalam tanpa cepat jenuh",
      "B": "NDRE dapat dihitung tanpa menggunakan sensor kamera",
      "C": "NDRE hanya bekerja pada waktu malam hari",
      "D": "NDRE secara eksklusif menggunakan band thermal"
    },
    "answer": "A",
    "explanation": {
      "correct": "NDVI saturasi pada nilai ~0.8-0.9 saat tutupan vegetasi sangat lebat karena band Red diserap hampir 100% oleh lapisan atas klorofil. Band Red Edge pada NDRE (NIR - RedEdge)/(NIR + RedEdge) memiliki serapan sedang sehingga tidak cepat jenuh pada kanopi bertingkat.",
      "A": "Opsi A benar sesuai biologi spektral agronomi presisi.",
      "B": "Opsi B salah karena memerlukan data reflektansi optik multispektral.",
      "C": "Opsi C salah karena sensor optik membutuhkan pantulan cahaya matahari.",
      "D": "Opsi D salah karena NDRE menggunakan band Red Edge (~705-740 nm) dan NIR."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-400",
    "level": "advanced",
    "topic": "Fotogrametri & UAV",
    "question": "Dalam kalibrasi kamera fotogrametri (Camera Self-Calibration / Interior Orientation), parameter apa sajakah yang diestimasi secara simultan dalam bundle adjustment?",
    "options": {
      "A": "Principal point offset (cx, cy), focal length terkalibrasi (fx, fy), koefisien distorsi radial (k1, k2, k3), dan koefisien distorsi tangensial (p1, p2)",
      "B": "Harga kamera dan tanggal kadaluarsa garansi",
      "C": "Berat baterai dan kapasitas memori SD card",
      "D": "Warna cat bodi pesawat dan nama pilot"
    },
    "answer": "A",
    "explanation": {
      "correct": "Interior Orientation (IO) memodelkan geometri internal sensor optik kamera: focal length, titik utama (principal point), serta distorsi lensa radial (Brown-Conrady model k1-k3) dan tangensial (p1-p2) untuk merekonstruksi sinar berkas perspektif sejati.",
      "A": "Opsi A benar sesuai model parameter fisik fotogrametri udara.",
      "B": "Opsi B salah karena parameter komersial tidak mempengaruhi geometri optik.",
      "C": "Opsi C salah karena spesifikasi hardware fisik bukan parameter bundle adjustment.",
      "D": "Opsi D salah karena identitas pilot tidak relevan dengan kalibrasi lensa."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-401",
    "level": "advanced",
    "topic": "Geodesi & Proyeksi",
    "question": "Dalam geodesi satelit modern, peran teknik Space Geodesy VLBI (Very Long Baseline Interferometry) sangat krusial bagi Realisasi ITRF karena:",
    "options": {
      "A": "VLBI mengamati sinyal radio dari quasar ekstragalaksi yang sangat jauh, menyediakan satu-satunya teknik yang mampu menentukan parameter orientasi bumi (Earth Orientation Parameters / EOP) dan International Celestial Reference Frame (ICRF) tanpa drift",
      "B": "VLBI mengukur kedalaman palung laut menggunakan sonar kapal",
      "C": "VLBI mengukur kecepatan angin di troposfer",
      "D": "VLBI hanya mengukur koordinat di satu stasiun di Jerman"
    },
    "answer": "A",
    "explanation": {
      "correct": "VLBI adalah satu-satunya teknik geodesi antariksa yang terikat pada kerangka acuan inersial langit (ICRF) melalui observasi sinyal quasar miliaran tahun cahaya, menjadikannya penentu presisi gerak presesi, nutasi, dan UT1-UTC.",
      "A": "Opsi A benar sesuai peran fundamental VLBI dalam penetapan IERS dan ITRF.",
      "B": "Opsi B salah karena sonar kapal adalah batimetri akustik laut.",
      "C": "Opsi C salah karena VLBI bukan instrumen anemometri meteorologi.",
      "D": "Opsi D salah karena jaringan VLBI terdistribusi di seluruh benua di dunia."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-402",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Dalam modul PostGIS Topology, apa keuntungan fundamental menggunakan struktur data TopoGeometry (Node, Edge, Face) dibandingkan geometri Simple Features standar?",
    "options": {
      "A": "Menjamin batas batas wilayah bersebelahan terhubung secara topologis tanpa celah (slivers) atau tumpang tindih (overlaps), dan pengeditan satu batas garis (edge) otomatis memperbarui kedua bidang (faces) yang berbagi batas tersebut",
      "B": "Mengurangi resolusi koordinat menjadi bilangan bulat 8-bit",
      "C": "Membuat peta otomatis berwarna hijau",
      "D": "Menghapus kebutuhan akan primary key pada tabel SQL"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostGIS Topology memodelkan data sebagai jaringan node, edge, dan face terintegrasi. Menggeser satu edge secara otomatis memodifikasi poligon di kedua sisinya secara konsisten, mencegah anomali topologi batas administrasi kadastral.",
      "A": "Opsi A benar sesuai spesifikasi ISO 13249-3 / PostGIS Topology.",
      "B": "Opsi B salah karena PostGIS Topology mempertahankan koordinat float presisi ganda.",
      "C": "Opsi C salah karena warna adalah urusan visualisasi kartografi, bukan model topologi.",
      "D": "Opsi D salah karena tabel topologi tetap memerlukan relasi relational primary key."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-403",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Ekstensi pgRouting menyediakan fungsi pgr_dijkstra() untuk mencari rute terpendek dalam graf jaringan jalan. Parameter input apa yang wajib disiapkan pada tabel edge jaringan jalan?",
    "options": {
      "A": "source (integer ID node awal), target (integer ID node tujuan), dan cost (bobot jarak atau waktu tempuh)",
      "B": "Hanya nama jalan tanpa kolom angka",
      "C": "Warna aspal dan jenis kendaraan",
      "D": "Nomor telepon dinas perhubungan kota"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi algoritma routing graf di pgRouting memerlukan topologi jaringan yang terdiri dari ID simpul awal (source), simpul akhir (target), dan bobot impedansi (cost/reverse_cost).",
      "A": "Opsi A benar sesuai dokumentasi inti pgRouting graph topology.",
      "B": "Opsi B salah karena graf memerlukan topologi keterhubungan diskrit numerik.",
      "C": "Opsi C salah karena bukan parameter wajib fungsi pgr_dijkstra.",
      "D": "Opsi D salah karena atribut kontak tidak relevan untuk algoritma graf."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-404",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menghasilkan diagram poligon Voronoi / Thiessen dari kumpulan titik lokasi fasilitas?",
    "options": {
      "A": "ST_VoronoiPolygons(ST_Collect(geom))",
      "B": "ST_MakeThiessen()",
      "C": "ST_DelaunayCircles()",
      "D": "ST_PointToPolygonMesh()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_VoronoiPolygons mengembalikan GeometryCollection berupa poligon-poligon Voronoi yang mempartisi ruang di mana setiap titik di dalam poligon lebih dekat ke generator titik tersebut daripada ke titik lainnya.",
      "A": "Opsi A benar sesuai dokumentasi PostGIS ST_VoronoiPolygons.",
      "B": "Opsi B salah karena bukan nama fungsi resmi PostGIS.",
      "C": "Opsi C salah karena bukan nama fungsi resmi PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi resmi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-405",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Untuk membuat spatial index GiST pada kolom geometri yang memiliki dimensi 3D (X, Y, Z) agar query pencarian bounding box volume 3D (&&&) berjalan optimal, operator class apa yang harus ditentukan?",
    "options": {
      "A": "gist_geometry_ops_nd",
      "B": "gist_geometry_ops_2d",
      "C": "btree_3d_ops",
      "D": "gin_spatial_ops"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, indeks GiST pada PostGIS menggunakan operator class 2D. Untuk mengindeks dimensi N (3D/4D bounding box), wajib menambahkan operator class 'gist_geometry_ops_nd' pada pernyataan CREATE INDEX.",
      "A": "Opsi A benar sesuai dokumentasi resmi PostGIS N-D Spatial Indexing.",
      "B": "Opsi B salah karena default 2D hanya memperhitungkan sumbu X dan Y.",
      "C": "Opsi C salah karena B-tree tidak mendukung bounding box multidimensi.",
      "D": "Opsi D salah karena GIN bukan indeks R-tree geometri PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-406",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Format data spasial biner modern 'FlatGeobuf' (.fgb) semakin populer untuk aplikasi web karena:",
    "options": {
      "A": "Mendukung pembacaan streaming biner (zero-copy parsing) dan spatial filtering client-side via packed Hilbert R-tree index melalui HTTP Range Requests tanpa perlu mengunduh seluruh file",
      "B": "Dapat dicetak langsung ke kertas tanpa monitor",
      "C": "Menghapus seluruh fitur atribut dan hanya menyisakan titik nol",
      "D": "Hanya dapat dibuka pada sistem operasi Windows 95"
    },
    "answer": "A",
    "explanation": {
      "correct": "FlatGeobuf berbasis FlatBuffers biner dengan indeks spasial terintegrasi. Browser dapat meminta hanya bounding box viewport via HTTP range request dan membaca struct memory secara instan tanpa parsing overhead seperti GeoJSON.",
      "A": "Opsi A benar sesuai spesifikasi FlatGeobuf (flatgeobuf.org).",
      "B": "Opsi B salah karena format digital biner web.",
      "C": "Opsi C salah karena FlatGeobuf menyimpan atribut skema penuh.",
      "D": "Opsi D salah karena FlatGeobuf kompatibel dengan seluruh web browser modern dan GDAL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-407",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Ketika aplikasi Web GIS frontend perlu melakukan komputasi spasial berat (seperti buffering 10.000 poligon atau perpotongan geometri Turf.js), bagaimana cara terbaik mencegah antarmuka UI freeze?",
    "options": {
      "A": "Menjalankan komputasi Turf.js di dalam Web Worker terpisah di background thread browser",
      "B": "Memanggil alert() setiap kali iterasi loop",
      "C": "Menyisipkan tag <marquee> di HTML",
      "D": "Memaksa refresh halaman web setiap 100 milidetik"
    },
    "answer": "A",
    "explanation": {
      "correct": "JavaScript di browser berjalan single-threaded pada main thread yang menangani interaksi pengguna dan rendering 60 FPS. Menjalankan komputasi CPU berat di Web Worker memindahkan beban kerja ke thread terpisah tanpa memblokir UI.",
      "A": "Opsi A benar sesuai pola performa komputasi Web frontend modern.",
      "B": "Opsi B salah karena alert() adalah operasi blocking sinkron yang membekukan thread.",
      "C": "Opsi C salah karena tag HTML usang tidak berdampak pada eksekusi komputasi.",
      "D": "Opsi D salah karena refresh halaman membatalkan komputasi dan merusak pengalaman pengguna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-408",
    "level": "advanced",
    "topic": "GIS Software & GDAL/OGR",
    "question": "File VRT (GDAL Virtual Format) berbasis XML sangat berharga dalam pipeline pemrosesan citra satelit skala besar karena:",
    "options": {
      "A": "Memungkinkan mosaik, stacking band, reproyeksi, dan filtering dari ratusan file raster raksasa tanpa menduplikasi data fisik piksel di disk (zero disk space overhead)",
      "B": "Mengubah file teks menjadi video animasi satelit",
      "C": "Menghapus seluruh lisensi citra secara permanen",
      "D": "Hanya dapat digunakan untuk mencetak stempel peta"
    },
    "answer": "A",
    "explanation": {
      "correct": "GDAL VRT mendeskripsikan koleksi file raster, transformasi koordinat, dan komposisi band dalam file XML teks ringan. GDAL memperlakukan file VRT persis seperti satu file GeoTIFF utuh tanpa memakan kapasitas disk.",
      "A": "Opsi A benar sesuai arsitektur Virtual Raster Dataset (VRT) GDAL.",
      "B": "Opsi B salah karena VRT bukan format video generator.",
      "C": "Opsi C salah karena VRT tidak memodifikasi lisensi data sumber.",
      "D": "Opsi D salah karena VRT adalah abstraksi software driver GDAL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-409",
    "level": "advanced",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Dalam script Python pengolahan citra satelit, driver GDAL manakah yang digunakan untuk membuat dataset raster sementara di dalam memori RAM tanpa menulis ke disk fisik?",
    "options": {
      "A": "gdal.GetDriverByName('MEM')",
      "B": "gdal.GetDriverByName('RAMDISK')",
      "C": "gdal.GetDriverByName('VIRTUAL')",
      "D": "gdal.GetDriverByName('FAST')"
    },
    "answer": "A",
    "explanation": {
      "correct": "Driver 'MEM' pada library GDAL membuat dataset in-memory yang hidup di RAM, sangat ideal untuk kalkulasi antara (intermediate steps) cepat yang tidak memerlukan I/O disk.",
      "A": "Opsi A benar sesuai dokumentasi GDAL In-Memory Raster driver.",
      "B": "Opsi B salah karena bukan nama driver GDAL resmi.",
      "C": "Opsi C salah karena bukan nama driver GDAL.",
      "D": "Opsi D salah karena bukan nama driver GDAL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-410",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Dalam klasifikasi tanaman pangan (misal padi sawah), mengapa fusi temporal citra SAR Sentinel-1 dan optik Sentinel-2 menghasilkan akurasi yang lebih tinggi dibanding hanya menggunakan citra optik saja?",
    "options": {
      "A": "Citra optik sering terkendala tutupan awan tinggi di wilayah tropis selama fase tanam/vegetatif, sementara sinyal SAR mampu menembus awan dan mendeteksi fase penggenangan air (fase sawah) secara akurat melalui hamburan balik yang sangat rendah",
      "B": "Radar dapat melihat warna daun hijau lebih jelas daripada mata manusia",
      "C": "Citra optik hanya dapat diakses pada hari libur",
      "D": "Satelit radar berjarak 10 kali lebih dekat ke permukaan bumi daripada satelit optik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Wilayah tropis sering tertutup awan saat musim tanam padi. Hamburan balik SAR (backscatter) sangat sensitif terhadap permukaan air tenang (specular reflection / nilai dB sangat rendah saat penanaman) dan peningkatan biomasa kanopi, melengkapi data indeks optik.",
      "A": "Opsi A benar sesuai keunggulan fusi data SAR-optik untuk monitoring pertanian tropis.",
      "B": "Opsi B salah karena radar merekam gelombang mikro, bukan spektrum warna kasat mata.",
      "C": "Opsi C salah karena kedua satelit mengorbit dan merekam secara reguler setiap hari.",
      "D": "Opsi D salah karena orbit Sentinel-1 dan Sentinel-2 berada pada ketinggian serupa (~700-800 km)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-411",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "question": "Dalam konteks deep learning untuk segmentasi citra satelit resolusi tinggi, apa fungsi dari 'Focal Loss' dalam mengatasi ketidakseimbangan kelas (class imbalance) yang ekstrem (misal deteksi kapal laut kecil di tengah samudra luas)?",
    "options": {
      "A": "Menurunkan bobot gradien dari contoh yang mudah diklasifikasikan (background luas) dan memfokuskan pelatihan model pada contoh yang langka dan sulit (foreground target)",
      "B": "Menaikkan kontras lensa teleskop satelit di orbit",
      "C": "Menghapus semua piksel air samudra dari dataset latih",
      "D": "Mengonversi gambar menjadi citra grayscale"
    },
    "answer": "A",
    "explanation": {
      "correct": "Focal Loss (Lin et al.) menambahkan faktor modulasi (1 - p_t)^gamma pada fungsi Cross Entropy loss standar untuk mencegah lautan contoh mudah (majority class) mendominasi gradien bobot jaringan saraf tiruan.",
      "A": "Opsi A benar sesuai formulasi loss function dalam semantic segmentation / object detection.",
      "B": "Opsi B salah karena loss function dieksekusi pada software machine learning, bukan optik kamera satelit.",
      "C": "Opsi C salah karena context lingkungan air laut tetap diperlukan dalam pelatihan.",
      "D": "Opsi D salah karena bukan teknik augmentasi warna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-412",
    "level": "advanced",
    "topic": "Geodesi & Proyeksi",
    "question": "Mengapa permukaan elipsoid referensi GRS80 dan WGS84 sedikit berbeda pada parameter sumbu semi-minor (b) meskipun memiliki nilai semi-major axis (a = 6.378.137,0 m) yang identik?",
    "options": {
      "A": "Keduanya menggunakan konstanta bentuk dinamis bumi (J2) dari model geodesi gravitasi yang sedikit berbeda saat penetapan awal konvensi IERS",
      "B": "WGS84 dirancang khusus hanya untuk benua Amerika",
      "C": "GRS80 mengasumsikan bumi berbentuk silinder sempurna",
      "D": "WGS84 tidak memperhitungkan rotasi bumi sama sekali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kedua elipsoid mendefinisikan a sama persis, namun GRS80 menetapkan konstanta gravitasi geodetik J2 dari IUGG 1979, sedangkan WGS84 menetapkan flattening f secara langsung (1/298.257223563 vs 1/298.257222101), menghasilkan perbedaan sumbu semi-minor sekitar 0.1 milimeter.",
      "A": "Opsi A benar sesuai sejarah penentuan parameter geodesi teoritis GRS80 dan WGS84.",
      "B": "Opsi B salah karena keduanya adalah model elipsoid geosentris global.",
      "C": "Opsi C salah karena GRS80 adalah oblate ellipsoid of revolution.",
      "D": "Opsi D salah karena kecepatan sudut rotasi bumi omega adalah parameter fundamental."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-413",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Inisiatif openEO bertujuan untuk menyelesaikan fragmentasi platform pengolahan data geospasial cloud dengan cara:",
    "options": {
      "A": "Menyediakan API standar terbuka (OpenAPI) yang memungkinkan pengguna menulis kode analisis geospasial sekali dan mengeksekusinya di backend cloud mana pun (GEE, Sentinel Hub, Open Data Cube, WCPS)",
      "B": "Membeli seluruh satelit swasta untuk dibagikan gratis",
      "C": "Mengganti format data biner menjadi dokumen Word",
      "D": "Menonaktifkan enkripsi HTTPS pada servis cloud"
    },
    "answer": "A",
    "explanation": {
      "correct": "openEO mengembangkan API berbasis REST dan pustaka client (Python, R, JavaScript) dengan grafik proses seragam (process graphs) agar pengguna terhindar dari vendor lock-in ke salah satu cloud service provider.",
      "A": "Opsi A benar sesuai visi arsitektural konsorsium openEO.",
      "B": "Opsi B salah karena bukan perusahaan pemilik wahana satelit.",
      "C": "Opsi C salah karena pemrosesan geospasial menggunakan multidimensional array / COG.",
      "D": "Opsi D salah karena standar web modern mewajibkan enkripsi TLS/HTTPS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-414",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Apa fungsi dari protokol Web Map Context (WMC) atau format QGIS Web Map Client (QWC) dalam interoperabilitas aplikasi GIS perusahaan?",
    "options": {
      "A": "Menyimpan dan membagikan status sesi peta (daftar layer, bounding box, urutan layer, transparansi, dan styling SLD) sehingga dapat dimuat identik pada aplikasi GIS web maupun desktop yang berbeda",
      "B": "Mengatur pencahayaan monitor komputer",
      "C": "Menghapus cache browser secara paksa setiap jam",
      "D": "Menghitung gaji tim surveyor lapangan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar OGC Web Map Context (WMC) mengemas status peta (map state) ke dalam dokumen XML portabel, memungkinkan pertukaran sesi kerja visualisasi antar perangkat lunak yang berbeda.",
      "A": "Opsi A benar sesuai spesifikasi OGC Web Map Context.",
      "B": "Opsi B salah karena pengaturan hardware monitor adalah fungsi OS/perangkat keras.",
      "C": "Opsi C salah karena bukan mekanisme pembersihan cache browser.",
      "D": "Opsi D salah karena bukan software manajemen SDM."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-415",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengelompokkan geometri titik atau poligon yang berjarak kurang dari d meter satu sama lain ke dalam satu GeometryCollection atau Multi-Geometry tanpa komputasi k-means?",
    "options": {
      "A": "ST_ClusterWithin(geom, distance)",
      "B": "ST_GroupNear()",
      "C": "ST_MergePoints()",
      "D": "ST_ProximityCluster()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_ClusterWithin adalah fungsi agregat PostGIS yang mengembalikan array GeometryCollection untuk setiap klaster geometri yang berada dalam batas jarak toleransi yang ditentukan.",
      "A": "Opsi A benar sesuai dokumentasi PostGIS Clustering Functions.",
      "B": "Opsi B salah karena bukan nama fungsi PostGIS.",
      "C": "Opsi C salah karena bukan nama fungsi PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-416",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "question": "Dalam Dockerfile untuk aplikasi web geospasial berbasis Python GDAL / Rasterio, teknik 'multi-stage build' diterapkan terutama untuk:",
    "options": {
      "A": "Mengkompilasi dependensi C/C++ GDAL, GEOS, dan PROJ pada stage builder lalu hanya menyalin binary hasil kompilasi ke stage runtime minimal, memangkas ukuran image container dari 2 GB menjadi ~200 MB",
      "B": "Menjalankan aplikasi di dua komputer fisik berbeda secara bersamaan",
      "C": "Menggandakan jumlah memori RAM server secara virtual",
      "D": "Menonaktifkan compiler GCC agar tidak ada peringatan warning"
    },
    "answer": "A",
    "explanation": {
      "correct": "Library geospasial C/C++ (GDAL/PROJ) memerlukan build toolchain lengkap (gcc, cmake, libtool) yang sangat besar. Multi-stage build memastikan compiler dan header development dibuang dari container produksi akhir demi efisiensi ukuran dan keamanan.",
      "A": "Opsi A benar sesuai praktik terbaik Docker containerization aplikasi geospasial.",
      "B": "Opsi B salah karena multi-stage build adalah proses perakitan image container, bukan orkestrasi runtime klaster.",
      "C": "Opsi C salah karena build stage tidak menambah hardware RAM fisik.",
      "D": "Opsi D salah karena compiler mutlak dibutuhkan pada build stage."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-417",
    "level": "advanced",
    "topic": "Indeks Spektral",
    "question": "Indeks NBR2 (Normalized Burn Ratio 2) menggunakan kombinasi band SWIR1 dan SWIR2 untuk membedakan material pasca-kebakaran hutan karena:",
    "options": {
      "A": "Mendeteksi kadar kelembaban air tanah dan abu/arang tanpa terdistorsi oleh sisa kandungan klorofil vegetasi hidup yang sensitif pada band NIR",
      "B": "Mengukur radiasi sinar gamma matahari",
      "C": "Menghitung jumlah bibit pohon yang ditanam",
      "D": "Mengukur arah hembusan angin permukaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "NBR2 dihitung sebagai (SWIR1 - SWIR2) / (SWIR1 + SWIR2). Karena tidak melibatkan band NIR, NBR2 sangat berguna untuk menganalisis pemulihan struktural kanopi dan kadar air serasah tanpa pengaruh klorofil daun muda.",
      "A": "Opsi A benar sesuai metodologi analisis pemulihan ekosistem pasca-kebakaran.",
      "B": "Opsi B salah karena satelit EO optik tidak mengukur sinar gamma.",
      "C": "Opsi C salah karena indeks spektral mengukur respon radiansi fisik per-piksel, bukan inventarisasi manual pohon.",
      "D": "Opsi D salah karena bukan pengukuran anemometer."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-418",
    "level": "advanced",
    "topic": "Fotogrametri & UAV",
    "question": "Mengapa Ground Control Points (GCP) dan Check Points (CP) harus dipisahkan secara independen dalam proyek fotogrametri drone?",
    "options": {
      "A": "GCP digunakan untuk mengikat dan mengalibrasi model bundle block adjustment, sedangkan CP sengaja tidak diikutkan dalam perhitungan model agar menjadi tolok ukur pengujian akurasi absolut (RMSE) yang objektif",
      "B": "GCP berwarna merah dan CP harus berwarna kuning",
      "C": "CP hanya digunakan untuk mengukur arah angin",
      "D": "GCP harus dipasang di atas air dan CP di atas tanah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Check Points (CP) adalah kontrol kualitas independen (blind control). Jika titik verifikasi dimasukkan ke dalam adjustment model, nilai residual akan selalu tampak bagus padahal model bisa mengalami distorsi sistematis internal (overfitting).",
      "A": "Opsi A benar sesuai standar kualitas pemetaan fotogrametri ASPRS/FGDC.",
      "B": "Opsi B salah karena warna fisik target survei dapat bervariasi sesuai visibilitas kontras di lapangan.",
      "C": "Opsi C salah karena CP mengukur koordinat terestrial presisi 3D.",
      "D": "Opsi D salah karena target fotogrametri harus berada pada objek tanah yang diam/stabil."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-419",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Apa fenomena distorsi geometrik 'Layover' pada citra SAR radar di daerah perbukitan terjal?",
    "options": {
      "A": "Puncak gunung berada lebih dekat ke sensor radar dibanding bagian kakinya dalam arah miring (slant range), sehingga puncak gunung terekam dan direkonstruksi seolah-olah rebah menimpa area di depannya",
      "B": "Satelit radar berputar terbalik di orbit",
      "C": "Bayangan gelap akibat ketiadaan sinyal radar di lereng belakang",
      "D": "Piksel gambar menjadi kabur akibat pantulan air danau"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena SAR mengukur jarak tempuh waktu gelombang mikro (slant range), objek yang lebih tinggi (puncak tebing) memantulkan gelombang lebih cepat ke sensor daripada dasar lereng yang menghadap sensor, membalikkan urutan spasial rekaman.",
      "A": "Opsi A benar sesuai karakteristik distorsi geometrik radar layover.",
      "B": "Opsi B salah karena orientasi wahana satelit dikontrol stabil oleh sistem attitude control.",
      "C": "Opsi C salah karena itu adalah definisi Radar Shadow.",
      "D": "Opsi D salah karena pantulan air adalah specular reflection."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-420",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Apa perbedaan antara fenomena 'Foreshortening' dan 'Radar Shadow' pada perekaman citra SAR?",
    "options": {
      "A": "Foreshortening adalah pemendekan skala lereng yang menghadap sensor, sedangkan Radar Shadow adalah area tanpa pantulan sinyal (hitam pekat) di belakang lereng curam yang terhalang dari pulsa radar",
      "B": "Keduanya adalah istilah yang sama persis untuk kabut asap",
      "C": "Foreshortening terjadi pada malam hari, Shadow pada siang hari",
      "D": "Foreshortening hanya terjadi pada laut lepas"
    },
    "answer": "A",
    "explanation": {
      "correct": "Foreshortening mengkompresi lereng hadap (foreshortened slope). Radar shadow terjadi saat kemiringan lereng belakang melebihi sudut depresi pandang sensor radar sehingga gelombang microwave terhalang total.",
      "A": "Opsi A benar sesuai geomorfologi penginderaan jauh radar.",
      "B": "Opsi B salah karena radar menembus kabut asap tanpa distorsi visual optik.",
      "C": "Opsi C salah karena radar adalah sensor aktif siang dan malam.",
      "D": "Opsi D salah karena distorsi topografi terjadi pada daratan berbukit."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-421",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menghitung matriks kedekatan jaringan (Distance Matrix / OD Cost Matrix) antara banyak titik asal (origins) dan tujuan (destinations) di atas graf pgRouting?",
    "options": {
      "A": "pgr_dijkstraCostMatrix('SELECT id, source, target, cost FROM edge_table', ARRAY[1,2,3], false)",
      "B": "pgr_allDistances()",
      "C": "pgr_matrixCalculate()",
      "D": "pgr_originDestination()"
    },
    "answer": "A",
    "explanation": {
      "correct": "pgr_dijkstraCostMatrix menghitung matriks biaya terpendek nxn antar kumpulan simpul array di pgRouting secara vectorized dan sangat efisien untuk analisis aksesibilitas transportasi.",
      "A": "Opsi A benar sesuai dokumentasi API pgRouting Cost Matrix.",
      "B": "Opsi B salah karena bukan nama fungsi pgRouting.",
      "C": "Opsi C salah karena bukan nama fungsi pgRouting.",
      "D": "Opsi D salah karena bukan nama fungsi pgRouting."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-422",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam spesifikasi Vector Tile (MVT), mengapa koordinat vertex disimpan dalam format koordinat integer lokal (misalnya rentang 0 hingga 4096 pada extent default) dan bukan derajat lintang bujur WGS84?",
    "options": {
      "A": "Kuantisasi koordinat lokal ke integer ringkas meminimalkan ukuran file binary protobuf dan mempercepat decoding GPU vertex attribute secara masif",
      "B": "Karena format biner tidak mampu merekam angka desimal",
      "C": "Untuk membatasi jumlah fitur maksimal 10 objek per tile",
      "D": "Agar tile tidak dapat dibuka di luar negara asalnya"
    },
    "answer": "A",
    "explanation": {
      "correct": "MVT mendefinisikan tile extent lokal (umumnya 4096 unit). Mengonversi lintang-bujur menjadi delta integer berulang di dalam tile memungkinkan kompresi varint Protobuf yang sangat padat dan efisien.",
      "A": "Opsi A benar sesuai rancangan arsitektur Mapbox Vector Tile Specification.",
      "B": "Opsi B salah karena Protobuf mendukung tipe float dan double.",
      "C": "Opsi C salah karena satu tile dapat memuat puluhan ribu fitur.",
      "D": "Opsi D salah karena MVT adalah standar terbuka global interoperabel."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-423",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Bagaimana cara menangani sinkronisasi data offline-ke-online pada aplikasi field survey Web GIS (misal Progressive Web App) saat koneksi internet kembali pulih?",
    "options": {
      "A": "Menyimpan perubahan fitur dan geometri ke dalam IndexedDB di browser, mencatat antrean operasi (queue action) dengan UUID unik, lalu menyinkronkannya ke endpoint API backend menggunakan mekanisme resolusi konflik versi (misal timestamp / vector clocks)",
      "B": "Menghapus seluruh formulir survei jika jaringan terputus",
      "C": "Mematikan perangkat ponsel secara paksa",
      "D": "Menyimpan koordinat di clipboard perangkat dan meminta surveyor paste satu per satu"
    },
    "answer": "A",
    "explanation": {
      "correct": "Arsitektur offline-first mengandalkan IndexedDB/LocalForage untuk penyimpanan transaksi lokal yang andal. Saat event 'online' terdeteksi, Service Worker atau worker client mengirimkan antrean mutasi dengan penanganan konflik konsistensi data.",
      "A": "Opsi A benar sesuai prinsip desain Offline-First Web GIS PWA.",
      "B": "Opsi B salah karena menghapus formulir akan menghilangkan data hasil survei lapangan.",
      "C": "Opsi C salah karena bukan solusi rekayasa perangkat lunak.",
      "D": "Opsi D salah karena proses manual clipboard rentan kesalahan manusia dan tidak terstruktur."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-424",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Dalam Google Earth Engine, fungsi reducer manakah yang digunakan untuk mengekstrak statistik histogram frekuensi tutupan lahan pada setiap poligon batas wilayah administratif?",
    "options": {
      "A": "ee.Reducer.frequencyHistogram() bersama image.reduceRegions()",
      "B": "ee.Reducer.makeHistogram()",
      "C": "ee.Reducer.toCSV()",
      "D": "image.calculateClasses()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ee.Reducer.frequencyHistogram() menghitung jumlah piksel untuk setiap nilai diskrit kelas tutupan lahan di dalam poligon yang dievaluasi melalui reduceRegions() secara terdistribusi di cloud GEE.",
      "A": "Opsi A benar sesuai dokumentasi Google Earth Engine Zonal Statistics Reducer.",
      "B": "Opsi B salah karena bukan nama method reducer resmi GEE.",
      "C": "Opsi C salah karena toCSV bukan reducer perhitungan frekuensi.",
      "D": "Opsi D salah karena bukan method kelas ee.Image."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-425",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "question": "Koreksi Topografis (Topographic Correction / Illumination Correction) pada citra optik di wilayah pegunungan (seperti metode Minnaert atau C-Correction) bertujuan untuk:",
    "options": {
      "A": "Menghilangkan efek perbedaan iluminasi sinar matahari antara lereng yang menghadap matahari (terlalu terang) dan lereng yang membelakangi matahari (terlalu gelap) sehingga nilai reflektansi tutupan vegetasi seragam di kedua lereng",
      "B": "Meratakan permukaan gunung di dunia nyata",
      "C": "Mengurangi ketinggian bukit di peta",
      "D": "Menghapus tutupan salju secara paksa"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di daerah bergunung, sudut datang sinar matahari bervariasi tergantung aspek dan kemiringan lereng (slope & aspect). Koreksi Minnaert/C-correction menormalkan radiansi berdasarkan sudut datang lokal yang dihitung dari DEM.",
      "A": "Opsi A benar sesuai prinsip koreksi radiometrik topografi penginderaan jauh.",
      "B": "Opsi B salah karena tidak mungkin meratakan bentuk fisik bumi.",
      "C": "Opsi C salah karena koreksi topografi adalah normalisasi nilai reflektansi piksel, bukan pemalsuan kontur elevasi.",
      "D": "Opsi D salah karena bukan proses masking salju."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-426",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Koherensi interferometrik (interferometric coherence / gamma) pada InSAR adalah nilai rentang [0, 1] yang mengindikasikan:",
    "options": {
      "A": "Tingkat korelasi fase dan amplitudo antara dua akuisisi citra radar, di mana nilai mendekati 1 menunjukkan fase sangat stabil dan nilai mendekati 0 menunjukkan terjadinya decorrelation spasial/temporal",
      "B": "Kecepatan terbang satelit di orbit",
      "C": "Suhu udara troposfer saat perekaman",
      "D": "Jumlah memori RAM komputer pengolah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Koherensi adalah estimasi korelasi kompleks antara dua sinyal SAR yang di-coregister. Nilai tinggi (>0.5) mengonfirmasi interferogram dapat dipercaya untuk fase unwrapping dan estimasi deformasi.",
      "A": "Opsi A benar sesuai definisi matematika koherensi InSAR.",
      "B": "Opsi B salah karena kecepatan satelit ditentukan mekanika orbit Keplerian.",
      "C": "Opsi C salah karena koherensi bukan parameter termometer udara.",
      "D": "Opsi D salah karena koherensi adalah sifat fisik gelombang elektromagnetik citra."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-427",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Apa keunggulan utama teknik SBAS (Small Baseline Subset) InSAR dibandingkan PS-InSAR dalam pemantauan deformasi di luar area perkotaan padat?",
    "options": {
      "A": "SBAS memanfaatkan pasangan citra dengan baseline spasial dan temporal yang kecil untuk membatasi efek decorrelation pada target hamburan terdistribusi (distributed scatterers seperti vegetasi rendah dan tanah terbuka)",
      "B": "SBAS tidak memerlukan data citra radar sama sekali",
      "C": "SBAS hanya dapat memproses data foto kamera drone",
      "D": "SBAS menghapus informasi deformasi permukaan bumi"
    },
    "answer": "A",
    "explanation": {
      "correct": "PS-InSAR optimal pada target buatan manusia dengan refleksi titik stabil, sedangkan SBAS (Berardino et al.) menggunakan pasangan multi-master dengan baseline orbital dan waktu pendek untuk mengekstrak deformasi dari target terdistribusi alami.",
      "A": "Opsi A benar sesuai prinsip algoritma SBAS InSAR.",
      "B": "Opsi B salah karena SBAS adalah teknik pemrosesan citra SAR.",
      "C": "Opsi C salah karena SBAS menggunakan data radar satelit.",
      "D": "Opsi D salah karena tujuan utama SBAS justru mengukur time-series deformasi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-428",
    "level": "advanced",
    "topic": "Geodesi & Proyeksi",
    "question": "Dalam penentuan posisi teliti PPP (Precise Point Positioning) GNSS, kombinasi linier apa yang digunakan untuk mengeliminasi efek bias refraksi ionosferik orde pertama secara matematis?",
    "options": {
      "A": "Kombinasi Ionosphere-Free (L3 / LC) yang memadukan frekuensi ganda L1 dan L2",
      "B": "Kombinasi Wide-Lane murni tanpa koreksi frekuensi",
      "C": "Pengurangan koordinat X dan Y secara linier",
      "D": "Kombinasi Narrow-Band radio gelombang pendek"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena dispersi ionosfer berbanding terbalik dengan kuadrat frekuensi, kombinasi Ionosphere-Free: LC = (f1^2 * L1 - f2^2 * L2) / (f1^2 - f2^2) menghilangkan >99% penundaan sinyal ionosfer.",
      "A": "Opsi A benar sesuai dasar geodesi satelit GNSS multi-frekuensi.",
      "B": "Opsi B salah karena Wide-Lane menyisakan bias ionosferik.",
      "C": "Opsi C salah karena refraksi terjadi pada fase gelombang sinyal pembawa di atmosfer.",
      "D": "Opsi D salah karena bukan kombinasi linear fase observasi GNSS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-429",
    "level": "advanced",
    "topic": "Geodesi & Proyeksi",
    "question": "Model Geoid global presisi tinggi berbasis kombinasi data satelit GRACE, GOCE, dan altimetri laut seperti EGM2008 menguraikan medan potensial gravitasi bumi ke dalam:",
    "options": {
      "A": "Deret fungsi harmonik bola (Spherical Harmonics) hingga derajat dan orde 2159 (resolusi spasial ~9 km)",
      "B": "Tabel nilai acak dalam format teks CSV",
      "C": "Satu persamaan elips 2D sederhana",
      "D": "Poligon segitiga datar tanpa ketinggian"
    },
    "answer": "A",
    "explanation": {
      "correct": "EGM2008 mengekspresikan geopotensial bumi melalui ekspansi spherical harmonic koefisien Stokes hingga degree dan order n,m = 2159, mendeskripsikan undulasi geoid global dengan resolusi ~5 menit busur.",
      "A": "Opsi A benar sesuai spesifikasi model gravitasi bumi EGM2008.",
      "B": "Opsi B salah karena medan geopotensial dimodelkan dengan formulasi matematis harmonik bola.",
      "C": "Opsi C salah karena medan gravitasi riil bumi berfluktuasi secara kompleks.",
      "D": "Opsi D salah karena spherical harmonic merepresentasikan permukaan ekuipotensial 3D berkelanjutan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-430",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menghitung matriks perpotongan poligon terhadap ribuan garis jalan secara paralel menggunakan multiple worker threads di PostgreSQL 12+?",
    "options": {
      "A": "ST_Intersects() yang dipanggil dalam query dengan konfigurasi max_parallel_workers_per_gather > 0 pada tabel yang diindeks GiST",
      "B": "ST_ParallelIntersects()",
      "C": "ST_MultiThread()",
      "D": "ST_CpuBoost()"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostgreSQL mendukung parallel query execution. Sejak PostGIS 3.0, fungsi biaya cost spasial ditandai PARALLEL SAFE, sehingga PostGIS otomatis memanfaatkan worker thread paralel ketika parameter konfigurasi paralel PostgreSQL diaktifkan.",
      "A": "Opsi A benar sesuai mekanisme eksekusi paralel PostGIS / PostgreSQL.",
      "B": "Opsi B salah karena bukan nama fungsi PostGIS.",
      "C": "Opsi C salah karena bukan nama fungsi PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-431",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Dalam PostGIS Raster, bagaimana cara melakukan zonal statistics (menghitung rata-rata nilai elevasi raster di dalam setiap poligon batas wilayah)?",
    "options": {
      "A": "SELECT p.id, (ST_SummaryStatsAgg(ST_Clip(r.rast, p.geom), 1, true)).mean FROM raster_table r JOIN polygon_table p ON ST_Intersects(r.rast, p.geom) GROUP BY p.id;",
      "B": "SELECT p.id, AVG(r.rast) FROM raster_table r, polygon_table p;",
      "C": "SELECT ST_ZonalStats(r.rast, p.geom) FROM raster_table r, polygon_table p;",
      "D": "SELECT p.id, ST_Area(p.geom) FROM polygon_table p;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kombinasi ST_Clip untuk memotong raster berdasarkan batas poligon, ST_Intersects untuk join spasial, dan ST_SummaryStatsAgg untuk menghitung metrik statistik agregat (mean, sum, count, stdev) adalah pola baku zonal stats di PostGIS Raster.",
      "A": "Opsi A benar sesuai pola penulisan query zonal statistics di PostGIS Raster.",
      "B": "Opsi B salah karena AVG standar SQL tidak dapat menerima tipe data binary raster.",
      "C": "Opsi C salah karena ST_ZonalStats bukan nama fungsi bawaan standar.",
      "D": "Opsi D salah karena ST_Area hanya menghitung luas poligon, bukan statistik nilai piksel raster."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-432",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menguji apakah geometri 3D A memuat geometri 3D B di dalam ruang volumetrik 3 dimensi?",
    "options": {
      "A": "ST_3DIntersects(geomA, geomB) bersama ST_Contains(geomA, geomB) pada PolyhedralSurface",
      "B": "ST_3DContainsAll()",
      "C": "ST_VolumeContains()",
      "D": "ST_VoxelIntersects()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Untuk pemodelan spasial 3D solid (misal PolyhedralSurface atau TIN), PostGIS menggunakan SFCGAL backend dengan ST_3DIntersects dan operasi relasi 3D untuk memverifikasi interseksi ruang volumetrik.",
      "A": "Opsi A benar sesuai arsitektur 3D SFCGAL di PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-433",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam WebGL dan shader kartu grafis untuk Mapbox / MapLibre, teknik apakah yang digunakan untuk merender jutaan titik partikel angin atau arus laut yang bergerak secara dinamis dan mulus pada 60 FPS?",
    "options": {
      "A": "Particle Simulation menggunakan texture ping-pong framebuffer (FBO) dan GPU compute/transform feedback di WebGL",
      "B": "Membuat jutaan elemen HTML <img> yang digeser dengan CSS transition",
      "C": "Mengirimkan request AJAX ke server setiap 16 milidetik",
      "D": "Menggunakan loop setInterval di JavaScript utama untuk menggeser posisi DOM"
    },
    "answer": "A",
    "explanation": {
      "correct": "Simulasi partikel GPU menyimpan posisi dan kecepatan ribuan/jutaan partikel ke dalam float textures pada Framebuffer Objects (FBO). Vertex dan fragment shader memperbarui dan menggambar partikel secara paralel di GPU tanpa beban CPU sama sekali.",
      "A": "Opsi A benar sesuai teknik implementasi WebGL particle flow rendering (seperti mapbox wind / earth.nullschool).",
      "B": "Opsi B salah karena jutaan elemen DOM akan menyebabkan crash fatal seketika.",
      "C": "Opsi C salah karena latensi jaringan HTTP ~50-100 ms tidak mampu mengejar refresh rate 60 FPS (16.6 ms).",
      "D": "Opsi D salah karena thread JavaScript tidak mampu memanipulasi jutaan titik secara realtime tanpa GPU."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-434",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam MapLibre GL JS, apa kegunaan 'feature-state' API (misal map.setFeatureState)?",
    "options": {
      "A": "Memperbarui status interaktif fitur tertentu (seperti 'hover: true' atau 'selected: true') secara instan di GPU tanpa harus mem-parse ulang atau merender ulang seluruh dataset vector tiles",
      "B": "Menghapus layer dari peta secara permanen",
      "C": "Mengubah zona waktu server secara otomatis",
      "D": "Menghapus koneksi database PostGIS"
    },
    "answer": "A",
    "explanation": {
      "correct": "feature-state memungkinkan manipulasi style dinamis (warna saat kursor melintas atau klik) berdasarkan ID fitur individual secara ringan tanpa perlu mengirimkan ulang geometri ke buffer GPU.",
      "A": "Opsi A benar sesuai Mapbox/MapLibre feature-state performance specification.",
      "B": "Opsi B salah karena menghapus layer menggunakan map.removeLayer().",
      "C": "Opsi C salah karena feature-state adalah operasi render visual client-side.",
      "D": "Opsi D salah karena client frontend tidak terhubung langsung ke koneksi raw database."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-435",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Saat mendesain REST API geospasial berbasis microservices, mengapa format bounding box standar 'bbox=[minX,minY,maxX,maxY]' lebih disukai pada query parameter dibanding mengirimkan geometri poligon kompleks di URL GET request?",
    "options": {
      "A": "Batas panjang URL browser/HTTP server (biasanya ~2048 karakter) dapat terlampaui oleh poligon kompleks, sedangkan 4 angka bbox sangat ringkas, cepat diparsing, dan langsung memicu spatial index filter",
      "B": "Karena format BBOX adalah satu-satunya format yang didukung oleh internet",
      "C": "Karena poligon dilarang keras dalam protokol HTTP",
      "D": "Agar data tidak dapat dienkripsi oleh HTTPS"
    },
    "answer": "A",
    "explanation": {
      "correct": "Poligon dengan ratusan koordinat akan melampaui limit panjang URI GET request (HTTP 414 URI Too Long). Parameter BBOX terdiri dari 4 nilai float sederhana yang dapat langsung dievaluasi dengan operator && di database.",
      "A": "Opsi A benar sesuai standar desain Web API RESTful geospasial.",
      "B": "Opsi B salah karena request POST mendukung pengiriman body GeoJSON berukuran besar.",
      "C": "Opsi C salah karena protokol HTTP mendukung transfer payload apa pun.",
      "D": "Opsi D salah karena parameter query string tetap terenkripsi dalam terowongan TLS/HTTPS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-436",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Ketika menampilkan layer batas administrasi bertingkat (Provinsi, Kabupaten, Kecamatan, Desa) di peta web, praktik kartografi multi-resolusi apa yang wajib diterapkan pada layer style?",
    "options": {
      "A": "Menetapkan batas zoom level ('minzoom' dan 'maxzoom') untuk setiap tingkatan administrasi sehingga layer detail (desa) hanya muncul saat pengguna melakukan zoom-in mendalam",
      "B": "Menampilkan seluruh batas desa di seluruh Indonesia secara bersamaan pada zoom level 0 (seluruh dunia)",
      "C": "Mengaburkan layar peta dengan efek blur",
      "D": "Menonaktifkan zoom control pada peta"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menerapkan batasan minzoom dan maxzoom menjaga kepadatan informasi visual (visual clutter prevention) dan mencegah transfer jutaan poligon desa saat peta berada pada skala nasional/global.",
      "A": "Opsi A benar sesuai kaidah kartografi digital dan optimasi performa peta interaktif.",
      "B": "Opsi B salah karena memuat 80.000+ batas desa sekaligus pada zoom 0 akan membuat browser crash dan tampilan hitam pekat tidak terbaca.",
      "C": "Opsi C salah karena efek blur mengaburkan informasi peta.",
      "D": "Opsi D salah karena zoom control adalah navigasi mendasar peta web."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-437",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Dalam integrasi cloud geospatial data pipeline, arsitektur event-driven manakah yang paling efektif untuk memproses citra satelit baru yang diunggah ke AWS S3 bucket secara otomatis?",
    "options": {
      "A": "S3 ObjectCreated Event -> AWS SNS/SQS -> AWS Lambda / ECS Fargate (menjalankan container GDAL untuk konversi ke COG dan ekstrak metadata STAC) -> Simpan ke PostGIS / STAC API",
      "B": "Admin memeriksa S3 setiap 1 jam secara manual dengan membuka browser",
      "C": "Menghentikan seluruh server cloud dan menyalakan kembali",
      "D": "Mengirimkan pesan faks ke kantor satelit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Arsitektur cloud-native modern memanfaatkan event notification S3 untuk memicu komputasi serverless otomatis (Lambda/Fargate) seketika file raster mendarat, mengotomatisasi pipeline pembuatan COG dan katalogisasi STAC.",
      "A": "Opsi A benar sesuai best practice arsitektur event-driven Cloud Geospatial di AWS.",
      "B": "Opsi B salah karena pemantauan manual tidak terukur dan tidak real-time.",
      "C": "Opsi C salah karena restart server mengganggu availability servis lain.",
      "D": "Opsi D salah karena bukan arsitektur otomatisasi perangkat lunak."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-438",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Apa keunggulan indexing sistem grid spasial diskrit H3 (Uber's Hexagonal Hierarchical Spatial Index) untuk agregasi analitik big data perkotaan?",
    "options": {
      "A": "Setiap sel heksagon memiliki tetangga dengan jarak pusat-ke-pusat yang identik seragam ke semua 6 arah (tidak ada distorsi diagonal seperti pada grid bujur sangkar), dan mendukung partisi hierarki multi-resolusi 0-15 yang dikodekan sebagai integer 64-bit tunggal",
      "B": "H3 secara otomatis menghapus kemacetan jalan",
      "C": "H3 tidak memerlukan koordinat lintang bujur",
      "D": "H3 hanya dapat digunakan untuk mobil bermerek Uber"
    },
    "answer": "A",
    "explanation": {
      "correct": "Heksagon meminimalkan bias efek kuantitas kartografi (semua tetangga berjarak sama). Representasi indeks integer 64-bit uint64 memungkinkan pencarian tetangga (k-ring) dan agregasi join spasial secepat komputasi bitwise aritmetika.",
      "A": "Opsi A benar sesuai rancangan matematis sistem indeks spasial H3.",
      "B": "Opsi B salah karena algoritma indexing data tidak memodifikasi arus fisik lalu lintas.",
      "C": "Opsi C salah karena konversi ke sel H3 membutuhkan koordinat latitude dan longitude.",
      "D": "Opsi D salah karena H3 adalah pustaka open-source global yang bebas digunakan siapa saja."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-439",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "question": "Dalam orkestrasi Kubernetes untuk klaster aplikasi Web GIS berskala jutaan pengguna, metrik apa yang paling tepat dikonfigurasi pada Horizontal Pod Autoscaler (HPA) untuk pod vector tile server?",
    "options": {
      "A": "CPU utilization persentase tinggi dan custom metric HTTP request rate (RPS) dari Prometheus",
      "B": "Kapasitas disk penyimpanan lokal pod yang tersisa",
      "C": "Warna tema dashboard admin Kubernetes",
      "D": "Jumlah file log teks di root direktori"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tile server mengalami lonjakan beban CPU intensif saat banyak pengguna melakukan pan dan zoom secara bersamaan. HPA yang memantau utilitas CPU dan throughput request per second (RPS) secara proaktif menambah replica pod sebelum server kelebihan beban.",
      "A": "Opsi A benar sesuai strategi auto-scaling Kubernetes untuk layanan komputasi tinggi.",
      "B": "Opsi B salah karena pod tile server umumnya stateless.",
      "C": "Opsi C salah karena estetika UI bukan metrik autoscaling.",
      "D": "Opsi D salah karena ukuran file log bukan tolok ukur beban komputasi pengguna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-440",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "question": "Bagaimana cara mencegah 'Tile Bombing' atau Denial of Service (DoS) pada dynamic vector tile server publik yang terhubung langsung ke PostGIS?",
    "options": {
      "A": "Menerapkan Rate Limiting per IP di Edge/Reverse Proxy, membatasi zoom level maksimum yang diizinkan untuk kueri dinamis, dan menetapkan database query statement_timeout yang ketat (misal 3 detik)",
      "B": "Mematikan server database setiap kali ada request masuk",
      "C": "Menghapus indeks spasial GiST dari database",
      "D": "Membuka seluruh port jaringan tanpa autentikasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Penyerang dapat mengirim ribuan request tile zoom level rendah dengan filter berat untuk membebani CPU database. Menetapkan rate limiting, statement_timeout, dan meng-cache tile di Edge CDN melindungi infrastruktur dari kelumpuhan.",
      "A": "Opsi A benar sesuai mitigasi keamanan dan ketahanan infrastruktur Web GIS.",
      "B": "Opsi B salah karena mematikan database akan menyebabkan downtime menyeluruh.",
      "C": "Opsi C salah karena menghapus indeks justru membuat serangan DoS semakin mematikan.",
      "D": "Opsi D salah karena membuka port secara sembarangan memicu eksploitasi peretasan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-441",
    "level": "advanced",
    "topic": "Fotogrametri & UAV",
    "question": "Mengapa dalam rekonstruksi 3D fotogrametri udara, area permukaan perairan terbuka yang tenang atau atap seng yang seragam mulus sering kali mengalami kegagalan pembuatan Dense Point Cloud (lubang bolong)?",
    "options": {
      "A": "Algoritma dense matching (seperti Semi-Global Matching / SGM) memerlukan tekstur visual yang kaya dan bervariasi untuk mencocokkan piksel antar foto, sedangkan air tenang dan permukaan homogen tidak memiliki variasi gradien tekstur yang unik",
      "B": "Air menyerap sinyal radio kamera drone secara instan",
      "C": "Kamera drone dilarang memotret air oleh regulasi penerbangan",
      "D": "Format JPEG menolak kompresi warna biru"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dense image matching mengandalkan korelasi jendela tekstur atau sensus transform. Permukaan seragam tanpa tekstur (textureless) dan permukaan air yang memantulkan cahaya secara spekular menghasilkan korelasi ambigu, memicu kegagalan rekonstruksi 3D.",
      "A": "Opsi A benar sesuai batasan mendasar algoritma fotogrametri SfM berbasis tekstur optik.",
      "B": "Opsi B salah karena foto udara menggunakan sensor cahaya optik pasif, bukan transmisi sinyal radio ke air.",
      "C": "Opsi C salah karena pemetaan perairan adalah hal umum dalam survei drone.",
      "D": "Opsi D salah karena format JPEG mendukung kanal warna RGB penuh."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-442",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "question": "Dalam pengolahan citra SAR, filter adaptif manakah (seperti Lee, Frost, atau Gamma-MAP) yang digunakan untuk mereduksi noise speckle tanpa mengaburkan garis tepi objek (edge-preserving speckle filtering)?",
    "options": {
      "A": "Filter Lee yang menyesuaikan bobot penghalusan berdasarkan koefisien variasi lokal di sekitar piksel",
      "B": "Filter Gaussian Blur murni tanpa pembobotan",
      "C": "Filter Invert Color",
      "D": "Filter Sepia kartografi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Noise speckle bersifat multiplikatif. Filter Lee dan Frost mengevaluasi rasio varians lokal terhadap rata-rata: pada area homogen dilakukan averaging kuat, namun pada tepi objek/pantulan kuat bobot penghalusan dikurangi untuk mempertahankan ketajaman batas tepi.",
      "A": "Opsi A benar sesuai prinsip filter speckle adaptif pengolahan radar SAR.",
      "B": "Opsi B salah karena Gaussian Blur standar akan mengaburkan dan menghancurkan ketajaman batas objek.",
      "C": "Opsi C salah karena invert color membalikkan warna, bukan mereduksi speckle.",
      "D": "Opsi D salah karena filter sepia adalah efek artistik fotografi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-443",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "question": "Apa kelemahan utama metode klasifikasi supervised Maximum Likelihood Classification (MLC) dibandingkan algoritma ensemble machine learning modern (seperti XGBoost)?",
    "options": {
      "A": "MLC mengasumsikan data spektral setiap kelas terdistribusi normal (Gaussian distribution), asumsi yang sering kali dilanggar oleh citra satelit multimodal dan data fitur non-parametrik (tekstur, DEM, polarisasi SAR)",
      "B": "MLC hanya dapat dijalankan di superkomputer",
      "C": "MLC tidak menghasilkan peta raster",
      "D": "MLC hanya mendukung satu sampel data latih"
    },
    "answer": "A",
    "explanation": {
      "correct": "MLC adalah pengklasifikasi parametrik berbasis probabilitas Gaussian. Jika data memiliki distribusi multimodal atau menggabungkan variabel non-Gaussian (kemiringan lereng, radar backscatter), performa MLC menurun drastis dibanding model non-parametrik seperti XGBoost atau Random Forest.",
      "A": "Opsi A benar sesuai keterbatasan teoretis Maximum Likelihood Classifier.",
      "B": "Opsi B salah karena MLC secara matematis ringan dan dapat dijalankan di komputer biasa.",
      "C": "Opsi C salah karena output MLC adalah peta raster tematik klasifikasi.",
      "D": "Opsi D salah karena MLC memerlukan banyak sampel latih untuk menghitung matriks kovarians kelas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-444",
    "level": "advanced",
    "topic": "Indeks Spektral",
    "question": "Indeks NDGI (Normalized Difference Glint Index) dalam remote sensing perairan dangkal dan terumbu karang digunakan untuk:",
    "options": {
      "A": "Mengoreksi dan mereduksi gangguan pantulan kilau cahaya matahari langsung pada permukaan gelombang air (sun glint) yang menutupi kenampakan habitat bentik bawah air",
      "B": "Mengukur kedalaman palung samudra",
      "C": "Mendeteksi posisi kapal selam di bawah air",
      "D": "Menghitung kecepatan arus pasang surut"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sun glint adalah refleksi spekular cahaya matahari langsung dari riak air ke sensor satelit yang menyamarkan habitat bentik dasar laut. Koreksi sun glint memanfaatkan band NIR/SWIR untuk menormalisasi pantulan permukaan.",
      "A": "Opsi A benar sesuai metodologi pemetaan terumbu karang dan habitat laut dangkal.",
      "B": "Opsi B salah karena penginderaan jauh optik hanya menembus perairan jernih dangkal hingga kedalaman ~20-30 meter.",
      "C": "Opsi C salah karena satelit optik bukan alat pelacak militer kapal selam.",
      "D": "Opsi D salah karena sun glint correction bukan pengukuran hidrodinamika arus pasut."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-445",
    "level": "advanced",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Perintah ogr2ogr manakah yang digunakan untuk memuat ribuan baris file CSV yang memiliki kolom 'longitude' dan 'latitude' langsung ke dalam tabel PostGIS dengan tipe geometri Point EPSG:4326 yang valid?",
    "options": {
      "A": "ogr2ogr -f \"PostgreSQL\" PG:\"dbname=gisdb user=postgres\" input.csv -oo X_POSSIBLE_NAMES=lon*,x* -oo Y_POSSIBLE_NAMES=lat*,y* -a_srs EPSG:4326 -nln target_table",
      "B": "gdal_translate input.csv PG:\"dbname=gisdb\"",
      "C": "ogrinfo -import input.csv gisdb",
      "D": "ogr2ogr -f PDF input.csv target_table"
    },
    "answer": "A",
    "explanation": {
      "correct": "Driver CSV OGR mendukung open options (-oo) X_POSSIBLE_NAMES dan Y_POSSIBLE_NAMES untuk mendeteksi kolom koordinat secara otomatis dan mengonversinya menjadi geometri titik dengan sistem referensi -a_srs ke target tabel PostGIS.",
      "A": "Opsi A benar sesuai panduan GDAL/OGR CSV driver loading ke PostGIS.",
      "B": "Opsi B salah karena gdal_translate adalah tool raster.",
      "C": "Opsi C salah karena ogrinfo hanya menampilkan informasi dan tidak mengimpor data.",
      "D": "Opsi D salah karena format PDF bukan database PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-446",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengembalikan representasi Well-Known Binary (WKB) dengan menyertakan informasi SRID (Extended WKB / EWKB) yang merupakan format penyimpanan biner internal PostGIS?",
    "options": {
      "A": "ST_AsEWKB(geom)",
      "B": "ST_AsWKT(geom)",
      "C": "ST_AsGeoJSON(geom)",
      "D": "ST_AsGML(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_AsEWKB mengembalikan representasi biner Extended WKB PostGIS yang menyertakan informasi SRID sistem proyeksi koordinat dan dimensi tambahan Z/M yang tidak ada pada WKB standar OGC lama.",
      "A": "Opsi A benar sesuai spesifikasi format biner internal PostGIS.",
      "B": "Opsi B salah karena ST_AsWKT menghasilkan teks teks terbaca manusia (Well-Known Text).",
      "C": "Opsi C salah karena menghasilkan teks JSON.",
      "D": "Opsi D salah karena menghasilkan dokumen XML Geography Markup Language."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-447",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Dalam PostGIS, apa fungsi dari tabel katalog metadata 'spatial_ref_sys'?",
    "options": {
      "A": "Menyimpan definisi resmi sistem referensi koordinat spasial (SRID), nama otoritas (EPSG), parameter proyeksi proj4text, dan representasi WKT SRID yang digunakan oleh fungsi transformasi koordinat ST_Transform",
      "B": "Menyimpan password akun administrator database",
      "C": "Menghitung total kapasitas hard disk server",
      "D": "Menyimpan data log kesalahan sistem operasi Linux"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tabel spatial_ref_sys adalah standar OGC yang berisi ribuan definisi sistem proyeksi dan datum geospasial dari registry EPSG/PROJ yang esensial untuk validasi geometri dan fungsi ST_Transform.",
      "A": "Opsi A benar sesuai arsitektur metadata PostGIS OGC compliant.",
      "B": "Opsi B salah karena kredensial PostgreSQL disimpan di tabel pg_authid.",
      "C": "Opsi C salah karena spatial_ref_sys adalah tabel definisi proyeksi, bukan monitor disk.",
      "D": "Opsi D salah karena log sistem operasi dicatat oleh syslog/journald."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-448",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam optimasi aplikasi Web GIS yang menampilkan peta interaktif di perangkat mobile layar sentuh dengan bandwidth terbatas, teknik apa yang paling krusial?",
    "options": {
      "A": "Mengaktifkan kompresi tile (GZIP/Brotli), membatasi over-fetching data melalui view-bounds filtering, menggunakan Vector Tiles berukuran < 100 KB per tile, dan menerapkan debounce pada event pan/zoom",
      "B": "Meminta pengguna mengunduh file Shapefile 500 MB sebelum peta terbuka",
      "C": "Mematikan fungsi pinch-to-zoom pada layar sentuh",
      "D": "Merender peta dalam resolusi 8K tanpa simplifikasi geometri"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perangkat mobile memiliki keterbatasan memori, GPU, dan koneksi seluler. Vector tiles terkompresi berukuran kecil dengan debouncing event touch listener menjamin pengalaman navigasi tetap responsif dan hemat kuota data.",
      "A": "Opsi A benar sesuai kaidah pengembangan Mobile Web GIS performa tinggi.",
      "B": "Opsi B salah karena memuat shapefile masif akan menghabiskan kuota pengguna dan memblokir browser seluler.",
      "C": "Opsi C salah karena gesture pinch-to-zoom adalah interaksi fundamental pengguna ponsel.",
      "D": "Opsi D salah karena resolusi 8K tanpa simplifikasi memicu crash Out-Of-Memory (OOM) seketika."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-449",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "question": "Dalam backend web geospasial berbasis Python (FastAPI / GeoDjango), apa metode terbaik untuk menangani kalkulasi geospasial asinkron yang membutuhkan waktu lama (misal orthorektifikasi foto udara atau klastering jutaan titik)?",
    "options": {
      "A": "Mendelegasikan komputasi ke background task queue terdistribusi (seperti Celery bersama Redis / RabbitMQ), mengembalikan job ID seketika ke frontend, dan memantau status pengerjaan via polling atau WebSocket",
      "B": "Mengeksekusi komputasi secara sinkron langsung di dalam request handler HTTP utama hingga browser mengalami timeout 504",
      "C": "Mematikan server saat proses berjalan",
      "D": "Meminta pengguna tidak menutup laptop selama 24 jam"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tugas pemrosesan geospasial berat tidak boleh memblokir HTTP worker request-response cycle. Arsitektur asynchronous task queue (Celery/Redis) memisahkan beban komputasi berat ke worker proses terisolasi tanpa risiko HTTP timeout.",
      "A": "Opsi A benar sesuai arsitektur pemrosesan asinkron enterprise web geospasial.",
      "B": "Opsi B salah karena HTTP gateway timeout (504) akan memutuskan koneksi klien sebelum proses selesai.",
      "C": "Opsi C salah karena mematikan server akan menggagalkan komputasi.",
      "D": "Opsi D salah karena arsitektur yang baik harus tahan terhadap pemutusan koneksi klien."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-450",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Dalam arsitektur modern 'Cloud-Native Geospatial', kombinasi pilar teknologi manakah yang merevolusi cara dunia menyimpan, mengindeks, dan memproses data observasi bumi skala global?",
    "options": {
      "A": "Cloud Optimized GeoTIFF (COG), SpatioTemporal Asset Catalog (STAC), GeoParquet, dan pemrosesan terdistribusi tanpa server (Serverless Dynamic Tiling & Xarray)",
      "B": "File Shapefile dalam kepingan CD-ROM fisik",
      "C": "Pencetakan peta di kertas kalkir menggunakan pena rapido",
      "D": "Penyimpanan data hanya di flashdisk lokal tanpa cadangan cloud"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pilar Cloud-Native Geospatial (COG, STAC, GeoParquet, Zarr) memungkinkan analisis langsung di atas cloud storage (data-in-place analysis) melalui HTTP range requests, menyingkirkan kebutuhan mendownload file raksasa sebelum komputasi.",
      "A": "Opsi A benar sesuai standar arsitektur Cloud-Native Geospatial global (cogeo.org / stacspec.org).",
      "B": "Opsi B salah karena media fisik CD-ROM adalah teknologi penyimpanan masa lalu.",
      "C": "Opsi C salah karena kertas kalkir dan pena rapido adalah metode kartografi manual era pra-digital.",
      "D": "Opsi D salah karena media penyimpanan lokal tidak mendukung kolaborasi big data berskala global."
    },
    "jobId": "fullstack-gis"
  }
];
