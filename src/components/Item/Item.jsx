import React from 'react';

export const Item = (props) => {
    const { item} = props;
    return(
        <ul>
            <input type="checked" />
            <li>{item.title}</li>
            <button></button>
        </ul>
    );
};