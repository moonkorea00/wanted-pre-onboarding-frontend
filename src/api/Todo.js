import clientApi from './customAxios';
import { END_POINT } from '../config';

const TodoApi = {
  createTodo: todo => {
    return clientApi.post(END_POINT.todo, todo);
  },
  getTodos: () => {
    return clientApi.get(END_POINT.todo);
  },
  updateTodo: ({ id, todo, isCompleted }) => {
    return clientApi.put(`${END_POINT.todo}/${id}`, { todo, isCompleted });
  },
  deleteTodo: id => {
    return clientApi.delete(`${END_POINT.todo}/${id}`);
  },
};

export default TodoApi;
