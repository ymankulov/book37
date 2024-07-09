import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Basket from "./components/Basket";
import Admin from "./components/Admin";
import { useContext } from "react";
import { BookShopContext } from "./context";

function App() {
  let routers = [
    {
      id: 1,
      link: `/`,
      element: <Home />,
    },
    {
      id: 2,
      link: `/search`,
      element: <Search />,
    },
    {
      id: 3,
      link: `/basket`,
      element: <Basket />,
    },
    {
      id: 4,
      link: `/admin`,
      element: <Admin />,
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        {routers.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
}

export default App;
