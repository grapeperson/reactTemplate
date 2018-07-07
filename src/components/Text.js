import React from 'react';

 export class Text extends React.Component {
  constructor() {
    super();
    this.state = { name: '' };
  }
  render() {
    return (<div>
              <h1>Заголовок</h1>
            </div>)
  }
}
