import { ProductType } from "../../types/product.type";
import TampilanProduk from "../../views/produk";

const HalamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukServer;

// getServerSideProps
export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/produk");
    const response = await res.json();

    return {
      props: {
        products: response.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}