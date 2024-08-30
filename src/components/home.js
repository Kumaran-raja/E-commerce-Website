// import React from "react";
import './home.css';
import grocery from './images/category/grocery.png'
import mobile from './images/category/mobile.png'
import fashion from './images/category/fashion.png'
import electronics from './images/category/electronics.png'
import furniture from './images/category/furnitures.png'
import travel from './images/category/travels.png'
import toys from './images/category/toys.png'
import vehicles from './images/category/vehicles.png'
import banner1 from './images/banner/image1.png';
import banner2 from './images/banner/image2.png';
import banner3 from './images/banner/image3.png';
import { useNavigate } from "react-router-dom";
import React,{useEffect, useState} from "react";

function Category(){
   
        const navigate=useNavigate();
        const CategoryPage=()=> {
            navigate('/Category');
        }
        const Categories=[
            {name:"Grocery",image:grocery,alt:"grocery Image"},
            {name:"Mobiles",image:mobile,alt:"mobile Image"},
            {name:"Fashion",image:fashion,alt:"fashio Image"},
            {name:"Electronics",image:electronics,alt:"electronics Image"},
            {name:"Furnitures",image:furniture,alt:"furniture Image"},
            {name:"Travel",image:travel,alt:"travel Image"},
            {name:"Toys",image:toys,alt:"toys Image"},
            {name:"Vehicles",image:vehicles,alt:"vehicles Image"},
        ]
        return(
            <div>
                {/* Category List*/}
                    <div className="category_division" >
                {
                    Categories.map((Category,index)=>(
                        <div onClick={CategoryPage} key={index}>
                            <img className="category_img" src={Category.image} alt={Category.alt}/>
                            <p className="category_name">{Category.name}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        )
}
function Carousel(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={banner3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={banner1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={banner2} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
function Popular(){
    const [product, setProduct] = useState([]);
    const[error,setError]=useState("error")
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(data=>{
                setProduct(data);
            })
            .catch(error=>{
                setError(error)
            })
    })
    const navigate=useNavigate();
    const navigateProductPage=()=>{
        navigate('/Product')
    }
        return(
            <div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 className="headline">Popular Items</h1>
                <p style={{ marginRight:"10px",marginTop:"10px", fontSize:"20px",color:"green"}}>More</p>
                </div>
              
                <div className="product_list">
                    {
                        product.map(data=>
                            <div onClick={navigateProductPage} className="product_container" key={data.id}>
                                <img className="product_img" src={data.image} alt="Grocery Image"/>
                                <p className="product_name">{data.title}</p>
                                <p className="product_price">$ {data.price}</p>
                            </div>
                        )
                    }
                   
                </div>
            </div>
        );
}

function Electronics(){
    const [product, setProduct] = useState([]);
    const[error,setError]=useState("error")
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(data=>{
                setProduct(data);
            })
            .catch(error=>{
                setError(error)
            })
    })
    const navigate=useNavigate();
    const navigateProductPage=()=>{
        navigate('/Product')
    }
        return(
            <div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 className="headline">Best Electronics Items</h1>
                <p style={{ marginRight:"10px",marginTop:"10px", fontSize:"20px",color:"green"}}>More</p>
                </div>
              
                <div className="product_list">
                    {
                        product.map(data=>
                    <div className="product_container" key={data.id} onClick={navigateProductPage } >
                        <img className="product_img" src={data.image} alt="Grocery Image"/>
                        <p className="product_name">{data.title}</p>
                        <p className="product_price">${data.price}</p>
                    </div>
                        )
}
                   
                </div>
            </div>
        )
}

class Run extends React.Component{
    render(){
        return(
            <div>
                <Category/>
                <Carousel/>
                <Popular/>
                <Electronics/>
            </div>
        )
    }
   
}
export default Run;




{/* <div onClick={CategoryPage}>
<img className="category_img" src={mobile} alt="Mobile Image"/>
<p className="category_name">Mobiles</p>
</div>
<div onClick={CategoryPage}>
<img className="category_img" src={fashion} alt="Fashion Image"/>
<p className="category_name">Fashion</p>
</div>
<div onClick={CategoryPage}>
<img className="category_img" src={electronics} alt="Electronics Image"/>
<p className="category_name">Electronics</p>
</div>
<div onClick={CategoryPage}>
<img className="category_img" src={furniture} alt="Furnitures Image"/>
<p className="category_name">Furnitures</p>
</div>
<div onClick={CategoryPage}>
<img className="category_img" src={travel} alt="Travel Image"/>
<p className="category_name">Travel</p>
</div>
<div onClick={CategoryPage}>
<img className="category_img" src={toys} alt="Toys Image"/>
<p className="category_name">Toys</p>
</div>
<div onClick={CategoryPage}>
<img className="category_img" src={vehicles} alt="Vehicles Image"/>
<p className="category_name">Vehicles</p>
</div> */}