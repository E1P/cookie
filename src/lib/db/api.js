import jsonwebtoken from 'jsonwebtoken';
import { serialize } from 'cookie';

export async function createResponse(urlSuffix, json) {
	const response = await fetch(`${urlSuffix}`, {
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

	const jwt = jsonwebtoken.sign(user, process.env.AUDIO_AUCTION_JWT_KEY);
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
