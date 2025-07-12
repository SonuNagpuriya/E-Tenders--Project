import './EPAdmin.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../Api_url';
import { useNavigate } from 'react-router-dom';

function EPAdmin()
{

    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ address , setAddress ] = useState();
    const [ city , setCity ] = useState();
    const [ gender , setGender ] = useState();
    const [ output , setOutput ] = useState();

    useEffect(()=>{
        var condition_obj={"email":localStorage.getItem("email")};
        axios.get(__userapiurl+"fetch",{
            params : { condition_obj : condition_obj }
        }).then((response)=>{
            const users=response.data[0];
            setName(users.name);
            setEmail(users.email);    
            setMobile(users.mobile);
            setAddress(users.address);
            setCity(users.city);
        }).catch((error)=>{
            console.log(error);
        });    
    },[]);

    const handleSubmit=()=>{
        var update_details={"condition_obj":{"email":email} ,"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
        axios.patch(__userapiurl+"update",update_details).then((response)=>{
            alert("Profile edited successfully....");
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
<h1 class="mb-4">Edit Profile Here!!!</h1>
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" placeholder="Enter Name" value={name} onChange={e=>setName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" placeholder="Enter Mobile" value={mobile} onChange={e=>setMobile(e.target.value)} />
  </div>
  <br/>
  
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea rows="5" class="form-control" placeholder="Enter Address" value={address} onChange={e=>setAddress(e.target.value)} ></textarea>
  </div>
  <br/>
  
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" value={city} onChange={e=>setCity(e.target.value)} >
        <option>Select City</option>
        <option>Indore</option>
        <option>Bhopal</option>
        <option>Ujjain</option>
    </select>
  </div>
  <br/>
  
  <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
    Male <input type="radio" name="gender" value="male" onChange={e=>setGender(e.target.value)}/>
    &nbsp;&nbsp;
    Female <input type="radio" name="gender" value="female" onChange={e=>setGender(e.target.value)} />
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

export default EPAdmin;


