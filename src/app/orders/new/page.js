"use client";
import React, { useEffect, useState } from "react";
import Services from "@/components/Services";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const [address, setAddress] = useState();
  const [date, setDate] = useState("");
  const router = useRouter();

  const [customers, setCustomers] = useState();
  const [customerId, setCustomerID] = useState("");
  const [products, setProducts] = useState();
  const [productId, setProductID] = useState("");

  const handleSelected = (e) => {
    const { name, value } = e.target;

    if (name === "customer") {
      setCustomerID(value);
    } else if (name === "product") {
      setProductID(value);
    }
  };

  useEffect(() => {
    axios.get("http://192.168.1.31:9850/api/v1/customers").then((res) => {
      setCustomers(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://192.168.1.31:9850/api/v1/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9850/api/v1/orders", {
        deliveryAddress: address,
        deliveryDate: date,
        customerId: customerId,
        productId: productId,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Customer added successfully");
          router.push("/orders");
        }
      });
  };
  return (
    <div>
      <div className=" flex flex-row">
        <Services />
      </div>
      <div className="bg-slate-300 rounded w-72 h-80 m-2">
        <form
          onSubmit={(e) => {
            submit(e);
          }}
        >
          select User
          <select
            name="customer"
            className="w-64"
            onChange={handleSelected}
            value={customerId}
          >
            {customers &&
              customers.map((customer) => {
                return (
                  <option key={customer.id} value={customer.id}>
                    {customer.id}. {customer.username}
                  </option>
                );
              })}
          </select>
          select Product
          <select
            name="product"
            className="w-64"
            onChange={handleSelected}
            value={productId}
          >
            {products &&
              products.map((product) => {
                return (
                  <option key={product.id} value={product.id}>
                    {product.id}. {product.title} ${product.price}
                  </option>
                );
              })}
          </select>
          <input
            placeholder="Enter Delivery address"
            className="m-2 rounded"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input
            type="date"
            placeholder="Choose delivery date"
            className="m-2 rounded"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />
          <button
            type="submit"
            className="bg-gold text-white w-36 p-2 rounded m-2"
          >
            Place Order{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
