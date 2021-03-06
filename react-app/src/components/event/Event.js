//Event page
//mye fix her når database kommer
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScheduleItem from "../ScheduleItem";
import EventVideo from "./EventVideo";
import "../../styles/event.css";

class Event extends Component {
  state = {
    id: null,
    eventData: [
      {
        id: "",
        title: "",
        text: "",
        img_path: "",
        date: "",
        youtube_link: "",
        payment_link: "",
        address: "",
        price: ""
      }
    ],
    yt_vid: []
  };
  componentDidMount() {
    let id = this.props.match.params.eventId;
    this.getEventData(id);
    window.scrollTo(0, 0);
  }

  getEventData = id => {
    fetch(`http://localhost:5000/event?id=` + id)
      .then(response => response.json())
      .then(response => this.setState({ eventData: response }))
      .then(response => this.getYTID(response))
      .catch(err => console.log(err));
  };

  getYTID() {
    if (this.state.eventData[0].youtube_link !== null) {
      let yt_link = this.state.eventData[0].youtube_link;
      var regex = new RegExp("(?<=v=)()(.*$)");
      var yt_vid = regex.exec(yt_link)[0];
      return this.setState({ yt_vid: yt_vid });
    } else {
      return this.setState({ yt_vid: "" });
    }
  }

  showScheduleItem() {
    let givenDate = this.state.eventData[0].date;
    let currentDate = new Date();
    givenDate = new Date(givenDate);
    console.log("given date " + givenDate);
    console.log("current date" + currentDate);
    // if the date of the event has passed or is today..
    if (givenDate > currentDate || givenDate === currentDate) {
      // ..we output the ScheduleItem component for the event.
      return (
        <ScheduleItem key={this.state.id} event={this.state.eventData[0]} />
      );
    }
  }

  render() {
    const event = this.state.eventData[0] ? (
      <div className="container">
        <div className="vh-85">
          <h2 className="event-title">{this.state.eventData[0].title}</h2>
          <p className="event-date">{this.state.eventData[0].date}</p>
          <hr className="event-hr" />
          {this.showScheduleItem()}
          <EventVideo
            vidurl={this.state.yt_vid}
            title={this.state.eventData[0].title}
            imgpath={this.state.eventData[0].img_path}
            id={this.state.eventData[0].id}
          />
          <p className="event-text">{this.state.eventData[0].text}</p>
        </div>
      </div>
    ) : (
        <div className="errorDiv container">
          <div className="vh-85">
            <h1 className="sadSmilyError">&#x2639;</h1>
            <h1 className="txt404">404</h1>
            <h3>Page not found</h3>
            <p>
              The page you are looking for doesn't exist or an other error
              occured.
          </p>
          </div>
        </div>
      );
    return (
      <div>
        <Navbar />
        {event}
        <Footer />
      </div>
    );
  }
}

export default Event;
