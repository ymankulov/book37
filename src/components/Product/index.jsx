import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import ProductCard from "../ProductCard";

const Product = () => {
  const { books, setBooks } = useContext(BookShopContext);
  function sorting(e) {
    let sort = e.target.value;
    const sortProduct = books.slice().sort((a, b) => {
      if (sort === "cheap") {
        return b.price - a.price;
      } else if (sort === "expensive") {
        return a.price - b.price;
      } else if (sort === "A-Z") {
        return a.name.localeCompare(b.name);
      } else if (sort === "Z-A") {
        return b.name.localeCompare(a.name);
      }
    });
    setBooks(sortProduct);
  }
  return (
    <div className="my-[50px]">
      <div className="container">
        <div className="flex items-center justify-end">
          <select
            onChange={sorting}
            className="text-2xl border-2 border-solid border-black py-[10px] px-[30px] rounded-xl outline-none"
          >
            <option value="cheap">Cheap</option>
            <option value="expensive">Expensive</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <div className=" flex flex-wrap gap-6">
          {books.map((el) => (
            <ProductCard val={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
