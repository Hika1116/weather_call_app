import React, {Component} from 'react';
import style from './sass/main.scss';
import SearchForm from './search_form';

// コンテンツ部分をまとめるコンポーネント
export default class Main extends Component {
    render(){
        return(
            <div className={style.Main}>
                <SearchForm />
            </div>
        );
    }
}