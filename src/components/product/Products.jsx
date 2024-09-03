import React, { memo } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { Card } from "antd";
import Sceleton from "./Sceleton";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ data, loading }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  console.log(data);
  if (loading) {
    return <Sceleton limit={10} />;
  }

  let items = data?.map((product) => (
    <Card className=" flex gap-1 relative" key={product.id}>
        <div>
            <img src={product.images[0]} alt="" className='w-full h-60 object-contain transition-all hover:scale-105 cursor-pointer' />
        </div>
        <h2 className='text-3xl'>{product.title}</h2>
        <p className='font-bold text-red-500'>{product.price}$</p>
        <p className='text-gray-500'>{product.description}</p>
        <CiHeart className='cursor-pointer text-2xl active:text-red-500 flex absolute right-2 top-2' onClick={() =>
             dispatch({ type: "TOGGLE_WISHLIST", payload: product })
         } />
         <button className="border flex items-center px-3 rounded-xl bg-green-500 gap-1 py-1 text-[#fff]" 
         onClick={() => { dispatch({ type: "ADD_TO_CART", payload: product });}} >
              <PiShoppingCartLight />Add to cart</button>
    </Card>
  ));

  return (
    <div className="container items-center justify-center mx-auto">
      <div className="grid items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items}
      </div>
    </div>
  );
};

export default memo(Product);
