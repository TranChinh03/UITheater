import BookingFilter from '../components/BookingFilter/bookingFilter';
import Header from '../components/HeaderScreen/Header';
import About from '../views/AboutScreen/About';
import Home from '../views/HomeScreen/Home';
import Movies from '../views/MoviesScreen/Movies';
import Schedule from '../views/ScheduleScreen/Schedule';
import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SignIn from '../components/SignInModal/SignIn';
import Register from './RegisterScreen/Register';
import NotFoundScreen from './NotFoundScreen/NotFoundScreen';
import Info from './InfoScreen/Info';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/me" element={<Info/>} />
          <Route path="*" element={<NotFoundScreen/>} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
