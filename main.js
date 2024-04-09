import { lerArquivo } from "./ler-arquivo.js";
import { getIC } from "./indice-coincidencia.js";
import { getChave } from "./get-chave.js";
import { decifrarChave } from "./decifrar-chave.js";
import { decifrar } from "./decifrar.js";
import fs from "fs";

async function main() {
    const caminho = process.argv[2];

    if (!caminho) {
        throw new Error("Por favor, informe o caminho do arquivo a ser lido.");
    }

    //> Lê o arquivo cifrado
    const cifra = await lerArquivo(caminho);

    //> Define o índice de coincidência para o português e inglês
    let ptIC = 0.07461538461538461;
    let enIC = 0.06653846153846153;
    console.log("IC Português:", ptIC);
    console.log("IC Inglês:", enIC);

    //> Calcula o melhor tamanho de chave e qual a provavel língua do texto
    const melhorChaveELingua = getChave(cifra, ptIC, enIC);
    console.log("Melhor tamanho de chave: ", melhorChaveELingua.tamanhoChave);
    console.log(
        "Língua: ",
        melhorChaveELingua.isLinguaPortuguesa ? "Português" : "Inglês"
    );

    //> Decifra a chave
    const chave = decifrarChave(
        cifra,
        melhorChaveELingua.tamanhoChave,
        melhorChaveELingua.isLinguaPortuguesa ? ptIC : enIC,
        melhorChaveELingua.isLinguaPortuguesa
    );
    console.log("Chave:", chave);

    //> Decifra o texto
    const textoDecifrado = decifrar(cifra, chave);
    const nomeArquivo = caminho.split("/")[2];
    fs.writeFile("./decifrado/" + nomeArquivo, textoDecifrado, (err) => {
        if (err) throw err;
        console.log(
            "Arquivo " + nomeArquivo + " criado com sucesso em ./decifrado."
        );
    });
}

main();
