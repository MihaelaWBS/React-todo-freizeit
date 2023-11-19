import React from "react";
import circle from "./assets/icons8-circle-50.png";
import pencil from "./assets/icons8-pencil-32.png";
import trash from "./assets/icons8-trash-48.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Task = () => {
	return (
		<div className="task-container d-flex align-items-center text-align-center justify-content-center ">
			<img src={circle} style={{ width: "24px" }} alt="circle completed task" />
			<p className="margin-p">TASK 1</p>
			<img src={pencil} style={{ width: "24px" }} />
			<img src={trash} style={{ width: "24px" }} />
		</div>
	);
};

export default Task;
