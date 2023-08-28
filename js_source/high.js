  var na3 = true
  
  function dn3(news, stock){
    if (window.innerWidth <= 950) {
      var xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
          var tc1 = this.responseText
          document.getElementById(`nchigh`).innerHTML = `<div id='${news}' class="news3">${tc1}</div>`
          if (na3 == false){
              document.getElementById(news).style.display = "none";
              na3 = true
          }
          else{
              na3 = false
              document.getElementById(news).style.width = "96%";
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
          document.getElementById(`nchigh`).innerHTML = `<div id='${news}' class="news3">${tc1}</div>`
          if (na3 == false){
              document.getElementById(news).style.display = "none";
              na3 = true
          }
          else{
              na3 = false
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



  function loadis3(si, name){
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
            `#blhigh${si}{
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

            if(si == 1){
              var csi = 0
            }


            if (parseFloat(rt) > 0){
                ////console.log(`SISISISISISISISIS: conthigh${si}`)
                document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
                document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
                document.getElementById(`senthigh${si}`).style.width = (rt*6+"%");
                document.getElementById(`senthigh${si}`).style.left = "28%";
                document.getElementById(`blhigh${si}`).style.left = 25-((rt*6)-1)+"%";
                document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";
                document.getElementById(`mchigh${si}`).style.marginLeft = "24%";
                
            }
            else if (parseFloat(rt) < 0){
                ////console.log(`SISISISISISISISIS: conthigh${si}`)

                document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
                document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
                //document.getElementById(`nc`).innerHTML = `<div id='newshigh${si}'>${tc1}</div>`

                document.getElementById(`blhigh${si}`).style.left = 25-((-rt*6)-1)+"%";

                document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";

                document.getElementById(`mchigh${si}`).style.marginLeft = "24%";

                document.getElementById(`senthigh${si}`).style.width = (-rt*6)+"%";
                document.getElementById(`senthigh${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`senthigh${si}`).style.left = (28 - (-rt*6)+"%");
                ////console.log(-rt+"%")
                document.getElementById(`senthigh${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
              document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
              document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
              //document.getElementById(`nc`).innerHTML = `<div id='newshigh${si}'>${tc1}</div>`

              document.getElementById(`blhigh${si}`).style.left = 25-((-rt*6)-1)+"%";

              document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";

              document.getElementById(`mchigh${si}`).style.marginLeft = "24%";

              document.getElementById(`senthigh${si}`).style.width = (-rt*6)+"%";
              document.getElementById(`senthigh${si}`).style.borderRadius = "4px 0px 0px 4px"

              document.getElementById(`senthigh${si}`).style.left = (28 - (-rt*6)+"%");
              ////console.log(-rt+"%")
              document.getElementById(`senthigh${si}`).style.background = "gray";
            }


            if(si == 0){
              document.getElementById(`conthigh${si}`).style.marginTop = "12%";
            }

            var xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
              var rt2 = this.responseText
              if (parseInt(rt2) == 200){
                  rt2 = "200+"
              }
              document.getElementById(`pophigh${si}`).style.display = "block"
              document.getElementById(`pophigh${si}`).innerHTML = rt2+" mentions"
            }
            xhttp2.open("GET", `tickers_2days/pop/${name}.txt`, true);
            xhttp2.send();


            var xhttp3 = new XMLHttpRequest();
            xhttp3.onload = function() {
                var rt3 = this.responseText
                document.getElementById(`infohigh${si}`).innerHTML = `<p>${rt3}</p>`
            }
            xhttp3.open("GET", `tickers_2days/info/${name.toLowerCase()}.txt`, true);
            xhttp3.send();


        }
        xhttp.open("GET", `tickers_2days/tickers/sent_${name}.txt`, true);
        xhttp.send();
      }



      catch{
            var rt = 0
            ////console.log(rt)
            var styleSheet = document.createElement("style")
            styleSheet.innerText += 
            `#blhigh${si}{
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

            if(si == 1){
              var csi = 0
            }


            if (parseFloat(rt) > 0){
                ////console.log(`SISISISISISISISIS: conthigh${si}`)
                document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
                document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
                document.getElementById(`senthigh${si}`).style.width = (rt*6+"%");
                document.getElementById(`senthigh${si}`).style.left = "28%";
                document.getElementById(`blhigh${si}`).style.left = 25-((rt*6)-1)+"%";
                document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";
                document.getElementById(`mchigh${si}`).style.marginLeft = "24%";
                
            }
            else if (parseFloat(rt) < 0){

                ////console.log(`SISISISISISISISIS: conthigh${si}`)

                document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
                document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
                //document.getElementById(`nc`).innerHTML = `<div id='newshigh${si}'>${tc1}</div>`

                document.getElementById(`blhigh${si}`).style.left = 25-((-rt*6)-1)+"%";

                document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";

                document.getElementById(`mchigh${si}`).style.marginLeft = "24%";

                document.getElementById(`senthigh${si}`).style.width = (-rt*6)+"%";
                document.getElementById(`senthigh${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`senthigh${si}`).style.left = (28 - (-rt*6)+"%");
                ////console.log(-rt+"%")
                document.getElementById(`senthigh${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
              document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
              document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
              //document.getElementById(`nc`).innerHTML = `<div id='newshigh${si}'>${tc1}</div>`

              document.getElementById(`blhigh${si}`).style.left = 25-((-rt*6)-1)+"%";

              document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";

              document.getElementById(`mchigh${si}`).style.marginLeft = "24%";

              document.getElementById(`senthigh${si}`).style.width = (-rt*6)+"%";
              document.getElementById(`senthigh${si}`).style.borderRadius = "4px 0px 0px 4px"

              document.getElementById(`senthigh${si}`).style.left = (28 - (-rt*6)+"%");
              //console.log(-rt+"%")
              document.getElementById(`senthigh${si}`).style.background = "gray";
            }


            if(si == 0){
              document.getElementById(`conthigh${si}`).style.marginTop = "12%";
            }

            document.getElementById(`pophigh${si}`).style.display = "block"
            document.getElementById(`pophigh${si}`).innerHTML = "0"

            document.getElementById(`infohigh${si}`).innerHTML = `no info`
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
            `#blhigh${si}{
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

            if(si == 1){
              var csi = 0
            }


            if (parseFloat(rt) > 0){
                //console.log(`SISISISISISISISIS: conthigh${si}`)
                document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
                document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
                document.getElementById(`senthigh${si}`).style.width = (rt*6+"%");
                document.getElementById(`senthigh${si}`).style.left = "12%";
                document.getElementById(`blhigh${si}`).style.left = 9-((rt*6)-1)+"%";
                document.getElementById(`mchigh${si}`).style.marginLeft = "15%";
                document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";
                
            }
            else if (parseFloat(rt) < 0){
                //console.log(`SISISISISISISISIS: conthigh${si}`)

                document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
                document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
                //document.getElementById(`nc`).innerHTML = `<div id='newshigh${si}'>${tc1}</div>`

                document.getElementById(`blhigh${si}`).style.left = 9-((-rt*6)-1)+"%";
                //document.getElementById(`blcu${si}`).style.paddingRight = "0";
                //document.getElementById(`blcu${si}`).style.paddingLeft = "0%";

                document.getElementById(`mchigh${si}`).style.marginLeft = "15%";

                document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";

                document.getElementById(`senthigh${si}`).style.width = (-rt*6)+"%";
                document.getElementById(`senthigh${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`senthigh${si}`).style.left = (12 - (-rt*6)+"%");
                //console.log(-rt+"%")
                document.getElementById(`senthigh${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
              document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
              document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
              //document.getElementById(`nc`).innerHTML = `<div id='newshigh${si}'>${tc1}</div>`

              document.getElementById(`senthigh${si}`).style.left = "12%";
              document.getElementById(`blhigh${si}`).style.left = 9-((rt*6)-1)+"%";

              document.getElementById(`mchigh${si}`).style.marginLeft = "15%";
              document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";

              document.getElementById(`senthigh${si}`).style.width = (-rt*6)+"%";
              document.getElementById(`senthigh${si}`).style.borderRadius = "4px 0px 0px 4px"

              document.getElementById(`senthigh${si}`).style.background = "gray";
            }


            if(si == 0){
              document.getElementById(`conthigh${si}`).style.marginTop = "12%";
            }

            var xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
              var rt2 = this.responseText
              if (parseInt(rt2) == 200){
                  rt2 = "200+"
              }
              document.getElementById(`pophigh${si}`).style.display = "inline-block"
              document.getElementById(`pophigh${si}`).innerHTML = rt2+" mentions"
            }
            xhttp2.open("GET", `tickers_2days/pop/${name}.txt`, true);
            xhttp2.send();


            var xhttp3 = new XMLHttpRequest();
            xhttp3.onload = function() {
                var rt3 = this.responseText
                document.getElementById(`infohigh${si}`).innerHTML = `<p>${rt3}</p>`
            }
            xhttp3.open("GET", `tickers_2days/info/${name.toLowerCase()}.txt`, true);
            xhttp3.send();


        }
        xhttp.open("GET", `tickers_2days/tickers/sent_${name}.txt`, true);
        xhttp.send();
      }



      catch{
            var rt = 0
            //console.log(rt)
            var styleSheet = document.createElement("style")
            styleSheet.innerText += 
            `#blhigh${si}{
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

            if(si == 1){
              var csi = 0
            }


            if (parseFloat(rt) > 0){
                document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
                document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
                document.getElementById(`senthigh${si}`).style.width = (rt*6+"%");
                document.getElementById(`senthigh${si}`).style.left = "12%";
                document.getElementById(`blhigh${si}`).style.left = 9-((rt*6)-1)+"%";
                document.getElementById(`mchigh${si}`).style.marginLeft = "15%";
                document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";
                
            }
            else if (parseFloat(rt) < 0){

                //console.log(`SISISISISISISISIS: conthigh${si}`)

                document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
                document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
                //document.getElementById(`nc`).innerHTML = `<div id='newshigh${si}'>${tc1}</div>`

                document.getElementById(`blhigh${si}`).style.left = 9-((-rt*6)-1)+"%";
                //document.getElementById(`blcu${si}`).style.paddingRight = "0";
                //document.getElementById(`blcu${si}`).style.paddingLeft = "0%";

                document.getElementById(`mchigh${si}`).style.marginLeft = "15%";

                document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";

                document.getElementById(`senthigh${si}`).style.width = (-rt*6)+"%";
                document.getElementById(`senthigh${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`senthigh${si}`).style.left = (12 - (-rt*6)+"%");
                //console.log(-rt+"%")
                document.getElementById(`senthigh${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
              document.getElementById(`overconthigh`).innerHTML += `<div class="conthigh50" id="conthigh${si}"><img src="logos/${name}.jpg" class="iconhigh" id="iconhigh${si}" width="30px"><div class='hchigh50'><h2 class='snhigh'>${name.toUpperCase()}: <span class="snhightext" id="infohigh${si}"></span></h2></div><div class="mchigh50" id="mchigh${si}"><div class="senthigh50" id='senthigh${si}'>&nbsp;</div><div class="blhigh50" id='blhigh${si}'>&nbsp;</div></div><button onclick="dn3('newshigh${si}', '${name}')" class="dnbhigh50" id='dnbhigh${si}'>Mentions</button><div class="pop" id="pophigh${si}"></div></div>`
              document.getElementById(`overconthigh`).innerHTML += `<hr class="hrc"></hr>`
              //document.getElementById(`nc`).innerHTML = `<div id='newshigh${si}'>${tc1}</div>`

              document.getElementById(`senthigh${si}`).style.left = "12%";
              document.getElementById(`blhigh${si}`).style.left = 9-((rt*6)-1)+"%";

              document.getElementById(`mchigh${si}`).style.marginLeft = "15%";
              document.getElementById(`dnbhigh${si}`).style.marginLeft = "1%";

              document.getElementById(`senthigh${si}`).style.width = (-rt*6)+"%";
              document.getElementById(`senthigh${si}`).style.borderRadius = "4px 0px 0px 4px"

              document.getElementById(`senthigh${si}`).style.background = "gray";
            }


            if(si == 0){
              document.getElementById(`conthigh${si}`).style.marginTop = "12%";
            }

            document.getElementById(`pophigh${si}`).style.display = "inline-block"
            document.getElementById(`pophigh${si}`).innerHTML = "0"

            document.getElementById(`infohigh${si}`).innerHTML = `no info`
      }



    }

  }

