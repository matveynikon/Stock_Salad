const fs = require("fs")

var files = fs.readdirSync('tickers_2days/tickers');
var files2d = []
var filecaps = []
var top_sent = []

//console.log(files.length)
var e2 = 0
var di2 = 0
for(di = 0;di < 59;di++){
        di2 += 1
        if (files[di] == undefined){
            break
        }
        if (files[di].includes('sent_')){
            var tv1 = 0
        }
        else{
                try{
                    file_ranks = {}
                    top_sent = []
                    files2d.push(files[di].replace(".txt", ""))
                    const data = fs.readFileSync(`tickers_2days/tickers/sent_${files[di]}`, 'utf8');
                
                    filecaps.push(parseFloat(data))
                    //console.log(filecaps)

                    
                    files2d.forEach((key, i) => file_ranks[key] = filecaps[i]);
                    //console.log(file_ranks)
                    var items = Object.keys(file_ranks).map(function(key) {
                        return [key, file_ranks[key]];
                    });
                      
                      // Sort the array based on the second element
                    items.sort(function(first, second) {
                        return second[1] - first[1];
                    });

                    

                    for(var tsi = 0; tsi < items.length;tsi++){
                        top_sent.push(items[tsi][0])
                    }
                      
                      // Create a new array with only the first 5 items
                    //console.log(top_sent);
                }
                catch{
                    var e2 = 1
                }
        }
        

    
}


console.log(top_sent);