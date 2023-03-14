<script lang="ts">
    export let id: string;
    export let href: string;
    export let path: string;
    export let alt: string;
</script>

<a {id} class="icon_link" {href}>
    <img class="icon" src={path} {alt} />
</a>

<style>
    .icon {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        margin: 5px;
        border: 1px solid;
    }
    .icon:hover {
        opacity: 0.7;
    }
    .icon_link {
        padding: 0;
        margin: 0;
    }
</style>
