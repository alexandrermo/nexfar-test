# TESTE FRONT-END NEXFAR

Alguns detalhes do sistema:

1. Foi implementado o carrinho em localStorage, portanto os produtos do carrinho continuarão salvos mesmo ao sair do sistema.

2. Ao clicar em `IR PARA PAGAMENTO` na tela do carrinho, a estrutura de dado do carrinho aparece no console em string e em objeto.

3. É possível segurar os botões `+` e `-` para adicionar produtos ao carrinho.

4. Responsividade testada até a resolução recomendada para noteboks com tela de 13 a 15 polegadas.(1280 x 800)

5. Para acessar a tela do carrinho é preciso clicar no carrinho que se encontra no header.

## DESAFIOS/PROBLEMAS

Um problema que preciso mencionar aqui foi o AdBlock começar a filtrar os arquivos da fonte do `icomoon`,
que é a fonte dos ícones; ou seja, todos os meus ícones bugaram. No começo, o AdBlock não deu este problema,
começou a dar depois de alguns dias que o programa já estava desenvolvido. Achei melhor tentar resolver esse problema
do que dizer para o usuário desativar o AdBlock.

Investigando o problema um pouco mais a fundo descobri que o AdBlock começou a fazer isso, porque o Webpack
colocava meus arquivos de font dentro do caminho `static/media`. Como fiz o programa utilizando o `Create React App`,
não tinha acesso direto às configurações do Webpack, porém com a ajuda dos módulos `customize-cra` e `react-app-rewired`
consegui adicionar uma configuração personalizada ao webpack, dizendo para colocar os arquivos de fontes no caminho
`static/fonts`.Deu certo, 1 x 0 contra o AdBlock.

A parte de adicionar, excluir ou alterar a quantidade dos produtos no carrinho também foi desafiadora, porque existem várias
propriedades que precisam ser alteradas quando isto acontece. Para facilitar, utilizei um `useReduce`, assim a lógica ficou dentro do reduce; a tela que chama o dispatch apenas diz a action que quer fazer no carrinho e o reduce cuida do resto.

## POSSÍVEIS MELHORIAS

1. Deixar a responsividade mais abrangente para telas menores, como de mobile.

2. Melhorar algun pontos do layout, como por exemplo os check-boxes.

3. Deixar as imagens dos produtos em cache, para melhorar a performance de carregamento.

4. Identificar partes do layout que podem ser os mesmos componentes para melhor manutenção do código.

5. Verificar o comportamento do sistema nos diferentes browsers.

## RODAR A APLICAÇÃO

1. Baixe o projeto localmente `git clone `.

2. Entre na pasta baixada e instale as dependências `npm install` ou `yarn`.

3. Rode o projeto `npm start` ou `yarn start`. Se a porta localhost:3000 estiver desocupada, o projeto irá rodar nela e automaticamente irá abri-lo no navegador.
