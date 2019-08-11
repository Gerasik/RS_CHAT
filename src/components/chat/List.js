import React from 'react'
import {connect} from 'react-redux'

const List = ({ mesList }) => (<p>{mesList}</p>)

const mapStateToProps = state => {
    const { messages } = state;
    console.log(messages.messages)
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
  