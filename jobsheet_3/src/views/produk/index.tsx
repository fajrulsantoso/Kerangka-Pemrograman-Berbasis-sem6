import styles from "./produk.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
};

const TampilanProduk = ({ products = [] }: { products?: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      <div className={styles.produk__content}>
        {products.length === 0 ? (
          [1,2,3,4].map((item) => (
            <div key={item} className={styles.skeleton__card}>
              <div className={styles.skeleton__image}></div>
              <div className={styles.skeleton__text}></div>
              <div className={styles.skeleton__text}></div>
            </div>
          ))
        ) : (
          products.map((product) => (
            <div key={product.id} className={styles.produk__content__item}>
              
              <div className={styles.produk__content__item__image}>
                <img src={product.image} alt={product.name} />
              </div>

              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <p>Rp {product.price}</p>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;