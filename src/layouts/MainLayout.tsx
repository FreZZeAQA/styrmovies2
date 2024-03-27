import React, {FC} from "react";
import {Header, Loader} from "../components";
import {Outlet} from "react-router-dom";


const MainLayout : FC = () => {
 return (
  <div>
      <Header/>
      <Loader/>
      <Outlet/>
  </div>
 );
};

export {MainLayout};
