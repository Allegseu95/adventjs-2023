# ¡Primer Regalo Repetido!

 <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #4caf50;
        color: white;
        padding: 5px;
        width: 100px;
        gap: 5px;
        border-radius: 20px;
      "
    >
      <strong style="margin: 0; padding: 0">Nivel:</strong>
      <p style="margin: 0; padding: 0">Fácil</p>
</div>

## Instrucciones

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, **_donde la segunda ocurrencia tenga el índice más pequeño!_**

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

## Ejemplos

```js
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez
```

```js
const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número
```

```js
const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
```

**¡Ojo!** _Los elfos dicen que esto es una prueba técnica de Google._

## Soluciones

| #   | Solución      | Código                    |
| --- | ------------- | ------------------------- |
| 1   | Usando Filter | [Código](./solution01.js) |
| 2   | Usando Find   | [Código](./solution02.js) |
| 3   | Usando Set    | [Código](./solution03.js) |
| 4   | Usando Objeto | [Código](./solution04.js) |
