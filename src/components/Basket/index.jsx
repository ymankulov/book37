import React, { useContext } from 'react';
import { BookShopContext } from '../../context';
import BasketCard from '../BasketCard';

const Basket = () => {
    const {basket} = useContext(BookShopContext)
    console.log(basket);
   

    return (
        <div>
            <div className="container">
                <div className="">
                   {
                    basket.map((el)=> (
                        <BasketCard el={el}/>
                    ))
                   }
                </div>
            </div>
        </div>
    );
};

export default Basket;