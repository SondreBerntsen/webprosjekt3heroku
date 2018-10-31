import React, { Component } from "react";
import Navbar from "../Navbar";
import ListOfDays from "./ListOfDays";
import ProgrammeSchedule from "./ProgrammeSchedule";
import "../../styles/programme.css";
class Programme extends Component {
  //Temporary state while we figure out what to do with redux
  state = {
    days: [
      {
        id: 1,
        date: 21.09,
        day: "Mandag",
        events: [
          {
            id: 1,
            title: "Ronny og Ronny",
            venue: "Scene 1",
            time: "20:00",
            price: "NOK 100,-"
          },
          {
            id: 2,
            title: "Den andre artisten",
            venue: "Hjemme hos Mads",
            time: "21:00",
            price: 0
          },
          {
            id: 3,
            title: "Den personen som var kul",
            venue: "Kulgaten 2a",
            time: "21:00",
            price: "NOK 230,-"
          }
        ]
      },
      {
        id: 2,
        date: 21.09,
        day: "Tirsdag",
        events: [
          {
            id: 1,
            title: "Ronny og Ronny",
            venue: "Scene 1",
            time: "20:00",
            price: "NOK 100,-"
          },
          {
            id: 2,
            title: "Den andre artisten",
            venue: "Hjemme hos Mads",
            time: "21:00",
            price: 0
          },
          {
            id: 3,
            title: "Den personen som var kul",
            venue: "Kulgaten 2a",
            time: "21:00",
            price: "NOK 230,-"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="center title">Program</h2><hr />
          <ListOfDays days={this.state.days} />
          {/* Passes days array as props to ProgrammeSchedule */}
          <ProgrammeSchedule days={this.state.days} />
        </div>
      </div>

    );
  }
}

export default Programme;
