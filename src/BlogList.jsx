import React from 'react';
import { Link } from 'react-router-dom';

export const BlogList = ({ data, title }) => {
	return (
		<div>
			<h1>{title}</h1>
			{data.map(({ id, title, author }) => (
				<div className="blog-preview" key={id}>
					<Link to={`/blogs/${id}`}>
						<h2>{title}</h2>
						<p>{author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};
