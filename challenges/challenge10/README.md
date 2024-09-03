# Crea tu propio árbol de Navidad

**Nivel:** **_Fácil_**

## Instrucciones

¡Vaya idea que ha tenido Sam Elfman ! Quiere ofrecer un servicio que permite crear un árbol de Navidad personalizado 🎄 en cuestión de segundos.

Para crearlo, nos dan una cadena para formar el árbol y un número que indica su altura .

Cada caracter de la cadena representa un adorno del árbol, y los vamos usando cíclicamente hasta llegar a la altura indicada. Al menos, siempre nos pasarán uno .

Debemos devolver una cadena multilínea con el árbol de navidad realizado con los adornos, la altura indicada más una línea final con el tronco formado por el personaje| en el centro y, por último, un salto de línea \n.

## Ejemplos

Por ejemplo, si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

```js
   1
  2 3
 1 2 3
1 2 3 1
   |
```

Si recibimos la cadena \*@oy el número 3, el árbol que debemos devolver es:

```js
  *
 @ o
* @ o
  |
```

## Nota

- El árbol siempre debe estar centrado, por eso agrega espacios en blanco a la izquierda de cada línea.
- Crea espacios únicamente a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
- Los adornos tienen un espacio blanco entre ellos para separarlos.

## Soluciones

| #   | Solución   | Código                    |
| --- | ---------- | ------------------------- |
| 1   | Usando For | [Código](./solution01.js) |
