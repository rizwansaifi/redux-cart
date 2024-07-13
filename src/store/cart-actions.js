import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     title: "fetching...",
    //     message: "fetching cart data!",
    //   })
    // );
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-async-f9d75-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data failed");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          total: cartData.total,
          quantity: cartData.quantity,
        })
      );
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       title: "Success!",
      //       message: "Sent cart data successfully!",
      //     })
      //   );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sentCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-async-f9d75-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
