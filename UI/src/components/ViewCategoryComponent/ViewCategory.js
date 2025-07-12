import './ViewCtegory.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import { __categoryapiurl } from '../../Api_url';
import {Link} from 'react-router-dom';
function ViewCtegory() {

  const [cDetails,setCdetails]=useState([]);

  useEffect(()=>{
    axios.get(__categoryapiurl+"fetch").then((response)=>{
      setCdetails(response.data);
    }).catch(()=>{

    })
  })
  return (
    <>
           {/* About Start */}
           <div class="container-fluid p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
                <h1 class="display-5 mb-4">View Category Here !!!</h1>
                <div id="main">
                  { 
                   cDetails.map((row)=>(
                  <div className="cpart" >
                     <Link to ={`/viewsc/${row.catnm}`}> 
                     <img src={`./assets/uploads/caticons/${row.caticonnm}`}  height="90%" width="90%"/>
                     <br />
                     <b>{row.catnm}</b>
                     </Link>
                   </div>
                   ))
                  }
                </div>
            </div>
        </div>    
    </div>
    {/* About End */}
    </>
  );
}

export default ViewCtegory;

