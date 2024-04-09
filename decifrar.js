export function decifrar(texto, chave) {
    let decifrado = "";
    let chaveIndex = 0;
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < texto.length; i++) {
        let novoIndex =
            alfabeto.indexOf(texto[i]) - alfabeto.indexOf(chave[chaveIndex]);
        if (novoIndex < 0) {
            novoIndex += 26;
        }
        decifrado += alfabeto[novoIndex];
        chaveIndex = (chaveIndex + 1) % chave.length;
    }

    return decifrado;
}
