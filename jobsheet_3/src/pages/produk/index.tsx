import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;  // ✅ SUDAH DITAMBAHKAN
};

const Kategori = () => {
  const [isLogin, setIsLogin] = useState(true);
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
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responseData) => {
        setProducts(responseData.data);
        // console.log("Data produk:", responseData.data);
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
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Category: {product.category}</p> {/* ✅ SEKARANG BISA */}
        </div>
      ))}
    </div>
  );
};

export default Kategori;