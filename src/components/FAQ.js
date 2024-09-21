import React, { useState } from 'react';
import './aboutus.css';
import downlist from './images/downlist.png'

function FAQ() {
  const [Questions, setQuestions] = useState([
    [ 
      'How do I place an order?',
      'What payment methods do you accept?',
      'Can I change my shipping address after placing an order?',
      'How can I track my order?',
      'What is your return policy?',
      'How long does delivery take?',
      'Can I cancel my order?',
      'How do I get a refund?',
      'Are there any hidden fees?',
      'Do you offer international shipping?',
      'What should I do if I receive a damaged product?',
      'Is Cash on Delivery (CoD) available?',
      'Can I exchange an item?',
      'What should I do if I haven’t received my order?',
      'How do I contact customer service?'
    ],
    [
      'Browse products, add them to your cart, and follow the checkout process to complete your order.',
      'We accept credit/debit cards, net banking, UPI, mobile wallets, and cash on delivery.',
      'Yes, before the order is shipped. Contact customer support for assistance.',
      'Log in to your account and check "My Orders" for real-time tracking updates.',
      'We accept returns within 7-10 days of delivery for items in original condition.',
      'Delivery times vary by location, typically 3-7 business days.',
      'Orders can be canceled before shipment by visiting "My Orders."',
      'Refunds are processed to your original payment method within 7-10 business days after the returned item is verified.',
      'No, all prices shown are final. Delivery charges, if any, are mentioned during checkout.',
      'Currently, we ship only within India.',
      'Contact customer support within 48 hours for assistance with returns or replacements.',
      'Yes, CoD is available in select locations. Check availability at checkout.',
      'Yes, exchanges are possible for certain items. Refer to our return/exchange policy.',
      'Check the tracking details. If delayed, contact customer support for further assistance.',
      'You can reach us through the "Contact Us" page, email, or via our 24/7 chat support.'
    ]
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null); // Track the selected index
  
  const showAnswer = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className='section'>
      <div className='container-fluid content_page_container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='about_page_headlines'>Frequently Asked Questions</h1>
            <ul>
              {Questions[0].map((question, index) => (
                <div key={index}>
                  <div className='FAQ_Container'>
                    <p  style={{cursor:"pointer",backgroundColor:"aliceblue",padding:"20px"}} onClick={() => showAnswer(index)}>
                      <strong>{question}</strong>
                    </p>
                  </div>
                  {selectedIndex === index && (
                    <p style={{padding:"20px"}} className='about_page_content FAQ_Container'>{Questions[1][index]}</p>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
