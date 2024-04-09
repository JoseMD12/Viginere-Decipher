import fs from "fs/promises";

export async function lerArquivo(caminho) {
    const texto = await fs.readFile(caminho, "utf8", (err, texto) => {
        if (err) {
            console.error("Erro ao ler o arquivo:", err);
            return;
        }

        return texto;
    });

    return texto;
}
