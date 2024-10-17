import {Link,Outlet} from "react-router-dom"

function Footer(){
    return (
        <>
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <h5>About Us</h5>
                    <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Our Story</a></li>
                    <li><a href="#" className="text-white">Careers</a></li>
                    <li><a href="#" className="text-white">Blog</a></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <h5>Customer Service</h5>
                    <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Help Center</a></li>
                    <li><a href="#" className="text-white">Returns</a></li>
                    <li><a href="#" className="text-white">Shipping Info</a></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                    
                    <li><a href="#" className="text-white">Shop</a></li>
                    <li><a href="#" className="text-white">Offers</a></li>
                    <li><a href="#" className="text-white">Gift Cards</a></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <h5>Follow Us</h5>
                    <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
                </div>
                </div>

                <div className="text-center mt-4">
                <p>&copy; 2024 YourStore. All Rights Reserved.</p>
                </div>
            </div>
</footer>

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

{/* <Outlet/> */}
</>
)
}

export default Footer;