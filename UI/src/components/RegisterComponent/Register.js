import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../Api_url';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [output, setOutput] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = {};
    var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
    // Name validation
    if (!name) validationErrors.name = 'Name is required';
    
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailPattern.test(email)) validationErrors.email = 'Enter a valid email address';
    
    // Password validation
    if (!password || password.length < 6) validationErrors.password = 'Password must be at least 6 characters long';
    
    // Mobile validation (simple validation for digits)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobile || !mobilePattern.test(mobile)) validationErrors.mobile = 'Enter a valid 10-digit mobile number';
    
    // Address validation
    if (!address) validationErrors.address = 'Address is required';
    
    // City validation
    if (!city) validationErrors.city = 'Please select a city';
    
    // Gender validation
    if (!gender) validationErrors.gender = 'Please select gender';
    
    if (Object.keys(validationErrors).length === 0) {
      const userDetails = {
        name,
        email,
        password,
        mobile,
        address,
        city,
        gender,
      };
      axios.post(__userapiurl+'save',userDetails).then(res=>{
        
        setOutput('Form submitted successfully!');
        setName('');
        setEmail('');
        setPassword('');
        setMobile('');
        setAddress(''); 
        setCity('');
        setGender('');
      }).catch(e=>{
        setOutput('Form not submitted!');

      })
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {/* content Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <font color="blue">{output}</font>
              <h1 className="mb-4">Register Here!!!</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="mobile">Mobile:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  {errors.mobile && <div className="error">{errors.mobile}</div>}
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                  {errors.address && <div className="error">{errors.address}</div>}
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <select
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Select City</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Ujjain</option>
                  </select>
                  {errors.city && <div className="error">{errors.city}</div>}
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  &nbsp;&nbsp;
                  Male{' '}
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  &nbsp;&nbsp;
                  Female{' '}
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  {errors.gender && <div className="error">{errors.gender}</div>}
                </div>
                <br />
                <button type="button" className="btn btn-success" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* content End */}
    </>
  );
}

export default Register;
