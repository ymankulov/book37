import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminModalWindow = () => {
  const { adminPassword, setAdminPassword, setAdminIcon } =
    useContext(BookShopContext);
  const [typeInput, setTypeInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const messageError = () =>
    toast.error("🦄 Неверный пароль!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  function handleAdmin() {
    if (inputValue === "123") {
      navigate("/admin");
      setAdminPassword(false);
      setAdminIcon(true);
    } else {
      messageError();
    }
  }

  return (
    <div className="bg-gray-500 w-[697px] h-[463px] flex flex-col items-center justify-center gap-[50px] rounded-[10px]">
      <div className="relative">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="border-inherit-[black] outline-none text-black py-[10px] px-[30px] rounded-xl"
          type={typeInput ? "text" : "password"}
          placeholder="Password"
        />
        <a
          onClick={() => setTypeInput(!typeInput)}
          className="text-4xl cursor-pointer text-blue-900 absolute top-[10px] right-[10px]"
        >
          {!typeInput ? <IoEyeSharp /> : <FaEyeSlash />}
        </a>
      </div>
      <button
        onClick={() => handleAdmin()}
        className="rounded-[10px] bg-[#010049] text-white py-[10px] px-[30px]"
      >
        SIGN IN
      </button>
      <ToastContainer />

      <h1
        className=" text-black cursor-pointer absolute top-[21px] right-[33px]"
        onClick={() => {
          setAdminPassword(false);
        }}
      >
        x
      </h1>
    </div>
  );
};

export default AdminModalWindow;
