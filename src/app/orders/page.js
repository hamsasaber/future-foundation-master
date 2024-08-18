"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderCard from "@/components/OrderCard";
import Services from "@/components/Services";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [orders, setOrders] = useState();
  useEffect(() => {
    axios.get("http://localhost:9850/api/v1/orders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  const handleDelete = (orderId) => {
    axios
      .delete(`http://192.168.1.31:9850/api/v1/orders/${orderId}`)
      .then((res) => {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== orderId)
        );
      });
  };

  return (
    <div className="bg-slate-100">
      <div className=" flex flex-row">
        <Services />
      </div>
      <div className="flex">
        {orders &&
          orders.map((order) => (
            <OrderCard
              order={order}
              key={order.id}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      <button
        className="bg-gold text-white w-36 p-2 rounded m-2"
        onClick={() => {
          router.push("orders/new");
        }}
      >
        Place new Order
      </button>
    </div>
  );
};

export default Page;
