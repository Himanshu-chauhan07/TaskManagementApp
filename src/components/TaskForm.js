import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TaskForm({ onAddTask }) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddTask({
      id: Date.now(),
      name,
      priority,
      completed: false,
      creationDate: new Date().toISOString(),
    });
    setName('');
    setPriority('Low');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task name"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;