import React, { Component } from 'react';

 export default class App extends Component {
   constructor(){
     super();
     this.state = {
       'name' : 'Gogi'
     };
   }
  render() {
    return(
      <h1>
        { this.state.name }
      </h1>
    )
  }

};
