const letrasIngles = {
    a: 0.08167,
    b: 0.01492,
    c: 0.02782,
    d: 0.04253,
    e: 0.12702,
    f: 0.02228,
    g: 0.02015,
    h: 0.06094,
    i: 0.06966,
    j: 0.00153,
    k: 0.00772,
    l: 0.04025,
    m: 0.02406,
    n: 0.06749,
    o: 0.07507,
    p: 0.01929,
    q: 0.00095,
    r: 0.05987,
    s: 0.06327,
    t: 0.09056,
    u: 0.02758,
    v: 0.00978,
    w: 0.0236,
    x: 0.0015,
    y: 0.01974,
    z: 0.00074,
};

const letrasPortugues = {
    a: 0.1463,
    b: 0.0104,
    c: 0.0388,
    d: 0.0499,
    e: 0.1257,
    f: 0.0102,
    g: 0.013,
    h: 0.0128,
    i: 0.0618,
    j: 0.004,
    k: 0.002,
    l: 0.0278,
    m: 0.0474,
    n: 0.0505,
    o: 0.1073,
    p: 0.0252,
    q: 0.012,
    r: 0.0653,
    s: 0.0781,
    t: 0.0434,
    u: 0.0463,
    v: 0.0167,
    w: 0.001,
    x: 0.0021,
    y: 0.0001,
    z: 0.0047,
};

export function frequenciaCaracter(texto, ic, isLinguaPortuguesa) {
    const probabilidadeLingua = isLinguaPortuguesa
        ? letrasPortugues
        : letrasIngles;
    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
    const frequenciaCaracteres = {};

    for (let letra of alfabeto) {
        let n = texto.split(letra).length - 1;
        frequenciaCaracteres.set(letra, n);
    }

    let minQui2 = Infinity;
    let menorQuiQuadrado = Infinity;
    let letraChave = "";

    for (let i = alfabeto.length - 1; i >= 0; i--) {
        let quiQuadrado = 0;
        for (let [key, valor] of Object.entries(probabilidadeLingua)) {
            let novoIndex = alfabeto.indexOf(key) + i;
            if (novoIndex > 25) novoIndex -= 26;
            let letra = frequenciaCaracteres.get(alfabeto[novoIndex]);
            if (letra !== undefined) {
                let frequenciaLetra = letra;
                let frequenciaEsperada = valor * texto.length;
                quiQuadrado +=
                    Math.pow(frequenciaLetra - frequenciaEsperada, 2) /
                    frequenciaEsperada;
            }
        }
    }

    return letraChave;

    console.log(frequenciaCaracteres);
}
