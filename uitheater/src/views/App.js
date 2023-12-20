import Header from '../components/HeaderScreen/Header';
import About from '../views/AboutScreen/About';
import Home from '../views/HomeScreen/Home';
import Movies from '../views/MoviesScreen/Movies';
import Schedule from '../views/ScheduleScreen/Schedule';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './RegisterScreen/Register';
import NotFoundScreen from './NotFoundScreen/NotFoundScreen';
import Info from './InfoScreen/Info';
import ForgotPassword from './PasswordScreen/ForgotPassword';
import ResetPassword from './PasswordScreen/ResetPassword';
import Booking from './BookingScreen/Booking';
import MovieDetail from './MovieDetailScreen/MovieDetail';
import Draft from './draft/draft';
import {getListMovieFunction} from '../apis/GetMethod/getListMovie';
import Payment from './PaymentScreen/Payment';

function App() {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        localStorage.setItem(
          'movieList',
          JSON.stringify(await getListMovieFunction()),
        );
      } catch (error) {
        console.log('Error fetching movies!');
      }
    };
    fetchMovies();
  }, []);

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
          <Route path="/payment" element={<Payment />} />

          <Route path="/moviedetail" element={<MovieDetail />} />

          <Route path="/draft" element={<Draft />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
