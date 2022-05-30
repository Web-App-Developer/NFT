import React, { useEffect } from "react";
import rightArrow from  '../assets/rightarrow.svg'
import leftArrow from  '../assets/leftarrow.svg'

const TableFooter = ({ range, setPage,setRowPerpage, rowsPerPage , page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

 const handleBackPage = () => {
    
    if(page > 1)
    {
        setPage(page - 1);
    }
    
  }

  const handleNextPage = () => {
    
    if(page < range.length)
    {
        setPage(page + 1);
    }
    
  }


  const [perpage] = React.useState([
      5, 15,50 , 100
  ]);

  const [enablePerpage, setEnablePerpage] = React.useState(false);

  const [actualPage, setActualPage] = React.useState(rowsPerPage);


  useEffect(() => {
      setRowPerpage(actualPage);
  }, [actualPage])

  console.log(enablePerpage)
  return (
    <div className="pagination">
    <div className="pagination__arrow__box">
           <div className="box__item" onClick={handleBackPage}><img src={rightArrow} alt="arrow" /></div>
            {range.map((el, index) => (
               <div  key={index} 
               onClick={() => setPage(el)}
               className={`box__item ${ page === el ? "active__pagination" : ""}` }> {el}</div>
           ))}       
           {/* <span>{range?.length}</span> */}
           <div onClick={handleNextPage} className="box__item"><img src={leftArrow} alt="arrow" /></div>
    </div>

    <div className="row__view">
          <span>Row per page</span>
          <div className="view__box perpage" onClick={() =>  setEnablePerpage(true)}>
             <span> {actualPage}</span> <i class="fa fa-caret-down" aria-hidden="true">
                  </i>
                 
           
            </div>

            {enablePerpage === true ? 
                   <div className="view_drop__down__box">
                   {perpage.map((x, index) => <p onClick={(e) => {setActualPage(x); setEnablePerpage(false);}} key={index}>{x}</p>)}
               </div>
                  : ""}
    </div>
</div>

    // <div >
    //   {range.map((el, index) => (
    //     <button
    //       key={index}
    //     //   className={`${styles.button} ${
    //     //     page === el ? styles.activeButton : styles.inactiveButton
    //     //   }`}
    //       onClick={() => setPage(el)}
    //     >
    //       {el}
    //     </button>
    //   ))}
    // </div>
  );
};

export default TableFooter;