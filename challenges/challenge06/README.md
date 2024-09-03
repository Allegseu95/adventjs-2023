# El Reno a Prueba

**Nivel:** **_Fácil_**

## Instrucciones

Los elfos están catalogando a los renos de Santa Claus 🦌 según la distancia que pueden viajar.

Para ello, disponen de una cadena de texto movementsdonde cada carácter representa la dirección del movimiento del reno:

- > \>= Se mueve hacia la derecha
- > <= Se mueve hacia la izquierda
- > \*= Puede moverse hacia adelante o hacia atrás

Por ejemplo, si el movimiento es >>\*<, va hacia la derecha dos veces, luego puede ir hacia la izquierda o hacia la derecha (lo que maximice la distancia final recorrida) y luego hacia la izquierda.

Los elfos quieren saber cuál es la distancia máxima que recorre el reno después de completar todos los movimientos.

En el ejemplo anterior, la distancia máxima que recorre el reno es 2 . Va hacia la derecha dos veces + 2, luego con el \* puede volver a ir hacia la derecha para maximizar la distancia + 1 y luego va hacia la izquierda -1.

Crea una maxDistancefunción que tome la cadena de texto movementsy devuelva la distancia máxima que el reno puede viajar en cualquier dirección :

## Ejemplos

```js
const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
```

Tenga en cuenta que no importa si es hacia la izquierda o hacia la derecha, la distancia es el valor absoluto de la distancia máxima recorrida al final de los movimientos .

## Soluciones

| #   | Solución                | Código                    |
| --- | ----------------------- | ------------------------- |
| 1   | Usando match y Math.abs | [Código](./solution01.js) |
| 2   | Usando Split y ForEach  | [Código](./solution02.js) |
| 3   | Usando match y Math.abs | [Código](./solution03.js) |
