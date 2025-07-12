import './ViewProduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { __productapiurl } from '../../Api_url';
import { Link, useParams } from 'react-router-dom';

function ViewProduct() {
  const params = useParams();
  const [ pDetails , setProductDetails ] = useState([]);

  useEffect(()=>{
    axios.get(__productapiurl+"fetch?subcatnm="+params.subcatnm).then((response)=>{
      const fetchProductDetails=response.data;
      var p=fetchProductDetails.map(product => {
        const initialtime = new Date(product.info);
        //console.log(initialtime); 
        const timedifference = (new Date() - initialtime)/(1000*60*60);
        //console.log(timedifference); 
                return{
          ...product,
          timedifference:timedifference
        }
      });
      setProductDetails(p);  
    }).catch((error)=>{
      console.log(error);   
    });
  },[]);

  return (
    <>
           {/* About Start */}
           <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
                <h1 class="display-5 mb-4">View Product List &gt;&gt; {params.subcatnm} </h1>
               {
                pDetails.map((row)=>(
          <center>
          <table id="ptable" border="1">
          <tr>
            <td rowspan="3">
              <center>
              <img src={`../assets/uploads/picons/${row.piconnm}`} height="100" width="150" />
              </center>
            </td>
            <td><b>Title : {row.title} </b></td>
          </tr>
          <tr>
            <td><b>Description : {row.description}</b></td>
          </tr>  
          <tr>
            <td>
            <b>Base price : {row.baseprice}</b>
            <br/>
            { row.timedifference>48 ?<button>Bid Closed</button>:<Link to={`/bidp/${row._id}`} ><button>Bid Open</button></Link> }
            </td>
          </tr>
          </table>
          <br/><br/>
          </center>
            ))
}

              </div>
        </div>    
    </div>
    {/* About End */}
    </>
  );
}

export default ViewProduct;

