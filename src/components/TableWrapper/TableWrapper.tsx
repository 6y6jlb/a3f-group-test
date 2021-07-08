import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Paginator from "../Paginator/Paginator";
import SuperSelect from "../SuperSelect/SuperSelect";
import Table from "../Table/Table";
import style from './TableWrapper.module.css'
import {AppStateType} from "../../bll/store";
import {PhotoType} from '../../dal/ptotos-api';
import {actionsPhotos, getPhotosTC} from "../../bll/photos-reducer";


function TableWrapper() {

    const album = useSelector<AppStateType, number> ( state => state.photos.album )
    const page = useSelector<AppStateType, number> ( state => state.photos.page )
    const photos = useSelector<AppStateType, PhotoType[]> ( state => state.photos.photos )

    const dispatch = useDispatch ()
    useEffect ( () => {
        dispatch ( getPhotosTC () )
    }, [album] )


    const onChangeOption = (number: string) => {
        dispatch ( actionsPhotos.setAlbum ( Number ( number ) ) )
    }

    const onChangePage = (number: number) => {
        dispatch ( actionsPhotos.setPage ( Number ( number ) ) )
    }

    const tempAlbumCounter = (album - 1) * 50
    const leftPortionPageNumber = (page - 1) * 10 + 1
    const rightPortionPageNumber = page * 10
    const albums = ['1', '2', '3', '4', '5']

    const filteredPhotos = photos.filter ( p => p.id - tempAlbumCounter >= leftPortionPageNumber && p.id - tempAlbumCounter <= rightPortionPageNumber )

    return (
        <div className={ style.tableWrapper }>

            <Table items={ filteredPhotos }/>
            <div className={ style.optionControl }>
                <SuperSelect style={ {fontSize: '30px'} } options={ albums }
                             onChangeOption={ onChangeOption }/>
                <Paginator totalCount={ 50 } currentPage={ page }
                           onPageChanged={ onChangePage }/>
            </div>
        </div>
    );
}

export default TableWrapper;
