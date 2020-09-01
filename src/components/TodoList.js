import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodo }) => {
    const resolvedTodo = todos.map(todo => {
        return (
            <Todo
                todos={todos}
                setTodo={setTodo}
                id={todo.id}
                text={todo.text}
                todo={todo}
            />
        );
    });
    return (
        <div className='todo-container'>
            <ul className='todo-list'>{resolvedTodo}</ul>
        </div>
    );
};

export default TodoList;
