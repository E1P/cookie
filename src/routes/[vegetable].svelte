<script context="module">
	export async function load({ params }) {
		return { props: { params } };
	}
</script>

<script>
	import { page } from '$app/stores';
	export let params;
	console.log('Page object: ', $page);
</script>

<a href="/">Home</a>
<h2>The vegetable is {params.vegetable}</h2>
