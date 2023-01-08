import React, { useState } from 'react';
import  {HiTrash} from 'react-icons/hi';
import styles from './TodoItem.module.css'
export const TodoItem = (props) => {
    const {md, onDeleteHandle, onUpdateHandle} = props
    const {title , status} = md

    const onDeleteButton = () => {
       onDeleteHandle(md);
    };
    const onUpdateinput = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdateHandle({...md, status});
    };
    return( 
        <li className={styles.list}>
            <input className={styles.checkbox} type='checkbox'
            id='checkbox' 
            onChange={onUpdateinput}
            checked={status === 'completed'}
            />
            <label className={styles.text} htmlFor='checkbox'> {title}</label>
            <span className={styles.icon}>
            <button className={styles.button} onClick={onDeleteButton}><HiTrash /></button>
            </span>
        </li>       
    );
};