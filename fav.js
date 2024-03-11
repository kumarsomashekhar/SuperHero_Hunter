const favContainer=document.getElementById('fav-characters-container');
// get favourites heros id from local storage and store in an array

// // Retrieve favorites from local storage
let favList = JSON.parse(localStorage.getItem('favourites')) || [];

// Function to display favorite characters
function favCharacters() {
  favContainer.innerHTML = ""; // Clears previous content

  // Fetch and display favorite characters
  favList.forEach(async (id) => {
    const characterData = await fetchCharacterDataById(id);
    displayFavCharacter(characterData);
  });
}

// Fetch character data by ID from the Marvel API
async function fetchCharacterDataById(id) {
  const apiUrl = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=9798c70d3a564b5b348e0faab8ac5062&hash=e87154c843edb4cdfa777056135d6d27`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data.results[0];
  } catch (error) {
    console.error('Error fetching Marvel data by ID:', error);
    return null;
  }
}

// Display favorite character
function displayFavCharacter(character) {
  const favCard = document.createElement('div');
  favCard.classList.add('fav-card');

  favCard.innerHTML = `
    <div class="fav-character-image">
      <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" class="fav-img">
    </div>
    <div class="fav-character-details">
      <h5>${character.name}</h5> 
    </div>

    <div class="delete-btn">
        <i class="fa-solid fa-trash-can" onclick="removeFromFavorites(${character.id})" data-id="${character.id}"></i>
     </div>
  `;

  favContainer.appendChild(favCard);
}

// Remove character from favorites
function removeFromFavorites(id) {
    favList = favList.filter(favId => favId !== id);
    localStorage.setItem('favourites', JSON.stringify(favList));
    alert("your hero removed successfully");
    favCharacters(); // Refresh the displayed favorites
  }
  
  // Initial display of favorite characters
  favCharacters();


    