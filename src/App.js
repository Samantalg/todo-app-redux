import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => {
  console.log('app')

  return (<div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
  )
}
export default App