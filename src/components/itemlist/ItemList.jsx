import React, { useEffect, useState } from 'react';
import { Additem } from '../additem/Additem';
import styles from './Item.module.css';
const Item = () => {
    const [item, setItem] = useState(
        [
        {
        id: 1,
        title: '1리액트공부하기',
        status: 'active'
    },
        {
        id: 2,
        title: '2리액트공부하기',
        status: 'active'
    },
        {
        id: 3,
        title: '3공부하기',
        status: 'active',
    },
]
);
// const handleDelete = (item) => {setItem(item.map())}
// const handleUpdate = () => {}

    useEffect(()=>{
    },[])
    return(
        <div className={styles.container}>
            {item.map((m)=>{
                return (
                    <Item key={m.id} item={item} 
                    // onDelete={handleDelete} onUdate={handleUpdate}
                    >
                        <ul>
                            <li>{m.title}</li>
                        </ul>
                    </Item>
                )
            })}
        <Additem item={item} setItem={setItem}/>

        </div>
    );
};



export default Item;