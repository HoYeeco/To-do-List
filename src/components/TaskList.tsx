import React, { memo } from 'react';
import { useTasks } from '../contexts/TaskContext';
import TaskItem from './TaskItem';
import { filterTasks } from '../utils/filterTasks';

interface TaskListProps {
  filter: 'all' | 'active' | 'completed';
  tagFilter: string;
}

const TaskList: React.FC<TaskListProps> = memo(({ filter, tagFilter }) => {
  const { tasks } = useTasks();
  const filteredTasks = filterTasks(tasks, filter, tagFilter);

  return (
    <ul className="task-list">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
});

export default TaskList;