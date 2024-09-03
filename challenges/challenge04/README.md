# Gira los paréntesis

**Nivel:** **_Medio_**

## Instrucciones

En el taller de Papá Noel **se han escrito algunos mensajes navideños de una forma peculiar** : las palabras entre paréntesis deben leerse al revés.

**Papá Noel necesita que estos mensajes tengan el formato correcto**. Tu tarea es escribir una función que tome una cadena e invierta los caracteres dentro de cada par de paréntesis, eliminando también los paréntesis.

Sin embargo, tenga en cuenta que puede haber paréntesis anidados, por lo que deberá invertir los caracteres en el orden correcto.

## Ejemplos

```js
const a = decode('hola (odnum)');
console.log(a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
```

## Notas:

- **Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no es necesario validarlos.**
- **No debe quedar ningún paréntesis en el mensaje final.**
- **El nivel máximo de anidación es 2.**

## Soluciones

| #   | Solución             | Código                    |
| --- | -------------------- | ------------------------- |
| 1   | Usando Regex y While | [Código](./solution01.js) |
