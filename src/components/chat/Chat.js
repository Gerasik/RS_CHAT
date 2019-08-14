import React, {Component} from 'react'
import MessageList from './blocks/messageList/MessageList'
import SendMessage from './blocks/sendMessage/SendMessage'
import './chat.sass'
import socket from '../../socket'
import store from '../../redux/store'
import {addMessage} from '../../redux/actions'
import { connect } from 'react-redux'
import { onConnect } from '../../redux/actions'
// import List from './List'

store.dispatch(onConnect());

console.dir(store)

socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    store.dispatch(addMessage(message));
    const chat = document.querySelector('.message-list');
    if (chat) chat.scrollTop = chat.scrollHeight;
}

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: this.props.messages
        }
    }
    componentDidMount(){
        console.log(this.props.socket)
    }
    render(){ 
        return (
            <>
                <section className="chat">
                    <div className="chat-wrap">
                        <MessageList/>
                    </div>
                    <SendMessage/>
                </section>
            </>
        )
    }
}

const mapStateToProps = ({websocket}) => {
    return { socket: websocket.socket };
};

export default connect(mapStateToProps)(Chat)