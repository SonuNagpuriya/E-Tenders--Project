import './Login.css';
import { useState } from 'react';
import { __userapiurl } from '../../Api_url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const navigate = useNavigate();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ output , setOutput ] = useState();

    const handleSubmit=()=>{
        var userDetails={"email":email,"password":password};
        axios.post(__userapiurl+'login',userDetails).then((response)=>{
            var userDetails=response.data.userDetails;
            
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("name",userDetails.name);
            localStorage.setItem("email",userDetails.email);
            localStorage.setItem("mobile",userDetails.mobile);
            localStorage.setItem("address",userDetails.address);
            localStorage.setItem("city",userDetails.city);
            localStorage.setItem("gender",userDetails.gender);
            localStorage.setItem("status",userDetails.status);
            localStorage.setItem("role",userDetails.role);
            localStorage.setItem("info",userDetails.info);

            (userDetails.role=="admin")?navigate("/admin"):navigate("/user");              
        }).catch((error)=>{
          setOutput("Invalid user or verify your account....");  
          setEmail("");
          setPassword("");
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
<h1 class="mb-4">Login Here!!!</h1>
<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)} />
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

export default Login;