import { sign } from 'jsonwebtoken';

export async function post({ request }) {
	const json = await request.json();
	const postResponse = await fetch('http://localhost:4000/user', {
		method: 'POST',
		body: JSON.stringify(json),
		headers: { 'Content-Type': 'application/json' }
	});
	const postBody = await postResponse.json();
	const id = postBody.insertedId;
	const getResponse = await fetch(`http://localhost:4000/user/${id}`);
	const user = await getResponse.json();
	const jwt = sign(user, 'jwtPrivateKey');
	return {
		headers: {
			'set-cookie': `jwt=${jwt}; Path=/; HttpOnly`
		},
		body: user
	};
}
