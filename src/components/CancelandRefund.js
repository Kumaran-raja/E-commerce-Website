import React from 'react'
import { Helmet } from 'react-helmet'
import './aboutus.css'
function CancelandRefund() {
  return (
    <div className='section'>
       <Helmet>
        <title>About Us - Vibevault</title>
        <meta name="description" content= "Learn about Vibevault’s cancellation and refund policy. We strive to make the process straightforward and hassle-free for our valued customers." />
        <meta name="keywords" content="Cancel Order, Vibevault, Cancel and Refund,Vibevault Cancel Order and Refund" />

        <link rel="canonical" href="https://vibevault.onrender.com/cancelandrefund" />
      </Helmet>
        <div className='container-fluid content_page_container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='about_page_headlines'>Cancellation and Refund Policy</h1>
                    <h1 className='about_page_headlines'>Order Cancellation</h1>
                    <p className='about_page_content'>Before Shipment: You can cancel your order before it has been shipped by going to the "My Orders" section or contacting our customer support.</p>
                    <p className='about_page_content'>Post-Shipment: Once your order has been shipped, cancellation is not possible. However, you can request a return after receiving the item.</p>

                    <h1 className='about_page_headlines'>Refund Process</h1>
                    <p className='about_page_content'>Eligibility: Refunds will be processed if the item is returned in its original condition and packaging within the specified return window.</p>
                    <p className='about_page_content'>Refund Timeline: Refunds are initiated once the item passes the quality check. The amount will be credited to your original payment method within 7-10 business days.</p>
                    <p className='about_page_content'>Non-Refundable Items: Certain items like perishable goods, intimate wear, and customized products may not be eligible for a refund.</p>

                    <h1 className='about_page_headlines'>Return and Pick-Up</h1>
                    <p className='about_page_content'>You can initiate a return request via the "My Orders" section. We will arrange for a pick-up or provide instructions for self-shipping.</p>
                
                    <h1 className='about_page_headlines'>Late or Missing Refunds</h1>
                    <p className='about_page_content'>If you haven’t received your refund after 10 days, please check with your bank or payment provider. If the issue persists, contact our customer service team for assistance.</p>
                    <hr style={{border:"2px solid black"}}></hr>
                    <h1 className='about_page_headlines'> FAQs for Cancellation and Refund:</h1>
                    <h1 className='about_page_headlines'>How can I cancel my order?</h1>
                    <p className='about_page_content'>You can cancel your order before shipment by visiting "My Orders" or contacting customer support. Once shipped, cancellation isn't possible, but you can return the product after delivery.</p>
                    <h1 className='about_page_headlines'> How long does a refund take?</h1>
                    <p className='about_page_content'>Refunds are processed within 7-10 business days after the returned item passes the quality check.</p>
                    <h1 className='about_page_headlines'> Can I get a refund for all products?</h1>
                    <p className='about_page_content'>Some products, like perishable or personalized items, may not be eligible for refunds.</p>
                    <h1 className='about_page_headlines'> How do I return a product?</h1>
                    <p className='about_page_content'>Visit "My Orders" to initiate a return, and we’ll arrange a pick-up.</p>
                    <h1 className='about_page_headlines'>What should I do if I haven't received my refund?</h1>
                    <p style={{marginBottom:"30px"}} className='about_page_content'>Check with your bank, and if the issue persists, contact customer service.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CancelandRefund