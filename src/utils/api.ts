import crypto from "crypto";
import { baseUrl, privateKey, publicKey } from "@/data/api";
import axios from "axios";

const generateHash = (ts: string) => {
	return crypto
		.createHash("md5")
		.update(ts + privateKey + publicKey)
		.digest("hex");
};

const fetchData = async ({ id, queryParams, model = "" }: FetchDataParams) => {
	const ts = new Date().getTime().toString();
	const hash = generateHash(ts);
	const apikey = publicKey;

	const url = `${baseUrl}${model ? `/${model}` : ""}${id ? `/${id}` : ""}`;

	const params = {
		ts,
		apikey,
		hash,
		...queryParams,
	};

	try {
		const response = await axios.get(url, {
			params,
			headers: {
				Accept: "*/*",
			},
		});

		return response.data;
	} catch (error) {
		console.error("Error fetching data from Marvel API:", error);
		throw error;
	}
};

export default fetchData;
