# Conversor de Moedas API

Este é um projeto de estudo para criar uma API que converte valores entre diferentes moedas usando Python e Flask.

## O que faz

- Converte valores de uma moeda para outra
- Usa taxas de câmbio atualizadas

## Tecnologias

- Python
- Flask
- Requests (para obter taxas de câmbio)

## Como rodar

1. Clone o repositório:
    ```bash
    git clone https://github.com/nogueiraxt/conversorMoedasAPI.git
    ```

2. Entre na pasta do projeto:
    ```bash
    cd conversorMoedasAPI
    ```

3. (Opcional) Crie um ambiente virtual:
    ```bash
    python -m venv venv
    source venv/bin/activate  # No Windows use `venv\Scripts\activate`
    ```

4. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

5. Rode a aplicação:
    ```bash
    python app.py
    ```

## Como usar

A API terá dois endpoints principais:

- **/convert**: Converte um valor de uma moeda para outra. Exemplo de uso:
    ```bash
    curl -X GET "http://localhost:5000/convert?from=USD&to=EUR&amount=100"
    ```

- **/rates**: Retorna as taxas de câmbio atuais. Exemplo de uso:
    ```bash
    curl -X GET "http://localhost:5000/rates"
    ```

