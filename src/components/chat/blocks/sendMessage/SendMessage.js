import React, {Component} from "react";
import socket from '../../../../socket';
import { connect } from 'react-redux'
import './sendMessage.sass'

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    // if (this.state.input.length > 0){
      const message = JSON.stringify({
        from: this.props.name, 
        message: this.state.input
      });
      socket.send(message);
      this.setState({ input: "" });
    // }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
          />
          <button className="send">
            Send
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authorization } = state;
  return { name: authorization.authName };
};
  
export default connect(mapStateToProps)(SendMessage);
