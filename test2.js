var stringSimilarity = require("string-similarity");

var stockl = ["TCO", "TM", "TMO", "COT", "COTD"]

var matches = []
var matches2 = []
var input = "COT"

for(r = 0; r < stockl.length; r++){
    console.log(parseInt(stockl[r].indexOf(input))+1)
    if(parseInt(stockl[r].indexOf(input))+1 > 0){
        matches.push(parseInt(stockl[r].indexOf(input))+1)
        matches2.push(stockl[r])
    }
}
matches2.sort((a, b) => matches.indexOf(b) - matches.indexOf(a));

console.log(matches2.reverse());
