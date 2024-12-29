import App from "./App";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/cart";

const routes = [
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "shop",
        element: <Shop/>
      },
      {
        path: "cart",
        element: <Cart/>
      }
      
    ]
  },


  
];

export default routes;
