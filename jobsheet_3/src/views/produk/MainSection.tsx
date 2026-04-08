export default function MainSection() {
  return (
    <section className="p-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">
        Daftar Produk
      </h2>

      <ul className="space-y-3">
        <li className="bg-white shadow-md p-4 rounded-lg">
          Produk A
        </li>
        <li className="bg-white shadow-md p-4 rounded-lg">
          Produk B
        </li>
        <li className="bg-white shadow-md p-4 rounded-lg">
          Produk C
        </li>
      </ul>
    </section>
  );
}