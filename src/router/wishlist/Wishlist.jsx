import Products from "@/components/product/Products";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const state = useSelector((state) => state.wishlist);
  console.log(state);
  return (
    <div>
      <Products data={state} />
    </div>
  );
};

export default Wishlist;
