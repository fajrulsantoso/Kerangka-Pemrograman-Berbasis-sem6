import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProdukView from "@/views/produk";

export default function ProdukPage() {
  const [isLogin] = useState(true); // ubah false kalau mau test redirect
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  return <ProdukView />;
}