import './ViewBidProduct.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {__productapiurl} from '../../Api_url';
import {Link} from 'react-router-dom';
function ViewBidProduct() {

  const [pDetails,setPDetails]=useState([]);

  useEffect(()=>{
    axios.get(__productapiurl+"fetch?uid="+localStorage.getItem('email')).then((response)=>{
      setPDetails(response.data);
      }).catch((error)=>{
      console.log(error)
    });

  })
  return (
    <>
           {/* About Start */}
           <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
                <h1 class="display-5 mb-4">View Tender Detail</h1>
                <table class="table table-bordered">
                  <tr>
                    <th>Productid</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Base Price</th>
                    <th>picon</th>
                    <th>Info</th>
                    <th>Action</th>
                  </tr>
                  {
                    pDetails.map((row)=>(
                      <tr>
                        <td>{row._id}</td>
                        <td>{row.title}</td>
                        <td>{row.subcatnm}</td>
                        <td>{row.description}</td>
                        <td>{row.baseprice}</td>
                        <td>{row.piconnm}</td>
                        <td>{row.info}</td>
                        <td><Link to={`/viewbid/${row._id}`}>view Bid</Link></td>
                      </tr>
                    ))
                  }
                  
                </table> 
            </div>
        </div>    
    </div>
    {/* About End */}
    </>
  );
}

export default ViewBidProduct;

