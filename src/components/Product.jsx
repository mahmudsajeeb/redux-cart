import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productSlice';

function Product() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const {data:products} = useSelector(state =>state.product)
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));

    dispatch(getProducts())
  }, []);

  return (
    <div>
      <div className="row container mx-auto">
        {products.map((sproduct) => (
          <div key={sproduct.id} className="g-5 col-lg-3 mb-4">
            <SingleProduct sproduct={sproduct} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
