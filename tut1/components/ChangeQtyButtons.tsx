import { useStore } from "@/app/_store/store";
import { useShallow } from "zustand/shallow";
import { Button } from "./ui/button";
import { useEffect } from "react";

type Props = { productId: string };

const ChangeQtyButtons = ({ productId }: Props) => {
  const { getProductById, incQty, decQty, setTotal } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      incQty: state.incQty,
      decQty: state.decQty,
      setTotal: state.setTotal,
    }))
  );

  const product = getProductById(productId);

  useEffect(() => {
    const unSub = useStore.subscribe(
      //subscribe to state changes
      (state) => state.products, //subscribe to products changes
      (products) => {
        //define what to do with the changed products
        setTotal(
          products.reduce((acc, item) => acc + item.price * item.qty, 0)
        );
      },
      { fireImmediately: true }
    );
    return unSub;
  }, [setTotal]);

  return (
    <>
      {product && (
        <div className="space-x-1">
          <Button onClick={() => decQty(product.id)} size="icon">
            -
          </Button>
          <span>{product.qty}</span>
          <Button onClick={() => incQty(product.id)} size="icon">
            +
          </Button>
        </div>
      )}
    </>
  );
};
export default ChangeQtyButtons;
