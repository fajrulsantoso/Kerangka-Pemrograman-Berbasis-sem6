
# 📘 Lembar Kerja 7  
**Mata Kuliah:** Kerangka Pemrograman Berbasis Framework  
**Nama:** Fajru Santoso  

---

## 🧪 Hasil Praktikum

### Langkah 2 – Membuat API Produk

#### 📸 Hasil Implementasi:
![Catch All Route](L2.JPG)

---


---

## 🧪 Hasil Praktikum

### Langkah 3 – Fetch Data API di Frontend

#### 📸 Hasil Implementasi:
![Catch All Route](L3.JPG)

---



---



---


---

## 🧪 Hasil Praktikum

### Langkah 10 – API Mengambil Data Firebase 

#### 📸 Hasil Implementasi:
![Catch All Route](l10.JPG)

---



---

## 🧪   TUGAS PRAKTIKUM

### Tugas 1 (Wajib) • Tambahkan minimal 3 data produk di Firestore • Pastikan data tampil di halaman produk 


#### 📸 Hasil Implementasi:
![Catch All Route](TUGAS1.JPG)

---



---

## 🧪   TUGAS PRAKTIKUM

### Tugas 2 (Wajib) • Tambahkan field baru: o category • Tampilkan category di frontend  


#### 📸 Hasil Implementasi:
![Catch All Route](TUGAS2.JPG)

---



---

## 🧪   TUGAS PRAKTIKUM

### Tugas 3 (Pengayaan) • Tambahkan tombol Refresh Data • Gunakan fetch ulang tanpa reload halaman  


#### 📸 Hasil Implementasi:
![Catch All Route](TUGAS3.JPG)
![Catch All Route](TUGAS3.3JPG.JPG)


---





# 📘 Lembar Kerja – Next.js API & Konsep Data


---

## 1️⃣ Apa fungsi API Routes pada Next.js?

API Routes pada Next.js berfungsi untuk membuat **endpoint backend langsung di dalam project Next.js** tanpa perlu membuat server terpisah.

Dengan API Routes, kita dapat:
- Mengambil data (GET)
- Menambahkan data (POST)
- Mengubah data (PUT)
- Menghapus data (DELETE)

Sehingga Next.js dapat digunakan untuk menangani **operasi CRUD** secara langsung.

---

## 2️⃣ Mengapa `.env.local` tidak boleh di-push ke repository?

File `.env.local` biasanya berisi **data sensitif**, seperti:

- API Key
- Password
- Token akses
- Konfigurasi rahasia aplikasi

Jika file ini di-push ke repository publik, maka orang lain bisa melihat dan menggunakan data tersebut. Hal ini dapat menimbulkan **resiko keamanan**, seperti penyalahgunaan layanan atau akses ilegal ke sistem.

Oleh karena itu `.env.local` biasanya dimasukkan ke dalam file **`.gitignore`** agar tidak ikut terupload ke repository.

---

## 3️⃣ Apa perbedaan data statis dan data dinamis?

### Data Statis
Data statis adalah data yang **tidak berubah saat aplikasi berjalan**.

Contoh:
- HTML yang sudah dibuat saat build
- File JSON statis
- Konten yang dibuat saat build time

### Data Dinamis
Data dinamis adalah data yang **bisa berubah saat runtime**.

Biasanya data ini diambil dari:
- API
- Database
- Input dari user

---

## 4️⃣ Mengapa Next.js disebut framework Fullstack?

Next.js disebut framework **Fullstack** karena dapat menangani **frontend dan backend sekaligus** dalam satu framework.

### Frontend
Digunakan untuk membuat tampilan aplikasi menggunakan **React Pages atau Components**.

### Backend
Digunakan untuk membuat **API Routes atau server-side logic** untuk mengolah data.

Dengan demikian, developer dapat membangun **aplikasi web lengkap (fullstack)** hanya menggunakan satu framework yaitu **Next.js**.



