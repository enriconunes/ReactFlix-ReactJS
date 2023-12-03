# Aplicação ReactFlix

## Descrição

A aplicação ReactFlix foi desenvolvida utilizando ReactJS com o objetivo de consumir a API "https://api.themoviedb.org/3". O principal propósito da aplicação é listar os últimos filmes lançados, permitindo aos usuários visualizar detalhes de cada filme e adicionar filmes à lista de favoritos, que é armazenada localmente no localStorage. Além disso, a aplicação é totalmente responsiva, garantindo uma experiência consistente em diferentes dispositivos através de classes TailwindCSS.

## Funcionalidades

### 1. Listagem dos Últimos Lançamentos

A página inicial da aplicação exibe uma lista dos últimos filmes lançados, obtidos através da API do The Movie Database. Cada filme é apresentado com informações básicas, como título, descrição e imagem.

### 2. Detalhes do Filme

Ao clicar em um filme na lista, os usuários são redirecionados para uma página de detalhes do filme. Essa página exibe informações mais detalhadas sobre o filme, como sinopse, produtora e avaliações.

### 3. Favoritos

Os usuários têm a opção de adicionar filmes à lista de favoritos. Essa lista é armazenada localmente no localStorage, garantindo que os filmes favoritos permaneçam mesmo após o fechamento do navegador.

### 4. Responsividade

A aplicação foi desenvolvida com foco na responsividade, proporcionando uma experiência de usuário otimizada em dispositivos desktop e móveis.

## Bibliotecas Utilizadas

1. **tailwindcss: ^3.3.5**
   - Utilizada para desenvolver todo o front-end da aplicação.

2. **axios: ^1.6.2**
   - Utilizada para realizar requisições HTTP à API do The Movie Database.

3. **react-toastify: ^9.1.3**
   - Utilizada para exibir notificações, como feedback ao usuário sobre a adição de um filme aos favoritos.

4. **react-router-dom: ^6.20.0**
   - Utilizada para gerenciar a navegação entre as diferentes páginas da aplicação.

## Telas

### Tela Inicial para Desktop

![Tela Inicial para Desktop](https://github.com/enriconunes/ReactFlix-ReactJS/blob/main/screenshot/screen1.PNG?raw=true)

### Tela do Filme para Mobile

![Tela do Filme para Mobile](https://github.com/enriconunes/ReactFlix-ReactJS/blob/main/screenshot/screen2.PNG?raw=true)

### Tela de Favoritos para Desktop

![Tela de Favoritos para Desktop](https://github.com/enriconunes/ReactFlix-ReactJS/blob/main/screenshot/screen3.PNG?raw=true)
