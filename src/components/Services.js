import React from 'react';
import { LiaCertificateSolid } from 'react-icons/lia';
import { BiCertification } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <LiaCertificateSolid
          color="#b79809 "
          size={30}
        />
      ),
      name: 'Original Products',
    },
    {
      id: 2,
      icon: (
        <BiCertification
          color="#b79809"
          size={30}
        />
      ),
      name: 'Reliable Quality',
    },
    {
      id: 3,
      icon: (
        <TbTruckDelivery
          color="#b79809"
          size={30}
        />
      ),
      name: 'Fast Delivery',
    },
  ];
  return (
    <div className=" flex justify-evenly w-full p-3 m-2">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center">
          <span className="rounded-full bg-[#fffbe9]">{service.icon}</span>
          <div className="font-semibold">{service.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Services;
