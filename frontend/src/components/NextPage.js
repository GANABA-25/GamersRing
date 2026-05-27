// import React, { Fragment, useState, useEffect } from "react";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
// import GameComp from "../pages/components/GameComp";
// import ScrollToTop from "./ScrollToTop";

// const NextPage = ({ data, itemsPerPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(data?.length / itemsPerPage);

//   const handlePageChange = (newPage) => setCurrentPage(newPage);

//   const renderProducts = () => {
//     const indexOfLastProduct = currentPage * itemsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//     const currentProducts = data?.slice(
//       indexOfFirstProduct,
//       indexOfLastProduct
//     );

//     return (
//       <div className="grid max-[767px]:grid-cols-2 max-[767px]:gap-1 max-[767px]:gap-y-2 md:grid-cols-2 md:gap-2 md:gap-y-3 lg:grid-cols-3 transition-opacity duration-500">
//         {currentProducts?.map((product, index) => (
//           <GameComp key={index} {...product} />
//         ))}
//       </div>
//     );
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [currentPage]);

//   return (
//     <Fragment>
//       <ScrollToTop />
//       {renderProducts()}

//       <div className="flex items-center text-blue-600 my-8">
//         <div className="border-2 p-1 hover:bg-blue-600 hover:text-white">
//           <MdKeyboardArrowLeft
//             className="text-3xl"
//             onClick={() =>
//               handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
//             }
//           />
//         </div>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`border-2 p-2 px-5 hover:bg-blue-600 hover:text-white cursor-pointer ${
//               currentPage === index + 1
//                 ? "bg-blue-600 text-white"
//                 : "text-blue-600"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <div className="border-2 p-1 hover:bg-blue-600 hover:text-white">
//           <MdKeyboardArrowRight
//             className="text-3xl"
//             onClick={() =>
//               handlePageChange(
//                 currentPage < totalPages ? currentPage + 1 : totalPages
//               )
//             }
//           />
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default NextPage;
