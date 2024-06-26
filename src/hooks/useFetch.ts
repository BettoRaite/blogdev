import { useEffect, useState } from "react";

const useFetch = (url: string) => {
	const [data, setData] = useState<unknown[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (Array.isArray(data)) {
					return setData(data);
				}
				throw new Error("Invalid fetched data.");
			})
			.catch((error) => {
				setError(error);
				setData(null);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);
	return { data, isLoading, error };
};

export default useFetch;
