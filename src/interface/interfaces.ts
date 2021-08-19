export interface ITask {
    id: number
    name: string,
    done: boolean
};


export interface ITaskList {
    taskList: ITask[]
}

export interface ITaskItem{
    task: ITask
}



