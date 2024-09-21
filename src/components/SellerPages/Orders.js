import React,{useState} from 'react'
import './Orders.css'
import product from '../images/apple.png'
function Orders() {
  const [activeButton, setActiveButton] = useState(0);

  // Function to handle click and set the active button
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div>
      <h1>My Orders</h1>
      <div className='order_status_container'>
        <div>
          <p className='list_item_status_title'>Order Processing</p>
         
          <div style={{display:"flex"}}>
            <div className='order_status_type'>
            <p>0</p>
            <p className='list_item_status'>Pending Items</p>
            </div>
            <div className='order_status_type'>
            <p>0</p>
            <p className='list_item_status'>Pending RTD</p>  {/* Ready to Dispatch */}
            </div>
          </div>
        </div>
        <div>
          
        <p className='list_item_status_title'>Dispatched Orders</p>
        <div style={{display:"flex"}}>
            <div className='order_status_type'>
            <p>0</p>
            <p className='list_item_status'>Dispatched</p>
            </div>
            <div className='order_status_type'>
            <p>0</p>
            <p className='list_item_status'>Pending Services</p>
            </div>
         
          </div>
        </div>
        <div>
          <p className='list_item_status_title'>Completed Orders</p>
          <div className='order_status_type'>
            <p>0</p>
            <p className='list_item_status'>In last 30 Days</p>
          </div>
        </div>
      
      </div>
    {/* Buttons to switch order views */}
    <div className='order_view_box'>
        {['ALL', 'NEW', 'CONFIRMED', 'TO BE PACKED', 'READY FOR DISPATCH'].map((label, index) => (
          <p
            key={index}
            className={`order_view ${activeButton === index ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            {label}
          </p>
        ))}
      </div>
      <div className='order_managing_list'>
        <div style={{display:"flex"}}>
          <img src={product}/>
          <div>
            <p>Name</p>
            <p>Quantity</p>
            <p>Item Code</p>
          </div>
        </div>
        <div>
        <p>Price</p>
        <p>Cash on Delivery</p>
        </div>
        <div>
        <p>Shipment ID</p>
        <p>Order ID</p>

        </div>
        <div>
        <p>AWB</p>
        <p>Invoice ID</p>
          
        </div>
        <div>
          <button>Confirm</button>
          <button>Cancel</button>

        </div>
      </div>

    </div>
  )
}

export default Orders