import { serialize } from 'cookie';

export async function post() {
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
		body: {
			ok: true
		}
	};
}
