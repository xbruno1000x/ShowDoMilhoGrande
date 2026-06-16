# 🌽 Show do Milho Grande

Um jogo de perguntas e respostas inspirado no clássico **Show do Milhão**, criado para auxiliar nos estudos de qualquer disciplina.

Antes de iniciar a partida, o jogador pode escolher uma ou mais categorias de interesse e testar seus conhecimentos respondendo até **17 perguntas** para alcançar o prêmio máximo e se tornar o grande mestre da espiga.

O conteúdo do jogo é totalmente personalizável através do arquivo `perguntas.md`, permitindo adicionar questões de matérias como Matemática, História, Geografia, Programação, Redes, Biologia, Idiomas ou qualquer outro tema.

## 🎮 Funcionalidades

* Sistema de quiz com perguntas embaralhadas
* Seleção de categorias antes do início da partida
* Suporte a múltiplas disciplinas e áreas de estudo
* Banco de questões totalmente personalizável
* Escada de premiações progressiva
* Sistema de ajudas:

  * 🎓 Universitários
  * 🃏 Eliminar 2 alternativas
  * 👥 Ajuda da Plateia
* Efeitos sonoros utilizando Web Audio API
* Interface responsiva para desktop e dispositivos móveis
* Sistema de marcos de segurança (prêmios garantidos)
* Feedback visual para respostas corretas e incorretas
* Animações e visual temático inspirado em programas de auditório

## 📁 Estrutura do Projeto

```text
/
├── index.html
├── perguntas.md
├── README.md
└── LICENSE
```

### Arquivos

| Arquivo        | Descrição                                  |
| -------------- | ------------------------------------------ |
| `index.html`   | Aplicação principal do jogo                |
| `perguntas.md` | Banco de perguntas carregado dinamicamente |
| `README.md`    | Documentação do projeto                    |
| `LICENSE`      | Licença do projeto                         |

## 🚀 Como Executar

### Opção 1 — Abrir diretamente

Basta abrir o arquivo `index.html` em um navegador moderno.

### Opção 2 — Servidor Local (Recomendado)

Com Python:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

Ou utilize a extensão **Live Server** do VS Code.

## 🧠 Banco de Perguntas

O jogo carrega perguntas a partir do arquivo:

```javascript
perguntas.md
```

Você pode alimentar esse arquivo com questões de qualquer disciplina ou categoria desejada.

Cada pergunta deve seguir a estrutura esperada pelo sistema:

```javascript
{
  categoria: "Redes",
  q: "Qual protocolo é utilizado para páginas web?",
  opts: ["HTTP", "FTP", "SMTP", "SNMP"],
  correct: 0
}
```

### Exemplos de Categorias

* Matemática
* Português
* História
* Geografia
* Física
* Química
* Biologia
* Programação
* Redes
* Inglês
* Conhecimentos Gerais

## 🏆 Sistema de Premiação

O jogador sobe na escada de prêmios conforme acerta as perguntas.

Premiação máxima:

```text
R$ 1.000.000 🌽🌽🌽
```

Existem marcos de segurança onde o prêmio fica garantido mesmo após um erro.

## 🎨 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla
* Bootstrap 5.3
* Web Audio API
* Google Fonts

## 📱 Compatibilidade

Testado em navegadores modernos:

* Google Chrome
* Microsoft Edge
* Firefox
* Brave

## 📜 Licença

Este projeto está distribuído sob a licença definida no arquivo `LICENSE`.

---

Desenvolvido com 🌽 para aprendizado, revisão de conteúdos e diversão.
