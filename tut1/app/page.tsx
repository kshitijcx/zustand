"use client";
import { useShallow } from "zustand/shallow";
import { useStore } from "./_store/store";
import App from "./basic";
import { PRODUCTS_DATA } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import ChangeQtyButtons from "@/components/ChangeQtyButtons";
import Cart from "@/components/Cart";

const Home = () => {
  // const store = useStore();

  // const { age, fullname } = useStore((state) => ({
  //   age: state.age,
  //   fullname: state.fullName,
  // }));

  //const address = useStore(state=>state.address)

  const { cartProducts, addProduct } = useStore(
    useShallow((state) => ({
      //useShallow prevents rerenders
      cartProducts: state.products,
      addProduct: state.addProduct,
    }))
  );

  return (
    <main className="py-5">
      <div className="space-y-4 w-60 mx-auto">
        <h1>Products</h1>
        <Cart/>
        {PRODUCTS_DATA.map((item) => (
          <div key={item.id} className="border p-5 rounded-xl">
            <p>{item.title}</p>
            <p>${item.price}</p>
            {cartProducts.find((product) => product.id === item.id) ? (
              <ChangeQtyButtons productId={item.id} />
            ) : (
              <Button onClick={() => addProduct(item)}>Add to Cart</Button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
export default Home;
