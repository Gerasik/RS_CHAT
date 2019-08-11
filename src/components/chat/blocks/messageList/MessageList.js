import React from 'react'

import './messageList.sass'

const MessageList = ({data}) => (
    <>
        <ul className="message-list">
            {
                data.map((item) => (
                    <li className='message' key={data.id}>
                        <span className='message__from'>{item.from}</span>
                        <span className='message__time'>{new Date(item.time).toDateString()}</span>
                        <p className='message__text'>{item.message}</p>    
                    </li>
                ))
            }  
        </ul>  
    </>
);

export default MessageList