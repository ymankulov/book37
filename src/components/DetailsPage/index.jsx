import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BookShopContext } from "../../context";

const DetailsPage = () => {
    const {books} = useContext(BookShopContext)
  const [param, setParam] = useState("");
    const { id } = useParams();
    function setParams() {
      let res = books.find((item) => item.id === id);
      setParam(res);
    }
    // console.log(id, "id");

    useEffect(() => {
      setParams();
    }, []);
  return (
    <div>
      <div className="conatainer">
        <div className="">
          <h1>jhggfhg</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
