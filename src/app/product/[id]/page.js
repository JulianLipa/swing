import { getOneProductDB } from "@/app/actions";
import ProductSingle from "@/app/components/ProductSingle/ProductSingle";

const Product = async ({ params }) => {
  const { id } = params;
  const response = await getOneProductDB(id)
  return <ProductSingle product={response.product} />;
};

export default Product;