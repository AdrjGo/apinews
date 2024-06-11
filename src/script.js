/* API gratuita */
// const pokeapi = fetch("https://pokeapi.co/api/v2/pokemon/1");

// pokeapi
//   .then((res) => res.json())
//   .then((response) => {
//     console.log(response);
//   });

const divNews = document.querySelector("#news");
const loadBtn = document.querySelector("#load");

let page = 1;

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "6f4d501dda6d4a708a078dc5952e92fd",
  },
};

function loadNews() {
  const url = fetch(
    `https://newsapi.org/v2/everything?q=keyword&page=${page}`,
    options
  );
  url
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      const list = response.articles;
      list.map((item) => {
        const name = item.title;
        const image = item.urlToImage;
        const publish = item.source.name;
        const link = item.url;
        const desc = item.description;
        const newsSummary = `
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                              <a href="${link}" target="_blank" class="block">
                                <img src="${image}" alt="Imagen de ${name}" class="w-full h-64 object-cover">
                                <div class="p-6">
                                  <h2 class="text-2xl font-bold text-gray-800 mb-2">${name}</h2>
                                  <p class="text-gray-700 mb-4">${desc}</p>
                                  <p class="text-gray-500 text-sm">${publish}</p>              
                                </div>
                              </a>
                            </div>`;
        divNews.innerHTML += newsSummary;
      });
      page++;
    });
}
loadNews();
loadBtn.addEventListener("click", loadNews);
