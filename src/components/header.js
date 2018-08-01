import React, { Component } from 'react';
import paw from '../../images/paw.jpg'
import bear from '../../images/bear.jpg'


class Header extends Component {

    render() {
    return (
    <div>
            <img className="imageone" width="150px" height="150px" src={ paw } />
            <img className="image" width="150px" height="150px" src={ bear } />
            <div className="header">
            <div className="header__skew"></div>
            <div className="header__border"></div>
            <h1 class="grizzee" >Grizzee</h1>
            <p>Check my youtube channel out</p>



  <h2 className="welcome">Welcome!</h2> 
  




        </div>
        </div>
    )
}
}

export default Header;