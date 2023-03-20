<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="My portfolio" />
</svelte:head>

<section class="text-column">
    <h1 id="about_me">My portfolio</h1>
    <p>
      As a designer I want to place my portfolio here, but now there is just a link to PDF
    </p>
    <form target="_blank" action="https://drive.google.com/drive/folders/1wxicq53sSUZpA3Zunxb68U9cNtSpAgtf?usp=sharing">
      <button>Look</button>
    </form>
</section>

<style>
  section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
  
	button {
  background-color: rgb(207, 131, 252);
  border-radius: 8px;
  border-width: 1px;
  color: white;
  width: 300px;
  height: 80px;
  margin: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Roboto Mono', monospace;
	font-size: 24px;
}
button:hover {
  background-color:rgb(162, 92, 185);
  transition: 0.7s;
}
</style>