import Image from "next/image";
import Banner from "./components/home-component/Banner";
import Product from "./components/home-component/Product";

export default function Home() {
  
    //here we use seo factors and server side rendering so dont use client side feature instead break it into component and use it there if needed
  return (
    <>

    <Banner/>
    <Product/>
    </>
  );
}
