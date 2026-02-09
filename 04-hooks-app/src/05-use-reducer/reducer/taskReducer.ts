import * as z from 'zod';
import { ID_TASK_LOCAL_STORAGE } from '../TaskApp';

// ! Interfaces
export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

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

// ! Schemas
const TodoScheme = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
  todos: z.array(TodoScheme),
  length: z.number(),
  completes: z.number(),
  pending: z.number(),
});

const getComputedCounts = (todos: ITodo[]) => {
  const length = todos.length;
  const completes = todos.reduce((acc, t) => (t.completed ? acc + 1 : acc), 0);
  const pending = length - completes;

  return { length, completes, pending };
};

export const getTasksInitialState = (): ITaskState => {
  const localStorageState = localStorage.getItem(ID_TASK_LOCAL_STORAGE) ?? '';

  const result = TaskStateScheme.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
  }

  if (!localStorageState || result.error)
    return {
      todos: [],
      completes: 0,
      pending: 0,
      length: 0,
    };

  return result.data;
};

export const taskReducer = (state: ITaskState, action: TTaskAction): ITaskState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const todos = state.todos;
      const value = action.payload;

      const newTodo: ITodo = {
        id: Date.now(),
        text: value,
        completed: false,
      };

      const updatedTodos = [...todos, newTodo];

      return {
        ...state,
        todos: updatedTodos,
        ...getComputedCounts(updatedTodos),
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
        ...getComputedCounts(updatedTodos),
      };
    }
    case 'DELETE_TODO': {
      const id = action.payload;
      const todos = state.todos;

      const updatedTodos = todos.filter((todo) => todo.id !== id);

      return {
        ...state,
        todos: updatedTodos,
        ...getComputedCounts(updatedTodos),
      };
    }
    default:
      return state;
  }
};
