import { useState } from "react";
import "./App.css";
import Header from "./header.jsx";
import TasksInput from "./TasksInput.jsx";


function App() {
	return (
		<>
			<Header title="Hello!" />
			<TasksInput />
	
		</>
	);
}

export default App;
