import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Types = () => {
  const types = [
    {
      id: 1,
      icon: <MdCheckBoxOutlineBlank />,
      title: "Clothes",
    },
    {
      id: 2,
      icon: <MdCheckBoxOutlineBlank />,
      title: "Toys",
    },
    {
      id: 3,
      icon: <MdCheckBoxOutlineBlank />,
      title: "Souvenirs",
    },
    {
      id: 4,
      icon: <MdCheckBoxOutlineBlank />,
      title: "Accessories",
    },
    {
      id: 5,
      icon: <MdCheckBoxOutlineBlank />,
      title: "Antiques",
    },
  ];
  return (
    <div className="w-64 bg-white rounded p-1 m-1">
      <h2 className="font-semibold text-2xl my-3">Type</h2>
      {types.map((type) => (
        <div key={type.id} className="flex gap-3">
          {type.icon} {type.title}
        </div>
      ))}
    </div>
  );
};

export default Types;
