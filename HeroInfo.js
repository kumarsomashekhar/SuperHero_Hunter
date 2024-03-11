    const characterId = document.getElementById("characterId")
    const title = document.getElementById("title");
    const poster = document.getElementById("poster");
    const description = document.getElementById("description");
    const comics = document.getElementById("comics-available");
    const series = document.getElementById("Series-available");
    const stories = document.getElementById("Stories-available");
    const Events = document.getElementById("Events-available");

fetch(
    `https://gateway.marvel.com/v1/public/characters/${localStorage.getItem(
      "id")}?ts=1&apikey=9798c70d3a564b5b348e0faab8ac5062&hash=e87154c843edb4cdfa777056135d6d27
    `
  )
    .then((response) => response.json())
    .then((data) => {

      const characterData = data.data.results[0];

      characterId.textContent = characterData.id;
      title.innerHTML = characterData.name;
      poster.src = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;
      description.textContent = characterData.description || "No description available";
      comics.textContent = characterData.comics.available;
      series.textContent = characterData.series.available;
      stories.textContent = characterData.stories.available;
      Events.textContent = characterData.events.available;
    });
