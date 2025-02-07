import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Ui() {
  const [products, SetProducts] = useState([]);
  async function GetProduct() {
    let res = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );

    console.log(res.data.data);
    SetProducts(res.data.data);

    console.log(res.data.data[10].title.split(" ").splice(0,2).join(" "));
    
  }

  useEffect(() => {
    GetProduct();
  }, []);

  return (
    <>
      <div className="row">
        { products.length>0?        products.map((product) => (
          <div className="col-md-3">
            <div className="item">
              <img src={product.imageCover} className="w-100" alt="" />
              <h5>{product.title.split(" ").splice(0,2).join(" ")}</h5>
            </div>
          </div>
       )) : <div class="spinner">
       <div class="rect1"></div>
       <div class="rect2"></div>
       <div class="rect3"></div>
       <div class="rect4"></div>
       <div class="rect5"></div>
     </div> }
      </div>
    </>
  );
}


/*

*/