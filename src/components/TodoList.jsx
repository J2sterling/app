import React from 'react';

const TodoList = ({ tasks, handleDeleteTodo }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span>{task.description}</span>
                    <button onClick={() => handleDeleteTodo(task.id)}>Borrar</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
