const rangevalue = document.getElementById("rangevalue");
const page_rating = document.getElementById("page-rating");

page_rating.addEventListener('change', displayRatingValue);
page_rating.addEventListener('input',  displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = page_rating.value;
}

const pw1 = document.getElementById("password");
const pw2 = document.getElementById("password-confirm");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pw1.value == pw2.value) return

    pw2.value = "";
    pw2.placeholder = "!Key Phrases DO NOT MATCH!";
}