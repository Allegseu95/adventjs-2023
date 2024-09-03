# Ordenar el Almacén

**Nivel:** **_Medio_**

## Instrucciones

Los elfos están muy ocupados en el taller de Papá Noel organizando los regalos 🎁 para la Nochebuena 🎄.

El formato de entrada es especial, ya que indica la cantidad de regalos y el tipo de regalo con letras de a a z. Por ejemplo, '66a11b' significa 66 aregalos y 11 bregalos.

Los elfos tienen un sistema especial para organizar los regalos:

- Cada 10 regalos del mismo tipo se empacan en una caja, representada por {x}. Por ejemplo, 20 regalos del tipo A se empacan en dos cajas de esta manera: {a}{a}.
- Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 acajas se apilan en 2 palets de esta manera:[a][a]
- Cualquier regalo adicional se coloca en una bolsa, representada por ()y todos ellos se colocan dentro. Por ejemplo, bse colocan 4 regalos en una bolsa como esta(bbbb)

Los regalos se colocan entonces en el siguiente orden : palés, cajas y bolsas . Y los regalos aparecen en el mismo orden que la cadena de entrada.

Su tarea es escribir una función organizeGiftsque tome una cadena de regalos como argumento y devuelva una cadena que represente el almacén.

## Ejemplos

```js
const result1 = organizeGifts('76a11b')
console.log(result1)
// `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resulting in 1 loose box {b} and a bag with 1 gift (b)
```

## Soluciones

| #   | Solución      | Código                    |
| --- | ------------- | ------------------------- |
| 1   | Usando Repeat | [Código](./solution01.js) |
| 2   | Usando Regex  | [Código](./solution02.js) |
