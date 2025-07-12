import './Manageusers.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../Api_url';
import { useNavigate } from 'react-router-dom';

function Manageusers()
{

    const navigate=useNavigate();
    const [ userDetails , setUserDetails ] = useState([]);
    
    useEffect(()=>{
        var condition_obj={"role":"user"};
        axios.get(__userapiurl+"fetch",{
            params : { condition_obj : condition_obj }
        }).then((response)=>{
            //console.log(response.data);
            setUserDetails(response.data);
        }).catch((error)=>{
            console.log(error);
        });    
    });   

    var changestatususer=(_id,s)=>{
        if(s=="verify")
        {
          var update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":1}};
          axios.patch(__userapiurl+"update",update_details).then((response)=>{
              alert("User verified successfully....");
              navigate("/manageusers");
          });
        }
        else if(s=="block")
        {
          var update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":0}};
          axios.patch(__userapiurl+"update",update_details).then((response)=>{
              alert("User blocked successfully....");
              navigate("/manageusers");
          });
        }    
        else
        {
          var delete_details={"data":{"_id":_id}};
          axios.delete(__userapiurl+"delete",delete_details).then((response)=>{
              alert("User deleted successfully....");
              navigate("/manageusers");
          });
        }
      };

    return(
<>
{/* content Start */}
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
<div class="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
<h1 class="mb-4">View & Manage Users</h1>

<table className='table table-bordered' cellPadding={10}>
<tr>
<th>RegID</th>
<th>Name</th>
<th>Email</th>    
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>
</tr>    

{
 userDetails.map((row)=>(
    <tr>
        <td>{row._id}</td>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.mobile}</td>
        <td>{row.address}</td>
        <td>{row.city}</td>
        <td>{row.gender}</td>
        <td>{row.info}</td>
        <td>{row.status==1 ? <font color="green">Verified</font>: <font color="orange">Blocked</font>}</td>
        <td>
{row.status==1?<font onClick={()=> changestatususer(row._id,'block')} color="blue">Change Status</font>:<font onClick={()=> changestatususer(row._id,'verify')} color="blue">Change Status</font>}      
      <br/>
<font onClick={()=> changestatususer(row._id,'delete')} color="red">DELETE</font>
      </td>
    </tr>      
 ))    
}

</table>

</div>
        </div>
    </div>
</div>
{/* content End */}
</>
    ); 
}

export default Manageusers;