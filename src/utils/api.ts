import { baseUrl, privateKey } from "@/data/api";
import axios from "axios";

const fetchData = async ({
	id,
	queryParams,
	path = "",
	method = "GET",
}: FetchDataParams) => {
	const options = {
		method: method,
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${privateKey}`,
		},
	};

	const url = `${baseUrl}${path ? `/${path}` : ""}${id ? `/${id}` : ""}`;

	const params = {
		...queryParams,
	};

	try {
		const response = await axios.get(url, {
			params,
			...options,
		});

		return response.data;
	} catch (error) {
		console.error("Error fetching data API:", error);
		throw error;
	}
};

export default fetchData;
