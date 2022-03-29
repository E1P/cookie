<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return { status: 302, redirect: '/' };
		}
		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';

	let firstName;
	let lastName;
	let email;
	let password;
	// let confirmPassword;
	let error;

	async function register() {
		const response = await fetch('auth/register', {
			method: 'POST',
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password
			})
		});
		const user = await response.json();
		if (user.error) {
			error = user.error;
			console.log('Register error: ', error);
		} else {
			$session.user = user;
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<a href="/">Home</a>
<h1>Register</h1>

<form on:submit|preventDefault={register}>
	<input
		name="firstname"
		bind:value={firstName}
		type="text"
		placeholder="enter first name..."
		required
	/>
	<input
		name="lastname"
		bind:value={lastName}
		type="text"
		placeholder="enter last name..."
		required
	/>
	<input name="email" bind:value={email} type="email" placeholder="enter email..." required />
	<input
		name="password"
		bind:value={password}
		type="password"
		placeholder="enter password..."
		required
	/>
	<!-- <input
		name="password"
		bind:value={confirmPassword}
		type="password"
		placeholder="confirm password..."
		required
	/> -->
	<button>Register</button>
</form>
