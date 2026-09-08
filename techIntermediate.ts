import { Question } from './types';

export const TECH_INTERMEDIATE: Question[] = [
  {
    "id": "JI-001",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari operasi Stream flatMap berikut?\n\n```java\nList<List<String>> list = Arrays.asList(\n    Arrays.asList(\"A\", \"B\"),\n    Arrays.asList(\"C\", \"D\")\n);\nList<String> flat = list.stream()\n    .flatMap(Collection::stream)\n    .map(String::toLowerCase)\n    .collect(Collectors.toList());\nSystem.out.println(flat);\n```",
    "code": "List<List<String>> list = Arrays.asList(\n    Arrays.asList(\"A\", \"B\"),\n    Arrays.asList(\"C\", \"D\")\n);\nList<String> flat = list.stream()\n    .flatMap(Collection::stream)\n    .map(String::toLowerCase)\n    .collect(Collectors.toList());\nSystem.out.println(flat);",
    "options": {
      "A": "[[a, b], [c, d]]",
      "B": "[a, b, c, d]",
      "C": "[A, B, C, D]",
      "D": "Compilation Error"
    },
    "answer": "B",
    "explanation": {
      "correct": "flatMap meratakan (flatten) nested stream dari tiap list ke dalam satu flat stream tunggal. Kemudian map(String::toLowerCase) mengubah tiap huruf menjadi huruf kecil: [a, b, c, d].",
      "A": "Salah. flatMap meratakan struktur list bersarang.",
      "B": "Benar. flatMap meratakan dua list menjadi satu stream, lalu di-lowercase menjadi [a, b, c, d].",
      "C": "Salah. map(String::toLowerCase) mengubah huruf menjadi kecil.",
      "D": "Salah. Kode valid dan menggunakan method reference baku."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-002",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Stream reduce berikut?\n\n```java\nList<Integer> nums = Arrays.asList(1, 2, 3, 4);\nint result = nums.stream().reduce(10, (a, b) -> a * b);\nSystem.out.println(result);\n```",
    "code": "List<Integer> nums = Arrays.asList(1, 2, 3, 4);\nint result = nums.stream().reduce(10, (a, b) -> a * b);\nSystem.out.println(result);",
    "options": {
      "A": "24",
      "B": "240",
      "C": "10",
      "D": "0"
    },
    "answer": "B",
    "explanation": {
      "correct": "reduce menggunakan nilai identitas awal 10: (((10 * 1) * 2) * 3) * 4 = 10 * 24 = 240.",
      "A": "Salah. 24 adalah hasil perkalian 1*2*3*4 tanpa nilai identitas awal 10.",
      "B": "Benar. Nilai identitas 10 dikalikan secara berurutan dengan 1, 2, 3, 4 menghasilkan 240.",
      "C": "Salah. Seluruh elemen list diproses perkaliannya.",
      "D": "Salah. Tidak ada perkalian dengan 0."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-003",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari operasi Collectors.groupingBy berikut?\n\n```java\nList<String> words = Arrays.asList(\"cat\", \"dog\", \"bear\", \"elephant\");\nMap<Integer, Long> map = words.stream()\n    .collect(Collectors.groupingBy(String::length, Collectors.counting()));\nSystem.out.println(map.get(3));\n```",
    "code": "List<String> words = Arrays.asList(\"cat\", \"dog\", \"bear\", \"elephant\");\nMap<Integer, Long> map = words.stream()\n    .collect(Collectors.groupingBy(String::length, Collectors.counting()));\nSystem.out.println(map.get(3));",
    "options": {
      "A": "1",
      "B": "2",
      "C": "[cat, dog]",
      "D": "null"
    },
    "answer": "B",
    "explanation": {
      "correct": "groupingBy mengelompokkan kata berdasarkan panjangnya (length). Kata dengan panjang 3 adalah 'cat' dan 'dog' (2 kata). Collectors.counting() menghitung jumlahnya, sehingga map.get(3) menghasilkan 2.",
      "A": "Salah. Ada 2 kata yang berpanjang 3 karakter ('cat' dan 'dog').",
      "B": "Benar. 'cat' dan 'dog' memiliki panjang 3, sehingga nilai counting adalah 2L.",
      "C": "Salah. Nilai pada map bertipe Long karena menggunakan downstream collector counting().",
      "D": "Salah. Key 3 ada di dalam map."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-004",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Stream distinct dan sorted dengan Comparator kustom?\n\n```java\nList<Integer> nums = Arrays.asList(5, 3, 5, 1, 2);\nList<Integer> sorted = nums.stream()\n    .distinct()\n    .sorted(Comparator.reverseOrder())\n    .collect(Collectors.toList());\nSystem.out.println(sorted);\n```",
    "code": "List<Integer> nums = Arrays.asList(5, 3, 5, 1, 2);\nList<Integer> sorted = nums.stream()\n    .distinct()\n    .sorted(Comparator.reverseOrder())\n    .collect(Collectors.toList());\nSystem.out.println(sorted);",
    "options": {
      "A": "[5, 5, 3, 2, 1]",
      "B": "[5, 3, 2, 1]",
      "C": "[1, 2, 3, 5]",
      "D": "[5, 3, 1, 2]"
    },
    "answer": "B",
    "explanation": {
      "correct": "distinct() membuang duplikat angka 5 (menyisakan 5, 3, 1, 2). sorted(Comparator.reverseOrder()) mengurutkan dari besar ke kecil (descending): [5, 3, 2, 1].",
      "A": "Salah. distinct() telah menghapus angka 5 yang duplikat.",
      "B": "Benar. Elemen unik diurutkan secara descending menjadi [5, 3, 2, 1].",
      "C": "Salah. reverseOrder() mengurutkan dari terbesar ke terkecil, bukan ascending.",
      "D": "Salah. Urutannya belum terurut descending sepenuhnya."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-005",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output penggunaan Optional.map dan orElse berikut?\n\n```java\nString name = null;\nString res = Optional.ofNullable(name)\n    .map(String::toUpperCase)\n    .orElse(\"DEFAULT\");\nSystem.out.println(res);\n```",
    "code": "String name = null;\nString res = Optional.ofNullable(name)\n    .map(String::toUpperCase)\n    .orElse(\"DEFAULT\");\nSystem.out.println(res);",
    "options": {
      "A": "null",
      "B": "DEFAULT",
      "C": "NullPointerException",
      "D": "\"\" (String kosong)"
    },
    "answer": "B",
    "explanation": {
      "correct": "Optional.ofNullable(null) menghasilkan Optional.empty(). Pemanggilan .map() diabaikan pada Optional yang kosong, lalu .orElse(\"DEFAULT\") mengembalikan nilai fallback 'DEFAULT'.",
      "A": "Salah. orElse akan mengembalikan fallback jika Optional kosong.",
      "B": "Benar. Karena name null, Optional bernilai empty dan orElse(\"DEFAULT\") mengembalikan 'DEFAULT'.",
      "C": "Salah. Optional.ofNullable aman dari NullPointerException.",
      "D": "Salah. Nilai yang dikembalikan adalah string 'DEFAULT', bukan string kosong."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-006",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari TreeMap dengan comparator kustom berikut?\n\n```java\nMap<String, Integer> map = new TreeMap<>(Comparator.reverseOrder());\nmap.put(\"A\", 1);\nmap.put(\"C\", 3);\nmap.put(\"B\", 2);\nSystem.out.println(map.keySet());\n```",
    "code": "Map<String, Integer> map = new TreeMap<>(Comparator.reverseOrder());\nmap.put(\"A\", 1);\nmap.put(\"C\", 3);\nmap.put(\"B\", 2);\nSystem.out.println(map.keySet());",
    "options": {
      "A": "[A, B, C]",
      "B": "[C, B, A]",
      "C": "[A, C, B]",
      "D": "Compilation Error"
    },
    "answer": "B",
    "explanation": {
      "correct": "TreeMap mengurutkan key secara alami. Karena diberikan Comparator.reverseOrder(), key diurutkan secara menurun (descending): [C, B, A].",
      "A": "Salah. [A, B, C] adalah urutan natural ascending standar.",
      "B": "Benar. Comparator.reverseOrder() membalikkan urutan key alfabetis menjadi [C, B, A].",
      "C": "Salah. TreeMap selalu menjaga urutan terurut, bukan urutan penyisipan.",
      "D": "Salah. Sintaks sepenuhnya valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-007",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari operasi PriorityQueue berikut?\n\n```java\nPriorityQueue<Integer> pq = new PriorityQueue<>();\npq.offer(30);\npq.offer(10);\npq.offer(20);\nSystem.out.println(pq.poll() + \" \" + pq.poll());\n```",
    "code": "PriorityQueue<Integer> pq = new PriorityQueue<>();\npq.offer(30);\npq.offer(10);\npq.offer(20);\nSystem.out.println(pq.poll() + \" \" + pq.poll());",
    "options": {
      "A": "30 20",
      "B": "10 20",
      "C": "30 10",
      "D": "10 30"
    },
    "answer": "B",
    "explanation": {
      "correct": "PriorityQueue di Java secara default adalah Min-Heap (elemen terkecil memiliki prioritas tertinggi). poll() pertama mengambil 10, poll() kedua mengambil 20.",
      "A": "Salah. PriorityQueue default adalah min-heap, bukan max-heap.",
      "B": "Benar. Min-heap mengeluarkan elemen terkecil pertama (10) lalu berikutnya (20).",
      "C": "Salah. Urutan prioritas terendah ke tertinggi.",
      "D": "Salah. Elemen 20 lebih kecil dari 30 sehingga keluar lebih dulu."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-008",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari AtomicInteger pada thread tunggal berikut?\n\n```java\nAtomicInteger ai = new AtomicInteger(10);\nint a = ai.getAndIncrement();\nint b = ai.incrementAndGet();\nSystem.out.println(a + \" \" + b + \" \" + ai.get());\n```",
    "code": "AtomicInteger ai = new AtomicInteger(10);\nint a = ai.getAndIncrement();\nint b = ai.incrementAndGet();\nSystem.out.println(a + \" \" + b + \" \" + ai.get());",
    "options": {
      "A": "10 12 12",
      "B": "11 12 12",
      "C": "10 11 11",
      "D": "11 11 12"
    },
    "answer": "A",
    "explanation": {
      "correct": "getAndIncrement() mengembalikan nilai lama (10) lalu menaikkan nilai ke 11. incrementAndGet() menaikkan nilai ke 12 lalu mengembalikan nilai baru (12). ai.get() bernilai 12.",
      "A": "Benar. a = 10 (nilai sebelum increment), b = 12 (nilai setelah increment kedua), ai.get() = 12.",
      "B": "Salah. getAndIncrement mengembalikan nilai sebelum di-increment.",
      "C": "Salah. Terjadi dua kali penambahan nilai.",
      "D": "Salah. Nilai a adalah 10."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-009",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari List.copyOf atau Collections.unmodifiableList berikut?\n\n```java\nList<String> orig = new ArrayList<>(Arrays.asList(\"X\", \"Y\"));\nList<String> unmod = Collections.unmodifiableList(orig);\norig.add(\"Z\");\nSystem.out.println(unmod.size());\n```",
    "code": "List<String> orig = new ArrayList<>(Arrays.asList(\"X\", \"Y\"));\nList<String> unmod = Collections.unmodifiableList(orig);\norig.add(\"Z\");\nSystem.out.println(unmod.size());",
    "options": {
      "A": "2",
      "B": "3",
      "C": "UnsupportedOperationException",
      "D": "Compilation Error"
    },
    "answer": "B",
    "explanation": {
      "correct": "Collections.unmodifiableList hanyalah wrapper view di atas list asli 'orig'. Modifikasi pada list asli tetap tercermin pada unmodifiable view. Maka unmod.size() bernilai 3. Exception hanya dilempar jika modifikasi dilakukan langsung via unmod.add().",
      "A": "Salah. unmodifiableList adalah view langsung ke list asli, perubahannya tercermin.",
      "B": "Benar. Modifikasi pada list underlying (orig) terlihat melalui view unmodifiableList.",
      "C": "Salah. Exception hanya dilempar jika memanggil method mutasi pada reference unmod.",
      "D": "Salah. Kode valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-010",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Stream takeWhile (Java 9+) berikut?\n\n```java\nList<Integer> list = Stream.of(2, 4, 6, 7, 8, 10)\n    .takeWhile(n -> n % 2 == 0)\n    .collect(Collectors.toList());\nSystem.out.println(list);\n```",
    "code": "List<Integer> list = Stream.of(2, 4, 6, 7, 8, 10)\n    .takeWhile(n -> n % 2 == 0)\n    .collect(Collectors.toList());\nSystem.out.println(list);",
    "options": {
      "A": "[2, 4, 6, 8, 10]",
      "B": "[2, 4, 6]",
      "C": "[7]",
      "D": "[8, 10]"
    },
    "answer": "B",
    "explanation": {
      "correct": "takeWhile mengambil elemen selama predikat bernilai true. Begitu menemui angka 7 (ganjil/false), stream langsung berhenti memproses elemen selanjutnya meskipun ada angka genap lagi (8, 10). Hasilnya [2, 4, 6].",
      "A": "Salah. takeWhile berhenti pada elemen pertama yang tidak memenuhi predikat, berbeda dengan filter().",
      "B": "Benar. takeWhile mengambil elemen sampai kondisi pertama kali false (angka 7), menghasilkan [2, 4, 6].",
      "C": "Salah. Angka 7 tidak memenuhi kondisi.",
      "D": "Salah. Elemen setelah 7 tidak diproses."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-011",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari pemanggilan Collectors.joining berikut?\n\n```java\nList<String> items = Arrays.asList(\"Java\", \"Spring\", \"JPA\");\nString res = items.stream().collect(Collectors.joining(\", \", \"[\", \"]\"));\nSystem.out.println(res);\n```",
    "code": "List<String> items = Arrays.asList(\"Java\", \"Spring\", \"JPA\");\nString res = items.stream().collect(Collectors.joining(\", \", \"[\", \"]\"));\nSystem.out.println(res);",
    "options": {
      "A": "Java, Spring, JPA",
      "B": "[Java, Spring, JPA]",
      "C": "[Java], [Spring], [JPA]",
      "D": "[Java-Spring-JPA]"
    },
    "answer": "B",
    "explanation": {
      "correct": "Collectors.joining(delimiter, prefix, suffix) menggabungkan elemen dengan pembatas ', ', diawali '[' dan diakhiri ']'. Hasilnya adalah '[Java, Spring, JPA]'.",
      "A": "Salah. Tidak ada prefix dan suffix.",
      "B": "Benar. Parameter delimiter, prefix, suffix menghasilkan '[Java, Spring, JPA]'.",
      "C": "Salah. Prefix dan suffix hanya diletakkan di awal dan akhir seluruh string gabungan.",
      "D": "Salah. Delimiter yang digunakan adalah koma dan spasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-012",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari String.join berikut?\n\n```java\nString joined = String.join(\"-\", \"2026\", \"09\", \"08\");\nSystem.out.println(joined);\n```",
    "code": "String joined = String.join(\"-\", \"2026\", \"09\", \"08\");\nSystem.out.println(joined);",
    "options": {
      "A": "20260908",
      "B": "2026-09-08",
      "C": "-2026-09-08-",
      "D": "Error"
    },
    "answer": "B",
    "explanation": {
      "correct": "String.join(delimiter, elements) menggabungkan varargs string dengan pemisah tanda hubung '-'. Hasilnya '2026-09-08'.",
      "A": "Salah. Delimiter '-' disisipkan di antara elemen.",
      "B": "Benar. String.join menyisipkan tanda hubung di antara setiap elemen, menghasilkan '2026-09-08'.",
      "C": "Salah. Delimiter tidak ditambahkan di awal atau akhir string.",
      "D": "Salah. Method static String.join valid sejak Java 8."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-013",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Stream findFirst pada list kosong?\n\n```java\nOptional<String> opt = Collections.<String>emptyList().stream().findFirst();\nSystem.out.println(opt.isPresent() + \" \" + opt.orElse(\"Empty\"));\n```",
    "code": "Optional<String> opt = Collections.<String>emptyList().stream().findFirst();\nSystem.out.println(opt.isPresent() + \" \" + opt.orElse(\"Empty\"));",
    "options": {
      "A": "true Empty",
      "B": "false Empty",
      "C": "false null",
      "D": "NoSuchElementException"
    },
    "answer": "B",
    "explanation": {
      "correct": "findFirst() pada stream kosong mengembalikan Optional.empty(). opt.isPresent() bernilai false, dan opt.orElse(\"Empty\") mengembalikan 'Empty'.",
      "A": "Salah. isPresent() bernilai false untuk stream kosong.",
      "B": "Benar. opt.isPresent() adalah false, dan orElse mengembalikan fallback string 'Empty'.",
      "C": "Salah. orElse mengembalikan 'Empty', bukan null.",
      "D": "Salah. orElse tidak melempar NoSuchElementException."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-014",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari casting Generics dengan wildcard berikut?\n\n```java\nList<Integer> ints = Arrays.asList(1, 2, 3);\nList<? extends Number> nums = ints;\nNumber n = nums.get(0);\nSystem.out.println(n.intValue() + nums.size());\n```",
    "code": "List<Integer> ints = Arrays.asList(1, 2, 3);\nList<? extends Number> nums = ints;\nNumber n = nums.get(0);\nSystem.out.println(n.intValue() + nums.size());",
    "options": {
      "A": "4",
      "B": "3",
      "C": "Compilation Error pada nums.get(0)",
      "D": "ClassCastException"
    },
    "answer": "A",
    "explanation": {
      "correct": "nums.get(0) mengembalikan tipe Number (nilai 1). nums.size() bernilai 3. Penjumlahan 1 + 3 menghasilkan 4.",
      "A": "Benar. n.intValue() = 1 dan nums.size() = 3, sehingga 1 + 3 = 4.",
      "B": "Salah. 1 + 3 menghasilkan 4.",
      "C": "Salah. Membaca dari wildcard covariant (? extends T) diperbolehkan.",
      "D": "Salah. Integer adalah turunan Number yang sah."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-015",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari method Math.max dan Stream max berikut?\n\n```java\nList<Integer> list = Arrays.asList(10, 40, 20);\nint max = list.stream().max(Integer::compareTo).get();\nSystem.out.println(max);\n```",
    "code": "List<Integer> list = Arrays.asList(10, 40, 20);\nint max = list.stream().max(Integer::compareTo).get();\nSystem.out.println(max);",
    "options": {
      "A": "10",
      "B": "40",
      "C": "20",
      "D": "Optional[40]"
    },
    "answer": "B",
    "explanation": {
      "correct": "max(Integer::compareTo) mencari elemen maksimum berdasarkan natural ordering (mengembalikan Optional<Integer> berisi 40). Memanggil .get() menghasilkan nilai int primitif 40.",
      "A": "Salah. 10 adalah nilai minimum.",
      "B": "Benar. Nilai maksimum dari list adalah 40.",
      "C": "Salah. 20 bukan nilai tertinggi.",
      "D": "Salah. Method .get() meng-unwrap nilai dari objek Optional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-016",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari pemanggilan Stream anyMatch vs allMatch berikut?\n\n```java\nList<Integer> nums = Arrays.asList(2, 4, 6, 9);\nboolean b1 = nums.stream().anyMatch(n -> n % 2 != 0);\nboolean b2 = nums.stream().allMatch(n -> n % 2 == 0);\nSystem.out.println(b1 + \" \" + b2);\n```",
    "code": "List<Integer> nums = Arrays.asList(2, 4, 6, 9);\nboolean b1 = nums.stream().anyMatch(n -> n % 2 != 0);\nboolean b2 = nums.stream().allMatch(n -> n % 2 == 0);\nSystem.out.println(b1 + \" \" + b2);",
    "options": {
      "A": "true true",
      "B": "true false",
      "C": "false true",
      "D": "false false"
    },
    "answer": "B",
    "explanation": {
      "correct": "b1 mengecek apakah ada angka ganjil (angka 9 ganjil -> true). b2 mengecek apakah semua angka genap (karena ada 9 -> false). Maka hasilnya 'true false'.",
      "A": "Salah. allMatch bernilai false karena ada angka 9.",
      "B": "Benar. anyMatch true (ada 9), allMatch false (tidak semua genap).",
      "C": "Salah. anyMatch bernilai true.",
      "D": "Salah. anyMatch bernilai true karena 9 ganjil."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-017",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari ConcurrentHashMap computeIfAbsent berikut?\n\n```java\nMap<String, Integer> map = new ConcurrentHashMap<>();\nmap.put(\"A\", 10);\nmap.computeIfAbsent(\"A\", k -> 20);\nmap.computeIfAbsent(\"B\", k -> 30);\nSystem.out.println(map.get(\"A\") + \" \" + map.get(\"B\"));\n```",
    "code": "Map<String, Integer> map = new ConcurrentHashMap<>();\nmap.put(\"A\", 10);\nmap.computeIfAbsent(\"A\", k -> 20);\nmap.computeIfAbsent(\"B\", k -> 30);\nSystem.out.println(map.get(\"A\") + \" \" + map.get(\"B\"));",
    "options": {
      "A": "10 30",
      "B": "20 30",
      "C": "10 null",
      "D": "20 null"
    },
    "answer": "A",
    "explanation": {
      "correct": "computeIfAbsent hanya menghitung dan memasukkan nilai jika key belum ada. Key 'A' sudah ada dengan nilai 10, sehingga mapping function diabaikan. Key 'B' belum ada, sehingga diisi 30. Hasilnya 10 dan 30.",
      "A": "Benar. Key 'A' tidak ditimpa karena sudah ada, key 'B' baru diisi 30.",
      "B": "Salah. Nilai key 'A' tidak diubah oleh computeIfAbsent.",
      "C": "Salah. Key 'B' berhasil dimasukkan.",
      "D": "Salah. Key 'A' tetap 10."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-018",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari ArrayDeque sebagai Stack (LIFO) berikut?\n\n```java\nDeque<String> stack = new ArrayDeque<>();\nstack.push(\"First\");\nstack.push(\"Second\");\nSystem.out.println(stack.pop() + \" \" + stack.peek());\n```",
    "code": "Deque<String> stack = new ArrayDeque<>();\nstack.push(\"First\");\nstack.push(\"Second\");\nSystem.out.println(stack.pop() + \" \" + stack.peek());",
    "options": {
      "A": "First Second",
      "B": "Second First",
      "C": "First First",
      "D": "Second Second"
    },
    "answer": "B",
    "explanation": {
      "correct": "ArrayDeque dengan push() dan pop() berperilaku sebagai Stack (LIFO). 'Second' berada di puncak. pop() mengeluarkan 'Second'. peek() melihat elemen puncak saat ini yaitu 'First'.",
      "A": "Salah. pop() mengambil elemen yang terakhir di-push ('Second').",
      "B": "Benar. pop() mengambil 'Second', lalu peek() membaca elemen yang tersisa ('First').",
      "C": "Salah. Urutan LIFO.",
      "D": "Salah. 'Second' sudah dikeluarkan oleh pop()."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-019",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Stream dropWhile (Java 9+) berikut?\n\n```java\nList<Integer> res = Stream.of(1, 2, 3, 4, 5)\n    .dropWhile(n -> n < 3)\n    .collect(Collectors.toList());\nSystem.out.println(res);\n```",
    "code": "List<Integer> res = Stream.of(1, 2, 3, 4, 5)\n    .dropWhile(n -> n < 3)\n    .collect(Collectors.toList());\nSystem.out.println(res);",
    "options": {
      "A": "[1, 2]",
      "B": "[3, 4, 5]",
      "C": "[4, 5]",
      "D": "[]"
    },
    "answer": "B",
    "explanation": {
      "correct": "dropWhile membuang elemen selama predikat n < 3 bernilai true (elemen 1 dan 2 dibuang). Begitu mencapai 3, pembuangan berhenti dan semua elemen sisanya diambil: [3, 4, 5].",
      "A": "Salah. [1, 2] adalah elemen yang dibuang.",
      "B": "Benar. dropWhile membuang elemen 1 dan 2, lalu mengembalikan sisanya [3, 4, 5].",
      "C": "Salah. Angka 3 tidak kurang dari 3 sehingga tidak dibuang.",
      "D": "Salah. Stream menghasilkan elemen."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-020",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari method chaining Optional flatMap berikut?\n\n```java\nOptional<String> opt = Optional.of(\"spring\")\n    .flatMap(s -> Optional.of(s + \"boot\"))\n    .filter(s -> s.length() > 5);\nSystem.out.println(opt.orElse(\"none\"));\n```",
    "code": "Optional<String> opt = Optional.of(\"spring\")\n    .flatMap(s -> Optional.of(s + \"boot\"))\n    .filter(s -> s.length() > 5);\nSystem.out.println(opt.orElse(\"none\"));",
    "options": {
      "A": "spring",
      "B": "springboot",
      "C": "none",
      "D": "Optional[springboot]"
    },
    "answer": "B",
    "explanation": {
      "correct": "flatMap mengembalikan Optional berisi 'springboot' (panjang 10). filter(length > 5) bernilai true. orElse mengembalikan nilai 'springboot'.",
      "A": "Salah. String sudah digabung dengan 'boot'.",
      "B": "Benar. Hasil flatMap adalah 'springboot' dengan panjang 10 yang lolos filter.",
      "C": "Salah. Filter terpenuhi sehingga tidak mengembalikan fallback 'none'.",
      "D": "Salah. orElse mengembalikan nilai isi String langsung."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-021",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Collections.binarySearch pada list yang terurut?\n\n```java\nList<Integer> list = Arrays.asList(10, 20, 30, 40, 50);\nint idx = Collections.binarySearch(list, 30);\nSystem.out.println(idx);\n```",
    "code": "List<Integer> list = Arrays.asList(10, 20, 30, 40, 50);\nint idx = Collections.binarySearch(list, 30);\nSystem.out.println(idx);",
    "options": {
      "A": "2",
      "B": "3",
      "C": "30",
      "D": "-3"
    },
    "answer": "A",
    "explanation": {
      "correct": "binarySearch mengembalikan indeks elemen yang dicari pada list terurut (0-based indexing). Elemen 30 berada pada indeks ke-2.",
      "A": "Benar. Indeks dari 30 adalah 2.",
      "B": "Salah. Indeks 3 adalah elemen 40.",
      "C": "Salah. binarySearch mengembalikan indeks, bukan nilai elemen.",
      "D": "Salah. Nilai negatif hanya dikembalikan jika elemen tidak ditemukan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-022",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari String split dengan regex karakter titik '.'?\n\n```java\nString ip = \"192.168.1.1\";\nString[] parts = ip.split(\"\\\\.\");\nSystem.out.println(parts.length);\n```",
    "code": "String ip = \"192.168.1.1\";\nString[] parts = ip.split(\"\\\\.\");\nSystem.out.println(parts.length);",
    "options": {
      "A": "1",
      "B": "4",
      "C": "0",
      "D": "PatternSyntaxException"
    },
    "answer": "B",
    "explanation": {
      "correct": "Titik '.' adalah metakarakter regex yang berarti sembarang karakter. Untuk memisahkannya berdasarkan titik literal, harus di-escape dengan '\\\\.'. String dibagi menjadi 4 oktet: length = 4.",
      "A": "Salah. Jika ditulis split(\".\"), hasilnya kosong, namun dengan '\\\\.' berhasil membagi 4 bagian.",
      "B": "Benar. Regex '\\\\.' membagi string IP menjadi 4 bagian oktet.",
      "C": "Salah. Array memiliki 4 elemen.",
      "D": "Salah. Escape valid dan tidak melempar exception."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-023",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Stream partitioningBy berikut?\n\n```java\nList<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\nMap<Boolean, List<Integer>> map = nums.stream()\n    .collect(Collectors.partitioningBy(n -> n % 2 == 0));\nSystem.out.println(map.get(true));\n```",
    "code": "List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\nMap<Boolean, List<Integer>> map = nums.stream()\n    .collect(Collectors.partitioningBy(n -> n % 2 == 0));\nSystem.out.println(map.get(true));",
    "options": {
      "A": "[1, 3, 5]",
      "B": "[2, 4]",
      "C": "2",
      "D": "null"
    },
    "answer": "B",
    "explanation": {
      "correct": "partitioningBy membagi elemen menjadi map dengan key boolean true dan false. Key 'true' menampung elemen yang memenuhi predikat n % 2 == 0 (angka genap), yaitu [2, 4].",
      "A": "Salah. [1, 3, 5] adalah nilai untuk key false.",
      "B": "Benar. Key true menyimpan list angka genap [2, 4].",
      "C": "Salah. Nilai kembalian adalah List<Integer>, bukan nilai tunggal.",
      "D": "Salah. Key true selalu ada dalam partitioningBy."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-024",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Enum.valueOf dan Enum.ordinal berikut?\n\n```java\nenum Status { PENDING, ACTIVE, INACTIVE }\nStatus s = Status.valueOf(\"ACTIVE\");\nSystem.out.println(s.ordinal() + \" \" + s.name());\n```",
    "code": "enum Status { PENDING, ACTIVE, INACTIVE }\nStatus s = Status.valueOf(\"ACTIVE\");\nSystem.out.println(s.ordinal() + \" \" + s.name());",
    "options": {
      "A": "0 PENDING",
      "B": "1 ACTIVE",
      "C": "2 INACTIVE",
      "D": "1 active"
    },
    "answer": "B",
    "explanation": {
      "correct": "Status.valueOf(\"ACTIVE\") mengambil konstanta ACTIVE. Posisi ordinal-nya (0-based) adalah 1 (PENDING=0, ACTIVE=1). name() mengembalikan string 'ACTIVE'.",
      "A": "Salah. ACTIVE berada pada ordinal 1.",
      "B": "Benar. Ordinal ACTIVE adalah 1 dan namanya adalah 'ACTIVE'.",
      "C": "Salah. Ordinal 2 adalah INACTIVE.",
      "D": "Salah. name() mengembalikan casing persis seperti definisinya (kapital)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-025",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari operasi Bitwise Shift '>>' vs '>>>' berikut?\n\n```java\nint x = -8;\nSystem.out.println((x >> 1) < 0);\n```",
    "code": "int x = -8;\nSystem.out.println((x >> 1) < 0);",
    "options": {
      "A": "true",
      "B": "false",
      "C": "0",
      "D": "Compilation Error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator '>>' adalah signed right shift yang mempertahankan tanda (sign-bit). -8 >> 1 bernilai -4. Karena -4 < 0, maka perbandingannya bernilai true.",
      "A": "Benar. Signed right shift mempertahankan tanda negatif sehingga -8 >> 1 = -4 (< 0 adalah true).",
      "B": "Salah. Hasilnya tetap negatif sehingga perbandingan < 0 bernilai true.",
      "C": "Salah. Hasil evaluasi perbandingan adalah boolean.",
      "D": "Salah. Sintaks valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-026",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari Stream mapToInt dan sum berikut?\n\n```java\nint total = Stream.of(\"10\", \"20\", \"30\")\n    .mapToInt(Integer::parseInt)\n    .sum();\nSystem.out.println(total);\n```",
    "code": "int total = Stream.of(\"10\", \"20\", \"30\")\n    .mapToInt(Integer::parseInt)\n    .sum();\nSystem.out.println(total);",
    "options": {
      "A": "60",
      "B": "102030",
      "C": "0",
      "D": "NumberFormatException"
    },
    "answer": "A",
    "explanation": {
      "correct": "mapToInt(Integer::parseInt) mengkonversi setiap string ke IntStream numerik primitif. sum() menjumlahkan 10 + 20 + 30 = 60.",
      "A": "Benar. IntStream.sum() menjumlahkan 10 + 20 + 30 menghasilkan 60.",
      "B": "Salah. Bukan operasi konkatenasi string.",
      "C": "Salah. Penjumlahan elemen menghasilkan 60.",
      "D": "Salah. Semua string adalah angka valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-027",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "output",
    "question": "Apa output dari polymorphism static method hiding berikut?\n\n```java\nclass Base {\n    static void print() { System.out.print(\"Base \"); }\n}\nclass Sub extends Base {\n    static void print() { System.out.print(\"Sub \"); }\n}\nBase b = new Sub();\nb.print();\n```",
    "code": "class Base {\n    static void print() { System.out.print(\"Base \"); }\n}\nclass Sub extends Base {\n    static void print() { System.out.print(\"Sub \"); }\n}\nBase b = new Sub();\nb.print();",
    "options": {
      "A": "Sub",
      "B": "Base",
      "C": "Base Sub",
      "D": "Compilation Error"
    },
    "answer": "B",
    "explanation": {
      "correct": "Static method tidak di-override melainkan di-hide (method hiding). Pemanggilan static method ditentukan pada compile-time berdasarkan tipe referensi (Base b), bukan tipe objek saat runtime. Maka mencetak 'Base '.",
      "A": "Salah. Static method tidak tunduk pada runtime dynamic polymorphism.",
      "B": "Benar. Static method di-resolve saat compile time berdasarkan deklarasi tipe referensi (Base).",
      "C": "Salah. Hanya satu method yang dieksekusi.",
      "D": "Salah. Method hiding diizinkan di Java."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-028",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Anotasi @Transactional pada method private berikut tidak berfungsi (transaksi tidak aktif). Mengapa?\n\n```java\n@Service\npublic class PaymentService {\n    @Transactional\n    private void executePayment() {\n        // update saldo\n    }\n}\n```",
    "code": "@Service\npublic class PaymentService {\n    @Transactional\n    private void executePayment() {\n        // update saldo\n    }\n}",
    "options": {
      "A": "@Transactional harus bertipe static",
      "B": "Spring AOP Proxy secara default hanya meng-intercept method yang bertipe public; anotasi pada private method diabaikan",
      "C": "Nama method tidak boleh berawalan execute",
      "D": "Service harus meng-extend TransactionManagementService"
    },
    "answer": "B",
    "explanation": {
      "correct": "Spring AOP berbasis proxy dinamis (CGLIB/JDK Dynamic Proxy). Proxy membungkus pemanggilan method eksternal yang 'public'. Method private tidak dapat di-intercept oleh proxy Spring sehingga transaksi tidak pernah dibuat.",
      "A": "Salah. @Transactional tidak boleh digunakan pada static method.",
      "B": "Benar. Spring AOP proxy hanya dapat mencegat method public; @Transactional pada private method diabaikan oleh Spring.",
      "C": "Salah. Penamaan method bebas.",
      "D": "Salah. Tidak perlu inheritance kelas transaksi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-029",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Transaksi berikut tidak di-rollback saat SQLException dilempar. Apa penyebabnya?\n\n```java\n@Service\npublic class UserService {\n    @Transactional\n    public void registerUser() throws SQLException {\n        userRepo.save(new User());\n        throw new SQLException(\"DB Error\");\n    }\n}\n```",
    "code": "@Service\npublic class UserService {\n    @Transactional\n    public void registerUser() throws SQLException {\n        userRepo.save(new User());\n        throw new SQLException(\"DB Error\");\n    }\n}",
    "options": {
      "A": "SQLException bukan exception yang valid di Java",
      "B": "Secara default @Transactional hanya me-rollback Unchecked Exception (RuntimeException & Error); untuk Checked Exception (seperti SQLException) harus menambahkan rollbackFor = Exception.class",
      "C": "Harus memanggil userRepo.flush() secara manual",
      "D": "Method harus mengembalikan boolean"
    },
    "answer": "B",
    "explanation": {
      "correct": "Secara default, Spring hanya me-rollback transaksi pada RuntimeException dan Error. Checked Exception (turunan Exception seperti SQLException atau IOException) dianggap skenario yang sudah diantisipasi dan tidak memicu rollback kecuali dikonfigurasi @Transactional(rollbackFor = Exception.class).",
      "A": "Salah. SQLException adalah checked exception standar Java.",
      "B": "Benar. Default Spring transaction rollback hanya untuk Unchecked Exception; wajib menambahkan rollbackFor untuk checked exception.",
      "C": "Salah. Masalahnya ada pada konfigurasi rollback exception.",
      "D": "Salah. Return type tidak mempengaruhi aturan rollback."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-030",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Kode berikut melempar LazyInitializationException saat client membaca data orders. Apa penyebabnya?\n\n```java\n@Entity\npublic class Customer {\n    @OneToMany(fetch = FetchType.LAZY)\n    private List<Order> orders;\n}\n// Di luar transaksi:\ncustomer.getOrders().size();\n```",
    "code": "@Entity\npublic class Customer {\n    @OneToMany(fetch = FetchType.LAZY)\n    private List<Order> orders;\n}\n// Di luar transaksi:\ncustomer.getOrders().size();",
    "options": {
      "A": "FetchType.LAZY dilarang di JPA",
      "B": "Koleksi LAZY diakses setelah Hibernate Session / persistence context ditutup (no Session available)",
      "C": "orders harus diubah menjadi array",
      "D": "Customer harus memiliki constructor berparameter"
    },
    "answer": "B",
    "explanation": {
      "correct": "Dengan FetchType.LAZY, data asosiasi hanya dimuat saat diakses pertama kali dan membutuhkan Hibernate Session yang aktif. Jika diakses setelah Session ditutup (misalnya di luar service layer / di view), Hibernate melempar LazyInitializationException. Solusinya adalah menggunakan JOIN FETCH, @EntityGraph, atau DTO projection.",
      "A": "Salah. FetchType.LAZY adalah rekomendasi standar untuk koleksi @OneToMany.",
      "B": "Benar. Mengakses proxy lazy collection saat Hibernate Session sudah ditutup memicu LazyInitializationException.",
      "C": "Salah. List adalah interface standar untuk relasi to-many.",
      "D": "Salah. Entity memerlukan no-args constructor, bukan param constructor."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-031",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Method bertanda @Async berikut berjalan secara synchronous (memblokir thread pemanggil). Apa penyebabnya?\n\n```java\n@Service\npublic class ReportService {\n    public void generateAll() {\n        this.processAsync(); // self-invocation\n    }\n    @Async\n    public void processAsync() {}\n}\n```",
    "code": "@Service\npublic class ReportService {\n    public void generateAll() {\n        this.processAsync(); // self-invocation\n    }\n    @Async\n    public void processAsync() {}\n}",
    "options": {
      "A": "Method @Async tidak boleh bertipe void",
      "B": "Pemanggilan 'this.processAsync()' (self-invocation) dalam kelas yang sama melewati Spring Proxy sehingga aspek async tidak terpicu",
      "C": "ReportService harus mengimplementasikan Runnable",
      "D": "Anotasi @Async harus diganti @Thread"
    },
    "answer": "B",
    "explanation": {
      "correct": "Mekanisme AOP Spring bekerja dengan memotong pemanggilan dari luar melalui proxy. Pemanggilan internal via 'this' langsung memanggil method objek lokal tanpa melalui proxy, sehingga anotasi @Async diabaikan dan berjalan synchronous.",
      "A": "Salah. Method @Async boleh mengembalikan void atau CompletableFuture.",
      "B": "Benar. Self-invocation melewati AOP proxy Spring sehingga fungsionalitas asinkron tidak berjalan.",
      "C": "Salah. Spring mengelola thread pool sendiri via TaskExecutor.",
      "D": "Salah. Anotasi resmi adalah @Async."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-032",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Dua service berikut gagal di-bootstrap oleh Spring karena Circular Dependency. Bagaimana solusinya?\n\n```java\n@Service\npublic class ServiceA {\n    private final ServiceB b;\n    public ServiceA(ServiceB b) { this.b = b; }\n}\n@Service\npublic class ServiceB {\n    private final ServiceA a;\n    public ServiceB(ServiceA a) { this.a = a; }\n}\n```",
    "code": "@Service\npublic class ServiceA {\n    private final ServiceB b;\n    public ServiceA(ServiceB b) { this.b = b; }\n}\n@Service\npublic class ServiceB {\n    private final ServiceA a;\n    public ServiceB(ServiceA a) { this.a = a; }\n}",
    "options": {
      "A": "Circular dependency terjadi karena ServiceA dan ServiceB saling membutuhkan via constructor; solusinya refaktor desain (misal buat ServiceC) atau gunakan @Lazy pada salah satu constructor",
      "B": "Ganti kedua kelas menjadi @Repository",
      "C": "Hapus constructor dan gunakan static variable",
      "D": "Spring Boot tidak mendukung constructor injection"
    },
    "answer": "A",
    "explanation": {
      "correct": "IoC Container tidak dapat menentukan bean mana yang harus dibuat pertama kali karena ServiceA butuh ServiceB dan sebaliknya. Solusi terbaik adalah memecah tanggung jawab ke service perantara atau menggunakan anotasi @Lazy pada salah satu dependensi.",
      "A": "Benar. Desain circular dependency harus direfaktor atau dipecah dengan anotasi @Lazy.",
      "B": "Salah. Mengubah stereotype tidak menyelesaikan masalah siklus dependensi.",
      "C": "Salah. Static variable merusak manajemen lifecycle Spring.",
      "D": "Salah. Constructor injection adalah standar utama Spring Boot."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-033",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Query relasi berikut memicu masalah performa 'N+1 Query Problem'. Apa penyebabnya?\n\n```java\nList<Author> authors = authorRepo.findAll();\nfor (Author a : authors) {\n    System.out.println(a.getBooks().size());\n}\n```",
    "code": "List<Author> authors = authorRepo.findAll();\nfor (Author a : authors) {\n    System.out.println(a.getBooks().size());\n}",
    "options": {
      "A": "Hibernate menjalankan 1 query untuk mengambil semua Author, lalu menjalankan N query tambahan untuk memuat relasi books masing-masing Author",
      "B": "findAll() tidak boleh dipanggil di dalam for-loop",
      "C": "books harus disimpan di Redis",
      "D": "Author harus dideklarasikan sebagai abstract class"
    },
    "answer": "A",
    "explanation": {
      "correct": "N+1 problem terjadi ketika 1 query utama mengeksekusi findAll() (N entitas), lalu saat iterasi setiap baris memicu query SELECT terpisah ke database untuk mengambil data child (N query tambahan). Solusinya adalah JOIN FETCH atau @EntityGraph.",
      "A": "Benar. 1 query untuk parent ditambah N query untuk masing-masing relasi child (N+1 query problem).",
      "B": "Salah. findAll dipanggil di luar loop.",
      "C": "Salah. Solusi ORM tidak harus menggunakan Redis.",
      "D": "Salah. Entitas JPA tidak boleh abstract jika di-instansiasi langsung."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-034",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Request POST pada endpoint berikut selalu mengembalikan HTTP 403 Forbidden padahal kredensial user benar. Apa kemungkinan penyebabnya?\n\n```java\n@PostMapping(\"/api/data\")\npublic ResponseEntity<String> save() {\n    return ResponseEntity.ok(\"Saved\");\n}\n```",
    "code": "@PostMapping(\"/api/data\")\npublic ResponseEntity<String> save() {\n    return ResponseEntity.ok(\"Saved\");\n}",
    "options": {
      "A": "Spring Security mengaktifkan proteksi CSRF secara default untuk method POST; jika request tidak menyertakan CSRF token atau CSRF belum di-disable untuk stateless API, request ditolak 403",
      "B": "HTTP POST dilarang oleh Spring Security",
      "C": "Return type ResponseEntity harus bertipe Object",
      "D": "Port server harus diubah ke 8080"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Security secara default mengaktifkan CSRF protection. Untuk REST API stateless (misalnya yang menggunakan JWT Token), CSRF harus dinonaktifkan di SecurityFilterChain (http.csrf(csrf -> csrf.disable())) agar request POST/PUT/DELETE tidak ditolak 403.",
      "A": "Benar. Proteksi CSRF Spring Security yang aktif menolak request POST tanpa token CSRF yang valid.",
      "B": "Salah. HTTP POST sepenuhnya didukung oleh Spring Security.",
      "C": "Salah. ResponseEntity<String> sepenuhnya valid.",
      "D": "Salah. Port server tidak berhubungan dengan otorisasi 403."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-035",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Field bertanda @Value pada kode berikut selalu bernilai null. Apa penyebabnya?\n\n```java\n@Service\npublic class MailService {\n    @Value(\"${mail.host}\")\n    private static String mailHost;\n}\n```",
    "code": "@Service\npublic class MailService {\n    @Value(\"${mail.host}\")\n    private static String mailHost;\n}",
    "options": {
      "A": "Nama properti harus menggunakan garis bawah: mail_host",
      "B": "Spring tidak dapat menginjeksi nilai @Value ke dalam field bertipe static secara langsung",
      "C": "Anotasi @Value hanya berlaku di controller",
      "D": "mailHost harus bertipe Integer"
    },
    "answer": "B",
    "explanation": {
      "correct": "Dependency Injection Spring bekerja pada level instance objek, bukan kelas. Field static bukan milik instance tertentu sehingga Spring mengabaikannya saat inisialisasi bean. Solusinya adalah setter injection non-static atau constructor parameter injection.",
      "A": "Salah. Spring mendukung penamaan kebab-case pada @Value.",
      "B": "Benar. Field static tidak dapat di-inject langsung dengan @Value oleh Spring IoC Container.",
      "C": "Salah. @Value dapat digunakan di sembarang Spring Bean (@Component, @Service, dll).",
      "D": "Salah. Hostname mail bertipe String."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-036",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Validasi anotasi seperti @NotBlank dan @Size pada DTO berikut tidak berjalan. Apa yang kurang pada controller?\n\n```java\n@PostMapping(\"/users\")\npublic ResponseEntity<Void> createUser(@RequestBody UserDto dto) {\n    userService.save(dto);\n    return ResponseEntity.ok().build();\n}\n```",
    "code": "@PostMapping(\"/users\")\npublic ResponseEntity<Void> createUser(@RequestBody UserDto dto) {\n    userService.save(dto);\n    return ResponseEntity.ok().build();\n}",
    "options": {
      "A": "Kurang anotasi @Valid atau @Validated sebelum parameter @RequestBody UserDto dto",
      "B": "UserDto harus meng-extend ValidationObject",
      "C": "Method harus mengembalikan String",
      "D": "@RequestBody harus diganti @ModelAttribute"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi validasi bean (seperti @NotNull, @Size) pada DTO hanya akan dievaluasi jika parameter method di controller ditandai dengan @Valid (dari jakarta.validation) atau @Validated (dari Spring).",
      "A": "Benar. Tanpa anotasi @Valid, validator Spring tidak akan memeriksa batasan (constraints) pada DTO.",
      "B": "Salah. DTO tidak perlu inheritance kelas khusus.",
      "C": "Salah. Return type tidak mempengaruhi validasi input.",
      "D": "Salah. @RequestBody sudah tepat untuk JSON payload."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-037",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Operasi penyimpanan berikut melempar PersistentObjectException (detached entity passed to persist). Apa penyebabnya?\n\n```java\nUser user = new User();\nuser.setId(10L); // set ID manual pada entity dengan auto-generated ID\nem.persist(user);\n```",
    "code": "User user = new User();\nuser.setId(10L); // set ID manual pada entity dengan auto-generated ID\nem.persist(user);",
    "options": {
      "A": "Method persist() tidak boleh dipanggil pada objek User",
      "B": "Memanggil persist() pada entitas yang sudah memiliki nilai ID non-null dianggap sebagai entity detached, bukan new entity; harus menggunakan merge()",
      "C": "ID harus bertipe String",
      "D": "Harus memanggil em.remove() terlebih dahulu"
    },
    "answer": "B",
    "explanation": {
      "correct": "EntityManager.persist() hanya digunakan untuk entitas baru (transient, ID bernilai null). Jika ID sudah diisi, Hibernate menganggapnya entitas yang sudah pernah ada di database (detached). Untuk entitas detached, harus menggunakan em.merge().",
      "A": "Salah. persist() adalah method standar JPA.",
      "B": "Benar. Entity yang sudah memiliki ID non-null dianggap detached saat dipanggil persist(), harus menggunakan merge().",
      "C": "Salah. ID bertipe Long adalah standar umum.",
      "D": "Salah. em.remove() untuk menghapus data."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-038",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Dua objek Person dengan nama dan umur yang sama menghasilkan false saat dicari di HashSet. Apa penyebabnya?\n\n```java\nclass Person {\n    String name; int age;\n    public Person(String n, int a) { name = n; age = a; }\n    @Override public boolean equals(Object o) { ... return true; }\n}\n```",
    "code": "class Person {\n    String name; int age;\n    public Person(String n, int a) { name = n; age = a; }\n    @Override public boolean equals(Object o) { ... return true; }\n}",
    "options": {
      "A": "Kelas Person lupa meng-override method hashCode() yang konsisten dengan equals()",
      "B": "HashSet tidak mendukung custom class",
      "C": "equals() harus mengembalikan tipe int",
      "D": "Field harus dideklarasikan static"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kontrak Java mewajibkan: jika dua objek sama menurut equals(), maka hashCode() keduanya harus menghasilkan nilai integer yang sama. Tanpa override hashCode(), objek disimpan di hash bucket yang berbeda sehingga HashSet tidak dapat menemukannya.",
      "A": "Benar. Wajib meng-override hashCode() bersamaan dengan equals() agar collection berbasis hash (HashSet, HashMap) bekerja benar.",
      "B": "Salah. HashSet mendukung objek kelas kustom apapun.",
      "C": "Salah. Method equals wajib mengembalikan boolean.",
      "D": "Salah. Field instance tidak boleh static untuk merepresentasikan data individu."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-039",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Method terjadwal berikut tidak pernah dieksekusi secara periodik. Apa yang kurang pada kelas konfigurasi aplikasi?\n\n```java\n@Component\npublic class DailyTask {\n    @Scheduled(fixedRate = 5000)\n    public void runTask() {\n        System.out.println(\"Running...\");\n    }\n}\n```",
    "code": "@Component\npublic class DailyTask {\n    @Scheduled(fixedRate = 5000)\n    public void runTask() {\n        System.out.println(\"Running...\");\n    }\n}",
    "options": {
      "A": "Lupa menambahkan anotasi @EnableScheduling pada kelas konfigurasi utama Spring Boot",
      "B": "Nilai fixedRate harus lebih besar dari 10000",
      "C": "Method runTask harus memiliki parameter String",
      "D": "Kelas harus meng-extend TimerTask"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Boot memerlukan anotasi @EnableScheduling (biasanya pada kelas utama @SpringBootApplication) untuk mengaktifkan pemindaian dan eksekutor background task bertanda @Scheduled.",
      "A": "Benar. @EnableScheduling wajib disertakan untuk mengaktifkan pemrosesan background scheduling di Spring.",
      "B": "Salah. fixedRate 5000 (5 detik) sepenuhnya valid.",
      "C": "Salah. Method @Scheduled tidak boleh menerima parameter.",
      "D": "Salah. TimerTask adalah API lama Java, bukan Spring Scheduler."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-040",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode berikut melempar ClassCastException saat runtime. Apa penyebabnya?\n\n```java\nObject obj = \"Hello World\";\nInteger num = (Integer) obj;\n```",
    "code": "Object obj = \"Hello World\";\nInteger num = (Integer) obj;",
    "options": {
      "A": "String tidak dapat di-cast ke Integer karena bukan merupakan subclass dari Integer",
      "B": "Objek harus diinisialisasi dengan kata kunci new",
      "C": "Integer adalah tipe data primitif",
      "D": "Harus menggunakan operator instanceOf sebelum assignment"
    },
    "answer": "A",
    "explanation": {
      "correct": "Meskipun tipe referensi awalnya Object, objek nyata saat runtime adalah String. String dan Integer berada di hierarki kelas yang berbeda dan tidak saling mewarisi, sehingga casting eksplisit melempar ClassCastException.",
      "A": "Benar. Objek runtime String tidak dapat di-cast ke Integer karena tidak berada dalam garis keturunan inheritance yang sama.",
      "B": "Salah. String literal di pool adalah objek valid.",
      "C": "Salah. Integer adalah wrapper class objek, sedangkan primitifnya adalah int.",
      "D": "Salah. Operator yang benar adalah instanceof, namun inti masalahnya adalah ketidakcocokan tipe."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-041",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Query JPQL update berikut melempar TransactionRequiredException. Apa yang kurang?\n\n```java\n@Repository\npublic interface ItemRepository extends JpaRepository<Item, Long> {\n    @Modifying\n    @Query(\"UPDATE Item i SET i.stock = 0 WHERE i.active = false\")\n    void resetInactiveStock();\n}\n```",
    "code": "@Repository\npublic interface ItemRepository extends JpaRepository<Item, Long> {\n    @Modifying\n    @Query(\"UPDATE Item i SET i.stock = 0 WHERE i.active = false\")\n    void resetInactiveStock();\n}",
    "options": {
      "A": "Method modifikasi data massal (bulk update/delete) di Spring Data JPA wajib dijalankan di dalam transaksi (@Transactional)",
      "B": "Query UPDATE dilarang di JPQL",
      "C": "Return type harus selalu void",
      "D": "@Modifying harus dihapus"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Modifying menandai query DML (UPDATE atau DELETE). Eksekusi query modifikasi database di JPA mewajibkan adanya transaksi aktif (@Transactional) pada service pemanggil atau pada method repository.",
      "A": "Benar. Query modifikasi data memerlukan konteks transaksi aktif (@Transactional), jika tidak JPA melempar TransactionRequiredException.",
      "B": "Salah. JPQL mendukung klausa UPDATE dan DELETE.",
      "C": "Salah. Return type bisa void atau int (jumlah baris terpengaruh).",
      "D": "Salah. @Modifying wajib ada untuk query non-SELECT."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-042",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Deserialisasi JSON ke objek Java berikut gagal saat mapping nilai tanggal (DateTimeParseException). Apa solusinya?\n\n```java\npublic class EventDto {\n    private LocalDateTime eventTime;\n}\n```",
    "code": "public class EventDto {\n    private LocalDateTime eventTime;\n}",
    "options": {
      "A": "Menambahkan anotasi @JsonFormat(pattern = \"yyyy-MM-dd HH:mm:ss\") pada field LocalDateTime",
      "B": "Mengubah tipe data menjadi String saja dan tidak pernah memakai LocalDateTime",
      "C": "Menggunakan package java.util.Date lama",
      "D": "Menghapus field eventTime dari DTO"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jackson membutuhkan format pola yang jelas untuk mem-parse format tanggal lokal ke kelas java.time.LocalDateTime. Menggunakan anotasi @JsonFormat(pattern = \"...\") mengatur pola parsing secara tepat.",
      "A": "Benar. @JsonFormat mengatur pola string format tanggal yang diterima dan dihasilkan Jackson.",
      "B": "Salah. Mengubah ke String menghilangkan validasi tipe tanggal yang aman.",
      "C": "Salah. java.util.Date adalah API lama yang sudah digantikan oleh java.time.",
      "D": "Salah. Solusinya bukan menghapus data."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-043",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "debug",
    "question": "Kode multi-threading berikut menghasilkan nilai counter yang tidak konsisten (race condition). Apa solusinya?\n\n```java\npublic class Counter {\n    private int count = 0;\n    public void increment() { count++; }\n}\n```",
    "code": "public class Counter {\n    private int count = 0;\n    public void increment() { count++; }\n}",
    "options": {
      "A": "Menambahkan keyword 'synchronized' pada method increment() atau menggunakan AtomicInteger",
      "B": "Menjadikan method increment() static",
      "C": "Mengubah int menjadi double",
      "D": "Menghapus method increment()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operasi count++ terdiri dari tiga langkah: read, modify, write (tidak atomic). Jika diakses banyak thread secara paralel, terjadi race condition. Menggunakan synchronized atau kelas java.util.concurrent.atomic.AtomicInteger menjamin atomisitas eksekusi.",
      "A": "Benar. Sinkronisasi (synchronized) atau AtomicInteger mencegah data race condition antar thread.",
      "B": "Salah. Static method tanpa sinkronisasi tetap rentan race condition.",
      "C": "Salah. Tipe double juga tidak thread-safe.",
      "D": "Salah. Method dibutuhkan untuk bisnis proses."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-044",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "debug",
    "question": "Controller gagal mengembalikan response dan mengalami infinite recursion saat diserialisasi ke JSON. Apa penyebabnya?\n\n```java\n@Entity\npublic class Department {\n    @OneToMany(mappedBy = \"dept\")\n    private List<Employee> employees;\n}\n@Entity\npublic class Employee {\n    @ManyToOne\n    private Department dept;\n}\n```",
    "code": "@Entity\npublic class Department {\n    @OneToMany(mappedBy = \"dept\")\n    private List<Employee> employees;\n}\n@Entity\npublic class Employee {\n    @ManyToOne\n    private Department dept;\n}",
    "options": {
      "A": "Relasi dua arah (bidirectional) menyebabkan serialisasi Jackson bolak-balik tanpa henti; solusinya gunakan @JsonManagedReference dan @JsonBackReference atau DTO",
      "B": "Spring Boot tidak mendukung relasi ManyToOne",
      "C": "Department harus bertipe Record",
      "D": "Employee harus meng-extend Department"
    },
    "answer": "A",
    "explanation": {
      "correct": "Bidirectional relationship menyebabkan Department merujuk Employee, dan Employee merujuk Department kembali, menghasilkan infinite loop saat Jackson membuat JSON hingga terjadi StackOverflowError. Menggunakan DTO atau anotasi Jackson (@JsonIgnore / @JsonManagedReference) memutus siklus ini.",
      "A": "Benar. Serialisasi relasi bidirectional memicu siklus rekursif tak berujung, harus diputus dengan DTO atau anotasi Jackson.",
      "B": "Salah. JPA sangat mendukung relasi ManyToOne.",
      "C": "Salah. Entity JPA tidak disarankan sebagai Record.",
      "D": "Salah. Relasi ini asosiasi, bukan inheritance."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-045",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "debug",
    "question": "Kode berikut melempar OptimisticLockException saat dua user mengupdate data yang sama secara bersamaan. Mengapa?\n\n```java\n@Entity\npublic class Account {\n    @Id private Long id;\n    @Version private Long version;\n    private BigDecimal balance;\n}\n```",
    "code": "@Entity\npublic class Account {\n    @Id private Long id;\n    @Version private Long version;\n    private BigDecimal balance;\n}",
    "options": {
      "A": "Anotasi @Version mendeteksi konflik update paralel (optimistic locking) ketika data sudah diubah oleh transaksi lain",
      "B": "Field version harus bertipe String",
      "C": "Anotasi @Version dilarang digunakan di JPA",
      "D": "Database tidak mendukung transaksi"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Version mengimplementasikan Optimistic Locking: setiap update memeriksa apakah versi di database sama dengan versi di memori. Jika transaksi lain sudah menaikkan nomor versi terlebih dahulu, Hibernate mendeteksi collision dan melempar OptimisticLockException.",
      "A": "Benar. OptimisticLockException terjadi saat Hibernate mendeteksi versi data di database telah berubah oleh transaksi lain.",
      "B": "Salah. Tipe versi standar adalah Long, Integer, atau Timestamp.",
      "C": "Salah. @Version adalah fitur resmi standar JPA.",
      "D": "Salah. Optimistic locking bekerja di level aplikasi/ORM di atas database transaksional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-046",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi anotasi pada method repository untuk memuat relasi eager secara dinamis guna mencegah N+1 problem:\n\n```java\n@___(attributePaths = {\"orders\", \"orders.items\"})\nOptional<Customer> findWithOrdersById(Long id);\n```",
    "code": "@___(attributePaths = {\"orders\", \"orders.items\"})\nOptional<Customer> findWithOrdersById(Long id);",
    "options": {
      "A": "@EntityGraph",
      "B": "@FetchGraph",
      "C": "@JoinGraph",
      "D": "@DynamicFetch"
    },
    "answer": "A",
    "explanation": {
      "correct": "@EntityGraph di Spring Data JPA memungkinkan pendefinisian atribut yang harus dimuat secara EAGER dalam satu query JOIN FETCH untuk method query tertentu.",
      "A": "Benar. @EntityGraph mengatasi N+1 problem dengan melakukan eager fetching sesuai path yang didefinisikan.",
      "B": "Salah. FetchGraph adalah properti/tipe di JPA, bukan anotasi method Spring Data.",
      "C": "Salah. JoinGraph bukan anotasi resmi.",
      "D": "Salah. DynamicFetch bukan anotasi JPA."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-047",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi Spring Security untuk mengizinkan akses publik tanpa autentikasi pada endpoint '/api/auth/**':\n\n```java\nhttp.authorizeHttpRequests(auth -> auth\n    .requestMatchers(\"/api/auth/**\").___\n    .anyRequest().authenticated()\n);\n```",
    "code": "http.authorizeHttpRequests(auth -> auth\n    .requestMatchers(\"/api/auth/**\").___\n    .anyRequest().authenticated()\n);",
    "options": {
      "A": "permitAll()",
      "B": "allowAll()",
      "C": "openAccess()",
      "D": "noAuth()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method permitAll() pada SecurityFilterChain menyatakan bahwa semua request yang cocok dengan matcher URL tersebut diizinkan masuk tanpa memerlukan token atau login.",
      "A": "Benar. permitAll() memberikan akses bebas tanpa autentikasi pada URL matcher tersebut.",
      "B": "Salah. allowAll bukan method Spring Security.",
      "C": "Salah. openAccess bukan method resmi.",
      "D": "Salah. noAuth tidak ada di DSL Spring Security."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-048",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi relasi satu departemen memiliki banyak karyawan dengan pengaturan orphan removal:\n\n```java\n@OneToMany(mappedBy = \"department\", cascade = CascadeType.ALL, orphanRemoval = ___)\nprivate List<Employee> employees;\n```",
    "code": "@OneToMany(mappedBy = \"department\", cascade = CascadeType.ALL, orphanRemoval = ___)\nprivate List<Employee> employees;",
    "options": {
      "A": "true",
      "B": "false",
      "C": "CascadeType.REMOVE",
      "D": "null"
    },
    "answer": "A",
    "explanation": {
      "correct": "orphanRemoval = true memastikan bahwa jika sebuah Employee dihapus dari list employees di objek Department, baris Employee tersebut otomatis di-DELETE dari tabel database.",
      "A": "Benar. orphanRemoval = true otomatis menghapus entity anak saat referensinya dilepas dari koleksi induk.",
      "B": "Salah. false tidak mengaktifkan fitur orphan removal.",
      "C": "Salah. orphanRemoval menerima tipe boolean, bukan enum CascadeType.",
      "D": "Salah. Nilai harus boolean true/false."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-049",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi method repository Spring Data untuk melakukan pagination dan sorting:\n\n```java\nPage<Product> findByCategory(String category, ___ pageable);\n```",
    "code": "Page<Product> findByCategory(String category, ___ pageable);",
    "options": {
      "A": "Pageable",
      "B": "Pagination",
      "C": "PageRequest",
      "D": "Paging"
    },
    "answer": "A",
    "explanation": {
      "correct": "Parameter bertipe interface org.springframework.data.domain.Pageable digunakan oleh Spring Data JPA untuk menerapkan limit, offset, dan ORDER BY secara otomatis pada query database.",
      "A": "Benar. Interface Pageable adalah standar Spring Data untuk paginasi.",
      "B": "Salah. Pagination bukan tipe parameter Spring Data.",
      "C": "Salah. PageRequest adalah implementasi konkret, parameter method sebaiknya interface Pageable.",
      "D": "Salah. Paging bukan tipe yang valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-050",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi caching untuk menyimpan hasil method ke dalam cache 'products':\n\n```java\n@Service\npublic class ProductService {\n    @___(value = \"products\", key = \"#id\")\n    public Product getById(Long id) {\n        return repo.findById(id).orElse(null);\n    }\n}\n```",
    "code": "@Service\npublic class ProductService {\n    @___(value = \"products\", key = \"#id\")\n    public Product getById(Long id) {\n        return repo.findById(id).orElse(null);\n    }\n}",
    "options": {
      "A": "@Cacheable",
      "B": "@CachePut",
      "C": "@CacheEvict",
      "D": "@EnableCache"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Cacheable memeriksa apakah data dengan key tersebut sudah ada di cache; jika ada, data cache langsung dikembalikan tanpa mengeksekusi body method database.",
      "A": "Benar. @Cacheable menyimpan hasil return method ke cache dan membaca kembali pada pemanggilan berikutnya.",
      "B": "Salah. @CachePut selalu mengeksekusi method untuk memperbarui cache.",
      "C": "Salah. @CacheEvict digunakan untuk menghapus data dari cache.",
      "D": "Salah. @EnableCaching diletakkan di kelas konfigurasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-051",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi untuk membersihkan data cache saat sebuah produk dihapus:\n\n```java\n@___(value = \"products\", key = \"#id\")\npublic void deleteProduct(Long id) {\n    repo.deleteById(id);\n}\n```",
    "code": "@___(value = \"products\", key = \"#id\")\npublic void deleteProduct(Long id) {\n    repo.deleteById(id);\n}",
    "options": {
      "A": "@CacheEvict",
      "B": "@CacheRemove",
      "C": "@CacheClear",
      "D": "@CacheDrop"
    },
    "answer": "A",
    "explanation": {
      "correct": "@CacheEvict bertugas menghapus satu atau seluruh entri dari cache yang ditentukan, menjaga agar data cache tidak usang (stale data) setelah operasi delete atau update.",
      "A": "Benar. @CacheEvict menghapus entri cache spesifik berdasarkan key #id.",
      "B": "Salah. CacheRemove bukan anotasi Spring Cache (itu standar JSR-107).",
      "C": "Salah. CacheClear bukan anotasi bawaan Spring.",
      "D": "Salah. CacheDrop bukan anotasi yang valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-052",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "completion",
    "question": "Lengkapi pemanggilan CompletableFuture untuk menjalankan task secara asinkron:\n\n```java\nCompletableFuture<String> future = CompletableFuture.___( () -> {\n    return fetchExternalData();\n});\n```",
    "code": "CompletableFuture<String> future = CompletableFuture.___( () -> {\n    return fetchExternalData();\n});",
    "options": {
      "A": "supplyAsync",
      "B": "runAsync",
      "C": "callAsync",
      "D": "startAsync"
    },
    "answer": "A",
    "explanation": {
      "correct": "CompletableFuture.supplyAsync menerima Supplier<U> yang mengembalikan nilai hasil secara asinkron. (Sedangkan runAsync menerima Runnable yang tidak mengembalikan nilai / void).",
      "A": "Benar. supplyAsync digunakan untuk task asinkron yang mengembalikan nilai.",
      "B": "Salah. runAsync hanya untuk task bertipe void (tanpa return value).",
      "C": "Salah. callAsync bukan method CompletableFuture.",
      "D": "Salah. startAsync tidak tersedia di CompletableFuture."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-053",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi query JPQL dengan klausa JOIN FETCH untuk memuat relasi secara bersamaan:\n\n```java\n@Query(\"SELECT c FROM Customer c ___ c.orders WHERE c.id = :id\")\nOptional<Customer> findDetailById(@Param(\"id\") Long id);\n```",
    "code": "@Query(\"SELECT c FROM Customer c ___ c.orders WHERE c.id = :id\")\nOptional<Customer> findDetailById(@Param(\"id\") Long id);",
    "options": {
      "A": "JOIN FETCH",
      "B": "INNER JOIN",
      "C": "LEFT JOIN",
      "D": "MERGE JOIN"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa 'JOIN FETCH' dalam JPQL memberitahu Hibernate untuk melakukan SQL JOIN dan langsung menginisialisasi koleksi asosiasi ke dalam memori, mengatasi masalah N+1 query.",
      "A": "Benar. JOIN FETCH menginstruksikan JPA memuat entitas relasi secara eager dalam satu query SQL.",
      "B": "Salah. INNER JOIN biasa hanya memfilter data tanpa menginisialisasi proxy koleksi anak.",
      "C": "Salah. LEFT JOIN biasa tidak otomatis me-populate field entitas anak di JPA.",
      "D": "Salah. MERGE JOIN adalah algoritma query execution engine database, bukan sintaks JPQL."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-054",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi keamanan berbasis peran (Role-Based Access Control) di tingkat method service:\n\n```java\n@___(\"hasRole('ADMIN')\")\npublic void deleteUser(Long id) {\n    userRepo.deleteById(id);\n}\n```",
    "code": "@___(\"hasRole('ADMIN')\")\npublic void deleteUser(Long id) {\n    userRepo.deleteById(id);\n}",
    "options": {
      "A": "@PreAuthorize",
      "B": "@Secured",
      "C": "@RolesAllowed",
      "D": "@CheckRole"
    },
    "answer": "A",
    "explanation": {
      "correct": "@PreAuthorize menerima ekspresi Spring EL (SpEL) seperti hasRole('ADMIN') yang dievaluasi sebelum method dijalankan.",
      "A": "Benar. @PreAuthorize mendukung SpEL ekspresi hasRole('ADMIN') secara fleksibel.",
      "B": "Salah. @Secured tidak mendukung ekspresi SpEL (hanya string literal role).",
      "C": "Salah. @RolesAllowed adalah anotasi JSR-250.",
      "D": "Salah. @CheckRole bukan anotasi Spring Security."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-055",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi penanganan CORS pada Spring Controller:\n\n```java\n@RestController\n@___(origins = \"http://localhost:3000\")\npublic class ApiController {}\n```",
    "code": "@RestController\n@___(origins = \"http://localhost:3000\")\npublic class ApiController {}",
    "options": {
      "A": "@CrossOrigin",
      "B": "@AllowOrigins",
      "C": "@CorsMapping",
      "D": "@CorsPolicy"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @CrossOrigin pada tingkat controller atau handler method mengonfigurasi header HTTP Access-Control-Allow-Origin untuk mengizinkan request dari origin tertentu.",
      "A": "Benar. @CrossOrigin adalah anotasi resmi Spring MVC untuk penanganan CORS.",
      "B": "Salah. AllowOrigins bukan anotasi Spring.",
      "C": "Salah. CorsMapping bukan anotasi yang valid.",
      "D": "Salah. CorsPolicy bukan anotasi Spring MVC."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-056",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi definisi field versi untuk mengaktifkan Optimistic Locking di JPA:\n\n```java\n@Entity\npublic class Product {\n    @Id private Long id;\n    @___\n    private Long version;\n}\n```",
    "code": "@Entity\npublic class Product {\n    @Id private Long id;\n    @___\n    private Long version;\n}",
    "options": {
      "A": "@Version",
      "B": "@Optimistic",
      "C": "@LockVersion",
      "D": "@Revision"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Version (jakarta.persistence.Version) menandai field yang digunakan JPA untuk mendeteksi concurrent modifications menggunakan mekanisme optimistic locking.",
      "A": "Benar. @Version adalah anotasi standar JPA untuk optimistic concurrency control.",
      "B": "Salah. @Optimistic bukan anotasi JPA.",
      "C": "Salah. @LockVersion tidak ada di spesifikasi JPA.",
      "D": "Salah. @Revision biasanya digunakan oleh Hibernate Envers untuk auditing."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-057",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi deklarasi Global Exception Handler di Spring Boot:\n\n```java\n@___\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorDto> handleNotFound(ResourceNotFoundException e) {\n        return ResponseEntity.status(404).body(new ErrorDto(e.getMessage()));\n    }\n}\n```",
    "code": "@___\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorDto> handleNotFound(ResourceNotFoundException e) {\n        return ResponseEntity.status(404).body(new ErrorDto(e.getMessage()));\n    }\n}",
    "options": {
      "A": "@RestControllerAdvice",
      "B": "@ServiceAdvice",
      "C": "@ControllerHelper",
      "D": "@ExceptionInterceptor"
    },
    "answer": "A",
    "explanation": {
      "correct": "@RestControllerAdvice menggabungkan @ControllerAdvice dan @ResponseBody, memungkinkan penanganan exception secara global yang otomatis mengembalikan response body JSON.",
      "A": "Benar. @RestControllerAdvice menangani exception di seluruh controller aplikasi dan mereturn JSON.",
      "B": "Salah. ServiceAdvice bukan anotasi Spring.",
      "C": "Salah. ControllerHelper tidak ada di Spring MVC.",
      "D": "Salah. ExceptionInterceptor bukan anotasi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-058",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi method injection di Spring untuk memilih salah satu implementasi interface jika terdapat beberapa bean:\n\n```java\n@Service\npublic class PaymentProcessor {\n    private final PaymentService paymentService;\n    public PaymentProcessor(@___(\"creditCardService\") PaymentService paymentService) {\n        this.paymentService = paymentService;\n    }\n}\n```",
    "code": "@Service\npublic class PaymentProcessor {\n    private final PaymentService paymentService;\n    public PaymentProcessor(@___(\"creditCardService\") PaymentService paymentService) {\n        this.paymentService = paymentService;\n    }\n}",
    "options": {
      "A": "@Qualifier",
      "B": "@NamedBean",
      "C": "@PrimaryBean",
      "D": "@Specific"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika terdapat lebih dari satu bean yang mengimplementasikan interface yang sama, anotasi @Qualifier(\"namaBean\") digunakan untuk menentukan bean spesifik mana yang harus diinjeksi.",
      "A": "Benar. @Qualifier membedakan bean kandidat yang ambigu pada saat dependency injection.",
      "B": "Salah. NamedBean bukan anotasi Spring.",
      "C": "Salah. @Primary diletakkan di definisi kelas bean, bukan pada parameter constructor.",
      "D": "Salah. Specific bukan anotasi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-059",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi method Derived Query Spring Data JPA untuk mencari user berdasarkan email dan status aktif:\n\n```java\npublic interface UserRepository extends JpaRepository<User, Long> {\n    Optional<User> findByEmail___Status(String email, String status);\n}\n```",
    "code": "public interface UserRepository extends JpaRepository<User, Long> {\n    Optional<User> findByEmail___Status(String email, String status);\n}",
    "options": {
      "A": "And",
      "B": "With",
      "C": "Plus",
      "D": "Together"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Data JPA menggunakan kata kunci 'And' di antara nama field untuk menggabungkan beberapa kriteria pencarian dalam derived query method (menjadi WHERE email = ? AND status = ?).",
      "A": "Benar. Kata kunci 'And' adalah operator logika konjungsi pada Spring Data derived queries.",
      "B": "Salah. With bukan kata kunci query creation Spring Data.",
      "C": "Salah. Plus tidak didukung oleh parser query Spring Data.",
      "D": "Salah. Together bukan kata kunci yang valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-060",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi implementasi response tanpa body dengan status HTTP 204 No Content untuk operasi DELETE:\n\n```java\n@DeleteMapping(\"/users/{id}\")\npublic ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n    userService.delete(id);\n    return ResponseEntity.___.build();\n}\n```",
    "code": "@DeleteMapping(\"/users/{id}\")\npublic ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n    userService.delete(id);\n    return ResponseEntity.___.build();\n}",
    "options": {
      "A": "noContent()",
      "B": "empty()",
      "C": "deleted()",
      "D": "ok()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ResponseEntity.noContent().build() menghasilkan HTTP Response dengan status 204 No Content tanpa payload body, sesuai standar REST API untuk operasi DELETE yang sukses.",
      "A": "Benar. noContent() membuat ResponseEntity dengan status HTTP 204.",
      "B": "Salah. empty bukan static builder method di ResponseEntity.",
      "C": "Salah. deleted bukan kode status HTTP resmi.",
      "D": "Salah. ok() menghasilkan status 200, sedangkan standar operasi tanpa body adalah 204."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-061",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "completion",
    "question": "Lengkapi method reference untuk mengkonversi objek Stream menjadi string representasinya:\n\n```java\nList<String> list = items.stream()\n    .map(Object::___)\n    .collect(Collectors.toList());\n```",
    "code": "List<String> list = items.stream()\n    .map(Object::___)\n    .collect(Collectors.toList());",
    "options": {
      "A": "toString",
      "B": "asString",
      "C": "getString",
      "D": "convertString"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method reference Object::toString memanggil method toString() pada setiap elemen objek stream.",
      "A": "Benar. Object::toString adalah method reference standar untuk memanggil toString().",
      "B": "Salah. asString bukan method kelas Object.",
      "C": "Salah. getString bukan method di kelas dasar Object.",
      "D": "Salah. convertString tidak tersedia di kelas Object."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-062",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "completion",
    "question": "Lengkapi anotasi Transactional dengan mode read-only untuk optimasi performa query:\n\n```java\n@Transactional(___ = true)\npublic List<UserDto> findAllUsers() {\n    return userRepo.findAll().stream().map(this::toDto).collect(Collectors.toList());\n}\n```",
    "code": "@Transactional(___ = true)\npublic List<UserDto> findAllUsers() {\n    return userRepo.findAll().stream().map(this::toDto).collect(Collectors.toList());\n}",
    "options": {
      "A": "readOnly",
      "B": "immutable",
      "C": "noWrite",
      "D": "queryOnly"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Transactional(readOnly = true) memberi sinyal ke Hibernate dan driver database bahwa transaksi tidak melakukan perubahan data, sehingga Hibernate menonaktifkan dirty checking dan menghemat alokasi memori.",
      "A": "Benar. readOnly = true mengoptimalkan performa transaksi query di JPA/Hibernate.",
      "B": "Salah. immutable bukan atribut @Transactional.",
      "C": "Salah. noWrite bukan parameter anotasi transaksi.",
      "D": "Salah. queryOnly bukan atribut yang valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-063",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "completion",
    "question": "Lengkapi relasi banyak-ke-banyak (Many-to-Many) pada Entity JPA:\n\n```java\n@Entity\npublic class Student {\n    @Id private Long id;\n    @___\n    @JoinTable(name = \"student_course\",\n        joinColumns = @JoinColumn(name = \"student_id\"),\n        inverseJoinColumns = @JoinColumn(name = \"course_id\"))\n    private Set<Course> courses;\n}\n```",
    "code": "@Entity\npublic class Student {\n    @Id private Long id;\n    @___\n    @JoinTable(name = \"student_course\",\n        joinColumns = @JoinColumn(name = \"student_id\"),\n        inverseJoinColumns = @JoinColumn(name = \"course_id\"))\n    private Set<Course> courses;\n}",
    "options": {
      "A": "@ManyToMany",
      "B": "@OneToMany",
      "C": "@ManyToOne",
      "D": "@MultipleMapping"
    },
    "answer": "A",
    "explanation": {
      "correct": "Relasi di mana banyak Student dapat mengambil banyak Course dimodelkan dengan anotasi @ManyToMany bersama anotasi @JoinTable untuk mendefinisikan tabel junction.",
      "A": "Benar. @ManyToMany digunakan untuk relasi banyak-ke-banyak antara Student dan Course.",
      "B": "Salah. @OneToMany untuk satu-ke-banyak.",
      "C": "Salah. @ManyToOne untuk banyak-ke-satu.",
      "D": "Salah. MultipleMapping bukan anotasi JPA."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-064",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Mana strategi paling efektif untuk menghindari N+1 Query Problem saat mengambil entitas bersarang di Spring Data JPA?\n\n```java\n// Pengambilan data Order beserta daftar OrderItem-nya\n```",
    "code": "// Pengambilan data Order beserta daftar OrderItem-nya",
    "options": {
      "A": "Mengubah relasi menjadi FetchType.EAGER di entity mapping",
      "B": "Menggunakan JOIN FETCH pada query JPQL atau @EntityGraph pada repository method",
      "C": "Menjalankan query loop manual di for-each",
      "D": "Menonaktifkan caching Hibernate"
    },
    "answer": "B",
    "explanation": {
      "correct": "Mengubah ke FetchType.EAGER secara global adalah anti-pattern yang dapat memperlambat seluruh aplikasi. Menggunakan JOIN FETCH atau @EntityGraph secara selektif pada query yang membutuhkannya adalah solusi terbaik dan paling efisien.",
      "A": "Salah. Global FetchType.EAGER berbahaya karena selalu memuat seluruh data anak bahkan saat tidak dibutuhkan.",
      "B": "Benar. @EntityGraph atau JOIN FETCH memuat relasi spesifik dalam satu SQL query saat dibutuhkan tanpa efek samping global.",
      "C": "Salah. Loop manual justru memicu N+1 query.",
      "D": "Salah. Caching tidak otomatis menyelesaikan N+1 problem pada query awal."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-065",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana cara terbaik mendesain REST API Response DTO yang konsisten dan informatif?\n\n```java\n// Format response API standar\n```",
    "code": "// Format response API standar",
    "options": {
      "A": "Mengembalikan String pesan saja: return \"Success\";",
      "B": "Menggunakan generic response wrapper class: ResponseEntity<ApiResponse<T>> yang memuat status, message, data, dan timestamp",
      "C": "Mengembalikan Map<String, Object> mentah tanpa tipe data",
      "D": "Mengembalikan HttpServletResponse dan menulis langsung dengan PrintWriter"
    },
    "answer": "B",
    "explanation": {
      "correct": "Generic wrapper DTO (ApiResponse<T>) menyediakan struktur JSON yang seragam di seluruh endpoint (misal: code, message, data, timestamp), mempermudah integrasi frontend/mobile client dan type-safety.",
      "A": "Salah. String sederhana tidak cukup informatif untuk aplikasi frontend modern.",
      "B": "Benar. Wrapper terstruktur dengan generic tipe data menjamin konsistensi kontrak API dan mempermudah konsumsi data.",
      "C": "Salah. Map<String, Object> menghilangkan type-safety dan dokumentasi Swagger/OpenAPI.",
      "D": "Salah. Menulis manual ke PrintWriter mengabaikan fitur konversi otomatis Spring MVC."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-066",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara terbaik membuat immutable data carrier class di Java modern (Java 16+)?\n\n```java\n// DTO untuk membawa data user (id, name, email)\n```",
    "code": "// DTO untuk membawa data user (id, name, email)",
    "options": {
      "A": "public class UserDto { public Long id; public String name; }",
      "B": "public record UserDto(Long id, String name, String email) {}",
      "C": "public class UserDto { private Long id; // tanpa constructor }",
      "D": "public abstract class UserDto {}"
    },
    "answer": "B",
    "explanation": {
      "correct": "Java Records menyediakan cara ringkas dan aman untuk mendefinisikan kelas immutable data carrier. Compiler otomatis membuatkan private final fields, constructor kanonikal, getter accessor, equals(), hashCode(), dan toString().",
      "A": "Salah. Kelas publik biasa dengan field mutable rawan dimodifikasi.",
      "B": "Benar. Java Record adalah fitur bawaan resmi untuk kelas pembawa data yang ringkas dan immutable.",
      "C": "Salah. Kelas tanpa constructor tidak dapat diinisialisasi dengan data.",
      "D": "Salah. Kelas abstract tidak bisa di-instansiasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-067",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana cara logging yang paling tepat dan efisien menggunakan SLF4J di kelas Service?\n\n```java\n// Logging aktivitas login user\n```",
    "code": "// Logging aktivitas login user",
    "options": {
      "A": "System.out.println(\"User login: \" + username);",
      "B": "log.info(\"User {} berhasil login pada IP {}\", username, ipAddress);",
      "C": "log.info(\"User \" + username + \" berhasil login pada IP \" + ipAddress);",
      "D": "log.error(\"User login\"); // gunakan error untuk semua log"
    },
    "answer": "B",
    "explanation": {
      "correct": "Menggunakan parameter placeholder '{}' menghindari biaya konkatenasi string di memori jika level log tersebut tidak aktif (misal log.debug saat level info), dan kodenya lebih bersih.",
      "A": "Salah. System.out.println tidak memiliki konfigurasi log level, formatting terpusat, atau asinkronus file appender.",
      "B": "Benar. SLF4J parameterized logging ({}) efisien memori dan menghindari alokasi string yang tidak perlu.",
      "C": "Salah. String concatenation (+) tetap mengevaluasi string meskipun log level dinonaktifkan.",
      "D": "Salah. Level ERROR hanya untuk exception atau kegagalan fatal."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-068",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana praktik terbaik penanganan transaksi yang melibatkan pemanggilan API pihak ketiga (eksternal)?\n\n```java\n// Proses checkout yang memanggil payment gateway eksternal dan menyimpan ke database\n```",
    "code": "// Proses checkout yang memanggil payment gateway eksternal dan menyimpan ke database",
    "options": {
      "A": "Membungkus seluruh method termasuk HTTP call payment gateway di dalam @Transactional",
      "B": "Memanggil API eksternal di luar batas @Transactional, lalu hanya membungkus operasi update database di dalam transaksi singkat",
      "C": "Tidak perlu menggunakan database transaksi sama sekali",
      "D": "Mengatur timeout database menjadi tak terhingga"
    },
    "answer": "B",
    "explanation": {
      "correct": "Koneksi database dari connection pool adalah resource berharga. Jika API eksternal lambat atau mengalami latency jaringan (misal 5 detik), koneksi database akan tertahan selama itu dan dapat menyebabkan connection pool exhaustion. Operasi I/O lambat harus di luar transaksi.",
      "A": "Salah. Menahan transaksi saat menunggu HTTP call eksternal dapat menguras database connection pool (pool exhaustion).",
      "B": "Benar. Transaksi database harus dijaga seringkas mungkin; panggil API eksternal di luar blok transaksi.",
      "C": "Salah. Transaksi tetap diperlukan untuk konsistensi data database internal.",
      "D": "Salah. Menghapus timeout justru membuat server rentan hang/deadlock."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-069",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Mana cara terbaik mengelola migrasi skema database di lingkungan produksi Spring Boot?\n\n```java\n// Pengelolaan evolusi tabel database\n```",
    "code": "// Pengelolaan evolusi tabel database",
    "options": {
      "A": "Menggunakan spring.jpa.hibernate.ddl-auto=update di production",
      "B": "Menggunakan tool migration versioning seperti Flyway atau Liquibase dengan script SQL terkelola",
      "C": "Menjalankan script SQL manual langsung di database production tanpa version control",
      "D": "Menggunakan ddl-auto=create-drop"
    },
    "answer": "B",
    "explanation": {
      "correct": "Hibernate ddl-auto=update tidak aman untuk production karena dapat mengunci tabel, tidak dapat rollback, dan tidak mendukung migrasi data kompleks. Flyway/Liquibase mencatat riwayat skema di tabel versioning secara deterministik.",
      "A": "Salah. ddl-auto=update tidak dapat diandalkan dan berisiko merusak data production.",
      "B": "Benar. Flyway atau Liquibase adalah standar industri untuk migrasi skema database yang aman dan reproducible.",
      "C": "Salah. Eksekusi manual rawan human error dan tidak terlacak di version control.",
      "D": "Salah. create-drop akan menghapus seluruh database setiap kali aplikasi shutdown."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-070",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana praktik terbaik dalam mendefinisikan Custom Exception di aplikasi Java Spring Boot?\n\n```java\n// Exception saat resource tidak ditemukan\n```",
    "code": "// Exception saat resource tidak ditemukan",
    "options": {
      "A": "public class ResourceNotFoundException extends Exception {}",
      "B": "public class ResourceNotFoundException extends RuntimeException {\n    public ResourceNotFoundException(String message) { super(message); }\n}",
      "C": "public class ResourceNotFoundException extends Throwable {}",
      "D": "public class ResourceNotFoundException extends Error {}"
    },
    "answer": "B",
    "explanation": {
      "correct": "Custom Exception untuk logika bisnis sebaiknya meng-extend RuntimeException (Unchecked Exception) agar tidak mengotori signature method dengan deklarasi throws, serta otomatis didukung oleh mekanisme rollback transaksi Spring.",
      "A": "Salah. Meng-extend Exception (Checked) mewajibkan klausa throws di setiap interface dan method.",
      "B": "Benar. Meng-extend RuntimeException adalah best practice untuk exception aplikasi modern di Spring Boot.",
      "C": "Salah. Meng-extend Throwable secara langsung tidak disarankan di Java.",
      "D": "Salah. Error dicadangkan untuk kondisi fatal JVM (seperti OutOfMemoryError)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-071",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana cara paling aman menangani password pengguna sebelum disimpan ke database?\n\n```java\n// Menyimpan password user pendaftaran\n```",
    "code": "// Menyimpan password user pendaftaran",
    "options": {
      "A": "Menyimpan password dalam bentuk plaintext agar mudah di-recover",
      "B": "Melakukan hashing menggunakan BCryptPasswordEncoder (dengan salt otomatis)",
      "C": "Melakukan enkripsi reversible dua arah dengan base64",
      "D": "Menggunakan MD5 tanpa salt"
    },
    "answer": "B",
    "explanation": {
      "correct": "BCrypt (disediakan oleh Spring Security BCryptPasswordEncoder) adalah fungsi hash satu arah yang lambat secara adaptif dan otomatis menyertakan salt acak untuk mencegah serangan rainbow table dan brute force.",
      "A": "Salah. Plaintext adalah pelanggaran keamanan fatal.",
      "B": "Benar. BCryptPasswordEncoder adalah standar keamanan industri untuk hashing password.",
      "C": "Salah. Base64 adalah encoding, bukan hashing atau enkripsi, dan sangat mudah didecode kembali.",
      "D": "Salah. MD5 sudah usang, cepat di-crack, dan rawan collision."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-072",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana cara yang paling direkomendasikan untuk melakukan validasi input pada REST Controller?\n\n```java\n// Validasi payload registrasi user\n```",
    "code": "// Validasi payload registrasi user",
    "options": {
      "A": "Menulis if-else manual di dalam method controller untuk setiap field",
      "B": "Menggunakan anotasi Bean Validation (JSR-380 seperti @NotBlank, @Email, @Size) pada DTO dan @Valid pada controller",
      "C": "Memvalidasi data di layer frontend saja dan mempercayai semua input yang masuk ke backend",
      "D": "Menyerahkan validasi ke database error constraint saja"
    },
    "answer": "B",
    "explanation": {
      "correct": "Declarative validation dengan Bean Validation (@Valid + anotasi constraint) memisahkan logika validasi dari alur bisnis, otomatis mengembalikan 400 Bad Request jika tidak valid, dan terdokumentasi otomatis di OpenAPI.",
      "A": "Salah. Pengecekan manual if-else menyebabkan boilerplate code dan duplikasi di controller.",
      "B": "Benar. Bean Validation deklaratif adalah best practice resmi standar industri.",
      "C": "Salah. Jangan pernah mempercayai input client; validasi backend mutlak diperlukan.",
      "D": "Salah. Menunggu database error menghasilkan exception 500 yang tidak ramah pengguna."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-073",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana pola pemisahan arsitektur layer yang paling sesuai untuk aplikasi enterprise Spring Boot?\n\n```java\n// Arsitektur layer\n```",
    "code": "// Arsitektur layer",
    "options": {
      "A": "Controller langsung mengakses database via EntityManager tanpa Service",
      "B": "Controller (HTTP) -> Service Layer (Logika Bisnis & Transaksi) -> Repository Layer (Akses Data)",
      "C": "Repository memanggil Controller untuk memformat data",
      "D": "Semua logika bisnis ditulis langsung di dalam Entity class"
    },
    "answer": "B",
    "explanation": {
      "correct": "Arsitektur 3-tier (Controller -> Service -> Repository) memisahkan tanggung jawab: Controller menangani protokol HTTP, Service mengelola alur bisnis dan transaksi, dan Repository mengisolasi query database.",
      "A": "Salah. Melewati layer service membuat logika bisnis bercampur dengan protokol web HTTP.",
      "B": "Benar. Pola 3-tier Controller -> Service -> Repository adalah standar arsitektur Spring enterprise.",
      "C": "Salah. Repository tidak boleh memiliki dependensi ke controller.",
      "D": "Salah. Entity adalah domain model/persistensi, bukan tempat logika alur transaksi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-074",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara terbaik membuat ThreadPool di aplikasi Java backend daripada membuat 'new Thread()' manual?\n\n```java\n// Menjalankan tugas pemrosesan paralel\n```",
    "code": "// Menjalankan tugas pemrosesan paralel",
    "options": {
      "A": "Selalu membuat new Thread(task).start() setiap ada request",
      "B": "Menggunakan ExecutorService atau ThreadPoolTaskExecutor terkelola dengan batas ukuran pool yang jelas",
      "C": "Membuat thread tak terhingga di while loop",
      "D": "Menjalankan semua proses di thread utama"
    },
    "answer": "B",
    "explanation": {
      "correct": "Membuat thread baru di Java membutuhkan alokasi stack memori sistem operasi (~1MB per thread). Jika request melonjak, 'new Thread()' akan menghabiskan memori dan memicu OutOfMemoryError. Thread pool menggunakan kembali thread yang ada secara terkelola.",
      "A": "Salah. Membuat thread manual tidak terkontrol dan dapat menghabiskan memori server.",
      "B": "Benar. Thread pool mengontrol jumlah thread yang berjalan bersamaan dan menghemat biaya pembuatan thread.",
      "C": "Salah. Loop pembuatan thread tanpa batas pasti memicu OOM.",
      "D": "Salah. Menjalankan semua proses di main thread memblokir request lain."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-075",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Mana cara terbaik untuk menghapus entitas anak saat dihapus dari koleksi entitas induk di JPA?\n\n```java\n// Menghapus OrderItem dari Order\n```",
    "code": "// Menghapus OrderItem dari Order",
    "options": {
      "A": "Mengaktifkan orphanRemoval = true pada anotasi @OneToMany",
      "B": "Menghapus manual lewat native query 'DELETE FROM order_items'",
      "C": "Mengosongkan semua foreign key menjadi null",
      "D": "Membuat tabel baru setiap ada penghapusan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dengan orphanRemoval = true, menghapus elemen dari koleksi Java (orders.getItems().remove(item)) otomatis diterjemahkan oleh Hibernate menjadi perintah SQL DELETE untuk entitas anak tersebut.",
      "A": "Benar. orphanRemoval = true secara otomatis menjaga sinkronisasi koleksi memori dengan database.",
      "B": "Salah. Native query manual melewati persistence context Hibernate dan dapat menyebabkan inkonsistensi cache.",
      "C": "Salah. Foreign key bernilai null menciptakan baris yatim (orphan record) yang tidak terhubung.",
      "D": "Salah. Solusi ini tidak rasional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-076",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana praktik terbaik dalam mengonfigurasi DataSource Connection Pool (HikariCP) di Spring Boot?\n\n```java\n// Konfigurasi application.properties\n```",
    "code": "// Konfigurasi application.properties",
    "options": {
      "A": "Menyetel maximum-pool-size ke 10.000 agar muat banyak",
      "B": "Menyesuaikan maximum-pool-size dengan rumus (CPU core * 2) + disk IO thread, biasanya 10-30 untuk beban normal",
      "C": "Menyetel connection-timeout ke 0 (menunggu selamanya)",
      "D": "Tidak memakai connection pool sama sekali"
    },
    "answer": "B",
    "explanation": {
      "correct": "Koneksi database yang terlalu banyak justru menurunkan performa database karena context-switching overhead dan disk contention. HikariCP merekomendasikan pool size yang terukur (biasanya 10-30 koneksi) dengan connection timeout yang wajar.",
      "A": "Salah. Pool terlalu besar membebani CPU database dan memperlambat throughput secara keseluruhan.",
      "B": "Benar. Pool size terukur mencegah oversubscription CPU database dan mengoptimalkan throughput.",
      "C": "Salah. Timeout 0 dapat menyebabkan request thread menggantung tanpa batas jika DB sibuk.",
      "D": "Salah. Tanpa pool, overhead handshake koneksi TCP database sangat lambat."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-077",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana cara terbaik untuk menangani pagination data dalam jumlah sangat besar (ribuan halaman) di REST API?\n\n```java\n// Endpoint daftar transaksi\n```",
    "code": "// Endpoint daftar transaksi",
    "options": {
      "A": "Mengembalikan semua 1 juta data sekaligus dalam satu array JSON",
      "B": "Membatasi ukuran halaman maksimum (misal max 100) dan menggunakan cursor/keyset pagination untuk dataset sangat besar",
      "C": "Meminta client menghitung pagination sendiri",
      "D": "Menghapus data lama secara otomatis"
    },
    "answer": "B",
    "explanation": {
      "correct": "Offset pagination (OFFSET 100000) lambat pada dataset besar karena database harus memindai semua baris sebelumnya. Keyset pagination (WHERE id > last_id LIMIT 20) memanfaatkan B-Tree index dan berkecepatan konstan O(1).",
      "A": "Salah. Mengembalikan 1 juta data akan memicu OutOfMemoryError di server dan browser.",
      "B": "Benar. Keyset pagination dan pembatasan page size menjamin performa database tetap cepat dan stabil.",
      "C": "Salah. Client tidak bisa membagi data jika server belum mempaginasinya.",
      "D": "Salah. Menghapus data tanpa aturan bisnis tidak diperbolehkan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-078",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "best-practice",
    "question": "Mana cara terbaik melakukan pengecekan null yang aman dan ekspresif pada Stream pipeline?\n\n```java\n// Memproses list data yang mungkin berisi elemen null\n```",
    "code": "// Memproses list data yang mungkin berisi elemen null",
    "options": {
      "A": "list.stream().filter(Objects::nonNull).map(...)",
      "B": "list.stream().map(x -> { try { return x.toString(); } catch(Exception e) { return null; } })",
      "C": "Membiarkan NullPointerException terjadi",
      "D": "Menggunakan loop while manual"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method reference 'Objects::nonNull' adalah predikat bawaan Java yang bersih, efisien, dan ekspresif untuk membuang elemen null dari stream sebelum operasi selanjutnya.",
      "A": "Benar. filter(Objects::nonNull) adalah idiom standar Java Stream untuk membersihkan elemen null.",
      "B": "Salah. Menggunakan try-catch di dalam lambda stream berbiaya performa tinggi dan buruk secara desain.",
      "C": "Salah. NullPointerException harus dicegah.",
      "D": "Salah. Stream filter lebih deklaratif dan fungsional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-079",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana cara terbaik mendokumentasikan REST API secara otomatis di Spring Boot?\n\n```java\n// Pembuatan dokumentasi endpoint dan skema DTO\n```",
    "code": "// Pembuatan dokumentasi endpoint dan skema DTO",
    "options": {
      "A": "Menulis dokumen PDF manual setiap ada perubahan kode",
      "B": "Mengintegrasikan springdoc-openapi untuk menghasilkan Swagger UI dan OpenAPI 3 spec secara otomatis dari anotasi kode",
      "C": "Menyuruh client menebak struktur request body",
      "D": "Menyimpan file text di server"
    },
    "answer": "B",
    "explanation": {
      "correct": "Springdoc-openapi menganalisis controller, anotasi JSR-380, dan tipe kembalian untuk menghasilkan dokumentasi interaktif Swagger UI (/swagger-ui.html) yang selalu sinkron dengan kode.",
      "A": "Salah. Dokumentasi manual cepat usang dan memakan waktu.",
      "B": "Benar. springdoc-openapi menghasilkan OpenAPI spec dan UI interaktif langsung dari kode sumber.",
      "C": "Salah. Menghambat integrasi tim.",
      "D": "Salah. File teks statis tidak interaktif dan sulit dipelihara."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-080",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "best-practice",
    "question": "Mana praktik terbaik dalam mendesain query pencarian dinamis (filter banyak kolom opsional) di Spring Data JPA?\n\n```java\n// Filter produk berdasarkan nama, kategori, harga min, harga max yang semuanya opsional\n```",
    "code": "// Filter produk berdasarkan nama, kategori, harga min, harga max yang semuanya opsional",
    "options": {
      "A": "Membuat puluhan method di repository untuk setiap kombinasi filter",
      "B": "Menggunakan JPA Specification (Criteria API) dengan JpaSpecificationExecutor",
      "C": "Menyambung string SQL query mentah dengan konkatenasi string '+'",
      "D": "Mengambil seluruh isi tabel ke memori lalu filter manual di Java for loop"
    },
    "answer": "B",
    "explanation": {
      "correct": "JPA Specification memungkinkan komposisi predikat query secara modular dan type-safe (Specification.where(byName).and(byPrice)), menghindari SQL injection dan ledakan jumlah method repository.",
      "A": "Salah. Menghasilkan kombinasi method eksponensial (combinatorial explosion).",
      "B": "Benar. JPA Specification adalah solusi standar Spring Data untuk query pencarian dengan multi-kriteria dinamis.",
      "C": "Salah. Konkatenasi string SQL mentah sangat rentan serangan SQL Injection.",
      "D": "Salah. Memuat seluruh tabel ke memori menyebabkan pemborosan RAM dan lambat."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-081",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "best-practice",
    "question": "Mana cara terbaik mengamankan endpoint REST API menggunakan stateless authentication di arsitektur microservice?\n\n```java\n// Autentikasi API untuk mobile & web client\n```",
    "code": "// Autentikasi API untuk mobile & web client",
    "options": {
      "A": "Menyimpan session di memori server Tomcat tunggal (Stateful Session)",
      "B": "Menggunakan JSON Web Token (JWT) dengan signature verifikasi pada filter Spring Security",
      "C": "Mengirimkan password username mentah di setiap HTTP Header request",
      "D": "Membuka seluruh endpoint tanpa proteksi keamanan"
    },
    "answer": "B",
    "explanation": {
      "correct": "JWT bersifat stateless dan self-contained: server tidak perlu menyimpan session di database/memory pada setiap request, sehingga sangat scalable untuk arsitektur multi-instance atau microservice.",
      "A": "Salah. Stateful session menyulitkan horizontal scaling tanpa sticky session atau Redis session replication.",
      "B": "Benar. JWT stateless adalah standar industri autentikasi API modern yang scalable.",
      "C": "Salah. Mengirim password di setiap request sangat berisiko keamanan tinggi.",
      "D": "Salah. Tidak aman sama sekali."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-082",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Pada mekanisme Exception Handling, apa yang dimaksud dengan 'Suppressed Exceptions' di try-with-resources?",
    "options": {
      "A": "Exception sekunder yang terjadi saat penutupan otomatis resource (close()), yang disematkan ke exception primer blok try melalui method addSuppressed()",
      "B": "Exception yang sengaja diabaikan oleh compiler tanpa logging",
      "C": "Exception yang diubah menjadi peringatan compiler (warning)",
      "D": "Exception yang hanya terjadi pada level OS kernel"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika terjadi exception di dalam blok try dan terjadi lagi exception saat method close() dari resource dipanggil, exception dari close() tidak akan menimpa exception utama melainkan ditandai sebagai 'suppressed' dan dapat diakses melalui e.getSuppressed().",
      "A": "Opsi A benar karena menjelaskan preservasi jejak exception sekunder oleh try-with-resources.",
      "B": "Opsi B salah karena suppressed exception tidak diabaikan melainkan dicatat.",
      "C": "Opsi C salah karena suppressed exception tetap berwujud objek Throwable.",
      "D": "Opsi D salah karena berada di level runtime JVM."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-083",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Manakah pernyataan yang benar mengenai interface java.lang.AutoCloseable?",
    "options": {
      "A": "Hanya memiliki satu method: 'void close() throws Exception' dan merupakan prasyarat tipe objek yang dapat digunakan di blok try-with-resources",
      "B": "Harus diimplementasikan bersamaan dengan Serializable",
      "C": "Hanya boleh digunakan untuk manipulasi file fisik di hard drive",
      "D": "Otomatis mematikan thread saat method close dipanggil"
    },
    "answer": "A",
    "explanation": {
      "correct": "AutoCloseable adalah interface dasar untuk semua resource yang harus ditutup saat tidak lagi digunakan, dan didesain khusus untuk mendukung sintaks try-with-resources Java 7+.",
      "A": "Opsi A benar karena merupakan kontrak interface resmi AutoCloseable.",
      "B": "Opsi B salah karena Serializable dan AutoCloseable independen.",
      "C": "Opsi C salah karena dapat digunakan untuk socket jaringan, koneksi database, dan resource memori lainnya.",
      "D": "Opsi D salah karena tidak bertugas mematikan thread."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-084",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Dalam operasi Stream API, apa perbedaan antara 'findFirst()' dan 'findAny()'?",
    "options": {
      "A": "'findFirst()' selalu mengembalikan elemen pertama sesuai urutan encounter order, sedangkan 'findAny()' bebas mengembalikan elemen apa saja yang ditemukan lebih dulu terutama pada parallel stream untuk performa maksimal",
      "B": "'findFirst()' hanya bekerja pada Set, sedangkan 'findAny()' pada List",
      "C": "'findAny()' mengembalikan koleksi List, sedangkan 'findFirst()' mengembalikan Optional",
      "D": "Keduanya persis sama dalam segala kondisi baik serial maupun paralel"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada stream serial keduanya sering menghasilkan elemen yang sama, tetapi pada parallel stream 'findAny()' jauh lebih cepat karena thread yang pertama kali menemukan elemen yang cocok dapat langsung mengembalikannya tanpa harus menunggu thread yang memproses elemen awal.",
      "A": "Opsi A benar karena membedakan determinisme urutan vs optimasi paralelisme non-deterministik.",
      "B": "Opsi B salah karena keduanya bekerja pada sembarang Stream.",
      "C": "Opsi C salah karena keduanya mengembalikan tipe Optional<T>.",
      "D": "Opsi D salah karena perilakunya berbeda signifikan pada parallel stream."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-085",
    "level": "intermediate",
    "topic": "Java Core",
    "questionType": "concept",
    "question": "Bagaimanakah cara mencegah terjadinya Deadlock dalam aplikasi multi-threaded di Java?",
    "options": {
      "A": "Memastikan semua thread selalu mengakuisisi multiple lock dengan urutan hierarki yang sama persis (lock ordering konsisten) atau menggunakan tryLock() dengan timeout",
      "B": "Menghapus semua blok synchronized dari seluruh kode aplikasi",
      "C": "Menambah jumlah core CPU di server",
      "D": "Membuat semua method menjadi static"
    },
    "answer": "A",
    "explanation": {
      "correct": "Deadlock terjadi ketika terjadi siklus ketergantungan saling tunggu antar lock (Circular Wait). Cara pencegahan paling fundamental adalah memaksakan urutan penguncian yang konsisten secara global atau menggunakan timeout saat meminta lock.",
      "A": "Opsi A benar karena memutus kondisi Circular Wait dari kriteria Coffman deadlock.",
      "B": "Opsi B salah karena menghapus sinkronisasi akan menyebabkan race condition fatal dan korupsi data.",
      "C": "Opsi C salah karena menambah core CPU tidak mencegah deadlock logika perangkat lunak.",
      "D": "Opsi D salah karena method static tetap memiliki class monitor lock yang bisa menyebabkan deadlock jika saling memanggil."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-086",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Bagaimanakah urutan siklus hidup (Bean Lifecycle) dari sebuah Spring Bean mulai dari pembuatannya hingga penghancuran?",
    "options": {
      "A": "Instansiasi -> Dependency Injection (Populate Properties) -> BeanNameAware/BeanFactoryAware -> BeanPostProcessor BeforeInitialization -> @PostConstruct / InitializingBean -> BeanPostProcessor AfterInitialization -> Siap Digunakan -> @PreDestroy / DisposableBean",
      "B": "Inisialisasi -> Garbage Collection -> Instansiasi -> Siap Digunakan",
      "C": "@PostConstruct -> Instansiasi -> Dependency Injection -> @PreDestroy",
      "D": "Kompilasi bytecode -> Dependency Injection -> Run method -> Hancur"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring IoC container melakukan tahapan lifecycle ketat: instansiasi objek, injeksi dependensi, pemanggilan aware interfaces, pemrosesan BeanPostProcessor (before), pemanggilan method init (@PostConstruct atau afterPropertiesSet), pemrosesan BeanPostProcessor (after), fase ready, hingga pembersihan saat shutdown (@PreDestroy atau destroy).",
      "A": "Opsi A benar karena merefleksikan tahapan formal Spring Framework Bean Lifecycle.",
      "B": "Opsi B salah karena garbage collection terjadi setelah bean dihancurkan.",
      "C": "Opsi C salah karena @PostConstruct hanya bisa dipanggil setelah instansiasi dan populasi dependensi selesai.",
      "D": "Opsi D salah karena kompilasi bytecode terjadi sebelum aplikasi Spring dijalankan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-087",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara BeanPostProcessor dan BeanFactoryPostProcessor di Spring Framework?",
    "options": {
      "A": "BeanFactoryPostProcessor dapat memodifikasi definisi bean (metadata) sebelum bean diinstansiasi, sedangkan BeanPostProcessor memodifikasi instance objek bean yang sudah dibuat",
      "B": "BeanPostProcessor hanya untuk controller, sedangkan BeanFactoryPostProcessor untuk database",
      "C": "BeanFactoryPostProcessor berjalan setelah semua bean selesai dibuat",
      "D": "Keduanya identik dan hanya perbedaan nama interface"
    },
    "answer": "A",
    "explanation": {
      "correct": "BeanFactoryPostProcessor (contoh: PropertySourcesPlaceholderConfigurer) beroperasi pada tingkat konfigurasi metadata BeanDefinition sebelum instance objek ada. BeanPostProcessor mencegat instance objek bean sebelum dan sesudah tahap inisialisasi.",
      "A": "Opsi A benar karena membedakan manipulasi metadata vs manipulasi instance objek.",
      "B": "Opsi B salah karena keduanya berlaku global di ApplicationContext.",
      "C": "Opsi C salah karena BeanFactoryPostProcessor dieksekusi di fase paling awal sebelum bean dibuat.",
      "D": "Opsi D salah karena kontrak method dan waktu eksekusinya berbeda."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-088",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Bagaimana Spring Boot menangani circular dependency (ketergantungan melingkar) secara default pada versi Spring Boot 2.6+?",
    "options": {
      "A": "Secara default melempar BeanCurrentlyInCreationException dan gagal startup untuk mendorong developer mendesain ulang arsitektur kelas",
      "B": "Secara otomatis memecah circular dependency dengan membuat mock object",
      "C": "Mengabaikan salah satu bean secara acak",
      "D": "Membuat aplikasi berjalan lambat tanpa memberikan error"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mulai Spring Boot 2.6, circular dependencies dilarang secara default (spring.main.allow-circular-references=false) untuk mencegah code smell dan masalah inisialisasi yang tidak deterministik.",
      "A": "Opsi A benar karena Spring Boot memblokir ketergantungan melingkar saat startup.",
      "B": "Opsi B salah karena Spring tidak membuat mock di runtime produksi.",
      "C": "Opsi C salah karena Spring tidak membuang bean sembarangan.",
      "D": "Opsi D salah karena startup akan langsung gagal dengan exception yang jelas."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-089",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk memetakan sekelompok hierarki konfigurasi di application.yml ke sebuah kelas Java bertipe kuat (type-safe configuration)?",
    "options": {
      "A": "@ConfigurationProperties",
      "B": "@ValueProperties",
      "C": "@PropertySourceGroup",
      "D": "@YamlMapping"
    },
    "answer": "A",
    "explanation": {
      "correct": "@ConfigurationProperties(prefix = \"app.feature\") memungkinkan pemetaan terstruktur dari file konfigurasi ke field-field POJO dengan validasi JSR-380 dan auto-complete di IDE.",
      "A": "Opsi A benar karena @ConfigurationProperties adalah cara terstandar type-safe binding di Spring Boot.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena @PropertySource untuk mendeklarasikan lokasi file eksternal, bukan binding hirarkis.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-090",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi kondisional manakah yang memastikan bahwa sebuah Spring Bean hanya dibuat jika terdapat bean lain bertipe tertentu yang sudah terdaftar di konteks?",
    "options": {
      "A": "@ConditionalOnBean",
      "B": "@ConditionalOnMissingBean",
      "C": "@ConditionalOnProperty",
      "D": "@ConditionalOnClass"
    },
    "answer": "A",
    "explanation": {
      "correct": "@ConditionalOnBean(DataSource.class) mengevaluasi apakah bean dengan tipe DataSource sudah ada di ApplicationContext; jika ada, bean baru tersebut baru akan dibuat.",
      "A": "Opsi A benar karena memeriksa keberadaan bean tertentu.",
      "B": "Opsi B salah karena @ConditionalOnMissingBean justru aktif jika bean tersebut BELUM ada (sering dipakai untuk default fallback).",
      "C": "Opsi C salah karena @ConditionalOnProperty memeriksa nilai konfigurasi properti.",
      "D": "Opsi D salah karena @ConditionalOnClass memeriksa keberadaan class file di classpath."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-091",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Bagaimanakah cara mengaktifkan profil 'production' saat menjalankan file jar Spring Boot melalui terminal command line?",
    "options": {
      "A": "java -jar app.jar --spring.profiles.active=production",
      "B": "java -jar app.jar -profile production",
      "C": "java -jar app.jar --set-env=production",
      "D": "java -run-profile=production app.jar"
    },
    "answer": "A",
    "explanation": {
      "correct": "Argumen command line '--spring.profiles.active=production' atau environment variable 'SPRING_PROFILES_ACTIVE=production' adalah cara standar mengaktifkan profil saat menjalankan jar Spring Boot.",
      "A": "Opsi A benar karena menggunakan argumen standar command-line Spring Boot.",
      "B": "Opsi B salah karena bukan sintaks parameter Spring Boot.",
      "C": "Opsi C salah karena bukan sintaks Spring Boot.",
      "D": "Opsi D salah karena sintaks java launcher tidak valid."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-092",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari file 'META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports' pada custom Spring Boot Starter (Spring Boot 3+)?",
    "options": {
      "A": "Mendaftarkan daftar kelas auto-configuration kustom yang harus dimuat oleh mekanisme Spring Boot AutoConfiguration",
      "B": "Menentukan port default server tomcat",
      "C": "Mengimpor skema database SQL saat booting",
      "D": "Menyimpan kredensial token rahasia"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada Spring Boot 2.7 dan 3+, file AutoConfiguration.imports menggantikan fungsi spring.factories untuk mendaftarkan kelas-kelas @AutoConfiguration secara lebih efisien.",
      "A": "Opsi A benar karena merupakan lokasi pendaftaran konfigurasi otomatis modular di Spring Boot 3.",
      "B": "Opsi B salah karena port server ditentukan di properties/yml.",
      "C": "Opsi C salah karena skema database menggunakan Flyway, Liquibase, atau schema.sql.",
      "D": "Opsi D salah karena file impor bukan penyimpan kredensial rahasia."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-093",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk mengaktifkan pemrosesan tugas asynchronous menggunakan method @Async di Spring Boot?",
    "options": {
      "A": "@EnableAsync",
      "B": "@EnableScheduling",
      "C": "@EnableAutoConfiguration",
      "D": "@EnableBatchProcessing"
    },
    "answer": "A",
    "explanation": {
      "correct": "@EnableAsync (diletakkan pada kelas konfigurasi) mengaktifkan kapabilitas proxy Spring untuk mengeksekusi method-method yang beranotasi @Async di thread pool terpisah.",
      "A": "Opsi A benar karena mengaktifkan asynchronous method execution.",
      "B": "Opsi B salah karena @EnableScheduling untuk tugas terjadwal (@Scheduled).",
      "C": "Opsi C salah karena @EnableAutoConfiguration untuk konfigurasi otomatis starter.",
      "D": "Opsi D salah karena untuk Spring Batch."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-094",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa yang terjadi jika sebuah method beranotasi @Async dipanggil secara langsung dari dalam kelas yang sama (internal self-invocation)?",
    "options": {
      "A": "Method akan dieksekusi secara sinkron (synchronous) di thread yang sama karena panggilan internal melewati (bypass) proxy Spring",
      "B": "Aplikasi akan melempar AsyncExecutionException",
      "C": "Method tetap berjalan secara asynchronous di thread baru",
      "D": "JVM akan mengalami deadlock"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fitur AOP Spring (termasuk @Async, @Transactional, @Cacheable) bergantung pada dynamic proxy. Pemanggilan method dari dalam kelas yang sama (this.method()) memanggil objek target secara langsung tanpa melalui proxy, sehingga interceptor async tidak terpanggil.",
      "A": "Opsi A benar karena menjelaskan keterbatasan self-invocation pada arsitektur proxy Spring.",
      "B": "Opsi B salah karena tidak ada exception yang dilempar; kode hanya berjalan secara sinkron biasa.",
      "C": "Opsi C salah karena proxy ter-bypass sehingga tidak dieksekusi di thread pool.",
      "D": "Opsi D salah karena eksekusi sinkron tidak memicu deadlock."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-095",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa peran utama dari DispatcherServlet di dalam arsitektur Spring MVC / Spring Boot Web?",
    "options": {
      "A": "Bertindak sebagai Front Controller yang menerima semua HTTP request yang masuk dan mendelegasikannya ke HandlerMapping, Controller, dan ViewResolver yang sesuai",
      "B": "Mengatur koneksi database pool HikariCP",
      "C": "Menghubungkan aplikasi ke broker Kafka secara langsung",
      "D": "Mengenkripsi file konfigurasi di memori"
    },
    "answer": "A",
    "explanation": {
      "correct": "DispatcherServlet adalah implementasi pola Front Controller di Spring MVC, menjadi pintu masuk utama semua request HTTP untuk diteruskan ke handler method dan controller yang tepat.",
      "A": "Opsi A benar karena mendeskripsikan peran inti DispatcherServlet.",
      "B": "Opsi B salah karena koneksi pool database dikelola oleh DataSource.",
      "C": "Opsi C salah karena koneksi Kafka dikelola oleh KafkaListenerContainerFactory.",
      "D": "Opsi D salah karena DispatcherServlet tidak menangani enkripsi konfigurasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-096",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk mengaktifkan validasi otomatis objek DTO berdasarkan batasan anotasi Bean Validation (seperti @NotNull, @Size, @Email) pada parameter method controller?",
    "options": {
      "A": "@Valid atau @Validated",
      "B": "@CheckInput",
      "C": "@Sanitize",
      "D": "@AssertCorrect"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Valid (standar Jakarta EE) atau @Validated (spesifik Spring) memicu validator Hibernate Validator untuk memeriksa field DTO dan melempar MethodArgumentNotValidException jika terdapat pelanggaran validasi.",
      "A": "Opsi A benar karena memicu evaluasi validator JSR-380.",
      "B": "Opsi B salah karena bukan anotasi validasi standar.",
      "C": "Opsi C salah karena bukan anotasi validasi standar.",
      "D": "Opsi D salah karena bukan anotasi validasi standar."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-097",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa perbedaan utama dalam penggunaan scope 'prototype' dibandingkan 'singleton' pada Spring Bean?",
    "options": {
      "A": "Scope 'prototype' menghasilkan instance objek baru setiap kali diminta dari container, dan Spring tidak mengelola pembersihan akhir (destruction lifecycle) dari bean prototype tersebut",
      "B": "Scope 'prototype' hanya ada satu per JVM",
      "C": "Scope 'prototype' otomatis membuat koneksi database baru",
      "D": "Scope 'prototype' tidak mendukung dependency injection"
    },
    "answer": "A",
    "explanation": {
      "correct": "Bean prototype dibuat baru pada setiap injeksi atau getBean(). Yang terpenting: Spring container menginisialisasi bean prototype tetapi TIDAK mengelola siklus penghancurannya (@PreDestroy tidak otomatis dipanggil), sehingga klien bertanggung jawab membersihkan resource-nya.",
      "A": "Opsi A benar karena menjelaskan sifat instansiasi dan pelepasan tanggung jawab destruksi oleh container.",
      "B": "Opsi B salah karena itu definisi singleton.",
      "C": "Opsi C salah karena tipe bean prototype tidak harus berkaitan dengan database.",
      "D": "Opsi D salah karena dependensi tetap diinjeksi normal saat pembuatan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-098",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Di Spring Boot, bagaimanakah cara mengkonfigurasi CORS (Cross-Origin Resource Sharing) secara global untuk seluruh controller API?",
    "options": {
      "A": "Mengimplementasikan interface WebMvcConfigurer dan meng-override method addCorsMappings(CorsRegistry registry)",
      "B": "Menulis tag <cors> di file pom.xml",
      "C": "Menambahkan header manual di setiap baris query SQL",
      "D": "Mengubah izin firewall di sistem operasi Linux"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mendefinisikan @Configuration bean yang mengimplementasikan WebMvcConfigurer dan meng-override addCorsMappings() adalah cara standar mengatur kebijakan origin, method, dan header yang diizinkan secara global di Spring MVC.",
      "A": "Opsi A benar karena merupakan mekanisme resmi deklarasi CORS global di Spring Boot.",
      "B": "Opsi B salah karena pom.xml adalah build tool Maven.",
      "C": "Opsi C salah karena CORS adalah protokol web HTTP browser, bukan database.",
      "D": "Opsi D salah karena firewall OS tidak mengelola HTTP header CORS browser."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-099",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menjadwalkan eksekusi berkala suatu method di Spring Boot menggunakan ekspresi cron?",
    "options": {
      "A": "@Scheduled(cron = \"...\")",
      "B": "@CronJob(\"...\")",
      "C": "@PeriodicExecution(\"...\")",
      "D": "@TimerTask(\"...\")"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Scheduled dengan atribut cron (misal: @Scheduled(cron = \"0 0 * * * ?\")) digunakan untuk menjalankan tugas latar belakang sesuai jadwal waktu yang ditentukan.",
      "A": "Opsi A benar karena @Scheduled adalah anotasi penjadwalan resmi Spring.",
      "B": "Opsi B salah karena bukan anotasi bawaan Spring.",
      "C": "Opsi C salah karena bukan anotasi Spring.",
      "D": "Opsi D salah karena TimerTask adalah kelas bawaan java.util lama."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-100",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @Primary pada sebuah deklarasi bean di Spring?",
    "options": {
      "A": "Memberikan preferensi prioritas utama pada bean tersebut saat ada beberapa kandidat bean bertipe sama yang diinjeksi tanpa @Qualifier spesifik",
      "B": "Menjadikan bean sebagai satu-satunya bean yang boleh diinstansiasi di aplikasi",
      "C": "Mengunci database table sebagai primary key",
      "D": "Menjadikan method di dalamnya dieksekusi sebelum method main()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ketika beberapa bean dengan tipe yang sama memenuhi syarat untuk diinjeksi, @Primary menandai salah satu bean sebagai pilihan default utama untuk menghindari NoUniqueBeanDefinitionException.",
      "A": "Opsi A benar karena @Primary menetapkan prioritas default pada multi-bean candidates.",
      "B": "Opsi B salah karena bean kandidat lain tetap dapat dibuat dan diinjeksi menggunakan @Qualifier.",
      "C": "Opsi C salah karena primary key database menggunakan @Id JPA.",
      "D": "Opsi D salah karena @Primary tidak mempengaruhi urutan main method."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-101",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Kapan Anda sebaiknya menggunakan CommandLineRunner atau ApplicationRunner di Spring Boot?",
    "options": {
      "A": "Ketika ingin mengeksekusi blok kode atau inisialisasi data khusus tepat setelah Spring ApplicationContext selesai dimuat dan sebelum aplikasi menerima request",
      "B": "Ketika ingin membuat tampilan GUI desktop dengan JavaFX",
      "C": "Ketika ingin menggantikan server Tomcat dengan terminal bash",
      "D": "Ketika ingin menghentikan aplikasi secara paksa saat booting"
    },
    "answer": "A",
    "explanation": {
      "correct": "CommandLineRunner dan ApplicationRunner adalah interface callback yang dipanggil oleh Spring Boot tepat di akhir startup sequence, sangat ideal untuk seeding data awal atau logging status aplikasi.",
      "A": "Opsi A benar karena menyediakan hook eksekusi pasca startup konteks.",
      "B": "Opsi B salah karena tidak berkaitan dengan GUI.",
      "C": "Opsi C salah karena tidak menggantikan servlet container.",
      "D": "Opsi D salah karena tujuan utamanya adalah startup initialization, bukan crash."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-102",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk menyuntikkan (inject) instance ApplicationContext ke dalam sebuah Spring Bean?",
    "options": {
      "A": "@Autowired pada field ApplicationContext atau mengimplementasikan ApplicationContextAware",
      "B": "@GetContext",
      "C": "@InjectSpringEngine",
      "D": "@SpringContextLookup"
    },
    "answer": "A",
    "explanation": {
      "correct": "ApplicationContext dapat langsung diinjeksi dengan @Autowired pada field/konstruktor bertipe ApplicationContext, atau kelas dapat mengimplementasikan interface org.springframework.context.ApplicationContextAware.",
      "A": "Opsi A benar karena ApplicationContext adalah first-class injectable bean di container.",
      "B": "Opsi B salah karena bukan anotasi Spring.",
      "C": "Opsi C salah karena bukan komponen Spring.",
      "D": "Opsi D salah karena bukan komponen Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-103",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @ResponseStatus pada sebuah custom exception class di Spring MVC?",
    "options": {
      "A": "Menentukan secara otomatis HTTP status code (misal: HttpStatus.NOT_FOUND) yang akan dikembalikan ke klien saat exception tersebut dilempar dari controller",
      "B": "Menghentikan koneksi socket tanpa mengirim response",
      "C": "Mengubah exception menjadi pesan sukses 200 OK",
      "D": "Memaksa browser klien untuk me-refresh halaman"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dengan menyematkan @ResponseStatus(HttpStatus.NOT_FOUND) pada kelas custom exception (misal: ResourceNotFoundException), Spring MVC otomatis merespons dengan kode HTTP 404 saat exception tersebut tidak tertangkap di controller.",
      "A": "Opsi A benar karena memetakan exception langsung ke status HTTP.",
      "B": "Opsi B salah karena response HTTP tetap dikirimkan ke klien.",
      "C": "Opsi C salah karena status disesuaikan dengan atribut yang ditentukan pada anotasi.",
      "D": "Opsi D salah karena tidak mengirimkan instruksi refresh browser."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-104",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa manfaat menggunakan dependency starter 'spring-boot-devtools' selama proses development?",
    "options": {
      "A": "Menyediakan fitur automatic restart saat file class berubah, LiveReload di browser, dan konfigurasi cache template yang otomatis dinonaktifkan",
      "B": "Meningkatkan performa deployment di production server",
      "C": "Mengotomatisasi pembuatan query database tanpa JPA",
      "D": "Menghapus unit test yang gagal"
    },
    "answer": "A",
    "explanation": {
      "correct": "spring-boot-devtools dirancang khusus untuk meningkatkan produktivitas developer dengan memanfaatkan dua classloader untuk restart cepat saat kode berubah, serta integrasi LiveReload.",
      "A": "Opsi A benar karena merangkum fungsi utama spring-boot-devtools.",
      "B": "Opsi B salah karena devtools secara otomatis dinonaktifkan saat aplikasi dipaketkan ke dalam JAR produksi.",
      "C": "Opsi C salah karena bukan ORM tool.",
      "D": "Opsi D salah karena tidak memanipulasi pengujian unit."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-105",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Manakah cara yang benar untuk mendefinisikan custom exception response structure menggunakan RFC 7807 Problem Details di Spring Boot 3+?",
    "options": {
      "A": "Menggunakan kelas org.springframework.http.ProblemDetail atau meng-extend ResponseEntityExceptionHandler",
      "B": "Membuat string XML manual dengan format SOAP fault",
      "C": "Mengembalikan objek String kosong",
      "D": "Menggunakan class java.lang.Throwable secara langsung"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Boot 3 mengadopsi spesifikasi RFC 7807 (Problem Details for HTTP APIs) secara bawaan melalui kelas ProblemDetail, menyediakan format respons error JSON yang terstandar (type, title, status, detail, instance).",
      "A": "Opsi A benar karena ProblemDetail adalah standar resmi yang diperkenalkan di Spring 6 / Spring Boot 3.",
      "B": "Opsi B salah karena SOAP XML sudah usang untuk REST modern.",
      "C": "Opsi C salah karena respons kosong tidak informatif bagi klien API.",
      "D": "Opsi D salah karena Throwable mentah mengekspos stack trace sensitif."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-106",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Bagaimana cara mematikan (gracefully shutdown) embedded web server di Spring Boot saat menerima sinyal SIGTERM?",
    "options": {
      "A": "Mengatur konfigurasi 'server.shutdown=graceful' di application.properties",
      "B": "Memanggil System.exit(0) seketika",
      "C": "Mencabut kabel power server fisik",
      "D": "Menghapus folder build target"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dengan konfigurasi server.shutdown=graceful, server embedded (Tomcat/Jetty/Undertow) tidak akan menerima request baru dan memberikan batas waktu (grace period) bagi request yang sedang berjalan untuk menyelesaikan prosesnya sebelum aplikasi dimatikan.",
      "A": "Opsi A benar karena konfigurasi graceful shutdown resmi di Spring Boot.",
      "B": "Opsi B salah karena System.exit(0) mematikan JVM secara mendadak tanpa menunggu request aktif selesai.",
      "C": "Opsi C salah karena mematikan paksa hardware menyebabkan data tidak konsisten.",
      "D": "Opsi D salah karena tidak relevan dengan runtime shutdown."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-107",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @Lazy pada Spring Bean atau titik injeksi dependensi?",
    "options": {
      "A": "Menunda inisialisasi bean hingga pertama kali bean tersebut diminta atau diakses, bukan saat startup aplikasi",
      "B": "Membuat eksekusi method bean berjalan 5 detik lebih lambat",
      "C": "Menandai bean yang tidak perlu ditest",
      "D": "Membuat koneksi database tidak pernah tertutup"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default singleton bean diinisialisasi secara eager saat startup. Menambahkan @Lazy membuat bean tersebut baru dibuat saat pertama kali dipanggil (lazy initialization), yang dapat mempercepat waktu startup awal aplikasi.",
      "A": "Opsi A benar karena @Lazy menunda pembuatan instance bean ke waktu penggunaan pertama.",
      "B": "Opsi B salah karena @Lazy tidak menambahkan sleep/delay buatan.",
      "C": "Opsi C salah karena tidak ada hubungannya dengan pengujian.",
      "D": "Opsi D salah karena tidak mengubah manajemen koneksi database."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-108",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Anotasi apakah yang digunakan untuk mengekspos metrics kustom aplikasi ke endpoint Prometheus melalui Micrometer di Spring Boot?",
    "options": {
      "A": "@Timed",
      "B": "@MetricCounter",
      "C": "@ExposePrometheus",
      "D": "@WatchPerformance"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Timed dari io.micrometer.core.annotation.Timed digunakan pada method atau class untuk merekam durasi eksekusi dan frekuensi pemanggilan method ke registry metrik Actuator.",
      "A": "Opsi A benar karena @Timed adalah anotasi standar Micrometer.",
      "B": "Opsi B salah karena bukan anotasi Micrometer standar.",
      "C": "Opsi C salah karena bukan anotasi resmi.",
      "D": "Opsi D salah karena bukan anotasi resmi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-109",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Bagaimana cara memuat file konfigurasi tambahan seperti 'custom.properties' ke dalam Environment Spring?",
    "options": {
      "A": "Menggunakan anotasi @PropertySource(\"classpath:custom.properties\") pada kelas konfigurasi",
      "B": "Menempelkan isi file ke dalam file bytecode .class",
      "C": "Mengubah nama file menjadi application.properties di command prompt",
      "D": "Membuat symbolic link di folder sistem operasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "@PropertySource(\"classpath:nama-file.properties\") digunakan untuk mendaftarkan file properti eksternal ke dalam Spring ResourceLoader dan PropertySources.",
      "A": "Opsi A benar karena merupakan anotasi deklaratif pemuatan file properti tambahan.",
      "B": "Opsi B salah karena file bytecode tidak boleh dimodifikasi secara manual.",
      "C": "Opsi C salah karena tidak praktis dan tidak fleksibel.",
      "D": "Opsi D salah karena Spring menyediakan abstraksi Resource independen dari OS."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-110",
    "level": "intermediate",
    "topic": "Spring Boot",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @Inherited pada custom annotation di Java / Spring?",
    "options": {
      "A": "Menunjukkan bahwa anotasi tersebut secara otomatis diwariskan ke subclass jika diterapkan pada superclass",
      "B": "Membuat class otomatis menjadi abstract class",
      "C": "Mewarisi semua database record dari parent table",
      "D": "Mencegah class diturunkan oleh class lain"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Inherited (meta-annotation di java.lang.annotation) menandakan bahwa anotasi yang didefinisikan akan otomatis diturunkan ke kelas-kelas anak (subclass) dari kelas yang menggunakannya.",
      "A": "Opsi A benar karena menjelaskan semantik pewarisan metadata anotasi.",
      "B": "Opsi B salah karena pewarisan class diatur oleh kata kunci abstract/extends.",
      "C": "Opsi C salah karena metadata Java tidak mengatur record database secara otomatis tanpa JPA.",
      "D": "Opsi D salah karena pencegahan pewarisan dilakukan dengan modifier final."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-111",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Menurut Richardson Maturity Model, level keberapakah yang menerapkan HATEOAS (Hypermedia As The Engine Of Application State)?",
    "options": {
      "A": "Level 3: Hypermedia Controls",
      "B": "Level 2: HTTP Verbs",
      "C": "Level 1: Resources with unique URIs",
      "D": "Level 0: Swamp of POX (Plain Old XML/JSON single endpoint)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Richardson Maturity Model membagi REST menjadi: Level 0 (RPC endpoint tunggal), Level 1 (Individual Resources URI), Level 2 (HTTP Verbs & Status Codes), dan Level 3 (HATEOAS / Hypermedia Controls yang menyediakan tautan navigasi relasional dalam respons).",
      "A": "Opsi A benar karena Level 3 adalah tingkat tertinggi yang mengadopsi HATEOAS sepenuhnya.",
      "B": "Opsi B salah karena Level 2 hanya mencakup penggunaan HTTP methods dan status codes yang benar.",
      "C": "Opsi C salah karena Level 1 hanya memperkenalkan URI resource terpisah.",
      "D": "Opsi D salah karena Level 0 adalah remote procedure call biasa tanpa konsep REST."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-112",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Header HTTP manakah yang digunakan untuk mengimplementasikan optimasi caching bersyarat dan mendeteksi konflik pembaruan konkuren (Concurrency Control) bersama status 412 Precondition Failed?",
    "options": {
      "A": "ETag dan If-Match / If-None-Match",
      "B": "User-Agent dan Referer",
      "C": "Authorization dan Bearer",
      "D": "Accept-Encoding dan Content-Length"
    },
    "answer": "A",
    "explanation": {
      "correct": "ETag (Entity Tag) adalah sidik jari versi resource. Klien mengirimkan header If-Match bersama permintaan PUT/PATCH; jika ETag di server sudah berubah (telah diupdate oleh pihak lain), server mengembalikan 412 Precondition Failed (optimistic concurrency control).",
      "A": "Opsi A benar karena ETag/If-Match adalah standar HTTP untuk conditional update dan caching.",
      "B": "Opsi B salah karena User-Agent dan Referer untuk metadata klien dan perujuk.",
      "C": "Opsi C salah karena Authorization untuk autentikasi kredensial.",
      "D": "Opsi D salah karena Accept-Encoding dan Content-Length untuk kompresi dan ukuran payload."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-113",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "HTTP Status Code manakah yang paling tepat dikembalikan ketika request klien berhasil divalidasi tetapi melanggar aturan bisnis (misal: saldo rekening tidak mencukupi untuk transfer)?",
    "options": {
      "A": "422 Unprocessable Content (Entity)",
      "B": "400 Bad Request",
      "C": "500 Internal Server Error",
      "D": "404 Not Found"
    },
    "answer": "A",
    "explanation": {
      "correct": "422 Unprocessable Content (RFC 9110) digunakan ketika sintaks permintaan benar (format JSON valid) tetapi server tidak dapat memproses instruksi karena kesalahan semantik atau pelanggaran aturan bisnis (business logic validation).",
      "A": "Opsi A benar karena 422 adalah status standar untuk kegagalan validasi logika bisnis semantik.",
      "B": "Opsi B salah karena 400 lebih cocok untuk kesalahan sintaksis request (malformed JSON atau tipe data salah).",
      "C": "Opsi C salah karena 500 menandakan bug/kesalahan tak terduga di sisi server.",
      "D": "Opsi D salah karena 404 menandakan resource tidak ditemukan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-114",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Dalam Spring Data Web, bagaimana cara menerima parameter pagination dan sorting di controller method secara terstandar?",
    "options": {
      "A": "Menambahkan parameter 'Pageable pageable' di method controller",
      "B": "Membuat class ServletFilter kustom dan parsing query string secara manual",
      "C": "Menggunakan parameter int limit, int offset di setiap controller",
      "D": "Membuat thread terpisah untuk membaca total data"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Data menyediakan interface Pageable (yang otomatis dipetakan dari parameter query '?page=0&size=20&sort=name,desc') yang dapat langsung diteruskan ke method repositori findAll(pageable).",
      "A": "Opsi A benar karena Pageable adalah abstraksi pagination dan sorting standar di Spring Data.",
      "B": "Opsi B salah karena Spring Data sudah menyediakannya secara otomatis tanpa filter manual.",
      "C": "Opsi C salah meskipun limit/offset dapat dipakai, Pageable jauh lebih kaya fitur (menghasilkan Page<T> dengan total elements dan pages).",
      "D": "Opsi D salah karena pagination dilakukan di tingkat query database, bukan thread terpisah."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-115",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Apa perbedaan performa dan beban query antara mengembalikan 'Page<T>' versus 'Slice<T>' di Spring Data JPA?",
    "options": {
      "A": "'Page<T>' mengeksekusi query tambahan 'COUNT(*)' untuk mengetahui total keseluruhan data, sedangkan 'Slice<T>' hanya mengambil 'size + 1' record untuk mengetahui apakah ada halaman berikutnya tanpa query COUNT yang mahal",
      "B": "'Slice<T>' tidak bisa diurutkan dengan sort",
      "C": "'Page<T>' tidak mendukung pagination di database",
      "D": "Keduanya persis sama dalam jumlah query database yang dieksekusi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Untuk tabel besar dengan jutaan baris, query 'SELECT COUNT(*)' pada Page<T> bisa sangat lambat. Slice<T> hanya mengecek ketersediaan halaman berikutnya (hasNext()) tanpa pernah menghitung total baris, sangat optimal untuk fitur Infinite Scroll.",
      "A": "Opsi A benar karena Slice menghindari overhead COUNT(*) yang berat pada dataset besar.",
      "B": "Opsi B salah karena Slice mendukung sorting penuh.",
      "C": "Opsi C salah karena Page mendukung pagination penuh.",
      "D": "Opsi D salah karena Page melakukan 2 query (data + count) sedangkan Slice hanya 1 query."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-116",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Kapan HTTP status code '409 Conflict' harus digunakan oleh server RESTful API?",
    "options": {
      "A": "Ketika permintaan tidak dapat diselesaikan karena terjadi konflik dengan state resource saat ini di server (misalnya mencoba mendaftarkan username/email yang sudah ada di database)",
      "B": "Ketika server kehabisan memori CPU",
      "C": "Ketika klien mengirimkan format XML padahal server meminta JSON",
      "D": "Ketika kabel jaringan server terputus"
    },
    "answer": "A",
    "explanation": {
      "correct": "HTTP 409 Conflict menunjukkan bahwa request tidak dapat diproses karena konflik pada kondisi resource saat ini, seperti pelanggaran batasan unik (duplicate unique constraint) atau konflik versi data konkuren.",
      "A": "Opsi A benar karena menjelaskan kasus penggunaan otentik dari status 409.",
      "B": "Opsi B salah karena server overload menghasilkan status 503 Service Unavailable atau 500.",
      "C": "Opsi C salah karena format tidak cocok menghasilkan status 415 Unsupported Media Type.",
      "D": "Opsi D salah karena masalah koneksi fisik jaringan tidak menghasilkan respons HTTP dari server."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-117",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Apa fungsi dari HTTP response header 'Cache-Control: no-cache, no-store, must-revalidate' pada endpoint sensitif?",
    "options": {
      "A": "Mencegah browser dan server proxy perantara menyimpan salinan respons ke memori cache demi keamanan data rahasia",
      "B": "Mempercepat loading halaman web dengan kompresi data",
      "C": "Menginstruksikan browser untuk menghapus semua cookie pengguna",
      "D": "Mengunci database server agar tidak bisa diubah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header Cache-Control ini menginstruksikan klien dan proxy manapun untuk tidak menyimpan (no-store) response ke disk atau cache, serta mewajibkan revalidasi ke origin server jika ada cache tersisa, sangat penting untuk data rahasia/keuangan.",
      "A": "Opsi A benar karena melindungi privasi dan integritas data dinamis/sensitif.",
      "B": "Opsi B salah karena kompresi diatur dengan Content-Encoding (gzip/br).",
      "C": "Opsi C salah karena penghapusan cookie dilakukan melalui header Set-Cookie dengan Max-Age=0.",
      "D": "Opsi D salah karena cache HTTP beroperasi di layer transportasi web, bukan database locking."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-118",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Manakah praktik terbaik (best practice) dalam merancang URI endpoint RESTful yang baik?",
    "options": {
      "A": "Menggunakan kata benda jamak (plural nouns) dalam huruf kecil dan garis hubung (kebab-case), serta menghindari kata kerja (verbs) dalam path (contoh: GET /api/v1/orders/123/items)",
      "B": "Menggunakan kata kerja eksplisit di URI seperti POST /api/v1/createOrder dan GET /api/v1/getAllUsers",
      "C": "Menggunakan huruf besar campur (camelCase) seperti /api/v1/UserOrders",
      "D": "Menyimpan seluruh payload parameter di dalam path URI tanpa query string"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar desain RESTful API menggunakan kata benda (nouns) jamak untuk merepresentasikan koleksi dan entitas resource, sedangkan tindakan (actions) ditentukan oleh HTTP Verbs (GET, POST, PUT, DELETE).",
      "A": "Opsi A benar karena mematuhi konvensi RESTful URI design profesional.",
      "B": "Opsi B salah karena memasukkan verbs ke dalam URI mengarah ke RPC (Remote Procedure Call) style, bukan REST murni.",
      "C": "Opsi C salah karena kebab-case huruf kecil adalah standar de-facto URI web.",
      "D": "Opsi D salah karena path URI memiliki batas panjang dan tidak cocok untuk data kompleks."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-119",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Anotasi apakah di Spring Web yang digunakan untuk menangani pengiriman file multipart (file upload) dari klien?",
    "options": {
      "A": "@RequestPart atau @RequestParam(\"file\") MultipartFile file",
      "B": "@RequestBody File file",
      "C": "@PathVariable File file",
      "D": "@UploadStream File file"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Web menyediakan interface MultipartFile yang diikat menggunakan @RequestPart (untuk multipart form data dengan metadata JSON) atau @RequestParam untuk file upload tunggal.",
      "A": "Opsi A benar karena MultipartFile adalah abstraksi file upload di Spring MVC.",
      "B": "Opsi B salah karena @RequestBody mem-parse seluruh payload ke satu objek dan tidak menangani boundary multipart secara otomatis.",
      "C": "Opsi C salah karena @PathVariable hanya membaca segmen URL path.",
      "D": "Opsi D salah karena bukan anotasi Spring."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-120",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Apa fungsi dari HTTP header 'Content-Disposition: attachment; filename=\"laporan.pdf\"' dalam respons API?",
    "options": {
      "A": "Menginstruksikan browser klien untuk mengunduh konten sebagai file attachment dengan nama 'laporan.pdf' daripada menampilkannya langsung (inline)",
      "B": "Menghapus file tersebut dari server setelah berhasil diunduh",
      "C": "Mengonversi file PDF menjadi dokumen teks di browser",
      "D": "Mengunci file agar tidak bisa dicetak oleh pengguna"
    },
    "answer": "A",
    "explanation": {
      "correct": "Header Content-Disposition dengan nilai attachment memerintahkan browser untuk menampilkan dialog download file dengan nama yang ditentukan.",
      "A": "Opsi A benar karena mengontrol browser mendownload file.",
      "B": "Opsi B salah karena header HTTP tidak menghapus file server.",
      "C": "Opsi C salah karena browser merender sesuai Content-Type.",
      "D": "Opsi D salah karena bukan proteksi cetak."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-121",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Manakah HTTP status code yang paling tepat ketika klien mengirim payload dengan tipe media yang tidak didukung server (contoh: mengirim XML padahal endpoint hanya menerima JSON)?",
    "options": {
      "A": "415 Unsupported Media Type",
      "B": "406 Not Acceptable",
      "C": "400 Bad Request",
      "D": "501 Not Implemented"
    },
    "answer": "A",
    "explanation": {
      "correct": "415 Unsupported Media Type menandakan server menolak memproses request karena format payload yang dikirimkan klien (Content-Type) tidak didukung oleh resource target.",
      "A": "Opsi A benar karena 415 adalah status penolakan format body yang dikirim klien.",
      "B": "Opsi B salah karena 406 terjadi jika server tidak dapat menghasilkan respons yang diminta oleh header Accept.",
      "C": "Opsi C salah karena 400 untuk bad syntax umum.",
      "D": "Opsi D salah karena 501 menandakan server tidak mengenali HTTP method yang dikirim."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-122",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Kapan status code '406 Not Acceptable' dikembalikan oleh server Spring Web?",
    "options": {
      "A": "Ketika server tidak dapat menghasilkan representasi respons yang sesuai dengan format yang diminta oleh header 'Accept' klien",
      "B": "Ketika klien belum membayar tagihan langganan API",
      "C": "Ketika koneksi database mengalami timeout",
      "D": "Ketika token otorisasi kedaluwarsa"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika klien mengirim 'Accept: application/xml' tetapi controller hanya mendukung JSON, server akan merespons dengan 406 Not Acceptable.",
      "A": "Opsi A benar karena kegagalan negosiasi konten pada header Accept memicu status 406.",
      "B": "Opsi B salah karena penolakan pembayaran menggunakan 402 Payment Required.",
      "C": "Opsi C salah karena database timeout memicu status 500 atau 504.",
      "D": "Opsi D salah karena token expired menghasilkan 401 Unauthorized."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-123",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Dalam arsitektur microservices, apa keuntungan menggunakan API Gateway (seperti Spring Cloud Gateway)?",
    "options": {
      "A": "Menyediakan titik masuk tunggal (single entry point) untuk routing lalu lintas, autentikasi terpusat, rate limiting, SSL termination, dan cross-cutting concerns",
      "B": "Menggantikan peran database penyimpanan data utama",
      "C": "Mengompilasi seluruh kode microservices menjadi satu file monolith",
      "D": "Menghapus kebutuhan container Docker"
    },
    "answer": "A",
    "explanation": {
      "correct": "API Gateway bertindak sebagai reverse proxy cerdas di depan kumpulan microservices, menyederhanakan akses klien eksternal dan menangani security, throttling, dan load balancing secara terpusat.",
      "A": "Opsi A benar karena merangkum tanggung jawab arsitektural API Gateway.",
      "B": "Opsi B salah karena API Gateway bukan tempat penyimpanan database.",
      "C": "Opsi C salah karena gateway menjaga pemisahan modular arsitektur terdistribusi.",
      "D": "Opsi D salah karena Docker tetap digunakan untuk deployment services."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-124",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Apa fungsi dari header 'Location' pada HTTP response?",
    "options": {
      "A": "Menunjukkan URI dari resource baru yang baru saja dibuat (pada status 201 Created) atau target URL baru pada pengalihan (status 3xx)",
      "B": "Menyimpan koordinat GPS pengguna secara real-time",
      "C": "Menentukan nama kota lokasi data center server",
      "D": "Mengatur zona waktu sistem operasi klien"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai standar RFC, header 'Location' disertakan saat mengembalikan 201 Created untuk memberi tahu klien URI resource baru tersebut (misal: Location: /api/v1/orders/789), serta digunakan pada redirect 301/302.",
      "A": "Opsi A benar karena menjelaskan spesifikasi resmi penggunaan header Location.",
      "B": "Opsi B salah karena bukan koordinat GPS dinamis.",
      "C": "Opsi C salah karena bukan metadata geografis server.",
      "D": "Opsi D salah karena bukan pengatur zona waktu."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-125",
    "level": "intermediate",
    "topic": "RESTful API",
    "questionType": "concept",
    "question": "Bagaimana cara menangani versi API (API Versioning) yang paling umum dan mudah di-cache oleh browser serta CDN?",
    "options": {
      "A": "URI Path Versioning (contoh: /api/v1/users dan /api/v2/users)",
      "B": "Query Parameter Versioning (contoh: /users?version=1)",
      "C": "Header Versioning (contoh: X-API-Version: 1)",
      "D": "Content Negotiation / Accept Header Versioning"
    },
    "answer": "A",
    "explanation": {
      "correct": "URI Path Versioning menanamkan nomor versi langsung ke dalam path URL. Cara ini paling eksplisit, transparan bagi pengguna, dan sangat ramah terhadap mekanisme caching web/CDN karena setiap versi memiliki URL fisik yang unik.",
      "A": "Opsi A benar karena URL unik memudahkan caching perantara dan inspeksi log lalu lintas.",
      "B": "Opsi B salah meskipun mudah, query param versioning kurang disukai untuk caching beberapa CDN.",
      "C": "Opsi C salah karena menyulitkan pengujian via browser address bar dan mempersulit CDN caching tanpa konfigurasi header Vary.",
      "D": "Opsi D salah karena lebih kompleks diterapkan dan tidak langsung terlihat di URL browser."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-126",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apakah yang dimaksud dengan masalah 'N+1 Query Problem' di JPA/Hibernate?",
    "options": {
      "A": "Kondisi di mana aplikasi mengeksekusi 1 query awal untuk mengambil N parent records, lalu secara berulang mengeksekusi N query tambahan terpisah untuk mengambil data relasi masing-masing parent",
      "B": "Kegagalan transaksi database ketika data melebihi N baris",
      "C": "Kesalahan pembagian angka 0 pada query SQL",
      "D": "Koneksi pool database kehabisan thread setelah N detik"
    },
    "answer": "A",
    "explanation": {
      "correct": "N+1 problem adalah masalah performa di mana mengambil 100 entitas parent memicu 100 query anak tambahan ke database jika relasinya tidak di-fetch dengan strategi join yang tepat.",
      "A": "Opsi A benar karena mendefinisikan fenomena N+1 query secara akurat.",
      "B": "Opsi B salah karena bukan error kegagalan transaksi.",
      "C": "Opsi C salah karena bukan error aritmatika.",
      "D": "Opsi D salah karena bukan masalah timeout."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-127",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Bagaimanakah cara terbaik dan paling umum untuk mengatasi masalah N+1 Query Problem di JPQL?",
    "options": {
      "A": "Menggunakan klausul 'JOIN FETCH' dalam query JPQL (misal: 'SELECT o FROM Order o JOIN FETCH o.items')",
      "B": "Mengubah semua relasi menjadi FetchType.EAGER",
      "C": "Menghapus relasi foreign key dari database",
      "D": "Menambah memori RAM database server"
    },
    "answer": "A",
    "explanation": {
      "correct": "'JOIN FETCH' menginstruksikan Hibernate untuk mengeksekusi SQL JOIN tunggal yang secara langsung memetakan kolom parent dan child ke memori dalam 1 round-trip query.",
      "A": "Opsi A benar karena JOIN FETCH mengeliminasi N query susulan menjadi 1 query tunggal.",
      "B": "Opsi B salah karena FetchType.EAGER justru sering memicu N+1 query secara implisit saat menggunakan query method biasa.",
      "C": "Opsi C salah karena menghapus integritas referensial merusak data.",
      "D": "Opsi D salah karena masalahnya ada pada round-trip jaringan, bukan RAM database."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-128",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari fitur @EntityGraph di Spring Data JPA?",
    "options": {
      "A": "Mendefinisikan atribut relasi mana yang harus di-fetch secara eager (menggunakan SQL JOIN) secara deklaratif pada method query tertentu tanpa mengubah konfigurasi default relasi",
      "B": "Membuat grafik diagram batang dari isi database",
      "C": "Menghubungkan aplikasi Spring ke database graf seperti Neo4j",
      "D": "Menonaktifkan transaksi database"
    },
    "answer": "A",
    "explanation": {
      "correct": "@EntityGraph memungkinkan developer memuat relasi lazy secara selektif per method query repositori menggunakan join query tanpa harus menulis query JPQL JOIN FETCH panjang.",
      "A": "Opsi A benar karena @EntityGraph memberikan fleksibilitas override fetch plan dinamis.",
      "B": "Opsi B salah karena bukan tool diagram batang.",
      "C": "Opsi C salah karena JPA adalah standar untuk database relasional.",
      "D": "Opsi D salah karena tidak menonaktifkan transaksi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-129",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa perbedaan efek antara CascadeType.REMOVE dan 'orphanRemoval = true' pada relasi @OneToMany di JPA?",
    "options": {
      "A": "CascadeType.REMOVE hanya menghapus entitas anak jika entitas parent dihapus, sedangkan orphanRemoval=true juga akan menghapus entitas anak jika anak tersebut dilepaskan dari koleksi parent",
      "B": "orphanRemoval hanya bekerja pada relasi database non-relasional",
      "C": "CascadeType.REMOVE tidak menghapus data apapun dari database fisik",
      "D": "Keduanya persis sama dan tidak ada perbedaan fungsi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika kita memanggil parent.getChildren().remove(child), CascadeType.REMOVE tidak melakukan apapun terhadap record child di database. Namun jika orphanRemoval = true, Hibernate mendeteksi child tersebut menjadi orphan dan otomatis mengeksekusi DELETE child dari database.",
      "A": "Opsi A benar karena membedakan penghapusan cascade saat delete parent vs pembersihan orphan saat de-referencing koleksi.",
      "B": "Opsi B salah karena keduanya adalah fitur JPA relasional.",
      "C": "Opsi C salah karena CascadeType.REMOVE mengeksekusi SQL DELETE saat parent dihapus.",
      "D": "Opsi D salah karena perilaku terhadap modifikasi koleksi sangat berbeda."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-130",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apakah yang dimaksud dengan fitur 'Dirty Checking' (Automatic Dirty Checking) di Hibernate?",
    "options": {
      "A": "Hibernate secara otomatis mendeteksi perubahan atribut pada entitas yang berstatus 'managed' di Persistence Context dan melakukan UPDATE ke database saat transaksi commit tanpa perlu memanggil repository.save()",
      "B": "Hibernate memindai database untuk mendeteksi virus atau data korup",
      "C": "Hibernate memeriksa apakah syntax SQL mengandung injection berbahaya",
      "D": "Hibernate menghapus objek yang bernilai null secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Hibernate menyimpan snapshot awal entitas saat di-load ke Persistence Context. Saat transaksi berakhir/commit, Hibernate membandingkan state saat ini dengan snapshot; jika ada atribut yang berubah, Hibernate otomatis menghasilkan query SQL UPDATE yang diperlukan.",
      "A": "Opsi A benar karena mendefinisikan mekanisme automatic dirty checking.",
      "B": "Opsi B salah karena bukan fungsi antivirus database.",
      "C": "Opsi C salah karena SQL injection dicegah oleh parameterized queries (PreparedStatement).",
      "D": "Opsi D salah karena null value dipetakan ke NULL SQL."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-131",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Mengapa method repositori Spring Data JPA yang menggunakan anotasi @Modifying dan query kustom UPDATE/DELETE sering memerlukan atribut 'clearAutomatically = true'?",
    "options": {
      "A": "Untuk membersihkan Persistence Context (L1 Cache) agar tidak menyimpan entitas dengan state usang (stale state) yang belum disinkronkan pasca eksekusi query bulk update langsung ke database",
      "B": "Untuk menghapus seluruh isi tabel database secara otomatis",
      "C": "Untuk menutup koneksi database secara permanen",
      "D": "Agar query berjalan tanpa transaksi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Query @Modifying UPDATE mengeksekusi langsung ke database melewati Persistence Context. Jika L1 Cache tidak di-clear (clearAutomatically = true), entitas di memori masih memegang nilai lama, menyebabkan pembacaan berikutnya menghasilkan data yang stale.",
      "A": "Opsi A benar karena menyinkronkan state memori L1 cache dengan hasil bulk update di database.",
      "B": "Opsi B salah karena hanya membersihkan EntityManager cache, bukan data tabel.",
      "C": "Opsi C salah karena koneksi tetap berada di pool.",
      "D": "Opsi D salah karena operasi @Modifying tetap memerlukan @Transactional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-132",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara tingkat isolasi transaksi 'READ COMMITTED' dan 'REPEATABLE READ' di database relasional?",
    "options": {
      "A": "READ COMMITTED mencegah Dirty Read, sedangkan REPEATABLE READ selain mencegah Dirty Read juga mencegah Non-Repeatable Read",
      "B": "REPEATABLE READ mengunci seluruh tabel dari operasi pembacaan",
      "C": "READ COMMITTED tidak mengizinkan transaksi lain melakukan INSERT",
      "D": "Keduanya tidak dapat mencegah Dirty Read sama sekali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di bawah READ COMMITTED, jika transaksi A membaca baris, lalu transaksi B meng-update dan commit baris tersebut, pembacaan kedua oleh transaksi A akan melihat nilai baru. REPEATABLE READ mencegah hal ini menggunakan snapshot data / MVCC.",
      "A": "Opsi A benar karena mendefinisikan anomali yang dicegah oleh masing-masing tingkat isolasi standar ANSI SQL.",
      "B": "Opsi B salah karena REPEATABLE READ umumnya menggunakan MVCC tanpa memblokir pembacaan concurrent.",
      "C": "Opsi C salah karena operasi INSERT dari transaksi lain tetap dimungkinkan.",
      "D": "Opsi D salah karena READ COMMITTED dijamin bebas dari Dirty Read."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-133",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apakah anomali transaksi yang disebut sebagai 'Phantom Read' di database?",
    "options": {
      "A": "Ketika sebuah transaksi mengeksekusi query pencarian rentang data dua kali, dan pada pembacaan kedua muncul baris data baru yang di-insert dan di-commit oleh transaksi lain",
      "B": "Ketika transaksi membaca data yang belum di-commit dan kemudian di-rollback",
      "C": "Ketika hard drive server mengalami kerusakan fisik",
      "D": "Ketika query mengembalikan data dari database yang berbeda"
    },
    "answer": "A",
    "explanation": {
      "correct": "Phantom Read terjadi ketika transaksi membaca sekumpulan baris yang memenuhi kondisi WHERE, lalu transaksi lain menyisipkan baris baru yang cocok dengan kondisi tersebut, sehingga kueri kedua menghasilkan baris 'hantu' tambahan. Anomali ini dicegah oleh SERIALIZABLE.",
      "A": "Opsi A benar karena mendefinisikan fenomena Phantom Read dalam range queries.",
      "B": "Opsi B salah karena itu adalah definisi Dirty Read.",
      "C": "Opsi C salah karena bukan kerusakan perangkat keras.",
      "D": "Opsi D salah karena transaksi terjadi dalam cakupan database yang sama."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-134",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari atribut propagation 'Propagation.REQUIRES_NEW' pada anotasi @Transactional Spring?",
    "options": {
      "A": "Selalu menunda (suspend) transaksi aktif saat ini dan membuat transaksi baru yang benar-benar independen",
      "B": "Menggunakan transaksi yang sudah ada jika ada, atau gagal jika belum ada transaksi",
      "C": "Menjalankan method tanpa dukungan transaksi sama sekali",
      "D": "Melakukan rollback pada seluruh database saat method selesai"
    },
    "answer": "A",
    "explanation": {
      "correct": "Propagation.REQUIRES_NEW memastikan method dieksekusi dalam transaksi mandiri. Jika transaksi luar gagal dan rollback, transaksi mandiri REQUIRES_NEW ini tetap commit (sangat berguna untuk audit logging).",
      "A": "Opsi A benar karena REQUIRES_NEW mengisolasi transaksi baru dari transaksi pemanggil.",
      "B": "Opsi B salah karena itu adalah perilaku Propagation.MANDATORY.",
      "C": "Opsi C salah karena eksekusi tanpa transaksi adalah NOT_SUPPORTED atau NEVER.",
      "D": "Opsi D salah karena transaksi hanya rollback jika terjadi exception."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-135",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa perbedaan utama antara Optimistic Locking dan Pessimistic Locking dalam JPA?",
    "options": {
      "A": "Optimistic Locking mendeteksi konflik saat commit menggunakan kolom versi (@Version) tanpa mengunci baris di database, sedangkan Pessimistic Locking secara fisik mengunci baris data di level database menggunakan 'SELECT ... FOR UPDATE'",
      "B": "Pessimistic locking lebih cepat untuk sistem yang 99% operasinya adalah pembacaan",
      "C": "Optimistic locking memblokir transaksi lain untuk membaca data",
      "D": "Pessimistic locking tidak memerlukan dukungan database engine"
    },
    "answer": "A",
    "explanation": {
      "correct": "Optimistic locking berasumsi konflik jarang terjadi (cocok untuk read-heavy). Pessimistic locking (LockModeType.PESSIMISTIC_WRITE) mengunci baris fisik database sehingga transaksi lain harus mengantre/menunggu, cocok untuk sistem tiket/inventaris bersaing tinggi.",
      "A": "Opsi A benar karena membedakan pendekatan @Version check vs database row lock.",
      "B": "Opsi B salah karena pessimistic locking memiliki overhead lock yang lebih tinggi.",
      "C": "Opsi C salah karena optimistic locking tidak memblokir pembacaan.",
      "D": "Opsi D salah karena pessimistic locking mengandalkan fitur locking database."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-136",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Anotasi apakah yang wajib ditambahkan pada field versi bertipe Long, Integer, atau Timestamp untuk mengaktifkan Optimistic Locking di JPA?",
    "options": {
      "A": "@Version",
      "B": "@OptimisticLock",
      "C": "@LockVersion",
      "D": "@Revision"
    },
    "answer": "A",
    "explanation": {
      "correct": "Anotasi @Version memberitahu JPA untuk secara otomatis memeriksa dan menaikkan nilai versi saat operasi UPDATE. Jika versi di database tidak cocok, OptimisticLockException akan dilemparkan.",
      "A": "Opsi A benar karena @Version adalah anotasi resmi JPA untuk optimistic locking.",
      "B": "Opsi B salah karena bukan anotasi standar JPA.",
      "C": "Opsi C salah karena bukan anotasi JPA.",
      "D": "Opsi D salah karena @Revision adalah anotasi Hibernate Envers untuk audit riwayat entitas."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-137",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Dalam relasi dua arah (bidirectional) @OneToMany dan @ManyToOne, di sisi manakah atribut 'mappedBy' WAJIB ditempatkan?",
    "options": {
      "A": "Di sisi @OneToMany (sisi inverse/non-owning side), menunjuk ke nama field referensi yang ada di entitas anak",
      "B": "Di sisi @ManyToOne (owning side)",
      "C": "Di kedua sisi secara bersamaan",
      "D": "Tidak boleh ditempatkan di mana pun"
    },
    "answer": "A",
    "explanation": {
      "correct": "Atribut mappedBy selalu berada pada sisi non-owning (biasanya @OneToMany) untuk menyatakan bahwa foreign key fisik di tabel database dikelola oleh field referensi pada entitas seberang (@ManyToOne).",
      "A": "Opsi A benar karena mappedBy menandai non-owning side relasi JPA.",
      "B": "Opsi B salah karena sisi @ManyToOne selalu merupakan owning side yang memegang foreign key fisik (@JoinColumn).",
      "C": "Opsi C salah karena mappedBy di kedua sisi akan membingungkan Hibernate.",
      "D": "Opsi D salah karena tanpa mappedBy, JPA akan membuat join table terpisah yang tidak diinginkan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-138",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari method 'flush()' pada EntityManager di JPA?",
    "options": {
      "A": "Menyinkronkan semua perubahan yang ada di Persistence Context ke database dengan mengeksekusi query SQL yang tertunda tanpa melakukan commit transaksi",
      "B": "Melakukan rollback seluruh transaksi seketika",
      "C": "Menghapus semua data tabel database",
      "D": "Menutup koneksi database pool"
    },
    "answer": "A",
    "explanation": {
      "correct": "flush() memaksa Hibernate mengirimkan perintah INSERT/UPDATE/DELETE yang tertunda ke database buffer, tetapi perubahan tersebut belum permanen sampai transaksi di-commit.",
      "A": "Opsi A benar karena flush menyinkronkan memori dengan database buffer tanpa commit.",
      "B": "Opsi B salah karena pembatalan transaksi dilakukan dengan rollback.",
      "C": "Opsi C salah karena tidak menghapus tabel.",
      "D": "Opsi D salah karena penutupan koneksi dilakukan saat transaksi selesai."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-139",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari method 'detach(Object entity)' pada EntityManager?",
    "options": {
      "A": "Mengeluarkan entitas dari status 'managed' di Persistence Context sehingga perubahan pada entitas tidak akan lagi otomatis disimpan ke database oleh dirty checking",
      "B": "Menghapus baris rekaman entitas dari tabel database",
      "C": "Menghubungkan entitas ke transaksi baru",
      "D": "Mengonversi entitas menjadi file JSON"
    },
    "answer": "A",
    "explanation": {
      "correct": "Entitas yang di-detach beralih dari status 'managed' menjadi 'detached'. Hibernate berhenti melacak perubahan atribut pada objek tersebut sehingga perubahan state tidak akan memicu SQL UPDATE.",
      "A": "Opsi A benar karena memutus hubungan pelacakan entitas dari Persistence Context.",
      "B": "Opsi B salah karena penghapusan baris menggunakan method remove().",
      "C": "Opsi C salah karena mengembalikan entitas detached ke status managed menggunakan method merge().",
      "D": "Opsi D salah karena bukan serializer JSON."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-140",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Manakah default rollback behavior dari anotasi @Transactional di Spring saat terjadi exception di dalam method?",
    "options": {
      "A": "Otomatis melakukan rollback hanya untuk unchecked exceptions (RuntimeException dan Error), tetapi TIDAK melakukan rollback untuk checked exceptions secara default",
      "B": "Melakukan rollback untuk semua jenis exception termasuk checked exception",
      "C": "Tidak pernah melakukan rollback apapun",
      "D": "Hanya melakukan rollback jika exception bertipe SQLException"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, Spring Transaction Interceptor hanya memicu rollback jika method melempar RuntimeException atau Error. Untuk rollback pada checked exception, deklarasikan: @Transactional(rollbackFor = Exception.class).",
      "A": "Opsi A benar karena menjelaskan aturan bawaan rollback Spring transaction.",
      "B": "Opsi B salah karena checked exception bawaan tidak memicu rollback tanpa rollbackFor.",
      "C": "Opsi C salah karena RuntimeException otomatis memicu rollback.",
      "D": "Opsi D salah karena semua RuntimeException memicu rollback."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-141",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa peran dari First-Level Cache (L1 Cache) di Hibernate?",
    "options": {
      "A": "Merupakan cache wajib yang terikat pada satu instance EntityManager/Session tunggal untuk mencegah pembacaan berulang entitas yang sama dalam satu transaksi",
      "B": "Merupakan cache global terdistribusi yang dibagi antar semua pengguna aplikasi di memori Redis",
      "C": "Merupakan cache di level hard disk database",
      "D": "Merupakan cache untuk file statis seperti gambar dan CSS"
    },
    "answer": "A",
    "explanation": {
      "correct": "L1 Cache selalu aktif dan terikat pada siklus hidup Session/EntityManager saat ini. Jika findById(1L) dipanggil berulang dalam satu transaksi, query SQL hanya dikirim satu kali ke database karena Hibernate mengembalikan objek dari L1 Cache.",
      "A": "Opsi A benar karena L1 Cache bersifat lokal per Persistence Context.",
      "B": "Opsi B salah karena cache global lintas sesi adalah Second-Level Cache (L2 Cache).",
      "C": "Opsi C salah karena L1 Cache berada di memori heap JVM aplikasi.",
      "D": "Opsi D salah karena bukan web static cache."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-142",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Bagaimana cara memetakan inheritance hierarki kelas di JPA di mana setiap subclass memiliki tabel database fisik terpisah sendiri beserta semua kolom parent-nya?",
    "options": {
      "A": "@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)",
      "B": "@Inheritance(strategy = InheritanceType.SINGLE_TABLE)",
      "C": "@Inheritance(strategy = InheritanceType.JOINED)",
      "D": "@Inheritance(strategy = InheritanceType.MAPPED_SUPERCLASS)"
    },
    "answer": "A",
    "explanation": {
      "correct": "InheritanceType.TABLE_PER_CLASS membuat tabel terpisah untuk setiap kelas konkret, di mana masing-masing tabel memiliki kolom lengkap dari parent maupun kolom khusus subclass-nya.",
      "A": "Opsi A benar karena TABLE_PER_CLASS menduplikasi kolom parent ke setiap tabel subclass independen.",
      "B": "Opsi B salah karena SINGLE_TABLE menggabungkan seluruh hierarki kelas ke dalam satu tabel tunggal.",
      "C": "Opsi C salah karena JOINED membuat tabel terpisah yang dihubungkan dengan relasi foreign key.",
      "D": "Opsi D salah karena @MappedSuperclass bukan hierarki entitas polimorfik penuh."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-143",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Apa fungsi dari anotasi @Embeddable dan @Embedded di JPA?",
    "options": {
      "A": "Memungkinkan komposisi kelas pembantu (Value Object) ke dalam entitas, di mana atribut kelas @Embeddable dipetakan sebagai kolom-kolom biasa di tabel entitas pemiliknya tanpa membuat tabel baru",
      "B": "Menanamkan video YouTube ke dalam database",
      "C": "Menghubungkan dua database yang berbeda",
      "D": "Membuat relasi Many-to-Many secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Embeddable menandai kelas nilai (Value Object, contoh: Address) yang tidak memiliki ID sendiri, dan @Embedded diletakkan pada field entitas User sehingga kolom street, city, dan zip dipetakan langsung ke tabel 'users'.",
      "A": "Opsi A benar karena menjelaskan konsep JPA embeddable value types.",
      "B": "Opsi B salah karena bukan pemutar video.",
      "C": "Opsi C salah karena bukan multi-datasource router.",
      "D": "Opsi D salah karena relasi Many-to-Many memerlukan @ManyToMany."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-144",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Kapan Anda sebaiknya menggunakan Spring Data JPA Specifications (berbasis Criteria API)?",
    "options": {
      "A": "Ketika aplikasi membutuhkan query pencarian dinamis (dynamic query) dengan filter pencarian yang opsional dan dapat dikombinasikan secara fleksibel saat runtime",
      "B": "Ketika hanya perlu mengambil data berdasarkan ID tunggal",
      "C": "Ketika ingin membuat tabel database baru saat runtime",
      "D": "Ketika ingin mengganti database relational dengan MongoDB"
    },
    "answer": "A",
    "explanation": {
      "correct": "JpaSpecificationExecutor dan interface Specification<T> memungkinkan perakitan predikat query SQL secara dinamis menggunakan method and() dan or(), sangat cocok untuk layar filter pencarian kompleks.",
      "A": "Opsi A benar karena Specification dirancang khusus untuk kueri filter dinamis yang type-safe.",
      "B": "Opsi B salah karena pencarian ID cukup dengan findById().",
      "C": "Opsi C salah karena skema tabel dibuat oleh migration tool.",
      "D": "Opsi D salah karena Criteria API dikhususkan untuk SQL relasional."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-145",
    "level": "intermediate",
    "topic": "JPA & Hibernate",
    "questionType": "concept",
    "question": "Mengapa operasi 'findAll()' pada dataset jutaan baris tanpa pagination sangat berbahaya bagi aplikasi berbasis JPA?",
    "options": {
      "A": "Dapat menyebabkan OutOfMemoryError (OOM) di JVM karena seluruh jutaan baris akan diinstansiasi menjadi objek Java di memori heap bersamaan dan membebani First-Level Cache",
      "B": "Akan menghapus index tabel database secara permanen",
      "C": "Akan memicu deadlock seketika pada semua koneksi database lain",
      "D": "Compiler Java akan menolak untuk mengompilasi kode tersebut"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memuat jutaan baris sekaligus menciptakan jutaan instance objek entitas di Heap dan mengikatnya di First-Level Cache, menyebabkan GC Thrashing dan akhirnya OutOfMemoryError.",
      "A": "Opsi A benar karena konsumsi memori berlebih dari bulk fetch tanpa limit.",
      "B": "Opsi B salah karena operasi SELECT tidak memodifikasi struktur index tabel.",
      "C": "Opsi C salah karena pembacaan SELECT standar tidak mengunci tabel secara eksklusif.",
      "D": "Opsi D salah karena pemanggilan findAll() lolos kompilasi."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-146",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Apa perbedaan mendasar antara @Mock dan @Spy di framework Mockito?",
    "options": {
      "A": "@Mock membuat objek tiruan kosong di mana semua method mengembalikan nilai default (null/0) kecuali di-stub, sedangkan @Spy membungkus objek asli sehingga method nyata tetap dieksekusi kecuali di-stub secara spesifik",
      "B": "@Spy tidak bisa digunakan bersama method verify()",
      "C": "@Mock hanya bekerja untuk interface, sedangkan @Spy hanya untuk class final",
      "D": "Keduanya persis sama tanpa perbedaan fungsional"
    },
    "answer": "A",
    "explanation": {
      "correct": "@Mock adalah pure dummy mock object. @Spy (partial mock) menjalankan implementasi asli dari kelas tersebut, memungkinkan pengembang hanya memalsukan method-method tertentu saja.",
      "A": "Opsi A benar karena membedakan pure mock vs partial mock.",
      "B": "Opsi B salah karena pemanggilan method pada @Spy dapat diverifikasi dengan verify().",
      "C": "Opsi C salah karena class final memerlukan mock-maker-inline.",
      "D": "Opsi D salah karena perilaku eksekusi method aslinya berbeda secara fundamental."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-147",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Bagaimana cara menangkap (capture) argumen objek yang diteruskan ke method dependensi mock untuk diperiksa nilainya di Mockito?",
    "options": {
      "A": "Menggunakan ArgumentCaptor.forClass(...) bersamaan dengan method verify(mock).method(captor.capture())",
      "B": "Menulis System.out.println di dalam kelas mock",
      "C": "Menggunakan anotasi @CaptureParam",
      "D": "Membaca log file aplikasi secara manual"
    },
    "answer": "A",
    "explanation": {
      "correct": "ArgumentCaptor memungkinkan inspeksi mendalam terhadap objek argumen yang dilewatkan ke collaborator mock, sangat bermanfaat untuk memverifikasi isi DTO kompleks.",
      "A": "Opsi A benar karena ArgumentCaptor adalah API resmi Mockito untuk inspeksi argumen.",
      "B": "Opsi B salah karena kelas mock tidak memiliki print statement internal.",
      "C": "Opsi C salah karena bukan anotasi Mockito.",
      "D": "Opsi D salah karena verifikasi unit test tidak boleh mengandalkan pembacaan log manual."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-148",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Anotasi JUnit 5 manakah yang digunakan untuk menjalankan satu method pengujian berkali-kali dengan kumpulan data input parameter yang berbeda?",
    "options": {
      "A": "@ParameterizedTest bersama @ValueSource, @CsvSource, atau @MethodSource",
      "B": "@RepeatedTest",
      "C": "@LoopTest",
      "D": "@MultiInputTest"
    },
    "answer": "A",
    "explanation": {
      "correct": "@ParameterizedTest memungkinkan eksekusi test logic yang sama menggunakan berbagai variasi parameter input yang disediakan oleh data source seperti @CsvSource atau @MethodSource.",
      "A": "Opsi A benar karena merupakan fitur standar data-driven testing di JUnit 5.",
      "B": "Opsi B salah karena @RepeatedTest hanya mengulang test yang sama N kali tanpa parameter berbeda.",
      "C": "Opsi C salah karena bukan anotasi JUnit 5.",
      "D": "Opsi D salah karena bukan anotasi JUnit 5."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-149",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Ketika menguji REST API menggunakan MockMvc di Spring Boot, method apakah yang digunakan untuk memverifikasi nilai atribut field di dalam respons JSON?",
    "options": {
      "A": "andExpect(jsonPath(\"$.fieldName\").value(\"expectedValue\"))",
      "B": "andExpect(assertJson(\"fieldName == expectedValue\"))",
      "C": "andVerify(responseBody().contains(\"expectedValue\"))",
      "D": "andCheck(parse(\"fieldName\"))"
    },
    "answer": "A",
    "explanation": {
      "correct": "MockMvc ResultMatchers menyediakan jsonPath(...) yang mengevaluasi ekspresi JsonPath (misal: $.data.id) untuk memvalidasi isi field JSON secara terstruktur.",
      "A": "Opsi A benar karena jsonPath() adalah matcher resmi Spring MVC Test.",
      "B": "Opsi B salah karena bukan method Spring MVC Test.",
      "C": "Opsi C salah karena assert substring teks tidak mengevaluasi struktur JSON secara akurat.",
      "D": "Opsi D salah karena bukan sintaks MockMvc."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-150",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Anotasi apakah yang disediakan oleh Spring Boot Test untuk menguji repositori database secara terisolasi menggunakan in-memory database (seperti H2)?",
    "options": {
      "A": "@DataJpaTest",
      "B": "@WebMvcTest",
      "C": "@SpringBootTest",
      "D": "@RestClientTest"
    },
    "answer": "A",
    "explanation": {
      "correct": "@DataJpaTest mengkonfigurasi in-memory database, menonaktifkan full application context, dan hanya memuat komponen JPA (@Entity, @Repository, TestEntityManager), serta otomatis me-rollback transaksi di setiap akhir test.",
      "A": "Opsi A benar karena @DataJpaTest adalah slice test resmi untuk database repository.",
      "B": "Opsi B salah karena @WebMvcTest untuk lapisan controller.",
      "C": "Opsi C salah karena @SpringBootTest memuat seluruh aplikasi sehingga lebih lambat.",
      "D": "Opsi D salah karena @RestClientTest untuk REST client."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-151",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Di Mockito, apa perbedaan penting antara 'when(mock.method()).thenReturn(...)' dan 'doReturn(...).when(mock).method()' saat berhadapan dengan objek @Spy?",
    "options": {
      "A": "when(...).thenReturn(...) akan mengeksekusi method asli (real method) sekali saat evaluasi stubbing, sedangkan doReturn(...).when(...) tidak akan memanggil method asli",
      "B": "doReturn tidak mendukung tipe kembalian selain String",
      "C": "when(...).thenReturn tidak bisa digunakan untuk interface",
      "D": "Keduanya identik dalam segala kondisi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Saat menggunakan @Spy, pemanggilan when(spy.method()) memanggil method asli terlebih dahulu, yang dapat menimbulkan efek samping atau NPE. Sintaks doReturn().when(spy).method() menghindari pemanggilan method asli sama sekali.",
      "A": "Opsi A benar karena doReturn aman dari pemanggilan method riil yang tidak disengaja pada Spy.",
      "B": "Opsi B salah karena doReturn mendukung semua tipe kembalian generik.",
      "C": "Opsi C salah karena when/thenReturn bekerja pada interface mock biasa.",
      "D": "Opsi D salah karena dampaknya sangat krusial pada partial mocks."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-152",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Apa fungsi dari TestEntityManager yang disediakan oleh @DataJpaTest?",
    "options": {
      "A": "Menyediakan method helper EntityManager (seperti persistAndFlush, find, clear) yang dirancang khusus untuk mempermudah penyiapan fixture data pengujian database",
      "B": "Menggantikan peran driver database JDBC",
      "C": "Mengubah query SQL menjadi format JSON",
      "D": "Menghapus semua entitas secara otomatis sebelum startup"
    },
    "answer": "A",
    "explanation": {
      "correct": "TestEntityManager membungkus EntityManager standar untuk mempermudah manipulasi state database di dalam test tanpa bergantung pada method repositori yang sedang diuji.",
      "A": "Opsi A benar karena TestEntityManager menyederhanakan interaksi persistensi saat pengujian.",
      "B": "Opsi B salah karena bukan driver JDBC.",
      "C": "Opsi C salah karena bukan parser data.",
      "D": "Opsi D salah karena pembersihan data dilakukan melalui rollback transaksi otomatis."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-153",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Manakah cara yang benar untuk memverifikasi bahwa sebuah method pada mock objek TIDAK PERNAH dipanggil sama sekali selama pengujian di Mockito?",
    "options": {
      "A": "verify(mockObject, never()).methodName(any())",
      "B": "verify(mockObject, times(1)).methodName(any())",
      "C": "assertNotCalled(mockObject.methodName())",
      "D": "mockObject.verifyZeroInteractions()"
    },
    "answer": "A",
    "explanation": {
      "correct": "verify(mock, never()).methodName() (atau verifyNoInteractions(mock)) memverifikasi bahwa method tersebut tidak pernah dieksekusi dengan argumen yang ditentukan.",
      "A": "Opsi A benar karena verify(..., never()) adalah ekspresi resmi Mockito untuk nol eksekusi.",
      "B": "Opsi B salah karena times(1) memverifikasi dipanggil tepat 1 kali.",
      "C": "Opsi C salah karena bukan method Mockito.",
      "D": "Opsi D salah karena verifyNoInteractions adalah method statis Mockito.verifyNoInteractions(mock)."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-154",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Apa tujuan dari prinsip pengujian FIRST (Fast, Independent, Repeatable, Self-Validating, Timely)?",
    "options": {
      "A": "Sebagai panduan kualitas agar unit test dapat berjalan cepat, terisolasi antar test, konsisten di semua lingkungan, memiliki hasil lolos/gagal otomatis, dan ditulis tepat waktu",
      "B": "Sebagai panduan memilih framework database",
      "C": "Sebagai aturan penamaan nama file Java",
      "D": "Sebagai panduan konfigurasi jaringan Wi-Fi server"
    },
    "answer": "A",
    "explanation": {
      "correct": "FIRST adalah akronim Clean Code: Fast (cepat), Independent (terisolasi), Repeatable (konsisten), Self-validating (output boolean pass/fail otomatis), dan Timely (ditulis tepat waktu).",
      "A": "Opsi A benar karena merinci kelima prinsip FIRST.",
      "B": "Opsi B salah karena bukan untuk database.",
      "C": "Opsi C salah karena bukan aturan penamaan file.",
      "D": "Opsi D salah karena bukan protokol jaringan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-155",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Anotasi JUnit 5 manakah yang digunakan untuk menonaktifkan atau melewati (skip) sebuah test case sementara waktu?",
    "options": {
      "A": "@Disabled",
      "B": "@Ignore",
      "C": "@Skip",
      "D": "@Bypass"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di JUnit 5, anotasi @Disabled digunakan untuk mengabaikan eksekusi test. Anotasi @Ignore adalah anotasi versi lama di JUnit 4.",
      "A": "Opsi A benar karena @Disabled adalah anotasi resmi JUnit 5.",
      "B": "Opsi B salah karena @Ignore adalah anotasi JUnit 4.",
      "C": "Opsi C salah karena bukan anotasi JUnit standar.",
      "D": "Opsi D salah karena bukan anotasi JUnit."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-156",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Manakah assertion JUnit 5 yang digunakan untuk memverifikasi bahwa potongan kode tertentu MELEMPARKAN tipe exception yang diharapkan?",
    "options": {
      "A": "assertThrows(ExpectedException.class, () -> { ... })",
      "B": "assertCatch(ExpectedException.class, ...)",
      "C": "verifyException(ExpectedException.class, ...)",
      "D": "checkThrows(ExpectedException.class, ...)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Assertions.assertThrows() mengeksekusi lambda Executable dan memastikan bahwa exception dengan tipe yang ditentukan dilemparkan.",
      "A": "Opsi A benar karena assertThrows adalah method standar JUnit 5 untuk exception testing.",
      "B": "Opsi B salah karena bukan method JUnit.",
      "C": "Opsi C salah karena bukan method JUnit.",
      "D": "Opsi D salah karena bukan method JUnit."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-157",
    "level": "intermediate",
    "topic": "Testing",
    "questionType": "concept",
    "question": "Apa fungsi dari @MockBean di Spring Boot Test?",
    "options": {
      "A": "Membuat objek mock Mockito dan secara otomatis mendaftarkannya ke dalam ApplicationContext Spring, menggantikan bean asli yang bertipe sama",
      "B": "Membuat koneksi database tiruan di memori",
      "C": "Menyimpan data mock ke file teks",
      "D": "Mengubah controller menjadi asynchronous"
    },
    "answer": "A",
    "explanation": {
      "correct": "@MockBean menambahkan mock Mockito langsung ke dalam Spring ApplicationContext, sangat ideal untuk integration test di mana kita ingin memalsukan dependensi eksternal seperti payment gateway.",
      "A": "Opsi A benar karena @MockBean mengintegrasikan mock Mockito ke Spring IoC container.",
      "B": "Opsi B salah karena @MockBean tidak terbatas pada database.",
      "C": "Opsi C salah karena tidak menyimpan ke disk.",
      "D": "Opsi D salah karena tidak mengubah controller menjadi async."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-158",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Bagaimana penerapan prinsip Interface Segregation Principle (ISP) dalam arsitektur software?",
    "options": {
      "A": "Memecah interface besar yang gemuk (fat interface) menjadi banyak interface kecil yang spesifik, sehingga klien tidak dipaksa bergantung pada method yang tidak mereka butuhkan",
      "B": "Menggabungkan semua interface menjadi satu interface umum agar mudah ditemukan",
      "C": "Menghapus semua interface dan hanya menggunakan abstract class",
      "D": "Membuat interface yang memiliki minimal 50 method"
    },
    "answer": "A",
    "explanation": {
      "correct": "ISP menekankan bahwa interface yang terfokus dan ramping jauh lebih baik daripada satu interface monolitik yang membebani kelas pengimplementasi dengan method kosong atau UnsupportedOperationException.",
      "A": "Opsi A benar karena mendefinisikan esensi dari ISP.",
      "B": "Opsi B salah karena itu adalah antipattern Fat Interface.",
      "C": "Opsi C salah karena interface menyediakan decoupling yang lebih fleksibel dibanding abstract class.",
      "D": "Opsi D salah karena method yang terlalu banyak adalah pelanggaran berat ISP."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-159",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Bagaimana Dependency Inversion Principle (DIP) diterapkan secara nyata dalam pengembangan aplikasi Spring Boot?",
    "options": {
      "A": "Lapisan Service tingkat tinggi bergantung pada antarmuka (interface) Repositori, bukan pada kelas implementasi persistensi konkret, dan Spring IoC bertindak menginjeksi implementasinya",
      "B": "Service menginstansiasi repositori konkret menggunakan operator 'new'",
      "C": "Controller memanggil query SQL database secara langsung",
      "D": "Semua kelas dijadikan static method"
    },
    "answer": "A",
    "explanation": {
      "correct": "DIP menyatakan modul tingkat tinggi tidak boleh bergantung pada modul tingkat rendah; keduanya harus bergantung pada abstraksi (interface). Spring DI adalah realisasi nyata dari prinsip ini.",
      "A": "Opsi A benar karena memisahkan ketergantungan modul melalui interface abstraksi.",
      "B": "Opsi B salah karena menginstansiasi dengan 'new' mengunci dependensi ke kelas konkret.",
      "C": "Opsi C salah karena melanggar layered architecture.",
      "D": "Opsi D salah karena static method mempersulit decoupling dan testing."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-160",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Code smell apakah yang terjadi ketika suatu method di kelas A lebih sering mengakses data dan method milik kelas B daripada datanya sendiri?",
    "options": {
      "A": "Feature Envy",
      "B": "Data Clumps",
      "C": "Dead Code",
      "D": "Primitive Obsession"
    },
    "answer": "A",
    "explanation": {
      "correct": "Feature Envy adalah code smell klasik di mana suatu method lebih sering menggunakan lingkungan data kelas lain. Solusinya adalah Move Method ke kelas yang datanya paling banyak digunakan.",
      "A": "Opsi A benar karena mendefinisikan code smell Feature Envy.",
      "B": "Opsi B salah karena Data Clumps adalah kumpulan variabel yang selalu muncul bersamaan.",
      "C": "Opsi C salah karena Dead Code adalah kode yang tidak pernah dieksekusi.",
      "D": "Opsi D salah karena Primitive Obsession adalah kebiasaan memakai tipe primitif untuk konsep domain kompleks."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-161",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Teknik refactoring apakah yang paling tepat untuk menggantikan serangkaian percabangan 'switch-case' atau 'if-else' panjang yang memeriksa tipe objek?",
    "options": {
      "A": "Replace Conditional with Polymorphism (menggunakan Strategy Pattern atau subclass)",
      "B": "Menambah lebih banyak blok if-else",
      "C": "Menulis kode dalam satu baris panjang menggunakan ternary operator",
      "D": "Menghapus validasi tipe sama sekali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Percabangan kondisional berbasis tipe melanggar Open/Closed Principle. Menggantinya dengan Polymorphism memungkinkan penambahan perilaku baru tanpa mengubah kode klien yang ada.",
      "A": "Opsi A benar karena refactoring ke polymorphism mematuhi OCP.",
      "B": "Opsi B salah karena memperparah kompleksitas siklomatis.",
      "C": "Opsi C salah karena ternary bertingkat merusak keterbacaan.",
      "D": "Opsi D salah karena menimbulkan bug runtime."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-162",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Apa yang dimaksud dengan code smell 'Primitive Obsession'?",
    "options": {
      "A": "Penggunaan tipe data primitif bawaan (seperti String, int) secara berlebihan untuk merepresentasikan konsep domain spesifik (seperti Money, PhoneNumber, Email) alih-alih membuat Value Object",
      "B": "Ketakutan menggunakan tipe data primitif di dalam perulangan for loop",
      "C": "Menggunakan database NoSQL untuk data relasional",
      "D": "Menggunakan versi Java lama"
    },
    "answer": "A",
    "explanation": {
      "correct": "Primitive Obsession terjadi ketika pengembang enggan membuat kelas kecil untuk konsep domain (contoh: mewakili Email sebagai String biasa sehingga validasi regex diulang-ulang di mana-mana). Mengubahnya menjadi Value Object membungkus validasi dan logika domain secara aman.",
      "A": "Opsi A benar karena mendefinisikan Primitive Obsession dalam Domain-Driven Design / Clean Code.",
      "B": "Opsi B salah karena bukan masalah loop.",
      "C": "Opsi C salah karena bukan perbandingan tipe database.",
      "D": "Opsi D salah karena bukan tentang versi JDK."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-163",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Menurut Clean Code oleh Robert C. Martin, berapa jumlah parameter ideal yang sebaiknya dimiliki oleh sebuah method?",
    "options": {
      "A": "Nol (niladic) atau satu (monadic), dan maksimal dua (dyadic); jika parameter berjumlah 3 atau lebih, sebaiknya dibungkus ke dalam objek parameter khusus",
      "B": "Minimal 7 parameter agar fleksibel",
      "C": "Selalu tepat 10 parameter",
      "D": "Sebanyak mungkin agar tidak perlu membuat class baru"
    },
    "answer": "A",
    "explanation": {
      "correct": "Buku Clean Code menegaskan bahwa method dengan banyak argumen sulit dibaca dan sangat sulit diuji unit test-nya karena kombinasi kasus input yang meledak. Tiga parameter atau lebih adalah sinyal kuat untuk membuat kelas objek parameter.",
      "A": "Opsi A benar karena merefleksikan anjuran resmi Clean Code.",
      "B": "Opsi B salah karena parameter terlalu banyak adalah code smell.",
      "C": "Opsi C salah karena menyulitkan pemeliharaan.",
      "D": "Opsi D salah karena menyembunyikan desain yang buruk."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-164",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Apa arti dari aturan 'The Boy Scout Rule' dalam pemeliharaan kode perangkat lunak?",
    "options": {
      "A": "Tinggalkan perkemahan (kode yang sedang Anda kerjakan) dalam kondisi selalu lebih bersih daripada saat Anda pertama kali menemukannya",
      "B": "Jangan pernah mengubah kode lama yang dibuat oleh developer senior",
      "C": "Semua developer wajib mengikuti pelatihan pramuka tahunan",
      "D": "Hanya menulis kode baru tanpa pernah merefactor kode lama"
    },
    "answer": "A",
    "explanation": {
      "correct": "The Boy Scout Rule mengajarkan perbaikan kecil berkelanjutan: jika setiap developer merapikan kode usang saat mengedit file, kualitas codebase akan terus meningkat dan mencegah akumulasi Technical Debt.",
      "A": "Opsi A benar karena filosofi pencegahan degradasi software secara gradual.",
      "B": "Opsi B salah karena kode lama yang buruk harus diperbaiki secara bertanggung jawab.",
      "C": "Opsi C salah karena bukan kegiatan fisik di luar ruangan.",
      "D": "Opsi D salah karena membiarkan technical debt membusuk."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-165",
    "level": "intermediate",
    "topic": "Clean Code & SOLID",
    "questionType": "concept",
    "question": "Kapan suatu method sebaiknya dinyatakan sebagai 'Side-Effect Free' (Pure Function)?",
    "options": {
      "A": "Ketika method hanya menghasilkan output berdasarkan parameter input-nya tanpa mengubah state objek luar, memodifikasi argumen, atau melakukan I/O eksternal",
      "B": "Ketika method tidak menghasilkan return value apapun (void)",
      "C": "Ketika method selalu mengembalikan nilai null",
      "D": "Ketika method berjalan di thread terpisah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi murni (Pure Function) sangat mudah diprediksi, di-cache, di-parallel-kan, dan diuji karena input yang sama akan selalu menghasilkan output yang sama tanpa efek samping.",
      "A": "Opsi A benar karena mendefinisikan karakteristik fungsi tanpa efek samping.",
      "B": "Opsi B salah karena method void hampir selalu mengandalkan efek samping (mutasi state).",
      "C": "Opsi C salah karena mengembalikan null bukan kriteria fungsi murni.",
      "D": "Opsi D salah karena eksekusi thread tidak menentukan status kebebasan efek samping."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-166",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Diberikan indeks komposit pada kolom: CREATE INDEX idx_user ON users(last_name, first_name, age);. Berdasarkan Leftmost Prefix Rule, query manakah yang TIDAK BISA memanfaatkan indeks ini secara efisien?",
    "options": {
      "A": "SELECT * FROM users WHERE first_name = 'Budi' AND age = 25;",
      "B": "SELECT * FROM users WHERE last_name = 'Pratama';",
      "C": "SELECT * FROM users WHERE last_name = 'Pratama' AND first_name = 'Budi';",
      "D": "SELECT * FROM users WHERE last_name = 'Pratama' AND first_name = 'Budi' AND age = 25;"
    },
    "answer": "A",
    "explanation": {
      "correct": "B-Tree Composite Index mengharuskan pencarian dimulai dari kolom paling kiri (leftmost prefix). Karena query pada opsi A melewatkan kolom 'last_name' dan langsung mencari 'first_name', database harus melakukan full index/table scan.",
      "A": "Opsi A benar karena tidak menyertakan kolom awalan paling kiri (last_name).",
      "B": "Opsi B salah karena menyertakan prefix kolom pertama (last_name).",
      "C": "Opsi C salah karena menyertakan dua kolom prefix paling kiri.",
      "D": "Opsi D salah karena mencakup ketiga kolom indeks secara berurutan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-167",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Apakah yang dimaksud dengan 'Covering Index' dalam optimasi query SQL?",
    "options": {
      "A": "Indeks yang mencakup semua kolom yang diminta oleh query SELECT (baik klausa WHERE maupun SELECT list), sehingga database tidak perlu melakukan lookup tambahan ke tabel data utama (zero heap lookup)",
      "B": "Indeks yang otomatis menutupi dan menyembunyikan data sensitif",
      "C": "Indeks yang mencakup seluruh tabel database di server",
      "D": "Indeks yang hanya bekerja saat malam hari"
    },
    "answer": "A",
    "explanation": {
      "correct": "Covering Index memenuhi kueri sepenuhnya dari daun pohon B-Tree indeks tanpa perlu mengunjungi baris data di tabel utama (Table Lookup), menghasilkan I/O disk yang minimal dan performa kueri yang sangat cepat.",
      "A": "Opsi A benar karena mendefinisikan Covering Index secara teknis.",
      "B": "Opsi B salah karena bukan mekanisme enkripsi atau masking data.",
      "C": "Opsi C salah karena indeks dibuat per kolom tertentu, bukan seluruh isi tabel.",
      "D": "Opsi D salah karena indeks aktif terus-menerus."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-168",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Fitur SQL apakah yang digunakan untuk mendefinisikan Common Table Expression (CTE) yang memudahkan penulisan query hierarkis dan subquery modular?",
    "options": {
      "A": "Klausa 'WITH cte_name AS (...)'",
      "B": "Klausa 'CREATE VIEW TEMPORARY'",
      "C": "Klausa 'DECLARE TABLE'",
      "D": "Klausa 'FOR EACH ROW'"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa 'WITH' mendefinisikan Common Table Expression (CTE), yaitu result set sementara bernama yang dapat dirujuk berulang kali di dalam query SELECT, INSERT, UPDATE, atau DELETE utama, serta mendukung kueri rekursif (WITH RECURSIVE).",
      "A": "Opsi A benar karena WITH adalah sintaks standar ANSI SQL untuk CTE.",
      "B": "Opsi B salah karena CREATE VIEW membuat objek skema persisten atau sesi.",
      "C": "Opsi C salah karena bukan sintaks standar CTE.",
      "D": "Opsi D salah karena klausa FOR EACH ROW digunakan pada database trigger."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-169",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Window function SQL manakah yang memberikan nomor urut unik berurutan (1, 2, 3...) untuk setiap baris di dalam partisi tanpa ada angka yang sama meskipun nilainya kembar?",
    "options": {
      "A": "ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)",
      "B": "RANK() OVER (...)",
      "C": "DENSE_RANK() OVER (...)",
      "D": "COUNT() OVER (...)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ROW_NUMBER() memberikan nomor urut unik inkremental tanpa celah dan tanpa angka duplikat. Sebaliknya, RANK() memberikan peringkat yang sama untuk nilai kembar dan melompati nomor berikutnya, sedangkan DENSE_RANK() tidak melompati nomor.",
      "A": "Opsi A benar karena ROW_NUMBER selalu menghasilkan urutan strictly incrementing.",
      "B": "Opsi B salah karena RANK menghasilkan nilai kembar dan meninggalkan celah urutan.",
      "C": "Opsi C salah karena DENSE_RANK menghasilkan nilai kembar untuk baris dengan nilai sama.",
      "D": "Opsi D salah karena COUNT menghitung jumlah rekaman total."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-170",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Apa tujuan utama dari proses Normalisasi Database hingga Bentuk Normal Ketiga (3NF)?",
    "options": {
      "A": "Menghilangkan redundansi data dan mencegah anomali insersi, pembaruan, serta penghapusan dengan memastikan setiap kolom non-key bergantung penuh hanya pada primary key (tidak ada ketergantungan transitif)",
      "B": "Membuat database berjalan tanpa perlu menggunakan primary key",
      "C": "Menggabungkan semua data ke dalam satu tabel raksasa untuk mempercepat query",
      "D": "Mengenkripsi seluruh data agar memenuhi regulasi GDPR"
    },
    "answer": "A",
    "explanation": {
      "correct": "Normalisasi 3NF mengharuskan tabel sudah berada dalam 2NF dan tidak memiliki ketergantungan transitif, sehingga integritas data terlindungi dari anomali modifikasi.",
      "A": "Opsi A benar karena merangkum definisi dan manfaat utama bentuk 3NF.",
      "B": "Opsi B salah karena primary key adalah prasyarat mutlak normalisasi relasional.",
      "C": "Opsi C salah karena penggabungan ke satu tabel adalah denormalisasi.",
      "D": "Opsi D salah karena bukan proses kriptografi keamanan."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-171",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Perintah SQL apakah yang digunakan untuk melihat rencana eksekusi query (Execution Plan) dari database engine guna menganalisis apakah query menggunakan index atau full table scan?",
    "options": {
      "A": "EXPLAIN atau EXPLAIN ANALYZE",
      "B": "INSPECT QUERY",
      "C": "SHOW PERFORMANCE",
      "D": "TRACE QUERY"
    },
    "answer": "A",
    "explanation": {
      "correct": "EXPLAIN menampilkan estimasi rencana eksekusi kueri oleh Query Optimizer. EXPLAIN ANALYZE mengeksekusi kueri nyata dan menampilkan waktu aktual serta baris yang diproses di setiap node.",
      "A": "Opsi A benar karena EXPLAIN adalah perintah standar profiling query database.",
      "B": "Opsi B salah karena bukan sintaks SQL.",
      "C": "Opsi C salah karena bukan sintaks SQL standar.",
      "D": "Opsi D salah karena bukan sintaks SQL standar."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-172",
    "level": "intermediate",
    "topic": "SQL & Database",
    "questionType": "concept",
    "question": "Dalam manajemen koneksi database di aplikasi Spring Boot, mengapa kita menggunakan Connection Pool seperti HikariCP?",
    "options": {
      "A": "Membuka dan menutup koneksi fisik TCP ke database sangat mahal; connection pool menjaga kumpulan koneksi tetap terbuka siap pakai sehingga latency request berkurang drastis",
      "B": "Menghapus query SQL yang berjalan terlalu lambat",
      "C": "Mengubah query SQL menjadi format JSON",
      "D": "Menjadikan database hanya bisa diakses oleh satu pengguna dalam satu waktu"
    },
    "answer": "A",
    "explanation": {
      "correct": "HikariCP mempertahankan pool koneksi database aktif yang siap dipinjamkan ke thread pekerja, menghindari overhead berat pembuatan koneksi TCP soket baru pada setiap HTTP request.",
      "A": "Opsi A benar karena meminimalisasi biaya operasional pembukaan koneksi soket jaringan database.",
      "B": "Opsi B salah karena connection pool tidak membatalkan kueri secara otomatis tanpa setting timeout.",
      "C": "Opsi C salah karena connection pool tidak melakukan translasi format data.",
      "D": "Opsi D salah karena koneksi pool dirancang khusus untuk concurrent multi-user."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-173",
    "level": "intermediate",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Dalam arsitektur Spring Security modern (Spring Security 6 / Spring Boot 3+), bagaimanakah cara mengkonfigurasi aturan otorisasi HTTP request?",
    "options": {
      "A": "Mendefinisikan bean SecurityFilterChain dan menggunakan metode HttpSecurity.authorizeHttpRequests(auth -> auth...)",
      "B": "Meng-extend kelas WebSecurityConfigurerAdapter yang sudah deprecated",
      "C": "Menulis aturan otorisasi di dalam file HTML frontend",
      "D": "Menggunakan tag <security-rules> di web.xml"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mulai Spring Security 5.7 dan 6 (Spring Boot 3), WebSecurityConfigurerAdapter telah dihapus. Konfigurasi modern berbasis komponen bean menggunakan SecurityFilterChain dengan DSL lambda authorizeHttpRequests.",
      "A": "Opsi A benar karena merupakan standar konfigurasi SecurityFilterChain di Spring Boot 3.",
      "B": "Opsi B salah karena WebSecurityConfigurerAdapter sudah usang (deprecated & removed).",
      "C": "Opsi C salah karena keamanan sisi frontend mudah dibobol dan otorisasi wajib ditegakkan di backend.",
      "D": "Opsi D salah karena XML-based security configuration sudah ditinggalkan di ekosistem modern."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-174",
    "level": "intermediate",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Kelas filter manakah yang paling ideal di-extend untuk mengimplementasikan filter validasi token JWT kustom yang hanya dieksekusi tepat satu kali per HTTP request?",
    "options": {
      "A": "OncePerRequestFilter",
      "B": "GenericFilterBean",
      "C": "ServletFilter",
      "D": "BasicAuthenticationFilter"
    },
    "answer": "A",
    "explanation": {
      "correct": "org.springframework.web.filter.OncePerRequestFilter menjamin method doFilterInternal() hanya dipanggil tepat satu kali per request thread, aman dari multiple dispatch.",
      "A": "Opsi A benar karena OncePerRequestFilter adalah basis terstandar untuk filter JWT.",
      "B": "Opsi B salah karena GenericFilterBean dapat terpanggil berulang jika ada request internal forwarding.",
      "C": "Opsi C salah karena ServletFilter adalah interface generic dasar Java EE.",
      "D": "Opsi D salah karena BasicAuthenticationFilter dikhususkan untuk HTTP Basic Authentication."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-175",
    "level": "intermediate",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Di manakah informasi autentikasi pengguna yang sedang aktif (seperti Principal dan GrantedAuthorities) disimpan di dalam thread yang sedang berjalan di Spring Security?",
    "options": {
      "A": "SecurityContextHolder.getContext().getAuthentication()",
      "B": "HttpSession.getAttribute(\"USER_ROLE\")",
      "C": "System.getProperty(\"CURRENT_USER\")",
      "D": "Thread.currentThread().getName()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Security menyimpan detail autentikasi di SecurityContext, yang diakses melalui SecurityContextHolder (menggunakan ThreadLocal untuk mengikat SecurityContext ke thread pemanggil).",
      "A": "Opsi A benar karena SecurityContextHolder adalah penyimpan state autentikasi resmi di Spring Security.",
      "B": "Opsi B salah karena dalam API stateless berbasis token (JWT), session HTTP tidak digunakan.",
      "C": "Opsi C salah karena System properties bersifat global JVM dan bukan per-request user.",
      "D": "Opsi D salah karena nama thread hanya berupa string nama teknis worker thread."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-176",
    "level": "intermediate",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Mengapa arsitektur REST API stateless berbasis JWT biasanya menggunakan pasangan Access Token dan Refresh Token?",
    "options": {
      "A": "Access Token berumur pendek (misal 15 menit) untuk membatasi jendela risiko jika token bocor, sedangkan Refresh Token berumur lebih panjang (misal 7 hari) disimpan aman untuk mendapatkan Access Token baru tanpa meminta login ulang",
      "B": "Access Token hanya berisi huruf, sedangkan Refresh Token hanya berisi angka",
      "C": "Refresh Token digunakan untuk mengenkripsi database server",
      "D": "Access Token dikirim ke database, sedangkan Refresh Token dikirim ke browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "JWT stateless tidak dapat dicabut (revoked) secara instan tanpa state database blacklist. Dengan membuat Access Token berumur pendek, pencurian token hanya berdampak sementara. Refresh Token memungkinkan pembaruan token secara aman dan dapat dicabut sewaktu-waktu di database.",
      "A": "Opsi A benar karena menjelaskan strategi mitigasi risiko keamanan JWT.",
      "B": "Opsi B salah karena keduanya adalah string token JWT Base64URL standar.",
      "C": "Opsi C salah karena token tidak mengenkripsi database.",
      "D": "Opsi D salah karena keduanya disimpan dan dikirim oleh klien sesuai fungsi alurnya."
    },
    "jobId": "junior-java"
  },
  {
    "id": "JI-177",
    "level": "intermediate",
    "topic": "Spring Security & JWT",
    "questionType": "concept",
    "question": "Apa perbedaan konseptual antara 'hasRole('ADMIN')' dan 'hasAuthority('ADMIN')' di Spring Security?",
    "options": {
      "A": "hasRole('ADMIN') secara otomatis memeriksa authority dengan prefix bawaan 'ROLE_' (mencari 'ROLE_ADMIN'), sedangkan hasAuthority('ADMIN') memeriksa string izin secara presisi tanpa prefix ('ADMIN')",
      "B": "hasRole hanya untuk aplikasi web monolitis, sedangkan hasAuthority untuk microservices",
      "C": "hasAuthority hanya bisa digunakan pada method yang bersifat static",
      "D": "Keduanya persis sama tanpa perbedaan implementasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spring Security secara konvensional menambahkan prefix 'ROLE_' pada pemeriksaan role. Jadi hasRole(\"USER\") secara internal mengevaluasi hasAuthority(\"ROLE_USER\"). hasAuthority() digunakan jika nama izin berbutir halus tanpa prefix (seperti 'READ_PRIVILEGE').",
      "A": "Opsi A benar karena menjelaskan konvensi prefix 'ROLE_' pada Spring Security.",
      "B": "Opsi B salah karena keduanya dapat digunakan di semua arsitektur aplikasi.",
      "C": "Opsi C salah karena tidak ada batasan modifier method.",
      "D": "Opsi D salah karena prefix 'ROLE_' membuat pencocokan string berbeda."
    },
    "jobId": "junior-java"
  }
];
