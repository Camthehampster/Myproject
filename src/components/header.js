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


 <button> <a className="Subbutton">Subscribe</a></button>
 


   
  <div>  
  <div className="channellink"> 
 My amazing youtube <a className="link" href="https://www.youtube.com/channel/UC3qp5QQQ2mWTlu4eLQrFP4w/featured?view_as=subscriber">channel</a>
 </div>
   </div> 


   <div className="Discordlink"> 
 My amazing Discord <a className="Discord" href="https://discord.gg/waB6kC4">link</a>
 </div>
  
 <h1 className="Mybestvideo">My Best video's</h1>

 <div className="videolink"> 
 <a className="videolink" href="https://www.youtube.com/watch?v=k8cCEdb8HfM">link for video</a>
 </div>


 <div className="Video"> 
 <iframe width="560" height="315" src="https://www.youtube.com/embed/k8cCEdb8HfM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
 </div>


<h1 className="aboutmygaming">About:</h1>


<h2 className="Gamingtech">Gaming Tech</h2>

<div className="Content">My content:
I do minecraft videos.</div>

<div className="Gaming"> 
 My gaming <a className="GamingLink" href="https://www.amazon.com/PICTEK-Programmable-Breathing-Ergonomic-Computer/dp/B01FZ3BR5S/ref=sr_1_1_sspa?s=videogames&ie=UTF8&qid=1533744905&sr=1-1-spons&keywords=gaming+mouse&psc=1"> mouse</a>
 </div>




        </div>
        </div>
    )
}
}

export default Header;