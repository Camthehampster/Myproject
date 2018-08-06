import React, { Component } from 'react';
import paw from '../../images/paw.jpg'
import bear from '../../images/bear.jpg'


class Header extends Component {

    render() {
    return (
    <div>
            <img className="imageone" width="150px" height="150px" src={ paw } />
            <center><img className="image" width="150px" height="150px" src={ bear } /></center>
            <div className="header">
            <div className="header__skew"></div>
            <div className="header__border"></div>
            <h1 className="Grizzee" >Grizzee</h1>
            <h2 className="textboxone" >Check my youtube channel out</h2>

            
  
   



  <h2 className="welcome">Welcome!</h2> 


   
  <div>  
  <div className="channellink"> 
 My amazing youtube <a className="link" href="https://www.youtube.com/channel/UC3qp5QQQ2mWTlu4eLQrFP4w/featured?view_as=subscriber">channel</a>
 </div>
   </div> 
  




        </div>
        </div>
    )
}
}

export default Header;