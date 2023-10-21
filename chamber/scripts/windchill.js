function getTemp()
{
    return Number(document.getElementById("local-temp").innerHTML)
}

function getWindSpeed()
{
    return Number(document.getElementById("wind-speed").innerHTML)
}

function calculateWindChill()
{
    let ta = getTemp()
    let v = getWindSpeed()
    let twc = document.getElementById("wind-chill")

    // never-nester early  in case of bad data return
    if (v <= 3 || ta > 50) return twc.innerHTML = "N/A"

    twc.innerHTML = 35.74 + (0.6215 * ta) - (35.75 * v ** 0.16) + (0.4275 * ta * v ** 0.16)  + "°F"
}

calculateWindChill()