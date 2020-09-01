import React from 'react';

const Todo = ({ text, setTodo, id, todos, todo }) => {
    const onDeleteButtonClick = e => {
        setTodo(todos.filter(el => el.id !== todo.id));
    };

    const onCompleteButtonClick = () => {
        setTodo(
            todos.map(item => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {text}
            </li>
            <button onClick={onCompleteButtonClick} className='complete-button'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={onDeleteButtonClick} className='trash-button'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};
export default Todo;
