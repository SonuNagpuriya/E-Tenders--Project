import './AddSubCategory.css';
import { useState,useEffect } from 'react';
import {__categoryapiurl, __subcategoryapiurl} from '../../Api_url';
import axios from 'axios';

function AddSubCategory()
{
    const [ catnm , setCatName ] = useState();
    const [ subcatnm , setSubCatName ] = useState();
    const [ file , setFile ] = useState();
    const [ output , setOutput ] = useState();
    const [ cdetails , setCDetails ] = useState([]);

    useEffect(()=>{
        axios.get(__categoryapiurl+"fetch").then((response)=>{
           //console.log(response.data);
           setCDetails(response.data)
        })
    },[])

    const handleChange =(event)=>{
        setFile(event.target.files[0]);
    }   
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        var formdata =new FormData();
        formdata.append('catnm',catnm);
        formdata.append('subcatnm',subcatnm);
        formdata.append('caticon',file);

        const config={
            "content-type":'multipart/form-data'
        }

        axios.post(__subcategoryapiurl+"save",formdata,config).then((response)=>{
            setOutput("Category added successfully");
            setCatName("");
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(
<>
{/* content Start */}
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
            <font color="blue">{output}</font>                
        <h1 class="mb-4">AddCategory Here!!!</h1>
<form>
<div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={catnm} onChange={e=>setCatName(e.target.value)}>
        <option>Select Category</option>
        {
            cdetails.map((row)=>(
                <option>{row.catnm}</option>
            ))
        }
    </select>
  </div>
  <br/>     
  <div class="form-group">
    <label for="Subcatnm">Sub Category Name:</label>
    <input type="text" class="form-control" placeholder="Enter subcategory name" value={subcatnm} onChange={e=>setSubCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="subcaticon">Sub CatIcon :</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>AddCategory</button>
</form>  

            </div>
        </div>
    </div>
</div>
{/* content End */}
</>
    ) 
}

export default AddSubCategory;
