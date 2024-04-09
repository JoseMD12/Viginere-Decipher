import { getIC } from "./indice-coincidencia.js";

export function getChave(data, ptIC, enIC) {
    var melhorDiffIC = 1;
    var melhorTamanhoChave = 0;
    var linguaPortuguesa = true;

    for (let i = 1; i < 20; i++) {
        let input = "";
        for (let j = 0; j < data.length; j += i) {
            input += data[j];
        }

        const ic = getIC(input);
        const diffEn = Math.abs(ic - enIC);
        const diffPt = Math.abs(ic - ptIC);

        if (diffEn < melhorDiffIC) {
            melhorDiffIC = diffEn;
            melhorTamanhoChave = i;
            linguaPortuguesa = false;
        } else if (diffPt < melhorDiffIC) {
            melhorDiffIC = diffPt;
            melhorTamanhoChave = i;
            linguaPortuguesa = true;
        }
    }

    return { tamanhoChave: melhorTamanhoChave, linguaPortuguesa };
}
