import React from 'react'
import {connect} from 'react-redux'

const List = ({ mesList }) => (<ul>{
  mesList.map(item =>{ console.dir(item)
    return (<li>{item.from}</li>)})
}</ul>)

const mapStateToProps = state => {
    const { messages } = state;
    return { mesList: messages.messages };
    //   const allTodos = getTodos(state);
    //   return {
    //     todos:
    //       visibilityFilter === VISIBILITY_FILTERS.ALL
    //         ? allTodos
    //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
    //           ? allTodos.filter(todo => todo.completed)
    //           : allTodos.filter(todo => !todo.completed)
    //   };
  };
  
  export default connect(mapStateToProps)(List);
  