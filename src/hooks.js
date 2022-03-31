import * as cookie from 'cookie';
import jsonwebtoken from 'jsonwebtoken';

export async function handle({ event, resolve }) {
	console.log('Running handle...', event.url.href);
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt ? jsonwebtoken.verify(cookies.jwt, 'jwtPrivateKey') : null;
	event.locals.user = jwt;

	return await resolve(event);
}

export function getSession({ locals }) {
	console.log('Running getSession...', locals.user?.firstName);
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
