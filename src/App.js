import React, { useState, useEffect } from 'react';
import './style.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const [text, setText] = useState('Eat');
    const [todos, setTodo] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(
                    todos.filter(todo => todo.completed === false)
                );
                break;
            default:
                setFilteredTodos(todos);
        }
    };

    // Save TODO to local storage
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let localTodo = JSON.parse(localStorage.getItem('todos'));
            setTodo(localTodo);
        }
    };

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    return (
        <div>
            <header>
                <h1>TODO</h1>
            </header>
            <Form
                todos={todos}
                setTodo={setTodo}
                text={text}
                setText={setText}
                setStatus={setStatus}
            />

            <TodoList todos={filteredTodos} setTodo={setTodo} />
        </div>
    );
};

export default App;
