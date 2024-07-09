import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import homeImg from "../../assets/images/homeimg.png";
import Product from "../Product";

const Home = () => {
  const { adminPassword, setAdminPassword } = useContext(BookShopContext);
  return (
    <>
    <div
      style={{
        background: `url(${homeImg}) no-repeat center/cover`,
        minHeight: "60vh",
      }}
      className="home"
    >
      <div className="container">

        
      </div>
    </div>
    <Product/>
    </>
  );
};

export default Home;
