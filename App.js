import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import About from "./src/Components//About";
import ContactUs from "./src/Components/ContactUs";
import Cart from "./src/Components/Cart";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./Components/Grocery";

//chunking
//code splitting
//demand loading
//dynamic bundling
//lazy loading
//dynamic import

const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo]= useState("Dharshini");
  return (
    <div className="font-serif">
      <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo} }>

      <Header />
      </UserContext.Provider>
      
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
