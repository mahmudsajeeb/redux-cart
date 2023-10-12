import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/createSlice'

function SingleCart({cartproduct}) {
  const dispatch = useDispatch()
  const removeTocart=(id)=>{
    dispatch(remove(id))
  }
  return (
    <div>
    
    <tr>
                  <td className="col-sm-8 col-md-6">
                    <div className="media">
                      <a className="thumbnail pull-left" href="#">
                        <img className="media-object" src={cartproduct.image}  style={{ width: '72px', height: '72px' }} alt="Product" />
                      </a>
                      <div className="media-body">
                        <h4 className="media-heading"><a href="#"></a></h4>
                        <h5 className="media-heading"> by <a href="#">{cartproduct.name}</a></h5>
                        <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                      </div>
                    </div>
                  </td>
                  <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
                    <input type="email" className="form-control" id="exampleInputEmail1" value="3" />
                  </td>
                  {/* <td className="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td> */}
                  <td className="col-sm-1 col-md-1 text-center"><strong>${cartproduct.price}</strong></td>
                  <td className="col-sm-1 col-md-1">
                    <button onClick={() =>removeTocart(cartproduct.id)} type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove"></span> Remove
                    </button>
                  </td>
                </tr>
    </div>
  )
}

export default SingleCart