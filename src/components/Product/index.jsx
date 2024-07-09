import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import ProductCard from "../ProductCard";

const Product = () => {
  const { books, setBooks } = useContext(BookShopContext);
  return (
    <div>
      <div className="container">
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
