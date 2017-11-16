import { generateActions } from 'no-redux';

export const api = 'https://my-json-server.typicode.com/ln613/no-redux-todo-example/';

export const actionData = {
  todos: {
    url: api + 'todos',
    methods: ['get', 'post']
  },
  todo: {
    url: api + 'todos/{id}',
    methods: ['put', 'patch', 'delete'],
    path: 'todos[id]',
  },
  todoName: {
    path: 'todos[id].name',
  },
  newTodo: {},
  filter: {}
}

export default generateActions(actionData);
