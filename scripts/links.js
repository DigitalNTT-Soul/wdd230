// const baseURL = "https://digitalntt-soul.github.io/wdd230/";

// const linksURL = `${baseURL}data/links.json`; // for the actual publication of the update

const linksURL = "data/links.json"; // for testing before commit

const listElement = document.getElementById('lesson-links')

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data.lessons)
    displayLinks(data.lessons);
}

function displayLinks(lessons) {
    listElement.innerHTML = "";
    for (let lesson of lessons)
        displayOneLesson(lesson);
}

function displayOneLesson(lesson) {
    let li = document.createElement('li');
    li.innerHTML += `${lesson.lesson}. `;
    let first = true;
    for (let link of lesson.links) {
        if (first)
            first = false;
        else
            li.innerHTML += " | ";

        li.appendChild(generateOneLink(link));
    }
    listElement.appendChild(li);
}

function generateOneLink(linkObj) {
    let a = document.createElement('a');
    a.setAttribute('href', linkObj.url);
    a.setAttribute('target', '_blank');
    a.textContent = linkObj.title;
    return a;
}

getLinks()