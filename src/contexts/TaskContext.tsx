import React, { createContext, useReducer, useContext } from 'react';
import { Task, FilterType } from '../types/task';

type TaskAction =
  | { type: 'ADD'; text: string; tags: string[] }
  | { type: 'TOGGLE'; id: string }
  | { type: 'DELETE'; id: string };

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, {
        id: Date.now().toString(),
        text: action.text,
        completed: false,
        tags: action.tags,
        createdAt: Date.now()
      }];
    case 'TOGGLE':
      return state.map(task => 
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
};

const TaskContext = createContext<{
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}>(null!);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);