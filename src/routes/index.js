export async function del() {
	const response = await fetch('http://localhost:4000/user', { method: 'DELETE' });
	const body = await response.json();
	console.log('Deleting users...', body);
	return {
		headers: {
			'set-cookie': `jwt=deleted; Path=/; HttpOnly; expires=${new Date(0)}`
		},
		body
	};
}
