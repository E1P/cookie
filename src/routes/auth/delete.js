import { serialize } from 'cookie';

export async function del() {
	const response = await fetch('http://localhost:4000/user', { method: 'DELETE' });
	const body = await response.json();
	console.log('Deleting users...', body);

	const cookie = serialize('jwt', 'deleted', {
		httpOnly: true,
		path: '/',
		sameSite: true,
		maxAge: 0,
		secure: true
	});

	return {
		headers: {
			'set-cookie': cookie
		},
		body
	};
}
