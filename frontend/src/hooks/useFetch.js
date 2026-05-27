import { useState, useEffect } from "react";

export const useFetch = (fetchFn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async (page) => {
    setIsLoading(true);
    try {
      const response = await fetchFn(page);
      const { totalPages, data } = response;
      setTotalPages(totalPages);
      setFetchedData(data);
    } catch (error) {
      setErrorMsg(
        "We're currently experiencing some technical issues. Please try again later."
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage + 1);
  }, [currentPage]);

  return {
    isLoading,
    fetchedData,
    currentPage,
    totalPages,
    setCurrentPage,
    errorMsg,
  };
};
