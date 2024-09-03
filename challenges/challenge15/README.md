# Robot Autónomo

**Nivel:** **_Medio_**

## Instrucciones

Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

Estamos creando una función a la que pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

El almacén se representa como una matriz de cadenas de texto , donde:

- . significa que hay un camino claro.
- \* significa que hay un obstáculo.
- ! es la posición inicial del robot.

Los movimientos son una matriz de cadenas de texto , donde:

- R mueve el robot una posición hacia la derecha.
- L mueve el robot una posición hacia la izquierda.
- U mueve el robot una posición hacia arriba.
- D mueve el robot una posición hacia abajo.

Hay que tener en cuenta que el robot no puede superar obstáculos ni los límites del almacén.

Dado un almacén y los movimientos, necesitamos devolver la matriz con la posición final del robot.

## Ejemplos

```js
const store = ['..!....', '...*.*.'];

const movements = ['R', 'R', 'D', 'L'];
const result = autonomousDrive(store, movements);
console.log(result);
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.
```

Tenga en cuenta que storees una matriz que puede tener un número de filas que va de 1 a 100 , ya que tenemos almacenes de todos los tamaños.

Tenga en cuenta también que el robot podría terminar en su posición inicial si no puede moverse o si está dando vueltas en círculos.

## Soluciones

| #   | Solución   | Código                    |
| --- | ---------- | ------------------------- |
| 1   | Usando For | [Código](./solution01.js) |
