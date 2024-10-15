"use client";

import Collection from "@/components/sections/collection";
import CollectionAbout from "@/components/sections/collectionAbout";
import FabricsAbout from "@/components/sections/fabricsAbout";
import FabricsLiberary from "@/components/sections/fabricsLiberary";
import Hero from "@/components/sections/hero";
import Contact from "./contact/page";


export default function Home() {
 
  return (
    <>
    <Hero/>
    <Collection/>
    <FabricsAbout/>
    <CollectionAbout/>
    <FabricsLiberary/>
    <Contact/>
    </>
  );
}
