import { useRouter } from "next/router";
import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const Kategori = () => {
    const { push } = useRouter();

    const { data, error, isLoading } = useSWR("/api/produk", fetcher);

    if (error) return <div>Error loading...</div>;

    return (
        <div>
            <TampilanProduk products={isLoading ? [] : data?.data} />
        </div>
    );
};

export default Kategori;