<script lang="ts">
    export let title: string = "";
    export let date: string = "";
    export let src: string = "";
</script>

<section>
    <h2 id="comic_title">{title}</h2>
    <p id="comic_date">Uploaded: {date}</p>
    <img id="comic" alt="Comic placeholder" {src} />
</section>
