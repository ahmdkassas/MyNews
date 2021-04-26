const UrlAPI = "https://content.guardianapis.com/search?api-key=";
const APIKey = "c4205d20-e6b5-47aa-965e-6004b584eb4c";

document.getElementById("btnSearch").addEventListener("click", function() {
   const inputSearch = document.getElementById("txtSearch");
   GetNewsForSubject(inputSearch.value);
  });


GetNews();

function GetNews()
{
    fetch(UrlAPI+APIKey)
    .then(function(response) {
          return response.json();
    })
    .then(json => renderNews(json.response.results));
}


function renderNews(news) {
    console.log(news[0]);
    const newsFeed = document.getElementById('newsFeed');
    const newslist = document.createElement("ul");
    
    for(let i=0; i < news.length; i++)
    {
    const newsItm = document.createElement("li");
    const h1Tag = document.createElement("h2");
    h1Tag.innerHTML = news[i].webTitle;
    const articleUrl = document.createElement("a");
    articleUrl.href = news[i].webUrl;
    articleUrl.innerText = "read more";

    newsItm.appendChild(h1Tag);
    newsItm.appendChild(articleUrl);
    newslist.appendChild(newsItm);
    }
    newsFeed.appendChild(newslist);
  }


  function GetNewsForSubject(subject)
  {
    clearNewsFeed();
      fetch(UrlAPI + APIKey + "&q=" + subject)
      .then(function(response) {
            return response.json();
      })
      .then(json => renderNews(json.response.results));
  }

  function clearNewsFeed(){
    const newsFeed = document.getElementById('newsFeed');
    while (newsFeed.firstChild) {
        newsFeed.removeChild(newsFeed.firstChild);
    }
  }