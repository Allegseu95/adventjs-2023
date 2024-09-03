const test = 'hola (odnum)';
const test2 = '(olleh) (dlrow)!';
const test3 = 'sa(u(cla)atn)s';

const decode = message => {
  const regex = /\(([^(()]+)\)/;

  let text = regex.exec(message);

  while (text !== null) {
    let reverse = text[1].split('').reverse().join('');
    message = message.replace(text[0], reverse);
    text = regex.exec(message);
  }
  return message;
};

console.log(decode(test));
console.log(decode(test2));
console.log(decode(test3));
