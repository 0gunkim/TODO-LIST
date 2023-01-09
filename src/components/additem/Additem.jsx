import React, { useRef } from 'react';
import {nanoid} from 'nanoid';
import styles from './AddItem.module.css'
export const AddItem = ({onAddHandle}) => {
    const AddInputRef = useRef();
    const onSubmitHandle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(AddInputRef.current.value.trim().length === 0){
            return;
        }
        const title = AddInputRef.current.value
        const id = nanoid();
        const status = 'active';
        onAddHandle({title ,id, status})

        AddInputRef.current.value = "";
    };

    return(
        <form onSubmit={onSubmitHandle} className={styles.form}>
            <input className={styles.input} type='text'ref={AddInputRef} placeholder='Add Todo'/>
            <button className={styles.button} >ADD</button>
        </form>
    );
};