const UrlAPI = "https://content.guardianapis.com/search?api-key=c4205d20-e6b5-47aa-965e-6004b584eb4c";
const APIKey = "";

function GetNews()
{
    fetch(UrlAPI)
    .then(function(response) {
          return response.json();
    })
    .then(json => renderNews(json));
}

function renderNews(imgs) {
    console.log(imgs.response.results);
  }