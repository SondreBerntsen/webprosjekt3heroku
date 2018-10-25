import React, { Component } from "react";
//import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Programme from "./components/programme/Programme";
import About from "./components/about/About";
import News from "./components/news/News";
import Review from "./components/review/review";
import Contact from "./components/contact/Contact";
import Event from "./components/event/Event";
import NewsArticle from "./components/news/NewsArticle";

// Admin things
import Admin from "./components/admin/Admin";
import AdminEvents from "./components/admin/tables/AdminEvents";
import AdminPosts from './components/admin/tables/AdminPosts';
import AdminSchedule from './components/admin/tables/AdminSchedule';
import AdminVenues from './components/admin/tables/AdminVenues';

import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/om-oss" component={About} />
          <Route path="/nyheter" component={News} />
          <Route path="/tilbakeblikk" component={Review} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/program" component={Programme} />
          <Route path="/arrangement/:eventId" component={Event} />
          <Route path="/artikkel/:newsId" component={NewsArticle} />

          <Route path="/admin" component={Admin} />
          <Route path="/admin/events" component={AdminEvents} />
          <Route path="/admin/posts" component={AdminPosts} />
          <Route path="/admin/schedule" component={AdminSchedule} />
          <Route path="/admin/venues" component={AdminVenues} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
