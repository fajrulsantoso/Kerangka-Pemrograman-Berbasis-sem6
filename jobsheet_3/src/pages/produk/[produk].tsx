import DetailProduk from "../../../views/DetailProduct";
import { ProductType } from "@/types/product.type";
import { retrieveProducts, retrieveDataByID } from "@/utils/db/servicefirebase";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

// SSG - generate path
export async function getStaticPaths() {
  const products = await retrieveProducts("products");

  const paths = products.map((product: any) => ({
    params: { produk: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

// SSG + ISR
export async function getStaticProps({ params }: { params: { produk: string } }) {
  const product = await retrieveDataByID("products", params.produk);

  return {
    props: {
      product,
    },
    revalidate: 10, // ISR aktif
  };
}