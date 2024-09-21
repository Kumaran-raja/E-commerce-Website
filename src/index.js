import React,{useEffect} from 'react';
import Login from './components/login'
import ReactDOM from 'react-dom/client';
import Signup from './components/signup'
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Cart from './components/cart';
import CategoryPage from './components/CategoryPage';
import SellerLogin from './components/SellerLogin';
import ProductPage from './components/productPage';
import ContactUs from './components/contactUs'
import Footer from './components/Footer'
import Aboutus from './components/aboutus'
import SellerDashboard from './components/SellerDashboard'
import SellerRegister from './components/SellerRegister';
import SecurityPage from './components/SecurityPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import ShippingPolicy from './components/ShippingPolicy';
import CancelandRefund from './components/CancelandRefund';
import PaymentDetails from './components/PaymentDetails';
import FAQ from './components/FAQ';

class Run extends React.Component {
  render() {
    function ScrollToTop() {
      const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      return null;
    }
    return (
      <Router>
       <ScrollToTop />
        <div className='background_color'>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/Category" element={<div><Header/><CategoryPage />  <Footer /></div>} /> 
            <Route path="/product/:id" element={<div><Header/><ProductPage />  <Footer /></div>} /> 
            <Route path="/" element={<div><Header/><Home />  <Footer /></div>} />
            <Route path="/cart" element={<div><Header/><Cart /><Footer /></div>} />
            <Route path="/seller" element={<div><SellerLogin /><Footer /></div>} />
            <Route path="/aboutus" element={<div><Header /><Aboutus /><Footer /></div>} />
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/SellerDashboard' element={<SellerDashboard/>}/>
            <Route path='/SellerRegister' element={<SellerRegister/>}/>
            <Route path='/SellerLogin' element={<SellerLogin/>}/>
            <Route path='/security' element={<div><Header /><SecurityPage /><Footer /></div>}/>
            <Route path='/privacy' element={<div><Header /><PrivacyPolicy /><Footer /></div>}/>
            <Route path='/termsofuse' element={<div><Header /><TermsOfUse /><Footer /></div>}/>
            <Route path='/shipping' element={<div><Header /><ShippingPolicy /><Footer /></div>}/>
            <Route path='/cancelandrefund' element={<div><Header /><CancelandRefund /><Footer /></div>}/>
            <Route path='/payment' element={<div><Header /><PaymentDetails /><Footer /></div>}/>
            <Route path='/FAQ' element={<div><Header /><FAQ /><Footer /></div>}/>


            
          </Routes>
        </div>
      </Router>
    );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Run/>)

