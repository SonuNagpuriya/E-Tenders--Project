import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import Auth from '../AuthComponent/Auth';

function Header() {
  const [HeaderContent, setHeaderContent] = useState();

  useEffect(() => {
    setInterval(()=>{
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token !== null && role === "admin") {
      // Admin View
      setHeaderContent(
        <>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a className="nav-item nav-link active">
                <Link to="/admin">Admin Home</Link>
              </a>
              <a className="nav-item nav-link active">
                <Link to="/manageusers">manageusers</Link>
              </a>
              <a className="nav-item nav-link active">
                <Link to="/addcategory">AddCategory</Link>
              </a>
              <a className="nav-item nav-link active">
                <Link to="/addsubcategory">AddSubCategory</Link>
              </a>
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#3db074"}} >Settings</a>
                <div class="dropdown-menu rounded-0 m-0">
                    <a class="dropdown-item"><Link  to="/cpadmin">Change Password</Link></a>
                    <a class="dropdown-item"><Link  to="/epadmin">Edit Profile</Link></a>
                </div>
            </div>
            </div>
            <a className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
              <Link style={{ color: "black" }} to="/logout">Logout</Link>
              <i className="fa fa-arrow-right ms-3"></i>
            </a>
          </div>
        </>
      );
    } else if (token !== null && role === "user") {
      // User View
      setHeaderContent(
        <>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a className="nav-item nav-link active">
                <Link to="/">User Home</Link>
              </a>
              <a className="nav-item nav-link active">
                <Link to="/viewcategory">View Category</Link>
              </a>
              <a className="nav-item nav-link active">
                <Link to="/addtender"> Add Tender</Link>
              </a>
              <a className="nav-item nav-link active">
                <Link to="/Viewbidp">View Tender</Link>
              </a>
            </div>
            <a className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
              <Link style={{ color: "black" }} to="/logout">Logout</Link>
              <i className="fa fa-arrow-right ms-3"></i>
            </a>
          </div>
        </>
      );
    } else {
      // Default View for non-logged-in users
      setHeaderContent(
        <>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link ">About</Link>

              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Service
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/service" className="dropdown-item">Our Clients</Link>
                  <a className="dropdown-item">Testimonial</a>
                </div>
              </div>

              <Link to="/contact" className="nav-item nav-link">Contact</Link>
              <Link to="/register" className="nav-item nav-link">Register</Link>
            </div>
            <Link to="/login" className="btn btn-primary px-3 d-none d-lg-flex">Login</Link>
          </div>
        </>
      );
    }
  })
  }, []); // Only runs once on mount

  return (
    <>
    <Auth/>
      {/* Navbar Start */}
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a className="navbar-brand d-flex align-items-center text-center">
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src="./assets/img/logo_image.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            </div>
            <h1 className="m-0 text-primary">Tenders</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {HeaderContent}
        </nav>
      </div>
      {/* Navbar End */}
    </>

  );

}

export default Header;
