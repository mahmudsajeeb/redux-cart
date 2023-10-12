import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
   
} from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Carts from './components/Carts.jsx';
import Main from './Layout/Main.jsx';
import Product from './components/Product.jsx';
import { store } from './store/store.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Carts />,
      },


    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>,
)
