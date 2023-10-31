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
import MovieInfo from '../components/MovieInfo/movieInfo';
import BookingInfo from '../components/BookingInfo/bookingInfo';
import DetailSelect from '../components/detailSelect/detailSelect';

function App() {
  return (
    <>
      <Info></Info>
      {/* <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFoundScreen} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
