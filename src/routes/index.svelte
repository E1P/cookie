<script>
	import '$lib/css/common.css';
	import { session } from '$app/stores';
</script>

<a href="/login">Log In</a>{' '}<a href="/register">Register</a>
<h1>Cookies & Headers</h1>

{#if $session.user}
	<h3>Logged in as {$session.user.firstName}</h3>
{:else}
	<h3>Not logged in</h3>
{/if}
