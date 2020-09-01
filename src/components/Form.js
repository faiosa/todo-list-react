import React from 'react';

const Form = ({ setText, text, todos, setTodo, setStatus }) => {
    const onInputChange = e => {
        setText(e.target.value);
    };
    const onButtonClick = e => {
        e.preventDefault();
        setTodo([
            ...todos,
            { text: text, completed: false, id: Math.random() * 1000 },
        ]);
        setText('');
    };
    const onStatusChange = e => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input
                value={text}
                onChange={onInputChange}
                type='text'
                className='todo-input'
            />
            <button
                onClick={onButtonClick}
                className='todo-button'
                type='submit'
            >
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select
                    onChange={onStatusChange}
                    name='todos'
                    className='filter-todo'
                >
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
