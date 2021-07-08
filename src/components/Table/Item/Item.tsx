import React from "react";
import {PhotoType} from "../../../dal/ptotos-api";
import style from '../Table.module.css'


type PropsType = {
    item: PhotoType
}

const Item: React.FC<PropsType> = ({item}) => {
    return <div className={ style.item } key={ item.id.toString () }>
        <img className={ style.img } src={ item.thumbnailUrl || item.url || 'https://via.placeholder.com/150' } alt=""/>
        <div className={ style.textBlock }><span className={ style.title }>{ item.title }</span>
            <a href={ item.url } className={ style.url }>{ item.url }</a></div>
    </div>
}

export default Item