const API_URL = "https://cmps-index.onrender.com/api/v1/film";

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(film => [
        film.id,
        film.genre,
        film.movie,
        film.year,
    ]);

    new gridjs.Grid({
        columns: ["Id", "Genre", "Movie", "Year"],
        data: formattedData,
        search: true,
        sort: true,
        pagination: {
            enabled: true,
            limit: 5
        },
        resizable: true,
        stye: {
            table: {
                border: "1px solid #ccc"
            },
            th: {
                "background-color": "f4f4f4",
                "text-alignt": "left"
            },
            td: {
                "padding": "8px",
                "border-bottom": "1pix solid #ddd"
            }
        }
    }).render(document.getElementById("grid-container"));
})
.catch(error => console.error('Error fethcing data', error))