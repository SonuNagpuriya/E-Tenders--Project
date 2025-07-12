import './Banner.css';

function Banner()
{
    return(
      <>
      {/* Carousel Start */}
<div class="container-fluid p-0">
    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="./assets/img/img1.jpg" height="500" width="1366" alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style={{"max-width":"900px"}} >
                    <p class="fs-5 fw-medium text-white mb-4 pb-2">Online Solution For Tenders</p> 
                    <h1 class="display-3 text-white animated slideInDown mb-4">We Provide Solution On Your Business</h1>
                
                 
                        <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</a>
                        <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="w-100" src="./assets/img/img2.jpeg" height="500" width="1366" alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style={{"max-width":"900px"}}>
                    <p class="fs-5 fw-medium text-white mb-4 pb-2">Online Solution For Tenders</p> 
                    <h1 class="display-3 text-white animated slideInDown mb-4">We Provide Solution On Your Business</h1>
                        <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</a>
                        <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>

  {/* Search Start */}
  <div
    className="container-fluid bg-primary mb-5 wow fadeIn"
    data-wow-delay="0.1s"
    style={{ padding: 35 }}
  >
    <div className="container">
      <div className="row g-2">
        <div className="col-md-10">
          <div className="row g-2">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Search Keyword"
              />
            </div>
            <div className="col-md-4">
              <select className="form-select border-0 py-3">
                <option selected="">Property Type</option>
                <option value={1}>Property Type 1</option>
                <option value={2}>Property Type 2</option>
                <option value={3}>Property Type 3</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select border-0 py-3">
                <option selected="">Location</option>
                <option value={1}>Location 1</option>
                <option value={2}>Location 2</option>
                <option value={3}>Location 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-dark border-0 w-100 py-3">Search</button>
        </div>
      </div>
    </div>
  </div>
  {/* Search End */}



{/* Carousel End */}
    </>
    

    ) 
}

export default Banner;