import React from "react";
import { ITaskList, ITask } from "../interface/interfaces";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList }: ITaskList) => {
    return (
        <ul className="list-group mt-5">
            {taskList.map((task: ITask) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
