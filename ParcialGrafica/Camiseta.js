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


    const equis = [cmToGLX(Cadera / 4, Cadera), cmToGLX(Cadera / 3, Cadera), cmToGLX(Cadera / 2, Cadera)]
    const ye = [cmToGLY(Largo), cmToGLY(Largo - 10), cmToGLY(Largo - 10)]

    const Cuello = []


    for (let i = 0; i <= 10; i++) {
        Cuello.push(deCasteljau(i / 10, equis))
        Cuello.push(deCasteljau(i / 10, ye))
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
        positions[i + 1] = positions[i + 1] + TrasY
    }
}
window.onload = programa;