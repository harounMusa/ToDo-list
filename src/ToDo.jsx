import {useState} from 'react';
 
function ToDo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updateTasks = tasks.filter((_,i) => i !== index);
        setTasks(updateTasks);
    }
    function moveTaskUp(index) {

        if(index > 0) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] =
            [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }

    }
    function moveTaskDown(index) {

        if(index < tasks.length - 1) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] =
            [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);
        }

    }

    return(
        <div className='to-do-list'>
            
            <h1>To-Do-List</h1>
            <div className='new-task'>
                <input
                className='input-flied'
                id='in'
                type='text'
                placeholder='Enter a Task...'
                value={newTask}
                onChange={handleInputChange}
                />
                <button
                 className='add-btn' 
                 onClick={addTask}>
                Add</button>
            </div>

            <ol>
                {
                    tasks.map((task, index) =>
                    <li key={index} className='item'>
                        <span className='text'>{task}</span>
                        <div className='btns'>
                        <button 
                        className='delete-btn'
                        onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button 
                        className='move-btn'
                        onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button 
                        className='move-btn'
                        onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                        </div>
                    </li>)
                }
            </ol>

        </div>
    );
}
export default ToDo;