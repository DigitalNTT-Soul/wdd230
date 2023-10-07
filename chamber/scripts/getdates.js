function copyrightTagUpdate()
{
    const year = new Date().getFullYear()
    const element = document.getElementById('copyright-string')
    if (!element)
        return false
    element.innerHTML = `&copy;${year} ${element.innerHTML}`
}

function lastModifiedTagUpdate()
{
    const element = document.getElementById('last-modified-date')
    if (!element)
        return false
    element.innerHTML = `Page Last Modified ${document.lastModified}`
}

copyrightTagUpdate()
lastModifiedTagUpdate()