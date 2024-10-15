
# OneBitFlix

## 📃 Descrição

Projeto final do curso Programador Full-Stack Javascript Profisional da escola de programação OneBitCode. O projeto é um clone da Netflix para cursos EAD em vídeo. Esse repositório representa apenas a parte do front-end do projeto, para conhecer a parte de back-end acesse: [OneBitFlix - Back-End](https://github.com/PedroEugenioDev/onebitflix_back-end)

## 📦 Tech Stack

**Tecnologias de Front-end:** HTML, SCSS, typescript, React, Bootstrap (Reactstrap) and Next.

## 🔑 Funcionalidades

- Landing page para promoção do sistemas de ensino EAD com componentes de slides para divulgação dos cursos
- Página de registro
- Página de login
- Autenticação de usuário com JWT
- Páginas autenticadas:
    - Cabeçalho customizado com dados do usuário e componente Toast para menu de usuário    
    - Homepage do usuário como seção de destaque e slides de divulgação de cursos
    - Página de perfil de usuário para atualização de dados e senha, com renderização condicional dos formulários
    - Página de cursos com listágem de episódios
    - Página de episódios com streaming de vídeo protegido
    - Página de buscas com resultados dispostos em grid 
- Integração com Back-end através de services
- Responsividade em todos as páginas para diverentes tamanhpos de tela

## 💭 Processo

- Criação do projeto Next.js, instalação da dependencias de projeto e de desenvolvimento e organização de diretórios
- Todas as páginas desenvolvidas seguiam o seguinte padrão de desenvolvimento:
    - Criação de um ou mais services para interação com o back-end via API
    - Criação dos componentes (eram criados novos componentes, caso já não houvesse um componente reaproveitável)
    - Estruturação da página e uso dos componentes
    - Estilização da página e ajustes de responsividade
- Essas etapas foram feitos em todas as páginas na seguinte ordem:
    - Landing page
    - Home Page autenticada
    - Página de Registro
    - Página de Login
    - Página de perfil do usuário
    - Página de busca
    - página individual de curso
    - página individual de episódio          

## 📚 Aprendizado

- O projeto permitiu aplicar e reforçar os conhecimentos sobre Typescript, HTML, SCSS, Bootstrap e Next aprendidos ao longo do curso.
- O projeto também foi uma oportunidade de aprender as seguintes tecnologias: 
    - Reactstrap
    - Autenticação JWT
    - Componentes do React: React Player, Spinner
    - Splide.js
    - Axios para consumo de API
    - AOS para animações
    - Streaming de dados


## 🚦 Executando o projeto

```bash
  git clone https://github.com/PedroEugenioDev/onebitflix_front-end.git
  cd /onebitflix_front-end
  npm run dev
```


## 📸 Videos e Imagens

### Desktop

<p align="center"><em>Landing Page & Home Page</em></p>
<div align="center">
    <img src="/assets/homepage.png" alt="" title="Landing Page" align="top" width="480px" hspace="10">
    <img src="/assets/homepage_auth.png" alt="" title="Homepage" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Página de registro e Página de Login</em></p>
<div align="center">
    <img src="/assets/register.png" alt="" title="Landing Page" align="top" width="480px" hspace="10">
    <img src="/assets/login.png" alt="" title="Homepage" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Páginas de perfil do usuário</em></p>
<div align="center">
    <img src="/assets/profile_data.png" alt="" title="Landing Page" align="top" width="480px" hspace="10">
    <img src="/assets/profile_password.png" alt="" title="Homepage" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Página de curso & Página de episódio</em></p>
<div align="center">
    <img src="/assets/course.png" alt="" title="Landing Page" align="top" width="480px" hspace="10">
    <img src="/assets/episode.png" alt="" title="Homepage" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Página de resultado de busca</em></p>
<div align="center">
    <img src="/assets/search.png" alt="" title="Landing Page" align="top" width="480px" hspace="10">
</div>

### Mobile

<p align="center"><em>Landing Page & Home Page</em></p>
<div align="center">
    <img src="/assets/homepage_mobile.png" alt="" title="Landing Page" align="top" width="400px" hspace="10">
    <img src="/assets/homepage_auth_mobile.png" alt="" title="Homepage" align="top"  width="400px" hspace="10">
</div>
<br>
<p align="center"><em>Página de registro e Página de Login</em></p>
<div align="center">
    <img src="/assets/register_mobile.png" alt="" title="Landing Page" align="top" width="400px" hspace="10">
    <img src="/assets/login_mobile.png" alt="" title="Homepage" align="top"  width="400px" hspace="10">
</div>
<br>
<p align="center"><em>Páginas de perfil do usuário</em></p>
<div align="center">
    <img src="/assets/profile_data_mobile.png" alt="" title="Landing Page" align="top" width="400px" hspace="10">
    <img src="/assets/profile_password_mobile.png" alt="" title="Homepage" align="top"  width="400px" hspace="10">
</div>
<br>
<p align="center"><em>Página de curso & Página de episódio</em></p>
<div align="center">
    <img src="/assets/course_mobile.png" alt="" title="Landing Page" align="top" width="400px" hspace="10">
    <img src="/assets/episode_mobile.png" alt="" title="Homepage" align="top"  width="400px" hspace="10">
</div>
<br>
<p align="center"><em>Página de resultado de busca</em></p>
<div align="center">
    <img src="/assets/search_mobile.png" alt="" title="Landing Page" align="top" width="400px" hspace="10">
</div>
