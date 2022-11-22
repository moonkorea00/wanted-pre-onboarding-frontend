import clientApi from './customAxios';
import { END_POINT } from '../config';

interface Props {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TodoApi = {
  // createTodo: (todo: string) => {
  createTodo: (todo: object) => {
    return clientApi.post(END_POINT.todo, todo);
  },
  getTodos: () => {
    return clientApi.get(END_POINT.todo);
  },
  updateTodo: ({ id, todo, isCompleted }: Props) => {
    return clientApi.put(`${END_POINT.todo}/${id}`, { todo, isCompleted });
  },
  deleteTodo: (id: number) => {
    return clientApi.delete(`${END_POINT.todo}/${id}`);
  },
};

export default TodoApi;
