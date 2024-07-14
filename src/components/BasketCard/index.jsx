import React, { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BookShopContext } from "../../context";

const BasketCard = ({ el }) => {
 const {basket, setBasket} = useContext(BookShopContext)

   

  return (
    <div>
      <div className="container mt-[50px]">
        <div className="flex items-center gap-[30px]">
          <img src={el.images} alt="" className="w-[20%]" />
          <div className="flex items-start flex-col gap-[20px]">
            <h1 className="text-[40px] font-[600]">{el.name}</h1>
            <h1 className="text-3xl">{el.price}$</h1>
            <div className="flex items-center">
              <button className="w-[40px] h-[30px] bg-gray-950 text-white flex items-center justify-center ">
                -
              </button>
              <h1 className="w-[40px] h-[30px] border-2 border-solid border-gray-950 flex items-center justify-center ">
                1
              </h1>
              <button className="w-[40px] h-[30px]  bg-gray-950 text-white flex items-center justify-center ">
                +
              </button>
            </div>
            <h1 className="flex items-center justify-center text-[20px] gap-[5px]">
              Delete{<RiDeleteBin5Fill />}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
