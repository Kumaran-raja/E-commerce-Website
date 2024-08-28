import React, { useReducer, useState, useEffect } from 'react';
import './cart.css';

export default function Cart() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let sellerName = 'Raja';
  let date = 'Fri Aug 2024';

  const initialState = {
    cartItems: []
  };

  function reducer(state, action) {
    switch (action.category) {
      case 'initialize_cart':
        return {
          ...state,
          cartItems: action.payload.map(item => ({ ...item, quantity: 1 }))
        };
      case 'increase':
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      case 'decrease':
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        };
      case 'remove':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
      case 'saveLater':
        // Implement save later functionality here if needed
        return state;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then(res => res.json())
      .then(data => {
        dispatch({ category: 'initialize_cart', payload: data });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className='cart_container'>
      <div className='cart_product_list_side'>
        {state.cartItems.map(data => (
          <div key={data.id}>
            <div className='product_cart'>
              <div>
                <img className='cart_image' src={data.image} alt={data.title} />
              </div>
              <div>
                <h4 className='cart_product_name'>{data.title}</h4>
                <h6 className='cart_specification'>{data.category}</h6>
                <p className='cart_seller_name'>Seller Name: <strong>{sellerName}</strong></p>
                <h2 className='cart_item_price'>${(data.price * data.quantity).toFixed(2)}</h2>
              </div>
              <div>
                <p className='deliveryDate'>Delivery by <strong>{date}</strong></p>
              </div>
            </div>
            <div className='cart_reducer'>
              <div className='item_count_container'>
                <button
                  className='value_button'
                  onClick={() => dispatch({ category: 'decrease', payload: data.id })}
                  disabled={data.quantity === 1}
                >
                  -
                </button>
                <input
                  className='product_count_show'
                  type='number'
                  value={data.quantity}
                  readOnly
                />
                <button
                  className='value_button'
                  onClick={() => dispatch({ category: 'increase', payload: data.id })}
                >
                  +
                </button>
              </div>
              <div style={{ display: "flex", gap: "30px" }}>
                <h5
                  className='saveLater'
                  onClick={() => dispatch({ category: 'saveLater', payload: data.id })}
                >
                  Save for Later
                </h5>
                <h5
                  className='remove_item'
                  onClick={() => dispatch({ category: 'remove', payload: data.id })}
                >
                  Remove
                </h5>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div  style={{display:"block",marginLeft:"auto",marginRight:"auto"}}>
      <div className='totalCalculation'>
        <h4>Price Details</h4>
        <hr />
        <div className='price_details'>
          <p>Price ({state.cartItems.reduce((acc, data) => acc + data.quantity, 0)} items)</p>
          <p>$ {state.cartItems.reduce((acc, data) => acc + data.price * data.quantity, 0).toFixed(2)}</p>
        </div>
        <div className='price_details'>
          <p>Discount</p>
          <p>$0.00</p>
        </div>
        <div className='price_details'>
          <p>Delivery Charges</p>
          <p>Free</p>
        </div>
        <hr />
        <div className='price_details'>
          <p>Total Amount</p>
          <p>$ {state.cartItems.reduce((acc, data) => acc + data.price * data.quantity, 0).toFixed(2)}</p>
        </div>
        <button className='place_order'>Place Order</button>
      </div>
      </div>
    </div>
  );
}
