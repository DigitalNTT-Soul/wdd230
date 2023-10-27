const year = new Date().getFullYear()
const element = document.getElementById('copyright-string')
if (element) element.innerHTML = `&copy;${year} ${element.innerHTML}`