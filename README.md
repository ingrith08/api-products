# api-products

Api para otener los productos de Mercado Libre

## Requisitos

- Node v12

## Ejecución

```
// solo la primera vez
npm install

// para levantar la api
npm run start
```

Con esto debe quedar lista la api sirviendo peticiones por el puerto `3000`

### get-products

Obtiene los productos de Mercado Libre para el cliente.

```http
GETs /offers
Content-Type: application/json
```

```json
{
  "q": "celular"
}
```

response:

```json

{
    "author": {
        "name": "Ingrhy",
        "lastname": "Hincapié"
    },
    "categories": [
        "MLA1055",
        "MLA1055",
        "MLA1055",
        "MLA1055"
    ],
    "items": [
        {
            "id": "MLA884250759",
            "title": "Samsung Galaxy A01 Core 16 Gb Negro 1 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 14999
            },
            "picture": "http://http2.mlstatic.com/D_814600-MLA43772081185_102020-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA896934976",
            "title": "Samsung Galaxy A51 128 Gb Prism Crush Black 4 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 47999
            },
            "picture": "http://http2.mlstatic.com/D_879201-MLA44443256851_122020-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA904399939",
            "title": "Nokia 23 M 32 Gb Gris Carbón 2 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 15999
            },
            "picture": "http://http2.mlstatic.com/D_828063-MLA44280741156_122020-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA911507129",
            "title": " Moto G9 Power 128 Gb Morado Sónico 4 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 32899
            },
            "picture": "http://http2.mlstatic.com/D_858095-MLA44880040600_022021-I.jpg",
            "condition": "new",
            "free_shipping": true
        }
    ]
}
```

### get-product

Obtiene el producto seleccionado por el cliente.

```http
GETs /offers
Content-Type: application/json
```

```json
{
  "id": "MLA884250759"
}
```

response:

```json

{
    "author": {
        "name": "Ingrhy",
        "lastname": "Hincapié"
    },
    "item": {
        "id": "MLA884250759",
        "title": "Samsung Galaxy A01 Core 16 Gb Negro 1 Gb Ram",
        "price": {
            "currency": "ARS",
            "amount": 14999,
            "decimals": 14999
        },
        "picture": "http://http2.mlstatic.com/D_814600-MLA43772081185_102020-O.jpg",
        "condition": "new",
        "free_shipping": true,
        "sold_quantity": 5000,
        "description": "Enfocate en lo importante\nEl novedoso sistema operativo Android 10 incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Además, incluye la función de Bienestar Digital y el Tema Oscuro, para que evites distracciones y logres una mayor concentración.\n\nExperiencia visual increíble\nMirá tus series y películas favoritas con la mejor definición a través de su pantalla PLS de 5.3\". Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.\n\nBatería para todo el día\nSu batería de 3000 mAh se adapta a tu ritmo de vida y te garantiza energía para toda una jornada con una sola carga.\n\nMomentos únicos, capturas reales\nCapturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 8 Mpx.\n\n Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas."
    }
}
```
