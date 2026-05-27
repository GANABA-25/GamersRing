import React from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        previousLabel={<IoIosArrowRoundBack className="text-4xl" />}
        nextLabel={<IoIosArrowRoundForward className="text-4xl" />}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={3}
        pageRangeDisplayed={0}
        onPageChange={handlePageClick}
        containerClassName={"flex items-center text-blue-600 my-12"}
        pageClassName={
          "max-[767px]:active:bg-blue-600 max-[767px]:active:text-white md:active:bg-blue-600 md:active:text-white border-2 p-1 px-5 lg:hover:bg-blue-600 lg:hover:text-white cursor-pointer"
        }
        activeClassName={"text-white bg-blue-600"}
        previousClassName="max-[767px]:active:bg-blue-600 max-[767px]:active:text-white md:active:bg-blue-600 lg:hover:bg-blue-600 hover:text-white"
        nextClassName="max-[767px]:active:bg-blue-600 max-[767px]:active:text-white md:active:bg-blue-600 lg:hover:bg-blue-600 lg:hover:text-white"
        forcePage={totalPages > 0 ? currentPage : 0}
      />
    </div>
  );
};

export default Pagination;
