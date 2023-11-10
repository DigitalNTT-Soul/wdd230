const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.getElementById('cards');

async function getProphetsArray() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

function displayProphets(prophetsArray) {
    for (let prophet of prophetsArray)
        displayOneProphet(prophet);
}

function displayOneProphet(prophet) {
    let card = document.createElement('section');

    card.appendChild(getProphetFullName(prophet));
    card.appendChild(getProphetBirthDate(prophet));
    card.appendChild(getProphetBirthPlace(prophet));
    card.appendChild(getProphetPortrait(prophet));

    cards.appendChild(card);
}

function getProphetBirthDate(prophet) {
    let birthDate = document.createElement('p');
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    return birthDate;
}

function getProphetBirthPlace(prophet) {
    let birthPlace = document.createElement('p');
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    return birthPlace
}

function getProphetFullName(prophet) {
    let fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    return fullName;
}

function getProphetPortrait(prophet) {
    let portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading','lazy');
    portrait.setAttribute('width','340');
    portrait.setAttribute('height', '440');
    return portrait;
}

getProphetsArray();
