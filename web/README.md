
# 📘 Documentação de Testes Automatizados - WebDojo (Cypress)

## 📂 Estrutura do Projeto

```bash
cypress/
├── e2e/                    # Casos de teste automatizados
│
├── fixtures/               # Arquivos de massa de dados e fixtures
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
├── support/                # Suporte aos testes
│   ├── commands/           # Comandos customizados organizados por contexto
│   │   ├── consultancy_commands.js
│   │   ├── login_commands.js
│   │   └── commands.js
│   ├── e2e.js              # Suporte geral para e2e
│   └── utils.js            # Funções utilitárias
```

## 🚀 Executando a Aplicação WebDojo

Antes de rodar os testes, é necessário iniciar a aplicação localmente.

```bash
npm run dev
```

Isso inicia a aplicação WebDojo no modo de desenvolvimento, geralmente em `http://localhost:3000`.

---

## 🧪 Executando os Testes

### 📏 Ambiente Desktop

- Executar todos os testes em modo headless:
```bash
npm run test
```

- Abrir Cypress em modo interativo:
```bash
npm run test:ui
```

### 📱 Ambiente Mobile (Viewport Simulado)

- Executar todos os testes em viewport mobile (414x896):
```bash
npm run test:mobile
```

- Abrir Cypress com viewport mobile:
```bash
npm run test:ui:mobile
```

### 🔐 Testes de Login

- Executar apenas os testes de login:
```bash
npm run test:login
```

- Executar testes de login com viewport mobile:
```bash
npm run test:login:mobile
```

---

## 📦 Dependências e Ferramentas

- [Cypress](https://www.cypress.io/)
- [Serve](https://www.npmjs.com/package/serve) (para simular o `dist` da aplicação)

---

## 🧩 Organização dos Comandos

Os comandos customizados estão organizados para maior modularidade:

- `consultancy_commands.js`: comandos específicos relacionados à consultoria.
- `login_commands.js`: comandos de autenticação/login.
- `commands.js`: comandos genéricos reutilizáveis.

Esses arquivos são importados em `support/e2e.js` para que fiquem disponíveis globalmente durante os testes.

---

## 📁 Fixtures

- `cep.json`: Dados relacionados a busca de CEP.
- `consultancy.json`: Dados fictícios sobre consultorias.
- `document.pdf`: Arquivo PDF usado em testes de upload ou visualização.

---

## ✅ Boas Práticas

- Organize os testes por funcionalidade na pasta `e2e`.
- Reutilize comandos customizados para reduzir repetição.
- Utilize `fixtures` para manter dados de teste centralizados.
- Configure corretamente o `viewport` para testar em diferentes dispositivos.
