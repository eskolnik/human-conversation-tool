import React, { Component } from 'react';
import Message from './Message.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading Human Conversation Interface....",
      messageType: ""
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    debugger;
  }

  componentDidMount() {
    debugger;
    fetch('http://localhost:4567/greetings.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let message = body;
        this.setState({
          message: message,
          messageType: "Greeting"
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidUpdate(){
    console.log("UPDATED");
  }

  handleClick() {
    fetch('http://localhost:4567/responses.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let message = body;
        this.setState({
          message: message,
          messageType: "Idle Conversation"
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    console.log("RENDERED");
    return (
      <div>
        <h1>Talk Like a Human:</h1>
        <div className="row">
          <div className="small-4 columns">
            <Message
              text={this.state.message}
              type={this.state.messageType}
              handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
