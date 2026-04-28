
# 📘 Lembar Kerja 15 Topik: Pertemuan: Implementasi Sistem Registrasi (Database Integration)  
**Mata Kuliah:** Kerangka Pemrograman Berbasis Framework  
**Nama:** Fajru Santoso   

---

## 🧪 Hasil Praktikum

###    Bagian 1 – Membuat Register View   


#### 📸 Hasil Implementasi:
![Catch All Route](P1.JPG)

---


---

## 🧪 Hasil Praktikum

###     Bagian 2 – Membuat API Register    


#### 📸 Hasil Implementasi:
![Catch All Route](15.gif)

---



---

## 🧪 Hasil Praktikum

###      Bagian 3 – Install bcrypt    


#### 📸 Hasil Implementasi:
![Catch All Route](P4.JPG)
![Catch All Route](P5.JPG)
![Catch All Route](P6.JPG)


---


## H. Pertanyaan Analisis

### 1. Mengapa password harus di-hash?
Agar password tidak disimpan dalam bentuk asli, sehingga tetap aman jika database bocor.

### 2. Perbedaan `addDoc` dan `setDoc`?
- `addDoc`: menambah data dengan ID otomatis  
- `setDoc`: menambah/menimpa data dengan ID yang ditentukan  

### 3. Mengapa perlu validasi method POST?
Untuk memastikan endpoint hanya menerima request yang sesuai dan mencegah penyalahgunaan.

### 4. Risiko jika email tidak unik?
Bisa terjadi duplikasi akun, login error, dan potensi pengambilalihan akun.

### 5. Fungsi role pada user?
Untuk mengatur hak akses (misal: admin, user) agar sistem lebih aman dan terkontrol.
