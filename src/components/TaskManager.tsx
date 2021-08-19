import React, { useState } from "react";
import TaskList from "./TaskList";
import { ITask } from "../interface/interfaces";

type FromElement = React.FormEvent<HTMLFormElement>;

const TaskManager = (): JSX.Element => {
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<ITask[]>([]);

    const handleSubmit = (e: FromElement) => {
        e.preventDefault();
        console.log(task);

        addTask(task, taskList);
        setTask("");

        function addTask(name: string, list: ITask[]): void {
            const newTask: ITask = { id: Date.now(), name, done: false };
            setTaskList([...list, newTask]);
        }
    };

    return (
        <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <button className="btn btn-primary mt-3">Save task</button>
                </form>

                <TaskList taskList={taskList} />
            </div>
    );
};

export default TaskManager;
