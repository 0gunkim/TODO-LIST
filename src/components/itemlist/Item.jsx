import React, { useEffect, useState } from 'react';
import { Additem } from '../additem/Additem';
import Layout from '../Layout/Layout';
import styles from './Item.module.css';
const Item = () => {
    const [item, setItem] = useState(
        [
        {
        id: 1,
        title: '1리액트공부하기'
    },
        {
        id: 2,
        title: '2리액트공부하기'
    },
        {
        id: 3,
        title: '3공부하기'
    },
]
);
    // const { todoAction } = useStore();

  
    useEffect(()=>{
    },[])
    return(
        <div className={styles.container}>
            {/* <Layout> */}
            {item.map((m)=>{
                return (
                    <div key={m.id}>
                        <ul>
                            <li>{m.title}</li>
                        </ul>
                    </div>
                )
            })}
        {/* </Layout> */}
        <Additem item={item} setItem={setItem}/>

        </div>
    );
};



export default Item;