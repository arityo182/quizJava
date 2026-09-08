import { Question } from './types';

export const GIS_TEST_QUESTIONS: Question[] = [
  {
    "id": "GIST-001",
    "level": "beginner",
    "topic": "JavaScript & GeoJSON",
    "questionType": "output",
    "question": "Apa output dari pengecekan tipe geometri GeoJSON berikut?\n\n```javascript\nconst f = {\n  type: \"Feature\",\n  geometry: {\n    type: \"LineString\",\n    coordinates: [[106.8, -6.2], [106.9, -6.1]]\n  }\n};\nconsole.log(f.geometry.coordinates.length);\n```",
    "code": "const f = {\n  type: \"Feature\",\n  geometry: {\n    type: \"LineString\",\n    coordinates: [[106.8, -6.2], [106.9, -6.1]]\n  }\n};\nconsole.log(f.geometry.coordinates.length);",
    "options": {
      "A": "2",
      "B": "4",
      "C": "1",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "Array coordinates untuk tipe LineString berisi daftar pasangan koordinat titik. Karena ada 2 pasang titik ([106.8, -6.2] dan [106.9, -6.1]), panjang array adalah 2.",
      "A": "Benar. Ada 2 titik simpul pada array koordinat LineString.",
      "B": "Salah. 4 adalah jumlah angka skalar X dan Y, bukan jumlah elemen array pasangan koordinat.",
      "C": "Salah. Garis linestring memiliki minimal 2 titik simpul.",
      "D": "Salah. Properti coordinates terdefinisi dengan jelas."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-002",
    "level": "beginner",
    "topic": "Spatial SQL",
    "questionType": "output",
    "question": "Apa nilai boolean yang dikembalikan oleh ST_IsValid pada poligon berikut?\n\n```sql\nSELECT ST_IsValid(ST_GeomFromText('POLYGON((0 0, 5 0, 5 5, 0 5, 0 0))'));\n```",
    "code": "SELECT ST_IsValid(ST_GeomFromText('POLYGON((0 0, 5 0, 5 5, 0 5, 0 0))'));",
    "options": {
      "A": "true",
      "B": "false",
      "C": "null",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Poligon tersebut memiliki 4 sudut berurutan yang tidak saling potong dan titik akhir menutup ke titik awal (0 0). Poligon ini memenuhi seluruh aturan topologi OGC sehingga bernilai true.",
      "A": "Benar. Poligon tertutup dan tidak memotong dirinya sendiri sehingga valid secara topologis.",
      "B": "Salah. Poligon memenuhi syarat topologi OGC.",
      "C": "Salah. Fungsi mengembalikan tipe boolean PostgreSQL.",
      "D": "Salah. Nilai bertipe boolean 'true', bukan numerik 0."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-003",
    "level": "beginner",
    "topic": "Leaflet LatLngBounds",
    "questionType": "output",
    "question": "Apa yang diperiksa oleh method `bounds.contains(latlng)` pada Leaflet?\n\n```javascript\nconst bounds = L.latLngBounds([[-7.0, 106.0], [-6.0, 108.0]]);\nconst pt = L.latLng(-6.5, 107.0);\nconsole.log(bounds.contains(pt));\n```",
    "code": "const bounds = L.latLngBounds([[-7.0, 106.0], [-6.0, 108.0]]);\nconst pt = L.latLng(-6.5, 107.0);\nconsole.log(bounds.contains(pt));",
    "options": {
      "A": "true",
      "B": "false",
      "C": "undefined",
      "D": "TypeError"
    },
    "answer": "A",
    "explanation": {
      "correct": "Latitude -6.5 berada di antara -7.0 dan -6.0. Longitude 107.0 berada di antara 106.0 dan 108.0. Karena titik berada di dalam batas kotak koordinat (bounding box), method mengembalikan true.",
      "A": "Benar. Titik pt berada di dalam batas area bounding box.",
      "B": "Salah. Titik terletak di dalam rentang lintang dan bujur bounding box.",
      "C": "Salah. contains() mengembalikan boolean murni.",
      "D": "Salah. LatLngBounds dan LatLng adalah class resmi Leaflet."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-004",
    "level": "beginner",
    "topic": "Spatial SQL ST_X & ST_Y",
    "questionType": "output",
    "question": "Berapa nilai X dan Y yang dikembalikan untuk titik berikut?\n\n```sql\nSELECT ST_X(geom) as x, ST_Y(geom) as y FROM (SELECT ST_MakePoint(110.5, -7.8) as geom) sub;\n```",
    "code": "SELECT ST_X(geom) as x, ST_Y(geom) as y FROM (SELECT ST_MakePoint(110.5, -7.8) as geom) sub;",
    "options": {
      "A": "x = 110.5, y = -7.8",
      "B": "x = -7.8, y = 110.5",
      "C": "x = 0, y = 0",
      "D": "NULL"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_MakePoint(X, Y)` menerima X (Bujur/Longitude = 110.5) dan Y (Lintang/Latitude = -7.8). `ST_X` mengekstrak nilai sumbu X (110.5) dan `ST_Y` mengekstrak sumbu Y (-7.8).",
      "A": "Benar. ST_X mengembalikan 110.5 dan ST_Y mengembalikan -7.8.",
      "B": "Salah. Sumbu X dan Y tertukar.",
      "C": "Salah. Nilai koordinat tidak nol.",
      "D": "Salah. Koordinat terdefinisi dan valid."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-005",
    "level": "beginner",
    "topic": "JavaScript Array Filter",
    "questionType": "output",
    "question": "Berapa jumlah fitur yang bertipe 'Point' dari GeoJSON FeatureCollection berikut?\n\n```javascript\nconst features = [\n  { geometry: { type: \"Point\" } },\n  { geometry: { type: \"Polygon\" } },\n  { geometry: { type: \"Point\" } }\n];\nconst count = features.filter(f => f.geometry.type === \"Point\").length;\nconsole.log(count);\n```",
    "code": "const features = [\n  { geometry: { type: \"Point\" } },\n  { geometry: { type: \"Polygon\" } },\n  { geometry: { type: \"Point\" } }\n];\nconst count = features.filter(f => f.geometry.type === \"Point\").length;\nconsole.log(count);",
    "options": {
      "A": "2",
      "B": "3",
      "C": "1",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Filter mencari fitur dengan `f.geometry.type === 'Point'`. Fitur ke-1 dan ke-3 bertipe Point, sehingga totalnya ada 2.",
      "A": "Benar. Terdapat 2 fitur bertipe Point yang lolos seleksi filter.",
      "B": "Salah. 3 adalah total seluruh fitur dalam array.",
      "C": "Salah. Ada dua fitur yang cocok, bukan hanya satu.",
      "D": "Salah. Array filter berhasil menemukan kecocokan."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-006",
    "level": "beginner",
    "topic": "Leaflet Map Container ID",
    "questionType": "debug",
    "question": "Kode berikut melempar error 'Map container not found'. Apa penyebabnya?\n\n```javascript\n// File HTML: <div id=\"my-map\"></div>\n// File JS:\nconst map = L.map(\"map\").setView([0, 0], 2);\n```",
    "code": "// File HTML: <div id=\"my-map\"></div>\n// File JS:\nconst map = L.map(\"map\").setView([0, 0], 2);",
    "options": {
      "A": "ID elemen HTML adalah 'my-map', sedangkan yang dipanggil di L.map adalah 'map'",
      "B": "Tanda kutip ganda dilarang di JavaScript",
      "C": "Koordinat [0, 0] tidak valid di Leaflet",
      "D": "Zoom level 2 terlalu kecil"
    },
    "answer": "A",
    "explanation": {
      "correct": "`L.map(id)` mencari elemen DOM dengan `document.getElementById(id)`. Karena ID di HTML adalah `my-map`, pemanggilan `L.map('map')` gagal menemukan elemen kontainer dan melempar error.",
      "A": "Benar. String ID kontainer pada L.map harus cocok persis dengan ID elemen div di HTML.",
      "B": "Salah. Tanda kutip tunggal atau ganda sah di JavaScript.",
      "C": "Salah. [0, 0] (Null Island) adalah koordinat valid.",
      "D": "Salah. Zoom level 2 adalah zoom global yang sah."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-007",
    "level": "beginner",
    "topic": "Spatial SQL Syntax Error",
    "questionType": "debug",
    "question": "Kueri berikut menghasilkan error saat membuat titik: 'parse error - invalid geometry'. Di mana letak kesalahannya?\n\n```sql\nSELECT ST_GeomFromText('POINT(106.8, -6.2)');\n```",
    "code": "SELECT ST_GeomFromText('POINT(106.8, -6.2)');",
    "options": {
      "A": "Format WKT Point tidak boleh menggunakan tanda koma di antara koordinat X dan Y (seharusnya 'POINT(106.8 -6.2)')",
      "B": "Nama fungsi harus menggunakan huruf kecil",
      "C": "Angka desimal harus menggunakan tanda titik dua",
      "D": "Tanda minus dilarang di WKT"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar WKT (Well-Known Text) ISO/OGC menggunakan spasi tunggal untuk memisahkan sumbu X dan Y pada satu titik. Tanda koma hanya digunakan untuk memisahkan antar pasangan titik pada LineString atau Polygon.",
      "A": "Benar. Tanda koma memicu parse error pada WKT Point; gunakan spasi sebagai pemisah X dan Y.",
      "B": "Salah. SQL tidak membedakan huruf kapital/kecil pada nama fungsi standar.",
      "C": "Salah. Angka desimal standar menggunakan tanda titik (.).",
      "D": "Salah. Tanda minus digunakan untuk merepresentasikan koordinat negatif belahan barat/selatan."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-008",
    "level": "beginner",
    "topic": "Leaflet GeoJSON Coordinate Inversion",
    "questionType": "debug",
    "question": "Data poligon dari file GeoJSON muncul terdistorsi melengkung melintasi kutub utara saat dirender dengan Leaflet. Apa kemungkinan penyebabnya?\n\n```javascript\n// GeoJSON poligon provinsi:\n```",
    "code": "// GeoJSON poligon provinsi:",
    "options": {
      "A": "File GeoJSON asal dibuat dengan urutan koordinat tertukar [Latitude, Longitude] alih-alih standar RFC [Longitude, Latitude]",
      "B": "Browser tidak mendukung poligon",
      "C": "Warna poligon terlalu terang",
      "D": "Leaflet hanya mendukung peta benua Afrika"
    },
    "answer": "A",
    "explanation": {
      "correct": "Banyak developer pemula atau software desktop GIS yang salah mengekspor koordinat menjadi `[lat, lng]`. Ketika dibaca oleh parser GeoJSON standar, nilai latitude (misal 106 derajat) melampaui batas kutub 90 derajat sehingga merusak proyeksi peta.",
      "A": "Benar. Kesalahan urutan [lat, lon] alih-alih [lon, lat] menyebabkan distorsi koordinat ekstrem.",
      "B": "Salah. Browser modern mendukung poligon vektor penuh.",
      "C": "Salah. Warna visual tidak memengaruhi geometri koordinat.",
      "D": "Salah. Leaflet mendukung pemetaan seluruh belahan dunia."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-009",
    "level": "beginner",
    "topic": "Leaflet Circle",
    "questionType": "completion",
    "question": "Lengkapi inisialisasi lingkaran geografis di Leaflet dengan radius 500 METER:\n\n```javascript\nconst circle = L.____([-6.2, 106.8], { radius: 500 }).addTo(map);\n```",
    "code": "const circle = L.____([-6.2, 106.8], { radius: 500 }).addTo(map);",
    "options": {
      "A": "circle",
      "B": "circleMarker",
      "C": "radius",
      "D": "sphere"
    },
    "answer": "A",
    "explanation": {
      "correct": "`L.circle(latlng, options)` membuat lingkaran geografis di peta yang radiusnya didefinisikan dalam satuan METER riil di bumi dan ukurannya membesar/mengecil mengikuti level zoom.",
      "A": "Benar. L.circle mengukur radius dalam meter geografis.",
      "B": "Salah. circleMarker menggunakan satuan radius dalam piksel layar tetap.",
      "C": "Salah. radius bukan nama class pembuat layer Leaflet.",
      "D": "Salah. sphere bukan factory method Leaflet."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-010",
    "level": "beginner",
    "topic": "PostGIS MakePoint with SRID",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS berikut untuk langsung menghasilkan geometri Point dengan SRID 4326 dalam satu pemanggilan fungsi:\n\n```sql\nSELECT ST_Point(106.8, -6.2, ___);\n```",
    "code": "SELECT ST_Point(106.8, -6.2, ___);",
    "options": {
      "A": "4326",
      "B": "3857",
      "C": "'WGS84'",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi `ST_Point(x, y, srid)` di PostGIS modern menerima parameter ketiga berupa integer SRID, menghasilkan geometri titik ber-SRID 4326 secara instan.",
      "A": "Benar. Parameter ketiga menentukan SRID secara langsung (4326).",
      "B": "Salah. 3857 adalah Web Mercator (meter), bukan koordinat derajat GPS.",
      "C": "Salah. Parameter srid harus berupa bilangan bulat (integer), bukan string nama.",
      "D": "Salah. SRID 0 berarti referensi spasial tidak diketahui."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-011",
    "level": "beginner",
    "topic": "Leaflet GeoJSON Popup Binding",
    "questionType": "completion",
    "question": "Lengkapi callback onEachFeature berikut untuk menampilkan popup nama fitur:\n\n```javascript\nL.geoJSON(data, {\n  onEachFeature: (feature, layer) => {\n    layer.____(feature.properties.nama_lokasi);\n  }\n}).addTo(map);\n```",
    "code": "L.geoJSON(data, {\n  onEachFeature: (feature, layer) => {\n    layer.____(feature.properties.nama_lokasi);\n  }\n}).addTo(map);",
    "options": {
      "A": "bindPopup",
      "B": "showDialog",
      "C": "setAlert",
      "D": "addText"
    },
    "answer": "A",
    "explanation": {
      "correct": "Method `bindPopup(content)` pada objek layer Leaflet mengikat teks atau HTML ke dalam popup interaktif yang muncul saat layer diklik.",
      "A": "Benar. bindPopup adalah method resmi Leaflet untuk mengaitkan popup ke layer.",
      "B": "Salah. showDialog bukan method Leaflet.",
      "C": "Salah. setAlert bukan method pada Leaflet Layer.",
      "D": "Salah. addText bukan API resmi Leaflet."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-012",
    "level": "beginner",
    "topic": "Spatial SQL Bounding Box Operator",
    "questionType": "completion",
    "question": "Lengkapi operator kueri PostGIS untuk menguji tumpang tindih bounding box dua geometri:\n\n```sql\nSELECT * FROM parcels WHERE geom ___ ST_MakeEnvelope(100, -5, 105, 0, 4326);\n```",
    "code": "SELECT * FROM parcels WHERE geom ___ ST_MakeEnvelope(100, -5, 105, 0, 4326);",
    "options": {
      "A": "&&",
      "B": "==",
      "C": "IN",
      "D": "LIKE"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator `&&` di PostGIS memeriksa apakah bounding box (2D) dari kedua geometri saling beririsan (overlap), memanfaatkan indeks spasial GiST secara instan.",
      "A": "Benar. Operator && adalah operator bounding box overlap standar di PostGIS.",
      "B": "Salah. Operator == bukan operator spasial PostGIS.",
      "C": "Salah. IN digunakan untuk perbandingan daftar nilai skalar.",
      "D": "Salah. LIKE digunakan untuk pencocokan string teks."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-013",
    "level": "beginner",
    "topic": "GeoJSON File Delivery",
    "questionType": "best-practice",
    "question": "Teknik kompresi HTTP apakah yang paling efektif diaktifkan pada server web (seperti Nginx) untuk mengurangi ukuran transfer file GeoJSON berbasis teks hingga 80%?\n\n```javascript\n// Konfigurasi web server untuk file .geojson:\n```",
    "code": "// Konfigurasi web server untuk file .geojson:",
    "options": {
      "A": "Gzip atau Brotli kompresi untuk tipe konten application/geo+json dan application/json",
      "B": "Menghapus ekstensi file .json",
      "C": "Mengubah file menjadi format gambar JPEG",
      "D": "Mematikan cache browser"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoJSON adalah format berbasis teks dengan banyak karakter berulang (seperti spasi, tanda kurung, dan digit angka). Kompresi Gzip/Brotli sangat efektif memampatkan data teks hingga 75-85% lebih kecil saat ditransfer lewat HTTP.",
      "A": "Benar. Gzip/Brotli mengompresi payload GeoJSON teks secara signifikan menghemat kuota dan mempercepat loading.",
      "B": "Salah. Menghapus ekstensi file tidak memampatkan ukuran byte data.",
      "C": "Salah. Mengubah menjadi gambar merusak kemampuan analisis data vektor di klien.",
      "D": "Salah. Mematikan cache justru menambah beban transfer berulang."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-014",
    "level": "beginner",
    "topic": "Leaflet CSS Inclusion",
    "questionType": "best-practice",
    "question": "Mengapa file stylesheet `leaflet.css` HARUS dimuat di tag `<head>` sebelum peta Leaflet diinisialisasi di JavaScript?\n\n```javascript\n<!-- Struktur dokumen HTML: -->\n<link rel=\"stylesheet\" href=\"leaflet.css\" />\n```",
    "code": "<!-- Struktur dokumen HTML: -->\n<link rel=\"stylesheet\" href=\"leaflet.css\" />",
    "options": {
      "A": "leaflet.css mendefinisikan layout absolute positioning, ukuran layer pan, dan transformasi tile; tanpanya tile peta akan bergeser berantakan",
      "B": "leaflet.css mengatur warna browser pengguna",
      "C": "Tanpa leaflet.css koneksi database backend akan terputus",
      "D": "Hanya sebagai hiasan font tulisan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Leaflet mengandalkan class CSS khusus (`leaflet-container`, `leaflet-tile-pane`, dll.) untuk menata sistem koordinat piksel dan layer stacking. Jika CSS tidak dimuat, tile peta akan tersusun vertikal memanjang ke bawah dan kontrol peta tidak dapat diklik.",
      "A": "Benar. leaflet.css sangat krusial untuk struktur layout dan positioning layer visual peta.",
      "B": "Salah. CSS tidak mengubah warna sistem browser secara keseluruhan.",
      "C": "Salah. CSS frontend tidak memengaruhi koneksi database backend.",
      "D": "Salah. leaflet.css esensial untuk fungsi layout struktural, bukan sekadar dekorasi."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-015",
    "level": "beginner",
    "topic": "Spatial Data Type in Postgres",
    "questionType": "best-practice",
    "question": "Jika Anda hanya menyimpan koordinat lintang/bujur titik lokasi cabang toko dan hanya perlu mencari cabang terdekat dalam radius kilometer, tipe data manakah yang paling bersih dan minim konversi?\n\n```sql\n-- Pemilihan tipe kolom lokasi cabang:\n```",
    "code": "-- Pemilihan tipe kolom lokasi cabang:",
    "options": {
      "A": "geography(Point, 4326)",
      "B": "VARCHAR(100)",
      "C": "INT",
      "D": "BOOLEAN"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe `geography(Point, 4326)` mengasumsikan koordinat bola bumi secara native dan semua fungsi jarak (`ST_Distance`, `ST_DWithin`) otomatis mengukur dalam satuan meter di dunia nyata tanpa perlu transformasi proyeksi manual.",
      "A": "Benar. Tipe geography dirancang khusus untuk koordinat GPS dengan pengukuran jarak meter langsung.",
      "B": "Salah. VARCHAR tidak mendukung kalkulasi spasial dan indeks GiST.",
      "C": "Salah. INT tidak bisa menyimpan koordinat desimal GPS.",
      "D": "Salah. BOOLEAN hanya menyimpan true/false."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-016",
    "level": "beginner",
    "topic": "OGC Services & Web Services",
    "questionType": "concept",
    "question": "Layanan standar OGC yang digunakan untuk mengakses dan mengunduh data vektor mentah beserta tabel atributnya (misal GeoJSON atau GML) adalah:",
    "options": {
      "A": "WFS (Web Feature Service)",
      "B": "WMS (Web Map Service)",
      "C": "WMTS (Web Map Tile Service)",
      "D": "TMS (Tile Map Service)"
    },
    "answer": "A",
    "explanation": {
      "correct": "WFS melayani fitur vektor (geometri titik, garis, poligon beserta atribut teks/numerik) secara langsung tanpa merendernya menjadi gambar.",
      "A": "Opsi A benar sesuai definisi OGC WFS.",
      "B": "Opsi B salah karena WMS menyajikan gambar visual peta.",
      "C": "Opsi C salah karena WMTS melayani potongan gambar tile piramida.",
      "D": "Opsi D salah karena TMS adalah spesifikasi tile piramida gambar OSGeo."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-017",
    "level": "beginner",
    "topic": "Fullstack Web GIS Development",
    "questionType": "concept",
    "question": "Format berbasis teks JSON standar yang digunakan untuk merepresentasikan fitur geografis dan tabel atributnya di web modern adalah:",
    "options": {
      "A": "GeoJSON",
      "B": "Shapefile",
      "C": "GeoTIFF",
      "D": "CSV"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoJSON (RFC 7946) adalah format standar terbuka berbasis JSON untuk encoding berbagai struktur data geografis di web.",
      "A": "Opsi A benar sesuai standar RFC 7946.",
      "B": "Opsi B salah karena Shapefile adalah format binary proprietary lama.",
      "C": "Opsi C salah karena GeoTIFF adalah format raster citra.",
      "D": "Opsi D salah karena CSV standar tidak memiliki struktur hirarki geometri geospasial formal."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-018",
    "level": "beginner",
    "topic": "Fullstack Web GIS Development",
    "questionType": "concept",
    "question": "Dalam format GeoJSON standar (RFC 7946), bagaimana urutan sumbu koordinat pada array 'coordinates'?",
    "options": {
      "A": "[Longitude (Bujur / X), Latitude (Lintang / Y)]",
      "B": "[Latitude (Lintang / Y), Longitude (Bujur / X)]",
      "C": "[Elevation (Tinggi / Z), Latitude (Lintang / Y)]",
      "D": "[Latitude, Elevation]"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi RFC 7946 secara tegas menetapkan urutan koordinat GeoJSON harus mengikuti konvensi sumbu Cartesian [easting, northing] yaitu [longitude, latitude].",
      "A": "Opsi A benar sesuai spesifikasi resmi GeoJSON RFC 7946 Section 3.1.1.",
      "B": "Opsi B salah karena [lat, lon] adalah urutan penulisan lisan umum tetapi menyalahi spesifikasi formal GeoJSON.",
      "C": "Opsi C salah karena elevasi selalu diletakkan pada posisi ketiga [lon, lat, elev].",
      "D": "Opsi D salah karena tidak menyertakan bujur."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-019",
    "level": "beginner",
    "topic": "Cloud GIS & Big Data",
    "questionType": "concept",
    "question": "Platform komputasi awan berbasis petabyte data observasi bumi milik Google yang dapat diakses secara gratis untuk riset dan edukasi adalah:",
    "options": {
      "A": "Google Earth Engine (GEE)",
      "B": "Google Maps API",
      "C": "Google Drive",
      "D": "Google Cloud Datastore"
    },
    "answer": "A",
    "explanation": {
      "correct": "Google Earth Engine mengombinasikan katalog multi-petabyte citra satelit dan dataset geospasial dengan infrastruktur komputasi paralel masif untuk analisis skala planet.",
      "A": "Opsi A benar sesuai definisi Google Earth Engine.",
      "B": "Opsi B salah karena Google Maps API adalah servis visualisasi peta dan routing navigasi konsumen.",
      "C": "Opsi C salah karena Google Drive adalah penyimpanan file personal umum.",
      "D": "Opsi D salah karena Datastore adalah basis data NoSQL document."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-020",
    "level": "beginner",
    "topic": "DevOps & GIS Deployment",
    "questionType": "concept",
    "question": "Teknologi containerization yang memungkinkan aplikasi Web GIS beserta dependensi pustaka C seperti GDAL dan GEOS dibungkus dalam environment yang konsisten dan portabel adalah:",
    "options": {
      "A": "Docker",
      "B": "Apache HTTP Server",
      "C": "PostgreSQL",
      "D": "Git"
    },
    "answer": "A",
    "explanation": {
      "correct": "Docker mengisolasi aplikasi dan seluruh dependensi pustaka sistem ke dalam container mandiri yang dapat dijalankan identik di server mana saja.",
      "A": "Opsi A benar karena Docker adalah standar industri kontainerisasi perangkat lunak.",
      "B": "Opsi B salah karena Apache adalah web server HTTP.",
      "C": "Opsi C salah karena PostgreSQL adalah database management system.",
      "D": "Opsi D salah karena Git adalah version control system kode sumber."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-021",
    "level": "beginner",
    "topic": "Fotogrametri & UAV",
    "questionType": "concept",
    "question": "Hasil penggabungan dan perbaikan geometrik dari ribuan foto udara drone menjadi satu gambar utuh berskala seragam disebut:",
    "options": {
      "A": "Orthomosaic",
      "B": "Panorama vertikal",
      "C": "Point cloud mentah",
      "D": "Kolase artistik"
    },
    "answer": "A",
    "explanation": {
      "correct": "Orthomosaic adalah mosaik citra foto udara yang telah mengalami koreksi orthorektifikasi topografi sehingga memiliki proyeksi ortografis tanpa distorsi perspektif.",
      "A": "Opsi A benar sesuai terminologi fotogrametri udara.",
      "B": "Opsi B salah karena panorama tidak mengalami koreksi distorsi geometrik terrain.",
      "C": "Opsi C salah karena point cloud adalah kumpulan titik koordinat 3D, bukan citra raster raster berkelanjutan.",
      "D": "Opsi D salah karena kolase artistik tidak memiliki nilai georeferensi akurat."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-022",
    "level": "beginner",
    "topic": "GIS Software & GDAL/OGR",
    "questionType": "concept",
    "question": "Utilitas baris perintah (command line) dari GDAL yang digunakan untuk memeriksa ringkasan informasi dan metadata dari file raster (seperti ukuran dimensi, tipe data, dan sistem koordinat) adalah:",
    "options": {
      "A": "gdalinfo",
      "B": "gdalwarp",
      "C": "gdal_translate",
      "D": "ogrinfo"
    },
    "answer": "A",
    "explanation": {
      "correct": "gdalinfo menampilkan seluruh informasi teknis dataset raster GDAL termasuk projection, bounding box, band statistics, dan driver format.",
      "A": "Opsi A benar sesuai kegunaan utilitas gdalinfo.",
      "B": "Opsi B salah karena gdalwarp untuk reproyeksi dan mosaik.",
      "C": "Opsi C salah karena gdal_translate untuk konversi format dan subsetting.",
      "D": "Opsi D salah karena ogrinfo untuk dataset vektor."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-023",
    "level": "beginner",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menghitung luas area dari sebuah poligon geometri?",
    "options": {
      "A": "ST_Area(geom)",
      "B": "ST_Length(geom)",
      "C": "ST_Perimeter(geom)",
      "D": "ST_Volume(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Area mengembalikan luas geometri poligon dalam satuan unit sistem referensi spasialnya (misal meter persegi pada UTM).",
      "A": "Opsi A benar sesuai fungsi PostGIS ST_Area.",
      "B": "Opsi B salah karena ST_Length menghitung panjang garis.",
      "C": "Opsi C salah karena ST_Perimeter menghitung keliling batas poligon.",
      "D": "Opsi D salah karena ST_Volume untuk objek volumetrik 3D."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-024",
    "level": "beginner",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menguji apakah dua geometri saling berpotongan atau bersentuhan di ruang spasial?",
    "options": {
      "A": "ST_Intersects(geomA, geomB)",
      "B": "ST_Equals(geomA, geomB)",
      "C": "ST_Disjoint(geomA, geomB)",
      "D": "ST_DWithin(geomA, geomB, 0)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Intersects mengembalikan nilai TRUE jika geomA dan geomB berbagi setidaknya satu titik ruang spasial bersama.",
      "A": "Opsi A benar sesuai fungsi relasi topologis PostGIS paling fundamental.",
      "B": "Opsi B salah karena ST_Equals mengharuskan kedua geometri identik secara spasial.",
      "C": "Opsi C salah karena ST_Disjoint justru mengembalikan TRUE jika kedua geometri sama sekali tidak bersentuhan.",
      "D": "Opsi D salah meskipun secara konseptual mirip jarak nol, ST_Intersects adalah predikat standar OGC."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-025",
    "level": "beginner",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Tipe indeks database apakah yang paling umum digunakan pada kolom geometri PostGIS untuk mempercepat kueri spasial berbasis bounding box?",
    "options": {
      "A": "GiST (Generalized Search Tree)",
      "B": "B-Tree standar",
      "C": "Hash index",
      "D": "Full-text index"
    },
    "answer": "A",
    "explanation": {
      "correct": "Indeks GiST mengimplementasikan struktur pohon R-Tree yang mengindeks bounding box (MBR) dari setiap geometri, esensial untuk query spasial cepat.",
      "A": "Opsi A benar sesuai arsitektur spatial index PostGIS.",
      "B": "Opsi B salah karena B-tree hanya cocok untuk data terurut satu dimensi (skalar).",
      "C": "Opsi C salah karena Hash index hanya mendukung perbandingan kesamaan nilai eksak (=).",
      "D": "Opsi D salah karena Full-text index untuk pencarian kata bahasa alami."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-026",
    "level": "beginner",
    "topic": "Web Mapping",
    "questionType": "concept",
    "question": "Pada peta web berbasis Leaflet, metode manakah yang dipanggil untuk menambahkan layer marker ke dalam objek peta?",
    "options": {
      "A": "marker.addTo(map)",
      "B": "map.appendMarker(marker)",
      "C": "marker.insert(map)",
      "D": "document.add(marker)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Di Leaflet, objek layer memiliki method berantai .addTo(map) untuk mengaitkan dirinya ke instance peta yang sedang aktif.",
      "A": "Opsi A benar sesuai sintaks resmi Leaflet API.",
      "B": "Opsi B salah karena bukan metode Leaflet Map.",
      "C": "Opsi C salah karena bukan metode Leaflet Layer.",
      "D": "Opsi D salah karena bukan method DOM HTML."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-027",
    "level": "beginner",
    "topic": "Web Mapping",
    "questionType": "concept",
    "question": "Server aplikasi geospasial berbasis Java open-source yang paling umum digunakan untuk mempublikasikan data spasial sebagai WMS, WFS, dan WCS adalah:",
    "options": {
      "A": "GeoServer",
      "B": "Tomcat standar tanpa aplikasi",
      "C": "Node.js",
      "D": "Nginx"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoServer adalah server geospasial terkemuka di dunia yang mengimplementasikan protokol OGC secara lengkap dan mudah dikonfigurasi via web admin GUI.",
      "A": "Opsi A benar sesuai peran utama GeoServer.",
      "B": "Opsi B salah karena Tomcat murni hanyalah servlet container.",
      "C": "Opsi C salah karena Node.js adalah JavaScript runtime backend umum.",
      "D": "Opsi D salah karena Nginx adalah reverse proxy web server umum."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-028",
    "level": "beginner",
    "topic": "Cloud GIS & Big Data",
    "questionType": "concept",
    "question": "Library Python yang paling mendasar untuk membaca, memanipulasi, dan menganalisis tabel data geospasial vektor (GeoDataFrame) adalah:",
    "options": {
      "A": "geopandas",
      "B": "pandas murni tanpa ekstensi",
      "C": "numpy",
      "D": "scipy"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoPandas memperluas kemampuan Pandas dengan tipe data spasial (kolom geometry shapely) dan menyediakan operasi spasial tingkat tinggi yang intuitif.",
      "A": "Opsi A benar sesuai peranan library GeoPandas.",
      "B": "Opsi B salah karena Pandas murni tidak memahami tipe data geometri spasial.",
      "C": "Opsi C salah karena NumPy berfokus pada komputasi array numerik N-dimensi.",
      "D": "Opsi D salah karena SciPy untuk komputasi saintifik dan algoritma matematika umum."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-029",
    "level": "beginner",
    "topic": "DevOps & GIS Deployment",
    "questionType": "concept",
    "question": "Port default jaringan yang umumnya digunakan oleh layanan GeoServer ketika berjalan di atas Apache Tomcat atau container mandiri adalah:",
    "options": {
      "A": "8080",
      "B": "5432",
      "C": "80",
      "D": "3000"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoServer secara default mendengarkan koneksi HTTP pada port 8080 (http://localhost:8080/geoserver).",
      "A": "Opsi A benar sesuai konfigurasi default GeoServer.",
      "B": "Opsi B salah karena port 5432 adalah port default PostgreSQL.",
      "C": "Opsi C salah karena port 80 adalah port default HTTP standar web.",
      "D": "Opsi D salah karena port 3000 umum untuk development server frontend (React/Node)."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-030",
    "level": "beginner",
    "topic": "Geodesi & Proyeksi",
    "questionType": "concept",
    "question": "Berapakah lebar zona bujur (longitude width) dari setiap zona proyeksi Universal Transverse Mercator (UTM)?",
    "options": {
      "A": "6 derajat",
      "B": "3 derajat",
      "C": "10 derajat",
      "D": "15 derajat"
    },
    "answer": "A",
    "explanation": {
      "correct": "Permukaan bumi dibagi menjadi 60 zona UTM secara membujur, di mana masing-masing zona memiliki lebar 6 derajat bujur (360° / 60 = 6°).",
      "A": "Opsi A benar sesuai spesifikasi sistem koordinat UTM global.",
      "B": "Opsi B salah karena 3 derajat adalah lebar zona sistem TM-3° Indonesia.",
      "C": "Opsi C salah karena bukan pembagian zona UTM.",
      "D": "Opsi D salah karena 15 derajat adalah lebar zona waktu dunia (1 jam)."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-031",
    "level": "intermediate",
    "topic": "Spatial SQL Aggregate",
    "questionType": "output",
    "question": "Berapa jumlah poligon hasil kueri ST_Dump pada MULTIPOLYGON berikut?\n\n```sql\nSELECT COUNT(*) FROM (\n  SELECT (ST_Dump(ST_GeomFromText('MULTIPOLYGON(((0 0, 1 0, 1 1, 0 1, 0 0)), ((2 2, 3 2, 3 3, 2 3, 2 2)))'))).geom\n) sub;\n```",
    "code": "SELECT COUNT(*) FROM (\n  SELECT (ST_Dump(ST_GeomFromText('MULTIPOLYGON(((0 0, 1 0, 1 1, 0 1, 0 0)), ((2 2, 3 2, 3 3, 2 3, 2 2)))'))).geom\n) sub;",
    "options": {
      "A": "2",
      "B": "1",
      "C": "8",
      "D": "0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Geometri awal adalah MULTIPOLYGON yang terdiri dari 2 poligon terpisah. `ST_Dump` memecahnya menjadi baris-baris poligon tunggal (POLYGON), sehingga `COUNT(*)` menghasilkan 2.",
      "A": "Benar. ST_Dump memecah 2 poligon bagian menjadi 2 baris terpisah.",
      "B": "Salah. 1 adalah jumlah record awal sebelum di-dump.",
      "C": "Salah. 8 adalah total vertex sudut, bukan jumlah poligon.",
      "D": "Salah. Subquery menghasilkan baris geometri valid."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-032",
    "level": "intermediate",
    "topic": "Turf.js Midpoint Calculation",
    "questionType": "output",
    "question": "Berapa koordinat titik tengah yang dihasilkan oleh turf.midpoint untuk dua titik (0, 0) dan (10, 0)?\n\n```javascript\nconst p1 = turf.point([0, 0]);\nconst p2 = turf.point([10, 0]);\nconst mid = turf.midpoint(p1, p2);\nconsole.log(mid.geometry.coordinates);\n```",
    "code": "const p1 = turf.point([0, 0]);\nconst p2 = turf.point([10, 0]);\nconst mid = turf.midpoint(p1, p2);\nconsole.log(mid.geometry.coordinates);",
    "options": {
      "A": "[5, 0]",
      "B": "[0, 5]",
      "C": "[10, 0]",
      "D": "[0, 0]"
    },
    "answer": "A",
    "explanation": {
      "correct": "Titik tengah antara bujur 0 dan bujur 10 pada garis khatulistiwa (lintang 0) adalah bujur 5, lintang 0: `[5, 0]`.",
      "A": "Benar. Titik tengah geodesik antara [0, 0] dan [10, 0] adalah [5, 0].",
      "B": "Salah. [0, 5] berada di garis lintang 5 utara.",
      "C": "Salah. [10, 0] adalah titik akhir.",
      "D": "Salah. [0, 0] adalah titik awal."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-033",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Covers vs ST_Contains",
    "questionType": "output",
    "question": "Apa output dari perbandingan ST_Covers vs ST_Contains saat sebuah titik berada tepat di garis batas (boundary) poligon?\n\n```sql\n-- p adalah titik yang terletak persis di tepian garis poligon poly:\nSELECT ST_Covers(poly, p) as covers, ST_Contains(poly, p) as contains;\n```",
    "code": "-- p adalah titik yang terletak persis di tepian garis poligon poly:\nSELECT ST_Covers(poly, p) as covers, ST_Contains(poly, p) as contains;",
    "options": {
      "A": "covers = true, contains = false",
      "B": "covers = false, contains = true",
      "C": "covers = true, contains = true",
      "D": "covers = false, contains = false"
    },
    "answer": "A",
    "explanation": {
      "correct": "Menurut matriks DE-9IM OGC, `ST_Contains` mengecualikan titik yang berada di boundary (harus berada murni di interior poligon). Sebaliknya, `ST_Covers` mencakup interior DAN boundary poligon sehingga bernilai true.",
      "A": "Benar. ST_Covers mencakup boundary poligon, sedangkan ST_Contains mengecualikannya.",
      "B": "Salah. ST_Contains bernilai false jika titik tepat berada di garis batas.",
      "C": "Salah. ST_Contains tidak bernilai true pada garis batas.",
      "D": "Salah. ST_Covers bernilai true karena mencakup tepian batas."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-034",
    "level": "intermediate",
    "topic": "Leaflet LatLng DistanceTo",
    "questionType": "output",
    "question": "Metode apakah pada objek `L.latLng` Leaflet yang menghitung jarak langsung ke titik lain di permukaan bumi dalam satuan meter?\n\n```javascript\nconst p1 = L.latLng(-6.2, 106.8);\nconst p2 = L.latLng(-6.3, 106.8);\nconst dist = p1.distanceTo(p2); // Satuan apa yang dihasilkan?\n```",
    "code": "const p1 = L.latLng(-6.2, 106.8);\nconst p2 = L.latLng(-6.3, 106.8);\nconst dist = p1.distanceTo(p2); // Satuan apa yang dihasilkan?",
    "options": {
      "A": "Meter (menggunakan formula spherical law of cosines)",
      "B": "Derajat sudut",
      "C": "Kilometer",
      "D": "Inci"
    },
    "answer": "A",
    "explanation": {
      "correct": "`latlngA.distanceTo(latlngB)` di Leaflet menghitung jarak geodesik di permukaan bumi dan selalu mengembalikan angka numerik dalam satuan METER.",
      "A": "Benar. Leaflet method distanceTo() mengembalikan jarak dalam satuan meter.",
      "B": "Salah. distanceTo tidak mengembalikan derajat sudut.",
      "C": "Salah. Untuk kilometer, nilai harus dibagi 1.000 secara manual.",
      "D": "Salah. Inci bukan satuan metrik Leaflet."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-035",
    "level": "intermediate",
    "topic": "Spatial SQL ST_Envelope",
    "questionType": "output",
    "question": "Berapa jumlah titik simpul (vertex) pada geometri poligon hasil ST_Envelope?\n\n```sql\nSELECT ST_NPoints(ST_Envelope(ST_GeomFromText('LINESTRING(0 0, 10 10)')));\n```",
    "code": "SELECT ST_NPoints(ST_Envelope(ST_GeomFromText('LINESTRING(0 0, 10 10)')));",
    "options": {
      "A": "5",
      "B": "4",
      "C": "2",
      "D": "8"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Envelope` menghasilkan poligon kotak pembungkus. Poligon persegi memiliki 4 titik sudut ditambah 1 titik penutup yang identik dengan titik awal: (0 0), (10 0), (10 10), (0 10), dan (0 0). Total ada 5 vertex.",
      "A": "Benar. Kotak poligon tertutup memiliki 4 sudut + 1 simpul penutup = 5 titik simpul.",
      "B": "Salah. Poligon tertutup memerlukan simpul penutup sehingga bukan 4.",
      "C": "Salah. 2 adalah jumlah simpul linestring awal, bukan envelope poligonnya.",
      "D": "Salah. Tidak ada vertex tambahan di tengah sisi."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-036",
    "level": "intermediate",
    "topic": "JavaScript GeoJSON FeatureCollection Array",
    "questionType": "output",
    "question": "Apa output dari pengecekan array fitur pada FeatureCollection kosong?\n\n```javascript\nconst fc = { type: \"FeatureCollection\", features: [] };\nconsole.log(Array.isArray(fc.features) && fc.features.length === 0);\n```",
    "code": "const fc = { type: \"FeatureCollection\", features: [] };\nconsole.log(Array.isArray(fc.features) && fc.features.length === 0);",
    "options": {
      "A": "true",
      "B": "false",
      "C": "null",
      "D": "undefined"
    },
    "answer": "A",
    "explanation": {
      "correct": "fc.features adalah array kosong. `Array.isArray(fc.features)` bernilai true dan `fc.features.length === 0` bernilai true. true && true menghasilkan true.",
      "A": "Benar. Properti features adalah array valid dengan panjang nol.",
      "B": "Salah. Kondisi logika bernilai true.",
      "C": "Salah. Evaluasi boolean tidak menghasilkan null.",
      "D": "Salah. Nilai kembalian adalah boolean primitif."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-037",
    "level": "intermediate",
    "topic": "Spatial SQL ST_ExteriorRing",
    "questionType": "output",
    "question": "Tipe geometri apakah yang dikembalikan oleh fungsi `ST_ExteriorRing(polygon)`?\n\n```sql\nSELECT ST_GeometryType(ST_ExteriorRing(poly_geom)) FROM land_plots;\n```",
    "code": "SELECT ST_GeometryType(ST_ExteriorRing(poly_geom)) FROM land_plots;",
    "options": {
      "A": "ST_LineString (garis cincin batas luar poligon)",
      "B": "ST_Polygon",
      "C": "ST_Point",
      "D": "ST_MultiPoint"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_ExteriorRing` mengekstrak cincin batas luar (exterior boundary ring) dari sebuah poligon dan mengembalikannya sebagai geometri garis tertutup bertipe `ST_LineString`.",
      "A": "Benar. Exterior ring adalah cincin pembatas yang bertipe LineString.",
      "B": "Salah. Fungsinya mengekstrak garis kelilingnya, bukan poligon berpenampang.",
      "C": "Salah. Cincin adalah garis bersambung, bukan titik tunggal.",
      "D": "Salah. Bukan sekumpulan titik acak."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-038",
    "level": "intermediate",
    "topic": "Spatial SQL Projection Distortion",
    "questionType": "debug",
    "question": "Kueri penghitungan buffer berikut menghasilkan poligon oval lonjong tidak simetris padahal radius buffer disetel konstan. Mengapa?\n\n```sql\nSELECT ST_Buffer(geom, 1000) FROM points_table;\n-- points_table ber-SRID 3857 (Web Mercator) di lintang 60 derajat utara\n```",
    "code": "SELECT ST_Buffer(geom, 1000) FROM points_table;\n-- points_table ber-SRID 3857 (Web Mercator) di lintang 60 derajat utara",
    "options": {
      "A": "Proyeksi Web Mercator (EPSG:3857) mengalami distorsi skala yang sangat tinggi di lintang tinggi sehingga buffer planar 1.000 meter tidak lagi merefleksikan jarak riil di bumi",
      "B": "PostGIS tidak mendukung angka 1000",
      "C": "Tabel harus diurutkan berdasarkan tanggal",
      "D": "Fungsi ST_Buffer hanya bekerja untuk titik di khatulistiwa"
    },
    "answer": "A",
    "explanation": {
      "correct": "Web Mercator mendistorsi skala semakin menjauh dari khatulistiwa (faktor pembesaran 1/cos(latitude)). Di lintang 60 derajat, distorsi skala mencapai 2x lipat. Untuk analisis jarak dan buffer riil yang presisi, gunakan proyeksi lokal UTM atau tipe `geography`.",
      "A": "Benar. Distorsi proyeksi EPSG:3857 di lintang tinggi menyebabkan distorsi bentuk dan luas skala nyata.",
      "B": "Salah. 1000 adalah parameter numerik valid.",
      "C": "Salah. Pengurutan tanggal tidak memengaruhi formula komputasi geometris.",
      "D": "Salah. ST_Buffer bekerja di seluruh koordinat."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-039",
    "level": "intermediate",
    "topic": "Leaflet Canvas Render Delay",
    "questionType": "debug",
    "question": "Marker Canvas tidak muncul di peta hingga pengguna menggeser atau memperbesar peta sedikit (trigger render). Apa yang kurang pada kode inisialisasi?\n\n```javascript\nconst canvas = L.canvas();\nconst marker = L.circleMarker([0, 0], { renderer: canvas }).addTo(map);\n// Peta tampak kosong sampai digeser mouse.\n```",
    "code": "const canvas = L.canvas();\nconst marker = L.circleMarker([0, 0], { renderer: canvas }).addTo(map);\n// Peta tampak kosong sampai digeser mouse.",
    "options": {
      "A": "Memanggil `map.invalidateSize()` atau memastikan rendering triggered setelah map container siap sempurna",
      "B": "Menghapus elemen canvas dari browser",
      "C": "Mematikan fitur hardware acceleration di browser",
      "D": "Mengganti koordinat [0, 0] menjadi teks"
    },
    "answer": "A",
    "explanation": {
      "correct": "Jika kontainer peta belum menyelesaikan proses reflow/layout DOM saat layer Canvas ditambahkan, bounding box kanvas berukuran 0. Memanggil `map.invalidateSize()` atau menunda inisialisasi hingga event render selesai menyelesaikan bug ini.",
      "A": "Benar. map.invalidateSize() memaksa kalkulasi ulang ukuran kontainer dan memicu render frame kanvas.",
      "B": "Salah. Menghapus elemen canvas justru menghilangkan layer.",
      "C": "Salah. Hardware acceleration justru mempercepat rendering WebGL/Canvas.",
      "D": "Salah. Koordinat harus berupa angka float, bukan teks."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-040",
    "level": "intermediate",
    "topic": "PostGIS ST_GeomFromGeoJSON CRS",
    "questionType": "debug",
    "question": "Geometri hasil ST_GeomFromGeoJSON tidak memiliki SRID (SRID = 0) sehingga gagal saat dilakukan spatial JOIN dengan tabel SRID 4326. Bagaimana solusinya?\n\n```sql\nSELECT ST_GeomFromGeoJSON(feature_geom_json); -- SRID = 0\n-- Solusi:\n```",
    "code": "SELECT ST_GeomFromGeoJSON(feature_geom_json); -- SRID = 0\n-- Solusi:",
    "options": {
      "A": "Membungkus dengan ST_SetSRID: 'ST_SetSRID(ST_GeomFromGeoJSON(...), 4326)'",
      "B": "Menghapus SRID dari tabel tujuan",
      "C": "Mengubah database menjadi MongoDB",
      "D": "Mengganti angka 4326 menjadi nol"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi RFC 7946 GeoJSON menyatakan bahwa semua koordinat GeoJSON diasumsikan WGS 84 (CRS84/4326), tetapi fungsi `ST_GeomFromGeoJSON` mengembalikan geometri ber-SRID 0 (unspecified). Pengembang harus menetapkan SRID eksplisit dengan `ST_SetSRID(..., 4326)`.",
      "A": "Benar. ST_SetSRID menetapkan metadata 4326 tanpa mengubah angka koordinat geometri.",
      "B": "Salah. Menghapus SRID dari tabel tujuan merusak integritas referensi spasial basis data.",
      "C": "Salah. Mengganti database bukan solusi arsitektur SQL.",
      "D": "Salah. Menyetel nol menghilangkan informasi referensi spasial global."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-041",
    "level": "intermediate",
    "topic": "Leaflet GeoJSON Custom Filter Reference",
    "questionType": "debug",
    "question": "Filter pada L.geoJSON tidak bereaksi saat state kategori diubah di dropdown UI. Mengapa?\n\n```javascript\n// State dropdown berubah:\nselectedCategory = \"Taman\";\n// Kenapa tampilan peta tidak berubah otomatis?\n```",
    "code": "// State dropdown berubah:\nselectedCategory = \"Taman\";\n// Kenapa tampilan peta tidak berubah otomatis?",
    "options": {
      "A": "L.geoJSON tidak melakukan re-filtering secara otomatis saat variabel luar berubah; layer lama harus dibersihkan (clearLayers) dan diisi ulang (addData) dengan data yang baru",
      "B": "JavaScript melarang perubahan variabel global",
      "C": "Dropdown HTML tidak bisa mengirim event ke peta",
      "D": "Leaflet filter hanya bekerja sekali seumur hidup"
    },
    "answer": "A",
    "explanation": {
      "correct": "Fungsi filter pada L.geoJSON hanya dieksekusi sekali saat data pertama kali dimuat ke dalam layer. Ketika filter UI berubah, layer harus memanggil `geoLayer.clearLayers()` lalu `geoLayer.addData(originalData)` agar callback filter dievaluasi ulang.",
      "A": "Benar. Layer harus di-refresh secara manual dengan clearLayers() dan addData() saat filter berubah.",
      "B": "Salah. Variabel JavaScript sangat fleksibel dan dinamis.",
      "C": "Salah. Event onChange dropdown dapat memicu fungsi pembaruan peta dengan mudah.",
      "D": "Salah. Filter dapat dipanggil berulang kali melalui addData."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-042",
    "level": "intermediate",
    "topic": "Spatial SQL Group By Geometry",
    "questionType": "debug",
    "question": "Kueri pengelompokan (GROUP BY) berdasarkan kolom `geom` berjalan sangat lambat. Apa cara yang lebih efisien untuk mendeduplikasi geometri identik di PostGIS?\n\n```sql\nSELECT geom, count(*) FROM points_table GROUP BY geom; -- Lambat\n-- Solusi optimal:\n```",
    "code": "SELECT geom, count(*) FROM points_table GROUP BY geom; -- Lambat\n-- Solusi optimal:",
    "options": {
      "A": "Mengelompokkan berdasarkan ST_GeoHash(geom) atau atribut ID/hash biner MD5 dari WKB daripada perbandingan geometri langsung",
      "B": "Menghapus semua data duplikat dengan TRUNCATE",
      "C": "Menonaktifkan CPU multi-threading",
      "D": "Mengubah koordinat menjadi string acak"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perbandingan kesetaraan geometri eksak pada GROUP BY memerlukan evaluasi vertex-by-vertex yang sangat mahal. Mengelompokkan berdasarkan representasi hash string seperti `ST_GeoHash(geom, 10)` atau `md5(ST_AsBinary(geom))` jauh lebih cepat karena memanfaatkan sorting B-Tree teks/integer.",
      "A": "Benar. GeoHash atau binary hash dapat diindeks oleh B-Tree yang sangat cepat untuk agregasi GROUP BY.",
      "B": "Salah. TRUNCATE menghapus seluruh isi tabel tanpa sisa.",
      "C": "Salah. Mematikan multi-threading tidak mempercepat komputasi perbandingan.",
      "D": "Salah. Koordinat acak merusak integritas data spasial."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-043",
    "level": "intermediate",
    "topic": "PostGIS ST_Split",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk memotong geometri garis menggunakan titik pemotong (blade):\n\n```sql\nSELECT ST____(road_line, junction_point);\n```",
    "code": "SELECT ST____(road_line, junction_point);",
    "options": {
      "A": "Split",
      "B": "Cut",
      "C": "Divide",
      "D": "Break"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Split(input_geom, blade_geom)` memotong geometri garis dengan titik pemotong atau memotong poligon dengan garis pembelah.",
      "A": "Benar. ST_Split adalah fungsi resmi pemotong geometri di PostGIS.",
      "B": "Salah. Cut bukan nama fungsi PostGIS.",
      "C": "Salah. Divide bukan fungsi spasial PostGIS.",
      "D": "Salah. Break bukan fungsi SQL PostGIS."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-044",
    "level": "intermediate",
    "topic": "Leaflet TileLayer Error Fallback",
    "questionType": "completion",
    "question": "Lengkapi penanganan event tile error pada L.tileLayer agar tidak menampilkan gambar rusak saat koneksi tile gagal:\n\n```javascript\ntileLayer.on(\"____\", function(e) {\n  e.tile.src = \"/images/fallback-tile.png\";\n});\n```",
    "code": "tileLayer.on(\"____\", function(e) {\n  e.tile.src = \"/images/fallback-tile.png\";\n});",
    "options": {
      "A": "tileerror",
      "B": "tileloaderror",
      "C": "fail",
      "D": "broken"
    },
    "answer": "A",
    "explanation": {
      "correct": "Event `tileerror` dipicu pada instance `L.TileLayer` setiap kali terjadi kegagalan pemuatan gambar tile (seperti HTTP 404/500 atau timeout jaringan).",
      "A": "Benar. tileerror adalah nama event resmi Leaflet untuk kegagalan load tile.",
      "B": "Salah. tileloaderror bukan nama event bawaan Leaflet.",
      "C": "Salah. fail bukan event TileLayer.",
      "D": "Salah. broken bukan nama event Leaflet."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-045",
    "level": "intermediate",
    "topic": "PostGIS Line Merge",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk menyambungkan segmen-segmen garis yang saling bersentuhan di ujungnya menjadi satu linestring utuh bersambung:\n\n```sql\nSELECT ST_Line____(ST_Collect(geom)) FROM road_segments;\n```",
    "code": "SELECT ST_Line____(ST_Collect(geom)) FROM road_segments;",
    "options": {
      "A": "Merge",
      "B": "Connect",
      "C": "Join",
      "D": "Sew"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_LineMerge(geom)` menjahit (sew together) sekumpulan segmen garis yang saling bersinggungan pada ujung simpulnya menjadi LineString kontinu.",
      "A": "Benar. ST_LineMerge menyatukan segmen-segmen garis bersambungan menjadi satu linestring.",
      "B": "Salah. LineConnect bukan nama fungsi PostGIS.",
      "C": "Salah. LineJoin bukan fungsi penggabungan linestring PostGIS.",
      "D": "Salah. LineSew bukan nama fungsi resmi PostGIS."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-046",
    "level": "intermediate",
    "topic": "Turf.js Convex Hull",
    "questionType": "completion",
    "question": "Lengkapi fungsi Turf.js untuk menghasilkan selubung cembung (convex hull) dari sekumpulan titik:\n\n```javascript\nconst hull = turf.____(pointsFeatureCollection);\n```",
    "code": "const hull = turf.____(pointsFeatureCollection);",
    "options": {
      "A": "convex",
      "B": "envelope",
      "C": "hull",
      "D": "outerRing"
    },
    "answer": "A",
    "explanation": {
      "correct": "`turf.convex(featureCollection)` menghitung poligon convex hull dari kumpulan titik koordinat spasial.",
      "A": "Benar. turf.convex adalah fungsi resmi Turf.js untuk kalkulasi convex hull.",
      "B": "Salah. envelope menghasilkan kotak persegi, bukan selubung cembung.",
      "C": "Salah. turf.hull bukan nama fungsi di Turf.js.",
      "D": "Salah. outerRing bukan fungsi Turf.js."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-047",
    "level": "intermediate",
    "topic": "PostGIS ST_Node",
    "questionType": "completion",
    "question": "Lengkapi fungsi PostGIS untuk memecah kumpulan garis yang saling bersilangan di titik potongnya sehingga membentuk simpul topologi (node):\n\n```sql\nSELECT ST____(ST_Collect(line_geom)) FROM network_edges;\n```",
    "code": "SELECT ST____(ST_Collect(line_geom)) FROM network_edges;",
    "options": {
      "A": "Node",
      "B": "Vertex",
      "C": "Junction",
      "D": "IntersectLines"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_Node(geom)` menyisipkan titik simpul (node) pada setiap perpotongan garis dan memecah garis pada simpul tersebut, sangat krusial dalam membangun topologi jaringan jalan (pgRouting).",
      "A": "Benar. ST_Node men-noding kumpulan garis pada titik perpotongannya.",
      "B": "Salah. Vertex bukan nama fungsi pemecah garis PostGIS.",
      "C": "Salah. Junction bukan fungsi resmi PostGIS.",
      "D": "Salah. IntersectLines bukan nama fungsi PostGIS."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-048",
    "level": "intermediate",
    "topic": "pgRouting Network Topology",
    "questionType": "best-practice",
    "question": "Sebelum menjalankan algoritma rute tercepat Dijkstra di `pgRouting`, apa langkah wajib yang harus dilakukan pada tabel jaringan jalan?\n\n```sql\n// Mempersiapkan routing jaringan jalan:\n```",
    "code": "// Mempersiapkan routing jaringan jalan:",
    "options": {
      "A": "Membangun topologi jaringan menggunakan pgr_createTopology() untuk mengidentifikasi simpul source dan target pada setiap ruas jalan",
      "B": "Menghapus seluruh kolom nama jalan",
      "C": "Mengubah garis menjadi poligon",
      "D": "Mematikan fungsi GPS"
    },
    "answer": "A",
    "explanation": {
      "correct": "pgRouting bekerja pada struktur graf matematika yang terdiri dari simpul (nodes/vertices) dan sisi (edges). Fungsi `pgr_createTopology('roads', tolerance, 'geom', 'id')` menganalisis konektivitas fisik dan mengisi kolom `source` serta `target` pada tabel ruas jalan.",
      "A": "Benar. pgr_createTopology membangun struktur graf jaringan jalan yang wajib dimiliki pgRouting.",
      "B": "Salah. Nama jalan tidak mengganggu algoritma routing dan sangat berguna untuk turn-by-turn guidance.",
      "C": "Salah. Routing jaringan jalan membutuhkan garis (LineString), bukan poligon.",
      "D": "Salah. Fungsi GPS independen dari topologi jalan di database."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-049",
    "level": "intermediate",
    "topic": "Spatial API Rate Limiting",
    "questionType": "best-practice",
    "question": "Saat membangun public REST API yang mengeksekusi operasi spasial berat (seperti ST_Union atau isochrone polygon generation), bagaimana arsitektur perlindungan beban server terbaik?\n\n```javascript\n// Proteksi endpoint spasial berat:\n```",
    "code": "// Proteksi endpoint spasial berat:",
    "options": {
      "A": "Menerapkan Rate Limiting (Token Bucket / Redis) berdasarkan API Key/IP, membatasi ukuran BBOX maksimum yang diizinkan, dan meng-cache respon kueri",
      "B": "Mengizinkan request tak terbatas tanpa autentikasi",
      "C": "Menjalankan database tanpa password",
      "D": "Mematikan server saat malam hari"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operasi spasial CPU-intensive sangat rentan menjadi vektor serangan DoS (Denial of Service). Membatasi frekuensi request, membatasi kompleksitas parameter (luas BBOX maksimal), dan caching hasil perhitungan melindungi infrastruktur dari kelebihan beban.",
      "A": "Benar. Rate limiting, validasi batasan parameter, dan caching adalah pilar keamanan API geospasial.",
      "B": "Salah. Request tak terbatas berisiko melumpuhkan server dalam hitungan detik.",
      "C": "Salah. Keamanan database harus selalu diterapkan secara ketat.",
      "D": "Salah. Layanan web modern dituntut beroperasi 24/7/365."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-050",
    "level": "intermediate",
    "topic": "Spatial Data Clustering with H3",
    "questionType": "best-practice",
    "question": "Mengapa banyak perusahaan analitik transportasi (seperti Uber, Grab) memilih indeks Hexagonal H3 dibandingkan grid bujur sangkar (square grid) untuk agregasi data permintaan penumpang?\n\n```javascript\n// Keunggulan Hexagonal Grid H3 vs Square Grid:\n```",
    "code": "// Keunggulan Hexagonal Grid H3 vs Square Grid:",
    "options": {
      "A": "Semua 6 tetangga heksagon memiliki jarak pusat yang persis sama (invarian jarak), tidak seperti bujur sangkar di mana tetangga diagonal memiliki jarak lebih jauh (akar 2)",
      "B": "Heksagon menghasilkan file teks lebih kecil",
      "C": "Bujur sangkar dilarang oleh aturan matematika",
      "D": "Heksagon tidak bisa digambar di komputer"
    },
    "answer": "A",
    "explanation": {
      "correct": "Pada grid persegi, tetangga diagonal memiliki jarak ~1.414 kali lebih jauh daripada tetangga sisi. Pada grid heksagonal teratur, jarak dari pusat heksagon ke seluruh 6 pusat tetangganya adalah sama persis, menyederhanakan kalkulasi pergerakan dan difusi spasial.",
      "A": "Benar. Keidentikan jarak antar seluruh tetangga bersebelahan (invarian tetangga) adalah keunggulan geometris utama heksagon.",
      "B": "Salah. Format representasi H3 adalah integer 64-bit yang seragam.",
      "C": "Salah. Bujur sangkar adalah bentuk geometri sah, namun memiliki bias orientasi diagonal.",
      "D": "Salah. Heksagon dapat dirender dengan mudah di seluruh engine grafis web."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-051",
    "level": "intermediate",
    "topic": "Spatial SQL Joins Filtering Order",
    "questionType": "best-practice",
    "question": "Dalam menulis kueri spatial join yang melibatkan filter atribut numerik dan filter spasial, apa urutan terbaik untuk performa?\n\n```sql\nSELECT a.* FROM sensor_data a JOIN zones b ON ST_Intersects(a.geom, b.geom) WHERE a.status = \"ACTIVE\" AND a.created_at > NOW() - INTERVAL \"1 day\";\n```",
    "code": "SELECT a.* FROM sensor_data a JOIN zones b ON ST_Intersects(a.geom, b.geom) WHERE a.status = \"ACTIVE\" AND a.created_at > NOW() - INTERVAL \"1 day\";",
    "options": {
      "A": "Membiarkan query planner menggunakan filter atribut (status dan tanggal) terlebih dahulu untuk memangkas jumlah baris kandidat sebelum mengevaluasi perpotongan spasial ST_Intersects",
      "B": "Menghapus filter status dan tanggal",
      "C": "Mengubah tanggal menjadi string nama hari",
      "D": "Menjalankan query berulang kali"
    },
    "answer": "A",
    "explanation": {
      "correct": "Komputasi geometris `ST_Intersects` jauh lebih mahal CPU-nya daripada filter skalar integer/timestamp. Mengeliminasi data non-aktif terlebih dahulu memperkecil jumlah kalkulasi topologi yang harus dilakukan oleh engine database.",
      "A": "Benar. Filter skalar awal mereduksi volume data yang perlu diuji perpotongan spasialnya.",
      "B": "Salah. Menghapus filter menyebabkan komputasi spasial dieksekusi pada seluruh data historis yang tidak relevan.",
      "C": "Salah. Mengubah menjadi nama hari merusak indeks range waktu.",
      "D": "Salah. Eksekusi berulang tidak mengubah efisiensi rencana kueri."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-052",
    "level": "intermediate",
    "topic": "GeoJSON Serialization Memory in Node.js",
    "questionType": "best-practice",
    "question": "Ketika backend Node.js perlu mengalirkan (stream) dataset GeoJSON 500 MB ke klien, mengapa TIDAK boleh menggunakan `JSON.stringify()` pada seluruh objek di memori sekaligus?\n\n```javascript\n// Streaming dataset GeoJSON raksasa di backend:\n```",
    "code": "// Streaming dataset GeoJSON raksasa di backend:",
    "options": {
      "A": "Membuat string JSON 500 MB di memori akan melampaui batas heap string V8 (~512MB-1GB) dan menyebabkan 'JavaScript heap out of memory' crash; gunakan stream transformer (seperti JSONStream / geojson-stream)",
      "B": "JSON.stringify hanya bisa memproses 10 baris data",
      "C": "Browser tidak bisa menerima file lebih dari 1 KB",
      "D": "Node.js dilarang mengirim data spasial"
    },
    "answer": "A",
    "explanation": {
      "correct": "Node.js V8 engine memiliki batas alokasi string tunggal di memori heap. Membangun string JSON raksasa sekaligus memicu alokasi memori berlipat ganda yang mematikan proses server. Streaming mengirim data per fitur secara berkesinambungan tanpa menumpuk di memori.",
      "A": "Benar. Streaming memproses dan mengirim data secara berkesinambungan dengan konsumsi memori konstan.",
      "B": "Salah. JSON.stringify dapat memproses ribuan objek kecil, namun crash jika total representasi string melampaui batas heap.",
      "C": "Salah. Browser modern mampu mengunduh file besar secara streaming.",
      "D": "Salah. Node.js adalah backend yang sangat populer untuk geospasial stream processing."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-053",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "questionType": "concept",
    "question": "Dalam konfigurasi Docker Compose untuk Web GIS, parameter 'volumes' pada service PostGIS/PostgreSQL digunakan untuk:",
    "options": {
      "A": "Memastikan data basis data spasial tetap tersimpan secara persisten di storage host meskipun container di-restart atau di-recreate",
      "B": "Mengatur volume suara notifikasi pada container",
      "C": "Membatasi kecepatan koneksi internet",
      "D": "Menggandakan kapasitas RAM secara otomatis"
    },
    "answer": "A",
    "explanation": {
      "correct": "Secara default layer container bersifat ephemeral (hilang jika container dihapus). Persistent volume memetakan direktori data (/var/lib/postgresql/data) ke host agar data database aman.",
      "A": "Opsi A benar sesuai fungsi volume Docker untuk persistensi data.",
      "B": "Opsi B salah karena volume Docker bukan volume audio hardware.",
      "C": "Opsi C salah karena bukan bandwidth limiter.",
      "D": "Opsi D salah karena volume adalah media penyimpanan disk."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-054",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "questionType": "concept",
    "question": "Ketika frontend React Web GIS mengakses layer GeoServer pada domain berbeda dan diblokir browser karena Cross-Origin Resource Sharing (CORS), di manakah perbaikan yang tepat harus dilakukan?",
    "options": {
      "A": "Mengaktifkan CorsFilter pada file web.xml di server GeoServer atau menambahkan proxy header pada reverse proxy Nginx",
      "B": "Mematikan koneksi internet pengguna",
      "C": "Menghapus aplikasi React dan menggantinya dengan PHP murni",
      "D": "Menginstal ulang sistem operasi server"
    },
    "answer": "A",
    "explanation": {
      "correct": "CORS adalah proteksi browser. Server tujuan (GeoServer atau reverse proxy Nginx) harus merespon dengan header HTTP 'Access-Control-Allow-Origin: *' agar browser mengizinkan pemuatan resource.",
      "A": "Opsi A benar sesuai solusi konfigurasi standar CORS pada Web GIS.",
      "B": "Opsi B salah karena tidak menyelesaikan masalah integrasi web.",
      "C": "Opsi C salah karena masalah CORS tetap muncul pada komunikasi lintas origin apa pun.",
      "D": "Opsi D salah karena masalah ada pada level konfigurasi HTTP application layer."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-055",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Query PostGIS manakah yang digunakan untuk menggabungkan banyak baris geometri titik menjadi satu baris MultiPoint?",
    "options": {
      "A": "SELECT ST_Collect(geom) FROM points_table;",
      "B": "SELECT ST_UnionAll(geom) FROM points_table;",
      "C": "SELECT ST_Merge(geom) FROM points_table;",
      "D": "SELECT ST_Group(geom) FROM points_table;"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Collect adalah fungsi agregat spasial cepat yang mengelompokkan sekumpulan geometri menjadi satu Multi-geometri atau GeometryCollection tanpa komputasi dissolve yang berat.",
      "A": "Opsi A benar sesuai fungsi agregasi geometri PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena ST_LineMerge untuk garis.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-056",
    "level": "intermediate",
    "topic": "Citra Satelit & Radar",
    "questionType": "concept",
    "question": "Satelit Landsat 8 dan 9 memiliki dua sensor utama di dalamnya, yaitu:",
    "options": {
      "A": "OLI (Operational Land Imager) dan TIRS (Thermal Infrared Sensor)",
      "B": "MSI dan SAR",
      "C": "MODIS dan AVHRR",
      "D": "IKONOS dan QuickBird"
    },
    "answer": "A",
    "explanation": {
      "correct": "Landsat 8 dan 9 membawa instrumen OLI untuk band tampak, NIR, dan SWIR (9 band reflektansi) serta TIRS untuk band termal inframerah (2 band termal).",
      "A": "Opsi A benar sesuai muatan sensor satelit Landsat 8/9 USGS/NASA.",
      "B": "Opsi B salah karena MSI milik Sentinel-2 dan SAR milik Sentinel-1.",
      "C": "Opsi C salah karena MODIS milik Terra/Aqua dan AVHRR milik satelit NOAA.",
      "D": "Opsi D salah karena IKONOS dan QuickBird adalah satelit komersial resolusi tinggi masa lalu."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-057",
    "level": "intermediate",
    "topic": "Indeks Spektral",
    "questionType": "concept",
    "question": "Indeks MNDWI (Modified Normalized Difference Water Index) menurut Xu (2006) menggunakan kombinasi band spektral:",
    "options": {
      "A": "(Green - SWIR) / (Green + SWIR)",
      "B": "(Green - NIR) / (Green + NIR)",
      "C": "(Red - SWIR) / (Red + SWIR)",
      "D": "(Blue - NIR) / (Blue + NIR)"
    },
    "answer": "A",
    "explanation": {
      "correct": "MNDWI mengganti band NIR dengan SWIR: (Green - SWIR) / (Green + SWIR) untuk menekan noise spektral dari bangunan dan lahan terbangun perkotaan.",
      "A": "Opsi A benar sesuai formulasi Xu (2006).",
      "B": "Opsi B salah karena ini adalah formula NDWI konvensional McFeeters.",
      "C": "Opsi C salah karena bukan formulasi MNDWI.",
      "D": "Opsi D salah karena bukan kombinasi band indeks air."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-058",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "questionType": "concept",
    "question": "Perbedaan utama antara Digital Surface Model (DSM) dan Digital Terrain Model (DTM) adalah:",
    "options": {
      "A": "DSM mencakup seluruh objek di atas tanah seperti pohon dan bangunan, sedangkan DTM hanya mewakili permukaan tanah telanjang (bare earth)",
      "B": "DSM hanya berupa peta 2D sedangkan DTM berupa peta 3D",
      "C": "DTM hanya berisi kedalaman air laut",
      "D": "DSM tidak memiliki informasi elevasi"
    },
    "answer": "A",
    "explanation": {
      "correct": "DSM merepresentasikan permukaan tertinggi pertama yang dipantulkan, sedangkan DTM mengekstrak permukaan tanah setelah menghilangkan objek di atasnya.",
      "A": "Opsi A benar sesuai klasifikasi standar elevasi digital fotogrametri/LiDAR.",
      "B": "Opsi B salah karena keduanya adalah model raster elevasi bernilai Z.",
      "C": "Opsi C salah karena DTM daratan memodelkan topografi bumi.",
      "D": "Opsi D salah karena DSM adalah model elevasi permukaan."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-059",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "questionType": "concept",
    "question": "Mengapa proyeksi Web Mercator (EPSG:3857) mengalami distorsi luas yang sangat besar pada daerah dekat kutub?",
    "options": {
      "A": "Karena mempertahankan bentuk sudut lokal (konformal) dengan meregangkan jarak lintang secara matematis seiring bertambahnya jarak dari khatulistiwa",
      "B": "Karena satelit tidak dapat terbang di atas kutub",
      "C": "Karena bumi berbentuk datar di bagian kutub",
      "D": "Karena kesalahan pemrograman software"
    },
    "answer": "A",
    "explanation": {
      "correct": "Proyeksi silinder konformal Mercator meregangkan garis bujur dan lintang dengan rasio 1/cos(lat) sehingga bentuk pulau lokal tetap proporsional namun luas area membengkak tak terbatas di kutub.",
      "A": "Opsi A benar sesuai sifat matematis proyeksi Mercator.",
      "B": "Opsi B salah karena banyak satelit beroperasi pada orbit polar melintasi kutub.",
      "C": "Opsi C salah karena pemampatan kutub hanya ~1/298 (sangat kecil).",
      "D": "Opsi D salah karena distorsi matematis adalah konsekuensi memproyeksikan bola ke bidang datar."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-060",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "questionType": "concept",
    "question": "Perintah OGR manakah yang digunakan untuk mengonversi layer Shapefile ke file GeoPackage (.gpkg)?",
    "options": {
      "A": "ogr2ogr -f \"GPKG\" output.gpkg input.shp",
      "B": "gdal_translate -f \"GPKG\" output.gpkg input.shp",
      "C": "ogrinfo -f \"GPKG\" output.gpkg input.shp",
      "D": "gdalwarp -f \"GPKG\" output.gpkg input.shp"
    },
    "answer": "A",
    "explanation": {
      "correct": "ogr2ogr dengan opsi -f \"GPKG\" membuat atau menambahkan layer vektor ke dalam berkas basis data standar OGC GeoPackage.",
      "A": "Opsi A benar sesuai sintaks resmi utilitas ogr2ogr.",
      "B": "Opsi B salah karena gdal_translate untuk data raster.",
      "C": "Opsi C salah karena ogrinfo hanya utilitas inspeksi metadata.",
      "D": "Opsi D salah karena gdalwarp untuk transformasi raster."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-061",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menyederhanakan geometri poligon yang terlalu rumit menggunakan algoritma Douglas-Peucker?",
    "options": {
      "A": "ST_Simplify(geom, tolerance)",
      "B": "ST_Smooth(geom)",
      "C": "ST_Shrink(geom)",
      "D": "ST_Generalize(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Simplify mereduksi jumlah vertex geometri dengan algoritma Douglas-Peucker berdasarkan nilai batas toleransi jarak spasial.",
      "A": "Opsi A benar sesuai fungsi PostGIS ST_Simplify.",
      "B": "Opsi B salah karena bukan fungsi penyederhanaan vertex standar PostGIS.",
      "C": "Opsi C salah karena bukan nama fungsi PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-062",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk membuat zona penyangga (buffer) selebar radius tertentu di sekeliling geometri?",
    "options": {
      "A": "ST_Buffer(geom, radius)",
      "B": "ST_Expand(geom, radius)",
      "C": "ST_Offset(geom, radius)",
      "D": "ST_Padding(geom, radius)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Buffer mengembalikan geometri poligon baru yang merepresentasikan seluruh titik dalam jarak radius tertentu dari geometri asal.",
      "A": "Opsi A benar sesuai dokumentasi PostGIS ST_Buffer.",
      "B": "Opsi B salah karena ST_Expand menghasilkan bounding box kotak, bukan lingkaran buffer sebenarnya.",
      "C": "Opsi C salah karena ST_OffsetCurve untuk garis offset satu sisi.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-063",
    "level": "intermediate",
    "topic": "Web Mapping",
    "questionType": "concept",
    "question": "Pada OpenLayers, kelas kontrol bawaan apakah yang digunakan untuk menampilkan peta skala batang (scale bar) di atas viewport peta?",
    "options": {
      "A": "ol.control.ScaleLine",
      "B": "ol.control.ZoomSlider",
      "C": "ol.control.OverviewMap",
      "D": "ol.control.FullScreen"
    },
    "answer": "A",
    "explanation": {
      "correct": "ol.control.ScaleLine menambahkan indikator skala garis kartografis yang dinamis mengikuti tingkat zoom dan proyeksi peta.",
      "A": "Opsi A benar sesuai API resmi OpenLayers Controls.",
      "B": "Opsi B salah karena ZoomSlider adalah batang slider tingkat zoom.",
      "C": "Opsi C salah karena OverviewMap adalah jendela peta inset mini.",
      "D": "Opsi D salah karena FullScreen adalah tombol layar penuh."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-064",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "questionType": "concept",
    "question": "Standar OGC apakah yang mengatur spesifikasi pemotongan dan penyajian layer peta gambar dalam bentuk tile berukuran tetap (misal 256x256 piksel) dengan piramida resolusi?",
    "options": {
      "A": "WMTS (Web Map Tile Service)",
      "B": "WFS",
      "C": "WCS",
      "D": "WPS"
    },
    "answer": "A",
    "explanation": {
      "correct": "WMTS mendefinisikan tile matrix sets standar untuk menyajikan citra peta terpotong-potong sehingga sangat ramah caching proxy.",
      "A": "Opsi A benar sesuai spesifikasi OGC WMTS.",
      "B": "Opsi B salah karena WFS menyajikan data fitur vektor.",
      "C": "Opsi C salah karena WCS menyajikan coverage raster mentah.",
      "D": "Opsi D salah karena WPS mengeksekusi processing geospasial."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-065",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "questionType": "concept",
    "question": "Pustaka JavaScript populer manakah yang dapat digunakan bersama Leaflet untuk melakukan klasterisasi titik (marker clustering) saat menampilkan ribuan titik sekaligus?",
    "options": {
      "A": "Leaflet.markercluster",
      "B": "Leaflet.draw",
      "C": "Leaflet.heat",
      "D": "Leaflet.fullscreen"
    },
    "answer": "A",
    "explanation": {
      "correct": "Plugin Leaflet.markercluster mengelompokkan ribuan marker berdekatan menjadi satu icon klaster dinamis untuk menjaga performa rendering browser.",
      "A": "Opsi A benar sesuai plugin ekosistem Leaflet.",
      "B": "Opsi B salah karena Leaflet.draw untuk menggambar geometri vektor di peta.",
      "C": "Opsi C salah karena Leaflet.heat untuk membuat heatmap kerapatan visual.",
      "D": "Opsi D salah karena Leaflet.fullscreen untuk kontrol tombol layar penuh."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-066",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "questionType": "concept",
    "question": "Dalam Google Earth Engine (GEE), objek manakah yang merepresentasikan kumpulan deret waktu banyak citra satelit (seperti seluruh rekaman Landsat 8 selama setahun)?",
    "options": {
      "A": "ee.ImageCollection",
      "B": "ee.Image",
      "C": "ee.FeatureCollection",
      "D": "ee.Geometry"
    },
    "answer": "A",
    "explanation": {
      "correct": "ee.ImageCollection adalah struktur data utama GEE untuk mengelola sekumpulan citra multi-temporal atau multi-sensor.",
      "A": "Opsi A benar sesuai model objek Google Earth Engine.",
      "B": "Opsi B salah karena ee.Image mewakili satu citra raster tunggal.",
      "C": "Opsi C salah karena ee.FeatureCollection adalah kumpulan data vektor.",
      "D": "Opsi D salah karena ee.Geometry adalah bentuk spasial vektor primitif."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-067",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "questionType": "concept",
    "question": "Mengapa Nginx sering dipasang sebagai Reverse Proxy di depan GeoServer dalam arsitektur Web GIS produksi?",
    "options": {
      "A": "Untuk menangani SSL/TLS termination, kompresi GZIP, pembatasan akses (rate limiting), dan load balancing ke beberapa instance GeoServer",
      "B": "Karena GeoServer tidak dapat berjalan di sistem operasi Linux tanpa Nginx",
      "C": "Untuk mengubah file raster GeoTIFF menjadi file teks",
      "D": "Untuk menghapus database PostGIS setiap malam"
    },
    "answer": "A",
    "explanation": {
      "correct": "Nginx bertindak sebagai gerbang terdepan yang sangat efisien dalam menangani koneksi konkurensi tinggi, caching statis, enkripsi SSL, dan perlindungan keamanan backend.",
      "A": "Opsi A benar sesuai arsitektur produksi web geospasial.",
      "B": "Opsi B salah karena GeoServer dapat berjalan mandiri di atas JVM.",
      "C": "Opsi C salah karena Nginx adalah web server/reverse proxy umum.",
      "D": "Opsi D salah karena Nginx tidak berurusan dengan lifecycle data database."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-068",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengembalikan titik awal (start point) dari sebuah LineString?",
    "options": {
      "A": "ST_StartPoint(geom)",
      "B": "ST_EndPoint(geom)",
      "C": "ST_FirstNode(geom)",
      "D": "ST_OriginPoint(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_StartPoint mengembalikan Point pertama yang menjadi simpul awal dari LineString.",
      "A": "Opsi A benar sesuai fungsi geometri linier PostGIS.",
      "B": "Opsi B salah karena ST_EndPoint mengembalikan titik simpul akhir garis.",
      "C": "Opsi C salah karena bukan nama fungsi PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-069",
    "level": "intermediate",
    "topic": "Citra Satelit & Radar",
    "questionType": "concept",
    "question": "Berapakah periode ulang (temporal resolution) dari satu satelit Sentinel-2 secara individual di atas ekuator?",
    "options": {
      "A": "10 hari (dan menjadi 5 hari jika kedua satelit Sentinel-2A dan 2B beroperasi bersama)",
      "B": "1 hari",
      "C": "16 hari",
      "D": "30 hari"
    },
    "answer": "A",
    "explanation": {
      "correct": "Satelit Sentinel-2A atau 2B secara mandiri memiliki siklus orbit 10 hari. Karena kedua satelit berada pada orbit yang sama dengan selisih fase 180°, periode ulang konstelasi menjadi 5 hari.",
      "A": "Opsi A benar sesuai karakteristik orbit konstelasi Sentinel-2 ESA.",
      "B": "Opsi B salah karena 1 hari adalah karakteristik satelit cuaca geostasioner atau sensor kasar MODIS.",
      "C": "Opsi C salah karena 16 hari adalah siklus orbit Landsat 8/9.",
      "D": "Opsi D salah karena 30 hari terlalu lambat untuk misi Sentinel."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-070",
    "level": "intermediate",
    "topic": "Indeks Spektral",
    "questionType": "concept",
    "question": "Dalam formula kalkulasi SAVI (Soil Adjusted Vegetation Index), berapakah nilai standar parameter konstanta L yang umum digunakan untuk kondisi vegetasi dengan kerapatan sedang?",
    "options": {
      "A": "0.5",
      "B": "0.0",
      "C": "1.0",
      "D": "10.0"
    },
    "answer": "A",
    "explanation": {
      "correct": "Huete (1988) menetapkan L = 0.5 sebagai nilai penyesuaian optimal untuk mereduksi efek latar belakang kecerahan tanah pada vegetasi dengan kanopi sedang.",
      "A": "Opsi A benar sesuai formulasi standar SAVI.",
      "B": "Opsi B salah karena jika L = 0, SAVI akan menjadi identik dengan NDVI biasa.",
      "C": "Opsi C salah karena L = 1.0 digunakan hanya untuk vegetasi sangat jarang.",
      "D": "Opsi D salah karena nilai konstanta L berada dalam rentang [0, 1]."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-071",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "questionType": "concept",
    "question": "Dalam survei drone, apa fungsi utama dari Check Point (CP) independen?",
    "options": {
      "A": "Menguji dan memvalidasi akurasi absolut model 3D/orthophoto secara objektif tanpa diikutsertakan dalam kalkulasi bundle adjustment",
      "B": "Mengatur titik pendaratan darurat drone",
      "C": "Mengisi daya baterai remote controller",
      "D": "Menghitung kecepatan putaran baling-baling"
    },
    "answer": "A",
    "explanation": {
      "correct": "Check Point adalah titik koordinat terestrial yang sengaja disisihkan dari proses georeferensi untuk menghitung nilai Root Mean Square Error (RMSE) yang valid dan tidak bias.",
      "A": "Opsi A benar sesuai standar kontrol kualitas survei fotogrametri ASPRS.",
      "B": "Opsi B salah karena titik pendaratan ditentukan oleh flight home point.",
      "C": "Opsi C salah karena bukan peralatan charging.",
      "D": "Opsi D salah karena bukan sensor telemetri motor."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-072",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "questionType": "concept",
    "question": "Berapakah nilai False Easting yang diterapkan pada Central Meridian setiap zona proyeksi UTM?",
    "options": {
      "A": "500.000 meter",
      "B": "10.000.000 meter",
      "C": "0 meter",
      "D": "100.000 meter"
    },
    "answer": "A",
    "explanation": {
      "correct": "False Easting sebesar 500.000 meter ditetapkan pada meridian sentral zona UTM untuk menjamin seluruh nilai koordinat X (Easting) di dalam zona bernilai positif.",
      "A": "Opsi A benar sesuai standar sistem proyeksi UTM.",
      "B": "Opsi B salah karena 10.000.000 meter adalah False Northing di Belahan Selatan.",
      "C": "Opsi C salah karena tanpa false easting nilai X di barat meridian akan bernilai negatif.",
      "D": "Opsi D salah karena bukan konstanta UTM standar."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-073",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "questionType": "concept",
    "question": "Perintah GDAL manakah yang digunakan untuk membuat overviews (piramida resolusi) pada file GeoTIFF untuk mempercepat tampilan rendering zoom-out?",
    "options": {
      "A": "gdaladdo -r average input.tif 2 4 8 16 32",
      "B": "gdalwarp -overviews input.tif",
      "C": "gdal_translate -pyramid input.tif",
      "D": "ogr2ogr -overview input.tif"
    },
    "answer": "A",
    "explanation": {
      "correct": "gdaladdo (GDAL Add Overviews) menghasilkan level piramida resolusi tereduksi (2, 4, 8, dst) dengan metode resampling tertentu (seperti average atau nearest).",
      "A": "Opsi A benar sesuai utilitas resmi gdaladdo.",
      "B": "Opsi B salah karena gdalwarp tidak digunakan khusus membuat piramida overviews eksternal/internal.",
      "C": "Opsi C salah karena opsi -pyramid bukan argumen gdal_translate.",
      "D": "Opsi D salah karena ogr2ogr untuk data vektor."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-074",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Operator PostGIS apakah yang digunakan pada klausa WHERE untuk memeriksa apakah bounding box dua geometri saling tumpang tindih menggunakan spatial index GiST?",
    "options": {
      "A": "&&",
      "B": "==",
      "C": "||",
      "D": "<>"
    },
    "answer": "A",
    "explanation": {
      "correct": "Operator '&&' adalah operator bounding box overlap yang langsung mengevaluasi indeks spasial GiST di PostGIS.",
      "A": "Opsi A benar sesuai dokumentasi operator spasial PostGIS.",
      "B": "Opsi B salah karena == adalah perbandingan kesamaan nilai di bahasa pemrograman lain.",
      "C": "Opsi C salah karena || adalah operator konkatenasi string SQL.",
      "D": "Opsi D salah karena <> adalah operator ketidaksamaan nilai."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-075",
    "level": "intermediate",
    "topic": "Web Mapping",
    "questionType": "concept",
    "question": "Format file XML berbasis OGC apakah yang digunakan untuk mengatur pewarnaan, ketebalan garis, dan simbol kartografi layer di GeoServer?",
    "options": {
      "A": "SLD (Styled Layer Descriptor)",
      "B": "KML",
      "C": "SVG",
      "D": "HTML"
    },
    "answer": "A",
    "explanation": {
      "correct": "SLD adalah standar OGC XML yang mendefinisikan aturan visualisasi dan simbologi kartografi layer peta di GeoServer dan MapServer.",
      "A": "Opsi A benar sesuai standar OGC SLD.",
      "B": "Opsi B salah karena KML adalah format data pertukaran spasial Google Earth.",
      "C": "Opsi C salah karena SVG adalah format grafis vektor web umum.",
      "D": "Opsi D salah karena HTML adalah bahasa markup struktur halaman web."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-076",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "questionType": "concept",
    "question": "Dalam spesifikasi RFC 7946 GeoJSON, manakah di antara pilihan berikut yang BUKAN merupakan tipe geometri standar?",
    "options": {
      "A": "Circle",
      "B": "Point",
      "C": "LineString",
      "D": "Polygon"
    },
    "answer": "A",
    "explanation": {
      "correct": "Spesifikasi resmi GeoJSON RFC 7946 hanya mengakui 7 tipe: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, dan GeometryCollection. Tipe 'Circle' tidak ada dalam standar GeoJSON murni.",
      "A": "Opsi A benar karena Circle bukan geometri standar RFC 7946 (lingkaran harus didekati dengan Polygon bersegi banyak).",
      "B": "Opsi B salah karena Point adalah tipe standar resmi.",
      "C": "Opsi C salah karena LineString adalah tipe standar resmi.",
      "D": "Opsi D salah karena Polygon adalah tipe standar resmi."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-077",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "questionType": "concept",
    "question": "Library Python rasterio membaca jendela potongan spasial tertentu dari file GeoTIFF tanpa memuat seluruh citra ke memori menggunakan konsep:",
    "options": {
      "A": "Windowed reading (rasterio.windows.Window)",
      "B": "Full buffer loading",
      "C": "Screen scraping",
      "D": "Thread sleeping"
    },
    "answer": "A",
    "explanation": {
      "correct": "Windowed read pada rasterio mengekstrak subset piksel tertentu (col_off, row_off, width, height) langsung dari file yang ter-tile secara efisien.",
      "A": "Opsi A benar sesuai dokumentasi resmi rasterio Windowed Reading.",
      "B": "Opsi B salah karena full loading memuat seluruh array ke RAM.",
      "C": "Opsi C salah karena screen scraping untuk scraping HTML web.",
      "D": "Opsi D salah karena bukan teknik optimasi I/O geospasial."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-078",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
    "questionType": "concept",
    "question": "Dalam Nginx, direktif apakah yang digunakan untuk mengaktifkan kompresi teks pada respons file GeoJSON dan SVG?",
    "options": {
      "A": "gzip on; gzip_types application/json application/geo+json image/svg+xml;",
      "B": "zip enable all;",
      "C": "compress active true;",
      "D": "tar cvf on;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Direktif Nginx 'gzip on;' bersama 'gzip_types' mengaktifkan kompresi on-the-fly untuk tipe MIME teks geospasial, memangkas transfer data hingga 80%.",
      "A": "Opsi A benar sesuai konfigurasi resmi modul gzip Nginx.",
      "B": "Opsi B salah karena bukan sintaks Nginx yang valid.",
      "C": "Opsi C salah karena bukan sintaks Nginx.",
      "D": "Opsi D salah karena tar adalah perintah arsip baris perintah Linux."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-079",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengembalikan representasi Well-Known Text (WKT) dari kolom geometri?",
    "options": {
      "A": "ST_AsText(geom)",
      "B": "ST_ToText(geom)",
      "C": "ST_Text(geom)",
      "D": "ST_WKT(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_AsText (atau ST_AsWKT) mengonversi format binary geometri internal PostGIS menjadi string standar OGC Well-Known Text (misal 'POINT(106.8 -6.2)').",
      "A": "Opsi A benar sesuai dokumentasi resmi PostGIS.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-080",
    "level": "intermediate",
    "topic": "Citra Satelit & Radar",
    "questionType": "concept",
    "question": "Sensor radar satelit Sentinel-1 beroperasi pada pita frekuensi microwave apakah?",
    "options": {
      "A": "C-band (panjang gelombang ~5.6 cm)",
      "B": "L-band (panjang gelombang ~23 cm)",
      "C": "X-band (panjang gelombang ~3 cm)",
      "D": "Ku-band (panjang gelombang ~2 cm)"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sentinel-1 mengusung instrumen C-band SAR dengan frekuensi sentral 5.405 GHz (panjang gelombang sekitar 5.6 cm).",
      "A": "Opsi A benar sesuai spesifikasi instrumen SAR Sentinel-1.",
      "B": "Opsi B salah karena L-band digunakan oleh satelit ALOS-2 PALSAR.",
      "C": "Opsi C salah karena X-band digunakan oleh satelit TerraSAR-X dan COSMO-SkyMed.",
      "D": "Opsi D salah karena Ku-band umum digunakan untuk altimetri radar presisi tinggi."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-081",
    "level": "advanced",
    "topic": "Spatial Clustering PostGIS",
    "questionType": "output",
    "question": "Apa arti nilai parameter `eps` pada fungsi `ST_ClusterDBSCAN(geom, eps, minpoints)`?\n\n```sql\nSELECT ST_ClusterDBSCAN(geom, eps := 50, minpoints := 3) OVER () FROM points;\n```",
    "code": "SELECT ST_ClusterDBSCAN(geom, eps := 50, minpoints := 3) OVER () FROM points;",
    "options": {
      "A": "Jarak radius pencarian maksimum (epsilon) untuk menghubungkan dua geometri menjadi satu kluster",
      "B": "Jumlah maksimal kluster yang boleh dibuat",
      "C": "Tingkat error toleransi kompresi",
      "D": "Jumlah core CPU yang digunakan"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dalam algoritma DBSCAN, `eps` (epsilon) mendefinisikan radius ketetanggaan maksimum. Jika jarak antara dua titik <= eps, kedua titik dianggap berada dalam lingkungan yang sama.",
      "A": "Benar. eps adalah radius jarak ambang batas ketetanggaan pada DBSCAN.",
      "B": "Salah. Jumlah kluster pada DBSCAN ditentukan secara dinamis oleh kepadatan data, bukan dibatasi angka eps.",
      "C": "Salah. eps bukan rasio kompresi error.",
      "D": "Salah. eps adalah parameter matematis spasial, bukan konfigurasi CPU hardware."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-082",
    "level": "advanced",
    "topic": "Vector Tile MVT Extent",
    "questionType": "output",
    "question": "Berapa koordinat resolusi grid internal (extent) default yang digunakan oleh `ST_AsMVTGeom` untuk setiap tile?\n\n```sql\nSELECT ST_AsMVTGeom(geom, ST_TileEnvelope(z, x, y)); -- Berapa default extent?\n```",
    "code": "SELECT ST_AsMVTGeom(geom, ST_TileEnvelope(z, x, y)); -- Berapa default extent?",
    "options": {
      "A": "4096 x 4096 unit",
      "B": "256 x 256 unit",
      "C": "100 x 100 unit",
      "D": "512 x 512 unit"
    },
    "answer": "A",
    "explanation": {
      "correct": "Standar spesifikasi Mapbox Vector Tile (MVT) secara default menggunakan grid integer 4096 x 4096 unit per tile. Hal ini memungkinkan presisi sub-piksel yang sangat tinggi saat tile dirender pada layar retina/high-DPI.",
      "A": "Benar. Default extent MVT di PostGIS adalah 4096 unit.",
      "B": "Salah. 256 piksel adalah ukuran raster tile lama, bukan grid resolusi koordinat internal MVT.",
      "C": "Salah. 100 unit terlalu rendah untuk presisi rendering vektor.",
      "D": "Salah. 512 adalah ukuran kanvas tile umum, tetapi extent vektor internal tetap 4096."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-083",
    "level": "advanced",
    "topic": "PostGIS Raster Map Algebra",
    "questionType": "output",
    "question": "Fungsi apakah di PostGIS Raster yang mengeksekusi ekspresi matematika antar-band piksel (misal menghitung indeks vegetasi NDVI = (NIR - RED) / (NIR + RED))?\n\n```sql\nSELECT ST_MapAlgebra(rast, 1, rast, 2, '([rast1] - [rast2]) / ([rast1] + [rast2])::float') FROM landsat_scene;\n```",
    "code": "SELECT ST_MapAlgebra(rast, 1, rast, 2, '([rast1] - [rast2]) / ([rast1] + [rast2])::float') FROM landsat_scene;",
    "options": {
      "A": "ST_MapAlgebra",
      "B": "ST_PixelCalc",
      "C": "ST_BandMath",
      "D": "ST_RasterCompute"
    },
    "answer": "A",
    "explanation": {
      "correct": "`ST_MapAlgebra` mengeksekusi operasi aljabar peta kustom pada satu atau dua raster band di level sel/piksel, sangat esensial untuk penginderaan jauh seperti NDVI, NDBI, dan penajaman citra.",
      "A": "Benar. ST_MapAlgebra adalah fungsi inti kalkulasi aljabar sel piksel raster di PostGIS.",
      "B": "Salah. ST_PixelCalc bukan nama fungsi PostGIS Raster.",
      "C": "Salah. ST_BandMath bukan fungsi bawaan PostGIS.",
      "D": "Salah. ST_RasterCompute bukan fungsi resmi."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-084",
    "level": "advanced",
    "topic": "PostGIS Topology Exception on ST_Difference",
    "questionType": "debug",
    "question": "Kueri ST_Difference melempar 'TopologyException: side location conflict' saat memproses perbatasan poligon presisi tinggi. Bagaimana cara menstabilkan kalkulasi topologinya?\n\n```sql\nSELECT ST_Difference(a.geom, b.geom) FROM high_res_parcels a, zones b;\n```",
    "code": "SELECT ST_Difference(a.geom, b.geom) FROM high_res_parcels a, zones b;",
    "options": {
      "A": "Menyelaraskan kedua geometri dengan ST_Snap atau menyederhanakan presisi koordinat dengan ST_SnapToGrid sebelum operasi pengurangan",
      "B": "Menghapus database PostgreSQL",
      "C": "Mengganti tipe data geom menjadi JSON",
      "D": "Mengurangi RAM server"
    },
    "answer": "A",
    "explanation": {
      "correct": "Side location conflict terjadi ketika vertex dua geometri hampir berhimpit tetapi memiliki selisih floating-point mikroskopis (epsilon drift) yang membingungkan engine GEOS. `ST_Snap` atau `ST_SnapToGrid` mengeliminasi sliver mikroskopis ini dan menstabilkan operasi topologi.",
      "A": "Benar. ST_Snap / ST_SnapToGrid menyelaraskan simpul dan mencegah konflik lokasi GEOS.",
      "B": "Salah. Menghapus database bukan solusi pemecahan masalah.",
      "C": "Salah. Tipe JSON tidak mendukung kalkulasi operasi topologi spasial.",
      "D": "Salah. Mengurangi RAM justru memperburuk performa server."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-085",
    "level": "advanced",
    "topic": "Vector Tile Server Compression Header",
    "questionType": "debug",
    "question": "Browser menolak merender tile MVT dari server custom dengan pesan error 'Failed to parse vector tile: unhandled protobuf type'. Di mana letak kesalahan header HTTP response server backend?\n\n```javascript\n// HTTP Response Headers dari backend MVT tile server:\n```",
    "code": "// HTTP Response Headers dari backend MVT tile server:",
    "options": {
      "A": "Tile dikompresi dengan Gzip di server tetapi response header kekurangan 'Content-Encoding: gzip', sehingga browser memperlakukan data biner gzip mentah sebagai protobuf rusak",
      "B": "Header Content-Type harus diisi text/html",
      "C": "Port server harus selalu port 80",
      "D": "Browser tidak mendukung file biner"
    },
    "answer": "A",
    "explanation": {
      "correct": "Vector Tiles `.pbf` umumnya di-gzip di sisi server untuk menghemat ukuran transfer. Jika header `Content-Encoding: gzip` lupa dikirim, browser tidak akan mendekompresi payload tersebut terlebih dahulu dan library WebGL akan gagal mem-parse header biner Protocol Buffers.",
      "A": "Benar. Header Content-Encoding: gzip wajib disertakan agar browser mendekompresi stream sebelum di-parse WebGL.",
      "B": "Salah. Content-Type untuk MVT adalah application/vnd.mapbox-vector-tile atau application/x-protobuf.",
      "C": "Salah. Port server bebas dikonfigurasi.",
      "D": "Salah. Browser modern memproses file biner ArrayBuffer secara native."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-086",
    "level": "advanced",
    "topic": "MapLibre 3D Building Extrusion",
    "questionType": "completion",
    "question": "Lengkapi tipe layer MapLibre GL berikut untuk mengekstrusi poligon tapak bangunan menjadi gedung 3D:\n\n```javascript\nmap.addLayer({\n  id: \"3d-buildings\",\n  type: \"____\",\n  source: \"openmaptiles\",\n  \"source-layer\": \"building\",\n  paint: {\n    \"fill-extrusion-color\": \"#aaa\",\n    \"fill-extrusion-height\": [\"get\", \"render_height\"]\n  }\n});\n```",
    "code": "map.addLayer({\n  id: \"3d-buildings\",\n  type: \"____\",\n  source: \"openmaptiles\",\n  \"source-layer\": \"building\",\n  paint: {\n    \"fill-extrusion-color\": \"#aaa\",\n    \"fill-extrusion-height\": [\"get\", \"render_height\"]\n  }\n});",
    "options": {
      "A": "fill-extrusion",
      "B": "polygon-3d",
      "C": "mesh",
      "D": "building-mesh"
    },
    "answer": "A",
    "explanation": {
      "correct": "Tipe layer resmi di MapLibre / Mapbox GL untuk visualisasi poligon dengan ketinggian 3D (ekstrusi) adalah `fill-extrusion`.",
      "A": "Benar. fill-extrusion adalah tipe layer resmi MapLibre untuk bentuk 3D.",
      "B": "Salah. polygon-3d bukan tipe layer yang valid di MapLibre style spec.",
      "C": "Salah. mesh bukan nama tipe layer bawaan MapLibre.",
      "D": "Salah. building-mesh bukan layer type resmi."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-087",
    "level": "advanced",
    "topic": "Realtime Geofencing Engine Architecture",
    "questionType": "best-practice",
    "question": "Untuk memonitor 50.000 truk logistik yang keluar-masuk ribuan zona geofence secara real-time, arsitektur geofencing terdistribusi manakah yang paling efisien?\n\n```javascript\n// Real-time spatial event alerting:\n```",
    "code": "// Real-time spatial event alerting:",
    "options": {
      "A": "In-memory Spatial Database / Tile38 yang mendukung geofencing webhooks native, dikombinasikan dengan partisi geohash",
      "B": "Melakukan cron job ST_Contains pada seluruh tabel database setiap 1 jam sekali",
      "C": "Menyimpan seluruh posisi truk di file cookie browser",
      "D": "Meminta sopir truk menelepon operator setiap melewati batas zona"
    },
    "answer": "A",
    "explanation": {
      "correct": "Database spasial in-memory seperti Tile38 menyimpan geometri geofence dan posisi kendaraan di RAM murni, serta menyediakan fitur *roaming geofence* dan webhook otomatis (ENTER, LEAVE, CROSS) dengan latensi sub-milidetik.",
      "A": "Benar. Tile38 / in-memory spatial streaming engine memproses jutaan event geofence real-time secara instan.",
      "B": "Salah. Cron job per jam tidak memenuhi syarat deteksi ancaman/notifikasi real-time.",
      "C": "Salah. Cookie browser hanya untuk state sesi web lokal, tidak untuk telemetri armada.",
      "D": "Salah. Proses manual tidak layak diterapkan pada skala 50.000 armada aktif."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-088",
    "level": "advanced",
    "topic": "Spatial Database Tuning for Analytics",
    "questionType": "best-practice",
    "question": "Pengaturan konfigurasi server PostgreSQL manakah yang paling krusial dinaikkan untuk mempercepat komputasi query spasial berat seperti penggabungan poligon dan spatial JOIN besar di RAM?\n\n```sql\n-- PostgreSQL Memory Tuning untuk PostGIS Analytics:\n```",
    "code": "-- PostgreSQL Memory Tuning untuk PostGIS Analytics:",
    "options": {
      "A": "work_mem dan maintenance_work_mem",
      "B": "port = 5432",
      "C": "max_connections = 50000",
      "D": "log_destination = 'stderr'"
    },
    "answer": "A",
    "explanation": {
      "correct": "`work_mem` mengontrol jumlah memori RAM yang dialokasikan untuk setiap operasi sort, hash-join, dan spatial aggregate sebelum database terpaksa menulis file sementara (spill) ke disk storage yang lambat.",
      "A": "Benar. Menaikkan work_mem mencegah disk spill pada kalkulasi spasial yang kompleks.",
      "B": "Salah. Nomor port TCP tidak memengaruhi kapasitas alokasi memori komputasi.",
      "C": "Salah. Menaikkan max_connections berlebihan justru menguras RAM untuk connection overhead.",
      "D": "Salah. log_destination hanya menentukan target output file log."
    },
    "mode": "test",
    "jobId": "fullstack-gis"
  },
  {
    "id": "GIST-089",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "questionType": "concept",
    "question": "Dalam arsitektur STAC (SpatioTemporal Asset Catalog), entitas apakah yang mewakili rekaman data geospasial individual (misal satu scene citra Sentinel-2 pada tanggal tertentu) yang memiliki metadata spasiotemporal dan tautan aset aset file COG?",
    "options": {
      "A": "STAC Item",
      "B": "STAC Catalog",
      "C": "STAC Collection",
      "D": "STAC Asset"
    },
    "answer": "A",
    "explanation": {
      "correct": "STAC Item adalah Feature GeoJSON dengan informasi waktu (datetime/properties) dan koordinat bounding box yang mendeskripsikan satu akuisisi data dan merujuk pada file Asset aktual.",
      "A": "Opsi A benar sesuai spesifikasi STAC Item Specification.",
      "B": "Opsi B salah karena STAC Catalog adalah pengelompokan hierarki tingkat atas.",
      "C": "Opsi C salah karena STAC Collection adalah kumpulan item sejenis dengan skema dan metadata kolektif.",
      "D": "Opsi D salah karena STAC Asset adalah objek file data riil di dalam Item."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-090",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mengelompokkan jutaan koordinat titik secara spasial menggunakan algoritma density-based DBSCAN dengan parameter jarak eps dan minimum points?",
    "options": {
      "A": "ST_ClusterDBSCAN(geom, eps, minpoints) OVER()",
      "B": "ST_ClusterKMeans(geom, k) OVER()",
      "C": "ST_ClusterIntersect()",
      "D": "ST_DBSCANPoints()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_ClusterDBSCAN adalah fungsi window PostGIS yang mendeteksi klaster kerapatan spasial arbitrer dan melabeli outlier sebagai noise (cluster_id NULL).",
      "A": "Opsi A benar sesuai sintaks dan fungsi ST_ClusterDBSCAN PostGIS.",
      "B": "Opsi B salah karena KMeans membagi ke dalam k pusat klaster berbentuk bulat tanpa konsep noise.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-091",
    "level": "advanced",
    "topic": "Remote Sensing Fundamentals",
    "questionType": "concept",
    "question": "Dalam semantic segmentation citra satelit beresolusi sangat tinggi menggunakan model Deep Learning, arsitektur encoder-decoder manakah yang sangat terkenal dengan jalur skip connections untuk merekonstruksi detail batas objek halus?",
    "options": {
      "A": "U-Net",
      "B": "Multilayer Perceptron (MLP) 1 lapis",
      "C": "Linear Regression",
      "D": "K-Means"
    },
    "answer": "A",
    "explanation": {
      "correct": "Arsitektur U-Net menggabungkan peta fitur resolusi tinggi dari encoder ke decoder melalui skip connections, memungkinkan lokalisasi batas tepi objek spasial yang sangat presisi.",
      "A": "Opsi A benar sesuai arsitektur deep learning U-Net (Ronneberger et al.).",
      "B": "Opsi B salah karena MLP sederhana tidak menangkap korelasi spasial 2D.",
      "C": "Opsi C salah karena regresi linier adalah model parametrik sederhana non-segmentasi.",
      "D": "Opsi D salah karena K-Means adalah algoritma clustering tanpa arsitektur deep learning konvolusional."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-092",
    "level": "advanced",
    "topic": "Fullstack Web GIS Development",
    "questionType": "concept",
    "question": "Format data geospasial biner berbasis FlatBuffers yang mendukung streaming spatial query zero-copy di browser melalui HTTP range requests dan spatial index R-tree bawaan adalah:",
    "options": {
      "A": "FlatGeobuf (.fgb)",
      "B": "GeoJSON",
      "C": "Shapefile",
      "D": "KML"
    },
    "answer": "A",
    "explanation": {
      "correct": "FlatGeobuf menyematkan indeks packed Hilbert R-tree pada header berkas biner, memungkinkan pembacaan fitur geografis secara parsial langsung dari memori tanpa alokasi overhead parsing JSON.",
      "A": "Opsi A benar sesuai spesifikasi FlatGeobuf.",
      "B": "Opsi B salah karena GeoJSON membutuhkan parsing teks JSON utuh yang memakan memori.",
      "C": "Opsi C salah karena Shapefile memerlukan banyak file pendukung dan tidak mendukung streaming R-tree di browser.",
      "D": "Opsi D salah karena KML adalah teks XML."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-093",
    "level": "advanced",
    "topic": "Citra Satelit & Radar",
    "questionType": "concept",
    "question": "Teknik Persistent Scatterer InSAR (PS-InSAR) memungkinkan pengukuran laju amblesan tanah (subsidence) dengan presisi hingga level milimeter karena:",
    "options": {
      "A": "Mengisolasi titik-titik reflektor radar buatan/alami yang stabil secara elektromagnetik sepanjang puluhan deret waktu citra dan memisahkan fase atmosferik secara matematis",
      "B": "Menggunakan kamera foto udara beresolusi 100 Megapiksel",
      "C": "Menggali lubang di tanah untuk menaruh sensor",
      "D": "Menghapus seluruh noise dengan mengalikan fase dengan nol"
    },
    "answer": "A",
    "explanation": {
      "correct": "PS-InSAR mengidentifikasi target refleksi fase konstan (bangunan, struktur beton, batuan masif) dan memodelkan Atmospheric Phase Screen (APS) temporal untuk mencapai akurasi mm/tahun.",
      "A": "Opsi A benar sesuai metodologi ilmiah PS-InSAR.",
      "B": "Opsi B salah karena PS-InSAR adalah teknik radar satelit, bukan foto udara optik.",
      "C": "Opsi C salah karena PS-InSAR berbasis penginderaan jauh satelit luar angkasa.",
      "D": "Opsi D salah karena mengalikan dengan nol akan menghancurkan informasi fase sinyal."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-094",
    "level": "advanced",
    "topic": "Geodesi & Proyeksi",
    "questionType": "concept",
    "question": "Dalam geodesi ruang angkasa, hubungan antara Tinggi Elipsoid geometris (h), Tinggi Orthometrik fisik (H), dan Undulasi Geoid (N) dirumuskan sebagai:",
    "options": {
      "A": "h = H + N",
      "B": "h = H - N",
      "C": "H = h + N",
      "D": "N = h + H"
    },
    "answer": "A",
    "explanation": {
      "correct": "Persamaan dasar geodesi fisik menetapkan tinggi elipsoid h (diukur oleh GNSS) sama dengan tinggi orthometrik H (terhadap mean sea level geoid) ditambah undulasi geoid N (jarak vertikal geoid terhadap elipsoid).",
      "A": "Opsi A benar sesuai relasi geodesi h = H + N.",
      "B": "Opsi B salah karena tanda operasi matematis terbalik.",
      "C": "Opsi C salah karena H = h - N.",
      "D": "Opsi D salah karena N = h - H."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-095",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "questionType": "concept",
    "question": "Fungsi PostGIS manakah yang digunakan untuk membagi geometri poligon menjadi kisi-kisi heksagonal teratur yang ideal untuk agregasi analisis spasial?",
    "options": {
      "A": "ST_HexagonGrid(size, geom)",
      "B": "ST_SquareGrid()",
      "C": "ST_MakeHex()",
      "D": "ST_TriangleMesh()"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_HexagonGrid (diperkenalkan pada PostGIS 3.1) menghasilkan partisi kisi heksagonal berukuran seragam yang menutupi batas geometri yang diberikan.",
      "A": "Opsi A benar sesuai fungsi PostGIS ST_HexagonGrid.",
      "B": "Opsi B salah karena menghasilkan grid bujursangkar kotak.",
      "C": "Opsi C salah karena bukan nama fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi tessellation heksagonal."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-096",
    "level": "advanced",
    "topic": "Web Mapping",
    "questionType": "concept",
    "question": "Pada MapLibre GL JS / Mapbox GL JS, metode apakah yang digunakan untuk memperbarui status properti interaktif suatu fitur (misal status hover) secara langsung di GPU tanpa perlu merender ulang seluruh sumber tile?",
    "options": {
      "A": "map.setFeatureState({ source: 'my-src', id: featureId }, { hover: true })",
      "B": "map.reloadSource()",
      "C": "map.clearLayers()",
      "D": "map.setFilter()"
    },
    "answer": "A",
    "explanation": {
      "correct": "Metode setFeatureState memanipulasi attribute state fitur individual di memori GPU secara instan untuk animasi hover atau seleksi tanpa penalti render ulang data vektor.",
      "A": "Opsi A benar sesuai API setFeatureState MapLibre/Mapbox GL JS.",
      "B": "Opsi B salah karena memuat ulang sumber data akan memicu request jaringan dan latency berat.",
      "C": "Opsi C salah karena clearLayers menghapus layer dari layar.",
      "D": "Opsi D salah karena setFilter mengevaluasi ekspresi inklusi fitur, bukan manipulasi state GPU ringan."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-097",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "questionType": "concept",
    "question": "Serverless dynamic tile server open-source berbasis FastAPI dan Rasterio yang dirancang untuk merender tile citra XYZ/WMTS on-the-fly langsung dari Cloud Optimized GeoTIFF (COG) di Amazon S3 adalah:",
    "options": {
      "A": "TiTiler",
      "B": "WordPress",
      "C": "Django Admin",
      "D": "Flask SocketIO"
    },
    "answer": "A",
    "explanation": {
      "correct": "TiTiler adalah microservice tile server geospasial modern yang mengandalkan rio-tiler dan FastAPI untuk menyajikan visualisasi COG/STAC secara dinamis dan hemat biaya.",
      "A": "Opsi A benar sesuai peranan TiTiler di ekosistem Cloud-Native GIS.",
      "B": "Opsi B salah karena WordPress adalah software blogging PHP.",
      "C": "Opsi C salah karena Django Admin adalah antarmuka CRUD relational DB.",
      "D": "Opsi D salah karena Flask SocketIO adalah wrapper websocket event."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-098",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "questionType": "concept",
    "question": "Mengapa penggunaan connection pooler seperti PgBouncer dengan mode 'transaction pooling' sangat krusial di depan database PostGIS yang melayani ribuan worker microservices Web GIS?",
    "options": {
      "A": "PostgreSQL mengalokasikan satu proses terpisah dan memori kerja per koneksi klien; PgBouncer mengizinkan ribuan klien berbagi sejumlah kecil koneksi aktif server untuk mencegah exhaust connection dan memory swapping",
      "B": "Karena PostgreSQL tidak dapat menyimpan data spasial tanpa PgBouncer",
      "C": "Untuk menghapus cache indeks GiST secara otomatis",
      "D": "Untuk mengubah proyeksi koordinat sebelum masuk ke database"
    },
    "answer": "A",
    "explanation": {
      "correct": "Model proses PostgreSQL mahal dalam konsumsi memori dan context switching. PgBouncer transaction pooling memaksimalkan pemanfaatan koneksi backend tetap rendah (~50-100 koneksi) melayani ribuan concurrent API requests.",
      "A": "Opsi A benar sesuai arsitektur penskalaan PostgreSQL tingkat tinggi.",
      "B": "Opsi B salah karena PostgreSQL/PostGIS dapat berjalan tanpa PgBouncer pada beban rendah.",
      "C": "Opsi C salah karena indeks tidak dihapus oleh connection pooler.",
      "D": "Opsi D salah karena PgBouncer adalah connection multiplexer murni, bukan processor geospasial."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-099",
    "level": "advanced",
    "topic": "GIS Software & GDAL/OGR",
    "questionType": "concept",
    "question": "Format file XML abstraksi virtual GDAL yang memungkinkan mosaik, subsetting, dan reproyeksi ribuan file citra tanpa menduplikasi fisik piksel pada disk adalah:",
    "options": {
      "A": "VRT (GDAL Virtual Format)",
      "B": "Shapefile",
      "C": "GeoJSON",
      "D": "KML"
    },
    "answer": "A",
    "explanation": {
      "correct": "Format VRT (Virtual Raster Format) adalah spesifikasi XML GDAL yang mereferensikan file dataset sumber dan instruksi pemrosesannya secara virtual tanpa membuat duplikat file citra di hard drive.",
      "A": "Opsi A benar sesuai spesifikasi GDAL VRT.",
      "B": "Opsi B salah karena Shapefile adalah data vektor.",
      "C": "Opsi C salah karena GeoJSON adalah format teks vektor.",
      "D": "Opsi D salah karena KML adalah teks XML visualisasi Google Earth."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-100",
    "level": "advanced",
    "topic": "Fotogrametri & UAV",
    "questionType": "concept",
    "question": "Parameter Interior Orientation (IO) manakah dalam kalibrasi kamera fotogrametri udara yang memodelkan distorsi lensa simetris melingkar (lengkungan cembung/cekung menjauhi pusat optik)?",
    "options": {
      "A": "Koefisien distorsi radial (k1, k2, k3)",
      "B": "Koefisien distorsi tangensial (p1, p2)",
      "C": "Principal point offset (cx, cy)",
      "D": "Focal length nominal"
    },
    "answer": "A",
    "explanation": {
      "correct": "Distorsi radial (barrel atau pincushion distortion) dimodelkan oleh polinomial orde ganjil k1, k2, k3 dalam model Brown-Conrady, sedangkan p1 dan p2 memodelkan distorsi tangensial/decentering.",
      "A": "Opsi A benar sesuai fisika optik dan fotogrametri kalibrasi kamera.",
      "B": "Opsi B salah karena distorsi tangensial memodelkan ketidaksejajaran elemen lensa fisik.",
      "C": "Opsi C salah karena principal point offset adalah pergeseran titik tengah optik terhadap sensor.",
      "D": "Opsi D salah karena focal length adalah jarak fokus lensa."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  }
];
