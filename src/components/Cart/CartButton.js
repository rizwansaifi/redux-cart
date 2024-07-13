import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  function toggleCart() {
    dispatch(uiActions.toggleCart());
  }
  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
