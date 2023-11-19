import React from 'react'
import Task from './Task';  // Import the Task component

const TasksInput = () => {
const [tasks, setTasks] = useState([]); 
const [input, setInput] = useState("");

const addTasks = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input.trim()]);
    setInput('');
  };

const handleChange = (e) => {
    setInput(e.target.value);
    e.preventDefault();
}



  return (
    <div className='tasks-input-container d-flex justify-content-center'>
        <form action="">
            <input type="text" name="task" placeholder="Enter your task here"/>
            <button type="submit" onHandle={handleChange}>Add task</button>
            <button type="submit">Delete all</button>
        </form>
    </div>
  )
}

export default TasksInput;