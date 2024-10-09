import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/components/ProductCard/ProductCard.module.css'

const ProductCard = ({ item }) => {
  return (
    <section className={styles["section"]}>
    <div className={styles["div"]}>
 <Image
        src={`${item.image}`}
        alt={item.name}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '70%', height: 'auto' }}
      />
      <h3 className={styles["h3"]}>{item.name}</h3>
      <p className={styles["p"]}>{item.artist}</p>
      <Link href={`/product/${item._id}`} className={styles["button"]}>Ver detalles</Link>
    </div>
    </section>
  );
};

export default ProductCard;