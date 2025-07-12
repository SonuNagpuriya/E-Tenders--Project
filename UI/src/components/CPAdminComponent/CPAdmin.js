import './CPAdmin.css';
import { useState } from 'react';
import { __userapiurl } from '../../Api_url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CPAdmin()
{
    const navigate = useNavigate();
    const [ opassword , setOldPassword ] = useState();
    const [ npassword , setNewPassword ] = useState();
    const [ cnpassword , setConfirmNewPassword ] = useState();
    const [ output , setOutput ] = useState();

    const handleSubmit=()=>{
        var condition_obj={"email":localStorage.getItem("email"),"password":opassword};
        axios.get(__userapiurl+"fetch",{
            params : { condition_obj : condition_obj }
        }).then((response)=>{
            if(npassword==cnpassword)
            {
                var update_details={"condition_obj":{"email":localStorage.getItem("email")} ,"content_obj":{"password":cnpassword}};
                axios.patch(__userapiurl+"update",update_details).then((response)=>{
                    alert("Password updated successfully , please login again....");
                    navigate("/logout");
                });    
            }   
            else
            {
                setOutput("New & Confirm new password mismatch , please try again....");
                setNewPassword("");
                setConfirmNewPassword("");    
            } 
        }).catch((error)=>{
            setOutput("Invalid old password , please try again....");    
            setOldPassword("");
        });    
    };    

    return(
<>
{/* content Start */}
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
<font color="blue">{output}</font>                
<h1 class="mb-4">Change Password Here!!!</h1>
<form>
  <div class="form-group">
    <label for="opwd">Old Password:</label>
    <input type="password" class="form-control" placeholder="Enter Old Password" value={opassword} onChange={e=>setOldPassword(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="npwd">New Password:</label>
    <input type="password" class="form-control" placeholder="Enter New Password" value={npassword} onChange={e=>setNewPassword(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="cnpwd">Confirm New Password:</label>
    <input type="password" class="form-control" placeholder="Enter Confirm New Password" value={cnpassword} onChange={e=>setConfirmNewPassword(e.target.value)} />
  </div>
  <br/>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
</form>
            </div>
        </div>
    </div>
</div>
{/* content End */}
</>
    ) 
}

export default CPAdmin;


