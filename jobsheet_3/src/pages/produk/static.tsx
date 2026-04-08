import TampilanProduk from "../../views/produk";
import { ProductType } from "@/types/product.type";
import { retrieveProducts } from "@/utils/db/servicefirebase";

const HalamanProdukStatic = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
  const products = await retrieveProducts("products");

  return {
    props: {
      products,
    },
    revalidate: 10, // ISR aktif
  };
}