import { getAPIOptions } from "../utils/constant";

export const fetchLatestMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      getAPIOptions()
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error:", error);
  }
};
