import React from 'react'
import { connect } from 'react-redux'
// import { addTodo } from '../store/action/actions'
import { addTodoFB } from '../store/action/todoAction'
import { useDispatch } from 'react-redux'

let AddTodo = ({ dispatch }) => {
  let input
  const dispatchFB = useDispatch()

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        /* dispatch(addTodo(input.value)) */
        dispatchFB(addTodoFB(input.value))
        input.value = ''
      }}>{/* acceso directo al DOM */}
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Añadir tarea
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo