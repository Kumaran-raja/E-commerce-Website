import React, { useEffect,Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
const Home = lazy(() => import('./components/home'));
const Login = lazy(() => import('./components/login'));
const Signup = lazy(() => import('./components/signup'));
const Cart = lazy(() => import('./components/cart'));
const CategoryPage = lazy(() => import('./components/CategoryPage'));
const ProductPage = lazy(() => import('./components/productPage'));
const ContactUs = lazy(() => import('./components/contactUs'));
const Aboutus = lazy(() => import('./components/aboutus'));
const SellerDashboard = lazy(() => import('./components/SellerDashboard'));
const SellerRegister = lazy(() => import('./components/SellerRegister'));
const SecurityPage = lazy(() => import('./components/SecurityPage'));
const SellerLogin = lazy(() => import('./components/SellerLogin'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./components/TermsOfUse'));
const ShippingPolicy = lazy(() => import('./components/ShippingPolicy'));
const CancelandRefund = lazy(() => import('./components/CancelandRefund'));
const PaymentDetails = lazy(() => import('./components/PaymentDetails'));
const FAQ = lazy(() => import('./components/FAQ'));
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
class Run extends React.Component {
  render() {
   
    return (
      <Router>
       <ScrollToTop />
       <Suspense fallback={<div>Loading...</div>}>

          <Routes>
            <Route path="/" element={<><Header/><Home/><Footer/></>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<><Signup/></>} />
            <Route path="/cart" element={<><Header/><Cart/><Footer/></>} />
            <Route path="/Category" element={<><Header/><CategoryPage/><Footer/></>} />
            <Route path="/product/:id" element={<><Header/><ProductPage/><Footer/></>} />
            <Route path="/aboutus" element={<><Header/><Aboutus/><Footer/></>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/SellerDashboard" element={<SellerDashboard />} />
            <Route path="/SellerRegister" element={<SellerRegister />} />
            <Route path="/seller" element={<SellerLogin />} />
            <Route path="/security" element={<><Header/><SecurityPage/><Footer/></>} />
            <Route path="/privacy" element={<><Header/><PrivacyPolicy/><Footer/></>} />
            <Route path="/termsofuse" element={<><Header/><TermsOfUse/><Footer/></>} />
            <Route path="/shipping" element={<><Header/><ShippingPolicy/><Footer/></>} />
            <Route path="/cancelandrefund" element={<><Header/><CancelandRefund/><Footer/></>} />
            <Route path="/payment" element={<><Header/><PaymentDetails/><Footer/></>} />
            <Route path="/FAQ" element={<><Header/><FAQ/><Footer/></>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Run/>)

