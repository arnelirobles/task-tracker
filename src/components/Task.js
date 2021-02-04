import { FaTimes, FaEdit } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div style={{ float: "right" }}>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />

        <FaEdit
          style={{ color: "green", cursor: "pointer", marginLeft: "10px" }}
        />
      </div>
      <div>
        <h3>{task.text}</h3>
        <h4>{task.day}</h4>
        <p>{task.note}</p>
      </div>
    </div>
  );
};

export default Task;
