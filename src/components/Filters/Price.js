import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { RxSlider } from "react-icons/rx";
import { TbSquareNumber0, TbSquareNumber9 } from "react-icons/tb";
import { LuArrowRightSquare } from "react-icons/lu";

const Price = () => {
  const prices = [
    {
      id: 1,
      priceRange: "Up to 200",
      icon: <MdCheckBoxOutlineBlank />,
    },
    {
      id: 2,
      priceRange: "200-300",
      icon: <MdCheckBoxOutlineBlank />,
    },
    {
      id: 3,
      priceRange: "300-500",
      icon: <MdCheckBoxOutlineBlank />,
    },
    {
      id: 4,
      priceRange: "500-1000",
      icon: <MdCheckBoxOutlineBlank />,
    },
    {
      id: 5,
      priceRange: "1000+",
      icon: <MdCheckBoxOutlineBlank />,
    },
  ];
  return (
    <div className="w-64 bg-white rounded p-1 m-1">
      <h2 className="font-semibold text-2xl my-3">Price</h2>
      {prices.map((price) => (
        <div key={price.id} className="flex gap-3">
          <div>{price.icon}</div>
          <div>{price.priceRange}</div>
        </div>
      ))}
      <hr className="border-black"></hr>
      <div className="flex items-center gap-3">
        <MdCheckBoxOutlineBlank /> Range
      </div>
      <RxSlider />
      <div className="flex gap-2">
        <TbSquareNumber0 /> <GoDash /> <TbSquareNumber9 />{" "}
        <LuArrowRightSquare />
      </div>
    </div>
  );
};

export default Price;
