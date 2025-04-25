import React from 'react';
import { FilterType } from '../types/task';
import './FilterBar.css';

interface FilterBarProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  tagFilter: string;
  onTagFilterChange: (tag: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onFilterChange,
  tagFilter,
  onTagFilterChange
}) => {
  const tags = ['工作', '学习', '生活', '紧急'];

  return (
    <div className="filter-bar">
      <div className="status-filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => onFilterChange('all')}
        >
          全部
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => onFilterChange('active')}
        >
          进行中
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => onFilterChange('completed')}
        >
          已完成
        </button>
      </div>
      
      <div className="tag-filters">
        <select
          value={tagFilter}
          onChange={(e) => onTagFilterChange(e.target.value)}
        >
          <option value="">所有标签</option>
          {tags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;