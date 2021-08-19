import React from "react";
import { ITask } from "../interface/interfaces";
import TaskItem from "./TaskItem";

interface Props {
    taskList:ITask[],
    toggleTodo(id:number): void
}

const TaskList: React.FC<Props> = ({ taskList, toggleTodo }): JSX.Element => {

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
