import { Card } from "antd";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);

  let item = data?.map((product) => {
    return (
      <div className="container mx-auto">
        <Card
        className="border w-full p-3 mb-7 flex  gap-11 items-center relative"
        key={product.id}
      >
        <div className="w-[350px]  h-60  rounded-lg">
          <img
            className="w-full h-full object-contain duration-300 hover:scale-105"
            src={product.images[0]}
            alt="Photo"
          />
        </div>
       <div>
       <div className="flex">
          <div className="flex flex-col gap-4">
            <p className="text-[20px] font-medium">{product.title}</p>
            <p className="w-[70%] text-[14px] ">{product.description}</p>
            <strong className="text-green-500">{product.weight} weight</strong>
            <strong className="text-red-500">{product.price} USD</strong>
          </div>
          <div className="absolute top-[5px] left-[10px]">
            <button>
              <CiHeart onClick={() => dispatch({ type: "TOGGLE_WISHLIST", payload: product }) } className="text-2xl hover:text-red-900"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button
            className="border flex items-center justify-center hover:bg-red-600 hover:text-white hover:transition-all py-1 w-[140px] font-[500] "
            onClick={() => dispatch({ type: "REMOVE_CART", payload: product })}>
            Delete
          </button>
        </div>
       </div>
      </Card>
      </div>
    );
  });
  return <div className="container">{item}</div>;
};

export default Cart;
