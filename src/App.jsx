import { useState } from 'react'
import './App.css'
import Header from './header.jsx'

import TasksInput from './TasksInput.jsx'
import Task from './Task.jsx'

function App() {


  return (
    <>
      <Header title="Hello!" />
      <TasksInput />
      <Task />


    </>
  )
}

export default App;
