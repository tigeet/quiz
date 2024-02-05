import { RouterProvider } from "react-router-dom";

import "./style.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { router } from "./router";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};
export { App };
