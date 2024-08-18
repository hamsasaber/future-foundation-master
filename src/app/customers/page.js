"use client";
import React from "react";

import { useEffect, useState } from "react";
import Services from "@/components/Services";
import { PropagateLoader } from "react-spinners";
import axios from "axios";
import CustomerCard from "@/components/CustomerCard";
import Link from "next/link";

const Page = () => {
  const [customers, setCustomers] = useState();
  //getting all customers
  useEffect(() => {
    axios.get("http://192.168.1.31:9850/api/v1/customers").then((res) => {
      setCustomers(res.data);
    });
  }, []);

  const handleDelete = (customerId) => {
    axios
      .delete(`http://192.168.1.31:9850/api/v1/customers/${customerId}`)
      .then((res) => {
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== customerId)
        );
      });
  };
  return (
    <div className="bg-slate-100">
      <div className=" flex flex-row">
        <Services />
      </div>
      <div>
        {
          //lw mafeesh customers haytl3 a loader 3abal ma a-get el customers mn el db
          !customers && (
            <div className="flex h-screen w-screen place-content-center place-items-center">
              <PropagateLoader color="#b79809" />
            </div>
          )
        }
        {
          //checks eno length aktar mn zero and displays all customers thro customerCard component
          customers && customers.length > 0 ? (
            <div className="flex">
              {customers &&
                customers.map((customer) => (
                  <CustomerCard
                    //btakhod el customers wl ids 3shan el delete w function el delete ely 3mltaha fo2
                    customer={customer}
                    key={customer.id}
                    onDelete={handleDelete}
                  />
                ))}
            </div>
          ) : (
            <div className="flex-col h-full w-full space-y-2">
              <Link
                className="  bg-gold text-white p-3 hover:bg-yellow-600"
                href={"/customers/new"}
              >
                No customers found, click to add new
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Page;
