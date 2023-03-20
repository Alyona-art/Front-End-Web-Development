<script>
	import Comic from './Comic.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Homework 5 App" />
</svelte:head>

<section>
	<h1>Hi there, I'm Alyona</h1>

	<p>
		And this is (seems like) working SvelteKit application
	</p>

	<Comic />

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
