import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    color: '',
    pluralNoun: '',
    adjectiveOne: '',
    celebOne: '',
    adjectiveTwo: '',
    nounOne: '',
    numberOne: '',
    numberTwo: '',
    nounTwo: '',
    adjectiveThree: '',
    celebTwo: '',
    celebThree: '',
    adjectiveFour: '',
    nounThree: '',
    celebFour: '',
    adjectiveFive: '',
    contentVisible: false
}

class Card extends Component {

    constructor() {
        super()

        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    } 

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true })
        }
    }

    render() {

        return (
          <div>  
          <div className="channellink"> 
         My amazing youtube <a href="https://www.youtube.com/channel/UC3qp5QQQ2mWTlu4eLQrFP4w/featured?view_as=subscriber">channel</a>
         </div>
           </div> 
        )
    }
}

export default Card;