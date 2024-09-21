import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      
        <section>
          <div className="container-fluid" style={{padding:"0px"}}>
            <div className="row">
              <div className="col-12">
              <header>
                <div>
                  <h1 className="brandName">VibeVault</h1>
                </div>
                <div className="nav_part">
                  <input className="search" placeholder="Search Here..." />
                  <Link className="cart" to="/cart">Cart</Link>
                  <Link className="seller" to="/seller">Seller</Link>
                  <Link className="login_btn" to="/Login">LOGIN</Link>
                </div>
                </header>
              </div>
            </div>
          </div>
        </section>
       
    
    );
  }
}

export default Header;
