import type { ITodo } from '../TaskApp';

export interface ITaskState {
  todos: ITodo[];
  length: number;
  completes: number;
  pending: number;
}

export type TTaskAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

export const taskReducer = (state: ITaskState, action: TTaskAction): ITaskState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const value = action.payload;

      const newTodo: ITodo = {
        id: Date.now(),
        text: value,
        completed: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case 'TOGGLE_TODO': {
      const id = action.payload;
      const todos = state.todos;

      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case 'DELETE_TODO': {
      const id = action.payload;
      const todos = state.todos;

      const updatedTodos = todos.filter((todo) => todo.id !== id);

      return {
        ...state,
        todos: updatedTodos,
      };
    }
    default:
      return state;
  }

  return state;
};
