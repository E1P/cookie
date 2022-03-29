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
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';

	let email;
	let password;
	let error;

	async function logIn() {
		console.log('Logging in...');
		const response = await fetch('auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			})
		});
		const user = await response.json();
		if (user.error) error = user.error;
		else {
			$session.user = user;
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>Log In</title>
</svelte:head>

<a href="/">Home</a>
<a href="/register">Register</a>
<h1>Log In</h1>

<form on:submit|preventDefault={logIn}>
	<input name="email" bind:value={email} type="email" placeholder="email..." required />
	<input name="password" bind:value={password} type="password" placeholder="password..." required />
	<button>Log In</button>
</form>
{#if error}
	<h2>Invalid email or password</h2>
{/if}

<style>
	h2 {
		color: red;
	}
</style>
