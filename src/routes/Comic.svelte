<script lang="ts">
	import { onMount } from 'svelte';
	interface Comic {
		img: string;
		title: string;
		year: number;
		month: number;
		day: number
	}

	let email: string = 'a.artemeva@innopolis.university';
	let comicData: Comic;

	async function fetchComic(email: string): Promise<Comic> {
		const params = new URLSearchParams([['email', email]]);
		const id = await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString());
		const id_1 = await id.text();
		const response = await fetch('https://getxkcd.vercel.app/api/comic?num=' + id_1);
		return await response.json();
	}  
	async function loadComic(email:string): Promise<Comic> {
		comicData = await fetchComic(email);
		return comicData;
	}

	onMount(async () => {
		comicData = await loadComic(email);
	});


</script>

{#await comicData}
<p>...loading new comic</p>
{:then result}
{#if result != undefined}
<section>
	<p id="comic_title" class="comic">{result.title}</p>
	<p id="comic_date">Uploaded: {(new Date(result.year, result.month-1, result.day)).toLocaleDateString()}</p>
	<img id="comic" alt="Comic placeholder" src={result.img} />
</section>
{/if}
{/await}

<style>
	.comic {
		font-family: 'Roboto Mono', monospace;
		font-size: 32px;
	}
</style>
