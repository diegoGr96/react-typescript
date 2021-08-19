import { useState } from "react";
import useRandomAnimation from "../hooks/useRandomAnimation";
import { ITask } from "../interface/interfaces";

interface Props {
    task:ITask,
    toggleTodo(id: number): void
}

const TaskItem: React.FC<Props> = ({ task, toggleTodo }) => {
    const { id, name, done } = task;


    const animationList: string[] = ['animate__fadeInUp', 'animate__fadeInDown', 'animate__fadeInLeft', 'animate__fadeInRight'];
    const animation = useRandomAnimation(animationList);


    const [animationButton, setAnimationButton] = useState<string>('');

    const handleButton = ():void => {
        toggleTodo(id);

        setAnimationButton('');

        setTimeout(() => {
            setAnimationButton('animate__animated animate__shakeX');
        }, 200);
    }


    return (
        <div className={`card m-2 col-md-3 animate__animated ${animation}`}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{id}</h6>

                <div className="text-center">
                    <button 
                    className={`btn ${done ? "btn-success" : "btn-danger"} ${animationButton}`}
                    onClick={handleButton}
                    >
                        {done ? 'Completed' : 'Uncompleted'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
