 import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Outlet } from "react-router";




  export function Layout(){

  return(<>
        <Header/>
        <Outlet/>
        <Footer/>

  </>)

  }