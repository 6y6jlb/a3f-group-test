import {applyMiddleware, combineReducers, createStore} from "redux";
import {compose} from "redux";
import thunkMiddleware,{ ThunkAction } from "redux-thunk";
import photosReducer, {PhotosActionTypes} from "./photos-reducer";

export type ActionsTypes = PhotosActionTypes

const rootReducer = combineReducers ( {
    photos:photosReducer

} );


export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>


const composeEnhancers =
    typeof window === 'object' &&
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ( {
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    } ) : compose;

const enhancer = composeEnhancers (
    applyMiddleware ( thunkMiddleware ),
    // other store enhancers if any
);
const store = createStore ( rootReducer, enhancer );

//@ts-ignore
window.store = store

export default store;

