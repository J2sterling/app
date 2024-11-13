import React from 'react';
import TodoApp from './components/TodoApp';
import PokemonApp from './components/PokemonApp';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.appContainer}> {/* Aplicar el estilo del contenedor */}
            <h1 className={styles.appTitle}>Mi Aplicación Integrada</h1> {/* Aplicar el estilo del título principal */}
            <section className={styles.section}> {/* Aplicar el estilo de las secciones */}
                <h2 className={styles.sectionTitle}>Gestión de Tareas</h2> {/* Aplicar el estilo de los subtítulos */}
                <TodoApp />
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Pokémon Finder</h2>
                <PokemonApp />
            </section>
        </div>
    );
};

export default App;
