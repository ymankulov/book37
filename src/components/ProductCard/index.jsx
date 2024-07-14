import React, { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { IoIosCloseCircle } from "react-icons/io";
import { BookShopContext } from "../../context";
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = ({ val }) => {
  const { books, setBooks } = useContext(BookShopContext);
  const { basket, setBasket } = useContext(BookShopContext);
  const navigate = useNavigate();
  const naviBasket = useNavigate()

   const allBasket = () => {
    let result = [...basket, val]
    setBasket(result)
    localStorage.setItem('basket', JSON.stringify(result))
   }

  function deleteBook() {
    let deleteProduct = books.filter((el) => el.id !== val.id);
    setBooks(deleteProduct);
    localStorage.setItem("books", JSON.stringify(deleteProduct));
  }
  // console.log(allBasket(÷));

  return (
    <div className=" w-[300px] h-[576px] border-2 border-solid border-blue-900 relative">
      <Zoom>
        <img className=" w-[100%] border-[]" src={val.images} alt="" />
      </Zoom>
      <div className=" p-3 flex items-center justify-between">
        <h1 className=" text-[28px] font-bold">{val.price} $</h1>
        <a className=" text-[30px]" onClick={()=> {
          allBasket()
        }}>
          <MdOutlineShoppingCart />
        </a>
      </div>
      <h2
        className="  p-3 text-[18px] cursor-pointer"
        onClick={() => {
          navigate(`/detailsPage/${val.id}`);
        }}
      >
        {val.name}{" "}
      </h2>
      <a
        onClick={() => deleteBook()}
        className="text-[35px] text-red-500 absolute top-[5px] right-[5px] cursor-pointer"
      >
        <IoIosCloseCircle />
      </a>
    </div>
  );
};

export default ProductCard;
