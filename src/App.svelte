<script lang="ts">
  import { base } from '$app/paths';
  import Header from "./lib/Header.svelte";
  import ComicData from "./lib/Comic.svelte";
  import AboutMe from "./lib/AboutMe.svelte";
  import Plans from "./lib/Plans.svelte";
  import Contacts from "./lib/Contacts.svelte";
  import {fetchComic} from "./lib/utils";
  import type {Comic} from "./lib/utils";
  
  let email: string = 'a.artemeva@innopolis.university';
  let comicData: Comic;

  async function loadComic(email:string): Promise<Comic> {
    comicData = await fetchComic(email);
    return comicData;
  }
  $: loadComic(email);
</script>

<head>
  <title>Homework 4</title>
  <link rel="stylesheet" href="{base}/app.css" />
</head>

<body>
  <div class="container">
    <div class="aside-1" />

    <div class="main">
      <Header />
      
      {#await loadComic(email)}
        <p>...loading new comic</p>
      {:then comicData}
      <ComicData 
        title = {comicData.title} 
        date={(new Date(comicData.year, comicData.month-1, comicData.day)).toLocaleDateString()}
        src={comicData.img}
        />
      {:catch error}
      <p style="color: red">{error.message}</p>
      {/await}

      <AboutMe />

      <Plans />
    </div>
    <div class="aside-2" />
    <div class="footer">
      <Contacts />
    </div>
  </div>
</body>
