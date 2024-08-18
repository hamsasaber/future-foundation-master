"use client";

import ProductCard from "@/components/ProductCard";
import Services from "@/components/Services";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import Cards from "@/components/Filters/Cards";
import Price from "@/components/Filters/Price";
import Types from "@/components/Filters/Types";
import Rating from "@/components/Filters/Rating";
import Image from "next/image";

const Page = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get("http://localhost:9850/api/v1/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleDelete = (productId) => {
    axios
      .delete(`http://192.168.1.31:9850/api/v1/products/${productId}`)
      .then((res) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      });
  };
  return (
    <div className="bg-slate-100">
      <div className="bg-[#fffbe9] m-3 flex">
        <div className="text-[#b79809] text-3xl">
          New Merchandise! <br />
          Up to 40%
        </div>
        <div className="flex justify-end">
          <Image
            src="http://192.168.1.31:9850/images/museum.PNG"
            width={144}
            height={144}
            alt="Header image"
          />
        </div>
      </div>
      <div className=" flex flex-row">
        <Services />
      </div>
      <div className="m-2 flex">
        {!products && (
          <div className="flex h-screen w-screen place-content-center place-items-center">
            <PropagateLoader color="#b79809" />
          </div>
        )}
        {products && products.length > 0 ? (
          <div className="flex">
            <div>
              <div className="m-4">
                <Cards />
              </div>
              <div>
                <Price />
              </div>
              <div>
                <Types />
              </div>
              <div>
                <Rating />
              </div>
            </div>
            <div className="flex">
              {products &&
                products.map((product) => (
                  <ProductCard
                    product={product}
                    key={product.id}
                    onDelete={handleDelete}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div className="flex-col h-full w-full space-y-2">
            <Link
              className="  bg-gold text-white p-3 hover:bg-yellow-600"
              href={"/products/new"}
            >
              No products found, click to add new
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
