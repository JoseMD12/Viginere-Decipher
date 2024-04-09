# Trabalho da Cadeira de Segurança de Sistemas

Este é um trabalho desenvolvido para a disciplina de Segurança de Sistemas. O objetivo deste projeto é decifrar um texto cifrado usando o Índice de Coincidência para descobrir a chave utilizada para criptografar o texto.

## Funcionamento

O programa foi desenvolvido em JavaScript e utiliza o Índice de Coincidência para encontrar a chave de criptografia do texto cifrado. Após encontrar a chave, o texto é decifrado e exibido na saída padrão.

## Pré-requisitos

- Node.js
- npm (Node Package Manager)

Certifique-se de ter o npm instalado em seu sistema antes de executar o programa. Você pode baixar e instalar o Node.js em [nodejs.org](https://nodejs.org/).

## Execução

Para executar o programa, siga os passos abaixo:

1. Abra o terminal.
2. Navegue até o diretório onde o projeto está localizado.
3. Execute o seguinte comando:

<span style="font-size: 1.3em;">**`npm start <caminho do arquivo>`**</span>

Substitua `<caminho do arquivo>` pelo caminho do arquivo que contém o texto cifrado que deseja decifrar.

## Exemplo de Uso

Suponha que o arquivo cifrado esteja localizado em `./cifras/texto_cifrado.txt`, então você deve executar o seguinte comando:

**`npm start ./texto_cifrado.txt`**

Desenvolvido por José Dotta e Larissa Mazeron - 2024