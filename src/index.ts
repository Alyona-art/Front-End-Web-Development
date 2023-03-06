const email = 'a.artemeva@innopolis.university' as string;
const image = document.getElementById('comic') as HTMLImageElement;
const title = document.getElementById('comic_title') as HTMLTitleElement;
const date = document.getElementById('comic_date') as HTMLDataElement;

window.onload = function () {
    fetchComic(email);
};

interface Comic {
    img: string;
    title: string;
    year: number;
    month: number;
    day: number
}

async function fetchComic(email: string): Promise<void> {
    const params = new URLSearchParams([['email', email]]);
    const id = await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString());
    const id_1 = await id.text();
    const response = await fetch('https://getxkcd.vercel.app/api/comic?num=' + id_1);
    const data: Comic = await response.json();
    const json = undefined;
    image.src = data["img"];
    image.alt = data["title"];
    console.log(data["title"]);
    title.textContent = data["title"];
    const event = new Date(data["year"], data["month"] - 1, data["day"]);
    date.textContent += event.toLocaleDateString();
}
