import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { useParams } from 'react-router-dom';
import './productPage.css'
function ProductPage() {
  const {id}=useParams();
  const [product,setProduct]=useState([]);
  const[error,setError]=useState('error')


  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>{
              setProduct(data)
            })
            .catch(error=>{
              setError(error)
            })
  },[id])
  return (
    <div>
       <Helmet>
        <title>Products - Vibevault</title>
        <meta name="description" content="Explore detailed information about your favorite products on Vibevault. Read reviews, view images, and make informed purchasing decisions with our comprehensive product descriptions." />
        <link rel="canonical" href="https://vibevault.onrender.com/product" />
      </Helmet>
        <div>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner product_carousel">
              {
              <div className={"carousel-item active"}>
                <img src={product.image} className="d-block product_carousel_img " alt="..."/>
              </div>
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {
          // product.slice(1,2).map(data => (
            <div className='product_detail_content' key={product.id}>
              <h3>{product.title}</h3>
              <h2>${product.price}</h2>
              <p>Category: {product.category}</p>
              <p>{product.description}</p>
            </div>
          // ))
        }
       </div>
        
    </div>
  )
}

export default ProductPage