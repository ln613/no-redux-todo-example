import React, { Component } from 'react';
import { connect } from 'no-redux';
import actions, { api } from './actions';
import { todoSelector } from './selectors';

const filterOptions = {
  All: 0,
  Done: 1,
  'Not Done': 2
}

class App extends Component {
  componentWillMount() {
    this.props.getTodos();
  }

  add = () => {
    const p = this.props;
    p.postTodos({
      id: Math.max.apply(null, p.todos.map(x => x.id)) + 1,
      name: p.newTodo
    });
    p.setNewTodo();
  }

  render() {
    const p = this.props;

    return (
      <div>
        <div>Todo List</div>
        
        <div>
          <input value={p.newTodo} onChange={e => p.setNewTodo(e.target.value)} />
          <button onClick={this.add}>Add Todo</button>
        </div>

        <hr />
        
        {p.todos.map(t => {
          const params = { id: t.id };

          return (
            <div>
              {t.id}:
              
              <input value={t.name} onChange={e => p.setTodoName(e.target.value, params)} />
              
              <label>
                <input type="checkbox" checked={t.done === true}
                  onChange={e => p.patchTodo({ done: e.target.checked }, params)} />
                done
              </label>

              <button onClick={() => p.putTodo(t, params)}>
                Save
              </button>

              <button onClick={() => p.deleteTodo(params)}>
                Delete
              </button>
            </div>
          );
        })}

        <hr />

        <div>Filter:</div>

        {Object.keys(filterOptions).map(k =>
          <label>
            <input
              type="radio"
              name="filterOptions"
              checked={filterOptions[k] === p.filter}
              onChange={() => p.setFilter(filterOptions[k])}
            />
            {k}
          </label>
        )}

        <hr />
        <div><a href={`${api}todos`} target="_blank">Check json api</a></div>
        <div><i>This is a fake json restful api, it will return the correct http response, but does not persist the changes on the server.</i></div>
        <br/>
        <div><a href={`https://github.com/ln613/no-redux-todo-example/blob/master/src/App.js`} target="_blank">View Source</a></div>
      </div>
    );
  }
}

export default connect(todoSelector, actions)(App);