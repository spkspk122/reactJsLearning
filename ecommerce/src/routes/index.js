import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../screens/dashBoard";
import Cart from "../screens/cart";
export default function RouteStack() {
  const RoutesData = [
    {
      id: 1,
      layout: "/",
      childer: <DashBoard />,
    },
    {
      id: 2,
      layout: "/cart",
      childer: <Cart />,
    },
  ];
  return (
    <>
      {RoutesData?.map((data, i) => (
        <Routes key={i}>
          <Route path={data?.layout} element={data?.childer}></Route>
        </Routes>
      ))}
    </>
  );
}
