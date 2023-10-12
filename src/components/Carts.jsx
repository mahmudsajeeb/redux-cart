import React from 'react';
import { useSelector } from 'react-redux';
import SingleCart from './SingleCart';

function Carts() {
  const products = useSelector(state => state.cart);
  console.log("Product Cart", products.price)
  const imageStyle = {
    width: '72px',
    height: '72px',
  };

  const inputStyle = {
    textAlign: 'center',
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Total</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
             
                  {
                    products.map(cartproduct =><SingleCart cartproduct={cartproduct} key={cartproduct.id} /> )
                  }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
