
# Website Mark01

## Visão Geral
Este projeto é uma aplicação web desenvolvida utilizando **aiohttp** para o backend, **Tailwind CSS** para estilização e templates **Jinja2**. É projetado especialmente para criação rápida e eficaz de websites institucionais e profissionais, com suporte integrado para envio automatizado de e-mails.

---

## Tecnologias

- **Backend:**
  - Python (3.12)
  - aiohttp (framework assíncrono)
  - aiohttp-jinja2 (Templates)
  - aiosmtplib (E-mail assíncrono)

- **Frontend:**
  - Tailwind CSS
  - HTML (Jinja2)

- **Ferramentas adicionais:**
  - Poetry
  - Docker
  - Bash scripts para automação

---

## Principais Funcionalidades

- Renderização de páginas rápidas e eficientes com templates Jinja2.
- Envio automatizado e assíncrono de e-mails via SMTP (`aiosmtplib`).
- Estrutura organizada e modular para fácil manutenção e expansão.
- Configuração simples via `.env`.
- Automatização da instalação e construção com scripts Bash.
- Construção de imagens Docker simplificada para produção.

---

## Estrutura do Projeto

```
website-mark01
├── src
│   ├── app
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   ├── settings.py
│   │   ├── utils.py
│   │   └── views.py
│   ├── static
│   │   ├── css
│   │   │   ├── input.css
│   │   │   ├── package.json
│   │   │   ├── package-lock.json
│   │   │   ├── styles.css
│   │   │   └── tailwind.config.js
│   │   ├──  js
│   │   │    └── home.js
│   ├── templates
│   │   ├── includes
│   │   │   └── hero.html
│   │   ├── base.html
│   │   ├── colors.html
│   │   └── home.html
│   ├── tailwindcss
│   └── main.py
├── build.sh
├── Dockerfile
├── entrypoint.sh
├── .sample.env
├── pyproject.toml
├── poetry.lock
└── README.md
```

---

## Configuração Inicial

### Instalação

Clone o repositório e acesse o diretório:
```bash
git clone <repo-url>
cd website-mark01
```

Instale dependências com Poetry:
```bash
poetry install
```

Copie o arquivo `.sample.env` para `.env` e preencha com seus dados:
```bash
cp .sample.env .env
```

---

## Execução Local

Rode a aplicação local com o script:
```bash
chmod +x build.sh entrypoint.sh
./build.sh
./entrypoint.sh
```

Ou diretamente via Poetry:
```bash
poetry run python src/main.py
```

---

## Construção e Deploy com Docker

### Construção da Imagem Docker

Preencha `DOCKER_USERNAME` e `DOCKER_IMAGENAME` no `.env`.

Construa a imagem Docker usando o script:
```bash
./build.sh
```

Para executar o contêiner:
```bash
docker run -p 8080:8080 <DOCKER_USERNAME>/<DOCKER_IMAGENAME>:latest
```

---

## Variáveis de Ambiente (Arquivo `.env`)

| Variável                 | Descrição                       |
|--------------------------|---------------------------------|
| `HOST`                   | Host do servidor web            |
| `PORT`                   | Porta do servidor web           |
| `ALLOWED_ORIGINS`        | Origens permitidas (CORS)       |
| `EMAIL_HOST`             | Host SMTP                       |
| `EMAIL_PORT`             | Porta SMTP                      |
| `EMAIL_USERNAME`         | Usuário SMTP                    |
| `EMAIL_PASSWORD`         | Senha SMTP                      |
| `EMAIL_USE_TLS`          | TLS (1 ativado, 0 desativado)   |
| `EMAIL_DEFAULT_SENDER`   | Remetente padrão dos e-mails    |
| `DOCKER_USERNAME`        | Nome do usuário Docker          |
| `DOCKER_IMAGENAME`       | Nome da imagem Docker           |
| `DOCKER_IMAGETAG`        | Tag da imagem Docker (latest)   |
| `BUILD`                  | Construção ativada (1 sim, 0 não)|
| `BUILD_TAILWINDCSS`      | TailwindCSS build (1 sim, 0 não)|
| `INSTALL`                | Instalação Python (1 sim, 0 não)|
| `PRODUCTION`             | Modo produção (Docker, 1 sim, 0 não)|

---

## Licença

Este projeto está sob a licença **Apache License 2.0**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autor

- **Vagner Bessa**
- Email: [bessavagner@gmail.com](mailto:bessavagner@gmail.com)

---

## Contribuições

Contribuições são bem-vindas. Abra uma issue ou envie um pull request com melhorias ou correções.
