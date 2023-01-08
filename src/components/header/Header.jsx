import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css'
export const Header = ({filter, filters, onFilterHandle}) => {
    const {darkMode, toggleDarkMode} = useDarkMode();
  
    return(
        <header className={styles.header}>
            <button className={styles.toggle} onClick={toggleDarkMode}>
                {!darkMode && <HiMoon/>}
                {darkMode && <HiSun />}
            </button>
            <ul className={styles.filters}>
                {filters.map((v, index) => (
                    <li key={index} >
                        <button className={`${styles.filter} ${filter === v && styles.selected}`} onClick={()=> onFilterHandle(v)}> {v}</button>
                    </li>

                ))} 
            </ul>
        </header>
    );
};