import * as cookie from 'cookie';
import { verify } from 'jsonwebtoken';

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt ? verify(cookies.jwt, 'jwtPrivateKey') : null;
	event.locals.user = jwt ? jwt : null;

	return await resolve(event);
}

export function getSession({ locals }) {
	return locals.user
		? {
				user: {
					_id: locals.user._id,
					email: locals.user.email,
					password: locals.user.password
				}
		  }
		: {};
}
