import { AppProvider } from "@/context/AppContext";
import useFavorites from "@/hooks/useFavorites";
import type { Movie } from "@/types/movies";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("useFavorites Hook", () => {
	beforeEach(() => {
		localStorage.clear();
	});

	test("should add a favorite movie", () => {
		const movie = { id: 1, title: "Iron Man" } as Movie;
		const { result } = renderHook(() => useFavorites(), {
			wrapper: AppProvider,
		});

		act(() => {
			result.current.addFavoriteMovie(movie);
		});

		expect(result.current.getFavoriteMovies()).toContainEqual({
			...movie,
			favorite: true,
		});
	});

	test("should remove a favorite movie", () => {
		const movie = { id: 1, title: "Iron Man" } as Movie;
		const { result } = renderHook(() => useFavorites(), {
			wrapper: AppProvider,
		});

		act(() => {
			result.current.addFavoriteMovie(movie);
			result.current.removeFavoriteMovie(movie.id);
		});

		expect(result.current.getFavoriteMovies()).not.toContainEqual({
			...movie,
			favorite: true,
		});
	});
});
