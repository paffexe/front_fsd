import { memo } from "react";
import Hero from "./Hero";
import OurProducts from "./ProductList";


export const Home = memo(() => {
 return(
  <main>
    <Hero/>
    <OurProducts/>
  </main>
 )
});
