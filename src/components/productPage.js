import React, { useEffect, useState } from 'react'
import mobile from './images/category/mobile.png'
import './productPage.css'
function ProductPage() {
  
  const [product,setProduct]=useState([]);
  const[error,setError]=useState('error')


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
              setProduct(data)
            })
            .catch(error=>{
              setError(error)
            })
  },[])
  return (
    <div>
        <div>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner product_carousel">
              {
                product.slice(1,2).map((data,index)=>
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={data.id}>
                <img src={data.image} className="d-block product_carousel_img " alt="..."/>
              </div>
                )
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
          product.slice(1,2).map(data => (
            <div className='product_detail_content' key={data.id}>
              <h3>{data.title}</h3>
              <h2>${data.price}</h2>
              <p>Category: {data.category}</p>
              <p>{data.description}</p>
            </div>
          ))
        }
       </div>
        
    </div>
  )
}

export default ProductPage