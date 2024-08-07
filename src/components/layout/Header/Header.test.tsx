import "@testing-library/jest-dom";
import Movies from "@/components/ui/Cards/Movie/Movie";
import { AppProvider } from "@/context/AppContext";
import useFavorites from "@/hooks/useFavorites";
import { MainTheme } from "@/theme/MainTheme";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

jest.mock("../../../hooks/useFavorites", () => ({
	__esModule: true,
	default: jest.fn(),
}));

jest.mock("next/router", () => ({
	useRouter: jest.fn(),
}));

const mockUseFavorites = useFavorites as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

describe("Movies Component", () => {
	const movie = {
		id: 1,
		title: "Iron Man",
		poster_path: "/path/to/poster",
		favorite: false,
	};

	beforeEach(() => {
		mockUseFavorites.mockReturnValue({
			handleFavorite: jest.fn(),
		});

		mockUseRouter.mockReturnValue({
			push: jest.fn(),
		});
	});

	it("renders movie details correctly", () => {
		render(
			<AppProvider>
				<ThemeProvider theme={MainTheme}>
					<Movies {...movie} />
				</ThemeProvider>
			</AppProvider>,
		);

		expect(screen.getByText("Iron Man")).toBeInTheDocument();
		expect(screen.getByAltText("Iron Man")).toBeInTheDocument();
	});

	it("navigates to movie details page on click", () => {
		render(
			<AppProvider>
				<ThemeProvider theme={MainTheme}>
					<Movies {...movie} />
				</ThemeProvider>
			</AppProvider>,
		);

		fireEvent.click(screen.getByText("Iron Man"));

		expect(mockUseRouter().push).toHaveBeenCalledWith(`/movies/${movie.id}`);
	});

	it("toggles favorite status on favorite icon click", () => {
		const handleFavoriteMock = jest.fn();
		mockUseFavorites.mockReturnValue({
			handleFavorite: handleFavoriteMock,
		});

		render(
			<AppProvider>
				<ThemeProvider theme={MainTheme}>
					<Movies {...movie} />
				</ThemeProvider>
			</AppProvider>,
		);

		fireEvent.click(screen.getByAltText("Fav"));

		expect(handleFavoriteMock).toHaveBeenCalled();
	});
});
