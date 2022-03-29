<script>
	import { session } from '$app/stores';

	async function onDelete() {
		await fetch('auth/delete', {
			method: 'DELETE'
		});
		$session.user = null;
	}

	async function logOut() {
		await fetch('auth/logout', { method: 'POST' });
		$session.user = null;
	}

	$: loggedIn = $session.user;
</script>

<svelte:head>
	<title>Cookies & Headers</title>
</svelte:head>

{#if loggedIn}
	<a href="/profile">{$session.user.firstName}'s User Profile</a>
	<button on:click|preventDefault={logOut}>Log Out</button>
	<button on:click|preventDefault={onDelete}>Delete Users & Cookies</button>
{:else}
	<a href="/login">Log In</a>{' '}<a href="/register">Register</a>
{/if}
<h1>Cookies & Headers</h1>
{#if loggedIn}
	<h3>You are signed in!</h3>
{:else}
	<h3>Not logged in</h3>
{/if}
