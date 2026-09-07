import { Question } from './types';

export const LOG_Q: Question[] = [
  // ─── BEGINNER ───
  {
    level: "beginner",
    q: `Deret angka: 7, 14, 21, ___, 35, 42?`,
    opts: { A: `24`, B: `26`, C: `27`, D: `28` },
    ans: "D",
    exp: `Pola deret adalah penambahan 7 (+7). 21 + 7 = 28.`
  },
  {
    level: "beginner",
    q: `Lanjutkan deret: 1, 4, 9, 16, 25, ___?`,
    opts: { A: `30`, B: `32`, C: `36`, D: `49` },
    ans: "C",
    exp: `Deret ini adalah kuadrat dari bilangan asli (1^2, 2^2, 3^2, 4^2, 5^2, 6^2 = 36).`
  },
  {
    level: "beginner",
    q: `Deret angka berulang: 4, 7, 5, 8, 6, 9, ___?`,
    opts: { A: `7`, B: `8`, C: `10`, D: `11` },
    ans: "A",
    exp: `Pola deret adalah +3, -2 secara berulang. 9 - 2 = 7.`
  },
  {
    level: "beginner",
    q: `Deret angka: 100, 95, 85, 70, 50, ___?`,
    opts: { A: `20`, B: `25`, C: `30`, D: `35` },
    ans: "B",
    exp: `Pola pengurangan meningkat: -5, -10, -15, -20, sehingga berikutnya -25 (50 - 25 = 25).`
  },
  {
    level: "beginner",
    q: `Lanjutkan deret bilangan prima: 2, 3, 5, 7, 11, 13, ___?`,
    opts: { A: `14`, B: `15`, C: `17`, D: `19` },
    ans: "C",
    exp: `Angka selanjutnya dalam deret bilangan prima setelah 13 adalah 17.`
  },
  {
    level: "beginner",
    q: `Analogi: SOURCE CODE : COMPILER = BYTECODE : ___?`,
    opts: { A: `ASSEMBLER`, B: `OS`, C: `JVM`, D: `IDE` },
    ans: "C",
    exp: `Source code dikonversi oleh compiler, sedangkan bytecode dieksekusi oleh JVM (Java Virtual Machine).`
  },
  {
    level: "beginner",
    q: `Silogisme: Semua berkas berekstensi .java harus di-compile menjadi .class sebelum dijalankan. File Main.java adalah berkas berekstensi .java. Kesimpulannya?`,
    opts: { A: `File Main.java bisa langsung dijalankan.`, B: `File Main.java harus di-compile menjadi .class.`, C: `File Main.java bukan program.`, D: `Tidak semua file .java perlu di-compile.` },
    ans: "B",
    exp: `Sesuai premis, karena Main.java berekstensi .java, maka harus di-compile.`
  },
  {
    level: "beginner",
    q: `Jika server mati, maka aplikasi tidak dapat diakses. Saat ini aplikasi dapat diakses. Kesimpulannya?`,
    opts: { A: `Server mati.`, B: `Server tidak mati.`, C: `Aplikasi error.`, D: `Tidak dapat ditarik kesimpulan.` },
    ans: "B",
    exp: `Menggunakan Modus Tollens (p -> q, ~q, maka ~p). Karena aplikasi dapat diakses, maka server tidak mati.`
  },
  {
    level: "beginner",
    q: `Deret angka: 2, 4, 8, 16, 32, ___?`,
    opts: { A: `60`, B: `62`, C: `64`, D: `66` },
    ans: "C",
    exp: `Dikalikan 2 pada setiap langkahnya (32 * 2 = 64).`
  },
  {
    level: "beginner",
    q: `Analogi: KODE : PROGRAMMER = DESAIN : ___?`,
    opts: { A: `SISTEM`, B: `UI/UX DESIGNER`, C: `DATABASE`, D: `MANAJER` },
    ans: "B",
    exp: `Seorang programmer membuat kode, seorang UI/UX designer membuat desain.`
  },
  {
    level: "beginner",
    q: `Semua programmer menyukai kopi. Budi adalah programmer. Kesimpulan:`,
    opts: { A: `Budi menyukai teh.`, B: `Budi mungkin menyukai kopi.`, C: `Budi menyukai kopi.`, D: `Budi tidak menyukai kopi.` },
    ans: "C",
    exp: `Silogisme sederhana: Semua A adalah B. C adalah A. Maka C adalah B.`
  },
  {
    level: "beginner",
    q: `Deret huruf: A, C, E, G, I, ___?`,
    opts: { A: `J`, B: `K`, C: `L`, D: `M` },
    ans: "B",
    exp: `Melompati satu huruf (B, D, F, H dilompati). Setelah I adalah K.`
  },
  {
    level: "beginner",
    q: `Sebuah algoritma berjalan 2 kali lebih cepat dari sebelumnya. Jika sebelumnya butuh 10 detik, berapa lama sekarang?`,
    opts: { A: `2 detik`, B: `5 detik`, C: `20 detik`, D: `0.5 detik` },
    ans: "B",
    exp: `10 dibagi 2 sama dengan 5 detik.`
  },
  {
    level: "beginner",
    q: `Analogi: VARIABLE : DATA = METHOD : ___?`,
    opts: { A: `FUNGSI`, B: `CLASS`, C: `AKSI/LOGIKA`, D: `INTEGER` },
    ans: "C",
    exp: `Variable menyimpan data, sedangkan method menyimpan aksi atau logika program.`
  },
  {
    level: "beginner",
    q: `Jika x = 5 dan y = x + 3, berapakah nilai y - x?`,
    opts: { A: `3`, B: `5`, C: `8`, D: `2` },
    ans: "A",
    exp: `y = 8. Maka 8 - 5 = 3 (selisih selalu 3 berdasarkan y = x + 3).`
  },
  {
    level: "beginner",
    q: `Deret angka: 5, 10, 20, 40, ___?`,
    opts: { A: `60`, B: `70`, C: `80`, D: `90` },
    ans: "C",
    exp: `Rasio deret geometri adalah 2. 40 * 2 = 80.`
  },
  {
    level: "beginner",
    q: `Semua error menyebabkan program berhenti. NullPointerException adalah error. Kesimpulan:`,
    opts: { A: `NullPointerException bisa diabaikan.`, B: `NullPointerException menyebabkan program berhenti.`, C: `Program berhenti bukan karena error.`, D: `Error tidak selalu menghentikan program.` },
    ans: "B",
    exp: `Karena NullPointerException termasuk error, maka ia menyebabkan program berhenti.`
  },
  {
    level: "beginner",
    q: `Pilih kata yang tidak termasuk dalam kelompoknya:`,
    opts: { A: `Java`, B: `Python`, C: `HTML`, D: `C++` },
    ans: "C",
    exp: `HTML adalah bahasa markup, sedangkan sisanya adalah bahasa pemrograman umum.`
  },
  {
    level: "beginner",
    q: `Deret: 1, 2, 4, 7, 11, ___?`,
    opts: { A: `14`, B: `15`, C: `16`, D: `17` },
    ans: "C",
    exp: `Penambahan berurutan: +1, +2, +3, +4, selanjutnya +5 (11 + 5 = 16).`
  },
  {
    level: "beginner",
    q: `Jika hujan, maka jalanan basah. Jalanan tidak basah. Kesimpulan:`,
    opts: { A: `Hujan deras.`, B: `Tidak hujan.`, C: `Jalanan kering karena panas.`, D: `Sedang mendung.` },
    ans: "B",
    exp: `Modus Tollens: p -> q. ~q -> ~p. Maka tidak hujan.`
  },
  {
    level: "beginner",
    q: `Analogi: ARRAY : INDEKS = HASHMAP : ___?`,
    opts: { A: `POINTER`, B: `VALUE`, C: `KEY`, D: `LIST` },
    ans: "C",
    exp: `Elemen array diakses menggunakan indeks, sedangkan HashMap diakses menggunakan key.`
  },
  {
    level: "beginner",
    q: `Manakah dari berikut ini yang bernilai TRUE?`,
    opts: { A: `5 > 7`, B: `4 == '4'`, C: `3 <= 3`, D: `2 != 2` },
    ans: "C",
    exp: `3 kurang dari atau sama dengan 3 adalah pernyataan yang benar.`
  },
  {
    level: "beginner",
    q: `Sebuah looping berjalan dari i=0 hingga i<5. Berapa kali looping tereksekusi?`,
    opts: { A: `4`, B: `5`, C: `6`, D: `Tidak berhingga` },
    ans: "B",
    exp: `Iterasi terjadi untuk i = 0, 1, 2, 3, 4 (Total 5 kali).`
  },
  {
    level: "beginner",
    q: `Deret angka menurun: 50, 45, 40, 35, ___?`,
    opts: { A: `25`, B: `30`, C: `20`, D: `15` },
    ans: "B",
    exp: `Pola dikurangi 5 setiap langkah. 35 - 5 = 30.`
  },
  // ─── INTERMEDIATE ───
  {
    level: "intermediate",
    q: `Deret angka: 2, 6, 12, 20, 30, ___?`,
    opts: { A: `36`, B: `40`, C: `42`, D: `48` },
    ans: "C",
    exp: `Pola: +4, +6, +8, +10. Selanjutnya +12, jadi 30 + 12 = 42.`
  },
  {
    level: "intermediate",
    q: `Deret angka: 3, 5, 9, 17, 33, ___?`,
    opts: { A: `65`, B: `66`, C: `67`, D: `68` },
    ans: "A",
    exp: `Pola: *2 -1. 33 * 2 - 1 = 65. Atau selisih pangkat dua: 2, 4, 8, 16, 32.`
  },
  {
    level: "intermediate",
    q: `Anton lebih tua dari Budi. Cici lebih muda dari Budi. Siapa yang paling muda?`,
    opts: { A: `Anton`, B: `Budi`, C: `Cici`, D: `Tidak bisa ditentukan` },
    ans: "C",
    exp: `Urutan umur dari tua ke muda: Anton > Budi > Cici.`
  },
  {
    level: "intermediate",
    q: `Analogi: RAM : VOLATILE = HARDDISK : ___?`,
    opts: { A: `PERMANEN`, B: `NON-VOLATILE`, C: `KAPASITAS`, D: `LAMBAT` },
    ans: "B",
    exp: `RAM bersifat volatile (sementara), sedangkan Harddisk bersifat non-volatile (data tidak hilang saat listrik mati).`
  },
  {
    level: "intermediate",
    q: `Deret: 1, 1, 2, 3, 5, 8, 13, ___?`,
    opts: { A: `18`, B: `21`, C: `24`, D: `25` },
    ans: "B",
    exp: `Ini adalah deret Fibonacci, angka berikutnya adalah penjumlahan dua angka sebelumnya (8 + 13 = 21).`
  },
  {
    level: "intermediate",
    q: `Tiga developer (A, B, C) menyelesaikan bug. A lebih cepat dari B, tapi C lebih cepat dari A. Siapa yang paling lambat?`,
    opts: { A: `A`, B: `B`, C: `C`, D: `A dan B` },
    ans: "B",
    exp: `Kecepatan: C > A > B. Maka B adalah yang paling lambat.`
  },
  {
    level: "intermediate",
    q: `Jika A = 5, B = 2. Berapakah hasil dari A % B + (A * B)?`,
    opts: { A: `10`, B: `11`, C: `12`, D: `15` },
    ans: "B",
    exp: `A % B = 5 % 2 = 1. A * B = 10. 1 + 10 = 11.`
  },
  {
    level: "intermediate",
    q: `Sebuah fungsi rekursif memanggil dirinya sendiri. Agar tidak terjadi Infinite Loop, fungsi tersebut membutuhkan:`,
    opts: { A: `Variabel Global`, B: `Base Case (Kondisi Berhenti)`, C: `Parameter Kosong`, D: `Return Null` },
    ans: "B",
    exp: `Fungsi rekursif wajib memiliki base case untuk menghentikan pemanggilan dirinya.`
  },
  {
    level: "intermediate",
    q: `Deret huruf: Z, X, V, T, R, ___?`,
    opts: { A: `P`, B: `O`, C: `Q`, D: `S` },
    ans: "A",
    exp: `Mundur melewati satu huruf dalam alfabet. Sebelum R adalah P (melewati Q).`
  },
  {
    level: "intermediate",
    q: `Dalam sebuah antrian, posisi x ada di urutan ke-4 dari depan dan ke-7 dari belakang. Berapa total orang dalam antrian?`,
    opts: { A: `10`, B: `11`, C: `9`, D: `12` },
    ans: "A",
    exp: `(Posisi depan + Posisi belakang) - 1 = (4 + 7) - 1 = 10.`
  },
  {
    level: "intermediate",
    q: `Jika x > y dan y > z, maka pernyataan mana yang pasti salah?`,
    opts: { A: `x > z`, B: `z < x`, C: `y = z`, D: `z < y` },
    ans: "C",
    exp: `Jika y > z, maka y tidak mungkin sama dengan z (y = z pasti salah).`
  },
  {
    level: "intermediate",
    q: `Pola angka: 2, 3, 6, 18, 108, ___?`,
    opts: { A: `1944`, B: `2052`, C: `1800`, D: `2160` },
    ans: "A",
    exp: `Pola: angka saat ini adalah hasil kali dua angka sebelumnya (6 * 18 = 108, 18 * 108 = 1944).`
  },
  {
    level: "intermediate",
    q: `Semua karyawan di lantai 4 adalah programmer. Beberapa programmer menggunakan Mac. Kesimpulan yang benar:`,
    opts: { A: `Semua yang di lantai 4 menggunakan Mac.`, B: `Beberapa yang di lantai 4 menggunakan Mac.`, C: `Tidak semua programmer ada di lantai 4.`, D: `Tidak ada kesimpulan pasti tentang lantai 4 yang pakai Mac.` },
    ans: "D",
    exp: `Hanya diketahui beberapa programmer pakai Mac, belum tentu mereka ada di lantai 4.`
  },
  {
    level: "intermediate",
    q: `Analogi Logika: KELAS : OBJEK = BLUEPRINT : ___?`,
    opts: { A: `KERTAS`, B: `RUMAH`, C: `GAMBAR`, D: `ARSITEK` },
    ans: "B",
    exp: `Kelas adalah blueprint dari objek, seperti blueprint bangunan adalah rancangan dari rumah (wujud nyata).`
  },
  {
    level: "intermediate",
    q: `Nilai logika dari: (True AND False) OR (True AND True)?`,
    opts: { A: `True`, B: `False`, C: `Null`, D: `Syntax Error` },
    ans: "A",
    exp: `(False) OR (True) menghasilkan True.`
  },
  {
    level: "intermediate",
    q: `Mana yang merupakan hasil evaluasi dari 10 & 12 (Bitwise AND)?`,
    opts: { A: `8`, B: `10`, C: `12`, D: `14` },
    ans: "A",
    exp: `10 (1010) AND 12 (1100) = 1000, yaitu 8 dalam desimal.`
  },
  {
    level: "intermediate",
    q: `Budi memiliki apel 3 kali lebih banyak dari Ali. Jika total apel mereka 20, berapa apel Ali?`,
    opts: { A: `4`, B: `5`, C: `10`, D: `15` },
    ans: "B",
    exp: `Ali = x, Budi = 3x. x + 3x = 20 -> 4x = 20 -> x = 5.`
  },
  {
    level: "intermediate",
    q: `Deret: 10, 11, 13, 16, 20, ___?`,
    opts: { A: `24`, B: `25`, C: `26`, D: `27` },
    ans: "B",
    exp: `Penambahan: +1, +2, +3, +4, +5. 20 + 5 = 25.`
  },
  {
    level: "intermediate",
    q: `Sebuah mobil bergerak 60 km/jam. Berapa menit yang dibutuhkan untuk menempuh 15 km?`,
    opts: { A: `10`, B: `15`, C: `20`, D: `30` },
    ans: "B",
    exp: `Kecepatan 60 km/jam berarti 1 km per menit. Untuk 15 km butuh 15 menit.`
  },
  {
    level: "intermediate",
    q: `Logika IF: Jika x % 2 == 0, maka y = 'Genap', else y = 'Ganjil'. Jika x = -5, apakah nilai y?`,
    opts: { A: `Genap`, B: `Ganjil`, C: `Error`, D: `Tidak ada nilai` },
    ans: "B",
    exp: `-5 modulus 2 tidak sama dengan 0 (hasilnya -1 di beberapa bahasa, tapi intinya bukan 0), maka Ganjil.`
  },
  {
    level: "intermediate",
    q: `Jika semua A adalah B, dan tidak ada B yang merupakan C, manakah yang benar?`,
    opts: { A: `Beberapa A adalah C.`, B: `Semua C adalah A.`, C: `Tidak ada A yang merupakan C.`, D: `Semua B adalah A.` },
    ans: "C",
    exp: `Karena A ada di dalam B, dan B sama sekali terpisah dari C, maka A pasti terpisah dari C.`
  },
  {
    level: "intermediate",
    q: `Pola huruf: A, D, H, M, ___?`,
    opts: { A: `S`, B: `T`, C: `U`, D: `R` },
    ans: "A",
    exp: `Penambahan urutan: +3 (D), +4 (H), +5 (M), +6 (S).`
  },
  {
    level: "intermediate",
    q: `Dalam suatu tim, 5 orang bisa coding Java, 4 orang bisa Python. Jika 2 orang bisa keduanya dan tim berisi 10 orang, berapa yang tidak bisa keduanya?`,
    opts: { A: `2`, B: `3`, C: `4`, D: `1` },
    ans: "B",
    exp: `Total bisa (Java atau Python) = 5 + 4 - 2 = 7. Yang tidak bisa = 10 - 7 = 3.`
  },
  // ─── ADVANCED ───
  {
    level: "advanced",
    q: `Ekspresi boolean manakah yang ekuivalen dengan NOT (A OR B)?`,
    opts: { A: `NOT A OR NOT B`, B: `NOT A AND NOT B`, C: `A AND B`, D: `A OR B` },
    ans: "B",
    exp: `Hukum De Morgan menyatakan bahwa kebalikan dari (A OR B) adalah (!A AND !B).`
  },
  {
    level: "advanced",
    q: `Terdapat 4 prosesor (P1, P2, P3, P4). P1 harus selesai sebelum P3. P2 harus selesai sebelum P1. Urutan eksekusi yang valid adalah?`,
    opts: { A: `P3, P1, P2, P4`, B: `P2, P1, P3, P4`, C: `P1, P2, P3, P4`, D: `P4, P3, P1, P2` },
    ans: "B",
    exp: `Berdasarkan syarat: P2 di awal, diikuti P1, lalu P3. P4 bisa di mana saja.`
  },
  {
    level: "advanced",
    q: `Berapa banyak cara mengatur 3 buku (A, B, C) di rak?`,
    opts: { A: `3`, B: `6`, C: `9`, D: `12` },
    ans: "B",
    exp: `Permutasi 3 elemen adalah 3! = 3 * 2 * 1 = 6 cara.`
  },
  {
    level: "advanced",
    q: `Dalam graf berarah, Node A menunjuk B dan C. B menunjuk D. C menunjuk D. D menunjuk A. Berapa panjang jalur terpendek (jumlah edge) dari B ke C?`,
    opts: { A: `1`, B: `2`, C: `3`, D: `Tidak ada jalur` },
    ans: "C",
    exp: `Jalur terpendek: B -> D -> A -> C (3 edge).`
  },
  {
    level: "advanced",
    q: `Tiga thread mengakses variabel hitung secara bersamaan (Awal = 0). Masing-masing melakukan inkremen (+1) tanpa sinkronisasi (Race Condition). Manakah hasil akhir yang TIDAK MUNGKIN?`,
    opts: { A: `1`, B: `2`, C: `3`, D: `0` },
    ans: "D",
    exp: `Meskipun race condition, nilai minimal setelah dieksekusi parsial adalah 1 (jika tertimpa parah). Nilai 0 tidak mungkin jika setidaknya satu menyimpan hasil.`
  },
  {
    level: "advanced",
    q: `Logika Himpunan: Jika A subset B, dan B subset C, apa himpunan irisan dari (A dan C)?`,
    opts: { A: `Himpunan B`, B: `Himpunan C`, C: `Himpunan A`, D: `Himpunan Kosong` },
    ans: "C",
    exp: `Karena A ada di dalam C (dari transitivitas subset), irisan A ∩ C adalah himpunan A itu sendiri.`
  },
  {
    level: "advanced",
    q: `Analisis Algoritma: Apa notasi Big-O untuk iterasi bersarang (nested loop) di mana iterasi luar dari 1 hingga N dan iterasi dalam dari 1 hingga iterasi luar?`,
    opts: { A: `O(N)`, B: `O(N log N)`, C: `O(N^2)`, D: `O(2^N)` },
    ans: "C",
    exp: `Jumlah iterasi adalah 1 + 2 + ... + N = N(N+1)/2, yang didominasi oleh N^2, maka O(N^2).`
  },
  {
    level: "advanced",
    q: `Pada operasi XOR logika: A XOR B bernilai True, B XOR C bernilai True. Manakah pernyataan yang pasti benar?`,
    opts: { A: `A == C`, B: `A != C`, C: `A XOR C == True`, D: `Semua salah` },
    ans: "A",
    exp: `XOR menghasilkan True jika operannya berbeda. Jadi A != B, dan B != C. Mengingat boolean hanya ada dua (True/False), maka A harus sama dengan C.`
  },
  {
    level: "advanced",
    q: `Berapa banyak string biner panjang 4 yang memiliki jumlah angka '1' genap? (Nol dianggap genap)`,
    opts: { A: `4`, B: `6`, C: `8`, D: `10` },
    ans: "C",
    exp: `Kombinasi (4C0) + (4C2) + (4C4) = 1 + 6 + 1 = 8.`
  },
  {
    level: "advanced",
    q: `Sandi enkripsi sederhana menggeser huruf 3 posisi ke depan (Caesar Cipher +3). Kata 'JAVA' menjadi apa?`,
    opts: { A: `MDYD`, B: `MZDZ`, C: `NEXF`, D: `LCXC` },
    ans: "A",
    exp: `J+3=M, A+3=D, V+3=Y, A+3=D -> MDYD.`
  },
  {
    level: "advanced",
    q: `Sebuah tas berisi 3 bola merah dan 2 bola biru. Jika diambil 2 bola sekaligus, berapa peluang mendapatkan 1 merah dan 1 biru?`,
    opts: { A: `3/10`, B: `3/5`, C: `6/10`, D: `1/2` },
    ans: "B",
    exp: `Kombinasi total 5C2 = 10. Kombinasi 1M1B = (3C1 * 2C1) = 3 * 2 = 6. Peluang 6/10 = 3/5.`
  },
  {
    level: "advanced",
    q: `Berapa hasil evaluasi dari operasi logika shift kiri 1 << 3 dalam bilangan desimal?`,
    opts: { A: `4`, B: `8`, C: `16`, D: `32` },
    ans: "B",
    exp: `Shift kiri 1 sebanyak 3 bit sama dengan 1 * (2^3) = 8.`
  },
  {
    level: "advanced",
    q: `Jika x = 2^10 dan y = 4^5. Pernyataan yang benar adalah:`,
    opts: { A: `x > y`, B: `x < y`, C: `x == y`, D: `Tidak terdefinisi` },
    ans: "C",
    exp: `4^5 = (2^2)^5 = 2^10. Sehingga x dan y bernilai sama (1024).`
  },
  {
    level: "advanced",
    q: `Pernyataan majemuk: 'Jika saya belajar, saya akan lulus'. Kontraposisinya adalah:`,
    opts: { A: `Jika saya lulus, saya belajar.`, B: `Jika saya tidak belajar, saya tidak lulus.`, C: `Jika saya tidak lulus, saya tidak belajar.`, D: `Saya lulus tanpa belajar.` },
    ans: "C",
    exp: `Kontraposisi dari p -> q adalah ~q -> ~p.`
  },
  {
    level: "advanced",
    q: `Teka-teki silang: Sebuah kubus memiliki 6 sisi bernomor 1 sampai 6. Probabilitas mendapatkan mata dadu ganjil atau lebih dari 4 adalah?`,
    opts: { A: `2/3`, B: `1/2`, C: `5/6`, D: `1/3` },
    ans: "A",
    exp: `Ganjil (1,3,5), lebih dari 4 (5,6). Gabungan himpunan: {1,3,5,6}, ada 4 angka. Peluang 4/6 = 2/3.`
  },
  {
    level: "advanced",
    q: `Manakah dari urutan pertumbuhan kompleksitas berikut yang benar dari yang tercepat ke terlambat eksekusinya (kecil ke besar)?`,
    opts: { A: `O(1) < O(N) < O(log N) < O(N^2)`, B: `O(1) < O(log N) < O(N) < O(N^2)`, C: `O(log N) < O(1) < O(N) < O(N^2)`, D: `O(1) < O(log N) < O(N^2) < O(N)` },
    ans: "B",
    exp: `Konstan < Logaritmik < Linier < Kuadratik.`
  },
  {
    level: "advanced",
    q: `Anda memiliki tumpukan (Stack) dengan operasi Push(1), Push(2), Pop(), Push(3), operasi manakah yang akan mengambil elemen '1'?`,
    opts: { A: `Pop()`, B: `Pop(), Pop()`, C: `Pop(), Pop(), Pop()`, D: `Tidak bisa` },
    ans: "B",
    exp: `Isi stack akhir: bawah 1, atas 3. Untuk mengambil 1, perlu pop dua kali (3 lalu 1).`
  },
  {
    level: "advanced",
    q: `Analogi Logika OOP: ENKAPSULASI : PRIVATE = INHERITANCE : ___?`,
    opts: { A: `POLYMORPHISM`, B: `CLASS`, C: `EXTENDS`, D: `INTERFACE` },
    ans: "C",
    exp: `Enkapsulasi dicapai dengan akses private, inheritance (pewarisan) dicapai dengan keyword extends.`
  },
  {
    level: "advanced",
    q: `Dalam logika proposisional, (P AND Q) -> R equivalen dengan:`,
    opts: { A: `P -> (Q -> R)`, B: `NOT P OR NOT Q OR R`, C: `Keduanya benar`, D: `Keduanya salah` },
    ans: "C",
    exp: `(P AND Q) -> R = !(P AND Q) OR R = !P OR !Q OR R, yang juga sama dengan P -> (!Q OR R) = P -> (Q -> R).`
  },
  {
    level: "advanced",
    q: `Berapa banyak simpul daun (leaf nodes) pada binary tree sempurna dengan ketinggian 3? (root di ketinggian 0)`,
    opts: { A: `4`, B: `7`, C: `8`, D: `15` },
    ans: "C",
    exp: `Jumlah leaf pada perfect binary tree tinggi h adalah 2^h. 2^3 = 8.`
  },
  {
    level: "advanced",
    q: `Seseorang menebak 4-digit PIN dengan syarat digit pertama bukan 0 dan semua digit unik. Berapa kombinasi maksimal?`,
    opts: { A: `4536`, B: `5040`, C: `9000`, D: `3024` },
    ans: "A",
    exp: `Digit pertama 9 pilihan (1-9). Digit kedua 9 pilihan (sisa + 0). Ketiga 8 pilihan. Keempat 7 pilihan. 9*9*8*7 = 4536.`
  },
  {
    level: "advanced",
    q: `Jika operasi A * B didefinisikan sebagai (A + B) / A. Berapa nilai dari 4 * 2?`,
    opts: { A: `1.5`, B: `2`, C: `3`, D: `6` },
    ans: "A",
    exp: `(4 + 2) / 4 = 6 / 4 = 1.5.`
  },
  {
    level: "advanced",
    q: `Sebuah algoritma rekursif f(n) = f(n-1) + f(n-2) dengan f(0)=0, f(1)=1. Berapakah f(6)?`,
    opts: { A: `5`, B: `8`, C: `13`, D: `21` },
    ans: "B",
    exp: `Deret Fibonacci: 0, 1, 1, 2, 3, 5, 8. Maka indeks ke-6 (dimulai dari 0) adalah 8.`
  },
];
