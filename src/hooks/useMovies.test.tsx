import { AppProvider } from "@/context/AppContext";
import useMovies from "@/hooks/useMovies";
import fetchData from "@/utils/api";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react";

jest.mock("../utils/api", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("useMovies Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches popular movies successfully", async () => {
    const movies = {
      results: [
        {
          id: 1,
          title: "Iron Man",
          poster_path: "https://image.tmdb.org/t/p/w500images/no-image.png",
        },
      ],
    };
    (fetchData as jest.Mock).mockResolvedValueOnce(movies);

    const { result } = renderHook(() => useMovies(), {
      wrapper: AppProvider,
    });

    await act(async () => {
      await result.current.getMovies();
    });

    await waitFor(() => {
      const receivedMovies = result.current.movies.results.map(movie => ({
        id: movie.id,
        title: movie.title,
      }));
      const expectedMovies = movies.results.map(movie => ({
        id: movie.id,
        title: movie.title,
      }));
      expect(receivedMovies).toEqual(expectedMovies);
    });
  });

  test("fetches movie details successfully", async () => {
    const movie = {
      id: 1,
      title: "Iron Man",
      backdrop_path: "https://image.tmdb.org/t/p/w500images/no-image.png",
      overview: "No overview",
      production_companies: [],
      release_date: "No release date",
      vote_average: 0,
      vote_count: 0,
    };
    (fetchData as jest.Mock).mockResolvedValueOnce(movie);

    const { result } = renderHook(() => useMovies(), {
      wrapper: AppProvider,
    });

    await act(async () => {
      await result.current.getMovie(1);
    });

    await waitFor(() => {
      const receivedMovie = result.current.selectedMovie ? {
        id: result.current.selectedMovie.id,
        title: result.current.selectedMovie.title,
        overview: result.current.selectedMovie.overview,
        production_companies: result.current.selectedMovie.production_companies,
        release_date: result.current.selectedMovie.release_date,
        vote_average: result.current.selectedMovie.vote_average,
        vote_count: result.current.selectedMovie.vote_count,
      } : null;
      const expectedMovie = {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        production_companies: movie.production_companies,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      };
      expect(receivedMovie).toEqual(expectedMovie);
    });
  });
});
