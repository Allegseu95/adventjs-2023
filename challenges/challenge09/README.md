# Encender las luces

**Nivel:** **_Fácil_**

## Instrucciones

Están encendiendo las luces navideñas 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢. Para que el efecto sea el adecuado, deben alternarse siempre . Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLightsque, dada una matriz de cadenas con el color de cada luz, devuelva el número mínimo de luces que deben cambiarse para que los colores se alternen.

## Ejemplos

```js
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']);
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']);
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']);
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴']);
// -> 1 (you change the second light to 🟢)
```

## Soluciones

| #   | Solución   | Código                    |
| --- | ---------- | ------------------------- |
| 1   | Usando For | [Código](./solution01.js) |
