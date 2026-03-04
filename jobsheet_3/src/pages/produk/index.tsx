import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  harga: number;
  ukuran: string;
  warna: string;
};

const Kategori = () => {
  const [isLogin, setIsLogin] = useState(true); // ubah false kalau mau test redirect
  const { push } = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);

  // useEffect untuk cek status login
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  // useEffect untuk fetch data produk
  useEffect(() => {
    fetch(`/api/produk`)
      .then((response) => response.json())
      .then((responseData) => {
        // console.log("Data produk:", responseData.data);
        setProducts(responseData.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Harga: {product.harga}</p>
          <p>Ukuran: {product.ukuran}</p>
          <p>Warna: {product.warna}</p>
        </div>
      ))}
    </div>
  );
};

export default Kategori;