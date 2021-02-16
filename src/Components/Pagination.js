import ReactPaginate from "react-paginate";

import styles from './Pagination.module.css';

const Pagination = ({cnt,clickHandler}) => {
  return (  
    <div className={styles.paginate}>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={cnt}
        onPageChange={clickHandler}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.pagination__link}
        nextLinkClassName={styles.pagination__link}
        disabledClassName={styles.disabled}
        activeClassName={styles.active}
      />
    </div>
  );
}
 
export default Pagination;