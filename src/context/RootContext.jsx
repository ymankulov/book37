import React, { useEffect, useState } from "react";
import { BookShopContext } from ".";

const RootContext = ({ children }) => {
  const [adminPassword, setAdminPassword] = useState(false);
  const [adminIcon, setAdminIcon] = useState(false);
  const [books, setBooks] = useState([]);

  const getProducts = () => {
    let res = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(res);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <BookShopContext.Provider
      value={{
        adminPassword,
        adminIcon,
        books,
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
