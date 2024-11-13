import React, { useState } from 'react';

const TodoForm = ({ handleAddTodo }) => {
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            handleAddTodo(description);
            setDescription('');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Agregar TODO"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default TodoForm;
