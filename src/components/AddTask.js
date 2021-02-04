import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [note, setNote] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      alert("Add Task");
      return;
    }
    onAdd({ text, day, reminder, note });
    setText("");
    setDay("");
    setNote("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Day & Time"
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Note</label>
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder?</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save" className="btn btn-block"></input>
    </form>
  );
};

export default AddTask;
