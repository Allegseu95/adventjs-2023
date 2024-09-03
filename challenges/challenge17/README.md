# Optimizar el alquiler

**Nivel:** **_Fácil_**

## Instrucciones

En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. Cada intervalo se representa como una matriz de dos elementos , donde el primer elemento es el inicio del alquiler y el segundo es el final.

Por ejemplo, la matriz [2, 7]representa un alquiler que comienza a las horas 2y termina a las horas 7. El problema es que a veces los intervalos se superponen entre sí, lo que hace que sea confuso determinar desde qué hora hasta qué hora se alquiló el trineo.

Se nos pide que, para simplificar la tarea de calcular el tiempo total de alquiler, escribamos una función que fusione todos los intervalos superpuestos y devuelva una matriz de intervalos ordenados :

## Ejemplos

```js
optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]); // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]); // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6],
]); // [[1, 2], [3, 4], [5, 6]]
```

Se puede suponer que el primer elemento de cada intervalo es siempre menor o igual que el segundo elemento , pero los intervalos no están necesariamente ordenados.

Los números de las horas pueden llegar hasta la cifra 9999.

## Soluciones

| #   | Solución   | Código                    |
| --- | ---------- | ------------------------- |
| 1   | Usando For | [Código](./solution01.js) |
