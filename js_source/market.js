
      function market_av(mav){

        if (window.innerWidth <= 950) {

            var styleSheet2 = document.createElement("style")
            styleSheet2.innertext += 
            `#blav{
                position: relative;
                background: gray;
                border-radius: 2px;
                padding-top: 5%;
                padding-bottom: 5%;
                display: inline-block;
                z-index: 20000;
                left: 49%;
                width: 0.1%;
            }`;
            document.head.appendChild(styleSheet2)


            if (parseFloat(mav) < 0){
                document.getElementById(`overcontav`).innerHTML += `<div class="contav" id="contav"><div class='hcav'><h2 class='snav'>S&P&nbsp;500:</h2>  </div><div class="mcav" id="mcav"><div class="sentav" id='sentav'>&nbsp;</div><div class="blav" id='blav'>&nbsp;</div></div> <div class='hcdesc'><h2 class='sndesc' id="sndesc"></h2></div> </div>`

                document.getElementById(`blav`).style.left = "36%";
                document.getElementById(`blav`).style.background = "gray"
                document.getElementById(`blav`).style.display = "inline-block"
                document.getElementById(`blav`).style.borderRadius = "2px"
                document.getElementById(`blav`).style.paddingTop = "5%"
                document.getElementById(`blav`).style.paddingBottom = "5%"
                document.getElementById(`blav`).style.position = "relative"

                document.getElementById(`mcav`).style.marginLeft = "4.8%";


                document.getElementById(`sentav`).style.width = (-mav*6)+"%";
                document.getElementById(`sentav`).style.borderRadius = "0px 4px 4px 0px"

                document.getElementById(`sentav`).style.left = 36+(-mav*6)+"%"
                document.getElementById(`sentav`).style.background = "red";
            }

            else if (parseFloat(mav) > 0){

                document.getElementById(`overcontav`).innerHTML += `<div class="contav" id="contav"><div class='hcav'><h2 class='snav'>S&P&nbsp;500:</h2>  </div><div class="mcav" id="mcav"><div class="sentav" id='sentav'>&nbsp;</div><div class="blav" id='blav'>&nbsp;</div></div> <div class='hcdesc'><h2 class='sndesc' id="sndesc"></h2></div> </div>`

                document.getElementById(`blav`).style.left = 49.5-((mav*6)-1)+"%";
                document.getElementById(`blav`).style.background = "gray"
                document.getElementById(`blav`).style.display = "inline-block"
                document.getElementById(`blav`).style.borderRadius = "2px"
                document.getElementById(`blav`).style.paddingTop = "5%"
                document.getElementById(`blav`).style.paddingBottom = "5%"
                document.getElementById(`blav`).style.position = "relative"

                document.getElementById(`mcav`).style.marginLeft = "4.8%";


                document.getElementById(`sentav`).style.width = (mav*6)+"%";
                document.getElementById(`sentav`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`sentav`).style.left = (51 + 0 - (mav*6)+"%");
                document.getElementById(`sentav`).style.background = "green";


            }
            else if (parseFloat(mav) == 0){
                document.getElementById(`overcontav`).innerHTML += `<div class="contav" id="contav"><div class='hcav'><h2 class='snav'>S&P&nbsp;500:</h2>  </div><div class="mcav" id="mcav"><div class="sentav" id='sentav'>&nbsp;</div><div class="blav" id='blav'>&nbsp;</div></div> <div class='hcdesc'><h2 class='sndesc' id="sndesc"></h2></div> </div>`

                document.getElementById(`blav`).style.left = 49.5-((mav*6)-1)+"%";
                document.getElementById(`blav`).style.background = "gray"
                document.getElementById(`blav`).style.display = "inline-block"
                document.getElementById(`blav`).style.borderRadius = "2px"
                document.getElementById(`blav`).style.paddingTop = "5%"
                document.getElementById(`blav`).style.paddingBottom = "5%"
                document.getElementById(`blav`).style.position = "relative"

                document.getElementById(`mcav`).style.marginLeft = "4.8%";


                document.getElementById(`sentav`).style.width = (mav*6)+"%";
                document.getElementById(`sentav`).style.borderRadius = "4px 0px 0px 4px"

                document.getElementById(`sentav`).style.left = (51 + 0 - (mav*6)+"%");
                document.getElementById(`sentav`).style.background = "gray";
            }

        }
        else{
            var styleSheet2 = document.createElement("style")
            styleSheet2.innertext += 
            `#blav{
                position: relative;
                padding-right: 0%;
                background: gray;
                border-radius: 2px;
                padding-top: 5%;
                padding-bottom: 5%;
                display: inline-block;
                z-index: 20000;
                left: 49%;
            }`;
            document.head.appendChild(styleSheet2)


            if (parseFloat(mav) < 0){
                document.getElementById(`overcontav`).innerHTML += `<div class="contav" id="contav"><div class='hcav'><h2 class='snav'>S&P&nbsp;500:</h2>  </div><div class="mcav" id="mcav"><div class="sentav" id='sentav'>&nbsp;</div><div class="blav" id='blav'>&nbsp;</div></div> <div class='hcdesc'><h2 class='sndesc' id="sndesc"></h2></div> </div>`
                document.getElementById(`sentav`).style.width = (-mav*6+"%");
                document.getElementById(`blav`).style.left = 59.15-(-mav*6)+"%";
                document.getElementById(`blav`).style.background = "gray"
                document.getElementById(`blav`).style.display = "inline-block"
                document.getElementById(`blav`).style.borderRadius = "2px"
                document.getElementById(`blav`).style.paddingTop = "5%"
                document.getElementById(`blav`).style.paddingBottom = "5%"
                document.getElementById(`blav`).style.position = "relative"
                document.getElementById(`blav`).style.paddingRight = "0.6%"
                document.getElementById(`sentav`).style.background = "red";
                document.getElementById(`sentav`).style.left = "60.15%"
            }

            else if (parseFloat(mav) > 0){

                document.getElementById(`overcontav`).innerHTML += `<div class="contav" id="contav"><div class='hcav'><h2 class='snav'>S&P&nbsp;500:</h2>  </div><div class="mcav" id="mcav"><div class="sentav" id='sentav'>&nbsp;</div><div class="blav" id='blav'>&nbsp;</div></div> <div class='hcdesc'><h2 class='sndesc' id="sndesc"></h2></div> </div>`

                document.getElementById(`blav`).style.left = 52.55-((mav*6)-1)+"%";
                document.getElementById(`blav`).style.background = "gray"
                document.getElementById(`blav`).style.display = "inline-block"
                document.getElementById(`blav`).style.borderRadius = "2px"
                document.getElementById(`blav`).style.paddingTop = "5%"
                document.getElementById(`blav`).style.paddingBottom = "5%"
                document.getElementById(`blav`).style.position = "relative"
                document.getElementById(`blav`).style.paddingRight = "0.6%"

                document.getElementById(`mcav`).style.marginLeft = "4.8%";


                document.getElementById(`sentav`).style.width = (mav*6)+"%";
                document.getElementById(`sentav`).style.borderRadius = "8px 0px 0px 8px"

                document.getElementById(`sentav`).style.left = (53.55 + 0 - (mav*6)+"%");
                document.getElementById(`sentav`).style.background = "green";


            }
            else if (parseFloat(mav) == 0){
                document.getElementById(`overcontav`).innerHTML += `<div class="contav" id="contav"><div class='hcav'><h2 class='snav'>S&P&nbsp;500:</h2>  </div><div class="mcav" id="mcav"><div class="sentav" id='sentav'>&nbsp;</div><div class="blav" id='blav'>&nbsp;</div></div> <div class='hcdesc'><h2 class='sndesc' id="sndesc"></h2></div> </div>`

                document.getElementById(`blav`).style.left = 52.55-((mav*6)-1)+"%";
                document.getElementById(`blav`).style.background = "gray"
                document.getElementById(`blav`).style.display = "inline-block"
                document.getElementById(`blav`).style.borderRadius = "2px"
                document.getElementById(`blav`).style.paddingTop = "5%"
                document.getElementById(`blav`).style.paddingBottom = "5%"
                document.getElementById(`blav`).style.position = "relative"
                document.getElementById(`blav`).style.paddingRight = "0.6%"

                document.getElementById(`mcav`).style.marginLeft = "4.8%";


                document.getElementById(`sentav`).style.width = (mav*6)+"%";
                document.getElementById(`sentav`).style.borderRadius = "8px 0px 0px 8px"

                document.getElementById(`sentav`).style.left = (53.55 + 0 - (mav*6)+"%");
                document.getElementById(`sentav`).style.background = "gray";
            }


        }

        if (mav < 0){
            if (mav > -0.5){
                document.getElementById("sndesc").innerHTML = "Slightly&nbsp;Bearish"
            }
            else if (mav <= -0.5){
                document.getElementById("sndesc").innerHTML = "Bearish"
            }
            else if (mav <= -1.5){
                document.getElementById("sndesc").innerHTML = "Very Bearish"
            }
        }
        else if (mav > 0){
            if (mav < 0.5){
                document.getElementById("sndesc").innerHTML = "Slightly&nbsp;Bullish"
            }
            else if (mav >= 0.5){
                document.getElementById("sndesc").innerHTML = "Bullish"
            }
            else if (mav >= 1.5){
                document.getElementById("sndesc").innerHTML = "Very Bullish"
            }
        }

      }

