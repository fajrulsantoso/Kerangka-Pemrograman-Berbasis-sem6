import { useEffect, useState } from "react";
// 1. WAJIB: Tambahkan import useRouter dari next/router
import { useRouter } from "next/router"; 
// 2. Gunakan relative path jika @/ tidak terbaca
import TampilanProduk from "../../views/produk"; 
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

const Kategori = () => {
    // Sekarang router tidak akan error lagi
    const router = useRouter();

    // Mengambil data dengan SWR
    const { data, error, isLoading } = useSWR("/api/produk", fetcher);

    // Menangani kondisi error (Opsional tapi baik untuk UX)
    if (error) return <div>Gagal memuat data.</div>;

    return (
        <div>
            {/* Data dikirim ke TampilanProduk. 
               Pastikan struktur data dari API Anda adalah { data: [...] } 
            */}
            <TampilanProduk products={isLoading ? [] : data?.data || []} />
        </div>
    );
};

export default Kategori;