fetch("https://ghibliapi.vercel.app/films")
.then(response => {
     if(!response.ok) {
        throw new Error ("Falha ao carregar filmes!")
}
return response.json();
})
.then(films => {
    const filmsList = document.getElementById("film-list");
    films.forEach(element => {
         const li = document.createElement("li");
         li.textContent = `${element.title} (${element.release_date} - Direct by ${element.director})`
         filmsList.appendChild(li);
    });
})
.catch(error => {
 console.error("Falha ao acessar api de filmes", error);
});