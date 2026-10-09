# Gestor Financeiro Pessoal

Aplicação web de gestão de finanças pessoais, desenvolvida
em etapas como projeto de aprendizado full-stack.

## Estado atual

Base inicial com Next.js, TypeScript strict e Tailwind CSS.
A página inicial já possui conteúdo em português e visual escuro.

As funcionalidades financeiras ainda não foram implementadas.

## Tecnologias atuais

- Next.js com App Router
- React
- TypeScript em modo strict
- Tailwind CSS
- ESLint

## Requisitos

- Node.js 24
- npm
- Git

Os comandos abaixo usam `npm.cmd` e `npx.cmd` para execução
no PowerShell do Windows.

## Instalação

Dentro da pasta do projeto, execute:

```powershell
npm.cmd ci
```

Esse comando instala as versões registradas no package-lock.json.

## Desenvolvimento

```powershell
npm.cmd run dev
```

Abra http://localhost:3000 no navegador.

Para parar o servidor, pressione Ctrl+C no terminal.

## Verificações

Verificar os tipos:

```powershell
npx.cmd tsc --noEmit
```

Verificar o código com ESLint:

```powershell
npm.cmd run lint
```

Gerar a versão de produção:

```powershell
npm.cmd run build
```

## Estrutura inicial

- src/app/page.tsx: página inicial.
- src/app/layout.tsx: estrutura compartilhada das páginas.
- src/app/globals.css: estilos globais e Tailwind.
- tsconfig.json: configuração do TypeScript.
- package.json: dependências e comandos do projeto.
- package-lock.json: versões das dependências.
