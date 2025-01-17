import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CircleX, ShoppingCart, Trash } from "lucide-react";
import { useStore } from "../app/_store/store";
import { useShallow } from "zustand/shallow";
import ChangeQtyButtons from "@/components/ChangeQtyButtons";

const Cart = () => {
  const { reset, products, removeProduct, total } = useStore(
    useShallow((state) => ({
      reset: state.reset,
      products: state.products,
      removeProduct: state.removeProduct,
      total: state.total,
    }))
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon">
          <ShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-scroll">
        <h1>Cart</h1>
        <Button onClick={reset} size="icon">
          <CircleX />
        </Button>
        {products.map((item) => (
          <div key={item.id} className="border p-5 rounded-xl">
            <p>{item.title}</p>
            <Button
              onClick={() => removeProduct(item.id)}
              variant="destructive"
              size="icon"
            >
              <Trash />
            </Button>
            <p>${item.price}</p>
            <ChangeQtyButtons productId={item.id} />
            <p>Total: ${total}</p>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
export default Cart;
