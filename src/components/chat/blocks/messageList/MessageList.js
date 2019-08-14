import React from 'react'
import {connect} from 'react-redux'

import './messageList.sass'

const MessageList = ({mesList}) => (
    <>
        <ul className="message-list">
            {
                mesList.slice(mesList.length-50).map((item) => (
                    <li className='message' key={item.id}>
                        <span className='message__from'>{item.from}</span>
                        <span className='message__time'>{new Date(item.time).toDateString()}</span>
                        <p className='message__text'>{item.message}</p>    
                    </li>
                ))
            }  
        </ul>  
    </>
);

const mapStateToProps = state => {
    const { messages } = state;
    return { mesList: messages.messages };
  };
    
export default connect(mapStateToProps)(MessageList);
