import BookingFilter from '../components/BookingFilter/bookingFilter';
import Header from '../components/HeaderScreen/Header';
import About from '../views/AboutScreen/About';
import Home from '../views/HomeScreen/Home';
import Movies from '../views/MoviesScreen/Movies';
import Schedule from '../views/ScheduleScreen/Schedule';
import BookingFilter from "../components/BookingFilter/bookingFilter";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BookingFilter></BookingFilter>
  );
}

export default App;