window.onload = function() {
    fetchComic('a.artemeva@innopolis.university');
  };

function fetchComic(email) {
    const params = new URLSearchParams([['email', email]]);
    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())
        .then((id) => id.text())
        .then((id) => fetch('https://api.allorigins.win/raw?url=' + 'https://xkcd.com/' + id + '/info.0.json'))
        .then((response) => response.json())
        .then((json) => {
            document.getElementById('comic').src = json["img"]
            document.getElementById('comic_title').textContent = json["title"]

            const event = new Date(Date.UTC(json["year"], json["month"]-1, json["day"],));
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('comic_date').textContent += event.toLocaleDateString(undefined, options);
        })
}
