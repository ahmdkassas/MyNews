const UrlAPI = "https://cros-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=44648fc689904cb9b5b9382c689d3588";
const APIKey = "";

function GetNews()
{
  return fetch(UrlAPI)
    .then(result => result.json());
}

console.log(GetNews());