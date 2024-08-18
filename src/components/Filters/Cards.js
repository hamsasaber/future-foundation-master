import React from "react";
import { GiFilmProjector, GiPharoah } from "react-icons/gi";
import { LiaTheaterMasksSolid } from "react-icons/lia";

const Cards = () => {
  const cards = [
    {
      id: 1,
      icon: <GiFilmProjector color="white" size={40} />,
      title: "Museum",
    },
    {
      id: 2,
      icon: <LiaTheaterMasksSolid color="white" size={40} />,
      title: "Tour",
    },
    {
      id: 3,
      icon: <GiPharoah color="white" size={40} />,
      title: "Exhibit",
    },
  ];
  return (
    <div className=" w-64 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white w-28 flex flex-col items-center "
        >
          <div className="bg-[#b79809] w-14 flex justify-center rounded m-2">
            {card.icon}
          </div>
          <div className="font-thin">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
