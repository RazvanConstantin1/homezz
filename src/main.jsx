import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./routes/NotFoundPage.jsx";
import Home from "./routes/Home.jsx";
import Cart from "./routes/Cart.jsx";
import Shop from "./routes/Shop.jsx";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";

import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Layout from "./routes/Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
