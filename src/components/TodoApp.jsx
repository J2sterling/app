import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import styles from '../styles/TodoApp.module.scss';

export const TodoApp = () => {
    const [tasks, setTasks] = useState([]); // Estado de las tareas

    const handleAddTodo = (description) => {
        const newTask = { id: new Date().getTime(), description };
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTodo = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className={styles.todoApp}>
            <h1>TodoApp</h1>
            <hr />
            <p>Total Tareas: {tasks.length}</p> {/* Contador de tareas */}
            <TodoForm handleAddTodo={handleAddTodo} />
            <TodoList tasks={tasks} handleDeleteTodo={handleDeleteTodo} />
        </div>
    );
};

export default TodoApp;
