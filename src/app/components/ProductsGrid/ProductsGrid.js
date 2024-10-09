import Inner from "@/app/components/Inner";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { getAllProducts, getAllProductsDB } from "@/app/actions";
import styles from "@/app/components/ProductsGrid/ProductsGrid.module.css";

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  return (
    <section className={styles["section"]}>
        <h2 className={styles["h2"]}>Productos seleccionados</h2>
        <p>Conocé y aprovechá las ofertas de nuestros productos seleccionados especialmente para vos</p>
        <div className={styles["div"]}>
          {response.products && response.products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
    </section>
  );
}


