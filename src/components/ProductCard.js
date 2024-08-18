import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  MdArrowRightAlt,
  MdOutlineStar,
  MdOutlineShoppingCart,
} from "react-icons/md";

import { FaRegTrashAlt } from "react-icons/fa";

const ProductCard = ({ product, onDelete }) => {
  const router = useRouter();
  const stars = Array(5)
    .fill(null)
    .map(() => ({
      icon: <MdOutlineStar color="#eadfd8" />,
    }));

  for (let index = 0; index < product.rating; index++) {
    stars[index].icon = <MdOutlineStar color="#e75313" />;
  }
  return (
    <div className="card flex-col w-72 p-6 m-2" key={product.id}>
      <div className="flex gap-3">
        <div className="w-2/3">
          <Image
            src={
              product.image
                ? "http://localhost:9850/" + product.image
                : "https://images.goodsmile.info/cgm/images/product/20220323/12493/96860/large/5ad211a56ef6c6f30aee4ca1d889c89a.jpg"
            }
            width={144}
            height={144}
            alt="Product Image"
            className="rounded"
          />
        </div>

        <button
          onClick={() => onDelete(product.id)}
          className="w-1/3 flex place-content-end"
        >
          <FaRegTrashAlt color="#b79809" size={24} />
        </button>
        <button
          onClick={() => {
            router.push("/orders/new");
          }}
          className="w-1/3 flex place-content-end"
        >
          <MdOutlineShoppingCart color="#b79809" size={24} />
        </button>
      </div>
      <div className="font-semibold">{product.title}</div>
      <div className="flex justify-between items-center">
        <div className="font-normal">{product.price.toFixed(2)} EGP</div>
        <div className="flex">{stars.map((star) => star.icon)}</div>
      </div>
      <div
        className="flex items-center text-[#b79809] justify-end cursor-pointer"
        onClick={() => {
          alert(`You clicked on ${product.name}`);
        }}
      >
        See details <MdArrowRightAlt />
      </div>
    </div>
  );
};

export default ProductCard;
