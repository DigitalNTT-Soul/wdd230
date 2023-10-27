const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

let chaptersArray = getChapterList() || [];

for (let chapter of chaptersArray) displayList(chapter)

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapterList'))
}

function setChapterList(chaptersArray) {
    localStorage.setItem('chapterList', JSON.stringify(chaptersArray))
}

function displayList(item) {
    const li = document.createElement('li')
    li.innerHTML = item

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '❌'

    li.append(deleteButton)
    list?.append(li)

    deleteButton.addEventListener('click', function() {
        deleteChapter(li)
    })
}

function deleteChapter(item) {
    let removeStr = item.textContent.slice(0, item.textContent.length - 1)

    chaptersArray = chaptersArray.filter((entry) => entry !== removeStr);

    setChapterList(chaptersArray)

    list.removeChild(item)
    input.focus()
}

function addEntry() {
    // never nester early return
    if (!input.value) return false

    displayList(input.value)

    chaptersArray.push(input.value)
    setChapterList(chaptersArray)

    input.value = ''
    input.focus()
}

button.addEventListener('click', addEntry)

input.addEventListener('keypress', function() {
    // another never-nester early return
    if (event.key !== "Enter") return;

    event.preventDefault()
    addEntry()
})