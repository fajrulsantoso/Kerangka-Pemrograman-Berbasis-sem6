import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const handlerLogin = () => {
    router.push("/blog/produk"); // redirect setelah login
  };

  return (
    <div>
      <h1>Halaman Login</h1>

      <button onClick={handlerLogin}>Login</button>

      <br />

      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
}