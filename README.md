# WebMap com Flask 🌍

Um sistema de controle de acesso para WebMap usando Flask, SQLite e Flask-Login. Projeto open-source para a comunidade de geotecnologias.

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Flask](https://img.shields.io/badge/Flask-2.0%2B-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Tecnologias Utilizadas 🛠️

- ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
- ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
- ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
- ![QGIS](https://img.shields.io/badge/QGIS-589632?style=for-the-badge&logo=qgis&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## Sobre o Projeto 📖

O **WebMap com Flask** é um projeto open-source que visa fornecer uma base sólida para a criação de sistemas de mapas web com controle de acesso. Ele é especialmente útil para a comunidade de geotecnologias, oferecendo:

- Autenticação de usuários com Flask-Login.
- Integração com mapas gerados pelo QGIS.
- Painel de administração para gerenciamento de usuários.
- Página de metadados para detalhamento dos dados.

Este projeto foi criado para ser um ponto de partida para desenvolvedores que desejam construir aplicações mais robustas na área de geotecnologias.

## Como Usar 🛠️

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/EloizioHMD/webmap-flask.git
   cd webmap-flask
   ```

2. **Configure o ambiente**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # No Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Execute o projeto**:
   ```bash
   python run.py
   ```

4. **Acesse a aplicação**:
   Abra o navegador e acesse `http://localhost:5000`.

## Como Contribuir 🤝

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

Veja o [guia de contribuição](CONTRIBUTING.md) para mais detalhes.

## Licença 📜

Este projeto está licenciado sob a [MIT License](LICENSE).

## Links Úteis 🔗

- [Documentação do Projeto](https://github.com/EloizioHMD/webmap-flask/blob/main/documentacao.md)
- [Documentação do Flask](https://flask.palletsprojects.com/)
- [Documentação do QGIS](https://qgis.org/en/docs/)
- [Reportar um Bug](https://github.com/EloizioHMD/webmap-flask/issues)
