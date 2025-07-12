import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/HeaderComponent/Header';
import Footers from './components/FooterComponent/Footer';
import Home from './components/HomeComponent/Home';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Banner from './components/BannerComponent/Banner';
import Adminhome from './components/AdminhomeComponent/Adminhome';
import Userhome from './components/UserHomeComponent/Userhome';
import Logout from './components/LogoutComponent/Logout';
import Manageusers from './components/ManageusersComponent/Manageusers';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import AddCategory from './components/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import ViewCategory from './components/ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './components/ViewSubComponent/ViewSubCategory';
import AddTender from './components/AddTenderComponent/AddTender';
import ViewProduct from './components/ViewProductComponent/ViewProduct';
import Bidproduct from './components/BidproductComponent/Bidproduct';
import ViewBidProduct from './components/ViewBidProductDetailComponent/ViewBidProduct';
import ViewBid from './components/ViewBidComponent/ViewBid';
import VerifyUser from './components/VerifyuserComponent/VerifyUser';

function App() {

  return (
    <>
      <Header />
      <Banner />

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/service' element={<Service />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/logout' element={<Logout />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/admin' element={<Adminhome />} ></Route>
        <Route path='/manageusers' element={<Manageusers />} ></Route>
        <Route path='/addcategory' element={<AddCategory />} ></Route>
        <Route path='/addsubcategory' element={<AddSubCategory />} ></Route>
        <Route path='/cpadmin' element={<CPAdmin />} ></Route>
        <Route path='/epadmin' element={<EPAdmin />} ></Route>
        <Route path='/user' element={<Userhome />} ></Route>
        <Route path='/viewcategory' element={<ViewCategory />}></Route>
        <Route path='/viewsc/:catnm' element={<ViewSubCategory />}></Route>
        <Route path='/addTender' element={<AddTender/>}></Route>
        <Route path="/viewp/:subcatnm" element={ <ViewProduct />} ></Route>
        <Route path="/bidp/:_id" element={ <Bidproduct />} ></Route>
        <Route path="/viewbidp" element={ <ViewBidProduct />} ></Route>
        <Route path="/viewbid/:_id" element={ <ViewBid/>} ></Route>
        <Route path="/verify/:email" element={<VerifyUser />}></Route>

      </Routes>

      <Footers/>
    </>
  );
}

export default App;