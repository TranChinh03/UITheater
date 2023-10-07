import React, { useState } from 'react';
import BookingFilter from '../components/BookingFilter/bookingFilter';
import Header from '../components/HeaderScreen/Header';
import About from '../views/AboutScreen/About';
import Home from '../views/HomeScreen/Home';
import Movies from '../views/MoviesScreen/Movies';
import Schedule from '../views/ScheduleScreen/Schedule';
import { Button, Modal } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from '../components/SignInModal/SignIn';
import MovieInfo from '../components/MovieInfo/movieInfo';

function App() {


  return (
    <>
    <MovieInfo></MovieInfo>
    {/* <Router>
      <Header />
      <BookingFilter></BookingFilter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/about" component={About} />
        </Switch>
    </Router> */}
  </>
  );
}

export default App;