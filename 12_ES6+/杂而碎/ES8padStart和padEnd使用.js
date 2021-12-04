/**
 * 注意js中只有字符串算得上immutable值
 */

const message = "Hello Redux!";

// 经过纯函数转化后变为新的message

const newMessage = message.padStart(15, "*").padEnd(20, "-");
console.log(newMessage);

const cardNumber = "34567887654345678";
const lastCard = cardNumber.slice(-4);
const finalCard = lastCard.padStart(cardNumber.length, "*");
console.log(finalCard);
