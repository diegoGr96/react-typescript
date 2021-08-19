import React from "react";
import { ITaskItem } from "../interface/interfaces";

const TaskItem = ({ task }: ITaskItem) => {
    const { id, name, done } = task;
    return <li className="list-group-item">{`${id} . ${name} . ${done}`}</li>;
};

export default TaskItem;
