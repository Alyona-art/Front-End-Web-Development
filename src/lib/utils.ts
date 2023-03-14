export interface Comic {
    img: string;
    title: string;
    year: number;
    month: number;
    day: number
}

export async function fetchComic(email: string): Promise<Comic> {
    const params = new URLSearchParams([['email', email]]);
    const id = await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString());
    const id_1 = await id.text();
    const response = await fetch('https://getxkcd.vercel.app/api/comic?num=' + id_1);
    const data: Comic = await response.json();
    console.log(data["title"]);
    return data;
}   