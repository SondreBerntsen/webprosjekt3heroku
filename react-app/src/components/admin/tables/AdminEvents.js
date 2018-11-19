import React, { Component } from "react";
import AdminEventItem from "../AdminEventItem";
import { Link } from "react-router-dom";

class AdminEvents extends Component {
  state = {
    events: [{ id: '', title: '', text: '', date: '', time: '', price: '', youtube_link: '', payment_link: '', livestream: '' }],
    years: [],
    mostRecentYear: true
  };
  componentDidMount() {
    let path = this.props.match.params.year;
    this.getEventList(path);
    this.getEventYears();

  }
  componentWillUpdate() {
    let path = this.props.match.params.year;
    this.getEventList(path);
  }
  getEventYears = _ => {
    fetch(`http://localhost:5000/eventYearList`)
      .then(response => response.json())
      .then(response => this.setState({ years: response }, () => { this.getMostRecentYear() }))
      .catch(err => console.log(err));
  }
  //fix var litt bortreist da dette ble laget
  getMostRecentYear() {
    let years = [];
    this.state.years.map(year => (
      years.push(year.year)
    ));
    if (this.props.match.params.year < Math.max(...years)) {
      this.setState({ mostRecentYear: false })
    } else {
      this.setState({ mostRecentYear: true })
    }
  }
  getEventList = path => {
    if (isNaN(path)) {
      fetch(`http://localhost:5000/eventList`)
        .then(response => response.json())
        .then(response => this.setState({ events: response }))
        .catch(err => console.log(err));
    } else {
      fetch(`http://localhost:5000/eventList?year=` + path)
        .then(response => response.json())
        .then(response => this.setState({ events: response }))
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container tablesAdmin col-md-9 col-lg-10">
          <div className="row">
            <div className="col-md-4">
              <button
                className="createNewBtn btn btn-sm btn-info"
                type="button"
                data-toggle="collapse"
                data-target="#newEventForm"
                aria-expanded="false"
                aria-controls="newEventForm"
              >
                Opprett arrangement
            </button>
            </div>
            <div className="col-md-8 ">
              <div className="float-right">
                {this.state.years.map(function (year) {
                  return (
                    <Link
                      className="btn ml-1 mr-1"
                      to={"/admin/events/" + year.year}
                      key={year.year}
                    >
                      {year.year}
                    </Link>
                  );
                })}
              </div>

            </div>
          </div>


          <div className="collapseForm col-12 collapse" id="newEventForm">
            <form className="col-md-8 col-lg-6">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Tittel</label>
                  <input
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Link til betaling</label>
                  <input
                    type="url"
                    pattern="https?://.+"
                    title="Inkluder http://"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Dato</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label>Tid</label>
                  <input type="time" className="form-control" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Pris</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label>Youtube link</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Bilde</label>
                  <input type="file" className="form-control" />
                </div>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Planlagt Livestream
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  defaultChecked
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Ingen planlagt livestream
                </label>
              </div>
              <div className="form-group">
                <label>Beskrivelse</label>
                <textarea type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-info btn-sm">
                Send
              </button>
            </form>
          </div>
          {this.state.events.map(event => (
            <div key={event.id}>
              <AdminEventItem event={event} mostRecentYear={this.state.mostRecentYear} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default AdminEvents;
