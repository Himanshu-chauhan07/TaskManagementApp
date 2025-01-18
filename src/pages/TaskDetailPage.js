import React from 'react';
import { useParams } from 'react-router-dom';

function TaskDetailPage() {
  const { id } = useParams();

  // Fetch or derive task details based on ID (mock for now)
  const task = {
    id,
    name: 'Sample Task',
    completed: false,
    priority: 'Medium',
    creationDate: '2025-01-01',
  };

  return (
    <div className="task-detail-page">
      <h1>Task Detail</h1>
      <p><strong>Name:</strong> {task.name}</p>
      <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Incomplete'}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Creation Date:</strong> {task.creationDate}</p>
    </div>
  );
}

export default TaskDetailPage;
