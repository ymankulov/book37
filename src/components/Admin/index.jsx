import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";

const Admin = () => {
  const { books, setBooks } = useContext(BookShopContext);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productUrl, setProductUrl] = useState("");

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };

  function createBook() {
    let newProduct = {
      id: books.length ? books[books.length - 1].id + 1 : 1,
      name: productName,
      price: productPrice,
      category: productCategory,
      description: productDes,
      images: productUrl,
    };
    let result = [...books, newProduct];
    setBooks(result);
    localStorage.setItem("books", JSON.stringify(result));
    setProductCategory("");
    setProductName("");
    setProductPrice("");
    setProductDes("");
  }

  return (
    <div className="mt-[70px]">
      <div className="container">
        <div className="flex items-start justify-around">
          <div class="flex items-center justify-center w-[40%] mt-[50px]">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-[400px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="w-[500px] flex items-center justify-center flex-col gap-6">
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              type="text"
              placeholder="Product Name"
              className="text-[30px] border-[3px] border-solid border-blue-900 rounded-md outline-none py-[10px] px-[30px] w-[100%]"
            />
            <div className="flex items-center justify-between w-full">
              <input
                onChange={(e) => setProductCategory(e.target.value)}
                value={productCategory}
                type="text"
                placeholder="Category"
                className="text-[30px] border-[3px] border-solid border-blue-900 rounded-md outline-none py-[10px] px-[30px] w-[53%]"
              />
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
                type="text"
                placeholder="Price"
                className="text-[30px] border-[3px] border-solid border-blue-900 rounded-md outline-none py-[10px] px-[30px] w-[40%]"
              />
            </div>
            <textarea
              onChange={(e) => setProductDes(e.target.value)}
              value={productDes}
              name=""
              id=""
              cols="20"
              rows="4"
              placeholder="Product description..."
              className="text-[30px] border-[3px] border-solid border-blue-900 rounded-md outline-none py-[10px] px-[30px] w-[100%]"
            ></textarea>
            <button
              onClick={() => createBook()}
              className="text-3xl text-blue-900 font-bold border-4 border-solid border-blue-900 py-[10px] px-[45px] rounded-xl w-[100%]"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
