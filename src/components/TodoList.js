import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isEmpty, isLoaded } from 'react-redux-firebase'
import Todo from './Todo'

const TodoList = ({ onTodoClick }) => {

  useFirestoreConnect([{ collection: 'todo' }])
  const todos = useSelector((state) => state.firestore.ordered.todo)

  if (!isLoaded(todos)) {
    return <div>Loading...</div>
  }

  if (isEmpty(todos)) {
    return <div>Todos List Is Empty</div>
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) =>
          <Todo
            key={index}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
    </div>
  )
}
export default TodoList