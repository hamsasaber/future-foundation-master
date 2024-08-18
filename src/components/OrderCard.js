import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const OrderCard = ({ order, handleDelete }) => {
  return (
    <div className="bg-slate-300 rounded w-72 h-80 m-2">
      <button onClick={() => handleDelete(order.id)}>
        <FaRegTrashAlt color="#b79809" size={24} />
      </button>
      <div className="bg-slate-200 rounded m-2 gap-y-2">
        <div className=" m-5">Product name: {order.product?.title}</div>
        <div className=" m-5">Customer: {order.customer?.username}</div>
        <div className=" m-5">Order Status: {order.status}</div>
        <div className=" m-5">Delivery Address: {order.deliveryAddress}</div>
        <div className=" m-5">Delivery Date: {order.deliveryDate}</div>
      </div>
    </div>
  );
};

export default OrderCard;
