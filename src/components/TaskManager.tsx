import React, { useState } from "react";
import TaskList from "./TaskList";
import { ITask } from "../interface/interfaces";

type FormElement = React.FormEvent<HTMLFormElement>;


const TaskManager = (): JSX.Element => {
    const [taskName, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [classListInput, setClassListInput] = useState<string>('');

    const handleSubmit = (e: FormElement):void => {
        e.preventDefault();

        if (taskName.trim() === ''){
            setClassListInput('form-control-green animate__animated animate__shakeX');
            setTimeout(() => {
                setClassListInput('');
            }, 750);
            return;
        }

        const newTask:ITask = { id: Date.now(), name: taskName, done: false };
        setTaskList([...taskList, newTask]);
        setTask("");
    };


    const toggleTodo = (id:number):void => {
        console.log(id);
        const newTasks = [...taskList];
        const task = newTasks.find((todo:ITask):boolean => todo.id === id );
        if( task !== undefined ){
            task.done = !task.done;
            setTaskList(newTasks);
        }
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="text-center row justify-content-center">
                <div className="col-md-7">
                    <div className="form-group">
                        <input
                            placeholder="Type something and press Enter"
                            className={`form-control ${classListInput}`}
                            type="text"
                            value={taskName}
                            onChange={(e) => setTask(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <button className="btn btn-primary mt-3">Save task</button>
                </div>
            </form>

            <TaskList taskList={taskList} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default TaskManager;
