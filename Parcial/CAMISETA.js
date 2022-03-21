let positions = [];
let Espalda = 70
let Ancho = 60
let Cadera = 60
let Largo = 78
let Rotar = 0
let Escala = 1
let TrasX = 0
let TrasY = 0

const programa = () => {
    const drawing = program("miWebGl");

    // x en cm, aux es cadera o ancho o espalda
    // se centra / 2 y se divide en largo para ajustarlo la entrada a gl
    function cmToGLX(x, aux) {
        return (x - aux / 2) / 78
    }
    // y en cm 
    // se centra / 2 y se divide en largo para ajustarlo la entrada a gl
    function cmToGLY(y) {
        return (y - Largo / 2) / 78
    }

    const CaderaCoor = [cmToGLX(Cadera / 2, Cadera), cmToGLY(0), cmToGLX(0, Cadera), cmToGLY(0)]
    const AnchoCoor = [cmToGLX(0, Ancho), cmToGLY((Largo * 2) / 3)]
    const MangasCoor = [cmToGLX(-8, Ancho), cmToGLY(((Largo * 2) / 3) - 10), cmToGLX(-15, Ancho), cmToGLY(Largo - 20)]
    const EspaldaCoor = [cmToGLX(0, Espalda), cmToGLY(Largo - 5), cmToGLX(Cadera / 4, Cadera), cmToGLY(Largo)]


    const equisita = [cmToGLX(Cadera / 4, Cadera), cmToGLX(Cadera / 3, Cadera), cmToGLX(Cadera / 2, Cadera)]
    const yesita = [cmToGLY(Largo), cmToGLY(Largo - 10), cmToGLY(Largo - 10)]

    const Cuello = []


    for (let i = 0; i <= 10; i++) {
        Cuello.push(deCasteljau(i / 10, equisita))
        Cuello.push(deCasteljau(i / 10, yesita))
    }

    positions = [...CaderaCoor, ...AnchoCoor, ...MangasCoor, ...EspaldaCoor, ...Cuello]

    const Espejo = []


    for (let ii = positions.length - 1; ii > 0; ii = ii - 2) {
        Espejo.push((-positions[ii - 1]))
        Espejo.push(positions[ii])
    }

    positions.push(...Espejo)

    escalar(positions)
    rotate(positions)
    translation(positions)

    drawing(positions)

    console.log(positions)

}

function escalar(positions) {
    for (let i = 0; i < positions.length; i++) {
        positions[i] = positions[i] * Escala
    }
}


function rotate(positions) {
    for (i = 0; i <= positions.length - 1; i = i + 2) {
        const aux = positions[i] * math.cos(Rotar) - positions[i + 1] * math.sin(Rotar)
        positions[i + 1] = positions[i] * math.sin(Rotar) + positions[i + 1] * math.cos(Rotar)
        positions[i] = aux
    }
}

function translation(positions) {
    for (i = 0; i <= positions.length - 1; i = i + 2) {
        positions[i] = positions[i] + TrasX
        positions[i+1] =  positions[i+1] + TrasY
    }
}




window.onload = programa;

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