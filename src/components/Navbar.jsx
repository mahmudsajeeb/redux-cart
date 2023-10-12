import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const cartProduct = useSelector(state =>state.cart)
  return (
    <div>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/"
           class="nav-link active" aria-current="page"  >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/products"
           class="nav-link active" aria-current="page"  >Products</Link>
        </li>
        
        
      </ul>
      <ul className='navbar-nav m-lg-3'>
      <li class="nav-item justify-content-end">
          <Link to="/cart"
           class="nav-link active" aria-current="page"  >Cart {cartProduct.length}</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar