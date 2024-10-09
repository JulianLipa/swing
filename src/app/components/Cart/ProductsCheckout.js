"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";
import styles from "@/app/components/Cart/Cart.module.css";

const ProductsCheckout = () => {
  const { cart, cartTotal, handleRemoveProduct } = useAppContext();
  return (
    <div className={styles["cart"]}>
      <h2>Tu pedido</h2>
      {cart.map((product) => (
        <div key={product.id} className={styles["product-div"]}>
          <div className={styles["product"]}>
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
            />
            <h3
              className={styles["product-name"]}
            >{`${product.quantity} x ${product.name}`}</h3>
            </div>
            <div className={styles["details"]}>
              <p className={styles["price"]}>
                ${product.price * product.quantity}
              </p>
              <Image
                src={`/delete.svg`}
                alt='Delete Icon'
                width={15}
                height={15}
                onClick={() => handleRemoveProduct(product.id)} />
            </div>
        </div>
      ))}
      <p className={styles["total"]}>Total: ${cartTotal()}</p>
    </div>
  );
};

export default ProductsCheckout;