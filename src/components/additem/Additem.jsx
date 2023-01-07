import React, { useRef } from 'react';
import styles from './Additem.module.css';
import {nanoid} from 'nanoid';
export const Additem = (props) => {
    const {item, setItem} = props;
    console.log(item);
    const addInputRef = useRef(null);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('버튼 동작');
        const title = addInputRef.current.value
        const id = nanoid()
        setItem((item) => [...item, {id, title}])
        addInputRef.current.value = ''
    }
    
    return(
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input type='text' placeholder='할 일 추가' className='dark' ref={addInputRef} />
            <button>ADD</button>
        </form>
    );
};
