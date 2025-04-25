import React from 'react';
import { Task } from '../types/task';
import { useTasks } from '../contexts/TaskContext';
import './TaskItem.css';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { dispatch } = useTasks();

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: 'TOGGLE', id: task.id })}
      />
      <span className="task-text">{task.text}</span>
      <div className="task-tags">
        {task.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <button
        className="delete-btn"
        onClick={() => dispatch({ type: 'DELETE', id: task.id })}
      >
        删除
      </button>
    </li>
  );
};

export default TaskItem;