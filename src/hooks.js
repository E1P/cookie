import * as cookie from 'cookie';
import { verify } from 'jsonwebtoken';

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt ? verify(cookies.jwt, 'jwtPrivateKey') : null;
	event.locals.user = jwt;

	return await resolve(event);
}

export function getSession({ locals }) {
	let session = {};
	if (locals.user) {
		const { _id, firstName, lastName, email, password } = locals.user;
		session = {
			user: {
				_id,
				firstName,
				lastName,
				email,
				password
			}
		};
	}
	return session;
}
