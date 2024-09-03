# Despliegue del Viernes

**Nivel:** **_Fácil_**

## Instrucciones

Ayer alguien realizó una implementación en producción y la aplicación para armar árboles de Navidad se rompió. Nos pidieron que lo arreglemos lo antes posible.

El problema es que el formato de los árboles ha cambiado. Es una matriz de números ... ¡pero debería ser un objeto! Por ejemplo, el árbol: [3, 1, 0, 8, 12, null, 1]se ve así:

```js
//        3
//      /   \
//     1     0
//    / \     \
//   8  12     1
```

Lo que necesitamos es transformar la matriz en un objeto donde cada nodo del árbol tenga propiedades value, lefty .right

Por ejemplo, al ejecutar su transformTreefunción con [3, 1, 0, 8, 12, null, 1]debería devolver esto:

```js
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
```

El elfo de turno que intentó solucionar el problema antes de irse a casa, nos dejó algunas pistas:

- Si un nodo no tiene un valor, se representa con null. Por lo tanto, si un nodo tiene un nullvalor, no tendrá ningún hijo.
- El nodo raíz está en el índice 0de la matriz.
- Existe una relación entre el índice de un nodo y el índice de sus hijos. ¡Busca el patrón!

## Soluciones

| #   | Solución            | Código                    |
| --- | ------------------- | ------------------------- |
| 1   | Usando Recursividad | [Código](./solution01.js) |
