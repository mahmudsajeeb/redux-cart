import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/createSlice';

function SingleProduct({sproduct}) {

  const dispatch = useDispatch()
  const cardStyle = {
    width: '32rem',
  }; 

   
  const addToCart = (sproduct) =>{
      dispatch(add(sproduct))
  }

  return (
    <div>
      <div className="row">
        <div className="card" style={cardStyle}>
          <img height="400px" src={sproduct.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{sproduct.title}</h5>
            <h6 >${sproduct.price}</h6>
            <p className="card-text">{sproduct.description.slice(0,30)}...</p>
            <button  onClick={()=>addToCart(sproduct)} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
