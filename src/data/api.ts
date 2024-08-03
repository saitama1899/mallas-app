const publicMarvelKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const privateMarvelKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
const baseMarvelUrl = process.env.NEXT_PUBLIC_MARVEL_BASE_URL;

const privateKey = process.env.NEXT_PUBLIC_TMDB_PRIVATE_KEY;
const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

if (
	!publicMarvelKey ||
	!privateMarvelKey ||
	!baseMarvelUrl ||
	!privateKey ||
	!baseUrl
) {
	throw new Error("Please provide necessary environment variables.");
}

const apiPaths = {
	movie: "movie",
	popular: "popular",
	search: "search",
};

export {
	publicMarvelKey,
	privateMarvelKey,
	baseMarvelUrl,
	privateKey,
	baseUrl,
	apiPaths,
};
