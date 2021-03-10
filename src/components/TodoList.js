import React from 'react';
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
  const todoItems = todos.map(todo => <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />);
  return (
    <div className="TodoList">
      {todoItems}
    </div>
  );
};

export default TodoList;