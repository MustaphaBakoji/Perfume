import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Image from './Components/Image';
import Body from './Components/Body';
import Footer from './Components/Footer';
import SignUp from './User/SignUp';
import { Outlet, Route, Routes } from 'react-router';
import Login from './User/Login';
import AdminBody from './Admin/AdminBody';
import AdminPerfume from './Admin/AdminPerfume';
import AddPerfume from './Admin/AddPerfume';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        }>
          <Route path='/' element={<Body />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>

      <AddPerfume />
    </div>
  );
}

export default App;
