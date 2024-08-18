"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Services from "@/components/Services";

const Page = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const router = useRouter(); //3shan a3raf a3ml rerouting le another page

  //function 3shan lama a3ml submit ye post el data w ye reroute le page that displays all customers (cutomers/page.js)
  const submit = async (e) => {
    e.preventDefault(); //this stops el form mn clearing el inputs
    await axios
      .post(
        "http://localhost:9850/api/v1/customers", //post method lel api beta3y where my customers table is
        {
          //badkhl kol input le its name fl db
          username: name,
          email: email,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Customer added successfully");
          router.push("/customers"); //reroutes le page el customer
        }
      });
  };
  return (
    <div className="card flex-col w-72 p-6 m-2">
      <div className=" flex flex-row">
        <Services />
      </div>
      <form
        className="flex-col flex gap-5"
        //calls function submit lama a-click 3ala button type submit taht
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <input
          type="text"
          placeholder="Customer Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-gold text-white w-36 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
