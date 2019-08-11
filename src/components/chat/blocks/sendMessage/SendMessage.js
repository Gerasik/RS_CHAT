import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../../../redux/actions";
import './sendMessage.sass'

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addMessage(this.state.input);
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

export default connect(
  null,
  { addMessage }
)(SendMessage);
