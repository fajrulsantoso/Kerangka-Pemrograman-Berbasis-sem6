import { useEffect, useState } from "react";
import TampilanProduk from "@/views/produk";

type ProductType = {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
};

const ProdukPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/produk")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data); // ambil array data
      });
  }, []);

  return <TampilanProduk products={products} />;
};

export default ProdukPage;