# Airbnb Guest Guide — Arquitetura e Especificação

(arquivo conforme solicitado — versão completa)

## Objetivo
Criar guia interativo com mapa, categorias e links compartilháveis.

## Stack
- React + Vite
- Leaflet
- GitHub Pages

## Arquitetura
src/
- app/
- data/
- features/map/
- components/

## Config central
guideConfig.js controla tudo:
- property (apartamento)
- categories
- places

## Mapa
- Centralizado no apartamento
- Marker especial (diferente cor)
- Filtros por URL:
  - #/map?category=farmacias
  - #/map?tag=delivery

## Place
Cada ponto contém:
- nome
- coordenadas
- imagem
- descrição
- links (google/apple)

## Navegação externa
Google:
https://www.google.com/maps/search/?api=1&query=LAT,LNG

Apple:
https://maps.apple.com/?ll=LAT,LNG&q=NOME

## Popup
- imagem
- descrição
- botão “abrir no mapa”

## Deploy
- GitHub Pages
- base: '/airbnb/'

## MVP
- mapa funcional
- filtros
- popup com ação externa
