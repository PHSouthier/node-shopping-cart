# 🛒 Shopping Cart CLI

Sistema de carrinho de compras desenvolvido em Node.js, executado via terminal, simulando o funcionamento básico de um e-commerce como a Shopee.

---

## 🎯 Sobre o projeto

Este projeto implementa um carrinho de compras onde o usuário pode adicionar, remover e visualizar produtos, além de calcular automaticamente o valor total da compra.

Toda a lógica é controlada no backend, sem interface gráfica, focando em organização de código e regras de negócio.

---

## ⚙️ Funcionalidades

- ➕ Adicionar itens ao carrinho  
- ➖ Remover quantidade de um item  
- ❌ Deletar item completamente  
- 📋 Listar itens do carrinho  
- 💰 Calcular total da compra  

---

## 🧠 Regras de negócio

- Cada item possui:
  - Nome
  - Preço
  - Quantidade
- O subtotal é calculado automaticamente (`preço × quantidade`)
- Ao remover um item:
  - Se quantidade > 1 → diminui 1 unidade  
  - Se quantidade = 1 → remove o item do carrinho  
- Não é possível remover itens inexistentes
