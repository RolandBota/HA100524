const random = require('random-string-generator')

console.log(random())
console.log(random(12))
console.log(random('alphanumeric'));

console.log(random('numeric'));
console.log(random('upper'));
console.log(random('lower'))
console.log(random('uppernumeric'))