import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AddItem } from '../AddItem/AddItem';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css'
export const TodoList = ({filter}) => {
    const [todo, setTodo] = useState(readTodo);
    const [fetchTo, setFetchTo] = useState();
    console.log(fetchTo)
    const onAddHandle = (a) => (
        setTodo([...todo, a])

        );

    const onDeleteHandle = (d) => (
        setTodo(todo.filter((m)=> m.id !== d.id))
        )

    const onUpdateHandle = (u) => (
        
        setTodo(todo.map((m)=> (m.id === u.id ? u : m)))
        );
    const fetchTodo = async () => {
        const {data} = await axios.get("http://localhost:5500/todo");
        setFetchTo(data);
        
    }

    useEffect(()=> {
        localStorage.setItem('todo', JSON.stringify(todo));
        fetchTodo();
    },[todo])

    const filtered = getFilteredItems(todo, filter);
    return(
        <div className={styles.container}> 
            <ul className={styles.list}>
            {filtered.map((md)=>{
                return(
                    <TodoItem key={md.id} md={md} onDeleteHandle={onDeleteHandle} onUpdateHandle={onUpdateHandle}>
                    </TodoItem>
                )
            })}
            </ul>     
            <AddItem  onAddHandle={onAddHandle}/>
        </div>
    );
};

function getFilteredItems(todo, filter) {
    if(filter === 'all'){
        return todo;
    }
    return todo.filter(todo => todo.status === filter)
}

function readTodo() {
    const todo = localStorage.getItem('todo');
    return todo ? JSON.parse(todo) : [];
}

// const mockData = [
//     {
//         id: '1',
//         title:'놀아보기',
//         status: 'active'
//     },
//     {
//         id: '3',
//         title:'2놀아보기',
//         status: 'active'
//     },
//     {
//         id: '4',
//         title:'3놀아보기',
//         status: 'completed'
//     },
// ]