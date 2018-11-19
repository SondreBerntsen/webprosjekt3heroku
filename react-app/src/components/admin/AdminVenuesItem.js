import React, {Component} from "react";

class AdminVenuesItem extends Component {
  state = {
    id: '',
    address: '',
    capacity: '',
    status: 'unchanged'
  }

  componentDidMount(){
    this.setState({...this.state} = this.props.venue)
    console.log(this.props.venue.id)
  }
  handleSubmit = (e) => {
    e.preventDefault() 
    let body = {
      id: this.state.id,
      address: this.state.address,
      capacity: this.state.capacity
    }
    fetch(`http://localhost:5000/venues/update`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(_ => {
      this.setState({status: 'edited'})
      this.refs.address.innerHTML = this.state.address
      this.refs.capacity.innerHTML = this.state.capacity
      this.refs.addressIcon.innerHTML = ""
      this.refs.capacityIcon.innerHTML = ""
    })
    .catch( err => console.log(err))
  }
  handleChange = (e) => {
    this.setState({status: 'editing'})
    switch (e.target.name){
      case 'address': 
        this.setState({address: e.target.value})
        this.refs.addressIcon.innerHTML = "&#9998;"	
        break;
      case 'capacity':
        this.setState({capacity: e.target.value})
        this.refs.capacityIcon.innerHTML = "&#9998;"
        break;
      default:
    }
  }
  handleDelete = _ => {
    console.log('blabla')
    // some module with "are you SUUUUUUURE you want to delete? ://///"
    // then that has button w/ onclick actually delete, which is this function
  }
  checkCapacity = () => {
    if (this.props.venue.capacity === null) {
      return <p className="col-lg-4">Unlimited/Public property </p>;
    } else {
      return (
        <p className="col-lg-4">
          <span className="smallHeading">Capacity: </span>
          <span ref="capacity" >{this.props.venue.capacity}</span>
        </p>
      );
    }
  }

  render(){
    return (
      <React.Fragment>
        <div className="elementCardAdmin row">
          <p className="col-lg-5">
            <span className="smallHeading">Address: </span> 
            <span ref="address" >{this.props.venue.address}</span>
          </p>
          {this.checkCapacity()}
          <div className="col-lg-3">
            <button onClick={this.handleDelete} className="btn btn-sm btn-danger btnInElementAdmin">
              Delete
            </button>
            <button
              className="btn btn-sm btnInElementAdmin btn-secondary"
              type="button"
              data-toggle="collapse"
              data-target={"#venue" + this.state.id}
              aria-expanded="false"
              aria-controls={"venue" + this.state.id}
            >
              Edit
            </button>
          </div>
        </div>
        <div className="editScheduleItem collapse" id={"venue" + this.props.venue.id}>

          <form className="col-md-6 col-lg-4" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                defaultValue={this.props.venue.address}
                onChange={this.handleChange}
              />
              <span className="editIcon" ref="addressIcon"></span>
            </div>
            <div className="form-group">
              <label>Capacity</label>
              <input
                type="number"
                name="capacity"
                className="form-control"
                defaultValue={this.props.venue.capacity}
                onChange={this.handleChange}
                
              />
              <span className="editIcon" ref="capacityIcon"></span>
            </div>
            <button type="submit" className="btn btn-info btn-sm">
              Edit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminVenuesItem;
