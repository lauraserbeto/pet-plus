<p align="center">
  <img src=".\public\logo1.png" alt="Logo Pet+" width="180"/>
</p>

<p align="center"><i>Tudo que seu pet precisa em um só lugar!</i></p>

---

## 🚀 Sobre o Projeto

O **Pet+** é uma plataforma digital que conecta **tutores de animais** a **estabelecimentos e prestadores de serviços do setor pet**, como petshops, hotéis e cuidadores.  
Seu objetivo é centralizar serviços, produtos e agendamentos em um único ambiente digital — prático, intuitivo e seguro.

> 💡 Além de facilitar o dia a dia dos tutores, o Pet+ impulsiona pequenos negócios, oferecendo visibilidade e ferramentas de gestão.

---

## 🧩 Funcionalidades Principais

### 👩‍💻 Para Tutores
- Cadastro de usuário e de pets  
- Busca e filtro de serviços e estabelecimentos  
- Agendamento online  
- Compra de produtos e acompanhamento de pedidos  
- Avaliação de serviços e interação com fornecedores  

### 🏪 Para Fornecedores
- Painel de controle para cadastro e gestão de serviços  
- Controle de estoque e promoções  
- Gerenciamento de horários e reservas  
- Interação com clientes via chat e notificações  

---

## 🧱 Arquitetura do Sistema

O Pet+ foi projetado com **arquitetura em três camadas**, seguindo boas práticas de escalabilidade e manutenção:

### 🖥️ Frontend
- **Next.js** — interface web moderna e responsiva (Landing Page e Painel)  
- **React Native / Expo** — versão mobile multiplataforma  
- **Tailwind CSS** — design clean, responsivo e consistente  

### ⚙️ Backend
- **Node.js (NestJS)** — API REST modular e performática  
- **Autenticação JWT**, **validação de agendamentos** e **gestão de pedidos**

### 🗄️ Banco de Dados
- **MySQL / SQLite** — modelo relacional normalizado  
- **Redis** (futuro uso) — cache para otimização de desempenho  

---

## 🧠 Módulos Principais

- **Autenticação:** acessos diferenciados entre tutores e fornecedores  
- **Agendamento:** controle de horários e notificações automáticas  
- **Produtos:** catálogo com promoções e gestão de estoque  
- **Recomendação:** sugestões personalizadas com base no histórico do pet  
- **Carrinho Integrado:** combinação de produtos e serviços em um só pedido  

---

## 🧪 Pesquisa e Validação

O desenvolvimento do Pet+ foi guiado por pesquisas com **tutores** e **fornecedores**, que identificaram:
- Grande interesse em plataformas integradas para pets 🐶🐱  
- Dificuldade de gerenciar agendamentos e estoque nos pequenos negócios  
- Preferência por recursos como **avaliações, promoções e agendamentos online**

Os testes de usabilidade do protótipo mostraram **aceitação de mais de 80%** dos usuários, confirmando a relevância do sistema.

---

## 🎨 Protótipo de Alta Fidelidade (UI/UX)

<p align="center">
  <a href="https://www.figma.com/proto/G8qbsW8zYlq9DCMgZM5Exj/Pet-?node-id=0-1&t=ZP69Waamw28XIBhT-1">
    🔗 Clique aqui para acessar o protótipo navegável no Figma
  </a>
</p>

---

## 🌐 Links Oficiais

- 📄 **Landing Page:** [https://pet-plus-rouge.vercel.app/](https://pet-plus-rouge.vercel.app/)  
- 🎨 **Protótipo no Figma:** [Pet+ no Figma](https://www.figma.com/proto/G8qbsW8zYlq9DCMgZM5Exj/Pet-?node-id=0-1&t=ZP69Waamw28XIBhT-1)  
- 💾 **Repositório GitHub:** [github.com/lauraserbeto/pet-plus](https://github.com/lauraserbeto/pet-plus)

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| Frontend | Next.js, React Native, Tailwind CSS |
| Backend | Node.js, NestJS |
| Banco de Dados | MySQL / SQLite |
| Design | Figma |
| Controle de Versão | Git & GitHub |

---

## 🧭 Guia de Execução

* Clone o repositório e execute localmente:

```bash
# Clone o projeto
git clone https://github.com/lauraserbeto/pet-plus.git

# Acesse a pasta
cd pet-plus

# Instale as dependências
npm install

# Rode o servidor local
npm run dev
```

* Configurando o Backend (API)

```bash
# Navegue até a pasta do backend (ex: /backend)
cd backend

# Instale as dependências
npm install

# (Opcional) Crie um arquivo .env para variáveis de ambiente
# Ex: PORTA=3001, DATABASE_URL=...

# Inicie o servidor backend
npm run dev
```

* Configurando o Frontend (Web)

```bash
# Em um NOVO terminal, navegue até a pasta do frontend (ex: /frontend)
cd frontend

# Instale as dependências
npm install

# (Opcional) Crie um arquivo .env.local para variáveis de ambiente
# Você precisará apontar para a URL da sua API local
# Ex: NEXT_PUBLIC_API_URL=http://localhost:3001

# Inicie o servidor frontend
npm run dev
```

---

## 🐕 Conclusão
<p>O Pet+ representa um ecossistema digital completo para o setor pet, unindo conveniência, tecnologia e propósito.
Mais do que uma aplicação, o projeto busca conectar pessoas e negócios em torno do cuidado e bem-estar animal. 💛</p>
