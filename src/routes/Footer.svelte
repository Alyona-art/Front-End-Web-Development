<script lang="ts">
    import Icon from "../lib/ContactIcon.svelte";
    import tg_logo from "../lib/images/telegram_logo.svg";
    import git_logo from "../lib/images/github_logo.svg";
    import mail_logo from "../lib/images/outlook_logo.svg";
    import inst_logo from "../lib/images/instagram_logo.svg";
  </script>
  
  <div class="header">
    <h3 id="contact_me">Like this page? Then contact me:</h3>
  </div>
  
  <div class="container">
    <div class="main">
      <Icon
        id={"tg-link"}
        href={"http://t.me/Art_libra"}
        path={tg_logo}
        alt={"tg"}
      />
      <Icon
        id={"gh-link"}
        href={"https://github.com/Alyona-art"}
        path={git_logo}
        alt={"git"}
      />
      <Icon
        id={"email"}
        href={"mailto:a.artemeva@innopolis.university"}
        path={mail_logo}
        alt={"mail"}
      />
      <Icon
        id={"inst-link"}
        href={"https://instagram.com/liona_art_?igshid=YmMyMTA2M2Y="}
        path={inst_logo}
        alt={"inst"}
      />
    </div>
  </div>
  
  <style>
    h3 {
		font-family: 'Roboto Mono', monospace;
		font-size: 20px;
	}
  </style>