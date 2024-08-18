import React, { useState } from "react";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

const Rating = () => {
  const [selected, setSelected] = useState(5);
  return (
    <div className="w-64 bg-white rounded p-1 m-1">
      <h2 className="font-semibold text-2xl my-3">Rating</h2>
      <div className="flex">
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            idx <= selected && (
              <MdOutlineStar
                className={`hover:scale-110 text-gold hover:fill-gold`}
                onClick={() => setSelected(idx + 1)}
              />
            );
            idx > selected && (
              <MdOutlineStarOutline
                className={`hover:scale-110 text-gold hover:fill-gold`}
                onClick={() => setSelected(idx + 1)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Rating;
