import * as cookie from 'cookie';
import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';

const jwtKey = process.env.AUDIO_AUCTION_JWT_KEY;

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt ? jsonwebtoken.verify(cookies.jwt, jwtKey) : null;
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
