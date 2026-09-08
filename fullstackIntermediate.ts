import { Question } from './types';

export const FULLSTACK_INTERMEDIATE: Question[] = [
  {
    "id": "FI-001",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi dari utility type `Partial<T>` pada TypeScript?",
    "options": {
      "A": "Mengubah seluruh properti dari tipe T menjadi bersifat opsional (optional `?:`)",
      "B": "Menghapus semua properti yang bernilai null dari tipe T",
      "C": "Mengambil hanya sebagian properti dari T secara acak",
      "D": "Mengubah semua properti dari tipe T menjadi readonly"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Partial<T>` membuat tipe baru di mana seluruh properti dari tipe asal T dijadikan opsional (`?`), sangat berguna untuk payload operasi pembaruan data (seperti PATCH).",
      "A": "Opsi A benar sesuai definisi dan implementasi mapped type `Partial<T> = { [P in keyof T]?: T[P]; }`.",
      "B": "Opsi B salah karena Partial tidak menghapus null.",
      "C": "Opsi C salah karena bukan pemilihan acak melainkan penambahan modifier optional.",
      "D": "Opsi D salah karena mengubah menjadi readonly adalah tugas `Readonly<T>`."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-002",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Perhatikan penggunaan utility type `Pick` berikut. Properti apa saja yang dimiliki oleh tipe `UserPreview`?\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\ntype UserPreview = Pick<User, 'id' | 'name'>;\n```",
    "options": {
      "A": "Hanya 'id' dan 'name'",
      "B": "Hanya 'email'",
      "C": "'id', 'name', dan 'email'",
      "D": "Tidak ada (objek kosong)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Pick<T, K>` mengkonstruksi tipe baru dengan hanya memilih subset properti K dari tipe asal T. Di sini hanya properti 'id' dan 'name' yang dipilih.",
      "A": "Opsi A benar karena Pick memilih properti 'id' dan 'name'.",
      "B": "Opsi B salah karena 'email' tidak diikutsertakan.",
      "C": "Opsi C salah karena itu adalah tipe User penuh.",
      "D": "Opsi D salah karena tipe menghasilkan objek dengan dua properti terpilih."
    },
    "jobId": "fullstack",
    "code": "interface User {\n  id: number;\n  name: string;\n  email: string;\n}\ntype UserPreview = Pick<User, 'id' | 'name'>;"
  },
  {
    "id": "FI-003",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa properti yang tersisa pada tipe `PublicUser` setelah menggunakan utility type `Omit` berikut?",
    "options": {
      "A": "'id' dan 'username'",
      "B": "'passwordHash'",
      "C": "Hanya 'id'",
      "D": "Tipe any"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Omit<T, K>` kebalikan dari Pick: ia mengkonstruksi tipe baru dengan mengambil seluruh properti dari T kecuali properti yang disebutkan di K (dalam kasus ini mengecualikan 'passwordHash').",
      "A": "Opsi A benar karena 'passwordHash' dihilangkan dan menyisakan 'id' dan 'username'.",
      "B": "Opsi B salah karena 'passwordHash' justru yang di-omit (dibuang).",
      "C": "Opsi C salah karena 'username' tidak dihilangkan.",
      "D": "Opsi D salah karena tipe tetap bertipe objek spesifik."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-004",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Utility type apakah yang digunakan untuk membuat tipe kamus/peta (dictionary/map) dengan kumpulan key bertipe K dan nilai bertipe T?",
    "options": {
      "A": "Record<K, T>",
      "B": "Map<K, T>",
      "C": "Dictionary<K, T>",
      "D": "Lookup<K, T>"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Record<K, T>` digunakan untuk memetakan kumpulan kunci K (string, number, atau union literal) ke tipe nilai T.",
      "A": "Opsi A benar karena Record<K, T> adalah utility type resmi TypeScript.",
      "B": "Opsi B salah karena Map<K, T> adalah kelas objek koleksi runtime JavaScript, bukan utility type.",
      "C": "Opsi C salah karena Dictionary bukan utility type bawaan TypeScript.",
      "D": "Opsi D salah karena Lookup bukan utility type bawaan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-005",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Diberikan discriminated union berikut. Apa output console dari pemanggilan `getArea({ kind: 'circle', radius: 10 })`?\n\n```typescript\ntype Shape =\n  | { kind: 'circle'; radius: number }\n  | { kind: 'square'; side: number };\n\nfunction getArea(s: Shape): number {\n  switch (s.kind) {\n    case 'circle': return Math.PI * s.radius * s.radius;\n    case 'square': return s.side * s.side;\n  }\n}\nconsole.log(getArea({ kind: 'circle', radius: 10 }));\n```",
    "options": {
      "A": "314.1592653589793",
      "B": "100",
      "C": "20",
      "D": "NaN"
    },
    "answer": "A",
    "explanation": {
      "correct": "TypeScript menggunakan properti pembeda `kind: 'circle'` untuk mempersempit (narrow) tipe Shape ke Circle di dalam blok switch. Rumus yang dieksekusi adalah `Math.PI * 10 * 10 = 314.159...`.",
      "A": "Opsi A benar karena luas lingkaran dihitung dari Math.PI * r^2.",
      "B": "Opsi B salah karena tidak dikalikan Math.PI.",
      "C": "Opsi C salah karena bukan keliling 2*r.",
      "D": "Opsi D salah karena kalkulasi numerik valid."
    },
    "jobId": "fullstack",
    "code": "type Shape =\n  | { kind: 'circle'; radius: number }\n  | { kind: 'square'; side: number };\n\nfunction getArea(s: Shape): number {\n  switch (s.kind) {\n    case 'circle': return Math.PI * s.radius * s.radius;\n    case 'square': return s.side * s.side;\n  }\n}\nconsole.log(getArea({ kind: 'circle', radius: 10 }));"
  },
  {
    "id": "FI-006",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Fungsi berikut menghasilkan error: 'Property id does not exist on type T'. Bagaimana cara menambahkan generic constraint agar tipe T wajib memiliki properti `id: number`?\n\n```typescript\nfunction printId<T>(item: T) {\n  console.log(item.id); // Error: Property 'id' does not exist on type 'T'\n}\n```",
    "options": {
      "A": "Ubah `<T>` menjadi `<T extends { id: number }>`",
      "B": "Ubah `<T>` menjadi `<T: { id: number }>`",
      "C": "Ubah `<T>` menjadi `<T implements { id: number }>`",
      "D": "Ubah parameter menjadi `(item: any)`"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kata kunci `extends` pada parameter generic `<T extends { id: number }>` membatasi tipe T (generic constraint) sehingga pemanggil wajib menyediakan objek yang memiliki properti `id: number`.",
      "A": "Opsi A benar karena `extends` adalah sintaks constraint generic di TypeScript.",
      "B": "Opsi B salah karena titik dua bukan sintaks constraint generic.",
      "C": "Opsi C salah karena implements digunakan pada deklarasi class, bukan generic.",
      "D": "Opsi D salah karena beralih ke any merusak type safety generic."
    },
    "jobId": "fullstack",
    "code": "function printId<T>(item: T) {\n  console.log(item.id); // Error: Property 'id' does not exist on type 'T'\n}"
  },
  {
    "id": "FI-007",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi utility type berikut agar tipe `Config` mewajibkan seluruh properti (menghapus tanda optional `?` yang ada):\n\n```typescript\ninterface ConfigProps {\n  host?: string;\n  port?: number;\n  timeout?: number;\n}\n\ntype StrictConfig = ___;\n```",
    "options": {
      "A": "Required<ConfigProps>",
      "B": "Strict<ConfigProps>",
      "C": "Complete<ConfigProps>",
      "D": "NonOptional<ConfigProps>"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Required<T>` adalah kebalikan dari `Partial<T>`. Utility type ini mengkonstruksi tipe di mana seluruh properti dari T dijadikan wajib (`-?`).",
      "A": "Opsi A benar karena Required<T> menghapus modifier optional dari semua properti.",
      "B": "Opsi B salah karena Strict bukan utility type TypeScript.",
      "C": "Opsi C salah karena bukan utility type bawaan.",
      "D": "Opsi D salah karena bukan utility type bawaan."
    },
    "jobId": "fullstack",
    "code": "interface ConfigProps {\n  host?: string;\n  port?: number;\n  timeout?: number;\n}\n\ntype StrictConfig = ___;"
  },
  {
    "id": "FI-008",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa hasil tipe dari utility type `NonNullable<string | number | null | undefined>`?\n\n```typescript\ntype CleanType = NonNullable<string | number | null | undefined>;\n```",
    "options": {
      "A": "string | number",
      "B": "string | number | null",
      "C": "never",
      "D": "any"
    },
    "answer": "A",
    "explanation": {
      "correct": "`NonNullable<T>` menghapus nilai `null` dan `undefined` dari union type T, menyisakan `string | number`.",
      "A": "Opsi A benar karena null dan undefined dieliminasi.",
      "B": "Opsi B salah karena null masih ada.",
      "C": "Opsi C salah karena tipe string dan number valid tersisa.",
      "D": "Opsi D salah karena tipe tetap terjaga spesifikasinya."
    },
    "jobId": "fullstack",
    "code": "type CleanType = NonNullable<string | number | null | undefined>;"
  },
  {
    "id": "FI-009",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Operator apakah di TypeScript yang digunakan untuk mendapatkan union string dari seluruh nama key sebuah tipe objek (contoh: `'id' | 'name'`)?",
    "options": {
      "A": "keyof",
      "B": "typeof",
      "C": "in",
      "D": "instanceof"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator `keyof T` menghasilkan union literal dari kunci-kunci properti publik yang dimiliki oleh tipe T (misal `keyof { id: number; name: string }` menghasilkan `'id' | 'name'`).",
      "A": "Opsi A benar sesuai definisi operator index type query keyof.",
      "B": "Opsi B salah karena typeof mengekstrak tipe dari variabel/nilai JavaScript.",
      "C": "Opsi C salah karena 'in' digunakan untuk iterasi mapped type atau pengecekan properti runtime.",
      "D": "Opsi D salah karena instanceof untuk pengecekan prototipe class saat runtime."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-010",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "best-practice",
    "question": "Diberikan fungsi update profil pengguna di bawah. Mengapa penggunaan `Partial<UserProfile>` lebih baik daripada menerima `any` atau `UserProfile` utuh?\n\n```typescript\nfunction updateProfile(id: string, updates: Partial<UserProfile>) {\n  // updates hanya berisi properti yang diubah\n}\n```",
    "options": {
      "A": "Memungkinkan klien mengirimkan hanya sebagian field yang ingin diubah tanpa harus mengirimkan seluruh properti profil dan tetap menjamin type safety nama field",
      "B": "Menghapus kebutuhan koneksi database",
      "C": "Menjadikan data tersimpan secara otomatis di localStorage",
      "D": "Membuat fungsi berjalan secara multi-threading"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Partial<T>` sangat ideal untuk operasi update parsial karena menjaga autocomplete dan validasi nama properti (klien tidak bisa mengirim field sembarangan), namun tidak mewajibkan klien mengirim seluruh field profil.",
      "A": "Opsi A benar karena mendukung pembaruan parsial yang aman.",
      "B": "Opsi B salah karena tidak terkait langsung dengan database.",
      "C": "Opsi C salah karena tidak berhubungan dengan localStorage.",
      "D": "Opsi D salah karena TypeScript tidak mengubah model single-threaded JavaScript."
    },
    "jobId": "fullstack",
    "code": "function updateProfile(id: string, updates: Partial<UserProfile>) {\n  // updates hanya berisi properti yang diubah\n}"
  },
  {
    "id": "FI-011",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa tipe dari variabel 'role' setelah melewati blok type narrowing `typeof` berikut?\n\n```typescript\nfunction processId(id: string | number) {\n  if (typeof id === 'string') {\n    return id.toUpperCase(); // tipe id di sini?\n  }\n  return id.toFixed(2);\n}\n```",
    "options": {
      "A": "string",
      "B": "string | number",
      "C": "number",
      "D": "any"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di dalam blok `if (typeof id === 'string')`, compiler TypeScript mempersempit (narrow) union type `string | number` menjadi tipe spesifik `string` sehingga method khusus string seperti `.toLowerCase()` aman dipanggil.",
      "A": "Opsi A benar karena type narrowing mempersempit tipe menjadi string di cabang if.",
      "B": "Opsi B salah karena union type sudah disaring oleh pengecekan typeof.",
      "C": "Opsi C salah karena number akan masuk ke cabang else.",
      "D": "Opsi D salah karena TypeScript mempertahankan tipe konkret."
    },
    "jobId": "fullstack",
    "code": "function processId(id: string | number) {\n  if (typeof id === 'string') {\n    return id.toUpperCase(); // tipe id di sini?\n  }\n  return id.toFixed(2);\n}"
  },
  {
    "id": "FI-012",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Fungsi berikut memicu error: 'Argument of type 'string' is not assignable to parameter of type 'keyof T''. Bagaimana cara mengetik parameter 'key' agar hanya menerima key yang valid dari objek T?\n\n```typescript\nfunction getProperty<T, K>(obj: T, key: K) {\n  return obj[key]; // Error: Type 'K' cannot be used to index type 'T'\n}\n```",
    "options": {
      "A": "K extends keyof T",
      "B": "K implements T",
      "C": "K : string",
      "D": "K in T"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dengan generic constraint `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]`, TypeScript menjamin bahwa parameter `key` hanya bisa diisi dengan nama properti yang benar-benar ada pada `obj`.",
      "A": "Opsi A benar karena `K extends keyof T` adalah pola resmi indexed access type di TypeScript.",
      "B": "Opsi B salah karena implements untuk deklarasi class.",
      "C": "Opsi C salah karena K : string tidak membatasi ke properti objek T.",
      "D": "Opsi D salah karena 'in' digunakan di dalam kurung siku mapped type."
    },
    "jobId": "fullstack",
    "code": "function getProperty<T, K>(obj: T, key: K) {\n  return obj[key]; // Error: Type 'K' cannot be used to index type 'T'\n}"
  },
  {
    "id": "FI-013",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi implementasi utility type `Readonly` manual menggunakan mapped type berikut:\n\n```typescript\ntype MyReadonly<T> = {\n  ___\n};\n```",
    "options": {
      "A": "readonly [P in keyof T]: T[P];",
      "B": "const [P in T]: T[P];",
      "C": "immutable [P of keyof T]: T;",
      "D": "final [P in keyof T]: T[P];"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mapped type `type MyReadonly<T> = { readonly [P in keyof T]: T[P]; };` melakukan iterasi ke seluruh properti P dari tipe T dan menambahkan modifier `readonly` di depannya.",
      "A": "Opsi A benar sesuai sintaks mapped type resmi TypeScript.",
      "B": "Opsi B salah karena const bukan modifier properti mapped type.",
      "C": "Opsi C salah karena immutable bukan keyword bawaan.",
      "D": "Opsi D salah karena final bukan keyword TypeScript."
    },
    "jobId": "fullstack",
    "code": "type MyReadonly<T> = {\n  ___\n};"
  },
  {
    "id": "FI-014",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi dari utility type `ReturnType<T>` di TypeScript?",
    "options": {
      "A": "Mengekstrak tipe nilai kembalian dari suatu tipe fungsi T",
      "B": "Mengembalikan nilai fungsi saat runtime",
      "C": "Membuat fungsi baru secara dinamis",
      "D": "Memeriksa apakah fungsi mengembalikan Promise"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ReturnType<T>` menggunakan conditional type dan keyword `infer` untuk membaca dan mengekstrak tipe kembalian (return type) dari signature fungsi T.",
      "A": "Opsi A benar sesuai definisi ReturnType<T>.",
      "B": "Opsi B salah karena utility type hanya beroperasi di compile time pada level tipe data.",
      "C": "Opsi C salah karena tidak membuat fungsi runtime.",
      "D": "Opsi D salah karena bukan untuk mengecek Promise."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-015",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Diberikan fungsi berikut. Apa tipe data yang dihasilkan oleh `type Action = ReturnType<typeof createUser>;`?\n\n```typescript\nfunction createUser(name: string) {\n  return { type: 'CREATE_USER' as const, payload: name };\n}\ntype Action = ReturnType<typeof createUser>;\n```",
    "options": {
      "A": "{ type: 'CREATE_USER'; payload: string }",
      "B": "string",
      "C": "void",
      "D": "Function"
    },
    "answer": "A",
    "explanation": {
      "correct": "`typeof createUser` mendapatkan tipe signature fungsi `(name: string) => { type: 'CREATE_USER', payload: string }`. `ReturnType<...>` kemudian mengekstrak tipe objek kembalian tersebut.",
      "A": "Opsi A benar karena tipe kembalian fungsi di-ekstrak secara presisi.",
      "B": "Opsi B salah karena fungsi tidak mengembalikan string primitif.",
      "C": "Opsi C salah karena fungsi mengembalikan objek, bukan void.",
      "D": "Opsi D salah karena ReturnType mengekstrak nilai kembalian, bukan objek Function."
    },
    "jobId": "fullstack",
    "code": "function createUser(name: string) {\n  return { type: 'CREATE_USER' as const, payload: name };\n}\ntype Action = ReturnType<typeof createUser>;"
  },
  {
    "id": "FI-016",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "best-practice",
    "question": "Kapan Anda sebaiknya menggunakan `as const` (const assertion) pada array atau objek di TypeScript?",
    "options": {
      "A": "Saat kita ingin TypeScript menginferensikan nilai literal yang presisi dan membuat seluruh properti/elemen menjadi bersifat readonly",
      "B": "Saat ingin mengubah array menjadi mutable",
      "C": "Saat ingin menghapus tipe data di production",
      "D": "Saat mendeklarasikan fungsi async"
    },
    "answer": "A",
    "explanation": {
      "correct": "`as const` mengunci nilai objek/array sehingga TypeScript tidak memperluas (widen) tipenya ke tipe primitif umum (misal string dipertahankan sebagai literal 'GET', bukan diperluas ke string), dan membuat seluruh struktur deeply readonly.",
      "A": "Opsi A benar karena const assertion mengunci literal types dan immutability.",
      "B": "Opsi B salah karena as const justru membuat array menjadi readonly (immutable).",
      "C": "Opsi C salah karena tidak berhubungan dengan penghapusan tipe.",
      "D": "Opsi D salah karena tidak terkait langsung dengan async/await."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-017",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan 'Index Signature' pada antarmuka TypeScript (contoh: `[key: string]: any;`)?",
    "options": {
      "A": "Mendefinisikan tipe data untuk properti dinamis di mana nama-nama field belum diketahui sebelumnya tetapi tipe key dan valuenya sudah ditentukan",
      "B": "Menentukan nomor indeks array database",
      "C": "Mengharuskan objek hanya memiliki satu properti saja",
      "D": "Membuat fungsi hashing otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Index Signature `[key: string]: T` memungkinkan objek menerima properti tambahan dengan nama string bebas di masa mendatang asalkan nilainya bertipe T.",
      "A": "Opsi A benar karena Index Signature untuk objek fleksibel berproperti dinamis.",
      "B": "Opsi B salah karena tidak ada kaitannya dengan index database.",
      "C": "Opsi C salah karena index signature justru mengizinkan banyak properti.",
      "D": "Opsi D salah karena bukan fungsi hashing."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-018",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa hasil evaluasi tipe dari `type T = Extract<'a' | 'b' | 'c', 'a' | 'f'>;`?\n\n```typescript\ntype T = Extract<'a' | 'b' | 'c', 'a' | 'f'>;\n```",
    "options": {
      "A": "'a'",
      "B": "'a' | 'b' | 'c'",
      "C": "'b' | 'c'",
      "D": "never"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Extract<T, U>` menyaring union T dan hanya mengambil anggota yang dapat di-assign ke tipe U (mencari irisan). Irisan antara `('a' | 'b' | 'c')` dan `('a' | 'f')` adalah `'a'`.",
      "A": "Opsi A benar karena hanya 'a' yang ada di kedua union.",
      "B": "Opsi B salah karena tidak menyaring.",
      "C": "Opsi C salah karena 'b' dan 'c' adalah hasil Exclude.",
      "D": "Opsi D salah karena ada kecocokan 'a'."
    },
    "jobId": "fullstack",
    "code": "type T = Extract<'a' | 'b' | 'c', 'a' | 'f'>;"
  },
  {
    "id": "FI-019",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara utility type `Exclude<T, U>` dan `Omit<T, K>`?",
    "options": {
      "A": "Exclude bekerja pada Union types untuk membuang anggota union, sedangkan Omit bekerja pada Object types untuk membuang properti objek",
      "B": "Exclude hanya untuk tipe angka, Omit untuk tipe string",
      "C": "Keduanya persis sama tanpa perbedaan",
      "D": "Exclude dijalankan di browser, Omit dijalankan di server"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Exclude<Union, ExcludedMembers>` membuang tipe dari sebuah union. `Omit<ObjectType, Keys>` membuang field properti dari suatu struktur objek.",
      "A": "Opsi A benar karena membedakan operasi pada Union vs Object types.",
      "B": "Opsi B salah karena keduanya bekerja pada semua tipe data.",
      "C": "Opsi C salah karena target strukturnya berbeda.",
      "D": "Opsi D salah karena keduanya adalah compile-time constructs TypeScript."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-020",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Perhatikan kode berikut. Mengapa `user.email` memunculkan error meskipun properti tersebut ada di objek asli?\n\n```typescript\ninterface UserBase {\n  id: number;\n  name: string;\n}\nconst user: UserBase = { id: 1, name: 'Budi', email: 'budi@mail.com' as any };\nconsole.log(user.email); // Error: Property 'email' does not exist on type 'UserBase'\n```",
    "options": {
      "A": "Tipe variabel dibatasi secara eksplisit oleh interface UserBase yang tidak mendefinisikan properti email",
      "B": "Keyword const harus diganti let",
      "C": "Tipe email harus di-cast ke string",
      "D": "Objek harus dibekukan dengan Object.freeze"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena variabel `user` dideklarasikan bertipe `UserBase`, compiler TypeScript hanya mengizinkan akses ke properti yang terdaftar pada antarmuka `UserBase` (yaitu 'id' dan 'name'), meskipun objek runtime memiliki properti lain.",
      "A": "Opsi A benar karena type annotation membatasi aksesibilitas properti yang terlihat oleh compiler.",
      "B": "Opsi B salah karena let tidak memengaruhi deklarasi tipe.",
      "C": "Opsi C salah karena masalahnya ada pada definisi antarmuka UserBase.",
      "D": "Opsi D salah karena Object.freeze tidak menambah properti ke tipe data."
    },
    "jobId": "fullstack",
    "code": "interface UserBase {\n  id: number;\n  name: string;\n}\nconst user: UserBase = { id: 1, name: 'Budi', email: 'budi@mail.com' as any };\nconsole.log(user.email); // Error: Property 'email' does not exist on type 'UserBase'"
  },
  {
    "id": "FI-021",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi type alias berikut agar `Coordinates` merepresentasikan array pasangan angka lintang dan bujur dengan panjang tepat 2 elemen:\n\n```typescript\n// Tuple dengan panjang tepat 2 elemen\ntype Coordinates = ___;\n\nconst jakarta: Coordinates = [-6.2088, 106.8456];\n```",
    "options": {
      "A": "type Coordinates = [number, number];",
      "B": "type Coordinates = number[2];",
      "C": "type Coordinates = (number, number);",
      "D": "type Coordinates = Pair<number>;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sintaks Tuple `[number, number]` membatasi array agar harus memiliki panjang tepat 2 elemen dan masing-masing elemen bernilai number.",
      "A": "Opsi A benar karena `[number, number]` adalah sintaks tuple resmi.",
      "B": "Opsi B salah karena `number[2]` bukan sintaks TypeScript.",
      "C": "Opsi C salah karena tanda kurung bukan tuple.",
      "D": "Opsi D salah karena Pair bukan generic bawaan."
    },
    "jobId": "fullstack",
    "code": "// Tuple dengan panjang tepat 2 elemen\ntype Coordinates = ___;\n\nconst jakarta: Coordinates = [-6.2088, 106.8456];"
  },
  {
    "id": "FI-022",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa output dari pemanggilan method `.trim()` pada variabel dengan tipe `string | undefined` menggunakan Nullish Coalescing (`??`) berikut?\n\n```typescript\nconst text: string | undefined = undefined;\nconst result = text?.trim() ?? 'DEFAULT';\nconsole.log(result);\n```",
    "options": {
      "A": "\"DEFAULT\"",
      "B": "\"\"",
      "C": "undefined",
      "D": "Error NullPointer"
    },
    "answer": "A",
    "explanation": {
      "correct": "Variabel `text` bernilai undefined. Optional chaining `text?.trim()` menghasilkan undefined. Operator Nullish Coalescing `??` mengevaluasi sisi kanan jika sisi kiri adalah null atau undefined, sehingga menghasilkan string 'DEFAULT'.",
      "A": "Opsi A benar karena undefined memicu fallback sisi kanan 'DEFAULT'.",
      "B": "Opsi B salah karena text bukan string kosong melainkan undefined.",
      "C": "Opsi C salah karena fallback diaktifkan.",
      "D": "Opsi D salah karena optional chaining aman dari error null pointer."
    },
    "jobId": "fullstack",
    "code": "const text: string | undefined = undefined;\nconst result = text?.trim() ?? 'DEFAULT';\nconsole.log(result);"
  },
  {
    "id": "FI-023",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa keunggulan utama dari `const enum` dibandingkan `enum` biasa di TypeScript?",
    "options": {
      "A": "Const enum tidak menghasilkan kode objek JavaScript sama sekali saat dikompilasi, melainkan nilainya langsung di-inline (inlined) pada tempat penggunaannya, menghemat ukuran bundle",
      "B": "Const enum dapat diubah nilainya saat runtime",
      "C": "Const enum mendukung pewarisan (inheritance)",
      "D": "Const enum dapat dikonversi otomatis menjadi tabel database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ketika `const enum` dikompilasi, TypeScript tidak membuat objek lookup runtime melainkan langsung mengganti ekspresi enum dengan literal nilai konstan (inlining), menghasilkan ukuran bundle JavaScript yang lebih kecil.",
      "A": "Opsi A benar karena inlining menghasilkan bundle size yang lebih optimal.",
      "B": "Opsi B salah karena const enum bernilai konstan dan tidak ada objek runtime.",
      "C": "Opsi C salah karena enum tidak mendukung inheritance.",
      "D": "Opsi D salah karena bukan fitur database."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-024",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa output dari operator 'in' pada pengecekan runtime berikut?\n\n```typescript\nconst admin = { name: 'Super', role: 'ADMIN' };\nconst guest = { name: 'Tamu' };\nconsole.log('role' in admin, 'role' in guest);\n```",
    "options": {
      "A": "true / false",
      "B": "false / true",
      "C": "true / true",
      "D": "false / false"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator `'role' in admin` memeriksa apakah properti 'role' ada pada objek admin (true). `'role' in guest` memeriksa properti pada guest yang hanya memiliki 'name' (false).",
      "A": "Opsi A benar karena admin memiliki properti 'role' sedangkan guest tidak.",
      "B": "Opsi B salah karena terbalik.",
      "C": "Opsi C salah karena guest tidak memiliki properti 'role'.",
      "D": "Opsi D salah karena admin memiliki properti 'role'."
    },
    "jobId": "fullstack",
    "code": "const admin = { name: 'Super', role: 'ADMIN' };\nconst guest = { name: 'Tamu' };\nconsole.log('role' in admin, 'role' in guest);"
  },
  {
    "id": "FI-025",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic utility berikut agar `PromiseType` mengekstrak tipe data yang dibungkus di dalam Promise (misal `Promise<string>` menjadi `string`):\n\n```typescript\ntype ApiResponse = Promise<string>;\n// Ekstrak tipe 'string' dari Promise\ntype Unwrapped = ___<ApiResponse>;\n```",
    "options": {
      "A": "type PromiseType = Awaited<Promise<string>>;",
      "B": "type PromiseType = Unwrap<Promise<string>>;",
      "C": "type PromiseType = Resolved<Promise<string>>;",
      "D": "type PromiseType = ValueOf<Promise<string>>;"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Awaited<T>` (diperkenalkan di TypeScript 4.5) digunakan untuk memodelkan operasi await pada tipe Promise, mengekstrak secara rekursif tipe nilai yang di-resolve oleh Promise.",
      "A": "Opsi A benar karena Awaited<T> adalah utility type standar.",
      "B": "Opsi B salah karena Unwrap bukan utility type standar bawaan.",
      "C": "Opsi C salah karena bukan utility type standar.",
      "D": "Opsi D salah karena bukan utility type standar."
    },
    "jobId": "fullstack",
    "code": "type ApiResponse = Promise<string>;\n// Ekstrak tipe 'string' dari Promise\ntype Unwrapped = ___<ApiResponse>;"
  },
  {
    "id": "FI-026",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa arti dari sintaks template literal types `type EventName = \\`on\\${Capitalize<string>}\\`;` di TypeScript?",
    "options": {
      "A": "Mendefinisikan tipe string yang harus diawali kata 'on' diikuti string yang diawali huruf kapital (seperti 'onClick', 'onChange')",
      "B": "Menjalankan fungsi event listener secara otomatis di browser",
      "C": "Mengubah semua teks menjadi huruf kecil",
      "D": "Membuat fungsi callback baru"
    },
    "answer": "A",
    "explanation": {
      "correct": "Template Literal Types memungkinkan manipulasi tipe berbasis pola string menggunakan sintaks backtick, dan intrinsic utility `Capitalize` memastikan huruf pertama setelah 'on' berhuruf besar.",
      "A": "Opsi A benar sesuai pola template literal types TypeScript.",
      "B": "Opsi B salah karena beroperasi pada level tipe data murni, bukan listener runtime.",
      "C": "Opsi C salah karena Capitalize membuat huruf besar.",
      "D": "Opsi D salah karena bukan fungsi callback."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-027",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "best-practice",
    "question": "Ketika membuat library atau modul komponen yang dapat diekstensikan oleh developer lain, mengapa `interface` lebih disarankan daripada `type alias` untuk mendefinisikan bentuk objek publik?",
    "options": {
      "A": "Karena interface mendukung fitur Declaration Merging sehingga pengguna library dapat menambahkan properti kustom ke interface tanpa mengubah source code asli library",
      "B": "Karena interface berjalan 2x lebih cepat di browser",
      "C": "Karena type alias tidak mendukung tipe generic",
      "D": "Karena type alias akan dihapus pada rilis TypeScript berikutnya"
    },
    "answer": "A",
    "explanation": {
      "correct": "Declaration Merging pada interface memungkinkan konsumen library melakukan 'module augmentation' untuk menyisipkan field tambahan ke kontrak interface pihak ketiga yang sudah ada.",
      "A": "Opsi A benar karena declaration merging sangat bermanfaat bagi ekstensibilitas library publik.",
      "B": "Opsi B salah karena tipe tidak ada saat runtime dan tidak memengaruhi kecepatan eksekusi browser.",
      "C": "Opsi C salah karena type alias sepenuhnya mendukung generics.",
      "D": "Opsi D salah karena type alias adalah fitur fundamental permanen di TypeScript."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-028",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Diberikan kode berikut. Apa hasil dari pemanggilan fungsi `add(5, 10)` dengan Function Overloading?\n\n```typescript\nfunction add(a: number, b: number): number;\nfunction add(a: string, b: string): string;\nfunction add(a: any, b: any): any {\n  return a + b;\n}\nconsole.log(add(5, 10));\n```",
    "options": {
      "A": "15",
      "B": "\"510\"",
      "C": "\"15\"",
      "D": "Compile error"
    },
    "answer": "A",
    "explanation": {
      "correct": "TypeScript mencocokkan signature overload pertama `add(a: number, b: number): number`. Saat runtime, implementasi `a + b` mengeksekusi penjumlahan dua angka 5 + 10 = 15.",
      "A": "Opsi A benar karena overload numerik dieksekusi menghasilkan angka 15.",
      "B": "Opsi B salah karena bukan konkatenasi string.",
      "C": "Opsi C salah karena kembaliannya bertipe number, bukan string.",
      "D": "Opsi D salah karena definisi overload dan implementasi valid."
    },
    "jobId": "fullstack",
    "code": "function add(a: number, b: number): number;\nfunction add(a: string, b: string): string;\nfunction add(a: any, b: any): any {\n  return a + b;\n}\nconsole.log(add(5, 10));"
  },
  {
    "id": "FI-029",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Kode berikut memunculkan compile error: 'Type string is not assignable to type Status'. Bagaimana cara memperbaikinya?\n\n```typescript\ntype Status = 'ACTIVE' | 'INACTIVE';\nconst config = { status: 'ACTIVE' };\nlet currentStatus: Status = config.status; // Error: Type 'string' is not assignable to type 'Status'\n```",
    "options": {
      "A": "Tambahkan assertion `as const` pada objek statusConfig atau beri anotasi tipe eksplisit",
      "B": "Ganti let dengan var",
      "C": "Ubah tipe Status menjadi any",
      "D": "Hapus properti status"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena tidak menggunakan `as const`, TypeScript melakukan type widening pada properti objek literal `{ status: 'ACTIVE' }` menjadi tipe `string` umum (bukan literal `'ACTIVE'`), sehingga ditolak saat di-assign ke variabel bertipe union `'ACTIVE' | 'INACTIVE'`. Menambahkan `as const` mempertahankan tipe literal spesifik.",
      "A": "Opsi A benar karena `as const` mencegah type widening pada objek literal.",
      "B": "Opsi B salah karena var tidak mengatasi pelebaran tipe (type widening).",
      "C": "Opsi C salah karena menurunkan type safety.",
      "D": "Opsi D salah karena properti status memang dibutuhkan."
    },
    "jobId": "fullstack",
    "code": "type Status = 'ACTIVE' | 'INACTIVE';\nconst config = { status: 'ACTIVE' };\nlet currentStatus: Status = config.status; // Error: Type 'string' is not assignable to type 'Status'"
  },
  {
    "id": "FI-030",
    "level": "intermediate",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic berikut agar `Parameters<T>` mengekstrak tuple tipe argumen dari fungsi `fetchUser`:\n\n```typescript\nasync function fetchUser(id: number, active: boolean) {\n  return { id, active };\n}\n\ntype FetchUserArgs = ___;\n```",
    "options": {
      "A": "type Args = Parameters<typeof fetchUser>;",
      "B": "type Args = Arguments<typeof fetchUser>;",
      "C": "type Args = Parameters<fetchUser>;",
      "D": "type Args = Params<typeof fetchUser>;"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Parameters<T>` mengekstrak tipe parameter fungsi dalam bentuk tuple. Karena `fetchUser` adalah nilai/fungsi runtime, kita wajib menggunakan `typeof fetchUser` untuk mendapatkan tipe fungsinya.",
      "A": "Opsi A benar karena `Parameters<typeof fetchUser>` mengekstrak tuple parameter fungsi secara tepat.",
      "B": "Opsi B salah karena Arguments bukan utility type bawaan.",
      "C": "Opsi C salah karena fetchUser adalah nilai dan memerlukan operator typeof.",
      "D": "Opsi D salah karena Params bukan nama resmi utility type."
    },
    "jobId": "fullstack",
    "code": "async function fetchUser(id: number, active: boolean) {\n  return { id, active };\n}\n\ntype FetchUserArgs = ___;"
  },
  {
    "id": "FI-031",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Bagaimana cara terbaik menginisialisasi React Context dengan TypeScript ketika nilai awal (default value) belum tersedia saat `createContext` dipanggil?",
    "options": {
      "A": "createContext<AuthContextType | null>(null) dan membuat custom hook yang melempar error jika nilai context adalah null",
      "B": "createContext<any>({})",
      "C": "createContext<AuthContextType>({} as AuthContextType) dengan mock kosong berbahaya",
      "D": "Context tidak bisa digunakan jika belum ada nilai awal"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pola terbaik di React + TypeScript adalah menginisialisasi dengan `null` (`createContext<T | null>(null)`), kemudian mengekspos custom hook `useAuth()` yang memverifikasi `if (!context) throw new Error(...)`, sehingga komponen pemanggil dijamin menerima objek non-null tanpa perlu optional chaining berulang.",
      "A": "Opsi A benar karena ini adalah pattern resmi dan paling type-safe di komunitas React.",
      "B": "Opsi B salah karena any menghilangkan type safety.",
      "C": "Opsi C salah karena type assertion objek kosong palsu dapat memicu runtime error saat properti diakses.",
      "D": "Opsi D salah karena Context mendukung inisialisasi null."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-032",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Perhatikan komponen berikut. Berapa kali string 'Fetch Data' dicetak ke console jika user mengklik tombol 'Increment' 3 kali?\n\n```typescript\nfunction Dashboard() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    console.log('Fetch Data');\n  }, []);\n  return <button onClick={() => setCount(c => c + 1)}>Increment {count}</button>;\n}\n```",
    "options": {
      "A": "Hanya 1 kali (saat mount awal)",
      "B": "4 kali (1 mount + 3 klik)",
      "C": "3 kali",
      "D": "0 kali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena dependency array `[]` pada `useEffect` kosong, efek tersebut HANYA dieksekusi satu kali setelah initial render (mount). Perubahan state `count` akibat klik tombol memicu re-render komponen, namun efek tidak akan dijalankan ulang karena tidak bergantung pada `count`.",
      "A": "Opsi A benar karena dependency array kosong mengisolasi efek ke initial mount.",
      "B": "Opsi B salah karena effect tidak dijalankan ulang saat count berubah.",
      "C": "Opsi C salah karena effect tidak terikat pada klik tombol.",
      "D": "Opsi D salah karena effect pasti jalan saat mount."
    },
    "jobId": "fullstack",
    "code": "function Dashboard() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    console.log('Fetch Data');\n  }, []);\n  return <button onClick={() => setCount(c => c + 1)}>Increment {count}</button>;\n}"
  },
  {
    "id": "FI-033",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut mengalami bug 'Stale Closure' di mana timer selalu mencetak nilai count = 0 setiap detik meskipun tombol sudah diklik. Bagaimana cara memperbaikinya?\n\n```typescript\nfunction Timer() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount(count + 1); // Stale closure bug\n    }, 1000);\n    return () => clearInterval(id);\n  }, []);\n  return <div>{count}</div>;\n}\n```",
    "options": {
      "A": "Gunakan functional updater `setCount(prev => prev + 1)` di dalam callback interval",
      "B": "Ubah variabel count menjadi let di luar komponen",
      "C": "Hapus dependency array dari useEffect",
      "D": "Ganti setInterval dengan setTimeout"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi interval di-capture saat render pertama ketika `count` bernilai 0. Karena closure menangkap nilai 0, `count + 1` selalu menghasilkan 1. Dengan menggunakan functional update `setCount(prev => prev + 1)`, fungsi selalu menerima nilai state terbaru secara real-time tanpa bergantung pada closure.",
      "A": "Opsi A benar karena functional updater memecahkan masalah stale state closure.",
      "B": "Opsi B salah karena variabel di luar komponen merusak isolasi multi-instance.",
      "C": "Opsi C salah karena menghapus array dependensi akan membuat timer baru dibuat di setiap render (memory leak).",
      "D": "Opsi D salah karena setTimeout hanya berjalan sekali tanpa perulangan."
    },
    "jobId": "fullstack",
    "code": "function Timer() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount(count + 1); // Stale closure bug\n    }, 1000);\n    return () => clearInterval(id);\n  }, []);\n  return <div>{count}</div>;\n}"
  },
  {
    "id": "FI-034",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic pada hook `useParams` dari React Router v6 berikut agar parameter `id` terdefinisi sebagai string:\n\n```typescript\nimport { useParams } from 'react-router-dom';\n\nexport const UserDetail = () => {\n  const { id } = ___;\n  return <h2>User ID: {id}</h2>;\n};\n```",
    "options": {
      "A": "useParams<{ id: string }>()",
      "B": "useParams<string>()",
      "C": "useParams([id: string])",
      "D": "useParams('id')"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di React Router v6, hook `useParams<Params>()` menerima type parameter yang memetakan nama route param ke string atau undefined. Tipe yang benar adalah `useParams<{ id: string }>()`.",
      "A": "Opsi A benar sesuai definisi generic signature useParams React Router.",
      "B": "Opsi B salah karena useParams menerima record/objek map tipe parameter.",
      "C": "Opsi C salah karena sintaks generic salah.",
      "D": "Opsi D salah karena tipe diletakkan di kurung lancip generic, bukan argumen fungsi."
    },
    "jobId": "fullstack",
    "code": "import { useParams } from 'react-router-dom';\n\nexport const UserDetail = () => {\n  const { id } = ___;\n  return <h2>User ID: {id}</h2>;\n};"
  },
  {
    "id": "FI-035",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Kapan sebaiknya komponen React dibungkus dengan `React.memo`?",
    "options": {
      "A": "Ketika komponen sering me-render ulang dengan props yang persis sama dan proses render komponen tersebut cukup berat secara komputasi / memiliki pohon DOM besar",
      "B": "Pada semua komponen aplikasi tanpa terkecuali",
      "C": "Hanya pada komponen yang menggunakan form input",
      "D": "Hanya pada komponen yang mengambil data dari database"
    },
    "answer": "A",
    "explanation": {
      "correct": "`React.memo` melakukan shallow comparison pada props lama dan props baru. Jika props sama, React melewati proses rendering komponen tersebut. Pembungkusan pada semua komponen justru menambah overhead komparasi props yang tidak perlu pada komponen ringan.",
      "A": "Opsi A benar karena memoization optimal untuk komponen berat dengan props stabil.",
      "B": "Opsi B salah karena membungkus semua komponen menambah overhead perbandingan props yang sia-sia.",
      "C": "Opsi C salah karena form input justru sering berganti value tiap ketikan.",
      "D": "Opsi D salah karena fetch database ada di level logic/hook, bukan penentu memo."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-036",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Perhatikan kode berikut yang menggunakan `useCallback`. Jika komponen Parent re-render karena `otherState` berubah, apakah referensi fungsi `handleClick` berubah?\n\n```typescript\nconst handleClick = useCallback(() => {\n  console.log('Clicked', count);\n}, [count]);\n```",
    "options": {
      "A": "Tidak berubah (referensi fungsi tetap sama persis)",
      "B": "Berubah menghasilkan fungsi baru",
      "C": "Fungsi dihapus dari memori",
      "D": "Nilai count otomatis menjadi 0"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useCallback` meng-cache instance fungsi di antara re-render. Karena dependency array `[count]` hanya berisi `count`, perubahan pada `otherState` tidak akan membuat ulang fungsi `handleClick`. Referensi fungsi tetap sama.",
      "A": "Opsi A benar karena referensi fungsi di-memoize dan dependensi count tidak berubah.",
      "B": "Opsi B salah karena dependensi tidak berubah sehingga tidak dibuat fungsi baru.",
      "C": "Opsi C salah karena fungsi tetap aktif.",
      "D": "Opsi D salah karena count tidak terpengaruh oleh state lain."
    },
    "jobId": "fullstack",
    "code": "const handleClick = useCallback(() => {\n  console.log('Clicked', count);\n}, [count]);"
  },
  {
    "id": "FI-037",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut mengalami infinite re-render loop saat dijalankan. Apa penyebabnya?\n\n```typescript\nfunction UserProfile({ userId }: { userId: string }) {\n  const config = { headers: { Authorization: 'Bearer token' } }; // Objek baru di setiap render\n  useEffect(() => {\n    fetchUserData(userId, config);\n  }, [userId, config]); // config memicu infinite loop\n}\n```",
    "options": {
      "A": "Objek config dibuat baru di setiap render (referensi memori selalu baru), sehingga useEffect menganggap dependensi selalu berubah",
      "B": "useEffect tidak boleh menerima objek",
      "C": "URL harus bertipe konstanta statik",
      "D": "fetchData harus dipanggil di dalam button onClick"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di JavaScript, objek literal `{ headers: ... }` yang dibuat di dalam body komponen akan memiliki referensi memori baru pada setiap siklus render. Karena dimasukkan ke dependency array `useEffect`, React mendeteksi perubahan referensi dan mengeksekusi efek terus-menerus.",
      "A": "Opsi A benar karena object reference instability memicu re-render loop pada dependency array.",
      "B": "Opsi B salah karena useEffect bisa menerima objek jika referensinya di-memoize dengan useMemo atau dipindahkan ke luar komponen.",
      "C": "Opsi C salah karena URL string dinamis valid.",
      "D": "Opsi D salah karena fetch di useEffect adalah pola umum data loading."
    },
    "jobId": "fullstack",
    "code": "function UserProfile({ userId }: { userId: string }) {\n  const config = { headers: { Authorization: 'Bearer token' } }; // Objek baru di setiap render\n  useEffect(() => {\n    fetchUserData(userId, config);\n  }, [userId, config]); // config memicu infinite loop\n}"
  },
  {
    "id": "FI-038",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi generic signature pemanggilan Axios berikut agar respon data secara eksplisit bertipe `User[]`:",
    "options": {
      "A": "axios.get<User[]>('/api/users')",
      "B": "axios.get('/api/users') as User[]",
      "C": "axios.get(User[], '/api/users')",
      "D": "axios.get<User>('/api/users')"
    },
    "answer": "A",
    "explanation": {
      "correct": "Axios mendukung generic parameter pada method HTTP-nya: `axios.get<T>(url)` akan mengembalikan `Promise<AxiosResponse<T>>`, sehingga `response.data` otomatis bertipe `User[]`.",
      "A": "Opsi A benar karena `axios.get<T>` adalah cara standar pengetikan respon Axios.",
      "B": "Opsi B salah karena `axios.get` me-return Promise<AxiosResponse>, bukan array langsung.",
      "C": "Opsi C salah karena sintaks generic salah.",
      "D": "Opsi D salah karena User tunggal tidak cocok untuk endpoint list array users."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-039",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Mengapa menggunakan index array (seperti `items.map((item, index) => <li key={index}>...</li>)`) sebagai prop 'key' sangat tidak disarankan jika daftar item dapat ditambah, dihapus, atau diurutkan?",
    "options": {
      "A": "Dapat menyebabkan bug state yang tertukar pada komponen anak, animasi yang rusak, dan penurunan performa rekonsiliasi DOM",
      "B": "Menyebabkan browser crash secara langsung",
      "C": "Index array tidak didukung oleh sintaks TypeScript",
      "D": "React 18 melarang penggunaan tipe number pada key"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika item di tengah array dihapus atau disortir ulang, indeks setiap elemen berikutnya akan bergeser. React yang mencocokkan node DOM berdasarkan key akan salah mengasosiasikan local state input/komponen ke item yang salah.",
      "A": "Opsi A benar karena perubahan urutan item membuat key indeks tidak stabil dan merusak state UI.",
      "B": "Opsi B salah karena tidak langsung memicu browser crash melainkan bug tampilan/state.",
      "C": "Opsi C salah karena TypeScript mengizinkan key bertipe string atau number.",
      "D": "Opsi D salah karena key bertipe number sepenuhnya legal."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-040",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi dari hook `useReducer` di React dan kapan waktu yang tepat menggunakannya dibanding `useState`?",
    "options": {
      "A": "Mengelola state yang kompleks dengan banyak sub-nilai atau ketika state berikutnya bergantung pada transisi state sebelumnya melalui action yang terstruktur",
      "B": "Menghapus state yang sudah tidak digunakan",
      "C": "Mengurangi ukuran bundle JavaScript secara otomatis",
      "D": "Mengurangi pemakaian memori RAM browser secara paksa"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useReducer` mengikuti pola Redux (state, action, reducer function) dan sangat disarankan untuk state yang memiliki alur transisi bisnis yang kompleks atau ketika pembaruan beberapa state saling berkaitan erat.",
      "A": "Opsi A benar sesuai use-case resmi dari hook useReducer.",
      "B": "Opsi B salah karena reducer bukan garbage collector.",
      "C": "Opsi C salah karena useReducer tidak mengompres bundle.",
      "D": "Opsi D salah karena tidak ada manipulasi RAM paksa."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-041",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Diberikan reducer berikut. Apa nilai state 'count' setelah action `{ type: 'DECREMENT' }` di-dispatch?\n\n```typescript\ntype Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };\nfunction counterReducer(state: { count: number }, action: Action) {\n  switch (action.type) {\n    case 'INCREMENT': return { count: state.count + 1 };\n    case 'DECREMENT': return { count: state.count - 1 };\n  }\n}\nconst newState = counterReducer({ count: 5 }, { type: 'DECREMENT' });\nconsole.log(newState.count);\n```",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Action `{ type: 'DECREMENT' }` mencocokkan case 'DECREMENT', mengeksekusi `state.count - 1`. Dengan nilai awal count = 5, hasil barunya adalah 5 - 1 = 4.",
      "A": "Opsi A benar karena pengurangan 5 - 1 menghasilkan 4.",
      "B": "Opsi B salah karena 6 adalah hasil INCREMENT.",
      "C": "Opsi C salah karena state berubah.",
      "D": "Opsi D salah karena bukan operasi reset."
    },
    "jobId": "fullstack",
    "code": "type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };\nfunction counterReducer(state: { count: number }, action: Action) {\n  switch (action.type) {\n    case 'INCREMENT': return { count: state.count + 1 };\n    case 'DECREMENT': return { count: state.count - 1 };\n  }\n}\nconst newState = counterReducer({ count: 5 }, { type: 'DECREMENT' });\nconsole.log(newState.count);"
  },
  {
    "id": "FI-042",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi komponen Route React Router v6 berikut untuk merender child routes di dalam layout parent:\n\n```typescript\nimport { Outlet } from 'react-router-dom';\n\nexport const DashboardLayout = () => {\n  return (\n    <div className=\"dashboard\">\n      <Sidebar />\n      <main>\n        ___\n      </main>\n    </div>\n  );\n};\n```",
    "options": {
      "A": "<Outlet />",
      "B": "<Children />",
      "C": "<RouterView />",
      "D": "<ViewPort />"
    },
    "answer": "A",
    "explanation": {
      "correct": "`<Outlet />` adalah komponen bawaan React Router v6 yang bertindak sebagai placeholder tempat komponen anak (child route elements) dirender di dalam komponen parent layout.",
      "A": "Opsi A benar karena `<Outlet />` adalah komponen resmi perender nested routes di React Router v6.",
      "B": "Opsi B salah karena bukan komponen React Router.",
      "C": "Opsi C salah karena RouterView adalah komponen milik Vue Router, bukan React Router.",
      "D": "Opsi D salah karena bukan komponen React Router."
    },
    "jobId": "fullstack",
    "code": "import { Outlet } from 'react-router-dom';\n\nexport const DashboardLayout = () => {\n  return (\n    <div className=\"dashboard\">\n      <Sidebar />\n      <main>\n        ___\n      </main>\n    </div>\n  );\n};"
  },
  {
    "id": "FI-043",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Custom hook `useWindowWidth` berikut menyebabkan memory leak dan performa browser menurun drastis setelah bernavigasi antar halaman. Mengapa?\n\n```typescript\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    // Kurang cleanup: return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  return width;\n}\n```",
    "options": {
      "A": "Event listener 'resize' tidak pernah dihapus (kurang fungsi cleanup `removeEventListener`) saat komponen unmount",
      "B": "window.innerWidth tidak didukung oleh browser modern",
      "C": "State width harus bernilai string",
      "D": "useEffect tidak boleh mengakses objek window"
    },
    "answer": "A",
    "explanation": {
      "correct": "Setiap kali komponen yang menggunakan hook ini di-mount, listener baru ditambahkan ke objek global `window`. Tanpa menghapus listener pada fungsi cleanup effect (`return () => window.removeEventListener(...)`), listener lama akan menumpuk di memori (memory leak).",
      "A": "Opsi A benar karena ketiadaan cleanup listener window memicu memory leak.",
      "B": "Opsi B salah karena window.innerWidth adalah properti standar web API.",
      "C": "Opsi C salah karena number adalah tipe yang tepat untuk ukuran lebar piksel.",
      "D": "Opsi D salah karena mengakses window di dalam useEffect aman dilakukan karena dieksekusi di client."
    },
    "jobId": "fullstack",
    "code": "function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    // Kurang cleanup: return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  return width;\n}"
  },
  {
    "id": "FI-044",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa fungsi utama dari hook `useNavigate` di React Router v6?\n\n```typescript\nimport { useNavigate } from 'react-router-dom';\n\nexport const LoginForm = () => {\n  const navigate = useNavigate();\n  const handleLoginSuccess = () => {\n    // Navigasi programatik ke dashboard\n    navigate('/dashboard');\n  };\n  return <button onClick={handleLoginSuccess}>Masuk</button>;\n};\n```",
    "options": {
      "A": "Melakukan navigasi programatik antar rute halaman (misalnya berpindah rute setelah submit form sukses)",
      "B": "Membaca query parameter dari URL",
      "C": "Membuat server routing di backend",
      "D": "Memuat ulang seluruh halaman web dari server"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useNavigate` mengembalikan fungsi navigator yang memungkinkan pengembang berpindah halaman secara imperatif/programatik (`navigate('/dashboard')`) tanpa memerlukan tag `<Link>`.",
      "A": "Opsi A benar sesuai kegunaan utama useNavigate.",
      "B": "Opsi B salah karena membaca query param dilakukan dengan useSearchParams.",
      "C": "Opsi C salah karena React Router adalah client-side routing library.",
      "D": "Opsi D salah karena SPA routing menghindari reload halaman penuh."
    },
    "jobId": "fullstack",
    "code": "import { useNavigate } from 'react-router-dom';\n\nexport const LoginForm = () => {\n  const navigate = useNavigate();\n  const handleLoginSuccess = () => {\n    // Navigasi programatik ke dashboard\n    navigate('/dashboard');\n  };\n  return <button onClick={handleLoginSuccess}>Masuk</button>;\n};"
  },
  {
    "id": "FI-045",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Ketika mengonsumsi Context dengan custom hook, manakah implementasi yang paling aman untuk mencegah komponen digunakan di luar Provider-nya?",
    "options": {
      "A": "const useAuth = () => {\n  const context = useContext(AuthContext);\n  if (!context) throw new Error('useAuth must be used within an AuthProvider');\n  return context;\n};",
      "B": "const useAuth = () => useContext(AuthContext) as AuthContextType;",
      "C": "const useAuth = () => useContext(AuthContext) || {};",
      "D": "const useAuth = () => useContext(AuthContext) as any;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pola guard clause `if (!context) throw new Error(...)` menjamin bahwa jika developer lupa membungkus komponen dengan Provider, error yang jelas akan muncul saat pengembangan, dan TypeScript dapat menyimpulkan bahwa nilai return `context` pasti bukan null/undefined.",
      "A": "Opsi A benar karena memberikan pesan error yang jelas dan menjamin type safety non-null.",
      "B": "Opsi B salah karena type assertion menyembunyikan potensi error runtime.",
      "C": "Opsi C salah karena fallback objek kosong menyamarkan masalah konfigurasi provider.",
      "D": "Opsi D salah karena any merusak sistem tipe."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-046",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Diberikan form event handler berikut. Apa tujuan dari pemanggilan `e.preventDefault()`?\n\n```typescript\nconst handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n  e.preventDefault();\n  console.log('Form disubmit');\n};\n```",
    "options": {
      "A": "Mencegah perilaku default browser melakukan reload halaman penuh (full-page refresh) saat form di-submit",
      "B": "Menghapus semua data yang ada di dalam form",
      "C": "Menonaktifkan tombol submit secara permanen",
      "D": "Mengirimkan data langsung ke database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, browser akan melakukan HTTP POST/GET dan me-reload halaman ketika elemen `<form>` di-submit. `e.preventDefault()` membatalkan aksi default tersebut sehingga penanganan submit dapat dikontrol penuh oleh JavaScript/React.",
      "A": "Opsi A benar karena mencegah perilaku default reload halaman browser.",
      "B": "Opsi B salah karena preventDefault tidak mereset inputan form.",
      "C": "Opsi C salah karena tombol submit tidak dinonaktifkan.",
      "D": "Opsi D salah karena pengiriman data dilakukan oleh kode custom developer setelahnya."
    },
    "jobId": "fullstack",
    "code": "const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n  e.preventDefault();\n  console.log('Form disubmit');\n};"
  },
  {
    "id": "FI-047",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe interface props berikut agar komponen Wrapper dapat menerima elemen anak (children) bertipe standar React:\n\n```typescript\ninterface CardWrapperProps {\n  title: string;\n  ___;\n}\n\nexport const CardWrapper: React.FC<CardWrapperProps> = ({ title, children }) => (\n  <div className=\"card\"><h3>{title}</h3>{children}</div>\n);\n```",
    "options": {
      "A": "children: React.ReactNode;",
      "B": "children: HTMLElement;",
      "C": "children: string;",
      "D": "children: Function;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di React + TypeScript, prop `children` paling tepat dan fleksibel diketik sebagai `React.ReactNode` (atau menggunakan utility helper `React.PropsWithChildren<P>`).",
      "A": "Opsi A benar karena React.ReactNode adalah tipe standar prop children.",
      "B": "Opsi B salah karena HTMLElement adalah node DOM murni bukan Virtual DOM React.",
      "C": "Opsi C salah karena membatasi children hanya bisa berupa teks string murni.",
      "D": "Opsi D salah karena children umumnya berupa elemen UI, bukan fungsi (kecuali render props pattern)."
    },
    "jobId": "fullstack",
    "code": "interface CardWrapperProps {\n  title: string;\n  ___;\n}\n\nexport const CardWrapper: React.FC<CardWrapperProps> = ({ title, children }) => (\n  <div className=\"card\"><h3>{title}</h3>{children}</div>\n);"
  },
  {
    "id": "FI-048",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi dari `useLayoutEffect` dan apa perbedaannya dengan `useEffect` biasa?",
    "options": {
      "A": "useLayoutEffect dieksekusi secara sinkron tepat setelah semua mutasi DOM selesai tetapi sebelum browser melukis (paint) tampilan ke layar, berguna untuk pengukuran layout DOM guna mencegah flicker",
      "B": "useLayoutEffect hanya berjalan di server side (SSR)",
      "C": "useLayoutEffect berjalan 10 detik setelah useEffect",
      "D": "Tidak ada perbedaan, hanya nama alias"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useEffect` berjalan asinkron setelah browser selesai menggambar layar (tidak memblokir render). `useLayoutEffect` berjalan sinkron sebelum layar dilukis, ideal untuk mengukur dimensi elemen DOM (seperti scroll position atau tooltip positioning) agar tidak terjadi visual flickering.",
      "A": "Opsi A benar karena membedakan timing eksekusi sinkron pre-paint vs asinkron post-paint.",
      "B": "Opsi B salah karena useLayoutEffect justru melempar warning di SSR.",
      "C": "Opsi C salah karena berjalan sebelum paint, bukan setelahnya.",
      "D": "Opsi D salah karena karakteristik performa dan timingnya berbeda."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-049",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut memicu warning: 'Cannot update a component while rendering a different component'. Apa penyebabnya?\n\n```typescript\nfunction ChildComponent({ onLoaded }: { onLoaded: () => void }) {\n  onLoaded(); // Salah: dipanggil langsung di render phase\n  return <div>Konten Siap</div>;\n}\n```",
    "options": {
      "A": "Fungsi callback `onLoaded` yang memutakhirkan state komponen induk dipanggil langsung di render phase, bukan di dalam useEffect",
      "B": "Komponen anak tidak boleh memiliki props",
      "C": "State induk harus dideklarasikan sebagai global variable",
      "D": "onLoaded harus berupa Promise"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memanggil callback props yang mengubah state komponen lain (parent) secara langsung saat proses render berlangsung melanggar siklus render React. Pemanggilan efek samping tersebut wajib dibungkus di dalam hook `useEffect`.",
      "A": "Opsi A benar karena side effect pengubah state parent harus berada di useEffect.",
      "B": "Opsi B salah karena passing props adalah inti arsitektur React.",
      "C": "Opsi C salah karena state global bukan solusi masalah render phase timing.",
      "D": "Opsi D salah karena callback tidak harus berupa Promise."
    },
    "jobId": "fullstack",
    "code": "function ChildComponent({ onLoaded }: { onLoaded: () => void }) {\n  onLoaded(); // Salah: dipanggil langsung di render phase\n  return <div>Konten Siap</div>;\n}"
  },
  {
    "id": "FI-050",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Berapa nilai count yang tercetak di console pada render awal saat tombol diklik sekali?\n\n```typescript\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => {\n    setCount(1);\n    console.log(count); // Nilai yang tercetak?\n  };\n  return <button onClick={handleClick}>Set</button>;\n}\n```",
    "options": {
      "A": "0",
      "B": "1",
      "C": "undefined",
      "D": "NaN"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pembaruan state di React bersifat asinkron dari sudut pandang eksekusi fungsi. Memanggil `setCount(1)` menjadwalkan pembaruan state untuk render berikutnya. Baris `console.log(count)` berikutnya tetap membaca nilai `count` pada snapshot render saat ini yaitu 0.",
      "A": "Opsi A benar karena nilai count pada render frame saat itu masih bernilai 0.",
      "B": "Opsi B salah karena state baru akan terefleksi pada siklus render berikutnya.",
      "C": "Opsi C salah karena count bernilai angka 0.",
      "D": "Opsi D salah karena tidak ada operasi kalkulasi invalid."
    },
    "jobId": "fullstack",
    "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => {\n    setCount(1);\n    console.log(count); // Nilai yang tercetak?\n  };\n  return <button onClick={handleClick}>Set</button>;\n}"
  },
  {
    "id": "FI-051",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa peran dari antarmuka generic `React.ComponentProps<T>` di TypeScript?",
    "options": {
      "A": "Mengekstrak seluruh tipe props yang didukung oleh elemen HTML standar atau komponen React kustom T",
      "B": "Membuat komponen baru secara otomatis",
      "C": "Memvalidasi form input secara otomatis",
      "D": "Menghapus props yang tidak terpakai"
    },
    "answer": "A",
    "explanation": {
      "correct": "`React.ComponentProps<'button'>` mengekstrak semua atribut HTML props bawaan tag `<button>` (seperti onClick, disabled, type) sehingga mempermudah pembuatan komponen UI reusable yang dapat menerima atribut HTML asli tanpa mendefinisikannya manual.",
      "A": "Opsi A benar karena ComponentProps mengekstrak tipe props dari elemen/komponen target.",
      "B": "Opsi B salah karena hanya alat utilitas tipe compile-time.",
      "C": "Opsi C salah karena bukan form validator.",
      "D": "Opsi D salah karena tidak menghapus properti."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-052",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi hook berikut agar membatalkan fetch request menggunakan AbortController saat komponen unmount:\n\n```typescript\nuseEffect(() => {\n  const controller = new AbortController();\n  axios.get('/api/data', { signal: controller.signal });\n  ___\n}, []);\n```",
    "options": {
      "A": "return () => controller.abort();",
      "B": "return controller.cancel();",
      "C": "return () => controller.stop();",
      "D": "return controller.kill();"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi pembersih (cleanup) useEffect mengembalikan callback `() => controller.abort()`, yang membatalkan request jaringan aktif jika user berpindah halaman sebelum respon tiba, mencegah memory leak dan state update unmounted component.",
      "A": "Opsi A benar karena method resmi AbortController adalah `.abort()` di dalam callback cleanup.",
      "B": "Opsi B salah karena cancel bukan method AbortController.",
      "C": "Opsi C salah karena stop bukan method resmi.",
      "D": "Opsi D salah karena kill bukan method resmi."
    },
    "jobId": "fullstack",
    "code": "useEffect(() => {\n  const controller = new AbortController();\n  axios.get('/api/data', { signal: controller.signal });\n  ___\n}, []);"
  },
  {
    "id": "FI-053",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Mengapa disarankan memisahkan logika pengambilan data ke dalam Custom Hook (misal `useUsers()`) dibanding menulis fetch logic langsung di dalam komponen UI?",
    "options": {
      "A": "Meningkatkan reusabilitas logika, memisahkan concern logika bisnis dari presentasi UI (Separation of Concerns), dan mempermudah unit testing komponen UI",
      "B": "Membuat aplikasi otomatis terhindar dari error jaringan",
      "C": "Meningkatkan bandwidth jaringan internet klien",
      "D": "Wajib dilakukan karena React melarang penulisan fetch di komponen"
    },
    "answer": "A",
    "explanation": {
      "correct": "Membuat custom hook memisahkan presentation logic (tampilan) dari data-fetching/state management logic, membuat kode rapi, mudah dites dengan React Hooks Testing Library, dan reusable di berbagai komponen lain.",
      "A": "Opsi A benar karena meningkatkan modularitas, reusabilitas, dan testabilitas kode.",
      "B": "Opsi B salah karena error jaringan tetap harus ditangani di dalam hook.",
      "C": "Opsi C salah karena tidak ada pengaruh terhadap kapasitas bandwidth fisik.",
      "D": "Opsi D salah karena React tidak melarang, namun ini adalah best practice arsitektur."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-054",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Diberikan custom hook berikut. Apa tipe kembalian dari nilai `data` saat dipanggil?\n\n```typescript\nfunction useFetchUsers() {\n  const [data, setData] = useState<User[] | null>(null);\n  // fetch implementation...\n  return { data };\n}\n```",
    "options": {
      "A": "User[] | null",
      "B": "User[]",
      "C": "any",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "State diinisialisasi dengan `useState<User[] | null>(null)`. Nilai kembalian `data` bertipe union `User[] | null` (bernilai null sebelum fetch selesai, dan bernilai array User[] setelah berhasil dimuat).",
      "A": "Opsi A benar karena state didefinisikan sebagai union User[] | null.",
      "B": "Opsi B salah karena saat inisialisasi nilainya adalah null.",
      "C": "Opsi C salah karena tipe generic eksplisit mencegah tipe any.",
      "D": "Opsi D salah karena default value-nya adalah null, bukan undefined."
    },
    "jobId": "fullstack",
    "code": "function useFetchUsers() {\n  const [data, setData] = useState<User[] | null>(null);\n  // fetch implementation...\n  return { data };\n}"
  },
  {
    "id": "FI-055",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen berikut selalu me-render ulang komponen Child meskipun props yang di-pass nilainya sama persis. Mengapa `React.memo` pada Child gagal mencegah re-render?\n\n```typescript\nconst Child = React.memo(({ onClick }: { onClick: () => void }) => {\n  console.log('Child Render');\n  return <button onClick={onClick}>Aksi</button>;\n});\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => console.log('Klik'); // Referensi baru di setiap render\n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Counter {count}</button>\n      <Child onClick={handleClick} />\n    </div>\n  );\n}\n```",
    "options": {
      "A": "Fungsi `handleClick` dibuat baru di setiap render komponen Parent karena tidak dibungkus dengan `useCallback`, sehingga perbandingan shallow props mendeteksi referensi fungsi baru",
      "B": "React.memo tidak bekerja pada komponen yang menerima fungsi",
      "C": "Button harus memiliki atribut key",
      "D": "State count harus dihapus dari Parent"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di JavaScript, fungsi inline `() => { ... }` selalu memiliki referensi memori baru di setiap render. `React.memo` melakukan perbandingan referensi (shallow equality `prevProps.onClick === nextProps.onClick`). Karena referensi fungsi selalu berbeda, memo menganggap props berubah dan tetap me-render Child. Solusinya: bungkus fungsi dengan `useCallback`.",
      "A": "Opsi A benar karena hilangnya memoization referensi fungsi membatalkan efektivitas React.memo.",
      "B": "Opsi B salah karena React.memo sepenuhnya mendukung props fungsi jika fungsi tersebut di-memoize dengan useCallback.",
      "C": "Opsi C salah karena key hanya untuk elemen array list.",
      "D": "Opsi D salah karena count adalah state sah milik parent."
    },
    "jobId": "fullstack",
    "code": "const Child = React.memo(({ onClick }: { onClick: () => void }) => {\n  console.log('Child Render');\n  return <button onClick={onClick}>Aksi</button>;\n});\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => console.log('Klik'); // Referensi baru di setiap render\n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Counter {count}</button>\n      <Child onClick={handleClick} />\n    </div>\n  );\n}"
  },
  {
    "id": "FI-056",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa peran dari atribut `displayName` pada komponen React ketika menggunakan Higher-Order Component (HOC) atau React.memo di TypeScript?",
    "options": {
      "A": "Memberikan nama deskriptif pada komponen di React Developer Tools untuk mempermudah proses debugging hierarki pohon komponen",
      "B": "Menentukan teks judul pada tab browser",
      "C": "Mengatur label tombol submit form",
      "D": "Mengubah nama tag HTML di DOM browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "Komponen yang dibungkus HOC atau React.memo sering kali tampil sebagai `Anonymous` di React DevTools. Mengatur `MyComponent.displayName = 'CustomName'` membantu pengembang mengenali komponen di panel devtools.",
      "A": "Opsi A benar karena displayName digunakan oleh React DevTools untuk penamaan node komponen.",
      "B": "Opsi B salah karena judul tab diatur oleh document.title.",
      "C": "Opsi C salah karena tidak berhubungan dengan teks tombol.",
      "D": "Opsi D salah karena tidak mengubah elemen HTML riil."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-057",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe event handler untuk form submission pada komponen React berikut:\n\n```typescript\nconst onFormSubmit = (___) => {\n  e.preventDefault();\n  // logic...\n};\nreturn <form onSubmit={onFormSubmit}>...</form>;\n```",
    "options": {
      "A": "e: React.FormEvent<HTMLFormElement>",
      "B": "e: React.SubmitEvent",
      "C": "e: FormEvent",
      "D": "e: MouseEvent<HTMLFormElement>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Event submit pada elemen form di React diketik sebagai `React.FormEvent<HTMLFormElement>`.",
      "A": "Opsi A benar karena FormEvent<HTMLFormElement> adalah tipe standar React untuk event onSubmit form.",
      "B": "Opsi B salah karena SubmitEvent bukan tipe event resmi React SyntheticEvent.",
      "C": "Opsi C salah karena FormEvent tanpa namespace React merujuk ke DOM global.",
      "D": "Opsi D salah karena MouseEvent adalah untuk aksi mouse (klik), bukan submit form."
    },
    "jobId": "fullstack",
    "code": "const onFormSubmit = (___) => {\n  e.preventDefault();\n  // logic...\n};\nreturn <form onSubmit={onFormSubmit}>...</form>;"
  },
  {
    "id": "FI-058",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa nilai dari `userRef.current` tepat setelah baris pemanggilan `userRef.current = 'Admin';` dieksekusi?\n\n```typescript\nconst userRef = useRef<string | null>(null);\nuserRef.current = 'Admin';\nconsole.log(userRef.current);\n```",
    "options": {
      "A": "\"Admin\"",
      "B": "null",
      "C": "undefined",
      "D": "Error mutating ref"
    },
    "answer": "A",
    "explanation": {
      "correct": "Objek ref yang dibuat dengan `useRef` adalah objek mutabel biasa yang memiliki properti `.current`. Mengubah `.current` bersifat langsung (sinkron) dan tidak memicu siklus re-render komponen.",
      "A": "Opsi A benar karena mutasi ref.current terjadi seketika dan bernilai 'Admin'.",
      "B": "Opsi B salah karena nilai null telah digantikan.",
      "C": "Opsi C salah karena ref telah diisi nilai string.",
      "D": "Opsi D salah karena properti .current memang dirancang untuk dapat dimutasi secara bebas."
    },
    "jobId": "fullstack",
    "code": "const userRef = useRef<string | null>(null);\nuserRef.current = 'Admin';\nconsole.log(userRef.current);"
  },
  {
    "id": "FI-059",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Mengapa mengubah `ref.current` pada useRef TIDAK menyebabkan komponen melakukan re-render?",
    "options": {
      "A": "useRef dirancang sebagai wadah penyimpanan nilai mutabel persisten yang tidak terikat pada siklus rekonsiliasi dan rendering Virtual DOM React",
      "B": "useRef selalu disimpan di cookie browser",
      "C": "useRef adalah bug di React yang belum diperbaiki",
      "D": "useRef hanya dapat digunakan di luar komponen fungsi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Berbeda dengan state (`useState`), `useRef` menyimpan nilai yang bertahan di antara render tanpa memicu siklus pembaruan UI saat nilainya dimutasi. Ini sangat ideal untuk menyimpan timer ID, instance pihak ketiga, atau nilai cache internal.",
      "A": "Opsi A benar karena ref adalah plain JavaScript object yang mutasinya independen dari siklus re-render.",
      "B": "Opsi B salah karena ref ada di memori heap JavaScript browser, bukan cookie.",
      "C": "Opsi C salah karena ini adalah perilaku yang memang sengaja didesain oleh tim React.",
      "D": "Opsi D salah karena useRef adalah hook yang wajib dipanggil di dalam komponen fungsi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-060",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Manakah cara terbaik menangani state loading, error, dan data sukses dari pemanggilan API di React?",
    "options": {
      "A": "Menggunakan state terstruktur yang melacak status operasi (misal: `{ status: 'idle' | 'loading' | 'success' | 'error', data, error }`) atau memanfaatkan library data fetching seperti TanStack Query (React Query)",
      "B": "Mengabaikan error dan hanya mengasumsikan API selalu sukses",
      "C": "Menyimpan seluruh data API di variabel global window",
      "D": "Melakukan hard reload halaman setiap kali terjadi error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mengelola status permintaan API secara eksplisit (idle, loading, error, success) mencegah bug kondisi inkonsisten dan memberikan pengalaman pengguna yang baik (menampilkan skeleton/spinner saat loading dan pesan error informatif saat gagal).",
      "A": "Opsi A benar karena mengimplementasikan state machine / status eksplisit yang robust.",
      "B": "Opsi B salah karena mengabaikan error akan merusak aplikasi saat jaringan bermasalah.",
      "C": "Opsi C salah karena window variables rentan tabrakan dan bukan state reaktif.",
      "D": "Opsi D salah karena hard reload merusak pengalaman SPA."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-061",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Diberikan operasi destructuring props dengan nilai default di TypeScript. Jika komponen dipanggil dengan `<Badge />` tanpa prop 'variant', apa nilai dari 'variant' di dalam komponen?\n\n```typescript\ninterface BadgeProps {\n  variant?: 'primary' | 'secondary';\n}\nfunction Badge({ variant = 'primary' }: BadgeProps) {\n  return <span>{variant}</span>;\n}\n```",
    "options": {
      "A": "\"primary\"",
      "B": "undefined",
      "C": "\"\"",
      "D": "Error TS2322 missing required prop"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada deklarasi `{ variant = 'primary' }`, JavaScript default parameter menyediakan fallback value `'primary'` ketika pemanggil tidak mem-passing prop tersebut atau mengirimkan nilai `undefined`.",
      "A": "Opsi A benar karena default parameter menetapkan 'primary'.",
      "B": "Opsi B salah karena nilai default menggantikan undefined.",
      "C": "Opsi C salah karena bukan string kosong.",
      "D": "Opsi D salah karena prop bersifat optional (`variant?: string`)."
    },
    "jobId": "fullstack",
    "code": "interface BadgeProps {\n  variant?: 'primary' | 'secondary';\n}\nfunction Badge({ variant = 'primary' }: BadgeProps) {\n  return <span>{variant}</span>;\n}"
  },
  {
    "id": "FI-062",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe parameter fungsi callback `useEffect` berikut yang bertindak sebagai cleanup function:\n\n```typescript\nuseEffect(() => {\n  const handler = () => console.log('scroll');\n  window.addEventListener('scroll', handler);\n  // Cleanup function signature\n  return ___;\n}, []);\n```",
    "options": {
      "A": "() => void",
      "B": "void",
      "C": "Promise<void>",
      "D": "boolean"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi cleanup pada `useEffect` harus berupa fungsi sinkron tanpa parameter dan tanpa return value (`() => void`). React melarang fungsi async (`() => Promise<void>`) langsung sebagai callback useEffect.",
      "A": "Opsi A benar karena cleanup function harus bertipe `() => void`.",
      "B": "Opsi B salah karena harus berupa fungsi callable, bukan nilai void langsung.",
      "C": "Opsi C salah karena async cleanup function dilarang di React.",
      "D": "Opsi D salah karena bukan boolean."
    },
    "jobId": "fullstack",
    "code": "useEffect(() => {\n  const handler = () => console.log('scroll');\n  window.addEventListener('scroll', handler);\n  // Cleanup function signature\n  return ___;\n}, []);"
  },
  {
    "id": "FI-063",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Kode berikut mencoba mendeklarasikan async function secara langsung pada callback useEffect: `useEffect(async () => { ... }, [])`. Mengapa TypeScript dan React melempar error?",
    "options": {
      "A": "Callback useEffect tidak boleh mengembalikan Promise, sedangkan fungsi async secara otomatis selalu mengembalikan Promise",
      "B": "React tidak mendukung asynchronous JavaScript",
      "C": "useEffect hanya bekerja untuk fungsi synchronous matematika",
      "D": "Async hanya diizinkan di komponen class"
    },
    "answer": "A",
    "explanation": {
      "correct": "React mengharapkan callback useEffect mengembalikan fungsi pembersih (`() => void`) atau `undefined`. Karena fungsi async selalu mengembalikan `Promise`, hal ini merusak mekanisme cleanup React. Solusinya: definisikan fungsi async di dalam effect lalu panggil secara langsung.",
      "A": "Opsi A benar karena async function me-return Promise yang tidak kompatibel dengan signature cleanup useEffect.",
      "B": "Opsi B salah karena operasi asinkron didukung penuh dengan mendefinisikan fungsi async di dalam callback.",
      "C": "Opsi C salah karena useEffect dirancang untuk efek samping I/O asinkron.",
      "D": "Opsi D salah karena functional components mendukung async patterns."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-064",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa tujuan dari hook `useId` yang diperkenalkan pada React 18?",
    "options": {
      "A": "Menghasilkan ID string unik yang stabil dan konsisten antara server-side rendering (SSR) dan client-side hydration untuk aksesibilitas form (atribut htmlfor dan id)",
      "B": "Membuat Primary Key database otomatis",
      "C": "Membuat ID transaksi pembayaran",
      "D": "Menghasilkan UUID acak baru pada setiap render"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useId` menghasilkan ID unik yang terhindar dari ketidakcocokan (hydration mismatch) pada aplikasi SSR saat menghubungkan label form dengan elemen input aksesibel (`aria-describedby` atau `htmlFor`).",
      "A": "Opsi A benar sesuai tujuan resmi hook useId di React 18.",
      "B": "Opsi B salah karena bukan untuk database.",
      "C": "Opsi C salah karena bukan untuk transaksi bisnis.",
      "D": "Opsi D salah karena ID yang dihasilkan harus stabil di setiap render, bukan acak baru."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-065",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa tipe data kembalian dari hook `useSearchParams` pada library React Router v6?\n\n```typescript\nimport { useSearchParams } from 'react-router-dom';\n\nconst [searchParams, setSearchParams] = useSearchParams();\nconst query = searchParams.get('q');\n```",
    "options": {
      "A": "[URLSearchParams, (nextInit: URLSearchParamsInit) => void]",
      "B": "URLSearchParams saja",
      "C": "string",
      "D": "Record<string, string>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mirip dengan useState, `useSearchParams()` mengembalikan array tuple dengan 2 elemen: elemen pertama adalah objek `URLSearchParams` untuk membaca query params, dan elemen kedua adalah fungsi setter untuk memperbarui query string URL.",
      "A": "Opsi A benar karena mengembalikan tuple [searchParams, setSearchParams].",
      "B": "Opsi B salah karena juga menyertakan fungsi updater.",
      "C": "Opsi C salah karena bukan string mentah.",
      "D": "Opsi D salah karena merupakan instance objek URLSearchParams web API."
    },
    "jobId": "fullstack",
    "code": "import { useSearchParams } from 'react-router-dom';\n\nconst [searchParams, setSearchParams] = useSearchParams();\nconst query = searchParams.get('q');"
  },
  {
    "id": "FI-066",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Bagaimana cara terbaik mem-passing class CSS kondisional di React secara bersih dan mudah dibaca?",
    "options": {
      "A": "Menggunakan library pembantu seperti `clsx` atau `classnames` (contoh: `clsx('btn', isActive && 'btn-active')`)",
      "B": "Menggunakan konkatenasi string manual yang panjang dengan banyak operator ternary bertingkat di JSX",
      "C": "Memanipulasi `element.classList.add` langsung menggunakan DOM API",
      "D": "Membuat komponen terpisah untuk setiap variasi warna CSS"
    },
    "answer": "A",
    "explanation": {
      "correct": "Library utility seperti `clsx` atau `classnames` menyederhanakan penggabungan nama class secara dinamis, mengabaikan nilai falsy secara otomatis, dan mencegah string class yang berantakan dengan spasi ganda.",
      "A": "Opsi A benar karena clsx/classnames adalah standar industri untuk class styling kondisional di React.",
      "B": "Opsi B salah karena konkatenasi manual rawan bug spasi dan sulit dibaca.",
      "C": "Opsi C salah karena manipulasi DOM langsung melanggar paradigma deklaratif React.",
      "D": "Opsi D salah karena menyebabkan duplikasi komponen yang tidak perlu."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-067",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi dari fitur `React.lazy()` dan `<Suspense />` di aplikasi web React?",
    "options": {
      "A": "Melakukan Code Splitting untuk memecah bundle JavaScript menjadi potongan-potongan kecil yang dimuat secara on-demand saat komponen dibutuhkan",
      "B": "Menunda rendering komponen selama 1 jam",
      "C": "Membuat aplikasi berjalan offline tanpa internet",
      "D": "Menonaktifkan error runtime aplikasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "`React.lazy()` memungkinkan dynamic import komponen, dan `<Suspense fallback={<Spinner />}>` menampilkan antarmuka cadangan (loading indicator) selama file bundle komponen tersebut sedang diunduh di latar belakang.",
      "A": "Opsi A benar karena Code Splitting mengoptimalkan waktu muat awal (Initial Load Time) aplikasi web.",
      "B": "Opsi B salah karena bukan penundaan waktu statik buatan.",
      "C": "Opsi C salah karena offline capability adalah peran Service Workers / PWA.",
      "D": "Opsi D salah karena error boundary yang menangani error runtime."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-068",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi kode berikut agar tombol di-disable dan menampilkan teks 'Menyimpan...' selama proses submit asinkron berlangsung:\n\n```typescript\nfunction SubmitButton({ isLoading }: { isLoading: boolean }) {\n  return (\n    <button type=\"submit\" ___>\n      {isLoading ? 'Menyimpan...' : 'Simpan'}\n    </button>\n  );\n}\n```",
    "options": {
      "A": "disabled={isLoading}",
      "B": "hidden={isLoading}",
      "C": "readonly={isLoading}",
      "D": "locked={isLoading}"
    },
    "answer": "A",
    "explanation": {
      "correct": "Atribut HTML standar pada elemen button untuk menonaktifkan interaksi klik adalah `disabled`. Mengikatnya ke state boolean `disabled={isLoading}` mencegah pengguna melakukan submit ganda (double submit).",
      "A": "Opsi A benar karena atribut disabled menonaktifkan tombol secara fungsional dan visual.",
      "B": "Opsi B salah karena hidden akan menyembunyikan tombol sepenuhnya dari layar.",
      "C": "Opsi C salah karena readonly bukan atribut standar elemen button HTML.",
      "D": "Opsi D salah karena locked bukan atribut HTML."
    },
    "jobId": "fullstack",
    "code": "function SubmitButton({ isLoading }: { isLoading: boolean }) {\n  return (\n    <button type=\"submit\" ___>\n      {isLoading ? 'Menyimpan...' : 'Simpan'}\n    </button>\n  );\n}"
  },
  {
    "id": "FI-069",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa output dari pemanggilan custom hook counter berikut saat method `reset` dipanggil?\n\n```typescript\nfunction useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const reset = () => setCount(initial);\n  return { count, reset };\n}\n```",
    "options": {
      "A": "0",
      "B": "10",
      "C": "undefined",
      "D": "Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `reset` pada custom hook memanggil `setCount(initialValue)`. Karena initialValue default adalah 0, nilai count di-reset kembali menjadi 0.",
      "A": "Opsi A benar karena count dikembalikan ke nilai awal 0.",
      "B": "Opsi B salah karena 10 adalah nilai saat increment.",
      "C": "Opsi C salah karena nilai angka terdefinisi.",
      "D": "Opsi D salah karena fungsi berjalan normal."
    },
    "jobId": "fullstack",
    "code": "function useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const reset = () => setCount(initial);\n  return { count, reset };\n}"
  },
  {
    "id": "FI-070",
    "level": "intermediate",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Kode berikut mencoba membaca data user dari context: `const { user } = useContext(AuthContext);`. Namun memunculkan error: 'Cannot destructure property user of useContext(...) as it is null'. Apa solusi paling tepat?",
    "options": {
      "A": "Pastikan komponen berada di dalam hierarki `<AuthProvider>` dan gunakan custom hook yang memvalidasi ketersediaan context sebelum destructuring",
      "B": "Ubah tipe context menjadi any",
      "C": "Hapus AuthContext dari aplikasi",
      "D": "Ganti nama properti user menjadi username"
    },
    "answer": "A",
    "explanation": {
      "correct": "Error terjadi karena `useContext(AuthContext)` mengembalikan nilai default `null` saat komponen dipanggil di luar cakupan Provider. Komponen wajib dibungkus oleh `<AuthProvider>` dan penggunaan custom hook pembungkus sangat dianjurkan.",
      "A": "Opsi A benar karena memastikan keberadaan Provider di pohon hierarki dan mencegah pembacaan null context.",
      "B": "Opsi B salah karena tidak menyelesaikan masalah null runtime saat provider hilang.",
      "C": "Opsi C salah karena context dibutuhkan aplikasi.",
      "D": "Opsi D salah karena bukan masalah nama properti melainkan objek context bernilai null."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-071",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa perilaku default dari transaksi `@Transactional` di Spring Boot terkait rollback ketika terjadi Exception?",
    "options": {
      "A": "Transaksi otomatis rollback HANYA untuk Unchecked Exception (subclass dari RuntimeException dan Error), sedangkan Checked Exception secara default TIDAK memicu rollback",
      "B": "Transaksi rollback untuk semua jenis Exception tanpa terkecuali",
      "C": "Transaksi tidak pernah rollback secara otomatis",
      "D": "Transaksi hanya rollback jika ada anotasi @Rollback eksplisit di setiap method"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default di Spring, `@Transactional` hanya melakukan rollback otomatis untuk unchecked exceptions (`RuntimeException` dan `Error`). Untuk memicu rollback pada Checked Exception, harus ditambahkan atribut `@Transactional(rollbackFor = Exception.class)`.",
      "A": "Opsi A benar karena menjelaskan perilaku default rollback Spring yang membedakan Unchecked vs Checked Exception.",
      "B": "Opsi B salah karena Checked Exception tidak otomatis memicu rollback pada konfigurasi default.",
      "C": "Opsi C salah karena RuntimeException memicu auto-rollback.",
      "D": "Opsi D salah karena @Rollback adalah anotasi untuk pengujian (test), bukan transaksi produksi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-072",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi `@Transactional` berikut agar transaksi tetap melakukan rollback saat melempar `Exception` umum (Checked Exception):\n\n```java\n@Transactional(___)\npublic void transferFunds(Account from, Account to, BigDecimal amount) throws PaymentException {\n  // Eksekusi mutasi saldo\n}\n```",
    "options": {
      "A": "@Transactional(rollbackFor = Exception.class)",
      "B": "@Transactional(withRollback = true)",
      "C": "@Transactional(catchAll = true)",
      "D": "@Transactional(forceRollback = true)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Atribut `rollbackFor = Exception.class` menginstruksikan Spring Transaction Manager untuk membatalkan (rollback) transaksi jika ada exception turunan dari `java.lang.Exception` yang dilemparkan keluar dari method.",
      "A": "Opsi A benar karena `rollbackFor` adalah atribut resmi Spring Transaction.",
      "B": "Opsi B salah karena withRollback bukan atribut Spring.",
      "C": "Opsi C salah karena catchAll bukan atribut Spring.",
      "D": "Opsi D salah karena forceRollback bukan atribut Spring."
    },
    "jobId": "fullstack",
    "code": "@Transactional(___)\npublic void transferFunds(Account from, Account to, BigDecimal amount) throws PaymentException {\n  // Eksekusi mutasi saldo\n}"
  },
  {
    "id": "FI-073",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa perbedaan antara Propagation Level `REQUIRED` dan `REQUIRES_NEW` pada anotasi `@Transactional` di Spring?",
    "options": {
      "A": "`REQUIRED` menggunakan transaksi yang sudah aktif jika ada atau membuat baru jika belum ada, sedangkan `REQUIRES_NEW` selalu menunda transaksi lama dan membuat transaksi fisik baru yang independen",
      "B": "`REQUIRED` selalu membuat transaksi baru, sedangkan `REQUIRES_NEW` tidak pernah membuat transaksi baru",
      "C": "`REQUIRES_NEW` hanya bisa digunakan untuk operasi SELECT database",
      "D": "Keduanya persis sama tanpa perbedaan fungsi"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Propagation.REQUIRED` adalah default (bergabung dengan transaksi yang sudah ada jika tersedia). `Propagation.REQUIRES_NEW` selalu menghentikan sementara (suspend) transaksi yang sedang berjalan dan memulai transaksi independen baru.",
      "A": "Opsi A benar karena mendefinisikan perbedaan fundamental keterikatan transaksi REQUIRED vs REQUIRES_NEW.",
      "B": "Opsi B salah karena terbalik.",
      "C": "Opsi C salah karena operasi SELECT murni menggunakan readOnly = true.",
      "D": "Opsi D salah karena isolasi transaksinya sangat berbeda."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-074",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari eksekusi method berikut yang menggunakan Stream API Java 8?\n\n```java\nList<Integer> nums = Arrays.asList(1, 2, 3, 4);\nint result = nums.stream()\n                 .filter(n -> n % 2 == 0)\n                 .map(n -> n * 2)\n                 .mapToInt(n -> n)\n                 .sum();\nSystem.out.println(result);\n```",
    "options": {
      "A": "12",
      "B": "6",
      "C": "10",
      "D": "20"
    },
    "answer": "A",
    "explanation": {
      "correct": "Stream memfilter angka genap: dari [1, 2, 3, 4] tersaring [2, 4]. Kemudian operasi `map(n -> n * 2)` mengalikan angka dengan 2 menjadi [4, 8]. Operasi `sum()` menjumlahkan 4 + 8 = 12.",
      "A": "Opsi A benar karena 4 + 8 = 12.",
      "B": "Opsi B salah karena 6 adalah hasil penjumlahan 2 + 4 tanpa pengali.",
      "C": "Opsi C salah karena 10 adalah jumlah total 1+2+3+4.",
      "D": "Opsi D salah karena bukan hasil operasi stream tersebut."
    },
    "jobId": "fullstack",
    "code": "List<Integer> nums = Arrays.asList(1, 2, 3, 4);\nint result = nums.stream()\n                 .filter(n -> n % 2 == 0)\n                 .map(n -> n * 2)\n                 .mapToInt(n -> n)\n                 .sum();\nSystem.out.println(result);"
  },
  {
    "id": "FI-075",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Kode berikut seharusnya memfilter user yang aktif dan mengembalikannya ke klien, tetapi selalu mengembalikan list utuh tanpa filter. Mengapa?\n\n```java\n@GetMapping(\"/users/active\")\npublic List<User> getActiveUsers() {\n  List<User> users = userRepository.findAll();\n  users.stream()\n       .filter(u -> u.isActive())\n       .collect(Collectors.toList()); // Hasil tidak ditampung\n  return users;\n}\n```",
    "options": {
      "A": "Hasil operasi Stream tidak di-assign kembali ke variabel users (Stream bersifat immutable dan mengembalikan stream baru)",
      "B": "Method filter() tidak didukung oleh Stream API",
      "C": "Method findAll() tidak boleh dipanggil sebelum stream",
      "D": "Collectors.toList() harus diganti toArray()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operasi Stream di Java tidak memutasi koleksi asal (immutable). Baris `users.stream().filter(...).collect(...)` menghasilkan list baru yang tidak ditampung kembali ke variabel manapun, sehingga `return users;` tetap mengembalikan list lama yang belum tersaring. Solusi: `return users.stream().filter(...).toList();`.",
      "A": "Opsi A benar karena hasil stream diabaikan dan tidak di-return.",
      "B": "Opsi B salah karena filter() adalah operasi intermediate standar Stream API.",
      "C": "Opsi C salah karena memanggil stream() pada hasil findAll() adalah pola yang benar.",
      "D": "Opsi D salah karena Collectors.toList() valid untuk menghasilkan List."
    },
    "jobId": "fullstack",
    "code": "@GetMapping(\"/users/active\")\npublic List<User> getActiveUsers() {\n  List<User> users = userRepository.findAll();\n  users.stream()\n       .filter(u -> u.isActive())\n       .collect(Collectors.toList()); // Hasil tidak ditampung\n  return users;\n}"
  },
  {
    "id": "FI-076",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah di Spring Framework yang digunakan untuk mengikat sekelompok konfigurasi properti dari file YAML/properties ke dalam satu class POJO yang terstruktur dan type-safe?",
    "options": {
      "A": "@ConfigurationProperties",
      "B": "@ValueProperties",
      "C": "@PropertySourceGroup",
      "D": "@EnvironmentProperties"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@ConfigurationProperties(prefix = \"app.mail\")` memetakan properti konfigurasi hierarkis ke dalam field-field class Java secara otomatis dan aman (type-safe configuration).",
      "A": "Opsi A benar karena @ConfigurationProperties adalah anotasi standar Spring Boot untuk binding konfigurasi hierarkis.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena @PropertySource untuk memuat file eksternal, bukan POJO binding.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-077",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Manakah implementasi CORS configuration yang paling aman dan terpusat di aplikasi Spring Boot REST API?",
    "options": {
      "A": "Mengimplementasikan interface `WebMvcConfigurer` dan meng-override method `addCorsMappings` dengan daftar origin spesifik",
      "B": "Menambahkan `@CrossOrigin(\"*\")` di setiap baris method controller",
      "C": "Menonaktifkan firewall server",
      "D": "Menggunakan HTTP GET untuk semua operasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mengonfigurasi CORS terpusat melalui bean `WebMvcConfigurer` (`addCorsMappings(CorsRegistry registry)`) memungkinkan pengelolaan daftar domain asal (allowed origins) secara terpusat, konsisten, dan mudah disesuaikan antar profile (development vs production).",
      "A": "Opsi A benar karena memusatkan aturan keamanan CORS di satu konfigurasi.",
      "B": "Opsi B salah karena @CrossOrigin(\"*\") di mana-mana melanggar keamanan dengan mengizinkan sembarang origin.",
      "C": "Opsi C salah karena firewall berbeda dengan layer CORS browser.",
      "D": "Opsi D salah karena membatasi metode tidak menyelesaikan kebutuhan arsitektur API."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-078",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi ekspresi Spring Security `@PreAuthorize` berikut agar method hanya dapat diakses oleh pengguna yang memiliki role 'ADMIN':\n\n```java\n@RestController\n@RequestMapping(\"/api/admin\")\npublic class AdminController {\n  @___\n  @DeleteMapping(\"/users/{id}\")\n  public ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n    service.delete(id);\n    return ResponseEntity.noContent().build();\n  }\n}\n```",
    "options": {
      "A": "@PreAuthorize(\"hasRole('ADMIN')\")",
      "B": "@PreAuthorize(\"role == ADMIN\")",
      "C": "@PreAuthorize(\"isAdmin()\")",
      "D": "@PreAuthorize(\"checkRole('ADMIN')\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Security menggunakan SpEL (Spring Expression Language) pada `@PreAuthorize`. Fungsi bawaan standar untuk memeriksa role pengguna adalah `hasRole('ROLE_NAME')`.",
      "A": "Opsi A benar karena `hasRole('ADMIN')` adalah ekspresi SpEL resmi Spring Security.",
      "B": "Opsi B salah karena sintaks SpEL bukan pembanding operator.",
      "C": "Opsi C salah karena isAdmin bukan fungsi bawaan keamanan standar.",
      "D": "Opsi D salah karena checkRole bukan fungsi bawaan SpEL."
    },
    "jobId": "fullstack",
    "code": "@RestController\n@RequestMapping(\"/api/admin\")\npublic class AdminController {\n  @___\n  @DeleteMapping(\"/users/{id}\")\n  public ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n    service.delete(id);\n    return ResponseEntity.noContent().build();\n  }\n}"
  },
  {
    "id": "FI-079",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan class Java dengan blok static berikut. Apa urutan keluaran teks saat class dimuat dan diinstansiasi?\n\n```java\npublic class Example {\n  static {\n    System.out.println(\"Static Block\");\n  }\n  public Example() {\n    System.out.println(\"Constructor\");\n  }\n  public static void main(String[] args) {\n    Example ex = new Example();\n  }\n}\n```",
    "options": {
      "A": "\"Static Block\" lalu \"Constructor\"",
      "B": "\"Constructor\" lalu \"Static Block\"",
      "C": "\"Static Block\" saja",
      "D": "\"Constructor\" saja"
    },
    "answer": "A",
    "explanation": {
      "correct": "Blok `static { ... }` dieksekusi tepat satu kali saat class pertama kali dimuat (class loading) oleh JVM ClassLoader ke memori, sebelum instance objek dibuat. Constructor baru dieksekusi saat operator `new` dijalankan.",
      "A": "Opsi A benar karena static initializer selalu dijalankan sebelum konstruktor instance.",
      "B": "Opsi B salah karena konstruktor tidak pernah berjalan sebelum static block.",
      "C": "Opsi C salah karena konstruktor juga dieksekusi saat objek dibuat.",
      "D": "Opsi D salah karena static block tetap dieksekusi saat pemuatan kelas."
    },
    "jobId": "fullstack",
    "code": "public class Example {\n  static {\n    System.out.println(\"Static Block\");\n  }\n  public Example() {\n    System.out.println(\"Constructor\");\n  }\n  public static void main(String[] args) {\n    Example ex = new Example();\n  }\n}"
  },
  {
    "id": "FI-080",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Kode berikut memicu error: 'Circular depends between Bean A and Bean B' saat startup aplikasi. Apa cara terbaik untuk menyelesaikan Circular Dependency di Spring Boot modern?",
    "options": {
      "A": "Melakukan refactoring desain arsitektur dengan memecah dependensi bersama ke dalam kelas Service C baru, atau menggunakan event-driven approach",
      "B": "Menonaktifkan pemeriksaan dependency injection di Spring",
      "C": "Menghapus kedua bean dari aplikasi",
      "D": "Mengubah kedua class menjadi static utility class"
    },
    "answer": "A",
    "explanation": {
      "correct": "Circular Dependency (siklus ketergantungan A butuh B dan B butuh A) adalah gejala 'code smell' desain arsitektur yang buruk. Solusi terbaik adalah merefaktor logika bersama ke kelas ketiga (Service C) atau menggunakan domain events (`ApplicationEventPublisher`).",
      "A": "Opsi A benar karena refactoring memecahkan akar penyebab ketergantungan siklik secara arsitektural.",
      "B": "Opsi B salah karena sejak Spring Boot 2.6 circular dependency dilarang secara default karena berisiko kebocoran inisialisasi.",
      "C": "Opsi C salah karena bean tersebut dibutuhkan aplikasi.",
      "D": "Opsi D salah karena static class menghilangkan manfaat dependency injection."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-081",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara `BeanFactory` dan `ApplicationContext` di Spring Framework?",
    "options": {
      "A": "ApplicationContext adalah turunan dari BeanFactory yang menyediakan fitur tingkat lanjut seperti event propagation, declarative transaction, dan i18n, serta melakukan pre-instansiasi (eager loading) bean singleton saat startup",
      "B": "BeanFactory hanya bisa digunakan untuk aplikasi web, ApplicationContext untuk aplikasi desktop",
      "C": "ApplicationContext tidak mendukung dependency injection",
      "D": "BeanFactory adalah teknologi baru pengganti ApplicationContext"
    },
    "answer": "A",
    "explanation": {
      "correct": "BeanFactory adalah antarmuka IoC container paling dasar (lazy loading). ApplicationContext adalah antarmuka enterprise tingkat tinggi yang meng-extend BeanFactory, menambahkan fitur integrasi AOP, messaging, dan meng-instansiasi singleton beans secara eager saat startup.",
      "A": "Opsi A benar karena menjelaskan hirarki dan fitur enterprise ApplicationContext di atas BeanFactory.",
      "B": "Opsi B salah karena keduanya dapat digunakan di berbagai jenis aplikasi.",
      "C": "Opsi C salah karena ApplicationContext mendukung DI sepenuhnya.",
      "D": "Opsi D salah karena BeanFactory adalah antarmuka paling dasar (historis)."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-082",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi method service berikut agar Spring mengeksekusi method tersebut secara asinkron di thread pool terpisah:\n\n```java\n@Configuration\n@EnableAsync\npublic class AsyncConfig {\n  // Config executor\n}\n\n@Service\npublic class EmailService {\n  @___\n  public void sendEmail(String to, String msg) {\n    // Eksekusi di thread pool background\n  }\n}\n```",
    "options": {
      "A": "@Async",
      "B": "@Thread",
      "C": "@Background",
      "D": "@Concurrent"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Async` pada method memberi tahu Spring untuk mengeksekusi method tersebut di thread terpisah (memerlukan `@EnableAsync` pada kelas konfigurasi aplikasi).",
      "A": "Opsi A benar karena @Async adalah anotasi resmi Spring untuk eksekusi asinkron.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "fullstack",
    "code": "@Configuration\n@EnableAsync\npublic class AsyncConfig {\n  // Config executor\n}\n\n@Service\npublic class EmailService {\n  @___\n  public void sendEmail(String to, String msg) {\n    // Eksekusi di thread pool background\n  }\n}"
  },
  {
    "id": "FI-083",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Berapa hasil dari pemanggilan method `.count()` pada eksekusi Stream berikut?\n\n```java\nList<String> names = List.of(\"Budi\", \"Andi\", \"Bambang\", \"Cici\");\nlong count = names.stream()\n                  .filter(name -> name.startsWith(\"B\"))\n                  .count();\nSystem.out.println(count);\n```",
    "options": {
      "A": "2",
      "B": "4",
      "C": "3",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Koleksi awal memiliki 4 nama: [\"Budi\", \"Andi\", \"Bambang\", \"Cici\"]. Filter memeriksa nama yang diawali huruf \"B\" (`startsWith(\"B\")`). Yang lolos adalah \"Budi\" dan \"Bambang\" (2 elemen).",
      "A": "Opsi A benar karena ada 2 elemen yang diawali huruf 'B'.",
      "B": "Opsi B salah karena ada filter yang diterapkan.",
      "C": "Opsi C salah karena 'Andi' dan 'Cici' dieliminasi.",
      "D": "Opsi D salah karena ada elemen yang cocok."
    },
    "jobId": "fullstack",
    "code": "List<String> names = List.of(\"Budi\", \"Andi\", \"Bambang\", \"Cici\");\nlong count = names.stream()\n                  .filter(name -> name.startsWith(\"B\"))\n                  .count();\nSystem.out.println(count);"
  },
  {
    "id": "FI-084",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Isolation level transaksi apakah di database SQL yang paling ketat dan mencegah Dirty Read, Non-Repeatable Read, serta Phantom Read secara bersamaan?",
    "options": {
      "A": "SERIALIZABLE",
      "B": "REPEATABLE READ",
      "C": "READ COMMITTED",
      "D": "READ UNCOMMITTED"
    },
    "answer": "A",
    "explanation": {
      "correct": "`SERIALIZABLE` adalah tingkat isolasi transaksi tertinggi pada standar SQL/ACID yang mengemulasikan eksekusi transaksi secara serial (satu per satu), sepenuhnya mengeliminasi dirty read, non-repeatable read, dan phantom read.",
      "A": "Opsi A benar karena SERIALIZABLE adalah isolasi paling ketat.",
      "B": "Opsi B salah karena REPEATABLE READ masih berpotensi phantom read pada beberapa database.",
      "C": "Opsi C salah karena READ COMMITTED masih memungkinkan non-repeatable read.",
      "D": "Opsi D salah karena READ UNCOMMITTED adalah tingkat isolasi terendah yang rentan dirty read."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-085",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Aplikasi melempar `NoSuchElementException: No value present` saat memanggil method `userOpt.get()` pada baris berikut. Bagaimana cara memperbaikinya?\n\n```java\nOptional<User> userOpt = userRepository.findById(999L);\nUser user = userOpt.get(); // Error jika data tidak ada di DB\n```",
    "options": {
      "A": "Gunakan `userOpt.orElseThrow(() -> new UserNotFoundException(\"User not found\"))` atau periksa `if (userOpt.isPresent())`",
      "B": "Ubah Optional menjadi List",
      "C": "Hilangkan method findById",
      "D": "Ganti tipe ID menjadi String"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memanggil `.get()` pada objek `Optional` yang kosong (data tidak ditemukan) akan selalu melempar `NoSuchElementException`. Menangani dengan `orElseThrow()` memberikan exception spesifik yang dapat ditangkap oleh global handler.",
      "A": "Opsi A benar karena mencegah pemanggilan .get() membabi-buta pada Optional kosong.",
      "B": "Opsi B salah karena findById menghasilkan objek tunggal, bukan list.",
      "C": "Opsi C salah karena findById adalah method pencarian data utama.",
      "D": "Opsi D salah karena tipe ID tidak memengaruhi sifat keamanan Optional."
    },
    "jobId": "fullstack",
    "code": "Optional<User> userOpt = userRepository.findById(999L);\nUser user = userOpt.get(); // Error jika data tidak ada di DB"
  },
  {
    "id": "FI-086",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Kapan sebaiknya Anda menggunakan anotasi `@Profile(\"dev\")` atau `@Profile(\"prod\")` pada kelas konfigurasi Spring Boot?",
    "options": {
      "A": "Untuk mengaktifkan bean atau konfigurasi tertentu hanya pada environment lingkungan yang sesuai (misal in-memory H2 database saat dev, dan PostgreSQL connection pool saat prod)",
      "B": "Untuk mengubah nama user aplikasi",
      "C": "Untuk mengenkripsi kode program",
      "D": "Untuk mengubah versi compiler Java"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fitur Spring Profiles memungkinkan segregasi konfigurasi aplikasi berdasarkan lingkungan target (development, staging, production) sehingga perilaku sistem dapat beradaptasi secara fleksibel tanpa mengubah kode sumber.",
      "A": "Opsi A benar sesuai fungsi pemisahan konfigurasi lingkungan oleh Spring Profiles.",
      "B": "Opsi B salah karena bukan untuk identitas pengguna.",
      "C": "Opsi C salah karena bukan alat enkripsi.",
      "D": "Opsi D salah karena compiler Java ditentukan di tingkat build tool (pom.xml)."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-087",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi class Spring Boot berikut agar bertindak sebagai Global Exception Handler di seluruh REST Controller:\n\n```java\n@___\npublic class GlobalApiExceptionHandler {\n  @ExceptionHandler(ResourceNotFoundException.class)\n  public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n    return ResponseEntity.status(HttpStatus.NOT_FOUND)\n                         .body(new ErrorResponse(404, ex.getMessage()));\n  }\n}\n```",
    "options": {
      "A": "@RestControllerAdvice",
      "B": "@RestHandler",
      "C": "@ErrorHandler",
      "D": "@GlobalCatch"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@RestControllerAdvice` adalah anotasi gabungan dari `@ControllerAdvice` dan `@ResponseBody`, dirancang khusus untuk membuat interceptor penanganan error terpusat yang mengembalikan respon data (JSON) ke klien API.",
      "A": "Opsi A benar karena @RestControllerAdvice adalah anotasi resmi Spring untuk penanganan exception REST terpusat.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "jobId": "fullstack",
    "code": "@___\npublic class GlobalApiExceptionHandler {\n  @ExceptionHandler(ResourceNotFoundException.class)\n  public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n    return ResponseEntity.status(HttpStatus.NOT_FOUND)\n                         .body(new ErrorResponse(404, ex.getMessage()));\n  }\n}"
  },
  {
    "id": "FI-088",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari pemanggilan method `.distinct()` pada Stream Integer berikut?\n\n```java\nList<Integer> list = List.of(1, 2, 2, 3, 3);\nList<Integer> unique = list.stream().distinct().toList();\nSystem.out.println(unique);\n```",
    "options": {
      "A": "[1, 2, 3]",
      "B": "[1, 2, 2, 3, 3]",
      "C": "[1, 2]",
      "D": "[3, 2, 1]"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operasi intermediate `.distinct()` menggunakan method `equals()` untuk membuang semua elemen duplikat di dalam stream, menyisakan nilai unik [1, 2, 3].",
      "A": "Opsi A benar karena elemen duplikat (2 dan 3) dihilangkan.",
      "B": "Opsi B salah karena duplikat belum disaring.",
      "C": "Opsi C salah karena angka 3 tidak dibuang.",
      "D": "Opsi D salah karena distinct tidak membalik urutan elemen."
    },
    "jobId": "fullstack",
    "code": "List<Integer> list = List.of(1, 2, 2, 3, 3);\nList<Integer> unique = list.stream().distinct().toList();\nSystem.out.println(unique);"
  },
  {
    "id": "FI-089",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa tujuan utama dari fitur Conditional Beans di Spring Boot (seperti `@ConditionalOnProperty`, `@ConditionalOnMissingBean`)?",
    "options": {
      "A": "Mendaftarkan bean ke ApplicationContext hanya jika kondisi prasyarat tertentu terpenuhi (misal konfigurasi aktif atau belum ada bean serupa yang didaftarkan pengguna)",
      "B": "Menghapus database jika memori habis",
      "C": "Membuat aplikasi otomatis berhenti jika ada error",
      "D": "Mengurangi kecepatan eksekusi method"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi `@Conditional...` adalah fondasi arsitektur Auto-configuration Spring Boot. Framework menggunakannya untuk menyediakan default bean yang dapat di-override dengan mudah oleh pengguna.",
      "A": "Opsi A benar karena conditional bean mengatur pendaftaran bean berbasis kondisi lingkungan.",
      "B": "Opsi B salah karena tidak berkaitan dengan penghapusan database.",
      "C": "Opsi C salah karena bukan mekanisme failure shutdown.",
      "D": "Opsi D salah karena tidak memperlambat method runtime."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-090",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Sebuah custom query di method repository memunculkan error `TransactionRequiredException: Executing an update/delete query`. Anotasi apa yang wajib ditambahkan pada method update repository tersebut?\n\n```java\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n  @___\n  @Transactional\n  @Query(\"UPDATE User u SET u.status = 'INACTIVE' WHERE u.lastLogin < :date\")\n  int deactivateInactiveUsers(@Param(\"date\") LocalDateTime date);\n}\n```",
    "options": {
      "A": "@Modifying dan @Transactional",
      "B": "@ReadOnly",
      "C": "@EntityGraph",
      "D": "@Cacheable"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method Spring Data JPA yang mengeksekusi query INSERT/UPDATE/DELETE (bukan SELECT) melalui `@Query` wajib dianotasi dengan `@Modifying` agar JPA tahu ini adalah mutasi data, dan membutuhkan konteks transaksi aktif (`@Transactional`).",
      "A": "Opsi A benar karena @Modifying dan @Transactional adalah syarat mutlak custom DML query di Spring Data JPA.",
      "B": "Opsi B salah karena read-only melarang pembaruan data.",
      "C": "Opsi C salah karena @EntityGraph untuk optimasi fetch plan EAGER/LAZY.",
      "D": "Opsi D salah karena @Cacheable untuk caching hasil SELECT."
    },
    "jobId": "fullstack",
    "code": "@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n  @___\n  @Transactional\n  @Query(\"UPDATE User u SET u.status = 'INACTIVE' WHERE u.lastLogin < :date\")\n  int deactivateInactiveUsers(@Param(\"date\") LocalDateTime date);\n}"
  },
  {
    "id": "FI-091",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Di Spring Boot, di manakah lokasi default file konfigurasi statis yang dibaca secara otomatis saat aplikasi dimulai?",
    "options": {
      "A": "src/main/resources/application.properties atau application.yml",
      "B": "src/main/java/config.xml",
      "C": "root/pom.xml",
      "D": "src/test/resources/test.properties"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Boot secara otomatis memuat file `application.properties` atau `application.yml` dari direktori `src/main/resources` (classpath root) sebagai sumber konfigurasi bawaan aplikasi.",
      "A": "Opsi A benar karena merupakan lokasi default file konfigurasi Spring Boot.",
      "B": "Opsi B salah karena config.xml bukan lokasi bawaan otomatis.",
      "C": "Opsi C salah karena pom.xml untuk dependensi Maven.",
      "D": "Opsi D salah karena file di src/test hanya aktif saat pengujian berjalan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-092",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan operasi penggabungan String di dalam perulangan loop besar. Manakah yang memiliki performa alokasi memori paling efisien di Java?",
    "options": {
      "A": "StringBuilder",
      "B": "Operator '+' langsung di dalam loop",
      "C": "String.concat() di dalam loop",
      "D": "Ketiganya persis sama"
    },
    "answer": "A",
    "explanation": {
      "correct": "String bersifat immutable. Menggunakan operator '+' di dalam perulangan membuat banyak objek sementara baru di String pool/heap pada setiap iterasi. `StringBuilder` bersifat mutable dan menggunakan internal buffer yang dapat diperluas tanpa menciptakan objek baru berulang kali.",
      "A": "Opsi A benar karena StringBuilder mutable dan efisien untuk perulangan konkatenasi banyak string.",
      "B": "Opsi B salah karena operator '+' di dalam loop menciptakan banyak objek String sampah di memori.",
      "C": "Opsi C salah karena String.concat() selalu membuat objek String baru di setiap panggilan.",
      "D": "Opsi D salah karena perbedaan alokasi memori sangat signifikan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-093",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi Spring Security berikut agar semua request ke URL path `/api/public/**` dapat diakses tanpa perlu login (public access):\n\n```java\n@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n  http\n    .authorizeHttpRequests(auth -> auth\n      ___\n      .anyRequest().authenticated()\n    );\n  return http.build();\n}\n```",
    "options": {
      "A": ".requestMatchers(\"/api/public/**\").permitAll()",
      "B": ".requestMatchers(\"/api/public/**\").openAccess()",
      "C": ".requestMatchers(\"/api/public/**\").publicAll()",
      "D": ".requestMatchers(\"/api/public/**\").disableAuth()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Spring Security 6, aturan otorisasi HTTP didefinisikan dengan `.requestMatchers(\"/path/**\").permitAll()` untuk mengizinkan akses terbuka tanpa autentikasi.",
      "A": "Opsi A benar karena `permitAll()` adalah method resmi Spring Security untuk otorisasi publik tanpa login.",
      "B": "Opsi B salah karena openAccess bukan method Spring Security.",
      "C": "Opsi C salah karena publicAll bukan method resmi.",
      "D": "Opsi D salah karena disableAuth bukan method resmi."
    },
    "jobId": "fullstack",
    "code": "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n  http\n    .authorizeHttpRequests(auth -> auth\n      ___\n      .anyRequest().authenticated()\n    );\n  return http.build();\n}"
  },
  {
    "id": "FI-094",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi `@EventListener` di Spring Framework?",
    "options": {
      "A": "Menandai sebuah method sebagai listener yang akan dieksekusi secara otomatis saat suatu ApplicationEvent tertentu dipublikasikan oleh sistem",
      "B": "Menangkap event klik tombol di browser",
      "C": "Menangani event error jaringan internet",
      "D": "Membuat listener socket TCP secara low-level"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring ApplicationEvent mechanism memungkinkan komunikasi antar komponen secara decoupled. Method yang dianotasi `@EventListener` akan menerima notifikasi payload event saat dipublish via `ApplicationEventPublisher.publishEvent()`.",
      "A": "Opsi A benar sesuai arsitektur Event-driven internal Spring Framework.",
      "B": "Opsi B salah karena event browser ditangani di frontend (React).",
      "C": "Opsi C salah karena bukan untuk socket/jaringan fisik.",
      "D": "Opsi D salah karena ini adalah in-memory decoupled messaging abstraction."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-095",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Method terjadwal `@Scheduled(fixedRate = 5000)` tidak pernah berjalan saat aplikasi dijalankan. Anotasi apa yang lupa ditambahkan pada kelas konfigurasi utama aplikasi?",
    "options": {
      "A": "@EnableScheduling",
      "B": "@EnableAsync",
      "C": "@EnableTransactionManagement",
      "D": "@EnableBatch"
    },
    "answer": "A",
    "explanation": {
      "correct": "Agar Spring Boot memindai dan mengaktifkan task scheduler pada method yang dianotasi `@Scheduled`, kelas konfigurasi utama atau salah satu kelas `@Configuration` wajib menyertakan anotasi `@EnableScheduling`.",
      "A": "Opsi A benar karena @EnableScheduling wajib ada untuk mengaktifkan background task executor Spring.",
      "B": "Opsi B salah karena @EnableAsync untuk eksekusi method asinkron.",
      "C": "Opsi C salah karena @EnableTransactionManagement untuk transaksi database.",
      "D": "Opsi D salah karena @EnableBatch untuk Spring Batch processing."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-096",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Mengapa Password pengguna TIDAK BOLEH disimpan dalam bentuk teks biasa (plain-text) atau enkripsi dua arah (two-way encryption), melainkan harus di-hash menggunakan algoritma adaptif seperti BCrypt (via `PasswordEncoder`)?",
    "options": {
      "A": "Karena password hashing dengan salt bersifat satu arah (one-way irreversible) dan memiliki work factor tinggi, sehingga jika database bocor, penyerang tidak dapat langsung mendekripsi kata sandi pengguna",
      "B": "Karena database MySQL menolak penyimpanan teks plain",
      "C": "Agar ukuran teks password menjadi lebih pendek",
      "D": "Karena Spring Security tidak mendukung tipe data String"
    },
    "answer": "A",
    "explanation": {
      "correct": "BCrypt menggabungkan cryptographic salt otomatis dan mekanisme key stretching (work factor cost) yang membuat serangan brute-force dan rainbow table menjadi sangat lambat secara komputasi, menjamin kerahasiaan password bahkan saat data dump bocor.",
      "A": "Opsi A benar karena prinsip keamanan dasar penyimpanan kredensial wajib menggunakan one-way salted hashing.",
      "B": "Opsi B salah karena database mengizinkan penyimpanan teks apa saja.",
      "C": "Opsi C salah karena hash BCrypt panjangnya 60 karakter tetap.",
      "D": "Opsi D salah karena password tetap diproses sebagai objek String/CharSequence di Java."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-097",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan operasi autounboxing pada objek Wrapper berikut. Apa output dari perbandingan nilai angka berikut di Java?\n\n```java\nInteger a = 100;\nInteger b = 100;\nSystem.out.println((a == b) + \" / \" + a.equals(b));\n```",
    "options": {
      "A": "true / true",
      "B": "true / false",
      "C": "false / false",
      "D": "false / true"
    },
    "answer": "A",
    "explanation": {
      "correct": "Java memiliki Integer Cache untuk angka antara -128 sampai 127. Karena nilai 100 berada dalam range cache, `Integer.valueOf(100)` mengembalikan referensi objek yang sama di pool (a == b bernilai true). Pemanggilan `.equals()` juga bernilai true.",
      "A": "Opsi A benar karena Integer Cache Java meng-cache nilai -128 s.d 127 sehingga referensi memori identik.",
      "B": "Opsi B salah karena .equals() selalu true untuk nilai sama.",
      "C": "Opsi C salah karena keduanya true akibat caching.",
      "D": "Opsi D salah karena a == b juga bernilai true di dalam rentang cache."
    },
    "jobId": "fullstack",
    "code": "Integer a = 100;\nInteger b = 100;\nSystem.out.println((a == b) + \" / \" + a.equals(b));"
  },
  {
    "id": "FI-098",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi `@Lazy` jika disematkan pada deklarasi Spring Bean atau titik injeksi `@Autowired`?",
    "options": {
      "A": "Menunda inisialisasi dan instansiasi bean tersebut hingga bean benar-benar dipanggil pertama kali saat runtime, alih-alih dibuat saat startup aplikasi",
      "B": "Menjalankan method bean dengan kecepatan rendah",
      "C": "Membuat bean tersebut tidak pernah dibuat sama sekali",
      "D": "Menghapus bean dari memori setelah 5 menit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default singleton bean di-instansiasi saat startup aplikasi (eager initialization). Menyematkan `@Lazy` menunda pembuatan objek hingga pemanggilan pertamanya, mempercepat waktu startup awal aplikasi.",
      "A": "Opsi A benar sesuai definisi Lazy Initialization di Spring.",
      "B": "Opsi B salah karena tidak mengubah kecepatan pemrosesan CPU.",
      "C": "Opsi C salah karena bean tetap dibuat saat dibutuhkan.",
      "D": "Opsi D salah karena bukan mekanisme time-to-live cache."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-099",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada field entity berikut agar JPA secara otomatis mencatat waktu pembuatan baris data (Auditing):\n\n```java\n@EntityListeners(AuditingEntityListener.class)\n@MappedSuperclass\npublic abstract class BaseAuditableEntity {\n  @___\n  @Column(updatable = false)\n  private LocalDateTime createdAt;\n}\n```",
    "options": {
      "A": "@CreatedDate",
      "B": "@CreateTime",
      "C": "@GeneratedDate",
      "D": "@RecordedAt"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dengan mengaktifkan `@EnableJpaAuditing`, field dengan anotasi `@CreatedDate` (dan `@LastModifiedDate`) akan diisi otomatis oleh framework dengan timestamp saat ini saat entitas pertama kali di-persist.",
      "A": "Opsi A benar karena @CreatedDate adalah anotasi standar Spring Data Auditing.",
      "B": "Opsi B salah karena bukan anotasi Spring Data.",
      "C": "Opsi C salah karena bukan anotasi resmi.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "fullstack",
    "code": "@EntityListeners(AuditingEntityListener.class)\n@MappedSuperclass\npublic abstract class BaseAuditableEntity {\n  @___\n  @Column(updatable = false)\n  private LocalDateTime createdAt;\n}"
  },
  {
    "id": "FI-100",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara implementasi interface `Comparable` dan `Comparator` di Java?",
    "options": {
      "A": "`Comparable` mendefinisikan pengurutan alami (natural ordering) di dalam kelas objek itu sendiri via method `compareTo()`, sedangkan `Comparator` mendefinisikan strategi pengurutan kustom eksternal via method `compare()` tanpa memodifikasi kelas asal",
      "B": "Comparable hanya untuk string, Comparator hanya untuk angka",
      "C": "Comparable tidak mendukung sorting descending",
      "D": "Keduanya persis sama"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Comparable` diimplementasikan oleh kelas objek untuk menentukan natural sorting-nya (misal kelas Person implement `Comparable<Person>`). `Comparator` adalah objek terpisah yang dapat dibuat berkali-kali untuk berbagai kriteria pengurutan berbeda (misal urutkan berdasarkan nama, atau urutkan berdasarkan umur).",
      "A": "Opsi A benar karena membedakan natural sorting internal vs external sorting strategies.",
      "B": "Opsi B salah karena keduanya mendukung objek tipe data apa saja.",
      "C": "Opsi C salah karena pengurutan descending mudah dibuat pada keduanya.",
      "D": "Opsi D salah karena kontrak dan fleksibilitasnya berbeda."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-101",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan operasi filter dan collect ke Set berikut. Berapa jumlah elemen di dalam 'result'?\n\n```java\nList<String> words = List.of(\"apple\", \"banana\", \"apple\", \"avocado\");\nSet<String> result = words.stream()\n                          .filter(w -> w.length() == 5)\n                          .collect(Collectors.toSet());\nSystem.out.println(result.size());\n```",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "List asal berisi: [\"apple\", \"banana\", \"apple\", \"avocado\"]. Filter menyaring kata yang panjangnya 5 huruf: \"apple\" (panjang 5), \"apple\" (panjang 5). Saat dikumpulkan ke Set via `toSet()`, duplikasi \"apple\" dieliminasi, sehingga Set hanya berisi 1 elemen unik: {\"apple\"}.",
      "A": "Opsi A benar karena Set mengeliminasi duplikasi kata 'apple' yang berpanjang 5 huruf.",
      "B": "Opsi B salah karena Set tidak menyimpan kata 'apple' dua kali.",
      "C": "Opsi C salah karena 'banana' (6 huruf) dan 'avocado' (7 huruf) tidak lolos filter.",
      "D": "Opsi D salah karena kata 'apple' lolos filter."
    },
    "jobId": "fullstack",
    "code": "List<String> words = List.of(\"apple\", \"banana\", \"apple\", \"avocado\");\nSet<String> result = words.stream()\n                          .filter(w -> w.length() == 5)\n                          .collect(Collectors.toSet());\nSystem.out.println(result.size());"
  },
  {
    "id": "FI-102",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Kode berikut mencoba membaca header HTTP kustom `X-Api-Key` tetapi selalu menghasilkan null. Mengapa?\n\n```java\n@GetMapping(\"/secure-data\")\npublic ResponseEntity<String> getData(String apiKey) {\n  // apiKey bernilai null karena kurang @RequestHeader\n  return ResponseEntity.ok(\"Authorized\");\n}\n```",
    "options": {
      "A": "Nama header harus diekstrak menggunakan anotasi `@RequestHeader(\"X-Api-Key\")`",
      "B": "Header HTTP tidak boleh diawali huruf X",
      "C": "Tipe parameter harus berupa StringBuilder",
      "D": "Method harus menggunakan HTTP POST"
    },
    "answer": "A",
    "explanation": {
      "correct": "Nilai header HTTP pada controller Spring MVC diekstrak secara spesifik menggunakan anotasi `@RequestHeader(\"Header-Name\")`. Tanpa anotasi tersebut, Spring menganggap parameter sebagai model attribute atau request param biasa.",
      "A": "Opsi A benar karena @RequestHeader adalah anotasi yang tepat untuk membaca HTTP headers.",
      "B": "Opsi B salah karena prefiks 'X-' sangat umum untuk custom headers.",
      "C": "Opsi C salah karena String adalah tipe data standar untuk nilai header.",
      "D": "Opsi D salah karena header dapat dibaca pada semua metode HTTP."
    },
    "jobId": "fullstack",
    "code": "@GetMapping(\"/secure-data\")\npublic ResponseEntity<String> getData(String apiKey) {\n  // apiKey bernilai null karena kurang @RequestHeader\n  return ResponseEntity.ok(\"Authorized\");\n}"
  },
  {
    "id": "FI-103",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada class konfigurasi berikut agar Spring Boot hanya mengaktifkan bean MailService jika properti `app.mail.enabled` bernilai true:\n\n```java\n@Configuration\n@___\npublic class ThirdPartyEmailConfig {\n  @Bean\n  public EmailSender emailSender() {\n    return new SmtpEmailSender();\n  }\n}\n```",
    "options": {
      "A": "@ConditionalOnProperty(name = \"app.mail.enabled\", havingValue = \"true\")",
      "B": "@ConditionalOnConfig(\"app.mail.enabled\")",
      "C": "@IfProperty(key = \"app.mail.enabled\")",
      "D": "@MatchProperty(\"app.mail.enabled\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@ConditionalOnProperty` memeriksa apakah properti konfigurasi tertentu ada dan bernilai sesuai di environment, memungkinkan aktivasi fitur secara modular tanpa kompilasi ulang.",
      "A": "Opsi A benar karena @ConditionalOnProperty adalah anotasi standar Spring Boot.",
      "B": "Opsi B salah karena bukan anotasi resmi.",
      "C": "Opsi C salah karena bukan anotasi resmi.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "fullstack",
    "code": "@Configuration\n@___\npublic class ThirdPartyEmailConfig {\n  @Bean\n  public EmailSender emailSender() {\n    return new SmtpEmailSender();\n  }\n}"
  },
  {
    "id": "FI-104",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi utama dari `@Cacheable` pada method service di Spring Boot?",
    "options": {
      "A": "Menyimpan hasil kembalian method ke dalam cache, sehingga pada pemanggilan berikutnya dengan parameter yang sama, nilai diambil langsung dari cache tanpa mengeksekusi body method",
      "B": "Menghapus semua data dari database",
      "C": "Menyimpan session user di browser",
      "D": "Membuat file cache statis di harddisk server"
    },
    "answer": "A",
    "explanation": {
      "correct": "Abstraksi Cache Spring (`@Cacheable(\"users\")`) memeriksa apakah data hasil query sudah tersedia di provider cache (seperti Redis, Caffeine, Ehcache). Jika ada (cache hit), method diabaikan dan data cache dikembalikan seketika.",
      "A": "Opsi A benar sesuai mekanisme caching declarative Spring Framework.",
      "B": "Opsi B salah karena bukan untuk penghapusan database.",
      "C": "Opsi C salah karena bukan HTTP session client.",
      "D": "Opsi D salah karena provider cache dapat berada di in-memory RAM atau remote Redis cluster."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-105",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa yang dicetak oleh kode penanganan Optional berikut jika objek `user` bernilai null?\n\n```java\nString user = null;\nString name = Optional.ofNullable(user).orElse(\"Guest\");\nSystem.out.println(name);\n```",
    "options": {
      "A": "\"Guest\"",
      "B": "\"null\"",
      "C": "Error NullPointerException",
      "D": "\"\""
    },
    "answer": "A",
    "explanation": {
      "correct": "`Optional.ofNullable(user)` membungkus nilai yang berpotensi null menjadi Optional. Method `.orElse(\"Guest\")` mengembalikan nilai fallback \"Guest\" karena Optional dalam keadaan kosong (empty).",
      "A": "Opsi A benar karena orElse menyediakan nilai default saat Optional kosong.",
      "B": "Opsi B salah karena orElse menggantikan nilai null.",
      "C": "Opsi C salah karena Optional.ofNullable menangani nilai null dengan aman tanpa exception.",
      "D": "Opsi D salah karena string default adalah 'Guest'."
    },
    "jobId": "fullstack",
    "code": "String user = null;\nString name = Optional.ofNullable(user).orElse(\"Guest\");\nSystem.out.println(name);"
  },
  {
    "id": "FI-106",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Kapan operasi caching dengan `@CacheEvict` sebaiknya dipanggil?",
    "options": {
      "A": "Saat method update atau delete data berhasil dieksekusi, agar data kadaluarsa di dalam cache dihapus dan tidak menyajikan data basi (stale data)",
      "B": "Saat aplikasi pertama kali dijalankan",
      "C": "Hanya saat operasi SELECT",
      "D": "Saat memori server tersisa 10%"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ketika data dimodifikasi atau dihapus dari database, cache terkait harus dibersihkan (`@CacheEvict(value = \"users\", key = \"#id\")`) untuk menjaga konsistensi data antara database dan cache.",
      "A": "Opsi A benar karena cache eviction menjaga integritas dan kesegaran data.",
      "B": "Opsi B salah karena saat startup cache umumnya masih kosong.",
      "C": "Opsi C salah karena operasi SELECT membaca/mengisi cache via @Cacheable.",
      "D": "Opsi D salah karena cache evict dipicu oleh operasi bisnis mutasi data."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-107",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari method `BindingResult` yang ditempatkan tepat setelah parameter `@Valid` pada Controller method?",
    "options": {
      "A": "Menampung hasil dan detail kesalahan validasi data masukan tanpa membiarkan Spring melempar exception secara otomatis, memungkinkan developer membuat custom error response",
      "B": "Menghubungkan aplikasi ke database",
      "C": "Mengubah objek DTO menjadi Entity",
      "D": "Mengenkripsi request body"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika `BindingResult` dicantumkan sebagai parameter method, Spring tidak akan melempar `MethodArgumentNotValidException` secara otomatis saat validasi gagal, melainkan menyerahkan objek `BindingResult` ke developer untuk diperiksa (`result.hasErrors()`).",
      "A": "Opsi A benar karena BindingResult menangkap error validasi form secara lokal di controller.",
      "B": "Opsi B salah karena tidak terkait koneksi database.",
      "C": "Opsi C salah karena bukan mapper DTO.",
      "D": "Opsi D salah karena bukan enkriptor payload."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-108",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Method berikut melempar compile error: 'BindingResult must be placed immediately after the validated object'. Bagaimana urutan parameter yang benar?",
    "options": {
      "A": "public ResponseEntity<?> save(@Valid @RequestBody UserDto dto, BindingResult result, HttpServletRequest req)",
      "B": "public ResponseEntity<?> save(HttpServletRequest req, BindingResult result, @Valid @RequestBody UserDto dto)",
      "C": "public ResponseEntity<?> save(BindingResult result, @Valid @RequestBody UserDto dto)",
      "D": "BindingResult tidak boleh digunakan bersama @RequestBody"
    },
    "answer": "A",
    "explanation": {
      "correct": "Aturan ketat di Spring MVC mewajibkan parameter `BindingResult` diletakkan tepat setelah parameter objek model/DTO yang divalidasi dengan `@Valid`. Menempatkan parameter lain di antara keduanya akan memicu error.",
      "A": "Opsi A benar karena BindingResult diletakkan persis setelah UserDto yang divalidasi.",
      "B": "Opsi B salah karena BindingResult diletakkan sebelum objek yang divalidasi.",
      "C": "Opsi C salah karena BindingResult diletakkan di depan objek.",
      "D": "Opsi D salah karena BindingResult sepenuhnya didukung bersama @RequestBody."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-109",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa hasil dari operasi perbandingan `Optional.empty().isPresent()`?\n\n```java\nOptional<String> emptyOpt = Optional.empty();\nSystem.out.println(emptyOpt.isPresent());\n```",
    "options": {
      "A": "false",
      "B": "true",
      "C": "null",
      "D": "Exception"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Optional.empty()` adalah instance Optional yang tidak berisi nilai (kosong). Method `.isPresent()` mengembalikan true jika ada nilai, dan false jika kosong.",
      "A": "Opsi A benar karena Optional kosong menghasilkan isPresent() == false.",
      "B": "Opsi B salah karena tidak ada nilai di dalamnya.",
      "C": "Opsi C salah karena method isPresent() bertipe primitif boolean.",
      "D": "Opsi D salah karena pemanggilan aman tanpa exception."
    },
    "jobId": "fullstack",
    "code": "Optional<String> emptyOpt = Optional.empty();\nSystem.out.println(emptyOpt.isPresent());"
  },
  {
    "id": "FI-110",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi implementasi method `WebMvcConfigurer` berikut untuk mengizinkan CORS dari domain `https://frontend.com`:\n\n```java\n@Configuration\npublic class WebCorsConfig implements WebMvcConfigurer {\n  @Override\n  public void addCorsMappings(CorsRegistry registry) {\n    ___\n  }\n}\n```",
    "options": {
      "A": "registry.addMapping(\"/**\").allowedOrigins(\"https://frontend.com\");",
      "B": "registry.addRoute(\"/**\").permitOrigin(\"https://frontend.com\");",
      "C": "registry.enableCors(\"https://frontend.com\");",
      "D": "registry.corsFilter(\"https://frontend.com\");"
    },
    "answer": "A",
    "explanation": {
      "correct": "Konfigurasi CORS di Spring WebMvcConfigurer menggunakan `CorsRegistry` dengan method `.addMapping(\"/**\").allowedOrigins(\"https://...\")`.",
      "A": "Opsi A benar sesuai API method resmi CorsRegistry Spring Framework.",
      "B": "Opsi B salah karena addRoute bukan method CorsRegistry.",
      "C": "Opsi C salah karena enableCors bukan method resmi.",
      "D": "Opsi D salah karena corsFilter bukan method builder CorsRegistry."
    },
    "jobId": "fullstack",
    "code": "@Configuration\npublic class WebCorsConfig implements WebMvcConfigurer {\n  @Override\n  public void addCorsMappings(CorsRegistry registry) {\n    ___\n  }\n}"
  },
  {
    "id": "FI-111",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi utama dari anotasi `@Primary` pada deklarasi Spring Bean?",
    "options": {
      "A": "Memberikan prioritas utama pada bean tersebut untuk diinjeksi jika terdapat lebih dari satu bean dengan tipe antarmuka yang sama",
      "B": "Menandai bahwa bean tersebut adalah Primary Key database",
      "C": "Membuat bean tersebut tidak bisa diubah nilainya",
      "D": "Menghentikan aplikasi jika bean gagal dibuat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ketika ada beberapa implementasi dari interface yang sama (misal `CreditCardPayment` dan `PaypalPayment`), `@Primary` menandai implementasi default yang dipilih jika tidak ada `@Qualifier` spesifik yang diminta saat injeksi.",
      "A": "Opsi A benar karena @Primary menentukan bean default di antara kandidat bean sejenis.",
      "B": "Opsi B salah karena primary key database menggunakan @Id.",
      "C": "Opsi C salah karena bukan untuk immutability.",
      "D": "Opsi D salah karena bukan failure trigger."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-112",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa output dari eksekusi kode Java berikut yang menggunakan method reference `String::toUpperCase`?\n\n```java\nList<String> list = List.of(\"java\", \"spring\");\nList<String> upper = list.stream().map(String::toUpperCase).toList();\nSystem.out.println(upper);\n```",
    "options": {
      "A": "[\"JAVA\", \"SPRING\"]",
      "B": "[\"java\", \"spring\"]",
      "C": "[\"Java\", \"Spring\"]",
      "D": "Compile error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operasi `.map(String::toUpperCase)` mengeksekusi method toUpperCase pada setiap elemen string di dalam stream, mengubah list [\"java\", \"spring\"] menjadi [\"JAVA\", \"SPRING\"].",
      "A": "Opsi A benar karena semua karakter string diubah ke huruf kapital.",
      "B": "Opsi B salah karena string asal adalah huruf kecil.",
      "C": "Opsi C salah karena bukan kapital huruf depan saja.",
      "D": "Opsi D salah karena sintaks method reference Java 8 valid."
    },
    "jobId": "fullstack",
    "code": "List<String> list = List.of(\"java\", \"spring\");\nList<String> upper = list.stream().map(String::toUpperCase).toList();\nSystem.out.println(upper);"
  },
  {
    "id": "FI-113",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Method controller berikut mengalami crash dengan `IllegalStateException: Ambiguous handler methods mapped for HTTP path`. Apa penyebabnya?",
    "options": {
      "A": "Terdapat dua method controller berbeda yang memiliki URL mapping dan HTTP method yang persis sama di dalam controller",
      "B": "Aplikasi kekurangan memori heap",
      "C": "Database PostgreSQL sedang terkunci",
      "D": "Versi Spring Boot tidak kompatibel"
    },
    "answer": "A",
    "explanation": {
      "correct": "Error 'Ambiguous handler methods mapped' terjadi ketika Spring DispatcherServlet mendeteksi dua method yang memetakan pola request yang identik (misal sama-sama `@GetMapping(\"/users\")`), sehingga Spring bingung memilih method mana yang harus mengeksekusi request.",
      "A": "Opsi A benar karena duplikasi rute mapping yang ambigu ditolak oleh Spring MVC saat startup.",
      "B": "Opsi B salah karena bukan error memori.",
      "C": "Opsi C salah karena bukan error database.",
      "D": "Opsi D salah karena ini murni konflik deklarasi routing."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-114",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Apa peran dari interface `CommandLineRunner` atau `ApplicationRunner` di Spring Boot?",
    "options": {
      "A": "Mengeksekusi blok kode khusus tepat setelah Spring ApplicationContext berhasil dimuat dan sebelum aplikasi siap melayani request",
      "B": "Menjalankan perintah Git otomatis",
      "C": "Menghentikan aplikasi dari command line",
      "D": "Menghubungkan aplikasi ke terminal Linux secara langsung"
    },
    "answer": "A",
    "explanation": {
      "correct": "Bean yang mengimplementasikan `CommandLineRunner` (menerima `String... args`) akan dipanggil secara otomatis oleh Spring Boot sesaat setelah startup selesai, sangat ideal untuk inisialisasi data awal (seeding database).",
      "A": "Opsi A benar sesuai fungsi lifecycle callback CommandLineRunner.",
      "B": "Opsi B salah karena bukan untuk eksekusi Git.",
      "C": "Opsi C salah karena bukan untuk shutdown.",
      "D": "Opsi D salah karena bukan terminal wrapper."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-115",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi method signature bean konfigurasi CORS berikut agar mengembalikan filter bean yang tepat:\n\n```java\n@Configuration\npublic class CorsConfig {\n  @Bean\n  ___{\n    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n    CorsConfiguration config = new CorsConfiguration();\n    config.addAllowedOrigin(\"*\");\n    source.registerCorsConfiguration(\"/**\", config);\n    return new CorsFilter(source);\n  }\n}\n```",
    "options": {
      "A": "public CorsFilter corsFilter()",
      "B": "public WebFilter corsFilter()",
      "C": "public SecurityFilter corsFilter()",
      "D": "public NetworkFilter corsFilter()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Spring Web, bean filter CORS dideklarasikan dengan tipe kembalian `org.springframework.web.filter.CorsFilter` yang menerima `UrlBasedCorsConfigurationSource`.",
      "A": "Opsi A benar karena CorsFilter adalah tipe bean standar Spring MVC untuk filter CORS.",
      "B": "Opsi B salah karena WebFilter adalah antarmuka reaktif Spring WebFlux.",
      "C": "Opsi C salah karena bukan tipe filter CORS standar.",
      "D": "Opsi D salah karena bukan kelas Spring."
    },
    "jobId": "fullstack",
    "code": "@Configuration\npublic class CorsConfig {\n  @Bean\n  ___{\n    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n    CorsConfiguration config = new CorsConfiguration();\n    config.addAllowedOrigin(\"*\");\n    source.registerCorsConfiguration(\"/**\", config);\n    return new CorsFilter(source);\n  }\n}"
  },
  {
    "id": "FI-116",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa nilai yang dicetak saat filter Stream tidak menemukan kecocokan dan dipanggil method `.findFirst().orElse(\"None\")`?\n\n```java\nList<String> list = List.of(\"A\", \"B\");\nString result = list.stream().filter(s -> s.equals(\"Z\")).findFirst().orElse(\"None\");\nSystem.out.println(result);\n```",
    "options": {
      "A": "\"None\"",
      "B": "null",
      "C": "\"\"",
      "D": "Exception NoSuchElement"
    },
    "answer": "A",
    "explanation": {
      "correct": "Filter `name.equals(\"Z\")` tidak menemukan kecocokan pada list [\"A\", \"B\"], menghasilkan stream kosong. `findFirst()` mengembalikan `Optional.empty()`, dan `.orElse(\"None\")` mengembalikan nilai fallback \"None\".",
      "A": "Opsi A benar karena fallback orElse dieksekusi saat tidak ada elemen cocok.",
      "B": "Opsi B salah karena orElse mencegah null.",
      "C": "Opsi C salah karena fallback bukan string kosong.",
      "D": "Opsi D salah karena orElse mencegah NoSuchElementException."
    },
    "jobId": "fullstack",
    "code": "List<String> list = List.of(\"A\", \"B\");\nString result = list.stream().filter(s -> s.equals(\"Z\")).findFirst().orElse(\"None\");\nSystem.out.println(result);"
  },
  {
    "id": "FI-117",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "concept",
    "question": "Dalam Spring AOP (Aspect-Oriented Programming), apa yang dimaksud dengan 'Pointcut'?",
    "options": {
      "A": "Predikat atau ekspresi yang mencocokkan Join Point (titik eksekusi method) di mana sebuah Advice (kode aspek) harus diterapkan",
      "B": "Titik akhir koneksi database",
      "C": "Waktu kompilasi source code",
      "D": "Poin reward bagi developer"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pointcut mendefinisikan 'di mana' (where) aspek dijalankan menggunakan ekspresi pointcut (seperti `execution(* com.example.service.*.*(..))`), sedangkan Advice mendefinisikan 'apa yang dilakukan dan kapan' (before, after, around).",
      "A": "Opsi A benar sesuai terminologi resmi Spring AOP.",
      "B": "Opsi B salah karena bukan koneksi database.",
      "C": "Opsi C salah karena AOP Spring berbasis runtime dynamic proxy.",
      "D": "Opsi D salah karena bukan istilah gamifikasi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-118",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Mengapa sebaiknya method yang dianotasi `@Transactional` bersifat `public` di Spring Boot berbasis proxy standar?",
    "options": {
      "A": "Spring AOP secara default menggunakan Dynamic Proxies yang membungkus objek dan hanya meng-intercept pemanggilan method public eksternal",
      "B": "Java melarang method private memiliki anotasi",
      "C": "Database menolak transaksi dari method private",
      "D": "Method private tidak bisa mengakses repository"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Transaction Management bekerja menggunakan AOP proxy. Panggilan ke method private atau pemanggilan internal dari method lain dalam class yang sama (self-invocation) melewati proxy pembungkus, sehingga transaksi tidak akan aktif.",
      "A": "Opsi A benar karena keterbatasan AOP proxy mengharuskan method transactional berstatus public untuk di-intercept.",
      "B": "Opsi B salah karena Java mengizinkan anotasi pada method private.",
      "C": "Opsi C salah karena database tidak mengetahui visibilitas method Java.",
      "D": "Opsi D salah karena method private bisa memanggil repository."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-119",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Berapa hasil dari operasi flatMap berikut di Java Stream?",
    "options": {
      "A": "[1, 2, 3, 4]",
      "B": "[[1, 2], [3, 4]]",
      "C": "[3, 7]",
      "D": "4"
    },
    "answer": "A",
    "explanation": {
      "correct": "`flatMap` menerima fungsi yang memetakan setiap list anak menjadi sebuah stream, lalu meratakan (flattening) elemen-elemen dari nested list `[[1, 2], [3, 4]]` menjadi satu stream datar tunggal `[1, 2, 3, 4]`.",
      "A": "Opsi A benar karena flatMap menggabungkan dan meratakan nested collection.",
      "B": "Opsi B salah karena map() biasa yang mempertahankan struktur nested list.",
      "C": "Opsi C salah karena bukan operasi penjumlahan.",
      "D": "Opsi D salah karena hasil kembalian adalah List elemen, bukan jumlah elemen."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-120",
    "level": "intermediate",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada method controller agar Spring Boot mengabaikan verifikasi CSRF untuk endpoint webhook eksternal:\n\n```java\n@Bean\npublic SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n  http\n    ___\n    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());\n  return http.build();\n}\n```",
    "options": {
      "A": ".csrf(csrf -> csrf.ignoringRequestMatchers(\"/api/webhook/**\"))",
      "B": ".csrf(csrf -> csrf.delete(\"/api/webhook/**\"))",
      "C": ".csrf(csrf -> csrf.skip(\"/api/webhook/**\"))",
      "D": ".csrf(csrf -> csrf.bypassAll())"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Spring Security DSL, mengabaikan proteksi CSRF pada endpoint tertentu (seperti endpoint webhook publik pihak ketiga) dilakukan dengan `.ignoringRequestMatchers(\"/api/webhook/**\")`.",
      "A": "Opsi A benar karena ignoringRequestMatchers adalah method resmi Spring Security.",
      "B": "Opsi B salah karena delete bukan method CSRF configurer.",
      "C": "Opsi C salah karena skip bukan method resmi.",
      "D": "Opsi D salah karena bukan method resmi."
    },
    "jobId": "fullstack",
    "code": "@Bean\npublic SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n  http\n    ___\n    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());\n  return http.build();\n}"
  },
  {
    "id": "FI-121",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan masalah 'N+1 Select Problem' pada JPA/Hibernate dan bagaimana dampaknya terhadap performa aplikasi?",
    "options": {
      "A": "Situasi di mana aplikasi mengeksekusi 1 query untuk mengambil N entitas utama, diikuti oleh N query tambahan terpisah untuk mengambil data relasi masing-masing entitas tersebut, menyebabkan degradasi performa database yang parah",
      "B": "Bug yang menyebabkan kolom bernilai N+1 saat disimpan",
      "C": "Fitur optimasi database untuk mempercepat query 10 kali lipat",
      "D": "Kondisi di mana database kehabisan koneksi pool"
    },
    "answer": "A",
    "explanation": {
      "correct": "N+1 Select Problem terjadi saat me-load list entitas (1 query), lalu saat melakukan loop dan memanggil getter relasi ber-fetch LAZY, Hibernate memicu query terpisah untuk setiap baris (N query tambahan). Total query menjadi 1 + N.",
      "A": "Opsi A benar karena mendefinisikan fenomena N+1 query secara presisi.",
      "B": "Opsi B salah karena bukan manipulasi nilai angka.",
      "C": "Opsi C salah karena N+1 justru adalah masalah performa berat.",
      "D": "Opsi D salah karena N+1 dapat memicu habisnya koneksi pool tetapi bukan definisinya."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-122",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi klausa JPQL berikut untuk mengatasi N+1 Problem dengan memuat entitas User beserta relasi 'orders'-nya dalam satu query JOIN tunggal:\n\n```java\n@Query(\"SELECT u FROM User u ___ WHERE u.department = :dept\")\nList<User> findUsersWithOrders(@Param(\"dept\") String dept);\n```",
    "options": {
      "A": "JOIN FETCH u.orders",
      "B": "INNER JOIN u.orders",
      "C": "INCLUDE u.orders",
      "D": "WITH u.orders"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kata kunci `JOIN FETCH` di JPQL menginstruksikan Hibernate untuk melakukan SQL JOIN dan langsung menginisialisasi koleksi relasi terkait ke dalam memori dalam satu query tunggal tanpa memicu query tambahan.",
      "A": "Opsi A benar karena JOIN FETCH adalah solusi standar N+1 di JPQL.",
      "B": "Opsi B salah karena INNER JOIN biasa tanpa FETCH tetap membiarkan relasi berstatus uninitialized (lazy).",
      "C": "Opsi C salah karena INCLUDE bukan sintaks JPQL.",
      "D": "Opsi D salah karena WITH di JPQL adalah untuk ON condition kustom."
    },
    "jobId": "fullstack",
    "code": "@Query(\"SELECT u FROM User u ___ WHERE u.department = :dept\")\nList<User> findUsersWithOrders(@Param(\"dept\") String dept);"
  },
  {
    "id": "FI-123",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan pada entitas JPA untuk mendefinisikan Fetch Plan secara deklaratif tanpa mengubah definisi `@ManyToOne` atau query JPQL secara permanen?",
    "options": {
      "A": "@EntityGraph",
      "B": "@FetchPlan",
      "C": "@DynamicFetch",
      "D": "@JoinStrategy"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@EntityGraph` (dari JPA 2.1) memungkinkan pengembang menentukan atribut mana saja yang harus di-fetch secara EAGER untuk query tertentu pada method repository.",
      "A": "Opsi A benar karena @EntityGraph adalah fitur resmi JPA untuk fetch plan dinamis.",
      "B": "Opsi B salah karena bukan anotasi JPA.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-124",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Kode berikut memicu `LazyInitializationException: could not initialize proxy - no Session`. Apa penyebab utamanya?",
    "options": {
      "A": "Properti relasi LAZY diakses di luar batas transaksi (setelah Hibernate Session/EntityManager ditutup, misalnya di Controller atau View layer)",
      "B": "Nama kolom di database salah",
      "C": "ID entitas bernilai negatif",
      "D": "Driver database tidak mendukung LAZY loading"
    },
    "answer": "A",
    "explanation": {
      "correct": "`LazyInitializationException` terjadi ketika aplikasi mencoba mengakses proxy entitas berelasi LAZY saat Hibernate Session aktif sudah ditutup (misal transaksi service sudah selesai dan kontrol sudah kembali ke controller/serializer).",
      "A": "Opsi A benar karena ketiadaan Hibernate Session aktif saat mengakses proxy LAZY memicu exception ini.",
      "B": "Opsi B salah karena nama kolom salah memicu SQLSyntaxErrorException saat startup/query.",
      "C": "Opsi C salah karena nilai ID tidak memengaruhi session Hibernate.",
      "D": "Opsi D salah karena lazy loading adalah fitur ORM, bukan driver JDBC."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-125",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Perhatikan relasi bidirectional berikut. Saat serialisasi objek User ke JSON menggunakan Jackson, apa yang terjadi jika tidak ada anotasi `@JsonManagedReference` atau `@JsonIgnore`?\n\n```java\n@Entity\npublic class User {\n  @OneToMany(mappedBy = \"user\")\n  private List<Order> orders;\n}\n\n@Entity\npublic class Order {\n  @ManyToOne\n  private User user;\n}\n```",
    "options": {
      "A": "Terjadi error `StackOverflowError` akibat serialisasi rekursif tak berhingga (Infinite Circular Recursion)",
      "B": "Data tersimpan dengan sukses tanpa masalah",
      "C": "Jackson otomatis menghapus relasi circular",
      "D": "JSON yang dihasilkan bernilai null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada relasi dua arah (User memiliki Order, dan Order memiliki referensi balik ke User), Jackson akan mencoba menserialisasi User -> Order -> User -> Order berulang kali tanpa henti hingga memori stack habis dan melempar `StackOverflowError`.",
      "A": "Opsi A benar karena circular reference dua arah memicu infinite loop pada JSON serializer.",
      "B": "Opsi B salah karena serialisasi pasti gagal tanpa penanganan referensi sirkular.",
      "C": "Opsi C salah karena Jackson membutuhkan petunjuk anotasi (@JsonIgnore / @JsonBackReference).",
      "D": "Opsi D salah karena bukan menghasilkan null melainkan crash exception."
    },
    "jobId": "fullstack",
    "code": "@Entity\npublic class User {\n  @OneToMany(mappedBy = \"user\")\n  private List<Order> orders;\n}\n\n@Entity\npublic class Order {\n  @ManyToOne\n  private User user;\n}"
  },
  {
    "id": "FI-126",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Sisi manakah yang harus dideklarasikan sebagai 'Owner' (pemilik foreign key) dalam relasi `@OneToMany` dan `@ManyToOne` dua arah di JPA?",
    "options": {
      "A": "Sisi `@ManyToOne` (tabel yang secara fisik memegang kolom foreign key) harus bertindak sebagai Owner dengan anotasi `@JoinColumn`",
      "B": "Sisi `@OneToMany` harus selalu menjadi Owner",
      "C": "Bebas dan tidak ada bedanya",
      "D": "Kedua belah pihak harus sama-sama memiliki @JoinColumn"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di JPA, sisi yang memiliki foreign key fisik di database adalah sisi `@ManyToOne`. Sisi ini bertindak sebagai relationship owner dengan `@JoinColumn`, sedangkan sisi `@OneToMany` menggunakan `mappedBy` untuk menunjukkan bahwa ia adalah sisi inverse.",
      "A": "Opsi A benar karena sisi ManyToOne adalah pemilik relasi foreign key alami di skema RDBMS.",
      "B": "Opsi B salah karena menjadikan OneToMany sebagai owner menghasilkan tabel relasi join tambahan yang tidak efisien.",
      "C": "Opsi C salah karena penentuan owner salah dapat menyebabkan pembaruan relasi tidak tersimpan.",
      "D": "Opsi D salah karena menduplikasi @JoinColumn di kedua sisi adalah kesalahan pemetaan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-127",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari atribut `cascade = CascadeType.ALL` pada relasi entitas JPA?",
    "options": {
      "A": "Meneruskan semua operasi persistensi (PERSIST, MERGE, REMOVE, REFRESH, DETACH) dari entitas induk ke entitas anak terkait secara otomatis",
      "B": "Menghapus seluruh database saat entitas disimpan",
      "C": "Mengubah semua query menjadi transaksi read-only",
      "D": "Membuat tabel cadangan otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "`CascadeType.ALL` memastikan bahwa setiap aksi siklus hidup (seperti menyimpan atau menghapus parent) akan otomatis diterapkan ke seluruh entitas anak yang berelasi.",
      "A": "Opsi A benar sesuai fungsi propagasi siklus hidup CascadeType.ALL.",
      "B": "Opsi B salah karena kaskade hanya berlaku pada relasi entitas terkait.",
      "C": "Opsi C salah karena bukan pengatur read-only.",
      "D": "Opsi D salah karena bukan pencadangan database."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-128",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada entitas Order berikut agar kolom foreign key di database bernama `customer_id`:\n\n```java\n@Entity\npublic class Order {\n  @Id\n  private Long id;\n  \n  @ManyToOne(fetch = FetchType.LAZY)\n  ___\n  private Customer customer;\n}\n```",
    "options": {
      "A": "@JoinColumn(name = \"customer_id\")",
      "B": "@Column(name = \"customer_id\")",
      "C": "@ForeignKey(name = \"customer_id\")",
      "D": "@ReferenceColumn(\"customer_id\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada relasi entitas JPA (`@ManyToOne` atau `@OneToOne`), pemetaan kolom foreign key secara eksplisit menggunakan anotasi `@JoinColumn(name = \"nama_kolom_fk\")`.",
      "A": "Opsi A benar karena @JoinColumn mendefinisikan kolom foreign key relasi.",
      "B": "Opsi B salah karena @Column untuk kolom data primitif biasa.",
      "C": "Opsi C salah karena @ForeignKey bukan anotasi nama kolom.",
      "D": "Opsi D salah karena bukan anotasi resmi JPA."
    },
    "jobId": "fullstack",
    "code": "@Entity\npublic class Order {\n  @Id\n  private Long id;\n  \n  @ManyToOne(fetch = FetchType.LAZY)\n  ___\n  private Customer customer;\n}"
  },
  {
    "id": "FI-129",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Diberikan operasi paginasi Spring Data JPA berikut. Berapa banyak data yang diminta per halaman (`pageSize`)?\n\n```java\nPageable pageable = PageRequest.of(0, 20, Sort.by(\"name\").ascending());\nPage<User> users = userRepository.findAll(pageable);\n```",
    "options": {
      "A": "20",
      "B": "0",
      "C": "1",
      "D": "50"
    },
    "answer": "A",
    "explanation": {
      "correct": "`PageRequest.of(0, 20)` menerima parameter: halaman ke-0 (page number berbasis indeks 0) dan ukuran halaman sebanyak 20 data per halaman (page size).",
      "A": "Opsi A benar karena parameter kedua adalah pageSize bernilai 20.",
      "B": "Opsi B salah karena 0 adalah page index.",
      "C": "Opsi C salah karena bukan 1 data.",
      "D": "Opsi D salah karena ukuran yang ditentukan adalah 20."
    },
    "jobId": "fullstack",
    "code": "Pageable pageable = PageRequest.of(0, 20, Sort.by(\"name\").ascending());\nPage<User> users = userRepository.findAll(pageable);"
  },
  {
    "id": "FI-130",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa perbedaan antara `Page<T>` dan `Slice<T>` sebagai tipe kembalian query paginasi di Spring Data JPA?",
    "options": {
      "A": "`Page<T>` mengeksekusi query `COUNT(*)` tambahan untuk mengetahui total keseluruhan data dan halaman, sedangkan `Slice<T>` hanya memeriksa apakah masih ada halaman berikutnya (`hasNext()`) tanpa query COUNT, menjadikannya jauh lebih cepat untuk tabel besar",
      "B": "`Slice<T>` hanya mendukung database NoSQL",
      "C": "`Page<T>` tidak mendukung sorting",
      "D": "Tidak ada perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Query `COUNT(*)` pada tabel jutaan baris sangat mahal. Jika antarmuka UI hanya membutuhkan fitur 'Next Page' atau Infinite Scroll (tanpa nomor total halaman 1, 2, 3.. 100), `Slice<T>` menghemat beban database secara signifikan.",
      "A": "Opsi A benar karena membedakan penghitungan total count (Page) vs pengecekan hasNext (Slice).",
      "B": "Opsi B salah karena Slice didukung penuh pada database relasional SQL.",
      "C": "Opsi C salah karena Page sepenuhnya mendukung sorting.",
      "D": "Opsi D salah karena perbedaan efisiensi performanya nyata."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-131",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Operasi batch insert 10.000 entitas menggunakan JPA repository memakan waktu sangat lambat dan memicu `OutOfMemoryError`. Mengapa dan bagaimana cara memperbaikinya?",
    "options": {
      "A": "Hibernate menyimpan semua objek di First-Level Cache (Persistence Context); solusinya adalah mengaktifkan `hibernate.jdbc.batch_size` dan melakukan `entityManager.flush()` serta `entityManager.clear()` secara periodik",
      "B": "JPA melarang penyimpanan lebih dari 100 data",
      "C": "Harus menggunakan MongoDB",
      "D": "Entity harus dihapus sebelum di-insert"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, EntityManager mempertahankan referensi setiap entitas yang di-persist di memori (L1 Cache). Untuk operasi batch masif, developer harus mengonfigurasi batch size JDBC serta memanggil `flush()` dan `clear()` per batch (misal per 50 entitas) agar memori dibersihkan.",
      "A": "Opsi A benar karena pembersihan periodic L1 cache dan JDBC batching adalah solusi resmi batch processing di Hibernate.",
      "B": "Opsi B salah karena JPA mendukung jutaan data.",
      "C": "Opsi C salah karena bukan solusi untuk database relasional.",
      "D": "Opsi D salah karena tidak masuk akal menghapus sebelum insert."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-132",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan 'First-Level Cache' di Hibernate?",
    "options": {
      "A": "Cache internal berbasis sesi (`EntityManager` / `Session`) yang aktif secara default untuk menjamin identitas objek dalam satu transaksi dan menghindari query berulang untuk ID yang sama dalam transaksi tersebut",
      "B": "Cache Redis di server eksternal",
      "C": "Cache di browser pengguna",
      "D": "Cache file statis di disk"
    },
    "answer": "A",
    "explanation": {
      "correct": "First-Level Cache terikat pada siklus hidup satu EntityManager. Jika entitas dengan ID 1 di-query dua kali dalam transaksi yang sama, Hibernate mengambil objek dari L1 cache pada pemanggilan kedua tanpa mengeksekusi SQL ke database.",
      "A": "Opsi A benar sesuai definisi dan mekanisme kerja L1 cache Hibernate.",
      "B": "Opsi B salah karena Redis adalah contoh Second-Level Cache eksternal.",
      "C": "Opsi C salah karena L1 cache berada di JVM backend server.",
      "D": "Opsi D salah karena L1 cache murni in-memory pada thread transaksi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-133",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi anotasi enum mapping berikut agar nilai Enum disimpan sebagai teks string di database (bukan angka ordinal indeks):\n\n```java\n@Entity\npublic class Account {\n  @Id\n  private Long id;\n  \n  @___\n  private Status status; // Disimpan sebagai string 'ACTIVE' di DB\n}\n```",
    "options": {
      "A": "@Enumerated(EnumType.STRING)",
      "B": "@Enumerated(EnumType.ORDINAL)",
      "C": "@EnumMapping(type = String.class)",
      "D": "@ConvertEnum"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default JPA menggunakan `EnumType.ORDINAL` (menyimpan angka 0, 1, 2). Jika urutan enum berubah, data akan rusak. Menggunakan `@Enumerated(EnumType.STRING)` menyimpan nama teks enum (misal 'ACTIVE'), menjamin kestabilan data.",
      "A": "Opsi A benar karena EnumType.STRING menyimpan representasi teks yang aman.",
      "B": "Opsi B salah karena ORDINAL menyimpan indeks angka yang rentan saat urutan enum berubah.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena bukan anotasi standar."
    },
    "jobId": "fullstack",
    "code": "@Entity\npublic class Account {\n  @Id\n  private Long id;\n  \n  @___\n  private Status status; // Disimpan sebagai string 'ACTIVE' di DB\n}"
  },
  {
    "id": "FI-134",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Mengapa penggunaan `FetchType.EAGER` pada anotasi relasi `@OneToMany` atau `@ManyToMany` sangat TIDAK disarankan?",
    "options": {
      "A": "Karena selalu memicu query penarikan data relasi secara otomatis di setiap operasi fetch bahkan saat data anak tidak dibutuhkan, menyebabkan pembengkakan memori dan penurunan performa sistem",
      "B": "Karena EAGER tidak didukung oleh Spring Data JPA",
      "C": "Karena EAGER menyebabkan database terkunci permanen",
      "D": "Karena EAGER hanya bisa berjalan pada hari kerja"
    },
    "answer": "A",
    "explanation": {
      "correct": "Best practice JPA adalah menggunakan `FetchType.LAZY` sebagai default untuk semua relasi koleksi, dan menggunakan `JOIN FETCH` atau `@EntityGraph` hanya pada skenario query yang benar-benar membutuhkan data relasi tersebut.",
      "A": "Opsi A benar karena EAGER memicu overhead pemuatan data yang tidak perlu secara agresif.",
      "B": "Opsi B salah karena didukung, namun merupakan bad practice.",
      "C": "Opsi C salah karena tidak mengunci database secara permanen.",
      "D": "Opsi D salah karena tidak relevan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-135",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Apa output dari pemanggilan method `.isNew()` pada entitas dengan ID yang sudah memiliki nilai sebelum di-save?",
    "options": {
      "A": "false (dianggap sebagai entitas lama yang akan di-update via merge)",
      "B": "true",
      "C": "null",
      "D": "Exception"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Spring Data JPA, entitas dianggap baru (`isNew() == true`) jika field identifier/ID bernilai null (atau 0 untuk primitif). Jika ID sudah memiliki nilai, Spring Data menganggapnya sebagai entitas yang sudah ada di database dan mengeksekusi method `entityManager.merge()` (operasi UPDATE).",
      "A": "Opsi A benar karena ID terisi diartikan sebagai objek eksisting yang memicu merge.",
      "B": "Opsi B salah karena isNew bernilai true hanya jika ID bernilai null.",
      "C": "Opsi C salah karena isNew mengembalikan boolean primitif.",
      "D": "Opsi D salah karena evaluasi berjalan normal."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-136",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa peran dari anotasi `@Version` pada entitas JPA?",
    "options": {
      "A": "Mengaktifkan mekanisme Optimistic Locking untuk mencegah masalah Lost Updates saat beberapa transaksi bersamaan mencoba memperbarui baris yang sama",
      "B": "Mencatat nomor rilis aplikasi",
      "C": "Mengatur versi database PostgreSQL",
      "D": "Menentukan versi JVM yang kompatibel"
    },
    "answer": "A",
    "explanation": {
      "correct": "Optimistic Locking menggunakan kolom version angka integer atau timestamp. Sebelum UPDATE, Hibernate memverifikasi apakah nomor versi di database masih sama. Jika ada transaksi lain yang sudah mengubahnya lebih dulu, Hibernate melempar `OptimisticLockException`.",
      "A": "Opsi A benar sesuai fungsi proteksi konkurensi Optimistic Locking JPA.",
      "B": "Opsi B salah karena bukan nomor rilis software.",
      "C": "Opsi C salah karena bukan versi server database.",
      "D": "Opsi D salah karena bukan versi Java runtime."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-137",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Method service berikut membaca User dan mengubah namanya, tetapi query UPDATE tidak pernah terjadi di database. Mengapa?\n\n```java\n@Transactional(readOnly = true)\npublic void updateName(Long id, String newName) {\n  User user = userRepository.findById(id).orElseThrow();\n  user.setName(newName);\n  // Tidak ada UPDATE yang dieksekusi\n}\n```",
    "options": {
      "A": "Anotasi `@Transactional(readOnly = true)` melarang Hibernate melakukan flush perubahan ke database dan menonaktifkan snapshot dirty checking",
      "B": "Nama user tidak boleh diubah",
      "C": "User harus di-delete dulu",
      "D": "Method harus bertipe void"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Transactional(readOnly = true)` adalah optimasi performa yang memberitahu Hibernate bahwa transaksi hanya untuk membaca data. Hibernate tidak akan membuat dirty-checking snapshot dan mengabaikan proses flush perubahan ke database saat transaksi selesai.",
      "A": "Opsi A benar karena flag readOnly = true menonaktifkan dirty checking flush.",
      "B": "Opsi B salah karena entitas mutable mendukung pengubahan nama.",
      "C": "Opsi C salah karena update tidak membutuhkan penghapusan.",
      "D": "Opsi D salah karena return type tidak memengaruhi perilaku transaksi."
    },
    "jobId": "fullstack",
    "code": "@Transactional(readOnly = true)\npublic void updateName(Long id, String newName) {\n  User user = userRepository.findById(id).orElseThrow();\n  user.setName(newName);\n  // Tidak ada UPDATE yang dieksekusi\n}"
  },
  {
    "id": "FI-138",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi `@Modifying` pada deklarasi custom query di Spring Data JPA?",
    "options": {
      "A": "Memberitahu framework bahwa query JPQL/Native tersebut adalah operasi manipulasi data (UPDATE, DELETE, atau INSERT) dan bukan query SELECT",
      "B": "Mengubah tipe data kolom database secara otomatis",
      "C": "Menonaktifkan transaksi database",
      "D": "Mengenkripsi data sebelum query dieksekusi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default `@Query` dieksekusi menggunakan method `executeQuery()` (hanya untuk SELECT). Menyematkan `@Modifying` menginstruksikan Spring Data JPA untuk mengeksekusinya via `executeUpdate()`.",
      "A": "Opsi A benar karena @Modifying memicu eksekusi DML update/delete.",
      "B": "Opsi B salah karena tidak mengubah skema DDL tabel.",
      "C": "Opsi C salah karena justru membutuhkan konteks transaksi aktif.",
      "D": "Opsi D salah karena bukan alat enkripsi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-139",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi anotasi relasi berikut pada entitas User yang memiliki banyak Order, di mana penghapusan entitas User otomatis menghapus Order yang kehilangan relasi:\n\n```java\n@Entity\npublic class User {\n  @Id\n  private Long id;\n  \n  @___\n  private List<Order> orders = new ArrayList<>();\n}\n```",
    "options": {
      "A": "@OneToMany(mappedBy = \"user\", orphanRemoval = true)",
      "B": "@OneToMany(mappedBy = \"user\", autoDelete = true)",
      "C": "@OneToMany(mappedBy = \"user\", purge = true)",
      "D": "@OneToMany(mappedBy = \"user\", cleanOrphan = true)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`orphanRemoval = true` memastikan bahwa jika sebuah objek anak dihapus dari koleksi list parent di Java (`user.getOrders().remove(order)`), Hibernate akan otomatis mengeksekusi query DELETE untuk menghapus baris anak tersebut dari database.",
      "A": "Opsi A benar karena `orphanRemoval = true` adalah atribut resmi JPA untuk pembersihan entitas yatim piatu.",
      "B": "Opsi B salah karena autoDelete bukan atribut JPA.",
      "C": "Opsi C salah karena purge bukan atribut JPA.",
      "D": "Opsi D salah karena cleanOrphan bukan atribut JPA."
    },
    "jobId": "fullstack",
    "code": "@Entity\npublic class User {\n  @Id\n  private Long id;\n  \n  @___\n  private List<Order> orders = new ArrayList<>();\n}"
  },
  {
    "id": "FI-140",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Berapa jumlah query SQL yang dieksekusi oleh Hibernate pada kode berikut jika User dengan ID 1 sudah berada di dalam Persistence Context (L1 Cache)?\n\n```java\n// Di dalam method @Transactional yang sama\nUser u1 = userRepository.findById(1L).orElseThrow(); // Query SQL 1\nUser u2 = userRepository.findById(1L).orElseThrow(); // Query SQL ke-2?\n```",
    "options": {
      "A": "0 query (diambil langsung dari First-Level Cache)",
      "B": "1 query SELECT",
      "C": "2 query",
      "D": "Exception error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Hibernate First-Level Cache menjamin bahwa entitas dengan primary key yang sama tidak akan di-query berulang kali dalam satu EntityManager session aktif. Pemanggilan kedua dilayani 100% dari memori tanpa menyentuh database.",
      "A": "Opsi A benar karena L1 Cache hit mengeliminasi eksekusi query SQL.",
      "B": "Opsi B salah karena query SQL hanya dieksekusi pada pemanggilan pertama.",
      "C": "Opsi C salah karena Hibernate tidak mengeksekusi query ganda yang redundant.",
      "D": "Opsi D salah karena pengambilan dari cache berjalan lancar."
    },
    "jobId": "fullstack",
    "code": "// Di dalam method @Transactional yang sama\nUser u1 = userRepository.findById(1L).orElseThrow(); // Query SQL 1\nUser u2 = userRepository.findById(1L).orElseThrow(); // Query SQL ke-2?"
  },
  {
    "id": "FI-141",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa fungsi dari Composite Index (Multi-column Index) di database relasional dan bagaimana aturan 'Leftmost Prefix' berlaku?",
    "options": {
      "A": "Indeks yang mencakup beberapa kolom secara bersamaan; indeks hanya dapat digunakan oleh query jika kondisi pencarian menyertakan kolom-kolom indeks mulai dari kolom paling kiri secara berurutan",
      "B": "Indeks yang otomatis membagi tabel menjadi beberapa database terpisah",
      "C": "Indeks yang hanya bisa digunakan untuk kolom boolean",
      "D": "Indeks yang tidak memerlukan memori RAM"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada Composite Index `(A, B, C)`, database dapat mengoptimalkan query yang memfilter `(A)`, `(A, B)`, atau `(A, B, C)`. Namun query yang hanya memfilter `(B)` atau `(C)` tanpa `(A)` tidak dapat memanfaatkan indeks tersebut karena melanggar aturan Leftmost Prefix.",
      "A": "Opsi A benar karena menjelaskan mekanisme aturan Leftmost Prefix pada Composite Index.",
      "B": "Opsi B salah karena sharding tabel adalah konsep terpisah.",
      "C": "Opsi C salah karena composite index bisa terdiri dari tipe data apa saja.",
      "D": "Opsi D salah karena indeks B-Tree membutuhkan alokasi memori dan disk."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-142",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi query SQL berikut untuk mencegah pembacaan data duplikat pada kolom email:\n\n```sql\n-- Mengambil daftar email unik\nSELECT ___ email \nFROM users \nWHERE status = 'ACTIVE';\n```",
    "options": {
      "A": "SELECT DISTINCT email FROM users;",
      "B": "SELECT UNIQUE email FROM users;",
      "C": "SELECT ONLY email FROM users;",
      "D": "SELECT CLEAN email FROM users;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa `SELECT DISTINCT` menyaring baris hasil query sehingga hanya mengembalikan baris dengan kombinasi nilai kolom yang unik (menghapus duplikasi).",
      "A": "Opsi A benar karena DISTINCT adalah kata kunci resmi SQL untuk eliminasi duplikasi hasil.",
      "B": "Opsi B salah karena UNIQUE adalah constraint DDL tabel, bukan klausa query SELECT.",
      "C": "Opsi C salah karena ONLY bukan klausa filter duplikasi.",
      "D": "Opsi D salah karena CLEAN bukan perintah SQL."
    },
    "jobId": "fullstack",
    "code": "-- Mengambil daftar email unik\nSELECT ___ email \nFROM users \nWHERE status = 'ACTIVE';"
  },
  {
    "id": "FI-143",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Diberikan query dengan subquery `IN` berikut. Apa yang dihasilkan oleh query jika tabel orders memiliki baris customer_id = 5 dan 8?\n\n```sql\nSELECT name FROM customers WHERE id IN (SELECT customer_id FROM orders);\n```",
    "options": {
      "A": "Data nama customer yang memiliki ID 5 dan 8",
      "B": "Semua data customer tanpa kecuali",
      "C": "Customer yang tidak memiliki order sama sekali",
      "D": "Nilai angka 2"
    },
    "answer": "A",
    "explanation": {
      "correct": "Subquery `(SELECT customer_id FROM orders)` menghasilkan daftar ID [5, 8]. Query luar `WHERE id IN (...)` hanya mengambil data dari tabel customers yang ID-nya cocok dengan nilai dalam daftar tersebut.",
      "A": "Opsi A benar karena subquery IN memfilter customer yang tercatat memiliki pesanan di tabel orders.",
      "B": "Opsi B salah karena customer yang belum order tidak ditampilkan.",
      "C": "Opsi C salah karena itu adalah hasil jika menggunakan NOT IN.",
      "D": "Opsi D salah karena query me-return baris data nama, bukan count."
    },
    "jobId": "fullstack",
    "code": "SELECT name FROM customers WHERE id IN (SELECT customer_id FROM orders);"
  },
  {
    "id": "FI-144",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "debug",
    "question": "Query dengan subquery `NOT IN` berikut mengembalikan 0 baris secara tidak terduga meskipun ada banyak customer yang tidak punya order. Mengapa?",
    "options": {
      "A": "Tabel orders memiliki setidaknya satu baris dengan nilai `customer_id` bernilai NULL, sehingga evaluasi NOT IN menghasilkan UNKNOWN untuk seluruh baris",
      "B": "NOT IN dilarang di SQL",
      "C": "Subquery harus selalu memiliki alias tabel",
      "D": "Tabel customers kosong"
    },
    "answer": "A",
    "explanation": {
      "correct": "Bahaya klasik `NOT IN` di SQL: jika hasil subquery mengandung satu saja nilai `NULL`, maka perbandingan `val NOT IN (..., NULL)` akan selalu mengevaluasi ke `UNKNOWN` (falsy) untuk seluruh baris. Solusi: tambahkan `WHERE customer_id IS NOT NULL` di subquery atau gunakan `NOT EXISTS`.",
      "A": "Opsi A benar karena keberadaan nilai NULL pada target NOT IN membatalkan seluruh evaluasi.",
      "B": "Opsi B salah karena NOT IN adalah sintaks legal SQL.",
      "C": "Opsi C salah karena subquery di klausa WHERE tidak mewajibkan alias.",
      "D": "Opsi D salah karena tabel customers memiliki data."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-145",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa keunggulan penggunaan `EXISTS` atau `NOT EXISTS` dibandingkan `IN` atau `NOT IN` untuk subquery korelasi pada dataset besar?",
    "options": {
      "A": "`EXISTS` berhenti mengevaluasi (short-circuit) segera setelah menemukan baris pertama yang cocok tanpa perlu memindai seluruh tabel subquery, serta aman dari bahaya jebakan nilai NULL",
      "B": "EXISTS selalu mengubah query menjadi in-memory array",
      "C": "EXISTS hanya bisa digunakan di database PostgreSQL",
      "D": "EXISTS otomatis mengenkripsi hasil query"
    },
    "answer": "A",
    "explanation": {
      "correct": "`EXISTS` menggunakan evaluasi boolean short-circuit: begitu ditemukan kecocokan pertama, engine database langsung mengembalikan true. Selain itu, EXISTS menangani nilai NULL dengan aman.",
      "A": "Opsi A benar karena short-circuit evaluation dan keamanan null menjadikan EXISTS lebih tangguh.",
      "B": "Opsi B salah karena eksekusi tetap dilakukan engine database.",
      "C": "Opsi C salah karena EXISTS didukung oleh semua RDBMS standar SQL.",
      "D": "Opsi D salah karena tidak terkait enkripsi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-146",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Diberikan operasi LEFT JOIN berikut. Jika customer bernama 'Doni' tidak memiliki order sama sekali di tabel orders, apa nilai dari `o.order_id` pada baris Doni?",
    "options": {
      "A": "NULL",
      "B": "0",
      "C": "\"\"",
      "D": "Baris Doni tidak muncul di hasil query"
    },
    "answer": "A",
    "explanation": {
      "correct": "`LEFT JOIN` mempertahankan seluruh baris dari tabel sebelah kiri (customers). Jika tidak ada baris yang cocok di tabel kanan (orders), semua kolom dari tabel kanan akan diisi dengan nilai `NULL`.",
      "A": "Opsi A benar karena kolom tabel kanan bernilai NULL jika tidak ada relasi yang cocok.",
      "B": "Opsi B salah karena nilai default bukan angka nol.",
      "C": "Opsi C salah karena bukan string kosong.",
      "D": "Opsi D salah karena LEFT JOIN menjamin tabel kiri tetap tampil."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-147",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "best-practice",
    "question": "Perintah diagnostic apakah yang digunakan oleh developer untuk menganalisis rencana eksekusi query (Execution Plan), penggunaan index, dan estimasi biaya (cost) di PostgreSQL/MySQL?",
    "options": {
      "A": "EXPLAIN ANALYZE (atau EXPLAIN)",
      "B": "SHOW QUERY",
      "C": "PROFILE RUN",
      "D": "CHECK INDEX"
    },
    "answer": "A",
    "explanation": {
      "correct": "`EXPLAIN ANALYZE` mengeksekusi query dan menampilkan rencana eksekusi aktual database engine, termasuk jenis pemindaian (Seq Scan vs Index Scan), waktu aktual per node, dan jumlah baris data yang diproses.",
      "A": "Opsi A benar karena EXPLAIN ANALYZE adalah alat diagnosis performa query standar database.",
      "B": "Opsi B salah karena SHOW QUERY bukan perintah rencana eksekusi.",
      "C": "Opsi C salah karena bukan perintah SQL standar.",
      "D": "Opsi D salah karena bukan perintah analisis plan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-148",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa arti dari konsep 'Database Normalization' hingga Third Normal Form (3NF)?",
    "options": {
      "A": "Proses pengorganisasian struktur tabel untuk mengurangi redundansi (duplikasi) data dan mencegah anomali insersi, pembaruan, serta penghapusan dengan memastikan setiap kolom non-key bergantung penuh pada primary key",
      "B": "Menggabungkan semua tabel menjadi satu tabel raksasa untuk mempercepat query",
      "C": "Menghapus semua indeks agar hemat harddisk",
      "D": "Mengonversi database SQL menjadi format JSON NoSQL"
    },
    "answer": "A",
    "explanation": {
      "correct": "Normalisasi 1NF menghilangkan repeating groups, 2NF menghilangkan partial dependencies (semua kolom non-key bergantung pada seluruh primary key), dan 3NF menghilangkan transitive dependencies (kolom non-key tidak boleh bergantung pada kolom non-key lain).",
      "A": "Opsi A benar sesuai prinsip arsitektur normalisasi data relasional 1NF-3NF.",
      "B": "Opsi B salah karena itu adalah denormalisasi.",
      "C": "Opsi C salah karena normalisasi tidak membuang indeks.",
      "D": "Opsi D salah karena normalisasi adalah konsep desain tabel relasional."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-149",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi query pembuatan foreign key berikut dengan opsi agar baris anak otomatis terhapus saat baris induknya dihapus:\n\n```sql\nALTER TABLE orders\nADD CONSTRAINT fk_orders_customer\nFOREIGN KEY (customer_id) REFERENCES customers(id)\n___;\n```",
    "options": {
      "A": "ON DELETE CASCADE",
      "B": "ON DELETE RESTRICT",
      "C": "ON DELETE SET NULL",
      "D": "ON DELETE NO ACTION"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ON DELETE CASCADE` adalah klausul constraint foreign key yang memerintahkan database untuk otomatis menghapus semua baris anak yang mereferensikan baris induk yang sedang dihapus.",
      "A": "Opsi A benar karena CASCADE meneruskan penghapusan ke baris relasi anak.",
      "B": "Opsi B salah karena RESTRICT menolak penghapusan baris induk jika masih ada anak.",
      "C": "Opsi C salah karena SET NULL mengubah kolom FK anak menjadi null.",
      "D": "Opsi D salah karena NO ACTION melempar error constraint violation."
    },
    "jobId": "fullstack",
    "code": "ALTER TABLE orders\nADD CONSTRAINT fk_orders_customer\nFOREIGN KEY (customer_id) REFERENCES customers(id)\n___;"
  },
  {
    "id": "FI-150",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Berapa banyak baris yang dikembalikan oleh query berikut jika tabel A memiliki 3 baris dan tabel B memiliki 4 baris menggunakan CROSS JOIN (Cartesian Product)?\n\n```sql\nSELECT * FROM table_a CROSS JOIN table_b;\n```",
    "options": {
      "A": "12 baris (3 * 4)",
      "B": "7 baris (3 + 4)",
      "C": "1 baris",
      "D": "0 baris"
    },
    "answer": "A",
    "explanation": {
      "correct": "`CROSS JOIN` menghasilkan Cartesian Product, di mana setiap baris dari tabel pertama dipasangkan dengan setiap baris dari tabel kedua. Total baris = jumlah baris A * jumlah baris B = 3 * 4 = 12 baris.",
      "A": "Opsi A benar karena perkalian kartesian menghasilkan 3 * 4 = 12 baris.",
      "B": "Opsi B salah karena operasi kartesian perkalian, bukan penjumlahan.",
      "C": "Opsi C salah karena tidak ada filter pembatas.",
      "D": "Opsi D salah karena kedua tabel memiliki data."
    },
    "jobId": "fullstack",
    "code": "SELECT * FROM table_a CROSS JOIN table_b;"
  },
  {
    "id": "FI-151",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara perintah `DROP TABLE`, `TRUNCATE TABLE`, dan `DELETE FROM table`?",
    "options": {
      "A": "`DROP` menghapus seluruh tabel beserta skemanya dari database; `TRUNCATE` mengosongkan seluruh baris data secara instan (DDL, no transaction log per-row); `DELETE` menghapus baris satu per satu (DML, tercatat di log transaksi dan mendukung klausa WHERE)",
      "B": "TRUNCATE hanya bisa digunakan jika tabel memiliki kurang dari 10 baris",
      "C": "DELETE menghapus skema tabel secara permanen",
      "D": "Ketiganya adalah sinonim tanpa perbedaan performa"
    },
    "answer": "A",
    "explanation": {
      "correct": "TRUNCATE adalah operasi DDL berkecepatan tinggi yang mereset penyimpanan tabel tanpa men-scan baris satu per satu. DELETE adalah operasi DML baris demi baris yang mencatat rollback log. DROP melenyapkan skema tabel seutuhnya.",
      "A": "Opsi A benar karena merinci perbedaan semantik, jenis operasi (DDL vs DML), dan efek skemanya secara tepat.",
      "B": "Opsi B salah karena TRUNCATE justru paling optimal untuk tabel berukuran raksasa.",
      "C": "Opsi C salah karena DELETE mempertahankan skema tabel.",
      "D": "Opsi D salah karena kecepatan dan pencatatan log-nya sangat berbeda."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-152",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "debug",
    "question": "Query transaksi berikut gagal membatalkan operasi INSERT kedua karena developer salah menggunakan perintah. Perintah apakah yang digunakan untuk membatalkan seluruh operasi dalam transaksi?\n\n```sql\nBEGIN;\nINSERT INTO accounts (user_id, balance) VALUES (1, 50000);\n-- Terjadi kegagalan validasi, batalkan semua:\n___;\n```",
    "options": {
      "A": "ROLLBACK;",
      "B": "UNDO;",
      "C": "CANCEL;",
      "D": "RESET;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perintah standar SQL untuk membatalkan seluruh perubahan yang dilakukan di dalam blok transaksi aktif sebelum di-commit adalah `ROLLBACK;`.",
      "A": "Opsi A benar karena ROLLBACK adalah perintah pembatalan transaksi SQL resmi.",
      "B": "Opsi B salah karena UNDO bukan perintah transaksi SQL.",
      "C": "Opsi C salah karena CANCEL bukan perintah transaksi.",
      "D": "Opsi D salah karena RESET bukan pembatal transaksi."
    },
    "jobId": "fullstack",
    "code": "BEGIN;\nINSERT INTO accounts (user_id, balance) VALUES (1, 50000);\n-- Terjadi kegagalan validasi, batalkan semua:\n___;"
  },
  {
    "id": "FI-153",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi fungsi agregat string di PostgreSQL berikut untuk menggabungkan nama-nama produk dalam satu kategori menjadi satu teks berpemisah koma:\n\n```sql\n-- Menggabungkan nama produk per kategori di PostgreSQL:\nSELECT category_id, ___ AS product_names\nFROM products\nGROUP BY category_id;\n```",
    "options": {
      "A": "STRING_AGG(name, ', ')",
      "B": "GROUP_CONCAT(name, ', ')",
      "C": "CONCAT_LIST(name)",
      "D": "JOIN_TEXT(name)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di PostgreSQL, fungsi agregat untuk menggabungkan string dari banyak baris menjadi satu teks adalah `STRING_AGG(column, delimiter)`. (`GROUP_CONCAT` adalah padanannya di MySQL).",
      "A": "Opsi A benar karena STRING_AGG adalah fungsi agregat penggabung teks di PostgreSQL.",
      "B": "Opsi B salah karena GROUP_CONCAT adalah fungsi milik MySQL.",
      "C": "Opsi C salah karena bukan fungsi PostgreSQL.",
      "D": "Opsi D salah karena bukan fungsi SQL standar."
    },
    "jobId": "fullstack",
    "code": "-- Menggabungkan nama produk per kategori di PostgreSQL:\nSELECT category_id, ___ AS product_names\nFROM products\nGROUP BY category_id;"
  },
  {
    "id": "FI-154",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan 'Dirty Read' dalam fenomena anomali konkurensi transaksi database?",
    "options": {
      "A": "Suatu transaksi membaca data yang telah diubah oleh transaksi lain yang sedang berjalan namun BELUM di-commit, dan perubahan tersebut kemudian di-rollback",
      "B": "Membaca data dari harddisk yang rusak",
      "C": "Membaca data tanpa menggunakan password",
      "D": "Membaca data yang formatnya bukan JSON"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dirty Read terjadi pada isolasi rendah (READ UNCOMMITTED). Transaksi A membaca data sementara milik Transaksi B. Jika Transaksi B melakukan rollback, maka Transaksi A telah beroperasi pada data palsu/fiktif yang tidak pernah sah tersimpan.",
      "A": "Opsi A benar sesuai definisi formal Dirty Read di teori ACID.",
      "B": "Opsi B salah karena bukan kerusakan perangkat keras fisik.",
      "C": "Opsi C salah karena bukan masalah kredensial.",
      "D": "Opsi D salah karena tidak terkait format serialization data."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-155",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Apa output dari fungsi string `COALESCE` berikut jika kolom `middle_name` bernilai NULL dan `nickname` bernilai 'Bams'?\n\n```sql\nSELECT COALESCE(middle_name, nickname, 'Default') FROM users;\n```",
    "options": {
      "A": "\"Bams\"",
      "B": "NULL",
      "C": "\"Default\"",
      "D": "\"\""
    },
    "answer": "A",
    "explanation": {
      "correct": "`COALESCE(v1, v2, v3, ...)` mengevaluasi argumen dari kiri ke kanan dan mengembalikan nilai non-null pertama yang ditemukannya. Nilai non-null pertama adalah 'Bams'.",
      "A": "Opsi A benar karena 'Bams' adalah nilai non-null pertama yang ditemukan COALESCE.",
      "B": "Opsi B salah karena ada argumen non-null yang tersedia.",
      "C": "Opsi C salah karena 'Default' berada setelah 'Bams'.",
      "D": "Opsi D salah karena bukan string kosong."
    },
    "jobId": "fullstack",
    "code": "SELECT COALESCE(middle_name, nickname, 'Default') FROM users;"
  },
  {
    "id": "FI-156",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "best-practice",
    "question": "Kapan Anda sebaiknya membuat Partial Index (Filtered Index) di PostgreSQL (contoh: `CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;`)?",
    "options": {
      "A": "Ketika sebagian besar query dalam aplikasi hanya memfilter subset baris tertentu (misal data aktif), sehingga ukuran indeks jauh lebih kecil dan proses update data non-aktif tidak membebani indeks",
      "B": "Ketika tabel memiliki kurang dari 5 baris",
      "C": "Hanya ketika menggunakan tipe data tanggal",
      "D": "Tidak pernah, karena partial index dilarang di PostgreSQL"
    },
    "answer": "A",
    "explanation": {
      "correct": "Partial Index menghemat ruang disk dan memori cache RAM secara drastis dengan hanya mengindeks baris yang memenuhi klausul `WHERE`, serta mempercepat penulisan baris yang tidak memenuhi kondisi.",
      "A": "Opsi A benar karena Partial Index sangat efisien untuk query yang menyaring subset data spesifik.",
      "B": "Opsi B salah karena tabel sangat kecil lebih cepat menggunakan sequential scan biasa.",
      "C": "Opsi C salah karena partial index dapat dibuat pada tipe data apa saja.",
      "D": "Opsi D salah karena Partial Index adalah fitur unggulan PostgreSQL."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-157",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
    "question": "Apa fungsi dari perintah `VACUUM` di database PostgreSQL?",
    "options": {
      "A": "Membersihkan ruang disk yang ditempati oleh baris data yang sudah dihapus/diperbarui (dead tuples) yang dihasilkan oleh arsitektur MVCC PostgreSQL",
      "B": "Menghapus seluruh database dan membuat ulang dari awal",
      "C": "Mematikan server database secara mendadak",
      "D": "Memvalidasi sintaks query SQL"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostgreSQL menggunakan MVCC (Multi-Version Concurrency Control). Saat baris di-UPDATE atau di-DELETE, versi data lama tidak langsung ditimpa melainkan ditandai sebagai dead tuple. `VACUUM` mengklaim kembali ruang tersebut agar dapat digunakan kembali oleh data baru.",
      "A": "Opsi A benar sesuai fungsi pembersihan dead tuples MVCC oleh VACUUM.",
      "B": "Opsi B salah karena VACUUM tidak menghapus database.",
      "C": "Opsi C salah karena VACUUM berjalan online tanpa mematikan server.",
      "D": "Opsi D salah karena bukan query linter."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-158",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "debug",
    "question": "Query pencarian teks berikut sangat lambat di production: `SELECT * FROM users WHERE LOWER(email) = 'budi@mail.com'`. Mengapa B-Tree index pada kolom `email` biasa tidak digunakan oleh database?",
    "options": {
      "A": "Membungkus kolom di dalam fungsi seperti `LOWER(email)` mencegah database menggunakan index standar kolom; solusinya adalah membuat Expression Index (Functional Index): `CREATE INDEX ON users(LOWER(email))`",
      "B": "Indeks tidak mendukung tipe data teks",
      "C": "Huruf kecil dilarang dalam query SQL",
      "D": "Tabel users harus di-restart"
    },
    "answer": "A",
    "explanation": {
      "correct": "Index B-Tree standar menyimpan nilai asli kolom. Jika query melakukan transformasi fungsi pada kolom (`LOWER(col)`), database harus mengevaluasi fungsi untuk setiap baris dan terpaksa melakukan Full Table Scan. Expression Index menyelesaikan masalah ini.",
      "A": "Opsi A benar karena Functional/Expression Index diperlukan jika query menyaring hasil kalkulasi fungsi kolom.",
      "B": "Opsi B salah karena B-Tree sangat optimal untuk tipe teks.",
      "C": "Opsi C salah karena SQL case-insensitive untuk keyword dan mendukung teks lowercase.",
      "D": "Opsi D salah karena restart tabel tidak menyelesaikan masalah query plan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-159",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi klausa transaksi PostgreSQL berikut agar perubahan yang telah diproses disimpan secara permanen ke disk:\n\n```sql\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n-- Simpan permanen ke disk:\n___;\n```",
    "options": {
      "A": "COMMIT;",
      "B": "SAVE;",
      "C": "PERSIST;",
      "D": "WRITE;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perintah `COMMIT;` mengakhiri transaksi aktif dan menerapkan seluruh perubahan data secara permanen ke media penyimpanan database.",
      "A": "Opsi A benar karena COMMIT adalah perintah finalisasi transaksi resmi.",
      "B": "Opsi B salah karena SAVE bukan perintah penyimpan transaksi.",
      "C": "Opsi C salah karena PERSIST adalah istilah JPA, bukan SQL.",
      "D": "Opsi D salah karena WRITE bukan perintah penyimpan transaksi SQL."
    },
    "jobId": "fullstack",
    "code": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n-- Simpan permanen ke disk:\n___;"
  },
  {
    "id": "FI-160",
    "level": "intermediate",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Diberikan operasi agregasi dengan fungsi `COUNT(col)` vs `COUNT(*)` pada kolom yang memiliki 2 nilai teks dan 1 nilai NULL. Berapakah hasil dari `COUNT(phone)` vs `COUNT(*)`?",
    "options": {
      "A": "COUNT(phone) = 2, sedangkan COUNT(*) = 3",
      "B": "Keduanya bernilai 3",
      "C": "Keduanya bernilai 2",
      "D": "COUNT(phone) melempar error"
    },
    "answer": "A",
    "explanation": {
      "correct": "`COUNT(*)` menghitung seluruh baris fisik tanpa memedulikan nilai di dalamnya (3 baris). Sebaliknya, `COUNT(column_name)` secara otomatis mengabaikan baris yang kolomnya bernilai NULL (hanya menghitung 2 baris non-null).",
      "A": "Opsi A benar karena COUNT(col) mengabaikan baris bernilai NULL sedangkan COUNT(*) menghitung semua baris.",
      "B": "Opsi B salah karena COUNT(col) tidak menyertakan NULL.",
      "C": "Opsi C salah karena COUNT(*) tidak mengabaikan NULL.",
      "D": "Opsi D salah karena COUNT(col) sah mengevaluasi data bernilai null."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-161",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Tiga bagian penyusun struktur JSON Web Token (JWT) yang dipisahkan oleh tanda titik (`.`) adalah:",
    "options": {
      "A": "Header, Payload, dan Signature",
      "B": "Username, Password, dan Token",
      "C": "Origin, Method, dan Status",
      "D": "Host, Path, dan Query"
    },
    "answer": "A",
    "explanation": {
      "correct": "Format token JWT terbagi menjadi 3 bagian base64url-encoded: `Header` (metadata algoritma enkripsi), `Payload` (klaim identitas dan data pengguna), dan `Signature` (tanda tangan kriptografis untuk memverifikasi integritas token).",
      "A": "Opsi A benar sesuai standar spesifikasi RFC 7519 JWT.",
      "B": "Opsi B salah karena password tidak pernah disimpan di dalam token JWT.",
      "C": "Opsi C salah karena itu adalah komponen HTTP request.",
      "D": "Opsi D salah karena itu adalah struktur URL."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-162",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "debug",
    "question": "Permintaan HTTP POST dari frontend React ke Spring Boot diblokir oleh browser dengan pesan: 'CORS Preflight Did Not Succeed'. Metode HTTP apakah yang dikirimkan browser pada fase Preflight tersebut?",
    "options": {
      "A": "OPTIONS",
      "B": "GET",
      "C": "HEAD",
      "D": "TRACE"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sebelum mengirim permintaan lintas origin yang kompleks (menggunakan JSON body atau custom header), browser secara otomatis mengirimkan request Preflight menggunakan metode HTTP `OPTIONS` untuk menanyakan izin ke server.",
      "A": "Opsi A benar karena HTTP OPTIONS adalah metode resmi request Preflight CORS.",
      "B": "Opsi B salah karena GET bukan metode preflight.",
      "C": "Opsi C salah karena HEAD mengambil header respon tanpa body.",
      "D": "Opsi D salah karena TRACE untuk echo diagnostik."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-163",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Mengapa metode HTTP POST dikatakan 'Non-Idempotent' sedangkan PUT dikatakan 'Idempotent'?",
    "options": {
      "A": "Mengirim request POST yang sama 5 kali akan membuat 5 data baru di server, sedangkan mengirim request PUT yang sama 5 kali akan menghasilkan state akhir data yang tetap sama di server",
      "B": "POST lebih cepat daripada PUT",
      "C": "PUT hanya bisa digunakan untuk menghapus data",
      "D": "POST tidak mendukung format JSON"
    },
    "answer": "A",
    "explanation": {
      "correct": "Idempotensi berarti pemanggilan berulang kali dengan payload yang sama tidak mengubah hasil akhir sistem di luar panggilan pertama. POST menciptakan entitas baru setiap kali dipanggil, sedangkan PUT menggantikan state objek pada URI target ke kondisi yang sama.",
      "A": "Opsi A benar karena mendefinisikan perbedaan sifat idempotensi antara POST dan PUT secara akurat.",
      "B": "Opsi B salah karena kecepatan tidak menentukan idempotensi.",
      "C": "Opsi C salah karena penghapusan menggunakan DELETE.",
      "D": "Opsi D salah karena POST sepenuhnya mendukung JSON."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-164",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi klausa header HTTP Cache-Control berikut agar respon API tidak boleh disimpan di cache browser maupun perantara proxy sama sekali:\n\n```typescript\nHTTP/1.1 200 OK\n___: no-store\nContent-Type: application/json\n\n{\"sensitive\": \"data\"}\n```",
    "options": {
      "A": "Cache-Control: no-store",
      "B": "Cache-Control: max-age=3600",
      "C": "Cache-Control: public",
      "D": "Cache-Control: revalidate"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Cache-Control: no-store` adalah instruksi paling ketat yang melarang browser dan proxy perantara menyimpan salinan respon dalam bentuk apa pun ke dalam disk atau memori cache.",
      "A": "Opsi A benar karena no-store sepenuhnya menolak penyimpanan respon ke cache.",
      "B": "Opsi B salah karena max-age=3600 menginstruksikan cache disimpan selama 1 jam.",
      "C": "Opsi C salah karena public mengizinkan respon di-cache oleh proxy publik (CDN).",
      "D": "Opsi D salah karena revalidate tetap mengizinkan caching dengan validasi ulang."
    },
    "jobId": "fullstack",
    "code": "HTTP/1.1 200 OK\n___: no-store\nContent-Type: application/json\n\n{\"sensitive\": \"data\"}"
  },
  {
    "id": "FI-165",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa fungsi utama dari refresh token dalam arsitektur otentikasi berbasis JWT?",
    "options": {
      "A": "Memungkinkan klien mendapatkan access token baru yang berumur pendek tanpa harus meminta pengguna memasukkan ulang username dan password secara berulang kali",
      "B": "Menghapus cookie browser otomatis",
      "C": "Mempercepat koneksi internet pengguna",
      "D": "Menggantikan peran database user"
    },
    "answer": "A",
    "explanation": {
      "correct": "Access token sengaja dibuat berumur pendek (misal 15 menit) untuk membatasi dampak jika token dicuri. Refresh token disimpan dengan aman (misal HttpOnly cookie) dan digunakan untuk memperpanjang sesi pengguna secara transparan.",
      "A": "Opsi A benar karena refresh token memperbarui access token kedaluwarsa secara aman tanpa re-login manual.",
      "B": "Opsi B salah karena bukan pembersih cookie.",
      "C": "Opsi C salah karena tidak memengaruhi kecepatan transmisi fisik.",
      "D": "Opsi D salah karena data kredensial tetap divalidasi di database."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-166",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Jika klien mengirim request yang melanggar batasan kuota Rate Limiting server API (terlalu banyak request dalam waktu singkat), status code HTTP berapakah yang akan diterima klien?",
    "options": {
      "A": "429 Too Many Requests",
      "B": "400 Bad Request",
      "C": "503 Service Unavailable",
      "D": "403 Forbidden"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 429 Too Many Requests menandakan bahwa pengguna telah mengirim terlalu banyak permintaan dalam jangka waktu tertentu (melebihi ambang batas rate limit). Respon umumnya menyertakan header `Retry-After`.",
      "A": "Opsi A benar karena 429 adalah status standar untuk rate limiting API.",
      "B": "Opsi B salah karena 400 adalah error sintaks payload request.",
      "C": "Opsi C salah karena 503 adalah overload tak terduga pada server.",
      "D": "Opsi D salah karena 403 adalah penolakan hak akses peran (role)."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-167",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "best-practice",
    "question": "Bagaimana strategi API Versioning yang paling umum dan mudah di-cache pada arsitektur REST modern?",
    "options": {
      "A": "URI Path Versioning (contoh: `/api/v1/users` dan `/api/v2/users`)",
      "B": "Mengubah nama database di server setiap kali merilis versi baru",
      "C": "Menghapus endpoint lama seketika tanpa pemberitahuan",
      "D": "Menambahkan versi di body JSON request"
    },
    "answer": "A",
    "explanation": {
      "correct": "URI Path Versioning (`/v1/`, `/v2/`) sangat eksplisit, mudah diuji via browser/Postman, didukung secara alami oleh load balancer dan proxy cache CDN, serta tidak merusak backward compatibility klien versi lama.",
      "A": "Opsi A benar karena URI path versioning adalah strategi paling populer dan ramah cache.",
      "B": "Opsi B salah karena perubahan skema DB tidak boleh mengharuskan ganti database fisik.",
      "C": "Opsi C salah karena melanggar backward compatibility dan merusak aplikasi klien lama.",
      "D": "Opsi D salah karena body versioning menyulitkan routing di layer API Gateway."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-168",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa fungsi dari header HTTP `ETag` (Entity Tag) dalam optimasi web API?",
    "options": {
      "A": "Menyediakan identifier hash unik untuk versi resource tertentu yang memungkinkan klien melakukan conditional request (`If-None-Match`), mengembalikan status 304 Not Modified jika data belum berubah",
      "B": "Menyimpan token autentikasi pengguna",
      "C": "Mengukur kecepatan server",
      "D": "Mengatur ukuran font respon teks"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ETag` memungkinkan mekanisme web caching cerdas: klien mengirimkan ETag lama via `If-None-Match`. Jika data di server belum berubah, server cukup mengembalikan `304 Not Modified` tanpa payload body, menghemat bandwidth.",
      "A": "Opsi A benar karena ETag adalah mekanisme validasi cache kondisional berbasis konten.",
      "B": "Opsi B salah karena token auth ada di header Authorization.",
      "C": "Opsi C salah karena bukan metrik latensi.",
      "D": "Opsi D salah karena tidak terkait styling visual."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-169",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi status code HTTP berikut saat server berhasil memproses request tetapi resource yang diminta tidak mengalami perubahan sejak terakhir di-cache (Conditional GET):\n\n```typescript\nHTTP/1.1 ___ Not Modified\nETag: \"33a64df551425fcc55e4d42a148795d9f25f89d4\"\nDate: Sun, 08 Sep 2026 10:00:00 GMT\n```",
    "options": {
      "A": "304 Not Modified",
      "B": "200 OK",
      "C": "204 No Content",
      "D": "412 Precondition Failed"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 304 Not Modified memberi tahu browser bahwa data yang ada di cache lokal masih segar (fresh) dan valid, sehingga browser dapat menggunakan salinan cache tanpa perlu mengunduh ulang data body dari server.",
      "A": "Opsi A benar karena 304 menandakan validitas cache lokal.",
      "B": "Opsi B salah karena 200 mengirimkan seluruh body data baru.",
      "C": "Opsi C salah karena 204 untuk aksi sukses tanpa body (seperti DELETE).",
      "D": "Opsi D salah karena 412 adalah kegagalan prakondisi."
    },
    "jobId": "fullstack",
    "code": "HTTP/1.1 ___ Not Modified\nETag: \"33a64df551425fcc55e4d42a148795d9f25f89d4\"\nDate: Sun, 08 Sep 2026 10:00:00 GMT"
  },
  {
    "id": "FI-170",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "debug",
    "question": "Sebuah endpoint GET `/api/download` mengembalikan file PDF, tetapi browser selalu menampilkan file tersebut sebagai teks acak biner di layar alih-alih mengunduhnya sebagai file. Header apa yang lupa dikirimkan server?\n\n```typescript\nHTTP/1.1 200 OK\nContent-Type: application/pdf\n___: attachment; filename=\"laporan-keuangan.pdf\"\n```",
    "options": {
      "A": "Content-Disposition: attachment; filename=\"laporan.pdf\"",
      "B": "Content-Type: text/plain",
      "C": "Accept-Encoding: gzip",
      "D": "Cache-Control: private"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header `Content-Disposition: attachment; filename=\"filename.ext\"` menginstruksikan browser untuk memicu dialog pengunduhan (download file) ke disk lokal, alih-alih mencoba menampilkannya langsung di viewport browser (inline).",
      "A": "Opsi A benar karena Content-Disposition attachment memicu browser download prompt.",
      "B": "Opsi B salah karena text/plain justru memicu browser merendernya sebagai teks mentah.",
      "C": "Opsi C salah karena Accept-Encoding adalah header kompresi data.",
      "D": "Opsi D salah karena Cache-Control tidak mengatur perilaku download browser."
    },
    "jobId": "fullstack",
    "code": "HTTP/1.1 200 OK\nContent-Type: application/pdf\n___: attachment; filename=\"laporan-keuangan.pdf\""
  },
  {
    "id": "FI-171",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa risiko keamanan jika JSON Web Token (JWT) disimpan di browser menggunakan `localStorage` dibandingkan cookie bertanda `HttpOnly`?",
    "options": {
      "A": "Token di `localStorage` dapat dibaca langsung oleh kode JavaScript berbahaya jika aplikasi rentan terhadap serangan Cross-Site Scripting (XSS)",
      "B": "Token di localStorage otomatis terhapus setiap 5 detik",
      "C": "localStorage tidak mendukung teks string",
      "D": "Cookie HttpOnly tidak aman untuk HTTPS"
    },
    "answer": "A",
    "explanation": {
      "correct": "`localStorage` dapat diakses oleh skrip JavaScript apa pun di origin yang sama. Jika ada celah XSS (Cross-Site Scripting), penyerang dapat mengekstrak token dan membajak sesi. Cookie `HttpOnly` memblokir akses JavaScript ke cookie.",
      "A": "Opsi A benar karena penyimpanan di localStorage rentan terhadap pencurian via serangan XSS.",
      "B": "Opsi B salah karena localStorage bersifat persisten tanpa batas waktu otomatis.",
      "C": "Opsi C salah karena localStorage khusus menyimpan data bertipe string.",
      "D": "Opsi D salah karena HttpOnly cookie dengan flag Secure adalah standar proteksi tertinggi di HTTPS."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-172",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Klien mengirim request dengan header `Accept: application/xml`, namun server hanya mendukung JSON dan menolak request. Status code berapakah yang secara standar dikembalikan oleh server?",
    "options": {
      "A": "406 Not Acceptable",
      "B": "415 Unsupported Media Type",
      "C": "400 Bad Request",
      "D": "500 Internal Server Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 406 Not Acceptable dikembalikan saat server tidak dapat menghasilkan representasi konten yang cocok dengan daftar kriteria negosiasi konten yang diminta klien pada header `Accept`.",
      "A": "Opsi A benar karena 406 adalah respon standar kegagalan Content Negotiation pada header Accept.",
      "B": "Opsi B salah karena 415 terjadi jika Content-Type payload yang dikirim klien tidak didukung server.",
      "C": "Opsi C salah karena 400 untuk malformed request.",
      "D": "Opsi D salah karena 500 untuk crash internal server."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-173",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "best-practice",
    "question": "Bagaimana cara terbaik mendesain pagination untuk dataset tabel yang sangat dinamis di mana data baru terus bertambah setiap detik (seperti feed media sosial)?",
    "options": {
      "A": "Cursor-based Pagination (menggunakan pointer ID/timestamp terakhir) alih-alih Offset-based Pagination",
      "B": "Offset-based Pagination dengan OFFSET 100000",
      "C": "Mengambil seluruh database sekaligus ke memori",
      "D": "Menghapus data lama secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Cursor-based Pagination (Keyset pagination) menyelesaikan dua masalah besar Offset pagination: 1) Mencegah masalah item terlewat atau terduplikasi saat ada data baru disisipkan di atas, 2) Performa query konstan O(log n) menggunakan indeks tanpa harus memindai offset jutaan baris.",
      "A": "Opsi A benar karena Cursor-based pagination stabil untuk dataset dinamis bervolume tinggi.",
      "B": "Opsi B salah karena Offset besar sangat lambat di database dan rawan duplikasi baris.",
      "C": "Opsi C salah karena memicu kehabisan memori (OOM).",
      "D": "Opsi D salah karena data historis tidak boleh dihapus sembarangan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-174",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Status code HTTP 409 Conflict paling tepat digunakan pada skenario apa?",
    "options": {
      "A": "Ketika permintaan tidak dapat diproses karena konflik dengan state resource saat ini di server (misalnya mencoba mendaftarkan username/email yang sudah terdaftar)",
      "B": "Ketika klien salah mengetikkan URL",
      "C": "Ketika koneksi internet terputus",
      "D": "Ketika password salah"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 409 Conflict digunakan saat request klien secara sintaksis valid, tetapi bertentangan dengan aturan integritas bisnis atau state resource di server (seperti duplicate key conflict pada pendaftaran email unik).",
      "A": "Opsi A benar sesuai definisi semantik HTTP 409 Conflict.",
      "B": "Opsi B salah karena salah URL menghasilkan 404.",
      "C": "Opsi C salah karena putus koneksi tidak menerima respon HTTP.",
      "D": "Opsi D salah karena password salah menghasilkan 401 Unauthorized."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-175",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi klausa header HTTP berikut saat klien mengirim format body data yang tidak didukung oleh server:\n\n```typescript\nHTTP/1.1 415 ___\nContent-Type: application/json\n\n{\"error\": \"Unsupported payload format. Expected application/json.\"}\n```",
    "options": {
      "A": "415 Unsupported Media Type",
      "B": "406 Not Acceptable",
      "C": "400 Bad Request",
      "D": "502 Bad Gateway"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 415 Unsupported Media Type dikembalikan saat server menolak memproses request karena format payload body (yang dinyatakan di header `Content-Type`, misal XML) tidak didukung oleh endpoint yang dituju.",
      "A": "Opsi A benar karena 415 mengindikasikan payload media type tidak didukung.",
      "B": "Opsi B salah karena 406 untuk kegagalan header Accept klien.",
      "C": "Opsi C salah karena 400 untuk bad request umum.",
      "D": "Opsi D salah karena 502 adalah error gateway proxy."
    },
    "jobId": "fullstack",
    "code": "HTTP/1.1 415 ___\nContent-Type: application/json\n\n{\"error\": \"Unsupported payload format. Expected application/json.\"}"
  },
  {
    "id": "FI-176",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara enkripsi simetris (Symmetric Encryption, misal HMAC SHA-256) dan enkripsi asimetris (Asymmetric Encryption, misal RSA/ECDSA) dalam penandatanganan JWT?",
    "options": {
      "A": "Enkripsi simetris menggunakan satu kunci rahasia (secret key) yang sama untuk menandatangani dan memverifikasi token, sedangkan asimetris menggunakan pasangan Private Key untuk menandatangani dan Public Key untuk memverifikasi",
      "B": "Enkripsi simetris hanya bisa digunakan di localhost",
      "C": "Enkripsi asimetris tidak membutuhkan kunci sama sekali",
      "D": "Tidak ada perbedaan keamanan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Algoritma HMAC (HS256) membutuhkan kedua belah pihak berbagi secret key yang sama. Algoritma RSA (RS256) memungkinkan Auth Server memegang Private Key untuk issue token, sedangkan puluhan resource server/microservices lain cukup memegang Public Key untuk memverifikasi tanpa risiko kebocoran signing key.",
      "A": "Opsi A benar karena mendefinisikan perbedaan single secret key vs public-private key pair pada JWT.",
      "B": "Opsi B salah karena enkripsi simetris digunakan secara global di produksi.",
      "C": "Opsi C salah karena asimetris menggunakan sepasang kunci kriptografi.",
      "D": "Opsi D salah karena model distribusi kuncinya berbeda secara fundamental."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-177",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Klien mengirimkan request HTTP PUT ke `/api/products/1` dengan payload data lengkap baru. Jika resource ID 1 berhasil diperbarui, status code manakah yang paling tepat dikembalikan?\n\n```typescript\nPUT /api/products/1 HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{\"name\": \"Laptop Baru\", \"price\": 15000000}\n```",
    "options": {
      "A": "200 OK (atau 204 No Content)",
      "B": "201 Created",
      "C": "302 Found",
      "D": "400 Bad Request"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pembaruan resource yang sukses pada REST API secara standar mengembalikan status code `200 OK` jika disertai body data terbaru hasil pembaruan, atau `204 No Content` jika server tidak mengirimkan body respon.",
      "A": "Opsi A benar karena 200/204 adalah respon sukses resmi untuk operasi pembaruan PUT/PATCH.",
      "B": "Opsi B salah karena 201 Created khusus untuk pembuatan resource baru (kecuali jika PUT membuat resource baru secara idempotensi).",
      "C": "Opsi C salah karena 302 adalah redirection.",
      "D": "Opsi D salah karena 400 adalah client error."
    },
    "jobId": "fullstack",
    "code": "PUT /api/products/1 HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{\"name\": \"Laptop Baru\", \"price\": 15000000}"
  },
  {
    "id": "FI-178",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "debug",
    "question": "Sebuah frontend SPA melempar error saat memanggil API: 'Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource'. Di layer manakah perbaikan harus dilakukan?",
    "options": {
      "A": "Di sisi Backend Web Server / API Gateway (dengan menambahkan konfigurasi header CORS `Access-Control-Allow-Origin`)",
      "B": "Di pengaturan sistem operasi Windows klien",
      "C": "Di modem router WiFi",
      "D": "Di compiler TypeScript frontend"
    },
    "answer": "A",
    "explanation": {
      "correct": "Error CORS selalu disebabkan oleh ketiadaan header izin yang sesuai dari sisi backend server penerima request. Backend wajib merespon request preflight OPTIONS dengan menyertakan header `Access-Control-Allow-Origin: <origin>`.",
      "A": "Opsi A benar karena konfigurasi CORS wajib diselesaikan di layer backend server.",
      "B": "Opsi B salah karena bukan pengaturan OS.",
      "C": "Opsi C salah karena bukan masalah routing jaringan fisik.",
      "D": "Opsi D salah karena compiler TypeScript tidak mengatur header HTTP runtime."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-179",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa kepanjangan dan konsep dari HATEOAS dalam kematangan arsitektur REST (Richardson Maturity Model Level 3)?",
    "options": {
      "A": "Hypermedia As The Engine Of Application State (respon API menyertakan link/hypermedia dinamis yang memandu klien mengenai aksi atau navigasi apa saja yang dapat dilakukan selanjutnya)",
      "B": "Hypertext Access To External Online Application Software",
      "C": "Header Authentication Token Encryption And Output Access System",
      "D": "Host Authorization To Encrypted Open Api Service"
    },
    "answer": "A",
    "explanation": {
      "correct": "HATEOAS adalah puncak kematangan REST (Level 3): alih-alih klien menghafal endpoint URL statis, server menyertakan tautan kontekstual (hypermedia links seperti `_links: { self: ..., cancel: ..., pay: ... }`) pada body respon.",
      "A": "Opsi A benar sesuai singkatan dan prinsip resmi HATEOAS pada arsitektur REST.",
      "B": "Opsi B salah karena bukan singkatan HATEOAS.",
      "C": "Opsi C salah karena bukan singkatan HATEOAS.",
      "D": "Opsi D salah karena bukan singkatan HATEOAS."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-180",
    "level": "intermediate",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi header HTTP yang dikirimkan oleh klien untuk memverifikasi apakah server mendukung kompresi data:\n\n```typescript\nGET /api/data HTTP/1.1\nHost: api.example.com\n___: gzip, deflate, br\n```",
    "options": {
      "A": "Accept-Encoding: gzip, deflate, br",
      "B": "Content-Encoding: application/json",
      "C": "Compression-Type: zip",
      "D": "Transfer-Type: fast"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header `Accept-Encoding` dikirimkan oleh browser/klien HTTP untuk memberi tahu algoritma kompresi data apa saja yang dapat dipahami dan di-dekompresi oleh klien (seperti gzip atau brotli `br`).",
      "A": "Opsi A benar karena Accept-Encoding adalah header negosiasi algoritma kompresi data.",
      "B": "Opsi B salah karena Content-Encoding dikirim oleh pihak yang mengompresi payload.",
      "C": "Opsi C salah karena bukan header standar.",
      "D": "Opsi D salah karena bukan header standar."
    },
    "jobId": "fullstack",
    "code": "GET /api/data HTTP/1.1\nHost: api.example.com\n___: gzip, deflate, br"
  },
  {
    "id": "FI-181",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara perintah `git merge` dan `git rebase` saat menggabungkan perubahan dari satu branch ke branch lain?",
    "options": {
      "A": "`git merge` membuat satu commit gabungan baru (merge commit) dan mempertahankan riwayat percabangan asli, sedangkan `git rebase` memindahkan basis branch dan menulis ulang riwayat commit secara linear",
      "B": "git rebase menghapus semua kode di branch target",
      "C": "git merge hanya bisa dijalankan satu kali per repository",
      "D": "git rebase tidak mendukung resolusi konflik"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git merge` mempertahankan topologi grafik commit asli non-destruktif dengan merge commit. `git rebase` mengambil commit dari feature branch dan memainkannya kembali satu per satu di atas ujung branch target, menciptakan riwayat lurus linear tanpa merge commit.",
      "A": "Opsi A benar karena membedakan pembuatan merge commit vs riwayat linearitas rebase.",
      "B": "Opsi B salah karena rebase tidak menghapus kode melainkan menata ulang commit.",
      "C": "Opsi C salah karena merge dapat dijalankan berkali-kali seumur hidup proyek.",
      "D": "Opsi D salah karena rebase mendukung penyelesaian konflik per-commit."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-182",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "completion",
    "question": "Lengkapi perintah Git berikut untuk menyimpan sementara perubahan kode di working directory yang belum siap di-commit tanpa harus membuang perubahannya:\n\n```typescript\n# Simpan perubahan lokal ke stash tanpa commit\n___\n```",
    "options": {
      "A": "git stash",
      "B": "git hide",
      "C": "git backup",
      "D": "git pause"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git stash` menyimpan modifikasi yang belum di-commit ke dalam stack penyimpanan sementara dan mengembalikan working directory ke status bersih (clean HEAD). Perubahan dapat dikembalikan nanti via `git stash pop`.",
      "A": "Opsi A benar karena git stash adalah perintah resmi penyimpanan sementara di Git.",
      "B": "Opsi B salah karena git hide bukan perintah Git.",
      "C": "Opsi C salah karena git backup bukan perintah bawaan.",
      "D": "Opsi D salah karena git pause bukan perintah Git."
    },
    "jobId": "fullstack",
    "code": "# Simpan perubahan lokal ke stash tanpa commit\n___"
  },
  {
    "id": "FI-183",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "output",
    "question": "Apa yang terjadi ketika Anda menjalankan perintah `git reset --soft HEAD~1`?",
    "options": {
      "A": "Commit terakhir dibatalkan, tetapi seluruh perubahan kode tetap berada di Staging Area (siap untuk di-commit ulang)",
      "B": "Seluruh file dan perubahan kode di commit terakhir dihapus permanen dari disk",
      "C": "Git membuat branch baru secara otomatis",
      "D": "Semua commit di repository terhapus"
    },
    "answer": "A",
    "explanation": {
      "correct": "`--soft` hanya memundurkan pointer HEAD branch sebanyak 1 commit tanpa menyentuh Staging Area (Index) maupun Working Directory, sehingga perubahan kode dari commit tersebut tetap aman dan berada dalam status staged.",
      "A": "Opsi A benar karena --soft mempertahankan perubahan di Staging Area.",
      "B": "Opsi B salah karena penghapusan permanen dari disk adalah perilaku `--hard`.",
      "C": "Opsi C salah karena tidak membuat branch baru.",
      "D": "Opsi D salah karena hanya memundurkan 1 commit."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-184",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Perintah Git manakah yang digunakan untuk menyalin (mengaplikasikan) satu commit spesifik dari branch lain ke branch aktif saat ini?",
    "options": {
      "A": "git cherry-pick <commit-hash>",
      "B": "git copy <commit-hash>",
      "C": "git clone --commit <hash>",
      "D": "git apply-commit <hash>"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git cherry-pick <hash>` memungkinkan pengembang memilih satu commit tertentu dari branch manapun dan menerapkannya sebagai commit baru di ujung branch yang sedang aktif saat ini.",
      "A": "Opsi A benar karena git cherry-pick adalah perintah resmi pengambilan commit tunggal.",
      "B": "Opsi B salah karena git copy bukan perintah Git.",
      "C": "Opsi C salah karena clone untuk mengunduh seluruh repositori.",
      "D": "Opsi D salah karena apply-commit bukan perintah bawaan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-185",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "best-practice",
    "question": "Mengapa melakukan `git push --force` pada branch utama publik (seperti `main` atau `master`) sangat berbahaya dan dilarang di tim profesional?",
    "options": {
      "A": "Dapat menimpa dan menghapus commit riwayat kerja developer lain di remote repository yang belum sempat ditarik, menyebabkan kehilangan kode tim",
      "B": "Menghapus akun GitHub seluruh tim",
      "C": "Menyebabkan server hosting Git mati permanen",
      "D": "Tidak berbahaya sama sekali"
    },
    "answer": "A",
    "explanation": {
      "correct": "`--force` memaksa remote branch mengikuti branch lokal kita, membuang commit-commit baru yang di-push oleh anggota tim lain jika history kita tidak sinkron. Jika benar-benar diperlukan, gunakan opsi yang lebih aman: `--force-with-lease`.",
      "A": "Opsi A benar karena force push menimpa history bersama dan memicu kehilangan pekerjaan anggota tim.",
      "B": "Opsi B salah karena tidak memengaruhi akun user.",
      "C": "Opsi C salah karena server Git tetap berjalan normal.",
      "D": "Opsi D salah karena ini adalah tindakan berisiko tinggi."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-186",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Apa tujuan utama dari proses 'Code Review' (Pull Request Review) dalam alur kerja SDLC tim perangkat lunak?",
    "options": {
      "A": "Menemukan bug lebih awal, memastikan kepatuhan terhadap standar arsitektur dan clean code, serta memfasilitasi pertukaran pengetahuan (knowledge sharing) antar anggota tim",
      "B": "Menilai kecepatan mengetik programmer",
      "C": "Menjalankan kompilasi otomatis tanpa campur tangan manusia",
      "D": "Menggantikan peran seluruh pengujian QA manual"
    },
    "answer": "A",
    "explanation": {
      "correct": "Code Review adalah proses peer-review kode sebelum di-merge ke branch utama untuk menjaga kualitas, keamanan, konsistensi kode, serta meminimalisir technical debt.",
      "A": "Opsi A benar karena merangkum manfaat kualitas, standarisasi, dan kolaborasi tim dari Code Review.",
      "B": "Opsi B salah karena bukan tes kecepatan mengetik.",
      "C": "Opsi C salah karena otomatisasi build adalah tugas CI (Continuous Integration).",
      "D": "Opsi D salah karena code review melengkapi, bukan meniadakan proses QA testing."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-187",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "completion",
    "question": "Lengkapi perintah Git berikut untuk melihat riwayat commit dalam format satu baris yang ringkas dan berbentuk diagram grafik cabang:\n\n```typescript\n# Menampilkan riwayat log git dengan grafik satu baris\n___\n```",
    "options": {
      "A": "git log --oneline --graph",
      "B": "git history --short",
      "C": "git branch --view",
      "D": "git show --summary"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git log --oneline --graph --all` adalah kombinasi flag yang sangat populer untuk memvisualisasikan pohon riwayat percabangan dan merge commit dalam format ASCII grafis yang rapi di terminal.",
      "A": "Opsi A benar karena flag --oneline --graph menghasilkan diagram log commit satu baris.",
      "B": "Opsi B salah karena git history bukan perintah bawaan.",
      "C": "Opsi C salah karena git branch untuk mengelola branch.",
      "D": "Opsi D salah karena git show untuk detail objek tertentu."
    },
    "jobId": "fullstack",
    "code": "# Menampilkan riwayat log git dengan grafik satu baris\n___"
  },
  {
    "id": "FI-188",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "debug",
    "question": "Saat melakukan `git merge`, terminal menampilkan pesan: `CONFLICT (content): Merge conflict in App.tsx`. Langkah apakah yang HARUS dilakukan developer sebelum menyelesaikan merge?\n\n```typescript\n<<<<<<< HEAD\nconst theme = 'dark';\n=======\nconst theme = 'light';\n>>>>>>> feature/theme\n```",
    "options": {
      "A": "Membuka file `App.tsx`, mencari conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), memilih kode yang benar, menyimpan file, menjalankan `git add App.tsx`, lalu `git commit`",
      "B": "Menghapus file App.tsx dari disk",
      "C": "Mematikan komputer secara paksa",
      "D": "Menjalankan git init ulang"
    },
    "answer": "A",
    "explanation": {
      "correct": "Merge conflict terjadi saat dua branch memodifikasi baris kode yang sama secara berbeda. Developer wajib menyelesaikan marker konflik secara manual, menandai file sebagai resolved dengan `git add`, lalu memfinalisasi commit.",
      "A": "Opsi A benar karena merinci langkah-langkah penyelesaian merge conflict secara tepat.",
      "B": "Opsi B salah karena menghapus file akan melenyapkan kode komponen.",
      "C": "Opsi C salah karena tidak menyelesaikan status konflik git.",
      "D": "Opsi D salah karena git init ulang akan merusak repositori lokal."
    },
    "jobId": "fullstack",
    "code": "<<<<<<< HEAD\nconst theme = 'dark';\n=======\nconst theme = 'light';\n>>>>>>> feature/theme"
  },
  {
    "id": "FI-189",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Dalam pipeline CI/CD (Continuous Integration / Continuous Deployment), tahapan 'Continuous Integration' berfokus pada:",
    "options": {
      "A": "Otomatisasi penggabungan kode secara rutin, menjalankan build otomatis, dan mengeksekusi seluruh rangkaian pengujian (automated tests) setiap kali ada kode baru yang di-push",
      "B": "Menghapus server setiap malam",
      "C": "Mengirimkan invoice tagihan ke klien",
      "D": "Menulis dokumentasi manual di Microsoft Word"
    },
    "answer": "A",
    "explanation": {
      "correct": "Prinsip utama CI adalah mengintegrasikan perubahan kode ke shared repository secara berkala dan memverifikasinya melalui automated build dan automated testing untuk mendeteksi error integrasi secepat mungkin.",
      "A": "Opsi A benar sesuai definisi dan tujuan Continuous Integration.",
      "B": "Opsi B salah karena CI bukan alat penghancur server.",
      "C": "Opsi C salah karena bukan sistem penagihan finansial.",
      "D": "Opsi D salah karena CI mengotomatisasi proses teknis pengujian dan build."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-190",
    "level": "intermediate",
    "topic": "Git & SDLC",
    "questionType": "output",
    "question": "Apa efek dari mengeksekusi perintah `git revert <commit-hash>`?",
    "options": {
      "A": "Membuat commit baru yang membalikkan (meniadakan) perubahan yang diperkenalkan oleh commit tersebut secara aman tanpa menulis ulang riwayat git publik",
      "B": "Menghapus commit tersebut dan seluruh commit setelahnya dari riwayat git",
      "C": "Menutup remote repository",
      "D": "Menghapus akun pembuat commit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Berbeda dengan `git reset` yang mengubah history, `git revert` adalah operasi non-destruktif yang membuat commit baru yang berisi inversi matematis/kode dari commit target, sangat aman digunakan pada branch publik.",
      "A": "Opsi A benar karena git revert membuat inverse commit baru tanpa mengubah riwayat sebelumnya.",
      "B": "Opsi B salah karena menghapus commit adalah perilaku git reset.",
      "C": "Opsi C salah karena tidak memengaruhi server repository.",
      "D": "Opsi D salah karena tidak berhubungan dengan akun pengguna."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-191",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengonversi kolom geometri database spasial menjadi format teks standar GeoJSON?",
    "options": {
      "A": "ST_AsGeoJSON(geom)",
      "B": "ST_ToGeoJSON(geom)",
      "C": "ST_FormatJSON(geom)",
      "D": "ST_ExportJSON(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_AsGeoJSON(geometry geom)` adalah fungsi bawaan PostGIS yang mengembalikan representasi string JSON dari objek geometri sesuai spesifikasi GeoJSON.",
      "A": "Opsi A benar karena ST_AsGeoJSON adalah nama fungsi resmi PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi resmi PostGIS."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-192",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "completion",
    "question": "Lengkapi query PostGIS berikut untuk menghitung jarak planar garis lurus dalam satuan koordinat antara dua titik geometri:\n\n```typescript\n-- Menghitung jarak planar 2D antara dua titik geometri:\nSELECT ___ AS distance_units;\n```",
    "options": {
      "A": "ST_Distance(geom1, geom2)",
      "B": "ST_Length(geom1, geom2)",
      "C": "ST_Range(geom1, geom2)",
      "D": "ST_Between(geom1, geom2)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Distance(geometry g1, geometry g2)` adalah fungsi PostGIS untuk mengukur jarak terpendek 2D Cartesian antara dua objek geometri.",
      "A": "Opsi A benar karena ST_Distance mengukur jarak antar geometri.",
      "B": "Opsi B salah karena ST_Length mengukur panjang garis LineString tunggal.",
      "C": "Opsi C salah karena ST_Range bukan fungsi jarak.",
      "D": "Opsi D salah karena bukan fungsi spasial."
    },
    "jobId": "fullstack",
    "code": "-- Menghitung jarak planar 2D antara dua titik geometri:\nSELECT ___ AS distance_units;"
  },
  {
    "id": "FI-193",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk memeriksa apakah sebuah titik (Point) berada di dalam area poligon (Polygon) secara spasial?",
    "options": {
      "A": "ST_Contains(polygon, point) atau ST_Within(point, polygon)",
      "B": "ST_Equals(polygon, point)",
      "C": "ST_Touches(polygon, point)",
      "D": "ST_Disjoint(polygon, point)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Contains(A, B)` bernilai true jika geometri B sepenuhnya berada di dalam area geometri A. `ST_Within(B, A)` adalah kebalikannya.",
      "A": "Opsi A benar karena ST_Contains dan ST_Within memeriksa relasi spasial 'di dalam'.",
      "B": "Opsi B salah karena ST_Equals memeriksa bentuk geometri yang identik persis.",
      "C": "Opsi C salah karena ST_Touches hanya bernilai true jika bersentuhan di batas tepi.",
      "D": "Opsi D salah karena ST_Disjoint bernilai true jika kedua geometri terpisah tanpa persinggungan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-194",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "output",
    "question": "Pada library peta web Leaflet.js, apa urutan argumen koordinat geografis yang wajib dipassing saat membuat marker `L.marker([lat, lng])`?",
    "options": {
      "A": "[Latitude, Longitude] (Lintang lalu Bujur)",
      "B": "[Longitude, Latitude] (Bujur lalu Lintang)",
      "C": "[Altitude, Latitude]",
      "D": "[X, Y] planar meter"
    },
    "answer": "A",
    "explanation": {
      "correct": "Penting untuk diingat: Leaflet.js menggunakan konvensi `[Latitude, Longitude]` (seperti `[-6.2, 106.8]`), BERBEDA dengan standar spesifikasi GeoJSON yang menggunakan urutan `[Longitude, Latitude]`.",
      "A": "Opsi A benar karena Leaflet.js menggunakan urutan [Latitude, Longitude].",
      "B": "Opsi B salah karena [Longitude, Latitude] adalah standar GeoJSON, bukan Leaflet API.",
      "C": "Opsi C salah karena ketinggian bukan koordinat 2D peta web.",
      "D": "Opsi D salah karena koordinat default Leaflet adalah derajat geografis WGS 84."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-195",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "debug",
    "question": "Marker Leaflet berikut tidak muncul di peta dan peta menampilkan error di console saat diklik. Kode yang ditulis: `L.marker([-6.2, 106.8]).bindPopup('Halo');`. Bagian apa yang kurang?",
    "options": {
      "A": "Lupa memanggil method `.addTo(map)` untuk menambahkan objek marker ke dalam instance peta aktif",
      "B": "Teks popup harus bertipe HTML file",
      "C": "Koordinat harus bilangan positif",
      "D": "Leaflet tidak mendukung popup pada marker"
    },
    "answer": "A",
    "explanation": {
      "correct": "Objek layer Leaflet (seperti Marker, Circle, GeoJSON) hanya dibuat di memori sebelum ditambahkan ke layer tampilan peta menggunakan method `.addTo(mapInstance)`.",
      "A": "Opsi A benar karena method `.addTo(map)` wajib dipanggil agar marker terdaftar di canvas/SVG peta.",
      "B": "Opsi B salah karena bindPopup menerima string teks biasa atau HTML bebas.",
      "C": "Opsi C salah karena koordinat lintang selatan bernilai negatif (valid).",
      "D": "Opsi D salah karena popup adalah fitur bawaan marker Leaflet."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-196",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Tipe indeks database spasial khusus apakah yang digunakan di PostgreSQL PostGIS untuk mengindeks kolom data geometri agar query spasial (seperti ST_Intersects, ST_DWithin) berjalan sangat cepat?",
    "options": {
      "A": "GiST (Generalized Search Tree) Index berbasis R-Tree Bounding Box",
      "B": "B-Tree Index biasa",
      "C": "Hash Index",
      "D": "Full-text GIN Index"
    },
    "answer": "A",
    "explanation": {
      "correct": "GiST index mengorganisasikan data spasial menggunakan bounding box (kotak batas koordinat minimum / BBox). Hal ini memungkinkan database mencari fitur yang beririsan dengan cepat tanpa memindai seluruh koordinat kompleks poligon.",
      "A": "Opsi A benar karena GiST R-Tree adalah indeks standar industri spasial di PostGIS.",
      "B": "Opsi B salah karena B-Tree standar 1D tidak dapat mengurutkan data koordinat multi-dimensi spasial 2D secara efisien.",
      "C": "Opsi C salah karena Hash index tidak mendukung range/overlap queries.",
      "D": "Opsi D salah karena GIN untuk pencarian array dan full-text JSON."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-197",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS berikut untuk membuat geometri titik (Point) dari nilai bujur 106.8 dan lintang -6.2 dengan koordinat sistem WGS 84 (SRID 4326):\n\n```typescript\n-- Membuat point berkoordinat WGS 84 (SRID 4326) di PostGIS:\nSELECT ___ AS geom_point;\n```",
    "options": {
      "A": "ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326)",
      "B": "ST_CreatePoint(106.8, -6.2, 4326)",
      "C": "ST_NewPoint(4326, 106.8, -6.2)",
      "D": "ST_PointWGS(106.8, -6.2)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_MakePoint(lon, lat)` membuat titik geometri dari koordinat X (longitude) dan Y (latitude). `ST_SetSRID(geom, 4326)` mengasosiasikan geometri tersebut dengan Spatial Reference ID 4326 (WGS 84).",
      "A": "Opsi A benar karena merupakan sintaks resmi PostGIS untuk pembuatan titik ber-SRID.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi resmi.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack",
    "code": "-- Membuat point berkoordinat WGS 84 (SRID 4326) di PostGIS:\nSELECT ___ AS geom_point;"
  },
  {
    "id": "FI-198",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "best-practice",
    "question": "Ketika aplikasi web GIS menampilkan puluhan ribu titik marker di peta Leaflet secara bersamaan, browser menjadi sangat lambat dan lag. Solusi arsitektur apakah yang paling direkomendasikan?",
    "options": {
      "A": "Menggunakan plugin Marker Clustering (seperti Leaflet.markercluster) atau beralih ke rendering berbasis Canvas / WebGL (seperti MapLibre / Vector Tiles)",
      "B": "Meminta pengguna memperbesar memori RAM komputernya",
      "C": "Menghapus peta dan menampilkan data berupa teks biasa",
      "D": "Mengurangi resolusi monitor komputer"
    },
    "answer": "A",
    "explanation": {
      "correct": "Merender ribuan DOM node marker individual membebani browser. Marker Clustering menggabungkan titik-titik yang berdekatan menjadi satu cluster saat di-zoom out, atau menggunakan Vector Tiles/Canvas rendering yang memanfaatkan akselerasi GPU browser.",
      "A": "Opsi A benar karena clustering dan vector tiles adalah solusi standar performa Web GIS.",
      "B": "Opsi B salah karena masalahnya ada pada batasan DOM browser, bukan spesifikasi hardware murni.",
      "C": "Opsi C salah karena membatalkan fitur peta yang dibutuhkan pengguna.",
      "D": "Opsi D salah karena resolusi monitor tidak mengurangi jumlah node DOM."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-199",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara tipe data `geometry` dan `geography` pada PostGIS?",
    "options": {
      "A": "`geometry` mengasumsikan permukaan bumi datar menggunakan koordinat planar kartesian Cartesian, sedangkan `geography` memperhitungkan kelengkungan permukaan bumi bulat (spheroid/great-circle) dengan satuan meter otomatis",
      "B": "geometry hanya untuk titik, geography untuk poligon",
      "C": "geography hanya bisa digunakan di Eropa",
      "D": "geometry tidak mendukung koordinat GPS"
    },
    "answer": "A",
    "explanation": {
      "correct": "`geometry` melakukan kalkulasi jarak dan luas berbasis bidang datar Cartesian. `geography` menghitung jarak geodesik di atas kurvatur bumi spheroid (satuan hasil `ST_Distance` pada geography langsung dalam meter, bukan derajat).",
      "A": "Opsi A benar karena membedakan model matematis planar (geometry) vs bola/ellipsoid (geography).",
      "B": "Opsi B salah karena keduanya mendukung semua tipe bentuk spasial (Point, Line, Polygon).",
      "C": "Opsi C salah karena berlaku untuk koordinat global seluruh bumi.",
      "D": "Opsi D salah karena geometry mendukung SRID GPS 4326."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FI-200",
    "level": "intermediate",
    "topic": "GIS Dasar",
    "questionType": "output",
    "question": "Diberikan operasi PostGIS `ST_Buffer(geom, distance)`. Bentuk geometri apakah yang dihasilkan jika fungsi buffer diterapkan pada sebuah titik (Point)?",
    "options": {
      "A": "Geometri Polygon berbentuk lingkaran (area radius penyangga mengelilingi titik tersebut)",
      "B": "Sebuah garis LineString lurus",
      "C": "Titik Point baru di lokasi lain",
      "D": "Nilai angka numerik luas"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Buffer(Point, r)` memperluas batas titik ke segala arah sejauh jarak r, menghasilkan poligon melingkar yang merepresentasikan zona penyangga (buffer zone) di sekitar lokasi titik tersebut.",
      "A": "Opsi A benar karena buffer di sekitar titik menghasilkan poligon area melingkar.",
      "B": "Opsi B salah karena buffer menghasilkan poligon area 2D, bukan garis 1D.",
      "C": "Opsi C salah karena bukan translasi titik.",
      "D": "Opsi D salah karena ST_Buffer menghasilkan geometri spasial, bukan nilai angka."
    },
    "jobId": "fullstack"
  }
];
