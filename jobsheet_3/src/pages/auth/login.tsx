import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1>Halaman Login</h1>

      <Link href="/auth/register">
        Ke Halaman Register
      </Link>
    </div>
  );
}