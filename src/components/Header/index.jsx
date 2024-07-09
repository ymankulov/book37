import React, { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BookShopContext } from "../../context";
import AdminModalWindow from "../AdminModalWindow";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { adminPassword, setAdminPassword, adminIcon, setAdminIcon } =
    useContext(BookShopContext);
    const navigate = useNavigate()
  return (
    <div className="bg-blue-900 py-[30px]">
      <div className="container ">
        <div className="flex items-center justify-between">
          <a onClick={() => {
            setAdminIcon(false)
            navigate("/")
          }} className="text-4xl text-white font-black">
            BookShop
          </a>
          <div className="flex items-center justify-center gap-20">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="text-2xl py-[10px] p-[30px] rounded-xl outline-none"
              />
              <a className="text-gray-400 text-[35px] absolute top-[8px] right-[10px]">
                <IoSearch />
              </a>
            </div>
            <Link
              to={"/basket"}
              className="flex items-center justify-center flex-col text-[25px] text-white font-bold"
            >
              <a className="">
                <IoCart />
              </a>
              <h2>Корзина</h2>
            </Link>

            {!adminIcon ? (
              <div className="flex items-center justify-center flex-col text-[25px] text-white font-bold">
                <a className="">
                  <FaRegUserCircle
                    className="cursor-pointer"
                    onClick={() => {
                      setAdminPassword(true);
                    }}
                  />
                </a>
                <h2>Админ</h2>
              </div>
            ) : null}

            {adminPassword ? (
              <div
                className="fixed left-[27%] top-[20%]  text-[25px] text-white font-bold
               rounded-[10px] "
              >
                <AdminModalWindow />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
