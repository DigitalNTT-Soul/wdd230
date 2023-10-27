const visitCountSpan = document.getElementById('visit-counter')

let visitCount = JSON.parse(localStorage.getItem('visit-count')) || 0

visitCount++

localStorage.setItem('visit-count', visitCount)

visitCountSpan.textContent = visitCount