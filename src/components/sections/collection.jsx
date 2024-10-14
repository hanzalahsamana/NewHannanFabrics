"use client";

import CollectionCard from "@/components/UI/collectionCard";
import collection1 from '../../assets/images/productImages/Teal-Blue-1.jpg'

const Collection = () => {
    const collections = [{
        id: 1,
        title: "Heritage",
        alt: "Heritage",
        image: collection1.src,
        link: "/collections/heritage",
      },
      {
        id: 2,
        title: "Shane Azwan",
        alt: "Shane Azwan",
        image: collection1.src,
        link: "/collections/shan_e_azwan",
      }, {
        id: 3,
        title: "Heritage",
        alt: "Heritage",
        image: collection1.src,
        link: "/collections/heritage",
      }
      ]
  return (
    <div className="grid grid-cols-3 px-[30px] gap-5 m-6">
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default Collection;