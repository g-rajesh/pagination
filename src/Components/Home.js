import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './Home.module.css';
import Image from './Image';
import Pagination from './Pagination';

//constants
const url = "http://localhost:8000/gallery";
let images = null;
let pageCount = 0;

const Home = () => {

  const [ data, setData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ currentPage, setCurrentPage ] = useState(0);

  useEffect(()=>{
    axios.get(url)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      }
      )
  },[]);
  
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  if(data){

    const perPage = 5;
    const offset = currentPage*perPage;
    images = data
            .slice(offset,offset+perPage)
            .map(({id,img,type})=>{
              return <Image key={id} image={img} />
            })
    pageCount = Math.ceil(data.length / perPage);
  }

  return (  
    <div className={styles.Home}>
      <h2 className={styles.underline}>Gallery</h2>
      { isLoading ? <h2 className={styles.loading}>Loading contents...</h2> : null }
      { isLoading === false ? <div className={styles.gallery}>{images}</div> : null }

      <Pagination cnt={pageCount} clickHandler={handlePageClick} />

    </div>
  );
}
 
export default Home;