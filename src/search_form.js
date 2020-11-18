import React, {Component} from 'react'
import style from './sass/search_form.scss';

export default class SearchForm extends Component {

    constructor() {
        super();
        this.prefectureList = [
            {code:1, name:"長野県"},
            {code:2, name:"東京都"},
            {code:3, name:"埼玉県"},
            {code:4, name:"京都府"}
        ];

        this.cityList = [
            {code:1, name:'上田市'},
            {code:2, name:'長野市'},
            {code:3, name:'茅野市'}
        ];
    }

    render(){
        var prefectureOptions = this.prefectureList.map((prefecture)=> (
            <option value={prefecture.code}>
                {prefecture.name}
            </option>
        ));

        var cityOptions = this.cityList.map((city) => (
            <option value={city.code}>
                {city.name}
            </option>
        ));
        console.log(prefectureOptions);
        return(
            <div>
                <form action="">
                    <div className={style.PrefectureSelect}>
                        <select name="" id="">
                            {prefectureOptions}
                        </select>
                    </div>

                    <div className={style.CitySelect}>
                        <select name="" id="">
                            {cityOptions}
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}