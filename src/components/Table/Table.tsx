import React from "react";
import style from './Table.module.css'
import {PhotoType} from "../../dal/ptotos-api";
import Item from "./Item/Item";

type PropsType = {
    items: PhotoType[]
}

const Table: React.FC<PropsType> = ({items}) => {
    return <div className={ style.table }>

        { items.map ( i => <Item item={i}/> ) }
    </div>
}

export default Table