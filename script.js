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
    addToFav();
}


function renderNews(news) {
    console.log(news[0]);
    const newsFeed = document.getElementById('newsFeed');
    const newslist = document.createElement("ul");
    newslist.className = "newsList";

    for(let i=0; i < news.length; i++)
    {
    const newsItm = document.createElement("li");
    const titleTag = document.createElement("h4");
    titleTag.innerHTML = news[i].webTitle;
    titleTag.className = "newstitle";
    const timestamp = document.createElement("h5");
    timestamp.innerHTML = news[i].sectionName + " || "+ "Posted: " + news[i].webPublicationDate;
    timestamp.className = "timestamp";
    const articleUrl = document.createElement("a");
    articleUrl.href = news[i].webUrl;
    articleUrl.innerText = "Read full article";
    articleUrl.className = "newsLink";
    
   
    const divFav = document.createElement("div");
    const spanFav = document.createElement("span");
    divFav.innerHTML = "Bookmark ";
    divFav.className = "bookmark";
    spanFav.className = "star-glyph";
    spanFav.innerHTML = "☆";
    divFav.appendChild(spanFav);

    newsItm.appendChild(divFav);
    newsItm.appendChild(titleTag);
    newsItm.appendChild(timestamp);
    newsItm.appendChild(articleUrl);
    newsItm.className = "newsCard"
    
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



/*
    Starring news
*/





function addToFav(){
    const emptyStar = '☆';
    
    const glyphs = document.getElementsByClassName("star-glyph");
    console.log(glyphs);
    for (let i = 0; i < glyphs.length; i++) {
      glyphs[i].innerHTML = emptyStar;
      glyphs[i].classList.remove('activated-star');
    }
  
    for (let i = 0; i < glyphs.length; i++) {
  
      glyphs[i].addEventListener('click', event => {
  
      const glyphSpan = event.target;
      const glyphState = glyphSpan.classList.contains('activated-star');
  
      if (glyphState) {
        glyphSpan.classList.remove('activated-star');
        glyphSpan.innerHTML = emptyStar;
      }
      else {
        PostServer(glyphSpan);
      }
    });
  }
}

  function PostServer(glyphSpan) {
    const fullStar = '★'
    glyphSpan.innerHTML = fullStar;
    glyphSpan.classList.add('activated-star');
  }