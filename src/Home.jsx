import React from 'react';
import { BlogList } from './BlogList';
import useFetch from './useFetch';

export const Home = () => {
	const {
		data: blogs,
		isLoading,
		error,
	} = useFetch(process.env.REACT_APP_API_URL);
	return (
		<div className="home">
			{isLoading && <p>Loading...</p>}
			{blogs && <BlogList data={blogs} title="All Blogs" />}
			{error && <p>{error}</p>}
			{/* <BlogList
				data={blogs.filter(({ author }) => author == 'silver')}
				title="Silvers Blogs"
			/> */}
		</div>
	);
};
