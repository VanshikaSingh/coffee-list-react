import React from 'react'
import styles from '../styles/Home.module.css'
import { useDispatch } from "react-redux";
import { pageNumberPaginated } from '../redux/actions';
const Pagination = ({totalItems, itemsPerPage, setCurrentPage, currentPage}) => {
  
  const dispatch = useDispatch();
    let pages = [];
    for(var i=1 ; i <= Math.ceil(totalItems/itemsPerPage); i++){
        pages.push(i)
    }
    const handlePagination = (page) =>{
      console.log("hhis")
      dispatch(pageNumberPaginated(page))
      setCurrentPage(page)
    }
  return (
    <div className={styles.pagination}>{
        pages.map((page, index) =>{
            return <button key={index} onClick = {() => handlePagination(page)} className={page === currentPage ? styles.paginationActive : ''}>{page}</button>
        })}</div>
  )
}

export default Pagination