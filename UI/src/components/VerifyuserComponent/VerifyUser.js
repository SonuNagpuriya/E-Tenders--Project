import { Navigate,useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { __userapiurl } from '../../Api_url';
import axios from 'axios';

function VerifyUser()
{
    const params = useParams(); 
    useEffect(()=>{
     axios.get(__userapiurl+"fetch?email="+params.email).then((response)=>{
        if(response.data[0].__v==0)
        {
            var updateDetails={"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}; 
            axios.patch(__userapiurl+"update",updateDetails).then((response)=>{
               console.log("User verified....");    
            });    
        }       
     });
    },[]);

    return(
        <div>
            <Navigate to='/login' />
        </div>
    )
}

export default VerifyUser