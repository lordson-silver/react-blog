import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
	const { id } = useParams();
	const {
		data: blog,
		isLoading,
		error,
	} = useFetch(process.env.REACT_APP_API_URL + id);
	const history = useHistory();

	const handleDelete = () => {
		fetch(process.env.REACT_APP_API_URL + id, {
			method: 'DELETE',
		}).then(() => {
			history.push('/');
		});
	};
	return (
		<div className="blog-details">
			{isLoading && <p>Loading...</p>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleDelete}>Delete</button>
				</article>
			)}
			{error && <p>{error}</p>}
		</div>
	);
}

export default BlogDetails;
