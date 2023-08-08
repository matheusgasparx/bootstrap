// JSON só é usado em formato textual | dados | json.stringify

const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c} } // soma () { return a + b + c} }
console.log(JSON.stringify(obj)) // .stringify -> converte / inverte

// console.log(JSON.parse("{ a:1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c":3 }')) // usar dessa forma ( ' { " : ... "}') 
                    // .parse passa
console.log(JSON.parse('{ "a": 1.6, "b": "string", "c": true, "d": {}, "e":[] }'))
                            // JSON validator