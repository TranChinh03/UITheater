import Header from '../components/HeaderScreen/Header';
import About from '../views/AboutScreen/About';
import Home from '../views/HomeScreen/Home';
import Movies from '../views/MoviesScreen/Movies';
import Schedule from '../views/ScheduleScreen/Schedule';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './RegisterScreen/Register';
import NotFoundScreen from './NotFoundScreen/NotFoundScreen';
import Info from './InfoScreen/Info';
import ForgotPassword from './PasswordScreen/ForgotPassword';
import ResetPassword from './PasswordScreen/ResetPassword';
import Booking from './BookingScreen/Booking';
import Draft from './draft/draft';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />

          <Route path="/me" element={<Info />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
