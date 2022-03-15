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
	let email;
	let password;
	function onSubmit() {
		console.log('Submitting...');
	}
</script>

<a href="/">Home</a>
<h1>Log In</h1>

<form on:submit|preventDefault={onSubmit}>
	<input name="email" bind:value={email} type="email" placeholder="email..." required />
	<input name="password" bind:value={password} type="password" placeholder="password..." required />
	<button>Log In</button>
</form>
