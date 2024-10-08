"use client";

import Collection from "@/components/sections/collection";
import CollectionAbout from "@/components/sections/collectionAbout";
import FabricsAbout from "@/components/sections/fabricsAbout";
import FabricsLiberary from "@/components/sections/fabricsLiberary";


export default function Home() {
 
  return (
    <>
    <Collection/>
    <FabricsAbout/>
    <CollectionAbout/>
    <FabricsLiberary/>
    </>
  );
}
