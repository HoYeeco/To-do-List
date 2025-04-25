import React, { useState } from 'react';
import { TaskProvider } from './contexts/TaskContext';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [tagFilter, setTagFilter] = useState<string>('');

  return (
    <TaskProvider>
      <div className="app-container">
        <h1>To-do List 待办清单</h1>
        <ThemeToggle />
        <FilterBar 
          filter={filter}
          onFilterChange={setFilter}
          tagFilter={tagFilter}
          onTagFilterChange={setTagFilter}
        />
        <TaskList filter={filter} tagFilter={tagFilter} />
      </div>
    </TaskProvider>
  );
};

export default App;