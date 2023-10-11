const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button?.addEventListener('click', function() {
    // I despise anonymous and arrow functions I strongly prefer explicit functions
    if (input?.value == '') {
        // According to most "never nesters", a gatekeepy "early return from negative
        //  logic path" method is cleaner than having the main body of the code live
        //  in blocks that are progressively more nested.
        return false;
    }

    const li = document.createElement('li');
    li.innerHTML = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    })

    input.value = '';
    input.focus();
});