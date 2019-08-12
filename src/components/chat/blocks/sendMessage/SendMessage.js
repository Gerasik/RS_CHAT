import React, {Component} from "react";
import { socket } from '../../../../socket'
// import { connect } from "react-redux";
// import { addMessage } from "../../../../redux/actions";
import './sendMessage.sass'

export default class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    const name = 'Geras';
    const message = JSON.stringify({
      from: name, 
      message: this.state.input
    });
    socket.send(message);
    // this.props.addMessage(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="send" onClick={this.handleAddTodo}>
          Send
        </button>
      </div>
    );
  }
}

//  SendMessage

// const sent = function(){
//     const mess = JSON.stringify({from: 'gerasik', message: 'Hi'});
//     socket.send(mess);
// } 



// export default connect(
//   null,
//   { addMessage }
// )(SendMessage);
