import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30 pm',
                remainder: true,
            },
            {
                id: 2,
                text: 'Meeting with Friends',
                day: 'Feb 7th at 4:30 pm',
                remainder: true,
            },
            {
                id: 3,
                text: 'College Alumni Meeting',
                day: 'Feb 10th at 3:30 pm',
                remainder: false,
            }
        ]
    )

    // Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task)=>task.id!==id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, remainder: !task.remainder} : task))
    }
    

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
