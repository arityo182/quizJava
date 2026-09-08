import { Question } from './types';

export const FULLSTACK_ADVANCED: Question[] = [
  {
    "id": "FA-001",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa hasil evaluasi tipe dari Conditional Type distributif berikut saat menerima union `string | number`?\n\n```typescript\ntype ToArray<T> = T extends any ? T[] : never;\ntype Result = ToArray<string | number>;\n```",
    "options": {
      "A": "string[] | number[]",
      "B": "(string | number)[]",
      "C": "never",
      "D": "any[]"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, conditional types bersifat distributif terhadap naked type parameter dalam union: `ToArray<string | number>` dievaluasi sebagai `ToArray<string> | ToArray<number>` yang menghasilkan `string[] | number[]`.",
      "A": "Opsi A benar karena evaluasi distributif memisahkan setiap anggota union.",
      "B": "Opsi B salah karena (string | number)[] hanya terjadi jika distribusi dicegah dengan tuple `[T] extends [any]`.",
      "C": "Opsi C salah karena bukan never.",
      "D": "Opsi D salah karena tipe dipertahankan secara spesifik."
    },
    "jobId": "fullstack",
    "code": "type ToArray<T> = T extends any ? T[] : never;\ntype Result = ToArray<string | number>;"
  },
  {
    "id": "FA-002",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Apa fungsi dari keyword `infer` pada Conditional Types di TypeScript?",
    "options": {
      "A": "Memperkenalkan variabel tipe baru yang dideduksi secara dinamis dari dalam tipe lain selama evaluasi pola conditional type",
      "B": "Menghapus type checking secara instan",
      "C": "Mengubah fungsi synchronous menjadi asynchronous",
      "D": "Memaksa compiler mengabaikan error tipe"
    },
    "answer": "A",
    "explanation": {
      "correct": "Keyword `infer` hanya dapat digunakan di dalam klausul `extends` pada conditional types untuk mengekstrak dan menangkap tipe yang belum diketahui sebelumnya.",
      "A": "Opsi A benar sesuai peran deduksi tipe dinamis keyword infer.",
      "B": "Opsi B salah karena infer adalah fitur type deduction tingkat lanjut.",
      "C": "Opsi C salah karena infer beroperasi pada level tipe murni di waktu kompilasi.",
      "D": "Opsi D salah karena tidak ada kaitannya dengan pengabaian error."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FA-003",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Diberikan utility type berikut yang menggunakan `infer`. Apa hasil dari tipe `UnpackPromise`?\n\n```typescript\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;\ntype UnpackPromise = Unwrap<Promise<string>>; // Result?\n```",
    "options": {
      "A": "string",
      "B": "Promise<string>",
      "C": "number",
      "D": "void"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe `Promise<string>` cocok dengan pola `Promise<infer U>`. Variabel tipe `U` diinferensikan sebagai `string`, sehingga mengembalikan tipe `string` murni tanpa bungkus Promise.",
      "A": "Opsi A benar karena infer U mengekstrak tipe string dari Promise.",
      "B": "Opsi B salah karena tipe Promise telah di-unwrap.",
      "C": "Opsi C salah karena tipe yang di-resolve adalah string.",
      "D": "Opsi D salah karena Promise membungkus string, bukan void."
    },
    "jobId": "fullstack",
    "code": "type Unwrap<T> = T extends Promise<infer U> ? U : T;\ntype UnpackPromise = Unwrap<Promise<string>>; // Result?"
  },
  {
    "id": "FA-004",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi mapped type berikut dengan Key Remapping (`as`) untuk mengubah setiap nama properti objek menjadi diawali kata 'get' berhuruf besar (getter methods):\n\n```typescript\ntype Getters<T> = {\n  ___\n};\n```",
    "options": {
      "A": "[K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];",
      "B": "[K in keyof T]: () => T[K];",
      "C": "[K of keyof T as 'get']: T[K];",
      "D": "[K in T as 'getter']: () => T[K];"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fitur Key Remapping via `as` di TypeScript (sejak 4.1) memungkinkan transformasi nama properti menggunakan template literal types: `[K in keyof T as \\`get\\${Capitalize<string & K>}\\`]: () => T[K];`.",
      "A": "Opsi A benar karena sintaks Key Remapping dengan Capitalize mengubah nama field menjadi method getter.",
      "B": "Opsi B salah karena tidak mengubah nama key.",
      "C": "Opsi C salah karena sintaks dan tipe remapping salah.",
      "D": "Opsi D salah karena membuat semua nama properti menjadi literal 'getter'."
    },
    "jobId": "fullstack",
    "code": "type Getters<T> = {\n  ___\n};"
  },
  {
    "id": "FA-005",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Tipe rekursif JSONValue berikut menghasilkan error 'Type alias circularly references itself'. Bagaimana cara mendefinisikan tipe data JSON rekursif yang valid di TypeScript modern?\n\n```typescript\ntype JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue };\n```",
    "options": {
      "A": "TypeScript 3.7+ mendukung type alias rekursif langsung untuk interface atau tuple/array: `type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue };`",
      "B": "Gunakan tipe any untuk seluruh nilai JSON",
      "C": "JSON tidak bisa dimodelkan dengan TypeScript",
      "D": "Ubah semua tipe menjadi string"
    },
    "answer": "A",
    "explanation": {
      "correct": "TypeScript modern mendukung rekursi tipe langsung pada interface dan type alias asalkan referensi rekursif berada di dalam array atau index signature objek.",
      "A": "Opsi A benar karena pola rekursif ini adalah standar pemodelan JSON di TypeScript.",
      "B": "Opsi B salah karena any menghilangkan manfaat type safety.",
      "C": "Opsi C salah karena TypeScript sangat mampu memodelkan tipe rekursif.",
      "D": "Opsi D salah karena nilai JSON mencakup boolean, number, dan null."
    },
    "jobId": "fullstack",
    "code": "type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue };"
  },
  {
    "id": "FA-006",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa hasil dari evaluasi tipe `IsNever<never>` pada kode conditional type berikut?\n\n```typescript\ntype IsNever<T> = T extends never ? 'YES' : 'NO';\ntype Result = IsNever<never>; // Output?\n```",
    "options": {
      "A": "\"YES\"",
      "B": "\"NO\"",
      "C": "never",
      "D": "boolean"
    },
    "answer": "C",
    "explanation": {
      "correct": "`never` adalah empty union. Ketika `never` dipassing ke distributive conditional type naked `T extends never`, kondisi tidak pernah dievaluasi dan langsung menghasilkan `never`.",
      "A": "Opsi A salah karena distribusi union kosong never menghasilkan never.",
      "B": "Opsi B salah karena cabang false tidak tercapai.",
      "C": "Opsi C benar karena distributive conditional type pada naked never selalu menghasilkan never.",
      "D": "Opsi D salah karena kembaliannya bukan boolean primitif."
    },
    "jobId": "fullstack",
    "code": "type IsNever<T> = T extends never ? 'YES' : 'NO';\ntype Result = IsNever<never>; // Output?"
  },
  {
    "id": "FA-007",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "best-practice",
    "question": "Bagaimana cara mencegah distributive behavior pada Conditional Type jika kita ingin memperlakukan union `T` sebagai satu kesatuan utuh?\n\n```typescript\n// Non-distributive conditional type\ntype NonDistributive<T> = [T] extends [any] ? T[] : never;\n```",
    "options": {
      "A": "Membungkus operand di kedua sisi `extends` dengan tanda kurung siku tuple (contoh: `[T] extends [any]`)",
      "B": "Menambahkan kata kunci final",
      "C": "Menggunakan modifier readonly",
      "D": "Mengubah union menjadi enum"
    },
    "answer": "A",
    "explanation": {
      "correct": "Membungkus tipe parameter dengan tanda kurung siku `[T] extends [U]` menonaktifkan sifat distributif, sehingga union diperlakukan sebagai tipe tunggal.",
      "A": "Opsi A benar karena pembungkusan tuple `[T]` adalah teknik resmi menonaktifkan distribusi union.",
      "B": "Opsi B salah karena final bukan keyword TypeScript.",
      "C": "Opsi C salah karena readonly tidak mengontrol distribusi conditional type.",
      "D": "Opsi D salah karena tidak menyelesaikan kebutuhan conditional type."
    },
    "jobId": "fullstack",
    "code": "// Non-distributive conditional type\ntype NonDistributive<T> = [T] extends [any] ? T[] : never;"
  },
  {
    "id": "FA-008",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "concept",
    "question": "Dalam teori sistem tipe TypeScript, apa yang dimaksud dengan sifat 'Covariance' dan 'Contravariance' pada parameter dan return type fungsi?",
    "options": {
      "A": "Fungsi bersifat Kovarian pada return type dan Kontravarian pada parameter type saat flag `strictFunctionTypes` aktif",
      "B": "Parameter dan return type sama-sama selalu bersifat invariant",
      "C": "Kovarian berarti tipe dapat diubah secara bebas saat runtime",
      "D": "Tidak ada perbedaan, keduanya sinonim"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dengan `strictFunctionTypes: true`, subtipe fungsi mensyaratkan return type lebih spesifik/sempit (Covariant) dan parameter type lebih luas/umum (Contravariant).",
      "A": "Opsi A benar sesuai aturan subtyping sistem tipe fungsi TypeScript.",
      "B": "Opsi B salah karena perilakunya berbeda antara parameter vs return value.",
      "C": "Opsi C salah karena bukan konversi runtime.",
      "D": "Opsi D salah karena aturan variance-nya berlawanan arah."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FA-009",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi utility type `DeepReadonly<T>` rekursif berikut agar membuat seluruh properti dan nested object di dalamnya menjadi readonly:\n\n```typescript\ntype DeepReadonly<T> = ___;\n```",
    "options": {
      "A": "T extends Function ? T : T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]> } : T",
      "B": "readonly [P in keyof T]: T[P]",
      "C": "T extends object ? readonly T : T",
      "D": "Readonly<T>"
    },
    "answer": "A",
    "explanation": {
      "correct": "`DeepReadonly` rekursif memeriksa apakah T adalah fungsi (dipertahankan) atau objek. Jika objek, mapped type memetakan setiap properti P menjadi `readonly` dan memanggil `DeepReadonly<T[P]>` secara rekursif.",
      "A": "Opsi A benar karena mengimplementasikan rekursi mendalam pada nested objects.",
      "B": "Opsi B salah karena hanya shallow readonly satu tingkat.",
      "C": "Opsi C salah karena sintaks tidak valid.",
      "D": "Opsi D salah karena Readonly bawaan hanya shallow."
    },
    "jobId": "fullstack",
    "code": "type DeepReadonly<T> = ___;"
  },
  {
    "id": "FA-010",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa hasil dari operasi tipe Mapped Type Modifier `-readonly` berikut?\n\n```typescript\ntype Mutable<T> = {\n  -readonly [P in keyof T]: T[P];\n};\ntype Result = Mutable<{ readonly id: number; readonly name: string }>;\n```",
    "options": {
      "A": "{ id: number; name: string } (seluruh properti menjadi mutable)",
      "B": "Tipe error",
      "C": "{ readonly id: number; readonly name: string }",
      "D": "never"
    },
    "answer": "A",
    "explanation": {
      "correct": "Prefiks tanda minus `-` pada modifier mapped type (seperti `-readonly` atau `-?`) menghapus modifier tersebut dari tipe asal. `-readonly` mengubah properti yang awalnya readonly menjadi mutable biasa.",
      "A": "Opsi A benar karena modifier minus (-readonly) membatalkan sifat readonly properti.",
      "B": "Opsi B salah karena sintaks `-readonly` sepenuhnya valid di TypeScript.",
      "C": "Opsi C salah karena readonly dihilangkan, bukan dipertahankan.",
      "D": "Opsi D salah karena tipe objek tetap ada."
    },
    "jobId": "fullstack",
    "code": "type Mutable<T> = {\n  -readonly [P in keyof T]: T[P];\n};\ntype Result = Mutable<{ readonly id: number; readonly name: string }>;"
  },
  {
    "id": "FA-011",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "debug",
    "question": "Fungsi berikut memunculkan error: 'A rest parameter must be of an array type'. Bagaimana cara memperbaiki parameter rest dengan generic tuple?\n\n```typescript\nfunction call<T>(fn: (...args: T) => void, ...args: T): void {\n  fn(...args);\n}\n```",
    "options": {
      "A": "function call<T extends any[]>(fn: (...args: T) => void, ...args: T): void",
      "B": "function call<T>(fn: (...args: T) => void, args: T): void",
      "C": "function call(fn: Function, args: any): void",
      "D": "function call<T>(...args: T[]): void"
    },
    "answer": "A",
    "explanation": {
      "correct": "Rest parameter `...args: T` mewajibkan generic T dibatasi oleh constraint array/tuple: `<T extends any[]>`. Ini memungkinkan TypeScript menangkap dan memvalidasi tipe argumen fungsi secara presisi.",
      "A": "Opsi A benar karena constraint `T extends any[]` melegalkan rest parameter tuple.",
      "B": "Opsi B salah karena T tanpa constraint array ditolak pada rest parameter.",
      "C": "Opsi C salah karena Function dan any merusak type safety parameter.",
      "D": "Opsi D salah karena T[] mengubah tuple posisi menjadi array homogen biasa."
    },
    "jobId": "fullstack",
    "code": "function call<T>(fn: (...args: T) => void, ...args: T): void {\n  fn(...args);\n}"
  },
  {
    "id": "FA-012",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa kegunaan dari 'Branded Types' (Nominal Typing emulation) di TypeScript?\n\n```typescript\ntype UserId = string & { readonly __brand: unique symbol };\ntype OrderId = string & { readonly __brand: unique symbol };\n```",
    "options": {
      "A": "Memaksa TypeScript membedakan tipe string yang secara semantik berbeda (misal UserId vs OrderId) meskipun keduanya berakar dari tipe primitif string, mencegah salah passing ID",
      "B": "Membuat logo merek dagang pada kode",
      "C": "Mengubah string menjadi objek JSON",
      "D": "Mengurangi pemakaian memori RAM"
    },
    "answer": "A",
    "explanation": {
      "correct": "Branded Types menambahkan tag unik tiruan (brand) pada tipe primitif sehingga compiler menolak penugasan string biasa ke `UserId`, mencegah bug fatal seperti memasukkan `orderId` ke fungsi yang membutuhkan `userId`.",
      "A": "Opsi A benar karena Branded Types menyimulasikan sistem Nominal Typing untuk mencegah salah passing variabel primitif.",
      "B": "Opsi B salah karena bukan logo grafis.",
      "C": "Opsi C salah karena tetap berupa string murni saat runtime.",
      "D": "Opsi D salah karena tidak memengaruhi alokasi memori runtime."
    },
    "jobId": "fullstack",
    "code": "type UserId = string & { readonly __brand: unique symbol };\ntype OrderId = string & { readonly __brand: unique symbol };"
  },
  {
    "id": "FA-013",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic berikut agar mendeteksi apakah dua tipe X dan Y identik sama persis (Strict Type Equality):\n\n```typescript\ntype Equals<X, Y> = ___;\n```",
    "options": {
      "A": "(<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false",
      "B": "X extends Y ? (Y extends X ? true : false) : false",
      "C": "X === Y ? true : false",
      "D": "X extends Y ? true : false"
    },
    "answer": "A",
    "explanation": {
      "correct": "Teknik tingkat lanjut untuk mengecek kesetaraan tipe sejati mengandalkan aturan inferensi fungsi generic compiler: `(<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false`.",
      "A": "Opsi A benar karena teknik identitas fungsi generic ini adalah standar industri untuk pengujian tipe eksak.",
      "B": "Opsi B salah karena gagal membedakan `any` dari tipe lain.",
      "C": "Opsi C salah karena `===` bukan operator compile-time type.",
      "D": "Opsi D salah karena hanya memeriksa subtyping satu arah."
    },
    "jobId": "fullstack",
    "code": "type Equals<X, Y> = ___;"
  },
  {
    "id": "FA-014",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa output dari utility type `Awaited` yang diterapkan pada nested promise bertingkat `Promise<Promise<number>>`?\n\n```typescript\ntype Result = Awaited<Promise<Promise<number>>>;\n```",
    "options": {
      "A": "number",
      "B": "Promise<number>",
      "C": "Promise<Promise<number>>",
      "D": "any"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Awaited<T>` secara rekursif membuka (unwraps) seluruh lapisan Promise yang bersarang hingga menemukan tipe nilai dasar yang sebenarnya (dalam hal ini `number`).",
      "A": "Opsi A benar karena Awaited bersifat rekursif dalam membuka nested promises.",
      "B": "Opsi B salah karena lapisan Promise dalam juga di-unwrap.",
      "C": "Opsi C salah karena tipe Promise tidak dipertahankan.",
      "D": "Opsi D salah karena tipe konkret number dipertahankan."
    },
    "jobId": "fullstack",
    "code": "type Result = Awaited<Promise<Promise<number>>>;"
  },
  {
    "id": "FA-015",
    "level": "advanced",
    "topic": "TypeScript",
    "questionType": "output",
    "question": "Apa fungsi dari tag JSDoc `@template` pada kode JavaScript murni saat menggunakan TypeScript compiler?\n\n```typescript\n/**\n * @template T\n * @param {T} val\n * @returns {T}\n */\nfunction identity(val) { return val; }\n```",
    "options": {
      "A": "Mendefinisikan parameter generic pada fungsi atau kelas JavaScript tanpa perlu mengubah sintaks file menjadi .ts",
      "B": "Membuat template HTML",
      "C": "Mengubah file menjadi CSS",
      "D": "Menghapus komentar dari file"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@template T` di JSDoc memungkinkan programmer JavaScript vanilla mendefinisikan generics yang dipahami oleh IDE dan type-checker TypeScript.",
      "A": "Opsi A benar karena @template adalah deklarasi parameter generic pada JSDoc.",
      "B": "Opsi B salah karena bukan template engine visual.",
      "C": "Opsi C salah karena bukan stylesheet.",
      "D": "Opsi D salah karena bukan minifier."
    },
    "jobId": "fullstack",
    "code": "/**\n * @template T\n * @param {T} val\n * @returns {T}\n */\nfunction identity(val) { return val; }"
  },
  {
    "id": "FA-016",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa fungsi dari hook `useTransition` yang diperkenalkan pada React 18 Concurrent Mode?\n\n```typescript\nconst [isPending, startTransition] = useTransition();\nstartTransition(() => {\n  setQuery(input);\n});\n```",
    "options": {
      "A": "Menandai pembaruan state tertentu sebagai transisi non-urgent (prioritas rendah) yang dapat disela (interruptible) agar antarmuka pengguna tetap responsif",
      "B": "Mengatur animasi transisi CSS",
      "C": "Mengalihkan rute halaman server",
      "D": "Mengurangi resolusi gambar"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useTransition()` mengembalikan flag `isPending` dan fungsi `startTransition`. Pembaruan state di dalam startTransition dianggap berprioritas rendah dan dapat disela jika ada interaksi mendesak.",
      "A": "Opsi A benar sesuai mekanisme kerja Concurrent React useTransition.",
      "B": "Opsi B salah karena bukan library animasi CSS.",
      "C": "Opsi C salah karena bukan router navigasi.",
      "D": "Opsi D salah karena tidak memanipulasi gambar."
    },
    "jobId": "fullstack",
    "code": "const [isPending, startTransition] = useTransition();\nstartTransition(() => {\n  setQuery(input);\n});"
  },
  {
    "id": "FA-017",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Perhatikan kode berikut yang menggunakan `useDeferredValue`. Kapan nilai `deferredQuery` diperbarui oleh React?\n\n```typescript\nfunction SearchPage() {\n  const [query, setQuery] = useState('');\n  const deferredQuery = useDeferredValue(query);\n  return <Results list={deferredQuery} />;\n}\n```",
    "options": {
      "A": "Setelah render input utama selesai dan browser memiliki waktu luang (idle time), menunda render berat daftar hasil pencarian",
      "B": "Tepat 5 detik setelah query berubah",
      "C": "Secara sinkron pada saat yang persis sama dengan query",
      "D": "Hanya saat tombol enter ditekan"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useDeferredValue(query)` menunda pembaruan nilai tersebut ke siklus render berikutnya sehingga pembaruan UI prioritas tinggi (input teks) tidak terhambat.",
      "A": "Opsi A benar karena useDeferredValue menunda render komponen berat agar UI tetap responsif.",
      "B": "Opsi B salah karena bukan setTimeout berbasis detik statis.",
      "C": "Opsi C salah karena sifatnya deferred (tertunda).",
      "D": "Opsi D salah karena tidak bergantung pada tombol enter."
    },
    "jobId": "fullstack",
    "code": "function SearchPage() {\n  const [query, setQuery] = useState('');\n  const deferredQuery = useDeferredValue(query);\n  return <Results list={deferredQuery} />;\n}"
  },
  {
    "id": "FA-018",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Komponen pembungkus generic `forwardRef` berikut menghasilkan type error. Bagaimana cara mengetik komponen generic dengan forwardRef di TypeScript?\n\n```typescript\nconst Select = React.forwardRef(<T,>(props: SelectProps<T>, ref: React.Ref<HTMLSelectElement>) => {\n  // Implementation\n});\n```",
    "options": {
      "A": "Gunakan type assertion helper atau buat wrapper function: `const Select = React.forwardRef(...) as <T>(props: SelectProps<T> & { ref?: ... }) => React.ReactElement`",
      "B": "Hapus kata kunci generic T dan gunakan any",
      "C": "forwardRef tidak bisa digunakan di TypeScript",
      "D": "Ubah komponen menjadi class component"
    },
    "answer": "A",
    "explanation": {
      "correct": "`React.forwardRef` bawaan merusak type argument generic. Pola standar komunitas adalah melakukan cast type assertion pada hasil forwardRef agar signature generic-nya terpelihara.",
      "A": "Opsi A benar karena type cast wrapper adalah teknik standar penggunaan forwardRef bersama generics.",
      "B": "Opsi B salah karena any menghilangkan type safety.",
      "C": "Opsi C salah karena forwardRef sepenuhnya didukung di TypeScript.",
      "D": "Opsi D salah karena functional components adalah arsitektur utama React modern."
    },
    "jobId": "fullstack",
    "code": "const Select = React.forwardRef(<T,>(props: SelectProps<T>, ref: React.Ref<HTMLSelectElement>) => {\n  // Implementation\n});"
  },
  {
    "id": "FA-019",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi method siklus hidup Class Component berikut yang wajib diimplementasikan agar kelas dapat bertindak sebagai 'Error Boundary':\n\n```typescript\nclass ErrorBoundary extends React.Component<Props, State> {\n  static ___ (error: Error) {\n    return { hasError: true };\n  }\n}\n```",
    "options": {
      "A": "static getDerivedStateFromError(error) dan componentDidCatch(error, info)",
      "B": "componentWillUnmount()",
      "C": "renderError()",
      "D": "catchError()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Error Boundary di React wajib berupa Class Component yang mendefinisikan `static getDerivedStateFromError(error)` dan/atau `componentDidCatch(error, errorInfo)`.",
      "A": "Opsi A benar karena kedua method tersebut adalah syarat resmi Error Boundary di React.",
      "B": "Opsi B salah karena componentWillUnmount untuk cleanup biasa.",
      "C": "Opsi C salah karena renderError bukan lifecycle method React.",
      "D": "Opsi D salah karena catchError bukan method resmi."
    },
    "jobId": "fullstack",
    "code": "class ErrorBoundary extends React.Component<Props, State> {\n  static ___ (error: Error) {\n    return { hasError: true };\n  }\n}"
  },
  {
    "id": "FA-020",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa perbedaan utama antara `useSyncExternalStore` (React 18) dan kombinasi tradisional `useEffect` + `useState` saat berlangganan ke state store eksternal?\n\n```typescript\nconst state = useSyncExternalStore(store.subscribe, store.getSnapshot);\n```",
    "options": {
      "A": "`useSyncExternalStore` mencegah fenomena 'Tearing' saat rendering concurrent berjalan",
      "B": "useSyncExternalStore berjalan di web worker",
      "C": "useSyncExternalStore hanya bisa digunakan di Node.js",
      "D": "Tidak ada perbedaan, hanya nama alias baru"
    },
    "answer": "A",
    "explanation": {
      "correct": "Concurrent Rendering di React 18 dapat menjeda dan melanjutkan render. Jika store eksternal bermutasi di tengah proses render, komponen berbeda bisa merender data inkonsisten (Tearing). `useSyncExternalStore` menjamin pembacaan sinkron aman.",
      "A": "Opsi A benar sesuai tujuan utama diciptakannya hook useSyncExternalStore di React 18.",
      "B": "Opsi B salah karena tidak berjalan di web worker.",
      "C": "Opsi C salah karena merupakan hook client/SSR React.",
      "D": "Opsi D salah karena memecahkan masalah tearing yang fundamental."
    },
    "jobId": "fullstack",
    "code": "const state = useSyncExternalStore(store.subscribe, store.getSnapshot);"
  },
  {
    "id": "FA-021",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Bagaimana cara terbaik mengimplementasikan custom comparator pada argumen kedua `React.memo(Component, arePropsEqual)` untuk objek props yang dalam?\n\n```typescript\nexport const MemoizedCard = React.memo(Card, (prev, next) => {\n  return prev.item.id === next.item.id && prev.item.updatedAt === next.item.updatedAt;\n});\n```",
    "options": {
      "A": "Membandingkan hanya properti-properti primitif yang krusial bagi render komponen tersebut, tanpa `JSON.stringify`",
      "B": "Selalu menggunakan `JSON.stringify(prevProps) === JSON.stringify(nextProps)` pada setiap render",
      "C": "Mengembalikan `true` secara konstan tanpa pemeriksaan",
      "D": "Menggunakan operator `==` pada seluruh objek props"
    },
    "answer": "A",
    "explanation": {
      "correct": "`JSON.stringify` sangat lambat dan memakan banyak alokasi CPU pada objek besar. Best practice adalah membandingkan field ID atau versi state spesifik yang memengaruhi tampilan.",
      "A": "Opsi A benar karena komparasi selektif efisien dan terhindar dari overhead parsing JSON.",
      "B": "Opsi B salah karena JSON.stringify lambat dan gagal pada properti fungsi.",
      "C": "Opsi C salah karena return true konstan membuat komponen tidak pernah memperbarui tampilan.",
      "D": "Opsi D salah karena komparasi referensi objek selalu bernilai false jika referensi baru."
    },
    "jobId": "fullstack",
    "code": "export const MemoizedCard = React.memo(Card, (prev, next) => {\n  return prev.item.id === next.item.id && prev.item.updatedAt === next.item.updatedAt;\n});"
  },
  {
    "id": "FA-022",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa yang dikembalikan oleh hook `useImperativeHandle` pada kode berikut ke parent component yang memegang `ref`?\n\n```typescript\nuseImperativeHandle(ref, () => ({\n  focusInput() {\n    inputRef.current?.focus();\n  }\n}));\n```",
    "options": {
      "A": "Objek khusus yang hanya mengekspos method `{ focusInput: () => void }` alih-alih seluruh elemen DOM",
      "B": "Elemen DOM input murni",
      "C": "null",
      "D": "String ID elemen"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useImperativeHandle(ref, () => ({ focusInput: () => ... }))` memungkinkan komponen anak menyesuaikan instance nilai ref yang diekspos ke parent.",
      "A": "Opsi A benar karena mengkustomisasi method publik yang diekspos melalui ref.",
      "B": "Opsi B salah karena node DOM asli disembunyikan.",
      "C": "Opsi C salah karena objek handle dikembalikan ke ref.",
      "D": "Opsi D salah karena bukan string ID."
    },
    "jobId": "fullstack",
    "code": "useImperativeHandle(ref, () => ({\n  focusInput() {\n    inputRef.current?.focus();\n  }\n}));"
  },
  {
    "id": "FA-023",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi deklarasi Higher-Order Component (HOC) dengan TypeScript berikut agar komponen yang dibungkus tetap mempertahankan tipe props aslinya:\n\n```typescript\nexport function withAuth<P extends object>(Wrapped: React.ComponentType<P>): React.FC<P> {\n  return (props: P) => <Wrapped {...props} />;\n}\n```",
    "options": {
      "A": "function withAuth<P extends object>(Component: React.ComponentType<P>): React.FC<P>",
      "B": "function withAuth(Component: any): any",
      "C": "function withAuth<T>(Component: T): T",
      "D": "function withAuth(Component: ReactNode): ReactElement"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pengetikan HOC yang type-safe menggunakan generic constraint `<P extends object>` yang menerima `React.ComponentType<P>` dan mengembalikan `React.FC<P>`.",
      "A": "Opsi A benar karena signature generic mempertahankan integritas props tipe P.",
      "B": "Opsi B salah karena any menghilangkan pemeriksaan tipe props.",
      "C": "Opsi C salah karena T terlalu umum tanpa batas tipe komponen.",
      "D": "Opsi D salah karena ReactNode bukan tipe callable komponen."
    },
    "jobId": "fullstack",
    "code": "export function withAuth<P extends object>(Wrapped: React.ComponentType<P>): React.FC<P> {\n  return (props: P) => <Wrapped {...props} />;\n}"
  },
  {
    "id": "FA-024",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Custom hook `useDebounce` berikut memunculkan bug: nilai yang di-debounce tidak pernah berubah. Apa kesalahannya?\n\n```typescript\nfunction useDebounce<T>(value: T, delay: number): T {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const h = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(h);\n  }, []); // Bug: dependensi kosong\n  return debounced;\n}\n```",
    "options": {
      "A": "Array dependensi `useEffect` kosong `[]` sehingga efek tidak pernah dieksekusi ulang saat parameter `value` berubah",
      "B": "setTimeout tidak diizinkan di React",
      "C": "Delay 500 terlalu cepat",
      "D": "useState harus bernilai string"
    },
    "answer": "A",
    "explanation": {
      "correct": "Agar timer debounce di-reset dan dijalankan ulang setiap kali pengguna mengetik karakter baru, variabel `value` (dan `delay`) WAJIB dimasukkan ke dalam dependency array: `[value, delay]`.",
      "A": "Opsi A benar karena dependensi kosong menyebabkan efek hanya berjalan sekali saat mount.",
      "B": "Opsi B salah karena setTimeout adalah Web API standar yang sering digunakan.",
      "C": "Opsi C salah karena 500ms adalah durasi debounce yang sangat wajar.",
      "D": "Opsi D salah karena generic hook mendukung tipe apa saja."
    },
    "jobId": "fullstack",
    "code": "function useDebounce<T>(value: T, delay: number): T {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const h = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(h);\n  }, []); // Bug: dependensi kosong\n  return debounced;\n}"
  },
  {
    "id": "FA-025",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa fungsi dari atribut `key` jika digunakan pada komponen utuh di luar list (contoh: `<UserProfile key={userId} />`)?\n\n```typescript\n// Reset form state otomatis saat activeId berubah\n<Editor key={activeId} id={activeId} />\n```",
    "options": {
      "A": "Memerintahkan React untuk mereset seluruh local state internal komponen dan membuat ulang (re-mount) instance komponen dari awal ketika userId berubah",
      "B": "Mencegah komponen dari re-render",
      "C": "Menghapus komponen dari memori",
      "D": "Mengenkripsi data profil pengguna"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mengganti prop `key` pada sebuah komponen memberi tahu React bahwa ini adalah entitas baru yang berbeda. React akan meng-unmount instance lama dan me-mount instance baru yang bersih.",
      "A": "Opsi A benar karena perubahan key mereset state dan me-remount komponen secara deklaratif.",
      "B": "Opsi B salah karena justru memicu siklus re-mount penuh.",
      "C": "Opsi C salah karena komponen baru tetap dibuat.",
      "D": "Opsi D salah karena bukan fitur enkripsi."
    },
    "jobId": "fullstack",
    "code": "// Reset form state otomatis saat activeId berubah\n<Editor key={activeId} id={activeId} />"
  },
  {
    "id": "FA-026",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Diberikan kode berikut. Kapan fungsi pembersih `cleanup` dipanggil pada pembaruan state berturut-turut?\n\n```typescript\nuseEffect(() => {\n  console.log('Connect:', id);\n  return () => console.log('Disconnect:', id);\n}, [id]);\n```",
    "options": {
      "A": "Dipanggil SEBELUM callback efek berikutnya dieksekusi dengan nilai state baru, dan saat komponen unmount",
      "B": "Dipanggil hanya sekali saat browser ditutup",
      "C": "Dipanggil tepat setelah efek berikutnya selesai",
      "D": "Tidak pernah dipanggil jika state tidak null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Siklus pembersihan React: saat nilai dependensi berubah, React terlebih dahulu menjalankan fungsi cleanup dari render sebelumnya untuk membersihkan efek lama, barulah mengeksekusi callback efek render baru.",
      "A": "Opsi A benar sesuai siklus eksekusi cleanup function useEffect.",
      "B": "Opsi B salah karena cleanup berjalan di setiap re-render dependensi.",
      "C": "Opsi C salah karena cleanup berjalan sebelum efek berikutnya dimulai.",
      "D": "Opsi D salah karena cleanup selalu dipanggil saat terjadi perubahan."
    },
    "jobId": "fullstack",
    "code": "useEffect(() => {\n  console.log('Connect:', id);\n  return () => console.log('Disconnect:', id);\n}, [id]);"
  },
  {
    "id": "FA-027",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Manakah pendekatan state management yang paling scalable untuk aplikasi fullstack kompleks dengan ribuan state server dan interaksi cache asinkron?",
    "options": {
      "A": "Memisahkan Server State (menggunakan TanStack Query / RTK Query) dari Client UI State (menggunakan Zustand / Context ringan)",
      "B": "Menyimpan seluruh data API, status loading, dan cache ke dalam satu Context API global tunggal",
      "C": "Menghindari penggunaan state dan selalu memanggil fetch di setiap komponen",
      "D": "Menyimpan seluruh state di URL query parameter"
    },
    "answer": "A",
    "explanation": {
      "correct": "Server state memiliki karakteristik asinkron dan butuh invalidation/caching. Memisahkannya dari Client UI state mencegah re-render cascade dan menjaga arsitektur tetap bersih.",
      "A": "Opsi A benar karena pemisahan server state vs client state adalah standar arsitektur modern.",
      "B": "Opsi B salah karena satu Context raksasa memicu re-render seluruh aplikasi.",
      "C": "Opsi C salah karena menyebabkan banjir request jaringan.",
      "D": "Opsi D salah karena URL memiliki keterbatasan kapasitas data."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FA-028",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa peran dari fungsi `startTransition` di React 18?\n\n```typescript\nstartTransition(() => {\n  setFilter(newFilter);\n});\n```",
    "options": {
      "A": "Membungkus pembaruan state agar diproses dengan prioritas transisi non-urgent, menjaga antarmuka tetap interaktif",
      "B": "Membuat transisi halaman menjadi animasi 3D",
      "C": "Mengubah state menjadi persistent di database",
      "D": "Menonaktifkan garbage collection"
    },
    "answer": "A",
    "explanation": {
      "correct": "`startTransition(() => { setState(newValue); })` memberitahu React bahwa perubahan state ini dapat ditunda jika ada input pengguna yang lebih mendesak.",
      "A": "Opsi A benar sesuai definisi dan mekanisme kerja startTransition di React 18.",
      "B": "Opsi B salah karena bukan engine animasi 3D.",
      "C": "Opsi C salah karena state React tetap berada di memori client.",
      "D": "Opsi D salah karena tidak terkait engine garbage collection."
    },
    "jobId": "fullstack",
    "code": "startTransition(() => {\n  setFilter(newFilter);\n});"
  },
  {
    "id": "FA-029",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi pengetikan generic komponen polymorphic `Box` berikut yang dapat menerima prop 'as' untuk merender tag HTML dinamis:\n\n```typescript\ntype BoxProps<E extends React.ElementType> = {\n  as?: E;\n  children?: React.ReactNode;\n} & React.ComponentPropsWithoutRef<E>;\n```",
    "options": {
      "A": "<E extends React.ElementType = 'div'>({ as, ...props }: BoxProps<E>)",
      "B": "<E = any>({ as, ...props }: any)",
      "C": "({ as: string, ...props })",
      "D": "<E extends HTMLElement>({ as, ...props })"
    },
    "answer": "A",
    "explanation": {
      "correct": "Polymorphic Components di React menggunakan `React.ElementType` untuk prop `as`, memungkinkan komponen merender elemen HTML dinamis lengkap dengan type checking atribut HTML elemen target.",
      "A": "Opsi A benar karena React.ElementType adalah tipe standar polymorphic component.",
      "B": "Opsi B salah karena any menghilangkan type safety atribut HTML.",
      "C": "Opsi C salah karena string tidak menyediakan type inference atribut spesifik elemen.",
      "D": "Opsi D salah karena HTMLElement adalah tipe node DOM, bukan tipe tag/komponen."
    },
    "jobId": "fullstack",
    "code": "type BoxProps<E extends React.ElementType> = {\n  as?: E;\n  children?: React.ReactNode;\n} & React.ComponentPropsWithoutRef<E>;"
  },
  {
    "id": "FA-030",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "debug",
    "question": "Refactoring komponen ke `useEffect` menyebabkan pemanggilan API berjalan ganda di development mode. Mengapa ini terjadi?\n\n```typescript\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    "options": {
      "A": "Bukan bug; React 18 `<StrictMode>` sengaja me-mount, me-unmount, dan me-mount ulang komponen di development mode untuk menemukan memory leak",
      "B": "Ini adalah bug fatal React 18 yang belum diperbaiki",
      "C": "Browser Chrome memiliki bug jaringan ganda",
      "D": "Server API salah merespon"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di React 18 development mode dengan `<React.StrictMode>`, React menjalankan efek dua kali (mount -> unmount -> mount) untuk memverifikasi bahwa effect memiliki fungsi cleanup yang simetris.",
      "A": "Opsi A benar karena StrictMode double invocation sengaja didesain untuk audit ketahanan efek samping.",
      "B": "Opsi B salah karena ini adalah fitur yang memang disengaja.",
      "C": "Opsi C salah karena bukan bug browser.",
      "D": "Opsi D salah karena bukan kesalahan server."
    },
    "jobId": "fullstack",
    "code": "<React.StrictMode>\n  <App />\n</React.StrictMode>"
  },
  {
    "id": "FA-031",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Diberikan pemanggilan hook `useInsertionEffect` di React 18. Kapan hook ini dieksekusi oleh React?\n\n```typescript\nuseInsertionEffect(() => {\n  insertRule(rule);\n}, [rule]);\n```",
    "options": {
      "A": "Dieksekusi SEBELUM semua mutasi DOM terjadi, dirancang khusus untuk library CSS-in-JS menyuntikkan tag `<style>` secara dinamis",
      "B": "Dieksekusi setelah browser melukis layar",
      "C": "Dieksekusi saat halaman ditutup",
      "D": "Dieksekusi di web worker"
    },
    "answer": "A",
    "explanation": {
      "correct": "`useInsertionEffect` berjalan sebelum mutasi DOM dimulai, mencegah browser menghitung ulang style berulang kali (layout thrashing) saat tag style disuntikkan secara dinamis.",
      "A": "Opsi A benar sesuai dokumentasi resmi React untuk library CSS-in-JS injection.",
      "B": "Opsi B salah karena itu adalah timing useEffect biasa.",
      "C": "Opsi C salah karena berjalan di setiap siklus render persiapan.",
      "D": "Opsi D salah karena berjalan sinkron di main thread."
    },
    "jobId": "fullstack",
    "code": "useInsertionEffect(() => {\n  insertRule(rule);\n}, [rule]);"
  },
  {
    "id": "FA-032",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa kelemahan utama dari pola perancangan 'Render Props' di era React Hooks modern?\n\n```typescript\n// Render props nesting:\n<Consumer>{val1 => <Consumer2>{val2 => ...}</Consumer2>}</Consumer>\n```",
    "options": {
      "A": "Dapat menimbulkan 'Wrapper Hell' dan callback nesting yang dalam di JSX, sedangkan Custom Hooks menyelesaikannya dengan sintaks linear datar",
      "B": "Render props tidak bisa digunakan dengan TypeScript",
      "C": "Render props membuat memori bocor",
      "D": "Render props melanggar aturan browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "Custom Hooks menggantikan sebagian besar kebutuhan Render Props dengan kode imperatif yang datar dan mudah dibaca tanpa pembungkusan JSX bertingkat.",
      "A": "Opsi A benar karena Custom Hooks menyederhanakan arsitektur pemisahan logika tanpa nesting wrapper.",
      "B": "Opsi B salah karena Render Props didukung penuh oleh TypeScript.",
      "C": "Opsi C salah karena Render Props tidak otomatis memicu memory leak.",
      "D": "Opsi D salah karena sepenuhnya legal di JavaScript."
    },
    "jobId": "fullstack",
    "code": "// Render props nesting:\n<Consumer>{val1 => <Consumer2>{val2 => ...}</Consumer2>}</Consumer>"
  },
  {
    "id": "FA-033",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "completion",
    "question": "Lengkapi tipe generic `forwardRef` berikut agar komponen MyInput mengekspos elemen `HTMLInputElement` dengan props `InputProps`:\n\n```typescript\nexport const CustomInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (\n  <input ref={ref} {...props} />\n));\n```",
    "options": {
      "A": "React.forwardRef<HTMLInputElement, InputProps>((props, ref) => ...)",
      "B": "React.forwardRef<InputProps, HTMLInputElement>((props, ref) => ...)",
      "C": "React.forwardRef(HTMLInputElement, InputProps)",
      "D": "React.forwardRef<Element>(props, ref)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Urutan parameter generic pada `React.forwardRef<RefType, PropsType>` adalah: parameter pertama adalah tipe Ref (`HTMLInputElement`), dan parameter kedua adalah tipe Props (`InputProps`).",
      "A": "Opsi A benar karena urutan generic adalah `<T_Ref, P_Props>`.",
      "B": "Opsi B salah karena urutannya terbalik.",
      "C": "Opsi C salah karena generic harus berada di dalam kurung siku lancip.",
      "D": "Opsi D salah karena Element terlalu umum."
    },
    "jobId": "fullstack",
    "code": "export const CustomInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (\n  <input ref={ref} {...props} />\n));"
  },
  {
    "id": "FA-034",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "best-practice",
    "question": "Mengapa sebaiknya menghindari penyimpanan data yang diturunkan (Derived State) ke dalam `useState` terpisah?\n\n```typescript\n// Hindari:\n// const [fullName, setFullName] = useState('');\n// Gunakan:\nconst fullName = `${firstName} ${lastName}`;\n```",
    "options": {
      "A": "Menimbulkan risiko redundansi dan inkonsistensi state saat data sumber berubah; sebaiknya hitung langsung saat render atau gunakan `useMemo`",
      "B": "Karena useState hanya boleh dipanggil satu kali per komponen",
      "C": "Karena JavaScript melarang kalkulasi di dalam fungsi render",
      "D": "Agar kode menjadi lebih panjang"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika suatu nilai dapat dihitung langsung dari state yang ada, menyimpannya di state tersendiri membutuhkan sinkronisasi via `useEffect` yang rawan bug dan memicu re-render ekstra.",
      "A": "Opsi A benar karena derived state harus dihitung saat render guna menjaga Single Source of Truth.",
      "B": "Opsi B salah karena komponen boleh memanggil useState berkali-kali.",
      "C": "Opsi C salah karena komputasi langsung di render phase adalah pola idiomatis React.",
      "D": "Opsi D salah karena best practice justru mempersingkat kode."
    },
    "jobId": "fullstack",
    "code": "// Hindari:\n// const [fullName, setFullName] = useState('');\n// Gunakan:\nconst fullName = `${firstName} ${lastName}`;"
  },
  {
    "id": "FA-035",
    "level": "advanced",
    "topic": "React + TypeScript",
    "questionType": "output",
    "question": "Apa yang terjadi jika terjadi error JavaScript runtime di dalam method `render` komponen anak dan tidak ada Error Boundary di atasnya?\n\n```typescript\nfunction BrokenChild() {\n  throw new Error('Crash!');\n  return <div>OK</div>;\n}\n```",
    "options": {
      "A": "Seluruh antarmuka pohon komponen React akan unmount (menghilang dari layar menjadi halaman putih kosong)",
      "B": "Hanya komponen anak yang hilang dan komponen lain tetap normal",
      "C": "Browser otomatis me-reload halaman",
      "D": "Aplikasi beralih ke mode offline"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di React 16+, unhandled JavaScript error yang tidak ditangkap oleh Error Boundary akan menyebabkan seluruh pohon komponen di-unmount, menampilkan layar putih kosong.",
      "A": "Opsi A benar karena filosofi React adalah lebih baik menghapus UI rusak daripada menampilkan data yang korup.",
      "B": "Opsi B salah karena tanpa Error Boundary seluruh pohon di-unmount.",
      "C": "Opsi C salah karena React tidak memicu reload halaman otomatis.",
      "D": "Opsi D salah karena bukan transisi offline."
    },
    "jobId": "fullstack",
    "code": "function BrokenChild() {\n  throw new Error('Crash!');\n  return <div>OK</div>;\n}"
  },
  {
    "id": "FA-036",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Dalam arsitektur Spring AOP, Advice jenis apakah yang memiliki kemampuan untuk memutuskan apakah method target boleh dieksekusi atau tidak, serta dapat mengubah argumen dan nilai kembalian method?\n\n```java\n@Around(\"@annotation(LogExecutionTime)\")\npublic Object logTime(ProceedingJoinPoint joinPoint) throws Throwable {\n  long start = System.currentTimeMillis();\n  Object proceed = joinPoint.proceed();\n  long executionTime = System.currentTimeMillis() - start;\n  log.info(\"{} executed in {}ms\", joinPoint.getSignature(), executionTime);\n  return proceed;\n}\n```",
    "options": {
      "A": "@Around (Around Advice) menggunakan `ProceedingJoinPoint`",
      "B": "@Before (Before Advice)",
      "C": "@After (After Advice)",
      "D": "@AfterReturning"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@Around` adalah advice paling kuat di Spring AOP. Method menerima parameter `ProceedingJoinPoint`, dan pemanggilan `joinPoint.proceed()` secara eksplisit mengontrol eksekusi method target.",
      "A": "Opsi A benar karena @Around memiliki kontrol penuh atas pemanggilan method melalui proceed().",
      "B": "Opsi B salah karena @Before hanya berjalan sebelum method.",
      "C": "Opsi C salah karena @After berjalan setelah method selesai.",
      "D": "Opsi D salah karena @AfterReturning hanya membaca return value."
    },
    "jobId": "fullstack",
    "code": "@Around(\"@annotation(LogExecutionTime)\")\npublic Object logTime(ProceedingJoinPoint joinPoint) throws Throwable {\n  long start = System.currentTimeMillis();\n  Object proceed = joinPoint.proceed();\n  long executionTime = System.currentTimeMillis() - start;\n  log.info(\"{} executed in {}ms\", joinPoint.getSignature(), executionTime);\n  return proceed;\n}"
  },
  {
    "id": "FA-037",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi deklarasi custom annotation berikut agar dapat diterapkan pada level method dan terbaca saat runtime oleh Spring AOP:\n\n```java\n@___\npublic @interface TrackMetrics {\n  String value() default \"\";\n}\n```",
    "options": {
      "A": "@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)",
      "B": "@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.SOURCE)",
      "C": "@Target(ElementType.FIELD)\n@Retention(RetentionPolicy.CLASS)",
      "D": "@Target(ElementType.PARAMETER)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi yang akan di-intercept oleh Spring AOP wajib memiliki meta-annotation `@Target(ElementType.METHOD)` dan `@Retention(RetentionPolicy.RUNTIME)`.",
      "A": "Opsi A benar karena RetentionPolicy.RUNTIME wajib agar anotasi dapat dibaca oleh reflection Spring AOP.",
      "B": "Opsi B salah karena SOURCE dibuang oleh compiler setelah kompilasi.",
      "C": "Opsi C salah karena CLASS tidak dapat dibaca oleh reflection runtime standar.",
      "D": "Opsi D salah karena kurang meta-annotation @Retention."
    },
    "jobId": "fullstack",
    "code": "@___\npublic @interface TrackMetrics {\n  String value() default \"\";\n}"
  },
  {
    "id": "FA-038",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Aspek `@Around` berikut menyebabkan method service yang di-intercept selalu mengembalikan nilai null. Apa kesalahan fatal pada implementasi aspek tersebut?\n\n```java\n@Around(\"execution(* com.service.*.*(..))\")\npublic void badAspect(ProceedingJoinPoint pjp) throws Throwable {\n  pjp.proceed(); // Return value hilang!\n}\n```",
    "options": {
      "A": "Aspek lupa mengembalikan hasil dari `joinPoint.proceed()` (method aspek bertipe void atau me-return null)",
      "B": "AOP tidak mendukung method service",
      "C": "joinPoint.proceed() tidak boleh dipanggil di dalam blok try",
      "D": "Nama method aspek harus bernama execute"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada `@Around` advice, nilai yang dikembalikan oleh method aspek adalah nilai yang akan diterima oleh pemanggil asli method target. Jika method advice bertipe `void` atau tidak me-return nilai dari `joinPoint.proceed()`, pemanggil menerima `null`.",
      "A": "Opsi A benar karena nilai kembalian `joinPoint.proceed()` wajib di-return oleh method Around advice.",
      "B": "Opsi B salah karena service layer adalah target utama AOP.",
      "C": "Opsi C salah karena membungkus proceed() dalam try-catch adalah praktik standar.",
      "D": "Opsi D salah karena nama method bebas."
    },
    "jobId": "fullstack",
    "code": "@Around(\"execution(* com.service.*.*(..))\")\npublic void badAspect(ProceedingJoinPoint pjp) throws Throwable {\n  pjp.proceed(); // Return value hilang!\n}"
  },
  {
    "id": "FA-039",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan urutan pemanggilan method transactional berikut. Jika Method B melempar RuntimeException, apakah transaksi pada Method A ikut rollback?\n\n```java\n@Transactional\npublic void methodA() {\n  userRepo.save(u1);\n  orderService.methodB(); // melempar RuntimeException\n}\n```",
    "options": {
      "A": "Ya, karena Method B menggunakan `Propagation.REQUIRED` bawaan sehingga berbagi transaksi fisik yang sama dengan Method A",
      "B": "Tidak, Method A tetap commit",
      "C": "Hanya Method B yang rollback",
      "D": "Database otomatis crash"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada `Propagation.REQUIRED`, Method B bergabung ke dalam transaksi yang sudah dimulai oleh Method A. Ketika Method B melempar unchecked exception, seluruh transaksi fisik ditandai sebagai rollback-only.",
      "A": "Opsi A benar karena propagation REQUIRED menyatukan transaksi fisik.",
      "B": "Opsi B salah karena exception yang tidak ditangkap membatalkan seluruh transaksi bersama.",
      "C": "Opsi C salah karena keduanya berbagi transaksi atomik yang sama.",
      "D": "Opsi D salah karena database melakukan rollback transaksi secara normal."
    },
    "jobId": "fullstack",
    "code": "@Transactional\npublic void methodA() {\n  userRepo.save(u1);\n  orderService.methodB(); // melempar RuntimeException\n}"
  },
  {
    "id": "FA-040",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa perbedaan penting antara `@EventListener` biasa dan `@TransactionalEventListener` di Spring?\n\n```java\n@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\npublic void handleUserCreated(UserCreatedEvent event) {\n  emailService.sendWelcome(event.getEmail());\n}\n```",
    "options": {
      "A": "`@TransactionalEventListener` memungkinkan listener dieksekusi hanya pada fase transaksi tertentu (misal `AFTER_COMMIT`), memastikan aksi hanya berjalan jika transaksi database berhasil di-commit",
      "B": "@TransactionalEventListener menghapus transaksi database",
      "C": "@EventListener biasa hanya bisa digunakan untuk pengujian unit",
      "D": "Keduanya persis sama tanpa perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)` menjamin aksi sampingan (seperti kirim email atau pesan Kafka) hanya dilakukan jika transaksi database benar-benar berhasil di-commit ke disk.",
      "A": "Opsi A benar karena phase AFTER_COMMIT mencegah aksi sampingan dijalankan saat transaksi gagal.",
      "B": "Opsi B salah karena tidak menghapus transaksi database.",
      "C": "Opsi C salah karena @EventListener biasa umum digunakan di produksi.",
      "D": "Opsi D salah karena integrasi siklus transaksi database adalah pembeda utamanya."
    },
    "jobId": "fullstack",
    "code": "@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\npublic void handleUserCreated(UserCreatedEvent event) {\n  emailService.sendWelcome(event.getEmail());\n}"
  },
  {
    "id": "FA-041",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Ketika menggunakan anotasi `@Async` di Spring Boot produksi, mengapa SANGAT disarankan mendefinisikan kustom `ThreadPoolTaskExecutor`?\n\n```java\n@Bean(name = \"taskExecutor\")\npublic Executor taskExecutor() {\n  ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n  executor.setCorePoolSize(5);\n  executor.setMaxPoolSize(10);\n  executor.setQueueCapacity(25);\n  executor.initialize();\n  return executor;\n}\n```",
    "options": {
      "A": "Default executor Spring (`SimpleAsyncTaskExecutor`) tidak me-reuse thread melainkan membuat thread OS baru tanpa batas di setiap request, berisiko OutOfMemoryError",
      "B": "Karena default executor melarang koneksi database",
      "C": "Karena custom executor membuat thread berjalan di browser",
      "D": "Spring Boot melarang kompilasi @Async tanpa custom pool"
    },
    "answer": "A",
    "explanation": {
      "correct": "`SimpleAsyncTaskExecutor` bawaan tidak menggunakan pool. Mengonfigurasi `ThreadPoolTaskExecutor` memungkinkan kita membatasi core pool size, max pool size, dan queue capacity, melindungi server dari lonjakan beban.",
      "A": "Opsi A benar karena thread pool kustom mencegah kehabisan thread OS dan memory exhaustion.",
      "B": "Opsi B salah karena thread async tetap bisa mengakses database.",
      "C": "Opsi C salah karena thread JVM backend selalu berada di server.",
      "D": "Opsi D salah karena Spring Boot mengizinkannya, namun ini berisiko bagi stabilitas produksi."
    },
    "jobId": "fullstack",
    "code": "@Bean(name = \"taskExecutor\")\npublic Executor taskExecutor() {\n  ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n  executor.setCorePoolSize(5);\n  executor.setMaxPoolSize(10);\n  executor.setQueueCapacity(25);\n  executor.initialize();\n  return executor;\n}"
  },
  {
    "id": "FA-042",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi Spring Security FilterChain berikut untuk menyisipkan filter autentikasi kustom `JwtAuthenticationFilter` sebelum `UsernamePasswordAuthenticationFilter` standar:\n\n```java\n@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n  http\n    ___\n    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());\n  return http.build();\n}\n```",
    "options": {
      "A": "http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)",
      "B": "http.addFilterAfter(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)",
      "C": "http.addFilter(jwtAuthFilter)",
      "D": "http.setFilter(jwtAuthFilter)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`http.addFilterBefore(customFilter, TargetFilter.class)` digunakan untuk memvalidasi token JWT di awal security filter chain sebelum sistem mencoba otentikasi form username/password.",
      "A": "Opsi A benar karena addFilterBefore memposisikan validasi JWT sebelum filter autentikasi bawaan.",
      "B": "Opsi B salah karena addFilterAfter menempatkannya setelah filter target.",
      "C": "Opsi C salah karena addFilter tanpa posisi eksplisit rawan error posisi filter.",
      "D": "Opsi D salah karena setFilter bukan method konfigurasi SecurityFilterChain."
    },
    "jobId": "fullstack",
    "code": "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n  http\n    ___\n    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());\n  return http.build();\n}"
  },
  {
    "id": "FA-043",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan operasi pemanggilan method internal (Self-Invocation) dalam class yang sama berikut. Apakah anotasi `@Transactional` pada `innerMethod()` akan dieksekusi melalui proxy?\n\n```java\n@Service\npublic class OrderService {\n  public void outerMethod() {\n    this.innerMethod(); // Memanggil method lokal\n  }\n  @Transactional\n  public void innerMethod() {\n    // Transaksi diabaikan\n  }\n}\n```",
    "options": {
      "A": "TIDAK dieksekusi melalui proxy (transaksi innerMethod diabaikan karena panggilan `this.innerMethod()` melewati dynamic proxy Spring)",
      "B": "Ya, transaksi selalu aktif",
      "C": "Terjadi error compile time",
      "D": "Aplikasi langsung crash"
    },
    "answer": "A",
    "explanation": {
      "correct": "Saat method dalam suatu class memanggil method lain di class yang sama (`self-invocation`), panggilan tersebut langsung merujuk ke instance `this` internal dan TIDAK melewati AOP proxy pembungkus, sehingga transaksi tidak bekerja.",
      "A": "Opsi A benar karena self-invocation membypass Spring AOP proxy.",
      "B": "Opsi B salah karena proxy diabaikan pada pemanggilan lokal internal.",
      "C": "Opsi C salah karena kode Java valid.",
      "D": "Opsi D salah karena method tetap tereksekusi biasa tanpa manajemen transaksi."
    },
    "jobId": "fullstack",
    "code": "@Service\npublic class OrderService {\n  public void outerMethod() {\n    this.innerMethod(); // Memanggil method lokal\n  }\n  @Transactional\n  public void innerMethod() {\n    // Transaksi diabaikan\n  }\n}"
  },
  {
    "id": "FA-044",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa fungsi dari `SecurityContextHolderStrategy` bertipe `MODE_INHERITABLETHREADLOCAL` di Spring Security?\n\n```java\nSecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHREADLOCAL);\n```",
    "options": {
      "A": "Memungkinkan SecurityContext diwariskan secara otomatis dari thread utama ke child thread yang dibuat oleh @Async atau task executor",
      "B": "Menghapus semua otentikasi user saat logout",
      "C": "Menyimpan password ke database",
      "D": "Membuat token JWT baru"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default `SecurityContextHolder` menggunakan `ThreadLocal` biasa, sehingga thread baru yang dibuat oleh `@Async` tidak dapat melihat kredensial user. Mengubah strateginya ke `MODE_INHERITABLETHREADLOCAL` mewariskan konteks keamanan ke spawned threads.",
      "A": "Opsi A benar karena memungkinkan propagasi SecurityContext ke thread anak.",
      "B": "Opsi B salah karena itu adalah fungsi logout handler.",
      "C": "Opsi C salah karena bukan penyimpanan database.",
      "D": "Opsi D salah karena bukan generator token."
    },
    "jobId": "fullstack",
    "code": "SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHREADLOCAL);"
  },
  {
    "id": "FA-045",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Sebuah microservice Spring Boot sering mengalami kegagalan beruntun saat service pihak ketiga lambat merespon. Pola arsitektur apakah yang paling tepat diterapkan menggunakan library Resilience4j?\n\n```java\n@CircuitBreaker(name = \"paymentService\", fallbackMethod = \"fallbackPayment\")\npublic PaymentResponse callPayment(PaymentRequest req) {\n  return restTemplate.postForObject(url, req, PaymentResponse.class);\n}\n```",
    "options": {
      "A": "Circuit Breaker Pattern (membuka sirkuit untuk memutus request sementara saat rasio kegagalan melebihi ambang batas)",
      "B": "Singleton Pattern",
      "C": "Factory Method Pattern",
      "D": "Prototype Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Circuit Breaker mencegah cascading failure dengan memantau rasio error. Jika service hilir lambat, circuit breaker beralih ke OPEN dan langsung mengembalikan respon fallback lokal tanpa menahan thread server.",
      "A": "Opsi A benar karena Circuit Breaker adalah solusi arsitektur utama untuk fault tolerance RPC.",
      "B": "Opsi B salah karena Singleton adalah pola pembuatan objek.",
      "C": "Opsi C salah karena Factory adalah pola kreasi.",
      "D": "Opsi D salah karena Prototype adalah kloning objek."
    },
    "jobId": "fullstack",
    "code": "@CircuitBreaker(name = \"paymentService\", fallbackMethod = \"fallbackPayment\")\npublic PaymentResponse callPayment(PaymentRequest req) {\n  return restTemplate.postForObject(url, req, PaymentResponse.class);\n}"
  },
  {
    "id": "FA-046",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Dalam protokol WebSocket di Spring Boot, apa peran dari sub-protokol STOMP?\n\n```java\n@Configuration\n@EnableWebSocketMessageBroker\npublic class WebSocketConfig implements WebSocketMessageBrokerConfigurer {\n  // STOMP broker config\n}\n```",
    "options": {
      "A": "Menyediakan format pesan berbasis frame yang terstruktur (seperti CONNECT, SEND, SUBSCRIBE) di atas koneksi TCP/WebSocket mentah untuk perutean pesan publish/subscribe",
      "B": "Menggantikan peran HTTP server Tomcat",
      "C": "Mengompres ukuran gambar secara otomatis",
      "D": "Menghapus koneksi database"
    },
    "answer": "A",
    "explanation": {
      "correct": "WebSocket mentah hanya mengirim stream teks/biner. STOMP mendefinisikan aturan pertukaran pesan tingkat aplikasi yang memungkinkan Spring MessageBroker merutekan pesan ke `@MessageMapping` atau topic subscribe.",
      "A": "Opsi A benar sesuai peran STOMP sebagai protokol perpesanan di atas WebSocket.",
      "B": "Opsi B salah karena STOMP berjalan di atas web server servlet.",
      "C": "Opsi C salah karena bukan algoritma kompresi gambar.",
      "D": "Opsi D salah karena tidak terkait koneksi database."
    },
    "jobId": "fullstack",
    "code": "@Configuration\n@EnableWebSocketMessageBroker\npublic class WebSocketConfig implements WebSocketMessageBrokerConfigurer {\n  // STOMP broker config\n}"
  },
  {
    "id": "FA-047",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada method message controller WebSocket berikut agar pesan di-broadcast ke seluruh subscriber topik `/topic/notifications`:\n\n```java\n@MessageMapping(\"/alert\")\n@___(\"/topic/notifications\")\npublic AlertMessage broadcastAlert(AlertMessage msg) {\n  return msg;\n}\n```",
    "options": {
      "A": "@SendTo(\"/topic/notifications\")",
      "B": "@BroadcastTo(\"/topic/notifications\")",
      "C": "@PublishTo(\"/topic/notifications\")",
      "D": "@Emit(\"/topic/notifications\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "`@SendTo(\"/topic/...\")` adalah anotasi Spring WebSocket messaging untuk mem-broadcast nilai return method controller ke broker tujuan yang disubscribe oleh klien web.",
      "A": "Opsi A benar karena @SendTo adalah anotasi resmi Spring Messaging.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "fullstack",
    "code": "@MessageMapping(\"/alert\")\n@___(\"/topic/notifications\")\npublic AlertMessage broadcastAlert(AlertMessage msg) {\n  return msg;\n}"
  },
  {
    "id": "FA-048",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Perhatikan kode Spring WebClient reaktif berikut. Kapan request HTTP aktual dieksekusi?\n\n```java\nMono<User> userMono = webClient.get()\n                               .uri(\"/users/1\")\n                               .retrieve()\n                               .bodyToMono(User.class);\n// Request belum dijalankan di sini!\n```",
    "options": {
      "A": "Request HANYA dieksekusi saat ada subscriber yang berlangganan (misal saat method `.subscribe()` atau `.block()` dipanggil)",
      "B": "Dieksekusi seketika saat method .get() dipanggil",
      "C": "Dieksekusi saat aplikasi startup",
      "D": "Tidak pernah dieksekusi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Prinsip fundamental Reactive Streams: 'Nothing happens until you subscribe'. Objek `Mono` atau `Flux` bersifat cold stream; pemanggilan definisi builder WebClient tidak akan memicu request jaringan sampai ada pemanggilan terminal operator.",
      "A": "Opsi A benar sesuai aturan reaktif Project Reactor.",
      "B": "Opsi B salah karena reactive streams tidak dieksekusi sebelum ada subscriber.",
      "C": "Opsi C salah karena bukan saat startup.",
      "D": "Opsi D salah karena akan dieksekusi saat di-subscribe."
    },
    "jobId": "fullstack",
    "code": "Mono<User> userMono = webClient.get()\n                               .uri(\"/users/1\")\n                               .retrieve()\n                               .bodyToMono(User.class);\n// Request belum dijalankan di sini!"
  },
  {
    "id": "FA-049",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Bagaimana cara terbaik mengamankan endpoint REST API Spring Boot dari serangan Brute-Force login?\n\n```java\n// Bucket4j Rate Limiting\nBandwidth limit = Bandwidth.classic(5, Refill.intervally(5, Duration.ofMinutes(1)));\n```",
    "options": {
      "A": "Menerapkan Rate Limiting berbasis IP/Username (menggunakan Bucket4j / Redis) dan mengunci akun sementara setelah sejumlah percobaan gagal",
      "B": "Menonaktifkan password dan menggunakan nama saja",
      "C": "Mematikan server saat malam hari",
      "D": "Menghapus log aplikasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pola pertahanan brute-force standar adalah membatasi laju request per menit (rate limiting via Redis) serta mengimplementasikan penundaan eksponensial atau penguncian sementara akun.",
      "A": "Opsi A benar karena rate limiting dan account lockout memitigasi serangan brute-force otomatis secara efektif.",
      "B": "Opsi B salah karena merusak seluruh sistem autentikasi.",
      "C": "Opsi C salah karena tidak realistis untuk ketersediaan sistem 24/7.",
      "D": "Opsi D salah karena menghapus log justru menghilangkan jejak audit keamanan."
    },
    "jobId": "fullstack",
    "code": "// Bucket4j Rate Limiting\nBandwidth limit = Bandwidth.classic(5, Refill.intervally(5, Duration.ofMinutes(1)));"
  },
  {
    "id": "FA-050",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa fungsi dari `OpenEntityManagerInView` (OSIV) di Spring Boot dan mengapa fitur ini sering diperdebatkan di aplikasi enterprise?\n\n```java\n# application.properties\nspring.jpa.open-in-view=false\n```",
    "options": {
      "A": "OSIV membiarkan Hibernate Session tetap terbuka hingga view/serializer selesai merender (mencegah LazyInitializationException), namun menahan koneksi connection pool terlalu lama",
      "B": "OSIV membuat database berjalan secara in-memory",
      "C": "OSIV adalah firewall keamanan",
      "D": "OSIV menghapus entitas yang sudah tidak aktif"
    },
    "answer": "A",
    "explanation": {
      "correct": "OSIV memperpanjang masa hidup EntityManager ke layer HTTP response rendering. Kelemahannya: satu thread HTTP menahan satu koneksi database fisik selama transmisi jaringan ke klien, menyebabkan connection pool exhaustion pada traffic tinggi.",
      "A": "Opsi A benar karena menjelaskan kompromi antara kemudahan lazy loading vs risiko connection pool starvation.",
      "B": "Opsi B salah karena bukan in-memory database.",
      "C": "Opsi C salah karena bukan firewall.",
      "D": "Opsi D salah karena bukan garbage collector."
    },
    "jobId": "fullstack",
    "code": "# application.properties\nspring.jpa.open-in-view=false"
  },
  {
    "id": "FA-051",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan konfigurasi propagation `REQUIRES_NEW` pada method audit log berikut. Jika method bisnis utama melempar exception dan rollback, apakah catatan audit log yang disimpan oleh method `saveAuditLog` ikut terhapus?\n\n```java\n@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void saveAuditLog(String action) {\n  auditRepo.save(new AuditLog(action));\n}\n```",
    "options": {
      "A": "TIDAK ikut terhapus (tetap tersimpan permanen karena berjalan di transaksi fisik baru yang independen)",
      "B": "Ikut terhapus karena satu thread",
      "C": "Tergantung tipe database",
      "D": "Error deadlock"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Propagation.REQUIRES_NEW` menunda transaksi utama dan membuat transaksi fisik terpisah yang langsung di-commit saat method `saveAuditLog` selesai. Rollback pada transaksi utama setelahnya tidak memengaruhi transaksi audit yang sudah sukses di-commit.",
      "A": "Opsi A benar karena transaksi REQUIRES_NEW terisolasi penuh dari nasib transaksi pemanggilnya.",
      "B": "Opsi B salah karena komitmen transaksi terpisah tidak dapat dibatalkan oleh transaksi lain.",
      "C": "Opsi C salah karena ini adalah spesifikasi standar JTA / Spring Transaction.",
      "D": "Opsi D salah karena bukan kondisi deadlock."
    },
    "jobId": "fullstack",
    "code": "@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void saveAuditLog(String action) {\n  auditRepo.save(new AuditLog(action));\n}"
  },
  {
    "id": "FA-052",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi pembuatan token JWT menggunakan library `jjwt` berikut untuk mengatur masa kedaluwarsa token:\n\n```java\nJwts.builder()\n    .setSubject(username)\n    ___\n    .signWith(key)\n    .compact();\n```",
    "options": {
      "A": ".setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))",
      "B": ".setTimeout(EXPIRATION_TIME)",
      "C": ".setLife(EXPIRATION_TIME)",
      "D": ".setDeadline(EXPIRATION_TIME)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di library JJWT, klaim standar `exp` diatur menggunakan method builder `.setExpiration(Date date)`.",
      "A": "Opsi A benar karena setExpiration adalah method standar penetapan masa berlaku token.",
      "B": "Opsi B salah karena setTimeout bukan method JJWT.",
      "C": "Opsi C salah karena bukan method JJWT.",
      "D": "Opsi D salah karena bukan method JJWT."
    },
    "jobId": "fullstack",
    "code": "Jwts.builder()\n    .setSubject(username)\n    ___\n    .signWith(key)\n    .compact();"
  },
  {
    "id": "FA-053",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Pemeriksaan izin `@PreAuthorize(\"hasRole('ADMIN')\")` selalu gagal (HTTP 403) meskipun otoritas user di token tertulis 'ROLE_ADMIN'. Mengapa?\n\n```java\n@PreAuthorize(\"hasRole('ADMIN')\") // Mencari ROLE_ROLE_ADMIN jika authority sudah ada prefiks ROLE_\npublic void deleteResource() { ... }\n```",
    "options": {
      "A": "Method `hasRole('ADMIN')` secara otomatis menambahkan prefiks `ROLE_` secara internal; jika otoritas di token sudah menyertakan 'ROLE_', gunakan `hasAuthority('ROLE_ADMIN')`",
      "B": "Nama role harus huruf kecil",
      "C": "Anotasi @PreAuthorize tidak mendukung Spring Security",
      "D": "Role ADMIN dilarang oleh Java"
    },
    "answer": "A",
    "explanation": {
      "correct": "`hasRole('X')` otomatis mencari granted authority dengan nama `ROLE_X`. Jika data token/database sudah berawalan `ROLE_ADMIN`, maka pemanggilan `hasAuthority('ROLE_ADMIN')` adalah yang tepat tanpa penambahan prefiks ganda.",
      "A": "Opsi A benar karena menjelaskan mekanisme penambahan prefix otomatis ROLE_ oleh hasRole.",
      "B": "Opsi B salah karena case role umumnya uppercase.",
      "C": "Opsi C salah karena @PreAuthorize adalah inti method security Spring Security.",
      "D": "Opsi D salah karena nama role bebas ditentukan pengembang."
    },
    "jobId": "fullstack",
    "code": "@PreAuthorize(\"hasRole('ADMIN')\") // Mencari ROLE_ROLE_ADMIN jika authority sudah ada prefiks ROLE_\npublic void deleteResource() { ... }"
  },
  {
    "id": "FA-054",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa fungsi dari kelas `DelegatingFilterProxy` dalam integrasi antara Servlet Container dan Spring Security?\n\n```java\n<!-- web.xml tradisional / auto-registered in Spring Boot -->\n<filter-name>springSecurityFilterChain</filter-name>\n<filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>\n```",
    "options": {
      "A": "Bertindak sebagai jembatan yang menghubungkan siklus hidup Servlet Filter standar milik Tomcat dengan bean `FilterChainProxy` di dalam Spring ApplicationContext",
      "B": "Menghubungkan aplikasi ke server proxy Nginx",
      "C": "Mengompres respon gzip",
      "D": "Mengelola database connection pool"
    },
    "answer": "A",
    "explanation": {
      "correct": "`DelegatingFilterProxy` adalah filter standar servlet yang mendelegasikan seluruh pemrosesan keamanan ke bean Spring `springSecurityFilterChain` setelah container siap.",
      "A": "Opsi A benar sesuai peran bridging delegator antara web container dan Spring IoC.",
      "B": "Opsi B salah karena bukan reverse proxy Nginx.",
      "C": "Opsi C salah karena bukan filter kompresi.",
      "D": "Opsi D salah karena bukan connection pool manager."
    },
    "jobId": "fullstack",
    "code": "<!-- web.xml tradisional / auto-registered in Spring Boot -->\n<filter-name>springSecurityFilterChain</filter-name>\n<filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>"
  },
  {
    "id": "FA-055",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa yang dikembalikan oleh ekspresi SpEL `#authentication.principal` di dalam evaluasi Spring Security?\n\n```java\n@PreAuthorize(\"#authentication.principal.username == #username\")\npublic void updateUserProfile(String username, UserDto dto) { ... }\n```",
    "options": {
      "A": "Objek identitas pengguna yang sedang terautentikasi (umumnya instance dari `UserDetails` atau `Jwt`)",
      "B": "Password plain-text pengguna",
      "C": "Alamat IP server",
      "D": "Nomor port Tomcat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Spring Security, `principal` mewakili entitas yang terotentikasi di dalam objek `Authentication`, biasanya berupa implementasi kelas `UserDetails` kustom atau `Jwt` principal.",
      "A": "Opsi A benar karena principal menampung objek identitas user aktif.",
      "B": "Opsi B salah karena kredensial password dihapus dari memori setelah autentikasi berhasil.",
      "C": "Opsi C salah karena bukan IP server.",
      "D": "Opsi D salah karena bukan port web server."
    },
    "jobId": "fullstack",
    "code": "@PreAuthorize(\"#authentication.principal.username == #username\")\npublic void updateUserProfile(String username, UserDto dto) { ... }"
  },
  {
    "id": "FA-056",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "best-practice",
    "question": "Mengapa sebaiknya menghindari penggunaan `System.out.println()` di lingkungan Spring Boot produksi dan beralih ke SLF4J Logger?\n\n```java\nlog.info(\"User {} logged in successfully from IP {}\", userId, ipAddress);\n```",
    "options": {
      "A": "System.out melakukan sinkronisasi I/O thread yang memblokir performa, tidak mendukung level log, serta tidak dapat diarahkan ke log aggregator (ELK/Datadog)",
      "B": "System.out melempar exception di sistem operasi Linux",
      "C": "System.out menghapus database",
      "D": "SLF4J adalah library wajib yang jika tidak dipakai aplikasi tidak jalan"
    },
    "answer": "A",
    "explanation": {
      "correct": "SLF4J dengan Logback mendukung pemrosesan log asinkron, format terstruktur JSON untuk observability, penyesuaian level log dinamis saat runtime, dan rolling file otomatis.",
      "A": "Opsi A benar karena merinci keunggulan performa, fleksibilitas log levels, dan integrasi log aggregator modern.",
      "B": "Opsi B salah karena System.out bekerja di semua sistem operasi.",
      "C": "Opsi C salah karena tidak ada sangkut pautnya dengan penghapusan database.",
      "D": "Opsi D salah karena aplikasi tetap bisa berjalan, namun kualitas observabilitasnya buruk."
    },
    "jobId": "fullstack",
    "code": "log.info(\"User {} logged in successfully from IP {}\", userId, ipAddress);"
  },
  {
    "id": "FA-057",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi Lombok berikut untuk menghasilkan logger SLF4J `log` secara otomatis pada kelas Java:\n\n```java\n@___\n@Service\npublic class PaymentProcessor {\n  public void pay() { log.info(\"Processing payment\"); }\n}\n```",
    "options": {
      "A": "@Slf4j",
      "B": "@Log",
      "C": "@Logger",
      "D": "@EnableLogging"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi Lombok `@Slf4j` secara otomatis menghasilkan baris privat statik `private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(ClassName.class);`.",
      "A": "Opsi A benar karena @Slf4j adalah anotasi resmi Lombok untuk logger SLF4J.",
      "B": "Opsi B salah karena @Log menghasilkan java.util.logging standar.",
      "C": "Opsi C salah karena bukan anotasi Lombok.",
      "D": "Opsi D salah karena bukan anotasi logger."
    },
    "jobId": "fullstack",
    "code": "@___\n@Service\npublic class PaymentProcessor {\n  public void pay() { log.info(\"Processing payment\"); }\n}"
  },
  {
    "id": "FA-058",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "debug",
    "question": "Method `@Async` tidak berjalan di thread terpisah saat dipanggil dari method lain di dalam kelas yang sama. Mengapa?\n\n```java\n@Service\npublic class ReportService {\n  public void generate() {\n    this.asyncGenerate(); // Self-invocation membypass async proxy\n  }\n  @Async\n  public void asyncGenerate() { ... }\n}\n```",
    "options": {
      "A": "Keterbatasan dynamic proxy: pemanggilan internal method dalam kelas yang sama (self-invocation) membypass Spring proxy sehingga anotasi @Async diabaikan",
      "B": "@Async hanya bekerja pada hari libur",
      "C": "Thread pool sedang penuh",
      "D": "Method harus bertipe private"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sama halnya dengan `@Transactional`, anotasi `@Async` bekerja dengan cara dynamic proxy membungkus bean. Pemanggilan internal via `this.methodAsync()` tidak melewati proxy pembungkus, sehingga dieksekusi secara sinkron di thread pemanggil.",
      "A": "Opsi A benar karena self-invocation membypass async execution interceptor proxy.",
      "B": "Opsi B salah karena tidak ada aturan waktu.",
      "C": "Opsi C salah karena jika thread pool penuh, TaskRejectedException yang dilemparkan.",
      "D": "Opsi D salah karena method async wajib bersifat public."
    },
    "jobId": "fullstack",
    "code": "@Service\npublic class ReportService {\n  public void generate() {\n    this.asyncGenerate(); // Self-invocation membypass async proxy\n  }\n  @Async\n  public void asyncGenerate() { ... }\n}"
  },
  {
    "id": "FA-059",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Apa fungsi dari anotasi `@CrossOrigin` dan mengapa konfigurasi global via `WebMvcConfigurer` lebih disukai di proyek besar?\n\n```java\n@CrossOrigin(origins = \"https://frontend.com\", maxAge = 3600)\n@RestController\npublic class ApiController { ... }\n```",
    "options": {
      "A": "@CrossOrigin mengatur CORS per-controller/method yang rawan inkonsistensi jika banyak endpoint, sedangkan WebMvcConfigurer memusatkan kebijakan origin di satu tempat",
      "B": "@CrossOrigin hanya bekerja untuk port 80",
      "C": "WebMvcConfigurer mempercepat koneksi database",
      "D": "@CrossOrigin menonaktifkan autentikasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Konfigurasi terpusat di `WebMvcConfigurer` memastikan standar keamanan yang konsisten di seluruh ratusan endpoint dan memudahkan perubahan URL frontend saat promosi dari staging ke production.",
      "A": "Opsi A benar karena manajemen terpusat mencegah kebocoran konfigurasi pada endpoint baru.",
      "B": "Opsi B salah karena @CrossOrigin mendukung semua port.",
      "C": "Opsi C salah karena tidak ada hubungannya dengan database.",
      "D": "Opsi D salah karena CORS tidak meniadakan otentikasi."
    },
    "jobId": "fullstack",
    "code": "@CrossOrigin(origins = \"https://frontend.com\", maxAge = 3600)\n@RestController\npublic class ApiController { ... }"
  },
  {
    "id": "FA-060",
    "level": "advanced",
    "topic": "Java Spring Boot",
    "questionType": "output",
    "question": "Diberikan custom exception handler berikut. Apa HTTP status yang diterima oleh klien saat `UserNotFoundException` dilemparkan?\n\n```java\n@ExceptionHandler(UserNotFoundException.class)\n@ResponseStatus(HttpStatus.NOT_FOUND)\npublic ErrorDto handleNotFound(UserNotFoundException ex) {\n  return new ErrorDto(ex.getMessage());\n}\n```",
    "options": {
      "A": "404 Not Found",
      "B": "500 Internal Server Error",
      "C": "200 OK",
      "D": "400 Bad Request"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method penangan exception dianotasi dengan `@ResponseStatus(HttpStatus.NOT_FOUND)`. Saat exception dilempar, Spring ControllerAdvice otomatis memetakan respon ke status code HTTP 404 Not Found.",
      "A": "Opsi A benar karena pemetaan status eksplisit ke HttpStatus.NOT_FOUND (404).",
      "B": "Opsi B salah karena exception telah ditangkap dan tidak jatuh ke unhandled 500.",
      "C": "Opsi C salah karena bukan status sukses.",
      "D": "Opsi D salah karena statusnya 404 bukan 400."
    },
    "jobId": "fullstack",
    "code": "@ExceptionHandler(UserNotFoundException.class)\n@ResponseStatus(HttpStatus.NOT_FOUND)\npublic ErrorDto handleNotFound(UserNotFoundException ex) {\n  return new ErrorDto(ex.getMessage());\n}"
  },
  {
    "id": "FA-061",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Apa perbedaan mendasar antara First-Level Cache (L1) dan Second-Level Cache (L2) di Hibernate?\n\n```java\n# application.yml\nspring.jpa.properties.hibernate.cache.use_second_level_cache: true\nspring.jpa.properties.hibernate.cache.region.factory_class: org.hibernate.cache.jcache.JCacheRegionFactory\n```",
    "options": {
      "A": "L1 Cache terikat pada EntityManager/Session tunggal dan hidup selama satu transaksi, sedangkan L2 Cache berada di level SessionFactory dan dibagikan ke seluruh sesi/transaksi di aplikasi",
      "B": "L1 Cache disimpan di database, L2 Cache disimpan di browser",
      "C": "L1 Cache berbayar, L2 Cache open-source",
      "D": "Tidak ada perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "First-level cache adalah session-scoped (wajib dan aktif otomatis). Second-level cache adalah process/cluster-scoped (opsional, menggunakan provider seperti Redis/Ehcache) yang memungkinkan entitas yang sering dibaca diakses bersama lintas transaksi.",
      "A": "Opsi A benar karena membedakan scope session vs application/cluster level cache.",
      "B": "Opsi B salah karena kedua cache berada di layer ORM backend.",
      "C": "Opsi C salah karena keduanya fitur Hibernate open-source.",
      "D": "Opsi D salah karena lifecyle dan cakupannya berbeda total."
    },
    "jobId": "fullstack",
    "code": "# application.yml\nspring.jpa.properties.hibernate.cache.use_second_level_cache: true\nspring.jpa.properties.hibernate.cache.region.factory_class: org.hibernate.cache.jcache.JCacheRegionFactory"
  },
  {
    "id": "FA-062",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada entitas JPA berikut agar entitas tersebut dapat disimpan di dalam Hibernate Second-Level Cache:\n\n```java\n@Entity\n@Table(name = \"products\")\n@___\npublic class Product {\n  @Id private Long id;\n  private String name;\n}\n```",
    "options": {
      "A": "@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)",
      "B": "@Cacheable(enabled = true)",
      "C": "@StoreInL2",
      "D": "@SecondLevelCache"
    },
    "answer": "A",
    "explanation": {
      "correct": "Untuk mengaktifkan caching L2 pada entitas Hibernate spesifik, anotasi `@Cache` dari package `org.hibernate.annotations` digunakan dengan menentukan strategi konkurensi (seperti READ_WRITE atau NONSTRICT_READ_WRITE).",
      "A": "Opsi A benar karena merupakan anotasi resmi konfigurasi L2 cache Hibernate.",
      "B": "Opsi B salah karena @Cacheable standar JPA membutuhkan provider metadata Hibernate.",
      "C": "Opsi C salah karena bukan anotasi Hibernate.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "fullstack",
    "code": "@Entity\n@Table(name = \"products\")\n@___\npublic class Product {\n  @Id private Long id;\n  private String name;\n}"
  },
  {
    "id": "FA-063",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Aplikasi mengalami masalah N+1 Select query yang parah saat memanggil `findAll()`. Tanpa mengubah seluruh query JPQL, properti Hibernate apakah yang dapat diatur di `application.properties` untuk membatasi query relasi dalam batch?\n\n```java\n# application.properties\nspring.jpa.properties.hibernate.default_batch_fetch_size=50\n```",
    "options": {
      "A": "spring.jpa.properties.hibernate.default_batch_fetch_size=50",
      "B": "spring.jpa.batch.all=true",
      "C": "hibernate.disable_n_plus_one=true",
      "D": "spring.jpa.fetch.mode=fast"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mengonfigurasi `default_batch_fetch_size` menginstruksikan Hibernate untuk me-load koleksi LAZY menggunakan klausul `WHERE id IN (?, ?, ...)` hingga ukuran batch tertentu (misal 50), mengubah N query individual menjadi beberapa query batch kecil.",
      "A": "Opsi A benar karena default_batch_fetch_size adalah solusi global mitigasi N+1 paling efektif di Hibernate.",
      "B": "Opsi B salah karena bukan properti konfigurasi Spring/Hibernate.",
      "C": "Opsi C salah karena properti tersebut tidak ada.",
      "D": "Opsi D salah karena bukan properti resmi."
    },
    "jobId": "fullstack",
    "code": "# application.properties\nspring.jpa.properties.hibernate.default_batch_fetch_size=50"
  },
  {
    "id": "FA-064",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Apa perbedaan antara Pessimistic Locking (`LockModeType.PESSIMISTIC_WRITE`) dan Optimistic Locking (`@Version`) di JPA?\n\n```java\n@Lock(LockModeType.PESSIMISTIC_WRITE)\n@Query(\"SELECT p FROM Product p WHERE p.id = :id\")\nOptional<Product> findByIdForUpdate(@Param(\"id\") Long id);\n```",
    "options": {
      "A": "Pessimistic Locking mengunci baris data di level database fisik (`SELECT ... FOR UPDATE`), memblokir transaksi lain; Optimistic Locking mendeteksi konflik nomor versi saat commit",
      "B": "Pessimistic Locking tidak pernah memblokir transaksi",
      "C": "Optimistic Locking hanya bisa digunakan pada hari libur",
      "D": "Keduanya persis sama"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pessimistic Lock ideal untuk skenario konkurensi ekstrem dengan collision tinggi (flash sale) di mana konflik pasti terjadi. Optimistic Lock ideal untuk sistem web dengan rasio baca tinggi dan collision rendah.",
      "A": "Opsi A benar karena membedakan penguncian fisik database (FOR UPDATE) vs verifikasi versi logis saat commit.",
      "B": "Opsi B salah karena Pessimistic justru mengunci baris data secara nyata.",
      "C": "Opsi C salah karena tidak terikat waktu.",
      "D": "Opsi D salah karena mekanisme pengunciannya sangat berbeda."
    },
    "jobId": "fullstack",
    "code": "@Lock(LockModeType.PESSIMISTIC_WRITE)\n@Query(\"SELECT p FROM Product p WHERE p.id = :id\")\nOptional<Product> findByIdForUpdate(@Param(\"id\") Long id);"
  },
  {
    "id": "FA-065",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Diberikan query dengan `@Lock(LockModeType.PESSIMISTIC_WRITE)` di Spring Data JPA. Klausul SQL apakah yang otomatis ditambahkan oleh Hibernate di ujung query SQL yang dikirimkan ke PostgreSQL?\n\n```java\n-- Generated SQL by Hibernate dialect:\nSELECT p.id, p.stock FROM product p WHERE p.id = ? FOR UPDATE;\n```",
    "options": {
      "A": "FOR UPDATE",
      "B": "LOCK TABLE",
      "C": "WITH NO CHECK",
      "D": "READ ONLY"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di PostgreSQL dan MySQL, `LockModeType.PESSIMISTIC_WRITE` diterjemahkan oleh dialek database menjadi klausa `SELECT ... FOR UPDATE`, yang mengunci baris terpilih dengan exclusive row-level lock.",
      "A": "Opsi A benar karena FOR UPDATE adalah padanan SQL native dari PESSIMISTIC_WRITE.",
      "B": "Opsi B salah karena PESSIMISTIC_WRITE mengunci baris, bukan seluruh tabel.",
      "C": "Opsi C salah karena bukan sintaks locking.",
      "D": "Opsi D salah karena bukan query read-only."
    },
    "jobId": "fullstack",
    "code": "-- Generated SQL by Hibernate dialect:\nSELECT p.id, p.stock FROM product p WHERE p.id = ? FOR UPDATE;"
  },
  {
    "id": "FA-066",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Mengapa method `equals()` dan `hashCode()` pada kelas `@Entity` JPA sebaiknya TIDAK mengikutsertakan field Primary Key `@Id` yang di-generate otomatis secara langsung?\n\n```java\n// Gunakan UUID alami atau business key unik untuk equals & hashCode:\n@Override\npublic boolean equals(Object o) {\n  if (this == o) return true;\n  if (!(o instanceof User u)) return false;\n  return Objects.equals(businessKey, u.businessKey);\n}\n```",
    "options": {
      "A": "Sebelum entitas di-persist, nilai ID adalah null, sehingga objek yang sama menghasilkan hashCode berbeda sebelum dan sesudah disimpan, merusak struktur koleksi HashSet/HashMap",
      "B": "Karena JPA melarang method equals",
      "C": "Karena ID database bersifat rahasia",
      "D": "Karena performa JVM menurun 50%"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika entitas baru (ID = null) dimasukkan ke dalam `Set`, lalu di-save ke database (ID terisi angka), hashCode objek akan berubah dan objek tersebut tidak akan dapat ditemukan lagi di dalam Set. Gunakan business key unik yang stabil (Natural ID).",
      "A": "Opsi A benar karena perubahan nilai ID setelah persist merusak kontrak hash set/map di Java.",
      "B": "Opsi B salah karena method equals sepenuhnya legal dan disarankan.",
      "C": "Opsi C salah karena primary key bukan rahasia kriptografis.",
      "D": "Opsi D salah karena bukan isu degradasi performa JVM."
    },
    "jobId": "fullstack",
    "code": "// Gunakan UUID alami atau business key unik untuk equals & hashCode:\n@Override\npublic boolean equals(Object o) {\n  if (this == o) return true;\n  if (!(o instanceof User u)) return false;\n  return Objects.equals(businessKey, u.businessKey);\n}"
  },
  {
    "id": "FA-067",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi pembuatan kueri dinamis menggunakan JPA `CriteriaBuilder` berikut untuk menambahkan predikat pencarian nama pengguna:\n\n```java\nCriteriaBuilder cb = em.getCriteriaBuilder();\nCriteriaQuery<User> cq = cb.createQuery(User.class);\nRoot<User> root = cq.from(User.class);\n___\ncq.where(p);\n```",
    "options": {
      "A": "Predicate p = cb.equal(root.get(\"name\"), \"Budi\");",
      "B": "Predicate p = cb.match(root.name, \"Budi\");",
      "C": "Predicate p = cb.same(root, \"Budi\");",
      "D": "Predicate p = cb.is(root.get(\"name\"), \"Budi\");"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di JPA Criteria API, kondisi kesetaraan dibangun menggunakan `CriteriaBuilder.equal(Expression<?> x, Object y)`.",
      "A": "Opsi A benar karena `cb.equal()` adalah method resmi JPA CriteriaBuilder.",
      "B": "Opsi B salah karena match bukan method CriteriaBuilder.",
      "C": "Opsi C salah karena same bukan method resmi.",
      "D": "Opsi D salah karena bukan method kesetaraan CriteriaBuilder."
    },
    "jobId": "fullstack",
    "code": "CriteriaBuilder cb = em.getCriteriaBuilder();\nCriteriaQuery<User> cq = cb.createQuery(User.class);\nRoot<User> root = cq.from(User.class);\n___\ncq.where(p);"
  },
  {
    "id": "FA-068",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Apa modul audit resmi Hibernate yang secara otomatis membuat tabel historis audit untuk mencatat setiap perubahan data lengkap dengan tipe revisi?\n\n```java\n@Entity\n@Audited\npublic class AccountBalance {\n  @Id private Long id;\n  private BigDecimal balance;\n}\n```",
    "options": {
      "A": "Hibernate Envers",
      "B": "Hibernate AuditLog",
      "C": "Hibernate Tracker",
      "D": "Hibernate History"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Hibernate Envers` adalah modul audit resmi yang menyediakan versi historis dari entitas yang dianotasi `@Audited`, mempermudah pelacakan rekam jejak kepatuhan data enterprise.",
      "A": "Opsi A benar karena Hibernate Envers adalah nama resmi modul auditing Hibernate.",
      "B": "Opsi B salah karena bukan modul resmi.",
      "C": "Opsi C salah karena bukan modul resmi.",
      "D": "Opsi D salah karena bukan modul resmi."
    },
    "jobId": "fullstack",
    "code": "@Entity\n@Audited\npublic class AccountBalance {\n  @Id private Long id;\n  private BigDecimal balance;\n}"
  },
  {
    "id": "FA-069",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "output",
    "question": "Berapa kali event listener `@PrePersist` dieksekusi saat method `saveAll()` menyimpan daftar yang berisi 10 entitas baru?\n\n```java\n@PrePersist\npublic void prePersist() {\n  this.createdAt = LocalDateTime.now();\n}\n```",
    "options": {
      "A": "10 kali (tepat 1 kali per entitas yang baru dibuat)",
      "B": "1 kali untuk seluruh batch",
      "C": "0 kali",
      "D": "20 kali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Lifecycle callback JPA seperti `@PrePersist` dan `@PreUpdate` terikat pada masing-masing instance entitas individual. Jika ada 10 entitas baru yang di-persist, callback `@PrePersist` dipanggil 10 kali.",
      "A": "Opsi A benar karena callback siklus hidup entitas dieksekusi per instance entitas.",
      "B": "Opsi B salah karena bukan callback level koleksi.",
      "C": "Opsi C salah karena @PrePersist pasti dipanggil sebelum insert.",
      "D": "Opsi D salah karena hanya dieksekusi 1 kali per insersi entitas."
    },
    "jobId": "fullstack",
    "code": "@PrePersist\npublic void prePersist() {\n  this.createdAt = LocalDateTime.now();\n}"
  },
  {
    "id": "FA-070",
    "level": "advanced",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Query native `@Query(value = \"SELECT * FROM users\", nativeQuery = true)` memunculkan error saat mencoba memetakan hasilnya ke DTO antarmuka kustom. Fitur Spring Data JPA apakah yang harus digunakan?\n\n```java\npublic interface UserSummaryProjection {\n  Long getId();\n  String getEmail();\n}\n```",
    "options": {
      "A": "Interface-based Projections (getter methods) atau `@SqlResultSetMapping`",
      "B": "Mengubah database menjadi MongoDB",
      "C": "Menghapus nativeQuery",
      "D": "Menggunakan plain text JDBC"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Data JPA mendukung pemetaan hasil query kustom/native ke interface proyeksi berbasis getter (`getId()`, `getName()`) atau menggunakan `@SqlResultSetMapping` untuk memetakan kolom SQL mentah ke POJO DTO.",
      "A": "Opsi A benar karena Spring Data Interface-based Projections adalah solusi standar pemetaan query native.",
      "B": "Opsi B salah karena bukan solusi untuk query SQL relasional.",
      "C": "Opsi C salah karena native query tetap bisa dipakai dengan proyeksi yang benar.",
      "D": "Opsi D salah karena JPA menyediakan abstraksi proyeksi bawaan."
    },
    "jobId": "fullstack",
    "code": "public interface UserSummaryProjection {\n  Long getId();\n  String getEmail();\n}"
  },
  {
    "id": "FA-071",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Apa fungsi utama dari Window Functions di SQL (seperti `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()` dengan klausa `OVER (PARTITION BY ... ORDER BY ...)`)?\n\n```sql\nSELECT id, dept, salary,\n       RANK() OVER (PARTITION BY dept ORDER BY salary DESC) as rank_in_dept\nFROM employees;\n```",
    "options": {
      "A": "Melakukan kalkulasi dan pemeringkatan di sekumpulan baris data terkait tanpa menggabungkan baris-baris tersebut menjadi satu baris tunggal seperti GROUP BY",
      "B": "Membuka jendela browser baru",
      "C": "Menghapus data di background",
      "D": "Membuat tabel cadangan otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Window Functions mengevaluasi agregasi/ranking pada partisi data sambil tetap mempertahankan identitas setiap baris data asli pada hasil query, tidak meremukkan baris menjadi single row seperti `GROUP BY`.",
      "A": "Opsi A benar karena Window Function melakukan kalkulasi partisi tanpa menghilangkan baris individual.",
      "B": "Opsi B salah karena bukan GUI browser.",
      "C": "Opsi C salah karena bukan operasi penghapusan.",
      "D": "Opsi D salah karena bukan pencadangan database."
    },
    "jobId": "fullstack",
    "code": "SELECT id, dept, salary,\n       RANK() OVER (PARTITION BY dept ORDER BY salary DESC) as rank_in_dept\nFROM employees;"
  },
  {
    "id": "FA-072",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Diberikan nilai skor: 100, 90, 90, 80. Berapakah urutan ranking yang dihasilkan oleh fungsi `DENSE_RANK() OVER (ORDER BY score DESC)`?\n\n```sql\nSELECT score, DENSE_RANK() OVER (ORDER BY score DESC) as rank FROM scores;\n```",
    "options": {
      "A": "1, 2, 2, 3",
      "B": "1, 2, 2, 4",
      "C": "1, 2, 3, 4",
      "D": "1, 1, 2, 3"
    },
    "answer": "A",
    "explanation": {
      "correct": "`DENSE_RANK()` memberikan ranking yang sama untuk nilai kembar tanpa melompati nomor urut berikutnya: 100 -> rank 1; 90, 90 -> rank 2; dan 80 -> rank 3.",
      "A": "Opsi A benar karena DENSE_RANK tidak menyisakan celah angka setelah nilai kembar.",
      "B": "Opsi B salah karena 1, 2, 2, 4 adalah hasil fungsi RANK() biasa.",
      "C": "Opsi C salah karena nilai kembar harus mendapat ranking yang sama.",
      "D": "Opsi D salah karena skor 100 tertinggi mendapat rank 1."
    },
    "jobId": "fullstack",
    "code": "SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) as rank FROM scores;"
  },
  {
    "id": "FA-073",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi sintaks Common Table Expression (CTE) rekursif di PostgreSQL berikut untuk menghasilkan deret angka 1 sampai 10:\n\n```sql\n___ SELECT * FROM t;\n```",
    "options": {
      "A": "WITH RECURSIVE t(n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM t WHERE n < 10)",
      "B": "LOOP (SELECT 1 TO 10)",
      "C": "WHILE n < 10 DO SELECT n + 1",
      "D": "FOR n IN 1..10 SELECT n"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di SQL standar dan PostgreSQL, query hierarkis rekursif didefinisikan menggunakan `WITH RECURSIVE cte_name AS (anchor_query UNION ALL recursive_query)`.",
      "A": "Opsi A benar sesuai sintaks resmi Recursive CTE ANSI SQL / PostgreSQL.",
      "B": "Opsi B salah karena bukan sintaks SQL query.",
      "C": "Opsi C salah karena WHILE adalah sintaks procedural block.",
      "D": "Opsi D salah karena bukan sintaks query SQL."
    },
    "jobId": "fullstack",
    "code": "___ SELECT * FROM t;"
  },
  {
    "id": "FA-074",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Apa keuntungan utama dari fitur 'Table Partitioning' pada tabel berukuran ratusan juta baris?\n\n```sql\nCREATE TABLE measurement (\n  log_date DATE NOT NULL,\n  peak_temp INT\n) PARTITION BY RANGE (log_date);\n```",
    "options": {
      "A": "Memungkinkan 'Partition Pruning', di mana database hanya memindai partisi tabel yang relevan dan mengabaikan partisi lainnya, serta mempermudah DROP PARTITION",
      "B": "Mengurangi penggunaan memori RAM komputer menjadi 0 MB",
      "C": "Menghapus kebutuhan primary key",
      "D": "Menonaktifkan transaksi database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dengan Range Partitioning, query dengan `WHERE created_at >= '2026-01-01'` hanya akan memindai sub-tabel partisi tahun 2026 dan sepenuhnya melewati (pruning) partisi lainnya, menghemat I/O disk secara masif.",
      "A": "Opsi A benar karena Partition Pruning mempercepat query dan mempermudah lifecycle management data besar.",
      "B": "Opsi B salah karena memori RAM tetap dibutuhkan.",
      "C": "Opsi C salah karena setiap partisi tetap membutuhkan primary key.",
      "D": "Opsi D salah karena transaksi tetap berjalan normal."
    },
    "jobId": "fullstack",
    "code": "CREATE TABLE measurement (\n  log_date DATE NOT NULL,\n  peak_temp INT\n) PARTITION BY RANGE (log_date);"
  },
  {
    "id": "FA-075",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Diberikan klausa Window Function `LEAD(sales, 1) OVER (ORDER BY month)`. Apa nilai yang dikembalikan oleh fungsi tersebut untuk baris bulan saat ini?\n\n```sql\nSELECT month, sales, LEAD(sales, 1) OVER (ORDER BY month) as next_month_sales FROM monthly_report;\n```",
    "options": {
      "A": "Nilai kolom 'sales' dari baris 1 bulan berikutnya (baris setelahnya)",
      "B": "Nilai kolom sales dari baris 1 bulan sebelumnya",
      "C": "Nilai rata-rata penjualan",
      "D": "Nilai total penjualan"
    },
    "answer": "A",
    "explanation": {
      "correct": "`LEAD(col, offset)` melihat ke depan dan mengembalikan nilai kolom dari baris ke-offset berikutnya. Kebalikannya adalah `LAG(col, offset)` yang melihat ke baris sebelumnya.",
      "A": "Opsi A benar karena LEAD mengakses data baris berikutnya dalam window.",
      "B": "Opsi B salah karena mengakses baris sebelumnya adalah fungsi LAG.",
      "C": "Opsi C salah karena bukan nilai rata-rata.",
      "D": "Opsi D salah karena bukan nilai total."
    },
    "jobId": "fullstack",
    "code": "SELECT month, sales, LEAD(sales, 1) OVER (ORDER BY month) as next_month_sales FROM monthly_report;"
  },
  {
    "id": "FA-076",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "best-practice",
    "question": "Bagaimana cara me-refresh data pada Materialized View di PostgreSQL di lingkungan produksi ber-traffic tinggi tanpa mengunci (locking) operasi pembacaan pengguna?\n\n```sql\n-- Syarat: harus memiliki UNIQUE INDEX pada materialized view\nCREATE UNIQUE INDEX idx_mv_summary ON mv_sales_summary(id);\nREFRESH MATERIALIZED VIEW CONCURRENTLY mv_sales_summary;\n```",
    "options": {
      "A": "REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;",
      "B": "REFRESH MATERIALIZED VIEW view_name;",
      "C": "DROP MATERIALIZED VIEW view_name; CREATE MATERIALIZED VIEW ...;",
      "D": "VACUUM FULL view_name;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perintah `REFRESH MATERIALIZED VIEW CONCURRENTLY` memperbarui isi materialized view tanpa memberlakukan exclusive lock pada view tersebut, sehingga pengguna tetap dapat membaca data lama selama proses refresh berlangsung.",
      "A": "Opsi A benar karena flag CONCURRENTLY mencegah read-lock pada tabel materialized view.",
      "B": "Opsi B salah karena refresh standar memberlakukan exclusive lock.",
      "C": "Opsi C salah karena drop dan recreate menyebabkan downtime.",
      "D": "Opsi D salah karena VACUUM bukan perintah refresh materialized view."
    },
    "jobId": "fullstack",
    "code": "-- Syarat: harus memiliki UNIQUE INDEX pada materialized view\nCREATE UNIQUE INDEX idx_mv_summary ON mv_sales_summary(id);\nREFRESH MATERIALIZED VIEW CONCURRENTLY mv_sales_summary;"
  },
  {
    "id": "FA-077",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Apa arti dari jenis node pemindaian 'Index-Only Scan' pada laporan EXPLAIN ANALYZE di PostgreSQL?\n\n```sql\nEXPLAIN (ANALYZE, BUFFERS)\nSELECT user_id, email FROM users WHERE email = 'test@mail.com';\n```",
    "options": {
      "A": "Database dapat melayani seluruh kebutuhan data query HANYA dari indeks B-Tree tanpa perlu menyentuh blok data tabel fisik di heap, menghasilkan I/O paling cepat",
      "B": "Database menolak query karena tidak ada indeks",
      "C": "Indeks sedang rusak dan harus diperbaiki",
      "D": "Query membaca seluruh tabel secara berurutan"
    },
    "answer": "A",
    "explanation": {
      "correct": "`Index-Only Scan` adalah skenario ideal di mana semua kolom yang diminta pada klausa `SELECT` dan `WHERE` sudah terkandung di dalam index (Covering Index) dan berstatus all-visible pada Visibility Map.",
      "A": "Opsi A benar karena Index-Only Scan mengeliminasi pembacaan data heap table secara fisik.",
      "B": "Opsi B salah karena Index-Only Scan justru menandakan indeks dimanfaatkan optimal.",
      "C": "Opsi C salah karena bukan kondisi indeks rusak.",
      "D": "Opsi D salah karena membaca seluruh tabel adalah Sequential Scan."
    },
    "jobId": "fullstack",
    "code": "EXPLAIN (ANALYZE, BUFFERS)\nSELECT user_id, email FROM users WHERE email = 'test@mail.com';"
  },
  {
    "id": "FA-078",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "debug",
    "question": "Sebuah CTE di PostgreSQL versi lama (< 12) menyebabkan performa query sangat lambat karena bertindak sebagai 'Optimization Barrier'. Apa maksudnya?\n\n```sql\n-- Di PostgreSQL 12+ otomatis di-inline:\nWITH cte AS (SELECT * FROM huge_table)\nSELECT * FROM cte WHERE id = 123;\n```",
    "options": {
      "A": "PostgreSQL mengevaluasi CTE secara terisolasi dan meng-materialisasikannya ke memori terlebih dahulu tanpa melakukan push down predikat WHERE dari query utama ke dalam CTE",
      "B": "CTE dilarang di PostgreSQL",
      "C": "CTE menghapus indeks tabel",
      "D": "CTE membatasi query maksimal 10 baris"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di PostgreSQL < 12, CTE selalu di-materialisasi secara terpisah sehingga optimizer tidak bisa menggabungkan query. Sejak PostgreSQL 12, CTE di-inline otomatis kecuali jika secara eksplisit ditulis `WITH cte AS MATERIALIZED (...)`.",
      "A": "Opsi A benar karena materialisasi isolasi CTE lama menghalangi optimasi predicate pushdown.",
      "B": "Opsi B salah karena CTE sepenuhnya didukung.",
      "C": "Opsi C salah karena CTE tidak merusak indeks fisik.",
      "D": "Opsi D salah karena CTE tidak memiliki limit default."
    },
    "jobId": "fullstack",
    "code": "-- Di PostgreSQL 12+ otomatis di-inline:\nWITH cte AS (SELECT * FROM huge_table)\nSELECT * FROM cte WHERE id = 123;"
  },
  {
    "id": "FA-079",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "completion",
    "question": "Lengkapi klausa query PostgreSQL berikut untuk menangani konflik unique key secara elegan dengan memperbarui data (Upsert):\n\n```sql\nINSERT INTO users (email, name)\nVALUES ('test@mail.com', 'Andi')\n___;\n```",
    "options": {
      "A": "ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name",
      "B": "ON DUPLICATE KEY UPDATE name = VALUES(name)",
      "C": "IF CONFLICT UPDATE name",
      "D": "TRY UPDATE name"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di PostgreSQL, sintaks resmi untuk operasi UPSERT adalah `INSERT INTO ... ON CONFLICT (target_column) DO UPDATE SET col = EXCLUDED.col`.",
      "A": "Opsi A benar karena `ON CONFLICT (...) DO UPDATE` adalah sintaks resmi Upsert di PostgreSQL.",
      "B": "Opsi B salah karena ON DUPLICATE KEY UPDATE adalah sintaks MySQL.",
      "C": "Opsi C salah karena bukan sintaks SQL.",
      "D": "Opsi D salah karena bukan perintah SQL."
    },
    "jobId": "fullstack",
    "code": "INSERT INTO users (email, name)\nVALUES ('test@mail.com', 'Andi')\n___;"
  },
  {
    "id": "FA-080",
    "level": "advanced",
    "topic": "PostgreSQL/MySQL",
    "questionType": "output",
    "question": "Diberikan operasi windowing `SUM(amount) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`. Apa yang dihitung oleh formula tersebut?\n\n```sql\nSELECT date, amount,\n       SUM(amount) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as running_total\nFROM transactions;\n```",
    "options": {
      "A": "Running Total (akumulasi total berjalan dari baris pertama hingga baris saat ini)",
      "B": "Total keseluruhan penjualan di seluruh tabel",
      "C": "Rata-rata penjualan per hari",
      "D": "Nilai penjualan tertinggi"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` menjumlahkan seluruh nilai dari baris paling awal data sampai baris tempat kursor saat ini berada, menghasilkan nilai Running Total (kumulatif).",
      "A": "Opsi A benar karena mendefinisikan kalkulasi Running Total kumulatif secara tepat.",
      "B": "Opsi B salah karena total keseluruhan menggunakan window tanpa batas order.",
      "C": "Opsi C salah karena fungsi yang digunakan adalah SUM bukan AVG.",
      "D": "Opsi D salah karena bukan fungsi MAX."
    },
    "jobId": "fullstack",
    "code": "SELECT date, amount,\n       SUM(amount) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as running_total\nFROM transactions;"
  },
  {
    "id": "FA-081",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Dalam protokol OAuth 2.0 / OpenID Connect, mengapa ekstensi PKCE diwajibkan untuk aplikasi frontend SPA dan mobile?\n\n```typescript\n// OAuth2 PKCE params:\n// code_challenge = BASE64URL(SHA256(code_verifier))\n// response_type=code&code_challenge=...&code_challenge_method=S256\n```",
    "options": {
      "A": "Karena aplikasi SPA/mobile adalah 'Public Client' yang tidak dapat menyimpan client_secret secara rahasia, dan PKCE mencegah intersepsi authorization code menggunakan code_verifier dan code_challenge dinamis",
      "B": "PKCE mempercepat koneksi internet pengguna",
      "C": "PKCE menghapus kebutuhan token JWT",
      "D": "PKCE membuat password pengguna menjadi publik"
    },
    "answer": "A",
    "explanation": {
      "correct": "PKCE mengeliminasi kebutuhan `client_secret` statis pada public client dengan men-generate `code_verifier` kriptografis acak per sesi autentikasi.",
      "A": "Opsi A benar karena PKCE memproteksi public client dari pencurian authorization code tanpa perlu client_secret.",
      "B": "Opsi B salah karena tidak memengaruhi kecepatan jaringan.",
      "C": "Opsi C salah karena token tetap diterbitkan.",
      "D": "Opsi D salah karena PKCE justru memperketat keamanan."
    },
    "jobId": "fullstack",
    "code": "// OAuth2 PKCE params:\n// code_challenge = BASE64URL(SHA256(code_verifier))\n// response_type=code&code_challenge=...&code_challenge_method=S256"
  },
  {
    "id": "FA-082",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi header HTTP kustom standar industri berikut yang digunakan pada endpoint pembayaran untuk menjamin idempotensi request:\n\n```typescript\nPOST /api/v1/charges HTTP/1.1\nHost: api.stripe.com\n___: e4d909c2-555e-4f0f-8566-26e6d5e2e8e2\nContent-Type: application/json\n\n{\"amount\": 50000}\n```",
    "options": {
      "A": "Idempotency-Key: 7b8c9d0e-1234-5678-9abc-def012345678",
      "B": "Repeat-Token: true",
      "C": "Transaction-Safe: yes",
      "D": "Unique-Header: payment"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header `Idempotency-Key` membawa identifier unik (UUID) yang dikirim klien agar jika request mengalami retry jaringan, server tidak memproses pembayaran dua kali.",
      "A": "Opsi A benar karena Idempotency-Key adalah header de facto untuk operasi idempotent pada REST API pembayaran.",
      "B": "Opsi B salah karena bukan header standar.",
      "C": "Opsi C salah karena bukan header standar.",
      "D": "Opsi D salah karena bukan header standar."
    },
    "jobId": "fullstack",
    "code": "POST /api/v1/charges HTTP/1.1\nHost: api.stripe.com\n___: e4d909c2-555e-4f0f-8566-26e6d5e2e8e2\nContent-Type: application/json\n\n{\"amount\": 50000}"
  },
  {
    "id": "FA-083",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara algoritma Rate Limiting 'Token Bucket' dan 'Leaky Bucket'?",
    "options": {
      "A": "Token Bucket mengizinkan lonjakan traffic sesaat (burst) selama token tersedia, sedangkan Leaky Bucket memproses request dengan kecepatan output yang konstan tanpa toleransi burst",
      "B": "Leaky Bucket hanya bisa digunakan untuk WebSocket",
      "C": "Token Bucket tidak memiliki kapasitas penampung",
      "D": "Tidak ada perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Token Bucket mengisi token secara berkala dan memungkinkan pengguna menghabiskan token sekaligus dalam burst traffic. Leaky Bucket mengalirkan request dengan debit konstan, membuang kelebihan request jika antrean penuh.",
      "A": "Opsi A benar karena membedakan kemampuan burst handling vs constant smoothing rate.",
      "B": "Opsi B salah karena Leaky Bucket digunakan pada HTTP traffic shaping.",
      "C": "Opsi C salah karena Token Bucket memiliki kapasitas ember.",
      "D": "Opsi D salah karena karakteristik aliran traffic output keduanya berbeda."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FA-084",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Klien menerima respon HTTP dengan status `429 Too Many Requests` dan header `Retry-After: 60`. Apa yang harus dilakukan oleh klien?\n\n```typescript\nHTTP/1.1 429 Too Many Requests\nRetry-After: 60\nX-RateLimit-Limit: 100\nX-RateLimit-Remaining: 0\n```",
    "options": {
      "A": "Menahan diri dan menunggu setidaknya selama 60 detik sebelum mencoba mengirimkan request yang sama kembali ke server",
      "B": "Mengirimkan 60 request sekaligus seketika",
      "C": "Menghapus akun pengguna",
      "D": "Menonaktifkan koneksi HTTPS"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header `Retry-After: 60` memberi tahu klien durasi penalti rate limit dalam satuan detik. Klien yang cerdas harus mematuhi jeda ini.",
      "A": "Opsi A benar karena Retry-After menentukan durasi jeda wajib sebelum retry.",
      "B": "Opsi B salah karena mengirim request seketika akan memperpanjang penalti rate limit.",
      "C": "Opsi C salah karena bukan tindakan penghapusan akun.",
      "D": "Opsi D salah karena HTTPS tetap wajib aktif."
    },
    "jobId": "fullstack",
    "code": "HTTP/1.1 429 Too Many Requests\nRetry-After: 60\nX-RateLimit-Limit: 100\nX-RateLimit-Remaining: 0"
  },
  {
    "id": "FA-085",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "debug",
    "question": "Sebuah microservice gateway mengalami masalah ketika token JWT yang sudah di-logout oleh pengguna masih tetap bisa digunakan hingga masa expired-nya habis. Bagaimana strategi arsitektur terbaik untuk menyelesaikan masalah ini?\n\n```typescript\n// Simpan jti ke Redis dengan TTL sisa detik token:\nredisTemplate.opsForValue().set(\"blacklist:\" + jti, \"revoked\", remainingSeconds, TimeUnit.SECONDS);\n```",
    "options": {
      "A": "Menyimpan blacklist JTI (JWT ID) token yang di-revoke di distributed in-memory cache seperti Redis dengan TTL sesuai sisa umur token, atau memperpendek umur access token",
      "B": "Mengubah secret key server setiap kali ada user logout",
      "C": "Menonaktifkan token JWT dan kembali ke session database monolitik",
      "D": "Meminta pengguna tidak melakukan logout"
    },
    "answer": "A",
    "explanation": {
      "correct": "Strategi terbaik revocation adalah blacklist berbasis `jti` di Redis dengan TTL otomatis kedaluwarsa, dikombinasikan dengan masa hidup access token yang sangat singkat.",
      "A": "Opsi A benar karena Redis blacklist dengan TTL adalah pola standar industri untuk JWT revocation.",
      "B": "Opsi B salah karena mengganti secret key server akan menendang seluruh pengguna aktif.",
      "C": "Opsi C salah karena membuang seluruh keunggulan arsitektur stateless microservices.",
      "D": "Opsi D salah karena logout adalah fitur fundamental keamanan pengguna."
    },
    "jobId": "fullstack",
    "code": "// Simpan jti ke Redis dengan TTL sisa detik token:\nredisTemplate.opsForValue().set(\"blacklist:\" + jti, \"revoked\", remainingSeconds, TimeUnit.SECONDS);"
  },
  {
    "id": "FA-086",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Apa fungsi utama dari format standar RFC 7807 / RFC 9457 'Problem Details for HTTP APIs'?\n\n```typescript\n{\n  \"type\": \"https://example.com/probs/out-of-credit\",\n  \"title\": \"You do not have enough credit.\",\n  \"status\": 403,\n  \"detail\": \"Your current balance is 30, but that costs 50.\",\n  \"instance\": \"/account/12345/msgs/abc\"\n}\n```",
    "options": {
      "A": "Mendefinisikan struktur JSON standar industri yang konsisten untuk respon error mesin (memuat type, title, status, detail, dan instance)",
      "B": "Menghilangkan seluruh error dari aplikasi",
      "C": "Mengubah status code 500 menjadi 200",
      "D": "Membuat dokumentasi HTML otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Problem Details (`Content-Type: application/problem+json`) menstandarkan skema payload respon error REST API di seluruh layanan (type, title, status, detail, instance).",
      "A": "Opsi A benar sesuai spesifikasi resmi RFC 7807 Problem Details.",
      "B": "Opsi B salah karena bukan pencegah error.",
      "C": "Opsi C salah karena menyembunyikan status code error adalah anti-pattern.",
      "D": "Opsi D salah karena ini format respon runtime mesin."
    },
    "jobId": "fullstack",
    "code": "{\n  \"type\": \"https://example.com/probs/out-of-credit\",\n  \"title\": \"You do not have enough credit.\",\n  \"status\": 403,\n  \"detail\": \"Your current balance is 30, but that costs 50.\",\n  \"instance\": \"/account/12345/msgs/abc\"\n}"
  },
  {
    "id": "FA-087",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi circuit breaker Resilience4j berikut agar membuka sirkuit jika rasio kegagalan mencapai 50%:\n\n```typescript\nresilience4j.circuitbreaker:\n  instances:\n    userService:\n      ___: 50\n      slidingWindowSize: 100\n```",
    "options": {
      "A": "failureRateThreshold: 50",
      "B": "errorRate: 50",
      "C": "limitFailure: 50",
      "D": "breakThreshold: 50"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di konfigurasi Resilience4j CircuitBreaker, parameter `failureRateThreshold` mengonfigurasi persentase ambang batas kegagalan yang jika terlampaui akan mengubah status sirkuit dari CLOSED ke OPEN.",
      "A": "Opsi A benar karena failureRateThreshold adalah key konfigurasi resmi Resilience4j.",
      "B": "Opsi B salah karena bukan key resmi.",
      "C": "Opsi C salah karena bukan konfigurasi resmi.",
      "D": "Opsi D salah karena bukan key resmi."
    },
    "jobId": "fullstack",
    "code": "resilience4j.circuitbreaker:\n  instances:\n    userService:\n      ___: 50\n      slidingWindowSize: 100"
  },
  {
    "id": "FA-088",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "best-practice",
    "question": "Dalam integrasi Webhook, mengapa endpoint penerima webhook HARUS memverifikasi tanda tangan HMAC pada header request (misal `X-Signature-SHA256`)?\n\n```typescript\nString expectedSignature = HmacUtils.hmacSha256Hex(secretKey, rawPayload);\nif (!MessageDigest.isEqual(expectedSignature.getBytes(), receivedHeader.getBytes())) {\n  throw new SecurityException(\"Invalid Webhook Signature\");\n}\n```",
    "options": {
      "A": "Untuk memastikan keaslian payload dan memverifikasi bahwa request benar-benar dikirimkan oleh penyedia webhook terpercaya dan belum dimanipulasi di tengah jalan",
      "B": "Untuk mempercepat proses download gambar",
      "C": "Karena webhook tidak mendukung HTTPS",
      "D": "Hanya sebagai formalitas tanpa fungsi keamanan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Siapapun di internet dapat mengirim HTTP POST palsu ke URL publik endpoint webhook kita. Memverifikasi signature HMAC menggunakan shared secret key menjamin autentisitas dan integritas payload pesan.",
      "A": "Opsi A benar karena verifikasi signature HMAC adalah standar mutlak keamanan webhook publik.",
      "B": "Opsi B salah karena tidak memengaruhi kecepatan data biner.",
      "C": "Opsi C salah karena webhook modern selalu berjalan di atas HTTPS.",
      "D": "Opsi D salah karena verifikasi kriptografis krusial mencegah injeksi data palsu."
    },
    "jobId": "fullstack",
    "code": "String expectedSignature = HmacUtils.hmacSha256Hex(secretKey, rawPayload);\nif (!MessageDigest.isEqual(expectedSignature.getBytes(), receivedHeader.getBytes())) {\n  throw new SecurityException(\"Invalid Webhook Signature\");\n}"
  },
  {
    "id": "FA-089",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Klien memanggil endpoint dengan conditional header `If-Match: \"etag-lama\"` untuk pembaruan data, namun ETag di server sudah berubah. Status code berapakah yang dikembalikan server?\n\n```typescript\nPUT /api/documents/1 HTTP/1.1\nIf-Match: \"v1-abc\"\n\n// Response:\n// HTTP/1.1 412 Precondition Failed\n```",
    "options": {
      "A": "412 Precondition Failed",
      "B": "200 OK",
      "C": "404 Not Found",
      "D": "500 Internal Server Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 412 Precondition Failed digunakan dalam optimasi konkurensi web: ketika prakondisi `If-Match` gagal cocok dengan ETag saat ini, server menolak pembaruan untuk mencegah Lost Updates.",
      "A": "Opsi A benar karena 412 adalah respon standar kegagalan prakondisi If-Match.",
      "B": "Opsi B salah karena pembaruan ditolak demi konsistensi data.",
      "C": "Opsi C salah karena resource-nya ada.",
      "D": "Opsi D salah karena konflik konkurensi logis bukan crash server."
    },
    "jobId": "fullstack",
    "code": "PUT /api/documents/1 HTTP/1.1\nIf-Match: \"v1-abc\"\n\n// Response:\n// HTTP/1.1 412 Precondition Failed"
  },
  {
    "id": "FA-090",
    "level": "advanced",
    "topic": "REST API & HTTP",
    "questionType": "output",
    "question": "Apa fungsi dari HTTP Header `Content-Security-Policy` (CSP)?\n\n```typescript\nContent-Security-Policy: default-src 'self'; script-src 'self' https://trustedscripts.example.com;\n```",
    "options": {
      "A": "Membatasi sumber daya (skrip, gambar, stylesheet) apa saja yang diizinkan untuk dimuat dan dieksekusi oleh browser, memitigasi serangan Cross-Site Scripting (XSS)",
      "B": "Mengatur password database",
      "C": "Menghapus cookie browser saat logout",
      "D": "Mengenkripsi file harddisk server"
    },
    "answer": "A",
    "explanation": {
      "correct": "CSP adalah lapisan keamanan HTTP header yang memberitahu browser untuk hanya mengeksekusi skrip dari whitelist domain tepercaya, mencegah eksekusi inline script berbahaya yang diinjeksi penyerang.",
      "A": "Opsi A benar sesuai fungsi mitigasi XSS dari Content-Security-Policy header.",
      "B": "Opsi B salah karena bukan keamanan database internal.",
      "C": "Opsi C salah karena bukan pengatur cookie.",
      "D": "Opsi D salah karena beroperasi di layer kebijakan browser client."
    },
    "jobId": "fullstack",
    "code": "Content-Security-Policy: default-src 'self'; script-src 'self' https://trustedscripts.example.com;"
  },
  {
    "id": "FA-091",
    "level": "advanced",
    "topic": "Git & SDLC",
    "questionType": "output",
    "question": "Empat tipe objek fundamental apa sajakah yang disimpan Git di dalam direktori internal `.git/objects/` menggunakan hashing SHA-1 / SHA-256?\n\n```typescript\n# Melihat tipe objek git dari SHA hash:\ngit cat-file -t e69de29bb2d1d6434b8b29ae775ad8c2e48c5391\n```",
    "options": {
      "A": "Blob (konten file), Tree (struktur direktori/nama file), Commit (metadata commit), dan Annotated Tag",
      "B": "File, Folder, Branch, dan Remote",
      "C": "Stash, Index, Working, dan HEAD",
      "D": "Master, Main, Dev, dan Test"
    },
    "answer": "A",
    "explanation": {
      "correct": "Arsitektur internal Git adalah Content-Addressable Key-Value Store yang menyimpan 4 tipe objek: `blob` (isi file mentah), `tree` (memetakan nama file dan permissions ke hash blob/tree), `commit` (menunjuk ke root tree, parent commit, author, pesan), serta `tag`.",
      "A": "Opsi A benar karena mencantumkan 4 objek fundamental arsitektur database Git.",
      "B": "Opsi B salah karena branch hanyalah pointer teks tipis.",
      "C": "Opsi C salah karena itu adalah area kerja, bukan objek database.",
      "D": "Opsi D salah karena itu nama-nama branch."
    },
    "jobId": "fullstack",
    "code": "# Melihat tipe objek git dari SHA hash:\ngit cat-file -t e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
  },
  {
    "id": "FA-092",
    "level": "advanced",
    "topic": "Git & SDLC",
    "questionType": "completion",
    "question": "Lengkapi perintah Git berikut untuk memulai proses pelacakan bug otomatis menggunakan algoritma Binary Search di antara rentang commit yang diketahui:\n\n```typescript\ngit ___ \ngit bisect bad HEAD\ngit bisect good v1.0.0\n```",
    "options": {
      "A": "git bisect start",
      "B": "git debug start",
      "C": "git search start",
      "D": "git trace start"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git bisect` adalah alat bawaan Git yang sangat efisien untuk menemukan commit spesifik yang memperkenalkan bug/regresi dengan membagi dua (binary search) riwayat commit secara otomatis.",
      "A": "Opsi A benar karena `git bisect start` adalah perintah resmi memulai binary search commit.",
      "B": "Opsi B salah karena git debug bukan perintah Git.",
      "C": "Opsi C salah karena git search bukan perintah bawaan.",
      "D": "Opsi D salah karena git trace bukan perintah Git."
    },
    "jobId": "fullstack",
    "code": "git ___ \ngit bisect bad HEAD\ngit bisect good v1.0.0"
  },
  {
    "id": "FA-093",
    "level": "advanced",
    "topic": "Git & SDLC",
    "questionType": "best-practice",
    "question": "Apa prinsip utama dari pendekatan percabangan 'Trunk-Based Development' dibandingkan 'GitFlow' tradisional pada tim continuous deployment?",
    "options": {
      "A": "Semua developer mengintegrasikan commit kecil secara sering langsung ke satu branch utama (trunk/main) dengan bantuan Feature Flags, menghindari long-lived branch dan Merge Hell",
      "B": "Membuat puluhan branch rilis yang berumur berbulan-bulan",
      "C": "Menghindari pengujian otomatis",
      "D": "Hanya satu developer yang boleh menulis kode per minggu"
    },
    "answer": "A",
    "explanation": {
      "correct": "Trunk-Based Development mendorong frekuensi integrasi tinggi dengan short-lived branches (< 1 hari). Fitur yang belum siap dirilis disembunyikan menggunakan Feature Flags, mengeliminasi konflik merge besar di akhir sprint.",
      "A": "Opsi A benar karena mendefinisikan prinsip integrasi frekuentatif Trunk-Based Development.",
      "B": "Opsi B salah karena long-lived branches adalah ciri GitFlow.",
      "C": "Opsi C salah karena Trunk-Based justru mewajibkan automated testing yang sangat kokoh.",
      "D": "Opsi D salah karena tim bekerja secara kolaboratif bersamaan."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FA-094",
    "level": "advanced",
    "topic": "Git & SDLC",
    "questionType": "output",
    "question": "Apa yang dicatat oleh mekanisme Git `reflog` yang sangat berguna untuk menyelamatkan commit yang 'hilang' setelah `git reset --hard`?\n\n```typescript\n$ git reflog\n1a2b3c4 HEAD@{0}: reset: moving to HEAD~1\n5d6e7f8 HEAD@{1}: commit: Fitur penting yang hilang\n```",
    "options": {
      "A": "Mencatat setiap kali ujung branch atau HEAD berpindah posisi di repositori lokal, memungkinkan pemulihan commit yang terlepas (dangling commits)",
      "B": "Mencatat password developer",
      "C": "Mencatat log server Nginx",
      "D": "Mencatat error kompilasi Java"
    },
    "answer": "A",
    "explanation": {
      "correct": "`git reflog` mencatat riwayat pemindahan pointer HEAD lokal. Jika Anda tidak sengaja menjalankan `git reset --hard`, Anda dapat mencari hash commit lama di reflog dan mengembalikannya.",
      "A": "Opsi A benar karena reflog adalah jaring pengaman utama penyelamat commit yang terlepas di Git.",
      "B": "Opsi B salah karena Git tidak mencatat password.",
      "C": "Opsi C salah karena reflog adalah tool internal Git, bukan server log.",
      "D": "Opsi D salah karena compiler terpisah dari version control."
    },
    "jobId": "fullstack",
    "code": "$ git reflog\n1a2b3c4 HEAD@{0}: reset: moving to HEAD~1\n5d6e7f8 HEAD@{1}: commit: Fitur penting yang hilang"
  },
  {
    "id": "FA-095",
    "level": "advanced",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara 'Squash Merge' dan 'Rebase Merge' saat menggabungkan Pull Request?",
    "options": {
      "A": "`Squash Merge` memadatkan seluruh commit dari feature branch menjadi satu commit tunggal baru di branch target, sedangkan `Rebase Merge` mempertahankan setiap commit individual dan menatanya secara linear",
      "B": "Squash merge menghapus file yang diubah",
      "C": "Rebase merge membuat 10 merge commit baru",
      "D": "Keduanya persis sama tanpa perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Squash Merge menyatukan commit-commit kecil menjadi satu commit bersih di branch main. Rebase Merge menjaga granularitas seluruh commit individual tanpa membuat merge commit.",
      "A": "Opsi A benar karena membedakan penggabungan satu commit (Squash) vs preservasi seluruh commit linear (Rebase).",
      "B": "Opsi B salah karena squash tidak menghapus perubahan file.",
      "C": "Opsi C salah karena rebase merge justru tidak menghasilkan merge commit.",
      "D": "Opsi D salah karena riwayat history commit yang dihasilkan sangat berbeda."
    },
    "jobId": "fullstack"
  },
  {
    "id": "FA-096",
    "level": "advanced",
    "topic": "GIS Dasar",
    "questionType": "output",
    "question": "Fungsi PostGIS manakah yang digunakan untuk melakukan transformasi sistem koordinat spasial geometri dari satu proyeksi ke proyeksi lain (misal dari WGS 84 EPSG:4326 ke UTM EPSG:3857)?\n\n```typescript\n-- Reproyeksi titik dari WGS 84 (derajat) ke Web Mercator (meter):\nSELECT ST_Transform(geom, 3857) FROM points_table;\n```",
    "options": {
      "A": "ST_Transform(geom, target_srid)",
      "B": "ST_Convert(geom, target_srid)",
      "C": "ST_Project(geom, target_srid)",
      "D": "ST_Translate(geom, target_srid)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Transform(geometry g1, integer srid)` mengkalkulasi ulang koordinat titik dari sistem referensi spasial sumber ke sistem referensi spasial target menggunakan library geodesi PROJ.",
      "A": "Opsi A benar karena ST_Transform adalah fungsi resmi PostGIS untuk reproyeksi koordinat.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi reproyeksi.",
      "D": "Opsi D salah karena ST_Translate untuk pergeseran geometri (offset), bukan reproyeksi datum."
    },
    "jobId": "fullstack",
    "code": "-- Reproyeksi titik dari WGS 84 (derajat) ke Web Mercator (meter):\nSELECT ST_Transform(geom, 3857) FROM points_table;"
  },
  {
    "id": "FA-097",
    "level": "advanced",
    "topic": "GIS Dasar",
    "questionType": "completion",
    "question": "Lengkapi query spatial join PostGIS berikut untuk menemukan seluruh fasilitas yang berada dalam radius jarak 1.000 meter dari koordinat titik tertentu menggunakan tipe geography:\n\n```sql\nSELECT f.id, f.name FROM facilities f\nWHERE ___ ;\n```",
    "options": {
      "A": "ST_DWithin(f.geom::geography, ST_MakePoint(106.8, -6.2)::geography, 1000)",
      "B": "ST_Distance(f.geom, 1000)",
      "C": "ST_Radius(f.geom, 1000)",
      "D": "ST_Near(f.geom, 1000)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_DWithin(geog1, geog2, distance_in_meters)` menggunakan indeks spasial untuk memfilter geometri yang berjarak kurang dari atau sama dengan ambang batas meter secara sangat efisien di atas ellipsoid bumi.",
      "A": "Opsi A benar karena ST_DWithin pada tipe geography mengukur jarak dalam satuan meter dan memanfaatkan indeks GiST.",
      "B": "Opsi B salah karena ST_Distance tidak memfilter secara efisien menggunakan index bounding box.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack",
    "code": "SELECT f.id, f.name FROM facilities f\nWHERE ___ ;"
  },
  {
    "id": "FA-098",
    "level": "advanced",
    "topic": "GIS Dasar",
    "questionType": "best-practice",
    "question": "Mengapa operator spasial bounding box `&&` di PostGIS (contoh: `geom1 && geom2`) jauh lebih cepat daripada fungsi `ST_Intersects(geom1, geom2)` pada poligon yang kompleks?\n\n```typescript\n-- Memanfaatkan Primary Filter && dan Secondary Filter ST_Intersects:\nSELECT * FROM parcels a, boundaries b\nWHERE a.geom && b.geom AND ST_Intersects(a.geom, b.geom);\n```",
    "options": {
      "A": "Operator `&&` hanya membandingkan kotak batas minimum 2D (Bounding Box) menggunakan indeks GiST tanpa menguji irisan batas geometri poligon yang detail, bertindak sebagai Primary Filter",
      "B": "Operator && mengabaikan data koordinat",
      "C": "ST_Intersects dilarang di PostgreSQL",
      "D": "Operator && hanya bisa digunakan untuk teks"
    },
    "answer": "A",
    "explanation": {
      "correct": "Arsitektur query spasial PostGIS menggunakan strategi Two-Phase: Tahap pertama menyaring kandidat secara super cepat menggunakan Bounding Box (`&&` via GiST index). Tahap kedua menguji irisan poligon detail (`ST_Intersects`) hanya pada kandidat yang lolos tahap pertama.",
      "A": "Opsi A benar karena menjelaskan strategi Two-Phase spatial filtering Bounding Box.",
      "B": "Opsi B salah karena bounding box diturunkan langsung dari koordinat ekstrem.",
      "C": "Opsi C salah karena ST_Intersects adalah fungsi standar OGC.",
      "D": "Opsi D salah karena operator && di PostGIS khusus untuk geometri/geografi."
    },
    "jobId": "fullstack",
    "code": "-- Memanfaatkan Primary Filter && dan Secondary Filter ST_Intersects:\nSELECT * FROM parcels a, boundaries b\nWHERE a.geom && b.geom AND ST_Intersects(a.geom, b.geom);"
  },
  {
    "id": "FA-099",
    "level": "advanced",
    "topic": "GIS Dasar",
    "questionType": "output",
    "question": "Apa perbedaan mendasar antara layanan web GIS standar OGC: Web Map Service (WMS) dan Web Feature Service (WFS)?\n\n```typescript\n// WMS request mengembalikan gambar:\n// .../wms?SERVICE=WMS&REQUEST=GetMap&LAYERS=roads&FORMAT=image/png\n// WFS request mengembalikan data vektor:\n// .../wfs?SERVICE=WFS&REQUEST=GetFeature&TYPENAME=roads&OUTPUTFORMAT=application/json\n```",
    "options": {
      "A": "WMS mengembalikan peta dalam bentuk citra gambar raster siap saji (PNG/JPEG), sedangkan WFS mengembalikan data vektor mentah geografis (beserta atribut dan koordinat) untuk dimanipulasi di sisi klien",
      "B": "WMS hanya untuk satelit cuaca, WFS untuk peta jalan",
      "C": "WFS tidak mendukung format GeoJSON",
      "D": "Tidak ada perbedaan"
    },
    "answer": "A",
    "explanation": {
      "correct": "WMS merender peta di server dan mengirim gambar bitmap statis ke browser. WFS mengirimkan geometri vektor aktual (GeoJSON/GML) sehingga browser client dapat melakukan hover, klik, styling dinamis, dan analisis spasial.",
      "A": "Opsi A benar karena membedakan pengiriman citra raster (WMS) vs data vektor fitur mentah (WFS).",
      "B": "Opsi B salah karena keduanya adalah standar OGC umum untuk semua data spasial.",
      "C": "Opsi C salah karena WFS modern mendukung output format GeoJSON.",
      "D": "Opsi D salah karena format data yang ditransmisikan berbeda total."
    },
    "jobId": "fullstack",
    "code": "// WMS request mengembalikan gambar:\n// .../wms?SERVICE=WMS&REQUEST=GetMap&LAYERS=roads&FORMAT=image/png\n// WFS request mengembalikan data vektor:\n// .../wfs?SERVICE=WFS&REQUEST=GetFeature&TYPENAME=roads&OUTPUTFORMAT=application/json"
  },
  {
    "id": "FA-100",
    "level": "advanced",
    "topic": "GIS Dasar",
    "questionType": "output",
    "question": "Perhatikan fungsi spasial `ST_Union(geom)` berikut pada dua poligon yang saling bertumpukan. Bentuk apa yang dihasilkan oleh fungsi tersebut?\n\n```sql\nSELECT ST_Union(poly_a, poly_b) as merged_polygon FROM spatial_polygons;\n```",
    "options": {
      "A": "Satu poligon gabungan tunggal yang menyatukan kedua area poligon tersebut dan menghilangkan batas tumpang tindih internal",
      "B": "Hanya area irisan tumpang tindihnya saja",
      "C": "Dua titik koordinat",
      "D": "Nilai boolean true"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Union(geom1, geom2)` menggabungkan dua atau lebih geometri menjadi satu geometri utuh, meleburkan (dissolving) batas-batas persekutuan yang saling beririsan di dalamnya.",
      "A": "Opsi A benar karena ST_Union menghasilkan poligon peleburan gabungan.",
      "B": "Opsi B salah karena area irisan adalah hasil fungsi ST_Intersection.",
      "C": "Opsi C salah karena bukan konversi ke titik.",
      "D": "Opsi D salah karena ST_Union mengembalikan objek geometri, bukan boolean."
    },
    "jobId": "fullstack",
    "code": "SELECT ST_Union(poly_a, poly_b) as merged_polygon FROM spatial_polygons;"
  }
];
