import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData, sentCartData } from "./store/cart-actions";
import { cartActions } from "./store/cart-slice";

let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  // 1st way :keeping the request code in the component

  // useEffect(() => {
  //   const sentCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "sending...",
  //         message: "sending cart data!",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://redux-async-f9d75-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Sending cart data failed");
  //     }
  //     //const responseData = await response.json(); no need of this as we don't do anything with the response data

  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Success!",
  //         message: "Sent cart data successfully!",
  //       })
  //     );
  //   };
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   sentCartData().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Sending cart data failed!",
  //       })
  //     );
  //   });
  // }, [cart,dispatch]);

  // 2nd way :keeping the request code in the store
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) dispatch(sentCartData(cart));
  }, [cart, dispatch]);

  //Fetching cart data
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
