import React, { useEffect, useState } from "react";
import { BookShopContext } from ".";

const RootContext = ({ children }) => {
  const [adminPassword, setAdminPassword] = useState(false);
  const [adminIcon, setAdminIcon] = useState(false);
  const [books, setBooks] = useState([]);
  const [basket, setBasket] = useState([])

  const getProducts = () => {
    let res = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(res);
  };

  const getBasket = () => {
    let res = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(res)
  }

  useEffect(() => {
    getProducts();
    getBasket()
  }, []);
  return (
    <BookShopContext.Provider
      value={{
        adminPassword,
        adminIcon,
        books,
        basket,
        setBasket,
        setBooks,
        setAdminPassword,
        setAdminIcon,
      
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
};

export default RootContext;
