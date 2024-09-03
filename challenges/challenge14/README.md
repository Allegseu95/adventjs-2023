# Evitar la Alarma

**Nivel:** **_Medio_**

## Instrucciones

Con el auge de las redes sociales, Santa Claus está aterrorizado de que los niños puedan despertarse mientras él está entregando regalos en sus casas , usar su teléfono para grabarlo y volverse viral en TikTok.

Quiere evitarlo a toda costa. Cada casa de esa calle tiene una cantidad de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes , por lo que no puede dejar regalos en dos casas consecutivas , o se disparará la alarma y alertará a los niños.

Dado un conjunto de regalos que son números enteros no negativos y que representan la cantidad de regalos que hay en cada casa, tu tarea es ayudar a Papá Noel a determinar la cantidad máxima de regalos que puede entregar en una noche sin activar ninguna alarma.

## Ejemplos

```js
maxGifts([2, 4, 2]); // 4 (4)
maxGifts([5, 1, 1, 5]); // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]); // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]); // 103 (3 + 100)
```

## Soluciones

| #   | Solución   | Código                    |
| --- | ---------- | ------------------------- |
| 1   | Usando For | [Código](./solution01.js) |
