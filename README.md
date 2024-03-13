# SuperHero_Hunter
 SuperHeroHunter created using marvel API with HTML, CSS & JS

Hosted Link :- https://kumarsomashekhar.github.io/SuperHero_Hunter/

Created a superHero Hunter app using marvel APi:- https://developer.marvel.com/docs using the public key and private key provided by the Marvel API to fetch data

The superhero hunter app consists of Homepage, Hero Detailspage and Favouritespage HTML pages each with its own styling css and Javascript files

Home Page:-In the Homepage we are fecthing and displaying the data of superheros based on the search input where we have used "Keyup" event to capture the value input which is then embedded in the Marvel API as a parameter for search. 

The captured data is then Displayed on the browser DOM by calling the showsuggeston function which displays all the suggested Hero data based on the search input.
Each hero output has a fav button init which when clicked is added to favourites and also has a heroInfo page which displays all the details of a particular Hero.

Superhero Page :- using the localstorage the ID of each hero is stored in local storage which is then used to fetch detailed info of the hero using it as a parameter in the MarvelAPi url contructed.Ui=sing the fetched info the innerHTML element of each is updated in the HeroInfo.html file here we have info such as: Hero Description. characterID, comics, events,stories and series related to the particular Hero

WatchlistPage: Displays a list of all the superheros marked as favourite. Here the data is fetched using the CharacterID stored in localstorage as a parameter in the url constructed.
for each hero marked as favourite there is a delete option which removes it from the fav list.

 
