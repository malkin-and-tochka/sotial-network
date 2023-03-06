import style from "./paginator.module.css";
import React, {useState} from "react";


const Paginator = (props) => {
    let portionSize = 10
    let pageCount = Math.ceil(props.totalUsersCounter / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)
    let leftBarrier = (portionNumber - 1) * portionSize - 1
    let rightBarrier = portionNumber * portionSize
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let paginatorsPage = pages
        .filter(p => p >= leftBarrier && p <= rightBarrier)
        .map(p => {
            return <span onClick={() => {
                props.onPageCgange(p)
            }} className={(props.currentPage === p && style.selectPage) || style.pages}>{p}</span>
        })
    return (
        <div className={style.paginatorWrapper}>
            {portionNumber !== 1 &&
                <button className={style.paginatorButton} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>
                    prev
                </button>
            }
            {paginatorsPage}
            {pageCount > portionNumber &&
                <button className={style.paginatorButton} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>
                    next
                </button>
            }
        </div>
    )
}

export default Paginator