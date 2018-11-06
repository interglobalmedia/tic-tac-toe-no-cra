import React from 'react';
import styles from './square.scss';

export function Square(props) {
    return (
        <button className={styles.square} onClick={props.onClick}>
            {props.value}
        </button>
    );
}