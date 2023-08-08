console.log("a=", a)
var a = 2
console.log("a=", a)

console.log("b=", b)
let b = 2
console.log("b=", b)


//  A variável a está sendo usada antes de ser declarada.
//  No JavaScript, quando você usa var para declarar uma variável, ela sofre uma elevação
//  (hoisting) para o topo do escopo em que foi declarada, mas seu valor é definido 
//  apenas na linha em que ocorre a atribuição. Portanto, a correção consiste em declarar 
//  a variável a antes do primeiro console.log para evitar o uso antes da declaração.
//  Além disso, o uso do let para a variável b está correto, pois o let não sofre elevação
//  (hoisting) como o var. Portanto, não há problema em usar let b antes de sua declaração