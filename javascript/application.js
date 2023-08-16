const results = document.querySelector("#results")
const url = "https://www.omdbapi.com/?s=the%20batman&apikey=adf1f2d7"
const template = document.querySelector("#cardTemplate");

console.dir(template)

fetch(url)
.then(response => response.json())
.then((data) => {
  data.Search.forEach((movie) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector("img").src = movie.Poster
    clone.querySelector("h6").textContent = movie.Title
    clone.querySelector("p").textContent = movie.Year
    clone.querySelector("a").href = `https://www.imbd.com/title/${movie.imdbID}`
    results.appendChild(clone)
  })
})
