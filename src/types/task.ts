export interface Task {
    id: string;
    text: string;
    completed: boolean;
    tags: string[];
    createdAt: number;
  }
  
  export type FilterType = 'all' | 'active' | 'completed';