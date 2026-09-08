import { Question } from './types';

export const FULLSTACK_BEGINNER: Question[] = [
  {
    "id": "FB-001",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Manakah dari tipe data berikut yang merepresentasikan ketiadaan nilai yang disengaja (intentional absence of any object value) di TypeScript?",
    "options": {
      "A": "undefined",
      "B": "null",
      "C": "void",
      "D": "never"
    },
    "answer": "B",
    "explanation": {
      "correct": "null digunakan untuk menunjukkan ketiadaan nilai secara sengaja, sedangkan undefined berarti variabel belum diberi nilai.",
      "A": "Opsi A salah karena undefined berarti variabel telah dideklarasikan namun belum diinisialisasi nilai apapun.",
      "B": "Opsi B benar karena null secara semantik merepresentasikan ketiadaan nilai objek secara eksplisit/disengaja.",
      "C": "Opsi C salah karena void digunakan sebagai return type fungsi yang tidak mengembalikan nilai.",
      "D": "Opsi D salah karena never merepresentasikan nilai yang tidak akan pernah terjadi (seperti fungsi infinite loop atau selalu melempar error)."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-002",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara tipe data 'any' dan 'unknown' di TypeScript?",
    "options": {
      "A": "'unknown' menonaktifkan semua type checking, sedangkan 'any' tetap memeriksa tipe data",
      "B": "'any' mengizinkan pemanggilan property/method apapun tanpa pengecekan tipe, sedangkan 'unknown' mewajibkan type narrowing sebelum nilai digunakan",
      "C": "'unknown' hanya dapat diisi tipe primitif, sedangkan 'any' dapat diisi objek",
      "D": "Tidak ada perbedaan, keduanya adalah sinonim"
    },
    "answer": "B",
    "explanation": {
      "correct": "'unknown' adalah tipe yang aman (type-safe counterpart dari any). Kita tidak dapat mengakses property atau method pada tipe unknown tanpa melakukan type narrowing (seperti typeof atau instanceof) terlebih dahulu.",
      "A": "Opsi A salah karena terbalik; 'any' yang menonaktifkan type checking.",
      "B": "Opsi B benar karena 'unknown' mewajibkan type checking/narrowing sebelum diakses, menjadikannya jauh lebih aman dibanding 'any'.",
      "C": "Opsi C salah karena 'unknown' dapat menampung sembarang nilai sama seperti 'any'.",
      "D": "Opsi D salah karena perilaku type-safety keduanya sangat berbeda."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-003",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa output dari kode TypeScript berikut saat dikompilasi dan dijalankan di JavaScript?\n\n```typescript\nconst val: any = null;\nconsole.log(typeof val);\n```",
    "options": {
      "A": "\"object\"",
      "B": "\"null\"",
      "C": "\"undefined\"",
      "D": "\"boolean\""
    },
    "answer": "A",
    "explanation": {
      "correct": "typeof null di JavaScript/TypeScript menghasilkan string 'object'. Ini adalah karakteristik bawaan (quirk) JavaScript sejak awal pembuatannya.",
      "A": "Opsi A benar karena secara historis typeof null mengembalikan 'object'.",
      "B": "Opsi B salah karena tidak ada tipe string 'null' yang dihasilkan oleh operator typeof.",
      "C": "Opsi C salah karena null bukan undefined.",
      "D": "Opsi D salah karena null bukan boolean."
    },
    "jobId": "fullstack",
    "code": "const val: any = null;\nconsole.log(typeof val);"
  },
  {
    "id": "FB-004",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Bagaimana cara mendefinisikan array yang hanya boleh berisi string di TypeScript?",
    "options": {
      "A": "string[] atau Array<string>",
      "B": "string{}",
      "C": "[string...]",
      "D": "List<string>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di TypeScript, array of string dapat didefinisikan menggunakan sintaks array literal 'string[]' atau generic interface 'Array<string>'.",
      "A": "Opsi A benar karena kedua notasi tersebut adalah cara resmi penulisan array bertipe di TypeScript.",
      "B": "Opsi B salah karena sintaks tersebut tidak valid.",
      "C": "Opsi C salah karena itu bukan sintaks tipe array di TypeScript.",
      "D": "Opsi D salah karena List bukan keyword bawaan TypeScript (List adalah konsep di C#/Java)."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-005",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa tipe data inferensi dari variabel 'scores' pada kode TypeScript berikut?\n\n```typescript\nconst scores = [10, 20, 30];\n```",
    "options": {
      "A": "number[]",
      "B": "[number, number, number]",
      "C": "Array<any>",
      "D": "any"
    },
    "answer": "A",
    "explanation": {
      "correct": "TypeScript melakukan type inference otomatis. Array literal [10, 20, 30] akan diinferensikan sebagai tipe number[]. Untuk menjadikannya tuple bertipe tetap, diperlukan anotasi tipe eksplisit atau 'as const'.",
      "A": "Opsi A benar karena default inference untuk array angka adalah number[].",
      "B": "Opsi B salah karena tuple membutuhkan anotasi eksplisit `[number, number, number]` atau `as const`.",
      "C": "Opsi C salah karena nilai di dalam array bertipe number spesifik, bukan any.",
      "D": "Opsi D salah karena TypeScript memiliki type inference yang kuat dan tidak menjadikannya any."
    },
    "jobId": "fullstack",
    "code": "const scores = [10, 20, 30];"
  },
  {
    "id": "FB-006",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Fitur TypeScript apakah yang memungkinkan sebuah interface digabungkan otomatis jika dideklarasikan dua kali dengan nama yang sama?",
    "options": {
      "A": "Declaration Merging",
      "B": "Type Intersection",
      "C": "Method Overriding",
      "D": "Polymorphism"
    },
    "answer": "A",
    "explanation": {
      "correct": "Declaration Merging adalah kemampuan compiler TypeScript untuk menggabungkan dua atau lebih deklarasi interface dengan nama yang sama menjadi satu definisi tunggal.",
      "A": "Opsi A benar karena itu adalah nama fitur resmi untuk penggabungan interface dengan nama identik.",
      "B": "Opsi B salah karena intersection menggunakan operator '&' antar tipe berbeda.",
      "C": "Opsi C salah karena overriding terjadi antar inheritance class.",
      "D": "Opsi D salah karena polymorphism adalah pilar OOP umum."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-007",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Kode berikut mengalami compile error di TypeScript. Apa penyebabnya?\n\n```typescript\nlet age: number = 25;\nage = \"25\";\n```",
    "options": {
      "A": "Variabel age belum diberi nilai awal",
      "B": "Tipe 'string' tidak dapat di-assign ke variabel bertipe 'number'",
      "C": "Keyword let harus diganti dengan var",
      "D": "Angka 25 harus diapit tanda kurung"
    },
    "answer": "B",
    "explanation": {
      "correct": "TypeScript menerapkan sistem static typing yang ketat. Variabel age telah dideklarasikan bertipe number, sehingga penugasan nilai string '25' akan menyebabkan compile error TS2322.",
      "A": "Opsi A salah karena age sudah diinisialisasi dengan 25.",
      "B": "Opsi B benar karena assign string ke variabel bertipe number ditolak oleh compiler.",
      "C": "Opsi C salah karena let adalah deklarasi variabel modern yang tepat.",
      "D": "Opsi D salah karena literal angka tidak perlu tanda kurung."
    },
    "jobId": "fullstack",
    "code": "let age: number = 25;\nage = \"25\";"
  },
  {
    "id": "FB-008",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi kode berikut agar interface User memiliki properti 'email' yang bersifat opsional (tidak wajib diisi):\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  ___\n}\n```",
    "options": {
      "A": "email?: string;",
      "B": "email!: string;",
      "C": "optional email: string;",
      "D": "email: string | void;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tanda tanya (?) setelah nama properti pada interface atau type menandakan bahwa properti tersebut bersifat optional (bisa bernilai string atau undefined).",
      "A": "Opsi A benar karena '?' adalah sintaks resmi untuk optional property.",
      "B": "Opsi B salah karena '!' adalah definite assignment assertion operator.",
      "C": "Opsi C salah karena 'optional' bukan keyword di TypeScript.",
      "D": "Opsi D salah karena void tidak tepat digunakan untuk properti objek."
    },
    "jobId": "fullstack",
    "code": "interface User {\n  id: number;\n  name: string;\n  ___\n}"
  },
  {
    "id": "FB-009",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Keyword apakah di TypeScript yang membuat properti sebuah objek tidak dapat diubah (immutable) setelah diinisialisasi?",
    "options": {
      "A": "const",
      "B": "readonly",
      "C": "final",
      "D": "immutable"
    },
    "answer": "B",
    "explanation": {
      "correct": "Modifier 'readonly' pada interface/class menandakan bahwa properti tersebut hanya dapat diberi nilai saat pembuatan objek dan tidak dapat diubah setelahnya.",
      "A": "Opsi A salah karena const digunakan untuk deklarasi variabel, bukan modifier properti interface/type.",
      "B": "Opsi B benar karena readonly adalah modifier properti resmi di TypeScript.",
      "C": "Opsi C salah karena final adalah keyword Java/PHP, bukan TypeScript.",
      "D": "Opsi D salah karena immutable bukan modifier bawaan TypeScript."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-010",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa output dari eksekusi fungsi generic berikut?\n\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}\nconst result = identity<string>(\"TypeScript\");\nconsole.log(result);\n```",
    "options": {
      "A": "\"TypeScript\"",
      "B": "10",
      "C": "undefined",
      "D": "null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi generic identity<T> menerima argumen bertipe T dan mengembalikan argumen tersebut tanpa modifikasi. Pemanggilan dengan string 'TypeScript' mengembalikan nilai 'TypeScript'.",
      "A": "Opsi A benar karena argumen dikembalikan apa adanya.",
      "B": "Opsi B salah karena nilai 10 tidak dipassing ke fungsi.",
      "C": "Opsi C salah karena fungsi mengembalikan nilai argumen, bukan undefined.",
      "D": "Opsi D salah karena bukan null."
    },
    "jobId": "fullstack",
    "code": "function identity<T>(arg: T): T {\n  return arg;\n}\nconst result = identity<string>(\"TypeScript\");\nconsole.log(result);"
  },
  {
    "id": "FB-011",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa sebutan untuk tipe data di TypeScript yang menyatakan bahwa suatu nilai bisa berupa salah satu dari beberapa tipe, misalnya `string | number`?",
    "options": {
      "A": "Intersection Type",
      "B": "Union Type",
      "C": "Tuple Type",
      "D": "Enum Type"
    },
    "answer": "B",
    "explanation": {
      "correct": "Union Type menggunakan operator pipe (|) untuk memungkinkan suatu nilai memiliki salah satu dari tipe yang didefinisikan.",
      "A": "Opsi A salah karena Intersection menggunakan operator '&' untuk menggabungkan beberapa tipe.",
      "B": "Opsi B benar karena Union Type mendefinisikan alternatif tipe nilai.",
      "C": "Opsi C salah karena Tuple adalah array dengan tipe dan jumlah elemen tetap.",
      "D": "Opsi D salah karena Enum adalah kumpulan konstanta bernomor atau bernama."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-012",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Kode berikut memunculkan error: 'Object is possibly null'. Bagaimana cara memperbaiki baris pemanggilan toUpperCase() secara aman menggunakan Optional Chaining?\n\n```typescript\nfunction printUpper(input: string | null) {\n  console.log(input.toUpperCase());\n}\n```",
    "options": {
      "A": "input!.toUpperCase()",
      "B": "input?.toUpperCase()",
      "C": "input??.toUpperCase()",
      "D": "input:toUpperCase()"
    },
    "answer": "B",
    "explanation": {
      "correct": "Optional Chaining (?.) mengevaluasi apakah operand sebelum '?.' bernilai null atau undefined. Jika ya, evaluasi berhenti dan menghasilkan undefined tanpa melempar runtime error.",
      "A": "Opsi A salah karena '!' (non-null assertion) memaksa compiler mengabaikan null tetapi bisa melempar runtime error jika nilainya ternyata null.",
      "B": "Opsi B benar karena '?.' adalah operator Optional Chaining yang aman.",
      "C": "Opsi C salah karena '?.' bukan '??.'.",
      "D": "Opsi D salah karena sintaksis tidak valid."
    },
    "jobId": "fullstack",
    "code": "function printUpper(input: string | null) {\n  console.log(input.toUpperCase());\n}"
  },
  {
    "id": "FB-013",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe kembalian fungsi berikut agar fungsi menyatakan bahwa ia tidak pernah mengembalikan nilai (karena selalu melempar Exception):\n\n```typescript\nfunction throwError(msg: string): ___ {\n  throw new Error(msg);\n}\n```",
    "options": {
      "A": "void",
      "B": "null",
      "C": "never",
      "D": "any"
    },
    "answer": "C",
    "explanation": {
      "correct": "Tipe 'never' digunakan untuk fungsi yang tidak pernah mencapai titik akhir (unreachable end point), seperti fungsi yang selalu melempar error atau perulangan tak berhingga.",
      "A": "Opsi A salah karena void berarti fungsi selesai dieksekusi normal namun tidak me-return nilai apa-apa.",
      "B": "Opsi B salah karena null adalah nilai primitif.",
      "C": "Opsi C benar karena fungsi throwError tidak pernah mengembalikan kontrol secara normal.",
      "D": "Opsi D salah karena any mengizinkan sembarang nilai."
    },
    "jobId": "fullstack",
    "code": "function throwError(msg: string): ___ {\n  throw new Error(msg);\n}"
  },
  {
    "id": "FB-014",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Manakah sintaks yang benar untuk mendefinisikan Tuple yang berisi pasangan string (nama) dan number (usia)?",
    "options": {
      "A": "let user: [string, number];",
      "B": "let user: (string, number);",
      "C": "let user: string & number;",
      "D": "let user: Array<string, number>;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tuple di TypeScript didefinisikan menggunakan tanda kurung siku `[Type1, Type2]` dengan urutan dan tipe yang presisi.",
      "A": "Opsi A benar karena sintaks kurung siku `[string, number]` adalah penulisan tuple resmi.",
      "B": "Opsi B salah karena tanda kurung lengkung bukan sintaks tuple.",
      "C": "Opsi C salah karena '&' adalah intersection type.",
      "D": "Opsi D salah karena Array generic hanya menerima satu parameter tipe."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-015",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa output dari kode TypeScript berikut yang menggunakan Numeric Enum?\n\n```typescript\nenum Status {\n  PENDING,\n  ACTIVE,\n  INACTIVE\n}\nconsole.log(Status.PENDING);\n```",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "\"PENDING\""
    },
    "answer": "A",
    "explanation": {
      "correct": "Numeric Enum di TypeScript secara default mulai dari indeks 0 jika nilai awalnya tidak ditentukan secara eksplisit. Maka Status.PENDING bernilai 0.",
      "A": "Opsi A benar karena nilai enum pertama default adalah 0.",
      "B": "Opsi B salah karena nilai 1 adalah milik Status.ACTIVE.",
      "C": "Opsi C salah karena nilai 2 adalah milik Status.INACTIVE.",
      "D": "Opsi D salah karena enum numerik mengembalikan nilai angka, bukan string."
    },
    "jobId": "fullstack",
    "code": "enum Status {\n  PENDING,\n  ACTIVE,\n  INACTIVE\n}\nconsole.log(Status.PENDING);"
  },
  {
    "id": "FB-016",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "best-practice",
    "question": "Kapan sebaiknya Anda menggunakan 'unknown' dibandingkan 'any' saat menerima data eksternal dari API pihak ketiga?\n\n```typescript\n// Pendekatan A: any\nfunction parseData(input: any) {\n  return input.toUpperCase();\n}\n\n// Pendekatan B: unknown (Recommended)\nfunction parseDataSafe(input: unknown) {\n  if (typeof input === 'string') {\n    return input.toUpperCase();\n  }\n  return '';\n}\n```",
    "options": {
      "A": "Ketika kita ingin mematikan semua type safety demi kecepatan koding",
      "B": "Ketika kita belum mengetahui struktur pasti respon API namun ingin memastikan kode tetap aman dengan mewajibkan validasi/type narrowing sebelum digunakan",
      "C": "Ketika respon API dijamin selalu bernilai boolean",
      "D": "'unknown' tidak pernah direkomendasikan di TypeScript modern"
    },
    "answer": "B",
    "explanation": {
      "correct": "Best practice di TypeScript adalah menghindari 'any' untuk data eksternal yang belum divalidasi. Menggunakan 'unknown' memaksa developer melakukan type guard atau validasi runtime (misalnya Zod atau typeof) sebelum mengakses properti data.",
      "A": "Opsi A salah karena mematikan type safety adalah anti-pattern.",
      "B": "Opsi B benar karena unknown mendorong penulisan kode yang aman dan defensif.",
      "C": "Opsi C salah karena jika sudah tahu boolean, gunakan tipe boolean.",
      "D": "Opsi D salah karena unknown justru fitur keamanan unggulan TypeScript."
    },
    "jobId": "fullstack",
    "code": "// Pendekatan A: any\nfunction parseData(input: any) {\n  return input.toUpperCase();\n}\n\n// Pendekatan B: unknown (Recommended)\nfunction parseDataSafe(input: unknown) {\n  if (typeof input === 'string') {\n    return input.toUpperCase();\n  }\n  return '';\n}"
  },
  {
    "id": "FB-017",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi kode generic function berikut agar parameter dan return type memiliki tipe data yang sama:\n\n```typescript\nfunction wrap<___> {\n  return item;\n}\n```",
    "options": {
      "A": "<T>(item: T): T",
      "B": "(item: any): any",
      "C": "<T>(item: any): T",
      "D": "<T>(item: T): void"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi generic menggunakan `<T>` untuk menangkap tipe yang dipassing pemanggil dan menggunakannya pada parameter `item: T` serta return type `: T`.",
      "A": "Opsi A benar karena sintaksis generic lengkap dan konsisten.",
      "B": "Opsi B salah karena menggunakan any menghilangkan keamanan tipe generic.",
      "C": "Opsi C salah karena parameter any tidak menjamin konsistensi tipe dengan return T.",
      "D": "Opsi D salah karena return type void tidak mengembalikan nilai item."
    },
    "jobId": "fullstack",
    "code": "function wrap<___> {\n  return item;\n}"
  },
  {
    "id": "FB-018",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apakah perbedaan utama antara 'interface' dan 'type alias' dalam hal deklarasi primitif di TypeScript?",
    "options": {
      "A": "Interface dapat mendefinisikan alias tipe primitif seperti `interface MyStr = string`, sedangkan type tidak",
      "B": "Type alias dapat mendefinisikan alias tipe primitif (`type MyStr = string`), sedangkan interface hanya dapat mendefinisikan bentuk objek/fungsi",
      "C": "Interface dan type sama-sama bisa membuat alias tipe primitif",
      "D": "Tidak ada yang bisa membuat alias tipe primitif"
    },
    "answer": "B",
    "explanation": {
      "correct": "Type alias dapat digunakan untuk memberi nama pada tipe primitif, union, atau tuple (contoh: `type ID = string | number`). Interface khusus dirancang untuk mendefinisikan kontrak bentuk objek (shape) atau fungsi.",
      "A": "Opsi A salah karena interface tidak bisa digunakan untuk primitif alias.",
      "B": "Opsi B benar karena type alias lebih fleksibel untuk primitif dan union.",
      "C": "Opsi C salah karena interface tidak mendukung alias tipe primitif tunggal.",
      "D": "Opsi D salah karena type alias mendukung hal ini."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-019",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "best-practice",
    "question": "Manakah implementasi type guard buatan (custom type guard) yang benar untuk memeriksa apakah sebuah objek adalah User?\n\n```typescript\n// A: Type Predicate\nfunction isUser(obj: any): obj is User {\n  return obj && typeof obj.name === 'string';\n}\n\n// B: Boolean Biasa\nfunction isUser(obj: any): boolean {\n  return obj.isUser == true;\n}\n```",
    "options": {
      "A": "function isUser(obj: any): obj is User { return obj && typeof obj.name === 'string'; }",
      "B": "function isUser(obj: any): boolean { return obj.isUser == true; }",
      "C": "function isUser(obj: any): User { return obj as User; }",
      "D": "function isUser(obj: any): void { if (!obj) throw new Error(); }"
    },
    "answer": "A",
    "explanation": {
      "correct": "Custom type guard menggunakan predicate `parameterName is Type` sebagai return type fungsi, mengembalikan boolean yang jika true akan mempersempit (narrow) tipe data pada blok kode berikutnya.",
      "A": "Opsi A benar karena menggunakan type predicate `obj is User` dengan pengecekan properti runtime.",
      "B": "Opsi B salah karena return boolean biasa tidak memicu type narrowing otomatis pada TypeScript.",
      "C": "Opsi C salah karena type assertion bukan type guard.",
      "D": "Opsi D salah karena assertion void bukan predicate function."
    },
    "jobId": "fullstack",
    "code": "// A: Type Predicate\nfunction isUser(obj: any): obj is User {\n  return obj && typeof obj.name === 'string';\n}\n\n// B: Boolean Biasa\nfunction isUser(obj: any): boolean {\n  return obj.isUser == true;\n}"
  },
  {
    "id": "FB-020",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi dari operator 'as' pada TypeScript (contoh: `const el = document.getElementById('app') as HTMLDivElement;`)?",
    "options": {
      "A": "Melakukan konversi nilai dan alokasi memori objek secara runtime",
      "B": "Memberitahu compiler untuk menganggap variabel sebagai tipe tertentu (Type Assertion) tanpa modifikasi runtime",
      "C": "Menghapus variabel dari memori browser",
      "D": "Membuat subclass baru dari tipe target"
    },
    "answer": "B",
    "explanation": {
      "correct": "Type Assertion (`as Type`) adalah petunjuk murni saat kompilasi kepada compiler TypeScript bahwa programmer mengetahui tipe objek secara lebih spesifik. Tidak ada kode JavaScript atau konversi objek yang dijalankan saat runtime.",
      "A": "Opsi A salah karena Type Assertion di TypeScript murni instruksi compile-time tanpa runtime conversion.",
      "B": "Opsi B benar sesuai definisi resmi Type Assertion.",
      "C": "Opsi C salah karena tidak berhubungan dengan pembersihan memori.",
      "D": "Opsi D salah karena bukan inheritance class."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-021",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa nilai dari `Colors['RED']` dan `Colors[0]` pada String Enum berikut?\n\n```typescript\nenum Colors {\n  RED = \"#FF0000\",\n  BLUE = \"#0000FF\"\n}\nconsole.log(Colors['RED']);\nconsole.log((Colors as any)[0]);\n```",
    "options": {
      "A": "\"#FF0000\" dan undefined",
      "B": "\"#FF0000\" dan \"RED\"",
      "C": "0 dan \"RED\"",
      "D": "Compile error"
    },
    "answer": "A",
    "explanation": {
      "correct": "String Enum di TypeScript TIDAK memiliki fitur reverse mapping (pemetaan balik angka ke nama). Hanya Numeric Enum yang memiliki reverse mapping otomatis. Maka `Colors['RED']` bernilai `'#FF0000'`, sedangkan reverse lookup numerik `Colors[0]` bernilai undefined.",
      "A": "Opsi A benar karena string enum tidak mendukung reverse mapping numerik.",
      "B": "Opsi B salah karena reverse mapping hanya ada pada numeric enum.",
      "C": "Opsi C salah karena enum bernilai string, bukan 0.",
      "D": "Opsi D salah karena kode valid dikompilasi."
    },
    "jobId": "fullstack",
    "code": "enum Colors {\n  RED = \"#FF0000\",\n  BLUE = \"#0000FF\"\n}\nconsole.log(Colors['RED']);\nconsole.log((Colors as any)[0]);"
  },
  {
    "id": "FB-022",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Kode berikut menghasilkan error: 'Cannot assign to id because it is a read-only property'. Bagian mana yang harus diperbaiki jika kita ingin objek User tidak boleh diubah propertinya?\n\n```typescript\ninterface User {\n  readonly id: number;\n  name: string;\n}\nconst user: User = { id: 1, name: 'Alice' };\nuser.id = 2;\n```",
    "options": {
      "A": "Hapus kata kunci readonly pada interface",
      "B": "Jangan melakukan mutasi `user.id = 2;` karena id memang dirancang tidak boleh diubah setelah inisialisasi",
      "C": "Ganti const dengan let pada deklarasi user",
      "D": "Ganti interface dengan class"
    },
    "answer": "B",
    "explanation": {
      "correct": "Jika tujuan bisnis memang memproteksi id agar tidak berubah (immutability), maka tindakan melakukan assignment nilai baru pada properti readonly adalah kesalahan logika pemanggil.",
      "A": "Opsi A salah karena menghapus readonly akan menghilangkan proteksi integritas data.",
      "B": "Opsi B benar karena pemanggil tidak boleh mengubah properti readonly.",
      "C": "Opsi C salah karena const hanya membatasi referensi variabel, bukan properti di dalamnya.",
      "D": "Opsi D salah karena class juga mendukung modifier readonly."
    },
    "jobId": "fullstack",
    "code": "interface User {\n  readonly id: number;\n  name: string;\n}\nconst user: User = { id: 1, name: 'Alice' };\nuser.id = 2;"
  },
  {
    "id": "FB-023",
    "level": "beginner",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa kegunaan dari Non-null Assertion Operator (tanda seru `!`) di TypeScript?",
    "options": {
      "A": "Melakukan negasi nilai boolean seperti pada operator NOT",
      "B": "Menegaskan kepada compiler bahwa suatu ekspresi pasti bukan null atau undefined, menghilangkan warning compiler",
      "C": "Melemparkan exception jika nilai bernilai falsy secara otomatis",
      "D": "Mengubah tipe data menjadi boolean"
    },
    "answer": "B",
    "explanation": {
      "correct": "Postfix `!` adalah Non-null Assertion Operator di TypeScript yang memberitahu compiler: 'Saya menjamin nilai ini tidak null/undefined pada titik ini'.",
      "A": "Opsi A salah karena postfix `!` berbeda dengan prefix `!` (operator NOT).",
      "B": "Opsi B benar karena postfix `!` menghilangkan null dan undefined dari tipe variabel.",
      "C": "Opsi C salah karena tidak ada runtime check atau auto exception yang dihasilkan.",
      "D": "Opsi D salah karena tidak mengubah nilai menjadi boolean."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-024",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Mengapa file komponen React yang menggunakan TypeScript dan sintaks JSX harus menggunakan ekstensi `.tsx` dan bukan `.ts`?",
    "options": {
      "A": "Agar browser dapat mengeksekusi file secara langsung tanpa transpiler",
      "B": "Agar compiler TypeScript dapat membedakan sintaks JSX (seperti `<Component />`) dari operator generic TypeScript (seperti `<T>`)",
      "C": "Ekstensi `.ts` hanya diperuntukkan untuk library pihak ketiga di node_modules",
      "D": "Tidak ada perbedaan, keduanya dapat dipertukarkan tanpa konfigurasi apapun"
    },
    "answer": "B",
    "explanation": {
      "correct": "Di dalam file `.ts`, sintaks pembuka kurung siku lancip `<T>` diartikan sebagai generic type assertion. Dengan ekstensi `.tsx`, TypeScript mengaktifkan parser JSX untuk membedakan elemen markup dari generics.",
      "A": "Opsi A salah karena browser tidak bisa menjalankan JSX/TSX secara langsung tanpa kompilasi/bundling.",
      "B": "Opsi B benar karena ekstensi `.tsx` mengaktifkan parser JSX khusus tanpa konflik dengan generic assertions.",
      "C": "Opsi C salah karena `.ts` digunakan untuk semua file TypeScript umum non-JSX.",
      "D": "Opsi D salah karena menggunakan JSX di file `.ts` akan menghasilkan syntax compile error."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-025",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic pada hook useState berikut agar state dapat menampung objek User atau bernilai null saat inisialisasi:\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n}\n\nconst [user, setUser] = useState<___>(null);\n```",
    "options": {
      "A": "useState<User | null>(null)",
      "B": "useState<User & null>(null)",
      "C": "useState<User?>(null)",
      "D": "useState<Optional<User>>(null)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Untuk menginisialisasi state dengan nilai null namun dapat diisi objek tipe User nantinya, kita menggunakan union type `User | null` pada parameter generic `useState<T>`.",
      "A": "Opsi A benar karena `useState<User | null>(null)` secara eksplisit mendefinisikan tipe state union.",
      "B": "Opsi B salah karena intersection `User & null` tidak masuk akal (tidak ada objek yang sekaligus null).",
      "C": "Opsi C salah karena sintaks `User?` tidak valid sebagai argumen tipe generic.",
      "D": "Opsi D salah karena Optional adalah konsep Java, bukan generic bawaan TypeScript."
    },
    "jobId": "fullstack",
    "code": "interface User {\n  id: number;\n  name: string;\n}\n\nconst [user, setUser] = useState<___>(null);"
  },
  {
    "id": "FB-026",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Berapa kali komponen Counter akan melakukan render saat tombol diklik sekali pada kode React berikut?\n\n```typescript\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => {\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1);\n  };\n  return <button onClick={handleClick}>{count}</button>;\n}\n```",
    "options": {
      "A": "1 kali",
      "B": "2 kali",
      "C": "3 kali",
      "D": "0 kali"
    },
    "answer": "A",
    "explanation": {
      "correct": "React 18 memiliki fitur Automatic Batching. Pemanggilan multiple setState (`setCount`) di dalam satu event handler akan digabungkan secara otomatis menjadi satu kali render tunggal demi efisiensi performa.",
      "A": "Opsi A benar karena React 18 melakukan automatic batching state updates menjadi satu render.",
      "B": "Opsi B salah karena pembaruan tidak memicu render terpisah per pemanggilan.",
      "C": "Opsi C salah karena tidak ada 3 kali render.",
      "D": "Opsi D salah karena state berubah sehingga render pasti terjadi."
    },
    "jobId": "fullstack",
    "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => {\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1);\n  };\n  return <button onClick={handleClick}>{count}</button>;\n}"
  },
  {
    "id": "FB-027",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Kode komponen list berikut memunculkan peringatan di console browser: 'Each child in a list should have a unique \"key\" prop'. Di manakah prop 'key' seharusnya diletakkan?\n\n```typescript\nfunction UserList({ users }: { users: { id: number; name: string }[] }) {\n  return (\n    <ul>\n      {users.map(user => (\n        <li><span>{user.name}</span></li>\n      ))}\n    </ul>\n  );\n}\n```",
    "options": {
      "A": "Pada elemen <ul>",
      "B": "Pada elemen <li> terluar di dalam fungsi map()",
      "C": "Di dalam tag <span>",
      "D": "Di dalam parameter map()"
    },
    "answer": "B",
    "explanation": {
      "correct": "React memerlukan prop 'key' yang unik dan stabil pada elemen terluar yang di-return secara langsung oleh callback fungsi `.map()` agar algoritma rekonsiliasi (Virtual DOM diffing) dapat melacak item yang ditambah, dihapus, atau diubah.",
      "A": "Opsi A salah karena key harus pada masing-masing item berulang, bukan container induk <ul>.",
      "B": "Opsi B benar karena <li> adalah elemen terluar di dalam map callback.",
      "C": "Opsi C salah karena span adalah child di dalam li.",
      "D": "Opsi D salah karena parameter map adalah variabel JavaScript biasa."
    },
    "jobId": "fullstack",
    "code": "function UserList({ users }: { users: { id: number; name: string }[] }) {\n  return (\n    <ul>\n      {users.map(user => (\n        <li><span>{user.name}</span></li>\n      ))}\n    </ul>\n  );\n}"
  },
  {
    "id": "FB-028",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe event handler pada parameter fungsi handleChange input form teks berikut:\n\n```typescript\nconst handleChange = (e: ___) => {\n  console.log(e.target.value);\n};\n\nreturn <input type=\"text\" onChange={handleChange} />;\n```",
    "options": {
      "A": "React.MouseEvent<HTMLInputElement>",
      "B": "React.ChangeEvent<HTMLInputElement>",
      "C": "React.FormEvent<HTMLFormElement>",
      "D": "React.KeyboardEvent"
    },
    "answer": "B",
    "explanation": {
      "correct": "Di React dengan TypeScript, event onChange pada elemen `<input>` diketik sebagai `React.ChangeEvent<HTMLInputElement>`, yang menyediakan properti `e.target.value` dengan tipe string.",
      "A": "Opsi A salah karena MouseEvent untuk event klik/mouse.",
      "B": "Opsi B benar karena ChangeEvent<HTMLInputElement> adalah tipe event resmi untuk input change.",
      "C": "Opsi C salah karena FormEvent<HTMLFormElement> umumnya digunakan untuk onSubmit form.",
      "D": "Opsi D salah karena KeyboardEvent untuk onKeyDown/onKeyUp."
    },
    "jobId": "fullstack",
    "code": "const handleChange = (e: ___) => {\n  console.log(e.target.value);\n};\n\nreturn <input type=\"text\" onChange={handleChange} />;"
  },
  {
    "id": "FB-029",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut tidak memperbarui tampilan layar saat tombol diklik meskipun data array bertambah. Mengapa?\n\n```typescript\nfunction TodoApp() {\n  const [items, setItems] = useState<string[]>([]);\n  const addItem = () => {\n    items.push('Item Baru');\n    setItems(items);\n  };\n  return <button onClick={addItem}>Tambah</button>;\n}\n```",
    "options": {
      "A": "Array items dimutasi langsung (`items.push`) sehingga referensi memori tidak berubah dan React menganggap state tidak berubah",
      "B": "Fungsi setItems harus dipanggil dua kali",
      "C": "Button tidak memiliki atribut type='button'",
      "D": "useState tidak mendukung tipe data array"
    },
    "answer": "A",
    "explanation": {
      "correct": "React membandingkan state lama dan state baru menggunakan Object.is (shallow reference comparison). Memanggil `items.push(newItem)` mengubah isi array di tempat tanpa mengubah referensi memori array, sehingga React mendeteksi referensi sama dan tidak melakukan re-render. Solusinya: `setItems([...items, newItem])`.",
      "A": "Opsi A benar karena mutasi state langsung melanggar prinsip immutability React.",
      "B": "Opsi B salah karena satu pemanggilan setter sudah cukup jika referensinya baru.",
      "C": "Opsi C salah karena atribut type tidak memengaruhi re-render state.",
      "D": "Opsi D salah karena useState sepenuhnya mendukung tipe array."
    },
    "jobId": "fullstack",
    "code": "function TodoApp() {\n  const [items, setItems] = useState<string[]>([]);\n  const addItem = () => {\n    items.push('Item Baru');\n    setItems(items);\n  };\n  return <button onClick={addItem}>Tambah</button>;\n}"
  },
  {
    "id": "FB-030",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Manakah dari tipe berikut yang paling tepat digunakan di TypeScript untuk merepresentasikan prop 'children' yang dapat menerima teks, angka, elemen JSX, fragment, atau null di React?",
    "options": {
      "A": "JSX.Element",
      "B": "React.ReactNode",
      "C": "React.ReactElement",
      "D": "string | number"
    },
    "answer": "B",
    "explanation": {
      "correct": "`React.ReactNode` adalah tipe yang paling komprehensif untuk children komponen React, mencakup JSX.Element, string, number, array of nodes, fragment, boolean, null, atau undefined.",
      "A": "Opsi A salah karena JSX.Element hanya menerima satu elemen JSX tunggal dan menolak string atau null secara langsung.",
      "B": "Opsi B benar karena React.ReactNode adalah tipe standar prop children di ekosistem React.",
      "C": "Opsi C salah karena ReactElement lebih ketat daripada ReactNode.",
      "D": "Opsi D salah karena tidak mencakup elemen JSX dan fragment."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-031",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa output tampilan di layar browser dari kode komponen React berikut?\n\n```typescript\nfunction Greeting() {\n  const isLoggedIn: boolean = false;\n  return (\n    <div>\n      {isLoggedIn ? <h1>Selamat Datang, Budi!</h1> : <p>Silakan Login Terlebih Dahulu</p>}\n    </div>\n  );\n}\n```",
    "options": {
      "A": "\"Selamat Datang, Budi!\"",
      "B": "\"Silakan Login Terlebih Dahulu\"",
      "C": "\"\"",
      "D": "Error runtime"
    },
    "answer": "B",
    "explanation": {
      "correct": "Kondisi `isLoggedIn ? ... : ...` melakukan conditional rendering. Karena isLoggedIn bernilai false, ekspresi ternary mengevaluasi cabang kedua yaitu teks 'Silakan Login Terlebih Dahulu'.",
      "A": "Opsi A salah karena kondisi isLoggedIn bernilai false.",
      "B": "Opsi B benar karena ternary branch false yang dirender.",
      "C": "Opsi C salah karena ada teks yang ditampilkan.",
      "D": "Opsi D salah karena kode valid tanpa error."
    },
    "jobId": "fullstack",
    "code": "function Greeting() {\n  const isLoggedIn: boolean = false;\n  return (\n    <div>\n      {isLoggedIn ? <h1>Selamat Datang, Budi!</h1> : <p>Silakan Login Terlebih Dahulu</p>}\n    </div>\n  );\n}"
  },
  {
    "id": "FB-032",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Bagaimana cara terbaik mendefinisikan tipe props komponen di React dengan TypeScript?\n\n```typescript\n// Definisi Props Bersih\ninterface CardProps {\n  title: string;\n  count?: number;\n  onSelect: (id: string) => void;\n}\n\nexport const Card: React.FC<CardProps> = ({ title, count = 0, onSelect }) => {\n  return <div>{title} ({count})</div>;\n};\n```",
    "options": {
      "A": "Menggunakan any untuk props agar komponen mudah diisi data apa saja",
      "B": "Mendefinisikan interface atau type alias eksplisit untuk props dan melakukan destructuring dengan type annotation",
      "C": "Menuliskan tipe data langsung di dalam atribut JSX pemanggil tanpa interface",
      "D": "Tidak perlu memberi tipe pada props karena TypeScript sudah tahu otomatis"
    },
    "answer": "B",
    "explanation": {
      "correct": "Best practice adalah membuat interface props khusus (misal `interface CardProps { title: string; isActive?: boolean }`) sehingga komponen memiliki kontrak yang jelas, autocompletion yang baik di IDE, dan type safety saat pemanggilan.",
      "A": "Opsi A salah karena menggunakan any menghilangkan manfaat utama TypeScript.",
      "B": "Opsi B benar karena interface props eksplisit memastikan type safety dan dokumentasi kode yang bersih.",
      "C": "Opsi C salah karena komponen deklaratif membutuhkan definisi kontrak props sendiri.",
      "D": "Opsi D salah karena parameter komponen tanpa tipe akan dianggap bertipe any (jika noImplicitAny tidak aktif) atau melempar error."
    },
    "jobId": "fullstack",
    "code": "// Definisi Props Bersih\ninterface CardProps {\n  title: string;\n  count?: number;\n  onSelect: (id: string) => void;\n}\n\nexport const Card: React.FC<CardProps> = ({ title, count = 0, onSelect }) => {\n  return <div>{title} ({count})</div>;\n};"
  },
  {
    "id": "FB-033",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi hook useEffect berikut agar fungsi callback HANYA dijalankan satu kali saja saat komponen pertama kali di-mount (mirip componentDidMount):\n\n```typescript\nuseEffect(() => {\n  fetchData();\n}, ___);\n```",
    "options": {
      "A": "[]",
      "B": "[null]",
      "C": "[true]",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dependency array kosong `[]` memberi tahu React bahwa efek tersebut tidak bergantung pada state atau props apapun, sehingga efek hanya dijalankan sekali setelah mount awal dan cleanup-nya dijalankan saat unmount.",
      "A": "Opsi A benar karena array kosong `[]` adalah cara resmi untuk menjalankan effect hanya saat mount.",
      "B": "Opsi B salah karena [null] akan mengecek nilai null.",
      "C": "Opsi C salah karena [true] tidak lazim.",
      "D": "Opsi D salah karena tanpa dependency array (undefined), efek akan dijalankan setiap kali re-render terjadi."
    },
    "jobId": "fullstack",
    "code": "useEffect(() => {\n  fetchData();\n}, ___);"
  },
  {
    "id": "FB-034",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Jika tombol diklik pada komponen berikut, berapa nilai count yang ditampilkan di layar?\n\n```typescript\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const handleIncrement = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  return <button onClick={handleIncrement}>{count}</button>;\n}\n```",
    "options": {
      "A": "1",
      "B": "3",
      "C": "0",
      "D": "NaN"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena setCount dipanggil dengan passing nilai langsung `count + 1` (bukan callback updater `prev => prev + 1`), ketiga baris tersebut membaca snapshot nilai `count` yang sama (yaitu 0) pada render saat itu. 0 + 1 = 1, sehingga nilai akhir adalah 1.",
      "A": "Opsi A benar karena state update tidak menggunakan updater function sehingga semua membaca snapshot 0.",
      "B": "Opsi B salah karena untuk mendapatkan 3 harus menggunakan `prev => prev + 1`.",
      "C": "Opsi C salah karena state tetap diperbarui dari 0 menjadi 1.",
      "D": "Opsi D salah karena operasi penambahan angka valid."
    },
    "jobId": "fullstack",
    "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  const handleIncrement = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  return <button onClick={handleIncrement}>{count}</button>;\n}"
  },
  {
    "id": "FB-035",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi dari tag kosong Fragment `<> ... </>` di React?",
    "options": {
      "A": "Membuat elemen div baru di struktur DOM HTML",
      "B": "Mengelompokkan daftar children tanpa menambahkan node pembungkus tambahan ke dalam DOM asli browser",
      "C": "Mempercepat koneksi jaringan internet aplikasi",
      "D": "Mencegah komponen dari rendering ulang"
    },
    "answer": "B",
    "explanation": {
      "correct": "React mensyaratkan komponen mengembalikan satu elemen root tunggal. Fragment (`<React.Fragment>` atau sintaks singkat `<>...</>`) memungkinkan pengelompokan elemen tanpa mencemari struktur DOM dengan div wrapper yang tidak diperlukan.",
      "A": "Opsi A salah karena Fragment justru TIDAK merender elemen pembungkus apapun ke DOM.",
      "B": "Opsi B benar karena itulah tujuan utama dari React Fragment.",
      "C": "Opsi C salah karena tidak berhubungan dengan jaringan.",
      "D": "Opsi D salah karena bukan mekanisme memoization."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-036",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut mengalami error infinite loop saat di-render. Mengapa?\n\n```typescript\nfunction BadComponent() {\n  const [count, setCount] = useState(0);\n  setCount(count + 1);\n  return <div>{count}</div>;\n}\n```",
    "options": {
      "A": "Fungsi setCount dipanggil langsung di dalam body fungsi komponen saat proses render, memicu re-render tanpa henti",
      "B": "useState tidak boleh diinisialisasi dengan angka 0",
      "C": "Komponen tidak mengembalikan elemen button",
      "D": "Variabel count bertipe konstanta"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memanggil function pembaru state (`setCount`) secara langsung di dalam body komponen (bukan di dalam event handler atau useEffect) akan langsung memicu render ulang seketika, menyebabkan siklus render tak terbatas (Too many re-renders).",
      "A": "Opsi A benar karena pemanggilan setter di render phase memicu infinite re-render loop.",
      "B": "Opsi B salah karena angka 0 adalah nilai awal yang valid.",
      "C": "Opsi C salah karena komponen boleh mengembalikan div.",
      "D": "Opsi D salah karena const count menampung nilai primitif dari array destructuring yang valid."
    },
    "jobId": "fullstack",
    "code": "function BadComponent() {\n  const [count, setCount] = useState(0);\n  setCount(count + 1);\n  return <div>{count}</div>;\n}"
  },
  {
    "id": "FB-037",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan 'Lifting State Up' di arsitektur React?",
    "options": {
      "A": "Menyimpan seluruh state aplikasi di localStorage browser",
      "B": "Memindahkan state ke komponen leluhur bersama (common ancestor) terdekat agar beberapa komponen anak dapat berbagi data yang sama",
      "C": "Mengubah functional component menjadi class component",
      "D": "Menaikkan prioritas rendering komponen ke GPU"
    },
    "answer": "B",
    "explanation": {
      "correct": "Ketika dua atau lebih komponen bersaudara membutuhkan akses atau sinkronisasi terhadap state yang sama, best practice di React adalah 'mengangkat' state tersebut ke parent terdekat mereka.",
      "A": "Opsi A salah karena penyimpanan lokal bukan konsep lifting state.",
      "B": "Opsi B benar karena merefleksikan definisi resmi Lifting State Up di dokumentasi React.",
      "C": "Opsi C salah karena functional component adalah standar modern.",
      "D": "Opsi D salah karena tidak terkait GPU."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-038",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic useRef berikut agar dapat digunakan untuk mereferensikan elemen input HTML:\n\n```typescript\nconst inputRef = useRef<___>(null);\n\nconst focusInput = () => {\n  inputRef.current?.focus();\n};\n```",
    "options": {
      "A": "useRef<HTMLInputElement>(null)",
      "B": "useRef<HTMLDivElement>(null)",
      "C": "useRef<InputComponent>(null)",
      "D": "useRef<Element>(null)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Elemen `<input />` di DOM browser direpresentasikan oleh antarmuka tipe `HTMLInputElement` di TypeScript DOM library. Maka deklarasi ref yang tepat adalah `useRef<HTMLInputElement>(null)`.",
      "A": "Opsi A benar karena HTMLInputElement adalah interface spesifik untuk elemen input.",
      "B": "Opsi B salah karena HTMLDivElement untuk elemen <div>.",
      "C": "Opsi C salah karena InputComponent bukan interface bawaan DOM.",
      "D": "Opsi D salah karena Element terlalu umum sehingga properti seperti `.value` atau `.focus()` tidak terdefinisi secara spesifik."
    },
    "jobId": "fullstack",
    "code": "const inputRef = useRef<___>(null);\n\nconst focusInput = () => {\n  inputRef.current?.focus();\n};"
  },
  {
    "id": "FB-039",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Manakah cara yang paling tepat dan aman untuk memperbarui state array di React saat menambahkan item baru?\n\n```typescript\n// A (Immutability)\nsetList([...list, newItem]);\n\n// B (Direct Mutation - BAD)\nlist.push(newItem);\nsetList(list);\n```",
    "options": {
      "A": "setList([...list, newItem])",
      "B": "list.push(newItem); setList(list);",
      "C": "list[list.length] = newItem; setList(list);",
      "D": "setList(list.concat())"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menggunakan spread operator `[...list, newItem]` membuat salinan array baru (shallow copy) yang menyertakan item baru tanpa memutasi array asli, memenuhi prinsip immutability React.",
      "A": "Opsi A benar karena menggunakan array spread menghasilkan referensi baru yang immutable.",
      "B": "Opsi B salah karena memutasi array lama di tempat menggunakan push.",
      "C": "Opsi C salah karena melakukan mutasi langsung via index assignment.",
      "D": "Opsi D salah karena `concat()` tanpa argumen hanya menyalin array lama tanpa menambah item baru."
    },
    "jobId": "fullstack",
    "code": "// A (Immutability)\nsetList([...list, newItem]);\n\n// B (Direct Mutation - BAD)\nlist.push(newItem);\nsetList(list);"
  },
  {
    "id": "FB-040",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa yang dikembalikan oleh komponen berikut saat isVisible bernilai false?\n\n```typescript\nfunction SecretView({ isVisible }: { isVisible: boolean }) {\n  return (\n    <div>\n      {isVisible && <span>Data Rahasia</span>}\n    </div>\n  );\n}\n```",
    "options": {
      "A": "Elemen `<span>Data Rahasia</span>`",
      "B": "null (tidak merender apapun ke layar)",
      "C": "Teks \"false\"",
      "D": "Error undefined"
    },
    "answer": "B",
    "explanation": {
      "correct": "Ekspresi boolean short-circuit `isVisible && <span>Data Rahasia</span>`: ketika isVisible bernilai false, ekspresi menghasilkan false. Di JSX, nilai false, null, undefined, dan true diabaikan dan tidak merender apa pun ke layar.",
      "A": "Opsi A salah karena isVisible bernilai false sehingga span tidak dirender.",
      "B": "Opsi B benar karena nilai boolean false tidak ditampilkan di DOM oleh React.",
      "C": "Opsi C salah karena boolean false diabaikan oleh parser JSX.",
      "D": "Opsi D salah karena sintaks short-circuit adalah pola standar di React."
    },
    "jobId": "fullstack",
    "code": "function SecretView({ isVisible }: { isVisible: boolean }) {\n  return (\n    <div>\n      {isVisible && <span>Data Rahasia</span>}\n    </div>\n  );\n}"
  },
  {
    "id": "FB-041",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan Controlled Component dalam penanganan form di React?",
    "options": {
      "A": "Komponen form yang nilainya dikendalikan oleh DOM internal browser menggunakan useRef",
      "B": "Komponen form di mana nilai elemen input dikontrol sepenuhnya oleh state React melalui prop 'value' dan event 'onChange'",
      "C": "Komponen yang hanya bisa diakses oleh user yang telah terotentikasi",
      "D": "Komponen yang tidak dapat diubah sama sekali oleh user"
    },
    "answer": "B",
    "explanation": {
      "correct": "Controlled Component adalah input form yang nilainya (value) bersumber dari state React, dan setiap perubahan ketikan pengguna memicu pembaruan state melalui handler onChange.",
      "A": "Opsi A salah karena itu adalah definisi Uncontrolled Component.",
      "B": "Opsi B benar karena nilai input dikontrol langsung oleh state React (single source of truth).",
      "C": "Opsi C salah karena tidak berhubungan dengan auth/security.",
      "D": "Opsi D salah karena controlled component tetap dapat menerima input dari pengguna."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-042",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Fungsi pembersih (cleanup function) pada useEffect berikut tidak berjalan dengan benar saat komponen unmount. Mengapa?\n\n```typescript\nuseEffect(() => {\n  const timer = setInterval(() => console.log('Tick'), 1000);\n  clearInterval(timer); // Salah penempatan\n}, []);\n```",
    "options": {
      "A": "useEffect tidak mengizinkan pemanggilan setInterval",
      "B": "Fungsi cleanup harus di-return sebagai fungsi (`return () => clearInterval(timer)`), bukan memanggil clearInterval secara langsung di body effect",
      "C": "Timer ID harus disimpan di dalam state komponen",
      "D": "Dependency array tidak boleh kosong"
    },
    "answer": "B",
    "explanation": {
      "correct": "Agar React menjalankan pembersihan resource saat unmount atau sebelum efek berikutnya dieksekusi, callback useEffect harus mengembalikan sebuah fungsi pembersih: `return () => clearInterval(timer);`.",
      "A": "Opsi A salah karena setInterval sangat umum digunakan di useEffect.",
      "B": "Opsi B benar karena cleanup function harus berupa fungsi yang di-return dari callback useEffect.",
      "C": "Opsi C salah karena timer ID cukup berupa variabel lokal di dalam scope effect.",
      "D": "Opsi D salah karena dependency array kosong tepat untuk timer sepanjang siklus hidup komponen."
    },
    "jobId": "fullstack",
    "code": "useEffect(() => {\n  const timer = setInterval(() => console.log('Tick'), 1000);\n  clearInterval(timer); // Salah penempatan\n}, []);"
  },
  {
    "id": "FB-043",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa aturan utama (Rules of Hooks) yang wajib dipatuhi saat memanggil React Hooks?",
    "options": {
      "A": "Hooks hanya boleh dipanggil di tingkat teratas (top level) komponen fungsi React dan tidak boleh di dalam perulangan, kondisi if, atau fungsi bersarang",
      "B": "Hooks harus selalu dipanggil di dalam blok try-catch",
      "C": "Hooks hanya bisa digunakan di dalam class component",
      "D": "Hooks harus diawali dengan huruf kapital"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dua aturan utama Hooks: 1) Hanya panggil Hooks di top-level (bukan di dalam loops, conditions, atau nested functions) agar urutan pemanggilan selalu sama di setiap render; 2) Hanya panggil Hooks dari React Function Components atau Custom Hooks.",
      "A": "Opsi A benar sesuai aturan resmi Rules of Hooks React.",
      "B": "Opsi B salah karena Hooks tidak perlu di dalam try-catch.",
      "C": "Opsi C salah karena Hooks justru diciptakan khusus untuk functional components.",
      "D": "Opsi D salah karena nama Hooks harus diawali dengan kata kerja 'use' berhuruf kecil (misal useState)."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-044",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe interface props untuk komponen Button yang menerima teks judul dan callback onClick tanpa parameter dan tanpa return value:\n\n```typescript\ninterface ButtonProps {\n  label: string;\n  ___;\n}\n\nexport const Button: React.FC<ButtonProps> = ({ label, onClick }) => (\n  <button onClick={onClick}>{label}</button>\n);\n```",
    "options": {
      "A": "onClick: () => void;",
      "B": "onClick: Function<void>;",
      "C": "onClick: () -> void;",
      "D": "onClick: void();"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi callback tanpa argumen dan tanpa nilai kembali diketik dengan sintaks arrow signature `() => void` di TypeScript.",
      "A": "Opsi A benar karena `() => void` adalah tipe fungsi tanpa parameter dan return value.",
      "B": "Opsi B salah karena tipe generic Function<void> tidak ada di TypeScript.",
      "C": "Opsi C salah karena sintaks panah menggunakan `=>` bukan `->`.",
      "D": "Opsi D salah karena bukan sintaks tipe fungsi."
    },
    "jobId": "fullstack",
    "code": "interface ButtonProps {\n  label: string;\n  ___;\n}\n\nexport const Button: React.FC<ButtonProps> = ({ label, onClick }) => (\n  <button onClick={onClick}>{label}</button>\n);"
  },
  {
    "id": "FB-045",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Berapa kali teks 'Effect Run' dicetak ke console saat halaman pertama kali dibuka dan komponen dimuat?\n\n```typescript\nuseEffect(() => {\n  console.log('Effect Run');\n}, []);\n```",
    "options": {
      "A": "0 kali",
      "B": "1 kali (atau 2 kali jika React StrictMode aktif di development)",
      "C": "10 kali",
      "D": "Infinite loop"
    },
    "answer": "B",
    "explanation": {
      "correct": "useEffect dengan dependency array kosong dijalankan 1 kali setelah initial mount. Namun pada lingkungan React 18 development dengan `<React.StrictMode>`, React sengaja menjalankan mount -> unmount -> mount untuk mendeteksi memory leak, mencetak 2 kali.",
      "A": "Opsi A salah karena useEffect pasti dijalankan setelah mount.",
      "B": "Opsi B benar karena efek mount berjalan 1 kali (atau 2 kali di StrictMode dev).",
      "C": "Opsi C salah karena tidak ada perulangan.",
      "D": "Opsi D salah karena dependency array kosong mencegah re-render loop."
    },
    "jobId": "fullstack",
    "code": "useEffect(() => {\n  console.log('Effect Run');\n}, []);"
  },
  {
    "id": "FB-046",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Kapan sebaiknya kita menggunakan callback updater pada setter state (contoh: `setCount(prev => prev + 1)`) dibandingkan nilai langsung `setCount(count + 1)`?\n\n```typescript\n// Pendekatan Callback Updater\nconst handleMultiIncrement = () => {\n  setCount(prev => prev + 1);\n  setCount(prev => prev + 1);\n};\n```",
    "options": {
      "A": "Kapan saja tanpa aturan khusus",
      "B": "Ketika nilai state baru bergantung pada nilai state sebelumnya, terutama pada pembaruan asinkron atau multiple updates",
      "C": "Hanya ketika state bertipe boolean",
      "D": "Hanya ketika menggunakan library Redux"
    },
    "answer": "B",
    "explanation": {
      "correct": "Menggunakan functional updater `prev => prev + 1` memastikan kita selalu beroperasi pada nilai state paling mutakhir (latest state) dan mencegah masalah stale state closures.",
      "A": "Opsi A salah karena ada skenario spesifik yang mewajibkannya.",
      "B": "Opsi B benar karena menjamin state update menggunakan nilai paling baru.",
      "C": "Opsi C salah karena berlaku untuk semua tipe data (number, object, array, dll).",
      "D": "Opsi D salah karena ini fitur bawaan hook useState di React."
    },
    "jobId": "fullstack",
    "code": "// Pendekatan Callback Updater\nconst handleMultiIncrement = () => {\n  setCount(prev => prev + 1);\n  setCount(prev => prev + 1);\n};"
  },
  {
    "id": "FB-047",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut mengalami type error: 'Property target does not exist on type MouseEvent'. Bagaimana cara memperbaikinya?\n\n```typescript\nconst handleClick = (e: MouseEvent) => {\n  console.log(e.target);\n};\nreturn <button onClick={handleClick}>Klik</button>;\n```",
    "options": {
      "A": "Ganti tipe event dari `MouseEvent` standar DOM menjadi `React.MouseEvent<HTMLButtonElement>`",
      "B": "Ubah parameter e menjadi any",
      "C": "Hapus parameter e sama sekali",
      "D": "Ganti button dengan div"
    },
    "answer": "A",
    "explanation": {
      "correct": "React menggunakan SyntheticEvent wrapper. Menggunakan tipe bawaan JavaScript browser `MouseEvent` sering kali tidak cocok dengan tipe event React. Gunakan `React.MouseEvent<HTMLButtonElement>` untuk dukungan autocompletion dan type safety.",
      "A": "Opsi A benar karena tipe SyntheticEvent React menyediakan tipe target yang presisi.",
      "B": "Opsi B salah karena beralih ke any mematikan type safety.",
      "C": "Opsi C salah karena kita membutuhkan properti target.",
      "D": "Opsi D salah karena button adalah elemen semantik yang tepat."
    },
    "jobId": "fullstack",
    "code": "const handleClick = (e: MouseEvent) => {\n  console.log(e.target);\n};\nreturn <button onClick={handleClick}>Klik</button>;"
  },
  {
    "id": "FB-048",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa peran utama dari hook `useContext` di React?",
    "options": {
      "A": "Menggantikan seluruh fungsi database backend",
      "B": "Membaca dan berlangganan ke Context data secara langsung di komponen manapun tanpa harus melakukan props drilling melalui komponen perantara",
      "C": "Melakukan caching hasil komputasi berat",
      "D": "Mengontrol animasi CSS pada browser"
    },
    "answer": "B",
    "explanation": {
      "correct": "Context API menyediakan cara untuk membagikan nilai (seperti tema, data auth, bahasa) ke seluruh tree komponen tanpa perlu mem-passing props secara manual di setiap level hierarki (menghindari props drilling).",
      "A": "Opsi A salah karena Context hanya state management client-side.",
      "B": "Opsi B benar karena useContext membaca data Context secara langsung tanpa prop drilling.",
      "C": "Opsi C salah karena itu fungsi dari useMemo.",
      "D": "Opsi D salah karena bukan untuk manipulasi animasi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-049",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi Custom Hook berikut agar mengembalikan pasangan nilai boolean dan fungsi toggle dengan tipe yang aman (tuple as const):\n\n```typescript\nfunction useToggle(initial: boolean = false) {\n  const [value, setValue] = useState(initial);\n  const toggle = () => setValue(v => !v);\n  ___\n}\n```",
    "options": {
      "A": "return [value, toggle] as const;",
      "B": "return [value, toggle] as any;",
      "C": "return (value, toggle);",
      "D": "return {value, toggle} as const;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di TypeScript, mengembalikan array dari custom hook tanpa `as const` akan diinferensikan sebagai `(boolean | (() => void))[]`. Dengan menambahkan `as const`, TypeScript menginferensikannya sebagai tuple bernilai tetap `readonly [boolean, () => void]` mirip useState.",
      "A": "Opsi A benar karena `as const` mempertahankan tipe tuple eksak pada custom hook return.",
      "B": "Opsi B salah karena any menghilangkan keamanan tipe.",
      "C": "Opsi C salah karena kurung biasa bukan ekspresi return tuple yang valid.",
      "D": "Opsi D salah karena mengembalikan objek bukan array tuple."
    },
    "jobId": "fullstack",
    "code": "function useToggle(initial: boolean = false) {\n  const [value, setValue] = useState(initial);\n  const toggle = () => setValue(v => !v);\n  ___\n}"
  },
  {
    "id": "FB-050",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Manakah implementasi form controlled input teks yang paling sesuai standar React + TypeScript?\n\n```typescript\nfunction ControlledInput() {\n  const [name, setName] = useState('');\n  return (\n    <input\n      type=\"text\"\n      value={name}\n      onChange={(e) => setName(e.target.value)}\n    />\n  );\n}\n```",
    "options": {
      "A": "<input value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />",
      "B": "<input defaultValue={text} onBlur={(e) => text = e.target.value} />",
      "C": "<input id='txt' onChange={() => text = document.getElementById('txt').value} />",
      "D": "<input value={text} />"
    },
    "answer": "A",
    "explanation": {
      "correct": "Controlled input memerlukan prop `value` yang terikat ke state dan prop `onChange` yang memutakhirkan state dengan nilai baru dari `e.target.value`.",
      "A": "Opsi A benar karena menghubungkan value ke state dan menangani perubahan melalui setter state secara type-safe.",
      "B": "Opsi B salah karena defaultValue adalah pola uncontrolled dan memutasi variabel langsung.",
      "C": "Opsi C salah karena memanipulasi DOM langsung (anti-pattern di React).",
      "D": "Opsi D salah karena value tanpa onChange akan membuat input menjadi read-only dan memicu warning di console."
    },
    "jobId": "fullstack",
    "code": "function ControlledInput() {\n  const [name, setName] = useState('');\n  return (\n    <input\n      type=\"text\"\n      value={name}\n      onChange={(e) => setName(e.target.value)}\n    />\n  );\n}"
  },
  {
    "id": "FB-051",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa tujuan dari hook `useMemo` di React?",
    "options": {
      "A": "Menjalankan efek samping seperti fetch data saat komponen unmount",
      "B": "Menyimpan (memoize) hasil kalkulasi fungsi yang berat secara lokal sehingga tidak dihitung ulang pada setiap re-render kecuali dependensinya berubah",
      "C": "Menyimpan referensi DOM seperti useRef",
      "D": "Membuat state baru secara global"
    },
    "answer": "B",
    "explanation": {
      "correct": "`useMemo` meng-cache hasil perhitungan kalkulasi matematis/pemrosesan data yang mahal (expensive calculation) dan hanya mengevaluasi ulang jika ada nilai pada dependency array yang berubah.",
      "A": "Opsi A salah karena efek samping adalah tugas dari useEffect.",
      "B": "Opsi B benar sesuai definisi dan tujuan useMemo.",
      "C": "Opsi C salah karena menyimpan referensi DOM adalah tugas useRef.",
      "D": "Opsi D salah karena useMemo bukan penyimpan state global."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-052",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara hook `useMemo` dan `useCallback` di React?",
    "options": {
      "A": "useMemo meng-cache nilai hasil pemanggilan fungsi, sedangkan useCallback meng-cache definisi instance fungsi itu sendiri",
      "B": "useMemo hanya untuk angka, useCallback untuk string",
      "C": "useCallback berjalan di server, useMemo berjalan di client",
      "D": "Tidak ada perbedaan, keduanya fungsi identik"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useMemo(() => fn(), deps)` mengembalikan nilai ter-memoize dari hasil eksekusi fungsi. `useCallback(fn, deps)` mengembalikan fungsi ter-memoize itu sendiri agar referensinya tidak berubah di setiap render.",
      "A": "Opsi A benar karena membedakan nilai hasil vs referensi fungsi.",
      "B": "Opsi B salah karena keduanya mendukung tipe data apapun.",
      "C": "Opsi C salah karena keduanya berjalan di environment yang sama di sisi client.",
      "D": "Opsi D salah karena kegunaan keduanya berbeda."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-053",
    "level": "beginner",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa yang ditampilkan oleh kode komponen berikut ketika daftar 'todos' berisi array kosong `[]`?\n\n```typescript\nfunction TodoList({ todos }: { todos: string[] }) {\n  if (todos.length === 0) {\n    return <p>Tidak ada tugas tersisa</p>;\n  }\n  return <ul>{todos.map(t => <li key={t}>{t}</li>)}</ul>;\n}\n```",
    "options": {
      "A": "\"Tidak ada tugas tersisa\"",
      "B": "\"\"",
      "C": "<ul></ul> kosong",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pemeriksaan kondisi `todos.length === 0` menghasilkan true, sehingga komponen langsung me-return `<p>Tidak ada tugas tersisa</p>` sebelum mencapai return list utama.",
      "A": "Opsi A benar karena early return terpilih saat array kosong.",
      "B": "Opsi B salah karena ada elemen p yang dirender.",
      "C": "Opsi C salah karena ul berada setelah guard clause.",
      "D": "Opsi D salah karena kondisi menggunakan boolean check, bukan ekspresi angka."
    },
    "jobId": "fullstack",
    "code": "function TodoList({ todos }: { todos: string[] }) {\n  if (todos.length === 0) {\n    return <p>Tidak ada tugas tersisa</p>;\n  }\n  return <ul>{todos.map(t => <li key={t}>{t}</li>)}</ul>;\n}"
  },
  {
    "id": "FB-054",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Anotasi meta `@SpringBootApplication` merupakan gabungan dari tiga anotasi inti Spring Boot. Manakah ketiganya?",
    "options": {
      "A": "@Configuration, @EnableAutoConfiguration, dan @ComponentScan",
      "B": "@Service, @Repository, dan @Controller",
      "C": "@Entity, @Table, dan @Id",
      "D": "@RestController, @Autowired, dan @Bean"
    },
    "answer": "A",
    "explanation": {
      "correct": "@SpringBootApplication merangkum 3 anotasi penting: @Configuration (menandakan kelas sebagai sumber definisi bean), @EnableAutoConfiguration (mengaktifkan konfigurasi otomatis Spring Boot berdasarkan dependency di classpath), dan @ComponentScan (memindai package untuk menemukan komponen Spring).",
      "A": "Opsi A benar karena ketiga anotasi tersebut adalah penyusun anotasi @SpringBootApplication.",
      "B": "Opsi B salah karena itu adalah anotasi stereotype komponen spesifik.",
      "C": "Opsi C salah karena itu adalah anotasi JPA/Hibernate.",
      "D": "Opsi D salah karena itu adalah anotasi controller dan injection."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-055",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara anotasi `@Controller` dan `@RestController` di Spring Boot?",
    "options": {
      "A": "@RestController secara otomatis menyertakan anotasi @ResponseBody pada setiap method di dalamnya, sehingga return value method langsung diserialisasi ke JSON/XML",
      "B": "@Controller hanya bisa digunakan untuk aplikasi database",
      "C": "@RestController tidak mendukung method HTTP GET",
      "D": "@Controller tidak memerlukan web server"
    },
    "answer": "A",
    "explanation": {
      "correct": "@RestController adalah convenience annotation yang merupakan kombinasi dari `@Controller` dan `@ResponseBody`. Setiap method secara default mengembalikan payload data (seperti JSON) bukan nama view HTML/template.",
      "A": "Opsi A benar karena @ResponseBody otomatis disematkan pada semua method di @RestController.",
      "B": "Opsi B salah karena @Controller biasa digunakan untuk web MVC tradisional (Thymeleaf/JSP).",
      "C": "Opsi C salah karena @RestController mendukung semua HTTP method.",
      "D": "Opsi D salah karena keduanya berjalan di atas embedded web server."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-056",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari eksekusi kode Java berikut saat dijalankan?\n\n```java\nSystem.out.println('b' + 'i' + 't');\n```",
    "options": {
      "A": "319",
      "B": "\"bit\"",
      "C": "Compile error",
      "D": "98105116"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tanda petik tunggal (') menandakan char literal, bukan String literal. Di Java, operator '+' pada tipe char melakukan penjumlahan nilai integer ASCII: 'b'=98, 'i'=105, 't'=116. Total = 98 + 105 + 116 = 319.",
      "A": "Opsi A benar karena char literal dijumlahkan sebagai nilai ASCII numerik.",
      "B": "Opsi B salah karena tanda petik tunggal bukan string literal sehingga tidak terjadi konkatenasi teks.",
      "C": "Opsi C salah karena sintaks Java sepenuhnya valid.",
      "D": "Opsi D salah karena nilai ASCII tidak digabungkan sebagai string melainkan dijumlah secara aritmatika."
    },
    "jobId": "fullstack",
    "code": "System.out.println('b' + 'i' + 't');"
  },
  {
    "id": "FB-057",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada parameter controller berikut agar Spring Boot mengekstrak nilai ID dari URL path `/api/users/{id}`:\n\n```java\n@GetMapping(\"/users/{id}\")\npublic ResponseEntity<User> getUserById(@___ Long id) {\n  return ResponseEntity.ok(userService.findById(id));\n}\n```",
    "options": {
      "A": "@RequestParam",
      "B": "@PathVariable",
      "C": "@RequestBody",
      "D": "@RequestHeader"
    },
    "answer": "B",
    "explanation": {
      "correct": "Anotasi `@PathVariable` digunakan untuk mengekstrak variabel dinamis yang disematkan langsung di dalam pola URI template (URL path).",
      "A": "Opsi A salah karena @RequestParam digunakan untuk query parameters (misal: `?id=123`).",
      "B": "Opsi B benar karena @PathVariable mengekstrak nilai dari path variable `{id}`.",
      "C": "Opsi C salah karena @RequestBody mengekstrak data dari HTTP body payload.",
      "D": "Opsi D salah karena @RequestHeader mengekstrak data dari HTTP header."
    },
    "jobId": "fullstack",
    "code": "@GetMapping(\"/users/{id}\")\npublic ResponseEntity<User> getUserById(@___ Long id) {\n  return ResponseEntity.ok(userService.findById(id));\n}"
  },
  {
    "id": "FB-058",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Endpoint POST berikut selalu menerima objek DTO dengan semua field bernilai null saat dipanggil dengan payload JSON. Mengapa?\n\n```java\n@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(UserDto dto) {\n  return ResponseEntity.ok(userService.create(dto));\n}\n```",
    "options": {
      "A": "Parameter method kurang anotasi @RequestBody",
      "B": "Anotasi @PostMapping harus diganti dengan @GetMapping",
      "C": "Nama method tidak boleh diawali kata 'create'",
      "D": "Tipe kembalian harus String"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tanpa anotasi `@RequestBody`, Spring MVC tidak akan mem-parsing HTTP request body (JSON) ke objek DTO melalui HttpMessageConverter (Jackson), sehingga objek DTO akan kosong/null.",
      "A": "Opsi A benar karena @RequestBody wajib ada agar Spring mem-parse JSON payload ke Java object.",
      "B": "Opsi B salah karena endpoint pembuatan data harus menggunakan @PostMapping.",
      "C": "Opsi C salah karena penamaan method bebas sesuai konvensi Java.",
      "D": "Opsi D salah karena ResponseEntity<User> adalah return type yang sangat valid dan direkomendasikan."
    },
    "jobId": "fullstack",
    "code": "@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(UserDto dto) {\n  return ResponseEntity.ok(userService.create(dto));\n}"
  },
  {
    "id": "FB-059",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Konsep apakah dalam Spring Framework di mana kendali pembuatan dan pengelolaan siklus hidup objek (bean) diserahkan ke Spring IoC Container?",
    "options": {
      "A": "Inversion of Control (IoC)",
      "B": "Aspect-Oriented Programming (AOP)",
      "C": "Method Overriding",
      "D": "Data Encapsulation"
    },
    "answer": "A",
    "explanation": {
      "correct": "Inversion of Control (IoC) membalik kendali arsitektur tradisional: alih-alih aplikasi membuat objek sendiri menggunakan operator `new`, container yang bertanggung jawab menginstansiasi, mengkonfigurasi, dan menyuntikkan dependensi.",
      "A": "Opsi A benar sesuai definisi inti IoC di Spring Framework.",
      "B": "Opsi B salah karena AOP adalah modularisasi cross-cutting concerns.",
      "C": "Opsi C salah karena overriding adalah konsep OOP inheritance.",
      "D": "Opsi D salah karena enkapsulasi adalah penyembunyian data di OOP."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-060",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Manakah jenis Dependency Injection (DI) yang PALING direkomendasikan oleh tim resmi Spring untuk digunakan di kelas Service?\n\n```java\n// A: Field Injection (Not Recommended)\n@Service\npublic class OrderService {\n  @Autowired\n  private OrderRepository repo;\n}\n\n// B: Constructor Injection (Recommended)\n@Service\npublic class OrderService {\n  private final OrderRepository repo;\n  public OrderService(OrderRepository repo) {\n    this.repo = repo;\n  }\n}\n```",
    "options": {
      "A": "Field Injection menggunakan `@Autowired` langsung pada private field",
      "B": "Constructor Injection dengan mendeklarasikan dependensi sebagai `private final`",
      "C": "Setter Injection pada public setter method",
      "D": "Instansiasi manual menggunakan keyword `new` di dalam constructor"
    },
    "answer": "B",
    "explanation": {
      "correct": "Constructor Injection memastikan dependensi bersifat immutable (`final`), mempermudah penulisan Unit Test (tanpa perlu Mockito reflection), dan menjamin objek tidak dapat diinisialisasi dalam keadaan dependensi yang hilang (null).",
      "A": "Opsi A salah karena field injection menyulitkan unit testing tanpa reflection dan menyembunyikan dependensi.",
      "B": "Opsi B benar karena Constructor Injection adalah official best practice Spring modern.",
      "C": "Opsi C salah karena setter injection membuat objek mutable dan rawan NullPointer jika setter lupa dipanggil.",
      "D": "Opsi D salah karena instansiasi manual dengan `new` menghilangkan manajemen bean oleh Spring IoC Container."
    },
    "jobId": "fullstack",
    "code": "// A: Field Injection (Not Recommended)\n@Service\npublic class OrderService {\n  @Autowired\n  private OrderRepository repo;\n}\n\n// B: Constructor Injection (Recommended)\n@Service\npublic class OrderService {\n  private final OrderRepository repo;\n  public OrderService(OrderRepository repo) {\n    this.repo = repo;\n  }\n}"
  },
  {
    "id": "FB-061",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari pemanggilan method berikut?",
    "options": {
      "A": "\"Result: 30\"",
      "B": "\"Result: 1020\"",
      "C": "\"Result: 10 + 20\"",
      "D": "Compile error"
    },
    "answer": "B",
    "explanation": {
      "correct": "Operator '+' dievaluasi dari kiri ke kanan. \"Result: \" + 10 menghasilkan string \"Result: 10\". Selanjutnya string \"Result: 10\" + 20 menghasilkan string \"Result: 1020\". Agar terjadi penjumlahan matematika 30, harus diberi kurung: `\"Result: \" + (10 + 20)`.",
      "A": "Opsi A salah karena evaluasi kiri ke kanan mengubah 10 dan 20 menjadi string concatenation.",
      "B": "Opsi B benar karena konkatenasi string terjadi beruntun dari kiri ke kanan.",
      "C": "Opsi C salah karena tanda '+' dieksekusi sebagai operator, bukan teks.",
      "D": "Opsi D salah karena ekspresi sintaks Java valid."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-062",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada class berikut agar Spring Boot mengenalinya sebagai komponen lapisan logika bisnis (Business Logic Layer):\n\n```java\n@___\npublic class CustomerService {\n  public void processCustomer() {\n    // Logika bisnis\n  }\n}\n```",
    "options": {
      "A": "@Service",
      "B": "@Repository",
      "C": "@Entity",
      "D": "@Configuration"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Service` adalah stereotype annotation spesifik dari Spring untuk menandai bahwa suatu kelas memegang peran sebagai Service Layer yang mengeksekusi logika bisnis aplikasi.",
      "A": "Opsi A benar karena @Service secara semantik diperuntukkan bagi business service.",
      "B": "Opsi B salah karena @Repository khusus untuk Data Access Layer (DAO).",
      "C": "Opsi C salah karena @Entity adalah anotasi model JPA.",
      "D": "Opsi D salah karena @Configuration untuk kelas pendefinisi bean konfigurasi."
    },
    "jobId": "fullstack",
    "code": "@___\npublic class CustomerService {\n  public void processCustomer() {\n    // Logika bisnis\n  }\n}"
  },
  {
    "id": "FB-063",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menandai method penanganan exception secara terpusat di dalam kelas `@ControllerAdvice`?",
    "options": {
      "A": "@ExceptionHandler",
      "B": "@CatchException",
      "C": "@HandleError",
      "D": "@ThrowsException"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@ExceptionHandler` digunakan untuk mendeklarasikan method yang akan menangani jenis exception tertentu yang dilemparkan oleh controller methods.",
      "A": "Opsi A benar karena @ExceptionHandler adalah anotasi resmi penanganan exception di Spring MVC.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-064",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Sebuah Spring Boot Controller mengembalikan error HTTP 405 (Method Not Allowed) saat klien mengirim HTTP POST ke `/api/orders`. Kode controller adalah sebagai berikut. Apa penyebabnya?\n\n```java\n@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n  @GetMapping\n  public ResponseEntity<Order> createOrder(@RequestBody OrderDto dto) {\n    return ResponseEntity.ok(service.save(dto));\n  }\n}\n```",
    "options": {
      "A": "Method di controller di-mapping dengan `@GetMapping`, bukan `@PostMapping`",
      "B": "Controller belum menyertakan anotasi @CrossOrigin",
      "C": "Nama method tidak boleh orderService",
      "D": "Port web server sedang sibuk"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 405 Method Not Allowed terjadi ketika klien mengirim permintaan dengan metode HTTP (misal POST) yang tidak didukung atau tidak di-mapping oleh endpoint URL tersebut (karena endpoint hanya menerima GET via `@GetMapping`).",
      "A": "Opsi A benar karena endpoint menggunakan @GetMapping sehingga menolak request POST.",
      "B": "Opsi B salah karena masalah CORS akan menghasilkan status yang berbeda di browser (umumnya error preflight/CORS, bukan 405).",
      "C": "Opsi C salah karena nama method Java bebas.",
      "D": "Opsi D salah karena port sibuk akan menyebabkan gagal startup server (port conflict), bukan 405."
    },
    "jobId": "fullstack",
    "code": "@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n  @GetMapping\n  public ResponseEntity<Order> createOrder(@RequestBody OrderDto dto) {\n    return ResponseEntity.ok(service.save(dto));\n  }\n}"
  },
  {
    "id": "FB-065",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari pembandingan String menggunakan operator `==` dan method `.equals()` pada kode Java berikut?",
    "options": {
      "A": "true / true",
      "B": "false / false",
      "C": "false / true",
      "D": "true / false"
    },
    "answer": "C",
    "explanation": {
      "correct": "Keyword `new String(...)` selalu membuat objek baru di Java Heap Memory, sehingga referensi memorinya berbeda (s1 == s2 menghasilkan false). Namun method `.equals()` membandingkan urutan karakter konten teksnya (keduanya 'Hello'), sehingga menghasilkan true.",
      "A": "Opsi A salah karena operator == membandingkan alamat referensi, bukan konten.",
      "B": "Opsi B salah karena .equals() mengembalikan true untuk teks identik.",
      "C": "Opsi C benar karena s1 == s2 adalah false dan s1.equals(s2) adalah true.",
      "D": "Opsi D salah karena terbalik."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-066",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Bagaimana cara membaca nilai properti dari file `application.properties` ke dalam variabel kelas Spring Boot?",
    "options": {
      "A": "Menggunakan anotasi `@Value(\"${nama.properti}\")`",
      "B": "Menggunakan anotasi `@ReadProperty`",
      "C": "Menggunakan fungsi `System.getProperty()` saja",
      "D": "Menuliskan nama properti sebagai konstanta statik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Value(\"${property.name}\")` digunakan untuk melakukan injection nilai konfigurasi dari environment/file `application.properties` ke dalam field kelas bean Spring.",
      "A": "Opsi A benar karena `@Value(\"${...}\")` adalah cara standar Spring Expression injection.",
      "B": "Opsi B salah karena anotasi @ReadProperty tidak ada di Spring.",
      "C": "Opsi C salah karena System.getProperty membaca properti JVM, bukan application.properties Spring.",
      "D": "Opsi D salah karena konstanta statik tidak otomatis membaca konfigurasi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-067",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Apa keuntungan menggunakan kelas pembungkus `ResponseEntity<T>` sebagai tipe kembalian method Controller di Spring Boot?\n\n```java\n@GetMapping(\"/products/{id}\")\npublic ResponseEntity<Product> getProduct(@PathVariable Long id) {\n  Product p = productService.find(id);\n  return ResponseEntity.status(HttpStatus.OK).header(\"X-App\", \"Demo\").body(p);\n}\n```",
    "options": {
      "A": "Memungkinkan kontrol penuh terhadap HTTP Status Code, HTTP Headers, dan Response Body yang dikirimkan ke klien",
      "B": "Membuat aplikasi otomatis terhindar dari NullPointerException",
      "C": "Mempercepat kompilasi bytecode Java",
      "D": "Menonaktifkan logging aplikasi secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ResponseEntity<T>` mewakili keseluruhan HTTP Response. Dengan menggunakannya, developer dapat dengan mudah mengatur status code (seperti 201 Created, 204 No Content, 404 Not Found), custom headers, dan data body secara eksplisit.",
      "A": "Opsi A benar karena ResponseEntity memberikan kontrol penuh atas HTTP status, headers, dan payload.",
      "B": "Opsi B salah karena ResponseEntity tidak mencegah NullPointer internal service.",
      "C": "Opsi C salah karena tidak memengaruhi kecepatan compiler javac.",
      "D": "Opsi D salah karena tidak berhubungan dengan logging."
    },
    "jobId": "fullstack",
    "code": "@GetMapping(\"/products/{id}\")\npublic ResponseEntity<Product> getProduct(@PathVariable Long id) {\n  Product p = productService.find(id);\n  return ResponseEntity.status(HttpStatus.OK).header(\"X-App\", \"Demo\").body(p);\n}"
  },
  {
    "id": "FB-068",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi validasi Hibernate Validator berikut agar field username tidak boleh bernilai null dan panjang string setelah di-trim tidak boleh 0 (bukan whitespace kosong):\n\n```java\npublic class RegisterRequest {\n  @___\n  private String username;\n  \n  @Email\n  private String email;\n}\n```",
    "options": {
      "A": "@NotNull",
      "B": "@NotBlank",
      "C": "@NotEmpty",
      "D": "@Valid"
    },
    "answer": "B",
    "explanation": {
      "correct": "`@NotBlank` memastikan bahwa karakter tidak null dan panjang string terpotong (trimmed length) lebih besar dari 0 (tidak hanya berisi spasi kosong). `@NotNull` hanya memastikan bukan null, sedangkan `@NotEmpty` memastikan bukan null dan length > 0 (tapi masih mengizinkan whitespace).",
      "A": "Opsi A salah karena @NotNull mengizinkan string kosong atau spasi \" \".",
      "B": "Opsi B benar karena @NotBlank menolak null, string kosong, dan whitespace.",
      "C": "Opsi C salah karena @NotEmpty masih mengizinkan string berisi spasi \" \".",
      "D": "Opsi D salah karena @Valid adalah trigger validasi pada parameter."
    },
    "jobId": "fullstack",
    "code": "public class RegisterRequest {\n  @___\n  private String username;\n  \n  @Email\n  private String email;\n}"
  },
  {
    "id": "FB-069",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa web server default yang tertanam (embedded servlet container) pada starter `spring-boot-starter-web`?",
    "options": {
      "A": "Apache Tomcat",
      "B": "Nginx",
      "C": "Jetty",
      "D": "Undertow"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, dependency `spring-boot-starter-web` mengikutsertakan Apache Tomcat sebagai embedded servlet container, sehingga aplikasi web dapat langsung dijalankan sebagai executable JAR tanpa instalasi server terpisah.",
      "A": "Opsi A benar karena Apache Tomcat adalah default embedded server di Spring Boot Starter Web.",
      "B": "Opsi B salah karena Nginx adalah reverse proxy/web server terpisah (bukan Java servlet container embedded).",
      "C": "Opsi C salah karena Jetty adalah opsi alternatif yang harus dikonfigurasi secara manual.",
      "D": "Opsi D salah karena Undertow adalah opsi alternatif berkinerja tinggi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-070",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa nilai dari variabel 'count' setelah blok perulangan for selesai dieksekusi?\n\n```java\nint count = 0;\nfor (int i = 0; i < 5; i++) {\n  count++;\n}\nSystem.out.println(count);\n```",
    "options": {
      "A": "5",
      "B": "6",
      "C": "4",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perulangan berjalan untuk i = 0, 1, 2, 3, 4 (total 5 iterasi). Pada setiap iterasi, count di-increment sebanyak 1 kali. Maka nilai akhir count adalah 5.",
      "A": "Opsi A benar karena loop berjalan tepat 5 kali.",
      "B": "Opsi B salah karena kondisi batas adalah `i < 5` (tidak menyertakan 5).",
      "C": "Opsi C salah karena perulangan mulai dari 0 hingga 4 (5 kali).",
      "D": "Opsi D salah karena variabel count bertambah pada setiap iterasi."
    },
    "jobId": "fullstack",
    "code": "int count = 0;\nfor (int i = 0; i < 5; i++) {\n  count++;\n}\nSystem.out.println(count);"
  },
  {
    "id": "FB-071",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa scope default dari sebuah Spring Bean di dalam ApplicationContext?",
    "options": {
      "A": "singleton",
      "B": "prototype",
      "C": "request",
      "D": "session"
    },
    "answer": "A",
    "explanation": {
      "correct": "Scope default dari Spring Bean adalah 'singleton'. Artinya, Spring IoC Container hanya membuat satu instance tunggal dari bean tersebut per ApplicationContext, dan instance yang sama akan dibagikan ke semua injeksi.",
      "A": "Opsi A benar karena singleton adalah scope bawaan untuk semua bean Spring.",
      "B": "Opsi B salah karena prototype membuat instance baru setiap kali diminta.",
      "C": "Opsi C salah karena request scope membuat bean per satu siklus HTTP request.",
      "D": "Opsi D salah karena session scope membuat bean per HTTP session pengguna."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-072",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Aplikasi melempar `NullPointerException` saat method `orderService.placeOrder()` dipanggil di dalam controller berikut. Apa penyebabnya?",
    "options": {
      "A": "Variabel orderService bernilai null karena tidak diinjeksi melalui constructor atau anotasi @Autowired",
      "B": "Anotasi @RestController tidak mendukung pemanggilan service",
      "C": "OrderService harus berjenis interface, bukan class",
      "D": "Method placeOrder harus berjenis static"
    },
    "answer": "A",
    "explanation": {
      "correct": "Variabel `orderService` hanya dideklarasikan tanpa diinisialisasi nilai (null) dan tidak memiliki constructor injection ataupun anotasi `@Autowired`. Akibatnya, saat method `placeOrder` dipanggil pada objek null, JVM melempar NullPointerException.",
      "A": "Opsi A benar karena dependency orderService belum di-inject oleh Spring.",
      "B": "Opsi B salah karena controller memang dirancang untuk memanggil service layer.",
      "C": "Opsi C salah karena Spring mendukung injeksi kelas konkret maupun interface.",
      "D": "Opsi D salah karena method service dalam Spring berbasis instance bean."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-073",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi di file `application.properties` berikut agar aplikasi berjalan pada port 8081:\n\n```java\n# application.properties\nserver.port=8081\nspring.application.name=my-service\n```",
    "options": {
      "A": "server.port=8081",
      "B": "app.port=8081",
      "C": "tomcat.port=8081",
      "D": "http.port=8081"
    },
    "answer": "A",
    "explanation": {
      "correct": "Properti standar di Spring Boot untuk mengatur port listening HTTP server adalah `server.port`.",
      "A": "Opsi A benar karena `server.port` adalah key konfigurasi resmi Spring Boot.",
      "B": "Opsi B salah karena bukan key standar Spring Boot.",
      "C": "Opsi C salah karena bukan key standar.",
      "D": "Opsi D salah karena bukan key standar."
    },
    "jobId": "fullstack",
    "code": "# application.properties\nserver.port=8081\nspring.application.name=my-service"
  },
  {
    "id": "FB-074",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi `@PostConstruct` pada sebuah class bean di Spring?",
    "options": {
      "A": "Menjalankan method inisialisasi segera setelah dependency injection selesai dilakukan oleh Spring",
      "B": "Menangani request HTTP POST dari klien",
      "C": "Menjalankan method saat bean dihancurkan dari memori",
      "D": "Melakukan validasi database sebelum aplikasi berjalan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method yang dianotasi dengan `@PostConstruct` akan otomatis dipanggil oleh Spring container tepat setelah seluruh proses dependency injection pada bean tersebut selesai dan sebelum bean siap digunakan oleh komponen lain.",
      "A": "Opsi A benar sesuai siklus hidup bean Spring untuk @PostConstruct.",
      "B": "Opsi B salah karena HTTP POST ditangani oleh @PostMapping.",
      "C": "Opsi C salah karena pembersihan saat destroy dilakukan oleh @PreDestroy.",
      "D": "Opsi D salah karena bukan untuk validasi database."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-075",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari eksekusi kode Java berikut yang melibatkan blok try-catch-finally?\n\n```java\npublic static int test() {\n  try {\n    return 10;\n  } finally {\n    return 40;\n  }\n}\n```",
    "options": {
      "A": "40",
      "B": "10",
      "C": "20",
      "D": "30"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika blok `finally` mengandung statement `return`, nilai return dari blok finally (yaitu 40) akan menimpa (override) nilai return dari blok try (10) maupun catch. Meskipun ini dianggap code smell di Java, JVM akan mengembalikan 40.",
      "A": "Opsi A benar karena return di blok finally menimpa nilai return sebelumnya.",
      "B": "Opsi B salah karena return 10 diabaikan akibat return di finally.",
      "C": "Opsi C salah karena tidak ada exception yang terjadi.",
      "D": "Opsi D salah karena return value dari finally adalah 40."
    },
    "jobId": "fullstack",
    "code": "public static int test() {\n  try {\n    return 10;\n  } finally {\n    return 40;\n  }\n}"
  },
  {
    "id": "FB-076",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Mengapa mengekspos Entity JPA secara langsung sebagai Request/Response body di Controller merupakan bad practice (anti-pattern)?\n\n```java\n// DTO Pattern\npublic record UserResponseDto(Long id, String name, String email) {}\n\n@GetMapping(\"/{id}\")\npublic UserResponseDto getUser(@PathVariable Long id) {\n  return userService.getUserDto(id);\n}\n```",
    "options": {
      "A": "Menimbulkan risiko security over-posting (mass assignment), kebocoran struktur tabel database internal, dan masalah serialisasi cyclic reference JSON pada relasi bidirectional",
      "B": "Entity JPA tidak bisa diserialisasi ke JSON oleh Jackson",
      "C": "Membuat query database menjadi 10x lebih lambat",
      "D": "Spring Boot melarang kompilasi kelas Entity di Controller"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menggunakan DTO (Data Transfer Object) memisahkan domain database dari kontrak API eksternal, mencegah over-posting, menghindari cyclic reference infinite loop saat serialisasi Jackson, dan memungkinkan validasi input terpisah.",
      "A": "Opsi A benar karena merangkum semua bahaya mengekspos entity secara langsung.",
      "B": "Opsi B salah karena Jackson bisa menserialisasi entity, namun rawan error relasi circular.",
      "C": "Opsi C salah karena performa query tidak dipengaruhi langsung oleh controller.",
      "D": "Opsi D salah karena Spring Boot tidak melarangnya secara kompilasi, namun ini adalah anti-pattern."
    },
    "jobId": "fullstack",
    "code": "// DTO Pattern\npublic record UserResponseDto(Long id, String name, String email) {}\n\n@GetMapping(\"/{id}\")\npublic UserResponseDto getUser(@PathVariable Long id) {\n  return userService.getUserDto(id);\n}"
  },
  {
    "id": "FB-077",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah di Spring Web yang digunakan untuk mengekstrak parameter query string dari URL (contoh: `/api/products?category=electronics`)?",
    "options": {
      "A": "@RequestParam",
      "B": "@PathVariable",
      "C": "@RequestBody",
      "D": "@RequestHeader"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@RequestParam` digunakan untuk membaca nilai query parameter dari URL (`?key=value`) atau form-data parameter pada HTTP request.",
      "A": "Opsi A benar karena @RequestParam mengekstrak query string parameter.",
      "B": "Opsi B salah karena @PathVariable mengekstrak nilai dari path segmen URI.",
      "C": "Opsi C salah karena @RequestBody mengekstrak payload body.",
      "D": "Opsi D salah karena @RequestHeader mengekstrak header HTTP."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-078",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Aplikasi gagal melakukan start (ApplicationContext failed to start) dengan pesan: 'Parameter 0 of constructor in UserService required a bean of type UserRepository that could not be found'. Apa penyebab paling umum masalah ini?",
    "options": {
      "A": "Interface UserRepository belum dianotasi @Repository atau berada di luar package root komponen scan Spring Boot",
      "B": "Database PostgreSQL sedang down",
      "C": "Versi Java yang digunakan terlalu tinggi",
      "D": "File pom.xml belum menyertakan Lombok"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pesan error 'bean could not be found' berarti Spring IoC Container tidak dapat menemukan kandidat bean yang cocok. Hal ini biasanya terjadi karena interface repository belum discan (berada di luar base package utama) atau lupa meng-extend JpaRepository.",
      "A": "Opsi A benar karena masalah component scan dan deklarasi bean adalah penyebab utama error ini.",
      "B": "Opsi B salah karena database down akan memicu Connection refused error pada DataSource, bukan missing bean definition.",
      "C": "Opsi C salah karena bukan masalah ketidakcocokan versi Java.",
      "D": "Opsi D salah karena Lombok tidak memengaruhi registrasi bean repository."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-079",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi method signature controller agar Spring Boot memvalidasi payload DTO secara otomatis menggunakan Hibernate Validator:\n\n```java\n@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(@___ @RequestBody UserCreateDto dto) {\n  return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(dto));\n}\n```",
    "options": {
      "A": "public ResponseEntity<?> create(@___ @RequestBody UserDto dto)",
      "B": "public ResponseEntity<?> create(@Verified @RequestBody UserDto dto)",
      "C": "public ResponseEntity<?> create(@Check @RequestBody UserDto dto)",
      "D": "public ResponseEntity<?> create(@Sanitize @RequestBody UserDto dto)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Valid` (dari Jakarta Validation) atau `@Validated` (dari Spring) memberi tahu framework untuk mengeksekusi aturan validasi (seperti @NotNull, @Size) yang ada pada objek sebelum method controller dijalankan.",
      "A": "Opsi A benar karena `@Valid` adalah anotasi standar pemicu validasi DTO.",
      "B": "Opsi B salah karena bukan anotasi validasi Java/Spring.",
      "C": "Opsi C salah karena bukan anotasi validasi.",
      "D": "Opsi D salah karena bukan anotasi validasi."
    },
    "jobId": "fullstack",
    "code": "@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(@___ @RequestBody UserCreateDto dto) {\n  return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(dto));\n}"
  },
  {
    "id": "FB-080",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa nilai dari `list.size()` setelah potongan kode Java Collections berikut dijalankan?\n\n```java\nSet<String> set = new HashSet<>();\nset.add(\"Java\");\nset.add(\"Spring\");\nset.add(\"Java\");\nList<String> list = new ArrayList<>(set);\nSystem.out.println(list.size());\n```",
    "options": {
      "A": "2",
      "B": "3",
      "C": "1",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Set (seperti `HashSet`) tidak mengizinkan elemen duplikat. Menambahkan 'Java', 'Spring', dan 'Java' menghasilkan set dengan 2 elemen ('Java' dan 'Spring'). Saat disalin ke List, ukuran list adalah 2.",
      "A": "Opsi A benar karena HashSet mengeliminasi duplikat elemen 'Java'.",
      "B": "Opsi B salah karena elemen 'Java' yang kedua diabaikan oleh Set.",
      "C": "Opsi C salah karena ada dua elemen unik yang tersisa.",
      "D": "Opsi D salah karena set memiliki elemen."
    },
    "jobId": "fullstack",
    "code": "Set<String> set = new HashSet<>();\nset.add(\"Java\");\nset.add(\"Spring\");\nset.add(\"Java\");\nList<String> list = new ArrayList<>(set);\nSystem.out.println(list.size());"
  },
  {
    "id": "FB-081",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa tujuan utama dari dependency `spring-boot-starter-actuator` dalam aplikasi Spring Boot?",
    "options": {
      "A": "Menyediakan endpoint bawaan untuk memantau metrik kesehatan aplikasi (health check), info, audit, dan performa secara production-ready",
      "B": "Menghasilkan tampilan UI berbasis React secara otomatis",
      "C": "Menggantikan peran database relational",
      "D": "Mengenkripsi kode sumber Java agar tidak bisa didekompilasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Boot Actuator menyediakan fitur pemantauan sistem, seperti endpoint `/actuator/health` untuk Kubernetes liveness/readiness probes, `/actuator/metrics`, dan `/actuator/info`.",
      "A": "Opsi A benar sesuai fungsi monitoring dan manajemen produksi dari Spring Boot Actuator.",
      "B": "Opsi B salah karena Actuator bukan pembuat antarmuka UI frontend.",
      "C": "Opsi C salah karena Actuator bukan database.",
      "D": "Opsi D salah karena Actuator tidak melakukan enkripsi bytecode."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-082",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk mendeklarasikan sebuah method penghasil Bean di dalam class `@Configuration`?",
    "options": {
      "A": "@Bean",
      "B": "@Component",
      "C": "@Inject",
      "D": "@Produce"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di dalam kelas yang dianotasi `@Configuration`, method yang dianotasi `@Bean` akan dieksekusi oleh Spring container dan nilai kembaliannya akan didaftarkan sebagai bean di ApplicationContext.",
      "A": "Opsi A benar karena @Bean adalah anotasi tingkat method untuk deklarasi bean kustom.",
      "B": "Opsi B salah karena @Component adalah anotasi tingkat kelas (stereotype).",
      "C": "Opsi C salah karena @Inject adalah anotasi JSR-330 untuk menyuntikkan bean (mirip @Autowired).",
      "D": "Opsi D salah karena @Produce bukan anotasi Spring."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-083",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari pemanggilan method String berikut di Java?\n\n```java\nString s = \"spring boot\";\nSystem.out.println(s.toUpperCase());\n```",
    "options": {
      "A": "\"SPRING BOOT\"",
      "B": "\"spring boot\"",
      "C": "\"Spring Boot\"",
      "D": "null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `toUpperCase()` pada kelas String menghasilkan string baru dengan seluruh karakter alfabet diubah menjadi huruf besar/kapital.",
      "A": "Opsi A benar karena seluruh huruf diubah menjadi huruf kapital.",
      "B": "Opsi B salah karena huruf kecil adalah hasil toLowerCase().",
      "C": "Opsi C salah karena bukan title case.",
      "D": "Opsi D salah karena string tidak bernilai null."
    },
    "jobId": "fullstack",
    "code": "String s = \"spring boot\";\nSystem.out.println(s.toUpperCase());"
  },
  {
    "id": "FB-084",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Method controller berikut seharusnya mengembalikan status HTTP 201 Created saat data berhasil disimpan, namun selalu mengembalikan 200 OK. Bagaimana cara memperbaikinya secara best practice?\n\n```java\n@PostMapping\npublic ResponseEntity<User> createUser(@RequestBody UserDto dto) {\n  User result = userService.save(dto);\n  // Seharusnya return 201 Created\n  return ResponseEntity.ok(result);\n}\n```",
    "options": {
      "A": "Ubah return menjadi `ResponseEntity.status(HttpStatus.CREATED).body(result)`",
      "B": "Tambahkan anotasi @ResponseStatus(HttpStatus.BAD_REQUEST)",
      "C": "Ganti nama method menjadi created()",
      "D": "Ganti tipe kembalian menjadi void"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ResponseEntity.ok(...)` secara eksplisit menetapkan status code HTTP 200 OK. Untuk mengembalikan HTTP 201 Created sesuai standar REST, gunakan `ResponseEntity.status(HttpStatus.CREATED).body(result)` atau `ResponseEntity.created(uri).body(result)`.",
      "A": "Opsi A benar karena menetapkan HTTP status 201 Created secara tepat.",
      "B": "Opsi B salah karena BAD_REQUEST adalah status error 400.",
      "C": "Opsi C salah karena nama method tidak memengaruhi HTTP status code.",
      "D": "Opsi D salah karena void tanpa anotasi akan tetap menghasilkan status default 200."
    },
    "jobId": "fullstack",
    "code": "@PostMapping\npublic ResponseEntity<User> createUser(@RequestBody UserDto dto) {\n  User result = userService.save(dto);\n  // Seharusnya return 201 Created\n  return ResponseEntity.ok(result);\n}"
  },
  {
    "id": "FB-085",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Dalam konsep OOP Java, apa sebutan untuk kemampuan class anak (subclass) menyediakan implementasi spesifik dari method yang sudah didefinisikan di class induk (superclass)?",
    "options": {
      "A": "Method Overriding",
      "B": "Method Overloading",
      "C": "Encapsulation",
      "D": "Composition"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method Overriding terjadi ketika subclass menulis ulang method milik superclass dengan nama, parameter, dan return type yang sama persis (biasanya dianotasi `@Override`).",
      "A": "Opsi A benar karena itu adalah definisi resmi Method Overriding.",
      "B": "Opsi B salah karena overloading terjadi dalam satu kelas dengan nama sama tapi parameter berbeda.",
      "C": "Opsi C salah karena enkapsulasi adalah penyembunyian detail internal.",
      "D": "Opsi D salah karena komposisi adalah hubungan HAS-A antar objek."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-086",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan operasi pembagian integer berikut di Java: `int result = 7 / 2;`. Berapakah nilai dari variabel 'result'?\n\n```java\nint a = 7;\nint b = 2;\nint result = a / b;\nSystem.out.println(result);\n```",
    "options": {
      "A": "3",
      "B": "3.5",
      "C": "4",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Java, pembagian antara dua bilangan integer menghasilkan bilangan integer (truncating division), di mana bagian desimal dibuang. 7 / 2 menghasilkan 3 (bukan 3.5).",
      "A": "Opsi A benar karena pembagian integer membuang angka desimal di belakang koma.",
      "B": "Opsi B salah karena tipe int tidak dapat menyimpan desimal.",
      "C": "Opsi C salah karena pembagian integer tidak melakukan pembulatan ke atas (ceiling).",
      "D": "Opsi D salah karena hasil bagi bukan nol."
    },
    "jobId": "fullstack",
    "code": "int a = 7;\nint b = 2;\nint result = a / b;\nSystem.out.println(result);"
  },
  {
    "id": "FB-087",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi mapping untuk operasi penghapusan data pada REST endpoint berikut:\n\n```java\n@___(\"/{id}\")\npublic ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n  userService.delete(id);\n  return ResponseEntity.noContent().build();\n}\n```",
    "options": {
      "A": "@DeleteMapping(\"/{id}\")",
      "B": "@RemoveMapping(\"/{id}\")",
      "C": "@DestroyMapping(\"/{id}\")",
      "D": "@EraseMapping(\"/{id}\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@DeleteMapping` adalah shortcut annotation Spring Web untuk `@RequestMapping(method = RequestMethod.DELETE)` yang menangani HTTP DELETE request.",
      "A": "Opsi A benar karena @DeleteMapping adalah anotasi resmi Spring Web.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "jobId": "fullstack",
    "code": "@___(\"/{id}\")\npublic ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n  userService.delete(id);\n  return ResponseEntity.noContent().build();\n}"
  },
  {
    "id": "FB-088",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara interface dan class abstrak (abstract class) di Java sebelum Java 8?",
    "options": {
      "A": "Class abstrak dapat memiliki state (instance variables) dan constructor, sedangkan interface hanya dapat berisi konstanta dan method abstract tanpa implementasi",
      "B": "Interface dapat diinstansiasi dengan keyword new",
      "C": "Sebuah kelas dapat mewarisi (extend) lebih dari satu class abstrak",
      "D": "Tidak ada perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Abstract class bisa memiliki constructor, instance fields/state, dan method konkret. Interface (khususnya pra-Java 8) murni merupakan kontrak method tanpa state dan tanpa implementasi (kecuali default method sejak Java 8).",
      "A": "Opsi A benar karena mendefinisikan perbedaan kepemilikan state dan konstruktor secara tepat.",
      "B": "Opsi B salah karena interface tidak bisa diinstansiasi langsung.",
      "C": "Opsi C salah karena Java hanya mendukung single class inheritance.",
      "D": "Opsi D salah karena perbedaannya fundamental."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-089",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Manakah cara penanganan exception global yang paling bersih dan modular di aplikasi Spring Boot REST API?\n\n```java\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n  @ExceptionHandler(ResourceNotFoundException.class)\n  public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n    return ResponseEntity.status(HttpStatus.NOT_FOUND)\n                         .body(new ErrorResponse(404, ex.getMessage()));\n  }\n}\n```",
    "options": {
      "A": "Membuat kelas `@RestControllerAdvice` yang berisi method-method `@ExceptionHandler` untuk menangkap dan memformat pesan error ke format JSON yang konsisten",
      "B": "Menulis blok try-catch di setiap baris kode method controller",
      "C": "Membiarkan exception melempar stack trace langsung ke browser klien",
      "D": "Menangkap semua error menggunakan `catch (Exception e) { return null; }`"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best practice standar Spring Boot adalah menggunakan `@RestControllerAdvice` (Global Exception Handler) untuk memisahkan penanganan error dari logika bisnis dan menghasilkan struktur respon error standar (misalnya RFC 7807 Problem Details).",
      "A": "Opsi A benar karena memusatkan penanganan error dan menjaga controller tetap bersih.",
      "B": "Opsi B salah karena menyebabkan duplikasi kode try-catch di mana-mana.",
      "C": "Opsi C salah karena membocorkan stack trace internal adalah risiko keamanan serius.",
      "D": "Opsi D salah karena menelan error tanpa pesan menyulitkan debugging."
    },
    "jobId": "fullstack",
    "code": "@RestControllerAdvice\npublic class GlobalExceptionHandler {\n  @ExceptionHandler(ResourceNotFoundException.class)\n  public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n    return ResponseEntity.status(HttpStatus.NOT_FOUND)\n                         .body(new ErrorResponse(404, ex.getMessage()));\n  }\n}"
  },
  {
    "id": "FB-090",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari eksekusi operator ternary pada kode Java berikut?\n\n```java\nint age = 20;\nString status = (age >= 18) ? \"Dewasa\" : \"Anak-anak\";\nSystem.out.println(status);\n```",
    "options": {
      "A": "\"Dewasa\"",
      "B": "\"Anak-anak\"",
      "C": "\"20\"",
      "D": "Compile error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kondisi `age >= 18` bernilai `20 >= 18` yaitu true. Karena true, cabang pertama setelah tanda tanya ('Dewasa') dievaluasi dan di-assign ke variabel status.",
      "A": "Opsi A benar karena kondisi true mengevaluasi cabang pertama 'Dewasa'.",
      "B": "Opsi B salah karena cabang kedua hanya dievaluasi jika kondisi bernilai false.",
      "C": "Opsi C salah karena nilai yang dikembalikan bukan angka 20.",
      "D": "Opsi D salah karena ekspresi ternary valid di Java."
    },
    "jobId": "fullstack",
    "code": "int age = 20;\nString status = (age >= 18) ? \"Dewasa\" : \"Anak-anak\";\nSystem.out.println(status);"
  },
  {
    "id": "FB-091",
    "level": "beginner",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "File manakah dalam proyek Maven yang digunakan untuk mengelola konfigurasi dependensi library dan build plugin Java?",
    "options": {
      "A": "pom.xml",
      "B": "build.gradle",
      "C": "package.json",
      "D": "application.yml"
    },
    "answer": "A",
    "explanation": {
      "correct": "`pom.xml` (Project Object Model) adalah file konfigurasi inti pada proyek yang menggunakan Apache Maven untuk mendefinisikan dependencies, plugins, dan konfigurasi build.",
      "A": "Opsi A benar karena pom.xml adalah file konfigurasi utama Maven.",
      "B": "Opsi B salah karena build.gradle digunakan pada Gradle, bukan Maven.",
      "C": "Opsi C salah karena package.json digunakan pada Node.js/npm.",
      "D": "Opsi D salah karena application.yml adalah file konfigurasi runtime Spring Boot."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-092",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang wajib diletakkan di atas sebuah kelas Java agar kelas tersebut dipetakan sebagai tabel database oleh JPA?",
    "options": {
      "A": "@Entity",
      "B": "@Table",
      "C": "@Model",
      "D": "@Schema"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Entity` adalah anotasi wajib spesifikasi JPA yang menandakan bahwa class Java tersebut merepresentasikan tabel relasional di database dan siklus hidupnya dikelola oleh EntityManager.",
      "A": "Opsi A benar karena @Entity adalah syarat mutlak kelas entitas JPA.",
      "B": "Opsi B salah karena @Table bersifat opsional (digunakan jika nama tabel berbeda dari nama kelas).",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi entitas JPA."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-093",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menandai suatu field sebagai Primary Key pada entitas JPA?",
    "options": {
      "A": "@Id",
      "B": "@PrimaryKey",
      "C": "@Key",
      "D": "@Unique"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Id` (dari javax.persistence atau jakarta.persistence) adalah anotasi wajib untuk mendeklarasikan identifier / primary key dari sebuah entitas JPA.",
      "A": "Opsi A benar karena @Id adalah anotasi resmi JPA untuk primary key.",
      "B": "Opsi B salah karena @PrimaryKey bukan anotasi standar JPA.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena @Unique bukan anotasi primary key."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-094",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi strategi pembuatan ID otomatis pada JPA berikut agar database memanfaatkan fitur auto-increment / identity column bawaan database:\n\n```java\n@Id\n@GeneratedValue(strategy = ___)\nprivate Long id;\n```",
    "options": {
      "A": "GenerationType.IDENTITY",
      "B": "GenerationType.AUTO",
      "C": "GenerationType.SEQUENCE",
      "D": "GenerationType.TABLE"
    },
    "answer": "A",
    "explanation": {
      "correct": "`GenerationType.IDENTITY` mengandalkan kolom identity bawaan database (seperti AUTO_INCREMENT di MySQL atau SERIAL/IDENTITY di PostgreSQL) untuk men-generate nilai primary key unik saat baris baru di-insert.",
      "A": "Opsi A benar karena IDENTITY memanfaatkan kolom auto-increment database.",
      "B": "Opsi B salah karena AUTO menyerahkan keputusan ke provider JPA.",
      "C": "Opsi C salah karena SEQUENCE menggunakan objek sequence database khusus (umum di Oracle/PostgreSQL).",
      "D": "Opsi D salah karena TABLE menggunakan tabel pembantu terpisah yang lebih lambat."
    },
    "jobId": "fullstack",
    "code": "@Id\n@GeneratedValue(strategy = ___)\nprivate Long id;"
  },
  {
    "id": "FB-095",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Apa tipe kembalian (return type) dari method `findById(ID id)` pada interface Spring Data JpaRepository?\n\n```java\npublic interface UserRepository extends JpaRepository<User, Long> {\n  // Mengembalikan Optional<User>\n  // Optional<User> findById(Long id);\n}\n```",
    "options": {
      "A": "Optional<T>",
      "B": "T",
      "C": "List<T>",
      "D": "boolean"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Spring Data JPA, `findById()` mengembalikan `Optional<T>` untuk mencegah bahaya NullPointerException secara langsung jika entitas dengan ID tersebut tidak ditemukan di database.",
      "A": "Opsi A benar karena findById mengembalikan wrapper Optional<T>.",
      "B": "Opsi B salah karena mengembalikan T langsung adalah perilaku method getById/getReferenceById atau versi lama JpaRepository.",
      "C": "Opsi C salah karena ID unik hanya menghasilkan maksimal satu entitas, bukan List.",
      "D": "Opsi D salah karena existsById yang mengembalikan boolean."
    },
    "jobId": "fullstack",
    "code": "public interface UserRepository extends JpaRepository<User, Long> {\n  // Mengembalikan Optional<User>\n  // Optional<User> findById(Long id);\n}"
  },
  {
    "id": "FB-096",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Entitas User berikut memicu error saat aplikasi Spring Boot dijalankan: 'Entity does not have an Id'. Bagian mana yang kurang?\n\n```java\n@Entity\npublic class User {\n  private Long id;\n  private String name;\n}\n```",
    "options": {
      "A": "Field id belum dianotasi dengan anotasi @Id",
      "B": "Tipe data id harus int primitif",
      "C": "Kelas harus meng-implement Serializable",
      "D": "Nama tabel harus huruf besar semua"
    },
    "answer": "A",
    "explanation": {
      "correct": "Setiap kelas yang dianotasi `@Entity` diwajibkan oleh spesifikasi JPA untuk memiliki minimal satu field identifier yang ditandai dengan anotasi `@Id`.",
      "A": "Opsi A benar karena anotasi @Id wajib ada pada setiap entitas JPA.",
      "B": "Opsi B salah karena Long adalah wrapper type yang sangat direkomendasikan untuk ID.",
      "C": "Opsi C salah karena Serializable tidak wajib di JPA modern.",
      "D": "Opsi D salah karena nama tabel case-insensitive di sebagian besar konfigurasi."
    },
    "jobId": "fullstack",
    "code": "@Entity\npublic class User {\n  private Long id;\n  private String name;\n}"
  },
  {
    "id": "FB-097",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk memberitahu JPA agar suatu field pada kelas Entity TIDAK disimpan / TIDAK dipetakan ke kolom tabel database?",
    "options": {
      "A": "@Transient",
      "B": "@Ignore",
      "C": "@Skip",
      "D": "@Hidden"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Transient` memberi tahu provider JPA/Hibernate untuk mengabaikan field tersebut sehingga tidak ada kolom database yang dibuat atau dibaca untuk field tersebut.",
      "A": "Opsi A benar karena @Transient adalah anotasi resmi JPA untuk field non-persistent.",
      "B": "Opsi B salah karena @Ignore bukan anotasi JPA.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi JPA."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-098",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Bagaimana cara menangani hasil dari `userRepository.findById(id)` secara aman dan idiomatis di Java 8+ jika data tidak ditemukan?\n\n```java\nOptional<User> userOpt = userRepository.findById(id);\nUser user = userOpt.orElseThrow(() -> new ResourceNotFoundException(\"User tidak ditemukan\"));\n```",
    "options": {
      "A": "userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(\"User tidak ditemukan\"))",
      "B": "userRepository.findById(id).get() langsung tanpa pengecekan",
      "C": "if (userRepository.findById(id) == null)",
      "D": "userRepository.findById(id).toString()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memanggil `.get()` pada Optional kosong akan melempar `NoSuchElementException`. Best practice adalah menggunakan `.orElseThrow(...)` untuk melempar custom exception yang nantinya dapat ditangkap oleh `@ControllerAdvice` dan menghasilkan HTTP 404.",
      "A": "Opsi A benar karena orElseThrow menangani ketiadaan data secara deklaratif dan bersih.",
      "B": "Opsi B salah karena memanggil .get() langsung berisiko melempar NoSuchElementException jika data null.",
      "C": "Opsi C salah karena method findById() mengembalikan objek Optional, bukan null secara referensi.",
      "D": "Opsi D salah karena .toString() tidak mengembalikan objek entitas."
    },
    "jobId": "fullstack",
    "code": "Optional<User> userOpt = userRepository.findById(id);\nUser user = userOpt.orElseThrow(() -> new ResourceNotFoundException(\"User tidak ditemukan\"));"
  },
  {
    "id": "FB-099",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Interface inti apakah di Spring Data JPA yang menyediakan method CRUD siap pakai seperti `save()`, `findAll()`, `deleteById()`, serta kemampuan pagination?",
    "options": {
      "A": "JpaRepository",
      "B": "CrudService",
      "C": "EntityManagerFactory",
      "D": "JdbcTemplate"
    },
    "answer": "A",
    "explanation": {
      "correct": "`JpaRepository` meng-extend `PagingAndSortingRepository` dan `CrudRepository`, menyediakan operasi CRUD lengkap, flushing persistence context, dan batch deletes.",
      "A": "Opsi A benar karena JpaRepository adalah interface standar Spring Data JPA.",
      "B": "Opsi B salah karena bukan interface bawaan Spring Data.",
      "C": "Opsi C salah karena EntityManagerFactory adalah interface level rendah JPA.",
      "D": "Opsi D salah karena JdbcTemplate adalah abstraction helper untuk SQL murni."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-100",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi deklarasi interface Spring Data JPA berikut agar mengelola entitas Product dengan tipe primary key Long:\n\n```java\npublic interface ProductRepository extends JpaRepository<Product, ___> {\n  List<Product> findByCategory(String category);\n}\n```",
    "options": {
      "A": "JpaRepository<Product, Long>",
      "B": "JpaRepository<Long, Product>",
      "C": "JpaRepository<Product>",
      "D": "JpaRepository<Table, ID>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Interface `JpaRepository<T, ID>` menerima 2 parameter generic: parameter pertama `T` adalah kelas Entitas (`Product`), dan parameter kedua `ID` adalah tipe data Primary Key (`Long`).",
      "A": "Opsi A benar karena urutan generic adalah <Entity, IDType>.",
      "B": "Opsi B salah karena urutan terbalik.",
      "C": "Opsi C salah karena membutuhkan 2 parameter generic.",
      "D": "Opsi D salah karena sintaks generic salah."
    },
    "jobId": "fullstack",
    "code": "public interface ProductRepository extends JpaRepository<Product, ___> {\n  List<Product> findByCategory(String category);\n}"
  },
  {
    "id": "FB-101",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Perhatikan operasi save berikut. Apa yang dikembalikan oleh method `userRepository.save(user)` pada entitas baru?\n\n```java\nUser newUser = new User(\"Budi\", \"budi@mail.com\");\nUser savedUser = userRepository.save(newUser);\nSystem.out.println(savedUser.getId()); // ID terisi otomatis\n```",
    "options": {
      "A": "Instance entitas yang telah berstatus managed dan memiliki field ID yang sudah terisi otomatis dari database",
      "B": "Angka integer berupa jumlah baris yang terpengaruh (1)",
      "C": "Nilai boolean true",
      "D": "null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `save()` pada JpaRepository mengembalikan instance entitas yang tersimpan. Untuk entitas baru, provider JPA akan melakukan persist/insert dan mengisi field ID yang di-generate database pada instance kembalian tersebut.",
      "A": "Opsi A benar karena save() me-return objek managed lengkap dengan generated ID.",
      "B": "Opsi B salah karena save() tidak mengembalikan integer baris.",
      "C": "Opsi C salah karena save() tidak me-return boolean.",
      "D": "Opsi D salah karena operasi simpan berhasil tidak mengembalikan null."
    },
    "jobId": "fullstack",
    "code": "User newUser = new User(\"Budi\", \"budi@mail.com\");\nUser savedUser = userRepository.save(newUser);\nSystem.out.println(savedUser.getId()); // ID terisi otomatis"
  },
  {
    "id": "FB-102",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari method query derivation di Spring Data JPA (contoh membuat method bernama `findByEmail(String email)`)?",
    "options": {
      "A": "Spring Data JPA otomatis mengurai nama method dan menghasilkan query SQL/JPQL secara otomatis tanpa perlu menulis query manual",
      "B": "Method tersebut harus selalu ditulis implementasi query SQL manualnya",
      "C": "Hanya berfungsi jika query ditulis di stored procedure",
      "D": "Method hanya untuk keperluan dokumentasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Data JPA memiliki mekanisme Method Query Derivation yang mem-parsing nama method (seperti findByEmail, findByAgeGreaterThan) dan secara otomatis menghasilkan query SQL yang sesuai saat runtime.",
      "A": "Opsi A benar sesuai fitur Query Creation from Method Names di Spring Data JPA.",
      "B": "Opsi B salah karena justru tidak perlu menulis SQL manual.",
      "C": "Opsi C salah karena tidak memerlukan stored procedure.",
      "D": "Opsi D salah karena method ini dieksekusi secara nyata."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-103",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Kode berikut mencoba mengubah status user menjadi INACTIVE, namun perubahan tidak pernah tersimpan ke database. Mengapa?\n\n```java\npublic void deactivate(Long id) {\n  User user = userRepository.findById(id).orElseThrow();\n  user.setStatus(Status.INACTIVE);\n  // Tidak ada @Transactional dan tidak ada userRepository.save(user)\n}\n```",
    "options": {
      "A": "Method service kurang dianotasi `@Transactional`, sehingga Hibernate tidak melakukan dirty checking dan auto-flush perubahan ke database",
      "B": "User harus dihapus dan dibuat baru",
      "C": "Enum tidak bisa di-update",
      "D": "Optional harus di-cast ke User"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di dalam method yang dianotasi `@Transactional`, entitas yang di-load berada dalam status 'managed'. Hibernate akan melakukan dirty checking di akhir transaksi dan otomatis mengeksekusi query UPDATE saat transaksi di-commit (flush) tanpa harus memanggil `save()` manual.",
      "A": "Opsi A benar karena tanpa @Transactional pada service, konteks transaksi tidak aktif untuk dirty checking commit.",
      "B": "Opsi B salah karena update tidak memerlukan penghapusan data.",
      "C": "Opsi C salah karena field enum sangat umum di-update.",
      "D": "Opsi D salah karena pemanggilan orElseThrow sudah me-return objek User."
    },
    "jobId": "fullstack",
    "code": "public void deactivate(Long id) {\n  User user = userRepository.findById(id).orElseThrow();\n  user.setStatus(Status.INACTIVE);\n  // Tidak ada @Transactional dan tidak ada userRepository.save(user)\n}"
  },
  {
    "id": "FB-104",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara FetchType.LAZY dan FetchType.EAGER pada relasi entitas JPA?",
    "options": {
      "A": "LAZY menunda pemuatan entitas terkait hingga data tersebut benar-benar diakses di kode, sedangkan EAGER langsung memuat entitas terkait secara bersamaan saat entitas utama di-load",
      "B": "LAZY hanya untuk database MySQL, EAGER untuk PostgreSQL",
      "C": "EAGER lebih hemat memori dibanding LAZY",
      "D": "Tidak ada perbedaan performa"
    },
    "answer": "A",
    "explanation": {
      "correct": "FetchType.LAZY adalah mekanisme on-demand loading (data relasi baru di-query saat getter-nya dipanggil). FetchType.EAGER langsung mem-fetch data relasi via JOIN atau query terpisah seketika.",
      "A": "Opsi A benar sesuai definisi resmi LAZY vs EAGER fetching.",
      "B": "Opsi B salah karena fetching strategy independen dari jenis database.",
      "C": "Opsi C salah karena EAGER sering kali memboroskan memori dengan me-load data yang tidak diperlukan.",
      "D": "Opsi D salah karena pemilihan fetching strategy sangat krusial bagi performa."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-105",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menentukan nama tabel di database jika nama tabel berbeda dengan nama kelas entitas Java?",
    "options": {
      "A": "@Table(name = \"tbl_users\")",
      "B": "@Entity(table = \"tbl_users\")",
      "C": "@Schema(name = \"tbl_users\")",
      "D": "@DatabaseTable"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Table(name = \"nama_tabel\")` digunakan secara opsional di atas kelas `@Entity` untuk menentukan nama tabel fisik di database secara spesifik.",
      "A": "Opsi A benar karena anotasi @Table memiliki atribut name.",
      "B": "Opsi B salah karena atribut table tidak ada pada anotasi @Entity.",
      "C": "Opsi C salah karena bukan anotasi pemetaan nama tabel JPA.",
      "D": "Opsi D salah karena bukan anotasi JPA standar."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-106",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada method repository berikut agar Spring Data JPA mengeksekusi custom query menggunakan JPQL:\n\n```java\npublic interface UserRepository extends JpaRepository<User, Long> {\n  @___(\"SELECT u FROM User u WHERE u.email = :email\")\n  Optional<User> findUserByEmail(@Param(\"email\") String email);\n}\n```",
    "options": {
      "A": "@Query",
      "B": "@Sql",
      "C": "@Jpql",
      "D": "@Execute"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Query(\"SELECT u FROM User u WHERE u.email = :email\")` digunakan untuk mendefinisikan query JPQL kustom secara deklaratif di atas method interface repository.",
      "A": "Opsi A benar karena @Query adalah anotasi standar penulisan query di Spring Data JPA.",
      "B": "Opsi B salah karena bukan anotasi query Spring Data JPA.",
      "C": "Opsi C salah karena bukan anotasi resmi.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "fullstack",
    "code": "public interface UserRepository extends JpaRepository<User, Long> {\n  @___(\"SELECT u FROM User u WHERE u.email = :email\")\n  Optional<User> findUserByEmail(@Param(\"email\") String email);\n}"
  },
  {
    "id": "FB-107",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Perintah SQL manakah yang digunakan untuk mengambil data dari satu atau lebih tabel database?",
    "options": {
      "A": "SELECT",
      "B": "UPDATE",
      "C": "INSERT",
      "D": "DELETE"
    },
    "answer": "A",
    "explanation": {
      "correct": "`SELECT` adalah perintah utama dalam kelompok DQL (Data Query Language) di SQL untuk membaca dan menampilkan data dari tabel database.",
      "A": "Opsi A benar karena SELECT digunakan untuk query pembacaan data.",
      "B": "Opsi B salah karena UPDATE untuk mengubah data.",
      "C": "Opsi C salah karena INSERT untuk menyisipkan data baru.",
      "D": "Opsi D salah karena DELETE untuk menghapus data."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-108",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Klausa SQL apakah yang digunakan untuk menyaring (filter) baris data berdasarkan kondisi tertentu?",
    "options": {
      "A": "WHERE",
      "B": "ORDER BY",
      "C": "GROUP BY",
      "D": "LIMIT"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa `WHERE` mengevaluasi kondisi boolean untuk setiap baris, hanya menyertakan baris yang memenuhi kondisi bernilai true dalam hasil query.",
      "A": "Opsi A benar karena WHERE adalah klausa filter baris di SQL.",
      "B": "Opsi B salah karena ORDER BY untuk pengurutan.",
      "C": "Opsi C salah karena GROUP BY untuk agregasi pengelompokan.",
      "D": "Opsi D salah karena LIMIT untuk membatasi kuantitas hasil baris."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-109",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Diberikan tabel 'products' dengan kolom 'price'. Berapakah hasil dari query SQL berikut jika tabel berisi harga: 10000, 25000, dan 15000?\n\n```sql\nSELECT MAX(price) FROM products;\n```",
    "options": {
      "A": "25000",
      "B": "10000",
      "C": "50000",
      "D": "16666.67"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi agregat `MAX(price)` mencari nilai numerik tertinggi di antara seluruh baris pada kolom price. Nilai terbesar dari 10000, 25000, dan 15000 adalah 25000.",
      "A": "Opsi A benar karena 25000 adalah nilai maksimum.",
      "B": "Opsi B salah karena 10000 adalah nilai MIN().",
      "C": "Opsi C salah karena 50000 adalah nilai SUM().",
      "D": "Opsi D salah karena 16666.67 adalah nilai AVG()."
    },
    "jobId": "fullstack",
    "code": "SELECT MAX(price) FROM products;"
  },
  {
    "id": "FB-110",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "debug",
    "question": "Query SQL berikut bermaksud mencari semua pengguna yang belum memiliki nomor telepon (bernilai NULL), namun selalu mengembalikan 0 baris. Apa kesalahannya?\n\n```sql\nSELECT * FROM users WHERE phone = NULL;\n```",
    "options": {
      "A": "Operator pembanding NULL harus menggunakan `IS NULL`, bukan `= NULL`",
      "B": "Nama tabel harus diapit tanda petik",
      "C": "Klausa WHERE harus diganti HAVING",
      "D": "NULL harus ditulis dalam tanda petik 'NULL'"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di SQL standar, `NULL` merepresentasikan ketiadaan nilai (unknown value), sehingga perbandingan kesetaraan apa pun dengan `= NULL` akan selalu menghasilkan UNKNOWN (falsy). Sintaks yang benar adalah `WHERE phone IS NULL`.",
      "A": "Opsi A benar karena pengecekan null di SQL wajib menggunakan operator IS NULL.",
      "B": "Opsi B salah karena tanda petik tidak wajib untuk nama tabel standar.",
      "C": "Opsi C salah karena HAVING untuk kondisi agregat.",
      "D": "Opsi D salah karena 'NULL' dengan tanda petik adalah string literal teks, bukan nilai NULL database."
    },
    "jobId": "fullstack",
    "code": "SELECT * FROM users WHERE phone = NULL;"
  },
  {
    "id": "FB-111",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Jenis JOIN manakah yang HANYA mengembalikan baris yang memiliki kecocokan (matching values) di kedua tabel yang digabungkan?",
    "options": {
      "A": "INNER JOIN",
      "B": "LEFT JOIN",
      "C": "RIGHT JOIN",
      "D": "FULL OUTER JOIN"
    },
    "answer": "A",
    "explanation": {
      "correct": "`INNER JOIN` menggabungkan dua tabel dan hanya menghasilkan baris di mana kondisi join terpenuhi pada kedua belah tabel.",
      "A": "Opsi A benar karena INNER JOIN hanya mengambil irisan data yang cocok di kedua tabel.",
      "B": "Opsi B salah karena LEFT JOIN menyertakan semua baris tabel kiri meskipun tabel kanan null.",
      "C": "Opsi C salah karena RIGHT JOIN menyertakan semua baris tabel kanan.",
      "D": "Opsi D salah karena FULL OUTER JOIN menyertakan semua baris dari kedua tabel."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-112",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi klausa SQL berikut agar hasil query diurutkan berdasarkan tanggal terbaru ke terlama:\n\n```sql\nSELECT id, title, created_at \nFROM articles \nORDER BY created_at ___;\n-- Mengurutkan dari artikel paling baru\n```",
    "options": {
      "A": "ORDER BY created_at DESC",
      "B": "ORDER BY created_at ASC",
      "C": "SORT BY created_at DESC",
      "D": "GROUP BY created_at DESC"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ORDER BY created_at DESC` mengurutkan baris data secara descending (menurun), yang untuk kolom timestamp berarti tanggal terbaru ditempatkan di baris paling atas.",
      "A": "Opsi A benar karena DESC mengurutkan dari nilai terbesar/terbaru ke terkecil/terlama.",
      "B": "Opsi B salah karena ASC mengurutkan dari terlama ke terbaru.",
      "C": "Opsi C salah karena SORT BY bukan klausa SQL standar.",
      "D": "Opsi D salah karena GROUP BY adalah untuk agregasi."
    },
    "jobId": "fullstack",
    "code": "SELECT id, title, created_at \nFROM articles \nORDER BY created_at ___;\n-- Mengurutkan dari artikel paling baru"
  },
  {
    "id": "FB-113",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "best-practice",
    "question": "Mengapa menggunakan `SELECT *` pada query aplikasi produksi dianggap sebagai bad practice?\n\n```sql\n-- Good Practice:\nSELECT id, username, email FROM users WHERE status = 'ACTIVE';\n\n-- Bad Practice (Avoid in prod):\nSELECT * FROM users WHERE status = 'ACTIVE';\n```",
    "options": {
      "A": "Menimbulkan pemborosan bandwidth jaringan, I/O database yang tidak efisien, dan rawan memecahkan aplikasi jika ada perubahan skema kolom",
      "B": "SELECT * selalu melempar error di PostgreSQL",
      "C": "SELECT * membatasi query maksimal hanya 10 baris",
      "D": "Tidak ada masalah, SELECT * justru selalu disarankan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menyebutkan kolom yang dibutuhkan secara spesifik (`SELECT id, name`) menghemat memori, mengurangi beban transfer jaringan, memungkinkan optimasi Index-Only Scan pada database, dan membuat kode lebih stabil saat ada penambahan kolom di tabel.",
      "A": "Opsi A benar karena menjelaskan dampak negatif performa dan arsitektur dari SELECT *.",
      "B": "Opsi B salah karena SELECT * adalah sintaks legal di PostgreSQL.",
      "C": "Opsi C salah karena SELECT * tidak membatasi baris.",
      "D": "Opsi D salah karena ini anti-pattern di lingkungan produksi."
    },
    "jobId": "fullstack",
    "code": "-- Good Practice:\nSELECT id, username, email FROM users WHERE status = 'ACTIVE';\n\n-- Bad Practice (Avoid in prod):\nSELECT * FROM users WHERE status = 'ACTIVE';"
  },
  {
    "id": "FB-114",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Perhatikan query paginasi berikut. Baris ke berapa sajakah yang akan dikembalikan oleh database (asumsi offset berbasis indeks 0)?\n\n```sql\nSELECT id, name FROM users ORDER BY id ASC LIMIT 10 OFFSET 10;\n```",
    "options": {
      "A": "Baris ke-11 hingga ke-20",
      "B": "Baris ke-1 hingga ke-10",
      "C": "Baris ke-10 saja",
      "D": "Baris ke-21 hingga ke-30"
    },
    "answer": "A",
    "explanation": {
      "correct": "`OFFSET 10` memerintahkan database untuk melewati 10 baris pertama, dan `LIMIT 10` memerintahkan database untuk mengambil maksimal 10 baris berikutnya (yaitu baris ke-11 sampai ke-20).",
      "A": "Opsi A benar karena OFFSET 10 melewati 10 baris pertama dan LIMIT 10 mengambil 10 baris berikutnya.",
      "B": "Opsi B salah karena baris 1-10 dilewati.",
      "C": "Opsi C salah karena query mengambil 10 baris, bukan 1 baris.",
      "D": "Opsi D salah karena OFFSET 20 yang mengambil baris 21-30."
    },
    "jobId": "fullstack",
    "code": "SELECT id, name FROM users ORDER BY id ASC LIMIT 10 OFFSET 10;"
  },
  {
    "id": "FB-115",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Klausa SQL apakah yang digunakan untuk memfilter hasil fungsi agregasi (seperti hanya menampilkan departemen dengan COUNT > 5)?",
    "options": {
      "A": "HAVING",
      "B": "WHERE",
      "C": "FILTER",
      "D": "LIMIT"
    },
    "answer": "A",
    "explanation": {
      "correct": "`HAVING` digunakan untuk menyaring baris setelah operasi agregasi (`GROUP BY`) selesai dilakukan. Klausa `WHERE` tidak dapat digunakan secara langsung pada fungsi agregasi.",
      "A": "Opsi A benar karena HAVING adalah klausa filter khusus data hasil agregasi.",
      "B": "Opsi B salah karena WHERE memfilter baris sebelum agregasi dieksekusi.",
      "C": "Opsi C salah karena bukan klausa standar pengganti HAVING di ANSI SQL.",
      "D": "Opsi D salah karena LIMIT hanya membatasi jumlah baris kembalian."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-116",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "debug",
    "question": "Query agregasi berikut menghasilkan error di PostgreSQL: 'column employees.name must appear in the GROUP BY clause or be used in an aggregate function'. Mengapa?\n\n```sql\nSELECT department, name, COUNT(*) FROM employees GROUP BY department;\n```",
    "options": {
      "A": "Setiap kolom non-agregasi yang ada di klausul SELECT wajib dicantumkan di klausul GROUP BY",
      "B": "Nama tabel tidak boleh employees",
      "C": "COUNT(*) tidak boleh digunakan bersama GROUP BY",
      "D": "Query harus selalu memiliki klausa WHERE"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di SQL standar, jika sebuah query menggunakan `GROUP BY`, kolom apa pun di bagian `SELECT` yang bukan merupakan bagian dari fungsi agregat (seperti SUM, COUNT, AVG) wajib dicantumkan di dalam klausul `GROUP BY`.",
      "A": "Opsi A benar sesuai aturan agregasi relasional SQL.",
      "B": "Opsi B salah karena nama tabel bebas.",
      "C": "Opsi C salah karena COUNT(*) justru pasangan utama GROUP BY.",
      "D": "Opsi D salah karena klausa WHERE bersifat opsional."
    },
    "jobId": "fullstack",
    "code": "SELECT department, name, COUNT(*) FROM employees GROUP BY department;"
  },
  {
    "id": "FB-117",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi query SQL berikut untuk menambahkan data baris baru ke tabel 'customers':\n\n```sql\nINSERT INTO customers (name, email) \nVALUES ('Budi', 'budi@mail.com');\n```",
    "options": {
      "A": "INSERT INTO customers (name, email) VALUES ('Budi', 'budi@mail.com');",
      "B": "ADD INTO customers (name, email) VALUES ('Budi', 'budi@mail.com');",
      "C": "UPDATE customers (name, email) SET ('Budi', 'budi@mail.com');",
      "D": "APPEND customers ('Budi', 'budi@mail.com');"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perintah DML standar SQL untuk menambahkan baris data baru adalah `INSERT INTO nama_tabel (kolom...) VALUES (nilai...)`.",
      "A": "Opsi A benar sesuai sintaks resmi INSERT INTO.",
      "B": "Opsi B salah karena ADD bukan perintah penyisipan baris data.",
      "C": "Opsi C salah karena UPDATE digunakan untuk memodifikasi data yang sudah ada.",
      "D": "Opsi D salah karena APPEND bukan perintah SQL standar."
    },
    "jobId": "fullstack",
    "code": "INSERT INTO customers (name, email) \nVALUES ('Budi', 'budi@mail.com');"
  },
  {
    "id": "FB-118",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Struktur indeks database standar apakah yang digunakan secara default pada kolom Primary Key di PostgreSQL dan MySQL?",
    "options": {
      "A": "B-Tree (Balanced Tree)",
      "B": "Hash Index",
      "C": "GiST Index",
      "D": "Full-text Index"
    },
    "answer": "A",
    "explanation": {
      "correct": "B-Tree adalah struktur data indeks default untuk PostgreSQL dan MySQL InnoDB karena mendukung pencarian kesetaraan (equality `=`) maupun range queries (`<`, `<=`, `>`, `>=`, `BETWEEN`) secara efisien O(log n).",
      "A": "Opsi A benar karena B-Tree adalah default index di RDBMS modern.",
      "B": "Opsi B salah karena Hash index hanya efisien untuk equality dan tidak mendukung range query.",
      "C": "Opsi C salah karena GiST digunakan untuk data spasial di PostGIS.",
      "D": "Opsi D salah karena Full-text untuk pencarian teks panjang."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-119",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa fungsi dari Foreign Key (kunci asing) dalam perancangan database relasional?",
    "options": {
      "A": "Menjamin integritas referensial (referential integrity) antara dua tabel dengan memastikan nilai kolom cocok dengan Primary Key tabel referensi",
      "B": "Mempercepat koneksi internet database",
      "C": "Mengenkripsi password pengguna di database",
      "D": "Membuat tabel menjadi tidak dapat dihapus"
    },
    "answer": "A",
    "explanation": {
      "correct": "Foreign Key memaksakan hubungan relasional antar tabel sehingga mencegah data 'yatim' (orphaned records) dan menjaga keutuhan referensi data antar entitas.",
      "A": "Opsi A benar karena Foreign Key menjaga integritas referensial relasi data.",
      "B": "Opsi B salah karena tidak terkait kecepatan jaringan internet.",
      "C": "Opsi C salah karena enkripsi adalah fungsi kriptografi aplikasi/DB.",
      "D": "Opsi D salah karena tabel tetap dapat dihapus jika dependensi diselesaikan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-120",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Perintah SQL manakah yang digunakan untuk mengubah struktur tabel yang sudah ada, misalnya menambahkan kolom baru?",
    "options": {
      "A": "ALTER TABLE",
      "B": "UPDATE TABLE",
      "C": "MODIFY TABLE",
      "D": "CHANGE TABLE"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ALTER TABLE` adalah perintah DDL (Data Definition Language) yang digunakan untuk menambah, menghapus, atau mengubah tipe data kolom pada tabel yang sudah ada.",
      "A": "Opsi A benar karena ALTER TABLE adalah perintah DDL resmi untuk modifikasi struktur tabel.",
      "B": "Opsi B salah karena UPDATE untuk data baris (DML).",
      "C": "Opsi C salah karena MODIFY adalah klausa di dalam ALTER TABLE pada MySQL, bukan perintah terluar.",
      "D": "Opsi D salah karena bukan perintah mandiri."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-121",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Berapa banyak baris yang akan dihapus dari tabel oleh query berikut jika klausul WHERE dihilangkan sama sekali: `DELETE FROM users;`?",
    "options": {
      "A": "Semua baris di dalam tabel users akan terhapus",
      "B": "Hanya baris pertama yang dihapus",
      "C": "Tidak ada baris yang terhapus karena SQL akan melempar syntax error",
      "D": "Hanya 10 baris teratas"
    },
    "answer": "A",
    "explanation": {
      "correct": "`DELETE FROM table;` tanpa klausa `WHERE` akan menghapus seluruh record baris yang ada di dalam tabel tersebut tanpa menghapus skema tabelnya.",
      "A": "Opsi A benar karena tanpa filter WHERE, semua baris terhapus.",
      "B": "Opsi B salah karena DELETE tidak memiliki batas satu baris default.",
      "C": "Opsi C salah karena sintaks DELETE tanpa WHERE adalah sintaks valid.",
      "D": "Opsi D salah karena tidak ada limit default pada DELETE."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-122",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Metode HTTP manakah yang bersifat 'Safe' (tidak mengubah state resource di server sama sekali)?",
    "options": {
      "A": "GET",
      "B": "POST",
      "C": "PUT",
      "D": "DELETE"
    },
    "answer": "A",
    "explanation": {
      "correct": "Metode HTTP GET bersifat 'Safe' (hanya membaca data tanpa efek samping pada server) dan 'Idempotent' (pemanggilan berkali-kali menghasilkan efek yang sama pada sistem).",
      "A": "Opsi A benar karena GET adalah metode read-only yang aman.",
      "B": "Opsi B salah karena POST membuat resource baru (unsafe & non-idempotent).",
      "C": "Opsi C salah karena PUT mengubah/menggantikan resource di server.",
      "D": "Opsi D salah karena DELETE menghapus resource dari server."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-123",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "best-practice",
    "question": "Status code HTTP 201 Created paling tepat dikembalikan oleh REST API pada operasi apa?\n\n```java\n@PostMapping(\"/products\")\npublic ResponseEntity<Product> createProduct(@RequestBody ProductDto dto) {\n  Product created = productService.create(dto);\n  return ResponseEntity.status(HttpStatus.CREATED).body(created);\n}\n```",
    "options": {
      "A": "Saat permintaan POST berhasil membuat resource baru di database",
      "B": "Saat permintaan GET berhasil membaca data",
      "C": "Saat terjadi error validasi input pada form",
      "D": "Saat server gagal terhubung ke database"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 201 Created menandakan bahwa request berhasil dan menghasilkan pembuatan satu atau lebih resource baru di server (umumnya disertai header `Location`).",
      "A": "Opsi A benar karena 201 Created adalah standar REST untuk operasi insert/create yang sukses.",
      "B": "Opsi B salah karena GET sukses umumnya mengembalikan 200 OK.",
      "C": "Opsi C salah karena error validasi mengembalikan 400 Bad Request atau 422 Unprocessable Entity.",
      "D": "Opsi D salah karena kegagalan database mengembalikan 500 Internal Server Error."
    },
    "jobId": "fullstack",
    "code": "@PostMapping(\"/products\")\npublic ResponseEntity<Product> createProduct(@RequestBody ProductDto dto) {\n  Product created = productService.create(dto);\n  return ResponseEntity.status(HttpStatus.CREATED).body(created);\n}"
  },
  {
    "id": "FB-124",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara status code HTTP 401 Unauthorized dan 403 Forbidden?",
    "options": {
      "A": "401 berarti klien belum terotentikasi (belum login / token tidak valid), sedangkan 403 berarti klien sudah login tetapi tidak memiliki izin (permission/role) untuk mengakses resource tersebut",
      "B": "401 untuk error server, 403 untuk error browser",
      "C": "401 untuk koneksi aman HTTPS, 403 untuk HTTP biasa",
      "D": "Keduanya adalah kode yang sama dan dapat digunakan bebas"
    },
    "answer": "A",
    "explanation": {
      "correct": "401 Unauthorized mengindikasikan masalah autentikasi (ketiadaan atau ketidakvalidan identitas). 403 Forbidden mengindikasikan masalah otorisasi (identitas valid, tetapi hak akses ditolak).",
      "A": "Opsi A benar karena membedakan autentikasi (401) vs otorisasi (403) secara tepat.",
      "B": "Opsi B salah karena keduanya adalah kelompok 4xx client-side error.",
      "C": "Opsi C salah karena tidak terikat protokol HTTP vs HTTPS.",
      "D": "Opsi D salah karena memiliki makna semantik yang berbeda dalam standar HTTP RFC."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-125",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Header HTTP apakah yang digunakan oleh klien untuk memberi tahu server bahwa data body yang dikirimkan berformat JSON?\n\n```typescript\nPOST /api/users HTTP/1.1\nHost: api.example.com\nContent-Type: application/___\n\n{\"name\": \"Andi\", \"role\": \"USER\"}\n```",
    "options": {
      "A": "Content-Type: application/json",
      "B": "Accept: text/html",
      "C": "Format: json",
      "D": "Data-Type: json"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header `Content-Type: application/json` memberitahu web server mengenai tipe media (MIME type) dari representasi payload yang dikirimkan pada body request.",
      "A": "Opsi A benar karena Content-Type mendefinisikan tipe konten payload.",
      "B": "Opsi B salah karena Accept digunakan untuk memberi tahu format yang diharapkan klien pada respon.",
      "C": "Opsi C salah karena bukan header standar HTTP.",
      "D": "Opsi D salah karena bukan header standar HTTP."
    },
    "jobId": "fullstack",
    "code": "POST /api/users HTTP/1.1\nHost: api.example.com\nContent-Type: application/___\n\n{\"name\": \"Andi\", \"role\": \"USER\"}"
  },
  {
    "id": "FB-126",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Jika seorang klien mengirimkan request HTTP GET ke URL endpoint yang tidak terdaftar sama sekali di server, status code berapakah yang secara standar dikembalikan oleh server?\n\n```typescript\nGET /api/v1/non-existent-endpoint HTTP/1.1\nHost: api.example.com\n```",
    "options": {
      "A": "404 Not Found",
      "B": "200 OK",
      "C": "500 Internal Server Error",
      "D": "301 Moved Permanently"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 404 Not Found adalah status code resmi ketika server tidak dapat menemukan resource yang diminta sesuai URL path yang dituju.",
      "A": "Opsi A benar karena 404 adalah standar untuk missing endpoint/resource.",
      "B": "Opsi B salah karena 200 menandakan keberhasilan.",
      "C": "Opsi C salah karena 500 adalah exception crash internal server.",
      "D": "Opsi D salah karena 301 untuk pengalihan URL permanen."
    },
    "jobId": "fullstack",
    "code": "GET /api/v1/non-existent-endpoint HTTP/1.1\nHost: api.example.com"
  },
  {
    "id": "FB-127",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "best-practice",
    "question": "Manakah konvensi penamaan URI yang PALING sesuai dengan kaidah RESTful API untuk mengambil data user berdasarkan ID?\n\n```typescript\n// RESTful clean URL:\n// GET /api/users/123\n\n// RPC style URL:\n// GET /api/getUserById?id=123\n```",
    "options": {
      "A": "GET /api/users/123",
      "B": "GET /api/getUserById?id=123",
      "C": "POST /api/users/get/123",
      "D": "GET /api/users/view/id/123"
    },
    "answer": "A",
    "explanation": {
      "correct": "Prinsip RESTful mensyaratkan penggunaan kata benda jamak (plural nouns) untuk resource dan memanfaatkan HTTP verb (GET) untuk tindakannya, bukan mencantumkan kata kerja (verbs) di dalam URL.",
      "A": "Opsi A benar karena mengikuti kaidah RESTful bersih `/resources/{id}` dengan HTTP GET.",
      "B": "Opsi B salah karena menggunakan kata kerja di path (RPC style).",
      "C": "Opsi C salah karena menyalahgunakan HTTP POST untuk operasi pembacaan.",
      "D": "Opsi D salah karena terlalu verbose dan menyertakan kata kerja."
    },
    "jobId": "fullstack",
    "code": "// RESTful clean URL:\n// GET /api/users/123\n\n// RPC style URL:\n// GET /api/getUserById?id=123"
  },
  {
    "id": "FB-128",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara metode HTTP PUT dan PATCH dalam arsitektur REST API?",
    "options": {
      "A": "PUT menggantikan (replace) seluruh resource secara lengkap, sedangkan PATCH melakukan pembaruan parsial (partial update) hanya pada field tertentu",
      "B": "PUT untuk membuat data baru, PATCH untuk menghapus data",
      "C": "PATCH bersifat idempotent, sedangkan PUT tidak",
      "D": "PUT hanya bisa digunakan dengan format XML"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menurut spesifikasi HTTP RFC, `PUT` menggantikan seluruh resource dengan payload yang baru. `PATCH` dirancang untuk memodifikasi sebagian atribut resource tanpa mengirimkan seluruh field objek.",
      "A": "Opsi A benar karena membedakan full replacement (PUT) vs partial update (PATCH).",
      "B": "Opsi B salah karena penghapusan menggunakan DELETE.",
      "C": "Opsi C salah karena PUT yang dijamin idempotent, sedangkan PATCH tidak wajib idempotent.",
      "D": "Opsi D salah karena PUT mendukung JSON, XML, dan format lainnya."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-129",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "debug",
    "question": "Sebuah frontend React memanggil endpoint delete menggunakan metode GET: `axios.get('/api/users/delete/1')`. Mengapa implementasi ini melanggar kaidah REST dan berisiko?",
    "options": {
      "A": "Metode GET bersifat safe dan idempotent menurut standar web, sehingga web crawler/browser pre-fetching dapat secara tidak sengaja memicu penghapusan data",
      "B": "Browser tidak mendukung axios.get()",
      "C": "ID tidak boleh diletakkan di URL",
      "D": "GET selalu memerlukan authentication token"
    },
    "answer": "A",
    "explanation": {
      "correct": "Metode GET seharusnya tidak pernah mengubah state di server (Safe). Jika endpoint penghapusan menggunakan GET, crawler mesin pencari (seperti Googlebot) yang menelusuri link dapat secara tidak sengaja menghapus seluruh database.",
      "A": "Opsi A benar karena GET harus bebas dari efek mutasi/penghapusan data.",
      "B": "Opsi B salah karena axios.get sangat didukung browser.",
      "C": "Opsi C salah karena ID di URL adalah standar REST.",
      "D": "Opsi D salah karena token auth tidak terbatas pada metode GET saja."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-130",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "best-practice",
    "question": "Status code HTTP 204 No Content paling tepat dikembalikan pada operasi apa di REST API?\n\n```java\n@DeleteMapping(\"/{id}\")\npublic ResponseEntity<Void> remove(@PathVariable Long id) {\n  service.delete(id);\n  return ResponseEntity.noContent().build(); // HTTP 204\n}\n```",
    "options": {
      "A": "Operasi DELETE yang berhasil menghapus data dan server tidak perlu mengembalikan data body respon ke klien",
      "B": "Permintaan yang gagal karena data tidak ditemukan",
      "C": "Permintaan yang dialihkan ke halaman lain",
      "D": "Ketika koneksi database terputus"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 204 No Content menandakan bahwa permintaan berhasil diproses oleh server, tetapi respon sengaja tidak memuat payload body.",
      "A": "Opsi A benar karena 204 No Content sangat umum untuk DELETE sukses.",
      "B": "Opsi B salah karena data tidak ditemukan menghasilkan 404.",
      "C": "Opsi C salah karena pengalihan menggunakan 3xx.",
      "D": "Opsi D salah karena error database menghasilkan 500."
    },
    "jobId": "fullstack",
    "code": "@DeleteMapping(\"/{id}\")\npublic ResponseEntity<Void> remove(@PathVariable Long id) {\n  service.delete(id);\n  return ResponseEntity.noContent().build(); // HTTP 204\n}"
  },
  {
    "id": "FB-131",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Header HTTP Authorization apakah yang digunakan untuk mengirimkan JSON Web Token (JWT) pada permintaan API:\n\n```typescript\nGET /api/profile HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n```",
    "options": {
      "A": "Authorization: Bearer <token>",
      "B": "Authorization: Basic <token>",
      "C": "Authorization: Token <token>",
      "D": "Authorization: JWT <token>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Skema otentikasi standar industri untuk membawa token akses JWT di header HTTP Authorization adalah skema `Bearer` (`Authorization: Bearer <token>`).",
      "A": "Opsi A benar karena Bearer token adalah standar RFC 6750.",
      "B": "Opsi B salah karena Basic digunakan untuk username:password terenkode base64.",
      "C": "Opsi C salah karena Token bukan skema resmi RFC 6750.",
      "D": "Opsi D salah karena skema bukan JWT."
    },
    "jobId": "fullstack",
    "code": "GET /api/profile HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  {
    "id": "FB-132",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa arti dari sifat 'Stateless' dalam arsitektur REST?",
    "options": {
      "A": "Setiap request dari klien ke server harus memuat semua informasi yang diperlukan untuk memahami dan memproses request tersebut tanpa bergantung pada session tersimpan di server",
      "B": "Server tidak boleh memiliki database",
      "C": "Aplikasi tidak boleh memiliki state di frontend",
      "D": "Server harus selalu dimatikan setelah memproses request"
    },
    "answer": "A",
    "explanation": {
      "correct": "Prinsip Statelessness menyatakan bahwa server tidak menyimpan context sesi klien di antara request. Hal ini memungkinkan skalabilitas horizontal yang sangat baik karena request dapat ditangani oleh instance server mana saja.",
      "A": "Opsi A benar sesuai prinsip arsitektur REST Statelessness.",
      "B": "Opsi B salah karena server REST tentu memiliki database persistensi.",
      "C": "Opsi C salah karena frontend tetap mengelola local state UI.",
      "D": "Opsi D salah karena server berjalan secara kontinu."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-133",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "best-practice",
    "question": "Ketika validasi request body gagal (misalnya email tidak valid atau password terlalu pendek), status code HTTP berapakah yang paling tepat dikembalikan oleh REST API?\n\n```java\n@ExceptionHandler(MethodArgumentNotValidException.class)\npublic ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {\n  // Return HTTP 400 Bad Request\n  return ResponseEntity.badRequest().body(errors);\n}\n```",
    "options": {
      "A": "400 Bad Request atau 422 Unprocessable Entity",
      "B": "500 Internal Server Error",
      "C": "404 Not Found",
      "D": "200 OK"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kegagalan validasi input klien adalah kesalahan di sisi klien (client-side error), sehingga harus mengembalikan status code 400 Bad Request atau 422 Unprocessable Entity lengkap dengan detail pesan error tiap field.",
      "A": "Opsi A benar karena 400/422 adalah standar status error validasi data masukan klien.",
      "B": "Opsi B salah karena 500 mengindikasikan bug atau crash server yang tidak terduga.",
      "C": "Opsi C salah karena 404 untuk resource tidak ditemukan.",
      "D": "Opsi D salah karena 200 menandakan keberhasilan."
    },
    "jobId": "fullstack",
    "code": "@ExceptionHandler(MethodArgumentNotValidException.class)\npublic ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {\n  // Return HTTP 400 Bad Request\n  return ResponseEntity.badRequest().body(errors);\n}"
  },
  {
    "id": "FB-134",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Mekanisme keamanan browser apakah yang membatasi permintaan HTTP lintas domain (berbeda origin) kecuali server mengizinkannya secara eksplisit?",
    "options": {
      "A": "CORS (Cross-Origin Resource Sharing)",
      "B": "CSRF",
      "C": "XSS",
      "D": "SQL Injection"
    },
    "answer": "A",
    "explanation": {
      "correct": "CORS adalah mekanisme keamanan berbasis header HTTP yang memungkinkan browser memverifikasi apakah web server mengizinkan akses dari origin (protokol, domain, dan port) yang berbeda.",
      "A": "Opsi A benar karena CORS mengatur kebijakan akses lintas origin.",
      "B": "Opsi B salah karena CSRF adalah jenis serangan manipulasi request pengguna terotentikasi.",
      "C": "Opsi C salah karena XSS adalah injeksi script berbahaya ke halaman web.",
      "D": "Opsi D salah karena SQL Injection adalah injeksi query ke database."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-135",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Klien mengirimkan request ke server dan menerima status code 503. Apa arti dari status code tersebut?\n\n```typescript\nHTTP/1.1 503 Service Unavailable\nRetry-After: 120\nContent-Type: application/json\n\n{\"error\": \"Server is currently undergoing maintenance.\"}\n```",
    "options": {
      "A": "Service Unavailable (server sedang overload atau dalam pemeliharaan sementara)",
      "B": "Bad Gateway",
      "C": "Gateway Timeout",
      "D": "Internal Server Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 503 Service Unavailable menandakan bahwa server saat ini tidak dapat menangani permintaan karena kelebihan beban sementara (overload) atau sedang mengalami pemeliharaan (maintenance).",
      "A": "Opsi A benar sesuai definisi HTTP 503.",
      "B": "Opsi B salah karena Bad Gateway adalah 502.",
      "C": "Opsi C salah karena Gateway Timeout adalah 504.",
      "D": "Opsi D salah karena Internal Server Error adalah 500."
    },
    "jobId": "fullstack",
    "code": "HTTP/1.1 503 Service Unavailable\nRetry-After: 120\nContent-Type: application/json\n\n{\"error\": \"Server is currently undergoing maintenance.\"}"
  },
  {
    "id": "FB-136",
    "level": "beginner",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Format data apakah yang paling umum dan menjadi standar de facto untuk pertukaran data pada RESTful Web API modern?",
    "options": {
      "A": "JSON (JavaScript Object Notation)",
      "B": "XML",
      "C": "YAML",
      "D": "CSV"
    },
    "answer": "A",
    "explanation": {
      "correct": "JSON adalah format pertukaran data berbasis teks yang ringan, mudah dibaca manusia dan mesin, serta didukung secara native oleh JavaScript/TypeScript dan library Java seperti Jackson.",
      "A": "Opsi A benar karena JSON adalah format payload utama REST API modern.",
      "B": "Opsi B salah karena XML lebih berat dan dominan pada SOAP web services legacy.",
      "C": "Opsi C salah karena YAML umum untuk file konfigurasi, bukan payload HTTP API.",
      "D": "Opsi D salah karena CSV untuk data tabular spreadsheet."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-137",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Area apakah di Git yang menampung file-file yang telah di-add (`git add`) dan siap untuk dimasukkan ke dalam commit berikutnya?",
    "options": {
      "A": "Staging Area (Index)",
      "B": "Working Directory",
      "C": "Remote Repository",
      "D": "Stash"
    },
    "answer": "A",
    "explanation": {
      "correct": "Staging Area (atau Index) adalah area perantara di Git tempat file yang telah ditandai dengan `git add` dipersiapkan sebelum direkam secara permanen ke history Git dengan `git commit`.",
      "A": "Opsi A benar karena Staging Area adalah area persiapan commit.",
      "B": "Opsi B salah karena Working Directory adalah direktori file kerja aktual di disk.",
      "C": "Opsi C salah karena Remote Repository berada di server seperti GitHub/GitLab.",
      "D": "Opsi D salah karena Stash adalah tempat penyimpanan perubahan sementara yang belum di-commit."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-138",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "output",
    "question": "Apa yang dilakukan oleh perintah `git checkout -b feature/auth` di terminal Git?\n\n```typescript\ngit checkout -b feature/auth\n```",
    "options": {
      "A": "Membuat branch baru bernama 'feature/auth' dan langsung berpindah ke branch tersebut",
      "B": "Menghapus branch 'feature/auth'",
      "C": "Menggabungkan branch 'feature/auth' ke master",
      "D": "Mengunduh branch dari server GitHub"
    },
    "answer": "A",
    "explanation": {
      "correct": "Flag `-b` pada `git checkout` adalah pintasan untuk membuat branch baru sekaligus melakukan checkout (berpindah) ke branch tersebut dalam satu perintah.",
      "A": "Opsi A benar karena membuat dan beralih ke branch baru.",
      "B": "Opsi B salah karena penghapusan branch menggunakan `git branch -d`.",
      "C": "Opsi C salah karena penggabungan menggunakan `git merge`.",
      "D": "Opsi D salah karena mengunduh menggunakan `git fetch` atau `git pull`."
    },
    "jobId": "fullstack",
    "code": "git checkout -b feature/auth"
  },
  {
    "id": "FB-139",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "debug",
    "question": "Seorang developer membuat file baru `UserService.java` lalu langsung menjalankan `git commit -m \"Add UserService\"`, namun terminal menampilkan pesan: 'nothing to commit, working tree clean'. Mengapa?",
    "options": {
      "A": "File baru masih berstatus Untracked dan belum dimasukkan ke Staging Area menggunakan perintah `git add`",
      "B": "Pesan commit harus diawali dengan tanda pagar #",
      "C": "Nama file Java tidak boleh diawali huruf kapital",
      "D": "Git tidak mendukung file berekstensi .java"
    },
    "answer": "A",
    "explanation": {
      "correct": "Git tidak akan menyertakan file baru ke dalam commit sebelum file tersebut didaftarkan ke Staging Area menggunakan perintah `git add <file>` atau `git add .`.",
      "A": "Opsi A benar karena file untracked harus di-add terlebih dahulu.",
      "B": "Opsi B salah karena pesan commit bebas berupa teks deskriptif.",
      "C": "Opsi C salah karena konvensi penamaan Java memang PascalCase.",
      "D": "Opsi D salah karena Git bekerja pada semua jenis file teks dan biner."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-140",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "completion",
    "question": "Lengkapi perintah Git berikut untuk mengunduh pembaruan commits terbaru dari remote server sekaligus menggabungkannya ke branch lokal saat ini:\n\n```typescript\n# Mengunduh pembaruan dan merge ke branch aktif\ngit ___\n```",
    "options": {
      "A": "git pull",
      "B": "git push",
      "C": "git commit",
      "D": "git clone"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git pull` pada dasarnya mengeksekusi dua perintah secara berurutan: `git fetch` (mengunduh objek commit dari remote) dan `git merge` (menggabungkannya ke branch lokal aktif).",
      "A": "Opsi A benar karena git pull mengunduh dan melakukan auto-merge.",
      "B": "Opsi B salah karena git push mengunggah commit lokal ke remote.",
      "C": "Opsi C salah karena git commit merekam riwayat secara lokal.",
      "D": "Opsi D salah karena git clone menyalin repositori pertama kali."
    },
    "jobId": "fullstack",
    "code": "# Mengunduh pembaruan dan merge ke branch aktif\ngit ___"
  },
  {
    "id": "FB-141",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Fase pertama dalam siklus hidup pengembangan perangkat lunak (Software Development Life Cycle / SDLC) tradisional adalah:",
    "options": {
      "A": "Requirement Gathering & Analysis (Pengumpulan & Analisis Kebutuhan)",
      "B": "Deployment to Production",
      "C": "Unit Testing",
      "D": "Maintenance"
    },
    "answer": "A",
    "explanation": {
      "correct": "SDLC selalu diawali dengan fase Analisis Kebutuhan (Requirements Gathering & Analysis) untuk memahami problem bisnis dan mendefinisikan spesifikasi software sebelum desain dan pengkodean dimulai.",
      "A": "Opsi A benar karena pengumpulan kebutuhan adalah tahapan awal SDLC.",
      "B": "Opsi B salah karena deployment berada di tahap akhir menjelang rilis.",
      "C": "Opsi C salah karena testing dilakukan setelah fase implementasi/coding.",
      "D": "Opsi D salah karena maintenance adalah fase pasca rilis."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-142",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Dalam metodologi Agile Scrum, apa tujuan dari pertemuan harian 'Daily Standup'?",
    "options": {
      "A": "Sinkronisasi singkat tim mengenai apa yang dikerjakan kemarin, apa yang akan dikerjakan hari ini, dan apakah ada kendala (blockers)",
      "B": "Melakukan evaluasi gaji tahunan pengembang",
      "C": "Menulis kode program bersama selama 8 jam",
      "D": "Melakukan demo aplikasi lengkap ke klien"
    },
    "answer": "A",
    "explanation": {
      "correct": "Daily Standup (Daily Scrum) adalah pertemuan singkat (timeboxed 15 menit) bagi tim pengembang untuk menyelaraskan aktivitas harian dan mengidentifikasi hambatan.",
      "A": "Opsi A benar sesuai panduan resmi Scrum Guide.",
      "B": "Opsi B salah karena bukan forum evaluasi kompensasi.",
      "C": "Opsi C salah karena bukan sesi mob-programming.",
      "D": "Opsi D salah karena demo ke klien dilakukan pada sesi Sprint Review."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-143",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Apa fungsi dari file `.gitignore` dalam sebuah proyek Git?",
    "options": {
      "A": "Mendefinisikan pola nama file atau direktori yang sengaja diabaikan oleh Git agar tidak terlacak ke dalam repository (misal node_modules, target/, file .env)",
      "B": "Menghapus commit yang salah secara otomatis",
      "C": "Mengatur hak akses izin pengguna di GitHub",
      "D": "Mempercepat kompilasi aplikasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "File `.gitignore` mencegah file temporary, artefak build (seperti `target/` di Maven atau `dist/` di Vite), dependencies lokal (`node_modules`), dan kredensial rahasia (`.env`) ter-commit ke version control.",
      "A": "Opsi A benar sesuai fungsi utama .gitignore.",
      "B": "Opsi B salah karena .gitignore tidak membatalkan riwayat commit.",
      "C": "Opsi C salah karena permission diatur di level server hosting repository.",
      "D": "Opsi D salah karena tidak berhubungan dengan compiler."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-144",
    "level": "beginner",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Format standar berbasis JSON yang digunakan secara luas untuk merepresentasikan struktur data spasial dan geografis di web adalah:",
    "options": {
      "A": "GeoJSON",
      "B": "KML",
      "C": "Shapefile",
      "D": "GeoTIFF"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoJSON adalah format standar terbuka berbasis JSON (RFC 7946) untuk mengkodekan berbagai struktur data geografis seperti Point, LineString, Polygon, dan FeatureCollection.",
      "A": "Opsi A benar karena GeoJSON adalah standar data spasial berbasis JSON.",
      "B": "Opsi B salah karena KML berbasis XML.",
      "C": "Opsi C salah karena Shapefile adalah format file biner multi-file milik ESRI.",
      "D": "Opsi D salah karena GeoTIFF adalah format raster citra satelit."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-145",
    "level": "beginner",
    "topic": "GIS Dasar",
    "questionType": "output",
    "question": "Perhatikan objek geometri GeoJSON berikut. Jenis tipe geometri apakah yang direpresentasikan?\n\n```typescript\n{\n  \"type\": \"Point\",\n  \"coordinates\": [106.8272, -6.1754]\n}\n```",
    "options": {
      "A": "Point (Titik Koordinat)",
      "B": "LineString (Garis)",
      "C": "Polygon (Area Bidang)",
      "D": "MultiPoint"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe 'Point' pada GeoJSON merepresentasikan satu lokasi geografis tunggal dengan pasangan koordinat `[longitude, latitude]`.",
      "A": "Opsi A benar karena tipe objek adalah Point dengan satu koordinat tunggal.",
      "B": "Opsi B salah karena LineString membutuhkan array berisi minimal dua koordinat.",
      "C": "Opsi C salah karena Polygon membutuhkan cincin koordinat tertutup (minimal 4 koordinat).",
      "D": "Opsi D salah karena MultiPoint berisi array dari banyak titik."
    },
    "jobId": "fullstack",
    "code": "{\n  \"type\": \"Point\",\n  \"coordinates\": [106.8272, -6.1754]\n}"
  },
  {
    "id": "FB-146",
    "level": "beginner",
    "topic": "GIS Dasar",
    "questionType": "best-practice",
    "question": "Apakah urutan koordinat yang benar sesuai spesifikasi resmi GeoJSON (RFC 7946)?\n\n```typescript\n{\n  \"type\": \"Feature\",\n  \"geometry\": {\n    \"type\": \"Point\",\n    \"coordinates\": [106.8272, -6.1754]\n  },\n  \"properties\": { \"name\": \"Monas Jakarta\" }\n}\n```",
    "options": {
      "A": "[Longitude, Latitude] (Bujur lalu Lintang)",
      "B": "[Latitude, Longitude] (Lintang lalu Bujur)",
      "C": "[Altitude, Latitude]",
      "D": "Bebas dalam urutan apapun"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai standar RFC 7946 GeoJSON, koordinat selalu berurutan `[easting, northing]` atau `[longitude, latitude]` (sumbu X horizontal lalu sumbu Y vertikal).",
      "A": "Opsi A benar karena spesifikasi resmi GeoJSON mewajibkan urutan [Longitude, Latitude].",
      "B": "Opsi B salah karena [Latitude, Longitude] adalah konvensi antarmuka Leaflet/Google Maps, bukan GeoJSON murni.",
      "C": "Opsi C salah karena ketinggian (elevation/altitude) diletakkan di indeks ke-3 (opsional).",
      "D": "Opsi D salah karena urutan terbalik akan menempatkan lokasi ke kutub/samudera yang salah."
    },
    "jobId": "fullstack",
    "code": "{\n  \"type\": \"Feature\",\n  \"geometry\": {\n    \"type\": \"Point\",\n    \"coordinates\": [106.8272, -6.1754]\n  },\n  \"properties\": { \"name\": \"Monas Jakarta\" }\n}"
  },
  {
    "id": "FB-147",
    "level": "beginner",
    "topic": "GIS Dasar",
    "questionType": "completion",
    "question": "Lengkapi inisialisasi peta Leaflet.js berikut agar merender peta ke dalam elemen HTML ber-id 'map':\n\n```typescript\n// Inisialisasi peta Leaflet pada elemen <div id=\"map\"></div>\nconst map = L.__('map').setView([-6.2088, 106.8456], 13);\n```",
    "options": {
      "A": "L.map('map')",
      "B": "L.render('map')",
      "C": "L.create('map')",
      "D": "L.canvas('map')"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi `L.map('map_id')` adalah method factory inti pada library Leaflet.js untuk menginisialisasi objek peta interaktif pada elemen container DOM tertentu.",
      "A": "Opsi A benar karena `L.map()` adalah method inisialisasi resmi Leaflet.",
      "B": "Opsi B salah karena L.render bukan method Leaflet.",
      "C": "Opsi C salah karena L.create bukan method Leaflet.",
      "D": "Opsi D salah karena L.canvas adalah renderer layer, bukan inisialisasi peta."
    },
    "jobId": "fullstack",
    "code": "// Inisialisasi peta Leaflet pada elemen <div id=\"map\"></div>\nconst map = L.__('map').setView([-6.2088, 106.8456], 13);"
  },
  {
    "id": "FB-148",
    "level": "beginner",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Tiga tipe geometri vektor dasar yang paling fundamental dalam Sistem Informasi Geografis (GIS) adalah:",
    "options": {
      "A": "Point (Titik), Line/LineString (Garis), dan Polygon (Area/Poligon)",
      "B": "Pixel, Voxel, dan Raster",
      "C": "Circle, Sphere, dan Cylinder",
      "D": "Latitude, Longitude, dan Altitude"
    },
    "answer": "A",
    "explanation": {
      "correct": "Model data vektor GIS merepresentasikan dunia nyata ke dalam 3 primitif geometri: Point (lokasi berdimensi 0), Line/LineString (fitur linear berdimensi 1 seperti jalan/sungai), dan Polygon (area berdimensi 2 seperti batas wilayah/danau).",
      "A": "Opsi A benar karena Point, Line, dan Polygon adalah 3 primitif data vektor GIS.",
      "B": "Opsi B salah karena pixel dan raster adalah model data grid/citra raster.",
      "C": "Opsi C salah karena bentuk 3D solid bukan primitif vektor dasar 2D GIS.",
      "D": "Opsi D salah karena itu adalah sumbu koordinat, bukan tipe geometri fitur."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-149",
    "level": "beginner",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Sistem koordinat referensi geografis standar dunia yang menggunakan kode EPSG:4326 dan menjadi acuan default sistem GPS adalah:",
    "options": {
      "A": "WGS 84 (World Geodetic System 1984)",
      "B": "Web Mercator (EPSG:3857)",
      "C": "UTM Zone 48S",
      "D": "Indonesian Datum 1974"
    },
    "answer": "A",
    "explanation": {
      "correct": "WGS 84 (EPSG:4326) adalah standar geodesi global berbasis ellipsoid bumi yang digunakan oleh sistem satelit navigasi GPS dan menyatakan posisi dalam satuan derajat lintang dan bujur.",
      "A": "Opsi A benar karena EPSG:4326 merujuk pada datum WGS 84.",
      "B": "Opsi B salah karena Web Mercator adalah EPSG:3857 (satuan meter proyeksi planar).",
      "C": "Opsi C salah karena UTM adalah sistem proyeksi grid lokal zona spesifik.",
      "D": "Opsi D salah karena datum lokal Indonesia."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FB-150",
    "level": "beginner",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Anotasi atau ekstensi database spasial apakah yang paling populer digunakan bersama database PostgreSQL untuk menyimpan dan memproses query spasial?",
    "options": {
      "A": "PostGIS",
      "B": "SpatialLite",
      "C": "Oracle Spatial",
      "D": "GeoServer"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostGIS adalah ekstensi spasial open-source untuk PostgreSQL yang menambahkan dukungan untuk tipe data geografis (geometry/geography) dan ratusan fungsi analisis spasial (seperti ST_Distance, ST_Contains).",
      "A": "Opsi A benar karena PostGIS adalah standar industri ekstensi spasial PostgreSQL.",
      "B": "Opsi B salah karena SpatiaLite adalah ekstensi untuk SQLite.",
      "C": "Opsi C salah karena Oracle Spatial khusus untuk database Oracle.",
      "D": "Opsi D salah karena GeoServer adalah server aplikasi web GIS (middleware map server), bukan ekstensi database."
    },
    "jobId": "fullstack"
  }
];
