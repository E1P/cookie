import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	console.log('Cookies: ', cookies);
	const response = await resolve(event);

	return response;
}

export function getSession() {
	return { user: { firstName: 'Ewan' } };
}
