import {useContext, useState} from "react";
import TasksContext from "../Context/Tasks";


function TaskCreate({task, taskFormUpdate, onUpdate }) {
    const { createTask } = useContext(TasksContext);
    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleTaskChange = (event) => {
      setTaskDesc(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskFormUpdate){
            onUpdate(task.id, title, taskDesc)
            //editTaskById(task.id, title, taskDesc);
        }else {
            //onCreate(title,taskDesc);
            createTask(title,taskDesc);
        }
        setTitle('');
        setTaskDesc('');
    };
    return(
    <div>
        {''}
        {
        taskFormUpdate ? (
            <div className="task-update">
                <h3>Taskı Düzenle</h3>
                <form className="task-form">
                    <label className="task-label">Başlık</label>
                    <input value={title} onChange={handleChange} className="task-input"/>
                    <label className="task-label">Task Giriniz!</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/>
                    <button className="task-button update-button" onClick={handleSubmit}>Düzenle</button>
                </form>
            </div>
        ) : (
            <div className="task-create">
                <h3>Lütfen Task Ekleyiniz!</h3>
                <form className="task-form">
                    <label className="task-label">Başlık</label>
                    <input value={title} onChange={handleChange} className="task-input"/>
                    <label className="task-label">Task Giriniz!</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/>
                    <button className="task-button" onClick={handleSubmit}>Oluştur</button>
                </form>
            </div>
        )
        }
    </div>
    );
}

export default TaskCreate;
