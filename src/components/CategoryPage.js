// import React from 'react'
import './CategoryPage.css'
import React,{useState,useEffect} from 'react'
function CategoryPage() {
  const[product,setProduct]=useState([]);
  const[error,setError]=useState("error");
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
              setProduct(data);
            })
            .catch(error=>{
              setError(error)
            })

  })

  return (
      <div className='split_filer_space'> 
   
        <div className='filter'>
            <h6 class="cutomized_filter">Customized Filter</h6>
            <hr/>
            <p className="filter_text">Category</p>
            <select name="" id="category">
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home_furniture">Home & Furniture</option>
                <option value="beauty_personal_care">Beauty & Personal Care</option>
                <option value="sports_equipment">Sports & Outdoors</option>
                <option value="books">Books & Media</option>
                <option value="toys">Toys, Kids & Baby</option>
                <option value="Grocery">Grocery & Gourmet Food</option>
                <option value="automative">Automotive</option>
                <option value="health_device">Health & Wellness</option>
                <option value="office_supplies">Office Supplies</option>
            </select>
            <p class="filter_text">Product</p>
            <select name="" id="product">
                            {/* <!-- Electronics Product --> */}
                            <optgroup id="electronics" class="all_category">
                                <option value="">Mobile Phones</option>
                                <option value="">Computers & Tablets</option>
                                <option value="">TV & Home Appliances</option>
                                <option value="">Cameras</option>
                            </optgroup>
                            {/* <!-- Fashion Products--> */}
                            <optgroup id="fashion" class="all_category" label="Fashion Category">
                                <option value="">Men</option>
                                <option value="">Women</option>
                                <option value="">Kids</option>
                            
                            </optgroup>
                           {/* <!-- Home & Furniture --> */}
                            <optgroup id="home" class="all_category">
                                <option value="">Furniture</option>
                                <option value="">Home Decor</option>
                                <option value="">Kitchen & Dining</option>

                            </optgroup>
{/* <!-- Beauty & Personal Care --> */}
                            <optgroup id="beauty" class="all_category">
                                <option value="">Skincare</option>
                                <option value="">Haircare</option>
                                <option value="">Makeup</option>
                                <option value="">Personal Care Appliances</option>
                             
                            </optgroup>
{/* <!-- Sports & Outdoors --> */}
                            <optgroup id="sports" class="all_category">
                                <option value="">Sports Equipment</option>
                                <option value="">Apparel</option>
                                <option value="">Nutrition & Supplements</option>
                              
                            </optgroup>
{/* <!-- Books & Media --> */}
                            <optgroup id="books" class="all_category">
                                <option value="">Books</option>
                                <option value="">Music</option>
                                <option value="">Movies</option>
                              
                            </optgroup>
{/* <!-- Toys, Kids & Baby --> */}
                            <optgroup id="toys" class="all_category">
                                <option value="">Toys</option>
                                <option value="">Baby Products</option>
                                <option value="">Kids' Clothing</option>

                              
                            </optgroup>
{/* <!-- Grocery & Gourmet Food --> */}
                            <optgroup id="grocery" class="all_category">

                                 <option value="">Beverages</option>
                                 <option value="">Snacks</option>
                                 <option value="">Pantry Staples</option>
                                 <option value="">Gourmet Food</option>
                              
                            </optgroup>
{/* <!-- Automotive --> */}
                            <optgroup id="automative" class="all_category">
                                <option value="">Car Accessories</option>
                                <option value="">Motorbike Accessories</option>
                                <option value="">Car Care</option>

                              
                            </optgroup>
{/* <!-- Health & Wellness --> */}
                            <optgroup id="health" class="all_category">
                                <option value="">Health Devices</option>
                                <option value="">Supplements</option>
                                <option value="">Personal Care</option>
                              
                            </optgroup>
{/* <!-- Office- Supplies --> */}
                            <optgroup id="office" class="all_category">
                                <option value="">Office Furniture</option>
                                <option value="">Stationery</option>
                                <option value="">Office Electronics</option>
                              
                            </optgroup>
                        </select>
                        {/* <!-- brand --> */}
                    <p class="filter_text">Brand</p>
                    <select name="item_condition" id="item_condition">
                        <option value="new">New</option>
                        <option value="renewed">Renewed</option>
                    </select>
                    
                    {/* <!-- Item Condition --> */}
                    <p class="filter_text">Item Condition</p>

                    <select name="item_condition" id="item_condition">
                        <option value="new">New</option>
                        <option value="renewed">Renewed</option>
                    </select>
                  
                    {/* <!-- Price --> */}
                    <p class="filter_text">Price</p>
                    <select name="item_condition" id="item_condition">
                        <option value="new">New</option>
                        <option value="renewed">Renewed</option>
                    </select>
                    {/* <!-- Payment Method --> */}
                    <p class="filter_text">Payment Method</p>
                    <select name="payment method" id="Payment_method">
                        <option value="cash_on_delivery">Cash on Delivery</option>
                        <option value="Online_transaction">Online Payment Method</option>
                    </select>
        </div> 

        <div>
          {
          product.map(data=>
            <div>
            <div className='product_page_container' key={data.id}>
              <div>
                <img className='product_image' src={data.image} alt='cart Image'/>
              
              </div>
              <div>
                <h4 className='item_name'>{data.title}</h4> 
                <p className='product_specification'>{data.category}</p>
                <p className='product_specification'>Specification 2</p>
                <p className='product_specification'>Specification 3</p>
                <p>Offer</p>
              </div>
              <div>
                <h2 className='item_price'>$ {data.price}</h2>
                <p className='delivetyDate'>Delivery Date</p>
                <button className='add_to_cart'>Add to Cart</button>
              </div>
            </div>
              <hr></hr>
              </div>
    )}
      
        </div>
       
  </div>
  )
}

export default CategoryPage