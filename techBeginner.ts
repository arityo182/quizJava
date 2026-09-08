import { Question } from './types';

export const TECH_BEGINNER: Question[] = [
  {
    "id": "JB-001",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari kode operasi String concatenation berikut?\n\n```java\nSystem.out.println(\"Hasil: \" + 10 + 20);\nSystem.out.println(\"Hasil: \" + (10 + 20));\n```",
    "code": "System.out.println(\"Hasil: \" + 10 + 20);\nSystem.out.println(\"Hasil: \" + (10 + 20));",
    "options": {
      "A": "Hasil: 1020\nHasil: 30",
      "B": "Hasil: 30\nHasil: 30",
      "C": "Hasil: 1020\nHasil: 1020",
      "D": "Compile Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ekspresi pertama dievaluasi dari kiri ke kanan: String + 10 menghasilkan 'Hasil: 10', lalu + 20 menghasilkan 'Hasil: 1020'. Ekspresi kedua memiliki tanda kurung (10 + 20) = 30, lalu digabung menjadi 'Hasil: 30'.",
      "A": "Benar. Penjumlahan tanpa kurung menghasilkan konkatenasi string '1020', sedangkan dalam kurung dihitung aritmatika dulu menjadi 30.",
      "B": "Salah. Penjumlahan string pertama tidak menjumlahkan 10 dan 20 secara numerik.",
      "C": "Salah. Tanda kurung mengubah urutan evaluasi sehingga yang kedua bernilai 30.",
      "D": "Salah. Kode valid dan dapat dikompilasi dengan baik."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-002",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output perbandingan objek Integer berikut (autoboxing cache)?\n\n```java\nInteger a = 100, b = 100;\nInteger c = 200, d = 200;\nSystem.out.println((a == b) + \" \" + (c == d));\n```",
    "code": "Integer a = 100, b = 100;\nInteger c = 200, d = 200;\nSystem.out.println((a == b) + \" \" + (c == d));",
    "options": {
      "A": "true true",
      "B": "true false",
      "C": "false false",
      "D": "false true"
    },
    "answer": "B",
    "explanation": {
      "correct": "Java melakukan caching untuk Integer dari -128 hingga 127. Karena 100 berada dalam rentang cache, a dan b menunjuk objek yang sama (true). Sedangkan 200 di luar cache, sehingga dibuat objek baru dan c == d bernilai false.",
      "A": "Salah. Nilai 200 di luar cache Integer (-128 hingga 127).",
      "B": "Benar. 100 ada di cache (referensi sama), sedangkan 200 membuat objek baru (referensi berbeda).",
      "C": "Salah. 100 ada di cache sehingga perbandingan '==' bernilai true.",
      "D": "Salah. 100 yang menghasilkan true, bukan 200."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-003",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output pemanggilan remove pada List<Integer> berikut?\n\n```java\nList<Integer> list = new ArrayList<>(Arrays.asList(10, 20, 30));\nlist.remove(1);\nSystem.out.println(list);\n```",
    "code": "List<Integer> list = new ArrayList<>(Arrays.asList(10, 20, 30));\nlist.remove(1);\nSystem.out.println(list);",
    "options": {
      "A": "[20, 30]",
      "B": "[10, 30]",
      "C": "[10, 20]",
      "D": "[30]"
    },
    "answer": "B",
    "explanation": {
      "correct": "Method list.remove(int index) menghapus elemen pada indeks 1, yaitu 20. Hasilnya adalah [10, 30]. Jika ingin menghapus objek bernilai 1, harus menggunakan list.remove(Integer.valueOf(1)).",
      "A": "Salah. Indeks 1 adalah elemen kedua (20), bukan elemen pertama (10).",
      "B": "Benar. remove(1) menghapus indeks ke-1 yaitu elemen 20, menyisakan [10, 30].",
      "C": "Salah. Indeks 1 bukan elemen 30.",
      "D": "Salah. Hanya satu elemen yang dihapus."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-004",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari operasi increment berikut?\n\n```java\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(\"x=\" + x + \", y=\" + y);\n```",
    "code": "int x = 5;\nint y = x++ + ++x;\nSystem.out.println(\"x=\" + x + \", y=\" + y);",
    "options": {
      "A": "x=7, y=12",
      "B": "x=7, y=11",
      "C": "x=6, y=12",
      "D": "x=7, y=13"
    },
    "answer": "A",
    "explanation": {
      "correct": "x++ bernilai 5 (lalu x menjadi 6). Kemudian ++x menaikkan x menjadi 7 dan bernilai 7. Maka y = 5 + 7 = 12, dan nilai akhir x = 7.",
      "A": "Benar. x++ menghasilkan 5 dan menaikkan x ke 6, lalu ++x menaikkan x ke 7 dan menghasilkan 7, sehingga y = 5 + 7 = 12.",
      "B": "Salah. Hasil y adalah 12, bukan 11.",
      "C": "Salah. Nilai x akhir adalah 7 setelah dua kali increment.",
      "D": "Salah. Perhitungan y menghasilkan 12."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-005",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari perbandingan String literal vs objek baru berikut?\n\n```java\nString s1 = \"Halo\";\nString s2 = \"Halo\";\nString s3 = new String(\"Halo\");\nSystem.out.println((s1 == s2) + \" \" + (s1 == s3) + \" \" + s1.equals(s3));\n```",
    "code": "String s1 = \"Halo\";\nString s2 = \"Halo\";\nString s3 = new String(\"Halo\");\nSystem.out.println((s1 == s2) + \" \" + (s1 == s3) + \" \" + s1.equals(s3));",
    "options": {
      "A": "true true true",
      "B": "true false true",
      "C": "false false true",
      "D": "true false false"
    },
    "answer": "B",
    "explanation": {
      "correct": "s1 dan s2 menunjuk literal yang sama di String Constant Pool (s1 == s2 adalah true). s3 adalah objek baru di heap (s1 == s3 adalah false). Namun konten teksnya sama sehingga s1.equals(s3) bernilai true.",
      "A": "Salah. s3 dialokasikan di heap sehingga s1 == s3 bernilai false.",
      "B": "Benar. s1 == s2 true (string pool), s1 == s3 false (objek heap berbeda), s1.equals(s3) true (konten sama).",
      "C": "Salah. s1 == s2 bernilai true karena string interning.",
      "D": "Salah. s1.equals(s3) bernilai true karena membandingkan isi karakter."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-006",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari pemotongan substring berikut?\n\n```java\nString text = \"INDONESIA\";\nSystem.out.println(text.substring(2, 5));\n```",
    "code": "String text = \"INDONESIA\";\nSystem.out.println(text.substring(2, 5));",
    "options": {
      "A": "DON",
      "B": "NDO",
      "C": "DONES",
      "D": "DO"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method substring(beginIndex, endIndex) mengambil karakter mulai dari indeks 2 (inklusif, huruf 'D') sampai indeks 5 (eksklusif, huruf 'E'). Karakter yang diambil adalah indeks 2 ('D'), 3 ('O'), 4 ('N'), yaitu 'DON'.",
      "A": "Benar. Indeks 2, 3, 4 menghasilkan 'DON'.",
      "B": "Salah. Indeks 2 adalah 'D', bukan 'N'.",
      "C": "Salah. Karakter pada indeks ke-5 tidak diikutsertakan.",
      "D": "Salah. Panjang substring adalah 5 - 2 = 3 karakter."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-007",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari loop dan pemangkasan tipe data primitif berikut?\n\n```java\nint sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) continue;\n    sum += i;\n}\nSystem.out.println(sum);\n```",
    "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) continue;\n    sum += i;\n}\nSystem.out.println(sum);",
    "options": {
      "A": "6",
      "B": "9",
      "C": "15",
      "D": "4"
    },
    "answer": "B",
    "explanation": {
      "correct": "Loop berjalan untuk i = 1, 2, 3, 4, 5. Jika i genap, 'continue' melompati penambahan. Maka sum = 1 + 3 + 5 = 9.",
      "A": "Salah. Jumlah bilangan ganjil 1..5 adalah 9.",
      "B": "Benar. 1 + 3 + 5 = 9.",
      "C": "Salah. 15 adalah jumlah semua angka 1 sampai 5 tanpa skip.",
      "D": "Salah. Perhitungan tidak tepat."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-008",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari casting tipe data floating point ke integer berikut?\n\n```java\ndouble d1 = 7.9;\ndouble d2 = 2.1;\nint res = (int) d1 + (int) d2;\nSystem.out.println(res);\n```",
    "code": "double d1 = 7.9;\ndouble d2 = 2.1;\nint res = (int) d1 + (int) d2;\nSystem.out.println(res);",
    "options": {
      "A": "10",
      "B": "9",
      "C": "9.0",
      "D": "Compilation Error"
    },
    "answer": "B",
    "explanation": {
      "correct": "Casting (int) melakukan pemotongan (truncation/pembuangan desimal), bukan pembulatan. (int) 7.9 = 7, dan (int) 2.1 = 2. Maka 7 + 2 = 9.",
      "A": "Salah. (int) memotong desimal, bukan membulatkan ke atas.",
      "B": "Benar. (int) 7.9 adalah 7 dan (int) 2.1 adalah 2, sehingga 7 + 2 = 9.",
      "C": "Salah. Variabel bertipe int sehingga hasilnya bukan desimal.",
      "D": "Salah. Explicit casting double ke int valid di Java."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-009",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output penggunaan StringBuilder berikut?\n\n```java\nStringBuilder sb = new StringBuilder(\"Java\");\nsb.append(17);\nsb.reverse();\nSystem.out.println(sb);\n```",
    "code": "StringBuilder sb = new StringBuilder(\"Java\");\nsb.append(17);\nsb.reverse();\nSystem.out.println(sb);",
    "options": {
      "A": "Java17",
      "B": "71avaJ",
      "C": "71Java",
      "D": "avaJ17"
    },
    "answer": "B",
    "explanation": {
      "correct": "sb.append(17) menghasilkan 'Java17'. Kemudian sb.reverse() membalikkan seluruh karakter menjadi '71avaJ'.",
      "A": "Salah. String belum dibalik.",
      "B": "Benar. 'Java17' dibalik menjadi '71avaJ'.",
      "C": "Salah. Angka 17 juga ikut dibalik menjadi 71.",
      "D": "Salah. Seluruh string dibalik, bukan hanya bagian katanya."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-010",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari HashSet berikut saat ditambahkan elemen duplikat?\n\n```java\nSet<String> set = new HashSet<>();\nset.add(\"A\");\nset.add(\"B\");\nset.add(\"A\");\nSystem.out.println(set.size());\n```",
    "code": "Set<String> set = new HashSet<>();\nset.add(\"A\");\nset.add(\"B\");\nset.add(\"A\");\nSystem.out.println(set.size());",
    "options": {
      "A": "3",
      "B": "2",
      "C": "1",
      "D": "NullPointerException"
    },
    "answer": "B",
    "explanation": {
      "correct": "Set tidak mengizinkan elemen duplikat. Penambahan elemen 'A' kedua diabaikan dan mengembalikan false. Maka ukuran set adalah 2 ('A' dan 'B').",
      "A": "Salah. HashSet menolak duplikat sehingga ukuran bukan 3.",
      "B": "Benar. Karena 'A' sudah ada, hanya 2 elemen unik yang tersimpan.",
      "C": "Salah. Elemen 'B' juga berhasil ditambahkan.",
      "D": "Salah. HashSet menangani penambahan string tanpa error."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-011",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari operator logika short-circuit berikut?\n\n```java\nint count = 0;\nif (false && ++count > 0) {}\nif (true || ++count > 0) {}\nSystem.out.println(count);\n```",
    "code": "int count = 0;\nif (false && ++count > 0) {}\nif (true || ++count > 0) {}\nSystem.out.println(count);",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "Compilation Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator '&&' melakukan short-circuit: karena operan kiri false, operan kanan (++count > 0) tidak dievaluasi. Operator '||' juga short-circuit: karena operan kiri true, operan kanan tidak dievaluasi. Maka nilai count tetap 0.",
      "A": "Benar. Kedua kondisi mengalami short-circuit sehingga ++count tidak pernah dieksekusi.",
      "B": "Salah. Tidak ada ++count yang dieksekusi karena short-circuit.",
      "C": "Salah. Keduanya di-short-circuit.",
      "D": "Salah. Sintaks sepenuhnya valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-012",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output switch statement tanpa break (fall-through) berikut?\n\n```java\nint level = 2;\nString role = \"\";\nswitch (level) {\n    case 1: role += \"Guest \";\n    case 2: role += \"User \";\n    case 3: role += \"Admin \";\n    default: role += \"Member\";\n}\nSystem.out.println(role.trim());\n```",
    "code": "int level = 2;\nString role = \"\";\nswitch (level) {\n    case 1: role += \"Guest \";\n    case 2: role += \"User \";\n    case 3: role += \"Admin \";\n    default: role += \"Member\";\n}\nSystem.out.println(role.trim());",
    "options": {
      "A": "User",
      "B": "User Admin Member",
      "C": "Admin Member",
      "D": "Member"
    },
    "answer": "B",
    "explanation": {
      "correct": "Karena tidak ada statement 'break', eksekusi masuk pada case 2 ('User ') dan terus melanjutkan ke case 3 ('Admin ') serta default ('Member'). Ini disebut fall-through.",
      "A": "Salah. Tanpa break, eksekusi berlanjut ke case berikutnya.",
      "B": "Benar. Terjadi fall-through dari case 2 ke case 3 dan default sehingga menghasilkan 'User Admin Member'.",
      "C": "Salah. Eksekusi dimulai dari case 2.",
      "D": "Salah. Case 2 terpenuhi terlebih dahulu."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-013",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari blok try-catch-finally berikut?\n\n```java\npublic static int test() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n// System.out.println(test());\n```",
    "code": "public static int test() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n// System.out.println(test());",
    "options": {
      "A": "1",
      "B": "2",
      "C": "Compilation Error",
      "D": "Runtime Exception"
    },
    "answer": "B",
    "explanation": {
      "correct": "Blok 'finally' selalu dijalankan sebelum method mengembalikan nilai. Jika blok finally memiliki statement return, maka return dari finally akan menimpa return dari blok try.",
      "A": "Salah. Return di finally akan menimpa return di blok try.",
      "B": "Benar. Statement return di finally dieksekusi dan menimpa return sebelumnya, mengembalikan 2.",
      "C": "Salah. Kode valid dan dapat dikompilasi.",
      "D": "Salah. Tidak ada exception yang dilempar."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-014",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari pemanggilan Stream filter dan count berikut?\n\n```java\nlong count = Stream.of(\"apel\", \"belimbing\", \"ceri\", \"durian\")\n    .filter(s -> s.startsWith(\"b\") || s.length() == 4)\n    .count();\nSystem.out.println(count);\n```",
    "code": "long count = Stream.of(\"apel\", \"belimbing\", \"ceri\", \"durian\")\n    .filter(s -> s.startsWith(\"b\") || s.length() == 4)\n    .count();\nSystem.out.println(count);",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C",
    "explanation": {
      "correct": "'apel' (panjang 4, lolos), 'belimbing' (dimulai 'b', lolos), 'ceri' (panjang 4, lolos), 'durian' (panjang 6, tidak lolos). Total elemen yang lolos adalah 3.",
      "A": "Salah. Ada 3 string yang memenuhi kondisi.",
      "B": "Salah. 'apel', 'belimbing', dan 'ceri' semuanya lolos kondisi.",
      "C": "Benar. 'apel' (panjang 4), 'belimbing' (awalan 'b'), dan 'ceri' (panjang 4) memenuhi predikat filter, total 3.",
      "D": "Salah. 'durian' tidak memenuhi predikat (panjang 6 dan bukan awalan 'b')."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-015",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari manipulasi array berikut?\n\n```java\nint[] numbers = {1, 2, 3, 4};\nfor (int n : numbers) {\n    n = n * 2;\n}\nSystem.out.println(numbers[0] + \" \" + numbers[1]);\n```",
    "code": "int[] numbers = {1, 2, 3, 4};\nfor (int n : numbers) {\n    n = n * 2;\n}\nSystem.out.println(numbers[0] + \" \" + numbers[1]);",
    "options": {
      "A": "2 4",
      "B": "1 2",
      "C": "2 2",
      "D": "1 4"
    },
    "answer": "B",
    "explanation": {
      "correct": "Enhanced for-loop (for-each) meng-copy nilai elemen ke variabel lokal 'n'. Mengubah 'n' tidak mempengaruhi array asli. Maka elemen array tetap 1 dan 2.",
      "A": "Salah. Variabel n adalah copy lokal primitif, bukan referensi ke elemen array.",
      "B": "Benar. Modifikasi variabel lokal n di for-each loop tidak mengubah nilai dalam array numbers.",
      "C": "Salah. Nilai array tidak berubah sama sekali.",
      "D": "Salah. Kedua elemen awal tetap 1 dan 2."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-016",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Math.round vs Math.floor berikut?\n\n```java\nSystem.out.println(Math.round(2.5) + \" \" + Math.floor(2.9));\n```",
    "code": "System.out.println(Math.round(2.5) + \" \" + Math.floor(2.9));",
    "options": {
      "A": "3 2.0",
      "B": "2 2.0",
      "C": "3 3.0",
      "D": "2.5 2.0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Math.round(2.5) membulatkan ke bilangan bulat terdekat (mengembalikan long 3). Math.floor(2.9) membulatkan ke bawah (mengembalikan double 2.0).",
      "A": "Benar. Math.round(2.5) menghasilkan 3 dan Math.floor(2.9) menghasilkan 2.0.",
      "B": "Salah. Math.round(2.5) dibulatkan ke atas menjadi 3.",
      "C": "Salah. Math.floor membulatkan ke bawah sehingga 2.9 menjadi 2.0.",
      "D": "Salah. Math.round mengembalikan tipe bilangan bulat."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-017",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari perbandingan boolean berikut?\n\n```java\nboolean a = true;\nboolean b = false;\nboolean c = a ^ b;\nSystem.out.println(c);\n```",
    "code": "boolean a = true;\nboolean b = false;\nboolean c = a ^ b;\nSystem.out.println(c);",
    "options": {
      "A": "true",
      "B": "false",
      "C": "Compilation Error",
      "D": "null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator '^' adalah XOR (Exclusive OR). XOR bernilai true jika salah satu operan true dan yang lain false. Karena a = true dan b = false, maka hasilnya adalah true.",
      "A": "Benar. Operator XOR menghasilkan true jika kedua operan berbeda nilai kebenarannya.",
      "B": "Salah. XOR menghasilkan true jika operan berbeda.",
      "C": "Salah. Operator ^ valid untuk tipe boolean di Java.",
      "D": "Salah. Tipe boolean primitif tidak bisa bernilai null."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-018",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari pemanggilan method overriding dan inheritance berikut?\n\n```java\nclass Parent {\n    void show() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    void show() { System.out.print(\"C \"); }\n}\nParent obj = new Child();\nobj.show();\n```",
    "code": "class Parent {\n    void show() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    void show() { System.out.print(\"C \"); }\n}\nParent obj = new Child();\nobj.show();",
    "options": {
      "A": "P",
      "B": "C",
      "C": "P C",
      "D": "Compilation Error"
    },
    "answer": "B",
    "explanation": {
      "correct": "Java menggunakan dynamic method dispatch (polymorphism runtime). Karena objek aslinya adalah Child, maka method show() milik Child yang dieksekusi, mencetak 'C '.",
      "A": "Salah. Dynamic dispatch memanggil implementasi method pada runtime object (Child).",
      "B": "Benar. Method overriding ditentukan saat runtime berdasarkan instance nyata (new Child()), sehingga mencetak 'C '.",
      "C": "Salah. Hanya satu method yang dipanggil.",
      "D": "Salah. Kode valid dan merupakan contoh dasar polymorphism."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-019",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari List subList berikut?\n\n```java\nList<String> list = new ArrayList<>(Arrays.asList(\"A\", \"B\", \"C\", \"D\"));\nList<String> sub = list.subList(1, 3);\nSystem.out.println(sub);\n```",
    "code": "List<String> list = new ArrayList<>(Arrays.asList(\"A\", \"B\", \"C\", \"D\"));\nList<String> sub = list.subList(1, 3);\nSystem.out.println(sub);",
    "options": {
      "A": "[A, B]",
      "B": "[B, C]",
      "C": "[B, C, D]",
      "D": "[A, B, C]"
    },
    "answer": "B",
    "explanation": {
      "correct": "Method subList(fromIndex, toIndex) mengambil elemen dari indeks 1 (inklusif, 'B') sampai indeks 3 (eksklusif, 'D'). Maka hasilnya [B, C].",
      "A": "Salah. Indeks 1 adalah 'B', bukan 'A'.",
      "B": "Benar. Indeks 1 dan 2 adalah elemen 'B' dan 'C'.",
      "C": "Salah. Indeks toIndex bersifat eksklusif sehingga elemen indeks 3 ('D') tidak ikut.",
      "D": "Salah. fromIndex dimulai dari 1."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-020",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut menyebabkan error saat dijalankan. Apa penyebabnya?\n\n```java\nList<String> names;\nnames.add(\"Budi\");\nSystem.out.println(names.size());\n```",
    "code": "List<String> names;\nnames.add(\"Budi\");\nSystem.out.println(names.size());",
    "options": {
      "A": "ArrayOutOfBoundsException karena indeks belum dialokasikan",
      "B": "NullPointerException karena variabel names belum diinisialisasi objek ArrayList",
      "C": "ConcurrentModificationException karena list dimodifikasi",
      "D": "UnsupportedOperationException karena List adalah interface"
    },
    "answer": "B",
    "explanation": {
      "correct": "Variabel 'names' hanya dideklarasikan tetapi belum diinisialisasi dengan instance (misal new ArrayList<>()). Memanggil method pada referensi null melempar NullPointerException.",
      "A": "Salah. names bukan array dan belum diinisialisasi.",
      "B": "Benar. Memanggil .add() pada objek yang bernilai null melempar NullPointerException.",
      "C": "Salah. ConcurrentModificationException terjadi saat iterasi.",
      "D": "Salah. Masalahnya bukan karena interface, melainkan nilainya masih null."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-021",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Apa penyebab exception pada perulangan array berikut?\n\n```java\nint[] arr = {10, 20, 30};\nfor (int i = 0; i <= arr.length; i++) {\n    System.out.println(arr[i]);\n}\n```",
    "code": "int[] arr = {10, 20, 30};\nfor (int i = 0; i <= arr.length; i++) {\n    System.out.println(arr[i]);\n}",
    "options": {
      "A": "NullPointerException pada iterasi pertama",
      "B": "ArrayIndexOutOfBoundsException karena menggunakan 'i <= arr.length' bukannya 'i < arr.length'",
      "C": "ArithmeticException karena array overflow",
      "D": "Infinite loop karena kondisi tidak pernah false"
    },
    "answer": "B",
    "explanation": {
      "correct": "Indeks array di Java adalah 0-indexed (0 sampai length - 1). Kondisi 'i <= arr.length' menyebabkan perulangan mencoba mengakses indeks 3 pada array berukuran 3, sehingga melempar ArrayIndexOutOfBoundsException.",
      "A": "Salah. Array telah diinisialisasi dengan benar.",
      "B": "Benar. Menggunakan '<=' menyebabkan akses ke indeks arr.length yang tidak ada (out of bounds).",
      "C": "Salah. Tidak ada operasi aritmatika yang melempar exception.",
      "D": "Salah. Loop berhenti saat i > arr.length, namun melempar error sebelum itu."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-022",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut gagal saat menghapus elemen di dalam loop. Apa penyebabnya?\n\n```java\nList<String> items = new ArrayList<>(Arrays.asList(\"A\", \"B\", \"C\"));\nfor (String item : items) {\n    if (item.equals(\"B\")) {\n        items.remove(item);\n    }\n}\n```",
    "code": "List<String> items = new ArrayList<>(Arrays.asList(\"A\", \"B\", \"C\"));\nfor (String item : items) {\n    if (item.equals(\"B\")) {\n        items.remove(item);\n    }\n}",
    "options": {
      "A": "ConcurrentModificationException karena memodifikasi list langsung di dalam for-each loop",
      "B": "NullPointerException karena elemen 'B' dihapus",
      "C": "IndexOutOfBoundsException karena ukuran list menyusut",
      "D": "IllegalStateException karena list bersifat immutable"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memodifikasi collection secara struktural (seperti remove) saat sedang diiterasi menggunakan for-each loop akan melempar ConcurrentModificationException. Solusinya adalah menggunakan Iterator.remove() atau Collection.removeIf().",
      "A": "Benar. For-each loop menggunakan iterator internal, modifikasi langsung pada list memicu ConcurrentModificationException.",
      "B": "Salah. Objek tidak bernilai null.",
      "C": "Salah. Exception yang dilempar adalah ConcurrentModificationException, bukan IndexOutOfBoundsException.",
      "D": "Salah. ArrayList di sini mutable."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-023",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut menyebabkan infinite loop. Apa yang salah dari update variabel?\n\n```java\nint i = 10;\nwhile (i > 0) {\n    System.out.print(i + \" \");\n    // lupa decrement i\n}\n```",
    "code": "int i = 10;\nwhile (i > 0) {\n    System.out.print(i + \" \");\n    // lupa decrement i\n}",
    "options": {
      "A": "Kondisi 'i > 0' harus diganti 'i >= 0'",
      "B": "Variabel i tidak pernah di-decrement di dalam body loop sehingga nilainya selalu 10",
      "C": "Tipe data i harus bertipe long",
      "D": "Sintaks while tidak mendukung perbandingan tanda '>'"
    },
    "answer": "B",
    "explanation": {
      "correct": "Karena tidak ada statement seperti i-- atau i -= 1 di dalam blok loop, nilai i tetap 10 selamanya dan kondisi i > 0 selalu bernilai true (infinite loop).",
      "A": "Salah. Mengubah ke >= tidak menyelesaikan masalah tanpa decrement.",
      "B": "Benar. Nilai i konstan 10 sehingga kondisi perulangan selalu terpenuhi tanpa henti.",
      "C": "Salah. int sudah tepat.",
      "D": "Salah. Operator '>' sepenuhnya didukung."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-024",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut menghasilkan output 'Bukan Admin' padahal input bernilai 'admin'. Mengapa?\n\n```java\nString role = new String(\"admin\");\nif (role == \"admin\") {\n    System.out.println(\"Admin\");\n} else {\n    System.out.println(\"Bukan Admin\");\n}\n```",
    "code": "String role = new String(\"admin\");\nif (role == \"admin\") {\n    System.out.println(\"Admin\");\n} else {\n    System.out.println(\"Bukan Admin\");\n}",
    "options": {
      "A": "Kata kunci 'new String' tidak diizinkan di Java",
      "B": "Operator '==' membandingkan alamat referensi memori, bukan konten nilai; harusnya menggunakan role.equals(\"admin\")",
      "C": "String harus di-cast ke char[] terlebih dahulu",
      "D": "Blok else selalu dieksekusi apapun kondisinya"
    },
    "answer": "B",
    "explanation": {
      "correct": "Operator '==' pada objek membandingkan kesamaan referensi alamat memori. Karena role dibuat dengan 'new String', referensinya berbeda dengan string literal 'admin' di pool. Untuk membandingkan nilai konten teks harus menggunakan .equals().",
      "A": "Salah. new String() sah di Java.",
      "B": "Benar. Operator '==' membandingkan referensi objek, sedangkan .equals() membandingkan konten nilai String.",
      "C": "Salah. Tidak perlu konversi ke char[].",
      "D": "Salah. Else hanya dieksekusi jika kondisi if bernilai false."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-025",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut gagal saat compile. Apa penyebab compilation error?\n\n```java\npublic void readFile() {\n    FileReader reader = new FileReader(\"data.txt\");\n}\n```",
    "code": "public void readFile() {\n    FileReader reader = new FileReader(\"data.txt\");\n}",
    "options": {
      "A": "FileReader tidak ada di Java SDK",
      "B": "Unhandled checked exception: FileNotFoundException harus ditangkap (catch) atau dideklarasikan (throws)",
      "C": "Tipe method harus static",
      "D": "Nama file harus berakhiran .java"
    },
    "answer": "B",
    "explanation": {
      "correct": "Constructor FileReader melempar FileNotFoundException yang merupakan Checked Exception. Java mewajibkan checked exception untuk ditangani dengan blok try-catch atau dideklarasikan pada method signature dengan klausa throws.",
      "A": "Salah. FileReader tersedia di package java.io.",
      "B": "Benar. FileNotFoundException adalah checked exception yang wajib di-handle atau di-throws.",
      "C": "Salah. Method instance sah dan tidak harus static.",
      "D": "Salah. Nama file teks bebas."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-026",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut gagal di-compile pada baris pemanggilan method. Apa penyebabnya?\n\n```java\npublic class App {\n    public void greet() {\n        System.out.println(\"Halo\");\n    }\n    public static void main(String[] args) {\n        greet();\n    }\n}\n```",
    "code": "public class App {\n    public void greet() {\n        System.out.println(\"Halo\");\n    }\n    public static void main(String[] args) {\n        greet();\n    }\n}",
    "options": {
      "A": "Method main tidak boleh bertipe void",
      "B": "Non-static method 'greet()' tidak dapat dipanggil langsung dari konteks static (main) tanpa instance objek",
      "C": "Nama method tidak boleh 'greet'",
      "D": "String[] args harus diganti List<String> args"
    },
    "answer": "B",
    "explanation": {
      "correct": "Method 'greet' adalah instance method (non-static), sedangkan 'main' adalah static method. Konteks static tidak memiliki referensi 'this', sehingga untuk memanggil greet() harus membuat instance terlebih dahulu: new App().greet().",
      "A": "Salah. Method main standar Java memang mengembalikan void.",
      "B": "Benar. Non-static method memerlukan instance objek untuk dipanggil dari static context.",
      "C": "Salah. Penamaan method valid.",
      "D": "Salah. Array String[] args adalah signature standar."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-027",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut melempar UnsupportedOperationException saat runtime. Apa penyebabnya?\n\n```java\nList<String> list = Arrays.asList(\"A\", \"B\");\nlist.add(\"C\");\n```",
    "code": "List<String> list = Arrays.asList(\"A\", \"B\");\nlist.add(\"C\");",
    "options": {
      "A": "Arrays.asList() mengembalikan fixed-size list yang tidak mendukung penambahan atau penghapusan elemen",
      "B": "Huruf 'C' bukan tipe data yang valid",
      "C": "Method .add() hanya ada di LinkedList",
      "D": "List harus dikonversi ke Set terlebih dahulu"
    },
    "answer": "A",
    "explanation": {
      "correct": "Arrays.asList() mengembalikan wrapper List dengan ukuran tetap (fixed-size) yang didukung oleh array asli. Operasi seperti .add() atau .remove() tidak didukung dan memicu UnsupportedOperationException.",
      "A": "Benar. Arrays.asList menghasilkan list fixed-size sehingga penambahan elemen melempar UnsupportedOperationException.",
      "B": "Salah. String 'C' valid.",
      "C": "Salah. ArrayList dan List umum memiliki method add().",
      "D": "Salah. Tidak perlu konversi ke Set."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-028",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Endpoint Spring Boot Controller berikut selalu menerima body null atau kosong. Apa yang kurang?\n\n```java\n@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(User user) {\n    return ResponseEntity.ok(userService.save(user));\n}\n```",
    "code": "@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(User user) {\n    return ResponseEntity.ok(userService.save(user));\n}",
    "options": {
      "A": "Anotasi @ResponseBody pada method",
      "B": "Anotasi @RequestBody sebelum parameter 'User user' agar Spring mendeserialisasi JSON request body",
      "C": "Method harus bertipe private",
      "D": "@PostMapping harus diganti @GetMapping"
    },
    "answer": "B",
    "explanation": {
      "correct": "Tanpa anotasi @RequestBody, Spring MVC menganggap parameter 'User user' sebagai form-data / model attribute, bukan payload JSON dari HTTP request body. Menambahkan @RequestBody memberitahu HttpMessageConverter untuk mem-parse JSON ke objek User.",
      "A": "Salah. Jika kelas menggunakan @RestController, @ResponseBody sudah implisit.",
      "B": "Benar. Anotasi @RequestBody wajib disertakan agar payload JSON di-mapping ke objek parameter Java.",
      "C": "Salah. Handler method controller harus public.",
      "D": "Salah. Membuat data baru sesuai dengan method POST."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-029",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Service Spring Boot berikut gagal di-inject ke controller (NoSuchBeanDefinitionException). Apa penyebabnya?\n\n```java\npublic class OrderService {\n    public void process() {}\n}\n```",
    "code": "public class OrderService {\n    public void process() {}\n}",
    "options": {
      "A": "Class OrderService belum ditandai dengan anotasi stereotipe Spring seperti @Service atau @Component",
      "B": "Class harus mengimplementasikan Serializable",
      "C": "Nama class harus berakhiran Impl",
      "D": "Method process() harus bertipe static"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring IoC Container hanya mengelola kelas yang didaftarkan sebagai Bean. Tanpa anotasi @Service, @Component, atau deklarasi @Bean, Spring tidak akan membuat dan menginjeksi instance OrderService.",
      "A": "Benar. Kelas belum diberi anotasi @Service atau @Component sehingga tidak dideteksi oleh component scan Spring.",
      "B": "Salah. Service tidak wajib mengimplementasikan Serializable.",
      "C": "Salah. Konvensi nama bebas.",
      "D": "Salah. Service method justru sebaiknya instance method."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-030",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Controller berikut selalu merender nama template HTML bukannya mengembalikan JSON. Apa penyebabnya?\n\n```java\n@Controller\npublic class ProductController {\n    @GetMapping(\"/products\")\n    public List<Product> getAll() {\n        return productService.findAll();\n    }\n}\n```",
    "code": "@Controller\npublic class ProductController {\n    @GetMapping(\"/products\")\n    public List<Product> getAll() {\n        return productService.findAll();\n    }\n}",
    "options": {
      "A": "Harus menggunakan @RestController atau menambahkan @ResponseBody pada method agar mengembalikan data JSON",
      "B": "Harus mengganti @GetMapping dengan @PutMapping",
      "C": "List<Product> harus diubah menjadi String",
      "D": "ProductService harus diberi anotasi @Repository"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Controller standar mengembalikan nama view template (seperti Thymeleaf). Untuk REST API yang mengembalikan data langsung (JSON), gunakan @RestController (yang menggabungkan @Controller dan @ResponseBody).",
      "A": "Benar. Menggunakan @RestController atau @ResponseBody diperlukan agar return value diserialisasi ke JSON langsung ke HTTP response body.",
      "B": "Salah. HTTP GET sudah tepat untuk mengambil data.",
      "C": "Salah. Mengembalikan List<Product> adalah pola standar REST API.",
      "D": "Salah. Masalah ada pada anotasi controller."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-031",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Entity JPA berikut gagal dibuat saat aplikasi dijalankan. Apa yang kurang?\n\n```java\n@Entity\npublic class Customer {\n    private String name;\n    private String email;\n}\n```",
    "code": "@Entity\npublic class Customer {\n    private String name;\n    private String email;\n}",
    "options": {
      "A": "Entity JPA wajib memiliki field primary key yang dianotasi dengan @Id",
      "B": "Entity tidak boleh memiliki field bertipe String",
      "C": "Nama class harus plural: Customers",
      "D": "Entity harus meng-extend JpaRepository"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi JPA mewajibkan setiap kelas @Entity memiliki identifier unik (primary key) yang ditandai dengan anotasi @Id. Tanpa @Id, Hibernate akan melempar AnnotationException saat bootstrap.",
      "A": "Benar. Setiap @Entity JPA wajib memiliki field primary key dengan anotasi @Id.",
      "B": "Salah. Field String sepenuhnya diizinkan.",
      "C": "Salah. Nama entity bebas dan biasanya singular.",
      "D": "Salah. Repository yang meng-extend JpaRepository, bukan Entity."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-032",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Endpoint berikut menghasilkan error 'Required request parameter is not present'. Mengapa?\n\n```java\n@GetMapping(\"/search\")\npublic ResponseEntity<List<Item>> search(@RequestParam String keyword) {\n    return ResponseEntity.ok(itemService.find(keyword));\n}\n```",
    "code": "@GetMapping(\"/search\")\npublic ResponseEntity<List<Item>> search(@RequestParam String keyword) {\n    return ResponseEntity.ok(itemService.find(keyword));\n}",
    "options": {
      "A": "@RequestParam secara default bernilai required=true, sehingga request tanpa query param '?keyword=...' akan melempar 400 Bad Request",
      "B": "@RequestParam tidak boleh digunakan pada HTTP GET",
      "C": "Keyword harus bertipe int",
      "D": "Harus menggunakan @PathVariable untuk query parameter"
    },
    "answer": "A",
    "explanation": {
      "correct": "@RequestParam di Spring memiliki konfigurasi default 'required = true'. Jika pemanggil API mengakses '/search' tanpa '?keyword=abc', Spring otomatis menolak dengan error 400. Solusinya adalah menyediakan required = false atau defaultValue.",
      "A": "Benar. @RequestParam default-nya required=true; jika parameter tidak dikirim di URL, Spring melempar exception 400 Bad Request.",
      "B": "Salah. @RequestParam adalah cara standar membaca query parameter di HTTP GET.",
      "C": "Salah. String adalah tipe yang sangat umum untuk keyword pencarian.",
      "D": "Salah. @PathVariable untuk path segment (/items/1), bukan query param (?k=v)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-033",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi Spring Boot berikut untuk menangani request HTTP GET pada path '/users':\n\n```java\n@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    @___(\"/users\")\n    public List<User> getUsers() {\n        return userService.findAll();\n    }\n}\n```",
    "code": "@RestController\n@RequestMapping(\"/api\")\npublic class UserController {\n    @___(\"/users\")\n    public List<User> getUsers() {\n        return userService.findAll();\n    }\n}",
    "options": {
      "A": "@GetMapping",
      "B": "@PostMapping",
      "C": "@FetchMapping",
      "D": "@ActionMapping"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @GetMapping adalah shortcut komposed dari @RequestMapping(method = RequestMethod.GET) untuk memetakan HTTP GET request.",
      "A": "Benar. @GetMapping digunakan untuk menangani HTTP GET request.",
      "B": "Salah. @PostMapping untuk HTTP POST (membuat data baru).",
      "C": "Salah. @FetchMapping bukan anotasi Spring MVC.",
      "D": "Salah. @ActionMapping digunakan di Spring Portlet MVC, bukan web REST."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-034",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi berikut agar parameter method mengambil nilai dari URI template '/users/{id}':\n\n```java\n@GetMapping(\"/users/{id}\")\npublic User getUserById(@___(\"id\") Long id) {\n    return userService.findById(id);\n}\n```",
    "code": "@GetMapping(\"/users/{id}\")\npublic User getUserById(@___(\"id\") Long id) {\n    return userService.findById(id);\n}",
    "options": {
      "A": "@PathVariable",
      "B": "@RequestParam",
      "C": "@RequestBody",
      "D": "@RequestHeader"
    },
    "answer": "A",
    "explanation": {
      "correct": "@PathVariable digunakan untuk meng-ekstrak nilai dinamis dari URI template (seperti {id}) langsung ke argumen method controller.",
      "A": "Benar. @PathVariable memetakan placeholder URI {id} ke variabel method Java.",
      "B": "Salah. @RequestParam untuk query string (?id=1).",
      "C": "Salah. @RequestBody untuk payload body JSON.",
      "D": "Salah. @RequestHeader untuk HTTP headers."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-035",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi definisi interface Spring Data JPA Repository berikut:\n\n```java\npublic interface ProductRepository extends ___<Product, Long> {\n    List<Product> findByCategory(String category);\n}\n```",
    "code": "public interface ProductRepository extends ___<Product, Long> {\n    List<Product> findByCategory(String category);\n}",
    "options": {
      "A": "JpaRepository",
      "B": "EntityRepository",
      "C": "SqlRepository",
      "D": "DataRepository"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Data JPA menyediakan interface JpaRepository<T, ID> yang menyediakan method CRUD, paging, dan sorting secara otomatis tanpa perlu implementasi manual.",
      "A": "Benar. JpaRepository adalah interface utama Spring Data JPA untuk entitas Product dengan ID tipe Long.",
      "B": "Salah. EntityRepository bukan interface bawaan Spring Data.",
      "C": "Salah. SqlRepository bukan interface Spring Data JPA.",
      "D": "Salah. Nama interface yang tepat adalah JpaRepository."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-036",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi anotasi agar database otomatis men-generate primary key secara auto-increment (identity):\n\n```java\n@Entity\npublic class Employee {\n    @Id\n    @GeneratedValue(strategy = GenerationType.___)\n    private Long id;\n}\n```",
    "code": "@Entity\npublic class Employee {\n    @Id\n    @GeneratedValue(strategy = GenerationType.___)\n    private Long id;\n}",
    "options": {
      "A": "IDENTITY",
      "B": "AUTO_INCREMENT",
      "C": "SEQUENCE_DB",
      "D": "INCREMENTAL"
    },
    "answer": "A",
    "explanation": {
      "correct": "GenerationType.IDENTITY memberitahu JPA/Hibernate untuk mengandalkan kolom identity / auto-increment bawaan database engine (seperti MySQL AUTO_INCREMENT atau PostgreSQL SERIAL/IDENTITY).",
      "A": "Benar. GenerationType.IDENTITY adalah enum JPA untuk auto-increment database.",
      "B": "Salah. AUTO_INCREMENT bukan nilai enum GenerationType.",
      "C": "Salah. Nilai enum yang ada adalah SEQUENCE, bukan SEQUENCE_DB.",
      "D": "Salah. INCREMENTAL bukan enum JPA."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-037",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi relasi banyak buku dimiliki oleh satu penulis (Many-to-One):\n\n```java\n@Entity\npublic class Book {\n    @Id\n    private Long id;\n\n    @___\n    @JoinColumn(name = \"author_id\")\n    private Author author;\n}\n```",
    "code": "@Entity\npublic class Book {\n    @Id\n    private Long id;\n\n    @___\n    @JoinColumn(name = \"author_id\")\n    private Author author;\n}",
    "options": {
      "A": "@ManyToOne",
      "B": "@OneToMany",
      "C": "@ManyToMany",
      "D": "@OneToOne"
    },
    "answer": "A",
    "explanation": {
      "correct": "Banyak Buku diasosiasikan ke Satu Author, sehingga dari perspektif kelas Book anotasi yang tepat adalah @ManyToOne.",
      "A": "Benar. Relasi dari Book ke Author adalah Many-to-One (@ManyToOne).",
      "B": "Salah. @OneToMany akan bermakna satu buku memiliki banyak author.",
      "C": "Salah. Relasi ini bukan Many-to-Many.",
      "D": "Salah. Penulis dapat memiliki lebih dari satu buku."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-038",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "completion",
    "question": "Lengkapi operasi Stream berikut untuk mengumpulkan hasil filter ke dalam List:\n\n```java\nList<String> result = names.stream()\n    .filter(n -> n.length() > 3)\n    .collect(Collectors.___());\n```",
    "code": "List<String> result = names.stream()\n    .filter(n -> n.length() > 3)\n    .collect(Collectors.___());",
    "options": {
      "A": "toList",
      "B": "asCollection",
      "C": "intoList",
      "D": "makeList"
    },
    "answer": "A",
    "explanation": {
      "correct": "Collectors.toList() adalah collector standar di Java Stream API untuk mengakumulasi elemen-elemen stream ke dalam List baru.",
      "A": "Benar. Collectors.toList() mengumpulkan hasil pemrosesan stream ke List.",
      "B": "Salah. asCollection bukan method di Collectors.",
      "C": "Salah. intoList bukan method standar Java Collectors.",
      "D": "Salah. makeList tidak tersedia di Java Stream API."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-039",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi kode anotasi Spring berikut agar method service dijalankan dalam konteks transaksi database:\n\n```java\n@Service\npublic class TransferService {\n    @___\n    public void transferMoney(Long fromId, Long toId, BigDecimal amount) {\n        // operasi debit dan kredit\n    }\n}\n```",
    "code": "@Service\npublic class TransferService {\n    @___\n    public void transferMoney(Long fromId, Long toId, BigDecimal amount) {\n        // operasi debit dan kredit\n    }\n}",
    "options": {
      "A": "@Transactional",
      "B": "@Transaction",
      "C": "@Commit",
      "D": "@Atomic"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Transactional (dari org.springframework.transaction.annotation) membungkus eksekusi method dalam transaksi database; jika terjadi RuntimeException, transaksi otomatis di-rollback.",
      "A": "Benar. @Transactional adalah anotasi resmi Spring untuk manajemen transaksi deklaratif.",
      "B": "Salah. Anotasi yang benar adalah @Transactional, bukan @Transaction.",
      "C": "Salah. @Commit hanya digunakan dalam pengujian (testing).",
      "D": "Salah. @Atomic bukan anotasi transaksi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-040",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "completion",
    "question": "Lengkapi sintaks try-with-resources berikut agar file stream otomatis ditutup saat blok selesai:\n\n```java\ntry (BufferedReader br = new BufferedReader(new FileReader(\"app.log\"))) {\n    System.out.println(br.readLine());\n} catch (IOException e) {\n    e.printStackTrace();\n}\n```",
    "code": "try (BufferedReader br = new BufferedReader(new FileReader(\"app.log\"))) {\n    System.out.println(br.readLine());\n} catch (IOException e) {\n    e.printStackTrace();\n}",
    "options": {
      "A": "try (BufferedReader br = new BufferedReader(new FileReader(\"app.log\")))",
      "B": "try { BufferedReader br = new BufferedReader(...) }",
      "C": "try with (BufferedReader br = ...)",
      "D": "using (BufferedReader br = ...)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fitur try-with-resources (Java 7+) mendeklarasikan resource di dalam tanda kurung setelah keyword 'try'. Resource yang mengimplementasikan AutoCloseable akan otomatis di-close.",
      "A": "Benar. Sintaks try (Resource r = ...) secara otomatis menutup resource tanpa perlu blok finally manual.",
      "B": "Salah. Penulisan di dalam kurung kurawal adalah try biasa yang membutuhkan penutupan manual.",
      "C": "Salah. Kata kunci 'with' bukan sintaks Java.",
      "D": "Salah. 'using' adalah sintaks C#, bukan Java."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-041",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "completion",
    "question": "Lengkapi kode berikut untuk membungkus nilai yang berpotensi null ke dalam objek Optional:\n\n```java\nString email = getNullableEmail();\nOptional<String> optEmail = Optional.___Nullable(email);\n```",
    "code": "String email = getNullableEmail();\nOptional<String> optEmail = Optional.___Nullable(email);",
    "options": {
      "A": "of",
      "B": "from",
      "C": "create",
      "D": "wrap"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method factory yang tepat adalah Optional.ofNullable(val). Jika val null, dihasilkan Optional.empty(); jika ada nilai, dihasilkan Optional berisi nilai tersebut.",
      "A": "Benar. Optional.ofNullable() menangani nilai yang mungkin null secara aman.",
      "B": "Salah. from bukan method di kelas Optional.",
      "C": "Salah. create bukan method di kelas Optional.",
      "D": "Salah. wrap bukan method bawaan Optional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-042",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi query JPQL pada Spring Data JPA repository berikut:\n\n```java\n@Query(\"SELECT u FROM User u WHERE u.___ = :status\")\nList<User> findActiveUsers(@Param(\"status\") String status);\n```",
    "code": "@Query(\"SELECT u FROM User u WHERE u.___ = :status\")\nList<User> findActiveUsers(@Param(\"status\") String status);",
    "options": {
      "A": "status",
      "B": "table_status",
      "C": "user.status",
      "D": "column_status"
    },
    "answer": "A",
    "explanation": {
      "correct": "JPQL merujuk ke atribut entity Java, bukan nama kolom database. Karena entitas User memiliki field 'status', maka ditulis 'u.status'.",
      "A": "Benar. JPQL beroperasi pada entity field (u.status).",
      "B": "Salah. table_status adalah nama kolom tabel native, bukan field entity JPQL.",
      "C": "Salah. Alias yang digunakan adalah 'u', bukan 'user'.",
      "D": "Salah. JPQL menggunakan nama properti kelas."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-043",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "completion",
    "question": "Lengkapi anonymous class / lambda berikut untuk mengurutkan list angka secara ascending:\n\n```java\nList<Integer> nums = Arrays.asList(5, 2, 8, 1);\nnums.sort((a, b) -> ___);\n```",
    "code": "List<Integer> nums = Arrays.asList(5, 2, 8, 1);\nnums.sort((a, b) -> ___);",
    "options": {
      "A": "a.compareTo(b)",
      "B": "b.compareTo(a)",
      "C": "a > b",
      "D": "a.equals(b)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Comparator mengembalikan nilai negatif jika a < b, 0 jika a == b, dan positif jika a > b. Memanggil a.compareTo(b) menghasilkan urutan menaik (ascending).",
      "A": "Benar. a.compareTo(b) atau Integer.compare(a, b) mengurutkan secara ascending.",
      "B": "Salah. b.compareTo(a) akan mengurutkan secara descending (menurun).",
      "C": "Salah. Lambda comparator harus mengembalikan int, sedangkan a > b menghasilkan boolean.",
      "D": "Salah. equals menghasilkan boolean, bukan selisih integer."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-044",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi HTTP status response yang paling tepat untuk pembuatan resource baru pada method POST:\n\n```java\n@PostMapping(\"/items\")\npublic ResponseEntity<Item> create(@RequestBody Item item) {\n    Item saved = itemService.save(item);\n    return new ResponseEntity<>(saved, HttpStatus.___);\n}\n```",
    "code": "@PostMapping(\"/items\")\npublic ResponseEntity<Item> create(@RequestBody Item item) {\n    Item saved = itemService.save(item);\n    return new ResponseEntity<>(saved, HttpStatus.___);\n}",
    "options": {
      "A": "CREATED",
      "B": "OK",
      "C": "ACCEPTED",
      "D": "FOUND"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar RESTful HTTP menetapkan bahwa pembuatan entitas/resource baru yang sukses harus mengembalikan status 201 Created (HttpStatus.CREATED).",
      "A": "Benar. HttpStatus.CREATED (201) adalah standar HTTP response untuk pembuatan data baru.",
      "B": "Salah. OK (200) biasanya untuk GET/PUT, bukan kode spesifik pembuatan resource.",
      "C": "Salah. ACCEPTED (202) untuk proses asinkronus yang belum selesai.",
      "D": "Salah. FOUND (302) adalah kode redirection."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-045",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "completion",
    "question": "Lengkapi implementasi interface Runnable menggunakan lambda expression:\n\n```java\nRunnable task = () -> System.out.println(\"Running task\");\nThread t = new Thread(___);\nt.start();\n```",
    "code": "Runnable task = () -> System.out.println(\"Running task\");\nThread t = new Thread(___);\nt.start();",
    "options": {
      "A": "task",
      "B": "task.run()",
      "C": "Runnable.class",
      "D": "new task"
    },
    "answer": "A",
    "explanation": {
      "correct": "Constructor Thread menerima objek yang mengimplementasikan Runnable (dalam hal ini variabel task). Jika menuliskan task.run(), method akan langsung dipanggil di thread utama sebelum thread baru dibuat.",
      "A": "Benar. Variabel task bertipe Runnable dioper ke constructor new Thread(task).",
      "B": "Salah. task.run() mengeksekusi langsung secara synchronous di thread pemanggil.",
      "C": "Salah. Memerlukan instance, bukan objek Class.",
      "D": "Salah. Sintaks 'new task' tidak valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-046",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana implementasi Dependency Injection yang paling direkomendasikan di Spring Boot modern?\n\n```java\n// Bandingkan opsi A, B, C, D di bawah ini\n```",
    "code": "// Bandingkan opsi A, B, C, D di bawah ini",
    "options": {
      "A": "@Service\npublic class UserService {\n    @Autowired\n    private UserRepository repo;\n}",
      "B": "@Service\npublic class UserService {\n    private final UserRepository repo;\n    public UserService(UserRepository repo) {\n        this.repo = repo;\n    }\n}",
      "C": "@Service\npublic class UserService {\n    private UserRepository repo = new UserRepository();\n}",
      "D": "@Service\npublic class UserService {\n    @Autowired\n    public void setRepo(UserRepository repo) { this.repo = repo; }\n}"
    },
    "answer": "B",
    "explanation": {
      "correct": "Constructor Injection dengan field 'final' adalah best practice resmi Spring: menjamin immutability, mencegah NullPointerException saat runtime, mempermudah unit testing dengan mock tanpa Spring context, dan mendeteksi circular dependency sejak awal.",
      "A": "Salah. Field injection dengan @Autowired menyulitkan pengujian unit test independen.",
      "B": "Benar. Constructor injection dengan final field adalah standar best practice Spring Boot modern.",
      "C": "Salah. Menggunakan 'new' merusak prinsip Inversion of Control (IoC).",
      "D": "Salah. Setter injection hanya dianjurkan untuk dependensi opsional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-047",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara yang paling efisien untuk menggabungkan ribuan string di dalam sebuah loop di Java?\n\n```java\n// Bandingkan teknik penggabungan string berikut\n```",
    "code": "// Bandingkan teknik penggabungan string berikut",
    "options": {
      "A": "String res = \"\";\nfor (String s : list) res += s;",
      "B": "StringBuilder sb = new StringBuilder();\nfor (String s : list) sb.append(s);\nString res = sb.toString();",
      "C": "String res = \"\";\nfor (String s : list) res = res.concat(s);",
      "D": "Vector<String> v = new Vector<>();\nfor (String s : list) v.add(s);"
    },
    "answer": "B",
    "explanation": {
      "correct": "Operator '+' dan method concat() pada String yang immutable membuat objek baru di memori pada setiap iterasi (kompleksitas O(n^2)). StringBuilder menggunakan buffer internal yang dinamis sehingga jauh lebih hemat alokasi memori dan berkecepatan O(n).",
      "A": "Salah. Operator '+' di dalam loop membuat ribuan objek String temporer yang membebani Garbage Collector.",
      "B": "Benar. StringBuilder mengalokasikan buffer mutable sehingga berkinerja tinggi O(n).",
      "C": "Salah. concat() juga membuat objek String baru di setiap iterasi.",
      "D": "Salah. Vector adalah collection lama yang tersinkronisasi dan tidak menghasilkan gabungan string tunggal."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-048",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara deklarasi variabel collection yang paling mematuhi prinsip 'Program to an Interface, not an Implementation'?\n\n```java\n// Bandingkan deklarasi tipe berikut\n```",
    "code": "// Bandingkan deklarasi tipe berikut",
    "options": {
      "A": "ArrayList<String> names = new ArrayList<>();",
      "B": "List<String> names = new ArrayList<>();",
      "C": "Object names = new ArrayList<String>();",
      "D": "Collection names = (Collection) new ArrayList();"
    },
    "answer": "B",
    "explanation": {
      "correct": "Mendeklarasikan tipe variabel menggunakan interface 'List<String>' memberikan fleksibilitas untuk mengubah implementasi nyata (misalnya ke LinkedList atau Collections.unmodifiableList) di masa depan tanpa mengubah kode pemanggil.",
      "A": "Salah. Mengikat tipe langsung ke kelas konkret ArrayList mengurangi fleksibilitas kode.",
      "B": "Benar. Menggunakan tipe interface List mematuhi prinsip enkapsulasi dan loose coupling.",
      "C": "Salah. Menggunakan Object menghilangkan type-safety dan method collection.",
      "D": "Salah. Menggunakan raw type tanpa generic tidak aman."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-049",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara menangani pelepasan resource (I/O Stream / DB Connection) yang paling aman dan bersih di Java modern?\n\n```java\n// Bandingkan pola penutupan resource berikut\n```",
    "code": "// Bandingkan pola penutupan resource berikut",
    "options": {
      "A": "try (InputStream is = new FileInputStream(\"file.txt\")) {\n    is.read();\n}",
      "B": "InputStream is = new FileInputStream(\"file.txt\");\nis.read();\nis.close();",
      "C": "InputStream is = null;\ntry {\n    is = new FileInputStream(\"file.txt\");\n} finally {\n    if (is != null) is.close();\n}",
      "D": "InputStream is = new FileInputStream(\"file.txt\");\n// Biarkan Garbage Collector yang menutup file"
    },
    "answer": "A",
    "explanation": {
      "correct": "Try-with-resources (Java 7+) menjamin resource otomatis ditutup meskipun terjadi exception, menangani suppressed exceptions dengan baik, dan kodenya jauh lebih ringkas dibanding blok finally manual.",
      "A": "Benar. Try-with-resources adalah standar best practice modern untuk kelas AutoCloseable.",
      "B": "Salah. Jika is.read() melempar exception, is.close() tidak pernah terpanggil (kebocoran resource).",
      "C": "Salah. Meskipun benar, pola manual try-finally lebih verbose dan rawan kesalahan penulisan.",
      "D": "Salah. Garbage Collector tidak menjamin pelepasan file descriptor sistem operasi tepat waktu."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-050",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana penanganan exception terpusat yang paling tepat untuk REST API Spring Boot?\n\n```java\n// Bandingkan arsitektur exception handler berikut\n```",
    "code": "// Bandingkan arsitektur exception handler berikut",
    "options": {
      "A": "Menulis try-catch di setiap method controller secara terpisah dan mengembalikan response error manual",
      "B": "Menggunakan @RestControllerAdvice dengan method @ExceptionHandler untuk menangkap custom exception secara global",
      "C": "Membiarkan semua exception unhandled agar server mengembalikan stack trace lengkap ke client",
      "D": "Menangkap Exception di method main() aplikasi"
    },
    "answer": "B",
    "explanation": {
      "correct": "@RestControllerAdvice menyediakan mekanisme interceptor global yang bersih untuk memisahkan logika bisnis dari penanganan error, menghasilkan format response error yang konsisten di seluruh aplikasi.",
      "A": "Salah. Duplikasi try-catch di setiap controller melanggar prinsip DRY (Don't Repeat Yourself).",
      "B": "Benar. @RestControllerAdvice memusatkan penanganan error dan menjaga controller tetap bersih.",
      "C": "Salah. Mengekspos stack trace mentah ke client adalah celah keamanan serius (security vulnerability).",
      "D": "Salah. Exception HTTP request tidak akan sampai ke method main()."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-051",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara terbaik untuk mengembalikan nilai koleksi kosong dari sebuah method di Java?\n\n```java\n// Method untuk mengembalikan daftar item\n```",
    "code": "// Method untuk mengembalikan daftar item",
    "options": {
      "A": "public List<Item> getItems() { return null; }",
      "B": "public List<Item> getItems() { return Collections.emptyList(); }",
      "C": "public List<Item> getItems() { throw new RuntimeException(\"No items\"); }",
      "D": "public ArrayList<Item> getItems() { return new ArrayList<>(0); }"
    },
    "answer": "B",
    "explanation": {
      "correct": "Mengembalikan collection kosong (seperti Collections.emptyList() atau List.of()) mencegah pemanggil terkena NullPointerException, menghindari pengecekan 'if (items != null)', dan hemat memori karena menggunakan instance singleton immutable.",
      "A": "Salah. Mengembalikan null memaksa pemanggil melakukan null-check dan rawan NullPointerException.",
      "B": "Benar. Collections.emptyList() aman dari null, immutable, dan efisien memori.",
      "C": "Salah. Melempar exception untuk kondisi list kosong adalah anti-pattern karena kondisi tersebut normal.",
      "D": "Salah. Mengembalikan ArrayList konkret kurang fleksibel dibanding interface List."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-052",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana praktik terbaik dalam mengekspos data entitas ke response REST API?\n\n```java\n// Bandingkan pola transfer data entitas\n```",
    "code": "// Bandingkan pola transfer data entitas",
    "options": {
      "A": "Mengembalikan objek JPA @Entity langsung ke HTTP response",
      "B": "Memetakan entitas ke Data Transfer Object (DTO) / Record sebelum dikembalikan ke HTTP response",
      "C": "Menjadikan semua field Entity bertipe public",
      "D": "Menyimpan seluruh request JSON langsung ke satu kolom String di database"
    },
    "answer": "B",
    "explanation": {
      "correct": "Menggunakan DTO memisahkan skema database internal dari kontrak API publik, mencegah masalah lazy-loading serialization, dan mencegah kebocoran data sensitif (seperti password hash).",
      "A": "Salah. Mengembalikan entity langsung rawan masalah lazy-loading dan mengekspos struktur internal database.",
      "B": "Benar. DTO atau Java Record memisahkan layer persistensi dari API contract secara aman dan fleksibel.",
      "C": "Salah. Field public melanggar prinsip enkapsulasi OOP.",
      "D": "Salah. Menyimpan JSON mentah menghilangkan manfaat database relasional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-053",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara terbaik untuk membandingkan dua objek yang berpotensi bernilai null di Java?\n\n```java\n// String a dan b bisa bernilai null\n```",
    "code": "// String a dan b bisa bernilai null",
    "options": {
      "A": "boolean eq = a.equals(b);",
      "B": "boolean eq = Objects.equals(a, b);",
      "C": "boolean eq = a == b;",
      "D": "boolean eq = a.toString().equals(b.toString());"
    },
    "answer": "B",
    "explanation": {
      "correct": "Objects.equals(a, b) memeriksa null-safety terlebih dahulu: jika a dan b keduanya null hasilnya true, jika salah satu null hasilnya false, dan jika keduanya ada nilai baru memanggil a.equals(b).",
      "A": "Salah. Jika variabel a bernilai null, a.equals(b) langsung melempar NullPointerException.",
      "B": "Benar. Objects.equals(a, b) aman dari NullPointerException untuk kedua parameter.",
      "C": "Salah. Operator '==' membandingkan alamat referensi, bukan kesetaraan nilai objek.",
      "D": "Salah. a.toString() akan melempar NullPointerException jika a null."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-054",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana tipe data yang wajib digunakan untuk nilai mata uang dan perhitungan finansial presisi di Java?\n\n```java\n// Menyimpan dan menghitung saldo rekening\n```",
    "code": "// Menyimpan dan menghitung saldo rekening",
    "options": {
      "A": "double balance;",
      "B": "float balance;",
      "C": "BigDecimal balance;",
      "D": "long balance; // dalam sen tanpa desimal saja"
    },
    "answer": "C",
    "explanation": {
      "correct": "Tipe float dan double menggunakan floating-point IEEE 754 biner yang tidak dapat merepresentasikan desimal seperti 0.1 secara presisi (terjadi rounding error). BigDecimal menyediakan aritmatika presisi arbitrary yang akurat.",
      "A": "Salah. Tipe double mengalami floating-point rounding error yang berbahaya untuk finansial.",
      "B": "Salah. Float memiliki presisi rendah dan rawan error pembulatan desimal.",
      "C": "Benar. BigDecimal dirancang khusus untuk perhitungan finansial dengan skala dan presisi eksak.",
      "D": "Salah. Meskipun long dalam sen sering digunakan, BigDecimal adalah standar Java untuk perhitungan finansial lengkap."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-055",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara terbaik mengonsumsi nilai dari objek Optional di Java?\n\n```java\n// Optional<User> optUser = userRepository.findById(id);\n```",
    "code": "// Optional<User> optUser = userRepository.findById(id);",
    "options": {
      "A": "User user = optUser.get(); // panggil langsung",
      "B": "User user = optUser.orElseThrow(() -> new UserNotFoundException(\"User tidak ditemukan\"));",
      "C": "User user = (optUser != null) ? optUser.get() : null;",
      "D": "User user = optUser.isPresent() ? null : optUser.get();"
    },
    "answer": "B",
    "explanation": {
      "correct": "Memanggil .get() secara langsung tanpa pengecekan akan melempar NoSuchElementException jika kosong. Menggunakan .orElseThrow() secara eksplisit dan deklaratif melempar exception domain bisnis yang jelas.",
      "A": "Salah. Memanggil .get() langsung adalah anti-pattern yang meniadakan tujuan proteksi Optional.",
      "B": "Benar. orElseThrow() mendokumentasikan ekspektasi nilai dan melempar custom exception yang informatif jika data tidak ada.",
      "C": "Salah. Variabel Optional sendiri jarang bernilai null, isinya yang bisa empty.",
      "D": "Salah. Logika ternary terbalik dan menghasilkan null saat data ada."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-056",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara terbaik mendeklarasikan konstanta global di Java?\n\n```java\n// Konstanta waktu timeout maksimum\n```",
    "code": "// Konstanta waktu timeout maksimum",
    "options": {
      "A": "public int MAX_TIMEOUT = 5000;",
      "B": "public static final int MAX_TIMEOUT = 5000;",
      "C": "public final int MAX_TIMEOUT = 5000;",
      "D": "static int MAX_TIMEOUT = 5000;"
    },
    "answer": "B",
    "explanation": {
      "correct": "Konstanta di Java harus dideklarasikan sebagai 'static' (satu salinan per kelas) dan 'final' (nilainya tidak dapat diubah setelah diinisialisasi), dengan konvensi penamaan UPPER_SNAKE_CASE.",
      "A": "Salah. Tanpa static dan final, nilainya mutable dan diduplikasi di setiap instance.",
      "B": "Benar. Kombinasi 'public static final' adalah standar resmi konstanta immutable kelas di Java.",
      "C": "Salah. Tanpa 'static', field ini akan dialokasikan ulang untuk setiap instance baru objek.",
      "D": "Salah. Tanpa 'final', nilai variabel dapat diubah di tempat lain."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-057",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana cara konfigurasi properti eksternal yang paling aman (type-safe) di Spring Boot?\n\n```java\n// Membaca properti aplikasi seperti payment.api-key dan payment.timeout\n```",
    "code": "// Membaca properti aplikasi seperti payment.api-key dan payment.timeout",
    "options": {
      "A": "Menggunakan @Value(\"${payment.api-key}\") di setiap controller",
      "B": "Menggunakan class POJO bertanda @ConfigurationProperties(prefix = \"payment\") yang terstruktur",
      "C": "Membaca file application.properties secara manual dengan FileInputStream",
      "D": "Menyimpan konfigurasi rahasia langsung di kode Java (hardcoded)"
    },
    "answer": "B",
    "explanation": {
      "correct": "@ConfigurationProperties menyediakan validasi tipe (type-safe), autocompletion di IDE, pengelompokan hierarkis, serta dukungan validasi JSR-303 (seperti @NotNull, @Min).",
      "A": "Salah. @Value tersebar di banyak kelas dan tidak terpusat serta rawan typo.",
      "B": "Benar. @ConfigurationProperties mengelompokkan konfigurasi secara type-safe dan mudah diuji.",
      "C": "Salah. Membaca file properties manual mengabaikan fitur environment profile Spring Boot.",
      "D": "Salah. Hardcoded credential adalah pelanggaran keamanan kritis."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-058",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana implementasi encapsulation yang benar untuk kelas POJO Java?\n\n```java\n// Kelas User\n```",
    "code": "// Kelas User",
    "options": {
      "A": "public class User {\n    public String name;\n    public int age;\n}",
      "B": "public class User {\n    private String name;\n    private int age;\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n    public int getAge() { return age; }\n    public void setAge(int age) { if (age >= 0) this.age = age; }\n}",
      "C": "public class User {\n    private String name = \"Budi\";\n    // tanpa getter dan setter\n}",
      "D": "public class User {\n    public final String name = \"Budi\";\n}"
    },
    "answer": "B",
    "explanation": {
      "correct": "Prinsip enkapsulasi mengharuskan field ber-akses 'private' dan diakses melalui getter/setter publik, memungkinkan validasi data (seperti age >= 0) sebelum disimpan.",
      "A": "Salah. Field public mengekspos internal state tanpa kontrol validasi.",
      "B": "Benar. Field private dengan getter/setter memungkinkan kontrol akses dan validasi mutasi data.",
      "C": "Salah. Tanpa getter, nilai field tidak dapat dibaca dari luar kelas.",
      "D": "Salah. Mengunci nilai hardcoded tidak fleksibel untuk objek dinamis."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-059",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Apa fungsi utama dari garbage collection (GC) pada Java Virtual Machine (JVM)?",
    "options": {
      "A": "Secara otomatis membebaskan memori heap dari objek yang sudah tidak memiliki referensi aktif",
      "B": "Menghapus file temporary yang dibuat di sistem operasi",
      "C": "Mengompilasi bytecode Java menjadi kode mesin native",
      "D": "Memastikan tidak ada duplikasi data di dalam database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Garbage Collector (GC) adalah modul otomatis pada JVM yang bertugas mendeteksi dan menghapus objek-objek di memori heap yang sudah tidak dapat dijangkau (unreachable) oleh aplikasi.",
      "A": "Opsi A benar karena mendeskripsikan fungsi pembersihan memori objek oleh GC.",
      "B": "Opsi B salah karena GC bekerja pada memori heap JVM, bukan file sistem operasi.",
      "C": "Opsi C salah karena kompilasi bytecode ke machine code dilakukan oleh Just-In-Time (JIT) Compiler.",
      "D": "Opsi D salah karena GC tidak berhubungan dengan database."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-060",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Manakah implementasi List yang memiliki performa penambahan elemen di awal daftar paling efisien (O(1))?",
    "options": {
      "A": "LinkedList",
      "B": "ArrayList",
      "C": "Vector",
      "D": "CopyOnWriteArrayList"
    },
    "answer": "A",
    "explanation": {
      "correct": "LinkedList diimplementasikan sebagai doubly-linked list, sehingga penyisipan atau penghapusan elemen di awal list (head) berkecepatan konstan O(1) tanpa perlu menggeser elemen lainnya.",
      "A": "Opsi A benar karena LinkedList hanya memanipulasi pointer node kepala.",
      "B": "Opsi B salah karena ArrayList berbasis array kontinu yang harus menggeser seluruh elemen (O(n)) saat menyisipkan di awal.",
      "C": "Opsi C salah karena Vector berbasis array tersinkronisasi dan tetap membutuhkan pergeseran elemen O(n).",
      "D": "Opsi D salah karena CopyOnWriteArrayList menyalin seluruh array saat mutasi (sangat lambat untuk penambahan terus-menerus)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-061",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara abstract class dan interface di Java modern (Java 8+)?",
    "options": {
      "A": "Abstract class dapat memiliki state (instance variable) dan konstruktor, sedangkan interface tidak memiliki instance variable",
      "B": "Interface sama sekali tidak boleh memiliki implementasi method apapun",
      "C": "Satu class dapat meng-extend lebih dari satu abstract class",
      "D": "Abstract class tidak boleh memiliki method konkret"
    },
    "answer": "A",
    "explanation": {
      "correct": "Abstract class dapat memiliki instance variable non-static dan constructor, serta mendukung single-inheritance. Interface (meskipun mendukung default dan static method sejak Java 8) hanya mengizinkan variabel public static final dan tidak memiliki state/constructor.",
      "A": "Opsi A benar karena membedakan kepemilikan instance variable dan constructor.",
      "B": "Opsi B salah karena sejak Java 8 interface dapat memiliki method konkret melalui default method dan static method.",
      "C": "Opsi C salah karena Java tidak mendukung multiple inheritance untuk class.",
      "D": "Opsi D salah karena abstract class boleh memiliki method konkret."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-062",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Manakah keyword yang digunakan untuk memanggil constructor dari superclass di dalam constructor subclass?",
    "options": {
      "A": "super()",
      "B": "this()",
      "C": "parent()",
      "D": "base()"
    },
    "answer": "A",
    "explanation": {
      "correct": "super() digunakan untuk memanggil constructor superclass dari dalam constructor subclass, dan harus menjadi baris perintah pertama di constructor tersebut.",
      "A": "Opsi A benar karena super() adalah sintaks resmi Java untuk constructor superclass.",
      "B": "Opsi B salah karena this() memanggil constructor lain di dalam kelas yang sama.",
      "C": "Opsi C salah karena parent bukan keyword dalam bahasa Java.",
      "D": "Opsi D salah karena base adalah keyword bahasa C#, bukan Java."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-063",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Bagaimanakah urutan eksekusi blok inisialisasi ketika sebuah objek Java dibuat?",
    "options": {
      "A": "Static initializer superclass -> static initializer subclass -> instance initializer superclass -> constructor superclass -> instance initializer subclass -> constructor subclass",
      "B": "Constructor subclass -> constructor superclass -> static initializer",
      "C": "Instance initializer subclass -> static initializer subclass -> constructor",
      "D": "Urutan acak tergantung penjadwalan thread JVM"
    },
    "answer": "A",
    "explanation": {
      "correct": "Saat class di-load, static block superclass dijalankan, diikuti static block subclass. Saat instansiasi objek, instance initializer dan constructor superclass dijalankan terlebih dahulu sebelum instance initializer dan constructor subclass.",
      "A": "Opsi A benar karena merefleksikan urutan class loading dan object instantiation di JVM.",
      "B": "Opsi B salah karena superclass selalu diinisialisasi sebelum subclass.",
      "C": "Opsi C salah karena static initializer dijalankan saat class loading jauh sebelum instance dibuat.",
      "D": "Opsi D salah karena urutan inisialisasi class dan objek bersifat deterministik di Java."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-064",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Koleksi Set manakah yang menjamin elemen tersimpan secara terurut berdasarkan urutan alami (natural ordering) atau Comparator?",
    "options": {
      "A": "TreeSet",
      "B": "HashSet",
      "C": "LinkedHashSet",
      "D": "ConcurrentSkipListSet"
    },
    "answer": "A",
    "explanation": {
      "correct": "TreeSet mengimplementasikan NavigableSet berbasis Red-Black Tree, yang menjamin elemen-elemennya terurut menaik (ascending) secara alami (Comparable) atau berdasarkan Comparator kustom.",
      "A": "Opsi A benar karena TreeSet menyortir elemen secara terurut otomatis.",
      "B": "Opsi B salah karena HashSet tidak menjamin urutan elemen sama sekali.",
      "C": "Opsi C salah karena LinkedHashSet hanya menjaga urutan penyisipan (insertion order), bukan natural ordering.",
      "D": "Opsi D salah meskipun terurut dan concurrent, TreeSet adalah implementasi standar non-concurrent paling fundamental."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-065",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Apa fungsi dari method 'equals()' dan 'hashCode()' dalam kontrak (contract) objek Java?",
    "options": {
      "A": "Jika dua objek bernilai sama menurut equals(), keduanya wajib menghasilkan hashCode() yang sama",
      "B": "Jika dua objek memiliki hashCode() yang sama, keduanya selalu bernilai sama menurut equals()",
      "C": "equals() hanya untuk String, sedangkan hashCode() untuk angka primitif",
      "D": "Keduanya tidak memiliki relasi atau dependensi apapun"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kontrak equals dan hashCode menyatakan bahwa jika a.equals(b) bernilai true, maka a.hashCode() harus sama dengan b.hashCode(). Sebaliknya, dua objek dengan hashCode sama belum tentu equals (disebut hash collision).",
      "A": "Opsi A benar karena menyatakan aturan mandatory dari Java Object contract.",
      "B": "Opsi B salah karena hash collision memungkinkan objek berbeda menghasilkan hashCode yang sama.",
      "C": "Opsi C salah karena keduanya adalah method class java.lang.Object untuk semua objek.",
      "D": "Opsi D salah karena koleksi berbasis hash seperti HashMap bergantung mutlak pada konsistensi keduanya."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-066",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Manakah tipe data primitif berikut yang bernilai default 'false' ketika dideklarasikan sebagai field kelas?",
    "options": {
      "A": "boolean",
      "B": "byte",
      "C": "char",
      "D": "Boolean"
    },
    "answer": "A",
    "explanation": {
      "correct": "Variabel tipe data primitif boolean yang dideklarasikan sebagai member class (field) akan otomatis diinisialisasi dengan nilai default 'false'.",
      "A": "Opsi A benar karena default primitif boolean adalah false.",
      "B": "Opsi B salah karena nilai default byte adalah 0.",
      "C": "Opsi C salah karena nilai default char adalah '\\u0000'.",
      "D": "Opsi D salah karena Boolean adalah wrapper class (objek) yang default-nya bernilai null."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-067",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Apa fungsi dari keyword 'transient' pada deklarasi variabel di Java?",
    "options": {
      "A": "Menandai bahwa variabel tersebut tidak boleh disertakan saat proses serialisasi objek (Serialization)",
      "B": "Menandai bahwa variabel nilainya dapat diakses oleh beberapa thread secara langsung",
      "C": "Membuat variabel hanya bisa dibaca satu kali lalu terhapus otomatis",
      "D": "Menjadikan variabel sebagai konstanta global"
    },
    "answer": "A",
    "explanation": {
      "correct": "Keyword transient mencegah serialisasi suatu atribut objek saat objek dikonversi menjadi byte stream (misalnya saat disimpan ke file atau dikirim lewat network).",
      "A": "Opsi A benar karena transient mengecualikan field dari serialisasi.",
      "B": "Opsi B salah karena akses langsung dari main memory pada multithreading menggunakan keyword volatile.",
      "C": "Opsi C salah karena Java tidak memiliki modifier seperti itu.",
      "D": "Opsi D salah karena konstanta dibuat dengan public static final."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-068",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Bagaimana cara menangani resource seperti FileInputStream agar otomatis tertutup tanpa memanggil .close() secara manual di blok finally?",
    "options": {
      "A": "Menggunakan sintaks try-with-resources (Java 7+)",
      "B": "Menambahkan anotasi @AutoClose pada variabel",
      "C": "Membiarkan Garbage Collector menutupnya saat objek dihancurkan",
      "D": "Menggunakan keyword synchronized pada blok try"
    },
    "answer": "A",
    "explanation": {
      "correct": "Try-with-resources memastikan semua resource yang mengimplementasikan java.lang.AutoCloseable akan otomatis ditutup di akhir blok try, bahkan ketika terjadi exception.",
      "A": "Opsi A benar karena try-with-resources adalah standar penutupan resource otomatis di Java.",
      "B": "Opsi B salah karena @AutoClose bukan anotasi resmi bawaan Java.",
      "C": "Opsi C salah karena GC tidak menjamin penutupan file handle secara tepat waktu dan dapat menimbulkan resource leak.",
      "D": "Opsi D salah karena synchronized untuk thread locking, bukan manajemen file resource."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-069",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Apakah perbedaan utama antara throw dan throws di Java?",
    "options": {
      "A": "'throw' digunakan untuk melempar exception secara eksplisit di dalam method, sedangkan 'throws' digunakan di deklarasi method untuk menandai kemungkinan exception",
      "B": "'throws' digunakan untuk melempar exception objek, sedangkan 'throw' adalah blok penangkap",
      "C": "Keduanya sinonim dan dapat saling menggantikan",
      "D": "'throw' hanya untuk RuntimeException, sedangkan 'throws' hanya untuk Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Keyword throw diikuti oleh instance exception (misal: throw new IllegalArgumentException()), sedangkan throws ditulis pada signature method untuk menginformasikan pemanggil tentang checked exception yang mungkin muncul.",
      "A": "Opsi A benar karena menjelaskan letak sintaks dan peruntukan masing-masing keyword.",
      "B": "Opsi B salah karena penangkap exception menggunakan keyword catch.",
      "C": "Opsi C salah karena throw dan throws memiliki fungsi dan posisi sintaks berbeda.",
      "D": "Opsi D salah karena throw dapat melempar semua turunan Throwable."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-070",
    "level": "beginner",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Manakah method pada interface Stream yang digunakan untuk mengubah setiap elemen menjadi bentuk baru (transformasi 1:1)?",
    "options": {
      "A": "map()",
      "B": "filter()",
      "C": "flatMap()",
      "D": "peek()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method .map() menerima fungsi (Function<T, R>) dan menghasilkan stream baru yang berisi hasil penerapan fungsi tersebut ke tiap elemen stream secara 1:1.",
      "A": "Opsi A benar karena map() melakukan transformasi 1-ke-1 antar elemen.",
      "B": "Opsi B salah karena filter() digunakan untuk menyaring elemen berdasarkan kondisi boolean (Predicate).",
      "C": "Opsi C salah karena flatMap() digunakan untuk meratakan nested stream (transformasi 1-ke-banyak).",
      "D": "Opsi D salah karena peek() digunakan untuk observasi atau debugging efek samping tanpa mengubah data."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-071",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang merupakan kombinasi dari @Configuration, @EnableAutoConfiguration, dan @ComponentScan?",
    "options": {
      "A": "@SpringBootApplication",
      "B": "@EnableConfigurationProperties",
      "C": "@RestController",
      "D": "@SpringBootConfiguration"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @SpringBootApplication adalah meta-annotation yang menggabungkan tiga anotasi inti: @SpringBootConfiguration, @EnableAutoConfiguration, dan @ComponentScan.",
      "A": "Opsi A benar karena merupakan anotasi standar pada kelas utama Spring Boot.",
      "B": "Opsi B salah karena @EnableConfigurationProperties untuk mengaktifkan binding konfigurasi @ConfigurationProperties.",
      "C": "Opsi C salah karena @RestController digunakan untuk controller API REST.",
      "D": "Opsi D salah karena @SpringBootConfiguration hanyalah alias dari @Configuration."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-072",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara @Controller dan @RestController di Spring framework?",
    "options": {
      "A": "@RestController adalah gabungan @Controller dan @ResponseBody, sehingga method otomatis mengembalikan data JSON/XML bukan nama view HTML",
      "B": "@Controller hanya bekerja untuk API JSON, sedangkan @RestController untuk rendering JSP/Thymeleaf",
      "C": "@RestController tidak bisa menangani HTTP POST request",
      "D": "Tidak ada perbedaan, keduanya hanya alias nama yang identik"
    },
    "answer": "A",
    "explanation": {
      "correct": "@RestController merupakan convenience annotation yang dianotasi dengan @Controller dan @ResponseBody. Setiap method di dalamnya otomatis mengembalikan objek data mentah (biasanya JSON) ke HTTP response body.",
      "A": "Opsi A benar karena mendefinisikan integrasi @ResponseBody pada @RestController.",
      "B": "Opsi B salah karena @Controller biasa yang umumnya merender view template seperti Thymeleaf/JSP.",
      "C": "Opsi C salah karena @RestController mendukung semua metode HTTP termasuk POST.",
      "D": "Opsi D salah karena perilaku pengembalian nilai (view vs response body) berbeda."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-073",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi manakah yang digunakan untuk menandai kelas sebagai service layer yang memuat logika bisnis aplikasi?",
    "options": {
      "A": "@Service",
      "B": "@Component",
      "C": "@Repository",
      "D": "@BusinessLogic"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Service adalah spesialisasi dari @Component yang secara semantik digunakan untuk menandai kelas sebagai penyedia layanan logika bisnis dalam arsitektur aplikasi Spring.",
      "A": "Opsi A benar karena @Service secara eksplisit mengidentifikasi lapisan bisnis.",
      "B": "Opsi B salah meskipun @Service adalah turunan @Component, @Service lebih spesifik secara semantik.",
      "C": "Opsi C salah karena @Repository dikhususkan untuk Data Access Object (DAO) / persistence layer.",
      "D": "Opsi D salah karena @BusinessLogic bukan anotasi bawaan Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-074",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Bagaimana cara membaca nilai konfigurasi 'server.port' dari file application.properties ke dalam variabel di kelas Spring?",
    "options": {
      "A": "@Value(\"${server.port}\")",
      "B": "@Property(\"server.port\")",
      "C": "@Autowired(\"server.port\")",
      "D": "@ConfigValue(\"server.port\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Value(\"${nama.properti}\") digunakan untuk menginjeksi nilai properti dari environment atau file konfigurasi (application.properties/yml) ke dalam field.",
      "A": "Opsi A benar karena sintaks ${...} di dalam @Value adalah cara standar Spring Expression Language.",
      "B": "Opsi B salah karena @Property bukan anotasi injeksi nilai Spring.",
      "C": "Opsi C salah karena @Autowired digunakan untuk dependency injection antar Spring Bean.",
      "D": "Opsi D salah karena @ConfigValue bukan anotasi standar Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-075",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apakah default scope dari sebuah Spring Bean di ApplicationContext jika tidak didefinisikan secara eksplisit?",
    "options": {
      "A": "singleton",
      "B": "prototype",
      "C": "request",
      "D": "session"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, semua bean di Spring ber-scope 'singleton', artinya Spring IoC container hanya membuat satu instance tunggal per ID bean untuk seluruh siklus hidup ApplicationContext.",
      "A": "Opsi A benar karena singleton adalah scope default Spring.",
      "B": "Opsi B salah karena scope prototype membuat instance baru setiap kali diinjeksi atau diminta.",
      "C": "Opsi C salah karena scope request hanya ada di web application dan membuat instance per HTTP request.",
      "D": "Opsi D salah karena scope session membuat instance per HTTP session."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-076",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menandai sebuah method di dalam kelas @Configuration agar menghasilkan objek yang dikelola sebagai Spring Bean?",
    "options": {
      "A": "@Bean",
      "B": "@Component",
      "C": "@Inject",
      "D": "@Service"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Bean ditempatkan pada level method (biasanya di dalam kelas @Configuration) untuk mendaftarkan objek kembalian method tersebut ke dalam Spring IoC container.",
      "A": "Opsi A benar karena @Bean digunakan pada method konfigurasi.",
      "B": "Opsi B salah karena @Component digunakan pada level class.",
      "C": "Opsi C salah karena @Inject adalah anotasi standar JSR-330 untuk injeksi dependensi, bukan pembuatan bean factory method.",
      "D": "Opsi D salah karena @Service digunakan pada level class lapisan bisnis."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-077",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Manakah cara dependency injection yang paling direkomendasikan dalam pengembangan modern Spring Boot?",
    "options": {
      "A": "Constructor Injection",
      "B": "Field Injection menggunakan @Autowired langsung pada atribut private",
      "C": "Setter Injection tanpa constructor",
      "D": "Manual instantiation menggunakan operator 'new'"
    },
    "answer": "A",
    "explanation": {
      "correct": "Constructor injection sangat direkomendasikan karena menjamin immutability (field bisa dibuat final), memudahkan unit testing tanpa refleksi Spring container, dan mencegah NullPointerException saat runtime.",
      "A": "Opsi A benar karena constructor injection adalah best practice resmi Spring framework.",
      "B": "Opsi B salah karena field injection menyulitkan pengujian unit murni dan menyembunyikan dependensi.",
      "C": "Opsi C salah karena setter injection membuat objek mutable dan berpotensi belum terinisialisasi saat method dipanggil.",
      "D": "Opsi D salah karena menggunakan 'new' secara manual melanggar prinsip Inversion of Control."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-078",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Modul Spring Boot manakah yang menyediakan fitur monitoring kesiapan aplikasi, health check endpoint (/actuator/health), dan metrik sistem?",
    "options": {
      "A": "spring-boot-starter-actuator",
      "B": "spring-boot-starter-web",
      "C": "spring-boot-starter-logging",
      "D": "spring-boot-starter-security"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Boot Actuator menyediakan endpoint bawaan yang siap pakai untuk monitoring produksi seperti /health, /info, /metrics, dan /env.",
      "A": "Opsi A benar karena Actuator adalah modul resmi Spring untuk observability.",
      "B": "Opsi B salah karena starter web ditujukan untuk membangun REST API dan aplikasi web servlet.",
      "C": "Opsi C salah karena logging sudah otomatis terintegrasi di starter parent.",
      "D": "Opsi D salah karena starter security ditujukan untuk autentikasi dan otorisasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-079",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi manakah yang digunakan untuk membedakan (disambiguate) bean ketika terdapat dua atau lebih implementasi dari interface yang sama saat diinjeksi?",
    "options": {
      "A": "@Qualifier",
      "B": "@Alias",
      "C": "@Select",
      "D": "@Choose"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Qualifier digunakan bersamaan dengan @Autowired atau pada parameter konstruktor untuk menentukan secara spesifik nama bean yang harus diinjeksi ketika terdapat kandidat lebih dari satu.",
      "A": "Opsi A benar karena @Qualifier adalah anotasi resmi penyelesai konflik injeksi multi-bean.",
      "B": "Opsi B salah karena @Alias bukan anotasi pemilihan bean Spring.",
      "C": "Opsi C salah karena @Select adalah anotasi MyBatis untuk query SQL.",
      "D": "Opsi D salah karena @Choose bukan anotasi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-080",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @Profile di Spring Boot?",
    "options": {
      "A": "Memetakan bean atau konfigurasi agar hanya aktif pada environment tertentu (seperti 'dev', 'test', atau 'prod')",
      "B": "Mengatur hak akses role user saat login ke sistem",
      "C": "Mengukur lama waktu eksekusi method untuk profiling performa",
      "D": "Menyimpan data profil pengguna ke dalam database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Profile memungkinkan komponen atau file konfigurasi hanya didaftarkan ke ApplicationContext jika profil lingkungan yang ditentukan sedang aktif.",
      "A": "Opsi A benar karena @Profile digunakan untuk segregasi konfigurasi antar environment.",
      "B": "Opsi B salah karena otorisasi role diatur dengan @Secured atau @PreAuthorize.",
      "C": "Opsi C salah karena profiling performa menggunakan interceptor atau AOP (Micrometer).",
      "D": "Opsi D salah karena data entitas pengguna disimpan melalui JPA Entity."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-081",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "File konfigurasi default apakah yang otomatis dibaca oleh Spring Boot saat aplikasi pertama kali dijalankan?",
    "options": {
      "A": "application.properties atau application.yml di folder src/main/resources",
      "B": "web.xml di folder WEB-INF",
      "C": "pom.xml di root directory",
      "D": "spring-config.xml di folder src/main/resources"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Boot secara default mencari file konfigurasi bernama application.properties atau application.yml di dalam classpath (src/main/resources).",
      "A": "Opsi A benar karena merupakan lokasi dan nama file konfigurasi konvensional Spring Boot.",
      "B": "Opsi B salah karena web.xml adalah konfigurasi lawas Java EE/Servlet yang tidak wajib di Spring Boot.",
      "C": "Opsi C salah karena pom.xml adalah file dependensi Maven.",
      "D": "Opsi D salah karena XML-based configuration sudah digantikan oleh konfigurasi berbasis anotasi dan YAML/properties."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-082",
    "level": "beginner",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menandai kelas Data Access Object (DAO) dan mengaktifkan translasi exception database ke Spring DataAccessException?",
    "options": {
      "A": "@Repository",
      "B": "@Database",
      "C": "@CrudService",
      "D": "@DaoComponent"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Repository adalah spesialisasi dari @Component yang ditujukan untuk lapisan persistensi dan secara otomatis mengaktifkan DataAccessResourceFailureException translation.",
      "A": "Opsi A benar karena @Repository adalah anotasi resmi Spring untuk DAO.",
      "B": "Opsi B salah karena @Database bukan anotasi standar Spring.",
      "C": "Opsi C salah karena @CrudService bukan anotasi Spring.",
      "D": "Opsi D salah karena @DaoComponent bukan anotasi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-083",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "HTTP method manakah yang digunakan untuk membuat resource baru pada RESTful API dan bersifat NON-idempotent?",
    "options": {
      "A": "POST",
      "B": "GET",
      "C": "PUT",
      "D": "DELETE"
    },
    "answer": "A",
    "explanation": {
      "correct": "POST digunakan untuk submit data baru dan bersifat non-idempotent, artinya memanggil POST berkali-kali dengan payload yang sama akan menghasilkan multiple resource baru yang berbeda.",
      "A": "Opsi A benar karena POST dirancang untuk kreasi resource dan tidak idempotent.",
      "B": "Opsi B salah karena GET hanya membaca data dan bersifat safe serta idempotent.",
      "C": "Opsi C salah karena PUT menggantikan seluruh representasi resource dan bersifat idempotent.",
      "D": "Opsi D salah karena DELETE menghapus resource dan bersifat idempotent."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-084",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "HTTP Status Code manakah yang menandakan bahwa request berhasil dibuat dan resource baru telah tersimpan di server?",
    "options": {
      "A": "201 Created",
      "B": "200 OK",
      "C": "204 No Content",
      "D": "202 Accepted"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 201 Created menunjukkan bahwa permintaan telah berhasil dipenuhi dan menghasilkan satu atau lebih resource baru di server, biasanya disertai header 'Location'.",
      "A": "Opsi A benar karena 201 Created adalah status standar saat resource baru tercipta.",
      "B": "Opsi B salah karena 200 OK adalah status sukses umum tanpa indikasi spesifik pembuatan resource.",
      "C": "Opsi C salah karena 204 No Content digunakan saat operasi sukses namun tidak ada response body.",
      "D": "Opsi D salah karena 202 Accepted berarti permintaan telah diterima untuk diproses secara asynchronous namun belum tentu selesai."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-085",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Anotasi Spring Web manakah yang digunakan untuk mengekstrak variabel dari URL path (contoh: /users/{id})?",
    "options": {
      "A": "@PathVariable",
      "B": "@RequestParam",
      "C": "@RequestBody",
      "D": "@RequestHeader"
    },
    "answer": "A",
    "explanation": {
      "correct": "@PathVariable digunakan untuk mengikat (bind) nilai parameter dari pola URI template ke variabel argumen method pada controller.",
      "A": "Opsi A benar karena @PathVariable mengekstrak variabel dari path segmen URL.",
      "B": "Opsi B salah karena @RequestParam mengekstrak query string (contoh: /users?id=10).",
      "C": "Opsi C salah karena @RequestBody memetakan body payload HTTP (JSON/XML) ke objek Java DTO.",
      "D": "Opsi D salah karena @RequestHeader mengambil nilai dari HTTP header request."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-086",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara method HTTP PUT dan PATCH dalam operasi pembaruan data resource?",
    "options": {
      "A": "PUT mengganti seluruh representasi resource (full update), sedangkan PATCH hanya memperbarui sebagian atribut resource (partial update)",
      "B": "PUT hanya digunakan untuk menghapus data, sedangkan PATCH untuk membuat data baru",
      "C": "PATCH bersifat idempotent sedangkan PUT non-idempotent",
      "D": "Keduanya persis sama dan hanya variasi penamaan dari spesifikasi RFC"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai spesifikasi RFC, PUT menggantikan seluruh representasi resource (jika field dihilangkan, nilainya akan di-reset ke default/null), sedangkan PATCH hanya memodifikasi field-field yang dikirimkan dalam payload.",
      "A": "Opsi A benar karena menjelaskan perbedaan formal antara full update (PUT) dan partial update (PATCH).",
      "B": "Opsi B salah karena operasi penghapusan menggunakan DELETE.",
      "C": "Opsi C salah karena PUT wajib bersifat idempotent, sedangkan PATCH tidak selalu dijamin idempotent.",
      "D": "Opsi D salah karena PUT dan PATCH memiliki semantik yang berbeda secara spesifikasi HTTP."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-087",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "HTTP Status Code manakah yang tepat dikembalikan ketika klien belum melakukan autentikasi (kredensial tidak ada atau tidak valid)?",
    "options": {
      "A": "401 Unauthorized",
      "B": "403 Forbidden",
      "C": "404 Not Found",
      "D": "400 Bad Request"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 401 Unauthorized secara semantik berarti 'Unauthenticated' (klien belum terotentikasi dan harus menyertakan kredensial valid). Jika klien sudah terotentikasi tetapi tidak memiliki hak izin, status yang tepat adalah 403 Forbidden.",
      "A": "Opsi A benar karena 401 mengindikasikan kegagalan autentikasi.",
      "B": "Opsi B salah karena 403 menandakan klien sudah terautentikasi namun ditolak hak aksesnya (otorisasi).",
      "C": "Opsi C salah karena 404 menunjukkan resource URL tidak ditemukan.",
      "D": "Opsi D salah karena 400 mengindikasikan kesalahan sintaks atau format pada request klien."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-088",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Header HTTP apakah yang dikirimkan oleh klien untuk menginformasikan kepada server format data yang diharapkan dalam balasan response?",
    "options": {
      "A": "Accept",
      "B": "Content-Type",
      "C": "Authorization",
      "D": "User-Agent"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header 'Accept' (misalnya: Accept: application/json) dikirim klien untuk menegosiasikan konten (Content Negotiation) yang diinginkan dari server. Sementara 'Content-Type' memberitahukan format body yang dikirim oleh pengirim saat itu.",
      "A": "Opsi A benar karena Accept menentukan format yang diinginkan klien.",
      "B": "Opsi B salah karena Content-Type menginformasikan tipe data body yang sedang dikirim.",
      "C": "Opsi C salah karena Authorization membawa kredensial autentikasi.",
      "D": "Opsi D salah karena User-Agent mengidentifikasi aplikasi browser atau HTTP client."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-089",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan pada method controller Spring Boot untuk menangani exception secara terpusat dalam satu kelas controller?",
    "options": {
      "A": "@ExceptionHandler",
      "B": "@CatchException",
      "C": "@ErrorMapping",
      "D": "@HandleFault"
    },
    "answer": "A",
    "explanation": {
      "correct": "@ExceptionHandler digunakan untuk mendeklarasikan method penanganan exception spesifik yang terjadi saat pemrosesan request di controller.",
      "A": "Opsi A benar karena @ExceptionHandler adalah anotasi resmi penanganan error di Spring MVC.",
      "B": "Opsi B salah karena @CatchException bukan anotasi Spring.",
      "C": "Opsi C salah karena @ErrorMapping bukan anotasi Spring.",
      "D": "Opsi D salah karena @HandleFault bukan anotasi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-090",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan bersama @ControllerAdvice untuk menangani exception secara global di seluruh REST controller aplikasi?",
    "options": {
      "A": "@RestControllerAdvice",
      "B": "@GlobalExceptionManager",
      "C": "@MasterErrorHandler",
      "D": "@ApplicationAdvice"
    },
    "answer": "A",
    "explanation": {
      "correct": "@RestControllerAdvice adalah kombinasi dari @ControllerAdvice dan @ResponseBody, menjadikannya standar arsitektur untuk penanganan exception global pada API RESTful.",
      "A": "Opsi A benar karena @RestControllerAdvice mengembalikan response body JSON untuk semua error controller.",
      "B": "Opsi B salah karena bukan komponen Spring.",
      "C": "Opsi C salah karena bukan komponen Spring.",
      "D": "Opsi D salah karena bukan komponen Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-091",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "HTTP Status Code manakah yang tepat digunakan saat endpoint DELETE berhasil menghapus resource dan tidak perlu mengembalikan konten body?",
    "options": {
      "A": "204 No Content",
      "B": "200 OK",
      "C": "202 Accepted",
      "D": "301 Moved Permanently"
    },
    "answer": "A",
    "explanation": {
      "correct": "Status 204 No Content menunjukkan server berhasil menyelesaikan request dan tidak perlu mengirimkan representasi data di body response.",
      "A": "Opsi A benar karena 204 adalah standar respons sukses tanpa body.",
      "B": "Opsi B salah karena 200 OK biasanya menyertakan body respons.",
      "C": "Opsi C salah karena 202 berarti tugas penghapusan ditunda/diantrekan.",
      "D": "Opsi D salah karena 301 adalah status pengalihan (redirection)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-092",
    "level": "beginner",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Apakah yang dimaksud dengan konsep 'Idempotent' pada method HTTP?",
    "options": {
      "A": "Melakukan pemanggilan berulang kali dengan request yang sama akan menghasilkan status dan efek samping yang sama pada server",
      "B": "Method yang tidak pernah mengubah data di server sama sekali",
      "C": "Method yang selalu membutuhkan token otentikasi Bearer",
      "D": "Method yang hanya boleh dijalankan satu kali seumur hidup aplikasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Idempotensi berarti memanggil request yang sama N kali memiliki efek samping yang identik dengan memanggilnya 1 kali (contoh method: GET, PUT, DELETE, HEAD, OPTIONS).",
      "A": "Opsi A benar karena mendefinisikan prinsip matematis idempotensi dalam protokol HTTP.",
      "B": "Opsi B salah karena method yang tidak mengubah data sama sekali disebut 'Safe' (seperti GET).",
      "C": "Opsi C salah karena idempotensi tidak berkaitan dengan mekanisme token otentikasi.",
      "D": "Opsi D salah karena request idempotent bebas dipanggil berkali-kali tanpa khawatir duplikasi efek samping."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-093",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang wajib diletakkan pada kelas Java agar dipetakan sebagai tabel database oleh JPA?",
    "options": {
      "A": "@Entity",
      "B": "@TableOnly",
      "C": "@Model",
      "D": "@DataClass"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Entity menandakan bahwa kelas tersebut adalah entitas JPA yang siklus hidupnya dikelola oleh EntityManager dan dipetakan ke baris tabel database.",
      "A": "Opsi A benar karena @Entity adalah anotasi wajib untuk entitas JPA.",
      "B": "Opsi B salah karena @TableOnly bukan anotasi JPA.",
      "C": "Opsi C salah karena @Model bukan anotasi JPA standar.",
      "D": "Opsi D salah karena @DataClass bukan anotasi JPA."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-094",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menentukan primary key dari sebuah entitas JPA?",
    "options": {
      "A": "@Id",
      "B": "@Key",
      "C": "@PrimaryKey",
      "D": "@UniqueId"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Id menandai field atau properti sebagai primary key dari entitas database tersebut.",
      "A": "Opsi A benar karena @Id adalah anotasi resmi JPA untuk primary key.",
      "B": "Opsi B salah karena @Key bukan anotasi JPA.",
      "C": "Opsi C salah karena @PrimaryKey bukan anotasi standar JPA.",
      "D": "Opsi D salah karena @UniqueId bukan anotasi JPA."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-095",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @GeneratedValue(strategy = GenerationType.IDENTITY) di JPA?",
    "options": {
      "A": "Menyerahkan pembuatan nilai auto-increment primary key kepada mekanisme bawaan database",
      "B": "Menghasilkan string acak UUID secara otomatis di level aplikasi Java",
      "C": "Membuat tabel urutan terpisah (sequence table) di database",
      "D": "Mengharuskan programmer mengisi ID secara manual sebelum save"
    },
    "answer": "A",
    "explanation": {
      "correct": "GenerationType.IDENTITY memanfaatkan kolom auto-increment bawaan database (seperti AUTO_INCREMENT di MySQL atau SERIAL/IDENTITY di PostgreSQL) untuk mengisi nilai ID saat row di-insert.",
      "A": "Opsi A benar karena IDENTITY mengandalkan auto-increment database.",
      "B": "Opsi B salah karena UUID diatur dengan generator UUID atau GenerationType.AUTO.",
      "C": "Opsi C salah karena penggunaan tabel terpisah menggunakan GenerationType.TABLE.",
      "D": "Opsi D salah karena tidak mengisi manual adalah esensi dari @GeneratedValue."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-096",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Interface dari Spring Data JPA manakah yang menyediakan method standar CRUD seperti save(), findById(), findAll(), dan deleteById()?",
    "options": {
      "A": "JpaRepository atau CrudRepository",
      "B": "SqlSessionManager",
      "C": "HibernateTemplate",
      "D": "JdbcDaoSupport"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Data JPA menyediakan CrudRepository dan JpaRepository yang secara otomatis menyediakan implementasi method CRUD tanpa perlu menulis kode SQL secara manual.",
      "A": "Opsi A benar karena JpaRepository dan CrudRepository adalah interface standar Spring Data.",
      "B": "Opsi B salah karena SqlSessionManager adalah komponen MyBatis.",
      "C": "Opsi C salah karena HibernateTemplate adalah helper lama Spring.",
      "D": "Opsi D salah karena JdbcDaoSupport adalah helper berbasis JDBC template."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-097",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Kapan query database dieksekusi saat mengakses relasi dengan FetchType.LAZY di JPA?",
    "options": {
      "A": "Hanya saat getter relasi tersebut pertama kali dipanggil di dalam transaksi aktif",
      "B": "Seketika saat entitas utama di-load dari database",
      "C": "Tidak pernah dieksekusi sama sekali",
      "D": "Hanya saat aplikasi Spring pertama kali booting"
    },
    "answer": "A",
    "explanation": {
      "correct": "FetchType.LAZY menunda (defers) loading data relasi hingga data tersebut benar-benar diakses pertama kali melalui method getter di dalam konteks sesi/transaksi yang masih terbuka.",
      "A": "Opsi A benar karena menjelaskan sifat lazy loading.",
      "B": "Opsi B salah karena mengambil seketika adalah karakteristik FetchType.EAGER.",
      "C": "Opsi C salah karena data tetap di-load saat dipanggil.",
      "D": "Opsi D salah karena fetch relasi terjadi saat runtime data diakses."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-098",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Exception apakah yang lazim terjadi jika mengakses atribut FetchType.LAZY di luar batas transaksi atau setelah EntityManager tertutup?",
    "options": {
      "A": "LazyInitializationException",
      "B": "NullPointerException",
      "C": "EntityNotFoundException",
      "D": "TransactionSystemException"
    },
    "answer": "A",
    "explanation": {
      "correct": "LazyInitializationException dilempar oleh Hibernate ketika kode mencoba menginisialisasi proxy lazy-loaded tanpa adanya sesi Hibernate (EntityManager) yang aktif.",
      "A": "Opsi A benar karena merupakan exception khas Hibernate terkait lazy loading.",
      "B": "Opsi B salah karena proxy lazy bukanlah null melainkan objek proxy yang uninitialized.",
      "C": "Opsi C salah karena terjadi jika entitas dengan ID tertentu tidak ada di database.",
      "D": "Opsi D salah karena berkaitan dengan kegagalan commit pada transaksi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-099",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi Spring apakah yang digunakan untuk mengelola transaksi database secara deklaratif pada method service?",
    "options": {
      "A": "@Transactional",
      "B": "@TransactionManagement",
      "C": "@DatabaseTransaction",
      "D": "@CommitOnSuccess"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Transactional membuka transaksi database sebelum method dieksekusi, dan otomatis melakukan commit jika sukses atau rollback jika terjadi RuntimeException.",
      "A": "Opsi A benar karena @Transactional adalah anotasi deklaratif resmi Spring.",
      "B": "Opsi B salah karena bukan anotasi method Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-100",
    "level": "beginner",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apakah kepanjangan dari JPQL dalam konteks JPA?",
    "options": {
      "A": "Java Persistence Query Language",
      "B": "Java Postgres Query Link",
      "C": "Joint Protocol Query Language",
      "D": "JSON Processing Query Library"
    },
    "answer": "A",
    "explanation": {
      "correct": "JPQL singkatan dari Java Persistence Query Language, yaitu bahasa kueri berorientasi objek yang beroperasi pada entitas Java dan atributnya, bukan langsung pada tabel dan kolom database.",
      "A": "Opsi A benar karena merupakan kepanjangan resmi JPQL.",
      "B": "Opsi B salah karena JPQL tidak terikat pada database PostgreSQL.",
      "C": "Opsi C salah karena bukan singkatan JPQL.",
      "D": "Opsi D salah karena JPQL bukan library pemrosesan JSON."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-101",
    "level": "beginner",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Anotasi apakah di JUnit 5 yang menandai suatu method sebagai method pengujian?",
    "options": {
      "A": "@Test",
      "B": "@TestCase",
      "C": "@UnitTest",
      "D": "@ExecuteTest"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di JUnit 5 (Jupiter), anotasi org.junit.jupiter.api.Test digunakan untuk menandai method sebagai test case yang dapat dijalankan oleh test runner.",
      "A": "Opsi A benar karena @Test adalah anotasi pengujian resmi JUnit 5.",
      "B": "Opsi B salah karena @TestCase bukan anotasi JUnit 5.",
      "C": "Opsi C salah karena @UnitTest bukan anotasi JUnit 5.",
      "D": "Opsi D salah karena @ExecuteTest bukan anotasi JUnit 5."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-102",
    "level": "beginner",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Anotasi JUnit 5 manakah yang dijalankan sebelum SETIAP method @Test di dalam kelas pengujian dieksekusi?",
    "options": {
      "A": "@BeforeEach",
      "B": "@BeforeAll",
      "C": "@SetUp",
      "D": "@PreTest"
    },
    "answer": "A",
    "explanation": {
      "correct": "@BeforeEach di JUnit 5 dijalankan sebelum setiap method pengujian dieksekusi, menggantikan anotasi @Before dari JUnit 4.",
      "A": "Opsi A benar karena @BeforeEach berjalan sebelum setiap test method.",
      "B": "Opsi B salah karena @BeforeAll dijalankan sekali untuk seluruh kelas sebelum semua test dimulai.",
      "C": "Opsi C salah karena @SetUp bukan anotasi JUnit 5.",
      "D": "Opsi D salah karena @PreTest bukan anotasi JUnit 5."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-103",
    "level": "beginner",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Di Mockito, anotasi apakah yang digunakan untuk membuat objek tiruan (mock) dari sebuah dependensi?",
    "options": {
      "A": "@Mock",
      "B": "@Fake",
      "C": "@Dummy",
      "D": "@Stub"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Mock digunakan untuk membuat objek tiruan (mock) dari interface atau class tanpa perlu implementasi nyata.",
      "A": "Opsi A benar karena @Mock adalah anotasi standar Mockito.",
      "B": "Opsi B salah karena @Fake bukan anotasi Mockito bawaan.",
      "C": "Opsi C salah karena @Dummy bukan anotasi Mockito bawaan.",
      "D": "Opsi D salah karena @Stub bukan anotasi Mockito bawaan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-104",
    "level": "beginner",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Anotasi Mockito manakah yang digunakan untuk menginjeksi semua dependensi @Mock ke dalam objek yang sedang diuji?",
    "options": {
      "A": "@InjectMocks",
      "B": "@Autowired",
      "C": "@InjectTarget",
      "D": "@MockContainer"
    },
    "answer": "A",
    "explanation": {
      "correct": "@InjectMocks menandai instance target pengujian dan secara otomatis menginjeksi mock objects ke dalam field atau constructor-nya.",
      "A": "Opsi A benar karena @InjectMocks menginjeksi mock dependency ke target pengujian.",
      "B": "Opsi B salah karena @Autowired adalah anotasi Spring Framework untuk dependency injection di container runtime.",
      "C": "Opsi C salah karena @InjectTarget bukan anotasi Mockito.",
      "D": "Opsi D salah karena @MockContainer bukan anotasi Mockito."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-105",
    "level": "beginner",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Method assertion JUnit 5 manakah yang digunakan untuk memverifikasi bahwa dua nilai (expected dan actual) adalah sama?",
    "options": {
      "A": "assertEquals(expected, actual)",
      "B": "assertSameValue(expected, actual)",
      "C": "verifyEquals(expected, actual)",
      "D": "checkIdentical(expected, actual)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method org.junit.jupiter.api.Assertions.assertEquals(expected, actual) digunakan untuk membandingkan kesamaan nilai menggunakan method .equals().",
      "A": "Opsi A benar karena assertEquals adalah method assertion standar JUnit.",
      "B": "Opsi B salah karena tidak ada method assertSameValue.",
      "C": "Opsi C salah karena verify adalah sintaks verifikasi interaksi milik Mockito.",
      "D": "Opsi D salah karena checkIdentical bukan method JUnit."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-106",
    "level": "beginner",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Anotasi Spring Boot Test manakah yang digunakan untuk pengujian lapisan Controller saja secara terisolasi tanpa memuat seluruh ApplicationContext?",
    "options": {
      "A": "@WebMvcTest",
      "B": "@SpringBootTest",
      "C": "@DataJpaTest",
      "D": "@RestClientTest"
    },
    "answer": "A",
    "explanation": {
      "correct": "@WebMvcTest hanya memuat komponen web layer (Controller, ControllerAdvice, Filter) dan MockMvc, sehingga tes berjalan sangat cepat dan terisolasi.",
      "A": "Opsi A benar karena @WebMvcTest mengisolasi slice pengujian controller.",
      "B": "Opsi B salah karena @SpringBootTest memuat full ApplicationContext yang lebih berat.",
      "C": "Opsi C salah karena @DataJpaTest hanya memuat slice persistence database.",
      "D": "Opsi D salah karena @RestClientTest menguji klien REST/RestTemplate."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-107",
    "level": "beginner",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Apakah prinsip 'S' dalam akronim SOLID design principles?",
    "options": {
      "A": "Single Responsibility Principle: sebuah class hanya boleh memiliki satu alasan untuk berubah",
      "B": "Static Binding Principle: method harus dideklarasikan static jika memungkinkan",
      "C": "Simple Syntax Principle: kode harus ditulis seringkas mungkin dalam satu baris",
      "D": "Sequential Execution Principle: kode harus dieksekusi secara linear tanpa threading"
    },
    "answer": "A",
    "explanation": {
      "correct": "Single Responsibility Principle (SRP) menyatakan bahwa setiap modul atau class harus bertanggung jawab atas satu fungsionalitas tunggal yang spesifik sehingga hanya memiliki satu alasan untuk berubah.",
      "A": "Opsi A benar karena SRP mendefinisikan batas tanggung jawab tunggal per class.",
      "B": "Opsi B salah karena bukan bagian dari SOLID.",
      "C": "Opsi C salah karena bukan bagian dari SOLID.",
      "D": "Opsi D salah karena bukan bagian dari SOLID."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-108",
    "level": "beginner",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Prinsip apakah dalam Clean Code yang menyarankan agar kita tidak mengulang-ulang logika kode yang sama di beberapa tempat?",
    "options": {
      "A": "DRY (Don't Repeat Yourself)",
      "B": "KISS (Keep It Simple, Stupid)",
      "C": "YAGNI (You Aren't Gonna Need It)",
      "D": "Boy Scout Rule"
    },
    "answer": "A",
    "explanation": {
      "correct": "DRY (Don't Repeat Yourself) menekankan pentingnya abstraksi agar setiap potong pengetahuan atau logika sistem memiliki representasi tunggal yang tidak ambigu di dalam sistem.",
      "A": "Opsi A benar karena DRY menolak duplikasi kode.",
      "B": "Opsi B salah karena KISS berfokus pada kesederhanaan desain.",
      "C": "Opsi C salah karena YAGNI melarang penulisan fitur yang belum benar-benar dibutuhkan saat ini.",
      "D": "Opsi D salah karena Boy Scout Rule menyarankan untuk meninggalkan kode dalam kondisi lebih bersih daripada saat pertama kali membacanya."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-109",
    "level": "beginner",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Apakah inti dari prinsip 'O' (Open/Closed Principle) dalam SOLID?",
    "options": {
      "A": "Entitas software harus terbuka untuk ekstensi (open for extension), tetapi tertutup untuk modifikasi (closed for modification)",
      "B": "Semua file class harus bersifat open source dan tidak boleh diproteksi password",
      "C": "Method harus selalu membuka koneksi database dan langsung menutupnya",
      "D": "Class turunan harus dapat mengubah logika parent class secara radikal"
    },
    "answer": "A",
    "explanation": {
      "correct": "Open/Closed Principle (OCP) menganjurkan agar perilaku sistem dapat diperluas (misalnya dengan membuat subclass baru atau implementasi interface baru) tanpa harus mengedit kode sumber yang sudah berjalan dan teruji.",
      "A": "Opsi A benar karena mendefinisikan esensi OCP.",
      "B": "Opsi B salah karena OCP tidak berkaitan dengan lisensi software.",
      "C": "Opsi C salah karena OCP bukan tentang koneksi I/O database.",
      "D": "Opsi D salah karena mengubah logika parent class melanggar Liskov Substitution Principle."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-110",
    "level": "beginner",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Prinsip apakah yang mengingatkan pengembang: 'Jangan menambahkan fitur spekulatif yang belum ada kebutuhan nyatanya saat ini'?",
    "options": {
      "A": "YAGNI (You Aren't Gonna Need It)",
      "B": "DRY (Don't Repeat Yourself)",
      "C": "KISS (Keep It Simple, Stupid)",
      "D": "TDD (Test Driven Development)"
    },
    "answer": "A",
    "explanation": {
      "correct": "YAGNI adalah prinsip agile/extreme programming yang melarang developer membangun kode berdasarkan asumsi masa depan yang belum diminta, demi menghemat waktu dan menjaga kesederhanaan codebase.",
      "A": "Opsi A benar karena YAGNI mencegah over-engineering fitur yang belum tentu terpakai.",
      "B": "Opsi B salah karena DRY tentang menghindari duplikasi kode.",
      "C": "Opsi C salah karena KISS tentang menjaga solusi tetap sederhana.",
      "D": "Opsi D salah karena TDD adalah metodologi menulis test sebelum kode produksi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-111",
    "level": "beginner",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Menurut prinsip Liskov Substitution Principle (LSP), apa aturan mendasar mengenai subclass?",
    "options": {
      "A": "Subclass harus dapat menggantikan superclass-nya tanpa merusak fungsionalitas dan kebenaran program",
      "B": "Subclass wajib melempar UnsupportedOperationException jika method superclass tidak dibutuhkan",
      "C": "Subclass harus selalu berukuran baris kode lebih kecil daripada superclass",
      "D": "Subclass tidak boleh memiliki method tambahan selain yang ada di superclass"
    },
    "answer": "A",
    "explanation": {
      "correct": "Liskov Substitution Principle menyatakan bahwa jika S adalah subclass dari T, maka objek bertipe T harus dapat digantikan oleh objek bertipe S tanpa mengubah kebenaran perilaku program.",
      "A": "Opsi A benar karena mendefinisikan LSP secara formal.",
      "B": "Opsi B salah karena melempar UnsupportedOperationException pada method kontrak adalah pelanggaran nyata terhadap LSP.",
      "C": "Opsi C salah karena ukuran baris kode tidak relevan dengan LSP.",
      "D": "Opsi D salah karena subclass bebas menambahkan method spesifik baru."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-112",
    "level": "beginner",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Manakah praktik penamaan variabel yang sesuai dengan kaidah Clean Code di Java?",
    "options": {
      "A": "Menggunakan camelCase yang deskriptif dan mencerminkan maksud/arti data (misal: 'totalActiveUsers')",
      "B": "Menggunakan singkatan satu huruf untuk field kelas (misal: 'int u;') agar hemat memori",
      "C": "Menggunakan huruf besar semua dengan garis bawah untuk variabel lokal (misal: 'int JUMLAH_USER;')",
      "D": "Menambahkan tipe data ke nama variabel (Hungarian notation, misal: 'int iTotal')"
    },
    "answer": "A",
    "explanation": {
      "correct": "Clean Code menganjurkan penggunaan nama variabel yang jelas, bermakna, mudah diucapkan, dan mengikuti konvensi Java (camelCase untuk variabel/method).",
      "A": "Opsi A benar karena mencerminkan best practice Java Clean Code.",
      "B": "Opsi B salah karena singkatan satu huruf menyulitkan pemahaman kode.",
      "C": "Opsi C salah karena UPPER_SNAKE_CASE dikhususkan untuk konstanta static final.",
      "D": "Opsi D salah karena Hungarian notation tidak direkomendasikan di bahasa strongly-typed modern seperti Java."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-113",
    "level": "beginner",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Klausul SQL manakah yang digunakan untuk menyaring baris data berdasarkan kondisi tertentu?",
    "options": {
      "A": "WHERE",
      "B": "GROUP BY",
      "C": "ORDER BY",
      "D": "HAVING"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausul WHERE digunakan untuk menyaring rekaman sebelum pengelompokan (grouping) dilakukan.",
      "A": "Opsi A benar karena WHERE adalah perintah filter baris standar SQL.",
      "B": "Opsi B salah karena GROUP BY digunakan untuk mengelompokkan baris berdasarkan nilai kolom yang sama.",
      "C": "Opsi C salah karena ORDER BY digunakan untuk mengurutkan hasil query.",
      "D": "Opsi D salah karena HAVING digunakan untuk menyaring hasil setelah agregasi GROUP BY."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-114",
    "level": "beginner",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara klausa WHERE dan HAVING di SQL?",
    "options": {
      "A": "WHERE memfilter baris data sebelum agregasi, sedangkan HAVING memfilter hasil fungsi agregat setelah GROUP BY",
      "B": "WHERE hanya untuk tabel relasional, sedangkan HAVING untuk NoSQL",
      "C": "HAVING hanya bisa digunakan bersama klausa ORDER BY",
      "D": "Tidak ada perbedaan, keduanya memiliki fungsi identik"
    },
    "answer": "A",
    "explanation": {
      "correct": "WHERE mengevaluasi baris per baris sebelum pengelompokan dan tidak bisa menerima fungsi agregat (seperti COUNT, SUM). HAVING mengevaluasi hasil grup setelah agregasi dijalankan.",
      "A": "Opsi A benar karena membedakan tahapan evaluasi sebelum vs sesudah agregasi.",
      "B": "Opsi B salah karena keduanya adalah klausul SQL relasional.",
      "C": "Opsi C salah karena HAVING berpasangan dengan GROUP BY, bukan ORDER BY.",
      "D": "Opsi D salah karena fase eksekusi dan kapabilitas keduanya berbeda."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-115",
    "level": "beginner",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Jenis JOIN SQL apakah yang hanya mengembalikan baris yang memiliki kecocokan di kedua tabel yang digabungkan?",
    "options": {
      "A": "INNER JOIN",
      "B": "LEFT JOIN",
      "C": "RIGHT JOIN",
      "D": "FULL OUTER JOIN"
    },
    "answer": "A",
    "explanation": {
      "correct": "INNER JOIN hanya mengembalikan baris jika kondisi pencocokan terpenuhi di kedua tabel (irisan).",
      "A": "Opsi A benar karena INNER JOIN mengambil irisan data yang cocok di kedua sisi.",
      "B": "Opsi B salah karena LEFT JOIN mempertahankan semua baris dari tabel kiri meskipun di tabel kanan tidak ada yang cocok.",
      "C": "Opsi C salah karena RIGHT JOIN mempertahankan semua baris dari tabel kanan.",
      "D": "Opsi D salah karena FULL OUTER JOIN mengembalikan semua baris dari kedua tabel."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-116",
    "level": "beginner",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Perintah SQL apakah yang digunakan untuk menambahkan baris data baru ke dalam tabel?",
    "options": {
      "A": "INSERT INTO",
      "B": "UPDATE",
      "C": "ALTER TABLE",
      "D": "ADD ROW"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perintah INSERT INTO digunakan untuk menyisipkan satu atau beberapa baris data baru ke dalam tabel.",
      "A": "Opsi A benar karena INSERT INTO adalah sintaks resmi DML untuk membuat baris data.",
      "B": "Opsi B salah karena UPDATE digunakan untuk mengubah baris data yang sudah ada.",
      "C": "Opsi C salah karena ALTER TABLE digunakan untuk mengubah struktur skema tabel (DDL).",
      "D": "Opsi D salah karena ADD ROW bukan sintaks SQL standar."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-117",
    "level": "beginner",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Apa karakteristik utama dari PRIMARY KEY pada tabel database relasional?",
    "options": {
      "A": "Nilainya harus unik untuk setiap baris dan tidak boleh bernilai NULL",
      "B": "Boleh bernilai NULL asalkan unik",
      "C": "Satu tabel diperbolehkan memiliki lebih dari satu primary key",
      "D": "Hanya boleh bertipe data integer dan tidak bisa composite key"
    },
    "answer": "A",
    "explanation": {
      "correct": "Primary key secara otomatis menerapkan batasan UNIQUE dan NOT NULL untuk mengidentifikasi setiap rekaman baris secara unik.",
      "A": "Opsi A benar karena primary key wajib unik dan tidak boleh null.",
      "B": "Opsi B salah karena primary key secara mutlak dilarang bernilai NULL.",
      "C": "Opsi C salah karena satu tabel hanya boleh memiliki tepat satu primary key (walaupun bisa terdiri dari beberapa kolom / composite).",
      "D": "Opsi D salah karena primary key dapat bertipe string (misal UUID) atau composite key."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-118",
    "level": "beginner",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Apakah tujuan utama dari pembuatan Index pada kolom tabel database?",
    "options": {
      "A": "Mempercepat operasi pencarian dan pembacaan query SELECT",
      "B": "Mengurangi ukuran penyimpanan tabel di hard disk",
      "C": "Mempercepat operasi INSERT dan UPDATE secara signifikan",
      "D": "Menghapus duplikasi data secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Index (biasanya berstruktur B-Tree) mempercepat pencarian data dengan menyediakan struktur pohon terurut, mengurangi kebutuhan full table scan.",
      "A": "Opsi A benar karena index mengoptimasi performa retrieval data SELECT.",
      "B": "Opsi B salah karena index justru menambah konsumsi ruang disk.",
      "C": "Opsi C salah karena index sedikit memperlambat INSERT/UPDATE karena pohon index harus diperbarui.",
      "D": "Opsi D salah karena penghapusan duplikasi adalah tugas constraint UNIQUE."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-119",
    "level": "beginner",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Apakah perbedaan mendasar antara konsep Autentikasi (Authentication) dan Otorisasi (Authorization)?",
    "options": {
      "A": "Autentikasi memverifikasi identitas pengguna ('siapa Anda?'), sedangkan Otorisasi menentukan hak akses pengguna ('apa yang boleh Anda lakukan?')",
      "B": "Autentikasi menentukan izin akses, sedangkan Otorisasi memverifikasi password",
      "C": "Autentikasi hanya berjalan di frontend, sedangkan Otorisasi di database",
      "D": "Keduanya adalah istilah yang dapat dipertukarkan tanpa perbedaan makna"
    },
    "answer": "A",
    "explanation": {
      "correct": "Autentikasi adalah pembuktian identitas (misal login dengan email & password). Otorisasi adalah pemeriksaan izin/wewenang apakah user berhak mengakses resource tertentu (misal role ADMIN vs USER).",
      "A": "Opsi A benar karena membedakan verifikasi identitas vs pembatasan wewenang.",
      "B": "Opsi B salah karena membalik definisi autentikasi dan otorisasi.",
      "C": "Opsi C salah karena keduanya adalah proses keamanan level backend.",
      "D": "Opsi D salah karena memiliki tanggung jawab yang berbeda dalam arsitektur keamanan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-120",
    "level": "beginner",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Komponen PasswordEncoder apakah yang menjadi standar rekomendasi Spring Security untuk mengenkripsi/menghash password dengan algoritma adaptif?",
    "options": {
      "A": "BCryptPasswordEncoder",
      "B": "Md5PasswordEncoder",
      "C": "Sha1PasswordEncoder",
      "D": "PlainTextPasswordEncoder"
    },
    "answer": "A",
    "explanation": {
      "correct": "BCryptPasswordEncoder menggunakan algoritma hashing satu arah BCrypt dengan penambahan salt otomatis dan work factor yang adaptif terhadap peningkatan kekuatan komputasi.",
      "A": "Opsi A benar karena BCrypt adalah standar de-facto password hashing di Spring Security.",
      "B": "Opsi B salah karena MD5 sudah tidak aman (vulnerable to collision).",
      "C": "Opsi C salah karena SHA-1 sudah deprecated dan rentan serangan brute-force.",
      "D": "Opsi D salah karena menyimpan password dalam plain text adalah pelanggaran fatal keamanan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-121",
    "level": "beginner",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Bagian apakah yang membentuk sebuah struktur token JSON Web Token (JWT)?",
    "options": {
      "A": "Header, Payload, dan Signature (dipisahkan oleh tanda titik)",
      "B": "Username, Password, dan ExpiredDate",
      "C": "Public Key, Private Key, dan Certificate",
      "D": "XML Body, SoapAction, dan Timestamp"
    },
    "answer": "A",
    "explanation": {
      "correct": "JWT terdiri dari tiga bagian terpisah yang di-encode Base64Url: Header (algoritma & tipe token), Payload (claims data), dan Signature (verifikasi integritas token).",
      "A": "Opsi A benar karena merinci 3 komponen pembentuk JWT standar RFC 7519.",
      "B": "Opsi B salah karena password tidak pernah boleh dimasukkan ke dalam token JWT.",
      "C": "Opsi C salah karena itu adalah komponen sertifikat TLS/PKI.",
      "D": "Opsi D salah karena itu adalah format pesan protokol SOAP."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-122",
    "level": "beginner",
    "topic": "Design Patterns",
    "questionType": "concept",
    "question": "Design pattern apakah yang memastikan sebuah kelas hanya memiliki satu instance tunggal dan menyediakan titik akses global ke instance tersebut?",
    "options": {
      "A": "Singleton Pattern",
      "B": "Factory Method Pattern",
      "C": "Builder Pattern",
      "D": "Prototype Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Singleton pattern membatasi instansiasi sebuah kelas menjadi satu objek saja di memori dan menyediakan method statis (misal: getInstance()) untuk mengaksesnya.",
      "A": "Opsi A benar karena merupakan definisi tepat dari Singleton pattern.",
      "B": "Opsi B salah karena Factory Method mendelegasikan pembuatan objek ke subclass/factory.",
      "C": "Opsi C salah karena Builder digunakan untuk merakit objek kompleks langkah demi langkah.",
      "D": "Opsi D salah karena Prototype membuat objek baru dengan cara mengkloning objek yang sudah ada."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-123",
    "level": "beginner",
    "topic": "Design Patterns",
    "questionType": "concept",
    "question": "Design pattern apakah yang sangat cocok digunakan untuk membuat objek kompleks yang memiliki banyak parameter opsional agar kode lebih terbaca tanpa telescoping constructor?",
    "options": {
      "A": "Builder Pattern",
      "B": "Singleton Pattern",
      "C": "Decorator Pattern",
      "D": "Adapter Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Builder pattern memisahkan konstruksi objek dari representasinya, memungkinkan pembuatan objek yang fleksibel dengan method chaining (misal: User.builder().name(...).age(...).build()).",
      "A": "Opsi A benar karena Builder pattern menyelesaikan masalah antipattern telescoping constructor.",
      "B": "Opsi B salah karena Singleton hanya memastikan satu objek tunggal.",
      "C": "Opsi C salah karena Decorator menambahkan tanggung jawab pada objek secara dinamis.",
      "D": "Opsi D salah karena Adapter menjembatani dua interface yang tidak kompatibel."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-124",
    "level": "beginner",
    "topic": "Design Patterns",
    "questionType": "concept",
    "question": "Design pattern apakah yang mendelegasikan proses instansiasi objek ke method atau subclass sehingga kode klien tidak terikat langsung pada kelas konkretnya?",
    "options": {
      "A": "Factory Method Pattern",
      "B": "Observer Pattern",
      "C": "Strategy Pattern",
      "D": "Proxy Pattern"
    },
    "answer": "A",
    "explanation": {
      "correct": "Factory Method pattern mendefinisikan interface pembuatan objek tetapi membiarkan subclass atau method pabrik menentukan kelas konkret mana yang diinstansiasi.",
      "A": "Opsi A benar karena Factory pattern mengisolasi proses pembuatan objek konkret.",
      "B": "Opsi B salah karena Observer adalah pattern behavioural untuk notifikasi event 1-ke-banyak.",
      "C": "Opsi C salah karena Strategy adalah pattern behavioural untuk menukar algoritma secara dinamis.",
      "D": "Opsi D salah karena Proxy adalah pattern struktural untuk mengontrol akses ke objek lain."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-125",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Perintah Git manakah yang digunakan untuk mendownload salinan repository remote beserta riwayat commit-nya ke komputer lokal untuk pertama kali?",
    "options": {
      "A": "git clone <url>",
      "B": "git init",
      "C": "git pull",
      "D": "git checkout"
    },
    "answer": "A",
    "explanation": {
      "correct": "'git clone' menduplikasi seluruh repository Git remote ke direktori lokal baru, termasuk semua branch, commit, dan konfigurasi origin.",
      "A": "Opsi A benar karena git clone adalah perintah download repo remote pertama kali.",
      "B": "Opsi B salah karena git init membuat repository lokal baru yang masih kosong.",
      "C": "Opsi C salah karena git pull mengambil pembaruan commit dari remote pada repo lokal yang sudah ada.",
      "D": "Opsi D salah karena git checkout berpindah branch atau restore file kerja."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JB-126",
    "level": "beginner",
    "topic": "Git & SDLC",
    "questionType": "concept",
    "question": "Apa fungsi utama dari proses Pull Request (PR) atau Merge Request dalam siklus pengembangan perangkat lunak (SDLC)?",
    "options": {
      "A": "Memungkinkan tim melakukan code review, diskusi, dan automated testing sebelum perubahan kode digabungkan ke branch utama",
      "B": "Menghapus commit yang salah secara otomatis tanpa jejak",
      "C": "Mengubah kode Java menjadi file .jar atau .war di server",
      "D": "Menonaktifkan pengujian unit agar deployment lebih cepat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pull Request adalah mekanisme kolaborasi di mana developer mengajukan perubahan kode agar dapat direview oleh rekan tim (peer review), diverifikasi oleh CI pipeline, dan dipastikan mematuhi standar sebelum dimerge ke branch target.",
      "A": "Opsi A benar karena code review dan verifikasi kualitas adalah esensi utama Pull Request.",
      "B": "Opsi B salah karena PR tidak bertujuan menghapus jejak commit.",
      "C": "Opsi C salah karena kompilasi/packaging adalah tugas build tool (Maven/Gradle).",
      "D": "Opsi D salah karena CI/CD pada PR justru menjalankan unit test secara otomatis demi menjaga stabilitas."
    },
    "jobId": "junior-java"
  }
];
