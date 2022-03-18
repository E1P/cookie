<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	let email;
	let password;
	async function onSubmit() {
		console.log('Submitting...');
		const response = await fetch('auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			})
		});
		const user = await response.json();
		if (user) {
			$session.user = user;
			goto('/');
		}
	}
</script>

<a href="/">Home</a>
<h1>Log In</h1>

<form on:submit|preventDefault={onSubmit}>
	<input name="email" bind:value={email} type="email" placeholder="email..." required />
	<input name="password" bind:value={password} type="password" placeholder="password..." required />
	<button>Log In</button>
</form>
