<script context="module">
	import '@fontsource/roboto-condensed';
</script>

<script>
	import '$lib/css/normalize-220404.css';
</script>

<div class="navbar" />
<main>
	<slot />
</main>

<style>
	main {
		font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
		border: 2px solid darkorange;
		padding: 10px;
	}

	.navbar {
		padding: 0;
		width: 100%;
		height: 2vh;
		background-color: darkorange;
	}
</style>
