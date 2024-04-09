export function decifrarChave(data, tamanhoChave, ic) {
    var substrings = [];
    var chave = "";
    for (let i = 0; i < tamanhoChave; i++) {
        var sub = "";
        for (let j = i; j < data.length; j += tamanhoChave) {
            sub += data[j];
        }
        substrings.push(sub);
    }

    substrings.forEach(sub => {
        key += frequenciaCaracter(sub, ic)
    });
}
