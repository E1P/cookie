<script>
	import '$lib/css/common.css';
</script>

<div class="navbar" />
<main>
	<slot />
</main>

<style>
	main {
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
