import { createContext } from "react";

const LoadingContext = createContext<{
	loading: boolean;
	setLoading: (loading: boolean) => void;
}>({
	loading: false,
	setLoading: () => {},
});

export default LoadingContext;