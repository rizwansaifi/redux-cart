import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const total = useSelector((state) => state.cart.total);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart </h2>
      <div>
        <span>Total </span>${total.toFixed(2)}
      </div>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.name,
              id: item.id,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
