import { Question } from './types';

export const GIS_QUESTIONS: Question[] = [
  {
    "id": "GIS-001",
    "level": "beginner",
    "topic": "JavaScript & GeoJSON",
    "questionType": "output",
    "question": "Apa output dari pembacaan koordinat GeoJSON Point berikut?\n\n```javascript\nconst point = {\n  type: \"Feature\",\n  geometry: {\n    type: \"Point\",\n    coordinates: [106.8456, -6.2088]\n  }\n};\nconst [lng, lat] = point.geometry.coordinates;\nconsole.log(`Lat: ${lat}, Lng: ${lng}`);\n```",
    "code": "const point = {\n  type: \"Feature\",\n  geometry: {\n    type: \"Point\",\n    coordinates: [106.8456, -6.2088]\n  }\n};\nconst [lng, lat] = point.geometry.coordinates;\nconsole.log(`Lat: ${lat}, Lng: ${lng}`);",
    "options": {
      "A": "Lat: -6.2088, Lng: 106.8456",
      "B": "Lat: 106.8456, Lng: -6.2088",
      "C": "Lat: undefined, Lng: undefined",
      "D": "TypeError: Cannot read properties"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar GeoJSON (RFC 7946) mewajibkan urutan koordinat [longitude, latitude]. Dengan destrukturisasi array [lng, lat], elemen pertama (106.8456) adalah longitude dan elemen kedua (-6.2088) adalah latitude.",
      "A": "Benar. coordinates[0] adalah longitude (106.8456) dan coordinates[1] adalah latitude (-6.2088).",
      "B": "Salah. Tertukar antara latitude dan longitude.",
      "C": "Salah. Destrukturisasi array bekerja normal pada properti coordinates.",
      "D": "Salah. Objek point dan geometry valid dan tidak melempar TypeError."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-002",
    "level": "beginner",
    "topic": "JavaScript Async",
    "questionType": "output",
    "question": "Apa urutan pencetakan log saat memuat data GeoJSON secara asynchronous?\n\n```javascript\nconsole.log(\"Start\");\nfetch(\"/api/points.geojson\")\n  .then(() => console.log(\"Data Loaded\"));\nconsole.log(\"End\");\n```",
    "code": "console.log(\"Start\");\nfetch(\"/api/points.geojson\")\n  .then(() => console.log(\"Data Loaded\"));\nconsole.log(\"End\");",
    "options": {
      "A": "Start -> End -> Data Loaded",
      "B": "Start -> Data Loaded -> End",
      "C": "Data Loaded -> Start -> End",
      "D": "End -> Start -> Data Loaded"
    },
    "answer": "A",
    "explanation": {
      "correct": "fetch() bersifat asynchronous dan callback Promise .then() dimasukkan ke microtask queue, sehingga dieksekusi setelah semua kode synchronous (Start dan End) selesai dieksekusi.",
      "A": "Benar. Kode synchronous dieksekusi tuntas di Call Stack sebelum event loop mengambil callback Promise.",
      "B": "Salah. fetch tidak memblokir thread JavaScript sehingga 'End' dicetak sebelum callback selesai.",
      "C": "Salah. Operasi I/O jaringan tidak mungkin mendahului eksekusi baris synchronous pertama.",
      "D": "Salah. 'Start' dieksekusi pertama kali dari atas ke bawah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-003",
    "level": "beginner",
    "topic": "JavaScript Array Methods",
    "questionType": "output",
    "question": "Berapa jumlah titik yang dihasilkan setelah filter koordinat Indonesia berikut?\n\n```javascript\nconst points = [\n  { name: \"Jakarta\", lat: -6.2, lng: 106.8 },\n  { name: \"Tokyo\", lat: 35.6, lng: 139.6 },\n  { name: \"Surabaya\", lat: -7.2, lng: 112.7 }\n];\nconst indo = points.filter(p => p.lat < 0);\nconsole.log(indo.length);\n```",
    "code": "const points = [\n  { name: \"Jakarta\", lat: -6.2, lng: 106.8 },\n  { name: \"Tokyo\", lat: 35.6, lng: 139.6 },\n  { name: \"Surabaya\", lat: -7.2, lng: 112.7 }\n];\nconst indo = points.filter(p => p.lat < 0);\nconsole.log(indo.length);",
    "options": {
      "A": "2",
      "B": "1",
      "C": "3",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Filter mencari titik dengan latitude negatif (di belahan bumi selatan). Jakarta (-6.2) dan Surabaya (-7.2) memiliki lat < 0, sedangkan Tokyo (35.6) bernilai positif. Total ada 2 titik.",
      "A": "Benar. Jakarta dan Surabaya memenuhi syarat lat < 0.",
      "B": "Salah. Terdapat 2 titik dengan latitude negatif, bukan hanya 1.",
      "C": "Salah. Tokyo memiliki latitude positif (belahan bumi utara) sehingga disaring keluar.",
      "D": "Salah. Kondisi filter terpenuhi untuk 2 kota."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-004",
    "level": "beginner",
    "topic": "Spatial SQL",
    "questionType": "output",
    "question": "Apa output dari fungsi PostGIS ST_AsText berikut?\n\n```sql\nSELECT ST_AsText(ST_MakePoint(106.8456, -6.2088));\n```",
    "code": "SELECT ST_AsText(ST_MakePoint(106.8456, -6.2088));",
    "options": {
      "A": "POINT(106.8456 -6.2088)",
      "B": "POINT(-6.2088 106.8456)",
      "C": "POINT(106.8456, -6.2088)",
      "D": "GEOMETRYCOLLECTION EMPTY"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_MakePoint(X, Y) menerima (Longitude, Latitude). Format WKT (Well-Known Text) memisahkan koordinat X dan Y dengan spasi, tanpa tanda koma di antara keduanya: 'POINT(X Y)'.",
      "A": "Benar. Format WKT Point memisahkan nilai X dan Y dengan spasi tunggal.",
      "B": "Salah. Urutan parameter ST_MakePoint adalah X (lon) lalu Y (lat).",
      "C": "Salah. WKT tidak menggunakan tanda koma di antara koordinat X dan Y dalam satu titik.",
      "D": "Salah. ST_MakePoint menghasilkan geometri POINT yang valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-005",
    "level": "beginner",
    "topic": "JavaScript GeoJSON",
    "questionType": "output",
    "question": "Apa nilai yang dikembalikan oleh ekspresi pengecekan tipe geometry berikut?\n\n```javascript\nconst geojson = {\n  type: \"FeatureCollection\",\n  features: [\n    { type: \"Feature\", geometry: { type: \"Polygon\", coordinates: [] } }\n  ]\n};\nconsole.log(geojson.features[0].geometry.type);\n```",
    "code": "const geojson = {\n  type: \"FeatureCollection\",\n  features: [\n    { type: \"Feature\", geometry: { type: \"Polygon\", coordinates: [] } }\n  ]\n};\nconsole.log(geojson.features[0].geometry.type);",
    "options": {
      "A": "Polygon",
      "B": "FeatureCollection",
      "C": "Feature",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "geojson.features[0] mengakses feature pertama, dan .geometry.type mengembalikan string tipe geometrinya yaitu 'Polygon'.",
      "A": "Benar. Properti type dari objek geometry berisi string 'Polygon'.",
      "B": "Salah. FeatureCollection adalah tipe dari root object GeoJSON.",
      "C": "Salah. Feature adalah tipe dari elemen pembungkus fitur.",
      "D": "Salah. Properti geometry dan type terdefinisi dengan jelas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-006",
    "level": "beginner",
    "topic": "JavaScript Math & Distance",
    "questionType": "output",
    "question": "Berapa jarak Euclidean kuadrat sederhana antara dua titik 2D berikut?\n\n```javascript\nconst dx = 4 - 1;\nconst dy = 7 - 3;\nconst distSq = dx * dx + dy * dy;\nconsole.log(distSq);\n```",
    "code": "const dx = 4 - 1;\nconst dy = 7 - 3;\nconst distSq = dx * dx + dy * dy;\nconsole.log(distSq);",
    "options": {
      "A": "25",
      "B": "5",
      "C": "7",
      "D": "12"
    },
    "answer": "A",
    "explanation": {
      "correct": "dx = 4 - 1 = 3. dy = 7 - 3 = 4. distSq = (3 * 3) + (4 * 4) = 9 + 16 = 25. (Jarak akarnya adalah 5).",
      "A": "Benar. Kuadrat jarak adalah 3^2 + 4^2 = 25.",
      "B": "Salah. 5 adalah akar kuadrat dari jarak (Math.sqrt(distSq)), bukan distSq itu sendiri.",
      "C": "Salah. 7 adalah hasil penjumlahan dx + dy (3 + 4).",
      "D": "Salah. 12 adalah hasil perkalian dx * dy (3 * 4)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-007",
    "level": "beginner",
    "topic": "Spatial SQL",
    "questionType": "output",
    "question": "Apa nilai SRID yang dikembalikan oleh kueri PostGIS berikut jika geometri dibuat tanpa SRID?\n\n```sql\nSELECT ST_SRID(ST_GeomFromText('POINT(106.8 -6.2)'));\n```",
    "code": "SELECT ST_SRID(ST_GeomFromText('POINT(106.8 -6.2)'));",
    "options": {
      "A": "0",
      "B": "4326",
      "C": "3857",
      "D": "-1"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di PostGIS, jika geometri dibuat tanpa mendefinisikan SRID eksplisit, SRID default yang diberikan adalah 0 (unknown/unspecified spatial reference system).",
      "A": "Benar. Default SRID untuk geometri tanpa referensi spasial di PostGIS adalah 0.",
      "B": "Salah. SRID 4326 (WGS 84) harus ditentukan secara eksplisit.",
      "C": "Salah. SRID 3857 (Web Mercator) harus ditentukan secara eksplisit.",
      "D": "Salah. PostGIS menggunakan nilai 0 untuk unknown SRID, bukan -1."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-008",
    "level": "beginner",
    "topic": "Leaflet.js",
    "questionType": "output",
    "question": "Perhatikan inisialisasi peta Leaflet berikut. Berapa zoom level awal peta tersebut?\n\n```javascript\nconst map = L.map(\"map\").setView([-6.2088, 106.8456], 13);\nconsole.log(map.getZoom());\n```",
    "code": "const map = L.map(\"map\").setView([-6.2088, 106.8456], 13);\nconsole.log(map.getZoom());",
    "options": {
      "A": "13",
      "B": "-6.2088",
      "C": "106.8456",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Signature method Leaflet `setView(centerLatLng, zoom)`. Parameter kedua adalah 13, sehingga getZoom() mengembalikan 13.",
      "A": "Benar. Parameter kedua pada setView() menentukan level zoom awal.",
      "B": "Salah. -6.2088 adalah koordinat latitude.",
      "C": "Salah. 106.8456 adalah koordinat longitude.",
      "D": "Salah. Level zoom diatur ke 13, bukan 0."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-009",
    "level": "beginner",
    "topic": "JavaScript Object Destructuring",
    "questionType": "output",
    "question": "Apa output dari ekstraksi properti GeoJSON Feature berikut?\n\n```javascript\nconst feat = {\n  type: \"Feature\",\n  properties: { id: 101, nama: \"Halte Monas\", kapasitas: 50 }\n};\nconst { nama, status = \"Aktif\" } = feat.properties;\nconsole.log(`${nama}: ${status}`);\n```",
    "code": "const feat = {\n  type: \"Feature\",\n  properties: { id: 101, nama: \"Halte Monas\", kapasitas: 50 }\n};\nconst { nama, status = \"Aktif\" } = feat.properties;\nconsole.log(`${nama}: ${status}`);",
    "options": {
      "A": "Halte Monas: Aktif",
      "B": "Halte Monas: undefined",
      "C": "undefined: Aktif",
      "D": "ReferenceError"
    },
    "answer": "A",
    "explanation": {
      "correct": "Properti `nama` bernilai 'Halte Monas'. Karena properti `status` tidak ada pada `feat.properties`, default value 'Aktif' digunakan. Output: 'Halte Monas: Aktif'.",
      "A": "Benar. Nilai properti nama ada, dan properti status menggunakan default fallback 'Aktif'.",
      "B": "Salah. Default value 'Aktif' mencegah nilai menjadi undefined.",
      "C": "Salah. Properti nama ditemukan pada objek properties.",
      "D": "Salah. Sintaks destrukturisasi default value sepenuhnya valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-010",
    "level": "beginner",
    "topic": "PostGIS Function",
    "questionType": "output",
    "question": "Apa tipe geometri yang dikembalikan oleh ST_GeometryType berikut?\n\n```sql\nSELECT ST_GeometryType(ST_GeomFromText('LINESTRING(0 0, 1 1, 2 4)'));\n```",
    "code": "SELECT ST_GeometryType(ST_GeomFromText('LINESTRING(0 0, 1 1, 2 4)'));",
    "options": {
      "A": "ST_LineString",
      "B": "LINESTRING",
      "C": "ST_Point",
      "D": "ST_MultiLineString"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi PostGIS `ST_GeometryType(geom)` mengembalikan nama tipe geometri lengkap dengan prefix standar ISO/OGC 'ST_', yaitu 'ST_LineString'.",
      "A": "Benar. ST_GeometryType mengembalikan string berawalan 'ST_LineString'.",
      "B": "Salah. 'LINESTRING' tanpa 'ST_' adalah format yang dikembalikan oleh fungsi legacy GeometryType(), bukan ST_GeometryType().",
      "C": "Salah. Geometri tersebut memiliki lebih dari 1 vertex dan membentuk garis lurus, bukan Point.",
      "D": "Salah. Geometri tersebut adalah single linestring, bukan multi linestring."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-011",
    "level": "beginner",
    "topic": "JavaScript Array Reduce",
    "questionType": "output",
    "question": "Berapa total panjang garis sederhana dari array segmen berikut?\n\n```javascript\nconst segments = [12.5, 8.0, 15.5, 4.0];\nconst total = segments.reduce((acc, curr) => acc + curr, 0);\nconsole.log(total);\n```",
    "code": "const segments = [12.5, 8.0, 15.5, 4.0];\nconst total = segments.reduce((acc, curr) => acc + curr, 0);\nconsole.log(total);",
    "options": {
      "A": "40",
      "B": "36",
      "C": "40.5",
      "D": "NaN"
    },
    "answer": "A",
    "explanation": {
      "correct": "12.5 + 8.0 = 20.5. 20.5 + 15.5 = 36.0. 36.0 + 4.0 = 40.0. reduce menjumlahkan seluruh elemen secara akurat.",
      "A": "Benar. Jumlah akumulasi seluruh panjang segmen adalah 40.",
      "B": "Salah. 36 adalah hasil sebelum menjumlahkan segmen terakhir (4.0).",
      "C": "Salah. Perhitungan penjumlahan tidak menghasilkan 40.5.",
      "D": "Salah. Semua operan bertipe number dengan nilai awal 0 sehingga tidak menghasilkan NaN."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-012",
    "level": "beginner",
    "topic": "Leaflet LatLng",
    "questionType": "output",
    "question": "Di Leaflet, bagaimana urutan penulisan parameter saat membuat objek L.latLng()?\n\n```javascript\nconst pos = L.latLng(-6.2, 106.8);\nconsole.log(pos.lat + \" / \" + pos.lng);\n```",
    "code": "const pos = L.latLng(-6.2, 106.8);\nconsole.log(pos.lat + \" / \" + pos.lng);",
    "options": {
      "A": "-6.2 / 106.8",
      "B": "106.8 / -6.2",
      "C": "undefined / undefined",
      "D": "TypeError"
    },
    "answer": "A",
    "explanation": {
      "correct": "Berbeda dengan standar GeoJSON (lng, lat), Library Leaflet secara konsisten menggunakan urutan geografis klasik (latitude, longitude) pada class `L.latLng(lat, lng)`. Sehingga pos.lat = -6.2 dan pos.lng = 106.8.",
      "A": "Benar. Leaflet menggunakan urutan (Latitude, Longitude) pada konstruktor L.latLng().",
      "B": "Salah. Leaflet tidak menggunakan urutan GeoJSON untuk pemanggilan L.latLng.",
      "C": "Salah. Objek LatLng terbentuk dengan properti lat dan lng yang valid.",
      "D": "Salah. L.latLng adalah factory method resmi Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-013",
    "level": "beginner",
    "topic": "PostGIS Distance",
    "questionType": "output",
    "question": "Apa satuan nilai yang dikembalikan oleh ST_Distance jika kedua geometri bertipe `geometry` dengan SRID 4326 (WGS 84)?\n\n```sql\nSELECT ST_Distance(\n  ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326),\n  ST_SetSRID(ST_MakePoint(106.9, -6.2), 4326)\n);\n```",
    "code": "SELECT ST_Distance(\n  ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326),\n  ST_SetSRID(ST_MakePoint(106.9, -6.2), 4326)\n);",
    "options": {
      "A": "Derajat sudut (Degrees)",
      "B": "Meter",
      "C": "Kilometer",
      "D": "Mil laut"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada tipe `geometry` dengan proyeksi koordinat geografis (SRID 4326), satuan koordinat dasar adalah derajat (degrees). ST_Distance menghitung jarak Euclidean planar Cartesian murni pada nilai derajat, BUKAN meter di permukaan bumi.",
      "A": "Benar. Tipe geometry planar 4326 mengembalikan jarak dalam satuan derajat busur.",
      "B": "Salah. Untuk mendapatkan jarak dalam meter di permukaan bumi bola, harus di-cast ke tipe `geography` atau menggunakan ST_DistanceSphere.",
      "C": "Salah. Satuan tidak pernah dikonversi otomatis ke kilometer.",
      "D": "Salah. Mil laut bukan satuan default PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-014",
    "level": "beginner",
    "topic": "JavaScript Array Map",
    "questionType": "output",
    "question": "Apa output dari pemetaan array koordinat berikut?\n\n```javascript\nconst coords = [[100, 0], [101, 1], [102, 0]];\nconst lats = coords.map(([lng, lat]) => lat);\nconsole.log(lats);\n```",
    "code": "const coords = [[100, 0], [101, 1], [102, 0]];\nconst lats = coords.map(([lng, lat]) => lat);\nconsole.log(lats);",
    "options": {
      "A": "[0, 1, 0]",
      "B": "[100, 101, 102]",
      "C": "[[0], [1], [0]]",
      "D": "[undefined, undefined, undefined]"
    },
    "answer": "A",
    "explanation": {
      "correct": "Array map mendestrukturisasi tiap pasangan [lng, lat]. Nilai lat (elemen indeks 1) dari masing-masing pasangan adalah 0, 1, dan 0. Hasilnya adalah `[0, 1, 0]`.",
      "A": "Benar. Elemen kedua (latitude) dari masing-masing koordinat diambil.",
      "B": "Salah. [100, 101, 102] adalah nilai longitude (indeks 0).",
      "C": "Salah. Hasilnya adalah array angka datar, bukan nested array.",
      "D": "Salah. Destrukturisasi parameter array bekerja dengan sempurna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-015",
    "level": "beginner",
    "topic": "Spatial SQL Bounding Box",
    "questionType": "output",
    "question": "Operator PostGIS manakah yang memeriksa apakah bounding box geometri A beririsan dengan bounding box geometri B?\n\n```sql\n-- Operator: geom_a && geom_b\n```",
    "code": "-- Operator: geom_a && geom_b",
    "options": {
      "A": "Operator '&&' memeriksa apakah bounding box (2D) kedua geometri saling tumpang tindih (overlap)",
      "B": "Operator '&&' memeriksa kesamaan atribut non-spasial",
      "C": "Operator '&&' menggabungkan dua geometri menjadi satu linestring",
      "D": "Operator '&&' menghitung jarak terdekat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di PostGIS, operator `&&` adalah bounding box overlap operator. Operator ini dapat memanfaatkan indeks spasial GiST dengan sangat cepat sebelum kalkulasi geometri presisi dilakukan.",
      "A": "Benar. '&&' membandingkan overlap bounding box 2D secara efisien via indeks GiST.",
      "B": "Salah. Operator '&&' tidak berhubungan dengan atribut non-spasial.",
      "C": "Salah. Penggabungan geometri dilakukan oleh ST_Union, bukan '&&'.",
      "D": "Salah. Pengukuran jarak menggunakan ST_Distance."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-016",
    "level": "beginner",
    "topic": "JavaScript String / JSON",
    "questionType": "output",
    "question": "Apa output pemanggilan JSON.stringify pada geometri GeoJSON berikut?\n\n```javascript\nconst geom = { type: \"Point\", coordinates: [10, 20] };\nconsole.log(typeof JSON.stringify(geom));\n```",
    "code": "const geom = { type: \"Point\", coordinates: [10, 20] };\nconsole.log(typeof JSON.stringify(geom));",
    "options": {
      "A": "string",
      "B": "object",
      "C": "geojson",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "JSON.stringify mengonversi objek JavaScript apa pun menjadi representasi teks JSON yang bertipe data primitif 'string'.",
      "A": "Benar. Hasil dari JSON.stringify() selalu bertipe string.",
      "B": "Salah. Objek diubah menjadi string, bukan tetap berupa object.",
      "C": "Salah. 'geojson' bukan tipe data primitif bawaan JavaScript.",
      "D": "Salah. Nilai kembalian tidak pernah undefined untuk objek valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-017",
    "level": "beginner",
    "topic": "Leaflet Marker",
    "questionType": "output",
    "question": "Perhatikan kode pembuatan marker Leaflet berikut. Di mana marker akan ditambahkan?\n\n```javascript\nconst map = L.map(\"map\");\nconst marker = L.marker([-6.2, 106.8]);\nmarker.addTo(map);\nconsole.log(map.hasLayer(marker));\n```",
    "code": "const map = L.map(\"map\");\nconst marker = L.marker([-6.2, 106.8]);\nmarker.addTo(map);\nconsole.log(map.hasLayer(marker));",
    "options": {
      "A": "true",
      "B": "false",
      "C": "null",
      "D": "TypeError"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `marker.addTo(map)` menambahkan layer marker ke dalam instance peta Leaflet. Fungsi `map.hasLayer(marker)` memeriksa keberadaan layer tersebut dan mengembalikan boolean `true`.",
      "A": "Benar. Marker telah berhasil didaftarkan ke dalam layer peta.",
      "B": "Salah. marker.addTo(map) sukses sehingga hasLayer mengembalikan true.",
      "C": "Salah. hasLayer selalu mengembalikan nilai boolean.",
      "D": "Salah. Pemanggilan method ini adalah standar Leaflet API."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-018",
    "level": "beginner",
    "topic": "PostGIS Centroid",
    "questionType": "output",
    "question": "Apa output dari fungsi ST_Centroid pada POINT(10 20)?\n\n```sql\nSELECT ST_AsText(ST_Centroid(ST_GeomFromText('POINT(10 20)')));\n```",
    "code": "SELECT ST_AsText(ST_Centroid(ST_GeomFromText('POINT(10 20)')));",
    "options": {
      "A": "POINT(10 20)",
      "B": "POINT(0 0)",
      "C": "POINT(5 10)",
      "D": "POLYGON((10 20))"
    },
    "answer": "A",
    "explanation": {
      "correct": "Titik berat (centroid) dari geometri yang hanya terdiri dari satu titik (Point) adalah titik itu sendiri, yaitu POINT(10 20).",
      "A": "Benar. Centroid dari sebuah Point adalah koordinat Point itu sendiri.",
      "B": "Salah. Centroid tidak kembali ke titik origin (0 0).",
      "C": "Salah. Koordinat tidak dibagi dua.",
      "D": "Salah. Centroid selalu menghasilkan geometri bertipe Point."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-019",
    "level": "beginner",
    "topic": "JavaScript Set",
    "questionType": "output",
    "question": "Berapa jumlah kategori unik pada array data POI berikut?\n\n```javascript\nconst pois = [\n  { name: \"RS A\", cat: \"Kesehatan\" },\n  { name: \"Puskesmas B\", cat: \"Kesehatan\" },\n  { name: \"SDN 01\", cat: \"Pendidikan\" }\n];\nconst cats = new Set(pois.map(p => p.cat));\nconsole.log(cats.size);\n```",
    "code": "const pois = [\n  { name: \"RS A\", cat: \"Kesehatan\" },\n  { name: \"Puskesmas B\", cat: \"Kesehatan\" },\n  { name: \"SDN 01\", cat: \"Pendidikan\" }\n];\nconst cats = new Set(pois.map(p => p.cat));\nconsole.log(cats.size);",
    "options": {
      "A": "2",
      "B": "3",
      "C": "1",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "Set hanya menyimpan nilai unik. Kategori yang ada: 'Kesehatan' (duplikat dihilangkan) dan 'Pendidikan'. cats.size = 2.",
      "A": "Benar. Objek Set menghapus duplikasi 'Kesehatan' sehingga hanya tersisa 2 elemen.",
      "B": "Salah. 3 adalah panjang array awal sebelum deduplikasi.",
      "C": "Salah. Terdapat 2 kategori unik, bukan hanya 1.",
      "D": "Salah. Properti size pada Set mengembalikan angka integer."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-020",
    "level": "beginner",
    "topic": "Spatial SQL Area",
    "questionType": "output",
    "question": "Berapa luas bidang yang dihasilkan oleh ST_Area untuk poligon persegi 2x2 pada koordinat Cartesian planar?\n\n```sql\nSELECT ST_Area(ST_GeomFromText('POLYGON((0 0, 2 0, 2 2, 0 2, 0 0))'));\n```",
    "code": "SELECT ST_Area(ST_GeomFromText('POLYGON((0 0, 2 0, 2 2, 0 2, 0 0))'));",
    "options": {
      "A": "4",
      "B": "2",
      "C": "8",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Persegi dengan titik sudut (0,0), (2,0), (2,2), dan (0,2) memiliki panjang sisi 2 unit. Luas bidang persegi 2D Cartesian adalah sisi * sisi = 2 * 2 = 4.",
      "A": "Benar. Luas poligon berukuran 2x2 adalah 4.",
      "B": "Salah. 2 adalah panjang sisi, bukan luas bidang.",
      "C": "Salah. 8 adalah keliling dikalikan panjang sisi.",
      "D": "Salah. Poligon tertutup dan valid sehingga luasnya tidak nol."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-021",
    "level": "beginner",
    "topic": "Leaflet GeoJSON onEachFeature",
    "questionType": "output",
    "question": "Apa yang terjadi saat opsi onEachFeature dipanggil di L.geoJSON?\n\n```javascript\nconst geoLayer = L.geoJSON(geojsonFeature, {\n  onEachFeature: (feature, layer) => {\n    layer.bindPopup(feature.properties.name);\n  }\n});\n```",
    "code": "const geoLayer = L.geoJSON(geojsonFeature, {\n  onEachFeature: (feature, layer) => {\n    layer.bindPopup(feature.properties.name);\n  }\n});",
    "options": {
      "A": "Setiap fitur GeoJSON yang dirender otomatis dikaitkan dengan popup berisi nama fiturnya",
      "B": "Peta dihapus dari DOM browser",
      "C": "Koordinat dibalik menjadi [lat, lng]",
      "D": "Seluruh fitur digabungkan menjadi single linestring"
    },
    "answer": "A",
    "explanation": {
      "correct": "Opsi `onEachFeature` adalah callback Leaflet yang dieksekusi untuk setiap feature saat diload ke layer, sangat ideal untuk menambahkan event listener atau mengaitkan popup (`bindPopup`).",
      "A": "Benar. Callback onEachFeature membinding popup ke masing-masing layer fitur.",
      "B": "Salah. Peta tetap utuh dan merender data spasial.",
      "C": "Salah. onEachFeature tidak mengubah struktur koordinat GeoJSON.",
      "D": "Salah. Masing-masing fitur tetap menjadi layer independen."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-022",
    "level": "beginner",
    "topic": "PostGIS ST_Intersects",
    "questionType": "output",
    "question": "Apa output dari fungsi ST_Intersects antara dua lingkaran/titik berikut?\n\n```sql\nSELECT ST_Intersects(\n  ST_MakePoint(0, 0),\n  ST_MakePoint(10, 10)\n);\n```",
    "code": "SELECT ST_Intersects(\n  ST_MakePoint(0, 0),\n  ST_MakePoint(10, 10)\n);",
    "options": {
      "A": "false",
      "B": "true",
      "C": "null",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Titik (0, 0) dan titik (10, 10) adalah dua lokasi yang terpisah dan tidak memiliki perpotongan atau kontak spasial sama sekali. ST_Intersects mengembalikan nilai boolean `false`.",
      "A": "Benar. Kedua titik tidak bersinggungan sehingga hasilnya false.",
      "B": "Salah. Koordinat kedua titik berbeda dan tidak beririsan.",
      "C": "Salah. Fungsi mengembalikan boolean, bukan null.",
      "D": "Salah. Nilai kembalian tipe SQL boolean adalah false, bukan integer 0."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-023",
    "level": "beginner",
    "topic": "JavaScript Object Values",
    "questionType": "output",
    "question": "Apa output dari pengecekan koordinat valid berikut?\n\n```javascript\nfunction isValidLat(lat) {\n  return typeof lat === \"number\" && lat >= -90 && lat <= 90;\n}\nconsole.log(isValidLat(-95));\n```",
    "code": "function isValidLat(lat) {\n  return typeof lat === \"number\" && lat >= -90 && lat <= 90;\n}\nconsole.log(isValidLat(-95));",
    "options": {
      "A": "false",
      "B": "true",
      "C": "RangeError",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "Nilai latitude yang valid di bumi harus berada dalam rentang -90 derajat (Kutub Selatan) hingga +90 derajat (Kutub Utara). Karena -95 < -90, kondisi `lat >= -90` bernilai false.",
      "A": "Benar. -95 berada di luar batas rentang latitude global [-90, +90].",
      "B": "Salah. Latitude tidak boleh kurang dari -90 derajat.",
      "C": "Salah. Fungsi menggunakan perbandingan matematika biasa, tidak melempar RangeError.",
      "D": "Salah. Nilai kembalian boolean false."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-024",
    "level": "beginner",
    "topic": "Leaflet Container",
    "questionType": "debug",
    "question": "Peta Leaflet tidak muncul di browser dan layar berwarna abu-abu kosong. Apa bug CSS yang paling sering menyebabkannya?\n\n```css\n/* CSS file */\n#map {\n  width: 100%;\n  /* Kenapa peta tidak tampil? */\n}\n```",
    "code": "/* CSS file */\n#map {\n  width: 100%;\n  /* Kenapa peta tidak tampil? */\n}",
    "options": {
      "A": "Elemen #map tidak memiliki properti height (tinggi default 0px)",
      "B": "Elemen #map harus memiliki display: inline",
      "C": "CSS Leaflet dilarang di-import di head",
      "D": "Browser tidak mendukung elemen div"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kontainer Leaflet (`#map`) wajib memiliki tinggi (`height`) eksplisit (misalnya `height: 100vh;` atau `height: 500px;`). Jika height tidak ditentukan, kontainer akan memiliki tinggi 0 pixel sehingga peta tidak terlihat.",
      "A": "Benar. Kontainer peta wajib memiliki nilai height eksplisit agar viewport Leaflet dapat merender tile.",
      "B": "Salah. Kontainer peta harus berupa block-level element, bukan inline.",
      "C": "Salah. CSS Leaflet wajib di-import di head agar styling tile dan kontrol peta aktif.",
      "D": "Salah. Tag <div> didukung oleh semua browser web modern."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-025",
    "level": "beginner",
    "topic": "GeoJSON Coordinates Order",
    "questionType": "debug",
    "question": "Marker lokasi yang dimasukkan ke Leaflet muncul di Samudra Hindia dekat Antartika padahal lokasinya di Monas, Jakarta (-6.1754, 106.8272). Apa bugnya?\n\n```javascript\n// Data titik Monas:\nconst monas = {\n  type: \"Feature\",\n  geometry: {\n    type: \"Point\",\n    coordinates: [-6.1754, 106.8272] // BUG!\n  }\n};\n```",
    "code": "// Data titik Monas:\nconst monas = {\n  type: \"Feature\",\n  geometry: {\n    type: \"Point\",\n    coordinates: [-6.1754, 106.8272] // BUG!\n  }\n};",
    "options": {
      "A": "Urutan koordinat GeoJSON tertukar: harus [Longitude, Latitude] ([106.8272, -6.1754])",
      "B": "Nilai koordinat harus bilangan bulat",
      "C": "Type Point harus ditulis dengan huruf kecil 'point'",
      "D": "Tanda minus pada latitude dilarang di GeoJSON"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar spesifikasi GeoJSON RFC 7946 mewajibkan urutan koordinat adalah `[Longitude, Latitude]`. Menuliskan `[-6.1754, 106.8272]` berarti Longitude -6.1754 dan Latitude 106.8272 (yang melebihi batas kutub utara 90 derajat atau tertukar ke belahan bumi lain).",
      "A": "Benar. Standar GeoJSON adalah [X, Y] atau [Lon, Lat]; bukan [Lat, Lon].",
      "B": "Salah. Koordinat GPS geografis selalu berupa bilangan desimal (float).",
      "C": "Salah. Tipe GeoJSON adalah case-sensitive dan harus diawali huruf kapital ('Point').",
      "D": "Salah. Tanda minus menunjukkan belahan bumi selatan/barat dan sangat sah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-026",
    "level": "beginner",
    "topic": "Spatial SQL",
    "questionType": "debug",
    "question": "Kueri PostGIS berikut melempar error 'Operation on mixed SRID geometries'. Apa penyebabnya?\n\n```sql\nSELECT ST_Distance(a.geom, b.geom)\nFROM layer_a a, layer_b b;\n-- layer_a memiliki SRID 4326, layer_b memiliki SRID 3857\n```",
    "code": "SELECT ST_Distance(a.geom, b.geom)\nFROM layer_a a, layer_b b;\n-- layer_a memiliki SRID 4326, layer_b memiliki SRID 3857",
    "options": {
      "A": "Kedua geometri memiliki sistem proyeksi (SRID) yang berbeda dan tidak bisa dihitung jaraknya tanpa transformasi",
      "B": "Nama tabel a dan b harus sama",
      "C": "Fungsi ST_Distance tidak mendukung dua argumen",
      "D": "PostgreSQL tidak mendukung CROSS JOIN"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostGIS melarang operasi spasial antara geometri yang memiliki SRID berbeda karena satuan dan bidang referensinya tidak cocok. Solusinya adalah mentransformasikan salah satu geometri menggunakan `ST_Transform(b.geom, 4326)`.",
      "A": "Benar. Geometri harus memiliki SRID yang sama persis sebelum dilakukan operasi spasial.",
      "B": "Salah. Tabel dapat berbeda dan umum dalam analisis spasial.",
      "C": "Salah. ST_Distance memang menerima dua geometri sebagai parameter.",
      "D": "Salah. PostgreSQL mendukung cross join dan explicit join secara penuh."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-027",
    "level": "beginner",
    "topic": "Leaflet GeoJSON Parsing",
    "questionType": "debug",
    "question": "Kode fetch GeoJSON berikut melempar error 'Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0'. Mengapa?\n\n```javascript\nfetch(\"/api/data.geojson\")\n  .then(res => res.json())\n  .then(data => L.geoJSON(data).addTo(map));\n```",
    "code": "fetch(\"/api/data.geojson\")\n  .then(res => res.json())\n  .then(data => L.geoJSON(data).addTo(map));",
    "options": {
      "A": "Endpoint mengembalikan respon 404 HTML (<!DOCTYPE html...>) bukan payload JSON",
      "B": "Leaflet tidak mendukung fungsi L.geoJSON",
      "C": "res.json() harus diganti dengan res.text()",
      "D": "addTo(map) harus dipanggil secara sinkron sebelum fetch"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karakter '<' di awal respon menandakan server mengembalikan halaman HTML (biasanya halaman error 404 Not Found atau 500 Internal Server Error). Method `res.json()` gagal mem-parse teks HTML tersebut sebagai format JSON.",
      "A": "Benar. Server mengembalikan halaman web HTML (dimulai dengan '<') alih-alih file data JSON.",
      "B": "Salah. L.geoJSON adalah fitur inti Leaflet untuk memuat data GeoJSON.",
      "C": "Salah. res.json() sudah benar untuk payload berformat JSON.",
      "D": "Salah. Pemanggilan addTo setelah Promise resolve adalah alur asynchronous yang benar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-028",
    "level": "beginner",
    "topic": "PostGIS Polygon Construction",
    "questionType": "debug",
    "question": "Kueri berikut menghasilkan error 'polygon is not closed'. Apa penyebab kesalahan WKT-nya?\n\n```sql\nSELECT ST_GeomFromText('POLYGON((0 0, 10 0, 10 10, 0 10))');\n```",
    "code": "SELECT ST_GeomFromText('POLYGON((0 0, 10 0, 10 10, 0 10))');",
    "options": {
      "A": "Vertex awal (0 0) tidak diulang di akhir poligon untuk menutup cincin batas (linear ring)",
      "B": "Poligon tidak boleh memiliki 4 titik",
      "C": "Harus menggunakan huruf kecil 'polygon'",
      "D": "Koordinat harus dipisahkan oleh titik koma"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar geometri WKT mengharuskan cincin luar (exterior ring) dari poligon tertutup secara matematis, artinya titik pertama dan titik terakhir harus bernilai sama persis: `POLYGON((0 0, 10 0, 10 10, 0 10, 0 0))`.",
      "A": "Benar. Titik pertama (0 0) wajib diulang di akhir agar membentuk cincin poligon tertutup.",
      "B": "Salah. Poligon dapat memiliki berapa pun jumlah vertex asalkan minimal 4 titik (3 titik sudut + 1 penutup).",
      "C": "Salah. Huruf kapital atau kecil pada keyword WKT diterima oleh parser PostGIS.",
      "D": "Salah. Koordinat antar vertex dipisahkan oleh tanda koma, bukan titik koma."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-029",
    "level": "beginner",
    "topic": "JavaScript Coordinate Array Mutation",
    "questionType": "debug",
    "question": "Fungsi berikut tidak sengaja memodifikasi array titik asal (mutasi data tidak diinginkan). Mengapa?\n\n```javascript\nfunction reverseCoords(point) {\n  const p = point;\n  return p.reverse();\n}\n```",
    "code": "function reverseCoords(point) {\n  const p = point;\n  return p.reverse();\n}",
    "options": {
      "A": "Array.prototype.reverse() memutasi array asli di tempat (in-place) dan p mereferensikan objek array yang sama",
      "B": "Variabel const melarang pemanggilan method reverse",
      "C": "Array di JavaScript tidak memiliki method reverse",
      "D": "Fungsi dilarang mengembalikan nilai array"
    },
    "answer": "A",
    "explanation": {
      "correct": "Assignment `const p = point` hanya menyalin referensi memori, bukan membuat klon array baru. Method `reverse()` mengubah elemen pada array asli secara in-place. Seharusnya gunakan `[...point].reverse()` atau `point.toReversed()`.",
      "A": "Benar. Method reverse() memutasi memori array asli secara in-place.",
      "B": "Salah. const hanya mencegah reassignment variabel, tidak mencegah mutasi isi array.",
      "C": "Salah. Array JavaScript memiliki method reverse() bawaan.",
      "D": "Salah. Fungsi bebas mengembalikan tipe data apa saja."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-030",
    "level": "beginner",
    "topic": "Spatial SQL Indexing",
    "questionType": "debug",
    "question": "Kueri spasial berikut lambat karena tidak memanfaatkan indeks GiST yang ada pada kolom `geom`. Apa penyebabnya?\n\n```sql\n-- Indeks: CREATE INDEX idx_places_geom ON places USING GIST(geom);\nSELECT * FROM places WHERE ST_Distance(geom, ST_MakePoint(106.8, -6.2)) < 0.05;\n```",
    "code": "-- Indeks: CREATE INDEX idx_places_geom ON places USING GIST(geom);\nSELECT * FROM places WHERE ST_Distance(geom, ST_MakePoint(106.8, -6.2)) < 0.05;",
    "options": {
      "A": "ST_Distance dalam klausa WHERE tidak memanfaatkan indeks GiST; seharusnya gunakan ST_DWithin",
      "B": "Indeks GiST hanya bekerja pada nama tabel berawalan 'tbl_'",
      "C": "Kolom geom harus bertipe VARCHAR",
      "D": "Jarak 0.05 terlalu kecil untuk query database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Klausa `ST_Distance(geom, ...) < N` menghitung jarak untuk setiap baris di tabel (sequential scan). Agar indeks GiST aktif, kueri harus menggunakan fungsi index-aware seperti `ST_DWithin(geom, point, distance)`.",
      "A": "Benar. ST_DWithin menggunakan operator '&&' internal yang otomatis memanfaatkan indeks GiST.",
      "B": "Salah. Penamaan tabel tidak berpengaruh pada perencana kueri (planner) PostgreSQL.",
      "C": "Salah. Kolom spasial harus bertipe GEOMETRY atau GEOGRAPHY, bukan VARCHAR.",
      "D": "Salah. Angka 0.05 derajat (~5.5 km) adalah filter numerik yang valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-031",
    "level": "beginner",
    "topic": "Leaflet Event Handling",
    "questionType": "debug",
    "question": "Klik pada marker selalu mencetak nama fitur terakhir yang diloop di array. Apa penyebab klasik bug ini?\n\n```javascript\nfor (var i = 0; i < features.length; i++) {\n  var f = features[i];\n  var marker = L.marker([f.lat, f.lng]);\n  marker.on(\"click\", function() { alert(f.name); });\n  marker.addTo(map);\n}\n```",
    "code": "for (var i = 0; i < features.length; i++) {\n  var f = features[i];\n  var marker = L.marker([f.lat, f.lng]);\n  marker.on(\"click\", function() { alert(f.name); });\n  marker.addTo(map);\n}",
    "options": {
      "A": "Keyword 'var' memiliki function-scope sehingga variabel 'f' tertimpa di setiap iterasi loop (closure issue)",
      "B": "Leaflet melarang penggunaan event 'click'",
      "C": "alert() tidak dapat menampilkan string di browser",
      "D": "Loop harus berjalan mundur dari akhir ke awal"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena variabel `var f` berakar pada scope fungsi yang sama, saat event listener 'click' dipicu belakangan, closure membaca nilai terakhir dari variabel `f`. Solusinya adalah mengganti `var` dengan block-scoped `let` atau `const`.",
      "A": "Benar. var tidak memiliki block scope di dalam loop; ganti var dengan let/const.",
      "B": "Salah. Event 'click' adalah event listener resmi dan umum pada marker Leaflet.",
      "C": "Salah. alert() adalah fungsi bawaan browser untuk menampilkan dialog teks.",
      "D": "Salah. Arah loop tidak menyelesaikan masalah scope var."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-032",
    "level": "beginner",
    "topic": "SQL Geometry Validation",
    "questionType": "debug",
    "question": "Kueri berikut gagal saat menyimpan poligon yang garis batasnya berpotongan sendiri (self-intersecting seperti angka 8). Apa status geometri tersebut?\n\n```sql\nINSERT INTO zones (geom) VALUES (ST_GeomFromText('POLYGON((0 0, 2 2, 2 0, 0 2, 0 0))'));\n```",
    "code": "INSERT INTO zones (geom) VALUES (ST_GeomFromText('POLYGON((0 0, 2 2, 2 0, 0 2, 0 0))'));",
    "options": {
      "A": "Geometri tidak valid (ST_IsValid = false) karena cincin batas memotong dirinya sendiri (self-intersection)",
      "B": "SRID belum ditentukan sehingga ditolak database",
      "C": "PostGIS hanya menerima poligon segitiga",
      "D": "Nilai koordinat harus berupa bilangan negatif"
    },
    "answer": "A",
    "explanation": {
      "correct": "Poligon yang memotong garis batasnya sendiri (bowtie / hourglass shape) melanggar aturan topologi OGC Simple Features sehingga dianggap invalid (`ST_IsValid` bernilai false). Solusinya dapat diperbaiki dengan `ST_MakeValid()`.",
      "A": "Benar. Poligon dengan self-intersection berstatus invalid menurut aturan topologi OGC.",
      "B": "Salah. SRID default bernilai 0 dan tidak membatalkan insert kecuali ada CHECK constraint.",
      "C": "Salah. PostGIS mendukung poligon dengan jumlah sisi arbitrer.",
      "D": "Salah. Koordinat positif sepenuhnya sah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-033",
    "level": "beginner",
    "topic": "JavaScript GeoJSON Property Access",
    "questionType": "debug",
    "question": "Kode berikut melempar error 'Cannot read properties of undefined (reading city)' saat memproses fitur tanpa properti. Bagaimana memperbaikinya?\n\n```javascript\nfunction getCity(feature) {\n  return feature.properties.city;\n}\n```",
    "code": "function getCity(feature) {\n  return feature.properties.city;\n}",
    "options": {
      "A": "Menggunakan optional chaining: 'return feature.properties?.city'",
      "B": "Mengubah fungsi menjadi async function",
      "C": "Menghapus parameter feature",
      "D": "Mengganti tanda titik dengan simbol @"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika objek `feature` tidak memiliki atribut `properties` (bernilai undefined), mengakses `.city` langsung akan melempar TypeError. Operator optional chaining `?.` mencegah crash dan mengembalikan undefined dengan aman.",
      "A": "Benar. Optional chaining ?. melindungi kode dari unhandled TypeError saat properti bernilai undefined/null.",
      "B": "Salah. Menjadikan fungsi async tidak mengatasi pembacaan properti undefined synchronous.",
      "C": "Salah. Fungsi membutuhkan parameter feature untuk dianalisis.",
      "D": "Salah. Simbol @ bukan sintaks akses properti JavaScript."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-034",
    "level": "beginner",
    "topic": "Leaflet TileLayer URL",
    "questionType": "debug",
    "question": "Peta tile OSM tidak muncul dan console menampilkan banyak error 404 pada URL tile. Di mana kesalahan template URL berikut?\n\n```javascript\nL.tileLayer(\"https://tile.openstreetmap.org/{x}/{y}/{z}.png\").addTo(map);\n```",
    "code": "L.tileLayer(\"https://tile.openstreetmap.org/{x}/{y}/{z}.png\").addTo(map);",
    "options": {
      "A": "Urutan template standar Leaflet harus {z}/{x}/{y}.png (Zoom dulu, baru X dan Y)",
      "B": "Domain OpenStreetMap dilarang digunakan di web",
      "C": "Ekstensi tile harus berupa .pdf bukan .png",
      "D": "Protokol https harus diganti ftp"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar Slippy Map tile URL menggunakan urutan `{z}/{x}/{y}.png` di mana `z` adalah zoom level, `x` adalah kolom horizontal tile, dan `y` adalah baris vertikal tile. Template `{x}/{y}/{z}.png` menghasilkan path yang salah total.",
      "A": "Benar. Urutan tile layer standar Slippy Map adalah {z}/{x}/{y}.",
      "B": "Salah. Tile OSM untuk keperluan riset/development terbuka dengan attribution yang tepat.",
      "C": "Salah. Tile peta web berupa citra raster web (.png atau .jpg).",
      "D": "Salah. Protokol web modern wajib HTTPS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-035",
    "level": "beginner",
    "topic": "Spatial SQL ST_Contains",
    "questionType": "debug",
    "question": "Kueri berikut tidak mengembalikan titik yang berada tepat di garis batas poligon. Mengapa?\n\n```sql\nSELECT * FROM parcels p, points pt WHERE ST_Contains(p.geom, pt.geom);\n```",
    "code": "SELECT * FROM parcels p, points pt WHERE ST_Contains(p.geom, pt.geom);",
    "options": {
      "A": "Definisi ST_Contains mensyaratkan titik berada di interior poligon; titik pada boundary (garis batas) tidak dianggap contained",
      "B": "ST_Contains hanya bekerja untuk sesama titik",
      "C": "Titik di database tidak boleh memiliki koordinat Z",
      "D": "Tabel parcels harus memiliki tipe data TEXT"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menurut matriks DE-9IM OGC, `ST_Contains(A, B)` bernilai true hanya jika titik B berada sepenuhnya di dalam interior poligon A dan tidak ada bagian B yang berada di exterior A. Titik tepat di boundary poligon tidak memenuhi syarat ST_Contains; gunakan `ST_Covers` atau `ST_Intersects` jika ingin mencakup garis batas.",
      "A": "Benar. ST_Contains mengecualikan boundary; gunakan ST_Covers atau ST_Intersects untuk menyertakan tepi batas.",
      "B": "Salah. ST_Contains sangat umum digunakan untuk menguji poligon memuat titik.",
      "C": "Salah. Dimensi koordinat 2D atau 3D didukung oleh PostGIS.",
      "D": "Salah. Geometri harus bertipe GEOMETRY, bukan teks."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-036",
    "level": "beginner",
    "topic": "JavaScript Async Fetch Loop",
    "questionType": "debug",
    "question": "Kode berikut melakukan fetch puluhan layer GeoJSON secara sekuensial yang lambat di dalam for-loop. Bagaimana cara menjalankannya secara paralel?\n\n```javascript\nfor (const url of urls) {\n  const res = await fetch(url);\n  const data = await res.json();\n  L.geoJSON(data).addTo(map);\n}\n```",
    "code": "for (const url of urls) {\n  const res = await fetch(url);\n  const data = await res.json();\n  L.geoJSON(data).addTo(map);\n}",
    "options": {
      "A": "Menggunakan Promise.all(urls.map(url => fetch(url).then(r => r.json())))",
      "B": "Menghapus keyword async dari fungsi",
      "C": "Menjalankan script di web worker tanpa fetch",
      "D": "Menambahkan jeda setTimeout 1000ms pada setiap loop"
    },
    "answer": "A",
    "explanation": {
      "correct": "Penggunaan `await` di dalam perulangan `for` memaksa setiap HTTP request menunggu request sebelumnya selesai sebelum memulai request berikutnya (waterfall sekuensial). `Promise.all()` menjalankan seluruh fetch request secara paralel bersamaan.",
      "A": "Benar. Promise.all mengeksekusi request konkuren paralel sehingga memangkas total waktu pemuatan.",
      "B": "Salah. Menghapus async menyebabkan syntax error pada penggunaan await.",
      "C": "Salah. Fetch tetap diperlukan untuk mengambil data dari server.",
      "D": "Salah. Menambahkan setTimeout justru semakin memperlambat eksekusi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-037",
    "level": "beginner",
    "topic": "PostGIS SRID Transformation",
    "questionType": "debug",
    "question": "Kueri berikut ingin menghitung buffer 500 meter di sekitar titik WGS 84, tetapi menghasilkan lingkaran raksasa yang menutupi seluruh bumi. Apa penyebabnya?\n\n```sql\nSELECT ST_Buffer(ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326), 500);\n```",
    "code": "SELECT ST_Buffer(ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326), 500);",
    "options": {
      "A": "Parameter jarak pada ST_Buffer geometri 4326 diinterpretasikan sebagai 500 derajat sudut (1 derajat bumi ~ 111 km)",
      "B": "Angka 500 dianggap sebagai 500 milimeter",
      "C": "Titik 106.8, -6.2 tidak berada di bumi",
      "D": "ST_Buffer melarang angka bulat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada tipe `geometry` dengan SRID 4326 (WGS 84), unit satuannya adalah derajat (degree). Buffer 500 berarti radius 500 derajat busur (sedangkan keliling bumi hanya 360 derajat). Untuk buffer dalam meter, cast geometri ke tipe `geography`: `ST_Buffer(geom::geography, 500)`.",
      "A": "Benar. Unit 4326 adalah derajat busur; gunakan tipe geography untuk buffer dengan satuan meter.",
      "B": "Salah. Satuan bukan milimeter melainkan unit proyeksi (derajat).",
      "C": "Salah. Koordinat tersebut adalah Jakarta, Indonesia.",
      "D": "Salah. Angka integer 500 valid secara sintaksis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-038",
    "level": "beginner",
    "topic": "Leaflet Clear Layers",
    "questionType": "debug",
    "question": "Data titik lama tidak terhapus saat filter dropdown diganti sehingga marker baru menumpuk di atas marker lama. Apa method yang seharusnya dipanggil sebelum menambah data baru?\n\n```javascript\n// Layer group penampung marker:\nconst markerGroup = L.layerGroup().addTo(map);\n// Ketika filter berubah:\n// Apa yang harus dipanggil pada markerGroup sebelum menambah data baru?\n```",
    "code": "// Layer group penampung marker:\nconst markerGroup = L.layerGroup().addTo(map);\n// Ketika filter berubah:\n// Apa yang harus dipanggil pada markerGroup sebelum menambah data baru?",
    "options": {
      "A": "markerGroup.clearLayers()",
      "B": "markerGroup.delete()",
      "C": "map.remove()",
      "D": "markerGroup.reset()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `layerGroup.clearLayers()` menghapus seluruh layer/marker anak yang ada di dalam grup tersebut dari peta, sehingga grup menjadi bersih dan siap diisi data hasil filter baru.",
      "A": "Benar. clearLayers() membersihkan seluruh layer turunan pada LayerGroup.",
      "B": "Salah. delete() bukan method dari L.LayerGroup.",
      "C": "Salah. map.remove() akan menghancurkan dan mencopot seluruh instance peta dari halaman web.",
      "D": "Salah. reset() bukan method bawaan Leaflet untuk LayerGroup."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-039",
    "level": "beginner",
    "topic": "Leaflet Map Initialization",
    "questionType": "completion",
    "question": "Lengkapi baris inisialisasi peta Leaflet yang terhubung ke elemen div ber-id 'map-view':\n\n```javascript\nconst map = L.__(\"map-view\").setView([-7.25, 112.75], 12);\n```",
    "code": "const map = L.__(\"map-view\").setView([-7.25, 112.75], 12);",
    "options": {
      "A": "map",
      "B": "createMap",
      "C": "init",
      "D": "view"
    },
    "answer": "A",
    "explanation": {
      "correct": "`L.map(id, options)` adalah method factory utama Leaflet untuk menginisialisasi objek peta pada elemen HTML DOM tertentu.",
      "A": "Benar. L.map adalah constructor/factory resmi Leaflet untuk instansiasi peta.",
      "B": "Salah. createMap bukan nama fungsi di Leaflet.",
      "C": "Salah. init bukan method factory Leaflet.",
      "D": "Salah. view bukan method untuk membuat objek peta."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-040",
    "level": "beginner",
    "topic": "PostGIS ST_MakePoint",
    "questionType": "completion",
    "question": "Lengkapi kueri pembuatan titik geometri berikut dengan menetapkan SRID 4326 secara langsung:\n\n```sql\nSELECT ST_SetSRID(ST_MakePoint(___, ___), 4326);\n```",
    "code": "SELECT ST_SetSRID(ST_MakePoint(___, ___), 4326);",
    "options": {
      "A": "longitude, latitude",
      "B": "latitude, longitude",
      "C": "srid, geometry",
      "D": "altitude, radius"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi `ST_MakePoint(x, y)` selalu menerima koordinat X (Longitude / Sumbu Horizontal Timur-Barat) terlebih dahulu, baru kemudian koordinat Y (Latitude / Sumbu Vertikal Utara-Selatan).",
      "A": "Benar. Urutan parameter Cartesian X, Y berpadanan dengan Longitude lalu Latitude.",
      "B": "Salah. Urutan latitude, longitude terbalik dari konvensi X, Y matematika.",
      "C": "Salah. Parameter ST_MakePoint menerima nilai numerik koordinat, bukan srid/geometry.",
      "D": "Salah. Parameter dasar 2D tidak menerima altitude dan radius."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-041",
    "level": "beginner",
    "topic": "Leaflet Add Marker",
    "questionType": "completion",
    "question": "Lengkapi kode berikut untuk menambahkan marker dengan posisi koordinat Bandung ke dalam peta:\n\n```javascript\nconst marker = L.marker([-6.9175, 107.6191]).___(map);\n```",
    "code": "const marker = L.marker([-6.9175, 107.6191]).___(map);",
    "options": {
      "A": "addTo",
      "B": "attachTo",
      "C": "append",
      "D": "mount"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method berantai (chainable method) standar pada layer Leaflet untuk memasang komponen ke instance peta adalah `.addTo(map)`.",
      "A": "Benar. .addTo(map) adalah method standar Leaflet untuk menambahkan layer ke peta.",
      "B": "Salah. attachTo bukan method resmi Leaflet.",
      "C": "Salah. append adalah method DOM, bukan method Layer Leaflet.",
      "D": "Salah. mount digunakan di framework seperti React/Vue, bukan Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-042",
    "level": "beginner",
    "topic": "Leaflet TileLayer OSM",
    "questionType": "completion",
    "question": "Lengkapi URL template tile OpenStreetMap standar berikut:\n\n```javascript\nL.tileLayer(\"https://tile.openstreetmap.org/{___}/{___}/{___}.png\", {\n  attribution: \"&copy; OpenStreetMap contributors\"\n}).addTo(map);\n```",
    "code": "L.tileLayer(\"https://tile.openstreetmap.org/{___}/{___}/{___}.png\", {\n  attribution: \"&copy; OpenStreetMap contributors\"\n}).addTo(map);",
    "options": {
      "A": "z, x, y",
      "B": "x, y, z",
      "C": "lat, lng, zoom",
      "D": "zoom, lat, lng"
    },
    "answer": "A",
    "explanation": {
      "correct": "URL Slippy Map tile format standar menggunakan variabel placeholder `{z}` untuk zoom level, `{x}` untuk indeks kolom tile, dan `{y}` untuk indeks baris tile.",
      "A": "Benar. Template URL standar adalah {z}/{x}/{y}.",
      "B": "Salah. x, y, z adalah urutan terbalik yang tidak cocok dengan struktur folder OSM.",
      "C": "Salah. Leaflet tidak menggunakan placeholder {lat} atau {lng} untuk raster tile layer.",
      "D": "Salah. Nama placeholder resmi adalah z, bukan zoom."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-043",
    "level": "beginner",
    "topic": "PostGIS Distance Sphere",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS berikut untuk menghitung jarak akurat dalam satuan METER pada koordinat geografis WGS 84 tanpa perlu membuat tabel geografi:\n\n```sql\nSELECT ST____(ST_MakePoint(106.8, -6.2), ST_MakePoint(107.6, -6.9));\n```",
    "code": "SELECT ST____(ST_MakePoint(106.8, -6.2), ST_MakePoint(107.6, -6.9));",
    "options": {
      "A": "DistanceSphere",
      "B": "LengthPlanar",
      "C": "AreaDegrees",
      "D": "CartesianMetric"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_DistanceSphere(geom1, geom2)` menggunakan model aproksimasi bola bumi untuk menghitung jarak geodesik antar dua titik WGS 84 secara cepat dalam satuan meter.",
      "A": "Benar. ST_DistanceSphere menghitung jarak permukaan bola bumi dalam meter.",
      "B": "Salah. LengthPlanar menghitung panjang garis planar, bukan jarak dua titik di permukaan bumi.",
      "C": "Salah. AreaDegrees menghitung luas bukan jarak.",
      "D": "Salah. CartesianMetric bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-044",
    "level": "beginner",
    "topic": "Leaflet Popup Binding",
    "questionType": "completion",
    "question": "Lengkapi method berikut agar marker menampilkan teks popup saat diklik oleh pengguna:\n\n```javascript\nconst marker = L.marker([-6.2, 106.8]);\nmarker.___(\"<b>Halo Jakarta!</b>\").addTo(map);\n```",
    "code": "const marker = L.marker([-6.2, 106.8]);\nmarker.___(\"<b>Halo Jakarta!</b>\").addTo(map);",
    "options": {
      "A": "bindPopup",
      "B": "setTooltip",
      "C": "createAlert",
      "D": "attachModal"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `bindPopup(htmlContent)` mengaitkan dialog popup HTML yang otomatis terbuka ketika layer marker di-klik oleh user.",
      "A": "Benar. bindPopup adalah API Leaflet resmi untuk membuat popup interaktif.",
      "B": "Salah. setTooltip digunakan untuk tooltip hover ringan, bukan dialog popup standar.",
      "C": "Salah. createAlert bukan method Leaflet.",
      "D": "Salah. attachModal bukan method bawaan Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-045",
    "level": "beginner",
    "topic": "PostGIS ST_DWithin",
    "questionType": "completion",
    "question": "Lengkapi klausa WHERE berikut untuk mencari semua fasilitas yang berada dalam radius 1.000 meter dari titik pengguna menggunakan tipe `geography`:\n\n```sql\nSELECT name FROM facilities\nWHERE ST_DWithin(geom::geography, ST_MakePoint(106.8, -6.2)::geography, ___);\n```",
    "code": "SELECT name FROM facilities\nWHERE ST_DWithin(geom::geography, ST_MakePoint(106.8, -6.2)::geography, ___);",
    "options": {
      "A": "1000",
      "B": "0.01",
      "C": "1000000",
      "D": "'1000m'"
    },
    "answer": "A",
    "explanation": {
      "correct": "Saat menggunakan tipe `geography`, parameter ketiga dari `ST_DWithin` secara default dihitung dalam satuan METER. Untuk radius 1.000 meter cukup masukkan angka 1000.",
      "A": "Benar. ST_DWithin pada tipe geography mengukur radius dalam satuan meter langsung.",
      "B": "Salah. 0.01 derajat digunakan jika bertipe geometry planar, bukan geography.",
      "C": "Salah. 1000000 adalah 1.000 kilometer.",
      "D": "Salah. Parameter jarak menerima nilai numerik (double precision), bukan string berakhiran 'm'."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-046",
    "level": "beginner",
    "topic": "Leaflet GeoJSON Styling",
    "questionType": "completion",
    "question": "Lengkapi fungsi style GeoJSON berikut agar batas poligon berwarna merah dengan ketebalan 2 pixel:\n\n```javascript\nL.geoJSON(data, {\n  style: function(feature) {\n    return {\n      ___: \"red\",\n      weight: 2\n    };\n  }\n}).addTo(map);\n```",
    "code": "L.geoJSON(data, {\n  style: function(feature) {\n    return {\n      ___: \"red\",\n      weight: 2\n    };\n  }\n}).addTo(map);",
    "options": {
      "A": "color",
      "B": "strokeColor",
      "C": "border",
      "D": "linePaint"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Leaflet Path Options, opsi `color` mendefinisikan warna garis tepi/stroke (stroke color), sedangkan `fillColor` mendefinisikan warna isian bidang poligon.",
      "A": "Benar. color adalah opsi resmi Leaflet untuk warna outline garis tepi.",
      "B": "Salah. strokeColor bukan nama properti opsi Leaflet Path.",
      "C": "Salah. border adalah properti CSS, bukan opsi Leaflet Path.",
      "D": "Salah. linePaint adalah format MapLibre/Mapbox GL, bukan Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-047",
    "level": "beginner",
    "topic": "PostGIS Spatial Column Addition",
    "questionType": "completion",
    "question": "Lengkapi perintah SQL berikut untuk menambahkan kolom spasial titik 2D dengan SRID 4326 pada tabel yang sudah ada:\n\n```sql\nALTER TABLE stores ADD COLUMN geom geometry(Point, ___);\n```",
    "code": "ALTER TABLE stores ADD COLUMN geom geometry(Point, ___);",
    "options": {
      "A": "4326",
      "B": "3857",
      "C": "WGS84",
      "D": "EPSG"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe kolom geometri PostGIS berparameter menerima tipe primitif dan integer SRID, misalnya `geometry(Point, 4326)`.",
      "A": "Benar. 4326 adalah integer SRID standar WGS 84 GPS global.",
      "B": "Salah. 3857 adalah Web Mercator (satuan meter), bukan koordinat GPS geografis lon/lat.",
      "C": "Salah. Tipe kolom membutuhkan angka integer SRID, bukan string 'WGS84'.",
      "D": "Salah. 'EPSG' adalah nama organisasi/registrasi otoritas, bukan nomor SRID."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-048",
    "level": "beginner",
    "topic": "Leaflet Custom Icon",
    "questionType": "completion",
    "question": "Lengkapi pembuatan custom marker icon di Leaflet berikut:\n\n```javascript\nconst customIcon = L.___({\n  iconUrl: \"/icons/hospital.png\",\n  iconSize: [32, 32],\n  iconAnchor: [16, 32]\n});\n```",
    "code": "const customIcon = L.___({\n  iconUrl: \"/icons/hospital.png\",\n  iconSize: [32, 32],\n  iconAnchor: [16, 32]\n});",
    "options": {
      "A": "icon",
      "B": "createIcon",
      "C": "customMarker",
      "D": "symbol"
    },
    "answer": "A",
    "explanation": {
      "correct": "`L.icon(options)` adalah factory method Leaflet untuk mendefinisikan custom marker icon dengan gambar eksternal dan titik anchor.",
      "A": "Benar. L.icon adalah method pembuat objek icon kustom.",
      "B": "Salah. createIcon bukan method factory utama Leaflet.",
      "C": "Salah. customMarker bukan class bawaan Leaflet.",
      "D": "Salah. symbol bukan method icon Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-049",
    "level": "beginner",
    "topic": "PostGIS ST_AsGeoJSON",
    "questionType": "completion",
    "question": "Lengkapi kueri SQL berikut agar data geometri dikonversi langsung menjadi format string GeoJSON oleh database:\n\n```sql\nSELECT id, name, ST____(geom) as geojson FROM parks;\n```",
    "code": "SELECT id, name, ST____(geom) as geojson FROM parks;",
    "options": {
      "A": "AsGeoJSON",
      "B": "ToGeoJSON",
      "C": "FormatJSON",
      "D": "ExportGeoJSON"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_AsGeoJSON(geom)` adalah fungsi bawaan PostGIS yang mengubah geometri database menjadi string JSON standar GeoJSON RFC 7946.",
      "A": "Benar. ST_AsGeoJSON adalah fungsi standar PostGIS untuk ekspor GeoJSON.",
      "B": "Salah. ToGeoJSON bukan fungsi PostGIS yang valid.",
      "C": "Salah. FormatJSON bukan fungsi spasial PostGIS.",
      "D": "Salah. ExportGeoJSON bukan nama fungsi resmi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-050",
    "level": "beginner",
    "topic": "Leaflet Fit Bounds",
    "questionType": "completion",
    "question": "Lengkapi pemanggilan method berikut agar viewport peta otomatis mengarah dan menyesuaikan zoom ke seluruh cakupan data layer:\n\n```javascript\nconst geoLayer = L.geoJSON(data).addTo(map);\nmap.___(geoLayer.getBounds());\n```",
    "code": "const geoLayer = L.geoJSON(data).addTo(map);\nmap.___(geoLayer.getBounds());",
    "options": {
      "A": "fitBounds",
      "B": "zoomTo",
      "C": "centerOn",
      "D": "setExtent"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `map.fitBounds(bounds)` secara cerdas menghitung titik tengah (center) dan level zoom optimal agar seluruh area bounding box yang diberikan terlihat penuh di layar.",
      "A": "Benar. map.fitBounds() menyesuaikan center dan zoom otomatis sesuai bounds.",
      "B": "Salah. zoomTo bukan method resmi Leaflet untuk LatLngBounds.",
      "C": "Salah. centerOn bukan nama method Leaflet.",
      "D": "Salah. setExtent adalah istilah di ArcGIS/OpenLayers lama, bukan Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-051",
    "level": "beginner",
    "topic": "PostGIS Spatial Index Creation",
    "questionType": "completion",
    "question": "Lengkapi perintah SQL berikut untuk membuat indeks spasial berkecepatan tinggi pada kolom geometri:\n\n```sql\nCREATE INDEX idx_roads_geom ON roads USING ___(geom);\n```",
    "code": "CREATE INDEX idx_roads_geom ON roads USING ___(geom);",
    "options": {
      "A": "GIST",
      "B": "BTREE",
      "C": "HASH",
      "D": "GIN"
    },
    "answer": "A",
    "explanation": {
      "correct": "Indeks `GIST` (Generalized Search Tree) adalah tipe indeks standar dan paling esensial di PostGIS untuk mempercepat query spasial berbasis bounding box (seperti `&&`, `ST_Intersects`, `ST_DWithin`).",
      "A": "Benar. Indeks GiST mengorganisir data geometri dengan struktur R-Tree spasial.",
      "B": "Salah. BTREE hanya untuk data skalar terurut satu dimensi, tidak efisien untuk data spasial multi-dimensi.",
      "C": "Salah. HASH hanya mendukung pencocokan nilai eksak kesetaraan (=).",
      "D": "Salah. GIN digunakan untuk array atau teks pencarian full-text, bukan tipe geometri standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-052",
    "level": "beginner",
    "topic": "JavaScript Distance Haversine Formula",
    "questionType": "completion",
    "question": "Lengkapi fungsi konversi derajat ke radian yang dibutuhkan pada formula Haversine:\n\n```javascript\nfunction toRad(deg) {\n  return deg * (Math.PI / ___);\n}\n```",
    "code": "function toRad(deg) {\n  return deg * (Math.PI / ___);\n}",
    "options": {
      "A": "180",
      "B": "360",
      "C": "90",
      "D": "270"
    },
    "answer": "A",
    "explanation": {
      "correct": "Rumus matematika konversi sudut derajat ke radian adalah `radian = derajat * (pi / 180)` karena 180 derajat setara dengan pi radian.",
      "A": "Benar. 180 derajat setara dengan Math.PI radian.",
      "B": "Salah. 360 setara dengan 2 * Math.PI.",
      "C": "Salah. 90 derajat setara dengan Math.PI / 2.",
      "D": "Salah. 270 derajat setara dengan 3 * Math.PI / 2."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-053",
    "level": "beginner",
    "topic": "Leaflet GeoJSON Filter",
    "questionType": "completion",
    "question": "Lengkapi opsi filter pada L.geoJSON agar hanya menampilkan fitur yang bertipe properti 'Sekolah':\n\n```javascript\nL.geoJSON(data, {\n  filter: function(feature) {\n    return feature.properties.tipe === \"___\";\n  }\n}).addTo(map);\n```",
    "code": "L.geoJSON(data, {\n  filter: function(feature) {\n    return feature.properties.tipe === \"___\";\n  }\n}).addTo(map);",
    "options": {
      "A": "Sekolah",
      "B": "Polygon",
      "C": "Feature",
      "D": "Point"
    },
    "answer": "A",
    "explanation": {
      "correct": "Opsi `filter` menerima callback yang mengembalikan boolean. Evaluasi `feature.properties.tipe === 'Sekolah'` akan menyaring dan hanya merender fitur sekolah.",
      "A": "Benar. Menyaring nilai atribut pada objek feature.properties.",
      "B": "Salah. 'Polygon' adalah tipe geometri, bukan nilai atribut properti tipe.",
      "C": "Salah. 'Feature' adalah tipe objek GeoJSON.",
      "D": "Salah. 'Point' adalah tipe geometri."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-054",
    "level": "beginner",
    "topic": "GeoJSON Performance",
    "questionType": "best-practice",
    "question": "Jika Anda perlu menampilkan 20.000 titik lokasi di peta browser menggunakan Leaflet, pendekatan manakah yang paling direkomendasikan agar browser tidak lag?\n\n```javascript\n// Kasus: Merender 20.000 titik koordinat di browser klien.\n```",
    "code": "// Kasus: Merender 20.000 titik koordinat di browser klien.",
    "options": {
      "A": "Menggunakan plugin clustering seperti Leaflet.markercluster atau beralih ke Vector Tiles / Canvas rendering",
      "B": "Membuat 20.000 elemen DOM SVG L.marker satu per satu secara langsung",
      "C": "Menyimpan seluruh data di localStorage dan merefresh halaman setiap detik",
      "D": "Memperbesar ukuran gambar icon marker menjadi 4K"
    },
    "answer": "A",
    "explanation": {
      "correct": "Membuat 20.000 objek DOM marker langsung di browser akan menghancurkan performa rendering (FPS drop drastis karena overload DOM). Clustering mengelompokkan titik yang berdekatan menjadi satu representasi cluster, atau menggunakan Canvas layer untuk performa 60 FPS.",
      "A": "Benar. Clustering dan Canvas rendering mengeliminasi beban puluhan ribu node DOM di browser.",
      "B": "Salah. Puluhan ribu elemen DOM individual menyebabkan browser mengalami out of memory dan freeze.",
      "C": "Salah. LocalStorage dan refresh tidak membantu efisiensi rendering grafis browser.",
      "D": "Salah. Gambar resolusi tinggi justru memboroskan bandwidth dan GPU fillrate."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-055",
    "level": "beginner",
    "topic": "Database Spatial Storage",
    "questionType": "best-practice",
    "question": "Tipe data PostGIS manakah yang paling direkomendasikan untuk menyimpan data lintang/bujur GPS global jika Anda sering melakukan kalkulasi jarak nyata di muka bumi?\n\n```sql\n-- Pemilihan tipe data kolom lokasi pengguna:\n```",
    "code": "-- Pemilihan tipe data kolom lokasi pengguna:",
    "options": {
      "A": "geography(Point, 4326)",
      "B": "VARCHAR(255) menyimpan string 'lat,lng'",
      "C": "DOUBLE PRECISION dua kolom terpisah tanpa ekstensi spasial",
      "D": "BYTEA mentah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe `geography(Point, 4326)` secara native memperlakukan koordinat di permukaan lengkung bola bumi (great-circle geodesic), sehingga ST_Distance otomatis menghasilkan jarak dalam satuan meter tanpa distorsi proyeksi.",
      "A": "Benar. Tipe geography otomatis menggunakan kalkulasi sferis permukaan bumi dalam satuan meter.",
      "B": "Salah. VARCHAR tidak mendukung operasi geometri dan indeks spasial GiST.",
      "C": "Salah. Dua kolom numerik biasa tidak bisa memanfaatkan fungsi spasial dan indeks spasial PostGIS.",
      "D": "Salah. BYTEA tidak memiliki metadata spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-056",
    "level": "beginner",
    "topic": "API Payload Optimization",
    "questionType": "best-practice",
    "question": "Dalam mentransmisikan data GeoJSON dari backend Spring Boot ke frontend React, apa praktik terbaik terkait presisi angka desimal koordinat GPS?\n\n```javascript\n// Contoh koordinat: 106.8456128472918472 vs 106.845613\n```",
    "code": "// Contoh koordinat: 106.8456128472918472 vs 106.845613",
    "options": {
      "A": "Membulatkan koordinat hingga 5 atau 6 tempat desimal (~1 meter atau ~10 cm presisi) untuk memangkas ukuran payload JSON hingga 50%",
      "B": "Menyimpan hingga 20 angka desimal di belakang koma untuk akurasi nanometer",
      "C": "Menghapus tanda titik desimal dan mengubahnya menjadi string hex",
      "D": "Mengirim seluruh koordinat dalam format file gambar BMP"
    },
    "answer": "A",
    "explanation": {
      "correct": "Presisi 6 angka desimal pada derajat GPS sudah setara dengan akurasi ~11 centimeter, yang lebih dari cukup untuk navigasi sipil. Memangkas angka desimal tak berguna (misal dari 15 digit ke 6 digit) secara dramatis mereduksi ukuran file JSON dan mempercepat transfer jaringan.",
      "A": "Benar. 5-6 angka desimal memberikan akurasi tingkat meter/desimeter sekaligus menghemat bandwidth secara masif.",
      "B": "Salah. Presisi 20 digit tidak memiliki arti fisik pada perangkat GPS ponsel dan membuang memori.",
      "C": "Salah. Konversi custom hex menyulitkan parsing standar RFC GeoJSON di frontend.",
      "D": "Salah. Format gambar BMP tidak efisien untuk transmisi data vektor."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-057",
    "level": "beginner",
    "topic": "Map Usability & UX",
    "questionType": "best-practice",
    "question": "Mengapa sangat disarankan menonaktifkan zoom peta dengan scroll mouse (`scrollWheelZoom: false`) saat peta disematkan di tengah-tengah halaman artikel web panjang?\n\n```javascript\n// Konfigurasi Leaflet pada embed landing page:\nconst map = L.map(\"map\", { scrollWheelZoom: false });\n```",
    "code": "// Konfigurasi Leaflet pada embed landing page:\nconst map = L.map(\"map\", { scrollWheelZoom: false });",
    "options": {
      "A": "Mencegah 'scroll trap' di mana pengguna yang ingin menggulir halaman ke bawah secara tidak sengaja terperangkap zooming peta",
      "B": "Scroll mouse dapat merusak sensor perangkat keras mouse",
      "C": "Leaflet melarang scroll mouse pada semua website komersial",
      "D": "Browser Chromium mematikan event wheel secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fenomena 'scroll trap' terjadi ketika pengguna menggeser scroll wheel untuk membaca halaman artikel, tetapi kursor melewati wadah peta sehingga scrolling halaman berhenti dan peta malah melakukan zoom in/out tak diinginkan.",
      "A": "Benar. Mencegah scroll trap menjaga kenyamanan navigasi pengguna pada halaman web panjang.",
      "B": "Salah. Scroll wheel tidak merusak perangkat keras.",
      "C": "Salah. Leaflet mengizinkan scrollWheelZoom dan mengaktifkannya secara default.",
      "D": "Salah. Browser tidak mematikan wheel event."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-058",
    "level": "beginner",
    "topic": "Leaflet Cleanup & Memory Leaks",
    "questionType": "best-practice",
    "question": "Pada Single Page Application (SPA) seperti React atau Vue, apa yang wajib dilakukan saat komponen peta di-unmount?\n\n```javascript\n// React useEffect cleanup:\nuseEffect(() => {\n  const map = L.map(\"mapId\");\n  return () => {\n    // Apa yang wajib dipanggil di sini?\n  };\n}, []);\n```",
    "code": "// React useEffect cleanup:\nuseEffect(() => {\n  const map = L.map(\"mapId\");\n  return () => {\n    // Apa yang wajib dipanggil di sini?\n  };\n}, []);",
    "options": {
      "A": "map.remove()",
      "B": "map.close()",
      "C": "delete window.L",
      "D": "map = null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `map.remove()` mencopot seluruh event listener, membersihkan layer dari memori DOM, dan menghancurkan instance internal Leaflet. Tanpa `map.remove()`, akan terjadi memory leak dan error 'Map container is already initialized' saat komponen dibuka kembali.",
      "A": "Benar. map.remove() membersihkan listener dan DOM untuk mencegah memory leak pada SPA.",
      "B": "Salah. close() bukan method penghancur instance peta.",
      "C": "Salah. Menghapus objek global window.L merusak pustaka Leaflet untuk komponen lain.",
      "D": "Salah. Hanya meng-assign null tidak mencopot event listener yang sudah terdaftar di window/DOM."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-059",
    "level": "beginner",
    "topic": "Spatial Projection EPSG",
    "questionType": "best-practice",
    "question": "Sistem proyeksi manakah yang menjadi standar internasional untuk tile peta web interaktif (Google Maps, OSM, Leaflet, Mapbox)?\n\n```sql\n// Web Mapping Projection Standard:\n```",
    "code": "// Web Mapping Projection Standard:",
    "options": {
      "A": "EPSG:3857 (Web Mercator / Pseudo-Mercator)",
      "B": "EPSG:4326 (Unprojected Plate Carree murni)",
      "C": "EPSG:23830 (DGN95 Indonesia UTM Zone 48S)",
      "D": "EPSG:32649 (WGS 84 UTM Zone 49N)"
    },
    "answer": "A",
    "explanation": {
      "correct": "EPSG:3857 (Web Mercator) adalah standar de facto untuk web tile maps karena memproyeksikan bumi ke dalam bidang datar persegi sempurna yang mudah dipotong menjadi grid tile berukuran 256x256 atau 512x512 pixel.",
      "A": "Benar. EPSG:3857 adalah standar proyeksi tile peta web dunia.",
      "B": "Salah. EPSG:4326 adalah koordinat elipsoid geografis (derajat), bukan proyeksi bidang datar tile web.",
      "C": "Salah. UTM Zone 48S adalah proyeksi lokal regional Indonesia bagian barat.",
      "D": "Salah. UTM Zone 49N adalah proyeksi lokal belahan bumi utara."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-060",
    "level": "beginner",
    "topic": "Spatial Queries Pagination",
    "questionType": "best-practice",
    "question": "Bagaimana cara terbaik membatasi jumlah data spasial yang dikembalikan ke web map saat pengguna melakukan pan/zoom?\n\n```sql\n-- Endpoint: GET /api/features?bbox=minX,minY,maxX,maxY\n```",
    "code": "-- Endpoint: GET /api/features?bbox=minX,minY,maxX,maxY",
    "options": {
      "A": "Hanya mengambil data yang berada di dalam Bounding Box tampilan layar (BBOX filter) menggunakan ST_MakeEnvelope",
      "B": "Mengambil seluruh 1.000.000 baris tabel database ke frontend lalu memfilternya di browser",
      "C": "Mengembalikan semua baris tetapi tanpa koordinat",
      "D": "Mematikan fitur pan dan zoom di frontend"
    },
    "answer": "A",
    "explanation": {
      "correct": "Teknik BBOX query (`WHERE ST_Intersects(geom, ST_MakeEnvelope(minX, minY, maxX, maxY, 4326))`) memastikan database hanya mengirimkan fitur yang saat itu benar-benar terlihat di layar pengguna, meminimalisir bandwidth dan CPU secara drastis.",
      "A": "Benar. BBOX filter memanfaatkan indeks spasial dan hanya mentransfer data yang terlihat di layar.",
      "B": "Salah. Mengunduh 1 juta baris ke browser akan membuat koneksi timeout dan browser crash.",
      "C": "Salah. Data spasial tanpa koordinat tidak dapat dirender di peta.",
      "D": "Salah. Mematikan pan/zoom merusak interaktivitas dasar peta web."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-061",
    "level": "beginner",
    "topic": "GeoJSON Validation",
    "questionType": "best-practice",
    "question": "Sebelum memproses file GeoJSON yang diunggah oleh pengguna ke server, apa langkah pengujian keamanan dan validasi terbaik?\n\n```javascript\n// Validasi upload GeoJSON di backend:\n```",
    "code": "// Validasi upload GeoJSON di backend:",
    "options": {
      "A": "Memvalidasi skema JSON terhadap standar RFC 7946, membatasi ukuran file, dan memverifikasi batas koordinat valid (-180 s/d 180 lon, -90 s/d 90 lat)",
      "B": "Langsung menyisipkan isi file ke string kueri database tanpa sanitasi",
      "C": "Mengizinkan file berukuran tak terbatas tanpa batas kuota memori",
      "D": "Hanya mengecek ekstensi nama file .geojson tanpa memeriksa isinya"
    },
    "answer": "A",
    "explanation": {
      "correct": "Validasi ketat skema RFC 7946 memastikan integritas data, mencegah serangan Denial of Service (DoS) dari file raksasa (Zip Bomb / GeoJSON raksasa), dan mencegah SQL Injection atau malformed geometry di database.",
      "A": "Benar. Validasi skema, ukuran batas, dan range koordinat menjamin keamanan dan stabilitas server.",
      "B": "Salah. Menempelkan data mentah langsung memicu kerentanan SQL Injection.",
      "C": "Salah. File tak terbatas membuka celah serangan kehabisan memori server (OOM DoS).",
      "D": "Salah. Ekstensi file sangat mudah dipalsukan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-062",
    "level": "beginner",
    "topic": "Leaflet Attribution",
    "questionType": "best-practice",
    "question": "Mengapa menyertakan atribusi (attribution) hak cipta saat menggunakan tile OpenStreetMap atau CartoDB di Leaflet bersifat wajib?\n\n```javascript\n// Opsi attribution di L.tileLayer:\n```",
    "code": "// Opsi attribution di L.tileLayer:",
    "options": {
      "A": "Merupakan syarat lisensi hukum (Open Data Commons / CC-BY-SA) dan menghormati kontributor komunitas pembuat data",
      "B": "Jika attribution tidak ditulis, browser akan mematikan koneksi internet pengguna",
      "C": "Server tile akan mengenakan denda finansial otomatis melalui cookie browser",
      "D": "Leaflet akan melempar fatal exception di console"
    },
    "answer": "A",
    "explanation": {
      "correct": "Data OpenStreetMap dilisensikan di bawah ODbL yang secara legal mewajibkan atribusi pencantuman sumber data ('© OpenStreetMap contributors'). Menghapus atribusi melanggar lisensi penggunaan layanan gratis mereka.",
      "A": "Benar. Wajib hukum sesuai lisensi lisensi ODbL / Creative Commons.",
      "B": "Salah. Browser tidak mematikan koneksi internet karena hilangnya atribusi.",
      "C": "Salah. Tidak ada mekanisme denda via cookie browser.",
      "D": "Salah. Leaflet tidak melempar fatal exception, tetapi melanggar etika dan lisensi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-063",
    "level": "beginner",
    "topic": "Spatial Table Vacuuming",
    "questionType": "best-practice",
    "question": "Mengapa tabel PostgreSQL/PostGIS yang sering mengalami operasi UPDATE/DELETE data spasial secara massal membutuhkan `VACUUM ANALYZE` secara berkala?\n\n```sql\n-- Pemeliharaan database spasial:\nVACUUM ANALYZE spatial_table;\n```",
    "code": "-- Pemeliharaan database spasial:\nVACUUM ANALYZE spatial_table;",
    "options": {
      "A": "Membersihkan dead tuples (bloat) dan memperbarui statistik sebaran spasial agar query planner memilih indeks GiST yang tepat",
      "B": "Mengubah seluruh koordinat 2D menjadi 3D secara otomatis",
      "C": "Menghapus seluruh tabel dan membuat ulang struktur dari nol",
      "D": "Mengunci database secara permanen agar tidak bisa diakses hacker"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostgreSQL menggunakan MVCC di mana update/delete meninggalkan dead tuple. Tanpa VACUUM, indeks GiST membesar (bloat) dan lambat. ANALYZE memperbarui histogram statistik distribusi geometri sehingga perencana kueri mengambil indeks terbaik.",
      "A": "Benar. Membersihkan ruang kosong (dead tuples) dan memperbarui statistik perencana kueri spasial.",
      "B": "Salah. VACUUM tidak mengubah dimensi data koordinat.",
      "C": "Salah. VACUUM tidak menghapus tabel.",
      "D": "Salah. VACUUM adalah proses pemeliharaan rutin tanpa mengunci permanen."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-064",
    "level": "beginner",
    "topic": "Client-side Styling Separation",
    "questionType": "best-practice",
    "question": "Pendekatan manakah yang paling bersih (clean architecture) untuk mengatur style warna layer GeoJSON berdasarkan kategori propertinya di frontend?\n\n```javascript\n// Pemisahan konfigurasi styling kategori:\n```",
    "code": "// Pemisahan konfigurasi styling kategori:",
    "options": {
      "A": "Mendefinisikan dictionary/peta warna terpisah (misal: COLOR_MAP = { RS: 'red', Sekolah: 'blue' }) dan mengaksesnya di fungsi style",
      "B": "Menulis if-else bertingkat 50 baris di dalam file HTML langsung",
      "C": "Menyimpan kode warna heksadesimal langsung di kolom database untuk setiap baris",
      "D": "Menggunakan warna acak Math.random() setiap kali peta digeser"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memisahkan aturan gaya ke dalam lookup object/dictionary (`COLOR_MAP`) menjaga kode tetap modular, mudah dikonfigurasi ulang (maintainable), dan tidak mencemari layer presentasi dengan hardcoded logic berlebih.",
      "A": "Benar. Lookup dictionary memisahkan aturan bisnis styling dari fungsi render layer.",
      "B": "Salah. If-else raksasa menyulitkan pengujian dan refactoring.",
      "C": "Salah. Menyimpan styling di database mencampuradukkan data murni dengan representasi tampilan klien.",
      "D": "Salah. Warna acak membuat visualisasi tidak konsisten dan membingungkan pengguna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-065",
    "level": "beginner",
    "topic": "CRS / SRID Selection",
    "questionType": "best-practice",
    "question": "Jika Anda membangun aplikasi GIS khusus pemetaan kota DKI Jakarta dengan kebutuhan pengukuran luas persil tanah yang presisi hingga sentimeter, CRS manakah yang paling tepat?\n\n```sql\n// Pemilihan CRS untuk analisis bidang tanah di Jakarta:\n```",
    "code": "// Pemilihan CRS untuk analisis bidang tanah di Jakarta:",
    "options": {
      "A": "DGN95 / Indonesia TM-3 zone 48.2 (atau UTM Zone 48S / EPSG:32748)",
      "B": "WGS 84 Unprojected (EPSG:4326)",
      "C": "Web Mercator (EPSG:3857)",
      "D": "Proyeksi Kutub Utara (EPSG:3413)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Untuk perhitungan jarak dan luas kadastral tanah yang akurat tanpa distorsi proyeksi global, wajib menggunakan sistem proyeksi conformal lokal terproyeksi planar seperti UTM Zone 48S (EPSG:32748) atau TM-3 BPN, yang memiliki satuan meter riil.",
      "A": "Benar. Proyeksi grid lokal UTM Zone 48S meminimalisir distorsi skala untuk wilayah Jakarta.",
      "B": "Salah. EPSG:4326 bersatuan derajat sudut dan tidak cocok untuk kalkulasi kadastral planar langsung.",
      "C": "Salah. Web Mercator mengalami distorsi skala yang cukup signifikan di garis lintang tertentu.",
      "D": "Salah. Proyeksi Kutub Utara tidak relevan untuk wilayah khatulistiwa Indonesia."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-066",
    "level": "beginner",
    "topic": "Leaflet Responsive Map Viewport",
    "questionType": "best-practice",
    "question": "Saat ukuran layar browser berubah (misalnya resize jendela atau rotasi layar smartphone), method peta apa yang harus dipanggil agar Leaflet mengkalkulasi ulang ukuran view-nya?\n\n```javascript\nwindow.addEventListener(\"resize\", () => {\n  // Method apa yang perlu dipanggil pada instance map?\n  map.___();\n});\n```",
    "code": "window.addEventListener(\"resize\", () => {\n  // Method apa yang perlu dipanggil pada instance map?\n  map.___();\n});",
    "options": {
      "A": "invalidateSize",
      "B": "recalculate",
      "C": "updateViewport",
      "D": "refreshBounds"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `map.invalidateSize()` memeriksa dimensi kontainer DOM saat ini dan memuat tile/merender ulang area yang baru terbuka, mencegah tampilan peta terpotong atau berwarna abu-abu saat container di-resize.",
      "A": "Benar. invalidateSize() memerintahkan Leaflet membaca ulang ukuran container DOM.",
      "B": "Salah. recalculate bukan method Leaflet.",
      "C": "Salah. updateViewport bukan method resmi Leaflet.",
      "D": "Salah. refreshBounds bukan method bawaan Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-067",
    "level": "beginner",
    "topic": "Spatial SQL Index Usage",
    "questionType": "best-practice",
    "question": "Untuk memeriksa keberadaan titik di dalam area poligon pada tabel berisi 500.000 poligon, penulisan kueri manakah yang paling optimal memanfaatkan indeks GiST?\n\n```sql\n-- Mencari poligon yang melingkupi titik p:\n```",
    "code": "-- Mencari poligon yang melingkupi titik p:",
    "options": {
      "A": "SELECT id FROM parcels WHERE geom && ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326) AND ST_Contains(geom, ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326));",
      "B": "SELECT id FROM parcels WHERE ST_Distance(geom, ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326)) = 0;",
      "C": "SELECT id FROM parcels WHERE geom::text LIKE '%106.8%';",
      "D": "SELECT id FROM parcels ORDER BY id;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menggunakan operator bounding box `&&` terlebih dahulu (atau fungsi `ST_Contains` yang secara internal sudah mengintegrasikan `&&`) menyaring 99.9% kandidat poligon secara instan melalui indeks GiST sebelum mengevaluasi kalkulasi geometrik eksak.",
      "A": "Benar. Filter BBOX (&&) mengeliminasi sebagian besar poligon non-kandidat dengan kecepatan indeks O(log N).",
      "B": "Salah. ST_Distance = 0 melakukan sequential scan penuh tanpa memanfaatkan indeks spasial secara optimal.",
      "C": "Salah. Konversi ke text dengan LIKE merusak makna topologi spasial dan sangat lambat.",
      "D": "Salah. Tidak melakukan penyaringan lokasi spasial sama sekali."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-068",
    "level": "beginner",
    "topic": "GeoJSON Layer ID & Keying",
    "questionType": "best-practice",
    "question": "Saat mengelola layer GeoJSON dinamis di frontend, mengapa setiap fitur GeoJSON sangat disarankan memiliki properti `id` unik pada level root feature (`feature.id`)?\n\n```javascript\n// Contoh: { type: \"Feature\", id: \"poi-101\", geometry: {...}, properties: {...} }\n```",
    "code": "// Contoh: { type: \"Feature\", id: \"poi-101\", geometry: {...}, properties: {...} }",
    "options": {
      "A": "Mempermudah pembaruan state per fitur (seperti setFeatureState di vector tiles), caching efisien, dan manipulasi layer individual",
      "B": "Jika feature tidak memiliki id, Leaflet akan menghapus data tersebut",
      "C": "Browser tidak mengizinkan pengiriman JSON tanpa properti id",
      "D": "Agar ukuran file menjadi lebih besar"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menyediakan `id` unik di level feature memungkinkan library peta memetakan layer secara instan (O(1) lookup), melakukan update atribut tanpa me-reload seluruh dataset, serta mengelola hover state secara reaktif.",
      "A": "Benar. ID unik memfasilitasi pelacakan state dan seleksi fitur individual secara efisien.",
      "B": "Salah. Leaflet tetap merender feature meskipun tanpa id, namun manipulasi selektif menjadi sulit.",
      "C": "Salah. JSON standar tidak mewajibkan properti id.",
      "D": "Salah. Menambah ukuran file bukan tujuan arsitektural."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-069",
    "level": "beginner",
    "topic": "PostgreSQL/MySQL",
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "topic": "Turf.js Spatial Analysis",
    "questionType": "output",
    "question": "Apa output dari fungsi turf.booleanPointInPolygon berikut?\n\n```javascript\nconst pt = turf.point([106.8272, -6.1754]); // Titik Monas\nconst poly = turf.polygon([[ \n  [106.82, -6.18], [106.84, -6.18], [106.84, -6.17], [106.82, -6.17], [106.82, -6.18] \n]]);\nconsole.log(turf.booleanPointInPolygon(pt, poly));\n```",
    "code": "const pt = turf.point([106.8272, -6.1754]); // Titik Monas\nconst poly = turf.polygon([[ \n  [106.82, -6.18], [106.84, -6.18], [106.84, -6.17], [106.82, -6.17], [106.82, -6.18] \n]]);\nconsole.log(turf.booleanPointInPolygon(pt, poly));",
    "options": {
      "A": "true",
      "B": "false",
      "C": "undefined",
      "D": "null"
    },
    "answer": "A",
    "explanation": {
      "correct": "Titik Monas (106.8272, -6.1754) berada di dalam bounding box poligon [106.82 s/d 106.84 lon] dan [-6.18 s/d -6.17 lat]. Sehingga turf.booleanPointInPolygon mengembalikan true.",
      "A": "Benar. Koordinat titik berada di dalam interior cincin koordinat poligon.",
      "B": "Salah. Titik terletak di dalam poligon.",
      "C": "Salah. Turf.js mengembalikan nilai boolean murni.",
      "D": "Salah. Fungsi tidak mengembalikan nilai null."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-152",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Intersection",
    "questionType": "output",
    "question": "Apa geometri yang dihasilkan dari perpotongan dua poligon persegi berikut?\n\n```sql\nSELECT ST_AsText(ST_Intersection(\n  ST_GeomFromText('POLYGON((0 0, 2 0, 2 2, 0 2, 0 0))'),\n  ST_GeomFromText('POLYGON((1 0, 3 0, 3 2, 1 2, 1 0))')\n));\n```",
    "code": "SELECT ST_AsText(ST_Intersection(\n  ST_GeomFromText('POLYGON((0 0, 2 0, 2 2, 0 2, 0 0))'),\n  ST_GeomFromText('POLYGON((1 0, 3 0, 3 2, 1 2, 1 0))')\n));",
    "options": {
      "A": "POLYGON((1 0, 2 0, 2 2, 1 2, 1 0))",
      "B": "POINT(1 1)",
      "C": "LINESTRING(1 0, 2 2)",
      "D": "GEOMETRYCOLLECTION EMPTY"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kedua poligon bertumpukan pada rentang X antara 1 dan 2, serta Y antara 0 dan 2. Hasil perpotongannya adalah poligon persegi panjang baru: POLYGON((1 0, 2 0, 2 2, 1 2, 1 0)).",
      "A": "Benar. Irisan dua poligon yang overlap membentuk poligon baru.",
      "B": "Salah. Irisan memiliki luas area dua dimensi, bukan single point.",
      "C": "Salah. Irisan bukan berupa garis satu dimensi.",
      "D": "Salah. Kedua geometri saling bertumpukan sehingga tidak empty."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-153",
    "level": "intermediate",
    "topic": "Leaflet pointToLayer",
    "questionType": "output",
    "question": "Di Leaflet, apa elemen visual default yang dirender saat opsi pointToLayer mengembalikan L.circleMarker?\n\n```javascript\nconst layer = L.geoJSON(geojsonPoints, {\n  pointToLayer: (feature, latlng) => L.circleMarker(latlng, { radius: 8 })\n});\n```",
    "code": "const layer = L.geoJSON(geojsonPoints, {\n  pointToLayer: (feature, latlng) => L.circleMarker(latlng, { radius: 8 })\n});",
    "options": {
      "A": "Elemen lingkaran vektor SVG/Canvas yang ukurannya tetap dalam pixel di layar terlepas dari level zoom",
      "B": "Gambar pin marker PNG standar yang membesar saat di-zoom",
      "C": "Poligon persegi panjang 3D",
      "D": "Teks label tanpa simbol grafis"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.circleMarker merender lingkaran berbasis piksel tetap di layar browser (radius: 8px). Ukurannya tidak berubah membesar/mengecil saat zoom peta berubah, berbeda dengan L.circle yang radiusnya dalam satuan meter.",
      "A": "Benar. CircleMarker berukuran pixel konstan di layar dan dirender sebagai layer vektor.",
      "B": "Salah. CircleMarker tidak menggunakan gambar icon pin PNG.",
      "C": "Salah. Bentuk geometri yang dirender adalah lingkaran, bukan persegi panjang 3D.",
      "D": "Salah. CircleMarker adalah simbol vektor grafis, bukan sekadar teks."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-154",
    "level": "intermediate",
    "topic": "Spatial SQL Aggregate ST_Union",
    "questionType": "output",
    "question": "Apa hasil dari ST_Union pada dua poligon yang bersentuhan pada sisinya berikut?\n\n```sql\nSELECT ST_AsText(ST_Union(\n  ST_GeomFromText('POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))'),\n  ST_GeomFromText('POLYGON((1 0, 2 0, 2 1, 1 1, 1 0))')\n));\n```",
    "code": "SELECT ST_AsText(ST_Union(\n  ST_GeomFromText('POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))'),\n  ST_GeomFromText('POLYGON((1 0, 2 0, 2 1, 1 1, 1 0))')\n));",
    "options": {
      "A": "POLYGON((0 0, 2 0, 2 1, 0 1, 0 0))",
      "B": "MULTIPOLYGON(((0 0, 1 0, 1 1, 0 1, 0 0)), ((1 0, 2 0, 2 1, 1 1, 1 0)))",
      "C": "LINESTRING(1 0, 1 1)",
      "D": "POINT(1 0.5)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dua persegi satuan berdampingan yang berbagi garis sisi dari (1,0) ke (1,1) akan dilebur (dissolved) oleh ST_Union menjadi satu poligon persegi panjang berukuran 2x1.",
      "A": "Benar. Sisi bersama dilebur menjadi poligon utuh berukuran 2x1.",
      "B": "Salah. Karena keduanya bersentuhan pada sisi, ST_Union menyatukannya menjadi single polygon, bukan multipolygon.",
      "C": "Salah. ST_Union menggabungkan seluruh area poligon, bukan hanya batas sisinya.",
      "D": "Salah. Hasilnya adalah poligon 2D, bukan titik 0D."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-155",
    "level": "intermediate",
    "topic": "JavaScript Coordinate Reprojection with Proj4js",
    "questionType": "output",
    "question": "Apa output dari transformasi koordinat menggunakan proj4js berikut?\n\n```javascript\n// Proj4: EPSG:4326 to EPSG:3857 (Web Mercator)\nconst [x, y] = proj4(\"EPSG:4326\", \"EPSG:3857\", [0, 0]);\nconsole.log(`${Math.round(x)}, ${Math.round(y)}`);\n```",
    "code": "// Proj4: EPSG:4326 to EPSG:3857 (Web Mercator)\nconst [x, y] = proj4(\"EPSG:4326\", \"EPSG:3857\", [0, 0]);\nconsole.log(`${Math.round(x)}, ${Math.round(y)}`);",
    "options": {
      "A": "0, 0",
      "B": "100000, 100000",
      "C": "20037508, 20037508",
      "D": "NaN, NaN"
    },
    "answer": "A",
    "explanation": {
      "correct": "Titik (0, 0) geografis (pertemuan garis khatulistiwa dan meridian utama / Null Island) adalah titik origin (0, 0) pada proyeksi Web Mercator EPSG:3857.",
      "A": "Benar. Origin (0, 0) pada WGS 84 tepat berada di origin (0, 0) Web Mercator.",
      "B": "Salah. Koordinat titik pusat tidak digeser menjadi 100.000 meter.",
      "C": "Salah. 20037508 meter adalah batas maksimum sumbu X/Y di kutub/antimeridian.",
      "D": "Salah. Transformasi koordinat valid dan menghasilkan angka numerik."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-156",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Buffer",
    "questionType": "output",
    "question": "Apa tipe geometri yang dihasilkan oleh ST_Buffer pada sebuah titik (Point)?\n\n```sql\nSELECT ST_GeometryType(ST_Buffer(ST_MakePoint(100, 0), 10));\n```",
    "code": "SELECT ST_GeometryType(ST_Buffer(ST_MakePoint(100, 0), 10));",
    "options": {
      "A": "ST_Polygon",
      "B": "ST_Point",
      "C": "ST_MultiPoint",
      "D": "ST_LineString"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operasi buffer pada objek berdimensi apa pun (titik, garis, atau poligon) selalu menghasilkan area bidang tertutup dua dimensi, yaitu tipe `ST_Polygon`.",
      "A": "Benar. Buffer memperluas geometri menjadi area poligon tertutup.",
      "B": "Salah. Buffer menghasilkan area, bukan titik.",
      "C": "Salah. Hasilnya bukan kumpulan titik diskrit.",
      "D": "Salah. Buffer menghasilkan poligon berongga/padat, bukan garis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-157",
    "level": "intermediate",
    "topic": "Leaflet LayerGroup vs FeatureGroup",
    "questionType": "output",
    "question": "Apa keunggulan utama `L.featureGroup` dibandingkan `L.layerGroup` saat ingin melakukan zoom ke seluruh layer?\n\n```javascript\nconst fg = L.featureGroup([marker1, marker2]).addTo(map);\nmap.fitBounds(fg.getBounds());\n```",
    "code": "const fg = L.featureGroup([marker1, marker2]).addTo(map);\nmap.fitBounds(fg.getBounds());",
    "options": {
      "A": "L.featureGroup menyediakan method getBounds() dan event handling gabungan, sedangkan L.layerGroup tidak memiliki getBounds()",
      "B": "L.featureGroup mematikan rendering WebGL",
      "C": "L.layerGroup tidak bisa menambahkan marker",
      "D": "L.featureGroup hanya bekerja pada sistem operasi Android"
    },
    "answer": "A",
    "explanation": {
      "correct": "`L.featureGroup` memperluas `L.layerGroup` dengan menambahkan kemampuan penghitungan bounding box (`getBounds()`) dan event propagation terpusat (klik pada layer anak otomatis terpicu pada featureGroup).",
      "A": "Benar. featureGroup memiliki method getBounds() yang esensial untuk map.fitBounds().",
      "B": "Salah. featureGroup tidak berhubungan dengan WebGL internal.",
      "C": "Salah. L.layerGroup dapat menambahkan marker dan layer apa saja.",
      "D": "Salah. Leaflet adalah library browser yang kompatibel lintas platform."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-158",
    "level": "intermediate",
    "topic": "PostGIS ST_Transform",
    "questionType": "output",
    "question": "Berapa SRID hasil transformasi geometri berikut?\n\n```sql\nSELECT ST_SRID(ST_Transform(ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326), 3857));\n```",
    "code": "SELECT ST_SRID(ST_Transform(ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326), 3857));",
    "options": {
      "A": "3857",
      "B": "4326",
      "C": "0",
      "D": "NULL"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi `ST_Transform(geom, target_srid)` mereproyeksi koordinat geometri dan secara otomatis memperbarui metadata SRID-nya menjadi SRID target, yaitu 3857.",
      "A": "Benar. Geometri hasil transformasi memiliki SRID target 3857.",
      "B": "Salah. 4326 adalah SRID asal sebelum transformasi.",
      "C": "Salah. ST_Transform menetapkan SRID target valid, bukan 0.",
      "D": "Salah. SRID bernilai integer valid, bukan NULL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-159",
    "level": "intermediate",
    "topic": "JavaScript GeoJSON Bounding Box",
    "questionType": "output",
    "question": "Berapa indeks panjang array bbox pada FeatureCollection standar GeoJSON 2D?\n\n```javascript\nconst fc = {\n  type: \"FeatureCollection\",\n  bbox: [100.0, -10.0, 110.0, 5.0],\n  features: []\n};\nconsole.log(fc.bbox.length);\n```",
    "code": "const fc = {\n  type: \"FeatureCollection\",\n  bbox: [100.0, -10.0, 110.0, 5.0],\n  features: []\n};\nconsole.log(fc.bbox.length);",
    "options": {
      "A": "4",
      "B": "2",
      "C": "6",
      "D": "8"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai RFC 7946, array `bbox` 2D memiliki 4 elemen dengan urutan [minX, minY, maxX, maxY] (atau [minLon, minLat, maxLon, maxLat]).",
      "A": "Benar. BBOX 2D memiliki 4 elemen [minX, minY, maxX, maxY].",
      "B": "Salah. 2 hanya merepresentasikan satu titik koordinat.",
      "C": "Salah. 6 adalah panjang untuk 3D bounding box [minX, minY, minZ, maxX, maxY, maxZ].",
      "D": "Salah. Format standar GeoJSON tidak menggunakan 8 elemen."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-160",
    "level": "intermediate",
    "topic": "Spatial SQL ST_DWithin vs ST_Distance",
    "questionType": "output",
    "question": "Mengapa kueri menggunakan ST_DWithin dapat memanfaatkan indeks GiST sedangkan klausa 'ST_Distance(...) < N' sering kali tidak?\n\n```sql\n-- Query A: WHERE ST_DWithin(geom, target, 100)\n-- Query B: WHERE ST_Distance(geom, target) < 100\n```",
    "code": "-- Query A: WHERE ST_DWithin(geom, target, 100)\n-- Query B: WHERE ST_Distance(geom, target) < 100",
    "options": {
      "A": "ST_DWithin secara implisit menyertakan bounding box expansion operator '&&' yang dapat dicari oleh indeks GiST",
      "B": "ST_Distance dilarang dijalankan di PostgreSQL",
      "C": "ST_DWithin hanya bekerja pada tabel kosong",
      "D": "Indeks GiST tidak mendukung angka 100"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_DWithin(A, B, dist)` otomatis mengevaluasi `A && ST_Expand(B, dist)` terlebih dahulu, memungkinkan PostgreSQL memfilter baris via indeks spasial sebelum kalkulasi jarak presisi dilakukan.",
      "A": "Benar. ST_DWithin mengintegrasikan bounding box expand (&&) sehingga fully index-accelerated.",
      "B": "Salah. ST_Distance adalah fungsi resmi PostGIS yang valid.",
      "C": "Salah. ST_DWithin bekerja pada tabel dengan jutaan baris data.",
      "D": "Salah. Indeks GiST mendukung rentang jarak angka desimal apa pun."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-161",
    "level": "intermediate",
    "topic": "Turf.js Distance Calculation",
    "questionType": "output",
    "question": "Satuan default apakah yang dikembalikan oleh fungsi `turf.distance(point1, point2)` jika tidak ada opsi units yang ditentukan?\n\n```javascript\nconst d = turf.distance(turf.point([106.8, -6.2]), turf.point([107.6, -6.9]));\n// Satuan apa yang dikembalikan d?\n```",
    "code": "const d = turf.distance(turf.point([106.8, -6.2]), turf.point([107.6, -6.9]));\n// Satuan apa yang dikembalikan d?",
    "options": {
      "A": "Kilometers",
      "B": "Meters",
      "C": "Miles",
      "D": "Degrees"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, pustaka analisis spasial Turf.js mengembalikan jarak dalam satuan kilometer ('kilometers'), kecuali opsi units ditentukan (seperti `{ units: 'meters' }`).",
      "A": "Benar. Default unit pada turf.distance adalah kilometers.",
      "B": "Salah. Meter harus ditentukan secara eksplisit dengan { units: 'meters' }.",
      "C": "Salah. Miles bukan default unit Turf.js.",
      "D": "Salah. Turf.js menghitung jarak geosentris permukaan bumi, bukan derajat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-162",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON Style Data-Driven",
    "questionType": "output",
    "question": "Warna apa yang akan diberikan pada poligon zona risiko berikut jika feature memiliki level = 3?\n\n```javascript\nfunction getRiskColor(level) {\n  return level >= 4 ? \"red\" : level >= 2 ? \"orange\" : \"green\";\n}\nconst style = { color: getRiskColor(3) };\nconsole.log(style.color);\n```",
    "code": "function getRiskColor(level) {\n  return level >= 4 ? \"red\" : level >= 2 ? \"orange\" : \"green\";\n}\nconst style = { color: getRiskColor(3) };\nconsole.log(style.color);",
    "options": {
      "A": "orange",
      "B": "red",
      "C": "green",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "level 3 < 4 (false), lalu 3 >= 2 (true). Nilai kembaliannya adalah 'orange'.",
      "A": "Benar. Nilai 3 masuk ke dalam rentang [2, 4) sehingga menghasilkan warna 'orange'.",
      "B": "Salah. Level 3 belum mencapai batas level 4.",
      "C": "Salah. 'green' hanya diberikan untuk level < 2.",
      "D": "Salah. Fungsi mengembalikan string warna valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-163",
    "level": "intermediate",
    "topic": "PostGIS ST_ConvexHull",
    "questionType": "output",
    "question": "Apa output dari fungsi ST_ConvexHull pada sekumpulan titik?\n\n```sql\nSELECT ST_GeometryType(ST_ConvexHull(ST_Collect(geom))) FROM sensor_nodes;\n```",
    "code": "SELECT ST_GeometryType(ST_ConvexHull(ST_Collect(geom))) FROM sensor_nodes;",
    "options": {
      "A": "ST_Polygon (selubung cembung terkecil yang membungkus semua titik)",
      "B": "ST_Point",
      "C": "ST_LineString lurus tak terhingga",
      "D": "Raster Band"
    },
    "answer": "A",
    "explanation": {
      "correct": "Convex Hull adalah poligon cembung terkecil (seperti karet gelang yang dilepaskan mengelilingi paku) yang membungkus seluruh titik di dalamnya, bertipe `ST_Polygon` (atau LineString jika collinear).",
      "A": "Benar. Convex Hull membungkus sebaran titik menjadi poligon batas cembung terluar.",
      "B": "Salah. Convex hull dari sebaran titik 2D menghasilkan poligon penutup.",
      "C": "Salah. Hasilnya adalah poligon tertutup, bukan garis lurus terbuka.",
      "D": "Salah. Convex hull adalah operasi vektor, bukan raster."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-164",
    "level": "intermediate",
    "topic": "Leaflet Event Target",
    "questionType": "output",
    "question": "Dalam event listener klik Leaflet, bagaimana cara mengakses objek layer marker yang sedang diklik?\n\n```javascript\nmarker.on(\"click\", function(e) {\n  // Bagaimana cara mengakses layer yang memicu event?\n  console.log(e.___.getLatLng());\n});\n```",
    "code": "marker.on(\"click\", function(e) {\n  // Bagaimana cara mengakses layer yang memicu event?\n  console.log(e.___.getLatLng());\n});",
    "options": {
      "A": "target",
      "B": "source",
      "C": "layerId",
      "D": "domNode"
    },
    "answer": "A",
    "explanation": {
      "correct": "Objek event Leaflet (`LeafletEvent`) menyematkan referensi ke layer yang memancarkan event pada properti `e.target`.",
      "A": "Benar. e.target adalah referensi langsung ke layer pemicu event.",
      "B": "Salah. source bukan properti standar event Leaflet.",
      "C": "Salah. layerId adalah integer internal Leaflet, bukan objek layer itu sendiri.",
      "D": "Salah. domNode bukan properti event Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-165",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Length",
    "questionType": "output",
    "question": "Apa hasil ST_Length untuk LINESTRING(0 0, 3 4) pada koordinat Cartesian?\n\n```sql\nSELECT ST_Length(ST_GeomFromText('LINESTRING(0 0, 3 4)'));\n```",
    "code": "SELECT ST_Length(ST_GeomFromText('LINESTRING(0 0, 3 4)'));",
    "options": {
      "A": "5",
      "B": "7",
      "C": "25",
      "D": "12"
    },
    "answer": "A",
    "explanation": {
      "correct": "Berdasarkan teorema Pythagoras: akar kuadrat dari ((3 - 0)^2 + (4 - 0)^2) = akar(9 + 16) = akar(25) = 5.",
      "A": "Benar. Panjang hipotenusa segitiga 3-4-5 adalah 5.",
      "B": "Salah. 7 adalah hasil penjumlahan langsung dx + dy.",
      "C": "Salah. 25 adalah kuadrat panjang garis.",
      "D": "Salah. 12 bukan nilai panjang Euclidean garis tersebut."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-166",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON Custom Filter",
    "questionType": "output",
    "question": "Berapa jumlah fitur yang berhasil dirender ke peta pada kode berikut?\n\n```javascript\nconst data = {\n  type: \"FeatureCollection\",\n  features: [\n    { type: \"Feature\", properties: { active: true }, geometry: { type: \"Point\", coordinates: [0, 0] } },\n    { type: \"Feature\", properties: { active: false }, geometry: { type: \"Point\", coordinates: [1, 1] } },\n    { type: \"Feature\", properties: { active: true }, geometry: { type: \"Point\", coordinates: [2, 2] } }\n  ]\n};\nconst layer = L.geoJSON(data, { filter: f => f.properties.active });\nconsole.log(layer.getLayers().length);\n```",
    "code": "const data = {\n  type: \"FeatureCollection\",\n  features: [\n    { type: \"Feature\", properties: { active: true }, geometry: { type: \"Point\", coordinates: [0, 0] } },\n    { type: \"Feature\", properties: { active: false }, geometry: { type: \"Point\", coordinates: [1, 1] } },\n    { type: \"Feature\", properties: { active: true }, geometry: { type: \"Point\", coordinates: [2, 2] } }\n  ]\n};\nconst layer = L.geoJSON(data, { filter: f => f.properties.active });\nconsole.log(layer.getLayers().length);",
    "options": {
      "A": "2",
      "B": "3",
      "C": "1",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Opsi filter hanya menyaring fitur dengan `f.properties.active === true`. Ada 2 fitur yang bernilai true, sehingga `layer.getLayers().length` bernilai 2.",
      "A": "Benar. Fitur kedua disaring keluar karena active = false, menyisakan 2 fitur.",
      "B": "Salah. 3 adalah total seluruh fitur tanpa filter.",
      "C": "Salah. Ada 2 fitur aktif, bukan hanya 1.",
      "D": "Salah. Fitur aktif berhasil dimuat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-167",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Disjoint",
    "questionType": "output",
    "question": "Apa arti nilai kembalian true dari ST_Disjoint(A, B)?\n\n```sql\nSELECT ST_Disjoint(geom_a, geom_b); -- mengembalikan true\n```",
    "code": "SELECT ST_Disjoint(geom_a, geom_b); -- mengembalikan true",
    "options": {
      "A": "Kedua geometri saling lepas sepenuhnya dan tidak berbagi titik temu apa pun",
      "B": "Kedua geometri beririsan sebagian",
      "C": "Geometri A berada di dalam geometri B",
      "D": "Kedua geometri identik persis"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Disjoint` adalah kebalikan mutlak dari `ST_Intersects`. Mengembalikan true jika perpotongan kedua geometri adalah himpunan kosong (tidak bersentuhan sama sekali).",
      "A": "Benar. Disjoint berarti saling lepas tanpa perpotongan ruang sama sekali.",
      "B": "Salah. Jika beririsan, ST_Disjoint mengembalikan false.",
      "C": "Salah. Kondisi di dalam didefinisikan oleh ST_Within / ST_Contains.",
      "D": "Salah. Geometri identik dievaluasi oleh ST_Equals."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-168",
    "level": "intermediate",
    "topic": "JavaScript Turf.js Buffer",
    "questionType": "output",
    "question": "Apa yang dihasilkan oleh turf.buffer pada sebuah Feature GeoJSON?\n\n```javascript\nconst buffered = turf.buffer(myPointFeature, 5, { units: \"kilometers\" });\nconsole.log(buffered.geometry.type);\n```",
    "code": "const buffered = turf.buffer(myPointFeature, 5, { units: \"kilometers\" });\nconsole.log(buffered.geometry.type);",
    "options": {
      "A": "Polygon",
      "B": "Point",
      "C": "LineString",
      "D": "MultiPoint"
    },
    "answer": "A",
    "explanation": {
      "correct": "Buffer sejauh 5 kilometer di sekitar titik akan menghasilkan poligon sirkular yang membungkus titik tersebut, sehingga bertipe 'Polygon'.",
      "A": "Benar. turf.buffer menghasilkan geometri Polygon.",
      "B": "Salah. Hasil buffer adalah bidang luasan, bukan Point.",
      "C": "Salah. Buffer menghasilkan area tertutup, bukan LineString.",
      "D": "Salah. Bukan berupa MultiPoint."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-169",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Dump",
    "questionType": "output",
    "question": "Fungsi apa yang dilakukan oleh ST_Dump pada geometri bertipe MULTIPOLYGON?\n\n```sql\nSELECT (ST_Dump(multi_geom)).geom FROM multi_table;\n```",
    "code": "SELECT (ST_Dump(multi_geom)).geom FROM multi_table;",
    "options": {
      "A": "Memecah geometri multi-bagian (MULTIPOLYGON) menjadi baris-baris poligon individual (POLYGON)",
      "B": "Menghapus geometri dari database secara permanen",
      "C": "Menyimpan geometri ke file teks .txt di server",
      "D": "Mengonversi poligon menjadi format raster"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Dump` mengembalikan set tipe data `geometry_dump` (path integer[] dan geom geometry) yang memecah komponen-komponen penyusun geometri multi-part menjadi baris-baris record terpisah.",
      "A": "Benar. ST_Dump memecah multi-geometri menjadi single geometri individual per baris.",
      "B": "Salah. ST_Dump tidak melakukan operasi penghapusan (DELETE).",
      "C": "Salah. ST_Dump bekerja di memori SQL, bukan file dump teks.",
      "D": "Salah. Konversi raster dilakukan oleh ST_AsRaster."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-170",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON bringToFront",
    "questionType": "output",
    "question": "Apa fungsi dari pemanggilan `layer.bringToFront()` pada layer vektor poligon Leaflet?\n\n```javascript\npolygonLayer.bringToFront();\n```",
    "code": "polygonLayer.bringToFront();",
    "options": {
      "A": "Menaikkan z-index visual layer sehingga poligon dirender di atas layer vektor lainnya",
      "B": "Menghapus poligon dari peta",
      "C": "Melakukan zoom in otomatis ke poligon",
      "D": "Mengubah warna poligon menjadi transparan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Leaflet, `bringToFront()` menata ulang urutan elemen SVG/Canvas di DOM agar layer tersebut berada di tumpukan paling atas dan tidak tertutup layer poligon lain.",
      "A": "Benar. bringToFront() menaikkan urutan visual layer ke tumpukan terdepan.",
      "B": "Salah. bringToFront() tidak menghapus layer.",
      "C": "Salah. Operasi zoom dilakukan oleh map.fitBounds(), bukan bringToFront.",
      "D": "Salah. Opacity layer tidak dipengaruhi oleh bringToFront."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-171",
    "level": "intermediate",
    "topic": "Spatial SQL ST_NPoints",
    "questionType": "output",
    "question": "Berapa jumlah vertex (titik simpul) yang dikembalikan oleh ST_NPoints untuk segitiga tertutup berikut?\n\n```sql\nSELECT ST_NPoints(ST_GeomFromText('POLYGON((0 0, 4 0, 2 3, 0 0))'));\n```",
    "code": "SELECT ST_NPoints(ST_GeomFromText('POLYGON((0 0, 4 0, 2 3, 0 0))'));",
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "6"
    },
    "answer": "A",
    "explanation": {
      "correct": "Meskipun segitiga memiliki 3 sudut, representasi cincin poligon OGC mewajibkan titik awal diulang di akhir untuk menutup geometri: (0,0), (4,0), (2,3), dan (0,0). Total ada 4 vertex simpul.",
      "A": "Benar. Tiga titik sudut ditambah satu titik penutup sama dengan 4 vertex simpul.",
      "B": "Salah. Poligon tertutup wajib memiliki vertex penutup sehingga berjumlah 4, bukan 3.",
      "C": "Salah. Garis minimal membutuhkan 2 titik, poligon minimal 4 titik simpul.",
      "D": "Salah. Tidak ada titik tambahan lainnya."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-172",
    "level": "intermediate",
    "topic": "JavaScript Proj4 Definition",
    "questionType": "output",
    "question": "Format string definisi CRS apakah yang diawali dengan '+proj=utm +zone=48 +south +datum=WGS84'?\n\n```javascript\nconst def = \"+proj=utm +zone=48 +south +datum=WGS84 +units=m +no_defs\";\n```",
    "code": "const def = \"+proj=utm +zone=48 +south +datum=WGS84 +units=m +no_defs\";",
    "options": {
      "A": "Proj4 string",
      "B": "WKT2",
      "C": "GeoJSON",
      "D": "KML"
    },
    "answer": "A",
    "explanation": {
      "correct": "String dengan parameter berawalan tanda tambah (`+proj=...`) adalah sintaks format parameter Proj4 standar yang digunakan oleh library PROJ dan Proj4js.",
      "A": "Benar. Format +key=value adalah sintaks resmi Proj4 parameter string.",
      "B": "Salah. WKT2 menggunakan sintaks berbasis teks blok tanda kurung seperti PROJCRS[\"...\"]",
      "C": "Salah. GeoJSON adalah format pertukaran data fitur, bukan string definisi proyeksi.",
      "D": "Salah. KML adalah format XML buatan Google."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-173",
    "level": "intermediate",
    "topic": "PostGIS ST_Simplify",
    "questionType": "output",
    "question": "Algoritma penyederhanaan garis apakah yang digunakan oleh fungsi `ST_Simplify(geom, tolerance)` di PostGIS?\n\n```sql\nSELECT ST_Simplify(geom, 0.001) FROM coastlines;\n```",
    "code": "SELECT ST_Simplify(geom, 0.001) FROM coastlines;",
    "options": {
      "A": "Douglas-Peucker",
      "B": "Visvalingam-Whyatt",
      "C": "Dijkstra",
      "D": "A-Star"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi `ST_Simplify` di PostGIS menggunakan algoritma klasik Douglas-Peucker untuk mengurangi jumlah vertex pada garis/poligon berdasarkan batas toleransi jarak tegak lurus.",
      "A": "Benar. ST_Simplify mengimplementasikan algoritma reduksi geometri Douglas-Peucker.",
      "B": "Salah. Visvalingam-Whyatt berbasis luas area segitiga, bukan toleransi jarak default ST_Simplify.",
      "C": "Salah. Dijkstra adalah algoritma routing graf jalur terpendek.",
      "D": "Salah. A-Star adalah algoritma heuristic pathfinding."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-174",
    "level": "intermediate",
    "topic": "Leaflet Polygon Area",
    "questionType": "output",
    "question": "Manakah metode Leaflet untuk membuat poligon dengan lubang (donut polygon)?\n\n```javascript\n// Format array koordinat poligon berlubang di Leaflet:\n```",
    "code": "// Format array koordinat poligon berlubang di Leaflet:",
    "options": {
      "A": "L.polygon([exteriorRingCoords, interiorHoleCoords])",
      "B": "L.polygon(exteriorCoords).subtract(holeCoords)",
      "C": "L.donut(exteriorCoords, holeCoords)",
      "D": "Leaflet melarang poligon berlubang"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Leaflet, poligon berlubang dibuat dengan memberikan array of LatLng arrays: elemen pertama adalah cincin luar (exterior ring), dan elemen-elemen berikutnya adalah cincin lubang dalam (interior hole rings).",
      "A": "Benar. Array berindeks 0 adalah batas luar, dan indeks berikutnya adalah lubang.",
      "B": "Salah. Tidak ada method subtract pada L.polygon.",
      "C": "Salah. L.donut bukan class di Leaflet.",
      "D": "Salah. Leaflet mendukung poligon berlubang multi-cincin."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-175",
    "level": "intermediate",
    "topic": "Spatial SQL ST_FlipCoordinates",
    "questionType": "output",
    "question": "Apa fungsi dari `ST_FlipCoordinates` di PostGIS?\n\n```sql\nSELECT ST_AsText(ST_FlipCoordinates(ST_GeomFromText('POINT(106 -6)')));\n```",
    "code": "SELECT ST_AsText(ST_FlipCoordinates(ST_GeomFromText('POINT(106 -6)')));",
    "options": {
      "A": "POINT(-6 106) (Menukar nilai koordinat X dan Y)",
      "B": "POINT(-106 6) (Mengalikan koordinat dengan -1)",
      "C": "POINT(0 0)",
      "D": "LINESTRING(106 -6, -6 106)"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_FlipCoordinates(geom)` menukar posisi koordinat X dan Y (latitude dan longitude), sangat berguna ketika data spasial mengalami bug urutan koordinat tertukar (misal dari GPS receiver).",
      "A": "Benar. Menukar urutan nilai sumbu X dan Y pada setiap vertex.",
      "B": "Salah. Tidak menginversi tanda minus.",
      "C": "Salah. Tidak mereset ke origin.",
      "D": "Salah. Geometri tetap bertipe Point."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-176",
    "level": "intermediate",
    "topic": "Leaflet Heatmap Plugin",
    "questionType": "output",
    "question": "Format array data apakah yang diterima oleh plugin `L.heatLayer` untuk membuat peta panas (heatmap)?\n\n```javascript\nconst heat = L.heatLayer(data, { radius: 25 }).addTo(map);\n```",
    "code": "const heat = L.heatLayer(data, { radius: 25 }).addTo(map);",
    "options": {
      "A": "Array dari array koordinat [lat, lng, intensity?]",
      "B": "Array string nama kota",
      "C": "Array gambar raster TIFF",
      "D": "File XML KML mentah"
    },
    "answer": "A",
    "explanation": {
      "correct": "Plugin `leaflet-heat` menerima data berupa array of points dalam format `[lat, lng]` atau `[lat, lng, intensity]` di mana intensity bernilai antara 0 hingga 1.",
      "A": "Benar. Format data berupa [[lat, lng, intensity?], ...].",
      "B": "Salah. Plugin tidak melakukan geocoding teks nama kota.",
      "C": "Salah. Heatmap dikalkulasi dari titik diskrit di Canvas, bukan gambar TIFF.",
      "D": "Salah. Plugin tidak mem-parse format KML."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-177",
    "level": "intermediate",
    "topic": "Spatial SQL ST_PointOnSurface",
    "questionType": "output",
    "question": "Mengapa `ST_PointOnSurface` sering lebih disukai daripada `ST_Centroid` untuk penempatan label nama poligon?\n\n```sql\nSELECT ST_PointOnSurface(geom) FROM provinces;\n```",
    "code": "SELECT ST_PointOnSurface(geom) FROM provinces;",
    "options": {
      "A": "ST_PointOnSurface dijamin selalu berada di dalam (interior) poligon, sedangkan ST_Centroid bisa jatuh di luar poligon (misal pada poligon berbentuk bulan sabit atau pulau terpisah)",
      "B": "ST_PointOnSurface menghitung luas bukan titik",
      "C": "ST_Centroid hanya bekerja untuk garis lurus",
      "D": "ST_PointOnSurface selalu mengembalikan nilai NULL"
    },
    "answer": "A",
    "explanation": {
      "correct": "Centroid adalah pusat massa matematis. Pada poligon berbentuk melengkung (seperti huruf U atau pulau dengan teluk), centroid bisa berada di luar daratan (di laut). `ST_PointOnSurface` menjamin titik hasil selalu berada di dalam area poligon.",
      "A": "Benar. Menjamin titik berada di dalam badan poligon untuk penempatan label yang estetis.",
      "B": "Salah. Fungsinya mengembalikan titik geometri (Point), bukan luas.",
      "C": "Salah. ST_Centroid bekerja untuk titik, garis, dan poligon.",
      "D": "Salah. Fungsi mengembalikan titik yang valid."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-178",
    "level": "intermediate",
    "topic": "Leaflet Pane Customization",
    "questionType": "output",
    "question": "Apa fungsi dari opsi `pane` saat membuat layer di Leaflet?\n\n```javascript\nconst customPane = map.createPane(\"topLabels\");\ncustomPane.style.zIndex = 650;\nL.marker([0, 0], { pane: \"topLabels\" }).addTo(map);\n```",
    "code": "const customPane = map.createPane(\"topLabels\");\ncustomPane.style.zIndex = 650;\nL.marker([0, 0], { pane: \"topLabels\" }).addTo(map);",
    "options": {
      "A": "Mengontrol urutan tumpukan z-index rendering secara spesifik untuk memisahkan grup layer",
      "B": "Membuat panel navigasi samping di halaman web",
      "C": "Menyimpan data layer ke database SQL",
      "D": "Mengubah warna latar belakang seluruh peta"
    },
    "answer": "A",
    "explanation": {
      "correct": "Leaflet Map Panes adalah wadah elemen DOM khusus yang memungkinkan developer mengatur urutan tumpukan (`z-index`) layer peta secara presisi (misal: label di atas overlay poligon, tapi poligon di atas basemap).",
      "A": "Benar. Map Panes mengelola z-index layer dalam hierarki DOM Leaflet.",
      "B": "Salah. Pane bukan komponen sidebar navigasi UI.",
      "C": "Salah. Leaflet tidak terhubung langsung ke database SQL.",
      "D": "Salah. Pane tidak mengubah background warna canvas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-179",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Collect vs ST_Union",
    "questionType": "output",
    "question": "Apa perbedaan fundamental antara `ST_Collect` dan `ST_Union` di PostGIS?\n\n```sql\n-- Query 1: ST_Collect(geom)\n-- Query 2: ST_Union(geom)\n```",
    "code": "-- Query 1: ST_Collect(geom)\n-- Query 2: ST_Union(geom)",
    "options": {
      "A": "ST_Collect hanya menggabungkan geometri ke dalam Multi-geometry tanpa kalkulasi perpotongan/dissolve (sangat cepat), sedangkan ST_Union menghapus batas internal (dissolve) yang tumpang tindih",
      "B": "ST_Collect menghapus data, sedangkan ST_Union menambahkan data",
      "C": "ST_Collect hanya untuk data raster",
      "D": "Keduanya identik 100% tanpa perbedaan performa"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Collect` adalah operasi agregasi cepat tanpa validasi topologi atau pelepasan batas (hanya membungkus ke dalam MultiGeometry / GeometryCollection). `ST_Union` melakukan kalkulasi spasial berat untuk melebur dan menghilangkan garis batas tumpang tindih.",
      "A": "Benar. ST_Collect jauh lebih cepat karena tidak melakukan kalkulasi topology dissolve.",
      "B": "Salah. ST_Collect adalah fungsi agregat konstruksi, bukan delete.",
      "C": "Salah. ST_Collect bekerja pada tipe geometri vektor.",
      "D": "Salah. ST_Collect memiliki kompleksitas waktu jauh lebih rendah daripada ST_Union."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-180",
    "level": "intermediate",
    "topic": "JavaScript WKT Parsing",
    "questionType": "output",
    "question": "Berapa jumlah titik koordinat yang dihasilkan dari parsing string WKT berikut?\n\n```javascript\nconst wkt = \"LINESTRING(10 20, 30 40, 50 60)\";\nconst count = wkt.replace(\"LINESTRING(\", \"\").replace(\")\", \"\").split(\",\").length;\nconsole.log(count);\n```",
    "code": "const wkt = \"LINESTRING(10 20, 30 40, 50 60)\";\nconst count = wkt.replace(\"LINESTRING(\", \"\").replace(\")\", \"\").split(\",\").length;\nconsole.log(count);",
    "options": {
      "A": "3",
      "B": "6",
      "C": "1",
      "D": "2"
    },
    "answer": "A",
    "explanation": {
      "correct": "String WKT memisahkan setiap titik simpul koordinat dengan tanda koma: '10 20', ' 30 40', dan ' 50 60'. Pemisahan dengan `.split(',')` menghasilkan array dengan panjang 3.",
      "A": "Benar. Terdapat 3 vertex simpul yang dipisahkan oleh tanda koma.",
      "B": "Salah. 6 adalah jumlah angka skalar X dan Y, bukan jumlah pasangan titik.",
      "C": "Salah. Garis memiliki 3 koordinat simpul.",
      "D": "Salah. Ada 3 bagian setelah split koma."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-181",
    "level": "intermediate",
    "topic": "PostGIS Spatial JOIN Performance",
    "questionType": "debug",
    "question": "Kueri spatial JOIN berikut membutuhkan waktu 45 detik pada 50.000 baris. Bagaimana cara mempercepatnya drastis menggunakan indeks GiST?\n\n```sql\nSELECT p.id, COUNT(pt.id)\nFROM polygons p\nLEFT JOIN points pt ON ST_Within(pt.geom, p.geom)\nGROUP BY p.id;\n```",
    "code": "SELECT p.id, COUNT(pt.id)\nFROM polygons p\nLEFT JOIN points pt ON ST_Within(pt.geom, p.geom)\nGROUP BY p.id;",
    "options": {
      "A": "Menambahkan operator bounding box 'pt.geom && p.geom' pada klausa ON atau memastikan indeks GiST terpasang pada kedua kolom geom",
      "B": "Menghapus klausa GROUP BY",
      "C": "Mengganti LEFT JOIN menjadi CROSS JOIN",
      "D": "Menghapus primary key p.id"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spatial JOIN tanpa operator bounding box `&&` dapat memaksa Nested Loop Sequential Scan jika versi query planner tidak meng-inline fungsi ST_Within. Menambahkan kondisi `pt.geom && p.geom AND ST_Within(pt.geom, p.geom)` menjamin penggunaan indeks GiST secara maksimal.",
      "A": "Benar. Memastikan indeks GiST aktif pada kedua tabel dan memanfaatkan operator bounding box &&.",
      "B": "Salah. Menghapus GROUP BY merusak logika agregasi hitungan.",
      "C": "Salah. CROSS JOIN tanpa kondisi adalah cartesian product yang jauh lebih lambat (2.5 miliar baris).",
      "D": "Salah. Menghapus primary key tidak membantu indeks spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-182",
    "level": "intermediate",
    "topic": "Leaflet GeoServer WMS CORS",
    "questionType": "debug",
    "question": "Layer WMS dari GeoServer gagal dimuat di Leaflet dengan pesan error 'Access to image from origin has been blocked by CORS policy'. Di mana konfigurasi yang harus diperbaiki?\n\n```javascript\n// Frontend Leaflet:\nL.tileLayer.wms(\"http://geoserver.local:8080/geoserver/wms\", {...}).addTo(map);\n```",
    "code": "// Frontend Leaflet:\nL.tileLayer.wms(\"http://geoserver.local:8080/geoserver/wms\", {...}).addTo(map);",
    "options": {
      "A": "Mengaktifkan CORS (Cross-Origin Resource Sharing) Filter pada web server GeoServer (web.xml / Tomcat)",
      "B": "Menghapus kode JavaScript Leaflet",
      "C": "Menonaktifkan kartu grafis pengguna",
      "D": "Mengganti browser Chrome dengan Notepad"
    },
    "answer": "A",
    "explanation": {
      "correct": "CORS adalah kebijakan keamanan browser yang membatasi permintaan HTTP antar domain/port berbeda. Untuk mengizinkan aplikasi web mengakses GeoServer di port berbeda, filter CORS harus diaktifkan pada konfigurasi server GeoServer (web.xml di Tomcat).",
      "A": "Benar. CORS Filter harus diaktifkan di server GeoServer.",
      "B": "Salah. Masalah berada pada header HTTP server, bukan kode Leaflet frontend.",
      "C": "Salah. Kartu grafis tidak berhubungan dengan kebijakan keamanan HTTP CORS.",
      "D": "Salah. Notepad adalah text editor, bukan web browser."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-183",
    "level": "intermediate",
    "topic": "PostGIS Geometry vs Geography",
    "questionType": "debug",
    "question": "Kueri berikut menghasilkan error 'function st_distance(geography, geometry) does not exist'. Mengapa?\n\n```sql\nSELECT ST_Distance(a.geog_col, b.geom_col) FROM table_a a, table_b b;\n```",
    "code": "SELECT ST_Distance(a.geog_col, b.geom_col) FROM table_a a, table_b b;",
    "options": {
      "A": "PostGIS tidak menyediakan signature ST_Distance yang mencampur tipe `geography` dan `geometry` secara bersamaan",
      "B": "ST_Distance dilarang menggunakan dua tabel",
      "C": "Nama kolom geog_col terlalu panjang",
      "D": "Tipe geography tidak mendukung perhitungan jarak"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe `geography` (sferis/geodesik) dan `geometry` (planar Cartesian) adalah dua tipe data yang berbeda di PostGIS. Operasi spasial mengharuskan kedua argumen bertipe sama persis. Solusinya: `ST_Distance(a.geog_col, b.geom_col::geography)`.",
      "A": "Benar. Kedua argumen harus memiliki tipe spasial yang sama (keduanya geometry atau keduanya geography).",
      "B": "Salah. Operasi spasial lintas tabel adalah hal yang sangat standar.",
      "C": "Salah. Panjang nama kolom tidak menyebabkan type mismatch.",
      "D": "Salah. Tipe geography dirancang khusus untuk perhitungan jarak bumi yang akurat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-184",
    "level": "intermediate",
    "topic": "Leaflet Zoom Animation Flicker",
    "questionType": "debug",
    "question": "Peta mengalami kedipan hitam (flicker) saat animasi zoom berlangsung pada layer kustom Canvas. Opsi apa pada L.canvas() yang mengatasi masalah ini?\n\n```javascript\nconst canvasRenderer = L.canvas({ /* opsi apa yang mencegah redraw blink? */ });\n```",
    "code": "const canvasRenderer = L.canvas({ /* opsi apa yang mencegah redraw blink? */ });",
    "options": {
      "A": "tolerance: 5 atau padding: 0.5 untuk memperluas buffer rendering di luar batas viewport",
      "B": "deleteCanvas: true",
      "C": "animate: false pada sistem operasi",
      "D": "opacity: 0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Opsi `padding` pada Canvas renderer Leaflet menentukan seberapa jauh kanvas meluas di luar batas viewport layar (misal 0.5 = 50% buffer). Buffer ini mencegah kanvas kosong terlihat saat peta digeser atau di-zoom sebelum frame baru selesai digambar.",
      "A": "Benar. Opsi padding menyediakan buffer kanvas untuk mencegah area kosong saat translasi/zoom.",
      "B": "Salah. deleteCanvas bukan opsi valid di Leaflet.",
      "C": "Salah. Mematikan animasi di OS bukan solusi level kode aplikasi.",
      "D": "Salah. opacity: 0 membuat seluruh layer tidak terlihat sama sekali."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-185",
    "level": "intermediate",
    "topic": "Spatial SQL SRID 4326 Distance Error",
    "questionType": "debug",
    "question": "Seorang developer ingin mencari restoran dalam jarak 5 kilometer menggunakan kueri berikut, tetapi kueri mengembalikan seluruh restoran di dunia. Apa bugnya?\n\n```sql\nSELECT * FROM restaurants WHERE ST_Distance(geom, ST_MakePoint(106.8, -6.2)) <= 5;\n```",
    "code": "SELECT * FROM restaurants WHERE ST_Distance(geom, ST_MakePoint(106.8, -6.2)) <= 5;",
    "options": {
      "A": "Angka 5 diinterpretasikan sebagai 5 derajat sudut (~555 kilometer), bukan 5 kilometer",
      "B": "Tanda <= harus diganti ==",
      "C": "Restoran di dunia tidak memiliki koordinat",
      "D": "Fungsi ST_Distance hanya mengembalikan nilai negatif"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada tipe `geometry` dengan proyeksi WGS 84 (SRID 4326), satuan jarak adalah derajat busur. 1 derajat di khatulistiwa setara dengan ~111.32 km. Jarak 5 derajat berarti radius ~555 km! Gunakan `ST_DWithin(geom::geography, point::geography, 5000)` untuk 5.000 meter.",
      "A": "Benar. Satuan derajat disalahartikan sebagai kilometer; 5 derajat ~ 555 km.",
      "B": "Salah. Operator pembanding SQL yang benar adalah <=, bukan ==.",
      "C": "Salah. Restoran memiliki koordinat geografis.",
      "D": "Salah. Jarak spasial selalu bernilai non-negatif (>= 0)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-186",
    "level": "intermediate",
    "topic": "Leaflet Marker Clustering",
    "questionType": "debug",
    "question": "Setelah menambahkan plugin markercluster, marker tidak mengelompok dan console error 'L.markerClusterGroup is not a constructor'. Apa penyebabnya?\n\n```javascript\nconst markers = L.markerClusterGroup();\nmap.addLayer(markers);\n```",
    "code": "const markers = L.markerClusterGroup();\nmap.addLayer(markers);",
    "options": {
      "A": "Script file `leaflet.markercluster.js` belum di-load di halaman HTML atau urutan script mendahului `leaflet.js`",
      "B": "Nama fungsi harus ditulis dengan huruf kapital L.MARKERCLUSTERGROUP",
      "C": "Browser menolak pengelompokan marker secara hardware",
      "D": "Marker cluster hanya bekerja di NodeJS bukan browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "Error 'is not a constructor' menandakan objek fungsi tidak ditemukan di runtime window global. Ini terjadi jika file library plugin Leaflet.markercluster belum di-include melalui tag `<script>`, atau dipanggil sebelum `leaflet.js` dimuat.",
      "A": "Benar. Library plugin belum dimuat atau urutan pemuatan script keliru.",
      "B": "Salah. Nama constructor resmi adalah camelCase L.markerClusterGroup.",
      "C": "Salah. Tidak ada penolakan hardware browser untuk cluster.",
      "D": "Salah. Marker clustering adalah library frontend browser murni."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-187",
    "level": "intermediate",
    "topic": "PostGIS Poligon Berlubang WKT",
    "questionType": "debug",
    "question": "Kueri berikut menghasilkan poligon solid tanpa lubang padahal ditujukan membuat poligon dengan lubang. Di mana kesalahan sintaks WKT-nya?\n\n```sql\nSELECT ST_GeomFromText('POLYGON((0 0, 10 0, 10 10, 0 10, 0 0), (2 2, 8 2, 8 8, 2 8, 2 2))');\n```",
    "code": "SELECT ST_GeomFromText('POLYGON((0 0, 10 0, 10 10, 0 10, 0 0), (2 2, 8 2, 8 8, 2 8, 2 2))');",
    "options": {
      "A": "Sintaks WKT di atas sebenarnya sudah benar untuk poligon berlubang, tetapi arah orientasi cincin lubang (interior ring) harus berlawanan arah jarum jam (counter-clockwise) sesuai standar OGC/GIS tertentu",
      "B": "WKT tidak mengizinkan poligon berlubang",
      "C": "Tanda kurung harus diganti kurung kurawal {}",
      "D": "Jumlah titik lubang harus ganjil"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar OGC SFS dan pemroses GIS mewajibkan exterior ring berorientasi searah jarum jam (clockwise / Right-Hand Rule RFC 7946) dan interior ring (lubang) berorientasi berlawanan arah jarum jam. Orientasi yang salah dapat menyebabkan beberapa viewer merender area sebagai solid fill.",
      "A": "Benar. Kaidah aturan tangan kanan (Right-Hand Rule) dan arah cincin menentukan lubang poligon.",
      "B": "Salah. WKT mendukung poligon berlubang dengan multiple rings.",
      "C": "Salah. Sintaks WKT menggunakan kurung biasa (parentheses).",
      "D": "Salah. Cincin poligon tertutup minimal memiliki 4 titik simpul."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-188",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON Layer Click Selection",
    "questionType": "debug",
    "question": "Fungsi klik berikut ingin mengubah warna poligon yang sedang diklik menjadi kuning, namun warna poligon lain yang sebelumnya diklik tidak kembali ke warna asal. Bagaimana solusinya?\n\n```javascript\nlet selectedLayer = null;\nfunction onFeatureClick(e) {\n  if (selectedLayer) {\n    geoLayer.resetStyle(selectedLayer); // Kembalikan style lama\n  }\n  selectedLayer = e.target;\n  selectedLayer.setStyle({ fillColor: \"yellow\" });\n}\n```",
    "code": "let selectedLayer = null;\nfunction onFeatureClick(e) {\n  if (selectedLayer) {\n    geoLayer.resetStyle(selectedLayer); // Kembalikan style lama\n  }\n  selectedLayer = e.target;\n  selectedLayer.setStyle({ fillColor: \"yellow\" });\n}",
    "options": {
      "A": "Logika di atas sudah benar, namun method `resetStyle` hanya tersedia pada instance `L.geoJSON`, bukan pada layer individual",
      "B": "Warna kuning dilarang di browser",
      "C": "e.target harus di-clone dengan Object.assign",
      "D": "resetStyle harus dipanggil sebelum event listener didaftarkan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `resetStyle(layer)` adalah method milik parent layer `L.geoJSON`. Memanggil `geoLayer.resetStyle(selectedLayer)` mengembalikan konfigurasi path option layer yang dipilih kembali ke fungsi style default awal.",
      "A": "Benar. geoLayer.resetStyle(selectedLayer) mengembalikan style fitur ke konfigurasi awal.",
      "B": "Salah. Warna kuning ('yellow' / '#ffff00') didukung penuh.",
      "C": "Salah. Meng-clone layer DOM memutus keterikatan objek internal Leaflet.",
      "D": "Salah. resetStyle dipanggil saat interaksi dinamis pengguna."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-189",
    "level": "intermediate",
    "topic": "PostGIS ST_GeomFromGeoJSON",
    "questionType": "debug",
    "question": "Kueri berikut menghasilkan error saat mengonversi string GeoJSON: 'Feature types not supported'. Mengapa?\n\n```sql\nSELECT ST_GeomFromGeoJSON('{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[106,-6]}}');\n```",
    "code": "SELECT ST_GeomFromGeoJSON('{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[106,-6]}}');",
    "options": {
      "A": "Fungsi ST_GeomFromGeoJSON hanya menerima objek 'Geometry' GeoJSON murni, bukan objek 'Feature' atau 'FeatureCollection'",
      "B": "PostGIS tidak mendukung format GeoJSON",
      "C": "Koordinat harus bertipe integer",
      "D": "Format string JSON harus di-encode base64"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_GeomFromGeoJSON` hanya mengekstrak fragmen geometri spesifik: `{\"type\":\"Point\",\"coordinates\":[106,-6]}`. Jika diberikan objek pembungkus Feature lengkap dengan properties, fungsi akan melempar error. Objek geometry harus diekstrak terlebih dahulu.",
      "A": "Benar. ST_GeomFromGeoJSON membutuhkan objek geometry murni tanpa pembungkus Feature.",
      "B": "Salah. PostGIS mendukung konversi dua arah GeoJSON secara penuh.",
      "C": "Salah. Koordinat GPS umumnya bertipe desimal (float).",
      "D": "Salah. Fungsi menerima string JSON polos."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-190",
    "level": "intermediate",
    "topic": "Leaflet Panes zIndex Conflict",
    "questionType": "debug",
    "question": "Marker tidak bisa diklik karena tertutup oleh layer poligon tematik di atasnya. Bagaimana cara memperbaiki arsitektur z-index-nya?\n\n```javascript\n// Masalah: Klik pada marker selalu mengenai poligon di bawah kursor mouse.\n```",
    "code": "// Masalah: Klik pada marker selalu mengenai poligon di bawah kursor mouse.",
    "options": {
      "A": "Menempatkan marker di pane khusus dengan z-index lebih tinggi atau mengatur 'interactive: false' pada layer poligon yang hanya berfungsi sebagai latar",
      "B": "Menghapus elemen peta dari halaman",
      "C": "Mematikan koneksi internet",
      "D": "Mengganti koordinat marker ke belahan bumi lain"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default di Leaflet, marker pane memiliki z-index 600 dan overlay pane memiliki z-index 400. Namun jika layer poligon kustom ditambahkan di pane teratas, event mouse akan terserap oleh poligon. Mengatur `interactive: false` pada poligon meneruskan event klik ke marker di bawahnya.",
      "A": "Benar. interactive: false meneruskan event mouse ke layer di bawahnya (seperti pointer-events: none).",
      "B": "Salah. Menghapus peta bukan solusi arsitektur.",
      "C": "Salah. Koneksi internet tidak berpengaruh pada event handling DOM lokal.",
      "D": "Salah. Mengubah koordinat merusak akurasi informasi peta."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-191",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Intersects vs ST_Overlaps",
    "questionType": "debug",
    "question": "Kueri menggunakan ST_Overlaps tidak mengembalikan data apa pun saat sebuah titik berada di dalam poligon. Mengapa?\n\n```sql\nSELECT * FROM parcels p, points pt WHERE ST_Overlaps(p.geom, pt.geom);\n```",
    "code": "SELECT * FROM parcels p, points pt WHERE ST_Overlaps(p.geom, pt.geom);",
    "options": {
      "A": "Menurut standar OGC DE-9IM, ST_Overlaps hanya berlaku untuk dua geometri dengan dimensi yang sama persis (keduanya poligon atau keduanya garis)",
      "B": "ST_Overlaps adalah fungsi kadaluarsa",
      "C": "Titik tidak memiliki koordinat",
      "D": "Parcels harus memiliki luas nol"
    },
    "answer": "A",
    "explanation": {
      "correct": "Definisi formal `ST_Overlaps` mensyaratkan kedua geometri memiliki dimensi spasial yang sama (dim(A) == dim(B)) dan irisannya memiliki dimensi yang sama tetapi tidak sama dengan salah satunya. Untuk menguji relasi titik (0D) dengan poligon (2D), fungsi yang benar adalah `ST_Intersects` atau `ST_Within`.",
      "A": "Benar. ST_Overlaps hanya berlaku untuk geometri dengan dimensi yang sama (misal poligon dengan poligon).",
      "B": "Salah. ST_Overlaps adalah fungsi standar OGC yang aktif.",
      "C": "Salah. Titik memiliki dimensi 0D dengan koordinat valid.",
      "D": "Salah. Poligon memiliki dimensi 2D dengan luas positif."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-192",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON update data",
    "questionType": "debug",
    "question": "Saat data GeoJSON di-update via WebSocket setiap 5 detik, browser mengalami kebocoran memori (memory leak) dan lemot. Di mana letak kesalahannya?\n\n```javascript\n// WebSocket onmessage handler:\nsocket.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  L.geoJSON(data).addTo(map); // BUG MEMORY LEAK!\n};\n```",
    "code": "// WebSocket onmessage handler:\nsocket.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  L.geoJSON(data).addTo(map); // BUG MEMORY LEAK!\n};",
    "options": {
      "A": "Setiap pesan masuk membuat instance L.geoJSON baru dan menambahkannya ke peta tanpa menghapus layer data sebelumnya",
      "B": "WebSocket dilarang di JavaScript",
      "C": "JSON.parse memakan memori CPU 100%",
      "D": "Leaflet tidak mendukung streaming data"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memanggil `L.geoJSON(data).addTo(map)` berulang kali terus menambahkan layer SVG/Canvas baru di atas layer lama di DOM tanpa pernah membersihkannya. Solusinya: simpan referensi layer dalam variabel dan panggil `layer.clearLayers()` atau perbarui koordinat layer yang sudah ada.",
      "A": "Benar. Layer lama harus dibersihkan dengan clearLayers() sebelum data baru ditambahkan.",
      "B": "Salah. WebSocket adalah standar industri untuk komunikasi real-time dua arah.",
      "C": "Salah. JSON.parse sangat efisien dan merupakan fungsi native mesin V8.",
      "D": "Salah. Leaflet sangat andal untuk data real-time jika dikelola dengan lifecycle yang benar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-193",
    "level": "intermediate",
    "topic": "PostGIS Topology Exception",
    "questionType": "debug",
    "question": "Kueri ST_Union melempar 'TopologyException: Input geom 0 is invalid: Self-intersection at or near point...'. Bagaimana cara membersihkan geometri tersebut secara otomatis di SQL?\n\n```sql\nSELECT ST_Union(geom) FROM raw_land_parcels;\n```",
    "code": "SELECT ST_Union(geom) FROM raw_land_parcels;",
    "options": {
      "A": "Membungkus kolom dengan ST_MakeValid: 'SELECT ST_Union(ST_MakeValid(geom)) FROM raw_land_parcels;'",
      "B": "Menghapus database dan menginstal ulang",
      "C": "Mengganti ST_Union dengan ST_Area",
      "D": "Mengabaikan error dan membiarkan data kosong"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_MakeValid(geom)` adalah fungsi PostGIS yang menganalisis geometri yang rusak/invalid (seperti self-intersection, cincin terlipat, atau collinear collapse) dan memperbaikinya menjadi representasi geometri OGC yang valid secara topologi.",
      "A": "Benar. ST_MakeValid memperbaiki kesalahan topologi geometri secara otomatis.",
      "B": "Salah. Reinstall database tidak memperbaiki data geometri yang korup di tabel.",
      "C": "Salah. ST_Area menghitung luas, bukan menggabungkan geometri.",
      "D": "Salah. Mengabaikan error menyebabkan kegagalan pipeline data spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-194",
    "level": "intermediate",
    "topic": "Leaflet Tooltip Sticky vs Permanent",
    "questionType": "debug",
    "question": "Tooltip pada marker langsung menghilang saat mouse bergerak, padahal diinginkan tooltip selalu menempel mengikuti kursor mouse di atas area fitur. Opsi apa yang harus diatur?\n\n```javascript\nlayer.bindTooltip(\"Informasi Area\", { ___: true });\n```",
    "code": "layer.bindTooltip(\"Informasi Area\", { ___: true });",
    "options": {
      "A": "sticky",
      "B": "permanent",
      "C": "opacity",
      "D": "followMouse"
    },
    "answer": "A",
    "explanation": {
      "correct": "Opsi `sticky: true` pada Leaflet Tooltip membuat posisi tooltip mengikuti pergerakan kursor mouse selama kursor berada di atas area poligon/layer tersebut.",
      "A": "Benar. sticky: true membuat tooltip dinamis mengikuti gerakan kursor pengguna.",
      "B": "Salah. permanent: true membuat tooltip selalu terbuka permanen tanpa interaksi mouse.",
      "C": "Salah. opacity mengatur transparansi visual, bukan perilaku penempelan kursor.",
      "D": "Salah. followMouse bukan nama properti opsi Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-195",
    "level": "intermediate",
    "topic": "Spatial SQL Aggregate Window Function",
    "questionType": "debug",
    "question": "Kueri berikut ingin mencari titik terdekat untuk setiap pelanggan, tetapi kueri berjalan sangat lambat. Bagaimana cara membatasi pencarian terdekat (k-Nearest Neighbors / kNN) menggunakan operator spasial PostGIS?\n\n```sql\n-- Mencari 1 fasilitas terdekat untuk titik p:\nSELECT * FROM facilities ORDER BY geom <-> ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326) LIMIT 1;\n```",
    "code": "-- Mencari 1 fasilitas terdekat untuk titik p:\nSELECT * FROM facilities ORDER BY geom <-> ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326) LIMIT 1;",
    "options": {
      "A": "Operator '<->' memanfaatkan indeks GiST untuk mencari nearest neighbor secara instan (kNN spatial index scan)",
      "B": "Operator '<->' mematikan indeks database",
      "C": "Kueri harus menggunakan FULL OUTER JOIN",
      "D": "LIMIT 1 dilarang dalam kueri spasial"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator `<->` di PostGIS adalah operator jarak bounding box yang terintegrasi dengan indeks GiST untuk k-Nearest Neighbor (kNN). Database dapat mengambil N titik terdekat secara instan menggunakan traversal pohon R-Tree tanpa menghitung jarak seluruh baris tabel.",
      "A": "Benar. Operator <-> memungkinkan kNN index traversal berkecepatan tinggi dengan klausa ORDER BY ... LIMIT.",
      "B": "Salah. Operator <-> secara khusus didesain untuk mengoptimalkan indeks GiST.",
      "C": "Salah. JOIN tidak diperlukan untuk query nearest point tunggal.",
      "D": "Salah. LIMIT adalah bagian kunci untuk menghentikan traversal kNN index."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-196",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON onEachFeature Memory Leak",
    "questionType": "debug",
    "question": "Kode berikut memasang event listener pada setiap fitur GeoJSON, tetapi saat data di-refresh, listener bertumpuk. Mengapa?\n\n```javascript\nL.geoJSON(data, {\n  onEachFeature: (f, layer) => {\n    map.on(\"zoomend\", () => layer.updateIcon(map.getZoom())); // BUG!\n  }\n});\n```",
    "code": "L.geoJSON(data, {\n  onEachFeature: (f, layer) => {\n    map.on(\"zoomend\", () => layer.updateIcon(map.getZoom())); // BUG!\n  }\n});",
    "options": {
      "A": "Mendaftarkan listener pada objek global 'map' di dalam onEachFeature menambahkan ribuan listener duplikat ke map yang tidak pernah dibersihkan",
      "B": "Method map.on dilarang di Leaflet",
      "C": "Event zoomend tidak didukung browser",
      "D": "Layer tidak boleh memiliki icon"
    },
    "answer": "A",
    "explanation": {
      "correct": "Setiap kali onEachFeature dieksekusi untuk ratusan fitur, `map.on('zoomend', ...)` mendaftarkan handler baru ke instance map. Ini menyebabkan ribuan handler menumpuk di memori. Seharusnya listen event zoom di level map sekali saja secara global.",
      "A": "Benar. Menambahkan handler ke map di dalam loop fitur menyebabkan kebocoran event listener masif.",
      "B": "Salah. map.on adalah method resmi pendaftaran event Leaflet.",
      "C": "Salah. zoomend adalah event standar siklus peta Leaflet.",
      "D": "Salah. Layer marker mendukung custom icon."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-197",
    "level": "intermediate",
    "topic": "PostGIS ST_Difference Direction",
    "questionType": "debug",
    "question": "Mengapa hasil ST_Difference(A, B) berbeda secara drastis dengan ST_Difference(B, A)?\n\n```sql\n-- Hasil Query 1: ST_Difference(geom_a, geom_b)\n-- Hasil Query 2: ST_Difference(geom_b, geom_a)\n```",
    "code": "-- Hasil Query 1: ST_Difference(geom_a, geom_b)\n-- Hasil Query 2: ST_Difference(geom_b, geom_a)",
    "options": {
      "A": "ST_Difference mengembalikan bagian geometri pertama yang TIDAK tumpang tindih dengan geometri kedua (operasi himpunan pengurangan A - B tidak bersifat komutatif)",
      "B": "PostGIS memiliki bug acak pada operasi pengurangan",
      "C": "ST_Difference selalu mengembalikan geometri yang lebih kecil",
      "D": "Kedua kueri seharusnya menghasilkan geometri yang sama persis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operasi pengurangan himpunan geometri tidak bersifat komutatif: `A - B` menghasilkan area A tanpa bagian yang dipotong B, sedangkan `B - A` menghasilkan area B tanpa bagian yang dipotong A.",
      "A": "Benar. Pengurangan spasial A - B tidak sama dengan B - A (non-komutatif).",
      "B": "Salah. Ini adalah perilaku matematika dasar, bukan bug database.",
      "C": "Salah. Hasil bergantung pada bentuk geometri masing-masing, bukan ukuran.",
      "D": "Salah. Operasi tidak komutatif sehingga hasilnya pasti berbeda."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-198",
    "level": "intermediate",
    "topic": "JavaScript Turfs Along Linestring",
    "questionType": "debug",
    "question": "Fungsi `turf.along(line, distance)` menghasilkan titik di luar garis saat jarak yang diminta melebihi total panjang garis. Bagaimana mengamankannya?\n\n```javascript\nfunction getPointAt(line, dist) {\n  const totalLen = turf.length(line, { units: \"kilometers\" });\n  const safeDist = Math.min(dist, totalLen);\n  return turf.along(line, safeDist, { units: \"kilometers\" });\n}\n```",
    "code": "function getPointAt(line, dist) {\n  const totalLen = turf.length(line, { units: \"kilometers\" });\n  const safeDist = Math.min(dist, totalLen);\n  return turf.along(line, safeDist, { units: \"kilometers\" });\n}",
    "options": {
      "A": "Menggunakan Math.min() untuk membatasi jarak agar tidak melebihi total panjang garis linestring",
      "B": "Mengalikan jarak dengan angka -1",
      "C": "Menghapus parameter line",
      "D": "Mengganti garis dengan poligon"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika jarak yang diminta lebih besar dari total panjang garis, `turf.along()` akan mengembalikan titik ujung akhir garis (atau titik ekstrapolasi). Menggunakan `Math.min(dist, totalLen)` menjamin nilai jarak selalu berada dalam batas sah garis.",
      "A": "Benar. Membatasi jarak input dengan panjang total garis mencegah titik keluar batas.",
      "B": "Salah. Jarak negatif tidak diperbolehkan pada turf.along.",
      "C": "Salah. Fungsi membutuhkan geometri linestring untuk dianalisis.",
      "D": "Salah. turf.along hanya bekerja untuk garis (LineString)."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-199",
    "level": "intermediate",
    "topic": "Spatial SQL Bounding Box Expansion",
    "questionType": "debug",
    "question": "Kueri berikut ingin memperluas batas bounding box pencarian sebesar 0.01 derajat ke segala arah. Fungsi PostGIS apa yang paling tepat?\n\n```sql\nSELECT * FROM roads WHERE geom && ST____(ST_MakePoint(106.8, -6.2), 0.01);\n```",
    "code": "SELECT * FROM roads WHERE geom && ST____(ST_MakePoint(106.8, -6.2), 0.01);",
    "options": {
      "A": "Expand",
      "B": "Stretch",
      "C": "Inflate",
      "D": "Enlarge"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi `ST_Expand(geom, radius)` membuat bounding box kotak 2D baru yang diperluas ke arah utara, selatan, timur, dan barat sebesar jarak parameter, sangat cepat untuk memicu pencarian indeks GiST.",
      "A": "Benar. ST_Expand memperluas bounding box geometri untuk query indeks.",
      "B": "Salah. Stretch bukan nama fungsi PostGIS.",
      "C": "Salah. Inflate bukan fungsi PostGIS yang valid.",
      "D": "Salah. Enlarge bukan fungsi resmi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-200",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON Path Hover Effect",
    "questionType": "debug",
    "question": "Efek mouseout tidak mengembalikan ketebalan garis poligon ke ukuran awal saat kursor keluar. Apa penyebabnya?\n\n```javascript\npolygon.on(\"mouseover\", () => polygon.setStyle({ weight: 5 }));\npolygon.on(\"mouseout\", () => polygon.setStyle({ weight: 2 }));\n```",
    "code": "polygon.on(\"mouseover\", () => polygon.setStyle({ weight: 5 }));\npolygon.on(\"mouseout\", () => polygon.setStyle({ weight: 2 }));",
    "options": {
      "A": "Hardcoding weight: 2 mengabaikan style dinamis awal; cara yang benar adalah menyimpan style asli atau menggunakan geoLayer.resetStyle(e.target)",
      "B": "Leaflet melarang perubahan properti weight",
      "C": "Event mouseout hanya bekerja pada tombol keyboard",
      "D": "Angka 5 terlalu besar untuk CSS browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menuliskan angka statis `weight: 2` adalah antipattern jika tiap poligon memiliki konfigurasi bobot atau warna garis yang berbeda-beda. Cara terbaik adalah memanggil `geoLayer.resetStyle(e.target)` untuk mengembalikan semua properti ke definisi fungsi style awal.",
      "A": "Benar. resetStyle mengembalikan konfigurasi layer secara konsisten sesuai aturan style awal.",
      "B": "Salah. Leaflet mendukung modifikasi properti weight via setStyle secara dinamis.",
      "C": "Salah. mouseout adalah event pointer mouse browser.",
      "D": "Salah. Ketebalan garis 5px sangat umum digunakan untuk efek hover highlight."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-201",
    "level": "intermediate",
    "topic": "Leaflet Custom WMS Layer",
    "questionType": "completion",
    "question": "Lengkapi inisialisasi WMS layer Leaflet untuk memanggil layer 'osm:indonesia_roads' dengan format gambar transparan PNG:\n\n```javascript\nconst wmsLayer = L.tileLayer.__(\"https://geoserver.example.com/geoserver/wms\", {\n  layers: \"osm:indonesia_roads\",\n  format: \"image/png\",\n  transparent: true\n}).addTo(map);\n```",
    "code": "const wmsLayer = L.tileLayer.__(\"https://geoserver.example.com/geoserver/wms\", {\n  layers: \"osm:indonesia_roads\",\n  format: \"image/png\",\n  transparent: true\n}).addTo(map);",
    "options": {
      "A": "wms",
      "B": "tile",
      "C": "raster",
      "D": "vector"
    },
    "answer": "A",
    "explanation": {
      "correct": "`L.tileLayer.wms(url, options)` adalah factory method bawaan Leaflet untuk memuat layer peta standar OGC WMS (Web Map Service) secara otomatis.",
      "A": "Benar. L.tileLayer.wms adalah method resmi Leaflet untuk WMS.",
      "B": "Salah. tileLayer biasa untuk slippy map {z}/{x}/{y}, bukan parameter WMS.",
      "C": "Salah. raster bukan method Leaflet.",
      "D": "Salah. vector bukan factory method tileLayer."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-202",
    "level": "intermediate",
    "topic": "PostGIS Spatial Transformation",
    "questionType": "completion",
    "question": "Lengkapi kueri SQL untuk mereproyeksikan koordinat dari WGS 84 (4326) ke Web Mercator (3857):\n\n```sql\nSELECT ST____(geom, 3857) FROM parcel_boundaries;\n```",
    "code": "SELECT ST____(geom, 3857) FROM parcel_boundaries;",
    "options": {
      "A": "Transform",
      "B": "Reproject",
      "C": "ConvertSRID",
      "D": "SetProjection"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Transform(geometry, target_srid)` adalah fungsi inti PostGIS untuk mengubah koordinat spasial geometri dari satu sistem proyeksi ke sistem proyeksi lainnya.",
      "A": "Benar. ST_Transform mereproyeksikan koordinat ke SRID baru.",
      "B": "Salah. Reproject bukan nama fungsi PostGIS.",
      "C": "Salah. ConvertSRID bukan fungsi resmi PostGIS.",
      "D": "Salah. SetProjection bukan fungsi SQL PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-203",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON Point To Layer",
    "questionType": "completion",
    "question": "Lengkapi opsi `pointToLayer` berikut agar setiap titik dirender sebagai lingkaran kecil (L.circleMarker):\n\n```javascript\nL.geoJSON(pointsData, {\n  pointToLayer: function(feature, latlng) {\n    return L.____(latlng, { radius: 6, fillColor: \"blue\" });\n  }\n}).addTo(map);\n```",
    "code": "L.geoJSON(pointsData, {\n  pointToLayer: function(feature, latlng) {\n    return L.____(latlng, { radius: 6, fillColor: \"blue\" });\n  }\n}).addTo(map);",
    "options": {
      "A": "circleMarker",
      "B": "point",
      "C": "markerCircle",
      "D": "dot"
    },
    "answer": "A",
    "explanation": {
      "correct": "`L.circleMarker(latlng, options)` membuat lingkaran vektor dengan radius tetap dalam pixel, sangat cocok untuk merender ratusan titik GeoJSON dengan ringan.",
      "A": "Benar. L.circleMarker merender titik sebagai lingkaran vektor berbasis pixel.",
      "B": "Salah. L.point adalah koordinat 2D pixel internal, bukan layer visual.",
      "C": "Salah. markerCircle bukan class Leaflet.",
      "D": "Salah. dot bukan komponen bawaan Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-204",
    "level": "intermediate",
    "topic": "PostGIS Geometry Simplification",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS berikut untuk menyederhanakan geometri batas wilayah tanpa merusak topologi poligon:\n\n```sql\nSELECT ST____(geom, 0.005) FROM country_borders;\n```",
    "code": "SELECT ST____(geom, 0.005) FROM country_borders;",
    "options": {
      "A": "SimplifyPreserveTopology",
      "B": "SimplifyLinear",
      "C": "ReducePoints",
      "D": "CleanBorders"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_SimplifyPreserveTopology` menyederhanakan geometri poligon menggunakan Douglas-Peucker sambil menjamin bahwa poligon tidak akan menghasilkan lubang atau self-intersection yang melanggar topologi.",
      "A": "Benar. ST_SimplifyPreserveTopology mencegah rusaknya topologi poligon saat disederhanakan.",
      "B": "Salah. SimplifyLinear bukan nama fungsi PostGIS.",
      "C": "Salah. ReducePoints bukan fungsi resmi PostGIS.",
      "D": "Salah. CleanBorders bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-205",
    "level": "intermediate",
    "topic": "Turf.js Bounding Box",
    "questionType": "completion",
    "question": "Lengkapi pemanggilan fungsi Turf.js untuk menghitung bounding box `[minX, minY, maxX, maxY]` dari sebuah objek GeoJSON:\n\n```javascript\nconst bbox = turf.____(geojsonFeatureCollection);\n```",
    "code": "const bbox = turf.____(geojsonFeatureCollection);",
    "options": {
      "A": "bbox",
      "B": "extent",
      "C": "envelope",
      "D": "bounds"
    },
    "answer": "A",
    "explanation": {
      "correct": "`turf.bbox(geojson)` menghitung dan mengembalikan array 4 elemen bounding box `[minX, minY, maxX, maxY]` dari fitur atau koleksi fitur GeoJSON.",
      "A": "Benar. turf.bbox adalah fungsi standar Turf.js untuk menghitung BBOX.",
      "B": "Salah. extent adalah nama modul Turf lama yang sudah deprecated dan digantikan bbox.",
      "C": "Salah. turf.envelope menghasilkan poligon persegi, bukan array 4 angka BBOX.",
      "D": "Salah. bounds bukan nama fungsi utama Turf.js."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-206",
    "level": "intermediate",
    "topic": "Spatial SQL Envelope",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk membuat geometri persegi panjang bounding box dari 4 koordinat batas:\n\n```sql\nSELECT ST____(106.0, -7.0, 108.0, -6.0, 4326);\n```",
    "code": "SELECT ST____(106.0, -7.0, 108.0, -6.0, 4326);",
    "options": {
      "A": "MakeEnvelope",
      "B": "CreateBox",
      "C": "BuildBBox",
      "D": "MakePolygonFromBounds"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_MakeEnvelope(xmin, ymin, xmax, ymax, srid)` membuat geometri poligon persegi empat sempurna dari batas koordinat bounding box yang diberikan.",
      "A": "Benar. ST_MakeEnvelope menghasilkan poligon persegi dari parameter minX, minY, maxX, maxY.",
      "B": "Salah. CreateBox bukan nama fungsi PostGIS.",
      "C": "Salah. BuildBBox bukan fungsi spasial PostGIS.",
      "D": "Salah. MakePolygonFromBounds bukan fungsi resmi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-207",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON Interactive State",
    "questionType": "completion",
    "question": "Lengkapi kode berikut agar layer poligon tidak merespons event mouse (pointer pass-through ke layer di bawahnya):\n\n```javascript\nconst layer = L.geoJSON(data, {\n  style: {\n    ____: false,\n    color: \"#333\"\n  }\n});\n```",
    "code": "const layer = L.geoJSON(data, {\n  style: {\n    ____: false,\n    color: \"#333\"\n  }\n});",
    "options": {
      "A": "interactive",
      "B": "clickable",
      "C": "pointerEvents",
      "D": "active"
    },
    "answer": "A",
    "explanation": {
      "correct": "Opsi `interactive: false` pada path options Leaflet menonaktifkan penangkapan mouse/touch event pada layer tersebut sehingga event diteruskan ke layer di belakangnya.",
      "A": "Benar. interactive: false menonaktifkan penanganan interaksi mouse pada layer.",
      "B": "Salah. clickable adalah opsi Leaflet v0.7 lama yang sudah diganti oleh interactive di Leaflet v1.0+.",
      "C": "Salah. pointerEvents adalah properti CSS mentah, bukan opsi Path Leaflet.",
      "D": "Salah. active bukan opsi style layer Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-208",
    "level": "intermediate",
    "topic": "PostGIS Spatial Centroid Calculation",
    "questionType": "completion",
    "question": "Lengkapi kueri SQL berikut untuk menghitung titik pusat geometri:\n\n```sql\nSELECT id, ST____(geom) as center_geom FROM building_footprints;\n```",
    "code": "SELECT id, ST____(geom) as center_geom FROM building_footprints;",
    "options": {
      "A": "Centroid",
      "B": "Center",
      "C": "Midpoint",
      "D": "Middle"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Centroid(geom)` menghitung pusat massa geometrik dari poligon, garis, atau kumpulan titik.",
      "A": "Benar. ST_Centroid adalah fungsi OGC resmi untuk pusat massa geometri.",
      "B": "Salah. Center bukan nama fungsi spasial PostGIS.",
      "C": "Salah. Midpoint digunakan untuk titik tengah garis pada beberapa library, bukan nama fungsi PostGIS.",
      "D": "Salah. Middle bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-209",
    "level": "intermediate",
    "topic": "Leaflet Layer Control",
    "questionType": "completion",
    "question": "Lengkapi penambahan kontrol layer (layer switcher basemap dan overlay) di pojok kanan atas peta:\n\n```javascript\nconst baseMaps = { \"OSM\": osmLayer, \"Satellite\": satLayer };\nconst overlayMaps = { \"Rute\": routeLayer };\nL.control.____(baseMaps, overlayMaps).addTo(map);\n```",
    "code": "const baseMaps = { \"OSM\": osmLayer, \"Satellite\": satLayer };\nconst overlayMaps = { \"Rute\": routeLayer };\nL.control.____(baseMaps, overlayMaps).addTo(map);",
    "options": {
      "A": "layers",
      "B": "switcher",
      "C": "legend",
      "D": "selector"
    },
    "answer": "A",
    "explanation": {
      "correct": "`L.control.layers(baseLayers, overlays, options)` adalah komponen UI resmi Leaflet untuk menyediakan panel pilihan basemap dan checkbox toggle layer overlay.",
      "A": "Benar. L.control.layers adalah class resmi Leaflet layer switcher.",
      "B": "Salah. switcher bukan nama kontrol bawaan Leaflet.",
      "C": "Salah. legend bukan class kontrol default Leaflet.",
      "D": "Salah. selector bukan method kontrol bawaan Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-210",
    "level": "intermediate",
    "topic": "PostGIS Spatial Split / Subdivide",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk membagi poligon raksasa yang memiliki puluhan ribu vertex menjadi potongan-potongan poligon kecil maksimal 255 vertex agar query spasial menjadi cepat:\n\n```sql\nSELECT ST____(geom, 255) FROM large_forest_polygons;\n```",
    "code": "SELECT ST____(geom, 255) FROM large_forest_polygons;",
    "options": {
      "A": "Subdivide",
      "B": "Chop",
      "C": "SplitPoints",
      "D": "Fragment"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Subdivide(geom, max_vertices)` memotong poligon besar menjadi sub-poligon yang lebih kecil dengan jumlah vertex maksimal tertentu, meningkatkan efisiensi indeks GiST dan kecepatan kueri spasial hingga 100x lipat.",
      "A": "Benar. ST_Subdivide memecah geometri kompleks menjadi bagian-bagian berbobot ringan.",
      "B": "Salah. Chop bukan nama fungsi PostGIS.",
      "C": "Salah. SplitPoints bukan fungsi resmi PostGIS.",
      "D": "Salah. Fragment bukan fungsi spasial PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-211",
    "level": "intermediate",
    "topic": "Turf.js Midpoint",
    "questionType": "completion",
    "question": "Lengkapi fungsi penghitungan titik tengah antara dua titik di Turf.js:\n\n```javascript\nconst mid = turf.____(point1, point2);\n```",
    "code": "const mid = turf.____(point1, point2);",
    "options": {
      "A": "midpoint",
      "B": "center",
      "C": "average",
      "D": "haleway"
    },
    "answer": "A",
    "explanation": {
      "correct": "`turf.midpoint(point1, point2)` menghitung titik tepat di tengah garis geodesik antara dua titik koordinat.",
      "A": "Benar. turf.midpoint mengembalikan titik tengah antara dua koordinat.",
      "B": "Salah. turf.center menghitung pusat bounding box dari koleksi fitur, bukan midpoint dua titik.",
      "C": "Salah. average bukan nama fungsi Turf.js.",
      "D": "Salah. haleway bukan nama fungsi di Turf.js."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-212",
    "level": "intermediate",
    "topic": "PostGIS Closest Point",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk menemukan titik pada geometri A yang paling dekat dengan geometri B:\n\n```sql\nSELECT ST____(line_geom, point_geom);\n```",
    "code": "SELECT ST____(line_geom, point_geom);",
    "options": {
      "A": "ClosestPoint",
      "B": "NearestVertex",
      "C": "MinDistancePoint",
      "D": "SnapPoint"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_ClosestPoint(geomA, geomB)` mengembalikan titik 2D pada geomA yang jaraknya paling dekat dengan geomB.",
      "A": "Benar. ST_ClosestPoint mencari titik terdekat pada geometri sumber ke geometri target.",
      "B": "Salah. NearestVertex hanya mencari simpul sudut, bukan sembarang titik pada kontur.",
      "C": "Salah. MinDistancePoint bukan nama fungsi PostGIS.",
      "D": "Salah. SnapPoint bukan nama fungsi pencarian jarak terdekat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-213",
    "level": "intermediate",
    "topic": "Leaflet Polygon LatLngs Extraction",
    "questionType": "completion",
    "question": "Lengkapi pemanggilan method untuk mendapatkan seluruh array koordinat dari sebuah objek `L.polygon` yang sedang diedit:\n\n```javascript\nconst coords = polygonLayer.____();\n```",
    "code": "const coords = polygonLayer.____();",
    "options": {
      "A": "getLatLngs",
      "B": "getCoordinates",
      "C": "toPoints",
      "D": "extractVertices"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `getLatLngs()` mengembalikan array koordinat `L.LatLng` yang menyusun poligon atau cincin poligon berlubang di Leaflet.",
      "A": "Benar. getLatLngs() adalah method resmi Leaflet untuk membaca koordinat poligon/polyline.",
      "B": "Salah. getCoordinates bukan method Leaflet melainkan istilah GeoJSON.",
      "C": "Salah. toPoints bukan method bawaan Leaflet.",
      "D": "Salah. extractVertices bukan method Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-214",
    "level": "intermediate",
    "topic": "PostGIS Line Interpolate Point",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk menemukan titik di sepanjang garis pada posisi 50% (tengah) panjang garis:\n\n```sql\nSELECT ST____(line_geom, 0.5);\n```",
    "code": "SELECT ST____(line_geom, 0.5);",
    "options": {
      "A": "LineInterpolatePoint",
      "B": "PointOnLine",
      "C": "InterpolateDistance",
      "D": "SplitLinePercent"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_LineInterpolatePoint(line, fraction)` mengambil nilai fraksi antara 0.0 (awal garis) hingga 1.0 (akhir garis) dan mengembalikan titik koordinat pada posisi persentase tersebut.",
      "A": "Benar. ST_LineInterpolatePoint menginterpolasi titik pada fraksi panjang garis.",
      "B": "Salah. PointOnLine bukan nama fungsi PostGIS.",
      "C": "Salah. InterpolateDistance menerima jarak absolut, bukan fraksi 0.5.",
      "D": "Salah. SplitLinePercent bukan nama fungsi resmi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-215",
    "level": "intermediate",
    "topic": "Turf.js Clean Coordinates",
    "questionType": "completion",
    "question": "Lengkapi fungsi Turf.js yang digunakan untuk menghapus koordinat duplikat atau garis yang berulang pada GeoJSON:\n\n```javascript\nconst cleaned = turf.____(dirtyGeojson);\n```",
    "code": "const cleaned = turf.____(dirtyGeojson);",
    "options": {
      "A": "cleanCoords",
      "B": "removeDuplicates",
      "C": "sanitizeGeometry",
      "D": "filterPoints"
    },
    "answer": "A",
    "explanation": {
      "correct": "`turf.cleanCoords(geojson)` menghapus titik-titik simpul yang berhimpitan/duplikat tanpa mengubah bentuk geometris fitur.",
      "A": "Benar. cleanCoords adalah fungsi Turf.js untuk membersihkan koordinat berulang.",
      "B": "Salah. removeDuplicates bukan nama fungsi Turf.js.",
      "C": "Salah. sanitizeGeometry bukan nama fungsi di Turf.js.",
      "D": "Salah. filterPoints bukan nama fungsi reduksi duplikat Turf."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-216",
    "level": "intermediate",
    "topic": "PostGIS Spatial Aggregation to GeoJSON",
    "questionType": "completion",
    "question": "Lengkapi kueri SQL untuk menggabungkan banyak baris data menjadi satu objek tunggal FeatureCollection GeoJSON secara native di PostgreSQL:\n\n```sql\nSELECT jsonb_build_object(\n  'type', 'FeatureCollection',\n  'features', jsonb_agg(ST____(p.*)::jsonb)\n) FROM pois p;\n```",
    "code": "SELECT jsonb_build_object(\n  'type', 'FeatureCollection',\n  'features', jsonb_agg(ST____(p.*)::jsonb)\n) FROM pois p;",
    "options": {
      "A": "AsGeoJSON",
      "B": "MakeFeature",
      "C": "RowToGeoJSON",
      "D": "EncodeJSON"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_AsGeoJSON(record)` di PostGIS dapat menerima seluruh record baris tabel dan otomatis mengonversinya menjadi objek Feature GeoJSON lengkap beserta atribut properties.",
      "A": "Benar. ST_AsGeoJSON(row) mengonversi record baris tabel menjadi GeoJSON Feature.",
      "B": "Salah. MakeFeature bukan fungsi PostGIS.",
      "C": "Salah. RowToGeoJSON bukan fungsi bawaan PostGIS.",
      "D": "Salah. EncodeJSON bukan fungsi spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-217",
    "level": "intermediate",
    "topic": "Leaflet PanTo Animation",
    "questionType": "completion",
    "question": "Lengkapi method pemindahan center peta secara halus dengan animasi translasi (pan):\n\n```javascript\nmap.____([-6.9, 107.6], { animate: true, duration: 1.5 });\n```",
    "code": "map.____([-6.9, 107.6], { animate: true, duration: 1.5 });",
    "options": {
      "A": "panTo",
      "B": "moveTo",
      "C": "glideTo",
      "D": "shiftView"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `map.panTo(latlng, options)` menggeser pusat tampilan peta ke lokasi baru dengan transisi animasi halus tanpa mengubah tingkat zoom saat ini.",
      "A": "Benar. map.panTo adalah method resmi Leaflet untuk translasi pusat peta.",
      "B": "Salah. moveTo bukan method bawaan peta Leaflet.",
      "C": "Salah. glideTo bukan nama method Leaflet.",
      "D": "Salah. shiftView bukan method Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-218",
    "level": "intermediate",
    "topic": "PostGIS Delaunay Triangulation",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk menghasilkan jaring-jaring segitiga Delaunay dari sebaran titik koordinat:\n\n```sql\nSELECT ST____(ST_Collect(geom)) FROM elevation_points;\n```",
    "code": "SELECT ST____(ST_Collect(geom)) FROM elevation_points;",
    "options": {
      "A": "DelaunayTriangles",
      "B": "VoronoiPolygons",
      "C": "MeshGrid",
      "D": "TINBuilder"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_DelaunayTriangles(geom, tolerance, flag)` menghasilkan triangulasi Delaunay poligon TIN (Triangulated Irregular Network) dari kumpulan titik spasial.",
      "A": "Benar. ST_DelaunayTriangles adalah fungsi pembangun TIN Delaunay di PostGIS.",
      "B": "Salah. VoronoiPolygons menghasilkan diagram Voronoi/Thiessen polygon, bukan segitiga Delaunay.",
      "C": "Salah. MeshGrid bukan fungsi PostGIS.",
      "D": "Salah. TINBuilder bukan fungsi resmi SQL PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-219",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON eachLayer",
    "questionType": "completion",
    "question": "Lengkapi perulangan pada setiap layer anak yang berada di dalam `L.geoJSON` layer:\n\n```javascript\ngeoJsonLayer.____(function(layer) {\n  layer.openPopup();\n});\n```",
    "code": "geoJsonLayer.____(function(layer) {\n  layer.openPopup();\n});",
    "options": {
      "A": "eachLayer",
      "B": "forEach",
      "C": "iterate",
      "D": "mapLayers"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `eachLayer(fn)` adalah metode iterasi standar pada semua turunan `L.LayerGroup` di Leaflet untuk mengeksekusi fungsi pada tiap layer anak.",
      "A": "Benar. eachLayer adalah method iterasi resmi layer Leaflet.",
      "B": "Salah. forEach adalah method bawaan Array JavaScript, bukan method L.LayerGroup Leaflet.",
      "C": "Salah. iterate bukan method Leaflet.",
      "D": "Salah. mapLayers bukan method Leaflet."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-220",
    "level": "intermediate",
    "topic": "Spatial SQL Bounding Box Cast",
    "questionType": "completion",
    "question": "Lengkapi operator casting di PostGIS untuk mengubah kolom geometri menjadi tipe bounding box 2D (`box2d`):\n\n```sql\nSELECT geom____box2d FROM parcels;\n```",
    "code": "SELECT geom____box2d FROM parcels;",
    "options": {
      "A": "::",
      "B": "->",
      "C": "=>",
      "D": "%"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di PostgreSQL, operator double-colon `::` digunakan untuk type casting (misal `geom::box2d`), mengekstrak bounding box 2D dari geometri.",
      "A": "Benar. Operator :: adalah sintaks type casting resmi PostgreSQL.",
      "B": "Salah. -> digunakan untuk navigasi JSON key di PostgreSQL.",
      "C": "Salah. => digunakan untuk named arguments di SQL.",
      "D": "Salah. % adalah operator modulo."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-221",
    "level": "intermediate",
    "topic": "Vector Tiles vs GeoJSON",
    "questionType": "best-practice",
    "question": "Kapan sebuah sistem web GIS sebaiknya bermigrasi dari pengiriman data GeoJSON biasa ke Vector Tiles (MVT / Mapbox Vector Tiles)?\n\n```javascript\n// Pertimbangan arsitektur data spasial web:\n```",
    "code": "// Pertimbangan arsitektur data spasial web:",
    "options": {
      "A": "Ketika jumlah data melebihi puluhan ribu fitur yang menyebabkan ukuran file GeoJSON membengkak (>5-10 MB) dan membuat browser klien macet",
      "B": "Ketika data hanya terdiri dari 5 titik marker",
      "C": "Ketika server tidak memiliki database",
      "D": "Hanya jika peta ditampilkan di televisi tabung CRT"
    },
    "answer": "A",
    "explanation": {
      "correct": "Vector Tiles (MVT) memotong data vektor menjadi potongan grid tile (berdasarkan zoom level) dalam format biner Protocol Buffers yang sangat padat. Browser hanya mengunduh data vektor di viewport aktif, memangkas konsumsi bandwidth dan memori secara dramatis.",
      "A": "Benar. Vector Tiles mengeliminasi bottleneck transfer dataset masif melalui tiling biner terpartisi.",
      "B": "Salah. Untuk 5 titik, GeoJSON sederhana jauh lebih cepat dan mudah diimplementasikan.",
      "C": "Salah. Vector tiles memerlukan backend/tile server pen-generate tile.",
      "D": "Salah. Perangkat display CRT tidak relevan dengan arsitektur web mapping modern."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-222",
    "level": "intermediate",
    "topic": "Leaflet Canvas vs SVG",
    "questionType": "best-practice",
    "question": "Mengapa menyetel opsi `{ renderer: L.canvas() }` pada layer Leaflet sangat disarankan ketika merender 10.000 poligon batas persil tanah?\n\n```javascript\n// Konfigurasi renderer Leaflet:\nconst map = L.map(\"map\", { preferCanvas: true });\n```",
    "code": "// Konfigurasi renderer Leaflet:\nconst map = L.map(\"map\", { preferCanvas: true });",
    "options": {
      "A": "Canvas menggambar seluruh poligon ke dalam satu elemen `<canvas>` tunggal, menghindari pembuatan 10.000 node elemen DOM `<svg>` individual yang membebani browser",
      "B": "Canvas menghasilkan file gambar berukuran 0 byte",
      "C": "SVG dilarang oleh konsorsium W3C sejak tahun 2020",
      "D": "Canvas secara otomatis memperbaiki kesalahan topologi database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Mode SVG bawaan Leaflet membuat satu elemen DOM SVG path per fitur. 10.000 elemen DOM menyebabkan browser mengalami layout recalculation dan garbage collection freeze yang parah. Canvas menggambar piksel langsung ke kanvas tunggal dengan beban DOM nol.",
      "A": "Benar. Canvas menjaga pohon DOM tetap ramping (hanya 1 elemen kanvas untuk ribuan layer).",
      "B": "Salah. Canvas adalah elemen visual dinamis di memori, bukan file nol byte.",
      "C": "Salah. SVG adalah standar aktif W3C yang sangat baik untuk fitur skala kecil-menengah.",
      "D": "Salah. Canvas adalah mesin rendering grafis klien, tidak mengubah data database."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-223",
    "level": "intermediate",
    "topic": "Spatial Index Selection SP-GiST vs GiST",
    "questionType": "best-practice",
    "question": "Pada tipe distribusi data spasial bagaimanakah indeks SP-GiST (Space-Partitioned GiST) dapat memberikan performa query lebih cepat dan ukuran indeks lebih kecil daripada GiST standar?\n\n```sql\n-- Pemilihan indeks: CREATE INDEX ... USING SPGIST(geom);\n```",
    "code": "-- Pemilihan indeks: CREATE INDEX ... USING SPGIST(geom);",
    "options": {
      "A": "Pada data spasial yang memiliki distribusi titik tidak merata dengan banyak kluster kepadatan ekstrem (misal: sebaran titik alamat perkotaan padat vs pedesaan kosong)",
      "B": "Pada tabel kosong tanpa data",
      "C": "Hanya untuk menyimpan file audio MP3",
      "D": "Pada data yang sudah diurutkan alfabet"
    },
    "answer": "A",
    "explanation": {
      "correct": "SP-GiST menggunakan partisi ruang non-overlapping (seperti quad-tree atau k-d tree). Pada sebaran data yang memiliki disparitas kepadatan tinggi (skewed distribution), SP-GiST menghemat kedalaman traversal pohon indeks dan mengurangi waktu pencarian.",
      "A": "Benar. SP-GiST sangat efisien untuk data titik dengan sebaran spasial yang sangat tidak seragam (skewed).",
      "B": "Salah. Indeks dibuat untuk mempercepat pencarian data yang terisi.",
      "C": "Salah. SP-GiST di PostGIS khusus untuk tipe spasial dan rentang geometrik.",
      "D": "Salah. Pengurutan alfabet menggunakan B-Tree."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-224",
    "level": "intermediate",
    "topic": "GeoServer WFS vs WMS Selection",
    "questionType": "best-practice",
    "question": "Dalam arsitektur Web GIS, kapan sebaiknya frontend memanggil endpoint WMS (Web Map Service) daripada WFS (Web Feature Service)?\n\n```javascript\n// WMS vs WFS di Web Mapping:\n```",
    "code": "// WMS vs WFS di Web Mapping:",
    "options": {
      "A": "Saat frontend hanya perlu menampilkan visualisasi peta tanpa perlu memanipulasi geometri mentah atau membaca atribut di sisi klien (server merender citra gambar PNG)",
      "B": "Saat pengguna ingin mengedit vertex geometri secara interaktif di browser",
      "C": "Ketika client offline tanpa koneksi internet",
      "D": "Hanya untuk mengekspor dokumen Microsoft Word"
    },
    "answer": "A",
    "explanation": {
      "correct": "WMS merender data menjadi gambar raster (JPEG/PNG) di sisi server, sehingga sangat ringan untuk browser klien terlepas dari berapa juta baris data di database. WFS mengirimkan koordinat geometri mentah (vektor/GML/GeoJSON) yang cocok untuk pengeditan dan query atribut.",
      "A": "Benar. WMS merender peta menjadi gambar di server, sangat ideal untuk visualisasi data besar tanpa lag klien.",
      "B": "Salah. Pengeditan vertex membutuhkan geometri vektor mentah via WFS-T (Transactional WFS).",
      "C": "Salah. Keduanya membutuhkan koneksi ke map server.",
      "D": "Salah. WMS adalah standar visualisasi peta geospasial OGC."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-225",
    "level": "intermediate",
    "topic": "Database Connection Pooling with PostGIS",
    "questionType": "best-practice",
    "question": "Pengaturan apa pada pooler koneksi seperti PgBouncer yang harus diperhatikan jika aplikasi menggunakan prepared statements untuk query spasial kompleks?\n\n```sql\n-- Mode PgBouncer: Session vs Transaction vs Statement pooling\n```",
    "code": "-- Mode PgBouncer: Session vs Transaction vs Statement pooling",
    "options": {
      "A": "Prepared statements memerlukan mode Session pooling, atau konfigurasi khusus (seperti protocol-level named prepared statement support di PgBouncer modern) jika menggunakan Transaction pooling",
      "B": "Mematikan seluruh sistem keamanan database",
      "C": "Menggunakan port HTTP 80 untuk koneksi JDBC PostgreSQL",
      "D": "Menonaktifkan ekstensi PostGIS"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara historis, Transaction pooling di PgBouncer tidak mendukung prepared statements yang mengikat state ke sesi koneksi backend. Aplikasi harus menggunakan session pooling atau mengaktifkan `max_prepared_statements` pada versi PgBouncer terbaru untuk mencegah 'prepared statement does not exist'.",
      "A": "Benar. Pengelolaan state prepared statement krusial dalam mode transaction pooling connection pooler.",
      "B": "Salah. Menghilangkan keamanan membahayakan sistem produksi.",
      "C": "Salah. PostgreSQL/PgBouncer menggunakan protokol biner TCP port default 5432/6432, bukan HTTP.",
      "D": "Salah. PostGIS wajib aktif untuk memproses tipe geometri."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-226",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON Debounce on Pan/Zoom",
    "questionType": "best-practice",
    "question": "Saat memuat data spasial berbasis BBOX tampilan layar (`map.on('moveend', ...)`), mengapa sangat disarankan menerapkan teknik 'debounce' atau 'throttle'?\n\n```javascript\n// Event drag/pan peta:\n```",
    "code": "// Event drag/pan peta:",
    "options": {
      "A": "Mencegah pengiriman ratusan request HTTP AJAX ke server database secara beruntun saat pengguna menggeser peta terus menerus",
      "B": "Menghapus cookie browser pengguna",
      "C": "Memperbesar resolusi gambar layar",
      "D": "Mengurangi kecepatan jaringan internet"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pengguna sering kali menggeser dan memperbesar peta berkali-kali dalam beberapa detik. Debounce menunda eksekusi fetch API hingga gerakan pengguna berhenti selama rentang waktu tertentu (misal 300ms), menghemat ribuan kueri SQL tidak berguna.",
      "A": "Benar. Debounce menstabilkan beban server dengan hanya mengeksekusi request saat interaksi selesai.",
      "B": "Salah. Debounce tidak berhubungan dengan penghapusan cookie.",
      "C": "Salah. Resolusi layar dikendalikan oleh hardware dan CSS viewport.",
      "D": "Salah. Debounce justru mengoptimalkan utilisasi jaringan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-227",
    "level": "intermediate",
    "topic": "Spatial Table Partitioning",
    "questionType": "best-practice",
    "question": "Strategi partisi tabel (Table Partitioning) manakah yang paling efektif di PostgreSQL untuk tabel data pelacakan armada kendaraan (GPS Tracking) yang bertambah jutaan baris per hari?\n\n```sql\n-- Partisi tabel data historis pelacakan GPS:\n```",
    "code": "-- Partisi tabel data historis pelacakan GPS:",
    "options": {
      "A": "Partisi berbasis rentang waktu (Range Partitioning pada kolom timestamp/tanggal), dikombinasikan dengan indeks spasial GiST pada masing-masing partisi lokal",
      "B": "Partisi acak (Random Hash) pada kolom ID",
      "C": "Menyimpan seluruh data di satu file Excel tanpa partisi",
      "D": "Menghapus data setiap 5 menit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kueri pelacakan armada hampir selalu memiliki filter rentang waktu (misal: 'perjalanan hari ini'). Partisi berdasarkan waktu (misal per bulan atau per hari) memungkinkan query planner melakukan *partition pruning* (hanya memindai partisi yang relevan), dan partisi lama mudah diarsipkan (DROP TABLE) tanpa overhead delete.",
      "A": "Benar. Range partitioning per tanggal + local GiST index memberikan performa write dan scan tertinggi untuk IoT/GPS data.",
      "B": "Salah. Hash ID tidak mendukung partition pruning berbasis filter waktu query.",
      "C": "Salah. Excel tidak mampu menampung puluhan juta record data spasial industri.",
      "D": "Salah. Menghapus data menghilangkan nilai historis analytics bisnis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-228",
    "level": "intermediate",
    "topic": "GeoJSON Serialization in Spring Boot",
    "questionType": "best-practice",
    "question": "Di backend Spring Boot, library apakah yang menjadi standar untuk otomatis men-serialize objek geometri JTS (`org.locationtech.jts.geom.Geometry`) ke format GeoJSON melalui Jackson?\n\n```java\n// Spring Boot dependency untuk modul geospasial Jackson:\n```",
    "code": "// Spring Boot dependency untuk modul geospasial Jackson:",
    "options": {
      "A": "jackson-datatype-jts",
      "B": "spring-boot-starter-mail",
      "C": "lombok",
      "D": "junit-jupiter"
    },
    "answer": "A",
    "explanation": {
      "correct": "Modul `jackson-datatype-jts` mendaftarkan serializer dan deserializer kustom ke ObjectMapper Spring Boot sehingga tipe geometri JTS (Point, Polygon, MultiPolygon) otomatis dikonversi ke format GeoJSON standar RFC 7946.",
      "A": "Benar. jackson-datatype-jts adalah jembatan resmi antara JTS Topology Suite dan JSON Jackson.",
      "B": "Salah. starter-mail untuk mengirim email.",
      "C": "Salah. lombok untuk boilerplate getter/setter code generation.",
      "D": "Salah. junit untuk testing otomatis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-229",
    "level": "intermediate",
    "topic": "Spatial Accuracy vs Performance: ST_DWithin vs ST_Buffer",
    "questionType": "best-practice",
    "question": "Mengapa kueri pencarian 'titik dalam radius 1 km' HARUS menggunakan `ST_DWithin` dan BUKAN `ST_Intersects(geom, ST_Buffer(point, 1000))`?\n\n```sql\n-- Query 1: ST_DWithin(geom, pt, 1000)\n-- Query 2: ST_Intersects(geom, ST_Buffer(pt, 1000))\n```",
    "code": "-- Query 1: ST_DWithin(geom, pt, 1000)\n-- Query 2: ST_Intersects(geom, ST_Buffer(pt, 1000))",
    "options": {
      "A": "ST_Buffer harus membuat geometri poligon lingkaran baru dengan puluhan vertex di memori untuk setiap baris, sedangkan ST_DWithin memanfaatkan indeks spasial dan kalkulasi jarak langsung yang jauh lebih cepat",
      "B": "ST_Buffer dilarang oleh standar SQL",
      "C": "ST_DWithin hanya bekerja untuk data fiksi",
      "D": "Kedua kueri memiliki kecepatan eksekusi yang sama persis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Membuat poligon penyangga via `ST_Buffer` memakan alokasi memori CPU yang besar untuk mengaproksimasi lingkaran dengan banyak segmen garis. `ST_DWithin` menghitung relasi jarak secara langsung menggunakan bounding box expand dan jarak indeks R-Tree tanpa instansiasi geometri poligon perantara.",
      "A": "Benar. ST_DWithin jauh lebih hemat memori dan puluhan kali lebih cepat karena index-native.",
      "B": "Salah. ST_Buffer adalah fungsi resmi OGC, tetapi tidak efisien jika dipakai sebagai pengganti radius search.",
      "C": "Salah. ST_DWithin digunakan pada data geospasial riil di seluruh dunia.",
      "D": "Salah. ST_Buffer jauh lebih lambat karena komputasi konstruksi vertex lingkaran."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-230",
    "level": "intermediate",
    "topic": "Web Map Layer Reordering UX",
    "questionType": "best-practice",
    "question": "Dalam prinsip kartografi web interaktif, bagaimana urutan penumpukan layer dari yang paling bawah ke paling atas yang benar secara visual?\n\n```javascript\n// Urutan tumpukan layer peta web:\n```",
    "code": "// Urutan tumpukan layer peta web:",
    "options": {
      "A": "Basemap Citra/Jalan (Paling Bawah) -> Poligon Tematik -> Garis Jaringan Jalan -> Titik POI/Marker -> Label Teks Peta (Paling Atas)",
      "B": "Titik POI (Paling Bawah) -> Poligon Tematik -> Basemap (Paling Atas menutupi semua data)",
      "C": "Poligon Tematik (Paling Atas dengan opacity 100% menutupi marker)",
      "D": "Semua layer ditumpuk acak tanpa urutan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Prinsip kartografi visual hierarki: Basemap sebagai referensi latar di dasar, poligon area tematik semi-transparan di atasnya, linestring garis jaringan di atas poligon, marker/titik diskrit di atas garis, dan label teks/tooltip di lapisan paling atas agar tidak tertutup objek lain.",
      "A": "Benar. Hierarki standar: Basemap -> Area/Poligon -> Garis -> Titik/Simbol -> Label anotasi.",
      "B": "Salah. Menempatkan basemap di paling atas akan menutupi seluruh data spasial di bawahnya.",
      "C": "Salah. Poligon opaque di atas marker akan menyembunyikan titik lokasi dari pandangan pengguna.",
      "D": "Salah. Tumpukan acak menghasilkan peta yang sulit dibaca dan membingungkan."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-231",
    "level": "intermediate",
    "topic": "Spatial Clustering Thresholds",
    "questionType": "best-practice",
    "question": "Pada plugin Leaflet.markercluster, opsi apakah yang mengontrol jarak maksimum (dalam pixel) pengelompokan marker saat zoom in?\n\n```javascript\nconst cluster = L.markerClusterGroup({\n  maxClusterRadius: 50 // Pengaturan jarak pixel kluster\n});\n```",
    "code": "const cluster = L.markerClusterGroup({\n  maxClusterRadius: 50 // Pengaturan jarak pixel kluster\n});",
    "options": {
      "A": "maxClusterRadius menentukan radius cakupan pixel di mana titik-titik akan digabungkan menjadi satu bulatan cluster",
      "B": "maxClusterRadius mengatur batas memori RAM komputer klien",
      "C": "maxClusterRadius membatasi jumlah data di database SQL",
      "D": "maxClusterRadius mengatur ketebalan garis batas negara"
    },
    "answer": "A",
    "explanation": {
      "correct": "`maxClusterRadius` (default biasanya 80px) menentukan jarak piksel pada layar di mana marker yang berdekatan akan disatukan. Semakin kecil angkanya, cluster akan lebih cepat terurai menjadi marker individu pada tingkat zoom yang lebih rendah.",
      "A": "Benar. Mengatur kepadatan pengelompokan kluster marker dalam satuan piksel layar.",
      "B": "Salah. Tidak mengontrol RAM perangkat secara langsung.",
      "C": "Salah. Opsi ini murni konfigurasi presentasi layer frontend.",
      "D": "Salah. Tidak berhubungan dengan styling batas poligon negara."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-232",
    "level": "intermediate",
    "topic": "PostGIS BRIN Index for Spatial Data",
    "questionType": "best-practice",
    "question": "Kapan indeks BRIN (Block Range Index) pada PostgreSQL/PostGIS menjadi alternatif yang sangat menguntungkan dibandingkan indeks GiST?\n\n```sql\n-- Indeks: CREATE INDEX idx_massive_geom ON massive_table USING BRIN(geom);\n```",
    "code": "-- Indeks: CREATE INDEX idx_massive_geom ON massive_table USING BRIN(geom);",
    "options": {
      "A": "Pada tabel raksasa (ratusan juta baris) di mana data disimpan berurutan secara fisik di disk sesuai lokasi geografisnya (geographically clustered / sorted) dan ukuran GiST index terlalu besar untuk muat di RAM",
      "B": "Pada tabel kecil berisi 10 baris data",
      "C": "Hanya untuk kolom yang menyimpan nomor telepon",
      "D": "Ketika disk storage sudah penuh 100%"
    },
    "answer": "A",
    "explanation": {
      "correct": "Indeks BRIN hanya menyimpan nilai minimum dan maksimum per rentang blok halaman fisik disk (sangat kecil, sering kali hanya 1% dari ukuran GiST). Jika data diurutkan secara spasial (misal via geohash / ST_GeoHash), BRIN sangat cepat dan menghemat puluhan Gigabyte RAM.",
      "A": "Benar. BRIN memiliki footprint memori mikro dan sangat unggul untuk tabel raksasa terurut fisik.",
      "B": "Salah. Pada tabel kecil, indeks standar atau sequential scan sudah sangat cepat.",
      "C": "Salah. BRIN pada kolom geom khusus untuk data spasial multi-dimensi.",
      "D": "Salah. Indeks membutuhkan sisa kapasitas disk untuk dibuat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-233",
    "level": "intermediate",
    "topic": "Leaflet Event Delegation",
    "questionType": "best-practice",
    "question": "Mengapa menambahkan satu event listener pada layer container induk (`geoJsonLayer.on('click', handler)`) jauh lebih efisien daripada menambahkan event listener ke masing-masing fitur di `onEachFeature`?\n\n```javascript\n// Event Delegation di Leaflet:\n```",
    "code": "// Event Delegation di Leaflet:",
    "options": {
      "A": "Memanfaatkan pattern Event Bubbling sehingga hanya ada 1 fungsi listener yang dialokasikan di memori browser untuk ribuan fitur",
      "B": "Membuat warna marker otomatis berubah acak",
      "C": "Menghapus semua fitur yang tidak diklik",
      "D": "Mematikan fungsi zooming peta"
    },
    "answer": "A",
    "explanation": {
      "correct": "Event delegation memanfaatkan fakta bahwa interaksi mouse pada layer anak akan naik (bubble up) ke container induk. Menempelkan 1 handler pada parent menghemat alokasi fungsi JavaScript di memori dibandingkan membuat 10.000 closure listener terpisah.",
      "A": "Benar. Event delegation memangkas overhead alokasi ribuan callback di memori browser.",
      "B": "Salah. Event delegation tidak mengubah warna secara acak.",
      "C": "Salah. Event delegation tidak menghapus layer fitur.",
      "D": "Salah. Zooming peta tetap berfungsi normal."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-234",
    "level": "intermediate",
    "topic": "Spatial Query Parallelism",
    "questionType": "best-practice",
    "question": "Pengaturan konfigurasi PostgreSQL manakah yang memungkinkan query spasial berat (seperti ST_Intersects pada jutaan poligon) dieksekusi menggunakan banyak core CPU secara bersamaan?\n\n```sql\n-- Konfigurasi postgresql.conf:\n```",
    "code": "-- Konfigurasi postgresql.conf:",
    "options": {
      "A": "max_parallel_workers_per_gather dan max_parallel_workers",
      "B": "autovacuum = off",
      "C": "listen_addresses = 'none'",
      "D": "fsync = off"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostgreSQL mendukung Parallel Query Execution untuk fungsi-fungsi spasial PostGIS yang ditandai sebagai `PARALLEL SAFE`. Menyetel `max_parallel_workers_per_gather` memungkinkan perencana kueri membagi komputasi geometri ke beberapa thread worker CPU paralel.",
      "A": "Benar. Parameter parallel worker mengaktifkan eksekusi multi-core CPU untuk kalkulasi spasial.",
      "B": "Salah. Mematikan autovacuum menyebabkan tabel bloat dan degradasi performa jangka panjang.",
      "C": "Salah. listen_addresses = none memutus koneksi jaringan ke database.",
      "D": "Salah. Mematikan fsync berisiko korupsi data saat server mati mendadak."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-235",
    "level": "intermediate",
    "topic": "MapLibre GL vs Leaflet",
    "questionType": "best-practice",
    "question": "Keunggulan utama apa yang didapatkan pengembang ketika memilih MapLibre GL JS / Mapbox GL dibandingkan Leaflet untuk aplikasi pemetaan modern?\n\n```javascript\n// MapLibre GL JS vs Leaflet:\n```",
    "code": "// MapLibre GL JS vs Leaflet:",
    "options": {
      "A": "Rendering berbasis WebGL/GPU hardware-accelerated yang mendukung rotasi peta (bearing), kemiringan 3D (pitch), dan styling vektor dinamis di sisi klien tanpa jeda reload",
      "B": "MapLibre tidak memerlukan koneksi internet sama sekali",
      "C": "Leaflet tidak bisa dijalankan di browser Google Chrome",
      "D": "MapLibre hanya bisa menampilkan peta hitam putih"
    },
    "answer": "A",
    "explanation": {
      "correct": "MapLibre GL JS menggunakan WebGL untuk merender Vector Tiles langsung pada kartu grafis (GPU). Ini memungkinkan rotasi bebas 360 derajat, visualisasi 3D pitch teropong, transisi zoom kontinu ultra-smooth, dan penataan gaya data-driven yang instan.",
      "A": "Benar. WebGL rendering memberikan performa 60 FPS GPU, rotasi peta, dan 3D visualisasi modern.",
      "B": "Salah. MapLibre tetap membutuhkan koneksi jaringan untuk mengunduh tile dan aset gaya.",
      "C": "Salah. Leaflet berjalan sempurna di Google Chrome dan seluruh browser modern.",
      "D": "Salah. MapLibre mendukung pewarnaan RGB 32-bit penuh dan visualisasi kartografi mutakhir."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-236",
    "level": "intermediate",
    "topic": "Handling Coordinate Precision Drift",
    "questionType": "best-practice",
    "question": "Saat melakukan chaining operasi topologi spasial (misal: ST_Union lalu ST_Intersection lalu ST_Buffer), mengapa kadang muncul TopologyException atau sliver polygons, dan bagaimana mengatasinya?\n\n```sql\n-- Mengatasi floating-point arithmetic precision drift:\n```",
    "code": "-- Mengatasi floating-point arithmetic precision drift:",
    "options": {
      "A": "Menggunakan ST_SnapToGrid untuk menyelaraskan koordinat titik ke grid presisi tetap dan mengeliminasi ketidakkonsistenan floating point rounding",
      "B": "Mengubah angka koordinat menjadi teks dan menghapus koma",
      "C": "Menonaktifkan CPU floating point unit",
      "D": "Mengalikan seluruh koordinat dengan angka nol"
    },
    "answer": "A",
    "explanation": {
      "correct": "Representasi angka floating-point IEEE 754 pada komputer memiliki keterbatasan presisi mikroskopis yang dapat menyebabkan simpul garis yang seharusnya sejajar menjadi sedikit meleset (sliver / self-intersect). `ST_SnapToGrid` menyelaraskan titik ke grid reguler dan menstabilkan topologi.",
      "A": "Benar. ST_SnapToGrid membersihkan artefak mikroskopis floating-point dan mencegah TopologyException.",
      "B": "Salah. Mengubah menjadi teks tanpa koma merusak nilai koordinat geografis.",
      "C": "Salah. FPU hardware tidak bisa dimatikan dari SQL.",
      "D": "Salah. Mengalikan nol meruntuhkan seluruh geometri ke titik origin."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-237",
    "level": "intermediate",
    "topic": "GeoServer Caching with GeoWebCache",
    "questionType": "best-practice",
    "question": "Apa peran GeoWebCache (GWC) yang terintegrasi secara bawaan di GeoServer?\n\n```sql\n// GeoWebCache pada arsitektur pemetaan web:\n```",
    "code": "// GeoWebCache pada arsitektur pemetaan web:",
    "options": {
      "A": "Meng-cache tile peta yang sudah dirender (WMS-C / WMTS) di disk atau memory server untuk langsung disajikan ke klien tanpa merender ulang dari database",
      "B": "Menghapus akun pengguna yang tidak aktif",
      "C": "Mengirimkan email tagihan bulanan",
      "D": "Mengompres file video MP4 di server"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoWebCache mengakselerasi respon server peta dengan menyimpan ubin (tile) gambar yang telah diminta sebelumnya. Permintaan berikutnya untuk tile yang sama langsung dilayani dari cache disk/memory dalam waktu beberapa milidetik tanpa membebani database PostGIS.",
      "A": "Benar. GWC adalah tile cache accelerator untuk WMS/WMTS yang memangkas beban server secara drastis.",
      "B": "Salah. GWC tidak mengelola akun pengguna aplikasi.",
      "C": "Salah. GWC tidak berhubungan dengan sistem billing email.",
      "D": "Salah. GWC khusus untuk ubin data geospasial, bukan video."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-238",
    "level": "intermediate",
    "topic": "Frontend GIS State Management",
    "questionType": "best-practice",
    "question": "Dalam arsitektur frontend (seperti React / Redux / Zustand), apa praktik terbaik terkait penyimpanan referensi objek instance peta Leaflet (`map`)?\n\n```javascript\n// State management instance peta di React:\n```",
    "code": "// State management instance peta di React:",
    "options": {
      "A": "Menyimpan instance map di React useRef() atau React Context terisolasi, dan TIDAK menyimpannya di Redux store karena objek map tidak boleh diserialisasi (non-serializable state)",
      "B": "Menyimpan seluruh instance map di Redux store global bersama data state bisnis",
      "C": "Menyimpan instance map di localStorage browser",
      "D": "Membuat instance baru di setiap render komponen"
    },
    "answer": "A",
    "explanation": {
      "correct": "Objek peta Leaflet (`L.Map`) berisi referensi DOM, event listener, dan method internal yang berstatus non-serializable dan sarat mutable state. Menyimpannya di Redux melanggar prinsip immutability Redux. Penggunaan `useRef` atau Context adalah solusi arsitektural yang tepat.",
      "A": "Benar. Non-serializable map instance harus disimpan di useRef / custom Context, bukan di Redux store.",
      "B": "Salah. Menyimpan objek non-serializable di Redux memicu serialization warning dan merusak time-travel debugging.",
      "C": "Salah. localStorage hanya menerima string teks sederhana dan tidak dapat menyimpan objek DOM live.",
      "D": "Salah. Membuat instance baru di setiap render menyebabkan duplikasi kontainer dan memory leak."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-239",
    "level": "intermediate",
    "topic": "PostGIS Spatial Index Clustering",
    "questionType": "best-practice",
    "question": "Perintah SQL manakah yang mengatur ulang urutan fisik baris data di disk storage mengikuti urutan indeks spasial GiST?\n\n```sql\n-- Optimalisasi fisik tabel spasial di disk:\n```",
    "code": "-- Optimalisasi fisik tabel spasial di disk:",
    "options": {
      "A": "CLUSTER table_name USING index_name;",
      "B": "ORDER TABLE table_name BY geom;",
      "C": "REORGANIZE ALL DATA;",
      "D": "DEFRAG DATABASE;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perintah `CLUSTER` di PostgreSQL menyortir dan menulis ulang baris-baris tabel secara fisik di disk mengikuti struktur pohon indeks spasial GiST. Hasilnya, data yang letak geografisnya berdekatan akan tersimpan di blok halaman disk yang sama, meminimalkan disk I/O head seeking secara masif.",
      "A": "Benar. CLUSTER mengatur urutan fisik baris tabel sesuai kedekatan spasial indeks GiST.",
      "B": "Salah. ORDER TABLE bukan sintaks SQL PostgreSQL.",
      "C": "Salah. REORGANIZE ALL DATA bukan perintah PostgreSQL.",
      "D": "Salah. DEFRAG DATABASE adalah istilah utilitas filesystem Windows, bukan SQL PostgreSQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-240",
    "level": "intermediate",
    "topic": "Leaflet Accessible Web Maps (A11y)",
    "questionType": "best-practice",
    "question": "Apa langkah penting dalam membuat peta interaktif web dapat diakses oleh pengguna penyandang disabilitas (Accessibility / A11y)?\n\n```javascript\n// Peningkatan aksesibilitas peta web:\n```",
    "code": "// Peningkatan aksesibilitas peta web:",
    "options": {
      "A": "Menyediakan alternatif tampilan tabel data tekstual atau daftar list, navigasi kontrol via keyboard (Tab / Arrow keys), dan atribut aria-label pada tombol kontrol",
      "B": "Membuat teks peta hanya bisa dibaca dengan kacamata inframerah",
      "C": "Mematikan fungsi pembaca layar (Screen Reader)",
      "D": "Menghapus seluruh warna pada peta"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pengguna dengan gangguan penglihatan mengandalkan pembaca layar (Screen Reader) yang tidak dapat menginterpretasikan elemen gambar peta interaktif. Menyediakan alternatif data tekstual tabel/list dan memastikan kontrol peta dapat dioperasikan via keyboard adalah standar aksesibilitas WCAG 2.1.",
      "A": "Benar. Tabel tekstual alternatif, navigasi keyboard penuh, dan ARIA label menjamin kepatuhan standar WCAG.",
      "B": "Salah. Aksesibilitas bertujuan mempermudah semua pengguna dengan perangkat standar.",
      "C": "Salah. Mematikan screen reader melanggar hak aksesibilitas penyandang disabilitas.",
      "D": "Salah. Menghilangkan warna justru mempersulit pengguna dengan penglihatan parsial; yang dibutuhkan adalah kontras yang cukup."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-241",
    "level": "intermediate",
    "topic": "PostGIS & Spatial Database",
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "topic": "Spatial Clustering DBSCAN",
    "questionType": "output",
    "question": "Apa output dari fungsi ST_ClusterDBSCAN pada kueri pengelompokan spasial berikut?\n\n```sql\nSELECT id, ST_ClusterDBSCAN(geom, eps := 100, minpoints := 2) OVER () AS cid\nFROM sensor_locations;\n```",
    "code": "SELECT id, ST_ClusterDBSCAN(geom, eps := 100, minpoints := 2) OVER () AS cid\nFROM sensor_locations;",
    "options": {
      "A": "Angka integer ID kluster (0, 1, 2, ...) untuk titik anggota kluster, dan NULL untuk titik pencilan (noise/outlier)",
      "B": "Tipe data Polygon untuk setiap kluster",
      "C": "String nama algoritma",
      "D": "Nilai koordinat titik pusat kluster"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_ClusterDBSCAN` adalah window function di PostGIS yang mengelompokkan geometri berbasis kepadatan jarak (`eps`) dan jumlah minimal tetangga (`minpoints`). Titik yang tidak memenuhi syarat kluster (noise) diberi label `NULL`.",
      "A": "Benar. Mengembalikan integer ID kluster unik (0-indexed) dan NULL untuk outlier.",
      "B": "Salah. Hasilnya adalah ID integer pada masing-masing baris, bukan geometri poligon.",
      "C": "Salah. Fungsi mengembalikan nilai numerik, bukan nama algoritma.",
      "D": "Salah. Titik pusat dihitung dengan agregasi ST_Centroid terpisah, bukan nilai langsung ST_ClusterDBSCAN."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-352",
    "level": "advanced",
    "topic": "Vector Tile MVT Generation",
    "questionType": "output",
    "question": "Format biner apakah yang dihasilkan oleh fungsi `ST_AsMVT` di PostGIS?\n\n```sql\nSELECT ST_AsMVT(mvtgeom.*) FROM (\n  SELECT id, ST_AsMVTGeom(geom, ST_TileEnvelope(10, 800, 500)) as geom\n  FROM roads\n) mvtgeom;\n```",
    "code": "SELECT ST_AsMVT(mvtgeom.*) FROM (\n  SELECT id, ST_AsMVTGeom(geom, ST_TileEnvelope(10, 800, 500)) as geom\n  FROM roads\n) mvtgeom;",
    "options": {
      "A": "Biner Mapbox Vector Tile (MVT) terkompresi berbasis Google Protocol Buffers (pbf)",
      "B": "File gambar JPEG 8-bit",
      "C": "String teks XML GML mentah",
      "D": "File arsip ZIP"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_AsMVT` mengagregasi baris data dan mengubah geometri tile menjadi format biner `application/vnd.mapbox-vector-tile` berbasis Google Protocol Buffers (.pbf), yang siap dikirim langsung ke frontend MapLibre GL.",
      "A": "Benar. ST_AsMVT menghasilkan format biner MVT Protocol Buffers.",
      "B": "Salah. MVT adalah data vektor biner, bukan citra raster JPEG.",
      "C": "Salah. MVT menggunakan Protocol Buffers biner berkecepatan tinggi, bukan XML teks.",
      "D": "Salah. Format ini bukan arsip ZIP konvensional."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-353",
    "level": "advanced",
    "topic": "PostGIS Raster Analysis",
    "questionType": "output",
    "question": "Apa nilai yang dikembalikan oleh kueri ST_Value pada raster elevasi DEM berikut?\n\n```sql\nSELECT ST_Value(rast, 1, ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326))\nFROM srtm_dem WHERE ST_Intersects(rast, ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326));\n```",
    "code": "SELECT ST_Value(rast, 1, ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326))\nFROM srtm_dem WHERE ST_Intersects(rast, ST_SetSRID(ST_MakePoint(106.8, -6.2), 4326));",
    "options": {
      "A": "Nilai numerik piksel (ketinggian dpl dalam meter) dari band 1 pada koordinat tersebut",
      "B": "Nama satelit pengambil citra",
      "C": "Koordinat piksel dalam satuan centimeter",
      "D": "Array warna RGB heksadesimal"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Value(rast, band, pt)` mengekstrak nilai numerik sel/piksel raster pada band ke-1 yang beririsan dengan titik koordinat tertentu (dalam hal ini elevasi meter di atas permukaan laut).",
      "A": "Benar. ST_Value mengembalikan nilai sel piksel raster spesifik pada band yang diminta.",
      "B": "Salah. Metadata satelit disimpan di atribut terpisah, bukan di sel piksel data.",
      "C": "Salah. ST_Value mengembalikan isi nilai data raster, bukan koordinat piksel.",
      "D": "Salah. DEM band 1 adalah single band elevasi grayscale kontinu, bukan RGB."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-354",
    "level": "advanced",
    "topic": "Deck.gl ArcLayer",
    "questionType": "output",
    "question": "Dalam visualisasi spasial Deck.gl, properti apakah yang menentukan koordinat awal dan koordinat akhir untuk ArcLayer?\n\n```javascript\nnew ArcLayer({\n  id: \"flight-arcs\",\n  data: flights,\n  getSourcePosition: d => d.from,\n  getTargetPosition: d => d.to\n});\n```",
    "code": "new ArcLayer({\n  id: \"flight-arcs\",\n  data: flights,\n  getSourcePosition: d => d.from,\n  getTargetPosition: d => d.to\n});",
    "options": {
      "A": "getSourcePosition dan getTargetPosition",
      "B": "getStartPoint dan getEndPoint",
      "C": "origin dan destination",
      "D": "coordsA dan coordsB"
    },
    "answer": "A",
    "explanation": {
      "correct": "Deck.gl ArcLayer secara konsisten menggunakan accessor method `getSourcePosition` (koordinat awal [lng, lat, z?]) dan `getTargetPosition` (koordinat tujuan) untuk menggambar kurva lengkung 3D interaktif di GPU.",
      "A": "Benar. getSourcePosition dan getTargetPosition adalah accessor resmi ArcLayer Deck.gl.",
      "B": "Salah. getStartPoint bukan nama properti accessor resmi Deck.gl.",
      "C": "Salah. origin dan destination bukan nama accessor method Deck.gl.",
      "D": "Salah. coordsA/coordsB bukan nama properti bawaan Deck.gl."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-355",
    "level": "advanced",
    "topic": "PostGIS Voronoi Polygons",
    "questionType": "output",
    "question": "Geometri apakah yang dihasilkan oleh `ST_VoronoiPolygons(ST_Collect(geom))`?\n\n```sql\nSELECT ST_GeometryType(ST_VoronoiPolygons(ST_Collect(geom))) FROM weather_stations;\n```",
    "code": "SELECT ST_GeometryType(ST_VoronoiPolygons(ST_Collect(geom))) FROM weather_stations;",
    "options": {
      "A": "ST_GeometryCollection berisi sekumpulan poligon Thiessen/Voronoi yang mempartisi ruang berdasarkan kedekatan dengan masing-masing stasiun",
      "B": "ST_Point",
      "C": "ST_MultiLineString",
      "D": "Single ST_LineString tertutup"
    },
    "answer": "A",
    "explanation": {
      "correct": "Diagram Voronoi mempartisi bidang ruang menjadi sel-sel poligon di mana setiap titik di dalam suatu sel lebih dekat ke stasiun acuan tersebut daripada stasiun lainnya. PostGIS mengembalikannya sebagai `GEOMETRYCOLLECTION` of polygons.",
      "A": "Benar. Menghasilkan GeometryCollection berisi poligon-poligon sel Thiessen/Voronoi.",
      "B": "Salah. Diagram Voronoi menghasilkan bidang poligon, bukan titik.",
      "C": "Salah. Bukan berupa multi linestring.",
      "D": "Salah. Hasilnya adalah banyak poligon partisi, bukan garis tunggal."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-356",
    "level": "advanced",
    "topic": "PostGIS Trajectory Analysis ST_MakeLine",
    "questionType": "output",
    "question": "Apa output dari kueri rekonstruksi rute perjalanan kendaraan berikut?\n\n```sql\nSELECT vehicle_id, ST_MakeLine(geom ORDER BY recorded_at) as trajectory\nFROM gps_pings\nGROUP BY vehicle_id;\n```",
    "code": "SELECT vehicle_id, ST_MakeLine(geom ORDER BY recorded_at) as trajectory\nFROM gps_pings\nGROUP BY vehicle_id;",
    "options": {
      "A": "Geometri LINESTRING yang menghubungkan titik-titik ping GPS secara kronologis terurut waktu untuk setiap kendaraan",
      "B": "POLYGON tertutup",
      "C": "MULTIPOINT acak tanpa urutan",
      "D": "Satu angka rata-rata kecepatan"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_MakeLine` yang digunakan sebagai fungsi agregat dengan klausa `ORDER BY recorded_at` menyusun titik-titik simpul GPS menjadi garis lintasan perjalanan tunggal (`LineString`) yang merefleksikan alur historis kendaraan.",
      "A": "Benar. Menghasilkan LineString terurut waktu yang merepresentasikan lintasan pergerakan kendaraan.",
      "B": "Salah. Lintasan perjalanan adalah garis terbuka, bukan poligon tertutup.",
      "C": "Salah. ST_MakeLine menghasilkan linestring bersambung, bukan titik multipoint diskrit.",
      "D": "Salah. ST_MakeLine mengembalikan objek spasial, bukan angka statistik skalar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-357",
    "level": "advanced",
    "topic": "MapLibre GL Expression",
    "questionType": "output",
    "question": "Apa arti ekspresi styling MapLibre GL JS berikut?\n\n```javascript\n[\n  \"interpolate\", [\"linear\"], [\"zoom\"],\n  10, 2,\n  16, 12\n]\n```",
    "code": "[\n  \"interpolate\", [\"linear\"], [\"zoom\"],\n  10, 2,\n  16, 12\n]",
    "options": {
      "A": "Ketebalan/ukuran garis bertransisi secara halus dari 2 pixel pada zoom 10 hingga menjadi 12 pixel pada zoom 16",
      "B": "Peta berhenti merender pada zoom 12",
      "C": "Warna berubah dari hitam menjadi putih",
      "D": "Data difilter hanya antara angka 10 dan 16"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ekspresi `interpolate` linear mengevaluasi nilai properti zoom kamera secara kontinu. Pada zoom level 10 nilainya 2px, pada zoom level 16 nilainya 12px, dan di antaranya diinterpolasi secara proporsional oleh GPU shader.",
      "A": "Benar. Interpolasi linear mulus pada properti zoom antara level 10 (2px) dan 16 (12px).",
      "B": "Salah. Ekspresi ini tidak menghentikan rendering peta.",
      "C": "Salah. Angka 2 dan 12 adalah besaran numerik dimensi (pixel), bukan warna.",
      "D": "Salah. Interpolate bukan filter ekspresi data."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-358",
    "level": "advanced",
    "topic": "PostGIS 3D Distance",
    "questionType": "output",
    "question": "Apa output dari perbandingan ST_Distance vs ST_3DDistance pada dua titik yang memiliki koordinat X, Y identik tetapi ketinggian Z berbeda (misal puncak gedung vs lantai dasar)?\n\n```sql\nSELECT \n  ST_Distance(ST_MakePoint(0, 0, 100), ST_MakePoint(0, 0, 0)) as dist_2d,\n  ST_3DDistance(ST_MakePoint(0, 0, 100), ST_MakePoint(0, 0, 0)) as dist_3d;\n```",
    "code": "SELECT \n  ST_Distance(ST_MakePoint(0, 0, 100), ST_MakePoint(0, 0, 0)) as dist_2d,\n  ST_3DDistance(ST_MakePoint(0, 0, 100), ST_MakePoint(0, 0, 0)) as dist_3d;",
    "options": {
      "A": "dist_2d = 0, dist_3d = 100",
      "B": "dist_2d = 100, dist_3d = 0",
      "C": "dist_2d = 100, dist_3d = 100",
      "D": "dist_2d = 0, dist_3d = 0"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Distance` hanya memperhitungkan bidang proyeksi 2D (X dan Y). Karena koordinat X dan Y sama persis, jarak 2D adalah 0. Sedangkan `ST_3DDistance` memperhitungkan sumbu Z: akar(0^2 + 0^2 + 100^2) = 100.",
      "A": "Benar. ST_Distance 2D mengabaikan sumbu Z (jarak 0), sedangkan ST_3DDistance menghitung jarak vertikal Z (jarak 100).",
      "B": "Salah. dist_2d tidak memperhitungkan selisih Z sehingga bernilai 0.",
      "C": "Salah. Nilai keduanya tidak sama karena sumbu 2D tidak melihat elevasi.",
      "D": "Salah. Jarak 3D tidak bernilai nol."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-359",
    "level": "advanced",
    "topic": "MapLibre Feature State",
    "questionType": "output",
    "question": "Apa kegunaan dari `map.setFeatureState` pada library MapLibre GL JS?\n\n```javascript\nmap.setFeatureState(\n  { source: \"states\", id: featureId },\n  { hover: true }\n);\n```",
    "code": "map.setFeatureState(\n  { source: \"states\", id: featureId },\n  { hover: true }\n);",
    "options": {
      "A": "Memperbarui state visual dinamis (seperti status hover) untuk fitur individual langsung di GPU tanpa perlu mengunggah ulang (re-upload) seluruh data tile spasial",
      "B": "Menghapus database server",
      "C": "Menyimpan data ke cookie browser pengguna",
      "D": "Memaksa browser me-restart sistem operasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "`setFeatureState` memungkinkan developer mengubah atribut tampilan fitur tertentu secara terisolasi dan instan di memory GPU buffer. Ini memberikan pengalaman hover/selection 60 FPS tanpa jeda re-render tile.",
      "A": "Benar. setFeatureState memberikan update state dinamis tingkat fitur dengan performa GPU instan.",
      "B": "Salah. Fitur ini murni manipulasi state grafis klien di WebGL.",
      "C": "Salah. State disimpan di memory GPU/JS heap, bukan browser cookie.",
      "D": "Salah. Browser tidak memiliki akses untuk me-restart sistem operasi."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-360",
    "level": "advanced",
    "topic": "PostGIS ST_GeomFromTWKB",
    "questionType": "output",
    "question": "Format representasi geometri biner apakah TWKB (Tiny Well-Known Binary) di PostGIS?\n\n```sql\nSELECT ST_GeomFromTWKB(twkb_bytea) FROM compressed_telemetry;\n```",
    "code": "SELECT ST_GeomFromTWKB(twkb_bytea) FROM compressed_telemetry;",
    "options": {
      "A": "Format biner kompresi tinggi yang memadatkan WKB standar dengan encoding variable-length zigzag integer dan deltas",
      "B": "Format file teks HTML",
      "C": "Format audio MP3 spasial",
      "D": "Gambar bitmap monokrom"
    },
    "answer": "A",
    "explanation": {
      "correct": "TWKB adalah ekstensi format biner yang dirancang untuk meminimalkan ukuran transfer byte geometri secara drastis (hingga 5x lebih kecil dari WKB standar) dengan menggunakan variable length integer dan selisih koordinat (delta coding).",
      "A": "Benar. TWKB adalah format biner ultra-kompak untuk transmisi geometri hemat bandwidth.",
      "B": "Salah. TWKB bukan representasi teks HTML.",
      "C": "Salah. TWKB adalah encoding data spasial, bukan audio.",
      "D": "Salah. TWKB menyimpan data vektor, bukan citra bitmap."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-361",
    "level": "advanced",
    "topic": "Turf.js Tin (Triangulated Irregular Network)",
    "questionType": "output",
    "question": "Apa yang dihasilkan oleh fungsi `turf.tin(points, 'elevation')`?\n\n```javascript\nconst tin = turf.tin(pointCollection, \"elevation\");\nconsole.log(tin.features[0].geometry.type);\n```",
    "code": "const tin = turf.tin(pointCollection, \"elevation\");\nconsole.log(tin.features[0].geometry.type);",
    "options": {
      "A": "Polygon (berupa segitiga-segitiga pembentuk permukaan medan 3D)",
      "B": "Point",
      "C": "MultiPoint",
      "D": "LineString"
    },
    "answer": "A",
    "explanation": {
      "correct": "TIN (Triangulated Irregular Network) membagi bidang permukaan menjadi kumpulan poligon segitiga yang saling berdampingan, di mana setiap fitur dalam FeatureCollection bertipe 'Polygon'.",
      "A": "Benar. TIN menghasilkan jaring-jaring poligon segitiga yang merepresentasikan kontur medan.",
      "B": "Salah. Hasilnya adalah poligon segitiga, bukan titik tunggal.",
      "C": "Salah. Bukan kumpulan titik lepas.",
      "D": "Salah. TIN membentuk bidang luasan tertutup (Polygon), bukan LineString."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-362",
    "level": "advanced",
    "topic": "Spatial SQL Lateral JOIN kNN",
    "questionType": "output",
    "question": "Apa output dan efisiensi dari kueri LATERAL JOIN kNN berikut?\n\n```sql\nSELECT b.id, n.store_id, n.dist\nFROM buyers b\nCROSS JOIN LATERAL (\n  SELECT s.id as store_id, ST_Distance(b.geom, s.geom) as dist\n  FROM stores s\n  ORDER BY s.geom <-> b.geom\n  LIMIT 3\n) n;\n```",
    "code": "SELECT b.id, n.store_id, n.dist\nFROM buyers b\nCROSS JOIN LATERAL (\n  SELECT s.id as store_id, ST_Distance(b.geom, s.geom) as dist\n  FROM stores s\n  ORDER BY s.geom <-> b.geom\n  LIMIT 3\n) n;",
    "options": {
      "A": "Mengambil 3 toko terdekat secara eksak untuk setiap pembeli menggunakan traversal indeks spasial GiST independen per baris pembeli",
      "B": "Mengambil seluruh kombinasi cartesian toko dan pembeli tanpa batas",
      "C": "Menghapus semua pembeli yang jaraknya > 3 km",
      "D": "Error karena LATERAL tidak mendukung klausa ORDER BY"
    },
    "answer": "A",
    "explanation": {
      "correct": "`CROSS JOIN LATERAL` mengeksekusi subquery untuk setiap baris `buyers`. Karena subquery menggunakan `ORDER BY s.geom <-> b.geom LIMIT 3`, PostgreSQL memanfaatkan indeks GiST toko untuk mengambil 3 nearest neighbors dalam waktu beberapa mikrodetik per pembeli.",
      "A": "Benar. LATERAL subquery mengevaluasi kNN index scan secara efisien untuk setiap baris tabel luar.",
      "B": "Salah. Klausa LIMIT 3 membatasi output hanya 3 toko terdekat per pembeli.",
      "C": "Salah. Kueri hanya melakukan pembacaan (SELECT), bukan penghapusan (DELETE).",
      "D": "Salah. Sintaks LATERAL dengan ORDER BY <-> LIMIT adalah idiom kNN standar PostgreSQL."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-363",
    "level": "advanced",
    "topic": "H3 Hexagonal Hierarchical Spatial Index",
    "questionType": "output",
    "question": "Berapa jumlah resolusi hierarki yang didukung oleh sistem indeks spasial hexagonal Uber H3?\n\n```javascript\n// Uber H3 Spatial Indexing System:\n// Berapa tingkatan resolusi dari 0 (terbesar) hingga maksimum?\n```",
    "code": "// Uber H3 Spatial Indexing System:\n// Berapa tingkatan resolusi dari 0 (terbesar) hingga maksimum?",
    "options": {
      "A": "16 level resolusi (resolusi 0 hingga 15)",
      "B": "3 level",
      "C": "100 level",
      "D": "Tak terbatas"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sistem indeks heksagonal Uber H3 memiliki 16 tingkatan resolusi diskrit (0 hingga 15). Resolusi 0 mencakup luas benua (~4.000.000 km2), sedangkan resolusi 15 memiliki presisi luas heksagon ~0.9 meter persegi.",
      "A": "Benar. H3 mendefinisikan 16 level resolusi terstruktur dari level 0 hingga 15.",
      "B": "Salah. 3 level terlalu sedikit untuk cakupan global hingga detail sub-meter.",
      "C": "Salah. H3 menggunakan pembagian heksagon tetap dengan 16 tingkatan, bukan 100.",
      "D": "Salah. H3 adalah sistem grid diskrit berbatas hingga resolusi 15."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-364",
    "level": "advanced",
    "topic": "PostGIS ST_ChaikinSmoothing",
    "questionType": "output",
    "question": "Apa efek dari fungsi `ST_ChaikinSmoothing(geom, 3)` pada garis linestring yang bergerigi tajam?\n\n```sql\nSELECT ST_ChaikinSmoothing(rough_track_geom, 3) FROM vehicle_tracks;\n```",
    "code": "SELECT ST_ChaikinSmoothing(rough_track_geom, 3) FROM vehicle_tracks;",
    "options": {
      "A": "Menghaluskan sudut-sudut tajam pada garis secara rekursif (3 iterasi algoritma Chaikin) dengan memotong sudut vertex",
      "B": "Membuat garis menjadi lurus sempurna antara titik awal dan akhir",
      "C": "Menghapus 3 titik acak dari garis",
      "D": "Mengonversi garis menjadi format raster geotiff"
    },
    "answer": "A",
    "explanation": {
      "correct": "Algoritma Chaikin adalah teknik kurva subdivision yang menghasilkan garis lengkung halus dengan memotong sudut tajam setiap vertex secara rekursif sebanyak parameter iterasi (level 3).",
      "A": "Benar. Menghaluskan lintasan garis dengan melunakkan sudut tajam melalui iterasi pemotongan sudut Chaikin.",
      "B": "Salah. Chaikin smoothing mempertahankan kontur lintasan garis, tidak menjadikannya satu garis lurus.",
      "C": "Salah. Tidak menghapus titik secara acak, melainkan menambahkan simpul penghalus kurva.",
      "D": "Salah. Fungsi menghasilkan geometri vektor LINESTRING yang halus, bukan raster."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-365",
    "level": "advanced",
    "topic": "MapLibre GL Terrain 3D",
    "questionType": "output",
    "question": "Properti apakah pada `map.setTerrain()` yang menghubungkan lapisan elevasi raster DEM untuk menghasilkan topografi 3D di MapLibre GL?\n\n```javascript\nmap.setTerrain({ source: \"mapbox-dem\", exaggeration: 1.5 });\n```",
    "code": "map.setTerrain({ source: \"mapbox-dem\", exaggeration: 1.5 });",
    "options": {
      "A": "source dan exaggeration",
      "B": "demLayer dan height",
      "C": "elevationMap dan scale",
      "D": "mesh dan zFactor"
    },
    "answer": "A",
    "explanation": {
      "correct": "API `map.setTerrain({ source: string, exaggeration?: number })` menghubungkan sumber raster DEM (RGB terrain tile) dan menetapkan faktor pengali ketinggian vertikal (`exaggeration`) untuk menghasilkan rendering topografi bukit/gunung 3D.",
      "A": "Benar. source mendefinisikan layer raster DEM dan exaggeration menentukan eksagerasi ketinggian vertikal.",
      "B": "Salah. demLayer/height bukan nama properti resmi MapLibre setTerrain.",
      "C": "Salah. elevationMap/scale bukan konfigurasi resmi MapLibre.",
      "D": "Salah. mesh/zFactor adalah istilah perangkat lunak desktop GIS lama."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-366",
    "level": "advanced",
    "topic": "PostGIS Coordinate Wrapping Antimeridian",
    "questionType": "debug",
    "question": "Geometri garis penerbangan internasional melintasi Antimeridian (garis bujur 180 derajat) merentang horizontal melintasi seluruh peta dunia. Fungsi PostGIS apa yang memotong geometri ini menjadi dua bagian di batas tanggal internasional?\n\n```sql\nSELECT ST____(flight_path_geom);\n```",
    "code": "SELECT ST____(flight_path_geom);",
    "options": {
      "A": "ShiftLongitude atau WrapX",
      "B": "DeleteAntimeridian",
      "C": "MakeValid",
      "D": "ScaleZero"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_ShiftLongitude(geom)` menggeser koordinat dari range [-180, 180] menjadi [0, 360], atau `ST_WrapX` memotong geometri yang melintasi antimeridian sehingga tidak merender garis aneh melintasi seluruh bola dunia.",
      "A": "Benar. ST_ShiftLongitude / ST_WrapX menangani kontinuitas antimeridian 180 derajat.",
      "B": "Salah. DeleteAntimeridian bukan nama fungsi PostGIS.",
      "C": "Salah. MakeValid memperbaiki topologi poligon rusak, tetapi tidak mengatasi wrapping proyeksi antimeridian.",
      "D": "Salah. ScaleZero merusak koordinat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-367",
    "level": "advanced",
    "topic": "Vector Tile MVT Extent Clipping",
    "questionType": "debug",
    "question": "Fitur garis di perbatasan antar tile terpotong (clipped) secara kasar dan tidak bersambung dengan tile sebelahnya saat digeser di browser. Parameter apa pada `ST_AsMVTGeom` yang harus disetel untuk memberikan margin penyangga?\n\n```sql\nSELECT ST_AsMVTGeom(geom, tile_bounds, 4096, buffer_size, clip_geom);\n```",
    "code": "SELECT ST_AsMVTGeom(geom, tile_bounds, 4096, buffer_size, clip_geom);",
    "options": {
      "A": "Parameter `buffer_size` (misal disetel 64 atau 256 pixel) agar geometri meluas sedikit melewati batas tile sebelum dipotong",
      "B": "Menghapus seluruh baris data di perbatasan",
      "C": "Menyetel clip_geom menjadi FALSE secara permanen di seluruh query",
      "D": "Mengganti resolusi tile menjadi 1 pixel"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tile vektor membutuhkan margin penyangga (buffer di luar batas tile, biasanya 64-256 unit pada extent 4096). Buffer ini memastikan simbol garis tebal atau marker tidak terpotong di tepi garis batas tile saat dirender.",
      "A": "Benar. Menambahkan buffer_size memberikan ruang rendering tepi antar tile yang mulus.",
      "B": "Salah. Menghapus data perbatasan justru menghilangkan informasi jalan/sungai.",
      "C": "Salah. Mematikan clipping total menyebabkan payload membesar drastis tanpa batas.",
      "D": "Salah. Resolusi 1 pixel merusak geometri."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-368",
    "level": "advanced",
    "topic": "PostGIS ST_GeomFromText Precision Loss",
    "questionType": "debug",
    "question": "Koordinat presisi tinggi GPS mengalami pembulatan saat dikonversi menjadi WKT teks via `ST_AsText()`. Fungsi apakah yang mempertahankan jumlah desimal maksimal?\n\n```sql\n-- Masalah: ST_AsText(geom) membulatkan angka desimal secara default\n-- Solusi:\n```",
    "code": "-- Masalah: ST_AsText(geom) membulatkan angka desimal secara default\n-- Solusi:",
    "options": {
      "A": "ST_AsText(geom, maxdecimaldigits) dengan menentukan angka presisi kedua (misal: ST_AsText(geom, 9))",
      "B": "Menggunakan string replace manual di PostgreSQL",
      "C": "Menonaktifkan database driver",
      "D": "Menggunakan ST_Area"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi `ST_AsText` memiliki parameter overload kedua opsional: `ST_AsText(geometry g, integer maxdecimaldigits)`. Menentukan nilai presisi (seperti 8 atau 9) mencegah pemotongan angka desimal penting.",
      "A": "Benar. Parameter maxdecimaldigits menentukan jumlah digit angka di belakang koma secara presisi.",
      "B": "Salah. String replace manual tidak dapat memulihkan angka yang sudah terpotong.",
      "C": "Salah. Driver database tidak mengontrol pembulatan format internal WKT PostGIS.",
      "D": "Salah. ST_Area menghitung luas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-369",
    "level": "advanced",
    "topic": "Deck.gl Memory Leak with WebGL Context",
    "questionType": "debug",
    "question": "Aplikasi dashboard analitik spasial melempar error 'Too many active WebGL contexts' saat berganti-ganti tab visualisasi. Apa penyebabnya?\n\n```javascript\n// Deck.gl component unmount lifecycle:\n// Apa yang harus dipanggil saat komponen Deck instance dihancurkan?\n```",
    "code": "// Deck.gl component unmount lifecycle:\n// Apa yang harus dipanggil saat komponen Deck instance dihancurkan?",
    "options": {
      "A": "deck.finalize() untuk melepaskan resource GPU dan menghancurkan konteks WebGL",
      "B": "window.location.reload()",
      "C": "deck.draw()",
      "D": "delete deck.props"
    },
    "answer": "A",
    "explanation": {
      "correct": "Browser membatasi jumlah WebGL context aktif (biasanya maksimal 8-16 context simultan). Membuat instance Deck.gl baru tanpa memanggil `deck.finalize()` pada instance lama akan meninggalkan context menggantung di GPU hingga batas terlampaui.",
      "A": "Benar. deck.finalize() melepaskan WebGL context dan membersihkan buffer GPU.",
      "B": "Salah. Melakukan reload halaman merusak user experience Single Page Application.",
      "C": "Salah. deck.draw() menggambar ulang frame baru, bukan membersihkan memori.",
      "D": "Salah. Menghapus props tidak membebaskan WebGL context hardware."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-370",
    "level": "advanced",
    "topic": "PostGIS Spatial Index on Expressions",
    "questionType": "debug",
    "question": "Kueri berikut tidak menggunakan indeks GiST pada kolom `geom`. Apa penyebabnya?\n\n```sql\n-- Indeks dibuat: CREATE INDEX idx_geom ON parcels USING GIST(geom);\nSELECT * FROM parcels WHERE ST_Transform(geom, 3857) && ST_MakeEnvelope(0, 0, 1000, 1000, 3857);\n```",
    "code": "-- Indeks dibuat: CREATE INDEX idx_geom ON parcels USING GIST(geom);\nSELECT * FROM parcels WHERE ST_Transform(geom, 3857) && ST_MakeEnvelope(0, 0, 1000, 1000, 3857);",
    "options": {
      "A": "Kolom `geom` dibungkus oleh fungsi ST_Transform di dalam klausa WHERE sehingga PostgreSQL tidak dapat menggunakan indeks pada kolom mentah (solusi: buat Expression Index atau transformasikan envelope)",
      "B": "SRID 3857 dilarang di klausa WHERE",
      "C": "Indeks GiST hanya bisa digunakan di malam hari",
      "D": "Envelope harus berbentuk lingkaran"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memanggil fungsi pada kolom indeks (`ST_Transform(geom, ...)`) mencegah penggunaan indeks B-Tree/GiST standar kolom tersebut. Cara yang benar: transformasikan konstantanya: `geom && ST_Transform(ST_MakeEnvelope(...), 4326)` atau buat expression index: `CREATE INDEX ... USING GIST(ST_Transform(geom, 3857))`.",
      "A": "Benar. Indeks kolom tidak dapat digunakan jika kolom tersebut dimodifikasi oleh fungsi di klausa WHERE.",
      "B": "Salah. SRID 3857 sepenuhnya legal.",
      "C": "Salah. Perencana kueri database bekerja tanpa terpengaruh waktu sistem.",
      "D": "Salah. Envelope secara definisi OGC berbentuk persegi empat."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-371",
    "level": "advanced",
    "topic": "MapLibre Source Data Race Condition",
    "questionType": "debug",
    "question": "Kode berikut melempar error 'Source with id points does not exist' saat memanggil `map.addLayer()`. Mengapa?\n\n```javascript\nmap.addSource(\"points\", { type: \"geojson\", data: \"/api/data.geojson\" });\nmap.addLayer({ id: \"points-layer\", type: \"circle\", source: \"points\" });\n```",
    "code": "map.addSource(\"points\", { type: \"geojson\", data: \"/api/data.geojson\" });\nmap.addLayer({ id: \"points-layer\", type: \"circle\", source: \"points\" });",
    "options": {
      "A": "Kode dieksekusi sebelum style peta selesai dimuat (harus menunggu event 'map.on(\"load\", ...)')",
      "B": "Tipe circle dilarang di MapLibre",
      "C": "addSource hanya bisa menerima file CSV",
      "D": "Nama id source harus berupa angka bulat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di MapLibre/Mapbox GL JS, memanipulasi layer dan source sebelum style peta selesai diinisialisasi akan menyebabkan crash. Seluruh penambahan source dan layer awal wajib diletakkan di dalam callback `map.on('load', () => { ... })`.",
      "A": "Benar. Menunggu event 'load' peta menjamin style sheet dasar sudah siap menerima source/layer baru.",
      "B": "Salah. Tipe layer 'circle' adalah tipe bawaan resmi MapLibre GL.",
      "C": "Salah. GeoJSON adalah format standar untuk source data MapLibre.",
      "D": "Salah. Nama ID source bertipe string alfanumerik bebas."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-372",
    "level": "advanced",
    "topic": "PostGIS Geodesic Distance Inaccuracy",
    "questionType": "debug",
    "question": "Perhitungan jarak geodesik antar dua titik dekat kutub menghasilkan kesalahan beberapa kilometer saat dihitung menggunakan ST_DistanceSphere. Apa solusi fungsi yang menggunakan elipsoid WGS 84 riil presisi sub-milimeter?\n\n```sql\n-- Perhitungan jarak geodesik paling akurat di PostGIS:\n```",
    "code": "-- Perhitungan jarak geodesik paling akurat di PostGIS:",
    "options": {
      "A": "ST_Distance pada tipe `geography` (menggunakan algoritma elipsoid Karney) atau ST_DistanceSpheroid",
      "B": "ST_Distance pada tipe geometry tanpa proyeksi",
      "C": "Menghitung manual menggunakan perkalian matriks 2D",
      "D": "ST_Length 2D"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_DistanceSphere` mengasumsikan bumi adalah bola bulat sempurna (sphere), sehingga mengalami deviasi hingga 0.5% pada garis lintang tinggi/kutub. Menggunakan tipe `geography` atau `ST_DistanceSpheroid` menghitung jarak pada elipsoid oblat WGS 84 nyata dengan akurasi sub-milimeter.",
      "A": "Benar. Tipe geography mengimplementasikan algoritma geodesik Karney pada elipsoid sejati.",
      "B": "Salah. Geometry tanpa proyeksi di 4326 mengembalikan derajat sudut, bukan meter.",
      "C": "Salah. Perkalian matriks 2D mengabaikan kelengkungan elipsoid bumi.",
      "D": "Salah. ST_Length 2D adalah planar Cartesian."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-373",
    "level": "advanced",
    "topic": "MapLibre Canvas Context Loss",
    "questionType": "debug",
    "question": "Peta WebGL MapLibre tiba-tiba blank hitam saat pengguna meminimalkan browser atau membuka banyak tab 3D berat, dan console menampilkan warning 'WebGL context lost'. Bagaimana cara menanganinya secara graceful?\n\n```javascript\n// WebGL Context Lost recovery di MapLibre:\n```",
    "code": "// WebGL Context Lost recovery di MapLibre:",
    "options": {
      "A": "Mendengarkan event canvas 'webglcontextrestored' dan memuat ulang gaya serta layer peta",
      "B": "Mematikan monitor komputer",
      "C": "Menghapus cache DNS server",
      "D": "Menonaktifkan memori virtual OS"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ketika GPU mengalami kehabisan resource (VRAM pressure), OS dapat mencabut konteks WebGL browser ('webglcontextlost'). Mendengarkan event 'webglcontextlost' dan 'webglcontextrestored' memungkinkan aplikasi melakukan re-instansiasi resource WebGL secara mulus.",
      "A": "Benar. Menangani siklus restorasi WebGL context memungkinkan aplikasi pulih tanpa perlu refresh halaman manual.",
      "B": "Salah. Mematikan monitor tidak menyelesaikan penanganan state WebGL di browser.",
      "C": "Salah. DNS tidak berhubungan dengan resource alokasi VRAM GPU lokal.",
      "D": "Salah. Menonaktifkan virtual memory justru memperparah crash OS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-374",
    "level": "advanced",
    "topic": "PostGIS ST_Snap Distortion",
    "questionType": "debug",
    "question": "Dua poligon bertetangga tidak tersambung sempurna dan memiliki celah kecil (gap) karena toleransi `ST_Snap` diatur terlalu besar, menyebabkan bentuk bangunan terdistorsi menjadi aneh. Apa aturan penentuan parameter toleransi pada `ST_Snap`?\n\n```sql\nSELECT ST_Snap(poly_a, poly_b, tolerance);\n```",
    "code": "SELECT ST_Snap(poly_a, poly_b, tolerance);",
    "options": {
      "A": "Toleransi harus diatur sekecil mungkin sesuai jarak gap maksimal yang ingin ditutup (misal: 0.001 meter pada UTM), tidak boleh lebih besar dari panjang sisi terpendek bangunan",
      "B": "Toleransi harus selalu diisi 1000",
      "C": "Toleransi harus bertipe string 'maximum'",
      "D": "Toleransi harus bernilai negatif"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Snap(input, target, tolerance)` menarik simpul input ke simpul target dalam radius toleransi. Jika toleransi terlalu besar, vertex yang tidak bersangkutan akan ikut tertarik dan merusak bentuk asli poligon.",
      "A": "Benar. Nilai toleransi harus sedikit lebih besar dari gap fisik namun jauh lebih kecil dari detail geometri terkecil.",
      "B": "Salah. Angka 1000 akan menarik seluruh vertex dalam radius 1 km dan menghancurkan geometri.",
      "C": "Salah. Toleransi menerima nilai numerik float (double precision).",
      "D": "Salah. Jarak toleransi spasial harus bernilai non-negatif."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-375",
    "level": "advanced",
    "topic": "PostGIS Out of Memory on ST_Union",
    "questionType": "debug",
    "question": "Operasi `ST_Union` pada 5.000.000 poligon wilayah mengalami crash karena Out of Memory (OOM). Pendekatan pembagian hierarki kueri apakah yang paling efektif?\n\n```sql\n-- Menghindari OOM pada penggabungan jutaan geometri masif:\n```",
    "code": "-- Menghindari OOM pada penggabungan jutaan geometri masif:",
    "options": {
      "A": "Menggunakan ST_UnaryUnion dengan cascade clustering, atau membagi operasi menggunakan grid spasial (ST_SnapToGrid) per kuadran",
      "B": "Menjalankan query di command prompt DOS",
      "C": "Mengurangi memory RAM server menjadi 512 MB",
      "D": "Menghapus semua baris data poligon"
    },
    "answer": "A",
    "explanation": {
      "correct": "Penggabungan geometri masif dalam satu pemanggilan memori tunggal memakan ruang pohon GEOS yang sangat besar. Membagi proses ke dalam kelompok spasial regional (misalnya partisi grid per kecamatan atau ST_ClusterKMeans) dan menggabungkan hasilnya secara bertingkat mencegah OOM.",
      "A": "Benar. Cascaded hierarchical union per region spasial menjaga footprint memori tetap stabil dan terkontrol.",
      "B": "Salah. Lingkungan shell terminal tidak mengubah batas memori backend database.",
      "C": "Salah. Menurunkan RAM server justru mempercepat terjadinya OutOfMemoryError.",
      "D": "Salah. Menghapus data membatalkan tujuan analisis bisnis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-376",
    "level": "advanced",
    "topic": "PostGIS Cluster KMeans",
    "questionType": "completion",
    "question": "Lengkapi fungsi window PostGIS berikut untuk membagi sebaran armada taksi menjadi 5 kluster geografis:\n\n```sql\nSELECT id, ST_Cluster____(geom, 5) OVER () AS cluster_id FROM taxis;\n```",
    "code": "SELECT id, ST_Cluster____(geom, 5) OVER () AS cluster_id FROM taxis;",
    "options": {
      "A": "KMeans",
      "B": "DBSCAN",
      "C": "Hierarchical",
      "D": "MeanShift"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_ClusterKMeans(geom, k)` mempartisi kumpulan geometri menjadi tepat `k` buah kluster menggunakan algoritma k-Means spasial 2D.",
      "A": "Benar. ST_ClusterKMeans adalah implementasi resmi k-Means clustering di PostGIS.",
      "B": "Salah. DBSCAN berbasis radius kepadatan (eps/minpoints), bukan jumlah kluster k tetap.",
      "C": "Salah. Hierarchical bukan nama fungsi clustering PostGIS.",
      "D": "Salah. MeanShift bukan fungsi spasial bawaan PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-377",
    "level": "advanced",
    "topic": "PostGIS ST_TileEnvelope",
    "questionType": "completion",
    "question": "Lengkapi fungsi pembuatan batas kotak tile Web Mercator (EPSG:3857) untuk pembuatan Vector Tile kustom:\n\n```sql\nSELECT ST_____Envelope(z, x, y);\n```",
    "code": "SELECT ST_____Envelope(z, x, y);",
    "options": {
      "A": "Tile",
      "B": "Box",
      "C": "Grid",
      "D": "Cell"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_TileEnvelope(z, x, y)` menghasilkan batas bounding box poligon Web Mercator (EPSG:3857) yang sesuai dengan koordinat tile Slippy Map `(z, x, y)`.",
      "A": "Benar. ST_TileEnvelope menghasilkan geometri polygon batas tile standar web.",
      "B": "Salah. BoxEnvelope bukan nama fungsi PostGIS.",
      "C": "Salah. GridEnvelope bukan fungsi PostGIS yang valid.",
      "D": "Salah. CellEnvelope bukan nama fungsi resmi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-378",
    "level": "advanced",
    "topic": "PostGIS Raster Clipping",
    "questionType": "completion",
    "question": "Lengkapi fungsi pemotongan raster berdasarkan batas poligon administratif di PostGIS Raster:\n\n```sql\nSELECT ST____(rast, geom, true) FROM dem_elevation, admin_boundary WHERE ST_Intersects(rast, geom);\n```",
    "code": "SELECT ST____(rast, geom, true) FROM dem_elevation, admin_boundary WHERE ST_Intersects(rast, geom);",
    "options": {
      "A": "Clip",
      "B": "Crop",
      "C": "Mask",
      "D": "Cut"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Clip(rast, geom, crop)` memotong raster menggunakan geometri poligon dan secara opsional memotong ukuran bounding box raster hasil potongan (`crop := true`).",
      "A": "Benar. ST_Clip adalah fungsi resmi pemotongan data raster di PostGIS Raster.",
      "B": "Salah. Crop bukan nama fungsi raster PostGIS.",
      "C": "Salah. Mask bukan fungsi pemotong raster PostGIS.",
      "D": "Salah. Cut bukan nama fungsi spasial PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-379",
    "level": "advanced",
    "topic": "MapLibre Vector Source Configuration",
    "questionType": "completion",
    "question": "Lengkapi konfigurasi penambahan tile source vektor dari server MVT di MapLibre GL:\n\n```javascript\nmap.addSource(\"traffic-data\", {\n  type: \"____\",\n  tiles: [\"https://tiles.example.com/{z}/{x}/{y}.pbf\"],\n  minzoom: 6,\n  maxzoom: 14\n});\n```",
    "code": "map.addSource(\"traffic-data\", {\n  type: \"____\",\n  tiles: [\"https://tiles.example.com/{z}/{x}/{y}.pbf\"],\n  minzoom: 6,\n  maxzoom: 14\n});",
    "options": {
      "A": "vector",
      "B": "geojson",
      "C": "raster",
      "D": "image"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe source `vector` digunakan untuk memuat Vector Tiles biner (biasanya file `.pbf` atau `.mvt`) yang disajikan melalui URL template Slippy Map.",
      "A": "Benar. type: 'vector' mendefinisikan sumber vector tiles.",
      "B": "Salah. geojson digunakan untuk file GeoJSON tunggal di memori, bukan tile {z}/{x}/{y}.",
      "C": "Salah. raster digunakan untuk citra tile raster gambar (PNG/JPEG).",
      "D": "Salah. image digunakan untuk gambar statis georeferensi tunggal 4 titik."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-380",
    "level": "advanced",
    "topic": "PostGIS Topological Geodesic Area",
    "questionType": "completion",
    "question": "Lengkapi pemanggilan fungsi untuk menghitung luas benua di atas elipsoid bumi WGS 84 dalam satuan METER PERSEGI:\n\n```sql\nSELECT ST_Area(geom::____) FROM continents;\n```",
    "code": "SELECT ST_Area(geom::____) FROM continents;",
    "options": {
      "A": "geography",
      "B": "geometry",
      "C": "polygon3d",
      "D": "srid4326"
    },
    "answer": "A",
    "explanation": {
      "correct": "Casting ke tipe `geography` (`geom::geography`) memerintahkan PostGIS untuk menghitung luas di permukaan kurva elipsoid bola bumi dalam satuan meter persegi (bukan derajat kuadrat).",
      "A": "Benar. Tipe geography mengembalikan perhitungan luas permukaan bumi nyata dalam meter persegi.",
      "B": "Salah. Tipe geometry planar 4326 mengembalikan derajat persegi (square degrees).",
      "C": "Salah. polygon3d bukan nama tipe dasar PostGIS.",
      "D": "Salah. srid4326 bukan nama tipe data casting."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-381",
    "level": "advanced",
    "topic": "Deck.gl GeoJsonLayer Picking",
    "questionType": "completion",
    "question": "Lengkapi opsi konfigurasi Deck.gl GeoJsonLayer agar layer dapat mendeteksi event klik dan hover pengguna:\n\n```javascript\nnew GeoJsonLayer({\n  id: \"airports\",\n  data: \"/api/airports.json\",\n  ____: true,\n  onClick: info => console.log(info.object)\n});\n```",
    "code": "new GeoJsonLayer({\n  id: \"airports\",\n  data: \"/api/airports.json\",\n  ____: true,\n  onClick: info => console.log(info.object)\n});",
    "options": {
      "A": "pickable",
      "B": "clickable",
      "C": "interactive",
      "D": "selectable"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Deck.gl, properti `pickable: true` mengaktifkan frame buffer off-screen GPU picking untuk mendeteksi fitur mana yang berada di bawah kursor mouse pengguna secara instan.",
      "A": "Benar. pickable: true mengaktifkan mekanisme GPU color picking di Deck.gl.",
      "B": "Salah. clickable bukan nama properti konfigurasi Deck.gl.",
      "C": "Salah. interactive adalah opsi Leaflet, bukan Deck.gl.",
      "D": "Salah. selectable bukan opsi inti Deck.gl."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-382",
    "level": "advanced",
    "topic": "PostGIS ST_AsGeoJSON Feature Builder",
    "questionType": "completion",
    "question": "Lengkapi argumen fungsi `json_build_object` di PostgreSQL untuk mengemas properti dan geometri menjadi objek GeoJSON Feature yang valid:\n\n```sql\nSELECT json_build_object(\n  'type', 'Feature',\n  'geometry', ST_AsGeoJSON(geom)::json,\n  '____', json_build_object('name', name, 'status', status)\n) FROM assets;\n```",
    "code": "SELECT json_build_object(\n  'type', 'Feature',\n  'geometry', ST_AsGeoJSON(geom)::json,\n  '____', json_build_object('name', name, 'status', status)\n) FROM assets;",
    "options": {
      "A": "properties",
      "B": "attributes",
      "C": "data",
      "D": "metadata"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sesuai standar formal RFC 7946, objek Feature GeoJSON wajib menyimpan data atribut non-spasial di bawah properti bernama `properties`.",
      "A": "Benar. properties adalah kunci resmi spesifikasi GeoJSON RFC 7946.",
      "B": "Salah. attributes adalah istilah ESRI Shapefile, bukan GeoJSON standar.",
      "C": "Salah. data bukan kunci standar Feature GeoJSON.",
      "D": "Salah. metadata bukan nama key resmi OGC GeoJSON."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-383",
    "level": "advanced",
    "topic": "MapLibre Shader Filter Expression",
    "questionType": "completion",
    "question": "Lengkapi ekspresi filter MapLibre GL untuk hanya menampilkan jalan raya yang memiliki atribut 'class' bernilai 'motorway' atau 'trunk':\n\n```javascript\nfilter: [\"in\", [\"get\", \"class\"], [\"literal\", [\"motorway\", \"trunk\"]]]\n// Operator pembanding keanggotaan array: ____\n```",
    "code": "filter: [\"in\", [\"get\", \"class\"], [\"literal\", [\"motorway\", \"trunk\"]]]\n// Operator pembanding keanggotaan array: ____",
    "options": {
      "A": "in",
      "B": "matches",
      "C": "contains",
      "D": "has"
    },
    "answer": "A",
    "explanation": {
      "correct": "Ekspresi `[\"in\", needle, haystack]` di MapLibre/Mapbox GL memeriksa apakah suatu nilai termuat di dalam kumpulan daftar nilai literal yang ditentukan.",
      "A": "Benar. Ekspresi 'in' adalah operator pengecekan keanggotaan koleksi di MapLibre style spec.",
      "B": "Salah. matches bukan nama operator filter MapLibre style expression.",
      "C": "Salah. contains bukan operator resmi MapLibre expression.",
      "D": "Salah. has memeriksa keberadaan properti key pada objek, bukan kesesuaian nilai elemen array."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-384",
    "level": "advanced",
    "topic": "PostGIS ST_LineSubstring",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk memotong bagian garis dari fraksi 20% (0.2) hingga fraksi 80% (0.8) dari total panjang garis:\n\n```sql\nSELECT ST_Line____(geom, 0.2, 0.8) FROM highway_network;\n```",
    "code": "SELECT ST_Line____(geom, 0.2, 0.8) FROM highway_network;",
    "options": {
      "A": "Substring",
      "B": "Slice",
      "C": "Trim",
      "D": "ClipPercent"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_LineSubstring(geom, startfraction, endfraction)` mengembalikan sub-garis dari titik awal fraksi hingga titik akhir fraksi yang ditentukan.",
      "A": "Benar. ST_LineSubstring memotong segmen linestring berdasarkan persentase rentang panjang garis.",
      "B": "Salah. LineSlice adalah fungsi Turf.js, bukan fungsi SQL PostGIS.",
      "C": "Salah. LineTrim bukan nama fungsi PostGIS.",
      "D": "Salah. ClipPercent bukan fungsi resmi PostGIS."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-385",
    "level": "advanced",
    "topic": "PostGIS ST_ConcaveHull",
    "questionType": "completion",
    "question": "Lengkapi fungsi pembuat selubung cekung (Concave Hull / Alpha Shape) yang mengikuti kontur lekukan sebaran titik dengan parameter target percent 0.8:\n\n```sql\nSELECT ST_Concave____(ST_Collect(geom), 0.8) FROM crime_incidents;\n```",
    "code": "SELECT ST_Concave____(ST_Collect(geom), 0.8) FROM crime_incidents;",
    "options": {
      "A": "Hull",
      "B": "Shape",
      "C": "Boundary",
      "D": "Envelope"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_ConcaveHull(geom, target_percent, allow_holes)` membuat poligon cekung yang melingkupi titik dengan mengikuti lekukan dan rongga nyata sebaran spasial.",
      "A": "Benar. ST_ConcaveHull adalah fungsi PostGIS resmi untuk kalkulasi alpha-shape/concave hull.",
      "B": "Salah. ConcaveShape bukan nama fungsi PostGIS.",
      "C": "Salah. ConcaveBoundary bukan nama fungsi PostGIS.",
      "D": "Salah. ConcaveEnvelope bukan fungsi spasial."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-386",
    "level": "advanced",
    "topic": "High Throughput Spatial Ingestion",
    "questionType": "best-practice",
    "question": "Untuk menangani ingestion data telemetri GPS dari 100.000 kendaraan bergerak yang mengirim data setiap 1 detik (100.000 events/sec), arsitektur pipeline manakah yang paling scalable?\n\n```sql\n// Arsitektur Ingestion Skala Tinggi:\n```",
    "code": "// Arsitektur Ingestion Skala Tinggi:",
    "options": {
      "A": "Message Broker (Kafka) -> Stream Processing (Flink/Spark) -> Database Time-Series Spasial terdistribusi (TimescaleDB / ClickHouse) dengan partisi waktu dan geohash",
      "B": "REST API tunggal yang langsung melakukan INSERT sinkron satu per satu ke database MySQL shared hosting",
      "C": "Menulis setiap titik lokasi ke file teks .txt terpisah di disk lokal",
      "D": "Mengirim seluruh koordinat via email massal ke admin"
    },
    "answer": "A",
    "explanation": {
      "correct": "Beban 100k events/sec membutuhkan decoupling arsitektur via Kafka untuk buffering lonjakan, Flink untuk pembersihan stream real-time, dan time-series database kolumnar yang mampu melakukan micro-batch insert hingga jutaan baris per detik.",
      "A": "Benar. Kombinasi Kafka + Stream Engine + TimescaleDB/ClickHouse adalah standar arsitektur IoT spasial berkinerja tinggi.",
      "B": "Salah. INSERT sinkron per event di database relasional tunggal akan mengalami connection bottleneck dan timeout pada beban 1.000 req/s.",
      "C": "Salah. Jutaan file teks kecil menghancurkan performa inode filesystem OS.",
      "D": "Salah. Protokol email tidak dirancang untuk transmisi telemetri berlatensi rendah."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-387",
    "level": "advanced",
    "topic": "Dynamic MVT Tile Server Architecture",
    "questionType": "best-practice",
    "question": "Mengapa menggunakan generator Vector Tiles dinamis ringan seperti `pg_tileserv` (atau Martin) langsung di atas PostgreSQL sering kali lebih disukai daripada stack GeoServer WFS tradisional untuk aplikasi web modern?\n\n```sql\n// pg_tileserv / Martin vs GeoServer WFS:\n```",
    "code": "// pg_tileserv / Martin vs GeoServer WFS:",
    "options": {
      "A": "Ditulis dalam bahasa Go/Rust yang ultra-ringan (low memory footprint), langsung mengeksekusi ST_AsMVT di PostgreSQL, dan memotong overhead abstraksi Java enterprise yang berat",
      "B": "pg_tileserv tidak memerlukan koneksi jaringan internet",
      "C": "GeoServer dilarang digunakan di Linux",
      "D": "pg_tileserv bisa memprediksi masa depan pergerakan bumi"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tile server modern berbasis Go/Rust (seperti pg_tileserv dan Martin) hanya bertindak sebagai gateway HTTP stateless ultra-cepat yang memetakan URL `{z}/{x}/{y}.pbf` langsung ke fungsi native `ST_AsMVT` database, menghasilkan latensi sub-50ms dengan konsumsi RAM di bawah 50MB.",
      "A": "Benar. Performa latensi tinggi dan footprint memori minimal karena delegasi tiling langsung ke engine native PostGIS.",
      "B": "Salah. Tile server tetap melayani traffic HTTP melalui jaringan internet.",
      "C": "Salah. GeoServer berjalan sangat baik di Linux.",
      "D": "Salah. Perangkat lunak ini tidak memiliki fungsi mistis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-388",
    "level": "advanced",
    "topic": "Spatial Caching Layer with Redis Geohash",
    "questionType": "best-practice",
    "question": "Bagaimana struktur data Geo di Redis (`GEOADD`, `GEORADIUS` / `GEOSEARCH`) dimanfaatkan dalam arsitektur Ride-Hailing (seperti Gojek/Grab) untuk menemukan pengemudi terdekat?\n\n```javascript\n// Caching posisi armada di Redis:\n```",
    "code": "// Caching posisi armada di Redis:",
    "options": {
      "A": "Menyimpan posisi terakhir pengemudi di memory RAM Redis menggunakan 52-bit integer Geohash di dalam Sorted Set (ZSET), memungkinkan pencarian radius terdekat dalam waktu sub-milidetik",
      "B": "Menyimpan posisi pengemudi sebagai file foto satelit",
      "C": "Menghapus data pengemudi setiap kali aplikasi dibuka",
      "D": "Menggunakan Redis hanya sebagai kalkulator aritmatika biasa"
    },
    "answer": "A",
    "explanation": {
      "correct": "Redis Geospatial meng-encode koordinat (longitude, latitude) menjadi nilai numerik 52-bit Geohash yang disimpan di dalam struktur Sorted Set (ZSET). Pencarian radius (`GEOSEARCH`) mengevaluasi rentang skor ZSET dalam memori RAM murni dengan latensi < 1 milidetik.",
      "A": "Benar. Geohash ZSET di memory RAM memungkinkan query proximity real-time berkecepatan mikrodetik.",
      "B": "Salah. Redis Geo tidak menyimpan citra foto satelit.",
      "C": "Salah. Posisi pengemudi harus dipertahankan secara dinamis untuk pencocokan order.",
      "D": "Salah. Redis menyediakan perintah geospasial native khusus."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-389",
    "level": "advanced",
    "topic": "OGC API Features vs Legacy WFS",
    "questionType": "best-practice",
    "question": "Apa perbaikan arsitektur terpenting dari standar OGC API Features (OGC API - Features / WFS3) dibandingkan WFS versi 1.1 / 2.0 terdahulu?\n\n```javascript\n// Standar OGC API Features:\n```",
    "code": "// Standar OGC API Features:",
    "options": {
      "A": "Mengadopsi prinsip arsitektur RESTful modern, dokumentasi OpenAPI 3.0 / Swagger, URI semantik, dan format default JSON/GeoJSON yang native bagi developer web",
      "B": "Kembali menggunakan format file binary COBOL",
      "C": "Menghapus seluruh fitur keamanan sistem",
      "D": "Hanya bisa diakses melalui kabel serial RS-232"
    },
    "answer": "A",
    "explanation": {
      "correct": "WFS lama sangat terikat pada protokol XML/SOAP/GML yang rumit dan kaku. OGC API Features dirancang ulang agar sepenuhnya RESTful, menggunakan JSON/GeoJSON sebagai first-class citizen, serta terdefinisi dengan OpenAPI 3.0 yang mudah dikonsumsi library web frontend.",
      "A": "Benar. RESTful, OpenAPI native, JSON-first, dan ramah integrasi developer web modern.",
      "B": "Salah. OGC API mengadopsi standar web mutakhir, bukan COBOL kuno.",
      "C": "Salah. Keamanan ditingkatkan dengan standar OAuth2 dan HTTPS.",
      "D": "Salah. Berjalan di atas protokol HTTP/HTTPS web standar."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-390",
    "level": "advanced",
    "topic": "Simplification on Zoom Level",
    "questionType": "best-practice",
    "question": "Mengapa menyajikan tingkat detail geometri yang berbeda (Level of Detail / LOD) berdasarkan zoom level merupakan praktik terbaik absolut dalam web GIS?\n\n```sql\n// Penyajian data multi-resolusi geometri:\n```",
    "code": "// Penyajian data multi-resolusi geometri:",
    "options": {
      "A": "Mencegah pengiriman poligon pantai dengan jutaan vertex saat pengguna berada di zoom level benua (zoom 3) di mana 1 pixel layar mewakili 100 kilometer daratan",
      "B": "Membuat komputer pengguna restart otomatis",
      "C": "Mengurangi warna tampilan peta",
      "D": "Menghapus nama pulau dari peta dunia"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada tingkat zoom rendah (misal seluruh Indonesia di layar ponsel), layar hanya memiliki resolusi ~1080 pixel lebar. Mengirim poligon dengan 500.000 vertex adalah pemborosan total karena ribuan simpul jatuh di piksel yang sama. Penyederhanaan dinamis (LOD) menghemat bandwidth dan CPU secara masif.",
      "A": "Benar. Menyesuaikan kompleksitas vertex dengan kapasitas resolusi piksel layar (LOD) mengoptimalkan performa transfer dan render.",
      "B": "Salah. Tidak memicu restart komputer.",
      "C": "Salah. Warna diatur oleh style layer terpisah dari struktur vertex geometri.",
      "D": "Salah. Label nama pulau dikendalikan oleh layer anotasi, bukan penyederhanaan bentuk garis."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-391",
    "level": "advanced",
    "topic": "Distributed Spatial Joins with Apache Sedona",
    "questionType": "best-practice",
    "question": "Framework komputasi terdistribusi apakah yang memperluas Apache Spark untuk melakukan query spasial berskala petabyte (seperti join spasial miliaran titik terhadap miliaran poligon)?\n\n```sql\n// Big Spatial Data Engine:\n```",
    "code": "// Big Spatial Data Engine:",
    "options": {
      "A": "Apache Sedona (sebelumnya GeoSpark)",
      "B": "Apache Lucene",
      "C": "Node.js Express",
      "D": "jQuery"
    },
    "answer": "A",
    "explanation": {
      "correct": "Apache Sedona adalah cluster computing engine yang menambahkan Spatial RDD / Spatial DataFrame, spatial partitioning (K-D B-Tree), dan spatial query processing (ST_*) terdistribusi di atas ekosistem Apache Spark.",
      "A": "Benar. Apache Sedona adalah standar industri pemrosesan Big Data geospasial terdistribusi di Spark.",
      "B": "Salah. Lucene adalah search library pencarian teks.",
      "C": "Salah. Express adalah web framework Node.js ringan untuk REST API.",
      "D": "Salah. jQuery adalah library DOM frontend legacy."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-392",
    "level": "advanced",
    "topic": "PostGIS Parallel Spatial Safety",
    "questionType": "best-practice",
    "question": "Mengapa fungsi buatan sendiri (Custom SQL Function) yang memproses geometri di PostgreSQL harus diberi label `PARALLEL SAFE` agar kueri dapat memanfaatkan multi-core CPU?\n\n```sql\nCREATE FUNCTION my_spatial_calc(...) RETURNS boolean ... PARALLEL SAFE;\n-- Mengapa deklarasi PARALLEL SAFE penting?\n```",
    "code": "CREATE FUNCTION my_spatial_calc(...) RETURNS boolean ... PARALLEL SAFE;\n-- Mengapa deklarasi PARALLEL SAFE penting?",
    "options": {
      "A": "Memberitahu perencana kueri bahwa fungsi tidak memodifikasi state database dan aman dieksekusi secara paralel di berbagai worker thread latar belakang tanpa race condition",
      "B": "Menghapus seluruh file log database",
      "C": "Mengizinkan fungsi diakses tanpa password",
      "D": "Memaksa fungsi berjalan di satu thread saja"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default, fungsi user-defined di PostgreSQL dianggap `PARALLEL UNSAFE`. Menandai fungsi dengan `PARALLEL SAFE` mengizinkan query planner menyertakan fungsi tersebut di dalam worker thread paralel tanpa menonaktifkan parallel execution plan.",
      "A": "Benar. PARALLEL SAFE mengizinkan eksekusi paralel multi-core CPU pada query planner PostgreSQL.",
      "B": "Salah. Tidak menghapus file log.",
      "C": "Salah. Izin eksekusi diatur oleh hak akses GRANT/REVOKE, bukan parallel safety.",
      "D": "Salah. PARALLEL SAFE justru mengaktifkan multi-threading, bukan single thread."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-393",
    "level": "advanced",
    "topic": "Cloud Optimized GeoTIFF (COG)",
    "questionType": "best-practice",
    "question": "Apa keunggulan revolusioner format Cloud Optimized GeoTIFF (COG) untuk penyimpanan dan analisis data citra satelit skala global?\n\n```sql\n// Format penyimpanan citra penginderaan jauh modern:\n```",
    "code": "// Format penyimpanan citra penginderaan jauh modern:",
    "options": {
      "A": "Mendukung HTTP Range Requests sehingga klien/cloud engine dapat membaca fragmen ubin dan overview resolusi citra secara langsung dari Amazon S3/Cloud Storage tanpa perlu mengunduh seluruh file citra berukuran Gigabyte",
      "B": "COG hanya bisa disimpan di disket magnetik 1.44 MB",
      "C": "COG mengubah foto satelit menjadi format vektor SVG",
      "D": "COG tidak mendukung data georeferensi"
    },
    "answer": "A",
    "explanation": {
      "correct": "COG mengorganisir data raster internal ke dalam piramida overview dan tiling terstruktur. Menggunakan HTTP GET Range Header, klien web dapat mengambil hanya beberapa byte yang diperlukan untuk menampilkan tampilan zoom tertentu dari cloud storage tanpa mendownload file 10GB utuh.",
      "A": "Benar. HTTP Range Requests memungkinkan streaming fraksional langsung dari object storage cloud tanpa full download.",
      "B": "Salah. File COG sering kali berukuran ratusan Megabyte hingga puluhan Gigabyte.",
      "C": "Salah. COG tetap merupakan data raster murni (citra piksel), bukan vektor.",
      "D": "Salah. COG menyimpan metadata georeferensi dan proyeksi spasial penuh."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-394",
    "level": "advanced",
    "topic": "SpatioTemporal Asset Catalog (STAC)",
    "questionType": "best-practice",
    "question": "Apa peran spesifikasi STAC (SpatioTemporal Asset Catalog) dalam ekosistem data penginderaan jauh modern?\n\n```javascript\n// Spesifikasi STAC dalam pencarian citra satelit:\n```",
    "code": "// Spesifikasi STAC dalam pencarian citra satelit:",
    "options": {
      "A": "Menyediakan bahasa JSON standar terpadu untuk mendeskripsikan, mencari, dan mengindeks aset geospasial (satelit Sentinel, Landsat, MODIS, drone) lintas vendor cloud",
      "B": "Mengatur resolusi layar smartphone",
      "C": "Menghapus data satelit yang berusia lebih dari 1 tahun",
      "D": "Mengganti bahasa pemrograman Python dengan Assembly"
    },
    "answer": "A",
    "explanation": {
      "correct": "STAC menstandarkan metadata temporal dan spasial dari dataset citra raster global. Dengan STAC API, developer dapat mencari 'semua citra satelit tutupan awan < 10% di atas Jakarta bulan lalu' dengan format kueri API yang seragam di AWS, GCP, maupun Planet Labs.",
      "A": "Benar. Standar universal pengindeksan dan discovery data penginderaan jauh lintas penyedia.",
      "B": "Salah. STAC tidak mengontrol display layar hardware.",
      "C": "Salah. STAC tidak menghapus dataset arsip historis satelit.",
      "D": "Salah. STAC adalah spesifikasi API data berbasis JSON."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-395",
    "level": "advanced",
    "topic": "PostGIS Partition Pruning with Constraint Exclusion",
    "questionType": "best-practice",
    "question": "Saat mempartisi tabel spasial di PostgreSQL berdasarkan wilayah administratif atau grid spasial (Spatial Partitioning), apa yang harus dipastikan agar query optimizer hanya memindai partisi yang relevan?\n\n```sql\n-- Partisi tabel spasial berbasis BBOX region:\n```",
    "code": "-- Partisi tabel spasial berbasis BBOX region:",
    "options": {
      "A": "Menambahkan CHECK constraint geometri pada setiap tabel partisi anak (misal: CHECK (ST_Within(geom, region_geom))) dan memastikan `enable_partition_pruning = on`",
      "B": "Menghapus primary key pada semua tabel partisi",
      "C": "Menonaktifkan indeks GiST",
      "D": "Mengisi seluruh data partisi dengan angka nol"
    },
    "answer": "A",
    "explanation": {
      "correct": "CHECK constraint spasial pada partisi anak memberi tahu query planner batas bounding box eksklusif masing-masing partisi. Jika kueri mencari area di Jakarta, planner secara instan mengabaikan (prunes) partisi Jawa Timur, Bali, dan Sumatra, memangkas 90% waktu scan disk.",
      "A": "Benar. CHECK constraint geometrik memungkinkan perencana kueri mengabaikan partisi yang tidak beririsan (Partition Pruning).",
      "B": "Salah. Primary key tetap penting untuk integritas baris data partisi.",
      "C": "Salah. Indeks GiST lokal pada setiap partisi tetap wajib untuk akselerasi kueri dalam partisi.",
      "D": "Salah. Data partisi harus berisi data spasial yang sebenarnya."
    },
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIS-396",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
    "questionType": "concept",
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
