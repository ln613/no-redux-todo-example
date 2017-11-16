import { createSelector, mapStateWithSelectors } from 'no-redux';

const todos = s => s.todos || [];
const newTodo = s => s.newTodo || '';
const filter = s => s.filter || 0;

const filteredTodos = createSelector(
  todos,
  filter,
  (l, f) => f
    ? l.filter(x => (f === 1 && x.done) || (f === 2 && !x.done))
    : l
);

export const todoSelector = mapStateWithSelectors({
  todos: filteredTodos,
  newTodo,
  filter
});