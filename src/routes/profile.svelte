<script context="module">
	export async function load({ session }) {
		if (!session.user) {
			return { status: 302, redirect: '/' };
		}
		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	const user = $session.user;
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<a href="/">Home</a>
<h3>User Profile</h3>
<p>First Name: {user.firstName}</p>
<p>Last Name: {user.lastName}</p>
<p>Email: {user.email}</p>
<p>Id: {user._id}</p>
