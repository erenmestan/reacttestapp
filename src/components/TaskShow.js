import {useContext, useState} from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../Context/Tasks";

function TaskShow({task }) {
    const { editTaskById, deleteTaskById } = useContext(TasksContext);
    const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick = () => {
      //onDelete(task.id)
        deleteTaskById(task.id)
    };
    const handleEditClick = () => {
        setShowEdit(true);
    };
    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false);
        //onUpdate(id, updatedTitle, updatedTaskDesc);
        editTaskById(id, updatedTitle, updatedTaskDesc);
    };
    console.log(task);
    return (<div className='task-show'>
        {showEdit ?
            (
                <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
            ) :
            <div>
                <h3 className='task-title'>Göreviniz</h3>
                <p>{task.title}</p>
                <h3 className='task-title'>Yapılacaklar</h3>
                <p>{task.taskDesc}</p>
                <div>
                    <button className="task-delete" onClick={handleDeleteClick}>Sil</button>
                    <button className='task-edit' onClick={handleEditClick}>Güncelle</button>
                </div>
            </div>
        }
    </div>);
    }

    export default TaskShow;
