import React from 'react'
import './aboutus.css'
function SecurityPage() {
  return (
    <div className='section'>
        <div className='container-fluid content_page_container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='about_page_headlines'>Security at Vibevault</h1>
                    <p className='about_page_content'>At Vibevault, we prioritize the security of your personal information and transactions. Our commitment is to ensure that your shopping experience is safe and secure from start to finish.</p>
                    <h1 className='about_page_headlines'>Secure Transactions</h1>
                    <p className='about_page_content'>We use industry-standard encryption protocols, such as SSL (Secure Socket Layer), to protect your payment details. All payment transactions are securely processed through trusted payment gateways that comply with PCI-DSS (Payment Card Industry Data Security Standards).</p>
                    <h1 className='about_page_headlines'>Data Privacy</h1>
                    <p className='about_page_content'>Your personal information is stored securely and is never shared with third parties without your explicit consent. We follow stringent GDPR compliance regulations to ensure your data is handled with the utmost care.</p>
                    <h1 className='about_page_headlines'>Two-Factor Authentication (2FA)</h1>
                    <p className='about_page_content'>To add an extra layer of security, Vibevault offers Two-Factor Authentication (2FA) for account access. This ensures that only you can access your account by requiring both your password and a verification code sent to your registered device.</p>
                    <h1 className='about_page_headlines'>Regular Security Audits</h1>
                    <p className='about_page_content'>We conduct regular security audits and vulnerability assessments to identify and address any potential risks. Our technical team constantly updates our systems to counter the latest threats in cybersecurity.</p> 
                    <h1 className='about_page_headlines'>Fraud Detection and Prevention</h1>
                    <p className='about_page_content'>Our fraud detection system continuously monitors transactions to detect unusual activity. In the event of suspicious activity, we will take immediate action, including account suspension and notifying you of any security concerns.</p> 
                    <h1 className='about_page_headlines'>Customer Responsibility</h1>
                    <p className='about_page_content'>While we do everything in our power to protect your data, you can also take steps to safeguard your account:
                        <li>Use strong, unique passwords for your Vibevault account.</li>
                        <li>Avoid sharing your account details with anyone.</li>
                        <li>Enable Two-Factor Authentication for enhanced security.</li>
                        <li>Always log out after using a public or shared device.</li>
                    </p> 
                    <h1 className='about_page_headlines'>Reporting Security Issues</h1>
                    <p className='about_page_content'>If you notice any suspicious activity on your account or believe your account has been compromised, please contact our customer support team immediately at <a href='mailto:support@vibevault.com'>support@vibevault.com</a>. We take all reports seriously and will work with you to resolve any issues.</p>
                    <h1 className='about_page_headlines'>Security Updates</h1>
                    <p style={{marginBottom:"30px"}} className='about_page_content'>We keep our users informed of any important security updates or incidents. Stay up to date by checking this page for announcements and security tips.</p>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default SecurityPage