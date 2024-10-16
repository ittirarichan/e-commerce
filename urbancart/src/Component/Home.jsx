import img1 from '../assets/HP_Rotating_FOD_TVs_6Oct2024_fq78ov'
import img2 from '../assets/HP_Rotating_FOD_Apple_6Oct2024_mcrhsh'
import img3 from '../assets/HP_Rotating_FOD_MobileAccessories_6Oct2024_lfkwmc'
import img4 from '../assets/HP_Rotating_FOD_Oneplus_6Oct2024_cczuwi'
import img5 from '../assets/HP_Rotating_FOD_WMs_6Oct2024_yblsbe'
import img6 from '../assets/HP_Rotating_FOD_MobileAccessories_6Oct2024_lfkwmc'
import img7 from '../assets/HP_Rotating_FOD_Oneplus_6Oct2024_cczuwi'
import img8 from '../assets/HP_Rotating_FOD_Apple_6Oct2024_mcrhsh'

function Home(){
    return(
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
    )
}

export default Home