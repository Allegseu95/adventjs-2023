# Los elfos estudiosos

**Nivel:** **_Medio_**

## Instrucciones

En el taller de Papá Noel, a los elfos les encantan los rompecabezas 🧠. Este año, han creado uno especial: un reto para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual de adelante hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como máximo, un intercambio de letras.

Crea una función getIndexsForPalindromeque recibe una cadena y devuelve:

- Si ya es un palíndromo, una matriz vacía.
- Si no es posible, nulo.
- Si se puede formar un palíndromo con un cambio, se obtiene una matriz con las dos posiciones (índices) que se deben intercambiar para crearlo.

## Ejemplos

```js
getIndexsForPalindrome('anna'); // []
getIndexsForPalindrome('abab'); // [0, 1]
getIndexsForPalindrome('abac'); // null
getIndexsForPalindrome('aaaaaaaa'); // []
getIndexsForPalindrome('aaababa'); // [1, 3]
getIndexsForPalindrome('caababa'); // null
```

Si el palíndromo se puede formar con diferentes swaps, devuelva siempre el primero que se encuentre.

## Soluciones

| #   | Solución   | Código                    |
| --- | ---------- | ------------------------- |
| 1   | Usando For | [Código](./solution01.js) |
