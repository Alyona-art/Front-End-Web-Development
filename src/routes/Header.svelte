<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<header>
	<div class="corner"></div>

	<nav>
		<ul>
			<li>
				<a href="{base}/">Home</a>
			</li>
			<li>
				<a href="{base}/about">About</a>
			</li>
			<li>
				<a href="{base}/portfolio">Portfolio</a>
			</li>
		</ul>
		
	</nav>

	<div class="corner"></div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-family: 'Roboto Mono', monospace;
		font-size: 24px;
	
	}
</style>
