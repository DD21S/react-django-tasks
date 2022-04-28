import { useEffect, useState } from 'react';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then(response => {
					if (! response.ok) {
						throw Error("fetch could not found for that resource");
					}
					return response.json();
				})
				.then(data => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch(error => {
					setError(error.message);
					setIsPending(false);
				});
		}, 1000);
	}, [url]);

	return { data, isPending, error };
}

export default useFetch;