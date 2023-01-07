import React from 'react';
import styles from "./Layout.module.css";
// import { Header } from '../header/Header';
const Layout = ({Children}) => {
    return(
        <div className={styles.container}>
            {Children}
        </div>
    );
};

export default Layout;