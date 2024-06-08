import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="not-found">
			<h2>Sorry....</h2>
			<p>This page no dey werey</p>
			<Link to="/">Go back to home page</Link>
		</div>
	);
}

export default NotFound;
