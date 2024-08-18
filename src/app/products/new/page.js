"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Services from "@/components/Services";

const Page = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [file, setFile] = React.useState(null);
  const router = useRouter();
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); //form data 3shan images cannot be read 3ade they need a middleware (multer) so form data is used 3shan a3raf ab3at images
    //this is how data is sent badl i.e.(title:name)
    formData.append("title", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", file);
    await axios
      .post("http://localhost:9850/api/v1/products", formData)
      .then((res) => {
        if (res.status === 200) {
          alert("Product added successfully");
          router.push("/products");
        }
      });
  };
  return (
    <div className="p-4">
      <div className=" flex flex-row">
        <Services />
      </div>
      <div className="underline mb-4">Add a new product</div>
      <form
        className="flex-col flex gap-5"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="file" //type file allows multiple files to be selected and it allows user to choose file from pc
          onChange={(e) => setFile(e.target.files[0])} //zero indicates eno awl file
        />
        <button type="submit" className="bg-gold text-white w-36 p-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Page;
