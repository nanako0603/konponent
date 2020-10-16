import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-onsenui';

export default class Item extends React.Component {
  
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <Card>
            <p>{this.props.text}</p>
            <p>{this.props.Day.getFullYear()}/{this.props.Day.getMonth()}/{this.props.Day.getDate()} {this.props.Day.getHours()}:{this.props.Day.getMinutes()}:{this.props.Day.getSeconds()}</p>

        </Card>
    );
  }
}
