import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CustomerCard = ({ customer, onDelete }) => {
  return (
    <div className="card flex-col w-72 p-6 m-2" key={customer.id}>
      <button
        onClick={() => onDelete(customer.id)}
        className="w-1/3 flex place-content-end"
      >
        <FaRegTrashAlt color="#b79809" size={24} />
      </button>
      <div className="font-semibold">{customer.username}</div>
      <div>{customer.email}</div>
    </div>
  );
};

export default CustomerCard;
