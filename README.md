# Pemrograman Framework - Semester 6

Repository ini berisi kumpulan tugas praktikum mata kuliah Kerangka Pemrograman Berbasis Dosen Matkul	Dimas Wahyu Wibowo, ST, MT selama 16 minggu.

## 📚 Informasi Mahasiswa
- Nama: Fajrul Santoso
- NIM: 244107023010
- Program Studi: D4 Sarjana Terapan

---

## 📅 Daftar Minggu

### Minggu 01 - Setup Next.js (Pages Router)
Materi:
- Instalasi Node.js
- Setup Project Next.js 13.4.7
- Struktur Folder
- Routing berbasis file
- Modifikasi halaman about
## 📖 Pertanyaan Refleksi

### 1️⃣ Mengapa Pages Router disebut sebagai routing berbasis file?

Pages Router disebut routing berbasis file karena sistem routing ditentukan oleh struktur file di dalam folder `pages/`.  
Setiap file yang dibuat akan otomatis menjadi sebuah route.

Contoh:
- `pages/index.js` → `/`
- `pages/about.js` → `/about`

Tidak diperlukan konfigurasi routing manual.

---

### 2️⃣ Apa perbedaan Next.js dengan React standar (CRA)?

| Next.js | React (CRA) |
|----------|-------------|
| Routing otomatis berbasis file | Perlu konfigurasi routing manual |
| Mendukung Server-Side Rendering (SSR) | Hanya Client-Side Rendering |
| Memiliki API Routes bawaan | Tidak memiliki backend bawaan |
| Optimasi performa otomatis | Perlu konfigurasi tambahan |

Next.js merupakan framework di atas React yang menyediakan fitur lengkap untuk pengembangan aplikasi modern.

---

### 3️⃣ Apa fungsi perintah `npm run dev`?

Perintah ini digunakan untuk menjalankan server development secara lokal.  
Aplikasi dapat diakses melalui `http://localhost:3000` dan mendukung fitur hot reload.

---

### 4️⃣ Apa perbedaan `npm run dev` dan `npm run build`?

- `npm run dev` → Digunakan saat tahap pengembangan (development).
- `npm run build` → Digunakan untuk membuat versi produksi yang sudah dioptimasi dan siap deployment.

`npm run build` menghasilkan aplikasi yang lebih ringan dan optimal untuk digunakan di server production.





---


---

...
