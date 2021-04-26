const UrlAPI = "https://content.guardianapis.com/search?api-key=";
const APIKey = "c4205d20-e6b5-47aa-965e-6004b584eb4c";

function GetNews()
{
    fetch(UrlAPI+APIKey)
    .then(function(response) {
          return response.json();
    })
    .then(json => renderNews(json));
}

function GetNewsForSubject(subject)
{
    fetch(UrlAPI + APIKey + "&q=" + subject)
    .then(function(response) {
          return response.json();
    })
    .then(json => renderNews(json));
}

function renderNews(imgs) {
    console.log(imgs.response.results);
  }


