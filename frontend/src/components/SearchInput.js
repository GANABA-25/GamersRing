import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../store/Auth-Context";
import axios from "axios";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setFetchedGames, setFetchedGamesErrorMessage } = useUserContext();
  const navigate = useNavigate();

  const searchInputHandler = async (e) => {
    e.preventDefault();
    navigate(`/SearchResultPage?searchTerm=${searchTerm}`);

    // try {
    //   const response = await axios.get(
    //     `http://localhost:8090/games/searchedGames/?searchedTerm=${searchTerm}&page=1`
    //   );
    //   const { searchedGames } = response.data;
    //   if (response.status === 200) {
    //     setFetchedGames(searchedGames);
    //     navigate(`/SearchResultPage?searchTerm=${searchTerm}`);
    //   }
    // } catch (error) {
    //   if (error.response && error.response.status === 404) {
    //     const errorMessage = error.response.data;
    //     setFetchedGamesErrorMessage(errorMessage);
    //     // navigate("/SearchResultPage?searchTerm=${searchTerm}");
    //   } else {
    //     console.error("An unexpected error occurred:", error);
    //   }
    // }
  };

  return (
    <form onSubmit={searchInputHandler}>
      <input
        type="text"
        placeholder="search for Pc games"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full text-slate-950 border-4 font-serif bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-300 focus:rounded-sm md:w-full md:p-2 lg:p-0 lg:w-[28rem]"
      />
      <button className="hidden" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
