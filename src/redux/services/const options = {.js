const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7410492805msh00df8bec3c37ffdp189b0djsnbc5a7029ab21",
    "X-RapidAPI-Host": "shazam-core7.p.rapidapi.com",
  },
};

fetch(
  "https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
