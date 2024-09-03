function drawGift(size, symbol) {
  const endLine = '\n';
  const pound = '#';
  if (size === 1) {
    return pound + endLine;
  }
  const lineLength = size * 2 - 1;
  const firstLine = pound.repeat(size);
  const upperBox = [' '.repeat(lineLength - size) + firstLine];
  const bottomBox = [firstLine];
  const topFace = pound + symbol.repeat(size - 2);
  for (let i = 2; i < size; i++) {
    const calc = lineLength - size - i + 1;
    const prefix = ' '.repeat(Math.max(calc, 0));
    const symbols = symbol.repeat(size - 2 - Math.abs(size - i));
    const sideFace = pound + symbols + pound;
    upperBox.push(prefix + topFace + sideFace);
    bottomBox.unshift(topFace + sideFace);
  }
  const symbols = symbol.repeat(lineLength - size - 1);
  const midLine = pound.repeat(size) + symbols + pound;
  const newBox = upperBox.concat([midLine, ...bottomBox]);
  return newBox.join(endLine) + endLine;
}

drawGift(4, '+');

drawGift(5, '*');

drawGift(1, '^');
