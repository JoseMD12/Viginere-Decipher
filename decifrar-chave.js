import { frequenciaCaracter } from "./frequencia-caracter.js";

export function decifrarChave(data, tamanhoChave, ic, isLinguaPortuguesa) {
    var substrings = [];
    var chave = "";
    for (let i = 0; i < tamanhoChave; i++) {
        var sub = "";
        for (let j = i; j < data.length; j += tamanhoChave) {
            sub += data[j];
        }
        substrings.push(sub);
    }

    substrings.forEach((sub) => {
        chave += frequenciaCaracter(sub, ic, isLinguaPortuguesa);
    });

    let subs = chave.substring(0, Math.floor(chave.length / 2));
    let reg = new RegExp(subs);
    let iter = chave.matchAll(reg);
    let vec = [];
    for (const match of iter) {
        vec.push(match[0]);
    }
    let count = vec.length;
    if (count > 0) {
        chave = subs;
    }

    return chave;
}
