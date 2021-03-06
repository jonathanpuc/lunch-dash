import React, { Component } from 'react';
import { database } from './firebase';
class NewRestaurant extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.restaurantsRef = database.ref('/restaurants');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.restaurantsRef.push({ name: this.state.name });
  }

  render() {
    const { name } = this.state;

    return (
      <form className="NewRestaurant"> 
        <label htmlFor="restaurant"> Add a restaurant </label><br/>
        <input
          type="text"
          id="restaurant"
          value={ name }
          placeholder="Name of Fine Establishment"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}


export default NewRestaurant;