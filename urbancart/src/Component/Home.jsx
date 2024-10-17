import img1 from '../assets/HP_Rotating_FOD_TVs_6Oct2024_fq78ov.webp';
import img2 from '../assets/HP_Rotating_FOD_Apple_6Oct2024_mcrhsh.webp';
import img3 from '../assets/HP_Rotating_FOD_MobileAccessories_6Oct2024_lfkwmc.webp';
import img4 from '../assets/HP_Rotating_FOD_Oneplus_6Oct2024_cczuwi.webp';
import img5 from '../assets/HP_Rotating_FOD_WMs_6Oct2024_yblsbe.webp';
import img6 from '../assets/HP_Rotating_FOD_MobileAccessories_6Oct2024_lfkwmc.webp';
import img7 from '../assets/HP_Rotating_FOD_Oneplus_6Oct2024_cczuwi.webp';
import img8 from '../assets/HP_Rotating_FOD_Apple_6Oct2024_mcrhsh.webp';
import Footer from "./Footer";
import React,{useState,useEffect} from 'react';
import axios from 'axios'


const Home=()=> {
  const [product,setProduct]=useState([])
  const [add,setAdd]=useState(false)
  const [currentProduct,setCurrentProduct]=useState(null)
  useEffect(()=>{
    axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
      .then(response=>setProduct(response.data))
      .catch(error=> console.log(error))
  },[])

const view_p=(products)=>{
  setAdd(true);
  setCurrentProduct(products);
    // console.log(add,currentProduct);
  
}

return(
  <>
  <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="carousel" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
              <img src={img5} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
              <img src={img6} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
              <img src={img7} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
              <img src={img8} className="d-block w-100" alt="..."/>
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



  <div className="container mt-3">
    { /* {() => editTask(task)} */ }
    <div className="row" id='a1'>
      {product.map(pro=>(
        <div className='col-lg-3 col-md-3 col-sm-6' key={pro.id}>
          <div className='card' onClick={()=>view_p(pro)}>
            <img className='card-img-top img fluid' src={pro.image} alt="product image"/>
            <div className='card-body'>
              <h4 className='card-little'>{pro.p_name} </h4>
              <h6 className='card-text'>{pro.price} </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </>
)

}

// function Home(){
//     return(
//       <>
//         <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
//             <div className="carousel-indicators">
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="carousel" aria-label="Slide 1"></button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
//             </div>
//             <div className="carousel-inner ">
//               <div className="carousel-item active">
//                 <img src={img1} className="d-block w-100" alt="..."/>
//               </div>
//               <div className="carousel-item">
//                 <img src={img2} className="d-block w-100" alt="..."/>
//               </div>
//               <div className="carousel-item">
//                 <img src={img3} className="d-block w-100" alt="..."/>
//               </div>
//               <div className="carousel-item">
//                 <img src={img4} className="d-block w-100" alt="..."/>
//               </div>
//               <div className="carousel-item">
//               <img src={img5} className="d-block w-100" alt="..."/>
//               </div>
//               <div className="carousel-item">
//               <img src={img6} className="d-block w-100" alt="..."/>
//               </div>
//               <div className="carousel-item">
//               <img src={img7} className="d-block w-100" alt="..."/>
//               </div>
//               <div className="carousel-item">
//               <img src={img8} className="d-block w-100" alt="..."/>
//               </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>     
//       <Footer/>  
//       </> 
//     );
// }

export default Home