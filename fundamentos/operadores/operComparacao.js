
// Ter atenção em: == e === são diferentes! 


let exp1 = '1';
let exp2 = 1;


console.log(exp1 == exp2);   // true
console.log(exp1 === exp2);  // false


0 == false   // true
0 === false  // false, different type
1 == "1"     // true,  automatic type conversion 
1 === "1"    // false, different type
null == undefined  // true
null === undefined // false
'0' == false       // true
'0' === false      // false
