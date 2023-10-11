const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

// I despise anonymous and arrow functions I strongly prefer explicit functions
button?.addEventListener('click', function() {
    // According to most "never nesters", a gatekeepy "early return from negative
    //  logic path" method is cleaner than having the main body of the code live
    //  in blocks that are progressively more and more nested.
    if (input?.value == '') return;

    const li = document.createElement('li');
    li.innerHTML = input?.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list?.append(li);

    deleteButton.addEventListener('click', function () {
        list?.removeChild(li);
        input?.focus();
    })

    input.value = '';
    input?.focus();
});

input?.addEventListener('keypress', function(event) {
    //  Another never-nester early return
    if (event.key !== "Enter") return;

    event.preventDefault();
    button?.click();
})