import { lerArquivo } from "./ler-arquivo.js";
import { getIC } from "./indice-coincidencia.js";
import { getChave } from "./get-chave.js";

async function main() {
    const caminho = process.argv[2];

    if (!caminho) {
        throw new Error("Por favor, informe o caminho do arquivo a ser lido.");
    }

    const cifra = await lerArquivo(caminho);

    const pt = await lerArquivo("./texto/pt.txt");
    const en = await lerArquivo("./texto/en.txt");
    const ptIC = getIC(pt);
    const enIC = getIC(en);

    console.log("IC do texto em português:", ptIC);
    console.log("IC do texto em inglês:", enIC);

    const melhorChaveELingua = getChave(cifra, ptIC, enIC);

    console.log("Melhor tamanho de chave: ", melhorChaveELingua.tamanhoChave);
    console.log(
        "Língua: ",
        melhorChaveELingua.linguaPortuguesa ? "Português" : "Inglês"
    );
}

main();
