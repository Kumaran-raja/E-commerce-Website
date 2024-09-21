import { Helmet } from 'react-helmet'
import React from 'react'
import './aboutus.css'

function ShippingPolicy() {
  return (
    <div className='section'>
         <Helmet>
            <title>ShippingPolicy - Vibevault</title>
            <meta name="description" content= "Get detailed information about Vibevault’s shipping policies, including delivery times, charges, and locations served." />
            <link rel="canonical" href="https://vibevault.onrender.com/shipping" />
        </Helmet>
        <div className='container-fluid content_page_container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='about_page_headlines'>Shipping Policy</h1>
                    <p className='about_page_content'>At Vibevault, we strive to ensure that your orders are delivered efficiently and on time. Here’s everything you need to know about our shipping process:</p>
                    <h1 className='about_page_headlines'>Delivery Charges</h1>
                    <p className='about_page_content'>Shipping charges vary based on the seller, location, and the value of your order. In some cases, orders above a certain amount may qualify for free delivery, while nominal delivery charges may apply to low-value items to cover logistics costs. You can check the delivery charges for each item on the product page or in your order summary.</p>
                    <li>For example, orders above ₹500 may qualify for free shipping, while orders below ₹500 may have a nominal shipping fee.</li>
                    <h1 className='about_page_headlines'>Delivery Timeline</h1>
                    <p className='about_page_content'>The estimated delivery time for each item is mentioned on the product page. However, actual delivery times may vary based on several factors, such as:</p>
                    <li>Product availability with the seller</li>
                    <li>The location of the seller and the delivery destination</li>
                    <li>Public holidays or weekends that may impact delivery timelines</li>
                    <p className='about_page_content'>For example, deliveries may take 2-6 business days for standard locations, while remote areas may require additional time.</p>

                    <h1 className='about_page_headlines'>Order Tracking</h1>
                    <p className='about_page_content'>Once your order is shipped, you will receive a tracking number via email/SMS. You can use this to track your order on the courier’s website or directly on Vibevault. Please note that updates may take some time to reflect based on the courier service.</p>
                 
                    <h1 className='about_page_headlines'>Non-Deliverable Locations</h1>
                    <p className='about_page_content'>Certain products may not be deliverable to specific locations due to legal restrictions, courier service limitations, or seller discretion. You can enter your pin code on the product page to check if delivery is available in your area.</p>

                    <h1 className='about_page_headlines'>Cash on Delivery (CoD)</h1>
                    <p className='about_page_content'>The availability of the CoD option depends on your location and the payment limits set by our courier partners. Some regions may not support CoD due to logistical constraints, and CoD might not be available for orders exceeding a certain value.</p>
                   
                    <h1 className='about_page_headlines'>International Shipping</h1>
                    <p className='about_page_content'>Currently, Vibevault only ships products within India. We accept payments from international cards, but ensure the delivery address is within India.</p>
                 
                    <h1 className='about_page_headlines'>Delivery Delays</h1>
                    <p className='about_page_content'>While we aim for timely deliveries, unforeseen circumstances such as weather conditions, strikes, or holidays may cause delays. If the seller or courier has a holiday between your order date and delivery date, an additional day may be added to the delivery estimate.</p>

                    <h1 className='about_page_headlines'>Order Not Received</h1>
                    <p className='about_page_content'>If you have not received your order but have received a delivery confirmation via SMS or email, please report the issue within 7 days of receiving the confirmation. We will investigate the matter and assist you.</p>
                    <h1 className='about_page_headlines'>Item Availability Tags</h1>
                    <ul>
                        <li><strong>In Stock:</strong>Available for immediate shipment, with delivery estimates based on your location.</li>
                        <li><strong>Preorder/Forthcoming:</strong>Products can be booked in advance and will be shipped on the release date.</li>
                        <li><strong>Out of Stock:</strong>The product is currently unavailable, but you can use the 'Notify Me' feature to be alerted when it is back in stock.</li>
                        <li><strong>Imported:</strong>Items sourced from international locations, which may take 10 or more days for delivery.</li>
                    </ul>
                    <h1 className='about_page_headlines'>Returns and Refunds</h1>
                    <p style={{marginBottom:"30px"}} className='about_page_content'>If you need to return an item, you can initiate a return via the "My Orders" section or by contacting our support team. If possible, we’ll arrange a pick-up through our logistics partner. In cases where pick-up isn’t feasible, you can return the product using any third-party courier service, and return charges will be borne by the seller.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShippingPolicy