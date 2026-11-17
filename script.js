// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.

const $collection = document.querySelector('#collection');
const $theme = document.querySelector('#theme');
const $layout = document.querySelector('#layout');
const $status = document.querySelector('#status');

// Assignment specific: use a unique key for your Local Storage data.
const STORAGE_KEY = 'mtm6302-creature-collection-preferences';

// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.

function generateCreatures() {
  $collection.innerHTML = ''; // Clear existing entries
  $creatures.forEach(function(creature) {
    const $item = document.createElement('li');
    $item.classList.add('creature');

    // Create the image element
    const $image = document.createElement('img');
    $image.src = creature.image;
    $image.alt = creature.alt;
    
    // information container
    const $info = document.createElement('div');
    $info.classList.add('creature-info');

    // Create the name element
    const $name = document.createElement('h3');
    $name.textContent = creature.name;

    // Create the description element
    const $description = document.createElement('p');
    $description.classList.add('creature-description');
    $description.textContent = creature.description;

    // Append elements to the info container
    $info.append($name, $description);
    $item.append($image, $info);

    // Append the item to the collection
    $collection.append($item);
  });
}



// 3. Listen for changes to each preference control and update the appearance.

function updatePreferences() {
  document.body.dataset.theme = $theme.value;
  $collection.dataset.layout = $layout.value;
}

// 4. Save both selected preferences to Local Storage.

function savePreferences() {
  const preferences = {
    theme: $theme.value,
    layout: $layout.value
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  $status.textContent = 'Preferences saved!';
}

// 5. Check for saved data on load and restore the controls and appearance.

$theme.addEventListener('change', function() {
  updatePreferences();
  savePreferences();
});

// Restore preferences from Local Storage on page load and check that saved data exists before using JSON.parse() to avoid errors.

function restorePreferences() {
  const savedPreferences = localStorage.getItem(STORAGE_KEY);
  if (savedPreferences !== null) {
    const preferences = JSON.parse(savedPreferences);
    // Restore the theme and layout controls
    $theme.value = preferences.theme;
    $layout.value = preferences.layout;
    // Restore the appearance based on saved preferences
    updatePreferences();
    $status.textContent = 'Welcome back! Your preferences have been restored.';
  } else {
    // If no saved preferences, set default values
    updatePreferences();
    $status.textContent = 'Welcome! Choose a habitat and layout to customize your collection.';
  }
}


generateCreatures();

// Add short pseudocode comments before writing each feature.