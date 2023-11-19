import React from "react";
import circle from "./assets/icons8-circle-50.png";
import pencil from "./assets/icons8-pencil-32.png";
import trash from "./assets/icons8-trash-48.png";

const Task = () => {
	return (
		<div className="task-container d-flex justify-content-center ">
			<img src={circle} alt="circle completed task" />
			<p>TASK 1</p>
			<img src={pencil} />
			<img src={trash} />
		</div>
	);
};

export default Task;
