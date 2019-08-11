import React, {Component} from 'react'
// import MessageList from './blocks/messageList/MessageList'
import SendMessage from './blocks/sendMessage/SendMessage'
import './chat.sass'
import List from './List'

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: this.props.messages
        }
    }
    render(){ 
        console.log(this.state.messages)
        return (
            <>
                <section className="chat">
                    <div className="chat-wrap">
                        {/* <MessageList data={this.state.messages}/> */}
                        <List/>
                    </div>
                    <SendMessage/>
                </section>
            </>
        )
    }
}

export default Chat