'use client';

import React, { useState } from 'react';

export default function ChecklistPanel() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hire a mover', completed: false },
    { id: 2, text: 'Research schools', completed: false },
    { id: 3, text: 'Notify utilities', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <div className="checklist-panel">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
