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
  <link rel="stylesheet" href="{base}/src/app.css" />
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

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Roboto+Mono:wght@700&display=swap');

.main {
  grid-area: main;
}

.aside-1 {
  grid-area: aside-1;
}

.aside-2 {
  grid-area: aside-2;
}

.footer {
  grid-area: footer;
  align-self: center;
  background-color: #edeff5;
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "aside-1 main aside-2"
    "footer footer footer";

}


h1 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    font-size: 54px;
    color: rgb(207, 131, 252);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    margin-bottom: 0px;
}

h2 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    font-size: 40px;
    color: rgb(207, 131, 252);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    margin: 0;
}

h3 {
    font-family: 'Roboto Mono', monospace;
    font-size: 24px;
}

nav {
    margin-top: 50px;
}

ul {
  margin-top: 0;
}

li {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin-left: -30px;
  padding: 10px;
}

.list {
  padding-left: 60px;
  background-color: #edeff5;
}

p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}

section {
    margin-top: 30px;
}

hr {
    border-width:0;
    background-color: black;
    height: 1px;
}

body {
	min-height: 100vh;
	margin: 0;
	background-attachment: fixed;
}

a {
	text-decoration: none;
	margin: 20px;
	color: rgb(207, 131, 252);
}

a:hover {
	color: rgb(162, 92, 185);
}

.text-column {
	display: flex;
	max-width: 48rem;
	flex: 0.6;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
}

.visually-hidden {
	border: 0;
	clip: rect(0 0 0 0);
	height: auto;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	white-space: nowrap;
}

  

  
</style>