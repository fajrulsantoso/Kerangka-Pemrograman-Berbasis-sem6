import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Halaman Category</h1>

      {!slug && <p>Semua Kategori</p>}

      {slug && (
        <div>
          <p>Parameter URL:</p>
          <ul>
            {slug.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}