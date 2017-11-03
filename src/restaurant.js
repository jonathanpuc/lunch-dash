import React, { Component } from 'react';
import map from 'lodash/map';
import './restaurant.css';

class Restaurant extends Component {
  render () {
    const { name, user, votes, handleSelect, handleDeselect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);
    return (
      <article className="restaurant">
        <h3>{ name }</h3>
        <ul>
            { votes && map(votes, (vote, key) => <li key={key}>{ vote }</li>)}
        </ul>
        {
            userHasSelected ?
            <button className="btn no-btn" onClick={handleDeselect}>Nah</button> :
            <button className="btn yes-btn"onClick={handleSelect}>Sure</button>
        }
      </article>
    );
  }
}



export default Restaurant;