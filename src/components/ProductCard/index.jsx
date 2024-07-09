import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ val }) => {
  return (
    <div className="">
      <div className=" py-5">
        <div className=" w-[300px] h-[576px] border-2 border-solid border-blue-900">
          <a href="https://2books.su/books/harry-potter-2-harry-potter-and-the-chamber-of-secrets-j-k-rowling/">
            <img className=" w-[100%] border-[]" src={val.images} alt="" />
          </a>

          <div className=" p-3 flex items-center justify-between">
            <h1 className=" text-[28px] font-bold">{val.price} $</h1>
            <a className=" text-[30px]">
              <MdOutlineShoppingCart />
            </a>
          </div>
          <h2 className="  p-3 text-[18px]">{val.name} </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
