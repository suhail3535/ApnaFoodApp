import React from "react";
import Body from "./components/Body components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import Cart from "./components/Cart/CartPage";
import MainContainer from "./components/Body components/MainContainer";
// import SelectedDishPage from "./components/SelectedDishPage";
import SelectedDishPage from "./components/SelectedFood/SelectedDishPage";
import { ChakraProvider } from "@chakra-ui/react";
import Foot from "./components/Body components/Foot";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/selectedDish",
        element: <SelectedDishPage />,
      },
      {
        path: "/footer",
        element: <Foot />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
