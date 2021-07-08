import {instanceAPI} from "./instance";

export type PhotoType = {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
}

export const PhotosAPI = {
    getPhotos: (album: number = 1) => {
        return instanceAPI.get<PhotoType[]> ( `albums/${ album }/photos` )
    }
};