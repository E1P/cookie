<script context="module">
	// import '$lib/css/common.css';
	import '@fontsource/roboto-condensed';
</script>

<div class="navbar" />
<main>
	<slot />
</main>

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'); */

	main {
		font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
		border: 2px solid darkorange;
		padding: 10px;
		margin: 0;
	}

	.navbar {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 2vh;
		background-color: darkorange;
	}
</style>
