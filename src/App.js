import logo from './logo.svg';
import './App.css';
import Home from './Homes/Home/Home';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Purchase/Purchase';
import Blogs from './Blogs/Blogs';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import NotFound from './NotFound/NotFound';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';
import Dashboard from './Dashboard/Dashboard';
import MyOrder from './Dashboard/MyOrder/MyOrder';
import AddReview from './Dashboard/AddReview/AddReview';
import MyProfile from './Dashboard/MyProfile/MyProfile';
import Users from './Dashboard/Users/Users';
import AddParts from './Dashboard/AddParts/AddParts';
import Payment from './Dashboard/Payment';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './RequireAdmin/RequireAdmin';
import ManageAllOrders from './Dashboard/ManageAllOrders';
import ManageProducts from './Dashboard/ManageProducts';



function App() {
  
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        
          <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
          </RequireAuth>}>
           <Route index element={<MyOrder></MyOrder>}></Route> 
           <Route path='addreview' element={<AddReview></AddReview>}></Route> 
           <Route path='myprofile' element={<MyProfile></MyProfile>}></Route> 
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin> }></Route> 
          <Route path='addparts' element={<RequireAdmin><AddParts></AddParts></RequireAdmin>}></Route> 
           <Route path='payment/:id' element={<Payment></Payment>}></Route> 
          <Route path='manageallorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route> 
          <Route path='manageparts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route> 
            </Route> 
            
       
        <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
