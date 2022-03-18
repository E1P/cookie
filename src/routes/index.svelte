<script>
	import '$lib/css/common.css';
	import { session } from '$app/stores';
	async function onDelete() {
		const response = await fetch('/', {
			method: 'DELETE'
		});
		$session.user = null;
	}
</script>

<a href="/login">Log In</a>{' '}<a href="/register">Register</a>
<h1>Cookies & Headers</h1>
<button on:click|preventDefault={onDelete}>Delete Users & Cookies</button>
{#if $session.user}
	<h3>Logged in as {$session.user.email}</h3>
{:else}
	<h3>Not logged in</h3>
{/if}
