
    na = true

    stocks = ["oooo", "aapl", "msft", "amzn", "goog", "brk-a", "v", "hd"]

    for (let st = 1; st < stocks.length; st++){

        loadis(st, stocks[st])
    }

    function dn(news, stock){


        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            var tc1 = this.responseText
            document.getElementById(`nc`).innerHTML = `<div id='${news}'>${tc1}</div>`
            if (na == false){
                document.getElementById(news).style.display = "none";
                na = true
            }
            else{
                na = false
                document.getElementById(news).style.width = "42%";
                document.getElementById(news).style.height = "200px";
                document.getElementById(news).style.display = "block";
            }
        }
        xhttp.open("GET", `tickers/${stock}.txt`, true);
        xhttp.send();

    }



    function loadis(si, name){
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            rt = this.responseText * -1
            console.log(rt)
            if (parseFloat(rt) > 0){
                document.getElementById(`sent${si}`).style.width = (rt*5+"%");
                document.getElementById(`sent${si}`).style.left = "10%";
                document.getElementById(`bl${si}`).style.left = "10%";
                
            }
            else if (parseFloat(rt) < 0){

                document.getElementById(`cont${si}`).innerHTML = `<div class='hc${si}'><h2 class='sn'>${name}: </h2></div><div id="mc${si}"><div id='sent${si}'>&nbsp;</div><div id='bl${si}'>&nbsp;</div></div><button onclick="dn('news${si}', '${name}')" id='dnb${si}'>News Summaries</button>`
                //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`

                document.getElementById(`bl${si}`).style.left = 10+0-(-rt*5)+"%";
                document.getElementById(`bl${si}`).style.paddingRight = "0";
                document.getElementById(`bl${si}`).style.paddingLeft = "0.8%";

                document.getElementById(`mc${si}`).style.marginLeft = "4.8%";

                document.getElementById(`dnb${si}`).style.marginLeft = "4%";

                document.getElementById(`sent${si}`).style.width = (-rt*5)+"%";
                document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`sent${si}`).style.left = (10 + 0 - (-rt*5)+"%");
                console.log(-rt+"%")
                document.getElementById(`sent${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
                document.getElementById(`sent${si}`).style.paddingLeft = rt+"%";
                document.getElementById(`sent${si}`).style.background = "gray";
            }
        }
        xhttp.open("GET", `tickers/sent_${name}.txt`, true);
        xhttp.send();
    }


