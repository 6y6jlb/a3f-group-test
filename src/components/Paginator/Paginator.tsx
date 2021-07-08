import React from "react";
import style from "./Paginator.module.css";

type PropsType = {
    totalCount: number
    currentPage: number
    portionSize?: number
    onPageChanged: (pageNumber: number) => void


}


const Paginator: React.FC<PropsType> = React.memo ( ({
                                                         totalCount,
                                                         portionSize = 10,
                                                         currentPage,
                                                         onPageChanged,


                                                     }) => {

    const pagesCount = Math.ceil ( totalCount / portionSize ) // pages:number


    let pages: number[] = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages = [...pages, i]
    }


    const mappedPages = pages.map ( (p, i) => {
        return (
            currentPage === p
            ?<span key={ i }
              className={style.activeNumber}>{ p }</span>
            :<span key={ i }
                   onClick={ () => onPageChanged ( p ) }
                   className={style.normalNumber }>{ p }</span>
        )
    })

    return (
        <>
            <div className={ style.pages }>
                { mappedPages }
            </div>


        </>
    )
} )
export default Paginator;