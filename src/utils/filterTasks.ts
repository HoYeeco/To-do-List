import { Task, FilterType } from '../types/task';

export const filterTasks = (tasks: Task[], filter: FilterType, tagFilter?: string) => {
  let result = tasks;
  
  // 第一级过滤：状态过滤
  if (filter === 'active') {
    result = result.filter(task => !task.completed);
  } else if (filter === 'completed') {
    result = result.filter(task => task.completed);
  }

  // 第二级过滤：标签过滤
  if (tagFilter) {
    result = result.filter(task => task.tags.includes(tagFilter));
  }

  return result;
};