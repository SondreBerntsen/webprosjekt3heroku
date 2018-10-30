import React, { Component } from 'react';
import AdminScheduleItem from '../AdminScheduleItem';


class AdminSchedule extends Component {
  state = {
    days: [
      {
        id: 1,
        day: "Monday",
        date: "20.09",
        events: [
          {
            id: 1,
            day: 1,
            title: "This guy doing something",
            venue: "This place",
            time: "20:00",
            date: "20.09",
            price: "100",
            availability: "Very few spots left", //idk about this
            infoText: "qwerty mc. lorem"
          },
          {
            id: 2,
            day: 1,
            title: "Some other guy doing something",
            venue: "Another place",
            time: "21:00",
            date: "20.09",
            price: "250",
            availability: "Lots of spots left", //idk about this
            infoText: "qwerty mc. lorem"
          },
          {
            id: 3,
            day: 1,
            title: "Dance w/ music on and such",
            venue: "By the beach or smth",
            time: "20:00",
            date: "20.09",
            price: "0",
            availability: "Public property", //idk about this
            infoText: "qwerty mc. lorem"
          }
        ]
      },
      {
        id: 2,
        day: "Tuesday",
        date: "21.09",
        events: [
          {
            id: 4,
            day: 2,
            title: "This guy doing something",
            venue: "This place",
            time: "20:00",
            date: "21.09",
            price: "100",
            availability: "Very few spots left", //idk about this
            infoText: "qwerty mc. lorem"
          },
          {
            id: 5,
            day: 2,
            title: "Some other guy doing something",
            venue: "Another place",
            time: "21:00",
            date: "21.09",
            price: "250",
            availability: "Lots of spots left", //idk about this
            infoText: "qwerty mc. lorem"
          },
          {
            id: 6,
            day: 2,
            title: "Dance w/ music on and such",
            venue: "By the beach or smth",
            time: "20:00",
            date: "21.09",
            price: "0",
            availability: "Public property", //idk about this
            infoText: "qwerty mc. lorem"
          }
        ]
      },
      {
        id: 3,
        day: "Wednesday",
        date: "22.09",
        events: [
          {
            id: 7,
            day: 3,
            title: "This guy doing something",
            venue: "This place",
            time: "20:00",
            date: "22.09",
            price: "100",
            availability: "Very few spots left", //idk about this
            infoText: "qwerty mc. lorem"
          },
          {
            id: 8,
            day: 3,
            title: "Some other guy doing something",
            venue: "Another place",
            time: "21:00",
            date: "22.09",
            price: "250",
            availability: "Lots of spots left", //idk about this
            infoText: "qwerty mc. lorem"
          },
          {
            id: 9,
            day: 3,
            title: "Dance w/ music on and such",
            venue: "By the beach or smth",
            time: "20:00",
            date: "22.09",
            price: "0",
            availability: "Public property", //idk about this
            infoText: "qwerty mc. lorem"
          }
        ]
      }

    ]
  }
  render() {
    return (

      <div className="container tablesAdmin col-md-9 col-lg-10">

        {
          this.state.days.map(day => (
            <div className="containerScheduleElements" key={day.id}>
              <h2 className="dayDateTitleSchedule">{day.day} {day.date}</h2>
              {
                day.events.map(event => (
                  <AdminScheduleItem key={event.id} event={event} />
                ))
              }
            </div>
          ))
        }
      </div>

    );
  }
}

export default AdminSchedule;