// /auth/register
import { getHost } from '$lib/db/api';
import jsonwebtoken from 'jsonwebtoken';
import { serialize } from 'cookie';

export async function post({ request }) {
	const json = await request.json();
	const host = getHost();
	const response = await fetch(`${host}/user`, {
		method: 'POST',
		body: JSON.stringify(json),
		headers: { 'Content-Type': 'application/json' }
	});
	const user = await response.json();
	if (user.error) {
		return {
			body: { error: user }
		};
	}

	const jwt = jsonwebtoken.sign(user, 'jwtPrivateKey');
	const cookie = serialize('jwt', jwt, {
		httpOnly: true,
		path: '/',
		sameSite: true,
		maxAge: 60 * 60 * 24 * 7,
		secure: true
	});

	return {
		headers: {
			'set-cookie': cookie
		},
		body: user
	};
}
