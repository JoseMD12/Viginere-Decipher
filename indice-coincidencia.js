export function getIC(texto) {
    let frequenciaLetras = new Array(26).fill(0);

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].match(/[a-zA-Z]/)) {
            frequenciaLetras[texto[i].toLowerCase().charCodeAt(0) - 97]++;
        }
    }

    let indiceCoincidencia = 0;
    let somatorio = 0;
    for (let i = 0; i < frequenciaLetras.length; i++) {
        somatorio += frequenciaLetras[i] * (frequenciaLetras[i] - 1);
    }
    indiceCoincidencia = somatorio / (texto.length * (texto.length - 1));
    return indiceCoincidencia;
}
