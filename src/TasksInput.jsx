import React from 'react'

const TasksInput = () => {
  return (
    <div className='tasks-input-container d-flex justify-content-center'>
        <form action="">
            <input type="text" name="task" placeholder="Enter your task here"/>
            <button type="submit">Add task</button>
            <button type="submit">Delete all</button>
        </form>
    </div>
  )
}

export default TasksInput;