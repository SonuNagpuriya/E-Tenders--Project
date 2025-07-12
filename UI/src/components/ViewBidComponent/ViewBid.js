import './ViewBid.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { __bidapiurl } from '../../Api_url';
import { useParams } from 'react-router-dom';
function ViewBid() {
  const [bDetails,setBidDetails]=useState([]);
  const params=useParams();

  useEffect(()=>{
    axios.get(__bidapiurl+"fetch?_id="+params._id).then((response)=>{
        setBidDetails(response.data);
    });
  })

  return (
    <>
           {/* About Start */}
           <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
                <h1 class="display-5 mb-4">Bid Details !!!</h1>
                <table class="table table-bordered">
                  <tr>
                    <td>bidding Id</td>
                    <td>Product Id</td>
                    <td>User Id</td>
                    <td>bidding Price</td>
                    <td>info</td>
                    </tr>
                    {
                      bDetails.map((row)=>(
                          <tr>
                            <td>{row._id}</td>
                            <td>{row.p_id}</td>
                            <td>{row.u_id}</td>
                            <td>{row.bidprice}</td>
                            <td>{row.info}</td>
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

export default ViewBid;

