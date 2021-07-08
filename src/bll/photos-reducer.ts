
import {AppThunk, InferActionsType} from "./store";
import {PhotosAPI, PhotoType} from "../dal/ptotos-api";


//types

export type InitialStatePhotosType = typeof initialState
export type PhotosActionTypes = InferActionsType<typeof actionsPhotos>
//ac
export const actionsPhotos = {
    setPhotos: (photos:PhotoType[]) => {
        return {type: 'a3f/photos/SET_PHOTOS' as const, payload: {photos}} as const
    },
    setAlbum:(album:number) => {
        return {type: 'a3f/photos/SET_ALBUM' as const, payload: {album}} as const
    },
    setPage:(page:number) => {
        return {type: 'a3f/photos/SET_PAGE' as const, payload: {page}} as const
    },
}
//tc
export const getPhotosTC = (): AppThunk => async (dispatch,getState) => {
    const album = getState().photos.album
    try {
        const res = await PhotosAPI.getPhotos(album)
       dispatch(actionsPhotos.setPhotos(res.data))
       dispatch(actionsPhotos.setPage(1))


    } catch (e) {

    }
};


//state
const initialState = {
    photos:[] as PhotoType[],
    album:1,
    page:1,



}
//reducer
const photosReducer = (state = initialState, action: PhotosActionTypes): InitialStatePhotosType => {
    switch (action.type) {
        case "a3f/photos/SET_PAGE":
        case "a3f/photos/SET_ALBUM":
        case "a3f/photos/SET_PHOTOS":
            return {...state,...action.payload}

        default:
            return state
    }
}
export default photosReducer;


