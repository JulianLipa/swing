"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";

const AddToCart = ({ name, price, id, image }) => {
  const { handleAddToCart } = useAppContext();

  return (
    <>
      <button onClick={() => handleAddToCart(name, price, image, id, 1)} className='bg-pink-color font-mundial px-12 flex column items-center justify-center'>
      <Image
            src={`/carrito-blanco.svg`}
            width={17}
            height={17}
            alt='Cart'
          className="mr-3"/>
        Agregar al carrito
      </button>
    </>
  );
};

export default AddToCart;
