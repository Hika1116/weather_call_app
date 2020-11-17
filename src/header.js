import React, {Component} from 'react';
import style from './sass/header.scss';

export default class Header extends Component {
    render(){
        return(
            <div className={style.Header}>
                <h2>Weather Call App</h2>
            </div>
        );
    }
}