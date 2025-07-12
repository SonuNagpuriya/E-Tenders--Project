import './ViewSubCategory.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import { __subcategoryapiurl } from '../../Api_url';
import {Link,useParams} from 'react-router-dom';

function ViewSubCategory() {
 const params=useParams();
 const[scdetails,setScDetails]=useState([]);

  useEffect(()=>{
    axios.get(__subcategoryapiurl+"fetch?catnm="+params.catnm).then((response)=>{
      setScDetails(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  })
  return (
    <>
           {/* About Start */}
           <div class="container-fluid  p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
                <h1 class="display-5 mb-4">View SubCategory Here!!!</h1>
                <div id="main1">
                  {
                    scdetails.map((row)=>(
                  <div className="items">
                    <Link to={`/viewp/${row.subcatnm}`} >     
                   <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="80%" width="80%"/>
                    <b>{row.subcatnm}</b>
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

export default ViewSubCategory;

