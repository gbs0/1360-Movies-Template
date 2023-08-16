import Mustache from "mustachejs";


const results = document.querySelector("#results")
const url = "https://www.omdbapi.com/?s=the%20batman&apikey=adf1f2d7"
const cardTemplate = document.querySelector("#cardTemplate").innerHTML;

fetch(url)
.then(response => response.json())
.then((data) => {
  const movieData = { "movies": data.Search }
  console.dir(movieData)
  const card = Mustache.render(cardTemplate, movieData)
  results.insertAdjacentHTML('beforeend', card)
})


// const fruits = {
//   "fruits": [
//     { "name": "apple", "price": 3 },
//     { "name": "pear", "price": 2 },
//     { "name": "banana", "price": 5 }
//   ]
// }

// const template = "<ul>{{#fruits}}<li>{{name}}: {{price}} EUR</li>{{/fruits}}</ul>"

// const list = Mustache.render(template, fruits)
// results.insertAdjacentHTML('beforeend', list)
