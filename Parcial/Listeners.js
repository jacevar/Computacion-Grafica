document.getElementById("Escala").addEventListener("change", (e) => {
    Escala = e.target.value / 1
    document.getElementById("Escala-label").innerHTML = e.target.value
    positions = []
    programa()
})

document.getElementById("Largo").addEventListener("change", (e) => {
    Largo = e.target.value / 1
    document.getElementById("Largo-label").innerHTML = e.target.value
    positions = []
    programa()
})

document.getElementById("Espalda").addEventListener("change", (e) => {
    Espalda = e.target.value / 1
    Manga = Espalda / 3
    document.getElementById("Espalda-label").innerHTML = e.target.value
    positions = []
    programa()
})

document.getElementById("Ancho").addEventListener("change", (e) => {
    Ancho = e.target.value / 1
    document.getElementById("Ancho-label").innerHTML = e.target.value
    positions = []
    programa()
})

document.getElementById("Cadera").addEventListener("change", (e) => {
    Cadera = e.target.value / 1
    document.getElementById("Cadera-label").innerHTML = e.target.value
    positions = []
    programa()
})

document.getElementById("Rotar").addEventListener("change", (e) => {
    Rotar = -e.target.value * Math.PI / 180
    document.getElementById("Rotar-label").innerHTML = e.target.value
    positions = []
    programa()
})

document.getElementById("TrasX").addEventListener("change", (e) => {
    TrasX = parseFloat(e.target.value)
    document.getElementById("TrasX-label").innerHTML = e.target.value
    positions = []
    programa()
})
document.getElementById("TrasY").addEventListener("change", (e) => {
    TrasY = parseFloat(e.target.value)
    document.getElementById("TrasY-label").innerHTML = e.target.value
    positions = []
    programa()
})

