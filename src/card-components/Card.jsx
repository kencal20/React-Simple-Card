import Title from './Title';
import Description from './Description';
import Image from './Image';
import React_logo from './React_logo.png';
import './card.css';

import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
            <header className="text">
               <Title  head="Simple React Card"/> 
               <Description description="React is an efficient and flexible JavaScript library used for building 
               front-end applications and User Interfaces."/>
            </header> 
            <Image imgUrl={React_logo} />
         </div>
           
           );
    }
}

export default Card;

