import { Helmet } from 'react-helmet'
import React from 'react'

function PrivacyPolicy() {
  return (
    <div className='section'>
         <Helmet>
            <title>Privacy Policy - Vibevault</title>
            <meta name="description" content="Read Vibevault’s Privacy Policy to understand how we collect, use, and protect your personal information while shopping with us." />
        <meta name="keywords" content="Vibevault Privacy policy, Vibevault, Online Shopping" />
        <link rel="canonical" href="https://vibevault.onrender.com/privacy" />
        </Helmet>
        <div className='container-fluid content_page_container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='about_page_headlines'>Privacy Policy</h1>
                    <p className='about_page_content'>At Vibevault, we are committed to safeguarding your privacy and ensuring that your personal information is protected. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website, create an account, or make a purchase. By using Vibevault, you agree to the terms outlined below.</p>
                    <h1 className='about_page_headlines'>Information We Collect</h1>
                    <p className='about_page_content'>We collect personal information to provide you with a better shopping experience. The types of information we collect include:</p>
                    <ul>
                        <li><strong>Personal Identification Information:</strong> such as your name, email address, phone number, and shipping/billing address.</li>
                        <li><strong>Payment Information:</strong>including credit/debit card details and other financial data required to process your orders securely.</li>
                        <li><strong>Account Information:</strong>such as your username, password, and preferences, if you create an account.</li>
                        <li><strong>Purchase History:</strong>including the items you've bought, viewed, or added to your cart.</li>
                        <li><strong>Device and Log Information:</strong> such as your IP address, browser type, and usage data collected when you interact with our website.</li>
                    </ul>
                    <h1 className='about_page_headlines'>How We Use Your Information</h1>
                    <p className='about_page_content'>We use your personal information to:</p>
                    <ul>
                        <li>Process your orders and handle payments.</li>
                        <li>Deliver products and services to you.</li>
                        <li>Communicate with you about your orders, promotions, and customer service queries.</li>
                        <li>Improve our website, products, and services based on your preferences and feedback.</li>
                        <li>Prevent fraudulent activities and secure our platform.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                    <h1 className='about_page_headlines'>Cookies and Tracking Technologies</h1>
                    <p className='about_page_content'>Vibevault uses cookies and similar tracking technologies to enhance your experience on our site. Cookies help us:</p>
                    <ul>
                        <li>Remember your preferences and shopping cart contents.</li>
                        <li>Track website usage and performance for improvements.</li>
                        <li>Display relevant ads and recommendations based on your browsing history.</li>
                        
                    </ul>
                    <p className='about_page_content'>You can manage your cookie preferences through your browser settings.</p>

                    <h1 className='about_page_headlines'>Sharing Your Information</h1>
                    <p className='about_page_content'>We respect your privacy and do not sell or share your personal data with third parties, except in the following cases:</p>
                    <ul>
                        <li><strong>Service Providers: </strong> We may share your information with trusted third-party service providers who assist us in payment processing, order fulfillment, and website operations.</li>
                        <li><strong>Legal Compliance: </strong>We may disclose your information if required by law, regulation, or legal process, or to protect our rights and the security of our platform.</li>
                        <li><strong>Business Transfers:</strong>In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of the business transaction.</li>
                       
                    </ul>
                    <h1 className='about_page_headlines'>Your Privacy Rights</h1>
                    <p className='about_page_content'>You have the following rights regarding your personal information:</p>
                    <ul>
                        <li><strong>Access:</strong>You can request a copy of the personal data we hold about you.</li>
                        <li><strong>Correction:</strong>You can update or correct inaccurate or incomplete information.</li>
                        <li><strong>Deletion: </strong>You can request the deletion of your personal data, subject to certain legal limitations.</li>
                        <li><strong>Opt-out:</strong>You can unsubscribe from marketing emails or limit the use of cookies.</li>
                        <p className='about_page_content'>To exercise any of these rights, please contact us at <a href='mailto:privacy@vibevault.com'>privacy@vibevault.com</a>.</p>

                    </ul>
                    <h1 className='about_page_headlines'>Data Security</h1>
                    <p className='about_page_content'>We take the security of your data seriously. We use a combination of technical, administrative, and physical safeguards to protect your personal information from unauthorized access, loss, misuse, or alteration.</p>
                    <p className='about_page_content'>However, please be aware that no system is completely secure, and we cannot guarantee the absolute security of your data.</p>
                    <h1 className='about_page_headlines'>Data Retention</h1>
                    <p className='about_page_content'>We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required by law.</p>
                    <h1 className='about_page_headlines'>Children’s Privacy</h1>
                    <p className='about_page_content'>Vibevault is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information.</p>
                    <h1 className='about_page_headlines'>Changes to Our Privacy Policy</h1>
                    <p className='about_page_content'>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal obligations. Any updates will be posted on this page, and we encourage you to review it periodically.</p>
                    <h1 className='about_page_headlines'>Contact Us</h1>
                    <p className='about_page_content'>If you have any questions or concerns about this Privacy Policy or how your data is handled, please reach out to us at:</p>
                    <p className='about_page_content'><strong>Email:</strong> <a href='mailto:privacy@vibevault.com'>privacy@vibevault.com</a></p>
                    <p className='about_page_content' style={{marginBottom:"30px"}}><strong>Address:</strong> VibeVault,123 Fashion Avenue,Suite 456 New York,NY 10001 United States</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy