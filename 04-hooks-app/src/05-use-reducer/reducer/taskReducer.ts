import type { ITodo } from '../TaskApp';

export interface ITaskState {
  todos: ITodo;
  length: number;
  completes: number;
  pending: number;
}

export type TTaskAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

export const taskReducer = (state: ITaskState, action: TTaskAction): ITaskState => {
  return state;
};
