import React, { Component } from 'react';
import { database } from './firebase';
import Restaurant from './restaurant';
import map from 'lodash/map';

import './restaurants.css';

class Restaurants extends Component {


    handleSelect = (key) => {
      const currentUser = this.props.user;
      database.ref('/restaurants')
              .child(key)
              .child('votes')
              .child(currentUser.uid)
              .set(currentUser.displayName);
    }

    handleDeselect = (key) => {
      const currentUser = this.props.user;
      database.ref('/restaurants')
              .child(key)
              .child('votes')
              .child(currentUser.uid)
              .remove();
    }
    
  render () {
    const { user , restaurants} = this.props;
    return (
      <section className="restaurants-container">
          { 
            map(restaurants, (restaurant, key) => { 
             return <Restaurant
                      key={key} {...restaurant}
                      user={user}
                      handleSelect={() => this.handleSelect(key)}
                      handleDeselect={() => this.handleDeselect(key)}
             />;
            })
          }
      </section>
    );
  }
}

export default Restaurants;