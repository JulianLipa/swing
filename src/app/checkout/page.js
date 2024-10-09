import ProductsCheckout from "@/app/components/Cart/ProductsCheckout";
import FormCheckout from "@/app/components/Cart/FormCheckout";
import styles from "@/app/checkout/checkout.module.css";

const Cart = () => {
  return (
    <section className={styles["checkout-section"]}>
      <h1>Checkout</h1>
      <div className={styles["inner"]}>
          <div>
            <FormCheckout />
          </div>
          <div>
            <ProductsCheckout />
          </div>
      </div>
    </section>
  );
};

export default Cart;
