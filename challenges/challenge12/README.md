# ¿Es una copia válida?

**Nivel:** **_Medio_**

## Instrucciones

En el Polo Norte todavía se utilizan fotocopiadoras de papel . Los elfos las utilizan para copiar las cartas que los niños envían a Papá Noel, para poder enviarlas a todos los departamentos de regalos.

Sin embargo, son muy antiguos y no funcionan muy bien . Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida de generación .

Necesitas detectar si una letra es copia de otra . Las letras son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

Existe una alta probabilidad de que un personaje se degrade con cada copia (¡no siempre sucede!). Y cuando sucede, la regla que sigue es:

- Los caracteres de a se Adegradan Zde letras mayúsculas a letras minúsculas ( A-Z⇒ a-z)
- Las letras se degradan en una serie de caracteres en este orden: a-z⇒ #⇒ +⇒ :⇒ .⇒
- Una vez que las letras se han degradado a símbolos, pueden continuar degradándose.
- Tenga en cuenta que el último es un espacio en blanco, no un carácter vacío.
- Los caracteres que no son letras (como dígitos) no se degradan.
  Sabiendo esto y recibiendo dos cartas, la supuesta original y la copia, debes determinar si la copia es una copia de la otra.

## Ejemplos

```js
checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#'); // true
checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'); // false (due to the initial p)
checkIsValidCopy('Santa Claus', 's#+:. c:. s'); // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s'); // false (there is a # where it shouldn't be)
```

Para entender cómo funcionan las fotocopiadoras y su degradación, observe este ejemplo:

```js
original:  'Santa Claus'
1st copy:  'santa cla#s'
2nd copy:  'sa#t# cl#+s'
3rd copy:  'sa+## c#+:s'
4th copy:  's#++. c+:.s'
5th copy:  's#+:. c:. s'
```

Por lo tanto s#+:. c+:++es una copia válida de Santa Claus. Y, como se puede observar, la degradación de las letras no se produce en un orden específico, sino que es aleatoria.

Basado en el desafío CodeWars Decadencia de fotocopias

## Soluciones

| #   | Solución   | Código                    |
| --- | ---------- | ------------------------- |
| 1   | Usando For | [Código](./solution01.js) |
