
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "../views/HomeScreen/Home";
import Movies from "../views/MoviesScreen/Movies";
import Schedule from "../views/ScheduleScreen/Schedule";
import About from "../views/AboutScreen/About";
import Booking from "../views/BookingScreen/Booking";

const Switcher = () => {
    return (
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/about" component={About} />
        </Switch>
        );
}

export default Switcher;