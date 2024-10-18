"use client";

import CollectionCard from "@/components/UI/collectionCard";
import collection1 from '../../assets/images/productImages/heritage-1.jpg'
import collection2 from '../../assets/images/productImages/shane-azwan-1.jpg'
import collection3 from '../../assets/images/productImages/heritage-2.jpg'

const Collection = () => {
    const collections = [{
        _id: 1,
        title: "Heritage",
        alt: "Heritage",
        image: collection1.src,
        link: "/collection/heritage",
      },
      {
        _id: 2,
        title: "Shane Azwan",
        alt: "Shane Azwan",
        image: collection2.src,
        link: "/collection/shane-azwan",
      }, {
        _id: 3,
        title: "Heritage",
        alt: "Heritage",
        image: collection3.src,
        link: "/collection/heritage",
      }
      ]
  return (
    <div className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-5 m-6">
      {collections?.map((collection) => (
        <CollectionCard key={collection._id} collection={collection} />
      ))}
    </div>
  );
};

export default Collection;
