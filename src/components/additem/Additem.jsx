import React, { useRef } from 'react';
import styles from './Additem.module.css';
import {nanoid} from 'nanoid';
export const Additem = (props) => {
    const {item, setItem} = props;
    console.log(item);
    const addInputRef = useRef(null);
    const onSubmitHandler = (e) => {
        const title = addInputRef.current.value
        const id = nanoid()
        e.preventDefault(); //리플레쉬 방지
        if(title.trim().length === 0){
            return;
        }
        setItem((item) => [...item, {id, title, status:'active'}])
        addInputRef.current.value = ''
    }
    
    return(
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input type='text' placeholder='할 일 추가' className='dark' ref={addInputRef} />
            <button>ADD</button>
        </form>
    );
};
