import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    reminder: true,
  },
  {
    id: 2,
    text: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    reminder: true,
  },
  {
    id: 3,
    text: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    reminder: true,
  },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    console.log(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder: !task.reminder
    } : task))
  }

  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ? <Tasks tasks={tasks} onAdd={addTask} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Data To Show' }

    </div>
  );
}

export default App;
