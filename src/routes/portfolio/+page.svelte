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

a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    padding: 20px;
    
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
</style>