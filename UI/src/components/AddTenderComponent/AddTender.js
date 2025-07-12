import './AddTender.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { __categoryapiurl , __subcategoryapiurl,__productapiurl } from '../../Api_url';

function AddTender() {

  const [file,setFile]=useState();
  const [catName,setCatName]=useState();
  const [title,setTitle]=useState();
  const [subCatName,setSubCatName]=useState();
  const [descp,setDescription]=useState();
  const[bprice,setBasePrice]=useState();
  const [output,setOutput]=useState();
  const [cDetails,setCatDetails]=useState([]);
  const [scDetails,setScDetails]=useState([]);
  
  
  useEffect(()=>{
    axios.get(__categoryapiurl+"fetch").then((response)=>{
   //   console.log(response.data);
      setCatDetails(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  })
const fetchSubCat=(catnm)=>{
  setCatName(catnm);
   axios.get(__subcategoryapiurl+"fetch?catnm="+catnm).then((response)=>{
    setScDetails(response.data);
   }).catch((error)=>{
    setScDetails([]);
   }); 
}
const handleChange=(event)=>{
  setFile(event.target.files[0]);
};

const handleSubmit=(event)=>{
  event.preventDefault();
  var formData = new FormData();
  formData.append('title',title);
  formData.append('catnm', catName);
  formData.append('subcatnm', subCatName);
  formData.append('description',descp);
  formData.append('baseprice', bprice);
  formData.append('uid',localStorage.getItem('email'));
  formData.append('picon', file);
  const config = {
      'content-type': 'multipart/form-data'
  };
  axios.post(__productapiurl+"save", formData, config).then((response) => {
    setCatName("");
    setSubCatName("");
    setTitle("")
    setDescription("");
    setBasePrice("");
    setOutput("Tender Added Successfully....");
  });
};

  return (
    <>
           {/* About Start */}
           <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
                <h1 class="display-5 mb-4">Add Tenders Here !!!</h1>
                <font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="Title">Title:</label>
    <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)} />
   </div>
     <br />
   <div class="form-group"> 
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={catName} onChange={e => fetchSubCat(e.target.value)}>
      <option>Select Category</option>
        {
          cDetails.map((row)=>(
            <option>{row.catnm}</option>
          ))
        }
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="subcatnm">Sub Category Name:</label>
       <select  class="form-control" value={subCatName} onChange={e =>setSubCatName(e.target.value)} >
          <option>select subcategory</option>
          {
            scDetails.map((row)=>(
              <option>{row.subcatnm}</option>
            ))
          }
      </select> 
   </div>
  <br/>
  <div class="form-group">
    <label for="Description">Description:</label>
  <input type="text" class="form-control" value={descp} onChange={e => setDescription(e.target.value)} />
  <br />
  </div>
  <div class="form-group">
    <label for="Base Price">Base Price:</label>
     <input type="text" class="form-control" value={bprice} onChange={e => setBasePrice(e.target.value)} />
  </div>
  <br />
  <div class="form-group">
    <label for="file">Sub Product Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Tender</button>
</form>                
                
            </div>
        </div>    
    </div>
    {/* About End */}
    </>
  );
}

export default AddTender;

