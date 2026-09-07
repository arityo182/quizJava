import { Question } from "./types";

export const GIS_TEST_QUESTIONS: Question[] = [
  {
    "id": "GIST-001",
    "level": "beginner",
    "topic": "Remote Sensing Fundamentals",
    "question": "Sensor penginderaan jauh yang memancarkan sinyal gelombang elektromagnetiknya sendiri ke permukaan bumi dan merekam pantulannya disebut sensor:",
    "options": {
      "A": "Aktif",
      "B": "Pasif",
      "C": "Optik alami",
      "D": "Reflektif termal"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sensor aktif memancarkan sumber energinya sendiri (seperti gelombang mikro pada radar SAR atau pulsa laser pada LiDAR) tanpa bergantung pada cahaya matahari.",
      "A": "Opsi A benar karena definisi sensor aktif dalam remote sensing.",
      "B": "Opsi B salah karena sensor pasif hanya menerima radiasi alami (seperti pantulan sinar matahari).",
      "C": "Opsi C salah karena sensor optik umumnya tergolong pasif.",
      "D": "Opsi D salah karena radiasi termal pasif memancarkan energi panas alami benda."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-002",
    "level": "beginner",
    "topic": "Remote Sensing Fundamentals",
    "question": "Kemampuan sensor satelit untuk membedakan dua objek terpisah yang berdekatan di atas permukaan bumi dinyatakan dalam resolusi:",
    "options": {
      "A": "Spasial",
      "B": "Temporal",
      "C": "Radiometrik",
      "D": "Spektral"
    },
    "answer": "A",
    "explanation": {
      "correct": "Resolusi spasial merujuk pada dimensi terkecil objek di permukaan bumi yang dapat dideteksi sebagai satu piksel pada citra satelit.",
      "A": "Opsi A benar sesuai definisi resolusi spasial.",
      "B": "Opsi B salah karena resolusi temporal adalah frekuensi periode ulang orbit satelit merekam lokasi yang sama.",
      "C": "Opsi C salah karena resolusi radiometrik mengukur kedalaman bit/sensitivitas sensor.",
      "D": "Opsi D salah karena resolusi spektral merujuk pada jumlah dan lebar interval panjang gelombang elektromagnetik."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-003",
    "level": "beginner",
    "topic": "Citra Satelit & Radar",
    "question": "Satelit observasi bumi milik Uni Eropa (Copernicus) yang mengusung sensor Synthetic Aperture Radar (SAR) C-band adalah:",
    "options": {
      "A": "Sentinel-1",
      "B": "Sentinel-2",
      "C": "Sentinel-3",
      "D": "Sentinel-5P"
    },
    "answer": "A",
    "explanation": {
      "correct": "Sentinel-1 adalah konstelasi satelit radar cuaca-ganda (SAR C-band), sedangkan Sentinel-2 mengusung sensor optik multispektral (MSI).",
      "A": "Opsi A benar sesuai spesifikasi armada Copernicus ESA.",
      "B": "Opsi B salah karena Sentinel-2 adalah satelit optik multispektral.",
      "C": "Opsi C salah karena Sentinel-3 mengamati oseanografi dan topografi laut.",
      "D": "Opsi D salah karena Sentinel-5P untuk pemantauan kualitas atmosfer dan polusi."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-004",
    "level": "beginner",
    "topic": "Citra Satelit & Radar",
    "question": "Berapakah resolusi spasial tertinggi yang dimiliki oleh band tampak (RGB) dan inframerah dekat (NIR) pada satelit Sentinel-2 MSI?",
    "options": {
      "A": "10 meter",
      "B": "30 meter",
      "C": "250 meter",
      "D": "1 kilometer"
    },
    "answer": "A",
    "explanation": {
      "correct": "Band 2 (Blue), Band 3 (Green), Band 4 (Red), dan Band 8 (NIR) pada satelit Sentinel-2 MSI memiliki resolusi spasial 10 meter.",
      "A": "Opsi A benar sesuai spesifikasi sensor MSI Sentinel-2.",
      "B": "Opsi B salah karena 30 meter adalah resolusi standar Landsat 8/9 OLI.",
      "C": "Opsi C salah karena 250 meter adalah resolusi band 1-2 sensor MODIS.",
      "D": "Opsi D salah karena 1 km adalah resolusi sensor cuaca atau laut kasar."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-005",
    "level": "beginner",
    "topic": "Indeks Spektral",
    "question": "Rumus perhitungan indeks vegetasi NDVI (Normalized Difference Vegetation Index) adalah:",
    "options": {
      "A": "(NIR - Red) / (NIR + Red)",
      "B": "(Red - NIR) / (Red + NIR)",
      "C": "(Green - NIR) / (Green + NIR)",
      "D": "(Blue - SWIR) / (Blue + SWIR)"
    },
    "answer": "A",
    "explanation": {
      "correct": "NDVI membandingkan pantulan tinggi klorofil pada spektrum inframerah dekat (NIR) dengan serapan pigmen klorofil pada spektrum merah (Red): (NIR - Red) / (NIR + Red).",
      "A": "Opsi A benar sesuai formulasi Rouse et al. (1973).",
      "B": "Opsi B salah karena menghasilkan nilai kebalikan negatif.",
      "C": "Opsi C salah karena Green dan NIR digunakan untuk NDWI air, bukan NDVI vegetasi.",
      "D": "Opsi D salah karena bukan kombinasi band NDVI."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-006",
    "level": "beginner",
    "topic": "Indeks Spektral",
    "question": "Berapakah rentang nilai teoritis hasil perhitungan indeks spektral ternormalisasi seperti NDVI atau NDWI?",
    "options": {
      "A": "-1.0 hingga +1.0",
      "B": "0 hingga 100",
      "C": "0 hingga 255",
      "D": "-180 hingga +180"
    },
    "answer": "A",
    "explanation": {
      "correct": "Karena dihitung sebagai rasio selisih dibagi penjumlahan (A - B) / (A + B), nilai indeks ternormalisasi selalu berada dalam batas matematis antara -1.0 hingga +1.0.",
      "A": "Opsi A benar sesuai karakteristik indeks ternormalisasi.",
      "B": "Opsi B salah karena itu adalah rentang persentase.",
      "C": "Opsi C salah karena itu adalah rentang integer citra 8-bit.",
      "D": "Opsi D salah karena itu adalah rentang bujur koordinat geografis."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-007",
    "level": "beginner",
    "topic": "Koreksi Citra",
    "question": "Koreksi yang dilakukan untuk menghilangkan distorsi posisi geometris pada citra akibat sudut sensor, kelengkungan bumi, dan pergerakan satelit disebut koreksi:",
    "options": {
      "A": "Geometrik",
      "B": "Radiometrik",
      "C": "Atmosferik",
      "D": "Spektral"
    },
    "answer": "A",
    "explanation": {
      "correct": "Koreksi geometrik memposisikan ulang setiap piksel citra agar sesuai secara akurat dengan koordinat geografis di permukaan bumi.",
      "A": "Opsi A benar sesuai definisi koreksi geometrik.",
      "B": "Opsi B salah karena koreksi radiometrik memperbaiki nilai Digital Number akibat noise sensor atau sudut pencahayaan matahari.",
      "C": "Opsi C salah karena koreksi atmosferik menghilangkan hamburan aerosol dan uap air.",
      "D": "Opsi D salah karena bukan tipe koreksi citra primer."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-008",
    "level": "beginner",
    "topic": "Geodesi & Proyeksi",
    "question": "Kode EPSG resmi untuk Sistem Koordinat Geografis WGS 84 (lintang dan bujur derajat) adalah:",
    "options": {
      "A": "EPSG:4326",
      "B": "EPSG:3857",
      "C": "EPSG:32748",
      "D": "EPSG:900913"
    },
    "answer": "A",
    "explanation": {
      "correct": "EPSG:4326 adalah identifier global untuk World Geodetic System 1984 (WGS 84) dalam format derajat desimal geografis.",
      "A": "Opsi A benar sesuai registri EPSG.",
      "B": "Opsi B salah karena EPSG:3857 adalah proyeksi Web Mercator bidang datar.",
      "C": "Opsi C salah karena EPSG:32748 adalah proyeksi UTM Zona 48S.",
      "D": "Opsi D salah karena EPSG:900913 adalah kode lama informal untuk Web Mercator."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-009",
    "level": "beginner",
    "topic": "Geodesi & Proyeksi",
    "question": "Sistem proyeksi yang umum digunakan oleh penyedia basemap web seperti Google Maps, OpenStreetMap, dan Mapbox adalah:",
    "options": {
      "A": "Web Mercator (EPSG:3857)",
      "B": "Lambert Azimuthal Equal-Area",
      "C": "Albers Equal-Area Conic",
      "D": "Cassini-Soldner"
    },
    "answer": "A",
    "explanation": {
      "correct": "Web Mercator (EPSG:3857 / WGS 84 Pseudo-Mercator) digunakan sebagai proyeksi basemap global standar pada aplikasi web GIS karena sifat konformal yang mempertahankan sudut bentuk lokal.",
      "A": "Opsi A benar sesuai standar basemap web de facto.",
      "B": "Opsi B salah karena Lambert Azimuthal digunakan untuk peta statistik benua.",
      "C": "Opsi C salah karena Albers digunakan untuk peta tematik luas area presisi.",
      "D": "Opsi D salah karena Cassini-Soldner adalah proyeksi silinder transversal lama."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-010",
    "level": "beginner",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Software Desktop GIS open-source paling populer di dunia yang bebas digunakan tanpa biaya lisensi adalah:",
    "options": {
      "A": "QGIS",
      "B": "ArcGIS Pro",
      "C": "MapInfo Professional",
      "D": "AutoCAD Map 3D"
    },
    "answer": "A",
    "explanation": {
      "correct": "QGIS (Quantum GIS) adalah platform sistem informasi geografis open-source berlisensi GNU GPL yang sangat aktif dikembangkan dan didukung oleh komunitas OSGeo.",
      "A": "Opsi A benar karena QGIS adalah perangkat lunak Desktop GIS open-source terdepan.",
      "B": "Opsi B salah karena ArcGIS Pro adalah software berbayar proprietary milik Esri.",
      "C": "Opsi C salah karena MapInfo adalah produk komersial berbayar.",
      "D": "Opsi D salah karena AutoCAD Map 3D adalah software berbayar Autodesk."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-011",
    "level": "beginner",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Koleksi file minimal apakah yang wajib ada agar ESRI Shapefile (.shp) dapat dibuka dengan benar di software GIS?",
    "options": {
      "A": ".shp, .shx, dan .dbf",
      "B": "Hanya file .shp saja",
      "C": ".shp, .png, dan .txt",
      "D": ".shp, .exe, dan .bat"
    },
    "answer": "A",
    "explanation": {
      "correct": "ESRI Shapefile mewajibkan minimal 3 file: .shp (geometri fitur), .shx (indeks posisi geometri), dan .dbf (tabel atribut dBASE). File .prj opsional namun sangat dianjurkan untuk definisi proyeksi.",
      "A": "Opsi A benar sesuai spesifikasi ESRI Shapefile Technical Description.",
      "B": "Opsi B salah karena tanpa .shx dan .dbf pembacaan akan gagal atau kehilangan data atribut.",
      "C": "Opsi C salah karena PNG dan TXT bukan bagian format shapefile.",
      "D": "Opsi D salah karena EXE dan BAT adalah file eksekusi sistem operasi."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-012",
    "level": "beginner",
    "topic": "Spatial Database & PostGIS",
    "question": "Ekstensi database spasial open-source yang menambahkan dukungan objek geografis, tipe data geometri, dan query spasial ke PostgreSQL adalah:",
    "options": {
      "A": "PostGIS",
      "B": "SpatiaLite",
      "C": "Oracle Spatial",
      "D": "MySQL GIS"
    },
    "answer": "A",
    "explanation": {
      "correct": "PostGIS adalah ekstensi spasial standar industri untuk PostgreSQL yang mengimplementasikan standar OGC Simple Features for SQL.",
      "A": "Opsi A benar sesuai arsitektur PostgreSQL spasial.",
      "B": "Opsi B salah karena SpatiaLite adalah ekstensi untuk SQLite.",
      "C": "Opsi C salah karena Oracle Spatial adalah produk berbayar Oracle Database.",
      "D": "Opsi D salah karena MySQL memiliki dukungan spasial bawaan sendiri, bukan ekstensi PostgreSQL."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-013",
    "level": "beginner",
    "topic": "Spatial Database & PostGIS",
    "question": "Perintah SQL manakah yang digunakan untuk mengaktifkan modul PostGIS pada database PostgreSQL yang baru dibuat?",
    "options": {
      "A": "CREATE EXTENSION postgis;",
      "B": "INSTALL postgis;",
      "C": "ENABLE postgis;",
      "D": "START SERVICE postgis;"
    },
    "answer": "A",
    "explanation": {
      "correct": "Perintah baku PostgreSQL untuk memuat ekstensi adalah 'CREATE EXTENSION <nama_ekstensi>;'.",
      "A": "Opsi A benar sesuai sintaks resmi PostgreSQL.",
      "B": "Opsi B salah karena INSTALL bukan sintaks DDL PostgreSQL.",
      "C": "Opsi C salah karena ENABLE bukan sintaks registrasi modul.",
      "D": "Opsi D salah karena PostGIS bukan daemon OS mandiri."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-014",
    "level": "beginner",
    "topic": "Web Mapping",
    "question": "Pustaka JavaScript open-source yang terkenal sangat ringan (~40 KB gzipped) dan mudah digunakan untuk menampilkan peta interaktif di halaman web adalah:",
    "options": {
      "A": "Leaflet",
      "B": "OpenLayers",
      "C": "CesiumJS",
      "D": "D3.js"
    },
    "answer": "A",
    "explanation": {
      "correct": "Leaflet.js dirancang dengan filosofi kesederhanaan, performa tinggi, dan ukuran file sangat kecil untuk kebutuhan peta web modern.",
      "A": "Opsi A benar sesuai karakteristik library Leaflet.",
      "B": "Opsi B salah karena OpenLayers memiliki ukuran library yang jauh lebih besar dengan fitur analitik desktop-grade.",
      "C": "Opsi C salah karena CesiumJS adalah mesin virtual globe 3D berukuran megabyte besar.",
      "D": "Opsi D salah karena D3.js adalah pustaka visualisasi data umum, bukan library map interaktif murni."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-015",
    "level": "beginner",
    "topic": "OGC Services & Web Services",
    "question": "Layanan standar Open Geospatial Consortium (OGC) yang mengembalikan data spasial dalam bentuk gambar raster peta (seperti PNG atau JPEG) adalah:",
    "options": {
      "A": "WMS (Web Map Service)",
      "B": "WFS (Web Feature Service)",
      "C": "WCS (Web Coverage Service)",
      "D": "WPS (Web Processing Service)"
    },
    "answer": "A",
    "explanation": {
      "correct": "WMS menyajikan layer peta yang dirender menjadi gambar raster di sisi server melalui request GetMap.",
      "A": "Opsi A benar sesuai spesifikasi OGC WMS.",
      "B": "Opsi B salah karena WFS mengembalikan data vektor mentah dan atribut (GML/GeoJSON).",
      "C": "Opsi C salah karena WCS mengembalikan data raster grid mentah (coverage) beserta nilai piksel aslinya.",
      "D": "Opsi D salah karena WPS mengeksekusi algoritma komputasi geospasial di server."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-016",
    "level": "beginner",
    "topic": "OGC Services & Web Services",
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
    "topic": "Remote Sensing Fundamentals",
    "question": "Sensor satelit radar SAR beroperasi pada spektrum elektromagnetik gelombang mikro (microwave) yang memiliki keunggulan utama dibandingkan sensor optik yaitu:",
    "options": {
      "A": "Mampu menembus tutupan awan, hujan, dan kabut asap serta dapat merekam permukaan bumi pada siang maupun malam hari tanpa bantuan sinar matahari",
      "B": "Mampu merekam foto warna RGB beresolusi 8K alami",
      "C": "Tidak membutuhkan daya listrik saat di orbit",
      "D": "Dapat mengukur temperatur inti bumi secara langsung"
    },
    "answer": "A",
    "explanation": {
      "correct": "Gelombang mikro memiliki panjang gelombang jauh lebih besar dari partikel aerosol/tetesan air awan, sehingga tidak mengalami hamburan kuat dan mampu beroperasi sepanjang waktu secara aktif.",
      "A": "Opsi A benar sesuai keunggulan operasional all-weather and day-and-night SAR.",
      "B": "Opsi B salah karena radar merekam intensitas hamburan balik gelombang mikro, bukan spektrum optik tampak mata RGB.",
      "C": "Opsi C salah karena radar adalah sensor aktif yang membutuhkan daya listrik besar untuk pemancar pulsa.",
      "D": "Opsi D salah karena sinyal radar hanya berpenetrasi pada lapisan permukaan tanah terluar."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-032",
    "level": "intermediate",
    "topic": "Citra Satelit & Radar",
    "question": "Dalam produk citra Sentinel-2 L2A, apa arti tingkat pemrosesan Level-2A tersebut?",
    "options": {
      "A": "Citra telah melalui koreksi atmosferik (Bottom of Atmosphere / Surface Reflectance) menggunakan prosesor Sen2Cor",
      "B": "Citra masih berupa data digital number mentah tanpa kalibrasi",
      "C": "Citra hanya berupa Top of Atmosphere (TOA) reflectance Level-1C",
      "D": "Citra telah diklasifikasi menjadi peta tutupan lahan biner"
    },
    "answer": "A",
    "explanation": {
      "correct": "Level-2A adalah produk surface reflectance (BOA) hasil koreksi atmosferik dari Level-1C (TOA) yang siap pakai untuk analisis biofisik dan spektral.",
      "A": "Opsi A benar sesuai standar penamaan produk Sentinel-2 Copernicus ESA.",
      "B": "Opsi B salah karena data mentah adalah Level-0.",
      "C": "Opsi C salah karena Level-1C adalah produk TOA.",
      "D": "Opsi D salah karena klasifikasi tematik adalah produk turunan tingkat lebih lanjut."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-033",
    "level": "intermediate",
    "topic": "Indeks Spektral",
    "question": "Indeks NDWI (Normalized Difference Water Index) menurut McFeeters (1996) yang dirancang untuk mendeteksi fitur badan air permukaan terbuka menggunakan formula:",
    "options": {
      "A": "(Green - NIR) / (Green + NIR)",
      "B": "(NIR - Red) / (NIR + Red)",
      "C": "(Red - SWIR) / (Red + SWIR)",
      "D": "(Blue - Red) / (Blue + Red)"
    },
    "answer": "A",
    "explanation": {
      "correct": "NDWI McFeeters memanfaatkan reflektansi tinggi badan air pada spektrum hijau (Green) dan serapan energi yang hampir sempurna oleh air pada spektrum inframerah dekat (NIR).",
      "A": "Opsi A benar sesuai formula McFeeters (1996).",
      "B": "Opsi B salah karena ini adalah formula NDVI vegetasi.",
      "C": "Opsi C salah karena bukan formulasi standar badan air.",
      "D": "Opsi D salah karena bukan formula indeks air."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-034",
    "level": "intermediate",
    "topic": "Indeks Spektral",
    "question": "Indeks EVI (Enhanced Vegetation Index) dikembangkan sebagai perbaikan atas NDVI terutama untuk:",
    "options": {
      "A": "Mengurangi sensitivitas terhadap pengaruh latar belakang tanah dan hamburan aerosol atmosferik, serta tidak mudah mengalami saturasi pada wilayah kanopi hutan lebat",
      "B": "Menghitung kedalaman palung laut",
      "C": "Mengukur kecepatan angin topan di atmosfer",
      "D": "Mengonversi citra menjadi format vektor Shapefile"
    },
    "answer": "A",
    "explanation": {
      "correct": "EVI menyertakan band Blue dan koefisien aerosol/tanah untuk mempertahankan sensitivitas dinamis pada vegetasi berbiomassa tinggi di mana NDVI cenderung mengalami saturasi.",
      "A": "Opsi A benar sesuai formulasi Huete et al. untuk EVI.",
      "B": "Opsi B salah karena EVI bukan indeks batimetri.",
      "C": "Opsi C salah karena EVI mengukur vegetasi daratan.",
      "D": "Opsi D salah karena EVI adalah perhitungan nilai raster piksel."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-035",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "question": "Berapakah jarak resolusi Ground Sample Distance (GSD) jika 1 piksel pada foto udara mewakili ukuran 5 cm x 5 cm di permukaan tanah?",
    "options": {
      "A": "5 cm/piksel",
      "B": "50 cm/piksel",
      "C": "0.5 mm/piksel",
      "D": "5 meter/piksel"
    },
    "answer": "A",
    "explanation": {
      "correct": "GSD adalah jarak fisik di permukaan bumi yang diwakili oleh jarak antara dua pusat piksel berturutan pada sensor kamera (5 cm/piksel).",
      "A": "Opsi A benar sesuai definisi dasar GSD fotogrametri.",
      "B": "Opsi B salah karena 50 cm 10 kali lebih kasar.",
      "C": "Opsi C salah karena 0.5 mm 100 kali lebih halus.",
      "D": "Opsi D salah karena 5 meter 100 kali lebih kasar."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-036",
    "level": "intermediate",
    "topic": "Fotogrametri & UAV",
    "question": "Metode penentuan posisi GNSS presisi tinggi pada wahana drone di mana koreksi diferensial dihitung setelah misi penerbangan selesai menggunakan data stasiun pangkalan (base station) disebut:",
    "options": {
      "A": "PPK (Post-Processing Kinematic)",
      "B": "RTK (Real-Time Kinematic)",
      "C": "Autonomous GPS",
      "D": "Dead Reckoning"
    },
    "answer": "A",
    "explanation": {
      "correct": "PPK memproses data fase pembawa GNSS rover drone dan base station secara retrospektif di software komputer setelah penerbangan, menghindari risiko putusnya sambungan radio telemetry RTK di udara.",
      "A": "Opsi A benar sesuai definisi PPK GNSS.",
      "B": "Opsi B salah karena RTK melakukan koreksi diferensial secara instan via sambungan radio saat terbang.",
      "C": "Opsi C salah karena autonomous GPS adalah navigasi tanpa koreksi diferensial (~3 meter error).",
      "D": "Opsi D salah karena dead reckoning mengandalkan sensor inersia/kecepatan tanpa satelit."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-037",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Jika sebuah proyek pemetaan mencakup wilayah Kota Bandung dan sekitarnya (Jawa Barat di selatan khatulistiwa pada bujur ~107.6° BT), zona UTM berapakah yang harus digunakan?",
    "options": {
      "A": "UTM Zona 48S",
      "B": "UTM Zona 48N",
      "C": "UTM Zona 49S",
      "D": "UTM Zona 50S"
    },
    "answer": "A",
    "explanation": {
      "correct": "Bujur 102° BT hingga 108° BT masuk ke dalam Zona UTM 48. Karena berada di selatan khatulistiwa, zona yang tepat adalah 48S (EPSG:32748).",
      "A": "Opsi A benar sesuai batas zona bujur UTM dan letak geografis Bandung.",
      "B": "Opsi B salah karena 48N berada di utara khatulistiwa.",
      "C": "Opsi C salah karena Zona 49S mencakup 108° BT hingga 114° BT (Jawa Tengah/DIY/Jatim).",
      "D": "Opsi D salah karena Zona 50S mencakup 114° BT hingga 120° BT (Bali/NTB/Kalsel)."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-038",
    "level": "intermediate",
    "topic": "Geodesi & Proyeksi",
    "question": "Faktor skala (scale factor k) pada Central Meridian sebuah zona proyeksi Universal Transverse Mercator (UTM) ditetapkan sebesar:",
    "options": {
      "A": "0.9996",
      "B": "1.0000",
      "C": "0.5000",
      "D": "1.0004"
    },
    "answer": "A",
    "explanation": {
      "correct": "UTM menggunakan silinder pemotong sekant (secant cylinder) dengan skala 0.9996 pada meridian sentral untuk mendistribusikan distorsi skala merata tidak melebihi 1:1000 di seluruh zona selebar 6°.",
      "A": "Opsi A benar sesuai parameter standar proyeksi UTM.",
      "B": "Opsi B salah karena skala 1.0000 diterapkan pada dua garis potong (standard parallels) di kiri-kanan meridian sentral.",
      "C": "Opsi C salah karena nilai tersebut tidak realistis untuk kartografi.",
      "D": "Opsi D salah karena skala sekant selalu < 1 pada meridian pusat."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-039",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Perintah GDAL manakah yang digunakan untuk memotong (clip) citra raster GeoTIFF menggunakan batas poligon dari file Shapefile (masking)?",
    "options": {
      "A": "gdalwarp -cutline mask.shp -crop_to_cutline input.tif output_clipped.tif",
      "B": "gdal_translate -clip mask.shp input.tif output_clipped.tif",
      "C": "ogr2ogr -cut mask.shp input.tif output_clipped.tif",
      "D": "gdalinfo -mask mask.shp input.tif"
    },
    "answer": "A",
    "explanation": {
      "correct": "gdalwarp mendukung opsi -cutline <vektor> dan -crop_to_cutline untuk memotong raster masukan tepat sesuai geometri poligon vektor.",
      "A": "Opsi A benar sesuai dokumentasi sintaks resmi gdalwarp cutline.",
      "B": "Opsi B salah karena gdal_translate hanya mendukung pemotongan bounding box persegi (-projwin).",
      "C": "Opsi C salah karena ogr2ogr adalah utilitas transformasi vektor, bukan raster.",
      "D": "Opsi D salah karena gdalinfo hanya menampilkan ringkasan informasi dataset."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-040",
    "level": "intermediate",
    "topic": "GIS Software & GDAL/OGR",
    "question": "Dalam utilitas ogr2ogr, parameter apakah yang digunakan untuk membatasi ekspor data vektor hanya pada area geografis bounding box tertentu?",
    "options": {
      "A": "-spat xmin ymin xmax ymax",
      "B": "-bbox xmin ymin xmax ymax",
      "C": "-extent xmin ymin xmax ymax",
      "D": "-limit xmin ymin xmax ymax"
    },
    "answer": "A",
    "explanation": {
      "correct": "Parameter -spat (spatial filter) pada ogr2ogr membatasi seleksi fitur hanya pada fitur yang beririsan dengan jendela koordinat xmin, ymin, xmax, ymax.",
      "A": "Opsi A benar sesuai dokumentasi sintaks resmi ogr2ogr.",
      "B": "Opsi B salah karena bukan parameter argumen ogr2ogr.",
      "C": "Opsi C salah karena bukan argumen ogr2ogr.",
      "D": "Opsi D salah karena -limit digunakan untuk membatasi jumlah record baris."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-041",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mencari objek yang berada dalam radius jarak tertentu (d) dari geometri referensi tanpa perlu membangun poligon buffer fisik di memori?",
    "options": {
      "A": "ST_DWithin(geomA, geomB, distance)",
      "B": "ST_Intersects(ST_Buffer(geomA, distance), geomB)",
      "C": "ST_Distance(geomA, geomB) < distance",
      "D": "ST_WithinDistance(geomA, geomB, distance)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_DWithin secara langsung mengevaluasi bounding box diperbesar menggunakan indeks spasial GiST, jauh lebih cepat dan hemat memori daripada membangun geometri buffer (ST_Buffer).",
      "A": "Opsi A benar sesuai praktik terbaik kueri proximity di PostGIS.",
      "B": "Opsi B salah karena membuat buffer memakan alokasi memori CPU yang besar.",
      "C": "Opsi C salah karena mengharuskan kalkulasi jarak ke seluruh baris jika tidak didahului operator index.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-042",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk mentransformasikan sistem referensi koordinat (SRID) geometri dari EPSG:4326 ke EPSG:3857?",
    "options": {
      "A": "ST_Transform(geom, 3857)",
      "B": "ST_SetSRID(geom, 3857)",
      "C": "ST_Reproject(geom, 3857)",
      "D": "ST_Convert(geom, 3857)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Transform menghitung ulang nilai numerik koordinat setiap vertex ke sistem proyeksi target. Berbeda dengan ST_SetSRID yang hanya mengubah metadata tanpa mengubah koordinat fisik.",
      "A": "Opsi A benar sesuai fungsi transformasi koordinat PostGIS.",
      "B": "Opsi B salah karena ST_SetSRID hanya melabeli ulang SRID tanpa menghitung matematis proyeksi koordinat.",
      "C": "Opsi C salah karena bukan nama fungsi PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-043",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Fungsi PostGIS manakah yang digunakan untuk menghitung titik berat atau pusat gravitasi geometri poligon?",
    "options": {
      "A": "ST_Centroid(geom)",
      "B": "ST_PointOnSurface(geom)",
      "C": "ST_Center(geom)",
      "D": "ST_MidPoint(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Centroid mengembalikan pusat gravitasi geometrik poligon. Perlu dicatat titik centroid bisa saja berada di luar poligon jika poligon berbentuk bulan sabit atau donat.",
      "A": "Opsi A benar sesuai fungsi PostGIS ST_Centroid.",
      "B": "Opsi B salah karena ST_PointOnSurface dijamin selalu berada di dalam poligon.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan nama fungsi centroid poligon."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-044",
    "level": "intermediate",
    "topic": "Spatial Database & PostGIS",
    "question": "Bagaimana cara mengekstrak geometri dari kolom basis data PostGIS ke dalam string format GeoJSON?",
    "options": {
      "A": "ST_AsGeoJSON(geom)",
      "B": "ST_ToGeoJSON(geom)",
      "C": "ST_GeoJSON(geom)",
      "D": "ST_ExportJSON(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_AsGeoJSON mengembalikan representasi string teks objek geometri dalam format standar GeoJSON geometry object.",
      "A": "Opsi A benar sesuai dokumentasi PostGIS ST_AsGeoJSON.",
      "B": "Opsi B salah karena bukan fungsi PostGIS.",
      "C": "Opsi C salah karena bukan fungsi PostGIS.",
      "D": "Opsi D salah karena bukan fungsi PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-045",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Dalam Leaflet, kelas layer apakah yang digunakan untuk memuat potongan tile raster basemap XYZ dari OpenStreetMap?",
    "options": {
      "A": "L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { ... })",
      "B": "L.geoJSON()",
      "C": "L.imageOverlay()",
      "D": "L.vectorGrid()"
    },
    "answer": "A",
    "explanation": {
      "correct": "L.tileLayer digunakan untuk memuat basemap berbasis grid slippy map standard dengan placeholder {z}/{x}/{y}.",
      "A": "Opsi A benar sesuai API Leaflet TileLayer.",
      "B": "Opsi B salah karena L.geoJSON untuk data vektor.",
      "C": "Opsi C salah karena L.imageOverlay untuk gambar statis tunggal dengan batas koordinat tetap.",
      "D": "Opsi D salah karena L.vectorGrid adalah plugin pihak ketiga untuk vector tile."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-046",
    "level": "intermediate",
    "topic": "Web Mapping",
    "question": "Pada Mapbox GL JS / MapLibre GL JS, jenis sumber data (source type) apakah yang digunakan untuk mengonsumsi data Mapbox Vector Tile (.pbf)?",
    "options": {
      "A": "\"vector\"",
      "B": "\"raster\"",
      "C": "\"geojson\"",
      "D": "\"image\""
    },
    "answer": "A",
    "explanation": {
      "correct": "Source type 'vector' dalam Mapbox Style Spec dirancang khusus untuk memuat kumpulan tile biner protobuf vector tile.",
      "A": "Opsi A benar sesuai spesifikasi Mapbox Style Specification.",
      "B": "Opsi B salah karena 'raster' untuk tile gambar PNG/JPEG.",
      "C": "Opsi C salah karena 'geojson' untuk dokumen teks GeoJSON utuh.",
      "D": "Opsi D salah karena 'image' untuk gambar tunggal statis."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-047",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "question": "Request OGC Web Map Service (WMS) manakah yang dipanggil oleh browser untuk meminta dokumen XML metadata servis yang berisi daftar layer, SRS yang didukung, dan bounding box?",
    "options": {
      "A": "GetCapabilities",
      "B": "GetMap",
      "C": "GetFeatureInfo",
      "D": "DescribeLayer"
    },
    "answer": "A",
    "explanation": {
      "correct": "Request GetCapabilities adalah operasi wajib pada seluruh standar OGC (WMS, WFS, WCS) untuk mengembalikan kemampuan dan katalog metadata servis.",
      "A": "Opsi A benar sesuai standar OGC Web Map Service.",
      "B": "Opsi B salah karena GetMap meminta gambar peta raster.",
      "C": "Opsi C salah karena GetFeatureInfo meminta data atribut titik piksel peta.",
      "D": "Opsi D salah karena DescribeLayer mendeskripsikan tipe fitur WFS/WCS yang mendasari layer WMS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-048",
    "level": "intermediate",
    "topic": "OGC Services & Web Services",
    "question": "Parameter WMS GetMap apakah yang menentukan koordinat batas geografis area peta yang akan dirender oleh GeoServer?",
    "options": {
      "A": "BBOX",
      "B": "LAYERS",
      "C": "CRS",
      "D": "FORMAT"
    },
    "answer": "A",
    "explanation": {
      "correct": "Parameter BBOX (Bounding Box) menentukan rentang koordinat minX, minY, maxX, maxY dari peta yang diminta oleh klien.",
      "A": "Opsi A benar sesuai spesifikasi parameter OGC WMS GetMap.",
      "B": "Opsi B salah karena LAYERS menentukan nama layer yang ditampilkan.",
      "C": "Opsi C salah karena CRS menentukan sistem koordinat proyeksi.",
      "D": "Opsi D salah karena FORMAT menentukan format file gambar keluaran (misal image/png)."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-049",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "question": "Library manipulasi data geospasial murni dalam JavaScript yang mendukung analisis spasial di browser maupun Node.js (seperti buffer, area, intersect, point-in-polygon) adalah:",
    "options": {
      "A": "Turf.js",
      "B": "Lodash",
      "C": "Moment.js",
      "D": "Three.js"
    },
    "answer": "A",
    "explanation": {
      "correct": "Turf.js adalah pustaka JavaScript modular untuk analisis geospasial tingkat lanjut yang beroperasi langsung pada struktur data GeoJSON.",
      "A": "Opsi A benar sesuai fungsi utama Turf.js.",
      "B": "Opsi B salah karena Lodash adalah utility library manipulasi data JavaScript umum.",
      "C": "Opsi C salah karena Moment.js adalah pustaka tanggal dan waktu.",
      "D": "Opsi D salah karena Three.js adalah mesin rendering 3D WebGL umum."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-050",
    "level": "intermediate",
    "topic": "Fullstack Web GIS Development",
    "question": "Dalam backend REST API geospasial, apa keuntungan menyajikan data dalam bentuk Mapbox Vector Tiles (MVT) daripada GeoJSON ketika layer memiliki lebih dari 100.000 fitur poligon?",
    "options": {
      "A": "MVT menyajikan data dalam bentuk tile biner terpotong per level zoom dengan simplifikasi vertex adaptif, sehingga browser hanya menerima data yang terlihat di viewport dengan payload sangat kecil",
      "B": "MVT dapat menampilkan video interaktif di dalam poligon",
      "C": "GeoJSON dilarang oleh konsorsium web internasional",
      "D": "MVT tidak memerlukan database spasial"
    },
    "answer": "A",
    "explanation": {
      "correct": "Memuat 100.000 poligon via GeoJSON akan mentransfer puluhan megabyte teks dan membebani browser DOM/parsing. MVT memotong data ke dalam ubin biner berukuran kilobyte dengan generalisasi LOD.",
      "A": "Opsi A benar sesuai alasan fundamental adopsi Vector Tiles di Web GIS.",
      "B": "Opsi B salah karena MVT adalah format vektor, bukan format video.",
      "C": "Opsi C salah karena GeoJSON adalah standar resmi RFC 7946.",
      "D": "Opsi D salah karena MVT umumnya digenerate dari database spasial seperti PostGIS."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-051",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Mekanisme HTTP request apakah yang dimanfaatkan oleh Cloud Optimized GeoTIFF (COG) untuk mengambil hanya potongan piksel yang diperlukan tanpa mengunduh keseluruhan file citra?",
    "options": {
      "A": "HTTP Range Requests (header 'Range: bytes=...')",
      "B": "HTTP POST multipart",
      "C": "WebSocket streaming",
      "D": "HTTP CONNECT tunnel"
    },
    "answer": "A",
    "explanation": {
      "correct": "Dengan memanfaatkan struktur internal tiling dan overview COG, klien web dapat meminta bagian byte tertentu dari cloud storage (S3/GCS) menggunakan HTTP GET dengan header Range.",
      "A": "Opsi A benar sesuai arsitektur spesifikasi Cloud Optimized GeoTIFF.",
      "B": "Opsi B salah karena COG dibaca via HTTP GET.",
      "C": "Opsi C salah karena COG tidak memerlukan server WebSocket khusus.",
      "D": "Opsi D salah karena bukan tunneling proxy."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-052",
    "level": "intermediate",
    "topic": "Cloud GIS & Big Data",
    "question": "Fungsi GeoPandas manakah yang digunakan untuk mengubah sistem referensi koordinat seluruh fitur di dalam GeoDataFrame?",
    "options": {
      "A": "gdf.to_crs(epsg=3857)",
      "B": "gdf.set_crs(epsg=3857)",
      "C": "gdf.reproject(3857)",
      "D": "gdf.transform_geom(3857)"
    },
    "answer": "A",
    "explanation": {
      "correct": "gdf.to_crs() melakukan reproyeksi koordinat geometris ke CRS target. gdf.set_crs() hanya menetapkan metadata CRS jika sebelumnya belum terdefinisi.",
      "A": "Opsi A benar sesuai fungsi resmi GeoPandas to_crs.",
      "B": "Opsi B salah karena set_crs tidak menghitung ulang nilai koordinat geometri.",
      "C": "Opsi C salah karena bukan nama metode GeoPandas.",
      "D": "Opsi D salah karena bukan nama metode GeoPandas."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-053",
    "level": "intermediate",
    "topic": "DevOps & GIS Deployment",
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
    "topic": "Citra Satelit & Radar",
    "question": "Dalam pengolahan interferometri radar (InSAR), apa fungsi utama dari algoritma SNAPHU (Statistical-cost, Network-flow Algorithm for Phase Unwrapping)?",
    "options": {
      "A": "Menyelesaikan ambiguitas fase berulang 2π pada interferogram terbungkus (wrapped) menjadi nilai fase absolut kontinu menggunakan pendekatan optimasi network flow",
      "B": "Menghapus tutupan awan pada citra optik multispektral",
      "C": "Mengubah citra SAR menjadi video tiga dimensi",
      "D": "Mengompresi file GeoTIFF menjadi format MP3"
    },
    "answer": "A",
    "explanation": {
      "correct": "SNAPHU memformulasikan phase unwrapping 2D sebagai masalah optimasi alir jaringan (network-flow) non-linear dengan biaya statistik untuk merekonstruksi deformasi riil dari fase wrapped.",
      "A": "Opsi A benar sesuai fungsi utama algoritma SNAPHU (Chen & Zebker).",
      "B": "Opsi B salah karena radar tidak terhalang awan dan SNAPHU adalah algoritma fase radar, bukan de-clouding optik.",
      "C": "Opsi C salah karena bukan video renderer.",
      "D": "Opsi D salah karena bukan pemrosesan audio."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-082",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Saat melakukan spatial join antara poligon batas wilayah yang memiliki ratusan ribu vertex terhadap jutaan titik koordinat di PostGIS, fungsi apa yang harus dipanggil terlebih dahulu untuk mencegah degradasi performa GiST?",
    "options": {
      "A": "ST_Subdivide(geom, 256)",
      "B": "ST_Simplify(geom, 0)",
      "C": "ST_Reverse(geom)",
      "D": "ST_Force2D(geom)"
    },
    "answer": "A",
    "explanation": {
      "correct": "ST_Subdivide memecah poligon raksasa menjadi sub-poligon kecil dengan maksimal 256 vertex. Ini memangkas bounding box index yang terlalu longgar dan mempercepat evaluasi titik masuk (point-in-polygon) secara eksponensial.",
      "A": "Opsi A benar sesuai teknik optimasi spasial poligon raksasa di PostGIS.",
      "B": "Opsi B salah karena toleransi 0 tidak mengurangi vertex poligon.",
      "C": "Opsi C salah karena membalik urutan vertex tidak memecah poligon besar.",
      "D": "Opsi D salah karena hanya membuang dimensi Z tanpa menyederhanakan jumlah vertex."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-083",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
    "question": "Format file columnar geospasial berbasis Apache Parquet yang dirancang untuk kueri big data analitik berskala petabyte di cloud data lake adalah:",
    "options": {
      "A": "GeoParquet",
      "B": "ESRI Shapefile",
      "C": "GeoTIFF",
      "D": "KML"
    },
    "answer": "A",
    "explanation": {
      "correct": "GeoParquet menambahkan encoding geometri OGC standar ke format Apache Parquet, memungkinkan kompresi data tingkat tinggi, query kolom parsial, dan integrasi dengan DuckDB, Apache Spark, serta BigQuery.",
      "A": "Opsi A benar sesuai standar spesifikasi GeoParquet.",
      "B": "Opsi B salah karena Shapefile memiliki batasan 2 GB dan berbasis dBase usang.",
      "C": "Opsi C salah karena GeoTIFF adalah format raster citra.",
      "D": "Opsi D salah karena KML adalah format teks XML sederhana."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-084",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Dalam visualisasi geospasial WebGL menggunakan deck.gl, layer manakah yang secara khusus dirancang untuk merender animasi lintasan koordinat 4D (lon, lat, alt, timestamp) dengan efek jejak memudar (trail length)?",
    "options": {
      "A": "TripsLayer",
      "B": "ScatterplotLayer",
      "C": "GeoJsonLayer",
      "D": "LineLayer"
    },
    "answer": "A",
    "explanation": {
      "correct": "TripsLayer memanfaatkan GPU shader untuk mengevaluasi parameter waktu (currentTime) dan menggambar segmen animasi lintasan pergerakan dinamis dengan ekor visual.",
      "A": "Opsi A benar sesuai dokumentasi deck.gl TripsLayer.",
      "B": "Opsi B salah karena ScatterplotLayer untuk lingkaran titik statis 2D.",
      "C": "Opsi C salah karena GeoJsonLayer untuk visualisasi fitur statis standar.",
      "D": "Opsi D salah karena LineLayer hanya menggambar garis statis antara origin dan destination."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-085",
    "level": "advanced",
    "topic": "Geodesi & Proyeksi",
    "question": "Dalam Sistem Referensi Geospasial Indonesia 2013 (SRGI2013), mengapa diadopsi sistem semi-kinematic datum dengan model deformasi (velocity grid)?",
    "options": {
      "A": "Untuk memperhitungkan laju pergerakan lempeng tektonik aktif tahunan dan deformasi co-seismic/post-seismic akibat gempa bumi besar di kepulauan Indonesia",
      "B": "Karena bumi membesar setiap tahun",
      "C": "Untuk menyesuaikan waktu salat secara otomatis",
      "D": "Karena satelit GPS bergerak mundur"
    },
    "answer": "A",
    "explanation": {
      "correct": "Kepulauan Indonesia terletak di zona konvergensi lempeng yang sangat aktif. Semi-kinematic datum mentransformasikan koordinat observasi pada epoch t ke reference epoch (2012.0) melalui kisi kecepatan pergeseran kerak bumi.",
      "A": "Opsi A benar sesuai penetapan resmi BIG untuk SRGI2013.",
      "B": "Opsi B salah karena jari-jari bumi stabil.",
      "C": "Opsi C salah karena model deformasi adalah murni parameter geodinamika kerak bumi.",
      "D": "Opsi D salah karena orbit satelit terus bergerak maju mengikuti hukum gravitasi."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-086",
    "level": "advanced",
    "topic": "DevOps & GIS Deployment",
    "question": "Dalam arsitektur klaster GeoServer enterprise multi-instance yang menggunakan persistent storage bersama, plugin apakah yang wajib dipasang agar pembaruan layer pada satu instance otomatis ter-reload di instance lainnya?",
    "options": {
      "A": "Plugin clustering GeoServer (Hazelcast / ActiveMQ based)",
      "B": "Plugin WordPress",
      "C": "Plugin Photoshop",
      "D": "Plugin Flash Player"
    },
    "answer": "A",
    "explanation": {
      "correct": "Instance GeoServer menyimpan katalog layer dalam memori RAM. Komponen clustering via Hazelcast atau JMS ActiveMQ menyiarkan pesan event cache invalidation antar node saat ada perubahan data katalog.",
      "A": "Opsi A benar sesuai arsitektur resmi GeoServer Enterprise Clustering.",
      "B": "Opsi B salah karena WordPress adalah CMS blog.",
      "C": "Opsi C salah karena Photoshop adalah software grafis desktop.",
      "D": "Opsi D salah karena Flash Player adalah teknologi web lama yang telah deprecated."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-087",
    "level": "advanced",
    "topic": "Spatial Database & PostGIS",
    "question": "Operator class indeks GiST manakah yang harus didefinisikan secara eksplisit agar PostgreSQL mampu mengindeks bounding box 3D atau 4D (X, Y, Z, M) pada kolom geometri PostGIS?",
    "options": {
      "A": "gist_geometry_ops_nd",
      "B": "gist_geometry_ops_2d",
      "C": "btree_geo_ops",
      "D": "hash_spatial_ops"
    },
    "answer": "A",
    "explanation": {
      "correct": "Default operator class GiST adalah 2D. Untuk membuat indeks volume 3D/4D yang mendukung operator &&&, wajib mencantumkan 'gist_geometry_ops_nd' saat CREATE INDEX.",
      "A": "Opsi A benar sesuai dokumentasi PostGIS N-D Indexing.",
      "B": "Opsi B salah karena operator 2d mengabaikan koordinat Z dan M.",
      "C": "Opsi C salah karena B-tree tidak mendukung pemotongan ruang bounding box n-dimensi.",
      "D": "Opsi D salah karena Hash tidak mendukung pencarian rentang spasial."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-088",
    "level": "advanced",
    "topic": "Web Mapping",
    "question": "Teknologi server vector tile open-source mandiri berkecepatan tinggi yang ditulis dalam bahasa Rust dan mengekstrak ST_AsMVT langsung dari PostGIS adalah:",
    "options": {
      "A": "Martin",
      "B": "Apache HTTP Server",
      "C": "Tomcat",
      "D": "Nginx"
    },
    "answer": "A",
    "explanation": {
      "correct": "Martin adalah dynamic vector tile server ringan berkinerja tinggi dalam bahasa Rust yang langsung mengeksekusi PostGIS function untuk menyajikan tile .pbf dengan latensi sub-milidetik.",
      "A": "Opsi A benar karena Martin adalah server tile Rust terkemuka di ekosistem modern MapLibre.",
      "B": "Opsi B salah karena Apache adalah web server umum.",
      "C": "Opsi C salah karena Tomcat adalah Java servlet container.",
      "D": "Opsi D salah karena Nginx adalah reverse proxy, bukan tile generator PostGIS langsung."
    },
    "jobId": "fullstack-gis",
    "mode": "test"
  },
  {
    "id": "GIST-089",
    "level": "advanced",
    "topic": "Cloud GIS & Big Data",
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
