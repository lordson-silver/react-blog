import { useState, useEffect } from 'react';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		fetch(url, { signal: abortController.signal })
			.then((res) => {
				if (!res.ok) throw Error('could not fetch the data requested');
				else return res.json();
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('fetch aborted');
				} else {
					setIsLoading(false);
					setError(err.message);
				}
			});

		return () => abortController.abort();
	}, [url]);
	return { data, isLoading, error };
}

export default useFetch;
