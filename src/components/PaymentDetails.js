import React from 'react'

function PaymentDetails() {
  return (
    <div className='section'>
      <div className='container-fluid content_page_container'>
          <div className='row'>
              <div className='col-12'>
                  <h1 className='about_page_headlines'>Payment Information</h1>
                  <p className='about_page_content'>At Vibevault, we offer a variety of secure payment methods to ensure a seamless shopping experience.</p>
                  <h1 className='about_page_headlines'>Accepted Payment Methods</h1>
                  <p className='about_page_content'>We accept the following payment options:</p>
                  <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                  <li>Net Banking from leading banks (see full list below)</li>
                  <li>UPI (Google Pay, PhonePe, BHIM)</li>
                  <li>Mobile Wallets (Paytm, MobiKwik)</li>
                  <li>Cash on Delivery (CoD) (available in select locations)</li>

                  <h1 className='about_page_headlines'>Supported Banks for Net Banking</h1>
                  <p className='about_page_content'>We support net banking from the following major banks:</p>
                  <li>State Bank of India (SBI)</li>
                  <li>HDFC Bank</li>
                  <li>ICICI Bank</li>
                  <li>Axis Bank</li>
                  <li>Punjab National Bank (PNB)</li>
                  <li>Kotak Mahindra Bank</li>
                  <li>Yes Bank</li>
                  <li>Bank of Baroda</li>
                  <li>Union Bank of India</li>
                  <li>IDBI Bank</li>
                  <li>IndusInd Bank</li>
                  <li>Federal Bank</li>
                  <h1 className='about_page_headlines'>Payment Security</h1>
                  <p className='about_page_content'>All payments are secured using advanced encryption technologies. Your financial data is protected through trusted payment gateways, ensuring a safe and reliable experience.</p>
              
                  <h1 className='about_page_headlines'>Cash on Delivery (CoD)</h1>
                  <p className='about_page_content'>For eligible regions, CoD is available. Please note that the maximum CoD amount varies by location and will be displayed during checkout.</p>

                  <h1 className='about_page_headlines'>Refunds and Failed Transactions</h1>
                  <li>If you cancel an order, refunds will be processed to your original payment method within 7-10 business days.</li>                
                  <li>For failed transactions, any deducted amount will also be refunded within 7-10 business days.</li>                

                  <h1 className='about_page_headlines'>Payment Support</h1>
                  <p className='about_page_content' style={{marginBottom:"30px"}}>For any issues with payments, feel free to contact our customer support team for assistance.</p>
              </div>
          </div>
      </div>
  </div>
  )
}

export default PaymentDetails