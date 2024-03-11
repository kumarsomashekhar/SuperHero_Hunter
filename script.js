//  publicKey = '9798c70d3a564b5b348e0faab8ac5062';
//  privateKey = 'da5aafdff6ebeddaa9bc8db4b9e87dbc02ca049a';
//  hash = https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9798c70d3a564b5b348e0faab8ac5062&hash=e87154c843edb4cdfa777056135d6d27

// const CryptoJS = ("crypto-js");
// const { md5 } = ("crypto-js");

const searchInput = document.getElementById("search");
    const suggestionsContainer = document.getElementById("card-container");
    
    let suggestionList = [];

    searchInput.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
          event.preventDefault();
        }
      });

      // Event listner on search
  searchInput.addEventListener("keyup", function () {
    let search = searchInput.value;
    if (search === "") {
      suggestionsContainer.innerHTML = "";
      suggestionList = [];
    } else {
      (async () => {
        let marvelData = await fetchMarvelData(search);
        showSuggestions(marvelData);
      })();
    }
  });

  async function fetchMarvelData(search) {
    // const PUBLIC_KEY = "9798c70d3a564b5b348e0faab8ac5062";
    // const PRIVATE_KEY = "da5aafdff6ebeddaa9bc8db4b9e87dbc02ca049a";
    // const ts = new Date().getTime();
    // const dataToHash = `${ts}${PUBLIC_KEY}${PRIVATE_KEY}`;
    
    // // const hash = md5(dataToHash).toString();
    // const hash = CryptoJS.MD5(ts+PUBLIC_KEY+PRIVATE_KEY).toString();

    const apiUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=9798c70d3a564b5b348e0faab8ac5062&hash=e87154c843edb4cdfa777056135d6d27`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Marvel data:', error);
      return null;
    }
  }

  // makeing a favourites key for storing all favourites character's id in local storage
if (localStorage.getItem("favourites")==null) {
  localStorage.setItem("favourites",JSON.stringify([]));
}else{
  var arr = JSON.parse(localStorage.getItem("favourites"));
}

  function addFavourite(id) {
    if (!arr.includes(id) == true) {
      arr.push(id);
      localStorage.setItem("favourites", JSON.stringify(arr));
      alert("your hero added in favourites")
    }else{
      alert("your hero already added in favourites")
    }
  }

// function to add selected hero id in local-storage
function fetchCharactersData(idnumber) {
  localStorage.setItem("id", idnumber);
}

  // Shows in suggestions
  function showSuggestions(marvelData) {
    var element = marvelData.data.results;
      
      marvelData.data.results.forEach( (element) => {
      const HeroCard = document.createElement("div");
      
      HeroCard.innerHTML = `
      <div class="card my-2" data-id="${element.id}">
           <div class="container-character-image">
           <a href="HeroInfo.html" >
              <img src="${
                element.thumbnail["path"] + "." + element.thumbnail["extension"]
                }"
                class="card-img-top
                alt="..."
                height="350px"
                data-id="${element.id}"
                onclick="fetchCharactersData(${element.id})"
                />
                </a>
            </div>
            <div class="character-name">
                 <a href="HeroInfo.html" onclick="fetchCharactersData(${element.id})" >
                    ${element.name} 
                 </a>
                    <p class="card-text">
                     <button id="fav-btn" class="fav-btn">
                       <i class="fa-solid fa-heart add-fav" onclick="addFavourite(${element.id})" data-id="${element.id}"></i>
                     </button>
                   </p>
                   
            </div>
  
          </div>

    `;
      suggestionsContainer.prepend(HeroCard);
      
    });

  }

  
 const Url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9798c70d3a564b5b348e0faab8ac5062&hash=e87154c843edb4cdfa777056135d6d27`;
 

 fetch(Url)
 .then(response => response.json())
 .then(data => {
     // Updates the innerHTML of the footer
     document.getElementById('footer').innerHTML = data.attributionHTML;
 })
 .catch(error => console.error('Error fetching data from Marvel API:', error));
