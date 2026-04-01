import TampilanProduk from "../../../views/produk"; 
import { ProductType } from "../types/product.type";

const HalamanProdukStatic = (props: { products: ProductType[] }) => {
    const { products } = props;

    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products} />
        </div>
    );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
    // Gunakan try-catch untuk menghindari error jika API mati saat build
    try {
        const res = await fetch('http://localhost:3000/api/produk');
        const response: { data: ProductType[] } = await res.json();

        return {
            props: {
                products: response.data || [],
            },
        };
    } catch (error) {
        console.error("Gagal mengambil data:", error);
        return {
            props: {
                products: [],
            },
        };
    }
}