import { useStore } from "@/app/_store/store";
import { useShallow } from "zustand/shallow";
import { Button } from "./ui/button";

type Props = { productId: string };

const ChangeQtyButtons = ({ productId }: Props) => {
  const { getProductById, incQty, decQty } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      incQty: state.incQty,
      decQty: state.decQty,
    }))
  );

  const product = getProductById(productId);

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
