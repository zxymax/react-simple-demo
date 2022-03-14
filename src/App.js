import { useState, useEffect } from 'react'
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async () => {
      const tasksFormServer = await fetchTasks()
      console.log(tasksFormServer)
      setTasks(tasksFormServer.tasks)
    }

    getTasks()
  }, [])


    const fetchTasks = async () => {
      const res = await fetch('./db.json')
      const data = await res.json()
      return data

    }
  const addTask = async (task) => {
    const res = await fetch('./db.json', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

  }

  /*
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }
  */


  const deleteTask = (id) => {
    console.log(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder: !task.reminder
    } : task))
  }

  /**
   *
   *
      */

  const Abc = () => {
    return (
      <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ? <Tasks tasks={tasks} onAdd={addTask} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Data To Show' }
      </>
    )
  }

  return (
    <Router>
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />


    <Routes>
      <Route path="/" element={<Abc />} />
    <Route path='/about' element={<About />} />

    </Routes>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
