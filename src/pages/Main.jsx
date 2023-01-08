import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { TodoList } from '../components/TodoList/TodoList';
import { DarkModeProvider } from '../context/DarkModeContext';

export default function Main() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <DarkModeProvider>
            <Header filter={filter} filters={filters} onFilterHandle={setFilter}/>
            <TodoList filter={filter} />
        </DarkModeProvider>
    );
}

const filters = ['all', 'active', 'completed']
