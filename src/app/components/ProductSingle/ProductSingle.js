import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";
import styles from '@/app/components/ProductSingle/ProductSingle.module.css'

const ProductSingle = ({ product }) => {
  const { image, name, price, artist, description, _id } = product;
  console.log(_id)
  return (
    <section className={styles["section"]}>
      <Image src={image} alt={name}
        height={600}
        width={600} />
      <div className={styles["details"]}>
        <div className={styles["product"]}>
          <div className={styles["name"]}>
          <h1>{name}</h1>
          <h4>{artist}</h4>
          </div>
          <h2>${price}</h2>
        </div>
        <div className={styles["text"]}>
          <p>{description}</p>
          <div className={styles["actions"]}>
            <div className={styles["button"]}>
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <AddToCart price={price} name={name} image={image} id={_id} />
          </div>
          <Image src='/pago.png'
            alt='Pago'
            height={300}
            width={300} />
        </div>
      </div>
    </section>
  );
};

export default ProductSingle;
