import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('yudi');
	const [isLoading, setIsLoading] = useState(false);
	let history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		const blog = { title, body, author };

		// console.log(blog);
		setIsLoading(true);

		await fetch(process.env.REACT_APP_API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		})
			.then(() => {
				console.log('New blog added');
				setIsLoading(false);
				history.push('/');
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="create">
			<h2>Add a new Blog</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Blog title:</label>
				<input
					type="text"
					name="title"
					id="title"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor="body">Body</label>
				<textarea
					name="body"
					id="body"
					value={body}
					onChange={(e) => setBody(e.target.value)}></textarea>
				<label htmlFor="author">Author</label>
				<select
					name="author"
					id="author"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}>
					<option value="silver">Silver</option>
					<option value="yudi">Yudi</option>
				</select>
				{!isLoading && <button type="submit">Add Blog</button>}
				{isLoading && <button>Adding Blog...</button>}
			</form>
		</div>
	);
};
