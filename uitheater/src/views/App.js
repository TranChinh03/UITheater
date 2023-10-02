import BookingFilter from '../components/BookingFilter/bookingFilter';
import Header from '../components/HeaderScreen/Header';
import About from '../views/AboutScreen/About';
import Home from '../views/HomeScreen/Home';
import Movies from '../views/MoviesScreen/Movies';
import Schedule from '../views/ScheduleScreen/Schedule';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from '../components/SignInModal/SignIn';


function App() {


  return (
    <>
    <Router>
      <Header />
      <BookingFilter></BookingFilter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/about" component={About} />
        </Switch>
    </Router>
  </>
  );
}

export default App;