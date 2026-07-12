[README (1).md](https://github.com/user-attachments/files/29945555/README.1.md)
# 🏡 Recanto Roxo

Uma página feita em HTML/CSS/JS puro: uma casinha ao entardecer, cercada por um campo de **grama roxa** e um canteiro de **lírios**, tudo balançando com o vento. Tem até um controle para escolher a intensidade do vento (brisa / vento / vendaval).

Não usa nenhum framework nem processo de build — é só abrir e funciona.

## Arquivos

```
index.html   → estrutura da página
style.css    → todo o visual e as animações
script.js    → gera a grama, os lírios, as estrelas e os vaga-lumes, e liga o controle de vento
```

## Como abrir no seu computador

Basta dar duplo clique no arquivo `index.html` — ele abre direto no navegador, sem precisar de internet nem instalar nada (só a fonte é carregada online; se estiver offline, a página ainda funciona, só troca por uma fonte padrão).

## Como colocar no GitHub (e ter um link público)

1. Crie uma conta no [github.com](https://github.com) se ainda não tiver.
2. Crie um repositório novo (pode ser público), por exemplo `recanto-roxo`.
3. Envie os três arquivos (`index.html`, `style.css`, `script.js`) para esse repositório. Pode ser:
   - pelo site do GitHub, arrastando os arquivos na aba **Add file → Upload files**, ou
   - pelo terminal:
     ```bash
     git init
     git add .
     git commit -m "primeira versão do Recanto Roxo"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/recanto-roxo.git
     git push -u origin main
     ```
4. No repositório, vá em **Settings → Pages**.
5. Em "Source", escolha a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Espere cerca de 1 minuto e o GitHub vai te dar um link público, algo como:
   ```
   https://SEU-USUARIO.github.io/recanto-roxo/
   ```
   Esse link pode ser aberto em qualquer navegador, computador ou celular.

## Personalizar

- **Cores**: todas ficam no topo do `style.css`, dentro de `:root { ... }` — é só trocar os valores hexadecimais.
- **Quantidade de grama/lírios**: no `script.js`, procure por `const count = ...` dentro de `buildGrass()` e `buildLilies()`.
- **Texto do título**: dentro do `index.html`, na tag `<header class="title-card">`.
