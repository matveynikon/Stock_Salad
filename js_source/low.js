  var na4 = true
  
  function dn4(news, stock){
    if (window.innerWidth <= 950) {
      var xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
          var tc1 = this.responseText
          document.getElementById(`nclow`).innerHTML = `<div id='${news}' class="news4">${tc1}</div>`
          if (na4 == false){
              document.getElementById(news).style.display = "none";
              na4 = true
          }
          else{
              na4 = false
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

          document.getElementById(`nclow`).innerHTML = `<div id='${news}' class="news4">${tc1}</div>`
          if (na4 == false){
              document.getElementById(news).style.display = "none";
              na4 = true
          }
          else{
              na4 = false
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



  function loadis4(si, name){
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
            `#bllow${si}{
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

            if(si == 0){
              var csi = 0
            }


            if (parseFloat(rt) > 0){
                ////console.log(`rt rt rt ------: ${rt}`)
                document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
                document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
                document.getElementById(`sentlow${si}`).style.width = (rt*6+"%");
                document.getElementById(`sentlow${si}`).style.left = "28%";
                document.getElementById(`bllow${si}`).style.left = 25-((rt*6)-1)+"%";
                document.getElementById(`dnblow${si}`).style.marginLeft = "1%";
                document.getElementById(`mclow${si}`).style.marginLeft = "24%";
                
            }
            else if (parseFloat(rt) < 0){
                ////console.log(`rt rt rt: ${rt}`)

                document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
                document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
                //document.getElementById(`nc`).innerHTML = `<div id='newslow${si}'>${tc1}</div>`

                document.getElementById(`bllow${si}`).style.left = 25-((-rt*6)-1)+"%";

                document.getElementById(`dnblow${si}`).style.marginLeft = "1%";

                document.getElementById(`mclow${si}`).style.marginLeft = "24%";

                document.getElementById(`sentlow${si}`).style.width = (-rt*6)+"%";
                document.getElementById(`sentlow${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`sentlow${si}`).style.left = (28 - (-rt*6)+"%");
                ////console.log(-rt+"%")
                document.getElementById(`sentlow${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
              document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
              document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
              //document.getElementById(`nc`).innerHTML = `<div id='newslow${si}'>${tc1}</div>`

              document.getElementById(`bllow${si}`).style.left = 25-((-rt*6)-1)+"%";

              document.getElementById(`dnblow${si}`).style.marginLeft = "1%";

              document.getElementById(`mclow${si}`).style.marginLeft = "24%";

              document.getElementById(`sentlow${si}`).style.width = (-rt*6)+"%";
              document.getElementById(`sentlow${si}`).style.borderRadius = "4px 0px 0px 4px"

              document.getElementById(`sentlow${si}`).style.left = (28 - (-rt*6)+"%");
              ////console.log(-rt+"%")
              document.getElementById(`sentlow${si}`).style.background = "gray";
            }


            if(si == 0){
              document.getElementById(`contlow${si}`).style.marginTop = "12%";
            }

            var xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
              var rt2 = this.responseText
              if (parseInt(rt2) == 200){
                  rt2 = "200+"
              }
              document.getElementById(`poplow${si}`).style.display = "block"
              document.getElementById(`poplow${si}`).innerHTML = rt2+" mentions"
            }
            xhttp2.open("GET", `tickers_2days/pop/${name}.txt`, true);
            xhttp2.send();


            var xhttp3 = new XMLHttpRequest();
            xhttp3.onload = function() {
                var rt3 = this.responseText
                document.getElementById(`infolow${si}`).innerHTML = `<p>${rt3}</p>`
            }
            xhttp3.open("GET", `tickers_2days/info/${name.toLowerCase()}.txt`, true);
            xhttp3.send();


        }
        xhttp.open("GET", `tickers_2days/tickers/sent_${name}.txt`, true);
        xhttp.send();
      }



      catch{
            var rt = 0
            var styleSheet = document.createElement("style")
            styleSheet.innerText += 
            `#bllow${si}{
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

            if(si == 0){
              var csi = 0
            }


            if (parseFloat(rt) > 0){
                document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
                document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
                document.getElementById(`sentlow${si}`).style.width = (rt*6+"%");
                document.getElementById(`sentlow${si}`).style.left = "28%";
                document.getElementById(`bllow${si}`).style.left = 25-((rt*6)-1)+"%";
                document.getElementById(`dnblow${si}`).style.marginLeft = "1%";
                document.getElementById(`mclow${si}`).style.marginLeft = "24%";
                
            }
            else if (parseFloat(rt) < 0){
                ////console.log(`rt rt rt: contlow${si}`)

                document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
                document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
                //document.getElementById(`nc`).innerHTML = `<div id='newslow${si}'>${tc1}</div>`

                document.getElementById(`bllow${si}`).style.left = 25-((-rt*6)-1)+"%";

                document.getElementById(`dnblow${si}`).style.marginLeft = "1%";

                document.getElementById(`mclow${si}`).style.marginLeft = "24%";

                document.getElementById(`sentlow${si}`).style.width = (-rt*6)+"%";
                document.getElementById(`sentlow${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`sentlow${si}`).style.left = (28 - (-rt*6)+"%");
                //console.log(-rt+"%")
                document.getElementById(`sentlow${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
              document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
              document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
              //document.getElementById(`nc`).innerHTML = `<div id='newslow${si}'>${tc1}</div>`

              document.getElementById(`bllow${si}`).style.left = 25-((-rt*6)-1)+"%";

              document.getElementById(`dnblow${si}`).style.marginLeft = "1%";

              document.getElementById(`mclow${si}`).style.marginLeft = "24%";

              document.getElementById(`sentlow${si}`).style.width = (-rt*6)+"%";
              document.getElementById(`sentlow${si}`).style.borderRadius = "4px 0px 0px 4px"

              document.getElementById(`sentlow${si}`).style.left = (28 - (-rt*6)+"%");
              //console.log(-rt+"%")
              document.getElementById(`sentlow${si}`).style.background = "gray";
            }


            if(si == 0){
              document.getElementById(`contlow${si}`).style.marginTop = "12%";
            }

            document.getElementById(`poplow${si}`).style.display = "block"
            document.getElementById(`poplow${si}`).innerHTML = "0"

            document.getElementById(`infolow${si}`).innerHTML = "no info"

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
            `#bllow${si}{
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

            if(si == 0){
              var csi = 0
            }


            if (parseFloat(rt) > 0){
                //console.log(`rt rt rt ------: ${rt}`)
                document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
                document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
                document.getElementById(`sentlow${si}`).style.width = (rt*6+"%");
                document.getElementById(`sentlow${si}`).style.left = "12%";
                document.getElementById(`bllow${si}`).style.left = 9-((rt*6)-1)+"%";
                document.getElementById(`mclow${si}`).style.marginLeft = "15%";
                document.getElementById(`dnblow${si}`).style.marginLeft = "1%";
                
            }
            else if (parseFloat(rt) < 0){
                //console.log(`rt rt rt: ${rt}`)

                document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
                document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
                //document.getElementById(`nc`).innerHTML = `<div id='newslow${si}'>${tc1}</div>`

                document.getElementById(`bllow${si}`).style.left = 9-((-rt*6)-1)+"%";
                //document.getElementById(`blcu${si}`).style.paddingRight = "0";
                //document.getElementById(`blcu${si}`).style.paddingLeft = "0%";

                document.getElementById(`mclow${si}`).style.marginLeft = "15%";

                document.getElementById(`dnblow${si}`).style.marginLeft = "1%";

                document.getElementById(`sentlow${si}`).style.width = (-rt*6)+"%";
                document.getElementById(`sentlow${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`sentlow${si}`).style.left = (12 - (-rt*6)+"%");
                //console.log(-rt+"%")
                document.getElementById(`sentlow${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
              document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
              document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
              //document.getElementById(`nc`).innerHTML = `<div id='newslow${si}'>${tc1}</div>`

              document.getElementById(`sentlow${si}`).style.left = "12%";
              document.getElementById(`bllow${si}`).style.left = 9-((rt*6)-1)+"%";

              document.getElementById(`mclow${si}`).style.marginLeft = "15%";
              document.getElementById(`dnblow${si}`).style.marginLeft = "1%";

              document.getElementById(`sentlow${si}`).style.width = (-rt*6)+"%";
              document.getElementById(`sentlow${si}`).style.borderRadius = "4px 0px 0px 4px"

              document.getElementById(`sentlow${si}`).style.background = "gray";

            }


            if(si == 0){
              document.getElementById(`contlow${si}`).style.marginTop = "12%";
            }

            var xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
              var rt2 = this.responseText
              if (parseInt(rt2) == 200){
                  rt2 = "200+"
              }
              document.getElementById(`poplow${si}`).style.display = "inline-block"
              document.getElementById(`poplow${si}`).innerHTML = rt2+" mentions"
            }
            xhttp2.open("GET", `tickers_2days/pop/${name}.txt`, true);
            xhttp2.send();


            var xhttp3 = new XMLHttpRequest();
            xhttp3.onload = function() {
                var rt3 = this.responseText
                document.getElementById(`infolow${si}`).innerHTML = `<p>${rt3}</p>`
            }
            xhttp3.open("GET", `tickers_2days/info/${name.toLowerCase()}.txt`, true);
            xhttp3.send();


        }
        xhttp.open("GET", `tickers_2days/tickers/sent_${name}.txt`, true);
        xhttp.send();
      }



      catch{
            var rt = 0
            var styleSheet = document.createElement("style")
            styleSheet.innerText += 
            `#bllow${si}{
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

            if(si == 0){
              var csi = 0
            }


            if (parseFloat(rt) > 0){
                document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
                document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
                document.getElementById(`sentlow${si}`).style.width = (rt*6+"%");
                document.getElementById(`sentlow${si}`).style.left = "12%";
                document.getElementById(`bllow${si}`).style.left = 9-((rt*6)-1)+"%";
                document.getElementById(`mclow${si}`).style.marginLeft = "15%";
                document.getElementById(`dnblow${si}`).style.marginLeft = "1%";
                
            }
            else if (parseFloat(rt) < 0){
                //console.log(`rt rt rt: contlow${si}`)

                document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
                document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
                //document.getElementById(`nc`).innerHTML = `<div id='newslow${si}'>${tc1}</div>`

                document.getElementById(`bllow${si}`).style.left = 9-((-rt*6)-1)+"%";
                //document.getElementById(`blcu${si}`).style.paddingRight = "0";
                //document.getElementById(`blcu${si}`).style.paddingLeft = "0%";

                document.getElementById(`mclow${si}`).style.marginLeft = "15%";

                document.getElementById(`dnblow${si}`).style.marginLeft = "1%";

                document.getElementById(`sentlow${si}`).style.width = (-rt*6)+"%";
                document.getElementById(`sentlow${si}`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`sentlow${si}`).style.left = (12 - (-rt*6)+"%");
                //console.log(-rt+"%")
                document.getElementById(`sentlow${si}`).style.background = "green";


            }
            else if (parseFloat(rt) == 0){
              document.getElementById(`overcontlow`).innerHTML += `<div class="contlow50" id="contlow${si}"><img src="logos/${name}.jpg" class="iconlow" id="iconlow${si}" width="30px"><div class='hclow50'><h2 class='snlow'>${name.toUpperCase()}: <span class="snlowtext" id="infolow${si}"></span></h2></div><div class="mclow50" id="mclow${si}"><div class="sentlow50" id='sentlow${si}'>&nbsp;</div><div class="bllow50" id='bllow${si}'>&nbsp;</div></div><button onclick="dn4('newslow${si}', '${name}')" class="dnblow50" id='dnblow${si}'>Mentions</button><div class="pop" id="poplow${si}"></div></div>`
              document.getElementById(`overcontlow`).innerHTML += `<hr class="hrc"></hr>`
              //document.getElementById(`nc`).innerHTML = `<div id='newslow${si}'>${tc1}</div>`

              document.getElementById(`sentlow${si}`).style.left = "12%";
              document.getElementById(`bllow${si}`).style.left = 9-((rt*6)-1)+"%";

              document.getElementById(`mclow${si}`).style.marginLeft = "15%";
              document.getElementById(`dnblow${si}`).style.marginLeft = "1%";

              document.getElementById(`sentlow${si}`).style.width = (-rt*6)+"%";
              document.getElementById(`sentlow${si}`).style.borderRadius = "4px 0px 0px 4px"

              document.getElementById(`sentlow${si}`).style.background = "gray";
            }


            if(si == 0){
              document.getElementById(`contlow${si}`).style.marginTop = "12%";
            }

            document.getElementById(`poplow${si}`).style.display = "inline-block"
            document.getElementById(`poplow${si}`).innerHTML = "0"

            document.getElementById(`infolow${si}`).innerHTML = "no info"

      }


    }

    if (si == 0){
      document.getElementById("ldi").style.display = "none";
      document.getElementsByTagName("body")[0].style.overflowY = "visible"
    }

  }


