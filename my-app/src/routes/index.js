import Home from "../screens/home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const RouteStack = () => {
  const RoutesData = [
    {
      id: 1,
      name: "/",
      screenName: <Home />,
    },
  ];
  return (
    <>
      {RoutesData?.map((item) => (
        <Routes>
          <Route path={item?.name} element={item?.screenName} />
        </Routes>
      ))}
    </>
  );
};

export default RouteStack;
