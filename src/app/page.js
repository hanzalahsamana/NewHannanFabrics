"use client";

import Collection from "@/components/sections/collection";
import CollectionAbout from "@/components/sections/collectionAbout";
import FabricsAbout from "@/components/sections/fabricsAbout";
import FabricsLiberary from "@/components/sections/fabricsLiberary";
import Hero from "@/components/sections/hero";
import Contact from "./contact/page";
import Products from "./products/page";


export default function Home() {
 
  return (
    <>
    <Hero/>
    <Collection/>
    <FabricsAbout/>
    <Products maxLength={4}/>
    <CollectionAbout/>
    <FabricsLiberary/>
    <Contact/>
    </>
  );
}
