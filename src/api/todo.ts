import clientApi from './customAxios';
import { END_POINT } from '../config';

interface Props {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TodoApi = {
  createTodo: (todo: object) => {
    return clientApi.post(END_POINT.TODO, todo);
  },
  getTodos: () => {
    return clientApi.get(END_POINT.TODO);
  },
  updateTodo: ({ id, todo, isCompleted }: Props) => {
    return clientApi.put(`${END_POINT.TODO}/${id}`, { todo, isCompleted });
  },
  deleteTodo: (id: number) => {
    return clientApi.delete(`${END_POINT.TODO}/${id}`);
  },
};

export default TodoApi;
