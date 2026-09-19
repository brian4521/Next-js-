import React from "react";
import Link from "next/link";

export default function ProductCard({ data }) {
  return (
    <>
      {data ? (
        <figure className="min-w-0 overflow-hidden rounded-lg bg-white p-4 shadow-md">
          <img
            src={data.thumbanail}
            alt="Product"
            className="aspect-video h-auto w-full object-cover"
          />
          <h3 className="break-words">{data.title}</h3>
          <p className="break-words">
            {data.description} {data.price}
          </p>
          <button className="max-w-full whitespace-normal break-words rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            <Link href={`/product-server/${data.id}`}>Read More</Link>
          </button>
        </figure>
      ) : (
        <figure className="min-w-0 overflow-hidden rounded-lg bg-white p-4 shadow-md">
          <img
            src="https://pinnacle-khaki.vercel.app/mediaFiles/Home%20page/Counter%20number/slider%2001145/slider-5/mobile.webp"
            alt="Product"
            className="aspect-video h-auto w-full object-cover"
          />
          <h3 className="break-words">Product Name</h3>
          <p className="break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam
            beatae mollitia ducimus harum natus, fuga neque.
          </p>
          <button className="max-w-full whitespace-normal break-words rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Read More
          </button>
        </figure>
      )}
    </>
  );
}
