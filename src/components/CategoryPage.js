import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import React, { useState, useEffect } from 'react';

function CategoryPage() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("error");
  const [cartStates, setCartStates] = useState({});
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        const initialCartStates = {};
        data.forEach(item => {
          initialCartStates[item.id] = "Add to Cart";
        });
        setCartStates(initialCartStates);
      })
      .catch(error => {
        setError(error);
      });
  },[]);

  const navigate = useNavigate();
  const navigateProductPage = () => {
    navigate('/Product');
  };

  const changeCart = (id) => {
    setCartStates((prevCartStates) => ({
      ...prevCartStates,
      [id]: prevCartStates[id] === "Add to Cart" ? "Added to Cart" : "Add to Cart"
    }));
  };

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
                            <optgroup id="electronics" class="all_category" label='Electronics Category'>
                                <option value="mobile">Mobile Phones</option>
                                <option value="computer">Computers & Tablets</option>
                                <option value="tv">TV & Home Appliances</option>
                                <option value="camera">Cameras</option>
                            </optgroup>
                            {/* <!-- Fashion Products--> */}
                            <optgroup id="fashion" class="all_category" label="Fashion Category">
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kids">Kids</option>
                            
                            </optgroup>
                           {/* <!-- Home & Furniture --> */}
                            <optgroup id="home" class="all_category" label='Furnitures category'>
                                <option value="furnitures">Furniture</option>
                                <option value="home">Home Decor</option>
                                <option value="kitchen">Kitchen & Dining</option>

                            </optgroup>
{/* <!-- Beauty & Personal Care --> */}
                            <optgroup id="beauty" class="all_category" label='Beauty Category'>
                                <option value="skincare">Skincare</option>
                                <option value="haircare">Haircare</option>
                                <option value="makeup">Makeup</option>
                                <option value="personalcare">Personal Care Appliances</option>
                             
                            </optgroup>
{/* <!-- Sports & Outdoors --> */}
                            <optgroup id="sports" class="all_category" label='Sports Category'>
                                <option value="sport">Sports Equipment</option>
                                <option value="apparel">Apparel</option>
                                <option value="nutrition">Nutrition & Supplements</option>
                              
                            </optgroup>
{/* <!-- Books & Media --> */}
                            <optgroup id="books" class="all_category" label='Books Category'>
                                <option value="books">Books</option>
                                <option value="music">Music</option>
                                <option value="movies">Movies</option>
                              
                            </optgroup>
{/* <!-- Toys, Kids & Baby --> */}
                            <optgroup id="toys" class="all_category" label='Baby Toys Category'>
                                <option value="toys">Toys</option>
                                <option value="baby">Baby Products</option>
                                <option value="kids">Kids' Clothing</option>

                            </optgroup>
{/* <!-- Grocery & Gourmet Food --> */}
                            <optgroup id="grocery" class="all_category" label='Grocery Category'>

                                 <option value="beverages">Beverages</option>
                                 <option value="snacks">Snacks</option>
                                 <option value="pantry">Pantry Staples</option>
                                 <option value="gourmet">Gourmet Food</option>
                              
                            </optgroup>
{/* <!-- Automotive --> */}
                            <optgroup id="automative" class="all_category" label='Automative Category'>
                                <option value="car">Car Accessories</option>
                                <option value="motorbike">Motorbike Accessories</option>
                                <option value="carcare">Car Care</option>
                            </optgroup>
{/* <!-- Health & Wellness --> */}
                            <optgroup id="health" class="all_category" label='Health Category'>
                                <option value="health">Health Devices</option>
                                <option value="supplements">Supplements</option>
                                <option value="personal">Personal Care</option>
                            </optgroup>
{/* <!-- Office- Supplies --> */}
                            <optgroup id="office" class="all_category" label='Office Category'>
                                <option value="office">Office Furniture</option>
                                <option value="stationary">Stationery</option>
                                <option value="office">Office Electronics</option>
                              
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
        {product.map(data =>
          <div key={data.id}>
            <div className='product_page_container'>
              <div onClick={navigateProductPage}>
                <img className='product_image' src={data.image} alt='cart Image' />
              </div>
              <div onClick={navigateProductPage}>
                <h4 className='item_name'>{data.title}</h4>
                <p className='product_specification'>{data.category}</p>
                <p className='product_specification'>Specification 2</p>
                <p className='product_specification'>Specification 3</p>
                <p className='product_specification'>Offer</p>
              </div>
              <div>
                <h2 className='item_price'>$ {data.price}</h2>
                <p className='delivetyDate'>Delivery Date</p>
                <button 
                  className='add_to_cart' 
                  onClick={() => changeCart(data.id)}>
                  {cartStates[data.id]}
                </button>
              </div>
            </div>
            <hr />
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
