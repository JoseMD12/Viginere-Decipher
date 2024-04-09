import { getIC } from "./indice-coincidencia.js";

export function getChave(data, ptIC, enIC) {
    var melhorDiffIC = 1;
    var melhorTamanhoChave = 0;
    var isLinguaPortuguesa = true;

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
            isLinguaPortuguesa = false;
        } else if (diffPt < melhorDiffIC) {
            melhorDiffIC = diffPt;
            melhorTamanhoChave = i;
            isLinguaPortuguesa = true;
        }
    }

    return { tamanhoChave: melhorTamanhoChave, isLinguaPortuguesa };
}
