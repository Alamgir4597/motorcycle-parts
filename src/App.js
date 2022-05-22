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

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
     </Routes>
    </div>
  );
}

export default App;
