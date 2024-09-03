# Calcular el tiempo

**Nivel:** **_Fácil_**

## Instrucciones

Los elfos se están preparando para la Nochebuena y necesitan tu ayuda para determinar si tienen tiempo suficiente o no ⏳.

Para ello te dan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00y el tiempo límite es 07:00:00.

Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

Si terminan antes de 07:00:00, el tiempo restante hasta 07:00:00debe mostrarse con un signo negativo. Por ejemplo, si les queda 1 hora y 30 minutos, devuelvan-01:30:00

## Ejemplos

```js
calculateTime(['00:10:00', '01:00:00', '03:30:00']);
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00']);
// '00:30:00'

calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']); // '-05:29:00'
```

## Soluciones

| #   | Solución   | Código                    |
| --- | ---------- | ------------------------- |
| 1   | Usando For | [Código](./solution01.js) |
