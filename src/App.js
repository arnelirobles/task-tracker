import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(
      "https://601bf4ca1a9c22001706000a.mockapi.io/api/tasks"
    );
    const data = await res.json();

    return data;
  };

  const fetchTask = async id => {
    const res = await fetch(
      `https://601bf4ca1a9c22001706000a.mockapi.io/api/tasks/${id}`
    );
    const data = await res.json();

    return data;
  };
  const addTask = async task => {
    //const id = Math.floor(Math.random() * 10000) + 1;
    const res = await fetch(
      "https://601bf4ca1a9c22001706000a.mockapi.io/api/tasks",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(task)
      }
    );

    const data = await res.json();
    //const newTask = { id, ...task };
    setTasks([...tasks, data]);
  };
  //Delete Task

  const deleteTask = async id => {
    await fetch(`https://601bf4ca1a9c22001706000a.mockapi.io/api/tasks/${id}`, {
      method: "DELETE"
    });
    setTasks(tasks.filter(c => c.id !== id));
  };

  //Toggle reminder
  const toggleReminder = async id => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(
      `https://601bf4ca1a9c22001706000a.mockapi.io/api/tasks${id}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updTask)
      }
    );

    const data = await res.json();
    console.log(data);
    setTasks(
      tasks.map(c => (c.id === id ? { ...c, reminder: data.reminder } : c))
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          title={"Test Tracker"}
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          render={props => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No available schedule"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
