import React, {Component} from "react";
import { logIn } from '../../redux/actions'
import store from '../../redux/store'

export default class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleLogIn = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0){
      store.dispatch(logIn(this.state.input));
    };
    localStorage.setItem('userName', this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogIn}>
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


