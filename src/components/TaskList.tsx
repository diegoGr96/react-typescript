import React from "react";
import { ITask } from "../interface/interfaces";
import TaskItem from "./TaskItem";

type TaskListProps = {
    taskList:ITask[],
    toggleTodo(id:number): void
}

const TaskList = ({ taskList, toggleTodo }: TaskListProps): JSX.Element => {

    // const {taskList, toggleTodo} = props;
    return (
        <div className="mt-5 mb-5 row justify-content-around">
            {taskList.map((task: ITask) => (
                <TaskItem key={task.id} task={task} toggleTodo={toggleTodo}/>
            ))}
        </div>
    );
};

export default TaskList;
