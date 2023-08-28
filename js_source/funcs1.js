

      var na = true

      function dn(news, stock){
        if (window.innerWidth <= 950) {
          var xhttp = new XMLHttpRequest();
          xhttp.onload = function() {
              var tc1 = this.responseText
              document.getElementById(`nc`).innerHTML = `<div id='${news}' class="news">${tc1}</div>`
              if (na == false){
                  document.getElementById(news).style.display = "none";
                  na = true
              }
              else{
                  na = false
                  document.getElementById(news).style.width = "97%";
                  document.getElementById(news).style.height = "170px";
                  document.getElementById(news).style.display = "block";
                  document.getElementById(news).style.background = "lightcyan";

              }
          }
          xhttp.open("GET", `tickers_2days/tickers/${stock}.txt`, true);
          xhttp.send();
        }
        else{
          var xhttp = new XMLHttpRequest();
          xhttp.onload = function() {
              var tc1 = this.responseText
              document.getElementById(`nc`).innerHTML = `<div id='${news}' class="news">${tc1}</div>`
              if (na == false){
                  document.getElementById(news).style.display = "none";
                  na = true
              }
              else{
                  na = false
                  document.getElementById(news).style.width = "96%";
                  document.getElementById(news).style.height = "170px";
                  document.getElementById(news).style.display = "block";
                  document.getElementById(news).style.background = "lightcyan";

              }
          }
          xhttp.open("GET", `tickers_2days/tickers/${stock}.txt`, true);
          xhttp.send();
        }

      }



      function loadis(si, name){

        if (window.innerWidth <= 950) {
          try{
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                var rt = this.responseText * -1
                if (rt > 12){
                  rt = 12
                }
                if (rt < -12){
                  rt = -12
                }
                ////console.log(rt)
                var styleSheet = document.createElement("style")
                styleSheet.innerText += 
                `#bl${si}{
                    position: relative;
                    padding-right: 0%;
                    background: gray;
                    border-radius: 2px;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    display: inline-block;
                    left: 49%;
                }`;
                document.head.appendChild(styleSheet)


                if (parseFloat(rt) > 0){
                    document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                    document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                    document.getElementById(`sent${si}`).style.width = (rt*6+"%");
                    document.getElementById(`sent${si}`).style.left = "27%";
                    document.getElementById(`bl${si}`).style.left = 25-((rt*6)-1)+"%";
                    document.getElementById(`dnb${si}`).style.marginLeft = "1%";
                    document.getElementById(`mc${si}`).style.marginLeft = "24%";

                  
                }
                else if (parseFloat(rt) < 0){

                    document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                    document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                    ////console.log(`SI iter: ${si} and ${name}`)


                    //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`

                    document.getElementById(`bl${si}`).style.left = 25-((-rt*6)-1)+"%";

                    document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                    document.getElementById(`mc${si}`).style.marginLeft = "24%";

                    document.getElementById(`sent${si}`).style.width = (-rt*6)+"%";
                    document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                    document.getElementById(`sent${si}`).style.left = (27 - (-rt*6)+"%");
                    ////console.log(-rt+"%")
                    document.getElementById(`sent${si}`).style.background = "green";


                }
                else if (parseFloat(rt) == 0){
                  document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                  document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                  ////console.log(`SI iter: ${si} and ${name}`)


                  //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`

                  document.getElementById(`bl${si}`).style.left = 25-((-rt*6)-1)+"%";

                  document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                  document.getElementById(`mc${si}`).style.marginLeft = "24%";

                  document.getElementById(`sent${si}`).style.width = (-rt*6)+"%";
                  document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                  document.getElementById(`sent${si}`).style.left = (27 - (-rt*6)+"%");
                  ////console.log(-rt+"%")
                  document.getElementById(`sent${si}`).style.background = "gray";
                }


                if(si == 0){
                  document.getElementById(`cont${si}`).style.marginTop = "12.5%";
                }

                var xhttp2 = new XMLHttpRequest();
                xhttp2.onload = function() {
                    var rt2 = this.responseText
                    if (parseInt(rt2) == 200){
                      rt2 = "200+"
                    }
                    document.getElementById(`pop${si}`).style.display = "block"
                    document.getElementById(`pop${si}`).innerHTML = rt2+" mentions"
                }

                xhttp2.open("GET", `tickers_2days/pop/${name}.txt`, true);
                xhttp2.send();

                var xhttp3 = new XMLHttpRequest();
                xhttp3.onload = function() {
                    var rt3 = this.responseText
                    document.getElementById(`info${si}`).innerHTML = `<p>${rt3}</p>`
                }
                xhttp3.open("GET", `tickers_2days/info/${name.toLowerCase()}.txt`, true);
                xhttp3.send();



            }
            xhttp.open("GET", `tickers_2days/tickers/sent_${name}.txt`, true);
            xhttp.send();

            /***
            var xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
              var rt2 = this.responseText
              document.getElementById(`pop${si}`).innerHTML = rt2+" mentions"
            }
            xhttp2.open("GET", `tickers_2days/pop/${stock}.txt`, true);
            xhttp2.send();
            ***/
          }



          catch{
                var rt = 0
                ////console.log(rt)
                var styleSheet = document.createElement("style")
                styleSheet.innerText += 
                `#bl${si}{
                    position: relative;
                    padding-right: 0%;
                    background: gray;
                    border-radius: 2px;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    display: inline-block;
                    left: 49%;
                }`;
                document.head.appendChild(styleSheet)



                if (parseFloat(rt) > 0){
                    document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                    document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                    document.getElementById(`sent${si}`).style.width = (rt*6+"%");
                    document.getElementById(`sent${si}`).style.left = "27%";
                    document.getElementById(`bl${si}`).style.left = 25-((rt*6)-1)+"%";
                    document.getElementById(`dnb${si}`).style.marginLeft = "1%";
                    document.getElementById(`mc${si}`).style.marginLeft = "24%";
   
                }
                else if (parseFloat(rt) < 0){

                    document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                    document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                    ////console.log(`SI iter: ${si} and ${name}`)


                    //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`

                    document.getElementById(`bl${si}`).style.left = 25-((-rt*6)-1)+"%";

                    document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                    document.getElementById(`mc${si}`).style.marginLeft = "24%";

                    document.getElementById(`sent${si}`).style.width = (-rt*6)+"%";
                    document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                    document.getElementById(`sent${si}`).style.left = (27 - (-rt*6)+"%");
                    ////console.log(-rt+"%")
                    document.getElementById(`sent${si}`).style.background = "green";


                }
                else if (parseFloat(rt) == 0){
                  document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                  document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                  //console.log(`SI iter: ${si} and ${name}`)


                  //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`

                  document.getElementById(`bl${si}`).style.left = 25-((-rt*6)-1)+"%";

                  document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                  document.getElementById(`mc${si}`).style.marginLeft = "24%";

                  document.getElementById(`sent${si}`).style.width = (-rt*6)+"%";
                  document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                  document.getElementById(`sent${si}`).style.left = (27 - (-rt*6)+"%");
                  //console.log(-rt+"%")
                  document.getElementById(`sent${si}`).style.background = "gray";
                }


                if(si == 0){
                  document.getElementById(`cont${si}`).style.marginTop = "12.5%";
                }

                
                document.getElementById(`pop${si}`).style.display = "block"
                document.getElementById(`pop${si}`).innerHTML = "0"

                document.getElementById(`info${si}`).innerHTML = "no info"


          }
        }





        else{


          try{
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                var rt = this.responseText * -1
                if (rt > 12){
                  rt = 12
                }
                if (rt < -12){
                  rt = -12
                }
                //console.log(rt)
                var styleSheet = document.createElement("style")
                styleSheet.innerText += 
                `#bl${si}{
                    position: relative;
                    padding-right: 0%;
                    background: gray;
                    border-radius: 2px;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    display: inline-block;
                    left: 49%;
                }`;
                document.head.appendChild(styleSheet)


                if (parseFloat(rt) > 0){
                    document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                    document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                    document.getElementById(`sent${si}`).style.width = (rt*6+"%");
                    document.getElementById(`sent${si}`).style.left = "12%";
                    document.getElementById(`bl${si}`).style.left = 9-((rt*6)-1)+"%";
                    document.getElementById(`mc${si}`).style.marginLeft = "15%";
                    document.getElementById(`dnb${si}`).style.marginLeft = "1%";
                    //document.getElementById(`dnb${si}`).style.marginLeft = (rt*6)+"%"

                }
                else if (parseFloat(rt) < 0){

                    document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                    document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                    //console.log(`SI iter: ${si} and ${name}`)


                    //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`

                    document.getElementById(`bl${si}`).style.left = 9-((-rt*6)-1)+"%";
                    //document.getElementById(`blcu${si}`).style.paddingRight = "0";
                    //document.getElementById(`blcu${si}`).style.paddingLeft = "0%";

                    document.getElementById(`mc${si}`).style.marginLeft = "15%";

                    document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                    document.getElementById(`sent${si}`).style.width = (-rt*6)+"%";
                    document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                    document.getElementById(`sent${si}`).style.left = (12 - (-rt*6)+"%");
                    //console.log(-rt+"%")
                    document.getElementById(`sent${si}`).style.background = "green";


                }
                else if (parseFloat(rt) == 0){
                  document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px"><div class='hc50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                  document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                  //console.log(`SI iter: ${si} and ${name}`)

                  //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`

                  document.getElementById(`sent${si}`).style.left = "12%";
                  document.getElementById(`bl${si}`).style.left = 9-((rt*6)-1)+"%";

                  document.getElementById(`mc${si}`).style.marginLeft = "15%";
                  document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                  document.getElementById(`sent${si}`).style.width = (-rt*6)+"%";
                  document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                  document.getElementById(`sent${si}`).style.background = "gray";
                }


                if(si == 0){
                  document.getElementById(`cont${si}`).style.marginTop = "12.4%";
                }

                var xhttp2 = new XMLHttpRequest();
                xhttp2.onload = function() {
                    var rt2 = this.responseText
                    if (parseInt(rt2) == 200){
                      rt2 = "200+"
                    }
                    document.getElementById(`pop${si}`).style.display = "inline-block"
                    document.getElementById(`pop${si}`).innerHTML = rt2+" mentions"
                }

                xhttp2.open("GET", `tickers_2days/pop/${name}.txt`, true);
                xhttp2.send();

                var xhttp3 = new XMLHttpRequest();
                xhttp3.onload = function() {
                    var rt3 = this.responseText
                    document.getElementById(`info${si}`).innerHTML = `<p>${rt3}</p>`
                }
                xhttp3.open("GET", `tickers_2days/info/${name.toLowerCase()}.txt`, true);
                xhttp3.send();



            }
            xhttp.open("GET", `tickers_2days/tickers/sent_${name}.txt`, true);
            xhttp.send();

            /***
            var xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
              var rt2 = this.responseText
              document.getElementById(`pop${si}`).innerHTML = rt2+" mentions"
            }
            xhttp2.open("GET", `tickers_2days/pop/${stock}.txt`, true);
            xhttp2.send();
            ***/
          }



          catch{
                var rt = 0
                //console.log(rt)
                var styleSheet = document.createElement("style")
                styleSheet.innerText += 
                `#bl${si}{
                    position: relative;
                    padding-right: 0%;
                    background: gray;
                    border-radius: 2px;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    display: inline-block;
                    left: 49%;
                }`;
                document.head.appendChild(styleSheet)



                if (parseFloat(rt) > 0){
                    document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px">50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                    document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`
                    document.getElementById(`sent${si}`).style.width = (rt*6+"%");
                    document.getElementById(`sent${si}`).style.left = "12%";
                    document.getElementById(`bl${si}`).style.left = 9-((rt*6)-1)+"%";
                    document.getElementById(`mc${si}`).style.marginLeft = "15%";
                    document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                    
                }
                else if (parseFloat(rt) < 0){

                    document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px">50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                    document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`

                    //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`

                    document.getElementById(`bl${si}`).style.left = 9-((-rt*6)-1)+"%";
                    //document.getElementById(`blcu${si}`).style.paddingRight = "0";
                    //document.getElementById(`blcu${si}`).style.paddingLeft = "0%";

                    document.getElementById(`mc${si}`).style.marginLeft = "15%";

                    document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                    document.getElementById(`sent${si}`).style.width = (-rt*6)+"%";
                    document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                    document.getElementById(`sent${si}`).style.left = (12 - (-rt*6)+"%");
                    //console.log(-rt+"%")
                    document.getElementById(`sent${si}`).style.background = "green";


                }
                else if (parseFloat(rt) == 0){
                  document.getElementById(`overcont`).innerHTML += `<div class="cont50" id="cont${si}"><img src="logos/${name}.jpg" class="icon" id="icon${si}" width="30px">50'><h2 class='sn'>${name.toUpperCase()}: <span class="sntext" id="info${si}"></span></h2>  </div><div class="mc50" id="mc${si}"><div class="sent50" id='sent${si}'>&nbsp;</div><div class="bl50" id='bl${si}'>&nbsp;</div>  </div><button onclick="dn('news${si}', '${name}')" class="dnb50" id='dnb${si}'>Mentions</button><div class="pop" id="pop${si}"></div></div>`
                  document.getElementById(`overcont`).innerHTML += `<hr class="hrc"></hr>`

                  //document.getElementById(`nc`).innerHTML = `<div id='news${si}'>${tc1}</div>`
                  document.getElementById(`sent${si}`).style.left = "12%";
                  document.getElementById(`bl${si}`).style.left = 9-((rt*6)-1)+"%";

                  document.getElementById(`mc${si}`).style.marginLeft = "15%";
                  document.getElementById(`dnb${si}`).style.marginLeft = "1%";

                  document.getElementById(`sent${si}`).style.width = (-rt*6)+"%";
                  document.getElementById(`sent${si}`).style.borderRadius = "4px 0px 0px 4px"

                  document.getElementById(`sent${si}`).style.background = "gray";
                }


                if(si == 0){
                  document.getElementById(`cont${si}`).style.marginTop = "12.5%";
                }

                
                document.getElementById(`pop${si}`).style.display = "inline-block"
                document.getElementById(`pop${si}`).innerHTML = "0"

                document.getElementById(`info${si}`).innerHTML = "no info"


          }


        }

      }









      var na2 = true

      function dn2(news, stock){
        if (window.innerWidth <= 950) {
          try{
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                var tc1 = this.responseText
                document.getElementById(`nccu`).innerHTML = `<div id='${news}' class="news2">${tc1}</div>`
                if (na2 == false){
                    document.getElementById(news).style.display = "none";
                    na2 = true
                }
                else{
                    na2 = false
                    document.getElementById(news).style.width = "97%";
                    document.getElementById(news).style.height = "170px";
                    document.getElementById(news).style.display = "block";
                    document.getElementById(news).style.background = "lightcyan";
                }
            }
            xhttp.open("GET", `tickers_2days/tickers/${stock}.txt`, true);
            xhttp.send();
          }
          catch{
                var tc1 = "No Info"
                document.getElementById(`nccu`).innerHTML = `<div id='${news}' class="news2">${tc1}</div>`
                if (na2 == false){
                    document.getElementById(news).style.display = "none";
                    na2 = true
                }
                else{
                    na2 = false
                    document.getElementById(news).style.width = "97%";
                    document.getElementById(news).style.height = "170px";
                    document.getElementById(news).style.display = "block";
                }
          }
        }
        else{
          try{
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                var tc1 = this.responseText
                document.getElementById(`nccu`).innerHTML = `<div id='${news}' class="news2">${tc1}</div>`
                if (na == false){
                    document.getElementById(news).style.display = "none";
                    na = true
                }
                else{
                    na = false
                    document.getElementById(news).style.width = "96%";
                    document.getElementById(news).style.height = "170px";
                    document.getElementById(news).style.display = "block";
                    document.getElementById(news).style.top = "603px"
                    document.getElementById(news).style.background = "lightcyan";
                }
            }
            xhttp.open("GET", `tickers_2days/tickers/${stock}.txt`, true);
            xhttp.send();
          }
          catch{
                var tc1 = "No Info"
                document.getElementById(`nccu`).innerHTML = `<div id='${news}' class="news2">${tc1}</div>`
                if (na == false){
                    document.getElementById(news).style.display = "none";
                    na = true
                }
                else{
                    na = false
                    document.getElementById(news).style.width = "96%";
                    document.getElementById(news).style.height = "170px";
                    document.getElementById(news).style.display = "block";
                    document.getElementById(news).style.top = "603px"
                    document.getElementById(news).style.background = "lightcyan";
                }
          }
        }

      }











      function loadis2(si, name){
        if (window.innerWidth <= 950) {
          try{
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                var rt = this.responseText * -1
                if (rt > 12){
                  rt = 12
                }
                if (rt < -12){
                  rt = -12
                }
                //console.log(rt)
                var styleSheet = document.createElement("style")
                styleSheet.innerText += 
                `#blcu${si}{
                    position: relative;
                    padding-right: 0%;
                    background: gray;
                    border-radius: 2px;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    display: inline-block;
                    left: 49%;
                }`;
                document.head.appendChild(styleSheet)


                if (parseFloat(rt) > 0){
                    document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><button class="rsb" onclick="remove_this('${name}', ${si})" id="rsb${si}">&#10006;</button><img src="logos/${name}.jpg" class="iconcu" id="iconcu${si}" width="30px"><div class='hccu50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mccu50" id="mccu${si}"><div class="sentcu50" id='sentcu${si}'>&nbsp;</div><div class="blcu50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn2('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="popcu" id="popcu${si}"></div></div>`
                    document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`
                    document.getElementById(`sentcu${si}`).style.width = (rt*6+"%");
                    document.getElementById(`sentcu${si}`).style.left = "28%";
                    document.getElementById(`blcu${si}`).style.left = 25-((rt*6)-1)+"%";
                    document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";
                    document.getElementById(`mccu${si}`).style.marginLeft = "24%";

                    
                }
                else if (parseFloat(rt) < 0){

                    document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><button class="rsb" onclick="remove_this('${name}', ${si})" id="rsb${si}">&#10006;</button><img src="logos/${name}.jpg" class="iconcu" id="iconcu${si}" width="30px"><div class='hccu50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mccu50" id="mccu${si}"><div class="sentcu50" id='sentcu${si}'>&nbsp;</div><div class="blcu50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn2('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="popcu" id="popcu${si}"></div></div>`
                    document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`
                    //console.log(`SI iter: cu${si} and ${name}`)


                    //document.getElementById(`nc`).innerHTML = `<div id='newscu${si}'>${tc1}</div>`

                    document.getElementById(`blcu${si}`).style.left = 25-((-rt*6)-1)+"%";

                    document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                    document.getElementById(`mccu${si}`).style.marginLeft = "24%";

                    document.getElementById(`sentcu${si}`).style.width = (-rt*6)+"%";
                    document.getElementById(`sentcu${si}`).style.borderRadius = "4px 0px 0px 4px"

                    document.getElementById(`sentcu${si}`).style.left = (28 - (-rt*6)+"%");
                    //console.log(-rt+"%")
                    document.getElementById(`sentcu${si}`).style.background = "green";


                }
                else if (parseFloat(rt) == 0){
                  document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><button class="rsb" onclick="remove_this('${name}', ${si})" id="rsb${si}">&#10006;</button><img src="logos/${name}.jpg" class="iconcu" id="iconcu${si}" width="30px"><div class='hccu50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mccu50" id="mccu${si}"><div class="sentcu50" id='sentcu${si}'>&nbsp;</div><div class="blcu50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn2('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="popcu" id="popcu${si}"></div></div>`
                  document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc"></hr>`
                  //console.log(`SI iter: cu${si} and ${name}`)


                  //document.getElementById(`nc`).innerHTML = `<div id='newscu${si}'>${tc1}</div>`

                  document.getElementById(`blcu${si}`).style.left = 25-((-rt*6)-1)+"%";

                  document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                  document.getElementById(`mccu${si}`).style.marginLeft = "24%";

                  document.getElementById(`sentcu${si}`).style.width = (-rt*6)+"%";
                  document.getElementById(`sentcu${si}`).style.borderRadius = "4px 0px 0px 4px"

                  document.getElementById(`sentcu${si}`).style.left = (28 - (-rt*6)+"%");
                  //console.log(-rt+"%")
                  document.getElementById(`sentcu${si}`).style.background = "gray";
                }


                if(si == 0){
                  document.getElementById(`contcu${si}`).style.marginTop = "11%";
                }

                var xhttp2 = new XMLHttpRequest();
                xhttp2.onload = function() {
                    var rt2 = this.responseText
                    if (parseInt(rt2) == 200){
                      rt2 = "200+"
                    }
                    document.getElementById(`popcu${si}`).style.display = "block"
                    document.getElementById(`popcu${si}`).innerHTML = rt2+" mentions"
                }

                xhttp2.open("GET", `tickers_2days/pop/${name}.txt`, true);
                xhttp2.send();

                var xhttp3 = new XMLHttpRequest();
                xhttp3.onload = function() {
                    var rt3 = this.responseText
                    document.getElementById(`infocu${si}`).innerHTML = `<p>${rt3}</p>`
                }
                xhttp3.open("GET", `tickers_2days/info/${name.toLowerCase()}.txt`, true);
                xhttp3.send();



            }
            xhttp.open("GET", `tickers_2days/tickers/sent_${name}.txt`, true);
            xhttp.send();

            /***
            var xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
              var rt2 = this.responseText
              document.getElementById(`popcu${si}`).innerHTML = rt2+" mentions"
            }
            xhttp2.open("GET", `tickers_2days/pop/${stock}.txt`, true);
            xhttp2.send();
            ***/
          }



          catch{
                var rt = 0
                //console.log(rt)
                var styleSheet = document.createElement("style")
                styleSheet.innerText += 
                `#blcu${si}{
                    position: relative;
                    padding-right: 0%;
                    background: gray;
                    border-radius: 2px;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    display: inline-block;
                    left: 49%;
                }`;
                document.head.appendChild(styleSheet)



                if (parseFloat(rt) > 0){
                    document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><img src="logos/${name}.jpg" class="icon" id="iconcu${si}" width="30px">50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mc50" id="mccu${si}"><div class="sent50" id='sentcu${si}'>&nbsp;</div><div class="bl50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="pop" id="popcu${si}"></div></div>`
                    document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`
                    document.getElementById(`sentcu${si}`).style.width = (rt*6+"%");
                    document.getElementById(`sentcu${si}`).style.left = "28%";
                    document.getElementById(`blcu${si}`).style.left = 25-((rt*6)-1)+"%";
                    document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";
                    document.getElementById(`mccu${si}`).style.marginLeft = "24%";

                    
                }
                else if (parseFloat(rt) < 0){

                    document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><img src="logos/${name}.jpg" class="icon" id="iconcu${si}" width="30px">50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mc50" id="mccu${si}"><div class="sent50" id='sentcu${si}'>&nbsp;</div><div class="bl50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="pop" id="popcu${si}"></div></div>`
                    document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`

                    //document.getElementById(`nc`).innerHTML = `<div id='newscu${si}'>${tc1}</div>`

                    document.getElementById(`blcu${si}`).style.left = 25-((-rt*6)-1)+"%";

                    document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                    document.getElementById(`mccu${si}`).style.marginLeft = "24%";

                    document.getElementById(`sentcu${si}`).style.width = (-rt*6)+"%";
                    document.getElementById(`sentcu${si}`).style.borderRadius = "4px 0px 0px 4px"

                    document.getElementById(`sentcu${si}`).style.left = (28 - (-rt*6)+"%");
                    //console.log(-rt+"%")
                    document.getElementById(`sentcu${si}`).style.background = "green";


                }
                else if (parseFloat(rt) == 0){
                  document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><img src="logos/${name}.jpg" class="icon" id="iconcu${si}" width="30px">50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mc50" id="mccu${si}"><div class="sent50" id='sentcu${si}'>&nbsp;</div><div class="bl50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="pop" id="popcu${si}"></div></div>`
                  document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`

                  //document.getElementById(`nc`).innerHTML = `<div id='newscu${si}'>${tc1}</div>`
                  document.getElementById(`blcu${si}`).style.left = 25-((-rt*6)-1)+"%";

                  document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                  document.getElementById(`mccu${si}`).style.marginLeft = "24%";

                  document.getElementById(`sentcu${si}`).style.width = (-rt*6)+"%";
                  document.getElementById(`sentcu${si}`).style.borderRadius = "4px 0px 0px 4px"

                  document.getElementById(`sentcu${si}`).style.left = (28 - (-rt*6)+"%");
                  //console.log(-rt+"%")
                  document.getElementById(`sentcu${si}`).style.background = "gray";
                }


                if(si == 0){
                  document.getElementById(`contcu${si}`).style.marginTop = "11%";
                }

                
                document.getElementById(`popcu${si}`).style.display = "block"
                document.getElementById(`popcu${si}`).innerHTML = "0"

                document.getElementById(`infocu${si}`).innerHTML = "no info"


          }

        }




        else{


          try{
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                var rt = this.responseText * -1
                if (rt > 12){
                  rt = 12
                }
                if (rt < -12){
                  rt = -12
                }
                //console.log(rt)
                var styleSheet = document.createElement("style")
                styleSheet.innerText += 
                `#blcu${si}{
                    position: relative;
                    padding-right: 0%;
                    background: gray;
                    border-radius: 2px;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    display: inline-block;
                    left: 49%;
                }`;
                document.head.appendChild(styleSheet)


                if (parseFloat(rt) > 0){
                    document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><button class="rsb" onclick="remove_this('${name}', ${si})" id="rsb${si}">&#10006;</button><img src="logos/${name}.jpg" class="iconcu" id="iconcu${si}" width="30px"><div class='hccu50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mccu50" id="mccu${si}"><div class="sentcu50" id='sentcu${si}'>&nbsp;</div><div class="blcu50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn2('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="popcu" id="popcu${si}"></div></div>`
                    document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`
                    document.getElementById(`sentcu${si}`).style.width = (rt*6+"%");
                    document.getElementById(`sentcu${si}`).style.left = "12%";
                    document.getElementById(`blcu${si}`).style.left = 9-((rt*6)-1)+"%";
                    document.getElementById(`mccu${si}`).style.marginLeft = "15%";
                    document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                    
                }
                else if (parseFloat(rt) < 0){

                    document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><button class="rsb" onclick="remove_this('${name}', ${si})" id="rsb${si}">&#10006;</button><img src="logos/${name}.jpg" class="iconcu" id="iconcu${si}" width="30px"><div class='hccu50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mccu50" id="mccu${si}"><div class="sentcu50" id='sentcu${si}'>&nbsp;</div><div class="blcu50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn2('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="popcu" id="popcu${si}"></div></div>`
                    document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`
                    //console.log(`SI iter: cu${si} and ${name}`)

                    //document.getElementById(`nc`).innerHTML = `<div id='newscu${si}'>${tc1}</div>`

                    document.getElementById(`blcu${si}`).style.left = 9-((-rt*6)-1)+"%";
                    //document.getElementById(`blcu${si}`).style.paddingRight = "0";
                    //document.getElementById(`blcu${si}`).style.paddingLeft = "0%";

                    document.getElementById(`mccu${si}`).style.marginLeft = "15%";

                    document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                    document.getElementById(`sentcu${si}`).style.width = (-rt*6)+"%";
                    document.getElementById(`sentcu${si}`).style.borderRadius = "4px 0px 0px 4px"

                    document.getElementById(`sentcu${si}`).style.left = (12 - (-rt*6)+"%");
                    //console.log(-rt+"%")
                    document.getElementById(`sentcu${si}`).style.background = "green";


                }
                else if (parseFloat(rt) == 0){
                  document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><button class="rsb" onclick="remove_this('${name}', ${si})" id="rsb${si}">&#10006;</button><img src="logos/${name}.jpg" class="iconcu" id="iconcu${si}" width="30px"><div class='hccu50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mccu50" id="mccu${si}"><div class="sentcu50" id='sentcu${si}'>&nbsp;</div><div class="blcu50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn2('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="popcu" id="popcu${si}"></div></div>`
                  document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`
                  //console.log(`SI iter: cu${si} and ${name}`)


                  document.getElementById(`sentcu${si}`).style.left = "12%";
                  document.getElementById(`blcu${si}`).style.left = 9-((rt*6)-1)+"%";

                  document.getElementById(`mccu${si}`).style.marginLeft = "15%";
                  document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                  document.getElementById(`sentcu${si}`).style.width = (-rt*6)+"%";
                  document.getElementById(`sentcu${si}`).style.borderRadius = "4px 0px 0px 4px"

                  document.getElementById(`sentcu${si}`).style.background = "gray";
                }


                if(si == 0){
                  document.getElementById(`contcu${si}`).style.marginTop = "11%";
                }

                var xhttp2 = new XMLHttpRequest();
                xhttp2.onload = function() {
                    var rt2 = this.responseText
                    if (parseInt(rt2) == 200){
                      rt2 = "200+"
                    }
                    document.getElementById(`popcu${si}`).style.display = "inline-block"
                    document.getElementById(`popcu${si}`).innerHTML = rt2+" mentions"
                }

                xhttp2.open("GET", `tickers_2days/pop/${name}.txt`, true);
                xhttp2.send();

                var xhttp3 = new XMLHttpRequest();
                xhttp3.onload = function() {
                    var rt3 = this.responseText
                    document.getElementById(`infocu${si}`).innerHTML = `<p>${rt3}</p>`
                }
                xhttp3.open("GET", `tickers_2days/info/${name.toLowerCase()}.txt`, true);
                xhttp3.send();



            }
            xhttp.open("GET", `tickers_2days/tickers/sent_${name}.txt`, true);
            xhttp.send();

            /***
            var xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
              var rt2 = this.responseText
              document.getElementById(`popcu${si}`).innerHTML = rt2+" mentions"
            }
            xhttp2.open("GET", `tickers_2days/pop/${stock}.txt`, true);
            xhttp2.send();
            ***/
          }



          catch{
                var rt = 0
                //console.log(rt)
                var styleSheet = document.createElement("style")
                styleSheet.innerText += 
                `#blcu${si}{
                    position: relative;
                    padding-right: 0%;
                    background: gray;
                    border-radius: 2px;
                    padding-top: 5%;
                    padding-bottom: 5%;
                    display: inline-block;
                    left: 49%;
                }`;
                document.head.appendChild(styleSheet)



                if (parseFloat(rt) > 0){
                    document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><img src="logos/${name}.jpg" class="icon" id="iconcu${si}" width="30px">50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mc50" id="mccu${si}"><div class="sent50" id='sentcu${si}'>&nbsp;</div><div class="bl50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="pop" id="popcu${si}"></div></div>`
                    document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`
                    document.getElementById(`sentcu${si}`).style.width = (rt*6+"%");
                    document.getElementById(`sentcu${si}`).style.left = "12%";
                    document.getElementById(`blcu${si}`).style.left = 9-((rt*6)-1)+"%";
                    document.getElementById(`mccu${si}`).style.marginLeft = "15%";
                    document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                    
                }
                else if (parseFloat(rt) < 0){

                    document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><img src="logos/${name}.jpg" class="icon" id="iconcu${si}" width="30px">50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mc50" id="mccu${si}"><div class="sent50" id='sentcu${si}'>&nbsp;</div><div class="bl50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="pop" id="popcu${si}"></div></div>`
                    document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`

                    //document.getElementById(`nc`).innerHTML = `<div id='newscu${si}'>${tc1}</div>`

                    document.getElementById(`blcu${si}`).style.left = 9-((-rt*6)-1)+"%";
                    //document.getElementById(`blcu${si}`).style.paddingRight = "0";
                    //document.getElementById(`blcu${si}`).style.paddingLeft = "0%";

                    document.getElementById(`mccu${si}`).style.marginLeft = "15%";

                    document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                    document.getElementById(`sentcu${si}`).style.width = (-rt*6)+"%";
                    document.getElementById(`sentcu${si}`).style.borderRadius = "4px 0px 0px 4px"

                    document.getElementById(`sentcu${si}`).style.left = (12 - (-rt*6)+"%");
                    ////console.log(-rt+"%")
                    document.getElementById(`sentcu${si}`).style.background = "green";


                }
                else if (parseFloat(rt) == 0){
                  document.getElementById(`overcontcu`).innerHTML += `<div class="contcu50" id="contcu${si}"><img src="logos/${name}.jpg" class="icon" id="iconcu${si}" width="30px">50'><h2 class='sncu'>${name.toUpperCase()}: <span class="sncutext" id="infocu${si}"></span></h2>  </div><div class="mc50" id="mccu${si}"><div class="sent50" id='sentcu${si}'>&nbsp;</div><div class="bl50" id='blcu${si}'>&nbsp;</div></div><button onclick="dn('newscu${si}', '${name}')" class="dnbcu50" id='dnbcu${si}'>Mentions</button><div class="pop" id="popcu${si}"></div></div>`
                  document.getElementById(`overcontcu`).innerHTML += `<hr class="hrc" id="hrc${si}"></hr>`

                  //document.getElementById(`nc`).innerHTML = `<div id='newscu${si}'>${tc1}</div>`

                  document.getElementById(`sentcu${si}`).style.left = "12%";
                  document.getElementById(`blcu${si}`).style.left = 9-((rt*6)-1)+"%";

                  document.getElementById(`mccu${si}`).style.marginLeft = "15%";
                  document.getElementById(`dnbcu${si}`).style.marginLeft = "1%";

                  document.getElementById(`sentcu${si}`).style.width = (-rt*6)+"%";
                  document.getElementById(`sentcu${si}`).style.borderRadius = "4px 0px 0px 4px"

                  document.getElementById(`sentcu${si}`).style.background = "gray";

                }


                if(si == 0){
                  document.getElementById(`contcu${si}`).style.marginTop = "11%";
                }

                
                document.getElementById(`popcu${si}`).style.display = "inline-block"
                document.getElementById(`popcu${si}`).innerHTML = "0"

                document.getElementById(`infocu${si}`).innerHTML = "no info"


          }



        }

      }

