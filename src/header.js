import React, {Component} from 'react';
import style from './sass/header.scss';

import Img from './images/header_img.png';

export default class Header extends Component {
    render(){
        return(
            <div className={style.Header}>
                <img src={Img} alt="header_icon_img"/>
                <h2><a href="#">Weather Call App</a></h2>
            </div>
        );
    }
}