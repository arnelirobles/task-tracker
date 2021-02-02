import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Test",
      day: "March 3, 2021 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Test 2",
      day: "March 3, 2021 2:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Test 3",
      day: "March 3, 2021 2:30pm",
      reminder: false
    }
  ]);

  //functions
  //Add Task

  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Delete Task

  const deleteTask = id => {
    setTasks(tasks.filter(c => c.id !== id));
  };

  //Toggle reminder
  const toggleReminder = id => {
    setTasks(
      tasks.map(c => (c.id === id ? { ...c, reminder: !c.reminder } : c))
    );
  };

  //add commit

  return (
    <div className="container">
      <Header title={"Test Tracker"} />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No available schedule"
      )}
    </div>
  );
};

export default App;
