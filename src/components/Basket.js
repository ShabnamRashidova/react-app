import React from "react";
import { Link } from "react-router-dom";
import BasketItem from "./BasketItem";
const Basket = ({ basket,setBasket, products, total }) => {
    const resetBasket=()=>{
        setBasket([])
    }
  return (
    <div className="basket">
        <div className="btn btn-info m-4"><Link to='/'>Ana Səhifə</Link></div>
      <h1 className="basket-title text-center my-3">
        {(total === 0 && <>Səbət boşdur  </> ) || <>Səbət</>}
      </h1>
      {(total === 0 && <>{null}</>) || <>
       <div className="row">
           <div className="col-lg-9">
           <table className="table table-bordered w-75 m-auto">
        <thead>
          <tr>
            <th>Məhsul</th>
            <th>Məhsulun adı</th>
            <th>Qiyməti</th>
            <th>Miqdarı</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => (
            <tr key={item.id}>
              <BasketItem
                item={item}
                product={products.find((p) => p.id === item.id)}
              />
            </tr>
          ))}
        </tbody>
      </table>
           </div>
           <div className="col-lg-2">
               <div className="actions d-flex flex-column">
               <h6>Toplam məbləğ:{total} m</h6>
               <button className="btn btn-danger reset-btn mt-3" onClick={resetBasket}>Səbəti sıfırla</button>
            
               </div>
           </div>
       </div>
     
      </>}
      
    </div>
  );
};

export default Basket;
