import axios from 'axios';
import Product from "@/app/models/Product";
import dbConnect from '@/app/database/dbConnect'

const getAllProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    console.log("hola mundo3",response)
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (id) => {
  try {
    const response = await axios.post('http://localhost:3000/api/products', {
      id,
    });
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

const  getAllProductsDB = async () => {
  await dbConnect();
  try {
    const products = await Product.find().sort({ name: "asc" });
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { products: [], category: null };
  }
}

const getOneProductDB = async (id) => {
  await dbConnect();
  try {
    const product = await Product.findById(id)
    return{product: JSON.parse(JSON.stringify(product))}
  } catch (error) {
    console.log(error)
    return null;
  }
}

export { getAllProducts, getOneProduct, getAllProductsDB, getOneProductDB };
