import axios from "axios";

export const fetchPcGames = async (page) => {
  const platform = "Pc";
  const response = await axios.get(
    `https://gamerring-backend.onrender.com/games/PcGames/${platform}?page=${page}`
  );

  const resData = response.data;

  return resData;
};

export const fetchPs3Games = async (page) => {
  const platform = "PlayStation 3";
  const response = await axios.get(
    `https://gamerring-backend.onrender.com/games/ps3Games/${platform}?page=${page}`
  );

  const resData = response.data;

  return resData;
};

export const fetchPs4Games = async (page) => {
  const platform = "PlayStation 4";
  const response = await axios.get(
    `https://gamerring-backend.onrender.com/games/ps4Games/${platform}?page=${page}`
  );

  const resData = response.data;

  return resData;
};

export const fetchPs5Games = async (page) => {
  const platform = "PlayStation 5";
  const response = await axios.get(
    `https://gamerring-backend.onrender.com/games/ps5Games/${platform}?page=${page}`
  );

  const resData = response.data;

  return resData;
};
