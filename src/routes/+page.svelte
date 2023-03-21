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
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Roboto+Mono:wght@700&display=swap');
	
	h1 {
		font-family: 'Roboto Mono', monospace;
		font-weight: 700;
		font-size: 54px;
		color: rgb(207, 131, 252);
		text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
		margin-bottom: 0px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
