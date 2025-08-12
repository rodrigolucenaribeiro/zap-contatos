
# Zap Contatos – Vellozia (para Hostinger)

## Como publicar
1. Entre no hPanel (Hostinger) e abra o Gerenciador de Arquivos.
2. Crie uma pasta: `public_html/zap/` (ou qualquer caminho).
3. **Envie TODO o conteúdo deste ZIP** para essa pasta.
4. Acesse no celular: `https://SEU-DOMINIO/zap/`
5. Toque em **Adicionar à Tela Inicial** para instalar como app.

## Como atualizar os contatos
- Substitua o arquivo `data/contatos.json` (ele contém TODOS os contatos).
- Opcional: há arquivos por representante em `data/contatos-*.json`.
- No app, você pode escolher "Todos os representantes" ou filtrar por um específico.
- Para forçar atualização imediata, clique em **Atualizar** dentro do app.

## Formato do JSON
```json
[
  { "name": "Contato", "phone": "55DDDNUMERO", "url": "https://wa.me/55DDDNUM?text=...", "rep": "Nome do Representante", "message": "Mensagem (opcional)" }
]
```

## Observações
- Este app funciona offline (PWA) e abre o WhatsApp com a mensagem pronta (quando disponível).
- Os números são exibidos formatados, mas o link oficial usado é o `url` já pronto da sua planilha.
